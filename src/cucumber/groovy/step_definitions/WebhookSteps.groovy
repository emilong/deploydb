this.metaClass.mixin(cucumber.api.groovy.EN)


import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.ObjectMapper
import deploydb.ModelLoader
import deploydb.models.Environment
import deploydb.models.Webhook.Webhook
import deploydb.registry.ModelRegistry
import org.joda.time.DateTime
import cucumber.api.DataTable

import deploydb.WebhookManager
import webhookTestServer.models.RequestWebhookObject

Given(~/^a (.*?) webhook "(.*?)" configuration:$/) { String webhookType,
                                                     String eventType, String configBody ->

    List<String> paths = getUrlPathFromWebhookConfigBody(configBody, eventType)

    withWebhookManager { WebhookManager webhookManager, RequestWebhookObject requestWebhookObject ->
        /*
         * Save the configured webhook uri(s) in requestWebhookObject. These paths will be compared
         * when deploydb invokes webhooks.
         */
        requestWebhookObject.addConfiguredUriPaths(paths)

        /*
         * Load the webhook configuration in webhookManager
        */

        ModelLoader<Webhook> webhookLoader = new ModelLoader<>(Webhook.class)
        webhookManager.webhook = webhookLoader.loadFromString(configBody)

        /*
         * Set the content type from the webhook and the event type. The content type will be
         * checked when deploydb invokes webhooks
         */
        requestWebhookObject.contentTypeParam = "application/vnd.deploydb."+
                                                 webhookType+eventType+".v1+json"
    }
}

Given(~/^an (.*?) environment webhook "(.*?)" configuration named "(.*?)":$/) {String webhookType,
                                                                               String eventType,
                                                                               String envIdent,
                                                                               String configBody ->

    ModelLoader<Environment> environmentLoader = new ModelLoader<>(Environment.class)
    Environment a = environmentLoader.loadFromString(configBody)

    List<String> paths = getUrlPathFromWebhook(a.webhook, configBody, eventType)

    /*
     * Save the configured webhook uri(s) in requestWebhookObject. These paths will be compared
     * when deploydb invokes webhooks.
     */
    withWebhookManager { WebhookManager webhookManager, RequestWebhookObject requestWebhookObject ->
        requestWebhookObject.addConfiguredUriPaths(paths)
        /*
         * Set the content type from the webhook and the event type. The content type will be
         * checked when deploydb invokes webhooks
         */
        requestWebhookObject.contentTypeParam = "application/vnd.deploydb."+
                webhookType+eventType+".v1+json"
    }

    /*
     * Load the environment configuration
     */
    withEnvironmentRegistry { ModelRegistry<Environment> environmentRegistry ->
        a.ident = envIdent
        environmentRegistry.put(envIdent, a)
    }
}

When (~/^I POST to "(.*?)" with an artifact/) { String path ->
    String requestBody = """{
"group" : "com.example.cucumber",
"name" : "cukes",
"version" : "1.0.1",
"sourceUrl" : "http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar"
}"""

    response = postJsonToPath(path, requestBody, false)
}

Then(~/^the webhook should be invoked with the JSON:$/) { String expectedMessageBody ->
    sleep(1000)
    withRequestWebhookObject { RequestWebhookObject requestWebhookObject ->
        ObjectMapper mapper = new ObjectMapper()

        String requestMessageBody = requestWebhookObject.getRequestMessageBody()

        templateVariables = [
                'created_timestamp' : DateTime.now(),
        ]
        expectedMessageBody = processTemplate(expectedMessageBody, templateVariables)

        JsonNode expectedNode = mapper.readTree(expectedMessageBody)
        JsonNode requestNode = mapper.readTree(requestMessageBody)

        assert expectedNode == requestNode
    }
}

Then(~/^the webhook ([1-9][0-9]*) should be invoked with the JSON:$/) { int webhookNumber, String expectedMessageBody ->
    sleep(1000)
    withRequestWebhookObject { RequestWebhookObject requestWebhookObject ->
        ObjectMapper mapper = new ObjectMapper()

        String requestMessageBody = requestWebhookObject.getRequestMessageBodies()[webhookNumber -1]

        templateVariables = [
                'created_timestamp' : DateTime.now(),
        ]
        expectedMessageBody = processTemplate(expectedMessageBody, templateVariables)

        JsonNode expectedNode = mapper.readTree(expectedMessageBody)
        JsonNode requestNode = mapper.readTree(requestMessageBody)

        assert expectedNode == requestNode
    }
}



And (~/the webhook should have the headers:$/){ DataTable headers ->

    withRequestWebhookObject { RequestWebhookObject requestWebhookObject ->
        List<List<String>> rawHeaders = headers.raw()
        Boolean foundHeader = true
        rawHeaders.subList(1, rawHeaders.size()).each { List<String> row ->
            foundHeader &= requestWebhookObject.validateHeader(row[0], row[1])
        }

        assert foundHeader
    }
}
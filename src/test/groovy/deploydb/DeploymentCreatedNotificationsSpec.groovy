package deploydb

import spock.lang.*
import dropwizardintegtest.IntegrationModelHelper
import dropwizardintegtest.IntegrationRestApiClient

class DeploymentCreatedNotificationsSpec extends Specification {

    IntegrationTestAppHelper integAppHelper = new IntegrationTestAppHelper()
    IntegrationRestApiClient integrationRestApiClient = new IntegrationRestApiClient()
    IntegrationModelHelper integModelHelper = new  IntegrationModelHelper(integrationRestApiClient)
    private WebhooksModelConfigHelper mcfgHelper = new WebhooksModelConfigHelper()

    def setup() {
        mcfgHelper.setup()
        integAppHelper.startAppWithConfiguration('deploydb.spock.yml')
        integAppHelper.startWebhookTestServerWithConfiguration('webhookTestServer.example.yml')
        integAppHelper.webhookRunner.requestWebhookObject.contentTypeParam =
                "application/vnd.deploydb.deploymentcreated.v1+json"
        integAppHelper.runner.getApplication().configuration.configDirectory = mcfgHelper.baseCfgDirName
    }

    def cleanup() {
        integAppHelper.stopApp()
        integAppHelper.stopWebhookTestServerApp()
        mcfgHelper.cleanup()
    }

    def "no webhook should be called when you create an artifact with no webhook configuration" () {

        given:
        // Create the required config
        mcfgHelper.createServicePromotionPipelineModelsConfigFiles()
        mcfgHelper.createEnvironmentNoWebhooksConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        when:
        boolean success = integModelHelper.sendCreateArtifact()

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 0
    }


    def "webhook should be called when you create an artifact" () {

        given:
        // Create the required config
        mcfgHelper.createServicePromotionPipelineModelsConfigFiles()
        mcfgHelper.createWebhookConfigFile()
        mcfgHelper.createEnvironmentNoWebhooksConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/notify-deployment-created/build"]


        when:
        boolean success = integModelHelper.sendCreateArtifact()

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 1
    }

    def "environment webhook should be called when you create an artifact" () {

        given:
        // create the required config
        mcfgHelper.createServicePromotionPipelineModelsConfigFiles()
        mcfgHelper.createEnvironmentConfigFile()

        // load up the config
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/basicEnv-deploy-created/build"]

        when:
        boolean success = integModelHelper.sendCreateArtifact()

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 1
    }

    def "both global and environment webhooks should be called when you create an artifact" () {

        given:
        // create the required config
        mcfgHelper.createServicePromotionPipelineModelsConfigFiles()
        mcfgHelper.createWebhookConfigFile()
        mcfgHelper.createEnvironmentConfigFile()

        // load up the config
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/notify-deployment-created/build", "/job/basicEnv-deploy-created/build"]

        when:
        boolean success = integModelHelper.sendCreateArtifact()

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 2
    }

    def "multiple webhook should be called when you create an artifact" () {

        given:
        // Create the required config
        mcfgHelper.createServicePromotionPipelineModelsConfigFiles()
        mcfgHelper.createMultipleWebhooksConfigFile()
        mcfgHelper.createEnvironmentNoWebhooksConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/notify-deployment-created-1/build", "/job/notify-deployment-created-2/build"]

        when:
        boolean success = integModelHelper.sendCreateArtifact()

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 2
    }

    def "multiple environment webhook should be called when you create an artifact" () {

        given:
        // create the required config
        mcfgHelper.createServicePromotionPipelineModelsConfigFiles()
        mcfgHelper.createMultipleWebhooksEnvironmentConfigFile()

        // load up the config
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/basicEnv-deploy-created-1/build", "/job/basicEnv-deploy-created-2/build"]

        when:
        boolean success = integModelHelper.sendCreateArtifact()

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 2
    }

    def "both multiple global and multiple environment webhooks should be called when you create an artifact" () {

        given:
        // create the required config
        mcfgHelper.createServicePromotionPipelineModelsConfigFiles()
        mcfgHelper.createMultipleWebhooksConfigFile()
        mcfgHelper.createMultipleWebhooksEnvironmentConfigFile()

        // load up the config
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/notify-deployment-created-1/build", "/job/notify-deployment-created-2/build",
                 "/job/basicEnv-deploy-created-1/build", "/job/basicEnv-deploy-created-2/build"]

        when:
        boolean success = integModelHelper.sendCreateArtifact()

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 4
    }
}

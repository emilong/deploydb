package deploydb

import com.github.lookout.whoas.HookRequest
import com.github.lookout.whoas.InMemoryQueue
import deploydb.mappers.DeploymentWebhookMapper
import spock.lang.*

class WebhookManagerSpec extends Specification {

    def "ensure constructor works"() {
        given:
        WebhookManager m

        when:
        m = new WebhookManager()

        then:
        m instanceof WebhookManager
    }

    def "running() should return false by default"() {
        given:
        WebhookManager m = new WebhookManager()

        expect:
        m.running == false
    }

    def "sendDeploymentWebhook() should return true if no webhooks are configured"() {
        given:
        WebhookManager m = new WebhookManager()

        expect:
        m.sendDeploymentWebhook("created", null, null, null) == true
    }

    def "sendDeploymentWebhook() should push correct hook requests when global webhooks are configured"() {

        given:
        deploydb.models.Webhook.Deployment webhookDeployment =
                new deploydb.models.Webhook.Deployment([],
                        ["http://www.localhost.com/test-build", "http://www.localhost.com/test1-build"],
                        [], [])
        WebhookManager m = new WebhookManager()
        m.queue = new InMemoryQueue()
        models.Webhook.Webhook gwh = new models.Webhook.Webhook(webhookDeployment, null)

        // mock the queue push
        int counter = 0
        m.queue.metaClass.push = {HookRequest hookRequest ->
            counter++
            true
        }

        when:
        m.sendDeploymentWebhook("created", gwh, null, new DeploymentWebhookMapper())

        then:
        counter == 2
    }

    def "sendDeploymentWebhook() should push correct hook requests when environment webhooks are configured"() {

        given:
        deploydb.models.Webhook.Deployment webhookDeployment =
                new deploydb.models.Webhook.Deployment([],
                        ["http://www.localhost.com/test-build", "http://www.localhost.com/test1-build"],
                        null, null)
        WebhookManager m = new WebhookManager()
        m.queue = new InMemoryQueue()
        models.Webhook.Webhook ewh = new models.Webhook.Webhook(webhookDeployment, null)

        // mock the queue push
        int counter = 0
        m.queue.metaClass.push = {HookRequest hookRequest ->
            counter++
            true
        }

        when:
        m.sendDeploymentWebhook("created", null, ewh, new DeploymentWebhookMapper())

        then:
        counter == 2
    }

    def "sendDeploymentWebhook() should push correct hook requests when both global and environment webhooks are configured"() {

        given:
        deploydb.models.Webhook.Deployment webhookDeployment =
                new deploydb.models.Webhook.Deployment([],
                        ["http://www.localhost.com/test-build", "http://www.localhost.com/test1-build"],
                        null, null)
        WebhookManager m = new WebhookManager()
        m.queue = new InMemoryQueue()
        models.Webhook.Webhook gwh = new models.Webhook.Webhook(webhookDeployment, null)
        models.Webhook.Webhook ewh = new models.Webhook.Webhook(webhookDeployment, null)

        // mock the queue push
        int counter = 0
        m.queue.metaClass.push = {HookRequest hookRequest ->
            counter++
            true
        }

        when:
        m.sendDeploymentWebhook("created", gwh, ewh, new DeploymentWebhookMapper())

        then:
        counter == 4
    }

    def "sendDeploymentWebhook() should push correct hook request when eventType is configured only in global webhooks"() {

        given:
        // webhook for "created"
        deploydb.models.Webhook.Deployment webhookDeployment =
                new deploydb.models.Webhook.Deployment(null,
                        ["http://www.localhost.com/test-build", "http://www.localhost.com/test1-build"],
                        null, null)
        WebhookManager m = new WebhookManager()
        m.queue = new InMemoryQueue()
        // environment webhook for "created"
        deploydb.models.Webhook.Deployment environWebhookDeployment =
                new deploydb.models.Webhook.Deployment(
                        ["http://www.localhost.com/test-build", "http://www.localhost.com/test1-build"],
                        null,
                        null, null)
        models.Webhook.Webhook gwh = new models.Webhook.Webhook(webhookDeployment, null)
        models.Webhook.Webhook ewh = new models.Webhook.Webhook(environWebhookDeployment, null)

        // mock the queue push
        int counter = 0
        m.queue.metaClass.push = {HookRequest hookRequest ->
            counter++
            true
        }

        when:
        m.sendDeploymentWebhook("created", gwh, ewh, new DeploymentWebhookMapper())

        then:
        counter == 2
    }

    def "sendDeploymentWebhook() should push correct hook request when eventType is configured only in environment webhooks"() {

        given:
        // webhook for "created"
        deploydb.models.Webhook.Deployment webhookDeployment =
                new deploydb.models.Webhook.Deployment(
                        ["http://www.localhost.com/test-build", "http://www.localhost.com/test1-build"],
                        null,
                        null, null)
        WebhookManager m = new WebhookManager()
        m.queue = new InMemoryQueue()
        // environment webhook for "created"
        deploydb.models.Webhook.Deployment environWebhookDeployment =
                new deploydb.models.Webhook.Deployment([],
                        ["http://www.localhost.com/test-build", "http://www.localhost.com/test1-build"],
                        null, null)

        models.Webhook.Webhook gwh = new models.Webhook.Webhook(webhookDeployment, null)
        models.Webhook.Webhook ewh = new models.Webhook.Webhook(environWebhookDeployment, null)

        // mock the queue push
        int counter = 0
        m.queue.metaClass.push = {HookRequest hookRequest ->
            counter++
            true
        }

        when:
        m.sendDeploymentWebhook("created", gwh, ewh, new DeploymentWebhookMapper())

        then:
        counter == 2
    }

    def "sendPromotionWebhook() should return true if no webhooks are configured"() {
        given:
        WebhookManager m = new WebhookManager()

        expect:
        m.sendPromotionWebhook("completed", null, null, null) == true
    }

    def "sendPromotiontWebhook() should push correct hook requests when global webhooks are configured"() {

        given:
        deploydb.models.Webhook.Promotion webhookPromotion =
                new deploydb.models.Webhook.Promotion(
                        ["http://www.localhost.com/test-build", "http://www.localhost.com/test1-build"])
        WebhookManager m = new WebhookManager()
        m.queue = new InMemoryQueue()
        models.Webhook.Webhook gwh = new models.Webhook.Webhook(null, webhookPromotion)

        // mock the queue push
        int counter = 0
        m.queue.metaClass.push = {HookRequest hookRequest ->
            counter++
            true
        }

        when:
        m.sendPromotionWebhook("completed", gwh, null, new DeploymentWebhookMapper())

        then:
        counter == 2
    }

    def "sendPromotiontWebhook() should push correct hook requests when environment webhooks are configured"() {

        given:
        deploydb.models.Webhook.Promotion webhookPromotion =
                new deploydb.models.Webhook.Promotion(
                        ["http://www.localhost.com/test-build", "http://www.localhost.com/test1-build"])

        WebhookManager m = new WebhookManager()
        m.queue = new InMemoryQueue()
        models.Webhook.Webhook ewh = new models.Webhook.Webhook(null, webhookPromotion)

        // mock the queue push
        int counter = 0
        m.queue.metaClass.push = {HookRequest hookRequest ->
            counter++
            true
        }

        when:
        m.sendPromotionWebhook("completed", null, ewh, new DeploymentWebhookMapper())

        then:
        counter == 2
    }

    def "sendPromotiontWebhook() should push correct hook requests when  both global and environment webhooks are configured"() {

        given:
        deploydb.models.Webhook.Promotion webhookPromotion =
                new deploydb.models.Webhook.Promotion(
                        ["http://www.localhost.com/test-build", "http://www.localhost.com/test1-build"])

        WebhookManager m = new WebhookManager()
        m.queue = new InMemoryQueue()
        models.Webhook.Webhook gwh = new models.Webhook.Webhook(null, webhookPromotion)
        models.Webhook.Webhook ewh = new models.Webhook.Webhook(null, webhookPromotion)

        // mock the queue push
        int counter = 0
        m.queue.metaClass.push = {HookRequest hookRequest ->
            counter++
            true
        }

        when:
        m.sendPromotionWebhook("completed", gwh, ewh, new DeploymentWebhookMapper())

        then:
        counter == 4
    }
}

package deploydb

import com.github.lookout.whoas.HookRequest
import deploydb.models.Webhook.Webhook

import io.dropwizard.lifecycle.Managed

import com.github.lookout.whoas.AbstractHookRunner
import com.github.lookout.whoas.AbstractHookQueue

import org.slf4j.Logger
import org.slf4j.LoggerFactory


class WebhookManager implements Managed {
    private Thread runnerThread
    private AbstractHookRunner runner = null
    private AbstractHookQueue queue = null
    private final Logger logger = LoggerFactory.getLogger(WebhookManager.class)

    /*
     * We should we move this to application and make sure through out the code we use this variable
     */
    private final String apiVersion = "v1"

    /*
     * This function will be used to fetch different webhooks types
     * stored webhook object given the name of the type - "created",
     * "started", "completed".
     */
    def getMemberOfObject(klass, variable) {
        return klass."$variable"
    }

    /*
     * Constructor with no arguments, As you can see it doesn't do much.
     * Will be used only during unit tests
     */
    WebhookManager() { }

    /**
     *  Constructor to create based on configuration of queues and runner
     *
     * @param deployDBConfiguration
     */
    WebhookManager(DeployDBConfiguration deployDBConfiguration ) {
        queue = deployDBConfiguration.whoasFactory.buildQueue()
        runner =  deployDBConfiguration.whoasFactory.buildRunner(queue)

        runnerThread = new Thread({
            runner.run()
        })
        runnerThread.name = 'WebhookManager Thread'
        logger.info("Webhook runner thread created: ${runnerThread}")
    }

    @Override
    void start() {
        queue.start()
        runnerThread.start()
        logger.info("${runnerThread} started")
    }

    @Override
    void stop() {
        queue.stop()
        runner.stop()
        logger.info("${runnerThread} stopped")
    }

    /**
     *
     * @param eventType The tyoe of webhook event - created, started, completed
     * @param environmentWebhook  Environment webhook associated with the deployment
     * @param webhookModelMapper The mapper class to translate from model to webhook
     * @return Fail if push of hook request fails
     */
    boolean sendDeploymentWebhook(String eventType,
                                  Webhook globalWebhook,
                                  Webhook environmentWebhook,
                                  WebhookModelMapper webhookModelMapper) {
        return sendDeployDbWebhook(eventType, "deployment", globalWebhook,
                environmentWebhook, webhookModelMapper)
    }

    /**
     *
     * @param eventType The tyoe of webhook event -  completed
     * @param environmentWebhook  Environment webhook associated with the promotion
     * @param webhookModelMapper The mapper class to translate from model to webhook
     * @return Fail if push of hook request fails
     */
    boolean sendPromotionWebhook(String eventType,
                                 Webhook globalWebhook,
                                 Webhook environmentWebhook,
                                 WebhookModelMapper webhookModelMapper) {
        return sendDeployDbWebhook(eventType, "promotion", globalWebhook,
                environmentWebhook, webhookModelMapper)
    }

    /**
     *
     * @param eventType The tyoe of webhook event -  created, started, completed
     * @param webhookType The type of webhook - deployment, promotion
     * @param environmentWebhook  Environment webhook associated with th model
     * @param webhookModelMapper The mapper class to translate from model to webhook
     * @return Fail if push of hook request fails
     */
    boolean sendDeployDbWebhook(String eventType, String webhookType,
                                Webhook globalWebhook,
                                Webhook environmentWebhook,
                                WebhookModelMapper webhookModelMapper) {
        /*
         *  Initialize the list for URL's configured in webhooks
         */
        List<String> eventUrlList = []

        /*
         * Get all the configured webhooks - global + environment
         * For each type of webhook - global or environment
         * Get the webhook.deployment or webhook.promotion and then get the
         * webhook.deployment.created|started|completed or
         * webhook.promotion.created|started|completed
         */
        if (environmentWebhook != null &&
            getMemberOfObject(environmentWebhook, webhookType) != null &&
            getMemberOfObject(getMemberOfObject(environmentWebhook, webhookType), eventType) != null) {
            eventUrlList =  getMemberOfObject(getMemberOfObject(environmentWebhook, webhookType), eventType)
        }
        if (globalWebhook != null &&
            getMemberOfObject(globalWebhook, webhookType) != null &&
            getMemberOfObject(getMemberOfObject(globalWebhook, webhookType), eventType) != null) {
            eventUrlList += getMemberOfObject(getMemberOfObject(globalWebhook, webhookType), eventType)
        }

        /*
         * If the URL list is non empty, iterate over URLs and send the webhook request
         */
        if (eventUrlList.isEmpty()) {
            return true
        }

        /*
         * Iterate over URLs and send the webhook request. If atleast one of webhook request
         * successfully pushed then return success
         */
        boolean pushReturn = false
        eventUrlList.each() { urlName ->
            HookRequest hookRequest = new HookRequest(urlName,
                                                      webhookModelMapper.toPayload(),
                                                      "application/vnd.deploydb."+
                                                          webhookType+eventType+"."+
                                                          apiVersion+"+json")
            pushReturn |= queue.push(hookRequest)
        }
        return pushReturn
    }

    /**
     * Return true if the webhook thread is running
     */
    Boolean getRunning() {
        /*
         * The runner thread is null during unit testing because default constructor is called.
         * If the runner thread is null, then getRunning should return false
         */
        if(runnerThread == null) {
            return false
        }
        return runnerThread.isAlive()
    }

    AbstractHookRunner getRunner() {
        return this.runner
    }

    AbstractHookQueue getQueue() {
        return this.queue
    }
}

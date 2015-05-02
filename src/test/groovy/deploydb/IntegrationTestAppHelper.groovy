package deploydb

import deploydb.models.Webhook.Webhook
import com.github.mustachejava.DefaultMustacheFactory
import com.github.mustachejava.Mustache

import org.glassfish.jersey.client.ClientConfig
import javax.ws.rs.client.Client
import javax.ws.rs.client.ClientBuilder
import org.glassfish.jersey.apache.connector.ApacheConnectorProvider
import org.glassfish.jersey.client.JerseyInvocation
import javax.ws.rs.core.Response
import javax.ws.rs.client.Entity

import org.hibernate.Session
import org.hibernate.SessionFactory
import org.hibernate.context.internal.ManagedSessionContext
import dropwizardintegtest.StubAppRunner
import dropwizardintegtest.TestLdapServer
import dropwizardintegtest.WebhookTestServerAppRunner
import dropwizardintegtest.webhookTestServerApp


class IntegrationTestAppHelper {
    private StubAppRunner runner = null
    private Client jerseyClient = null
    private WebhookTestServerAppRunner webhookRunner = null
    private TestLdapServer testLdapServer = null

    SessionFactory getSessionFactory() {
        return this.runner.sessionFactory
    }

    /**
     *  Execute the {@link Closure} with a properly set up
     *  {@link org.hibernate.Session}
     *
     * @param c (required) Closure to execute with a session
     */
    void withSession(Closure c) {
        final Session session = sessionFactory.openSession()
        try {
            ManagedSessionContext.bind(session)
            c.call()
        }
        finally {
            session.close()
        }
    }


    String processTemplate(String buffer, Map scope) {
        DefaultMustacheFactory mf = new DefaultMustacheFactory()
        StringWriter writer = new StringWriter()
        Mustache m = mf.compile(new StringReader(buffer),
                'cuke-stash-compiler')
        m.execute(writer, scope)

        return writer.toString()
    }

    Client getClient() {
        if (this.jerseyClient == null) {
            ClientConfig clientConfig = new ClientConfig()
            clientConfig.connectorProvider(new ApacheConnectorProvider())
            this.jerseyClient = ClientBuilder.newClient(clientConfig)
        }
        return this.jerseyClient
    }

    /**
     * Create the proper full URL for our running app with the given path.
     *
     * If this is an admin request, we'll hit the admin port correctly
     */
    String urlWithPort(String path, Boolean isAdmin) {
        int port = isAdmin ? runner.adminPort : runner.localPort
        return String.format("http://localhost:%d${path}", port)
    }


    JerseyInvocation makeRequestToPath(String path, String method, Entity entity) {
        return this.makeRequestToPath(path, method, entity, false)
    }

    JerseyInvocation makeRequestToPath(String path, String method, Entity entity, Boolean isAdmin) {
        return client.target(urlWithPort(path, isAdmin))
                .request()
                .build(method, entity)
    }

    /**
     * Execute a POST to the test server for step definitions
     */
    Response postJsonToPath(String path, String requestBody, Boolean isAdmin) {
        return this.makeRequestToPath(path, 'POST', Entity.json(requestBody), isAdmin).invoke()
    }

    /**
     * Execute a PATCH to the test server for step definitions
     */
    Response patchJsonToPath(String path, String requestBody) {
        return this.makeRequestToPath(path, 'PATCH', Entity.json(requestBody)).invoke()
    }

    Response deleteFromPath(String path) {
        return this.makeRequestToPath(path, 'DELETE', null).invoke()
    }

    /*
     *  Get url path from webhook config body
     */
    List<String> getUrlPathFromWebhookConfigBody(String configBody, String eventType) {
        ModelLoader<Webhook> webhookLoader = new
                ModelLoader<Webhook>(Webhook.class)
        Webhook webhook = webhookLoader.loadFromString(configBody)
        return getUrlPathFromWebhook(webhook, configBody, eventType)
    }

    /**
     * Minor convenience method to make sure we're dispatching GET requests to the
     * right port in our test application
     */
    Response getFromPath(String path, boolean isAdmin) {
        return this.makeRequestToPath(path, 'GET', null , isAdmin).invoke()
    }

    /** Set config directory */
    void setConfigDirectory(String configDirectory) {
        this.runner.setConfigDirectory(configDirectory)
    }

    void startAppWithConfiguration(String config) {
        if (this.runner != null) {
            return
        }
        println("start application with config ${config}")
        this.runner = new StubAppRunner(DeployDBApp.class, config)
        this.runner.start()
        this.testLdapServer = new TestLdapServer()
        this.testLdapServer.start()
    }


    void stopApp() {
        if (this.runner != null) {
            this.runner.stop()
        }
        if (this.testLdapServer != null) {
            this.testLdapServer.stop()
        }
    }

    void startWebhookTestServerWithConfiguration(String config) {
        if (this.webhookRunner != null) {
            return
        }
        println("start webhook test server with config ${config}")
        this.webhookRunner = new WebhookTestServerAppRunner(webhookTestServerApp.class, config)
        this.webhookRunner.start()
    }


    void stopWebhookTestServerApp() {
        if (this.webhookRunner != null) {
            this.webhookRunner.stop()
        }
    }
}

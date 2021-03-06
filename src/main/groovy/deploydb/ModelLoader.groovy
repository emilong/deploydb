package deploydb

import com.google.common.io.Resources
import groovy.transform.TypeChecked
import io.dropwizard.configuration.ConfigurationFactory
import io.dropwizard.jackson.Jackson
import io.dropwizard.configuration.ConfigurationParsingException
import io.dropwizard.configuration.ConfigurationValidationException

import javax.validation.Validation
import javax.validation.Validator

/**
 * Model Loader object
 *
 * It instantiates a model object from the yaml configuration.
 */
@TypeChecked
class ModelLoader<T> {
    private final Validator validator
    private final ConfigurationFactory<T> factory

   /**
    * Creates a new Model Registry for the given class.
    *
    * @param klass          the Model class
    */
    ModelLoader(Class<T> klass) {
        this.validator = Validation.buildDefaultValidatorFactory().getValidator()
        this.factory = new ConfigurationFactory<>(klass,
                                                  validator,
                                                  Jackson.newObjectMapper(), "")
    }

    /**
     * Instantiate a new Model object by parsing contents of the input file (T) 
     *
     * @param File, file is present in the resources directory
     */
    T load(File inputFile) throws Exception, ConfigurationParsingException,
               ConfigurationValidationException {
        return factory.build(inputFile)
    }

    /**
     * Instantiate a new Model object by parsing contents of the input file (T)
     *
     * @param File name, file is present in the resources directory
     */
    T load(String filename) throws Exception, ConfigurationParsingException,
            ConfigurationValidationException {
        return load(new File(Resources.getResource(filename).toURI()))
    }

    /**
     * Instantiate a new Model using configuration content. We create a
     * temp file and call load(filename)
     *
     * @param Configuration content
     */
    T loadFromString(String content) throws Exception, ConfigurationParsingException,
                    ConfigurationValidationException {
        File tmpFile = File.createTempFile('tmp', '.yml', new File('./build/tmp/'))
        tmpFile.write(content)
        tmpFile.deleteOnExit()
        return load(tmpFile)
    }

    /**
     * Get identifier for model from the the input file 
     *
     * @param File name, file is present in the resources directory
     */
    String getIdent(String filename) {
        return filename.substring(filename.lastIndexOf('/') + 1, 
            filename.lastIndexOf('.'))
    }
}

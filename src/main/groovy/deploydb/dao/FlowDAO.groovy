package deploydb.dao

import deploydb.models.Flow
import groovy.transform.InheritConstructors
import io.dropwizard.hibernate.AbstractDAO


/**
 * Class to represent Data Access Object for Flow
 */
@InheritConstructors
class FlowDAO extends AbstractDAO<Flow> {
}

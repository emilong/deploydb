package deploydb.dao

import groovy.transform.InheritConstructors
import io.dropwizard.hibernate.AbstractDAO
import org.hibernate.criterion.Restrictions
import org.hibernate.criterion.Order

import deploydb.models.Artifact

/**
 * Artifact Data access object
 */
@InheritConstructors
class ArtifactDAO extends AbstractDAO<Artifact> {

    /**
     * Locate an Artifact based on the (group, name) pair
     *
     * @param group A valid group name (e.g. "com.example")
     * @param name The artifact's name (e.g. "dropwizard-core")
     */
    List<Artifact> findByGroupAndName(String group, String name, int pageNumber, int perPageSize) {

        List<Artifact> artifacts = criteria().add(Restrictions.eq('group', group))
                          .add(Restrictions.eq('name', name))
                          .setFirstResult(pageNumber)
                          .setMaxResults(perPageSize)
                          .addOrder(Order.desc('createdAt')).list()
        return artifacts
    }

    /**
     * Locate the latest Artifact based on the (group, name) pair
     *
     * @param group A valid group name (e.g. "com.example")
     * @param name The artifact's name (e.g. "dropwizard-core")
     */
    Artifact findLatestByGroupAndName(String group, String name) {

        List<Artifact> artifacts = criteria().add(Restrictions.eq('group', group))
                          .add(Restrictions.eq('name', name))
                          .addOrder(Order.desc('createdAt')).list()
        if(artifacts.size() > 0) {
            return artifacts.last()
        }
        return null
    }

    /**
     * Locate an Artifact based on generic query parameter
     *
     * @param value the query value for searching. It can be partially specified, for example
     *              to find all version 1.0.1 and 1.0.2 artifacts, the value can be 1.0.
     * @param name The artifact's name (e.g. "dropwizard-core")
     */
    List<Artifact> findByQuery(String value, int pageNumber, int perPageSize) {
        // Make the value wild card
        value = "%"+value+"%"

        // logically "or" all the columns you want to search on
        List<Artifact> artifacts = criteria().add( Restrictions.disjunction()
                                               .add(Restrictions.like('name', value))
                                               .add(Restrictions.like('group', value))
                                               .add(Restrictions.like('version', value)))
                                             .addOrder(Order.desc('createdAt'))
                                             .setFirstResult(pageNumber)
                                             .setMaxResults(perPageSize)
                                             .list()
        return artifacts
    }

}

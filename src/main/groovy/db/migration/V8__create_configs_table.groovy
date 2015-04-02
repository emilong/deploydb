package db.migration

import java.sql.DatabaseMetaData


/**
 * Example of a Java-based migration.
 */
class V8__create_configs_table extends DeployDBMigration {

    /** Return migration number to differentiate from other versions */
    @Override
    Integer getChecksum() {
        return 8
    }

    /**
     * Gather sql commands for this migration
     *
     * @param metadata
     * @return List of sql commands
     */
    List<String> prepareCommands(DatabaseMetaData metadata) {

        /* Sql commands */
        List<String> commands = []

        /*
         * Add modelConfigs table
         */
        commands += """
            CREATE TABLE modelConfigs (
                id BIGINT AUTO_INCREMENT,
                checksum TEXT NOT NULL,
                contents TEXT NOT NULL,
                ident VARCHAR(8192),
                modelType INT NOT NULL,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
                deletedAt TIMESTAMP NULL,
                PRIMARY KEY (id)
            );
        """

        /*
         * Add checksum column to flows table
         */
        commands += """
            ALTER TABLE flows ADD COLUMN checksum TEXT;
        """

        return commands
    }
}

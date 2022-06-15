---
title: Deployment
sidebar_position: 2
---

## Set up Flink Environment
Currently, InLong-Sort is based on Flink, before you run an InLong-Sort Application,
you need to set up [Flink Environment](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/overview/).

Currently, InLong-Sort relies on Flink-1.13.5. Chose `flink-1.13.5-bin-scala_2.11.tgz` when downloading package.

Once your Flink Environment is set up, you can visit Web UI of Flink, whose address is stored in `/${your_flink_path}/conf/masters`.

## Prepare installation files
We need `sort-dist-[version].jar` and `sort-connector-[database]-[version].jar`.   

`sort-dist-[version].jar` include main class `org.apache.inlong.sort.Entrance`.   

`sort-connector-[database]-[version].jar` are connector jar.   

Please choose required connector jar by your data integration requirement.    

[Download](https://inlong.apache.org/download/main) `sort-dist-[version].jar` from `inlong-sort` of `apache-inlong-[version]-bin.tar.gz`.  

[Download](https://inlong.apache.org/download/main) `sort-connector-[database]-[version].jar` from `apache-inlong-[version]-sort-connectors.tar.gz`.

Please put required jars into under `FLINK_HOME/lib/` after download.

## Starting an inlong-sort application
Now you can submit job to Flink with the jar compiled, refer to [How to submit job to Flink](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/cli/#submitting-a-job).

Example：
```shell
./bin/flink run -c org.apache.inlong.sort.Entrance FLINK_HOME/lib/sort-dist-[version].jar \
--sql.script.file /YOUR_SQL_SCRIPT_DIR/mysql-to-postgresql.sql
```

## Configuration
`/YOUR_SQL_SCRIPT_DIR/mysql-to-postgresql.sql` is a sql script file includes multi Flink SQL statements that can be separated by semicolon.  
Statement can support `CREATE TABLE`, `CRETAE VIEW`, `INSERT INTO`. We can write sql to do data integration.  

We can write following SQL script if we want to read data from MySQL and write into PostgreSQL.
```sql
 CREATE TABLE `table_1`(
    `age` INT,
    `name` STRING)
    WITH (
    'connector' = 'mysql-cdc-inlong',
    'hostname' = 'localhost',
    'username' = 'root',
    'password' = 'inlong',
    'database-name' = 'test',
    'scan.incremental.snapshot.enabled' = 'false',
    'server-time-zone' = 'GMT+8',
    'table-name' = 'user'
);
CREATE TABLE `table_2`(
    PRIMARY KEY (`name`) NOT ENFORCED,
    `name` STRING,
    `age` INT)
    WITH (
    'connector' = 'jdbc',
    'url' = 'jdbc:postgresql://localhost:5432/postgres',
    'username' = 'postgres',
    'password' = 'inlong',
    'table-name' = 'public.user',
    'port' = '3306'
);
INSERT INTO `table_2` 
    SELECT 
    `name` AS `name`,
    `age` AS `age`
    FROM `table_1`;
```
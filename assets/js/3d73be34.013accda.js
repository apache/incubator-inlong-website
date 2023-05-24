"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8757],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=l.createContext({}),i=function(t){var e=l.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=i(t.components);return l.createElement(d.Provider,{value:e},t.children)},k="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,d=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),k=i(n),p=a,m=k["".concat(d,".").concat(p)]||k[p]||c[p]||r;return n?l.createElement(m,o(o({ref:e},u),{},{components:n})):l.createElement(m,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=t,s[k]="string"==typeof t?t:a,o[1]=s;for(var i=2;i<r;i++)o[i]=n[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},51009:(t,e,n)=>{n.d(e,{Y:()=>l});const l={inLongVersion:"1.3.0"}},31069:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var l=n(87462),a=(n(67294),n(3905)),r=n(51009);const o={title:"MySQL-CDC",sidebar_position:6},s=void 0,d={unversionedId:"data_node/extract_node/mysql-cdc",id:"version-1.3.0/data_node/extract_node/mysql-cdc",title:"MySQL-CDC",description:"Overview",source:"@site/versioned_docs/version-1.3.0/data_node/extract_node/mysql-cdc.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/mysql-cdc",permalink:"/docs/1.3.0/data_node/extract_node/mysql-cdc",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/data_node/extract_node/mysql-cdc.md",tags:[],version:"1.3.0",sidebarPosition:6,frontMatter:{title:"MySQL-CDC",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"MongoDB-CDC",permalink:"/docs/1.3.0/data_node/extract_node/mongodb-cdc"},next:{title:"Oracle-CDC",permalink:"/docs/1.3.0/data_node/extract_node/oracle-cdc"}},i={},u=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"Setup MySQL server",id:"setup-mysql-server",level:2},{value:"Notes",id:"notes",level:2},{value:"Set a different SERVER ID for each reader",id:"set-a-different-server-id-for-each-reader",level:3},{value:"Setting up MySQL session timeouts",id:"setting-up-mysql-session-timeouts",level:3},{value:"How to create a MySQL Extract Node",id:"how-to-create-a-mysql-extract-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"MySQL Extract Node Options",id:"mysql-extract-node-options",level:2},{value:"Available Metadata",id:"available-metadata",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],k={toc:u},c="wrapper";function p(t){let{components:e,...o}=t;return(0,a.kt)(c,(0,l.Z)({},k,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The MySQL Extract Node allows for reading snapshot data and incremental data from MySQL database. This document describes how to set up the MySQL Extract Node to run SQL queries against MySQL databases."),(0,a.kt)("h2",{id:"supported-version"},"Supported Version"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Extract Node"),(0,a.kt)("th",{parentName:"tr",align:null},"Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Driver"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/1.3.0/data_node/extract_node/mysql-cdc"},"MySQL-CDC")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://dev.mysql.com/doc"},"MySQL"),": 5.6, 5.7, 8.0.x ",(0,a.kt)("br",null)," ",(0,a.kt)("a",{parentName:"td",href:"https://www.aliyun.com/product/rds/mysql"},"RDS MySQL"),": 5.6, 5.7, 8.0.x ",(0,a.kt)("br",null)," ",(0,a.kt)("a",{parentName:"td",href:"https://www.aliyun.com/product/polardb"},"PolarDB MySQL"),": 5.6, 5.7, 8.0.x ",(0,a.kt)("br",null)," ",(0,a.kt)("a",{parentName:"td",href:"https://aws.amazon.com/cn/rds/aurora"},"Aurora MySQL"),": 5.6, 5.7, 8.0.x ",(0,a.kt)("br",null)," ",(0,a.kt)("a",{parentName:"td",href:"https://mariadb.org"},"MariaDB"),": 10.x ",(0,a.kt)("br",null)," ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/polardb/polardbx-sql"},"PolarDB X"),": 2.0.1"),(0,a.kt)("td",{parentName:"tr",align:null},"JDBC Driver: 8.0.21")))),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"In order to set up the MySQL Extract Node, the following table provides dependency information for both projects using a build automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles."),(0,a.kt)("h3",{id:"maven-dependency"},"Maven dependency"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-mongodb-cdc</artifactId>\n    <version>${r.Y.inLongVersion}</version>\n</dependency>\n`)),(0,a.kt)("p",null,"The MySQL driver dependency is also required to connect to MySQL database. Please download ",(0,a.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.21/mysql-connector-java-8.0.21.jar"},"mysql-connector-java-8.0.21.jar")," and put it into ",(0,a.kt)("inlineCode",{parentName:"p"},"FLINK_HOME/lib/"),"."),(0,a.kt)("h2",{id:"setup-mysql-server"},"Setup MySQL server"),(0,a.kt)("p",null,"You have to define a MySQL user with appropriate permissions on all databases that the Debezium MySQL connector monitors."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create the MySQL user:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Grant the required permissions to the user:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> GRANT SELECT, SHOW DATABASES, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'user' IDENTIFIED BY 'password';\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," The RELOAD permissions is not required any more when ",(0,a.kt)("inlineCode",{parentName:"p"},"scan.incremental.snapshot.enabled")," is enabled (enabled by default)."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Finalize the user\u2019s permissions:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> FLUSH PRIVILEGES;\n")),(0,a.kt)("p",null,"See more about the ",(0,a.kt)("a",{parentName:"p",href:"https://debezium.io/documentation/reference/1.5/connectors/mysql.html#mysql-creating-user"},"permission explanation"),"."),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("h3",{id:"set-a-different-server-id-for-each-reader"},"Set a different SERVER ID for each reader"),(0,a.kt)("p",null,"Every MySQL database client for reading binlog should have an unique id, called server id. MySQL server will use this id to maintain network connection and the binlog position. Therefore, if different jobs share a same server id, it may result to read from wrong binlog position.\nThus, it is recommended to set different server id for each reader via the ",(0,a.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.11/dev/table/sql/hints.html"},"SQL Hints"),",\ne.g.  assuming the source parallelism is 4, then we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT * FROM source_table /*+ OPTIONS('server-id'='5401-5404') */ ;")," to assign unique server id for each of the 4 source readers."),(0,a.kt)("h3",{id:"setting-up-mysql-session-timeouts"},"Setting up MySQL session timeouts"),(0,a.kt)("p",null,"When an initial consistent snapshot is made for large databases, your established connection could timeout while the tables are being read. You can prevent this behavior by configuring interactive_timeout and wait_timeout in your MySQL configuration file."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interactive_timeout"),": The number of seconds the server waits for activity on an interactive connection before closing it. See ",(0,a.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_interactive_timeout"},"MySQL documentations"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wait_timeout"),": The number of seconds the server waits for activity on a noninteractive connection before closing it. See ",(0,a.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_wait_timeout"},"MySQL documentations"),".")),(0,a.kt)("h2",{id:"how-to-create-a-mysql-extract-node"},"How to create a MySQL Extract Node"),(0,a.kt)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,a.kt)("p",null,"The example below shows how to create an MySQL Extract Node with ",(0,a.kt)("inlineCode",{parentName:"p"},"Flink SQL")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- Set checkpoint every 3000 milliseconds                       \nFlink SQL> SET 'execution.checkpointing.interval' = '3s';   \n\n-- Create a MySQL table 'mysql_extract_node' in Flink SQL\nFlink SQL> CREATE TABLE mysql_extract_node (\n     order_id INT,\n     order_date TIMESTAMP(0),\n     customer_name STRING,\n     price DECIMAL(10, 5),\n     product_id INT,\n     order_status BOOLEAN,\n     PRIMARY KEY(order_id) NOT ENFORCED\n     ) WITH (\n     'connector' = 'mysql-cdc-inlong',\n     'hostname' = 'YourHostname',\n     'port' = '3306',\n     'username' = 'YourUsername',\n     'password' = 'YourPassword',\n     'database-name' = 'YourDatabaseName',\n     'table-name' = 'YourTableName');\n  \n-- Read snapshot and binlogs from mysql_extract_node\nFlink SQL> SELECT * FROM mysql_extract_node;\n")),(0,a.kt)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"BINLOG")," Data Source\n",(0,a.kt)("img",{alt:"MySQL BINLOG",src:n(33956).Z,width:"1875",height:"397"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Configure the MySQL Source\n",(0,a.kt)("img",{alt:"MySQL SOURCE",src:n(72724).Z,width:"824",height:"896"})))),(0,a.kt)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,a.kt)("p",null,"TODO: It will be supported in the future."),(0,a.kt)("h2",{id:"mysql-extract-node-options"},"MySQL Extract Node Options"),(0,a.kt)("div",{class:"highlight"},(0,a.kt)("table",{class:"colwidths-auto docutils"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{class:"text-left",style:{width:"10%"}},"Option"),(0,a.kt)("th",{class:"text-left",style:{width:"8%"}},"Required"),(0,a.kt)("th",{class:"text-left",style:{width:"7%"}},"Default"),(0,a.kt)("th",{class:"text-left",style:{width:"10%"}},"Type"),(0,a.kt)("th",{class:"text-left",style:{width:"65%"}},"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"connector"),(0,a.kt)("td",null,"required"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Specify what connector to use, here should be ",(0,a.kt)("code",null,"'mysql-cdc-inlong'"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"hostname"),(0,a.kt)("td",null,"required"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"IP address or hostname of the MySQL database server.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"username"),(0,a.kt)("td",null,"required"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Name of the MySQL database to use when connecting to the MySQL database server.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"password"),(0,a.kt)("td",null,"required"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Password to use when connecting to the MySQL database server.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"database-name"),(0,a.kt)("td",null,"required"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Database name of the MySQL server to monitor. The database-name also supports regular expressions to monitor multiple tables matches the regular expression.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"table-name"),(0,a.kt)("td",null,"required"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Table name of the MySQL database to monitor. The table-name also supports regular expressions to monitor multiple tables matches the regular expression.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"port"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"3306"),(0,a.kt)("td",null,"Integer"),(0,a.kt)("td",null,"Integer port number of the MySQL database server.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"server-id"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,a.kt)("td",null,"Integer"),(0,a.kt)("td",null,"A numeric ID or a numeric ID range of this database client, The numeric ID syntax is like '5400', the numeric ID range syntax is like '5400-5408', The numeric ID range syntax is recommended when 'scan.incremental.snapshot.enabled' enabled. Every ID must be unique across all currently-running database processes in the MySQL cluster. This connector joins the MySQL cluster as another server (with this unique ID) so it can read the binlog. By default, a random number is generated between 5400 and 6400, though we recommend setting an explicit value.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scan.incremental.snapshot.enabled"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"true"),(0,a.kt)("td",null,"Boolean"),(0,a.kt)("td",null,"Incremental snapshot is a new mechanism to read snapshot of a table. Compared to the old snapshot mechanism, the incremental snapshot has many advantages, including: (1) source can be parallel during snapshot reading, (2) source can perform checkpoints in the chunk granularity during snapshot reading, (3) source doesn't need to acquire global read lock (FLUSH TABLES WITH READ LOCK) before snapshot reading. If you would like the source run in parallel, each parallel reader should have an unique server id, so the 'server-id' must be a range like '5400-6400', and the range must be larger than the parallelism. Please see ",(0,a.kt)("a",{href:"https://ververica.github.io/flink-cdc-connectors/release-2.2/content/connectors/mysql-cdc.html#incremental-snapshot-reading"},"Incremental Snapshot Reading"),"section for more detailed information.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scan.incremental.snapshot.chunk.size"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"8096"),(0,a.kt)("td",null,"Integer"),(0,a.kt)("td",null,"The chunk size (number of rows) of table snapshot, captured tables are split into multiple chunks when read the snapshot of table.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scan.snapshot.fetch.size"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"1024"),(0,a.kt)("td",null,"Integer"),(0,a.kt)("td",null,"The maximum fetch size for per poll when read table snapshot.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scan.startup.mode"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"initial"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,'Optional startup mode for MySQL CDC consumer, valid enumerations are "initial" and "latest-offset". Please see ',(0,a.kt)("a",{href:"https://ververica.github.io/flink-cdc-connectors/release-2.2/content/connectors/mysql-cdc.html#startup-reading-position"},"Startup Reading Position"),"section for more detailed information.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"server-time-zone"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"UTC"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,'The session time zone in database server, e.g. "Asia/Shanghai". It controls how the TIMESTAMP type in MYSQL converted to STRING. See more ',(0,a.kt)("a",{href:"https://debezium.io/documentation/reference/1.5/connectors/mysql.html#mysql-temporal-types"},"here"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"debezium.min.row. count.to.stream.result"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"1000"),(0,a.kt)("td",null,"Integer"),(0,a.kt)("td",null,"During a snapshot operation, the connector will query each included table to produce a read event for all rows in that table. This parameter determines whether the MySQL connection will pull all results for a table into memory (which is fast but requires large amounts of memory), or whether the results will instead be streamed (can be slower, but will work for very large tables). The value specifies the minimum number of rows a table must contain before the connector will stream results, and defaults to 1,000. Set this parameter to '0' to skip all table size checks and always stream all results during a snapshot.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"connect.timeout"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"30s"),(0,a.kt)("td",null,"Duration"),(0,a.kt)("td",null,"The maximum time that the connector should wait after trying to connect to the MySQL database server before timing out.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"connect.max-retries"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"3"),(0,a.kt)("td",null,"Integer"),(0,a.kt)("td",null,"The max retry times that the connector should retry to build MySQL database server connection.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"connection.pool.size"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"20"),(0,a.kt)("td",null,"Integer"),(0,a.kt)("td",null,"The connection pool size.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"jdbc.properties.*"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"20"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Option to pass custom JDBC URL properties. User can pass custom properties like 'jdbc.properties.useSSL' = 'false'.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"heartbeat.interval"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"30s"),(0,a.kt)("td",null,"Duration"),(0,a.kt)("td",null,"The interval of sending heartbeat event for tracing the latest available binlog offsets.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"append-mode"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"false"),(0,a.kt)("td",null,"Boolean"),(0,a.kt)("td",null,"Whether to support append only, if true the MySQL Extract Node will Convert all upsert streams to append streams to support downstream scenarios where upsert streams are not supported.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"migrate-all"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"false"),(0,a.kt)("td",null,"Boolean"),(0,a.kt)("td",null,"Whether it is a whole library migration, Whether it is a whole database migration scenario, if true, it compresses physical fields and other meta fields supported by MySQL Extract Node into a special meta field `data` in canal-json format.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"debezium.*"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Pass-through Debezium's properties to Debezium Embedded Engine which is used to capture data changes from MySQL server. For example: ",(0,a.kt)("code",null,"'debezium.snapshot.mode' = 'never'"),". See more about the ",(0,a.kt)("a",{href:"https://debezium.io/documentation/reference/1.5/connectors/mysql.html#mysql-connector-properties"},"Debezium's MySQL Connector properties"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"inlong.metric"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Inlong metric label, format of value is groupId&streamId&nodeId."))))),(0,a.kt)("h2",{id:"available-metadata"},"Available Metadata"),(0,a.kt)("p",null,"The following format metadata can be exposed as read-only (VIRTUAL) columns in a table definition."),(0,a.kt)("table",{class:"colwidths-auto docutils"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{class:"text-left",style:{width:"15%"}},"Key"),(0,a.kt)("th",{class:"text-left",style:{width:"30%"}},"DataType"),(0,a.kt)("th",{class:"text-left",style:{width:"55%"}},"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"meta.table_name"),(0,a.kt)("td",null,"STRING NOT NULL"),(0,a.kt)("td",null,"Name of the table that contain the row.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"meta.database_name"),(0,a.kt)("td",null,"STRING NOT NULL"),(0,a.kt)("td",null,"Name of the database that contain the row.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"meta.op_ts"),(0,a.kt)("td",null,"TIMESTAMP_LTZ(3) NOT NULL"),(0,a.kt)("td",null,"It indicates the time that the change was made in the database. ",(0,a.kt)("br",null),"If the record is read from snapshot of the table instead of the binlog, the value is always 0.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"meta.op_type"),(0,a.kt)("td",null,"STRING"),(0,a.kt)("td",null,"Type of database operation, such as INSERT/DELETE, etc.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"meta.data"),(0,a.kt)("td",null,"STRING"),(0,a.kt)("td",null,"Data of the row that format by `canal-json` only exists when the option `migrate-all` is 'true'.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"meta.is_ddl"),(0,a.kt)("td",null,"BOOLEAN"),(0,a.kt)("td",null,"Whether the DDL statement.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"meta.ts"),(0,a.kt)("td",null,"TIMESTAMP_LTZ(3) NOT NULL"),(0,a.kt)("td",null,"The current time when the row was received and processed.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"meta.sql_type"),(0,a.kt)("td",null,"MAP"),(0,a.kt)("td",null,"Mapping of sql_type table fields to java data type IDs.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"meta.mysql_type"),(0,a.kt)("td",null,"MAP"),(0,a.kt)("td",null,"Structure of the table.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"meta.pk_names"),(0,a.kt)("td",null,"ARRAY"),(0,a.kt)("td",null,"Primay key name of the table.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"meta.batch_id"),(0,a.kt)("td",null,"BIGINT"),(0,a.kt)("td",null,"Batch id of the Binlog.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"meta.update_before"),(0,a.kt)("td",null,"ARRAY"),(0,a.kt)("td",null,"Data of the row before update.")))),(0,a.kt)("p",null,"The extended CREATE TABLE example demonstrates the syntax for exposing these metadata fields:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `mysql_extract_node` (\n      `id` INT,\n      `name` STRING,\n      `database_name` string METADATA FROM 'meta.database_name',\n      `table_name`    string METADATA FROM 'meta.table_name',\n      `op_ts`         timestamp(3) METADATA FROM 'meta.op_ts',\n      `op_type` string METADATA FROM 'meta.op_type',\n      `batch_id` bigint METADATA FROM 'meta.batch_id',\n      `is_ddl` boolean METADATA FROM 'meta.is_ddl',\n      `update_before` ARRAY<MAP<STRING, STRING>> METADATA FROM 'meta.update_before',\n      `mysql_type` MAP<STRING, STRING> METADATA FROM 'meta.mysql_type',\n      `pk_names` ARRAY<STRING> METADATA FROM 'meta.pk_names',\n      `data` STRING METADATA FROM 'meta.data',\n      `sql_type` MAP<STRING, INT> METADATA FROM 'meta.sql_type',\n      `ingestion_ts` TIMESTAMP(3) METADATA FROM 'meta.ts',\n      PRIMARY KEY (`id`) NOT ENFORCED \n) WITH (\n      'connector' = 'mysql-cdc-inlong', \n      'hostname' = 'YourHostname',\n      'migrate-all' = 'true',\n      'port' = '3306',                \n      'username' = 'YourUsername',\n      'password' = 'YourPassword',\n      'database-name' = 'YourDatabase',\n      'table-name' = 'YourTable' \n      );\n")),(0,a.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,a.kt)("div",{class:"wy-table-responsive"},(0,a.kt)("table",{class:"colwidths-auto docutils"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{class:"text-left"},"MySQL type"),(0,a.kt)("th",{class:"text-left"},"Flink SQL type"),(0,a.kt)("th",{class:"text-left"},"NOTE"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"TINYINT"),(0,a.kt)("td",null,"TINYINT"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"SMALLINT",(0,a.kt)("br",null),"TINYINT UNSIGNED"),(0,a.kt)("td",null,"SMALLINT"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"INT",(0,a.kt)("br",null),"MEDIUMINT",(0,a.kt)("br",null),"SMALLINT UNSIGNED"),(0,a.kt)("td",null,"INT"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"BIGINT",(0,a.kt)("br",null),"INT UNSIGNED"),(0,a.kt)("td",null,"BIGINT"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"BIGINT UNSIGNED"),(0,a.kt)("td",null,"DECIMAL(20, 0)"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"REAL",(0,a.kt)("br",null),"FLOAT",(0,a.kt)("br",null)),(0,a.kt)("td",null,"FLOAT"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"DOUBLE"),(0,a.kt)("td",null,"DOUBLE"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"NUMERIC(p, s)",(0,a.kt)("br",null),"DECIMAL(p, s)",(0,a.kt)("br",null),"where p <= 38",(0,a.kt)("br",null)),(0,a.kt)("td",null,"DECIMAL(p, s)"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"NUMERIC(p, s)",(0,a.kt)("br",null),"DECIMAL(p, s)",(0,a.kt)("br",null),"where 38 < p <= 65",(0,a.kt)("br",null)),(0,a.kt)("td",null,"STRING"),(0,a.kt)("td",null,"The precision for DECIMAL data type is up to 65 in MySQL, but the precision for DECIMAL is limited to 38 in Flink. So if you define a decimal column whose precision is greater than 38, you should map it to STRING to avoid precision loss.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"BOOLEAN",(0,a.kt)("br",null),"TINYINT(1)",(0,a.kt)("br",null),"BIT(1)"),(0,a.kt)("td",null,"BOOLEAN"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"DATE"),(0,a.kt)("td",null,"DATE"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"TIME [(p)]"),(0,a.kt)("td",null,"TIME [(p)]"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"TIMESTAMP [(p)]",(0,a.kt)("br",null),"DATETIME [(p)]"),(0,a.kt)("td",null,"TIMESTAMP [(p)]"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"CHAR(n)"),(0,a.kt)("td",null,"CHAR(n)"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"VARCHAR(n)"),(0,a.kt)("td",null,"VARCHAR(n)"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"BIT(n)"),(0,a.kt)("td",null,"BINARY(\u2308n/8\u2309)"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"BINARY(n)"),(0,a.kt)("td",null,"BINARY(n)"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"VARBINARY(N)"),(0,a.kt)("td",null,"VARBINARY(N)"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"TINYTEXT",(0,a.kt)("br",null),"TEXT",(0,a.kt)("br",null),"MEDIUMTEXT",(0,a.kt)("br",null),"LONGTEXT",(0,a.kt)("br",null)),(0,a.kt)("td",null,"STRING"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"TINYBLOB",(0,a.kt)("br",null),"BLOB",(0,a.kt)("br",null),"MEDIUMBLOB",(0,a.kt)("br",null),"LONGBLOB",(0,a.kt)("br",null)),(0,a.kt)("td",null,"BYTES"),(0,a.kt)("td",null,"Currently, for BLOB data type in MySQL, only the blob whose length isn't greater than 2,147,483,647(2 ** 31 - 1) is supported. ")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"YEAR"),(0,a.kt)("td",null,"INT"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ENUM"),(0,a.kt)("td",null,"STRING"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"JSON"),(0,a.kt)("td",null,"STRING"),(0,a.kt)("td",null,"The JSON data type  will be converted into STRING with JSON format in Flink.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"SET"),(0,a.kt)("td",null,"ARRAY<STRING>"),(0,a.kt)("td",null,"As the SET data type in MySQL is a string object that can have zero or more values, it should always be mapped to an array of string"))))))}p.isMDXComponent=!0},33956:(t,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/mysql-binlog-06b606754862ff89d40bc3c75f8463e8.png"},72724:(t,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/mysql-source-f6963111f4164b273e92a8389015b1f8.png"}}]);
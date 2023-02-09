"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5158],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75892:(t,e,n)=>{n.d(e,{Y:()=>a});const a={inLongVersion:"1.4.0-SNAPSHOT"}},32218:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),l=n(75892);const i={title:"Doris",sidebar_position:16},o=void 0,d={unversionedId:"data_node/load_node/doris",id:"version-1.4.0/data_node/load_node/doris",title:"Doris",description:"Overview",source:"@site/versioned_docs/version-1.4.0/data_node/load_node/doris.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/doris",permalink:"/docs/1.4.0/data_node/load_node/doris",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.4.0/data_node/load_node/doris.md",tags:[],version:"1.4.0",sidebarPosition:16,frontMatter:{title:"Doris",sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"TDSQL-PostgreSQL",permalink:"/docs/1.4.0/data_node/load_node/tdsql-postgresql"},next:{title:"Example",permalink:"/docs/1.4.0/sdk/dataproxy-sdk/example"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"Prepare",id:"prepare",level:2},{value:"Create MySql Extract table",id:"create-mysql-extract-table",level:3},{value:"Create Doris Load table",id:"create-doris-load-table",level:3},{value:"How to create a Doris Load Node",id:"how-to-create-a-doris-load-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"Doris Load Node Options",id:"doris-load-node-options",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],u={toc:p},m="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Doris Load")," node supports writing data to the Doris database."),(0,r.kt)("li",{parentName:"ul"},"Two modes are supported for sink to Doris:\nSingle-sink for specify fixed database name and table name to sink.\nMulti-sink for custom database name and table name according to src format, which suitable for scenarios such as multi-table writing or whole database synchronization."),(0,r.kt)("li",{parentName:"ul"},"This document describes how to set up a Doris Load node to sink to Doris.")),(0,r.kt)("h2",{id:"supported-version"},"Supported Version"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Load Node"),(0,r.kt)("th",{parentName:"tr",align:null},"Doris version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/1.4.0/data_node/load_node/doris"},"Doris")),(0,r.kt)("td",{parentName:"tr",align:null},"0.13+")))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"In order to set up the Doris Load node, the dependency information needed to use a build automation tool\nsuch as Maven or SBT is provided below."),(0,r.kt)("h3",{id:"maven-dependency"},"Maven dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-doris</artifactId>\n    <version>${l.Y.inLongVersion}</version>\n</dependency>\n`)),(0,r.kt)("h2",{id:"prepare"},"Prepare"),(0,r.kt)("h3",{id:"create-mysql-extract-table"},"Create MySql Extract table"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Single-sink: Create a table ",(0,r.kt)("inlineCode",{parentName:"li"},"cdc.cdc_mysql_source")," in the MySQL database. The command is as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"[root@fe001 ~]# mysql -u root -h localhost -P 3306 -p123456\nmysql> use cdc;\nDatabase changed\nmysql> CREATE TABLE `cdc_mysql_source` (\n       `id` int(11) NOT NULL AUTO_INCREMENT,\n       `name` varchar(64) DEFAULT NULL,\n       `dr` tinyint(3) DEFAULT 0,\n       PRIMARY KEY (`id`)\n       );\nQuery OK, 0 rows affected (0.02 sec)\n\nmysql> insert into cdc_mysql_source values(1, 'zhangsan', 0),(2, 'lisi', 0),(3, 'wangwu', 0);\nQuery OK, 3 rows affected (0.01 sec)\nRecords: 3  Duplicates: 0  Warnings: 0\n\nmysql> select * from cdc_mysql_source;\n+----+----------+----+\n| id | name     | dr |\n+----+----------+----+\n|  1 | zhangsan |  0 |\n|  2 | lisi     |  0 |\n|  3 | wangwu   |  0 |\n+----+----------+----+\n3 rows in set (0.07 sec)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Multi-sink: Create tables ",(0,r.kt)("inlineCode",{parentName:"li"},"user_db.user_id_name"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"user_db.user_id_name")," in the MySQL database. The command is as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"[root@fe001 ~]# mysql -u root -h localhost -P 3306 -p123456\nmysql> use user_db;\nDatabase changed\nmysql> CREATE TABLE `user_id_name` (\n       `id` int(11) NOT NULL AUTO_INCREMENT,\n       `name` varchar(64) DEFAULT NULL\n       PRIMARY KEY (`id`)\n       );\nQuery OK, 0 rows affected (0.02 sec)\n\nmysql> CREATE TABLE `user_id_score` (\n       `id` int(11) NOT NULL AUTO_INCREMENT,\n       `score` double default 0,\n       PRIMARY KEY (`id`)\n       );\nQuery OK, 0 rows affected (0.02 sec)\n\nmysql> insert into user_id_name values(1001, 'lily'),(1002, 'tom'),(1003, 'alan');\nQuery OK, 3 rows affected (0.01 sec)\nRecords: 3  Duplicates: 0  Warnings: 0 \n\nmysql> insert into user_id_score values(1001, 99),(1002, 96),(1003, 98);\nQuery OK, 3 rows affected (0.01 sec)\nRecords: 3  Duplicates: 0  Warnings: 0 \n\nmysql> select * from user_id_name;\n+------+--------+\n|  id  | name   |\n+------+--------+\n| 1001 | lily   |\n| 1002 | tom    |\n| 1003 | alan   |\n+----+----------+\n3 rows in set (0.07 sec)    \n\nmysql> select * from user_id_score;\n+------+------+\n|  id  | name |\n+------+------+\n| 1001 | 99   |\n| 1002 | 96   |\n| 1003 | 98   |\n+----+--------+\n3 rows in set (0.07 sec)  \n")),(0,r.kt)("h3",{id:"create-doris-load-table"},"Create Doris Load table"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Single-sink: Create a table ",(0,r.kt)("inlineCode",{parentName:"li"},"cdc.cdc_doris_sink")," in the Doris database. The command is as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'[root@fe001 ~]# mysql -u root -h localhost -P 9030 -p000000\nmysql> use cdc;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\nDatabase changed\n\nmysql> CREATE TABLE `cdc_doris_sink` (\n       `id` int(11) NOT NULL COMMENT "user id",\n       `name` varchar(50) NOT NULL COMMENT "user name",\n       `dr` tinyint(4) NULL COMMENT "delete tag"\n       ) ENGINE=OLAP\n       UNIQUE KEY(`id`)\n       COMMENT "OLAP"\n       DISTRIBUTED BY HASH(`id`) BUCKETS 1\n       PROPERTIES (\n       "replication_allocation" = "tag.location.default: 1"\n       );\nQuery OK, 0 rows affected (0.06 sec)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Multi-sink: Create tables ",(0,r.kt)("inlineCode",{parentName:"li"},"user_db.doris_user_id_name"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"user_db.doris_user_id_score")," in the Doris database. The command is as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'[root@fe001 ~]# mysql -u root -h localhost -P 9030 -p000000\nmysql> use user_db;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\nDatabase changed\n\nmysql> CREATE TABLE `doris_user_id_name` (\n       `id` int(11) NOT NULL COMMENT "\u7528\u6237id",\n       `name` varchar(50) NOT NULL COMMENT "\u6635\u79f0"\n       ) ENGINE=OLAP\n       UNIQUE KEY(`id`)\n       COMMENT "OLAP"\n       DISTRIBUTED BY HASH(`id`) BUCKETS 1\n       PROPERTIES (\n       "replication_allocation" = "tag.location.default: 1"\n       );\nQuery OK, 0 rows affected (0.06 sec)\n\nmysql> CREATE TABLE `doris_user_id_score` (\n       `id` int(11) NOT NULL COMMENT "\u7528\u6237id",\n       `score` double default 0\n       ) ENGINE=OLAP\n       UNIQUE KEY(`id`)\n       COMMENT "OLAP"\n       DISTRIBUTED BY HASH(`id`) BUCKETS 1\n       PROPERTIES (\n       "replication_allocation" = "tag.location.default: 1"\n       );\nQuery OK, 0 rows affected (0.06 sec)\n')),(0,r.kt)("h2",{id:"how-to-create-a-doris-load-node"},"How to create a Doris Load Node"),(0,r.kt)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Single-sink: Doris load")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"[root@tasknode001 flink-1.13.5]# ./bin/sql-client.sh -l ./opt/connectors/mysql-cdc-inlong/ -l ./opt/connectors/doris/\nFlink SQL> SET 'execution.checkpointing.interval' = '3s';\n[INFO] Session property has been set.\n\nFlink SQL> SET 'table.dynamic-table-options.enabled' = 'true';\n[INFO] Session property has been set.\n\nFlink SQL> CREATE TABLE cdc_mysql_source (\n    >   id int\n    >   ,name VARCHAR\n    >   ,dr TINYINT\n    >   ,PRIMARY KEY (id) NOT ENFORCED\n    > ) WITH (\n    >  'connector' = 'mysql-cdc-inlong',\n    >  'hostname' = 'localhost',\n    >  'port' = '3306',\n    >  'username' = 'root',\n    >  'password' = '123456',\n    >  'database-name' = 'cdc',\n    >  'table-name' = 'cdc_mysql_source'\n    > );\n[INFO] Execute statement succeed.\n\nFlink SQL> CREATE TABLE cdc_doris_sink (\n    > id INT,\n    > name STRING,\n    > dr TINYINT\n    > ) WITH (\n    >  'connector' = 'doris-inlong',\n    >  'fenodes' = 'localhost:8030',\n    >  'table.identifier' = 'cdc.cdc_doris_sink',\n    >  'username' = 'root',\n    >  'password' = '000000',\n    >  'sink.properties.format' = 'json',\n    >  'sink.properties.strip_outer_array' = 'true',\n    >  'sink.enable-delete' = 'true'\n    > );\n[INFO] Execute statement succeed.\n\n-- Support delete event synchronization (sink.enable-delete='true'), requires Doris table to enable batch delete function\nFlink SQL> insert into cdc_doris_sink select * from cdc_mysql_source /*+ OPTIONS('server-id'='5402') */;\n[INFO] Submitting SQL update statement to the cluster...\n[INFO] SQL update statement has been successfully submitted to the cluster:\nJob ID: 5f89691571d7b3f3ca446589e3d0c3d3\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Single-sink: Doris load")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"./bin/sql-client.sh -l ./opt/connectors/mysql-cdc-inlong/ -l ./opt/connectors/doris/\nFlink SQL> SET 'execution.checkpointing.interval' = '3s';\n[INFO] Session property has been set.\n\nFlink SQL> SET 'table.dynamic-table-options.enabled' = 'true';\n[INFO] Session property has been set.\n\nFlink SQL> CREATE TABLE cdc_mysql_source (\n    >   id int\n    >   ,name VARCHAR\n    >   ,dr TINYINT\n    >   ,PRIMARY KEY (id) NOT ENFORCED\n    > ) WITH (\n    >  'connector' = 'mysql-cdc-inlong',\n    >  'hostname' = 'localhost',\n    >  'port' = '3306',\n    >  'username' = 'root',\n    >  'password' = '123456',\n    >  'database-name' = 'test',\n    >  'table-name' = 'cdc_mysql_source'\n    > );\n[INFO] Execute statement succeed.\n\nFlink SQL> CREATE TABLE cdc_doris_sink (\n    > id INT,\n    > name STRING,\n    > dr TINYINT\n    > ) WITH (\n    >  'connector' = 'doris-inlong',\n    >  'fenodes' = 'localhost:8030',\n    >  'username' = 'root',\n    >  'password' = '000000',\n    >  'sink.enable-delete' = 'true',\n    >  'sink.multiple.enable' = 'true',\n    >  'sink.multiple.format' = 'canal-json',\n    >  'sink.multiple.database-pattern' = '${database}',\n    >  'sink.multiple.table-pattern' = 'doris_${table}'\n    > );\n[INFO] Execute statement succeed.\n\n-- Support delete event synchronization (sink.enable-delete='true'), requires Doris table to enable batch delete function\nFlink SQL> insert into cdc_doris_sink select * from cdc_mysql_source /*+ OPTIONS('server-id'='5402') */;\n[INFO] Submitting SQL update statement to the cluster...\n[INFO] SQL update statement has been successfully submitted to the cluster:\nJob ID: 30feaa0ede92h6b6e25ea0cfda26df5e\n")),(0,r.kt)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,r.kt)("p",null,"TODO: It will be supported in the future."),(0,r.kt)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.kt)("p",null,"TODO: It will be supported in the future."),(0,r.kt)("h2",{id:"doris-load-node-options"},"Doris Load Node Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify which connector to use, valid values are: ",(0,r.kt)("inlineCode",{parentName:"td"},"doris"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fenodes"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Doris FE http address, support multiple addresses, separated by commas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table.identifier"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Doris table identifier, eg, db1.tbl1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Doris username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Doris password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.retries"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of retries to send requests to Doris")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.connect.timeout.ms"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"30000"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection timeout for sending requests to Doris")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.read.timeout.ms"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"30000"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Read timeout for sending request to Doris")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.query.timeout.s"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"3600"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Query the timeout time of Doris, the default is 1 hour, -1 means no timeout limit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.request.tablet.size"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer.MAX_VALUE"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of Doris Tablets corresponding to an Partition. The smaller this value is set, the more partitions will be generated. This will increase the parallelism on the flink side, but at the same time will cause greater pressure on Doris.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.batch.size"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"1024"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum number of rows to read data from BE at one time. Increasing this value can reduce the number of connections between Flink and Doris. Thereby reducing the extra time overhead caused by network delay.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.exec.mem.limit"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"2147483648"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"Memory limit for a single query. The default is 2GB, in bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.deserialize.arrow.async"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to support asynchronous conversion of Arrow format to RowBatch required for flink-doris-connector iteration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.deserialize.queue.size"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"64"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Asynchronous conversion of the internal processing queue in Arrow format takes effect when doris.deserialize.arrow.async is true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.read.field"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of column names in the Doris table, separated by commas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doris.filter.query"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter expression of the query, which is transparently transmitted to Doris. Doris uses this expression to complete source-side data filtering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.batch.size"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"10000"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of lines in a single write BE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of retries after writing BE failed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.batch.interval"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"10s"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The flush interval, after which the asynchronous thread will write the data in the cache to BE. The default value is 10 second, and the time units are ms, s, min, h, and d. Set to 0 to turn off periodic writing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.properties.*"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The stream load parameters.",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," eg:",(0,r.kt)("br",null)," sink.properties.column_separator' = ','",(0,r.kt)("br",null)," ",(0,r.kt)("br",null),"  Setting 'sink.properties.escape_delimiters' = 'true' if you want to use a control char as a separator, so that such as '","\\","x01' will translate to binary 0x01",(0,r.kt)("br",null),(0,r.kt)("br",null),"  Support JSON format import, you need to enable both 'sink.properties.format' ='json' and 'sink.properties.strip_outer_array' ='true'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.enable-delete"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable deletion. This option requires Doris table to enable batch delete function (0.15+ version is enabled by default), and only supports Uniq model.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.multiple.enable"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Determine whether to support multiple sink writing, default is ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),". when ",(0,r.kt)("inlineCode",{parentName:"td"},"sink.multiple.enable")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", need ",(0,r.kt)("inlineCode",{parentName:"td"},"sink.multiple.format"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"sink.multiple.database-pattern"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"sink.multiple.table-pattern")," be correctly set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.multiple.format"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The format of multiple sink, it represents the real format of the raw binary data. can be ",(0,r.kt)("inlineCode",{parentName:"td"},"canal-json")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"debezium-json")," at present. See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/inlong-website/blob/master/docs/data_node/load_node/kafka.md"},"kafka -- Dynamic Topic Extraction")," for more details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.multiple.database-pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Extract database name from the raw binary data, this is only used in the multiple sink writing scenario.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.multiple.table-pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Extract table name from the raw binary data, this is only used in the multiple sink writing scenario.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.multiple.ignore-single-table-errors"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether ignore the single table erros when multiple sink writing scenario. When it is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),"\uff0csink continue when one table occur exception, only stop the exception table sink. When it is ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", stop the whole sink when one table occur exception.")))),(0,r.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Flink Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NULL_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"NULL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CHAR"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LARGEINT"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMALV2"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIME"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HLL"),(0,r.kt)("td",{parentName:"tr",align:null},"Unsupported datatype")))),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/blob/1.0.0-rc03/docs/en/extending-doris/flink-doris-connector.md"},"flink-doris-connector")," for more details."))}c.isMDXComponent=!0}}]);
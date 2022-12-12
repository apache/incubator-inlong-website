"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[33868],{3905:(t,n,e)=>{e.d(n,{Zo:()=>m,kt:()=>c});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=a.createContext({}),d=function(t){var n=a.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},m=function(t){var n=d(t.components);return a.createElement(s.Provider,{value:n},t.children)},p="mdxType",k={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),p=d(e),u=r,c=p["".concat(s,".").concat(u)]||p[u]||k[u]||l;return e?a.createElement(c,i(i({ref:n},m),{},{components:e})):a.createElement(c,i({ref:n},m))}));function c(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=t,o[p]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=e[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}u.displayName="MDXCreateElement"},81877:(t,n,e)=>{e.d(n,{Y:()=>a});const a={inLongVersion:"1.5.0-SNAPSHOT"}},68276:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=e(87462),r=(e(67294),e(3905)),l=e(81877);const i={title:"StarRocks",sidebar_position:17},o=void 0,s={unversionedId:"data_node/load_node/starrocks",id:"data_node/load_node/starrocks",title:"StarRocks",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data_node/load_node/starrocks.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/starrocks",permalink:"/zh-CN/docs/next/data_node/load_node/starrocks",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/load_node/starrocks.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"StarRocks",sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Doris",permalink:"/zh-CN/docs/next/data_node/load_node/doris"},next:{title:"C++ SDK",permalink:"/zh-CN/docs/next/sdk/dataproxy-sdk/cpp"}},d={},m=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u652f\u6301\u7684\u7248\u672c",id:"\u652f\u6301\u7684\u7248\u672c",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"Maven \u4f9d\u8d56",id:"maven-\u4f9d\u8d56",level:3},{value:"\u51c6\u5907",id:"\u51c6\u5907",level:2},{value:"\u521b\u5efa MySQL Extract \u8868",id:"\u521b\u5efa-mysql-extract-\u8868",level:3},{value:"\u521b\u5efa StarRocks Load \u8868",id:"\u521b\u5efa-starrocks-load-\u8868",level:3},{value:"\u5982\u4f55\u521b\u5efa StarRocks Load \u8282\u70b9",id:"\u5982\u4f55\u521b\u5efa-starrocks-load-\u8282\u70b9",level:2},{value:"SQL API \u7528\u6cd5",id:"sql-api-\u7528\u6cd5",level:3},{value:"InLong Dashboard \u7528\u6cd5",id:"inlong-dashboard-\u7528\u6cd5",level:3},{value:"InLong Manager Client \u7528\u6cd5",id:"inlong-manager-client-\u7528\u6cd5",level:3},{value:"StarRocks Load \u8282\u70b9\u53c2\u6570",id:"starrocks-load-\u8282\u70b9\u53c2\u6570",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],p={toc:m};function k(t){let{components:n,...e}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"StarRocks Load")," \u8282\u70b9\u652f\u6301\u5c06\u6570\u636e\u5199\u5165 StarRocks \u6570\u636e\u5e93\u3002\n\u652f\u6301\u5355\u8868\u5199\u5165\u548c\u591a\u8868\u5199\u5165\u4e24\u79cd\u6a21\u5f0f\uff1a\u5355\u8868\u5199\u5165\u4e3a\u6307\u5b9a\u56fa\u5b9a\u5e93\u540d\u8868\u540d\u5199\u5165\uff1b\u591a\u8868\u5199\u5165\u652f\u6301\u6839\u636e\u6e90\u7aef\u6570\u636e\u683c\u5f0f\u81ea\u5b9a\u4e49\u5e93\u540d\u8868\u540d\u5199\u5165\uff0c\u9002\u7528\u4e8e\u6e90\u7aef\u591a\u8868\u5199\u5165\u6216\u8005\u6574\u5e93\u540c\u6b65\u7b49\u573a\u666f\u3002\n\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u8bbe\u7f6e StarRocks Load \u8282\u70b9\u5b9e\u73b0\u5199\u5165 StarRocks \u6570\u636e\u5e93\u8868\u3002"),(0,r.kt)("h2",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Load \u8282\u70b9"),(0,r.kt)("th",{parentName:"tr",align:null},"StarRocks \u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/next/data_node/load_node/starrocks"},"StarRocks")),(0,r.kt)("td",{parentName:"tr",align:null},"2.0+")))),(0,r.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,r.kt)("p",null,"\u4e3a\u4e86\u8bbe\u7f6e StarRocks Load \u8282\u70b9, \u4e0b\u9762\u63d0\u4f9b\u4e86\u4f7f\u7528\u6784\u5efa\u81ea\u52a8\u5316\u5de5\u5177\uff08\u4f8b\u5982 Maven \u6216 SBT\uff09\u6240\u9700\u8981\u7684\u4f9d\u8d56\u4fe1\u606f\u3002"),(0,r.kt)("h3",{id:"maven-\u4f9d\u8d56"},"Maven \u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-starrocks</artifactId>\n    <version>${l.Y.inLongVersion}</version>\n</dependency>\n`)),(0,r.kt)("h2",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,r.kt)("h3",{id:"\u521b\u5efa-mysql-extract-\u8868"},"\u521b\u5efa MySQL Extract \u8868"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5355\u8868\u5199\u5165\uff1a\u5728 MySQL ",(0,r.kt)("inlineCode",{parentName:"li"},"cdc")," \u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8868 ",(0,r.kt)("inlineCode",{parentName:"li"},"cdc_mysql_source"),"\u3002 \u547d\u4ee4\u5982\u4e0b:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"[root@fe001 ~]# mysql -u root -h localhost -P 3306 -p123456\nmysql> use cdc;\nDatabase changed\nmysql> CREATE TABLE `cdc_mysql_source` (\n       `id` int(11) NOT NULL AUTO_INCREMENT,\n       `name` varchar(64) DEFAULT NULL,\n       `dr` tinyint(3) DEFAULT 0,\n       PRIMARY KEY (`id`)\n       );\nQuery OK, 0 rows affected (0.02 sec)\n\nmysql> insert into cdc_mysql_source values(1, 'zhangsan', 0),(2, 'lisi', 0),(3, 'wangwu', 0);\nQuery OK, 3 rows affected (0.01 sec)\nRecords: 3  Duplicates: 0  Warnings: 0\n\nmysql> select * from cdc_mysql_source;\n+----+----------+----+\n| id | name     | dr |\n+----+----------+----+\n|  1 | zhangsan |  0 |\n|  2 | lisi     |  0 |\n|  3 | wangwu   |  0 |\n+----+----------+----+\n3 rows in set (0.07 sec)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u591a\u8868\u5199\u5165\uff1a\u5728 MySQL ",(0,r.kt)("inlineCode",{parentName:"li"},"user_db")," \u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8868 ",(0,r.kt)("inlineCode",{parentName:"li"},"user_id_name"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"user_id_score"),"\u3002 \u547d\u4ee4\u5982\u4e0b:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"[root@fe001 ~]# mysql -u root -h localhost -P 3306 -p123456\nmysql> use user_db;\nDatabase changed\nmysql> CREATE TABLE `user_id_name` (\n       `id` int(11) NOT NULL AUTO_INCREMENT,\n       `name` varchar(64) DEFAULT NULL\n       PRIMARY KEY (`id`)\n       );\nQuery OK, 0 rows affected (0.02 sec)\n\nmysql> CREATE TABLE `user_id_score` (\n       `id` int(11) NOT NULL AUTO_INCREMENT,\n       `score` double default 0,\n       PRIMARY KEY (`id`)\n       );\nQuery OK, 0 rows affected (0.02 sec)\n\nmysql> insert into user_id_name values(1001, 'lily'),(1002, 'tom'),(1003, 'alan');\nQuery OK, 3 rows affected (0.01 sec)\nRecords: 3  Duplicates: 0  Warnings: 0 \n\nmysql> insert into user_id_score values(1001, 99),(1002, 96),(1003, 98);\nQuery OK, 3 rows affected (0.01 sec)\nRecords: 3  Duplicates: 0  Warnings: 0 \n\nmysql> select * from user_id_name;\n+------+--------+\n|  id  | name   |\n+------+--------+\n| 1001 | lily   |\n| 1002 | tom    |\n| 1003 | alan   |\n+----+----------+\n3 rows in set (0.07 sec)    \n\nmysql> select * from user_id_score;\n+------+------+\n|  id  | name |\n+------+------+\n| 1001 | 99   |\n| 1002 | 96   |\n| 1003 | 98   |\n+----+--------+\n3 rows in set (0.07 sec)  \n")),(0,r.kt)("h3",{id:"\u521b\u5efa-starrocks-load-\u8868"},"\u521b\u5efa StarRocks Load \u8868"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5355\u8868\u5199\u5165\uff1a\u5728 StarRocks ",(0,r.kt)("inlineCode",{parentName:"li"},"cdc"),"\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8868",(0,r.kt)("inlineCode",{parentName:"li"},"cdc_starrocks_sink"),"\u3002\u547d\u4ee4\u5982\u4e0b:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'[root@fe001 ~]# mysql -u username -h localhost -P 9030 -p password\nmysql> use cdc;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\nDatabase changed\n\nmysql> CREATE TABLE `cdc_starrocks_sink` (\n       `id` int(11) NOT NULL COMMENT "\u7528\u6237id",\n       `name` varchar(50) NOT NULL COMMENT "\u6635\u79f0",\n       `dr` tinyint(4) NULL COMMENT "\u903b\u8f91\u5220\u9664"\n       ) ENGINE=OLAP\n       PRIMARY KEY(`id`)\n       COMMENT "OLAP"\n       DISTRIBUTED BY HASH(`id`) BUCKETS 1\n       PROPERTIES (\n       "replication_allocation" = "tag.location.default: 1"\n       );\nQuery OK, 0 rows affected (0.06 sec)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u591a\u8868\u5199\u5165\uff1a\u5728 StarRocks ",(0,r.kt)("inlineCode",{parentName:"li"},"user_db"),"\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8868",(0,r.kt)("inlineCode",{parentName:"li"},"starrocks_user_id_name"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"starrocks_user_id_score"),"\u3002\u547d\u4ee4\u5982\u4e0b:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'[root@fe001 ~]# mysql -u username -h localhost -P 9030 -p password\nmysql> use user_db;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\nDatabase changed\n\nmysql> CREATE TABLE `starrocks_user_id_name` (\n       `id` int(11) NOT NULL COMMENT "\u7528\u6237id",\n       `name` varchar(50) NOT NULL COMMENT "\u6635\u79f0"\n       ) ENGINE=OLAP\n       PRIMARY KEY(`id`)\n       COMMENT "OLAP"\n       DISTRIBUTED BY HASH(`id`) BUCKETS 1\n       PROPERTIES (\n       "replication_allocation" = "tag.location.default: 1"\n       );\nQuery OK, 0 rows affected (0.06 sec)\n\nmysql> CREATE TABLE `starrocks_user_id_score` (\n       `id` int(11) NOT NULL COMMENT "\u7528\u6237id",\n       `score` double default 0\n       ) ENGINE=OLAP\n       PRIMARY KEY(`id`)\n       COMMENT "OLAP"\n       DISTRIBUTED BY HASH(`id`) BUCKETS 1\n       PROPERTIES (\n       "replication_allocation" = "tag.location.default: 1"\n       );\nQuery OK, 0 rows affected (0.06 sec)\n')),(0,r.kt)("h2",{id:"\u5982\u4f55\u521b\u5efa-starrocks-load-\u8282\u70b9"},"\u5982\u4f55\u521b\u5efa StarRocks Load \u8282\u70b9"),(0,r.kt)("h3",{id:"sql-api-\u7528\u6cd5"},"SQL API \u7528\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5355\u8868\u5199\u5165\uff1a StarRocks \u5355\u8868\u5199\u5165")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"[root@tasknode001 flink-1.13.5]# ./bin/sql-client.sh -l ./opt/connectors/mysql-cdc-inlong/ -l ./opt/connectors/starrocks/\nFlink SQL> SET 'execution.checkpointing.interval' = '3s';\n[INFO] Session property has been set.\n\nFlink SQL> SET 'table.dynamic-table-options.enabled' = 'true';\n[INFO] Session property has been set.\n\nFlink SQL> CREATE TABLE cdc_mysql_source (\n    >   id int\n    >   ,name VARCHAR\n    >   ,dr TINYINT\n    >   ,PRIMARY KEY (id) NOT ENFORCED\n    > ) WITH (\n    >  'connector' = 'mysql-cdc-inlong',\n    >  'hostname' = 'localhost',\n    >  'port' = '3306',\n    >  'username' = 'root',\n    >  'password' = '123456',\n    >  'database-name' = 'cdc',\n    >  'table-name' = 'cdc_mysql_source'\n    > );\n[INFO] Execute statement succeed.\n\nFlink SQL> CREATE TABLE cdc_starrocks_sink (\n    > id INT,\n    > name STRING,\n    > dr TINYINT\n    > ) WITH (\n    >  'connector' = 'starrocks-inlong',\n    >  'fenodes' = 'localhost:8030',\n    >  'table.identifier' = 'cdc.cdc_starrocks_sink',\n    >  'username' = 'username',\n    >  'password' = 'password',\n    >  'sink.properties.format' = 'json'\n    > );\n[INFO] Execute statement succeed.\n\nFlink SQL> insert into cdc_starrocks_sink select * from cdc_mysql_source /*+ OPTIONS('server-id'='5402') */;\n[INFO] Submitting SQL update statement to the cluster...\n[INFO] SQL update statement has been successfully submitted to the cluster:\nJob ID: 5f89691571d7b3f3ca446589e3d0c3d3\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u591a\u8868\u5199\u5165\uff1a StarRocks \u591a\u8868\u5199\u5165")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"./bin/sql-client.sh -l ./opt/connectors/mysql-cdc-inlong/ -l ./opt/connectors/starrocks/\nFlink SQL> SET 'execution.checkpointing.interval' = '3s';\n[INFO] Session property has been set.\n\nFlink SQL> SET 'table.dynamic-table-options.enabled' = 'true';\n[INFO] Session property has been set.\n\nFlink SQL> CREATE TABLE cdc_mysql_source (\n    >   id int\n    >   ,name VARCHAR\n    >   ,dr TINYINT\n    >   ,PRIMARY KEY (id) NOT ENFORCED\n    > ) WITH (\n    >  'connector' = 'mysql-cdc-inlong',\n    >  'hostname' = 'localhost',\n    >  'port' = '3306',\n    >  'username' = 'root',\n    >  'password' = '123456',\n    >  'database-name' = 'test',\n    >  'table-name' = 'cdc_mysql_source'\n    > );\n[INFO] Execute statement succeed.\n\nFlink SQL> CREATE TABLE cdc_starrocks_sink (\n    > id INT,\n    > name STRING,\n    > dr TINYINT\n    > ) WITH (\n    >  'connector' = 'starrocks-inlong',\n    >  'fenodes' = 'localhost:8030',\n    >  'username' = 'username',\n    >  'password' = 'password',\n    >  'sink.multiple.enable' = 'true',\n    >  'sink.multiple.format' = 'canal-json',\n    >  'sink.multiple.database-pattern' = '${database}',\n    >  'sink.multiple.table-pattern' = 'StarRocks_${table}'\n    > );\n[INFO] Execute statement succeed.\n\nFlink SQL> insert into cdc_starrocks_sink select * from cdc_mysql_source /*+ OPTIONS('server-id'='5402') */;\n[INFO] Submitting SQL update statement to the cluster...\n[INFO] SQL update statement has been successfully submitted to the cluster:\nJob ID: 30feaa0ede92h6b6e25ea0cfda26df5e\n")),(0,r.kt)("h3",{id:"inlong-dashboard-\u7528\u6cd5"},"InLong Dashboard \u7528\u6cd5"),(0,r.kt)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,r.kt)("h3",{id:"inlong-manager-client-\u7528\u6cd5"},"InLong Manager Client \u7528\u6cd5"),(0,r.kt)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"starrocks-load-\u8282\u70b9\u53c2\u6570"},"StarRocks Load \u8282\u70b9\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u9009"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u4f7f\u7528\u54ea\u4e2aconnector\uff0c\u5408\u6cd5\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"td"},"starrocks-inlong"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jdbc-url"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5728starrocks\u4e2d\u6267\u884c\u67e5\u8be2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"load-url"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u683c\u5f0f\u4e3a fe_ip:http_port;fe_ip:http_port \u7528\u5206\u53f7(;)\u9694\u5f00\u3002\u7528\u4e8e\u5411starrocks\u6279\u91cf\u5199\u5165\u6570\u636e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database-name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"starrocks\u7684\u6570\u636e\u5e93\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table-name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"starrocks\u7684\u8868\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"starrocks\u8fde\u63a5\u7684\u7528\u6237\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"starrocks\u8fde\u63a5\u7684\u53e3\u4ee4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.semantic"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"at-least-once"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u503c\u4e3a at-least-once \u6216 exactly-once (\u4ec5\u5728checkpoint\u65f6\u5237\u65b0\u6570\u636e\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"sink.buffer-flush.*")," \u7b49\u53c2\u6570\u5c06\u4e0d\u518d\u5de5\u4f5c)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.version"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"AUTO"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"exectly-once\u8bed\u4e49\u7684\u5b9e\u73b0\u7248\u672c\uff0c\u53ea\u6709connector\u57281.2.4\u53ca\u4ee5\u4e0a\u7684\u7248\u672c\u65f6\u624d\u53ef\u7528\u3002\u5982\u679c\u586bV2\uff0c\u5219\u4f7f\u7528StarRocks\u7684stream load\u4e8b\u52a1\u63a5\u53e3\u9700\u89812.4\u53ca\u4ee5\u4e0a\u7684StarRocks\u7248\u672c\u3002\u5982\u679c\u586bV1\uff0c\u5219\u4f7f\u7528stream load\u975e\u4e8b\u52a1\u63a5\u53e3\u3002\u5982\u679c\u586bAUTO\uff0c\u5219connector\u6839\u636eStarRocks\u662f\u5426\u652f\u6301\u4e8b\u52a1\u7684\u7279\u6027\u6765\u81ea\u52a8\u9009\u62e9stream load\u7684\u4e8b\u52a1\u63a5\u53e3\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.buffer-flush.max-bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"94371840(90M)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6279\u91cf\u5237\u65b0\u7f13\u5b58\u6570\u636e\u7684\u5927\u5c0f\u9608\u503c\uff0c\u8303\u56f4\uff1a","[64MB, 10GB]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.buffer-flush.max-rows"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"500000"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6279\u91cf\u5237\u65b0\u7f13\u5b58\u6570\u636e\u7684\u884c\u6570\u9608\u503c\uff0c\u8303\u56f4\uff1a","[64,000, 5000,000]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.buffer-flush.interval-ms"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"300000"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6279\u91cf\u5237\u65b0\u7f13\u5b58\u6570\u636e\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u8303\u56f4\uff1a","[1000ms, 3600000ms]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"stream load\u8bf7\u6c42\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\uff0c\u8303\u56f4\uff1a","[0, 10]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.connect.timeout-ms"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u5230\u6307\u5b9a\u7684load-url\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2\uff0c\u8303\u56f4\uff1a","[100, 60000]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.properties.format"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"CSV"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bfc\u5165\u5230starocks\u7684\u6570\u636e\u6587\u4ef6\u683c\u5f0f\uff0c\u53ef\u9009\u7684\u503c\u4e3a\uff1aCSV\u548cJSON\u3002\u9ed8\u8ba4\u4e3a: CSV")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.properties.*"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"stream load\u7684\u5c5e\u6027\uff0c\u4f8b\u5982\uff1a'sink.properties.columns' = 'k1, k2, k3'\u3002\u4eceStarRocks 2.4\u5f00\u59cb\uff0cflink-connector-starrocks\u652f\u6301Primary Key\u6a21\u5f0f\u4e0b\u7684\u6570\u636e\u90e8\u5206\u66f4\u65b0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.properties.ignore_json_size"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5ffd\u7565json\u6570\u636e\u7684\u6279\u91cf\u5927\u5c0f\u9650\u5236(100MB)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.multiple.enable"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u51b3\u5b9a\u662f\u5426\u5f00\u59cb\u591a\u8868(\u6574\u5e93)\u5199\u5165\u7279\u6027\uff0c\u9ed8\u8ba4\u4e3a",(0,r.kt)("inlineCode",{parentName:"td"},"false"),"\u3002\u5f53 ",(0,r.kt)("inlineCode",{parentName:"td"},"sink.multiple.enable")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u4e5f\u9700\u8981\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},"sink.multiple.format"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"sink.multiple.database-pattern"),"\u548c",(0,r.kt)("inlineCode",{parentName:"td"},"sink.multiple.table-pattern"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.multiple.format"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u591a\u8868(\u6574\u5e93)\u5199\u5165\u7684\u6570\u636e\u683c\u5f0f\uff0c\u5b83\u8868\u793aconnector\u4e4b\u95f4\u6d41\u8f6c\u7684\u539f\u59cb\u4e8c\u8fdb\u5236\u6570\u636e\u7684\u5b9e\u9645\u683c\u5f0f\uff0c\u76ee\u524d\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"td"},"canal-json")," \u548c ",(0,r.kt)("inlineCode",{parentName:"td"},"debezium-json"),"\u3002\u53ef\u4ee5\u67e5\u770b",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/inlong-website/blob/master/docs/data_node/load_node/kafka.md"},"kafka -- Dynamic Topic Extraction"),"\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.multiple.database-pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ece\u539f\u59cb\u4e8c\u8fdb\u5236\u6570\u636e\u4e2d\u63d0\u53d6\u6570\u636e\u5e93\u540d\uff0c\u4ec5\u5728\u591a\u8868(\u6574\u5e93)\u540c\u6b65\u573a\u666f\u4e2d\u4f7f\u7528\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.multiple.table-pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ece\u539f\u59cb\u4e8c\u8fdb\u5236\u6570\u636e\u4e2d\u63d0\u53d6\u8868\u540d\uff0c\u4ec5\u5728\u591a\u8868(\u6574\u5e93)\u540c\u6b65\u573a\u666f\u4e2d\u4f7f\u7528\u3002")))),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flink\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"StarRocks\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:null},"INTEGER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BINARY"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CHAR"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON / STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON / STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON / STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP_WITHOUT_TIME_ZONE(N)"),(0,r.kt)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP_WITH_LOCAL_TIME_ZONE(N)"),(0,r.kt)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ARRAY","<","T",">"),(0,r.kt)("td",{parentName:"tr",align:null},"ARRAY","<","T",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MAP","<","KT,VT",">"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON / JSON STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ROW","<","arg T...",">"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON / JSON STRING")))),(0,r.kt)("p",null,"\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/blob/main/README.md"},"flink-connector-starrocks")," \u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002"))}k.isMDXComponent=!0}}]);
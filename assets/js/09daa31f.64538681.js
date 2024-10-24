"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[50438],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>u});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=n.createContext({}),i=function(e){var a=n.useContext(g),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=i(e.components);return n.createElement(g.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=i(t),y=r,u=p["".concat(g,".").concat(y)]||p[y]||m[y]||l;return t?n.createElement(u,o(o({ref:a},s),{},{components:t})):n.createElement(u,o({ref:a},s))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=y;var d={};for(var g in a)hasOwnProperty.call(a,g)&&(d[g]=a[g]);d.originalType=e,d[p]="string"==typeof e?e:r,o[1]=d;for(var i=2;i<l;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7830:(e,a,t)=>{t.d(a,{l:()=>n});const n={inLongVersion:"2.1.0-SNAPSHOT"}},14011:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>d,default:()=>y,frontMatter:()=>o,metadata:()=>g,toc:()=>s});var n=t(58168),r=(t(96540),t(15680)),l=t(7830);const o={title:"SQLServer-CDC",sidebar_position:10},d=void 0,g={unversionedId:"data_node/extract_node/sqlserver-cdc",id:"version-2.0.0/data_node/extract_node/sqlserver-cdc",title:"SQLServer-CDC",description:"Overview",source:"@site/versioned_docs/version-2.0.0/data_node/extract_node/sqlserver-cdc.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/sqlserver-cdc",permalink:"/docs/data_node/extract_node/sqlserver-cdc",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/data_node/extract_node/sqlserver-cdc.md",tags:[],version:"2.0.0",sidebarPosition:10,frontMatter:{title:"SQLServer-CDC",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Pulsar",permalink:"/docs/data_node/extract_node/pulsar"},next:{title:"Doris",permalink:"/docs/data_node/extract_node/doris"}},i={},s=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"Setup SQLServer Extract Node",id:"setup-sqlserver-extract-node",level:2},{value:"How to create a SQLServer Extract Node",id:"how-to-create-a-sqlserver-extract-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"SQLServer Extract Node Options",id:"sqlserver-extract-node-options",level:2},{value:"Available Metadata",id:"available-metadata",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],p={toc:s},m="wrapper";function y(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"The SQLServer Extract Node reads data and incremental data from the SQLServer database. The following will describe how to set up the SQLServer extraction node."),(0,r.yg)("h2",{id:"supported-version"},"Supported Version"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Extract Node"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/data_node/extract_node/sqlserver-cdc"},"SQLServer-cdc")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server?view=sql-server-ver16"},"SQLServer"),": 2014\u30012016\u30012017\u30012019\u30012022")))),(0,r.yg)("h2",{id:"dependencies"},"Dependencies"),(0,r.yg)("p",null,"Introduce related SQLServer Extract Node dependencies through maven.\nOf course, you can also use INLONG to provide jar packages.(",(0,r.yg)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"sort-connector-sqlserver-cdc"),")"),(0,r.yg)("h3",{id:"maven-dependency"},"Maven dependency"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-sqlserver-cdc</artifactId>\n    <version>${l.l.inLongVersion}</version>\n</dependency>\n`)),(0,r.yg)("h2",{id:"setup-sqlserver-extract-node"},"Setup SQLServer Extract Node"),(0,r.yg)("p",null,"SQLServer Extract Node needs to open related libraries and tables, the steps are as follows:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Enable the CDC function for the database.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"if exists(select 1 from sys.databases where name='dbName' and is_cdc_enabled=0)\nbegin\n    exec sys.sp_cdc_enable_db\nend\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Check the database CDC capability status.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select is_cdc_enabled from sys.databases where name='dbName'\n")),(0,r.yg)("p",null,"note: 1 is running CDC of DB."),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Turn on CDC for the table")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"IF EXISTS(SELECT 1 FROM sys.tables WHERE name='tableName' AND is_tracked_by_cdc = 0)\nBEGIN\n    EXEC sys.sp_cdc_enable_table\n        @source_schema = 'dbo', -- source_schema\n        @source_name = 'tableName', -- table_name\n        @capture_instance = NULL, -- capture_instance\n        @supports_net_changes = 1, -- supports_net_changes\n        @role_name = NULL, -- role_name\n        @index_name = NULL, -- index_name\n        @captured_column_list = NULL, -- captured_column_list\n        @filegroup_name = 'PRIMARY' -- filegroup_name\nEND\n")),(0,r.yg)("p",null,"note: The table must have a primary key or unique index."),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Check the table CDC capability status.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT is_tracked_by_cdc FROM sys.tables WHERE name='tableName'\n")),(0,r.yg)("p",null,"note: 1 is running CDC of table."),(0,r.yg)("h2",{id:"how-to-create-a-sqlserver-extract-node"},"How to create a SQLServer Extract Node"),(0,r.yg)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.yg)("p",null,"The example below shows how to create a SQLServer Extract Node with ",(0,r.yg)("inlineCode",{parentName:"p"},"Flink SQL Cli")," :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Set checkpoint every 3000 milliseconds                       \nFlink SQL> SET 'execution.checkpointing.interval' = '3s';   \n\n-- Create a SQLServer table 'sqlserver_extract_node' in Flink SQL Cli\nFlink SQL> CREATE TABLE sqlserver_extract_node (\n     order_id INT,\n     order_date TIMESTAMP(0),\n     customer_name STRING,\n     price DECIMAL(10, 5),\n     product_id INT,\n     order_status BOOLEAN,\n     PRIMARY KEY(order_id) NOT ENFORCED\n     ) WITH (\n     'connector' = 'sqlserver-cdc-inlong',\n     'hostname' = 'YourHostname',\n     'port' = 'port', --default:1433\n     'username' = 'YourUsername',\n     'password' = 'YourPassword',\n     'database-name' = 'YourDatabaseName',\n     'schema-name' = 'YourSchemaName' -- default:dbo\n     'table-name' = 'YourTableName');\n  \n-- Read snapshot and binlog from sqlserver_extract_node\nFlink SQL> SELECT * FROM sqlserver_extract_node;\n")),(0,r.yg)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,r.yg)("p",null,"TODO"),(0,r.yg)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.yg)("p",null,"TODO"),(0,r.yg)("h2",{id:"sqlserver-extract-node-options"},"SQLServer Extract Node Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Specify what connector to use, here should be 'sqlserver-cdc-inlong'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hostname"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"IP address or hostname of the SQLServer database.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Username to use when connecting to the SQLServer database.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Password to use when connecting to the SQLServer database.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database-name"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Database name of the SQLServer database to monitor.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema-name"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"dbo"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Schema name of the SQLServer database to monitor.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table-name"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Table name of the SQLServer database to monitor.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"port"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"1433"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer port number of the SQLServer database.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"server-time-zone"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"UTC"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},'The session time zone in database server, e.g. "Asia/Shanghai".')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Inlong metric label, format of value is groupId=","[groupId]","&streamId=","[streamId]","&nodeId=","[nodeId]",".")))),(0,r.yg)("h2",{id:"available-metadata"},"Available Metadata"),(0,r.yg)("p",null,"The following format metadata can be exposed as read-only (VIRTUAL) columns in a table definition."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"DataType"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table_name"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the table that contain the row.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema_name"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the schema that contain the row.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database_name"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the database that contain the row.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"op_ts"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ(3) NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"It indicates the time that the change was made in the database.",(0,r.yg)("br",null),"If the record is read from snapshot of the table instead of the binlog, the value is always 0.")))),(0,r.yg)("p",null,"The extended CREATE TABLE example demonstrates the syntax for exposing these metadata fields:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sqlserver_extract_node (\n    table_name STRING METADATA  FROM 'table_name' VIRTUAL,\n    schema_name STRING METADATA  FROM 'schema_name' VIRTUAL,\n    db_name STRING METADATA FROM 'database_name' VIRTUAL,\n    operation_ts TIMESTAMP_LTZ(3) METADATA FROM 'op_ts' VIRTUAL,\n    id INT NOT NULL\n) WITH (\n    'connector' = 'sqlserver-cdc-inlong',\n    'hostname' = 'localhost',\n    'port' = '1433',\n    'username' = 'sa',\n    'password' = 'password',\n    'database-name' = 'test',\n    'schema-name' = 'dbo',\n    'table-name' = 'worker'\n);\n")),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"SQLServer type"),(0,r.yg)("th",{parentName:"tr",align:null},"Flink SQL type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"char(n)"),(0,r.yg)("td",{parentName:"tr",align:null},"CHAR(n)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"varchar(n) ",(0,r.yg)("br",null),"nvarchar(n) ",(0,r.yg)("br",null),"nchar(n)"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(n)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"text ",(0,r.yg)("br",null),"ntext ",(0,r.yg)("br",null),"xml"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decimal(p, s) ",(0,r.yg)("br",null),"money ",(0,r.yg)("br",null),"smallmoney"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p, s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"numeric"),(0,r.yg)("td",{parentName:"tr",align:null},"NUMERIC")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"REAL ",(0,r.yg)("br",null),"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bit"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"smallint"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"time (n)"),(0,r.yg)("td",{parentName:"tr",align:null},"TIME (n)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetime2 ",(0,r.yg)("br",null),"datetime ",(0,r.yg)("br",null),"smalldatetime"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP(n)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetimeoffset"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ(3)")))))}y.isMDXComponent=!0}}]);
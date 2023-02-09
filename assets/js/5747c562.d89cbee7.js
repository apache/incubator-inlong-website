"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[39053],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=p(n),g=r,k=s["".concat(d,".").concat(g)]||s[g]||u[g]||l;return n?a.createElement(k,o(o({ref:e},m),{},{components:n})):a.createElement(k,o({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[s]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},82500:(t,e,n)=>{n.d(e,{Y:()=>a});const a={inLongVersion:"1.5.0-SNAPSHOT"}},1554:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(82500);const o={title:"SQLServer",sidebar_position:14},i=void 0,d={unversionedId:"data_node/load_node/sqlserver",id:"version-1.5.0/data_node/load_node/sqlserver",title:"SQLServer",description:"Overview",source:"@site/versioned_docs/version-1.5.0/data_node/load_node/sqlserver.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/sqlserver",permalink:"/docs/data_node/load_node/sqlserver",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.5.0/data_node/load_node/sqlserver.md",tags:[],version:"1.5.0",sidebarPosition:14,frontMatter:{title:"SQLServer",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL",permalink:"/docs/data_node/load_node/postgresql"},next:{title:"TDSQL-PostgreSQL",permalink:"/docs/data_node/load_node/tdsql-postgresql"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"How to create an SQLServer Load Node",id:"how-to-create-an-sqlserver-load-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"SQLServer Load Node Options",id:"sqlserver-load-node-options",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],s={toc:m},u="wrapper";function g(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SQLServer Load Node")," supports to write data into SQLServer database. This document describes how to set up the SQLServer Load\nNode to run SQL queries against SQLServer database."),(0,r.kt)("h2",{id:"supported-version"},"Supported Version"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Load Node"),(0,r.kt)("th",{parentName:"tr",align:null},"Driver"),(0,r.kt)("th",{parentName:"tr",align:null},"Group Id"),(0,r.kt)("th",{parentName:"tr",align:null},"Artifact Id"),(0,r.kt)("th",{parentName:"tr",align:null},"JAR"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/data_node/load_node/sqlserver"},"SQLServer")),(0,r.kt)("td",{parentName:"tr",align:null},"SQL Server"),(0,r.kt)("td",{parentName:"tr",align:null},"com.microsoft.sqlserver"),(0,r.kt)("td",{parentName:"tr",align:null},"mssql-jdbc"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"},"Download"))))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"In order to set up the ",(0,r.kt)("inlineCode",{parentName:"p"},"SQLServer Load Node"),", the following provides dependency information for both projects using a\nbuild automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles."),(0,r.kt)("h3",{id:"maven-dependency"},"Maven dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-jdbc</artifactId>\n    <version>${l.Y.inLongVersion}</version>\n</dependency>\n`)),(0,r.kt)("h2",{id:"how-to-create-an-sqlserver-load-node"},"How to create an SQLServer Load Node"),(0,r.kt)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\n-- MySQL extract node\nCREATE TABLE `mysql_extract_table`(\n  PRIMARY KEY (`id`) NOT ENFORCED,\n  `id` BIGINT,\n  `name` STRING,\n  `age` INT\n) WITH (\n  'connector' = 'mysql-cdc-inlong',\n  'url' = 'jdbc:mysql://localhost:3306/read',\n  'username' = 'inlong',\n  'password' = 'inlong',\n  'table-name' = 'user'\n)\n\n-- SQLServer load node\nCREATE TABLE `sqlserver_load_table`(\n  PRIMARY KEY (`id`) NOT ENFORCED,\n  `id` BIGINT,\n  `name` STRING,\n  `age` INT\n) WITH (\n  'connector' = 'jdbc-inlong',\n  'url' = 'jdbc:sqlserver://localhost:1433;databaseName=column_type_test',\n  'username' = 'inlong',\n  'password' = 'inlong',\n  'table-name' = 'dbo.work1'\n)\n\n-- write data into SQLServer\nINSERT INTO sqlserver_load_table \nSELECT id, name , age FROM mysql_extract_table;  \n\n")),(0,r.kt)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,r.kt)("p",null,"TODO: It will be supported in the future."),(0,r.kt)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.kt)("p",null,"TODO: It will be supported in the future."),(0,r.kt)("h2",{id:"sqlserver-load-node-options"},"SQLServer Load Node Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify what connector to use, here should be 'jdbc-inlong'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The JDBC database url.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table-name"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of JDBC table to connect.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"driver"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The class name of the JDBC driver to use to connect to this URL, if not set, it will automatically be derived from the URL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The JDBC user name. 'username' and 'password' must both be specified if any of them is specified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The JDBC password.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection.max-retry-timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"60s"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum timeout between retries. The timeout should be in second granularity and shouldn't be smaller than 1 second.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.buffer-flush.max-rows"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The max size of buffered records before flush. Can be set to zero to disable it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.buffer-flush.interval"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"1s"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration"),(0,r.kt)("td",{parentName:"tr",align:null},"The flush interval mills, over this time, asynchronous threads will flush data. Can be set to '0' to disable it. Note, 'sink.buffer-flush.max-rows' can be set to '0' with the flush interval set allowing for complete async processing of buffered actions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The max retry times if writing records to database failed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.parallelism"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the parallelism of the JDBC sink operator. By default, the parallelism is determined by the framework using the same parallelism of the upstream chained operator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sink.ignore.changelog"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Ignore all ",(0,r.kt)("inlineCode",{parentName:"td"},"RowKind"),", ingest them as ",(0,r.kt)("inlineCode",{parentName:"td"},"INSERT"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"(none)"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Inlong metric label, format of value is groupId=",(0,r.kt)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,r.kt)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,r.kt)("inlineCode",{parentName:"td"},"{nodeId}"),".")))),(0,r.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SQLServer type"),(0,r.kt)("th",{parentName:"tr",align:null},"Flink SQL type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"char(n)"),(0,r.kt)("td",{parentName:"tr",align:null},"CHAR(n)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"varchar(n) ",(0,r.kt)("br",null)," nvarchar(n) ",(0,r.kt)("br",null)," nchar(n)"),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR(n)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text ",(0,r.kt)("br",null)," ntext ",(0,r.kt)("br",null)," xml"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT ",(0,r.kt)("br",null)," BIGSERIAL"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"decimal(p, s) ",(0,r.kt)("br",null)," money ",(0,r.kt)("br",null)," smallmoney"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL(p, s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:null},"NUMERIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float ",(0,r.kt)("br",null)," real"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bit"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tinyint"),(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"smallint"),(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time(n)"),(0,r.kt)("td",{parentName:"tr",align:null},"TIME(n)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datetime2 ",(0,r.kt)("br",null)," datetime ",(0,r.kt)("br",null)," smalldatetime"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP(n)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datetimeoffset"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ(3)")))))}g.isMDXComponent=!0}}]);
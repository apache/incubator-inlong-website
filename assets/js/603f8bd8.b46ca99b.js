"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[17840],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>s});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),g=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=g(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=g(a),u=r,s=m["".concat(d,".").concat(u)]||m[u]||y[u]||l;return a?n.createElement(s,i(i({ref:t},p),{},{components:a})):n.createElement(s,i({ref:t},p))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},12349:(e,t,a)=>{a.d(t,{l:()=>n});const n={inLongVersion:"1.13.0-SNAPSHOT"}},41018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=a(58168),r=(a(96540),a(15680)),l=a(12349);const i={title:"Hudi",sidebar_position:11},o=void 0,d={unversionedId:"data_node/extract_node/hudi",id:"version-1.13.0/data_node/extract_node/hudi",title:"Hudi",description:"Overview",source:"@site/versioned_docs/version-1.13.0/data_node/extract_node/hudi.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/hudi",permalink:"/docs/1.13.0/data_node/extract_node/hudi",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.13.0/data_node/extract_node/hudi.md",tags:[],version:"1.13.0",sidebarPosition:11,frontMatter:{title:"Hudi",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Doris",permalink:"/docs/1.13.0/data_node/extract_node/doris"},next:{title:"TubeMQ",permalink:"/docs/1.13.0/data_node/extract_node/tube"}},g={},p=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"How to create a Hudi Extract Node",id:"how-to-create-a-hudi-extract-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for Dashboard",id:"usage-for-dashboard",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"Hudi Extract Node Options",id:"hudi-extract-node-options",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],m={toc:p},y="wrapper";function u(e){let{components:t,...i}=e;return(0,r.yg)(y,(0,n.A)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://hudi.apache.org/cn/docs/overview/"},"Apache Hudi"),' (pronounced "hoodie") is a next-generation streaming data lake platform.\nApache Hudi brings core warehouse and database functionality directly into the data lake.\nHudi provides tables, transactions, efficient upserts/deletes, advanced indexing, streaming ingestion services, data clustering/compression optimizations, and concurrency while keeping data in an open source file format.'),(0,r.yg)("h2",{id:"supported-version"},"Supported Version"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Load Node"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/1.13.0/data_node/extract_node/hudi"},"Hudi")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://hudi.apache.org/cn/docs/quick-start-guide"},"Hudi"),": 0.12+")))),(0,r.yg)("h3",{id:"dependencies"},"Dependencies"),(0,r.yg)("p",null,"Introduce ",(0,r.yg)("inlineCode",{parentName:"p"},"sort-connector-hudi")," through ",(0,r.yg)("inlineCode",{parentName:"p"},"Maven")," to build your own project.\nOf course, you can also directly use the ",(0,r.yg)("inlineCode",{parentName:"p"},"jar")," package provided by ",(0,r.yg)("inlineCode",{parentName:"p"},"INLONG"),".\n(",(0,r.yg)("a",{parentName:"p",href:"https://inlong.apache.org/download/"},"sort-connector-hudi"),")"),(0,r.yg)("h3",{id:"maven-dependency"},"Maven dependency"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-hudi</artifactId>\n    <version>${l.l.inLongVersion}</version>\n</dependency>\n`)),(0,r.yg)("h2",{id:"how-to-create-a-hudi-extract-node"},"How to create a Hudi Extract Node"),(0,r.yg)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.yg)("p",null,"The example below shows how to create a Hudi Load Node with ",(0,r.yg)("inlineCode",{parentName:"p"},"Flink SQL Cli")," :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `hudi_table_name` (\n  id STRING,\n  name STRING,\n  uv BIGINT,\n  pv BIGINT\n) WITH (\n    'connector' = 'hudi-inlong',\n    'path' = 'hdfs://127.0.0.1:90001/data/warehouse/hudi_db_name.db/hudi_table_name',\n    'uri' = 'thrift://127.0.0.1:8091',\n    'hoodie.database.name' = 'hudi_db_name',\n    'hoodie.table.name' = 'hudi_table_name',\n    'read.streaming.check-interval'='1',\n    'read.streaming.enabled'='true',\n    'read.streaming.skip_compaction'='true',\n    'read.start-commit'='20221220121000',\n    --\n    'hoodie.bucket.index.hash.field' = 'id',\n    -- compaction\n    'compaction.tasks' = '10',\n    'compaction.async.enabled' = 'true',\n    'compaction.schedule.enabled' = 'true',\n    'compaction.max_memory' = '3096',\n    'compaction.trigger.strategy' = 'num_or_time',\n    'compaction.delta_commits' = '5',\n    'compaction.max_memory' = '3096',\n    --\n    'hoodie.keep.min.commits' = '1440',\n    'hoodie.keep.max.commits' = '2880',\n    'clean.async.enabled' = 'true',\n    --\n    'write.operation' = 'upsert',\n    'write.bucket_assign.tasks' = '60',\n    'write.tasks' = '60',\n    'write.log_block.size' = '128',\n    --\n    'index.type' = 'BUCKET',\n    'metadata.enabled' = 'false',\n    'hoodie.bucket.index.num.buckets' = '20',\n    'table.type' = 'MERGE_ON_READ',\n    'clean.retain_commits' = '30',\n    'hoodie.cleaner.policy' = 'KEEP_LATEST_COMMITS'\n);\n")),(0,r.yg)("h3",{id:"usage-for-dashboard"},"Usage for Dashboard"),(0,r.yg)("h4",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"When creating a data stream, select ",(0,r.yg)("inlineCode",{parentName:"p"},"Hudi"),' for the data stream direction, and click "Add" to configure it.'),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Hudi Configuration",src:a(10138).A,width:"1332",height:"1228"})),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Config Item"),(0,r.yg)("th",{parentName:"tr",align:null},"prop in DDL statement"),(0,r.yg)("th",{parentName:"tr",align:null},"remark"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"DbName")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hoodie.database.name")),(0,r.yg)("td",{parentName:"tr",align:null},"the name of database")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"TableName")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hudi_table_name")),(0,r.yg)("td",{parentName:"tr",align:null},"the name of table")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"EnableCreateResource")),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"If the library table already exists and does not need to be modified, select ","[Do not create]",", ",(0,r.yg)("br",null),"otherwise select ","[Create]",", and the system will automatically create the resource.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Catalog URI")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"uri")),(0,r.yg)("td",{parentName:"tr",align:null},"The server uri of catalog")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Warehouse")),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The location where the hudi table is stored in HDFS",(0,r.yg)("br",null),"In the SQL DDL, the path attribute is to splice the ",(0,r.yg)("inlineCode",{parentName:"td"},"warehouse path")," with the name of db and table")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"StartCommit")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"read.start-commit")),(0,r.yg)("td",{parentName:"tr",align:null},"Start commit instant for reading, the commit time format should be 'yyyyMMddHHmmss', by default reading from the latest instant for streaming read")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"SkipCompaction")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"read.streaming.skip_compaction")),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to skip compaction instants for streaming read, there are two cases that this option can be used to avoid reading duplicates: 1) you are definitely sure that the consumer reads faster than any compaction instants, usually with delta time compaction strategy that is long enough, for e.g, one week; 2) changelog mode is enabled, this option is a solution to keep data integrity")))),(0,r.yg)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.yg)("p",null,"TODO"),(0,r.yg)("h2",{id:"hudi-extract-node-options"},"Hudi Extract Node Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Specify what connector to use, here should be 'hudi-inlong'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"uri"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Metastore uris for hive sync")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hoodie.database.name"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Database name that will be used for incremental query.If different databases have the same table name during  incremental query,  we can set it to limit the table name under a specific database")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hoodie.table.name"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Table name that will be used for registering with Hive. Needs to be same across runs.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"read.start-commit")),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"newest commit id"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Start commit instant for reading, the commit time format should be 'yyyyMMddHHmmss', by default reading from the latest instant for streaming read")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"read.streaming.skip_compaction")),(0,r.yg)("td",{parentName:"tr",align:null},"option"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to skip compaction instants for streaming read, there are two cases that this option can be used to avoid reading duplicates: 1) you are definitely sure that the consumer reads faster than any compaction instants, usually with delta time compaction strategy that is long enough, for e.g, one week; 2) changelog mode is enabled, this option is a solution to keep data integrity")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Inlong metric label, format of value is groupId=xxgroup&streamId=xxstream&nodeId=xxnode.")))),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Hive type"),(0,r.yg)("th",{parentName:"tr",align:null},"Flink SQL type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"char(p)"),(0,r.yg)("td",{parentName:"tr",align:null},"CHAR(p)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"varchar(p)"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(p)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"smallint"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decimal(p, s)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p, s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"timestamp(9)"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"BINARY")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"LIST")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"MAP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"row"),(0,r.yg)("td",{parentName:"tr",align:null},"STRUCT")))))}u.isMDXComponent=!0},10138:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/hudi-07279ee44fae548733c43fbcb2e6df4e.png"}}]);
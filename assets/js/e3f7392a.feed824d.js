"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[81113],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},k="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=p(a),c=r,u=k["".concat(d,".").concat(c)]||k[c]||g[c]||l;return a?n.createElement(u,i(i({ref:e},m),{},{components:a})):n.createElement(u,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[k]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},16329:(t,e,a)=>{a.d(e,{Y:()=>n});const n={inLongVersion:"1.12.0"}},98921:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(16329);const i={title:"Iceberg",sidebar_position:14},o=void 0,d={unversionedId:"data_node/extract_node/iceberg",id:"version-1.12.0/data_node/extract_node/iceberg",title:"Iceberg",description:"Overview",source:"@site/versioned_docs/version-1.12.0/data_node/extract_node/iceberg.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/iceberg",permalink:"/docs/1.12.0/data_node/extract_node/iceberg",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.12.0/data_node/extract_node/iceberg.md",tags:[],version:"1.12.0",sidebarPosition:14,frontMatter:{title:"Iceberg",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"TubeMQ",permalink:"/docs/1.12.0/data_node/extract_node/tube"},next:{title:"Overview",permalink:"/docs/1.12.0/data_node/load_node/overview"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Version",id:"version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Usage",id:"usage",level:2},{value:"Flink SQL API",id:"flink-sql-api",level:3},{value:"Dashboard",id:"dashboard",level:3},{value:"Manager Client",id:"manager-client",level:3},{value:"Options",id:"options",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],k={toc:m},g="wrapper";function c(t){let{components:e,...i}=t;return(0,r.kt)(g,(0,n.Z)({},k,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://iceberg.apache.org/"},"Apache Iceberg")," is a high-performance format for huge analytic tables."),(0,r.kt)("h2",{id:"version"},"Version"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Extract Node"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/1.12.0/data_node/extract_node/iceberg"},"Iceberg")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://iceberg.apache.org/"},"Iceberg"),": 0.12.x, 0.13.x ",(0,r.kt)("br",null))))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-iceberg</artifactId>\n    <version>${l.Y.inLongVersion}</version>\n</dependency>\n`)),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Before creating the Iceberg task, we need a Flink environment integrated with Hadoop."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download ",(0,r.kt)("a",{parentName:"li",href:"https://hadoop.apache.org/releases.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Apache Hadoop")),"."),(0,r.kt)("li",{parentName:"ul"},"Modify ",(0,r.kt)("inlineCode",{parentName:"li"},"jobmanager.sh")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"taskmanager.sh")," and add ",(0,r.kt)("inlineCode",{parentName:"li"},"Hadoop")," environment variables.\nFor commands, please refer to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/flink/tree/master/flink-dist/src/main/flink-bin/bin"},"Apache Flink"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modify ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"docker/docker-compose")," and mount ",(0,r.kt)("inlineCode",{parentName:"li"},"Hadoop")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Flink startup commands")," into the container:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'  jobmanager:\n    image: apache/flink:1.13-scala_2.11\n    container_name: jobmanager\n    user: root\n    environment:\n      - |\n        FLINK_PROPERTIES=\n        jobmanager.rpc.address: jobmanager\n    volumes:\n      # Mount Hadoop\n      - HADOOP_HOME:HADOOP_HOME\n      # Mount the modified jobmanager.sh which adds the HADOOP_HOME env correctly\n      - /jobmanager.sh:/opt/flink/bin/jobmanager.sh\n    ports:\n      - "8081:8081"\n    command: jobmanager\n\n  taskmanager:\n    image: apache/flink:1.13-scala_2.11\n    container_name: taskmanager\n    environment:\n      - |\n        FLINK_PROPERTIES=\n        jobmanager.rpc.address: jobmanager\n        taskmanager.numberOfTaskSlots: 2\n    volumes:\n      # Mount Hadoop\n      - HADOOP_HOME:HADOOP_HOME\n      # Mount the modified taskmanager.sh which adds the HADOOP_HOME env correctly\n      - /taskmanager.sh:/opt/flink/bin/taskmanager.sh\n    command: taskmanager\n')),(0,r.kt)("h3",{id:"flink-sql-api"},"Flink SQL API"),(0,r.kt)("p",null,"Before using ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink sql client"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sql-client.sh")," also needs to add Hadoop environment variables and mounted to the container.\nFor commands, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/flink/blob/master/flink-table/flink-sql-client/bin/sql-client.sh"},"Apache Flink"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n")),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink sql cli"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE TABLE `iceberg_table_source`(\n    PRIMARY KEY (`_id`) NOT ENFORCED,\n    `_id` STRING,\n    `id` INT,\n    `name` STRING,\n    `age` INT)\n    WITH (\n    'connector' = 'iceberg-inlong',\n    'catalog-database' = 'DATABASES',\n    'catalog-table' = 'TABLE',\n    'catalog-type' = 'HIVE',\n    'catalog-name' = 'HIVE',\n    'streaming' = 'true',\n    'uri' = 'thrift://127.0.0.1:9083'\n);\n")),(0,r.kt)("h3",{id:"dashboard"},"Dashboard"),(0,r.kt)("p",null,"Source \u2192 Create \u2192 Iceberg"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img.png",src:a(92083).Z,width:"670",height:"518"})),(0,r.kt)("h3",{id:"manager-client"},"Manager Client"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connector"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify what connector to use, here should be 'iceberg-inlong'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"catalog-database"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Database name managed in the Iceberg directory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"catalog-table"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Table name managed in Iceberg catalogs and databases")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"catalog-type"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hive")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"hadoop")," for built-in directories")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"catalog-name"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"directory name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uri"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The thrift URI of Hive metastore, such as: ",(0,r.kt)("inlineCode",{parentName:"td"},"thrift://127.0.0.1:9083"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"warehouse"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"For a Hive directory, the Hive repository location. For the hadoop directory, it is the HDFS directory that stores metadata files and data files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"In long metric label, the format of value is groupId=xxgroup&streamId=xxstream&nodeId=xxnode")))),(0,r.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flink SQL Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Iceberg Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CHAR"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BINARY"),(0,r.kt)("td",{parentName:"tr",align:null},"FIXED(L)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VARBINARY"),(0,r.kt)("td",{parentName:"tr",align:null},"BINARY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL(P,S)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.kt)("td",{parentName:"tr",align:null},"LONG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIME"),(0,r.kt)("td",{parentName:"tr",align:null},"TIME")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP_LTZ"),(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMPTZ")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTERVAL"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.kt)("td",{parentName:"tr",align:null},"LIST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MULTISET"),(0,r.kt)("td",{parentName:"tr",align:null},"MAP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MAP"),(0,r.kt)("td",{parentName:"tr",align:null},"MAP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ROW"),(0,r.kt)("td",{parentName:"tr",align:null},"STRUCT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RAW"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))))}c.isMDXComponent=!0},92083:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/iceberg-source-a055e4c8c7151c200c54e94d6c8d089d.png"}}]);
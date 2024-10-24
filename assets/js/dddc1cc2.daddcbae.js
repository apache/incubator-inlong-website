"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[90515],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>y});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(t),u=r,y=g["".concat(d,".").concat(u)]||g[u]||m[u]||i;return t?n.createElement(y,o(o({ref:a},p),{},{components:t})):n.createElement(y,o({ref:a},p))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},60752:(e,a,t)=>{t.d(a,{l:()=>n});const n={inLongVersion:"2.1.0-SNAPSHOT"}},85472:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=t(58168),r=(t(96540),t(15680)),i=t(60752);const o={title:"Kafka",sidebar_position:10},l=void 0,d={unversionedId:"data_node/load_node/kafka",id:"data_node/load_node/kafka",title:"Kafka",description:"Overview",source:"@site/docs/data_node/load_node/kafka.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/kafka",permalink:"/docs/next/data_node/load_node/kafka",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/load_node/kafka.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Kafka",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Iceberg",permalink:"/docs/next/data_node/load_node/iceberg"},next:{title:"MySQL",permalink:"/docs/next/data_node/load_node/mysql"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"How to create a Kafka Load Node",id:"how-to-create-a-kafka-load-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"Kafka Load Node Options",id:"kafka-load-node-options",level:2},{value:"Available Metadata",id:"available-metadata",level:2},{value:"Features",id:"features",level:2},{value:"Support Dynamic Schema Writing",id:"support-dynamic-schema-writing",level:3},{value:"Dynamic Topic Extraction",id:"dynamic-topic-extraction",level:4},{value:"Dynamic Partition Extraction",id:"dynamic-partition-extraction",level:4},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],g={toc:p},m="wrapper";function u(e){let{components:a,...o}=e;return(0,r.yg)(m,(0,n.A)({},g,o,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Kafka Load Node")," supports to write data into Kafka topics. It can support to write data in the normal fashion and write data in the\nupsert fashion. The ",(0,r.yg)("inlineCode",{parentName:"p"},"upsert-kafka")," connector can consume a changelog stream. It will write INSERT/UPDATE_AFTER data as\nnormal Kafka messages value, and write DELETE data as Kafka messages with null values (indicate tombstone for the key)."),(0,r.yg)("h2",{id:"supported-version"},"Supported Version"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Load Node"),(0,r.yg)("th",{parentName:"tr",align:null},"Kafka version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/next/data_node/load_node/kafka"},"Kafka")),(0,r.yg)("td",{parentName:"tr",align:null},"0.10+")))),(0,r.yg)("h2",{id:"dependencies"},"Dependencies"),(0,r.yg)("p",null,"In order to set up the ",(0,r.yg)("inlineCode",{parentName:"p"},"Kafka Load Node"),", the following provides dependency information for both projects using a\nbuild automation tool (such as Maven or SBT) and SQL Client with Sort Connectors JAR bundles."),(0,r.yg)("h3",{id:"maven-dependency"},"Maven dependency"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-kafka</artifactId>\n    <version>${i.l.inLongVersion}</version>\n</dependency>\n`)),(0,r.yg)("h2",{id:"how-to-create-a-kafka-load-node"},"How to create a Kafka Load Node"),(0,r.yg)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.yg)("p",null,"The example below shows how to create a Kafka Load Node with ",(0,r.yg)("inlineCode",{parentName:"p"},"Flink SQL")," :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"connector is ",(0,r.yg)("inlineCode",{parentName:"li"},"kafka-inlong"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Create a Kafka table 'kafka_load_node' in Flink SQL\nFlink SQL> CREATE TABLE kafka_load_node (\n           `id` INT,\n           `name` STRINTG\n           ) WITH (\n           'connector' = 'kafka-inlong',\n           'topic' = 'user',\n           'properties.bootstrap.servers' = 'localhost:9092',\n           'properties.group.id' = 'testGroup',\n           'format' = 'csv'\n           )\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"connector is ",(0,r.yg)("inlineCode",{parentName:"li"},"upsert-kafka"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Create a Kafka table 'kafka_load_node' in Flink SQL\nFlink SQL> CREATE TABLE kafka_load_node (\n          `id` INT,\n          `name` STRINTG,\n           PRIMARY KEY (`id`) NOT ENFORCED\n          ) WITH (\n          'connector' = 'upsert-kafka-inlong',\n          'topic' = 'user',\n          'properties.bootstrap.servers' = 'localhost:9092',\n          'key.format' = 'csv',\n          'value.format' = 'csv'\n          )   \n")),(0,r.yg)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,r.yg)("p",null,"When creating a data flow, select ",(0,r.yg)("inlineCode",{parentName:"p"},"Kafka"),' for the data stream direction, and click "Add" to configure it.'),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Kafka Configuration",src:t(83484).A,width:"1488",height:"661"})),(0,r.yg)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,r.yg)("p",null,"TODO: It will be supported in the future."),(0,r.yg)("h2",{id:"kafka-load-node-options"},"Kafka Load Node Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Specify which connector to use, valid values are:  1. for the Upsert Kafka use: ",(0,r.yg)("inlineCode",{parentName:"td"},"upsert-kafka-inlong"),"  2. for normal Kafka use: ",(0,r.yg)("inlineCode",{parentName:"td"},"kafka-inlong"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topic"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Topic name(s) to read data from when the table is used as source. It also supports  topic list for source by separating topic by semicolon like ",(0,r.yg)("inlineCode",{parentName:"td"},"topic-1;topic-2"),". Note, only one of ",(0,r.yg)("inlineCode",{parentName:"td"},"topic-pattern")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"topic")," can be specified for sources.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topic-pattern"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Dynamic topic extraction pattern, like '${VARIABLE_NAME}', which is only used in kafka multiple sink scenarios and is valid when 'format' is 'raw'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.multiple.format"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Format of kafka raw data, currently only supports ","[canal-json","|","debezium-json]"," which is only used in kafka multiple sink scenarios and is valid when 'format' is 'raw'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"properties.bootstrap.servers"),(0,r.yg)("td",{parentName:"tr",align:null},"required"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Comma separated list of Kafka brokers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"properties.*"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"This can set and pass arbitrary Kafka configurations. Suffix names must match the configuration key defined in ",(0,r.yg)("a",{parentName:"td",href:"https://kafka.apache.org/documentation/#configuration"},"Kafka Configuration documentation"),". Flink will remove the ",(0,r.yg)("inlineCode",{parentName:"td"},"properties.")," key prefix and pass the transformed key and values to the underlying KafkaClient. For example, you can disable automatic topic creation via ",(0,r.yg)("inlineCode",{parentName:"td"},"properties.allow.auto.create.topics")," = ",(0,r.yg)("inlineCode",{parentName:"td"},"false"),". But there are some configurations that do not support to set, because Flink will override them, e.g. ",(0,r.yg)("inlineCode",{parentName:"td"},"key.deserializer")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"value.deserializer"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"required for normal Kafka"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The format used to deserialize and serialize the value part of Kafka messages. Please refer to the formats page for more details and more ",(0,r.yg)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/"},"format")," options. Note: Either this option or the ",(0,r.yg)("inlineCode",{parentName:"td"},"value.format")," option are required.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key.format"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The format used to deserialize and serialize the key part of Kafka messages. Please refer to the formats page for more details and more format options. Note: If a key format is defined, the 'key.fields' option is required as well. Otherwise the Kafka records will have an empty key.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key.fields"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"[]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"List<String>")),(0,r.yg)("td",{parentName:"tr",align:null},"Defines an explicit list of physical columns from the table schema that configure the data type for the key format. By default, this list is empty and thus a key is undefined. The list should look like 'field1;field2'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key.fields-prefix"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Defines a custom prefix for all fields of the key format to avoid name clashes with fields of the value format. By default, the prefix is empty. If a custom prefix is defined, both the table schema and 'key.fields' will work with prefixed names. When constructing the data type of the key format, the prefix will be removed and the non-prefixed names will be used within the key format. Please note that this option requires that 'value.fields-include' must be set to 'EXCEPT_KEY'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value.format"),(0,r.yg)("td",{parentName:"tr",align:null},"required for upsert Kafka"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/"},"format")," used to deserialize and serialize the value part of Kafka messages. Please refer to the formats page for more details and more format options.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value.fields-include"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"ALL"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum Possible values: ","[ALL, EXCEPT_KEY]"),(0,r.yg)("td",{parentName:"tr",align:null},"Defines a strategy how to deal with key columns in the data type of the value format. By default, 'ALL' physical columns of the table schema will be included in the value format which means that key columns appear in the data type for both the key and value format")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.partitioner"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"'default'"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Output partitioning from Flink's partitions into Kafka's partitions. Valid values are ",(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"default"),": use the kafka default partitioner to partition records. ",(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"fixed"),": each Flink partition ends up in at most one Kafka partition. ",(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"round-robin"),": a Flink partition is distributed to Kafka partitions sticky round-robin. ",(0,r.yg)("br",null),"raw-hash: Extract value based on 'sink.multiple.partition-pattern' to 'hash' as the final partition, which is only used in kafka multiple sink scenarios and is valid when 'format' is 'raw'. It only works when record's keys are not specified. Custom FlinkKafkaPartitioner subclass: e.g. 'org.mycompany.MyPartitioner'. See the following ",(0,r.yg)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/kafka/#sink-partitioning"},"Sink Partitioning")," for more details.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.multiple.partition-pattern"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Dynamic partition extraction pattern, like '${VARIABLE_NAME}' which is only used in kafka multiple sink scenarios and is valid when 'format' is 'raw'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.semantic"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"at-least-once"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Defines the delivery semantic for the Kafka sink. Valid enumerationns are 'at-least-once', 'exactly-once' and 'none'. See ",(0,r.yg)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/kafka/#consistency-guarantees"},"Consistency guarantees")," for more details.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.parallelism"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"Defines the parallelism of the Kafka sink operator. By default, the parallelism is determined by the framework using the same parallelism of the upstream chained operator.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.yg)("td",{parentName:"tr",align:null},"optional"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Inlong metric label, format of value is groupId=",(0,r.yg)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,r.yg)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,r.yg)("inlineCode",{parentName:"td"},"{nodeId}"),".")))),(0,r.yg)("h2",{id:"available-metadata"},"Available Metadata"),(0,r.yg)("p",null,"It supports write metadata for format ",(0,r.yg)("inlineCode",{parentName:"p"},"canal-json-inlong"),"."),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/data_node/extract_node/kafka"},"Kafka Extract Node")," for a list of all available metadata fields."),(0,r.yg)("h2",{id:"features"},"Features"),(0,r.yg)("h3",{id:"support-dynamic-schema-writing"},"Support Dynamic Schema Writing"),(0,r.yg)("p",null,"Dynamic schema writing supports dynamic extraction of topic and partition from data and writes to the corresponding topic\nand partition. In order to support dynamic schema writing, you need to set the format of Kafka to 'raw',\nAlso need to set the serialization format of the upstream data (via the option 'sink.multiple.format'\nto set, currently only supports ","[canal-json|debezium-json]",")."),(0,r.yg)("h4",{id:"dynamic-topic-extraction"},"Dynamic Topic Extraction"),(0,r.yg)("p",null,"Dynamic topic extraction is by parsing the topic pattern and extracting the topic from the data.\nIn order to support dynamic extraction of topic, you need to set the option 'topic-pattern', Kafka Load Node will parse 'topic-pattern' as the final topic,\nIf parsing fails, it will be written to the default topic set via 'topic'. 'topic-pattern' supports constants and variables, constants are string constants,\nvariables are strictly represented by '${VARIABLE_NAME}', and the value of the variable comes from the data itself, that is, through 'sink.multiple.format'\na metadata field of a specified Format, or a physical field in the data."),(0,r.yg)("p",null,"Examples of 'topic-parttern' are as follows:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"'sink.multiple.format' is 'canal-json':")),(0,r.yg)("p",null,"The upstream data is:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n  "data": [\n    {\n      "id": "111",\n      "name": "scooter",\n      "description": "Big 2-wheel scooter",\n      "weight": "5.18"\n    }\n  ],\n  "database": "inventory",\n  "es": 1589373560000,\n  "id": 9,\n  "isDdl": false,\n  "mysqlType": {\n    "id": "INTEGER",\n    "name": "VARCHAR(255)",\n    "description": "VARCHAR(512)",\n    "weight": "FLOAT"\n  },\n  "old": [\n    {\n      "weight": "5.15"\n    }\n  ],\n  "pkNames": [\n    "id"\n  ],\n  "sql": "",\n  "sqlType": {\n    "id": 4,\n    "name": 12,\n    "description": 12,\n    "weight": 7\n  },\n  "table": "products",\n  "ts": 1589373560798,\n  "type": "UPDATE"\n} \n')),(0,r.yg)("p",null,"'topic-pattern' is '{database}_${table}', and the extracted topic is 'inventory_products' ('database', 'table' are metadata fields)"),(0,r.yg)("p",null,"'topic-pattern' is '{database}",(0,r.yg)("em",{parentName:"p"},"${table}"),"${id}', and the extracted topic is 'inventory_products_111' ('database', 'table' are metadata fields, and 'id' are physical fields)"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"'sink.multiple.format' is 'debezium-json':")),(0,r.yg)("p",null,"The upstream data is:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n  "before": {\n    "id": 4,\n    "name": "scooter",\n    "description": "Big 2-wheel scooter",\n    "weight": 5.18\n  },\n  "after": {\n    "id": 4,\n    "name": "scooter",\n    "description": "Big 2-wheel scooter",\n    "weight": 5.15\n  },\n  "source": {\n    "db": "inventory",\n    "table": "products"\n  },\n  "op": "u",\n  "ts_ms": 1589362330904,\n  "transaction": null\n}\n')),(0,r.yg)("p",null,"'topic-pattern' is '{source.db}_${source.table}', and the extracted topic is 'inventory_products' ('source.db', 'source.table' are metadata fields)"),(0,r.yg)("p",null,"'topic-pattern' is '{source.db}",(0,r.yg)("em",{parentName:"p"},"${source.table}"),"${id}', and the extracted topic is 'inventory_products_4' ('source.db', 'source.table' are metadata fields, and 'id' are physical fields)"),(0,r.yg)("h4",{id:"dynamic-partition-extraction"},"Dynamic Partition Extraction"),(0,r.yg)("p",null,"Dynamic partition extraction is to extract Partition from data by parsing partition pattern, which is similar to dynamic topic extraction.\nTo support dynamic extraction of topics, you need to set the option 'sink.partitioner' to 'raw-hash'\nand option 'sink.multiple.partition-pattern', Kafka Load Node will parse 'sink.multiple.partition-pattern'\nas the partition key, hash the partition key and take the remainder of the partition size as the final partition,\nIf parsing fails, it will return null and execute Kafka's default partitioning strategy. 'sink.multiple.partition-pattern'\nsupport constants, variables and primary keys. Constants are string constants. Variables are strictly represented by '${VARIABLE_NAME}', the value of the variable comes from the data itself,\nthat is, it can be a metadata field of a format specified by 'sink.multiple.format', or it can be a physical field in the data.\nThe primary key is a special constant 'PRIMARY_KEY', which extracts the primary key value of the record based on a certain format data format."),(0,r.yg)("p",null,"Notes: Kafka dynamic partition extraction based on 'PRIMARY_KEY' has a limitation that the primary key information needs to be specified in the data,\nFor example, if Format is 'canal-json', then its primary key Key is 'pkNames'. In addition, because format 'debezium-json' has no definition of primary key, here\nwe agree that the primary key of 'debezium-json' is also 'pkNames' and is included in 'source' like other metadata fields such as 'table' and 'db',\nIf partitioning by primary key is used, and the format is 'debezium-json', you need to ensure that the real data meets the above conventions."),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("p",null,"Kafka stores message keys and values as bytes, so Kafka doesn\u2019t have schema or data types. The Kafka messages are deserialized and serialized by formats, e.g. csv, json, avro. Thus, the data type mapping is determined by specific formats. Please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/formats/overview/"},"Formats")," pages for more details."))}u.isMDXComponent=!0},83484:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/kafka-71655dc487b667900ea52a6c279612b8.png"}}]);
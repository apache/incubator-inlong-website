"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[82234],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,m=u["".concat(o,".").concat(p)]||u[p]||k[p]||i;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},48416:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"MySQL -> Kafka -> ClickHouse",sidebar_position:3},s=void 0,l={unversionedId:"quick_start/mysql_kafka_clickhouse_example",id:"quick_start/mysql_kafka_clickhouse_example",title:"MySQL -> Kafka -> ClickHouse",description:"Here we use an example to introduce how to use Apache InLong creating MySQL -> Kafka -> ClickHouse data ingestion.",source:"@site/docs/quick_start/mysql_kafka_clickhouse_example.md",sourceDirName:"quick_start",slug:"/quick_start/mysql_kafka_clickhouse_example",permalink:"/docs/next/quick_start/mysql_kafka_clickhouse_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/quick_start/mysql_kafka_clickhouse_example.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"MySQL -> Kafka -> ClickHouse",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"File -> Pulsar -> ClickHouse",permalink:"/docs/next/quick_start/file_pulsar_clickhouse_example"},next:{title:"Standalone",permalink:"/docs/next/deployment/standalone"}},o={},c=[{value:"Deployment",id:"deployment",level:2},{value:"Install InLong",id:"install-inlong",level:3},{value:"Install ClickHouse",id:"install-clickhouse",level:3},{value:"Install Kafka",id:"install-kafka",level:3},{value:"Cluster Initialize",id:"cluster-initialize",level:2},{value:"Create Cluster Tag",id:"create-cluster-tag",level:3},{value:"Register Kafka Cluster",id:"register-kafka-cluster",level:3},{value:"Register Clickhouse DataNodes",id:"register-clickhouse-datanodes",level:3},{value:"Create Task",id:"create-task",level:2},{value:"Create Data Streams Group",id:"create-data-streams-group",level:3},{value:"Create Data Stream",id:"create-data-stream",level:3},{value:"Create Data Source",id:"create-data-source",level:3},{value:"Create Data Sink",id:"create-data-sink",level:3},{value:"Approve Data Stream",id:"approve-data-stream",level:3},{value:"Test Data",id:"test-data",level:2},{value:"Send Data",id:"send-data",level:3},{value:"Verify Data",id:"verify-data",level:3},{value:"Questions",id:"questions",level:2},{value:"Task Configuration Failed",id:"task-configuration-failed",level:3},{value:"The script for sending data",id:"the-script-for-sending-data",level:3}],d={toc:c},u="wrapper";function k(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here we use an example to introduce how to use Apache InLong creating MySQL -> Kafka -> ClickHouse data ingestion."),(0,r.kt)("h2",{id:"deployment"},"Deployment"),(0,r.kt)("h3",{id:"install-inlong"},"Install InLong"),(0,r.kt)("p",null,"Before we begin, we need to install InLong. Here we provide two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install InLong with Docker by according to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/deployment/docker"},"instructions here"),".(Recommanded)"),(0,r.kt)("li",{parentName:"ol"},"Install InLong binary according to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/deployment/bare_metal"},"instructions here"),".")),(0,r.kt)("h3",{id:"install-clickhouse"},"Install ClickHouse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --rm --net=host --name clickhouse -e CLICKHOUSE_USER=admin -e CLICKHOUSE_PASSWORD=inlong -e CLICKHOUSE_DEFAULT_ACCESS_MANAGEMENT=1 clickhouse/clickhouse-server:22.8\n")),(0,r.kt)("h3",{id:"install-kafka"},"Install Kafka"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Prepare zookeeper for Kafka\ndocker run -d --name zookeeper -p 2181:2181 -t wurstmeister/zookeeper\n# Install Kafka \ndocker run -d --name kafka -p 9092:9092 -e KAFKA_BROKER_ID=0 -e KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181 --link zookeeper -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://kafka:9092 -e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092 -t wurstmeister/kafka\n")),(0,r.kt)("h2",{id:"cluster-initialize"},"Cluster Initialize"),(0,r.kt)("p",null,"When all containers are successfully started, you can access the Inlong dashboard address http://localhost, and use the following default account to log in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,r.kt)("h3",{id:"create-cluster-tag"},"Create Cluster Tag"),(0,r.kt)("p",null,"Click ","[Clusters]"," -> ","[ClusterTags]"," -> ","[Create]"," on the page to specify the cluster label name and person in charge.\n",(0,r.kt)("img",{alt:"Create Cluster label",src:a(23906).Z,width:"515",height:"328"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Since each component reports the ClusterTags as ",(0,r.kt)("inlineCode",{parentName:"p"},"default_cluster")," by default, do not use other names.")),(0,r.kt)("h3",{id:"register-kafka-cluster"},"Register Kafka Cluster"),(0,r.kt)("p",null,"Click ","[Clusters]"," -> ","[Create]"," on the page to register Kafka Cluster.\n",(0,r.kt)("img",{alt:"Create kafka cluster",src:a(46949).Z,width:"642",height:"584"})),(0,r.kt)("h3",{id:"register-clickhouse-datanodes"},"Register Clickhouse DataNodes"),(0,r.kt)("p",null,"Click ","[DataNodes]"," -> ","[Create]"," on the page to register ClickHouse DataNodes.\n",(0,r.kt)("img",{alt:"Create kafka cluster",src:a(98201).Z,width:"891",height:"655"})),(0,r.kt)("h2",{id:"create-task"},"Create Task"),(0,r.kt)("h3",{id:"create-data-streams-group"},"Create Data Streams Group"),(0,r.kt)("p",null,"Click ","[Ingestion]"," -> ","[Create]",", input ID and select Kafka MQ Type.\n",(0,r.kt)("img",{alt:"Create datastream",src:a(5923).Z,width:"2382",height:"1166"})),(0,r.kt)("h3",{id:"create-data-stream"},"Create Data Stream"),(0,r.kt)("p",null,"Click ","[Next]"," -> ","[Create]",", config data stream.\n",(0,r.kt)("img",{alt:"Create datastream",src:a(37199).Z,width:"1237",height:"893"})),(0,r.kt)("h3",{id:"create-data-source"},"Create Data Source"),(0,r.kt)("p",null,"Click ","[Sources create]"," -> ","[MySQL]",", config data source information.\n",(0,r.kt)("img",{alt:"Create datastream",src:a(54426).Z,width:"961",height:"980"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please create ",(0,r.kt)("inlineCode",{parentName:"p"},"test_mysql_db.test_mysql_table")," database and table, it's schema is:\nCREATE TABLE test_mysql_db.test_mysql_table (\nid INT PRIMARY KEY,\nname VARCHAR(50)\n);")),(0,r.kt)("h3",{id:"create-data-sink"},"Create Data Sink"),(0,r.kt)("p",null,"Click ","[Sinks create]"," -> ","[ClickHouse]",", input Name, DbName, TableName and select created ck DataNode and so on, then click ","[save]",".\n",(0,r.kt)("img",{alt:"Create data object",src:a(1361).Z,width:"1493",height:"958"})),(0,r.kt)("h3",{id:"approve-data-stream"},"Approve Data Stream"),(0,r.kt)("p",null,"Click ","[Approval]"," -> ","[MyApproval]"," -> ","[Detail]"," -> ","[Select Cluster tag]"," -> ","[Ok]",".\n",(0,r.kt)("img",{alt:"clickhouse",src:a(83035).Z,width:"2282",height:"676"})),(0,r.kt)("p",null,"Back to ","[Ingestion]"," page, wait for ","[configuration success]",".\n",(0,r.kt)("img",{alt:"clickhouse",src:a(15003).Z,width:"1915",height:"504"})),(0,r.kt)("h2",{id:"test-data"},"Test Data"),(0,r.kt)("h3",{id:"send-data"},"Send Data"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"clickhouse",src:a(11403).Z,width:"720",height:"435"}),"\nAdd 1000 data items to MySQL."),(0,r.kt)("h3",{id:"verify-data"},"Verify Data"),(0,r.kt)("p",null,"Check data in ","[Audit]"," page.\n",(0,r.kt)("img",{alt:"clickhouse",src:a(19372).Z,width:"1923",height:"891"})),(0,r.kt)("p",null,"then enter ClickHouse container, check data in table.\n",(0,r.kt)("img",{alt:"clickhouse",src:a(61e3).Z,width:"785",height:"740"})),(0,r.kt)("h2",{id:"questions"},"Questions"),(0,r.kt)("h3",{id:"task-configuration-failed"},"Task Configuration Failed"),(0,r.kt)("p",null,"Generally, the MQ or Flink group configuration is incorrect. You can view the error information on the page, or enter the Manager container to view detailed logs."),(0,r.kt)("h3",{id:"the-script-for-sending-data"},"The script for sending data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# MySQL information\nDB_HOST="mysql"\nDB_USER="root"\nDB_PASS="inlong"\nDB_NAME="test_mysql_db"\nDB_TABLE="test_mysql_table"\n\n# insert data by a loop\nfor ((i=1; i<=1000; i++))\ndo\n    # generate data\n    id=$i\n    name="name_$i"\n    # insert data\n    query="INSERT INTO $DB_TABLE (id, name) VALUES ($id, \'$name\');"\n    # execute insert\n    mysql -h $DB_HOST -u $DB_USER -p$DB_PASS $DB_NAME -e "$query"\ndone\n')))}k.isMDXComponent=!0},83035:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/approval-ef07091c33d898037ada18425995e6c3.png"},23906:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_cluster_label-6a90b8b65f0e4d3259bbed710a5d50ef.png"},5923:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_ingestion-505741070bfe9b4ee822944f273897c6.png"},1361:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_sink-8835ecc718f67c08a13282dc24a963ab.png"},54426:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_source-7ab2e7988a6ec0eb09ec18fe928f5139.png"},37199:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data_stream_config-fd00b27ec4367852575e984868511371.png"},98201:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/datanode-4c23f8f8c270eda09263d01b6e824614.png"},46949:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kafka_cluster-a9edc85273116878c617b710476bc92f.png"},61e3:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/receive_data-0266a508aab8579ec94267ded98e0ec7.png"},15003:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/result-17b95aadde04766ab850dea6c2a19472.png"},11403:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/send_data-43e0b438eeb5af1f226eda9051c011e9.png"},19372:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/stream_audit-c166bac4d39307e011516ac0c5cb787f.png"}}]);
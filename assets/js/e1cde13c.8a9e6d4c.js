"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[71342],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),i=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(r),u=a,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},55799:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={title:"Monitor Metrics",sidebar_position:4},l=void 0,s={unversionedId:"modules/sort/metrics",id:"version-1.4.0/modules/sort/metrics",title:"Monitor Metrics",description:"Overview",source:"@site/versioned_docs/version-1.4.0/modules/sort/metrics.md",sourceDirName:"modules/sort",slug:"/modules/sort/metrics",permalink:"/docs/1.4.0/modules/sort/metrics",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.4.0/modules/sort/metrics.md",tags:[],version:"1.4.0",sidebarPosition:4,frontMatter:{title:"Monitor Metrics",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Example",permalink:"/docs/1.4.0/modules/sort/example"},next:{title:"Overview",permalink:"/docs/1.4.0/modules/manager/overview"}},d={},i=[{value:"Overview",id:"overview",level:2},{value:"Metric",id:"metric",level:2},{value:"Supporting extract node",id:"supporting-extract-node",level:3},{value:"Supporting load node",id:"supporting-load-node",level:3},{value:"Usage",id:"usage",level:2}],p={toc:i},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"We add metric computing for node. Sort will compute metric when user just need add with option ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong.metric.labels")," that includes groupId=",(0,a.kt)("inlineCode",{parentName:"p"},"{groupId}"),"&streamId=",(0,a.kt)("inlineCode",{parentName:"p"},"{streamId}"),"&nodeId=",(0,a.kt)("inlineCode",{parentName:"p"},"{nodeId}"),".\nSort will export metric by flink metric group, So user can use ",(0,a.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/zh/docs/deployment/metric_reporters/"},"metric reporter")," to get metric data."),(0,a.kt)("h2",{id:"metric"},"Metric"),(0,a.kt)("h3",{id:"supporting-extract-node"},"Supporting extract node"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:null},"Extract node"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numRecordsIn"),(0,a.kt)("td",{parentName:"tr",align:null},"kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc"),(0,a.kt)("td",{parentName:"tr",align:null},"input records number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numBytesIn"),(0,a.kt)("td",{parentName:"tr",align:null},"kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc"),(0,a.kt)("td",{parentName:"tr",align:null},"input bytes number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numRecordsInPerSecond"),(0,a.kt)("td",{parentName:"tr",align:null},"kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc"),(0,a.kt)("td",{parentName:"tr",align:null},"input records per second")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numBytesInPerSecond"),(0,a.kt)("td",{parentName:"tr",align:null},"kafka,mongodb-cdc,mysql-cdc,oracle-cdc,postgresql-cdc,pulsar,sqlserver-cdc"),(0,a.kt)("td",{parentName:"tr",align:null},"input bytes number per second")))),(0,a.kt)("h3",{id:"supporting-load-node"},"Supporting load node"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:null},"Load node"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numRecordsOut"),(0,a.kt)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,hbase,",(0,a.kt)("br",null),"hdfs,hive,iceberg,kafka,mysql,",(0,a.kt)("br",null),"oracle,postgresql,sqlserver,tdsql-postgresql"),(0,a.kt)("td",{parentName:"tr",align:null},"out records number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numBytesOut"),(0,a.kt)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,hbase,",(0,a.kt)("br",null),"hdfs,hive,iceberg,kafka,mysql,",(0,a.kt)("br",null),"oracle,postgresql,sqlserver,tdsql-postgresql"),(0,a.kt)("td",{parentName:"tr",align:null},"output byte number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numRecordsOutPerSecond"),(0,a.kt)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,hbase,",(0,a.kt)("br",null),"hdfs,hive,iceberg,kafka,mysql,",(0,a.kt)("br",null),"oracle,postgresql,sqlserver,tdsql-postgresql"),(0,a.kt)("td",{parentName:"tr",align:null},"output records per second")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupId_streamId_nodeId_numBytesOutPerSecond"),(0,a.kt)("td",{parentName:"tr",align:null},"clickhouse,elasticsearch,greenplum,hbase,",(0,a.kt)("br",null),"hdfs,hive,iceberg,kafka,mysql,",(0,a.kt)("br",null),"oracle,postgresql,sqlserver,tdsql-postgresql"),(0,a.kt)("td",{parentName:"tr",align:null},"output bytes  per second")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"One example about sync mysql data to postgresql data. And We will introduce usage of metric."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use flink sql")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"\n create table `table_groupId_streamId_nodeId1`(\n     `id` INT,\n    `name` INT,\n    `age` STRING,\n    PRIMARY KEY(`id`) NOT ENFORCED)\n    WITH (\n        'connector' = 'mysql-cdc-inlong',\n        'hostname' = 'xxxx',\n        'username' = 'xxx',\n        'password' = 'xxx',\n        'database-name' = 'test',\n        'scan.incremental.snapshot.enabled' = 'true',\n        'server-time-zone' = 'GMT+8',\n        'table-name' = 'user',\n        'inlong.metric.labels' = 'groupId=xxgroup&streamId=xxstream&nodeId=xxnode'\n);\n\n CREATE TABLE `table_groupId_streamId_nodeId2`(\n     PRIMARY KEY (`id`) NOT ENFORCED,\n     `id` INT,\n     `name` STRING,\n     `age` INT)\n     WITH (\n         'connector' = 'jdbc-inlong',\n         'url' = 'jdbc:postgresql://ip:5432/postgres',\n         'username' = 'postgres',\n         'password' = 'inlong',\n         'table-name' = 'public.user',\n         'inlong.metric.labels' = 'groupId=pggroup&streamId=pgStream&nodeId=pgNode'\n         );\n\n INSERT INTO `table_groupId_streamId_nodeId2`\n SELECT\n     `id`,\n     `name`,\n     `age`\n FROM `table_groupId_streamId_nodeId1`;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We can add metric report in flink-conf.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"metric.reporters: promgateway\nmetrics.reporter.promgateway.class: org.apache.flink.metrics.prometheus.PrometheusPushGatewayReporter\nmetrics.reporter.promgateway.host: ip\nmetrics.reporter.promgateway.port: 9091\nmetrics.reporter.promgateway.interval: 60 SECONDS\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ip")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"port")," is your ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus/pushgateway/releases"},"pushgateway")," setting. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We can visit http://ip:port of pushgateway after execute flink sql.\nMetric name will add prefix ",(0,a.kt)("inlineCode",{parentName:"li"},"flink_taskmanager_job_task_operator")," when metric report is ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.flink.metrics.prometheus.PrometheusPushGatewayReporter"),".",(0,a.kt)("br",{parentName:"li"}),"We can see full metric name:",(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("inlineCode",{parentName:"li"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsIn"),",",(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("inlineCode",{parentName:"li"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesIn"),",",(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("inlineCode",{parentName:"li"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsInPerSecond"),",",(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("inlineCode",{parentName:"li"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesInPerSecond"),",",(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("inlineCode",{parentName:"li"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsOut"),",",(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("inlineCode",{parentName:"li"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesOut"),",",(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("inlineCode",{parentName:"li"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numRecordsOutPerSecond"),",",(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("inlineCode",{parentName:"li"},"flink_taskmanager_job_task_operator_groupId_streamId_nodeId_numBytesOutPerSecond"),".")))}c.isMDXComponent=!0}}]);
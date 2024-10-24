"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[81083],{15680:(n,e,t)=>{t.d(e,{xA:()=>o,yg:()=>N});var a=t(96540);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function g(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n,e){if(null==n)return{};var t,a,l=function(n,e){if(null==n)return{};var t,a,l={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var i=a.createContext({}),p=function(n){var e=a.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):g(g({},e),n)),t},o=function(n){var e=p(n.components);return a.createElement(i.Provider,{value:e},n.children)},y="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,l=n.mdxType,r=n.originalType,i=n.parentName,o=d(n,["components","mdxType","originalType","parentName"]),y=p(t),m=l,N=y["".concat(i,".").concat(m)]||y[m]||u[m]||r;return t?a.createElement(N,g(g({ref:e},o),{},{components:t})):a.createElement(N,g({ref:e},o))}));function N(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var r=t.length,g=new Array(r);g[0]=m;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=n,d[y]="string"==typeof n?n:l,g[1]=d;for(var p=2;p<r;p++)g[p]=t[p];return a.createElement.apply(null,g)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12433:(n,e,t)=>{t.d(e,{l:()=>a});const a={inLongVersion:"2.1.0-SNAPSHOT"}},37446:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>g,metadata:()=>i,toc:()=>o});var a=t(58168),l=(t(96540),t(15680)),r=t(12433);const g={title:"Greenplum",sidebar_position:5},d=void 0,i={unversionedId:"data_node/load_node/greenplum",id:"data_node/load_node/greenplum",title:"Greenplum",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data_node/load_node/greenplum.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/greenplum",permalink:"/zh-CN/docs/next/data_node/load_node/greenplum",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/load_node/greenplum.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Greenplum",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch",permalink:"/zh-CN/docs/next/data_node/load_node/elasticsearch"},next:{title:"HBase",permalink:"/zh-CN/docs/next/data_node/load_node/hbase"}},p={},o=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u652f\u6301\u7684\u7248\u672c",id:"\u652f\u6301\u7684\u7248\u672c",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"Maven \u4f9d\u8d56",id:"maven-\u4f9d\u8d56",level:3},{value:"\u5982\u4f55\u521b\u5efa PostgreSQL Load \u8282\u70b9",id:"\u5982\u4f55\u521b\u5efa-postgresql-load-\u8282\u70b9",level:2},{value:"SQL API \u7528\u6cd5",id:"sql-api-\u7528\u6cd5",level:3},{value:"InLong Dashboard \u7528\u6cd5",id:"inlong-dashboard-\u7528\u6cd5",level:3},{value:"InLong Manager Client \u7528\u6cd5",id:"inlong-manager-client-\u7528\u6cd5",level:3},{value:"Greenplum Load \u8282\u70b9\u53c2\u6570",id:"greenplum-load-\u8282\u70b9\u53c2\u6570",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],y={toc:o},u="wrapper";function m(n){let{components:e,...t}=n;return(0,l.yg)(u,(0,a.A)({},y,t,{components:e,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"Greenplum Load")," \u8282\u70b9\u652f\u6301\u5c06\u6570\u636e\u5199\u5165 Greenplum \u6570\u636e\u5e93\u3002 \u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u8bbe\u7f6e Greenplum Load \u8282\u70b9\u4ee5\u5bf9 Greenplum \u6570\u636e\u5e93\u8fd0\u884c SQL \u67e5\u8be2\u3002"),(0,l.yg)("h2",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Load \u8282\u70b9"),(0,l.yg)("th",{parentName:"tr",align:null},"Driver"),(0,l.yg)("th",{parentName:"tr",align:null},"Group Id"),(0,l.yg)("th",{parentName:"tr",align:null},"Artifact Id"),(0,l.yg)("th",{parentName:"tr",align:null},"JAR"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"/zh-CN/docs/next/data_node/load_node/greenplum"},"Greenplum")),(0,l.yg)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,l.yg)("td",{parentName:"tr",align:null},"org.postgresql"),(0,l.yg)("td",{parentName:"tr",align:null},"postgresql"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://jdbc.postgresql.org/download.html"},"\u4e0b\u8f7d"))))),(0,l.yg)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,l.yg)("p",null,"\u4e3a\u4e86\u8bbe\u7f6e Greenplum Load \u8282\u70b9, \u4e0b\u9762\u63d0\u4f9b\u4e86\u4f7f\u7528\u6784\u5efa\u81ea\u52a8\u5316\u5de5\u5177\uff08\u4f8b\u5982 Maven \u6216 SBT\uff09\u548c\u5e26\u6709 Sort Connector JAR \u5305\u7684 SQL \u5ba2\u6237\u7aef\u7684\u4e24\u4e2a\u9879\u76ee\u7684\u4f9d\u8d56\u5173\u7cfb\u4fe1\u606f\u3002"),(0,l.yg)("h3",{id:"maven-\u4f9d\u8d56"},"Maven \u4f9d\u8d56"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-jdbc</artifactId>\n    <version>${r.l.inLongVersion}</version>\n</dependency>\n`)),(0,l.yg)("h2",{id:"\u5982\u4f55\u521b\u5efa-postgresql-load-\u8282\u70b9"},"\u5982\u4f55\u521b\u5efa PostgreSQL Load \u8282\u70b9"),(0,l.yg)("h3",{id:"sql-api-\u7528\u6cd5"},"SQL API \u7528\u6cd5"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"\n-- MySQL Extract \u8282\u70b9\nCREATE TABLE `mysql_extract_table`(\n  PRIMARY KEY (`id`) NOT ENFORCED,\n  `id` BIGINT,\n  `name` STRING,\n  `age` INT\n) WITH (\n  'connector' = 'mysql-cdc-inlong',\n  'url' = 'jdbc:mysql://localhost:3306/read',\n  'username' = 'inlong',\n  'password' = 'inlong',\n  'table-name' = 'user'\n)\n\n-- Greenplum Load \u8282\u70b9\nCREATE TABLE `greenplum_load_table`(\n  PRIMARY KEY (`id`) NOT ENFORCED,\n  `id` BIGINT,\n  `name` STRING,\n  `age` INT\n) WITH (\n  'connector' = 'jdbc-inlong',\n  'url' = 'jdbc:postgresql://localhost:5432/write',\n  'dialect-impl' = 'org.apache.inlong.sort.jdbc.dialect.GreenplumDialect',\n  'username' = 'inlong',\n  'password' = 'inlong',\n  'table-name' = 'public.user'\n)\n\n-- \u5199\u6570\u636e\u5230 Greenplum\nINSERT INTO greenplum_load_table \nSELECT id, name , age FROM mysql_extract_table;  \n\n")),(0,l.yg)("h3",{id:"inlong-dashboard-\u7528\u6cd5"},"InLong Dashboard \u7528\u6cd5"),(0,l.yg)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,l.yg)("h3",{id:"inlong-manager-client-\u7528\u6cd5"},"InLong Manager Client \u7528\u6cd5"),(0,l.yg)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,l.yg)("h2",{id:"greenplum-load-\u8282\u70b9\u53c2\u6570"},"Greenplum Load \u8282\u70b9\u53c2\u6570"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u9009"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"connector"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u4f7f\u7528\u4ec0\u4e48\u7c7b\u578b\u7684\u8fde\u63a5\u5668\uff0c\u8fd9\u91cc\u5e94\u8be5\u662f 'jdbc-inlong'\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"url"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"JDBC \u6570\u636e\u5e93 url\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"dialect-impl"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"org.apache.inlong.sort.jdbc.dialect.GreenplumDialect"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table-name"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u5230 JDBC \u8868\u7684\u540d\u79f0\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"driver"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8fde\u63a5\u5230\u6b64 URL \u7684 JDBC \u9a71\u52a8\u7c7b\u540d\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u5c06\u81ea\u52a8\u4ece URL \u4e2d\u63a8\u5bfc\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"username"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"JDBC \u7528\u6237\u540d\u3002\u5982\u679c\u6307\u5b9a\u4e86 'username' \u548c 'password' \u4e2d\u7684\u4efb\u4e00\u53c2\u6570\uff0c\u5219\u4e24\u8005\u5fc5\u987b\u90fd\u88ab\u6307\u5b9a\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"JDBC \u5bc6\u7801\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"connection.max-retry-timeout"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"60s"),(0,l.yg)("td",{parentName:"tr",align:null},"Duration"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6700\u5927\u91cd\u8bd5\u8d85\u65f6\u65f6\u95f4\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u4e14\u4e0d\u5e94\u8be5\u5c0f\u4e8e 1 \u79d2\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.buffer-flush.max-rows"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"flush \u524d\u7f13\u5b58\u8bb0\u5f55\u7684\u6700\u5927\u503c\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a '0' \u6765\u7981\u7528\u5b83\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.buffer-flush.interval"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"1s"),(0,l.yg)("td",{parentName:"tr",align:null},"Duration"),(0,l.yg)("td",{parentName:"tr",align:null},"flush \u95f4\u9694\u65f6\u95f4\uff0c\u8d85\u8fc7\u8be5\u65f6\u95f4\u540e\u5f02\u6b65\u7ebf\u7a0b\u5c06 flush \u6570\u636e\u3002\u53ef\u4ee5\u8bbe\u7f6e\u4e3a '0' \u6765\u7981\u7528\u5b83\u3002\u6ce8\u610f, \u4e3a\u4e86\u5b8c\u5168\u5f02\u6b65\u5730\u5904\u7406\u7f13\u5b58\u7684 flush \u4e8b\u4ef6\uff0c\u53ef\u4ee5\u5c06 'sink.buffer-flush.max-rows' \u8bbe\u7f6e\u4e3a '0' \u5e76\u914d\u7f6e\u9002\u5f53\u7684 flush \u65f6\u95f4\u95f4\u9694\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5199\u5165\u8bb0\u5f55\u5230\u6570\u636e\u5e93\u5931\u8d25\u540e\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.parallelism"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5b9a\u4e49 JDBC sink \u7b97\u5b50\u7684\u5e76\u884c\u5ea6\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5e76\u884c\u5ea6\u662f\u7531\u6846\u67b6\u51b3\u5b9a\uff1a\u4f7f\u7528\u4e0e\u4e0a\u6e38\u94fe\u5f0f\u7b97\u5b50\u76f8\u540c\u7684\u5e76\u884c\u5ea6\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.ignore.changelog"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5ffd\u7565\u6240\u6709 RowKind \u7c7b\u578b\u7684\u53d8\u66f4\u65e5\u5fd7\uff0c\u5c06\u5b83\u4eec\u5f53\u4f5c INSERT \u7684\u6570\u636e\u6765\u91c7\u96c6\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.yg)("td",{parentName:"tr",align:null},"(none)"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"inlong metric \u7684\u6807\u7b7e\u503c\uff0c\u8be5\u503c\u7684\u6784\u6210\u4e3agroupId=",(0,l.yg)("inlineCode",{parentName:"td"},"{groupId}"),"&streamId=",(0,l.yg)("inlineCode",{parentName:"td"},"{streamId}"),"&nodeId=",(0,l.yg)("inlineCode",{parentName:"td"},"{nodeId}"),"\u3002")))),(0,l.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Greenplum \u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"Flink SQL \u7c7b\u578b"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"SMALLINT ",(0,l.yg)("br",null)," INT2 ",(0,l.yg)("br",null)," SMALLSERIAL ",(0,l.yg)("br",null)," SERIAL2"),(0,l.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INTEGER ",(0,l.yg)("br",null)," SERIAL"),(0,l.yg)("td",{parentName:"tr",align:null},"INT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT ",(0,l.yg)("br",null)," BIGSERIAL"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(20, 0)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"REAL ",(0,l.yg)("br",null)," FLOAT4"),(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT8 ",(0,l.yg)("br",null)," DOUBLE PRECISION"),(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"NUMERIC(p, s) ",(0,l.yg)("br",null)," DECIMAL(p, s)"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(p, s)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null},"DATE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TIME ","[(p)][WITHOUT TIMEZONE]"),(0,l.yg)("td",{parentName:"tr",align:null},"TIME ","[(p)][WITHOUT TIMEZONE]")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP ","[(p)]","WITHOUT TIMEZONE"),(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP ","[(p)][WITHOUT TIMEZONE]")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"CHAR(n) ",(0,l.yg)("br",null)," CHARACTER(n) ",(0,l.yg)("br",null)," VARCHAR(n) ",(0,l.yg)("br",null)," CHARACTER VARYING(n) ",(0,l.yg)("br",null)," TEXT"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BYTEA"),(0,l.yg)("td",{parentName:"tr",align:null},"BYTES")))))}m.isMDXComponent=!0}}]);
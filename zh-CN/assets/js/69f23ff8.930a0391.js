"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[31201],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>N});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),y=o(n),u=r,N=y["".concat(d,".").concat(u)]||y[u]||m[u]||l;return n?a.createElement(N,i(i({ref:t},p),{},{components:n})):a.createElement(N,i({ref:t},p))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var g={};for(var d in t)hasOwnProperty.call(t,d)&&(g[d]=t[d]);g.originalType=e,g[y]="string"==typeof e?e:r,i[1]=g;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12433:(e,t,n)=>{n.d(t,{l:()=>a});const a={inLongVersion:"2.1.0-SNAPSHOT"}},9401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>g,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),l=n(12433);const i={title:"Hive",sidebar_position:8},g=void 0,d={unversionedId:"data_node/load_node/hive",id:"data_node/load_node/hive",title:"Hive",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data_node/load_node/hive.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/hive",permalink:"/zh-CN/docs/next/data_node/load_node/hive",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/load_node/hive.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Hive",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"HDFS",permalink:"/zh-CN/docs/next/data_node/load_node/hdfs"},next:{title:"Iceberg",permalink:"/zh-CN/docs/next/data_node/load_node/iceberg"}},o={},p=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u652f\u6301\u7684\u7248\u672c",id:"\u652f\u6301\u7684\u7248\u672c",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:3},{value:"Maven \u4f9d\u8d56",id:"maven-\u4f9d\u8d56",level:3},{value:"\u5982\u4f55\u914d\u7f6e Hive \u6570\u636e\u52a0\u8f7d\u8282\u70b9",id:"\u5982\u4f55\u914d\u7f6e-hive-\u6570\u636e\u52a0\u8f7d\u8282\u70b9",level:2},{value:"SQL API \u7684\u4f7f\u7528",id:"sql-api-\u7684\u4f7f\u7528",level:3},{value:"InLong Dashboard \u65b9\u5f0f",id:"inlong-dashboard-\u65b9\u5f0f",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:4},{value:"InLong Manager Client \u65b9\u5f0f",id:"inlong-manager-client-\u65b9\u5f0f",level:3},{value:"Hive \u52a0\u8f7d\u8282\u70b9\u53c2\u6570\u4fe1\u606f",id:"hive-\u52a0\u8f7d\u8282\u70b9\u53c2\u6570\u4fe1\u606f",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],y={toc:p},m="wrapper";function u(e){let{components:t,...i}=e;return(0,r.yg)(m,(0,a.A)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,r.yg)("p",null,"Hive \u52a0\u8f7d\u8282\u70b9\u53ef\u4ee5\u5c06\u6570\u636e\u5199\u5165 Hive\u3002\u4f7f\u7528 Flink \u65b9\u8a00\uff0c\u76ee\u524d\u4ec5\u652f\u6301 Insert \u64cd\u4f5c\uff0cUpsert \u6a21\u5f0f\u4e0b\u7684\u6570\u636e\u4f1a\u8f6c\u6362\u6210 Insert \u65b9\u5f0f\n\u76ee\u524d\u6682\u65f6\u4e0d\u652f\u6301\u4f7f\u7528 Hive \u65b9\u8a00\u64cd\u4f5c Hive \u8868\u3002"),(0,r.yg)("h2",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Load Node"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/next/data_node/load_node/hive"},"Hive")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/hive/overview/#supported-hive-version"},"Hive"),": 1.x, 2.x, 3.x")))),(0,r.yg)("h3",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,r.yg)("p",null,"\u901a\u8fc7 Maven \u5f15\u5165 sort-connector-hive \u6784\u5efa\u81ea\u5df1\u7684\u9879\u76ee\u3002\n\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 INLONG \u63d0\u4f9b\u7684 jar \u5305\u3002(",(0,r.yg)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"sort-connector-hive"),")"),(0,r.yg)("h3",{id:"maven-\u4f9d\u8d56"},"Maven \u4f9d\u8d56"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-hive</artifactId>\n    <version>${l.l.inLongVersion}</version>\n</dependency>\n`)),(0,r.yg)("h2",{id:"\u5982\u4f55\u914d\u7f6e-hive-\u6570\u636e\u52a0\u8f7d\u8282\u70b9"},"\u5982\u4f55\u914d\u7f6e Hive \u6570\u636e\u52a0\u8f7d\u8282\u70b9"),(0,r.yg)("h3",{id:"sql-api-\u7684\u4f7f\u7528"},"SQL API \u7684\u4f7f\u7528"),(0,r.yg)("p",null,"\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"Flink SQL Cli")," :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hiveTableName (\n  id STRING,\n  name STRING,\n  uv BIGINT,\n  pv BIGINT\n) WITH (\n  'connector' = 'hive',\n  'default-database' = 'default',\n  'hive-version' = '3.1.2',\n  'hive-conf-dir' = 'hdfs://localhost:9000/user/hive/hive-site.xml'\n);\n")),(0,r.yg)("h3",{id:"inlong-dashboard-\u65b9\u5f0f"},"InLong Dashboard \u65b9\u5f0f"),(0,r.yg)("h4",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.yg)("p",null,"\u5728\u521b\u5efa\u6570\u636e\u6d41\u65f6\uff0c\u9009\u62e9\u6570\u636e\u843d\u5730\u4e3a 'Hive' \u7136\u540e\u70b9\u51fb 'Add' \u6765\u914d\u7f6e Hive \u7684\u76f8\u5173\u4fe1\u606f\u3002"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Hive Configuration",src:n(18719).A,width:"1489",height:"1156"})),(0,r.yg)("h3",{id:"inlong-manager-client-\u65b9\u5f0f"},"InLong Manager Client \u65b9\u5f0f"),(0,r.yg)("p",null,"TODO: \u672a\u6765\u7248\u672c\u652f\u6301"),(0,r.yg)("h2",{id:"hive-\u52a0\u8f7d\u8282\u70b9\u53c2\u6570\u4fe1\u606f"},"Hive \u52a0\u8f7d\u8282\u70b9\u53c2\u6570\u4fe1\u606f"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connector"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u4f7f\u7528\u4ec0\u4e48\u8fde\u63a5\u5668\uff0c\u8fd9\u91cc\u5e94\u8be5\u662f 'hive'\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"default-database"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6570\u636e\u5e93\u540d\u79f0\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hive-conf-dir"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u672c\u5730\u6784\u5efa\u9879\u76ee\u53ef\u4ee5\u5c06 hive-site.xml \u6784\u5efa\u5230 classpath \u4e2d\uff0c\u672a\u6765 Dashboard \u5c06\u652f\u6301\u672c\u5730\u4e0a\u4f20\u80fd\u529b\u3002 \u76ee\u524d\u901a\u7528\u65b9\u5f0f\u53ea\u652f\u6301\u914d\u7f6e\u5df2\u7ecf\u4e0a\u4f20\u6587\u4ef6\u540e\u7684 HDFS \u8def\u5f84\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.partition-commit.trigger"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5982\u679c\u8868\u662f\u5206\u533a\u8868\uff0c\u53ef\u4ee5\u914d\u7f6e\u89e6\u53d1\u6a21\u5f0f\u3002\u5982\uff1a(process-time)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition.time-extractor.timestamp-pattern"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5982\u679c\u8868\u662f\u5206\u533a\u8868\uff0c\u53ef\u4ee5\u914d\u7f6e\u65f6\u95f4\u6233\u3002\u5982\uff1a(yyyy-MM-dd)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.partition-commit.delay"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5982\u679c\u8868\u662f\u5206\u533a\u8868\uff0c\u53ef\u4ee5\u914d\u7f6e\u5ef6\u8fdf\u65f6\u95f4\u3002\u5982\uff1a(10s,20s,1m...)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.partition-commit.policy.kind"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5206\u533a\u63d0\u4ea4\u7b56\u7565\u901a\u77e5\u4e0b\u6e38\u67d0\u4e2a\u5206\u533a\u5df2\u7ecf\u5199\u5b8c\u6bd5\u53ef\u4ee5\u88ab\u8bfb\u53d6\u4e86\u3002 metastore\uff1a\u5411 metadata \u589e\u52a0\u5206\u533a\u3002\u4ec5 hive \u652f\u6301 metastore \u7b56\u7565\uff0c\u6587\u4ef6\u7cfb\u7edf\u901a\u8fc7\u76ee\u5f55\u7ed3\u6784\u7ba1\u7406\u5206\u533a\uff1b success-file\uff1a\u5728\u76ee\u5f55\u4e2d\u589e\u52a0 '_success' \u6587\u4ef6\uff1b \u4e0a\u8ff0\u4e24\u4e2a\u7b56\u7565\u53ef\u4ee5\u540c\u65f6\u6307\u5b9a\uff1a'metastore,success-file'\u3002 custom\uff1a\u901a\u8fc7\u6307\u5b9a\u7684\u7c7b\u6765\u521b\u5efa\u63d0\u4ea4\u7b56\u7565\uff0c \u652f\u6301\u540c\u65f6\u6307\u5b9a\u591a\u4e2a\u63d0\u4ea4\u7b56\u7565\uff1a'metastore,success-file'\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlong.metric.labels"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"inlong metric \u7684\u6807\u7b7e\u503c\uff0c\u8be5\u503c\u7684\u6784\u6210\u4e3a groupId=","[groupId]","&streamId=","[streamId]","&nodeId=","[nodeId]","\u3002")))),(0,r.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Hive type"),(0,r.yg)("th",{parentName:"tr",align:null},"Flink SQL type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"char(p)"),(0,r.yg)("td",{parentName:"tr",align:null},"CHAR(p)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"varchar(p)"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(p)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"smallint"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decimal(p, s)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p, s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"timestamp(9)"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"BINARY")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"LIST")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"MAP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"row"),(0,r.yg)("td",{parentName:"tr",align:null},"STRUCT")))))}u.isMDXComponent=!0},18719:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/hive-97be71bbdd619a33289d0801b0a4e18c.png"}}]);
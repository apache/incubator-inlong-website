"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[38045],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=l.createContext({}),u=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},c=function(t){var e=u(t.components);return l.createElement(o.Provider,{value:e},t.children)},k="mdxType",i={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),k=u(n),p=r,m=k["".concat(o,".").concat(p)]||k[p]||i[p]||a;return n?l.createElement(m,d(d({ref:e},c),{},{components:n})):l.createElement(m,d({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,d=new Array(a);d[0]=p;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[k]="string"==typeof t?t:r,d[1]=s;for(var u=2;u<a;u++)d[u]=n[u];return l.createElement.apply(null,d)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},81877:(t,e,n)=>{n.d(e,{Y:()=>l});const l={inLongVersion:"1.5.0-SNAPSHOT"}},74662:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>i,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var l=n(87462),r=(n(67294),n(3905)),a=n(81877);const d={title:"SQLServer-CDC",sidebar_position:10},s=void 0,o={unversionedId:"data_node/extract_node/sqlserver-cdc",id:"data_node/extract_node/sqlserver-cdc",title:"SQLServer-CDC",description:"\u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data_node/extract_node/sqlserver-cdc.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/sqlserver-cdc",permalink:"/zh-CN/docs/next/data_node/extract_node/sqlserver-cdc",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/extract_node/sqlserver-cdc.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"SQLServer-CDC",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Pulsar",permalink:"/zh-CN/docs/next/data_node/extract_node/pulsar"},next:{title:"Doris",permalink:"/zh-CN/docs/next/data_node/extract_node/doris"}},u={},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u652f\u6301\u7684\u7248\u672c",id:"\u652f\u6301\u7684\u7248\u672c",level:2},{value:"\u4f9d\u8d56\u914d\u7f6e",id:"\u4f9d\u8d56\u914d\u7f6e",level:2},{value:"Maven\u4f9d\u8d56\u914d\u7f6e",id:"maven\u4f9d\u8d56\u914d\u7f6e",level:3},{value:"\u914d\u7f6e SQLServer \u52a0\u8f7d\u8282\u70b9",id:"\u914d\u7f6e-sqlserver-\u52a0\u8f7d\u8282\u70b9",level:2},{value:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a SQLServer \u62bd\u53d6\u8282\u70b9",id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a-sqlserver-\u62bd\u53d6\u8282\u70b9",level:2},{value:"SQL API \u7684\u4f7f\u7528",id:"sql-api-\u7684\u4f7f\u7528",level:3},{value:"InLong Dashboard \u65b9\u5f0f",id:"inlong-dashboard-\u65b9\u5f0f",level:3},{value:"InLong Manager Client \u65b9\u5f0f",id:"inlong-manager-client-\u65b9\u5f0f",level:3},{value:"SQLServer \u62bd\u53d6\u8282\u70b9\u53c2\u6570\u4fe1\u606f",id:"sqlserver-\u62bd\u53d6\u8282\u70b9\u53c2\u6570\u4fe1\u606f",level:2},{value:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5",id:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],k={toc:c};function i(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.kt)("p",null,"SQLServer \u63d0\u53d6\u8282\u70b9\u4ece SQLServer \u6570\u636e\u5e93\u4e2d\u8bfb\u53d6\u6570\u636e\u548c\u589e\u91cf\u6570\u636e\u3002\u4e0b\u9762\u5c06\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e SQLServer \u62bd\u53d6\u8282\u70b9\u3002"),(0,r.kt)("h2",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Extract Node"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/next/data_node/extract_node/sqlserver-cdc"},"SQLServer-cdc")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server?view=sql-server-ver16"},"SQLServer"),": 2014\u30012016\u30012017\u30012019\u30012022")))),(0,r.kt)("h2",{id:"\u4f9d\u8d56\u914d\u7f6e"},"\u4f9d\u8d56\u914d\u7f6e"),(0,r.kt)("p",null,"\u901a\u8fc7 Maven \u5f15\u5165 sort-connector-sqlserver-cdc \u6784\u5efa\u81ea\u5df1\u7684\u9879\u76ee\u3002\n\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 INLONG \u63d0\u4f9b\u7684 jar \u5305\u3002(",(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"sort-connector-sqlserver-cdc"),")"),(0,r.kt)("h3",{id:"maven\u4f9d\u8d56\u914d\u7f6e"},"Maven\u4f9d\u8d56\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},`<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-sqlserver-cdc</artifactId>\n    <version>${a.Y.inLongVersion}</version>\n</dependency>\n`)),(0,r.kt)("h2",{id:"\u914d\u7f6e-sqlserver-\u52a0\u8f7d\u8282\u70b9"},"\u914d\u7f6e SQLServer \u52a0\u8f7d\u8282\u70b9"),(0,r.kt)("p",null,"SQLServer \u52a0\u8f7d\u8282\u70b9\u9700\u8981\u5f00\u542f\u5e93\u548c\u8868\u7684 CDC \u529f\u80fd\uff0c\u914d\u7f6e\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5f00\u542f\u6570\u636e\u5e93 CDC \u80fd\u529b\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"if exists(select 1 from sys.databases where name='dbName' and is_cdc_enabled=0)\nbegin\n    exec sys.sp_cdc_enable_db\nend\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u6570\u636e\u5e93 CDC \u662f\u5426\u5f00\u542f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select is_cdc_enabled from sys.databases where name='dbName'\n")),(0,r.kt)("p",null,'\u5907\u6ce8: "1"\u8868\u793a\u6570\u636e\u5e93 CDC \u5f00\u542f'),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5f00\u542f\u8868\u7684 CDC \u80fd\u529b\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"IF EXISTS(SELECT 1 FROM sys.tables WHERE name='tableName' AND is_tracked_by_cdc = 0)\nBEGIN\n    EXEC sys.sp_cdc_enable_table\n        @source_schema = 'dbo', -- source_schema\n        @source_name = 'tableName', -- table_name\n        @capture_instance = NULL, -- capture_instance\n        @supports_net_changes = 1, -- supports_net_changes\n        @role_name = NULL, -- role_name\n        @index_name = NULL, -- index_name\n        @captured_column_list = NULL, -- captured_column_list\n        @filegroup_name = 'PRIMARY' -- filegroup_name\nEND\n")),(0,r.kt)("p",null,"\u5907\u6ce8: \u8868\u5fc5\u987b\u6709\u4e3b\u952e\u6216\u8005\u552f\u4e00\u7d22\u5f15\u3002"),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u8868 CDC \u662f\u5426\u5f00\u542f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT is_tracked_by_cdc FROM sys.tables WHERE name='tableName'\n")),(0,r.kt)("p",null,'\u5907\u6ce8: "1"\u8868\u793a\u8868 CDC \u5f00\u542f'),(0,r.kt)("h2",{id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a-sqlserver-\u62bd\u53d6\u8282\u70b9"},"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a SQLServer \u62bd\u53d6\u8282\u70b9"),(0,r.kt)("h3",{id:"sql-api-\u7684\u4f7f\u7528"},"SQL API \u7684\u4f7f\u7528"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink SQL Cli")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Set checkpoint every 3000 milliseconds                       \nFlink SQL> SET 'execution.checkpointing.interval' = '3s';   \n\n-- Create a SqlServer table 'sqlserver_extract_node' in Flink SQL Cli\nFlink SQL> CREATE TABLE sqlserver_extract_node (\n     order_id INT,\n     order_date TIMESTAMP(0),\n     customer_name STRING,\n     price DECIMAL(10, 5),\n     product_id INT,\n     order_status BOOLEAN,\n     PRIMARY KEY(order_id) NOT ENFORCED\n     ) WITH (\n     'connector' = 'sqlserver-cdc-inlong',\n     'hostname' = 'YourHostname',\n     'port' = 'port', --default:1433\n     'username' = 'YourUsername',\n     'password' = 'YourPassword',\n     'database-name' = 'YourDatabaseName',\n     'schema-name' = 'YourSchemaName' -- default:dbo\n     'table-name' = 'YourTableName');\n  \n-- Read snapshot and binlog from sqlserver_extract_node\nFlink SQL> SELECT * FROM sqlserver_extract_node;\n")),(0,r.kt)("h3",{id:"inlong-dashboard-\u65b9\u5f0f"},"InLong Dashboard \u65b9\u5f0f"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h3",{id:"inlong-manager-client-\u65b9\u5f0f"},"InLong Manager Client \u65b9\u5f0f"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h2",{id:"sqlserver-\u62bd\u53d6\u8282\u70b9\u53c2\u6570\u4fe1\u606f"},"SQLServer \u62bd\u53d6\u8282\u70b9\u53c2\u6570\u4fe1\u606f"),(0,r.kt)("div",{class:"highlight"},(0,r.kt)("table",{class:"colwidths-auto docutils"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{class:"text-left",style:{width:"10%"}},"\u53c2\u6570"),(0,r.kt)("th",{class:"text-left",style:{width:"8%"}},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{class:"text-left",style:{width:"7%"}},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{class:"text-left",style:{width:"10%"}},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{class:"text-left",style:{width:"65%"}},"\u63cf\u8ff0"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"connector"),(0,r.kt)("td",null,"\u5fc5\u987b"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u6307\u5b9a\u4f7f\u7528\u4ec0\u4e48\u8fde\u63a5\u5668\uff0c\u8fd9\u91cc\u5e94\u8be5\u662f 'sqlserver-cdc-inlong'\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"hostname"),(0,r.kt)("td",null,"\u5fc5\u987b"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"SQLServer \u6570\u636e\u5e93 IP \u5730\u5740\u6216\u8005 hostname\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"username"),(0,r.kt)("td",null,"\u5fc5\u987b"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"SQLServer \u6570\u636e\u5e93\u7528\u6237\u540d\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"password"),(0,r.kt)("td",null,"\u5fc5\u987b"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"SQLServer \u6570\u636e\u5e93\u7528\u6237\u5bc6\u7801\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"database-name"),(0,r.kt)("td",null,"\u5fc5\u987b"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"SQLServer \u6570\u636e\u5e93\u76d1\u63a7\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"schema-name"),(0,r.kt)("td",null,"\u5fc5\u987b"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"dbo"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"SQLServer \u6570\u636e\u5e93\u76d1\u63a7\u7684 schema \u540d\u79f0\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"table-name"),(0,r.kt)("td",null,"\u5fc5\u987b"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"SQLServer \u6570\u636e\u5e93\u76d1\u63a7\u7684\u8868\u540d\u79f0\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"port"),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"1433"),(0,r.kt)("td",null,"Integer"),(0,r.kt)("td",null,"SQLServer \u6570\u636e\u5e93\u7aef\u53e3\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"server-time-zone"),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"UTC"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,'SQLServer \u6570\u636e\u5e93\u8fde\u63a5\u914d\u7f6e\u65f6\u533a\u3002 \u4f8b\u5982\uff1a "Asia/Shanghai"\u3002')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"inlong.metric"),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"inlong metric \u7684\u6807\u7b7e\u503c\uff0c\u8be5\u503c\u7684\u6784\u6210\u4e3agroupId&streamId&nodeId\u3002"))))),(0,r.kt)("h2",{id:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5"},"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u683c\u5f0f\u5143\u6570\u636e\u53ef\u4ee5\u4f5c\u4e3a\u8868\u5b9a\u4e49\u4e2d\u7684\u53ea\u8bfb (VIRTUAL) \u5217\u516c\u5f00\u3002"),(0,r.kt)("table",{class:"colwidths-auto docutils"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{class:"text-left",style:{width:"15%"}},"\u5b57\u6bb5\u540d\u79f0"),(0,r.kt)("th",{class:"text-left",style:{width:"30%"}},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{class:"text-left",style:{width:"55%"}},"\u63cf\u8ff0"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"meta.table_name"),(0,r.kt)("td",null,"STRING NOT NULL"),(0,r.kt)("td",null,"\u5305\u542b\u8be5\u884c\u7684\u8868\u7684\u540d\u79f0\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"meta.schema_name"),(0,r.kt)("td",null,"STRING NOT NULL"),(0,r.kt)("td",null,"\u5305\u542b\u8be5\u884c schema \u7684\u540d\u79f0\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"meta.database_name"),(0,r.kt)("td",null,"STRING NOT NULL"),(0,r.kt)("td",null,"\u5305\u542b\u8be5\u884c\u6570\u636e\u5e93\u7684\u540d\u79f0\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"meta.op_ts"),(0,r.kt)("td",null,"TIMESTAMP_LTZ(3) NOT NULL"),(0,r.kt)("td",null,"\u5b83\u8868\u793a\u5728\u6570\u636e\u5e93\u4e2d\u8fdb\u884c\u66f4\u6539\u7684\u65f6\u95f4\u3002\u5982\u679c\u8bb0\u5f55\u662f\u4ece\u8868\u7684\u5feb\u7167\u800c\u4e0d\u662f binlog \u4e2d\u8bfb\u53d6\u7684\uff0c\u5219\u8be5\u503c\u59cb\u7ec8\u4e3a 0\u3002")))),(0,r.kt)("p",null,"\u4f7f\u7528\u5143\u6570\u636e\u5b57\u6bb5\u7684\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sqlserver_extract_node (\n    table_name STRING METADATA  FROM 'table_name' VIRTUAL,\n    schema_name STRING METADATA  FROM 'schema_name' VIRTUAL,\n    db_name STRING METADATA FROM 'database_name' VIRTUAL,\n    operation_ts TIMESTAMP_LTZ(3) METADATA FROM 'op_ts' VIRTUAL,\n    id INT NOT NULL\n) WITH (\n    'connector' = 'sqlserver-cdc',\n    'hostname' = 'localhost',\n    'port' = '1433',\n    'username' = 'sa',\n    'password' = 'password',\n    'database-name' = 'test',\n    'schema-name' = 'dbo',\n    'table-name' = 'worker'\n);\n")),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.kt)("div",{class:"wy-table-responsive"},(0,r.kt)("table",{class:"colwidths-auto docutils"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{class:"text-left"},"SQLServer type"),(0,r.kt)("th",{class:"text-left"},"Flink SQL type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"char(n)"),(0,r.kt)("td",null,"CHAR(n)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"varchar(n)",(0,r.kt)("br",null),"nvarchar(n)",(0,r.kt)("br",null),"nchar(n)"),(0,r.kt)("td",null,"VARCHAR(n)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"text",(0,r.kt)("br",null),"ntext",(0,r.kt)("br",null),"xml"),(0,r.kt)("td",null,"STRING")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"decimal(p, s)",(0,r.kt)("br",null),"money",(0,r.kt)("br",null),"smallmoney"),(0,r.kt)("td",null,"DECIMAL(p, s)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"numeric"),(0,r.kt)("td",null,"NUMERIC")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"REAL",(0,r.kt)("br",null),"FLOAT",(0,r.kt)("br",null)),(0,r.kt)("td",null,"FLOAT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"bit"),(0,r.kt)("td",null,"BOOLEAN")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"int"),(0,r.kt)("td",null,"INT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"tinyint"),(0,r.kt)("td",null,"TINYINT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"smallint"),(0,r.kt)("td",null,"SMALLINT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"time (n)"),(0,r.kt)("td",null,"TIME (n)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"bigint"),(0,r.kt)("td",null,"BIGINT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"date"),(0,r.kt)("td",null,"DATE")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"datetime2",(0,r.kt)("br",null),"datetime",(0,r.kt)("br",null),"smalldatetime"),(0,r.kt)("td",null,"TIMESTAMP(n)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"datetimeoffset"),(0,r.kt)("td",null,"TIMESTAMP_LTZ(3)"))))))}i.isMDXComponent=!0}}]);
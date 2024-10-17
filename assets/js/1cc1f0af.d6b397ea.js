"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[92060],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||l;return t?n.createElement(m,i(i({ref:a},d),{},{components:t})):n.createElement(m,i({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=g;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},68965:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=t(58168),r=(t(96540),t(15680));const l={title:"Pulsar to ClickHouse Example",sidebar_position:4},i=void 0,o={unversionedId:"quick_start/realtime_data_sync/pulsar_clickhouse_example",id:"quick_start/realtime_data_sync/pulsar_clickhouse_example",title:"Pulsar to ClickHouse Example",description:"Here we use an example to introduce how to use Apache InLong creating Pulsar -> ClickHouse data synchronization.",source:"@site/docs/quick_start/realtime_data_sync/pulsar_clickhouse_example.md",sourceDirName:"quick_start/realtime_data_sync",slug:"/quick_start/realtime_data_sync/pulsar_clickhouse_example",permalink:"/docs/next/quick_start/realtime_data_sync/pulsar_clickhouse_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/quick_start/realtime_data_sync/pulsar_clickhouse_example.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Pulsar to ClickHouse Example",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"MySQL to Iceberg Example",permalink:"/docs/next/quick_start/realtime_data_sync/mysql_iceberg_example"},next:{title:"Pulsar to MySQL Example",permalink:"/docs/next/quick_start/offline_data_sync/pulsar_mysql_example"}},s={},c=[{value:"Deployment",id:"deployment",level:2},{value:"Install InLong",id:"install-inlong",level:3},{value:"Add Connectors",id:"add-connectors",level:3},{value:"Install ClickHouse",id:"install-clickhouse",level:3},{value:"Cluster Initialize",id:"cluster-initialize",level:2},{value:"Register ClickHouse DataNodes",id:"register-clickhouse-datanodes",level:3},{value:"Create Task",id:"create-task",level:2},{value:"Create Data Streams Group",id:"create-data-streams-group",level:3},{value:"Create Data Source",id:"create-data-source",level:3},{value:"Create Data Sink",id:"create-data-sink",level:3},{value:"Configuration Fields",id:"configuration-fields",level:3},{value:"Approve Data Stream",id:"approve-data-stream",level:3},{value:"Test Data",id:"test-data",level:2},{value:"Send Data",id:"send-data",level:3},{value:"Verify Data",id:"verify-data",level:3},{value:"FAQ",id:"faq",level:2}],d={toc:c},u="wrapper";function p(e){let{components:a,...l}=e;return(0,r.yg)(u,(0,n.A)({},d,l,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Here we use an example to introduce how to use Apache InLong creating ",(0,r.yg)("inlineCode",{parentName:"p"},"Pulsar -> ClickHouse")," data synchronization."),(0,r.yg)("h2",{id:"deployment"},"Deployment"),(0,r.yg)("h3",{id:"install-inlong"},"Install InLong"),(0,r.yg)("p",null,"Before we begin, we need to install InLong. Here we provide two ways:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/next/deployment/docker"},"Docker Deployment")," (Recommended)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/next/deployment/bare_metal"},"Bare Metal Deployment"))),(0,r.yg)("h3",{id:"add-connectors"},"Add Connectors"),(0,r.yg)("p",null,"Download the ",(0,r.yg)("a",{parentName:"p",href:"https://inlong.apache.org/downloads/"},"connectors")," corresponding to Flink version, and after decompression, place ",(0,r.yg)("inlineCode",{parentName:"p"},"sort-connector-jdbc-[version]-SNAPSHOT.jar")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"/inlong-sort/connectors/")," directory."),(0,r.yg)("h3",{id:"install-clickhouse"},"Install ClickHouse"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"docker run -d --rm --net=host --name clickhouse -e CLICKHOUSE_USER=admin -e CLICKHOUSE_PASSWORD=inlong -e CLICKHOUSE_DEFAULT_ACCESS_MANAGEMENT=1 clickhouse/clickhouse-server:22.8\n")),(0,r.yg)("h2",{id:"cluster-initialize"},"Cluster Initialize"),(0,r.yg)("p",null,"When all containers are successfully started, you can access the InLong dashboard address http://localhost, and use the following default account to log in."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,r.yg)("h3",{id:"register-clickhouse-datanodes"},"Register ClickHouse DataNodes"),(0,r.yg)("p",null,"Click ","[DataNodes]"," -> ","[Create]"," on the page to register ClickHouse DataNodes."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Create Clickhouse Datanode",src:t(64238).A,width:"730",height:"536"})),(0,r.yg)("h2",{id:"create-task"},"Create Task"),(0,r.yg)("h3",{id:"create-data-streams-group"},"Create Data Streams Group"),(0,r.yg)("p",null,"Click ","[Synchronization]"," \u2192 ","[Create]"," on the page and input the Group ID and Steam ID:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Create Group_Stream",src:t(52361).A,width:"1481",height:"411"})),(0,r.yg)("h3",{id:"create-data-source"},"Create Data Source"),(0,r.yg)("p",null,"In the data source, click ","[New]"," \u2192 ","[Pulsar]"," to configure the source name, pulsar tenant, namespace, topic and other information."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Create Source",src:t(48662).A,width:"662",height:"792"})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Please create the pulsar tenant, namespace and topic in advance, you can do it by ",(0,r.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/2.10.x/pulsar-admin/#create-3"},"Pulsar-admin")," "))),(0,r.yg)("h3",{id:"create-data-sink"},"Create Data Sink"),(0,r.yg)("p",null,"In the data target, click ","[New]"," \u2192 ","[ClickHouse]"," to configure the name, DB name, table name, and created ck data node."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Create Sink",src:t(20016).A,width:"1212",height:"399"})),(0,r.yg)("h3",{id:"configuration-fields"},"Configuration Fields"),(0,r.yg)("p",null,"Configure fields mapping in ","[Source Field]"," and ","[Target Field]"," respectively, and click ","[Submit]"," after completion."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Create Fields",src:t(31758).A,width:"1012",height:"450"})),(0,r.yg)("h3",{id:"approve-data-stream"},"Approve Data Stream"),(0,r.yg)("p",null,"Click ","[Approval]"," -> ","[MyApproval]"," -> ","[Approval]"," -> ","[Ok]","."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Approve",src:t(93834).A,width:"2276",height:"255"})),(0,r.yg)("p",null,"Back to ","[Synchronization]"," page, wait for ","[success]","."),(0,r.yg)("h2",{id:"test-data"},"Test Data"),(0,r.yg)("h3",{id:"send-data"},"Send Data"),(0,r.yg)("p",null,"Enter the pulsar container"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"docker exec -it pulsar /bin/bash\n")),(0,r.yg)("p",null,"Insert 1000 pieces of data in total"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n\n# Pulsar info\nTENANT="public"\nNAMESPACE="default"\nTOPIC="test"\n\n# Insert data in a loop\nfor ((i=1; i<=1000; i++))\ndo\n# Generate data\nid=$i\nname="name_$i"\n\n    # Build one message\n    message="$id|$name"\n\n    # Produce message to pulsar\n    bin/pulsar-client produce persistent://$TENANT/$NAMESPACE/$TOPIC --messages $message\ndone\n')),(0,r.yg)("h3",{id:"verify-data"},"Verify Data"),(0,r.yg)("p",null,"Then enter the ClickHouse container and view the source table data:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Source_data",src:t(99733).A,width:"508",height:"312"})),(0,r.yg)("h2",{id:"faq"},"FAQ"),(0,r.yg)("p",null,"ClickHouse fails to write data, you can view the error on the Flink page and check the permissions of the user and table engine used."))}p.isMDXComponent=!0},93834:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/approve-4b2a7b1cd1a0d5bce3fac0ef19261747.png"},64238:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/clickhouse_datanode-92d4cc2ef153bc2f7a5798d9371e34ca.png"},52361:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/group_stream-0428e03c91e93c6a6a0e5f8ba729a566.png"},20016:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/sink-ee7c26bc49ec5c3df864903dea349547.png"},99733:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/sink_data-598241795b95bff65f7aeb0b60dc9d66.png"},31758:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/sink_fields-3b7d1c470e3b2fd66dc78ffb03cb645a.png"},48662:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/source-57039fc217f0c7d77967aef271503ea4.png"}}]);
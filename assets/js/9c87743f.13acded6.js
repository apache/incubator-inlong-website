"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[53094],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>m});var n=t(96540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),g=i,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||o;return t?n.createElement(m,r(r({ref:a},c),{},{components:t})):n.createElement(m,r({ref:a},c))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=g;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=t[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},28770:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=t(58168),i=(t(96540),t(15680));const o={title:"Dashboard Guide",sidebar_position:1},r=void 0,s={unversionedId:"user_guide/dashboard_usage",id:"version-2.0.0/user_guide/dashboard_usage",title:"Dashboard Guide",description:"User Login",source:"@site/versioned_docs/version-2.0.0/user_guide/dashboard_usage.md",sourceDirName:"user_guide",slug:"/user_guide/dashboard_usage",permalink:"/docs/user_guide/dashboard_usage",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/user_guide/dashboard_usage.md",tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{title:"Dashboard Guide",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Golang SDK",permalink:"/docs/sdk/tubemq-sdk/go"},next:{title:"Command-line Tools",permalink:"/docs/user_guide/command_line_tools"}},l={},d=[{value:"User Login",id:"user-login",level:2},{value:"Data Access",id:"data-access",level:2},{value:"Data Stream Group Information",id:"data-stream-group-information",level:3},{value:"Access Requirements",id:"access-requirements",level:4},{value:"Group Information",id:"group-information",level:4},{value:"Access Scale",id:"access-scale",level:4},{value:"Data Stream",id:"data-stream",level:3},{value:"Basic Information",id:"basic-information",level:4},{value:"Data Sources",id:"data-sources",level:4},{value:"Data Information",id:"data-information",level:4},{value:"Data Storage",id:"data-storage",level:4},{value:"My Application",id:"my-application",level:2},{value:"Application Data Access Details",id:"application-data-access-details",level:4},{value:"Data Consumption",id:"data-consumption",level:2},{value:"Consumer Information",id:"consumer-information",level:3},{value:"Synchronization",id:"synchronization",level:2},{value:"Base Information",id:"base-information",level:3},{value:"Realtime Synchronization",id:"realtime-synchronization",level:4},{value:"Offline Synchronization",id:"offline-synchronization",level:4},{value:"Regular Type",id:"regular-type",level:5},{value:"Crontab Type",id:"crontab-type",level:5},{value:"Data Node",id:"data-node",level:2},{value:"Cluster Management",id:"cluster-management",level:2},{value:"Cluster Tag Management",id:"cluster-tag-management",level:3},{value:"Add New Cluster Label",id:"add-new-cluster-label",level:4},{value:"Bind Cluster",id:"bind-cluster",level:4},{value:"Cluster Management",id:"cluster-management-1",level:3},{value:"Create  New Cluster",id:"create--new-cluster",level:4}],c={toc:d},u="wrapper";function p(e){let{components:a,...o}=e;return(0,i.yg)(u,(0,n.A)({},c,o,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"user-login"},"User Login"),(0,i.yg)("p",null,"Requires the user to enter the account name and password of the system, default account is ",(0,i.yg)("inlineCode",{parentName:"p"},"admin inlong"),"."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"User login",src:t(38730).A,width:"551",height:"360"})),(0,i.yg)("h2",{id:"data-access"},"Data Access"),(0,i.yg)("p",null,"The data access module displays a list of all tasks connected to the system within the current user authority, and can\nview, edit, update and delete the details of these tasks."),(0,i.yg)("p",null,"Click ","[Create]",", there are two steps to fill in data access information: Group information, data stream."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Create Group",src:t(74689).A,width:"1573",height:"618"})),(0,i.yg)("h3",{id:"data-stream-group-information"},"Data Stream Group Information"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Create Group",src:t(10867).A,width:"1452",height:"507"})),(0,i.yg)("h4",{id:"access-requirements"},"Access Requirements"),(0,i.yg)("p",null,"Access requirements require users to choose message middleware: high throughput (TUBE) or High reliability (PULSAR):"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"high throughput (Inlong TubeMQ): high-throughput message transmission component, suitable for log message transmission."),(0,i.yg)("li",{parentName:"ul"},"high reliability (Apache PULSAR): high-reliability message transmission component, suitable for billing transmission.")),(0,i.yg)("h4",{id:"group-information"},"Group Information"),(0,i.yg)("p",null,"You are required to fill in basic data stream group information for access tasks."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Group Name: Unified lowercase English name, please try to include the product name and concise\nspecifications, such as pay_base"),(0,i.yg)("li",{parentName:"ul"},"Group Label: the label of the group, easy to use and retrieve, up to 128 characters"),(0,i.yg)("li",{parentName:"ul"},"Group responsible person: at least 1 people, the group responsible person can view and modify group\ninformation, add and modify all access configuration items"),(0,i.yg)("li",{parentName:"ul"},"Group introduction: Cut SMS to introduce the group background and application of this access task:")),(0,i.yg)("h4",{id:"access-scale"},"Access Scale"),(0,i.yg)("p",null,"The scale of access requires users to judge the scale of access data in advance, to allocate computing and storage\nresources later."),(0,i.yg)("h3",{id:"data-stream"},"Data Stream"),(0,i.yg)("p",null,"Click ","[Next]"," to enter the data stream information filling step. There are four modules for data stream information filling:\nbasic information, data source, data information, and data stream."),(0,i.yg)("p",null,"In the data stream process, you can click ","[Create]"," to create a new data stream:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Create stream",src:t(98974).A,width:"976",height:"765"})),(0,i.yg)("h4",{id:"basic-information"},"Basic Information"),(0,i.yg)("p",null,"You are required to fill in the basic information of the data stream in the access task:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Data stream id: The prefix is automatically generated according to the product/project, which is unique in a\nspecific group and is consistent with the stream id in the data source and the storage table"),(0,i.yg)("li",{parentName:"ul"},"Data stream name: interface information description, the length is limited to 64 characters (32 Chinese characters)"),(0,i.yg)("li",{parentName:"ul"},"Data stream owner: The data stream owner can view and modify data stream information, add and modify all access\nconfiguration items"),(0,i.yg)("li",{parentName:"ul"},"Introduction to data stream: simple text introduction to data stream")),(0,i.yg)("h4",{id:"data-sources"},"Data Sources"),(0,i.yg)("p",null,"You are required to select the source of the data stream."),(0,i.yg)("p",null,"Currently, two methods of file and independent push are supported, and the detailed information of the data source can\nbe supplemented in the advanced options."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"File: The business data is in the file, and the business machine deploys InLong Agent, which is read according to\ncustomized policy rules"),(0,i.yg)("li",{parentName:"ul"},"Autonomous push: Push data to the messaging middleware through the SDK")),(0,i.yg)("h4",{id:"data-information"},"Data Information"),(0,i.yg)("p",null,"You are required to fill in the data-related information in the data stream."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Data info",src:t(53302).A,width:"1499",height:"466"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Data Format"),(0,i.yg)("li",{parentName:"ul"},"Data encoding"),(0,i.yg)("li",{parentName:"ul"},"Source field separator"),(0,i.yg)("li",{parentName:"ul"},"Source data field")),(0,i.yg)("h4",{id:"data-storage"},"Data Storage"),(0,i.yg)("p",null,"You are required to select the final flow direction of this data stream, this part is not currently supports both hive storage\nand autonomous push."),(0,i.yg)("p",null,"Add HIVE storage:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Hive info",src:t(89508).A,width:"1192",height:"774"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Target database: hive database name (prepared to create in advance)"),(0,i.yg)("li",{parentName:"ul"},"Target table: hive table name"),(0,i.yg)("li",{parentName:"ul"},"First-level partition: the field name of the first-level subdirectory of hdfs data divided by hive data"),(0,i.yg)("li",{parentName:"ul"},"Secondary partition: the field name of the first-level subdirectory of hdfs data divided by hive data"),(0,i.yg)("li",{parentName:"ul"},"Username: hive server connection account name"),(0,i.yg)("li",{parentName:"ul"},"User password: hive server connection account password"),(0,i.yg)("li",{parentName:"ul"},"HDFS url: Hive bottom HDFS connection"),(0,i.yg)("li",{parentName:"ul"},"JDBC url: jdbc url of hive server"),(0,i.yg)("li",{parentName:"ul"},"Field related information: source field name, source field type, HIVE field name, HIVE field type, field description,\nand support deletion and addition")),(0,i.yg)("h2",{id:"my-application"},"My Application"),(0,i.yg)("p",null,"The approval management function module currently includes my application and my approval, and all tasks of data access\nand consumption application approval in the management system."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"My application",src:t(90376).A,width:"1529",height:"743"})),(0,i.yg)("p",null,"Display the current task list submitted by the applicant for data access and consumption in the system, click ","[Details]","\nto view the current basic information and approval process of the task."),(0,i.yg)("h4",{id:"application-data-access-details"},"Application Data Access Details"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Application detail",src:t(67743).A,width:"1554",height:"704"})),(0,i.yg)("p",null,"Data access task detailed display The current basic information of the application task includes: applicant-related\ninformation, basic information about application access, and current approval process nodes."),(0,i.yg)("h2",{id:"data-consumption"},"Data Consumption"),(0,i.yg)("p",null,"Data consumption currently does not support direct consumption access to data, and data can be consumed normally after\nthe approval process."),(0,i.yg)("p",null,"Click ","[Create]"," to enter the data consumption process, and you need to fill in information related to\nconsumption."),(0,i.yg)("h3",{id:"consumer-information"},"Consumer Information"),(0,i.yg)("p",null,"Applicants need to gradually fill in the basic consumer data stream group information related to data consumption applications in\nthe information filling module"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Consumer info",src:t(83794).A,width:"1063",height:"423"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Consumer group name: The brief name of the\nconsumer must be composed of lowercase letters, numbers, and underscores. The final approval will assign the consumer\nname based on the abbreviation splicing"),(0,i.yg)("li",{parentName:"ul"},"Consumer Responsible Person: At least 2 persons are required to choose the responsible person; the responsible person\ncan view and modify the consumption information"),(0,i.yg)("li",{parentName:"ul"},"Consumer target data stream group id: you need to select the group id of the consumer data, you can click ","[Query]"," and\nselect the appropriate group id in the pop-up window"),(0,i.yg)("li",{parentName:"ul"},"Data usage: select data usage usage"),(0,i.yg)("li",{parentName:"ul"},"Data usage description: The applicant needs to briefly explain the items used and the purpose of the data according to\ntheir own consumption scenarios After completing the information, click ","[Submit]",", and the data consumption process\nwill be formally submitted to the approver before it will take effect.")),(0,i.yg)("h2",{id:"synchronization"},"Synchronization"),(0,i.yg)("p",null,"The data synchronization module displays a list of all tasks in the synchronization system within the current user permissions. You can view, edit, update and delete the details of these tasks.\nClick ","[New Data Synchronization]"," to enter the data synchronization process. You need to fill in the relevant information about the synchronization information. You can choose two synchronization types: real-time or offline."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Create sync",src:t(69587).A,width:"2444",height:"1021"})),(0,i.yg)("h3",{id:"base-information"},"Base Information"),(0,i.yg)("h4",{id:"realtime-synchronization"},"Realtime Synchronization"),(0,i.yg)("p",null,"After filling in the relevant basic information, you can proceed to the next step."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Realtime sync",src:t(3958).A,width:"2454",height:"899"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Data flow group ID: The brief name of the synchronization task, which must be composed of lowercase letters, numbers, and underscores."),(0,i.yg)("li",{parentName:"ul"},"Responsible person: The responsible person can view and modify synchronized information."),(0,i.yg)("li",{parentName:"ul"},"Entire database migration: Choose whether you need to migrate the entire database according to your own needs.")),(0,i.yg)("h4",{id:"offline-synchronization"},"Offline Synchronization"),(0,i.yg)("p",null,"After filling in the relevant basic information, you also need to fill in the offline synchronization related information, such as: scheduling rules and dependency configuration."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Offline sync",src:t(69728).A,width:"2430",height:"1523"})),(0,i.yg)("p",null,"Scheduling type: Choose regular or Crontab type according to your own needs."),(0,i.yg)("h5",{id:"regular-type"},"Regular Type"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Scheduling unit: select minutes, hours, days, weeks, etc. according to your own needs."),(0,i.yg)("li",{parentName:"ul"},"Scheduling cycle: Select the cycle according to your own needs, and its unit is determined by the selection of the scheduling unit."),(0,i.yg)("li",{parentName:"ul"},"Delay time: fill in the required delay time."),(0,i.yg)("li",{parentName:"ul"},"Validity time: Configure the validity time of offline rules.")),(0,i.yg)("h5",{id:"crontab-type"},"Crontab Type"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Valid time: The time interval can be filled in, the format is: 2021-01-01 00:00-2021-12-31 23:59"),(0,i.yg)("li",{parentName:"ul"},"Crontab expression: Fill in the Crontab expression according to your own needs.")),(0,i.yg)("h2",{id:"data-node"},"Data Node"),(0,i.yg)("p",null,"The data node module displays the list of data nodes within the current user permissions. You can view, edit, update and delete the details of these nodes.\nClick ","[New]"," to pop up a dialog box for creating a new node. You can choose different node types, such as: Redis, Kafka, MySQL, etc."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Create node",src:t(37334).A,width:"2400",height:"1273"})),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"create note type",src:t(61985).A,width:"2426",height:"996"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Node name: The brief name of the node, which must be composed of lowercase letters, numbers, and underscores."),(0,i.yg)("li",{parentName:"ul"},"Node type: Select the type of node."),(0,i.yg)("li",{parentName:"ul"},"Responsible person: The node responsible person can view and modify node information.")),(0,i.yg)("h2",{id:"cluster-management"},"Cluster Management"),(0,i.yg)("p",null,"The cluster management module is divided into two modules: cluster label management and cluster management. Cluster label management is used to manage cluster labels, and cluster management is used to manage clusters."),(0,i.yg)("h3",{id:"cluster-tag-management"},"Cluster Tag Management"),(0,i.yg)("p",null,"Cluster label management can add, delete, modify cluster labels, view the cluster list, bind clusters, etc."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Cluster tag",src:t(75462).A,width:"2422",height:"1538"})),(0,i.yg)("h4",{id:"add-new-cluster-label"},"Add New Cluster Label"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"add_cluster_tag",src:t(44308).A,width:"2384",height:"933"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Cluster label: The brief name of the label, which must be composed of lowercase letters, numbers, and underscores. Modifying the cluster label name will also modify the label names in all clusters bound to this label. Make sure that this label is not used by InlongGroup. ."),(0,i.yg)("li",{parentName:"ul"},"Person in charge: The person in charge can view and modify cluster label information."),(0,i.yg)("li",{parentName:"ul"},"Tenant: Select the tenant to be bound.")),(0,i.yg)("h4",{id:"bind-cluster"},"Bind Cluster"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Bind cluster",src:t(19935).A,width:"2456",height:"1016"})),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"detail bind cluster",src:t(46091).A,width:"2455",height:"919"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Cluster name: When the cluster list is empty, you need to go to the cluster management page to create the required cluster so that the cluster label can be bound to the cluster.")),(0,i.yg)("h3",{id:"cluster-management-1"},"Cluster Management"),(0,i.yg)("p",null,"Cluster management can add, delete, modify clusters, view the cluster list, view cluster details, view cluster nodes, etc."),(0,i.yg)("h4",{id:"create--new-cluster"},"Create  New Cluster"),(0,i.yg)("p",null,"Click ","[New Cluster]"," and a dialog box for creating a new cluster will pop up. You can choose different cluster types, such as Agent, Kafka, etc."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"create cluster",src:t(71982).A,width:"2425",height:"924"})),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"cluster detail",src:t(80291).A,width:"2378",height:"1067"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Cluster name: The brief name of the cluster, which must be composed of lowercase letters, numbers, and underscores."),(0,i.yg)("li",{parentName:"ul"},"Cluster type: Select the type of cluster."),(0,i.yg)("li",{parentName:"ul"},"Person in charge: The person in charge of the cluster can view and modify the cluster information."),(0,i.yg)("li",{parentName:"ul"},"Cluster label: Select the label to be bound.")))}p.isMDXComponent=!0},44308:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/add-cluster-tag-f71d67c1c0b66d126ed70cbb8aaff5b2.png"},67743:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/application-detail-10b25da1ba95ab563c9aa59270fc90f5.png"},19935:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/bind-cluster-ea8591a227c948fad384b170bf7dd25a.png"},80291:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/cluster-detail-a782aa7ea2f8cb52a442341b5aac9490.png"},75462:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/cluster-tag-e6260eeec061a9cef83bfdd9a5b9e351.png"},83794:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/consumer-info-6bceae15a5acd4dad81d3c91eec8b55a.png"},71982:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/create-cluster-9d068a9b90dc3fe9e5bba64352224e97.png"},74689:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/create-group-27becfcdb90d8befa42f46d1cf394a2e.png"},61985:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/create-node-type-e978d739277a2d154201c560fbc02e89.png"},37334:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/create-node-9f04fcfa8a75f86f7cdc254209c32aa2.png"},98974:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/create-stream-d3cc2e2e333fca11200f6b31ee70d9f0.png"},69587:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/create-sync-f83ac7dc94c263c728d98d450930dc9d.png"},53302:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/data-info-249333ddc4dea4af0b679c3c733ad6a5.png"},46091:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/detail-bind-cluster-094d8c69fd76c252fca3cf3436ea1b8d.png"},10867:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/group-information-e1a0576186ba753a636479073808f83a.png"},89508:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/hive-info-e59f897e276874091039c471adabf9cb.png"},90376:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/my-application-e6f8f879ec755f0600d9850078cd38f1.png"},69728:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/offline-sync-d6bddf7a61dd3dad774b2f40489d3cd7.png"},3958:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/realtime-sync-a99bb5f109765b1d9b4641db932be6b4.png"},38730:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/user-login-0bee384531a10022f6e65b6e5c0e667e.png"}}]);
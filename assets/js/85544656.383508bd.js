"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7824],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),g=o,m=c["".concat(l,".").concat(g)]||c[g]||p[g]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},50170:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(87462),o=(a(67294),a(3905));const r={title:"Release InLong 1.1.0",sidebar_position:1},i=void 0,s={permalink:"/blog/apache-inlong-1.1.0",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/apache-inlong-1.1.0.md",source:"@site/blog/apache-inlong-1.1.0.md",title:"Release InLong 1.1.0",description:"Apache InLong is a one-stop integration framework for massive data that provides automatic, secure and reliable data transmission capabilities. InLong supports both batch and stream data processing at the same time, which offers great power to build data analysis, modeling and other real-time applications based on streaming data.",date:"2022-06-22T02:06:04.000Z",formattedDate:"June 22, 2022",tags:[],readingTime:4.24,truncated:!1,authors:[],frontMatter:{title:"Release InLong 1.1.0",sidebar_position:1},prevItem:{title:"Release InLong 0.12.0",permalink:"/blog/apache-inlong-0.12.0"}},l={authorsImageUrls:[]},u=[{value:"1.1.0 Features Overview",id:"110-features-overview",level:2},{value:"Enhanced management capabilities for manager",id:"enhanced-management-capabilities-for-manager",level:3},{value:"Rich data nodes",id:"rich-data-nodes",level:3},{value:"Tools construction",id:"tools-construction",level:3},{value:"System Upgrade",id:"system-upgrade",level:3},{value:"1.1.0 Features Details",id:"110-features-details",level:2},{value:"Add Manager Client",id:"add-manager-client",level:3},{value:"Add ManagerCtl command line tool",id:"add-managerctl-command-line-tool",level:3},{value:"Manager supports issuing Sort tasks",id:"manager-supports-issuing-sort-tasks",level:3},{value:"Manager metadata is saved to ZooKeeper",id:"manager-metadata-is-saved-to-zookeeper",level:3},{value:"Support MySQL Binlog collection",id:"support-mysql-binlog-collection",level:3},{value:"Sort Added Iceberg, ClickHouse, Kafka",id:"sort-added-iceberg-clickhouse-kafka",level:3},{value:"Sort Standalone supports Hive, Elasticsearch, Kafka",id:"sort-standalone-supports-hive-elasticsearch-kafka",level:3},{value:"Protocol Buffers upgrade",id:"protocol-buffers-upgrade",level:3},{value:"InLong on Kubernetes optimization",id:"inlong-on-kubernetes-optimization",level:3},{value:"Dashboard plugin",id:"dashboard-plugin",level:3},{value:"Other features and bug fixes",id:"other-features-and-bug-fixes",level:3},{value:"Apache InLong(incubating) follow-up planning",id:"apache-inlongincubating-follow-up-planning",level:2}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache InLong is a one-stop integration framework for massive data that provides automatic, secure and reliable data transmission capabilities. InLong supports both batch and stream data processing at the same time, which offers great power to build data analysis, modeling and other real-time applications based on streaming data."),(0,o.kt)("h2",{id:"110-features-overview"},"1.1.0 Features Overview"),(0,o.kt)("p",null,"The 1.1.0-incubating just released mainly includes the following:"),(0,o.kt)("h3",{id:"enhanced-management-capabilities-for-manager"},"Enhanced management capabilities for manager"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added Manager Client to support the integration of InLong for creating data streams"),(0,o.kt)("li",{parentName:"ul"},"Added ManagerCtl command-line tool to support viewing and creating data streams"),(0,o.kt)("li",{parentName:"ul"},"Manager supports dispatching Agent tasks"),(0,o.kt)("li",{parentName:"ul"},"Manager supports dispatching Sort Flink tasks"),(0,o.kt)("li",{parentName:"ul"},"Manger data streams management, supports start, restart, pause operations"),(0,o.kt)("li",{parentName:"ul"},"Manager plugin support"),(0,o.kt)("li",{parentName:"ul"},"Manager metadata management supports using MySQL"),(0,o.kt)("li",{parentName:"ul"},"The first phase of cluster management, unified cluster information registration")),(0,o.kt)("h3",{id:"rich-data-nodes"},"Rich data nodes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support Iceberg"),(0,o.kt)("li",{parentName:"ul"},"Support ClickHouse"),(0,o.kt)("li",{parentName:"ul"},"Support MySQL Binlog collection"),(0,o.kt)("li",{parentName:"ul"},"Support Kafka ingestion"),(0,o.kt)("li",{parentName:"ul"},"Sort Standalone supports multiple type streams")),(0,o.kt)("h3",{id:"tools-construction"},"Tools construction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dashboard plugin support"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes deployment optimization"),(0,o.kt)("li",{parentName:"ul"},"Standalone deployment refactoring")),(0,o.kt)("h3",{id:"system-upgrade"},"System Upgrade"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Protocol Buffers upgrade"),(0,o.kt)("li",{parentName:"ul"},"Unified version Maven version dependencies"),(0,o.kt)("li",{parentName:"ul"},"Fixed a bunch of dependency CVEs"),(0,o.kt)("li",{parentName:"ul"},"DataProxy supports PB compression protocol")),(0,o.kt)("p",null,"This version closed about 642+ issues, including four 23 features and 180 improvements."),(0,o.kt)("h2",{id:"110-features-details"},"1.1.0 Features Details"),(0,o.kt)("h3",{id:"add-manager-client"},"Add Manager Client"),(0,o.kt)("p",null,"The newly added Manager Client defines common InLong Group/Stream operation interfaces, including task creation, viewing and deletion. Through Manager Client, users can build InLong into any third-party platform to achieve unified customized platform construction. The Manager Client is mainly designed and implemented by @kipshi, @gong, @ciscozhou, thanks to three contributors."),(0,o.kt)("h3",{id:"add-managerctl-command-line-tool"},"Add ManagerCtl command line tool"),(0,o.kt)("p",null,"ManagerCtl is developed based on Manager Client and is a command-line tool for manipulating InLong resources, which can further simplify the use of developers. ManagerCtl was contributed independently by @haifxu and includes guidelines including:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: managerctl [options] [command] [command options]\nOptions:\n-h, --help\nGet all command about managerctl.\nCommands:\ncreate      Create resource by json file\nUsage: create [options]\n\u200b\ndescribe      Display details of one or more resources\nUsage: describe [options]\n\u200b\nlist      Displays main information for one or more resources\nUsage: list [options]\n")),(0,o.kt)("h3",{id:"manager-supports-issuing-sort-tasks"},"Manager supports issuing Sort tasks"),(0,o.kt)("p",null,"In previous versions, after the user created the data group/stream task, Sort needed to submit it to the Flink cluster through the command line, and then perform data sorting. In version 1.1.0, we unified the start, stop, and suspend operations of Sort tasks to the Manager to complete. Users only need to configure the correct Flink cluster when the Manager is deployed. When the data stream is approved, Sort will be automatically started.\nThis part of the work is mainly contributed by @LvJiancheng."),(0,o.kt)("h3",{id:"manager-metadata-is-saved-to-zookeeper"},"Manager metadata is saved to ZooKeeper"),(0,o.kt)("p",null,"InLong uses ZooKeeper to save data stream metadata, which increases the deployment threshold and operation and maintenance difficulty for developers and users.\nIn version 1.1.0, we save data stream metadata in DB by default, and ZooKeeper is only an optional solution in large-scale scenarios. Thanks to @kipshi @yunqingmoswu for contributing a PR to ZooKeeper."),(0,o.kt)("h3",{id:"support-mysql-binlog-collection"},"Support MySQL Binlog collection"),(0,o.kt)("p",null,"Version 1.1.0 fully supports the collection of data from MySQL, and supports both incremental and full strategies. Users can collect MySQL data with simple configuration in InLong. This part of the work was contributed by @EMsnap."),(0,o.kt)("h3",{id:"sort-added-iceberg-clickhouse-kafka"},"Sort Added Iceberg, ClickHouse, Kafka"),(0,o.kt)("p",null,"In version 1.1.0, the storage of data nodes for various scenarios has been added, including Iceberg, ClickHouse, and Kafka. The support of these three streams enriches the usage scenarios of InLong. New stream support, mainly contributed by @chantccc @KevinWen007 @healchow."),(0,o.kt)("h3",{id:"sort-standalone-supports-hive-elasticsearch-kafka"},"Sort Standalone supports Hive, Elasticsearch, Kafka"),(0,o.kt)("p",null,"As mentioned in the previous version, for non-Flink environments, we can sort data streams through Sort Standalone. In version 1.1.0, we added support for Hive, ElasticSearch, Kafka, and expanded the usage scenarios of Sort Standalone. Sort Standalone is mainly contributed by @vernedeng @luchunliang."),(0,o.kt)("h3",{id:"protocol-buffers-upgrade"},"Protocol Buffers upgrade"),(0,o.kt)("p",null,"All InLong components Protocol Buffers dependencies have been upgraded from 2.5.0 to 3.19.4. Thanks to @gosonzhang @doleyzi for their contributions, a lot of compatibility and testing work for Protocol Buffers upgrades."),(0,o.kt)("h3",{id:"inlong-on-kubernetes-optimization"},"InLong on Kubernetes optimization"),(0,o.kt)("p",null,"The optimization work of InLong on Kubernetes mainly includes adding Audit, combing configuration, optimizing the use of message queues, optimizing the use of documents, etc., to facilitate the use of InLong on the cloud. Thanks to @shink for contributing to these optimizations."),(0,o.kt)("h3",{id:"dashboard-plugin"},"Dashboard plugin"),(0,o.kt)("p",null,"In order to facilitate users to quickly build new data stream on Dashboard, Dashboard is support plugin in version 1.1.0. JavaScript developers who understand the plugin development guidelines can quickly expand new data stream. Thanks for this part of the work @leezng"),(0,o.kt)("h3",{id:"other-features-and-bug-fixes"},"Other features and bug fixes"),(0,o.kt)("p",null,"For related content, please refer to the version ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong/blob/master/CHANGES.md"},"release notes"),", which list the features, enhancements and bug fixes of this version in detail, as well as specific contributors."),(0,o.kt)("h2",{id:"apache-inlongincubating-follow-up-planning"},"Apache InLong(incubating) follow-up planning"),(0,o.kt)("p",null,"In subsequent versions, we will support lightweight Sort, and expand more data sources and targets to cover more usage scenarios, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flink SQL support"),(0,o.kt)("li",{parentName:"ul"},"Elasticsearch, HBase support")))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[56194],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>m});var t=n(96540);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),u=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},d=function(e){var a=u(e.components);return t.createElement(l.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=o,m=p["".concat(l,".").concat(g)]||p[g]||c[g]||i;return n?t.createElement(m,r(r({ref:a},d),{},{components:n})):t.createElement(m,r({ref:a},d))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=g;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3163:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var t=n(58168),o=(n(96540),n(15680));const i={title:"Release 2.0.0",author:"Aloys Zhang",author_url:"https://github.com/aloyszhang",author_image_url:"https://avatars.githubusercontent.com/u/48062889?v=4?s=400",tags:["Apache InLong","Version"]},r=void 0,s={permalink:"/blog/2024/10/20/release-2.0.0",editUrl:"https://github.com/apache/inlong-website/edit/master/blog/blog/2024-10-20-release-2.0.0.md",source:"@site/blog/2024-10-20-release-2.0.0.md",title:"Release 2.0.0",description:"Apache InLong\uff08\u5e94\u9f99\uff09has recently released version 2.0.0, which has closed over 315 issues, including more than 6 major features and over 96 optimizations.",date:"2024-10-20T00:00:00.000Z",formattedDate:"October 20, 2024",tags:[{label:"Apache InLong",permalink:"/blog/tags/apache-in-long"},{label:"Version",permalink:"/blog/tags/version"}],readingTime:13.92,hasTruncateMarker:!0,authors:[{name:"Aloys Zhang",url:"https://github.com/aloyszhang",imageURL:"https://avatars.githubusercontent.com/u/48062889?v=4?s=400"}],frontMatter:{title:"Release 2.0.0",author:"Aloys Zhang",author_url:"https://github.com/aloyszhang",author_image_url:"https://avatars.githubusercontent.com/u/48062889?v=4?s=400",tags:["Apache InLong","Version"]},nextItem:{title:"Release 1.13.0",permalink:"/blog/2024/07/18/release-1.13.0"}},l={authorsImageUrls:[void 0]},u=[{value:"About Apache InLong",id:"about-apache-inlong",level:2},{value:"From 1.0 to 2.0",id:"from-10-to-20",level:2},{value:"2.0.0 Overview",id:"200-overview",level:2},{value:"Agent Module",id:"agent-module",level:3},{value:"Dashboard Module",id:"dashboard-module",level:3},{value:"Manager Module",id:"manager-module",level:3},{value:"SDK Module",id:"sdk-module",level:3},{value:"Sort Module",id:"sort-module",level:3},{value:"Audit Module",id:"audit-module",level:3},{value:"2.0.0 Feature Introduction",id:"200-feature-introduction",level:2},{value:"New Transform Capabilities",id:"new-transform-capabilities",level:3},{value:"Community Documentation Restructuring",id:"community-documentation-restructuring",level:3},{value:"Support for OceanBase Data Source",id:"support-for-oceanbase-data-source",level:3},{value:"Dynamic Resource Calculation for Sort Tasks",id:"dynamic-resource-calculation-for-sort-tasks",level:3},{value:"SortStandalone Supports HTTP Sink",id:"sortstandalone-supports-http-sink",level:3},{value:"Full-Link Management of Offline Synchronization",id:"full-link-management-of-offline-synchronization",level:3},{value:"Summary and Future Plans",id:"summary-and-future-plans",level:2}],d={toc:u},p="wrapper";function c(e){let{components:a,...i}=e;return(0,o.yg)(p,(0,t.A)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Apache InLong\uff08\u5e94\u9f99\uff09has recently released version 2.0.0, which has closed over 315 issues, including more than 6 major features and over 96 optimizations.\nThe main accomplishments include support for the Transform SDK and integrated into the ES Sink of Sort Standalone, OceanBase data source management,\nadaptive resource configuration for Sort tasks, HTTP output for SortStandalone, community documentation restructuring, and full-link support for offline synchronization."),(0,o.yg)("p",null,"After the 2.0.0 release, Apache InLong has added transform capabilities, improved support for the Agent Pulsar Source, enriched the capabilities and applicable scenarios of Sort,\nand optimized the display of the InLong Dashboard, addressing various issues encountered during the operation and maintenance of InLong."),(0,o.yg)("h2",{id:"about-apache-inlong"},"About Apache InLong"),(0,o.yg)("p",null,"As the industry's first one-stop, all-scenario massive data integration framework, Apache InLong provides automated, secure, reliable,\nand high-performance data transmission capabilities, enabling businesses to quickly build stream-based data analysis, modeling, and applications.\nCurrently, InLong is widely used in various industries including advertising, payment, social networking, gaming, and artificial intelligence,\nserving thousands of businesses, with high-performance scenarios processing over hundreds of billions of records per day and highly reliable scenarios\nhandling over tens of trillions of records per day."),(0,o.yg)("p",null,'The core keywords for InLong\'s project positioning are "one-stop," "all-scenario," and "massive data." For "one-stop,"\nwe aim to shield technical details, provide complete data integration and supporting services, and achieve out-of-the-box usability;\nfor "all-scenario," we aim to offer comprehensive solutions covering common data integration scenarios in the big data field;\nfor "massive data," we hope to leverage architectural advantages such as layered data links, fully extensible components,\nand built-in multi-cluster management to stably support even larger data volumes based on hundreds of billions of records per day.'),(0,o.yg)("h2",{id:"from-10-to-20"},"From 1.0 to 2.0"),(0,o.yg)("p",null,"In version 1.13.0, InLong added the underlying framework for offline synchronization tasks and supported Flink's stream-batch integration capability.\nVersion 2.0.0 fixed several issues with the built-in scheduler, connected the front and back ends, and enabled the configuration of offline\nsynchronization tasks on the Dashboard page, providing full process support for the configuration and management of offline synchronization tasks.\nBased on this capability, users can manage both real-time and offline synchronization tasks uniformly."),(0,o.yg)("p",null,"In historical versions, InLong's standard and lightweight architecture focused on data collection, reporting, and data storage in lakes,\nwith relatively weak support for fine-grained operations on data. Therefore, after version 1.13.0, a very important task for the InLong community\nwas to enhance support for Transform capabilities, allowing users to perform more flexible processing of data at any stage of data integration."),(0,o.yg)("p",null,"Transform is based on general SQL semantics and has now completed the framework for Transform capabilities, supporting over 180 custom Transform functions\nwhile ensuring the extensibility of Transform from a design perspective, allowing users to flexibly define new Transform capabilities."),(0,o.yg)("p",null,"In addition to the Transform feature, another focus of the InLong community has been the restructuring of community documentation.\nOn one hand, we have filled in missing documentation and updated outdated content;\non the other hand, we have reorganized the documentation according to user guidance, core system introduction, development guidance, and system management,\nproviding better explanations from user, developer, and operational perspectives. With the restructured documentation,\nusers can more easily utilize InLong and better understand its operational and management mechanisms,\nas well as quickly develop custom plugins to meet specific needs."),(0,o.yg)("p",null,"Overall, by the time version 2.0.0 was released:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"InLong has achieved full-link support for offline synchronization tasks, possessing stream-batch integrated data processing capabilities."),(0,o.yg)("li",{parentName:"ul"},"InLong has greatly enriched the capabilities of T, laying the foundation for future support of ELT/EtLT Pipelines."),(0,o.yg)("li",{parentName:"ul"},"The optimization of documentation has made InLong more user-friendly, better attracting users to understand, use, and co-build InLong.")),(0,o.yg)("p",null,"InLong now supports both standard and lightweight architectures, stream-batch integrated data synchronization capabilities, and flexible data Transform capabilities. Therefore, the community has decided to upgrade InLong to version 2.0.0, marking the official entry of Apache InLong into the 2.0 era."),(0,o.yg)("h2",{id:"200-overview"},"2.0.0 Overview"),(0,o.yg)("p",null,"Apache InLong has recently released version 2.0.0, which has closed over 315 issues, including more than 6 major features and over 96 optimizations, achieving the following:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Support for Transform SDK and integrated into the ES Sink of Sort Standalone"),(0,o.yg)("li",{parentName:"ul"},"New capabilities for OceanBase data source management"),(0,o.yg)("li",{parentName:"ul"},"Adaptive resource configuration for Sort tasks"),(0,o.yg)("li",{parentName:"ul"},"HTTP output for Sort Standalone"),(0,o.yg)("li",{parentName:"ul"},"Restructured and optimized community documentation"),(0,o.yg)("li",{parentName:"ul"},"Stream-batch integration, support for offline synchronization capabilities")),(0,o.yg)("p",null,"In addition to the above features, version 2.0.0 also:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Improved support for the Agent Pulsar Source"),(0,o.yg)("li",{parentName:"ul"},"Enriched the capabilities and usage scenarios of Sort"),(0,o.yg)("li",{parentName:"ul"},"Fixed some issues encountered during InLong operation and maintenance"),(0,o.yg)("li",{parentName:"ul"},"Optimized the display and user experience of the Dashboard")),(0,o.yg)("h3",{id:"agent-module"},"Agent Module"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Optimized the Pulsar Source implementation to fix issues with inaccurate consumption offsets."),(0,o.yg)("li",{parentName:"ul"},"Added support for data re-insertion filtering capabilities."),(0,o.yg)("li",{parentName:"ul"},"Introduced the ability to report Agent status."),(0,o.yg)("li",{parentName:"ul"},"Updated the implementations for Redis, Oracle, SQLServer, and MQTT data sources.")),(0,o.yg)("h3",{id:"dashboard-module"},"Dashboard Module"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Added an offline synchronization configuration page for data synchronization."),(0,o.yg)("li",{parentName:"ul"},"Optimized the style and structure of data preview."),(0,o.yg)("li",{parentName:"ul"},"Introduced a heartbeat display page for cluster node management."),(0,o.yg)("li",{parentName:"ul"},"Added cluster name display to data source information."),(0,o.yg)("li",{parentName:"ul"},"Supported custom ASCII code options for source data field delimiters."),(0,o.yg)("li",{parentName:"ul"},"Merged metric items with other items on the module review page."),(0,o.yg)("li",{parentName:"ul"},"Enabled delete operations for cluster management and template management."),(0,o.yg)("li",{parentName:"ul"},"Fixed errors in data preview."),(0,o.yg)("li",{parentName:"ul"},"Added support for OceanBase data sources.")),(0,o.yg)("h3",{id:"manager-module"},"Manager Module"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Added support for OceanBase data source management."),(0,o.yg)("li",{parentName:"ul"},"Introduced TubeMQ configuration capabilities for Sort Standalone."),(0,o.yg)("li",{parentName:"ul"},"Supported asynchronous installation of Agent and the display of Agent installation logs."),(0,o.yg)("li",{parentName:"ul"},"Enabled configuration for HTTP type Sink."),(0,o.yg)("li",{parentName:"ul"},"Supported paginated queries for detailed information on sorting tasks."),(0,o.yg)("li",{parentName:"ul"},"Data preview now supports KV data types, escape characters, and filtering Tube data by StreamId."),(0,o.yg)("li",{parentName:"ul"},"Added data filtering functionality."),(0,o.yg)("li",{parentName:"ul"},"Permission optimization: Regular users are not allowed to modify Group information if they are not the Owner."),(0,o.yg)("li",{parentName:"ul"},"Fixed issues with offline synchronization updates."),(0,o.yg)("li",{parentName:"ul"},"Resolved alignment issues in data preview fields.")),(0,o.yg)("h3",{id:"sdk-module"},"SDK Module"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Transform supports data partitioning using GroupBy semantics."),(0,o.yg)("li",{parentName:"ul"},"Transform can parse Map nodes in JSON or PB data."),(0,o.yg)("li",{parentName:"ul"},"Transform JSON data source supports multidimensional arrays."),(0,o.yg)("li",{parentName:"ul"},"Transform supports ELT functionality."),(0,o.yg)("li",{parentName:"ul"},"Transform supports configuration and parsing of Transform annotations."),(0,o.yg)("li",{parentName:"ul"},"Transform supports various data source types: JSON, PB, XML, YAML, BSON, AVRO, ORC, PARQUET, etc."),(0,o.yg)("li",{parentName:"ul"},"Transform supports arithmetic functions: ceil, floor, sin, cos, cot, tanh, cosh, asin, atan, mod, etc."),(0,o.yg)("li",{parentName:"ul"},"Transform supports date and time functions: year, quarter, month, week, from_unixtime, unix_timestamp, to_timestamp, etc."),(0,o.yg)("li",{parentName:"ul"},"Transform supports string functions: substring, replace, reverse, etc."),(0,o.yg)("li",{parentName:"ul"},"Transform supports common encoding and encryption functions: MD5, ASCII, SHA."),(0,o.yg)("li",{parentName:"ul"},"Transform supports numeral and bitwise operation functions: HEX, Bitwise."),(0,o.yg)("li",{parentName:"ul"},"Transform supports compression and decompression functions: GZIP, ZIP, etc."),(0,o.yg)("li",{parentName:"ul"},"Transform includes other common functions: case conversion, IN, NOT IN, EXISTS, etc."),(0,o.yg)("li",{parentName:"ul"},"DataProxy Java SDK: Shaded Native Library to reduce conflicts with other SDKs."),(0,o.yg)("li",{parentName:"ul"},"DataProxy Java SDK: Optimized sending jitter issue during metadata changes."),(0,o.yg)("li",{parentName:"ul"},"DataProxy CPP SDK: Improved memory management and optimized build scripts."),(0,o.yg)("li",{parentName:"ul"},"DataProxy CPP SDK: Supports multiple protocols."),(0,o.yg)("li",{parentName:"ul"},"DataProxy CPP SDK: Added message manager and optimized data reception capabilities."),(0,o.yg)("li",{parentName:"ul"},"DataProxy CPP SDK: Supports forking subprocesses in DataProxy CPP SDK."),(0,o.yg)("li",{parentName:"ul"},"DataProxy Python SDK: Updated build scripts and supports skipping the CPP SDK build step.")),(0,o.yg)("h3",{id:"sort-module"},"Sort Module"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Adjust resources required for Sort tasks based on data scale."),(0,o.yg)("li",{parentName:"ul"},"Added support for OceanBase data source."),(0,o.yg)("li",{parentName:"ul"},"Flink 1.18 now supports Elasticsearch 6 and Elasticsearch 7 connectors."),(0,o.yg)("li",{parentName:"ul"},"SortStandalone Elasticsearch Sink supports Transform."),(0,o.yg)("li",{parentName:"ul"},"SortStandalone supports HTTP Sink and batch sorting."),(0,o.yg)("li",{parentName:"ul"},"Connector supports OpenTelemetry log reporting."),(0,o.yg)("li",{parentName:"ul"},"Optimized producer parameters for Kafka connector."),(0,o.yg)("li",{parentName:"ul"},"Added end-to-end test cases for Flink 1.15.")),(0,o.yg)("h3",{id:"audit-module"},"Audit Module"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Supports global memory control for the audit SDK."),(0,o.yg)("li",{parentName:"ul"},"Optimized daily dimension audit data statistics."),(0,o.yg)("li",{parentName:"ul"},"Audit SDK allows custom local IP settings."),(0,o.yg)("li",{parentName:"ul"},"Unified audit aggregation interval range."),(0,o.yg)("li",{parentName:"ul"},"Resolved Protobuf version conflicts between Audit SDK and other components.")),(0,o.yg)("h2",{id:"200-feature-introduction"},"2.0.0 Feature Introduction"),(0,o.yg)("h3",{id:"new-transform-capabilities"},"New Transform Capabilities"),(0,o.yg)("p",null,"InLong Transform enhances InLong's ability to expand access and distribution capabilities by adapting to a wider range of data protocols and reporting scenarios on the input side,\nwhile accommodating complex and diverse data analysis scenarios on the output side. This improves data quality and collaboration, providing computing capabilities such as connection,\naggregation, filtering, grouping, value extraction, and sampling, all decoupled from the computation engine."),(0,o.yg)("p",null,'It simplifies the pre-processing operations for users reporting data, lowers the barriers to data usage, and streamlines the pre-operations required before users can start analyzing data.\nThe focus is on the business value of data, achieving the goal of making data "visible and usable."'),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"2.0.0-transform-background.png",src:n(22800).A,width:"1186",height:"499"})),(0,o.yg)("p",null,"Transform has a wide range of application scenarios. Here are some typical examples:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Data Cleaning: During the data integration process, Transform capabilities can effectively eliminate errors, duplicates, and inconsistencies in data from different sources, improving data quality."),(0,o.yg)("li",{parentName:"ul"},"Data Fusion: Combining data from different sources for unified analysis and reporting. Transform capabilities can handle various formats and structures of data, achieving data fusion and integration."),(0,o.yg)("li",{parentName:"ul"},"Data Standardization: Converting data into a unified standard format for cross-system and cross-platform data analysis. Transform capabilities help enterprises achieve data standardization and normalization."),(0,o.yg)("li",{parentName:"ul"},"Data Partitioning and Indexing: To enhance the performance of data queries and analysis, Transform capabilities can dynamically adjust field values for data partitioning and indexing, thereby improving data warehouse performance."),(0,o.yg)("li",{parentName:"ul"},"Data Aggregation and Calculation: In the data analysis process, Transform capabilities can perform complex data aggregation and calculations to extract valuable business information, covering multidimensional data analysis.")),(0,o.yg)("p",null,"Main Features of Transform\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Support for Rich Data Protocols: Enables integration with a variety of data protocols."),(0,o.yg)("li",{parentName:"ul"},"Decoupled from Computing Engine: Allows flexibility in processing without being tied to a specific computing engine."),(0,o.yg)("li",{parentName:"ul"},"Support for Rich Transformation Functions: Provides a wide range of functions for data transformation."),(0,o.yg)("li",{parentName:"ul"},"Lossless and Transparent Changes: Ensures that changes can be made without data loss or noticeable impact."),(0,o.yg)("li",{parentName:"ul"},"Automatic Scaling: Supports dynamic scaling up and down based on workload.")),(0,o.yg)("p",null,"Currently, Transform supports a variety of data formats and custom functions, allowing users to flexibly process data using SQL.\nSpecial thanks to contributors such as @luchunliang, @vernedeng, @emptyOVO, @ying-hua, @Zkplo, @MOONSakura0614, and @Ybszzzziz for their efforts.\nFor more details, please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/aloyszhang/inlong/blob/master/CHANGES.md#sdk"},"Transform SDK Issues"),"."),(0,o.yg)("h3",{id:"community-documentation-restructuring"},"Community Documentation Restructuring"),(0,o.yg)("p",null,"With the continuous development of the InLong community, the capabilities of InLong are also constantly enhancing. However, there have been issues with missing or outdated community documentation.\nTo address this, the InLong community has initiated a restructuring of the community documentation to better assist users in understanding and utilizing InLong."),(0,o.yg)("p",null,"Main Content Includes:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Optimized Document Structure: Better organization of document content. "),(0,o.yg)("li",{parentName:"ul"},"Enhanced Quick Start Examples:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Offline synchronization usage examples"),(0,o.yg)("li",{parentName:"ul"},"Transform SDK usage examples"),(0,o.yg)("li",{parentName:"ul"},"Data subscription usage examples"),(0,o.yg)("li",{parentName:"ul"},"HTTP message reporting usage examples"))),(0,o.yg)("li",{parentName:"ul"},"Improved SDK Documentation:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"DataProxy: C++, Java, Golang, Python SDKs, and HTTP data reporting manuals"),(0,o.yg)("li",{parentName:"ul"},"TubeMQ SDK: C++, Java, Golang SDK usage manuals"))),(0,o.yg)("li",{parentName:"ul"},"Enhanced Development Guidelines:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Code compilation guidelines"),(0,o.yg)("li",{parentName:"ul"},"Documentation for data protocols of each component"),(0,o.yg)("li",{parentName:"ul"},"Documentation for extension development of each component"),(0,o.yg)("li",{parentName:"ul"},"REST API documentation"))),(0,o.yg)("li",{parentName:"ul"},"Improved Management Articles: Documentation on user management, approval management, tenant management, node management, cluster management, tag management, template management, and agent management.")),(0,o.yg)("p",null,"Currently, the community documentation has seen significant improvements in usage guidelines, development guidelines, and management guidelines.\nSpecial thanks to contributors such as @aloyszhang, @fuweng11, @vernedeng, @luchunliang, @gosonzhang, @doleyzi, @baomingyu, @justinwwhuang, and @wohainilaodou for their contributions to the documentation improvement.\nFor more details, please refer to the ",(0,o.yg)("a",{parentName:"p",href:"https://inlong.apache.org/docs/next/introduction"},"official website"),"."),(0,o.yg)("h3",{id:"support-for-oceanbase-data-source"},"Support for OceanBase Data Source"),(0,o.yg)("p",null,"OceanBase Database is a distributed relational database characterized by high availability and scalability, suitable for large-scale data storage and processing scenarios. InLong version 2.0.0 adds support for OceanBase data sources, allowing data to be imported from data sources into OceanBase."),(0,o.yg)("p",null,"Managing OceanBase data nodes is similar to MySQL. To create a new OceanBase node, you need to fill in the node name, type (OceanBase), username, password, address, and other key information."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"2.0.0-oceanbase-detail.png",src:n(39724).A,width:"712",height:"578"})),(0,o.yg)("p",null,"To write data into OceanBase, you first need to create a data target of type ",(0,o.yg)("inlineCode",{parentName:"p"},"OceanBase"),"."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"2.0.0-oceanbase-type.png",src:n(32263).A,width:"1251",height:"317"})),(0,o.yg)("p",null,"Then fill in the relevant information, including the name, data node information, database and table names of the data target, and the primary key information of the target table."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"2.0.0-oceanbase-target.png",src:n(28708).A,width:"1250",height:"438"})),(0,o.yg)("p",null,"Thanks to @xxsc0529 for their contributions to this feature. For more details, please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/pull/10700"},"INLONG-10700"),", ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/pull/10701"},"INLONG-10701"),", ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/pull/10704"},"INLONG-10704"),"."),(0,o.yg)("h3",{id:"dynamic-resource-calculation-for-sort-tasks"},"Dynamic Resource Calculation for Sort Tasks"),(0,o.yg)("p",null,"The total resources (task parallelism) for Flink Sort Jobs come from the configuration file ",(0,o.yg)("inlineCode",{parentName:"p"},"flink-sort-plugin.properties"),", meaning that all submitted sorting jobs will use the same amount of resources. When the data scale is large, resources may be insufficient, and when the data scale is small, resources may be wasted."),(0,o.yg)("p",null,"Therefore, dynamically calculating the required resource quantity based on data volume is a much-needed feature. InLong now supports dynamically calculating the total resource requirements for tasks based on data volume, involving two core pieces of data:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The data volume of the task: This relies on the audit system and is derived from the average data volume recorded by ",(0,o.yg)("inlineCode",{parentName:"li"},"DataProxy")," over the past hour."),(0,o.yg)("li",{parentName:"ul"},"The processing capacity per core: This depends on the maximum number of messages per core configured in the ",(0,o.yg)("inlineCode",{parentName:"li"},"flink-sort-plugin.properties")," file.")),(0,o.yg)("p",null,"With these two pieces of data, the total resource requirements for a task can be calculated. This feature supports a switch to enable or disable it as needed."),(0,o.yg)("p",null,"Thanks to @PeterZh6 for their contributions to this feature. For more details, please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/pull/10916"},"INLONG-10916"),"."),(0,o.yg)("h3",{id:"sortstandalone-supports-http-sink"},"SortStandalone Supports HTTP Sink"),(0,o.yg)("p",null,"Inlong SortStandalone is responsible for consuming data from MQ and distributing it to various data storage modules, supporting multiple data stores such as ElasticSearch and CLS."),(0,o.yg)("p",null,"Compared to SortFlink, SortStandalone offers higher performance and lower latency, making it suitable for scenarios with high performance requirements."),(0,o.yg)("p",null,"HTTP is a widely used communication protocol, and SortStandalone supports HTTP output, allowing data to be sent to HTTP interfaces without worrying about specific storage implementations, thus adapting more flexibly to different business scenarios."),(0,o.yg)("p",null,"The processing flow for HTTP output is as follows:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"2.0.0-sortstandalone-http.png",src:n(28275).A,width:"1600",height:"951"})),(0,o.yg)("p",null,"HTTP output has the following features:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"SortSDK is responsible for consuming data from MQ"),(0,o.yg)("li",{parentName:"ul"},"Supports semaphore-based traffic control capabilities"),(0,o.yg)("li",{parentName:"ul"},"Metadata management relies on Manager, supporting dynamic updates"),(0,o.yg)("li",{parentName:"ul"},"The output protocol is HTTP, decoupling specific storage implementations"),(0,o.yg)("li",{parentName:"ul"},"Supports retry strategies")),(0,o.yg)("p",null,"Thanks to @yfsn666 and @fuweng11 for their contributions to this feature. For more details, please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/pull/10831"},"INLONG-10831")," and ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/pull/10884"},"INLONG-10884"),"."),(0,o.yg)("h3",{id:"full-link-management-of-offline-synchronization"},"Full-Link Management of Offline Synchronization"),(0,o.yg)("p",null,"Version 2.0.0 adds full-link management capabilities for offline data synchronization tasks, with configuration methods for offline synchronization tasks similar to real-time synchronization. The specific process is as follows:"),(0,o.yg)("p",null,"First, create the Group information for the synchronization task."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"2.0.0-offline-sync-group.png",src:n(12776).A,width:"824",height:"422"})),(0,o.yg)("p",null,'Note that the "Sync Type" should be selected as "Offline."'),(0,o.yg)("p",null,"The second step is to configure the scheduling information for the offline task."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"2.0.0-offline-schedule-common.png",src:n(51084).A,width:"813",height:"333"})),(0,o.yg)("p",null,"The conventional scheduling configuration requires setting the following parameters:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Scheduling unit: Supports minute, hour, day, month, year, and single execution (single execution means it will only run once)"),(0,o.yg)("li",{parentName:"ul"},"Scheduling cycle: Represents the time interval between two task schedules"),(0,o.yg)("li",{parentName:"ul"},"Delay time: Represents the delay time for task startup"),(0,o.yg)("li",{parentName:"ul"},"Valid time: Includes start and end times; scheduled tasks will only run within this time range")),(0,o.yg)("p",null,"In addition to conventional scheduling methods, Crontab configuration is also supported."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"2.0.0-offline-schedule-crontab.png",src:n(16470).A,width:"812",height:"244"})),(0,o.yg)("p",null,"Crontab scheduling requires setting the following parameters:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Valid time: Includes start and end times; scheduled tasks will only run within this time range"),(0,o.yg)("li",{parentName:"ul"},"Crontab expression: Represents the task cycle, for example, ",(0,o.yg)("inlineCode",{parentName:"li"},"0 */5 * * * ?"))),(0,o.yg)("p",null,"The third step is to create a Stream and configure data source and target information, which is consistent with real-time synchronization and will not be repeated here.\nFor more details, please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://inlong.apache.org/docs/next/quick_start/offline_data_sync/pulsar_mysql_example"},"Offline Synchronization Pulsar->MySQL"),"."),(0,o.yg)("h2",{id:"summary-and-future-plans"},"Summary and Future Plans"),(0,o.yg)("p",null,"Version 2.0.0 is the first version of the 2.x series, and the technical capability framework has been basically established. We welcome everyone to use it.\nIf you have more scenarios and requirements, or encounter issues during use, please feel free to raise issues and PRs.\nIn future versions, the InLong community will continue to:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Support more data source collection capabilities."),(0,o.yg)("li",{parentName:"ul"},"Enrich Flink 1.15 and 1.18 connectors."),(0,o.yg)("li",{parentName:"ul"},"Continuously enhance Transform capabilities."),(0,o.yg)("li",{parentName:"ul"},"Provide real-time synchronization support for more data sources and targets."),(0,o.yg)("li",{parentName:"ul"},"Advance offline integration, supporting third-party scheduling engines."),(0,o.yg)("li",{parentName:"ul"},"Optimize SDK capabilities and user experience."),(0,o.yg)("li",{parentName:"ul"},"Improve Dashboard experience.")),(0,o.yg)("p",null,"We also look forward to more developers interested in InLong to contribute and help drive the project's development!"))}c.isMDXComponent=!0},39724:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/2.0.0-oceanbase-detail-b71f51f236b69bd10cff6f4b17e3394f.png"},28708:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/2.0.0-oceanbase-target-6a654152f4aa976322ed8968c3c3b5bb.png"},32263:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/2.0.0-oceanbase-type-2445117e4506d1743dc9c16697996848.png"},51084:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/2.0.0-offline-schedule-common-02c7267d3c2271809eea6e4bda897d5c.png"},16470:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/2.0.0-offline-schedule-crontab-6609c746fb04fdbd7cd555f2039d394e.png"},12776:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/2.0.0-offline-sync-group-4cdb02e5fe45f6ff6d5b9bc11e98deed.png"},28275:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/2.0.0-sortstandalone-http-ac60f52aecb648d113acf8c77190c28c.png"},22800:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/2.0.0-transform-background-1e25279b42500875af1934af120596f0.png"}}]);
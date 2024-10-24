"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[48500],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?n.createElement(g,o(o({ref:a},d),{},{components:t})):n.createElement(g,o({ref:a},d))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99318:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(58168),r=(t(96540),t(15680));const i={title:"Overview",sidebar_position:1},o="Introduction",s={unversionedId:"modules/transform/overview",id:"version-2.0.0/modules/transform/overview",title:"Overview",description:'InLong Transform helps InLong expand its access and distribution capabilities, adapting to a richer variety of data protocols and reporting scenarios on the access side, and accommodating complex and diverse data analysis scenarios on the distribution side. It improves data quality and collaboration, providing computational capabilities decoupled from the computing engine such as connection, aggregation, filtering, grouping, value extraction, sampling, etc. It simplifies the preliminary operations for users to report data, lowers the threshold for data usage, and focuses on the business value of data, achieving the principle of "what is visible is usable."',source:"@site/versioned_docs/version-2.0.0/modules/transform/overview.md",sourceDirName:"modules/transform",slug:"/modules/transform/overview",permalink:"/docs/modules/transform/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/modules/transform/overview.md",tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/modules/audit/quick_start"},next:{title:"Configuration Instructions",permalink:"/docs/modules/transform/configuration"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:a,...i}=e;return(0,r.yg)(p,(0,n.A)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,'InLong Transform helps InLong expand its access and distribution capabilities, adapting to a richer variety of data protocols and reporting scenarios on the access side, and accommodating complex and diverse data analysis scenarios on the distribution side. It improves data quality and collaboration, providing computational capabilities decoupled from the computing engine such as connection, aggregation, filtering, grouping, value extraction, sampling, etc. It simplifies the preliminary operations for users to report data, lowers the threshold for data usage, and focuses on the business value of data, achieving the principle of "what is visible is usable."'),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(75628).A,width:"1189",height:"505"})),(0,r.yg)("h1",{id:"application-scenarios"},"Application Scenarios"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Data Cleaning: During the data integration process, it is necessary to clean data from different sources to eliminate errors, duplicates, and inconsistencies. Transform capabilities can help enterprises clean data more effectively, improving data quality."),(0,r.yg)("li",{parentName:"ul"},"Data Fusion: Combining data from different sources for unified analysis and reporting. Transform capabilities can handle data in various formats and structures, achieving data fusion and integration."),(0,r.yg)("li",{parentName:"ul"},"Data Standardization: Converting data into a unified standard format for cross-system and cross-platform data analysis. Transform capabilities can help enterprises standardize and normalize data."),(0,r.yg)("li",{parentName:"ul"},"Data Partitioning and Indexing: To improve the performance of data querying and analysis, partition data and create indexes. Transform capabilities can dynamically adjust the field values for partitioning and indexing, thereby improving the performance of data warehouses."),(0,r.yg)("li",{parentName:"ul"},"Data Aggregation and Calculation: During data analysis, extract valuable business information through data aggregation and calculation. Transform capabilities can achieve complex data aggregation and calculation, covering multi-dimensional data analysis."),(0,r.yg)("li",{parentName:"ul"},"Data Security and Privacy Protection: Ensure data security and privacy during the data integration process. Transform capabilities can achieve data masking, encryption, and authorization management, protecting data security and privacy."),(0,r.yg)("li",{parentName:"ul"},"Cross-Team Data Sharing: Share only a filtered subset of the data stream for data security considerations; agree on data interfaces with partner teams for data dependency decoupling, dynamically adjusting the merging of multiple streams into the data stream interface.")),(0,r.yg)("h1",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Describe the Transform processing logic of the data stream through SQL, supporting standard SQL syntax."),(0,r.yg)("li",{parentName:"ul"},"Provide a rich SQL Function to handle various Transform needs and support UDF extensions."),(0,r.yg)("li",{parentName:"ul"},"Support CSV, KV, ProtoBuffer, JSON, and other flat table and tree structure data source decoding frameworks."),(0,r.yg)("li",{parentName:"ul"},"Support CSV, KV, and other data target encoding frameworks."),(0,r.yg)("li",{parentName:"ul"},"Data source decoding and data target encoding are extensible for development.")),(0,r.yg)("h1",{id:"future-planning"},"Future Planning"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Support richer Transform UDFs, data source decoders, and data target encoders."),(0,r.yg)("li",{parentName:"ul"},"Support Group and Join capabilities based on Time Window."),(0,r.yg)("li",{parentName:"ul"},"Integrate Transform into each module of InLong to enhance processing capabilities and user experience.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Agent: Responsible for collecting raw data from various data sources. After expanding Transform capabilities, it adds support for complex data source protocols such as PB, Json, and increases data filtering and format conversion capabilities."),(0,r.yg)("li",{parentName:"ul"},"Realtime Synchronization: Currently, real-time synchronization is implemented based on FlinkSQL transformation, one data stream per job; after expanding Transform capabilities, it adds support for complex data source protocols such as PB, Json; and supports multiple data streams per job."),(0,r.yg)("li",{parentName:"ul"},"Offline Synchronization: Offline synchronization is currently planned to be implemented based on Flink Batch, with InLongTransform as a custom function to expand its transformation capabilities; it can use the data target of the InLong data stream as a data source, achieve internal data integration, implement preprocessing, and trigger downstream offline jobs through the end of the pre-sort job or the offline synchronization job or partition closure event."),(0,r.yg)("li",{parentName:"ul"},"Manager: After expanding Transform capabilities, the Manager interface provides preliminary transformation operations for raw data, verifies the correctness of the transformation logic configuration, and improves user experience."),(0,r.yg)("li",{parentName:"ul"},"Sort: Currently, Sort defines that one data stream has only one offline data target per type, but after expanding Transform capabilities, it allows multiple copies and subsets to be stored, and enriches the final storage content through association with static database tables, optimizing the processing of subsequent business tasks.")))))}u.isMDXComponent=!0},75628:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/transform_introduction-98bc56b96dcfeb23a3717e9de39487fa.png"}}]);
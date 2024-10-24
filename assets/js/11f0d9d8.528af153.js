"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[38386],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),g=c(n),f=i,u=g["".concat(l,".").concat(f)]||g[f]||h[f]||s;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=f;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[g]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(58168),i=(n(96540),n(15680));const s={title:"Overview",sidebar_position:1},o=void 0,r={unversionedId:"modules/agent/overview",id:"version-1.13.0/modules/agent/overview",title:"Overview",description:"The InLong Agent belongs to the collection layer of the InLong data link and is a collection tool that supports multiple types of data sources. It is committed to achieving stable and efficient data collection functions for various heterogeneous data sources, including File, MySQL, Pulsar, Metrics, etc.",source:"@site/versioned_docs/version-1.13.0/modules/agent/overview.md",sourceDirName:"modules/agent",slug:"/modules/agent/overview",permalink:"/docs/1.13.0/modules/agent/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.13.0/modules/agent/overview.md",tags:[],version:"1.13.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Bare Metal",permalink:"/docs/1.13.0/deployment/bare_metal"},next:{title:"Deployment",permalink:"/docs/1.13.0/modules/agent/quick_start"}},l={},c=[{value:"Architecture",id:"architecture",level:3},{value:"Design concept",id:"design-concept",level:3},{value:"Basic concepts",id:"basic-concepts",level:3},{value:"Tasks and instances",id:"tasks-and-instances",level:4},{value:"Source and Sink",id:"source-and-sink",level:4},{value:"Implementation principle",id:"implementation-principle",level:2},{value:"Life cycle",id:"life-cycle",level:3},{value:"State saving",id:"state-saving",level:3},{value:"Data consistency",id:"data-consistency",level:3},{value:"Offset refresh mechanism",id:"offset-refresh-mechanism",level:4},{value:"Restart recovery mechanism",id:"restart-recovery-mechanism",level:4},{value:"File collection mechanism",id:"file-collection-mechanism",level:2},{value:"Folder scanning",id:"folder-scanning",level:3},{value:"Folder listening",id:"folder-listening",level:3},{value:"Combining folder scanning and listening",id:"combining-folder-scanning-and-listening",level:3},{value:"File reading",id:"file-reading",level:3}],d={toc:c},g="wrapper";function h(e){let{components:t,...s}=e;return(0,i.yg)(g,(0,a.A)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"The InLong Agent belongs to the collection layer of the InLong data link and is a collection tool that supports multiple types of data sources. It is committed to achieving stable and efficient data collection functions for various heterogeneous data sources, including File, MySQL, Pulsar, Metrics, etc."),(0,i.yg)("h3",{id:"architecture"},"Architecture"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(95062).A,width:"791",height:"270"})),(0,i.yg)("p",null,"The InLong Agent itself serves as a data collection framework. In order to facilitate the expansion of data sources, the data sources are abstracted as Source plugins and integrated into the entire framework.\n-Source: Source is a data collection module responsible for collecting data from the data source.\n-Agent configuration synchronization thread Manager Fetcher pulls from Manager to collection configuration\n-Instance: Instance is used to retrieve data from the Source and write it to the DataProxy Sink"),(0,i.yg)("h3",{id:"design-concept"},"Design concept"),(0,i.yg)("p",null,"In order to address the issue of data source diversity, InLong Agent abstracts multiple data sources into a unified Source concept and abstracts a unified DataProxy Sink to write data into the InLong link. When a new data source needs to be connected, simply configure the format and reading parameters of the data source to achieve efficient reading."),(0,i.yg)("h3",{id:"basic-concepts"},"Basic concepts"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(78208).A,width:"517",height:"256"})),(0,i.yg)("h4",{id:"tasks-and-instances"},"Tasks and instances"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Task\nCollection tasks configured on behalf of users")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Instance\nInstantiation of collection tasks, generated by Tasks, responsible for executing specific collection tasks"))),(0,i.yg)("p",null,"Taking file collection as an example, there is a collection task configuration on the Manager: ` 127.0.0.1->/data/log/YYYYMMDDhh. log",(0,i.yg)("em",{parentName:"p"}," ","[0-9]","+'indicates that the user needs to collect data that meets the requirements of'/data/log/YYYYMMDDhh. log 'on the' 127.0.0.1 'machine")," The data for this path rule, ","[0-9]","+, is a task. Assuming there are three files that meet this path rule:/data/log/202404021. log. 0,/data/log/202404021. log. 1,/data/log/202404021. log. 3, Task will generate three instances to collect these three files separately."),(0,i.yg)("h4",{id:"source-and-sink"},"Source and Sink"),(0,i.yg)("p",null,"Source and Sink belong to the concept of the lower level of an instance. Each instance has a Source and a Sink, where the Source reads data from the data source and the Sink writes the data to the target storage. In the InLong system, data collected by the Agent will be uniformly written to the DataProxy service, which only has DataProxy Sink types."),(0,i.yg)("h2",{id:"implementation-principle"},"Implementation principle"),(0,i.yg)("h3",{id:"life-cycle"},"Life cycle"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(29535).A,width:"595",height:"684"})),(0,i.yg)("p",null,"Agent data collection tasks include configuration pulling, Task/Instance generation, Task/Instance execution, and other processes. Taking file collection as an example, the entire process of collection tasks includes:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 1: Agent configuration synchronization thread Manager Fetcher pulls from Manager to collection configuration, such as Configuration 1 and Configuration 2"),(0,i.yg)("li",{parentName:"ul"},"Step 2: Synchronize thread to submit configuration to Task Manager"),(0,i.yg)("li",{parentName:"ul"},"Step 3.1/3.2: Task Manager will generate Task 1 and Task 2 based on Config1 and Config2"),(0,i.yg)("li",{parentName:"ul"},"Step 4: Task 1 scans files that comply with the rules of Configuration 1, such as File 1 and File 2, and submits the information of File 1 and File 2 to the instance manager, Instance Manger (where Instance Manager is a member variable of Task)"),(0,i.yg)("li",{parentName:"ul"},"Step 5.1/5.2: The Instance Manager generates corresponding instances based on the file information of File 1 and File 2, and runs them"),(0,i.yg)("li",{parentName:"ul"},"Step 6.1/6.2: The Source of each instance will collect file data based on the file information and send the collected data through Sink. After the file collection and transmission are completed, a signal indicating the completion of the instance will be sent to the instance manager, triggering the instance manager to release the instance"),(0,i.yg)("li",{parentName:"ul"},"Step 7: After detecting the completion of all instances through the Instance Manager, the Task Manager will send a signal to complete the Task, triggering the Task Manager to release the Task")),(0,i.yg)("h3",{id:"state-saving"},"State saving"),(0,i.yg)("p",null,"Agent data collection has a state, and in order to ensure the continuity of data collection, it is necessary to save the collected state to prevent the task from being unable to recover after the Agent stops unexpectedly. The Agent divides states into three categories: Task, Instance, and Offset, corresponding to Task task status, Instance instance status, and point status during the collection process, respectively. These three types of state data are saved through RocksDB and exist in three different DB directories."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(32598).A,width:"519",height:"294"})),(0,i.yg)("p",null,"The specified Source and Sink class names are saved in the InstanceDB record, as the class names may change after the Agent upgrade, such as the Source class changing from LogFileSource V1 to NewLogFileSource V1. At the same time, a task corresponds to multiple instances, and in order to avoid changes between different instances affecting each other, tasks and instances are also placed in different DBs. Place Offset in an independent DB to address the issue of using the old version's location information when upgrading the Agent."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(46573).A,width:"925",height:"267"})),(0,i.yg)("h3",{id:"data-consistency"},"Data consistency"),(0,i.yg)("h4",{id:"offset-refresh-mechanism"},"Offset refresh mechanism"),(0,i.yg)("p",null,'We adopt a similar "sliding window" algorithm: the Agent can send multiple pieces of data before stopping and waiting for confirmation. There is no need to stop and wait for confirmation for each piece of data sent, which ensures that the "offset is updated only after the ack is successful" and maintains a fast sending speed. Taking the collection of four pieces of data as an example:'),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Firstly, Source sequentially reads 4 pieces of data from the data source")),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(92676).A,width:"1190",height:"138"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Secondly, 4 pieces of data were retrieved from the Source",(0,i.yg)("inlineCode",{parentName:"li"},"is sent in an orderly manner")," Sink, when Sink receives the data ",(0,i.yg)("inlineCode",{parentName:"li"},"first records the offset of the data in the OffsetList and marks it as not sent"),".")),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(52899).A,width:"1006",height:"310"})),(0,i.yg)("p",null,"Then Sink sent 4 pieces of data through the SDK, but only 3 pieces of data, 1, 2, and 4, returned success. Returning success will ",(0,i.yg)("inlineCode",{parentName:"p"},"sets the corresponding identifier in OffsetList to true")),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(88794).A,width:"528",height:"367"})),(0,i.yg)("p",null,"The offset update thread will traverse the OffsetList and find that Offset3 is not acked. Therefore, it will flush the closest Offset2 before Offset3 to the storage, ensuring that the data must be successfully sent downstream before performing the offset refresh."),(0,i.yg)("h4",{id:"restart-recovery-mechanism"},"Restart recovery mechanism"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(19848).A,width:"719",height:"717"})),(0,i.yg)("p",null,"As mentioned above, the status information of Task, Instance, and Offset is stored through RocksDB, and it can ensure that the data is successfully sent downstream before performing offset refreshing. The restart and recovery of collection tasks also depend on the saved state, and the entire process is as follows:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 1: When starting, the Task Manager reads the TaskDB"),(0,i.yg)("li",{parentName:"ul"},"Step 2: Task Manager generates Task 1 and Task 2 based on the configuration of Task DB"),(0,i.yg)("li",{parentName:"ul"},"Step 3: Instance Manager reads InstanceDB"),(0,i.yg)("li",{parentName:"ul"},"Step 4: The Instance Manager generates an instance based on the records of the InstanceDB"),(0,i.yg)("li",{parentName:"ul"},"Step 5: Instance reads OffsetDB"),(0,i.yg)("li",{parentName:"ul"},"Step 6: Instance initializes the Source based on the OffsetDB configuration and restores the Offset"),(0,i.yg)("li",{parentName:"ul"},"Step 7: Regularly update tasks based on Manager configuration")),(0,i.yg)("h2",{id:"file-collection-mechanism"},"File collection mechanism"),(0,i.yg)("h3",{id:"folder-scanning"},"Folder scanning"),(0,i.yg)("p",null,"Scan all the files in the corresponding path and match the rules. Once matched, it is considered to be found. However, in the case of a large number of files, scanning once takes a long time and consumes resources. If the scanning cycle is too small, the resource consumption is too high; If the scanning cycle is too long, the response speed will be too slow."),(0,i.yg)("h3",{id:"folder-listening"},"Folder listening"),(0,i.yg)("p",null,"The above problem can be solved by listening to folders. We just need to register the folder to the listener, and then we can query whether any events have occurred through the interface of this listener. The types of listening events include adding, deleting, modifying, etc. Usually, we only need to listen for the addition of files, but it is easy to make too many modifications, while file deletion events can be actively detected during the process of reading files. But because listening events are triggered, consistency issues are prone to occur."),(0,i.yg)("h3",{id:"combining-folder-scanning-and-listening"},"Combining folder scanning and listening"),(0,i.yg)("p",null,'In practical applications, we adopt a combination of folder scanning and monitoring mode. Simply put, for a folder, we perform both "scheduled scanning" and "monitoring" simultaneously, ensuring consistency and fast response speed. The specific process is as follows:'),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Firstly, check from the file listener if there are any newly created files. If there are, check if they have been cached. If there is no cache, place them in the queue to be collected"),(0,i.yg)("li",{parentName:"ul"},"Secondly, if the scanning time interval is met, start scanning the file. If a file is scanned, check if it has been cached. If not, place it in the queue to be collected"),(0,i.yg)("li",{parentName:"ul"},"Finally, process the file information in the queue to be collected, which is to submit it to the Instance Manager")),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(68241).A,width:"392",height:"1152"})),(0,i.yg)("h3",{id:"file-reading"},"File reading"),(0,i.yg)("p",null,"We used the 'RandomAccess File' class to read files, and the instance of 'RandomAccess File' supports reading and writing to randomly accessed files. The behavior of randomly accessing files is similar to a large byte array stored in the file system. There is a cursor or index pointing to the implicit array, called a file pointer; Start reading bytes from the file pointer and move the file pointer forward as the byte is read. For example, the file has a total of 13 bytes, and we need to start reading 3 bytes from the offset of 4. We just need to point the file pointer to the offset of 4 and read 3 bytes."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(8346).A,width:"723",height:"131"})))}h.isMDXComponent=!0},19848:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent_overview_10-46f2ff5cbf43a77b4eb75c1ce066c215.png"},68241:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent_overview_11-725a4b3364341b9c9e5c675c3a277deb.png"},8346:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent_overview_12-0a048b22327f6f40b75759b7f60c8e38.png"},95062:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent_overview_2-60d97d87e32276670187d047f92c36ac.png"},78208:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent_overview_3-09221d0fcd92a2ef9c340bf1076618b3.png"},29535:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent_overview_4-6390ef8e160382f6483c99d762286aea.png"},32598:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent_overview_5-fdaa7689e3320cce58b1450053b7be1d.png"},46573:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent_overview_6-561e30b9e4614d40d6b52b125730a983.png"},92676:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent_overview_7-43e7e391077c3df65b49e073f296d1de.png"},52899:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent_overview_8-574ad11b5f3a2767dc460cdde5c4cb0e.png"},88794:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/agent_overview_9-465406cfef7946bf585c1b31c8933fb3.png"}}]);
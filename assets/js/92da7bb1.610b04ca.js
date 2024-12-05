"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[77575],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>h});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(r),u=n,h=c["".concat(l,".").concat(u)]||c[u]||g[u]||o;return r?a.createElement(h,p(p({ref:t},d),{},{components:r})):a.createElement(h,p({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},85309:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(58168),n=(r(96540),r(15680));const o={title:"HTTP Report Example",sidebar_position:1},p=void 0,i={unversionedId:"quick_start/data_http_report/http_report",id:"quick_start/data_http_report/http_report",title:"HTTP Report Example",description:"In the following content, we will use a complete example to introduce how to use HTTP to report data, quickly verify whether the applied {groupId, streamId} is effective, and whether the data is accepted by InLong DataProxy and correctly written to the MQ cluster.",source:"@site/docs/quick_start/data_http_report/http_report.md",sourceDirName:"quick_start/data_http_report",slug:"/quick_start/data_http_report/http_report",permalink:"/docs/next/quick_start/data_http_report/http_report",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/quick_start/data_http_report/http_report.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"HTTP Report Example",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Example of Airflow Offline Synchronization",permalink:"/docs/next/quick_start/offline_data_sync/airflow_pulsar_mysql_example"},next:{title:"SDK Usage Example",permalink:"/docs/next/quick_start/transform/sdk_example"}},l={},s=[{value:"Prepare resources",id:"prepare-resources",level:2},{value:"Apply for InLong group and stream",id:"apply-for-inlong-group-and-stream",level:3},{value:"Find the IP and port of the DataProxy node that supports HTTP access",id:"find-the-ip-and-port-of-the-dataproxy-node-that-supports-http-access",level:3},{value:"Report data via HTTP",id:"report-data-via-http",level:2},{value:"Check the reported data",id:"check-the-reported-data",level:2},{value:"FAQ",id:"faq",level:2}],d={toc:s},c="wrapper";function g(e){let{components:t,...o}=e;return(0,n.yg)(c,(0,a.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"In the following content, we will use a complete example to introduce how to use HTTP to report data, quickly verify whether the applied {groupId, streamId} is effective, and whether the data is accepted by InLong DataProxy and correctly written to the MQ cluster."),(0,n.yg)("h2",{id:"prepare-resources"},"Prepare resources"),(0,n.yg)("h3",{id:"apply-for-inlong-group-and-stream"},"Apply for InLong group and stream"),(0,n.yg)("p",null,"We need to apply for {groupId, streamId} in InLong Manager first. As shown in the following figure, we have applied for {test_http, test_stream} information and the administrator has approved it:\n",(0,n.yg)("img",{alt:"prepare group and stream",src:r(72787).A,width:"1150",height:"689"})),(0,n.yg)("p",null,'In the application report stream, we defined that the data of this report stream is reported in CSV format. The data content consists of three fields (ID, Name, Desc) separated by vertical bars ("|"):\n',(0,n.yg)("img",{alt:"define report stream",src:r(78981).A,width:"1167",height:"865"})),(0,n.yg)("h3",{id:"find-the-ip-and-port-of-the-dataproxy-node-that-supports-http-access"},"Find the IP and port of the DataProxy node that supports HTTP access"),(0,n.yg)("p",null,"InLong supports direct data reporting via HTTP. In this reporting example, we directly select a DataProxy that supports HTTP reporting from the resource details page of the InLong group to report the message. In the demonstration environment, the HTTP receiving port opened by DataProxy is 47805, as shown below:\n",(0,n.yg)("img",{alt:"DataProxy information",src:r(87971).A,width:"875",height:"806"})),(0,n.yg)("p",null,"At this point, we have obtained the InLong group and stream information required for data reporting, as well as the DataProxy node IP and port information to be reported by HTTP reporting. Next, we can report data through HTTP to verify whether the requested InLong group and stream, pipeline are available. "),(0,n.yg)("h2",{id:"report-data-via-http"},"Report data via HTTP"),(0,n.yg)("p",null,"According to the HTTP reporting protocol requirements of InLong, we use curl tool to construct an HTTP instruction as shown below for execution. In the body part, we construct a record containing three field values according to the format definition of test_stream. {dataproxy_ip:dataproxy_httpport} is the DataProxy IP and port for receiving the reported message. You can replace it with the corresponding information in your environment:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -d 'groupId=test_http&streamId=test_stream&dt=data_time&body=1|name_1|desc_record_one&cnt=1' http://{dataproxy_ip:dataproxy_httpport}/dataproxy/message\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameter Description\uff1a")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"parameter"),(0,n.yg)("th",{parentName:"tr",align:null},"meaning"),(0,n.yg)("th",{parentName:"tr",align:null},"Remark"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"groupId"),(0,n.yg)("td",{parentName:"tr",align:null},"Data stream group id"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"streamId"),(0,n.yg)("td",{parentName:"tr",align:null},"Data stream ID"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"body"),(0,n.yg)("td",{parentName:"tr",align:null},"Data content to be pushed"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"dt"),(0,n.yg)("td",{parentName:"tr",align:null},"Data time to be pushed"),(0,n.yg)("td",{parentName:"tr",align:null},"timestamp in millisecond")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"cnt"),(0,n.yg)("td",{parentName:"tr",align:null},"The count of data pieces to be pushed"),(0,n.yg)("td",{parentName:"tr",align:null})))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Return Value\uff1a")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"return value"),(0,n.yg)("th",{parentName:"tr",align:null},"meaning"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"0"),(0,n.yg)("td",{parentName:"tr",align:null},"Success")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"!=0"),(0,n.yg)("td",{parentName:"tr",align:null},"Failure")))),(0,n.yg)("h2",{id:"check-the-reported-data"},"Check the reported data"),(0,n.yg)("p",null,"We use the data preview function of the data stream test_http:test_stream to view the HTTP reporting status. This function directly samples the latest data from the MQ cluster corresponding to the data stream:\n",(0,n.yg)("img",{alt:"data_preview",src:r(90132).A,width:"1576",height:"675"})),(0,n.yg)("p",null,"We can see that the data just reported has been successfully written to the MQ cluster:\n",(0,n.yg)("img",{alt:"viewed_data",src:r(75175).A,width:"1109",height:"474"})),(0,n.yg)("p",null,"At this point, we quickly and clearly know that the requested InLong group and stream, as well as the pipeline resources, are all available."),(0,n.yg)("h2",{id:"faq"},"FAQ"),(0,n.yg)("p",null,"The return code and error message in the HTTP response will clearly indicate the specific cause of the error, such as the group or stream does not exist, the reporting protocol format is not equal, etc., and the problem can be quickly solved by adjusting according to the corresponding error prompt or aligning with the system administrator."))}g.isMDXComponent=!0},90132:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/http_data_preview_en-f0836509ffd0b4a5fc5afb885d5683f9.png"},75175:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/http_data_view_en-329c904aef30c3360f5985451d97c0ce.png"},87971:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/http_dataproxy_en-cb9d920d242f2059227903aa6025b861.png"},72787:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/http_group_stream_en-de177cbfa7339f6f0e17126450a70b52.png"},78981:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/http_stream_define_en-4b73037509c89ae3bddf5ebc2e5b8282.png"}}]);
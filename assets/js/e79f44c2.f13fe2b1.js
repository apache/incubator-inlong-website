"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[37957],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>c});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),g=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=g(n),m=r,c=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60752:(e,t,n)=>{n.d(t,{l:()=>a});const a={inLongVersion:"2.1.0-SNAPSHOT"}},20590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));n(60752);const l={title:"C++ SDK",sidebar_position:1},i=void 0,o={unversionedId:"sdk/dataproxy-sdk/cpp",id:"sdk/dataproxy-sdk/cpp",title:"C++ SDK",description:"Create real-time synchronization task",source:"@site/docs/sdk/dataproxy-sdk/cpp.md",sourceDirName:"sdk/dataproxy-sdk",slug:"/sdk/dataproxy-sdk/cpp",permalink:"/docs/next/sdk/dataproxy-sdk/cpp",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/sdk/dataproxy-sdk/cpp.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"C++ SDK",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"TubeMQ",permalink:"/docs/next/data_node/load_node/tube"},next:{title:"Java SDK",permalink:"/docs/next/sdk/dataproxy-sdk/java"}},p={},g=[{value:"Create real-time synchronization task",id:"create-real-time-synchronization-task",level:2},{value:"Import C++ SDK",id:"import-c-sdk",level:2},{value:"Data report process",id:"data-report-process",level:2},{value:"Initialize SDK",id:"initialize-sdk",level:3},{value:"Call the send interface to report data",id:"call-the-send-interface-to-report-data",level:3},{value:"Close SDK",id:"close-sdk",level:3},{value:"Warning",id:"warning",level:2},{value:"Appendix\uff1aConfig File Description",id:"appendixconfig-file-description",level:2}],s={toc:g},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-real-time-synchronization-task"},"Create real-time synchronization task"),(0,r.yg)("p",null,"Create a task on the Dashboard or through the command line, and use ",(0,r.yg)("inlineCode",{parentName:"p"},"Auto Push")," (autonomous push) as the data source\ntype."),(0,r.yg)("h2",{id:"import-c-sdk"},"Import C++ SDK"),(0,r.yg)("p",null,"The header files and libraries of the SDK need to be introduced into the project before using the SDK. Header files and\nlibraries can be self-compiled from source,\nsee ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-cpp"},"SDK Compile&Use"),"\u3002"),(0,r.yg)("h2",{id:"data-report-process"},"Data report process"),(0,r.yg)("p",null,"After import the SDK, you can report single or batch data by calling the ",(0,r.yg)("inlineCode",{parentName:"p"},"send")," related interface of the\nSDK ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-sdk/dataproxy-sdk-twins/dataproxy-sdk-cpp/release/demo/send_demo.cc"},"send_demo.cc"),"\n\u3002The overall process includes the following three steps\uff1a"),(0,r.yg)("h3",{id:"initialize-sdk"},"Initialize SDK"),(0,r.yg)("p",null,"SDK supports a process to create one SDK instance, which is multi-thread safe. It also supports a process to create\nmultiple SDK instances. Each SDK instance is independent of each other and each SDK instance is also thread-safe"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Create SDK instance object")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"InLongApi inlong_api\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"object instance initialization\nConfiguration files are in json format, see ","[Config file description]","(#Appendix\uff1aConfig File Description), initialize\nthe SDK through the configuration file:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'// Initialize the SDK, the parameter is the path name of the configuration file; a return value of zero indicates successful initialization\nint32_t result = inlong_api.InitApi("/home/conf/config.json");\n')),(0,r.yg)("h3",{id:"call-the-send-interface-to-report-data"},"Call the send interface to report data"),(0,r.yg)("p",null,"The SDK supports single (recommended) and batch sending, both of which are sent in asynchronous mode, and the data\nreporting interface is thread-safe. Before data reporting, the callback function can be set to perform callback\nprocessing when the data transmission fails. The callback function signature is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"int32_t callBackFunc(const char* inlong_group_id, const char* inlong_stream_id, const char* msg, int32_t msg_len, const int64_t report_time, const char* client_ip);\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Single data reporting interface")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"// Return value: zero means sending is successful, non-zero means failure, see SDKInvalidReuslt in tc_api.h for specific exception return value\nint32_t CallBackFunc(const char* inlong_group_id, const char* inlong_stream_id,\n                     const char* msg, int32_t msg_len, \n                     const int64_t report_time, \n                     const char* client_ip);\n")),(0,r.yg)("h3",{id:"close-sdk"},"Close SDK"),(0,r.yg)("p",null,"Call the close interface to close the SDK:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"// A return value of zero means that the shutdown is successful, and subsequent data reporting cannot be performed\n// max_waitms\uff1aThe maximum number of milliseconds to wait before closing the SDK, waiting for the completion of the SDK internal data sending\nint32_t CloseApi(int32_t max_waitms);\n")),(0,r.yg)("h2",{id:"warning"},"Warning"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"It is recommended to use the SDK as a resident service for data reporting to avoid frequent initialization and\nshutdown of the same process midway, as repeated initialization and shutdown will bring more overhead;"),(0,r.yg)("li",{parentName:"ul"},"SDK sending is asynchronous, and a return value of 0 indicates that the data has been successfully stored in the SDK's\ninternal buffer and is waiting for network sending. If ",(0,r.yg)("inlineCode",{parentName:"li"},"inlong_group_id")," itself is misconfigured or the network is\nabnormal, it will also cause the data to fail to send, so it is recommended that the user set a callback when calling\nthis interface, and execute the callback when the data fails to be sent after multiple retries.")),(0,r.yg)("h2",{id:"appendixconfig-file-description"},"Appendix\uff1aConfig File Description"),(0,r.yg)("p",null,"The configuration file format and important parameters are as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "init-param": {\n    "inlong_group_ids": "b_inlong_group_test_01, b_inlong_group_test_02",\n    "manager_url": "http://127.0.0.1:8099/inlong/manager/openapi/dataproxy/getIpList",\n    "manager_update_interval": 2,\n    "manager_url_timeout": 5,\n    "msg_type": 7,\n    "max_proxy_num": 8,\n    "per_groupid_thread_nums": 1,\n    "dispatch_interval_zip": 8,\n    "dispatch_interval_send": 10,\n    "recv_buf_size": 10240000,\n    "send_buf_size": 10240000,\n    "enable_pack": true,\n    "pack_size": 409600,\n    "pack_timeout": 3000,\n    "ext_pack_size": 409600,\n    "enable_zip": true,\n    "min_zip_len": 512,\n    "tcp_detection_interval": 60000,\n    "tcp_idle_time": 600000,\n    "log_num": 10,\n    "log_size": 104857600,\n    "log_level": 3,\n    "log_path": "./",\n    "need_auth": false,\n    "auth_id": "****",\n    "auth_key": "****"\n  }\n}\n')),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"meaning"),(0,r.yg)("th",{parentName:"tr",align:null},"Defaults"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inlong_group_ids"),(0,r.yg)("td",{parentName:"tr",align:null},"inlong_group_id list"),(0,r.yg)("td",{parentName:"tr",align:null},"b_inlong_group_test_01, b_inlong_group_test_02")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"manager_url"),(0,r.yg)("td",{parentName:"tr",align:null},"manager address"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"http://127.0.0.1:8099/inlong/manager/openapi/dataproxy/getIpList"},"http://127.0.0.1:8099/inlong/manager/openapi/dataproxy/getIpList"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"manager_update_interval"),(0,r.yg)("td",{parentName:"tr",align:null},"request manager intervals"),(0,r.yg)("td",{parentName:"tr",align:null},"2 minute")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"manager_url_timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"request manager timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"Timestamp")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msg_type"),(0,r.yg)("td",{parentName:"tr",align:null},"data type"),(0,r.yg)("td",{parentName:"tr",align:null},"7")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_proxy_num"),(0,r.yg)("td",{parentName:"tr",align:null},"maximum proxy data for a single instance"),(0,r.yg)("td",{parentName:"tr",align:null},"8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"per_groupid_thread_nums"),(0,r.yg)("td",{parentName:"tr",align:null},"number of single inlong_group_id threads"),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dispatch_interval_zip"),(0,r.yg)("td",{parentName:"tr",align:null},"compress data intervals"),(0,r.yg)("td",{parentName:"tr",align:null},"8 ms")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dispatch_interval_send"),(0,r.yg)("td",{parentName:"tr",align:null},"data distribution intervals"),(0,r.yg)("td",{parentName:"tr",align:null},"10 ms")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"recv_buf_size"),(0,r.yg)("td",{parentName:"tr",align:null},"receive buffer size"),(0,r.yg)("td",{parentName:"tr",align:null},"10240000 Byte")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"send_buf_size"),(0,r.yg)("td",{parentName:"tr",align:null},"send buffer size"),(0,r.yg)("td",{parentName:"tr",align:null},"10240000 Byte")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable_pack"),(0,r.yg)("td",{parentName:"tr",align:null},"whether to allow packaging"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pack_size"),(0,r.yg)("td",{parentName:"tr",align:null},"pack size"),(0,r.yg)("td",{parentName:"tr",align:null},"409600 Byte")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pack_timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"pack interval"),(0,r.yg)("td",{parentName:"tr",align:null},"3000 ms")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ext_pack_size"),(0,r.yg)("td",{parentName:"tr",align:null},"maximum size of a single message"),(0,r.yg)("td",{parentName:"tr",align:null},"409600 Byte")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable_zip"),(0,r.yg)("td",{parentName:"tr",align:null},"whether to allow compression"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"min_zip_len"),(0,r.yg)("td",{parentName:"tr",align:null},"minimum compression size"),(0,r.yg)("td",{parentName:"tr",align:null},"512 Byte")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tcp_detection_interval"),(0,r.yg)("td",{parentName:"tr",align:null},"tcp detection intervals"),(0,r.yg)("td",{parentName:"tr",align:null},"60000 ms")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tcp_idle_time"),(0,r.yg)("td",{parentName:"tr",align:null},"tcp idle time"),(0,r.yg)("td",{parentName:"tr",align:null},"600000 ms")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"log_num"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of log files"),(0,r.yg)("td",{parentName:"tr",align:null},"10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"log_size"),(0,r.yg)("td",{parentName:"tr",align:null},"single log file size"),(0,r.yg)("td",{parentName:"tr",align:null},"104857600 Byte")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"log_level"),(0,r.yg)("td",{parentName:"tr",align:null},"log level"),(0,r.yg)("td",{parentName:"tr",align:null},"3 .trace(4)>debug(3)>info(2)>warn(1)>error(0)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"log_path"),(0,r.yg)("td",{parentName:"tr",align:null},"log directory"),(0,r.yg)("td",{parentName:"tr",align:null},"./")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"need_auth"),(0,r.yg)("td",{parentName:"tr",align:null},"whether to enable authentication"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"auth_id"),(0,r.yg)("td",{parentName:"tr",align:null},"account"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"auth_key"),(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);
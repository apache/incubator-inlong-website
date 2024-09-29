"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[91551],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>u});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=o,u=m["".concat(l,".").concat(c)]||m[c]||d[c]||r;return a?n.createElement(u,i(i({ref:t},g),{},{components:a})):n.createElement(u,i({ref:t},g))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},63463:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(58168),o=(a(96540),a(15680));const r={title:"InLong sort format extend",sidebar_position:5},i=void 0,s={unversionedId:"development/extension_sort/inlong_sort_data_organization_and_binary_protocol",id:"development/extension_sort/inlong_sort_data_organization_and_binary_protocol",title:"InLong sort format extend",description:"Overview",source:"@site/docs/development/extension_sort/inlong_sort_data_organization_and_binary_protocol.md",sourceDirName:"development/extension_sort",slug:"/development/extension_sort/inlong_sort_data_organization_and_binary_protocol",permalink:"/docs/next/development/extension_sort/inlong_sort_data_organization_and_binary_protocol",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/development/extension_sort/inlong_sort_data_organization_and_binary_protocol.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"InLong sort format extend",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"REST API",permalink:"/docs/next/development/api"},next:{title:"Offline Sync Connector Extension",permalink:"/docs/next/development/extension_sort/offline_data_sync"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Before Development",id:"before-development",level:2},{value:"Processing",id:"processing",level:2},{value:"Demo",id:"demo",level:2},{value:"Last but not Least",id:"last-but-not-least",level:2}],g={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(m,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"overview"},"Overview"),(0,o.yg)("p",null,"This article is aimed at InLong-Sort-Formats data format parsing developers and aims to comprehensively explain the process of developing data parsing for a data format."),(0,o.yg)("p",null,"The InLong-Sort-Formats module supports two major types of data format parsing, implemented based on the Flink Row and Flink RowData types. These two implementations differ only in the Flink API used. This article will describe the implementation based on the Flink RowData."),(0,o.yg)("p",null,"Currently, InLong-Sort supports the following formats, including 6 formats encapsulated in the InLongMsg format and 3 original data formats:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"InLongMsg binlog"),(0,o.yg)("li",{parentName:"ul"},"InLongMSg CSV"),(0,o.yg)("li",{parentName:"ul"},"InLongMsg KV"),(0,o.yg)("li",{parentName:"ul"},"InLongMsg Tlog-CSV"),(0,o.yg)("li",{parentName:"ul"},"InLongMsg Tlog-KV"),(0,o.yg)("li",{parentName:"ul"},"InLongMsg PB"),(0,o.yg)("li",{parentName:"ul"},"CSV"),(0,o.yg)("li",{parentName:"ul"},"KV"),(0,o.yg)("li",{parentName:"ul"},"JSON\nBy implementing the data parsing process for these formats, developers can effectively handle and process data in the InLong-Sort module.")),(0,o.yg)("h2",{id:"before-development"},"Before Development"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"InLongMsg refer to ",(0,o.yg)("a",{parentName:"li",href:"/docs/next/development/binary_protocol/inlong_msg"},"InLongMsg"),";"),(0,o.yg)("li",{parentName:"ul"},"When selecting a specific parsing method, it is important to note that the original data, after passing through the DataProxy module, is encapsulated using the InLongMsg format;"),(0,o.yg)("li",{parentName:"ul"},"InLongMsg encapsulates at least one data record, so the parsing logic should handle scenarios with multiple records."),(0,o.yg)("li",{parentName:"ul"},"Each InLongMsg consists of two parts: the message header and the message body:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"The message header is composed of key-value pairs in the format of k1=v1&k2=v2. It should contain essential information such as the streamId (stream ID) and dt (data timestamp)."),(0,o.yg)("li",{parentName:"ul"},"The message body is represented by a binary array of the specific data format to be parsed, such as key-value (kv), comma-separated values (csv), and so on.")))),(0,o.yg)("p",null,"When implementing the parsing process, you need to extract the message header and body separately. The header can be parsed to retrieve the necessary information, while the body should be processed based on the specific data format such as CSV, kv and so on."),(0,o.yg)("p",null,"By understanding the structure and components of the InLongMsg format, you can develop the appropriate parsing logic to handle multiple records and extract the necessary information from the message header and body."),(0,o.yg)("h2",{id:"processing"},"Processing"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Raw Format Data"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Parse processing"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Step 1: Build a DeserializationFormatFactory object for the specific format, for example, CsvFormatFactory."),(0,o.yg)("li",{parentName:"ul"},"Step 2: Use the DeserializationFormatFactory object to obtain the corresponding DecodingFormat object."),(0,o.yg)("li",{parentName:"ul"},"Step 3: Use the DecodingFormat object to obtain the DeserializationSchema object for the specific format."),(0,o.yg)("li",{parentName:"ul"},"Step 4: Use the DeserializationSchema object to call the deserialize(byte","[","]"," message) or deserialize(byte","[","]"," message, Collector\\<T",">"," out) method, passing the data to be parsed and retrieving the parsed result."))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Extend processing\nTo extend the parsing of raw data formats that are not encapsulated in the InLongMsg format, you would need to implement the three interfaces shown in Figure 1. The arrows in the diagram represent the calling relationships between the implementations."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"The extension of parsing raw data formats not encapsulated in the InLongMsg",src:a(28256).A,width:"2248",height:"662"})),(0,o.yg)("p",{align:"center"},"Figure 1 The extension of parsing raw data formats not encapsulated in the InLongMsg")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Data formatted using InLongMsg"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Parse processing"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Step 1: Build a specific format DeserializationFormatFactory, such as InLongMsgCsvFormatFactory. This factory class is responsible for creating parsers for the desired format."),(0,o.yg)("li",{parentName:"ul"},"Step 2: Using the DeserializationFormatFactory object, obtain the corresponding DecodingFormat object, which is a subclass of AbstractInLongMsgDecodingFormat. This object is used to decode the InLongMsg formatted data."),(0,o.yg)("li",{parentName:"ul"},"Step 3: Using the DecodingFormat object, obtain the DeserializationSchema object corresponding to the specific format. This object is a subclass of AbstractInLongMsgDeserializationSchema. It defines the parsing rules and how the parsed results are returned."),(0,o.yg)("li",{parentName:"ul"},"Step 4: Using the DeserializationSchema object, call the deserialize(byte","[","]"," message) or deserialize(byte","[","]"," message, Collector\\<T",">"," out) methods. Pass the data to be parsed as input and retrieve the parsed results. These methods will parse the data according to the defined rules and return the parsed results.\nBy following these steps, you can parse data in the specific format of InLongMsg and obtain the parsed results. The actual implementation may involve specific classes and methods based on your requirements and the specific parsing format."))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Extend processing\nTo extend the parsing of data formats encapsulated in the InLongMsg format, you need to implement one interface and inherit three base classes as shown in Figure 2. The arrows in the diagram represent the calling relationships between the implementations. "),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"To extend the parsing of data formats encapsulated in the InLongMsg format",src:a(66984).A,width:"3048",height:"848"})," "),(0,o.yg)("p",{align:"center"},"Figure 2 To extend the parsing of data formats encapsulated in the InLongMsg format"),(0,o.yg)("br",null),"Compareing with the parsing process shown in Figure 1, the main difference is that the DecodingFormat and DeserializationSchema obtained in the Figure 2 are subclasses of AbstractInLongMsgDecodingFormat and AbstractInLongMsgDeserializationSchema. For the implementation of the subclass of AbstractInLongMsgDeserializationSchema, it is recommended to implement a subclass of AbstractInLongMsgFormatDeserializer and invoke it.")))),(0,o.yg)("h2",{id:"demo"},"Demo"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"For Raw Format Data\nrefer to\uff1a",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/inlong/tree/master/inlong-sort/sort-formats/format-rowdata/format-rowdata-kv"},"format-rowdata-kv")),(0,o.yg)("li",{parentName:"ul"},"For InLongMsg Format Data\nrefer to\uff1a",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/inlong/tree/master/inlong-sort/sort-formats/format-rowdata/format-inlongmsg-rowdata-kv"},"format-inlongmsg-rowdata-kv"))),(0,o.yg)("h2",{id:"last-but-not-least"},"Last but not Least"),(0,o.yg)("p",null,"In Inlong-Sort-formats, we provide implementations for common data formats to achieve out-of-the-box usability. We have also designed a unified data parsing and processing framework that allows developers to customize their own data parsing and transformation based on the characteristics of the data format they are working with."),(0,o.yg)("p",null,"However, it's important to note that our current implementation and architectural design are primarily focused on meeting the current parsing and processing requirements, and we currently only support a few common data formats. We are committed to continuously expanding the range of supported data formats, improving parsing efficiency, and making overall enhancements. We also welcome your contributions and involvement in this endeavor."),(0,o.yg)("p",null,"Thank you for your feedback and support! If you have any questions or suggestions, please feel free to reach out to us."))}d.isMDXComponent=!0},66984:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/sort_data_inlongmsg_format_extend-fb9c00367963bfbc805935f458c7773f.png"},28256:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/sort_data_raw_format_extend-642ce726db7390fce94c44cc8f39340b.png"}}]);
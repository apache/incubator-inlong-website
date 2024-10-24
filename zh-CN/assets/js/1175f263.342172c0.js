"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[32052],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>d});var o=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=o.createContext({}),c=function(e){var n=o.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),m=t,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return r?o.createElement(d,i(i({ref:n},p),{},{components:r})):o.createElement(d,i({ref:n},p))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[f]="string"==typeof e?e:t,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},23928:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(58168),t=(r(96540),r(15680));const a={title:"Pulsar2kafka Example",sidebar_position:6},i=void 0,s={unversionedId:"modules/sort-standalone/pulsar2kafka",id:"version-2.0.0/modules/sort-standalone/pulsar2kafka",title:"Pulsar2kafka Example",description:"Prepare to get module archive",source:"@site/versioned_docs/version-2.0.0/modules/sort-standalone/pulsar2kafka.md",sourceDirName:"modules/sort-standalone",slug:"/modules/sort-standalone/pulsar2kafka",permalink:"/zh-CN/docs/modules/sort-standalone/pulsar2kafka",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/modules/sort-standalone/pulsar2kafka.md",tags:[],version:"2.0.0",sidebarPosition:6,frontMatter:{title:"Pulsar2kafka Example",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Pulsar2Elasticsearch Example",permalink:"/zh-CN/docs/modules/sort-standalone/pulsar2es"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/modules/audit/overview"}},l={},c=[{value:"Prepare to get module archive",id:"prepare-to-get-module-archive",level:2},{value:"Prepare to modify configuration file",id:"prepare-to-modify-configuration-file",level:2},{value:"Example: conf/common.properties",id:"example-confcommonproperties",level:3},{value:"Example: conf/SortClusterConfig.conf",id:"example-confsortclusterconfigconf",level:3},{value:"Example: conf/sid_kafka_v3.conf",id:"example-confsid_kafka_v3conf",level:3}],p={toc:c},f="wrapper";function u(e){let{components:n,...r}=e;return(0,t.yg)(f,(0,o.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"prepare-to-get-module-archive"},"Prepare to get module archive"),(0,t.yg)("p",null,"Module archive is in the directory:inlong-sort-standalone/sort-standalone-dist/target/, the archive file is apache-inlong-sort-standalone-${project.version}-bin.tar.gz."),(0,t.yg)("h2",{id:"prepare-to-modify-configuration-file"},"Prepare to modify configuration file"),(0,t.yg)("p",null,'At first, decompress the archive file, copy three files in the directory "conf/kafka/" to the directory "conf/".'),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"conf/common.properties, common configuration of all components."),(0,t.yg)("li",{parentName:"ul"},"conf/SortClusterConfig.conf, sink configuration of all sort tasks."),(0,t.yg)("li",{parentName:"ul"},"conf/sid_kafka_v3.conf, data source configuration example of a sort task, the file name is same with sort task name in SortClusterConfig.conf.")),(0,t.yg)("h3",{id:"example-confcommonproperties"},"Example: conf/common.properties"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"clusterId=kafkav3-sz-sz1\nnodeId=nodeId\nmetricDomains=Sort\nmetricDomains.Sort.domainListeners=org.apache.inlong.sort.standalone.metrics.prometheus.PrometheusMetricListener\nmetricDomains.Sort.snapshotInterval=60000\nsortChannel.type=org.apache.inlong.sort.standalone.channel.BufferQueueChannel\nsortSink.type=org.apache.inlong.sort.standalone.sink.kafka.KafkaSink\nsortSource.type=org.apache.inlong.sort.standalone.source.sortsdk.SortSdkSource\n\nsortClusterConfig.type=file\nsortClusterConfig.file=SortClusterConfig.conf\nsortSourceConfig.QueryConsumeConfigType=file\n\n# manager config example\n#sortClusterConfig.type=manager\n#sortSourceConfig.QueryConsumeConfigType=manager\n#managerUrlLoaderType=org.apache.inlong.sort.standalone.config.loader.CommonPropertiesManagerUrlLoader\n#sortClusterConfig.managerUrl=http://${manager_ip:port}/api/inlong/manager/openapi/sort/getClusterConfig\n#sortSourceConfig.managerUrl=http://${manager_ip:port}/api/inlong/manager/openapi/sort/getSortSource\n")),(0,t.yg)("h3",{id:"example-confsortclusterconfigconf"},"Example: conf/SortClusterConfig.conf"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "clusterName": "kafkav3-gz-gz1",\n    "sortTasks": [{\n        "name": "sid_kafka_v3",\n        "type": "KAFKA",\n        "idParams": [{\n            "topic": "the kafka topic report to",\n            "inlongGroupId": "0fc00000046",\n            "inlongStreamId": "1"\n        }],\n        "sinkParams": {\n            "client.id": "client_id",\n            "bootstrap.servers": "127.0.0.1:10005"\n        }\n    }]\n}\n')),(0,t.yg)("h3",{id:"example-confsid_kafka_v3conf"},"Example: conf/sid_kafka_v3.conf"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "sortClusterName": "kafkav3-gz-gz1",\n    "sortTaskId": "sid_kafka_v3",\n    "cacheZones": {\n        "pc_inlong6th_sz1": {\n            "zoneName": "${PULSAR_CLUSTER_NAME}",\n            "serviceUrl": "http://${PULSAR_IP}:${PULSAR_PORT}",\n            "authentication": "${PULSAR_AUTH}",\n            "topics": [{\n                "topic": "${TENANT/NAMESPACE/TOPIC}",\n                "partitionCnt": 10,\n                "topicProperties": {}\n            }],\n            "cacheZoneProperties": {},\n            "zoneType": "pulsar"\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);
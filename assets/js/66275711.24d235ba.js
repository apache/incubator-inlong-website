"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[18447],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=s(n),k=a,c=m["".concat(p,".").concat(k)]||m[k]||d[k]||l;return n?r.createElement(c,i(i({ref:e},u),{},{components:n})):r.createElement(c,i({ref:e},u))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},92353:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"Deployment",sidebar_position:2},i=void 0,o={unversionedId:"modules/sort/quick_start",id:"version-0.12.0/modules/sort/quick_start",title:"Deployment",description:"Set up flink environment",source:"@site/versioned_docs/version-0.12.0/modules/sort/quick_start.md",sourceDirName:"modules/sort",slug:"/modules/sort/quick_start",permalink:"/docs/0.12.0/modules/sort/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.12.0/modules/sort/quick_start.md",tags:[],version:"0.12.0",sidebarPosition:2,frontMatter:{title:"Deployment",sidebar_position:2},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"Overview",permalink:"/docs/0.12.0/modules/sort/overview"},next:{title:"Zookeeper Configure",permalink:"/docs/0.12.0/modules/sort/protocol_introduction"}},p={},s=[{value:"Set up flink environment",id:"set-up-flink-environment",level:2},{value:"Prepare installation files",id:"prepare-installation-files",level:2},{value:"Starting an inlong-sort application",id:"starting-an-inlong-sort-application",level:2},{value:"Necessary configurations",id:"necessary-configurations",level:2},{value:"All configurations",id:"all-configurations",level:2}],u={toc:s};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"set-up-flink-environment"},"Set up flink environment"),(0,a.kt)("p",null,"Currently inlong-sort is based on flink, before you run an inlong-sort application,\nyou need to set up ",(0,a.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.9/ops/deployment/cluster_setup.html"},"flink environment"),"."),(0,a.kt)("p",null,"Currently, inlong-sort relys on flink-1.9.3. Chose ",(0,a.kt)("inlineCode",{parentName:"p"},"flink-1.9.3-bin-scala_2.11.tgz")," when downloading package."),(0,a.kt)("p",null,"Once your flink environment is set up, you can visit web ui of flink, whose address is stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"/${your_flink_path}/conf/masters"),"."),(0,a.kt)("h2",{id:"prepare-installation-files"},"Prepare installation files"),(0,a.kt)("p",null,"All installation files at ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-sort")," directory."),(0,a.kt)("h2",{id:"starting-an-inlong-sort-application"},"Starting an inlong-sort application"),(0,a.kt)("p",null,"Now you can submit job to flink with the jar compiled, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.9/ops/deployment/yarn_setup.html#submit-job-to-flink"},"how to submit job to flink"),"."),(0,a.kt)("p",null,"Example\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/flink run -c org.apache.inlong.sort.flink.Entrance inlong-sort/sort-core-[version].jar \\\n--cluster-id inlong_app --zookeeper.quorum 127.0.0.1:2181 --zookeeper.path.root /inlong_sort \\\n--source.type tubemq --sink.type hive\n")),(0,a.kt)("p",null,"Notice\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-c org.apache.inlong.sort.flink.Entrance")," is the main class name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"inlong-sort/sort-core-[version].jar")," is the compiled jar"))),(0,a.kt)("h2",{id:"necessary-configurations"},"Necessary configurations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--cluster-id ")," represent a specified inlong-sort application, same as the configuration of ",(0,a.kt)("inlineCode",{parentName:"li"},"sort.appName")," in inlong-manager"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--zookeeper.quorum")," zk quorum, same as the configuration of ",(0,a.kt)("inlineCode",{parentName:"li"},"cluster.zk.url")," in inlong-manager"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--zookeeper.path.root")," zk root path, same as the configuration of ",(0,a.kt)("inlineCode",{parentName:"li"},"cluster.zk.root")," in inlong-manager"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--source.type"),' source of the application, currently "tubemq" and "pulsar" are supported'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--sink.type"),' sink of the application, currently "clickhouse" and "hive" are supported')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--cluster-id inlong_app --zookeeper.quorum 192.127.0.1:2181 \\\n--zookeeper.path.root /inlong_sort --source.type tubemq --sink.type hive\n")),(0,a.kt)("h2",{id:"all-configurations"},"All configurations"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"necessary"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cluster-id"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"NA"),(0,a.kt)("td",{parentName:"tr",align:null},"used to represent a specified inlong-sort application")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zookeeper.quorum"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"NA"),(0,a.kt)("td",{parentName:"tr",align:null},"zk quorum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zookeeper.path.root"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"/inlong-sort"),(0,a.kt)("td",{parentName:"tr",align:null},"zk root path")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"source.type"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"NA"),(0,a.kt)("td",{parentName:"tr",align:null},'source of the application, currently "tubemq" and "pulsar" are supported')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sink.type"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"NA"),(0,a.kt)("td",{parentName:"tr",align:null},'sink of the application, currently "clickhouse" and "hive" are supported')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"source.parallelism"),(0,a.kt)("td",{parentName:"tr",align:null},"N"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"parallelism of source")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"deserialization.parallelism"),(0,a.kt)("td",{parentName:"tr",align:null},"N"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"parallelism of deserialization")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sink.parallelism"),(0,a.kt)("td",{parentName:"tr",align:null},"N"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"parallelism of sink")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tubemq.master.address"),(0,a.kt)("td",{parentName:"tr",align:null},"N"),(0,a.kt)("td",{parentName:"tr",align:null},"NA"),(0,a.kt)("td",{parentName:"tr",align:null},"tube master address used if absent in DataFlowInfo on zk")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tubemq.session.key"),(0,a.kt)("td",{parentName:"tr",align:null},"N"),(0,a.kt)("td",{parentName:"tr",align:null},"inlong-sort"),(0,a.kt)("td",{parentName:"tr",align:null},"session key used when subscribing to tubemq")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tubemq.bootstrap.from.max"),(0,a.kt)("td",{parentName:"tr",align:null},"N"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"whether consume from max or not when subscribing to tubemq")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tubemq.message.not.found.wait.period"),(0,a.kt)("td",{parentName:"tr",align:null},"N"),(0,a.kt)("td",{parentName:"tr",align:null},"350ms"),(0,a.kt)("td",{parentName:"tr",align:null},"The time of waiting period if tube broker return message not found")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tubemq.subscribe.retry.timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"N"),(0,a.kt)("td",{parentName:"tr",align:null},"300000"),(0,a.kt)("td",{parentName:"tr",align:null},"The time of subscribing tube timeout, in millisecond")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zookeeper.client.session-timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"N"),(0,a.kt)("td",{parentName:"tr",align:null},"60000"),(0,a.kt)("td",{parentName:"tr",align:null},"The session timeout for the ZooKeeper session in ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zookeeper.client.connection-timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"N"),(0,a.kt)("td",{parentName:"tr",align:null},"15000"),(0,a.kt)("td",{parentName:"tr",align:null},"The connection timeout for ZooKeeper in ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zookeeper.client.retry-wait"),(0,a.kt)("td",{parentName:"tr",align:null},"N"),(0,a.kt)("td",{parentName:"tr",align:null},"5000"),(0,a.kt)("td",{parentName:"tr",align:null},"The pause between consecutive retries in ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zookeeper.client.max-retry-attempts"),(0,a.kt)("td",{parentName:"tr",align:null},"N"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of connection retries before the client gives up")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zookeeper.client.acl"),(0,a.kt)("td",{parentName:"tr",align:null},"N"),(0,a.kt)("td",{parentName:"tr",align:null},'"open"'),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the ACL (open/creator) to be configured on ZK node. The configuration value can be set to \u201ccreator\u201d if the ZooKeeper server configuration has the \u201cauthProvider\u201d property mapped to use SASLAuthenticationProvider and the cluster is configured to run in secure mode (Kerberos)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"zookeeper.sasl.disable"),(0,a.kt)("td",{parentName:"tr",align:null},"N"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether disable zk sasl or not")))))}m.isMDXComponent=!0}}]);
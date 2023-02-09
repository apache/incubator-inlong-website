"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7844],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},14529:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"Standalone",sidebar_position:1},l=void 0,i={unversionedId:"deployment/standalone",id:"version-1.3.0/deployment/standalone",title:"Standalone",description:"Environment Requirements",source:"@site/versioned_docs/version-1.3.0/deployment/standalone.md",sourceDirName:"deployment",slug:"/deployment/standalone",permalink:"/docs/1.3.0/deployment/standalone",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/deployment/standalone.md",tags:[],version:"1.3.0",sidebarPosition:1,frontMatter:{title:"Standalone",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pulsar Example",permalink:"/docs/1.3.0/quick_start/pulsar_example"},next:{title:"Docker",permalink:"/docs/1.3.0/deployment/docker"}},s={},c=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Prepare Message Queue",id:"prepare-message-queue",level:2},{value:"Download the Binary Package",id:"download-the-binary-package",level:2},{value:"DB Dependencies",id:"db-dependencies",level:2},{value:"Configure",id:"configure",level:2},{value:"Start",id:"start",level:2},{value:"Register Message Queue",id:"register-message-queue",level:2},{value:"Check",id:"check",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MySQL 5.7+"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/try-flink/local_installation/"},"Flink 1.13.5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+")),(0,a.kt)("h2",{id:"prepare-message-queue"},"Prepare Message Queue"),(0,a.kt)("p",null,"InLong Support the following Message Queue services now, you can choose one of them."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.3.0/modules/tubemq/quick_start"},"InLong TubeMQ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/2.8.1/standalone/"},"Apache Pulsar 2.8.x"))),(0,a.kt)("h2",{id:"download-the-binary-package"},"Download the Binary Package"),(0,a.kt)("p",null,"You can get binary package from ",(0,a.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"Download Page")," ,or you can build the InLong refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.3.0/quick_start/how_to_build"},"How to Build"),"."),(0,a.kt)("p",null,"Extract ",(0,a.kt)("inlineCode",{parentName:"p"},"apache-inlong-[version]-bin.tar.gz")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"apache-inlong-[version]-sort-connectors.tar.gz"),", and make sure the ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-sort/connectors/")," directory contains ",(0,a.kt)("inlineCode",{parentName:"p"},"sort-connector-[type]-[version].jar"),"."),(0,a.kt)("h2",{id:"db-dependencies"},"DB Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the backend database is MySQL, please download ",(0,a.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar")," and put it into the following directories:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"inlong-agent/lib/\ninlong-audit/lib/\ninlong-manager/lib/\ninlong-tubemq-manager/lib/\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the backend database is PostgreSQL, there's no need for additional dependencies.")),(0,a.kt)("h2",{id:"configure"},"Configure"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/inlong.conf"),", configure the parameters according to the actual situation, mainly include:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# local IP\nlocal_ip=\n# Configure MySQL\nspring_datasource_hostname=\nspring_datasource_port=3306\nspring_datasource_username=root\nspring_datasource_password=inlong\n# Configure Pulsar or TubeMQ Address\n# the REST server address for Flink\nflink_rest_address=\n# the REST server Port for Flink\nflink_rest_port=8081\n")),(0,a.kt)("h2",{id:"start"},"Start"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"bin/inlong-daemon start standalone\n")),(0,a.kt)("h2",{id:"register-message-queue"},"Register Message Queue"),(0,a.kt)("p",null,"You can register message queue for Manger according to ",(0,a.kt)("a",{parentName:"p",href:"https://inlong.apache.org/docs/next/modules/manager/quick_start/#register-mq-cluster"},"Register MQ Cluster"),"."),(0,a.kt)("h2",{id:"check"},"Check"),(0,a.kt)("p",null,"After all component run successfully, you can access ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost")," with default account:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"user: admin\npassword: inlong\n")))}d.isMDXComponent=!0}}]);
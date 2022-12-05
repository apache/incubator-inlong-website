"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[692],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return t?r.createElement(k,o(o({ref:n},c),{},{components:t})):r.createElement(k,o({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},70700:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const l={title:"\u5355\u673a\u90e8\u7f72",sidebar_position:1},o=void 0,i={unversionedId:"deployment/standalone",id:"version-1.3.0/deployment/standalone",title:"\u5355\u673a\u90e8\u7f72",description:"\u73af\u5883\u8981\u6c42",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/deployment/standalone.md",sourceDirName:"deployment",slug:"/deployment/standalone",permalink:"/zh-CN/docs/1.3.0/deployment/standalone",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/deployment/standalone.md",tags:[],version:"1.3.0",sidebarPosition:1,frontMatter:{title:"\u5355\u673a\u90e8\u7f72",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 Pulsar \u793a\u4f8b",permalink:"/zh-CN/docs/1.3.0/quick_start/pulsar_example"},next:{title:"Docker \u90e8\u7f72",permalink:"/zh-CN/docs/1.3.0/deployment/docker"}},s={},p=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"\u51c6\u5907\u6d88\u606f\u961f\u5217",id:"\u51c6\u5907\u6d88\u606f\u961f\u5217",level:2},{value:"\u4e0b\u8f7d\u5b89\u88c5\u5305",id:"\u4e0b\u8f7d\u5b89\u88c5\u5305",level:2},{value:"DB \u4f9d\u8d56",id:"db-\u4f9d\u8d56",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u6ce8\u518c\u6d88\u606f\u961f\u5217",id:"\u6ce8\u518c\u6d88\u606f\u961f\u5217",level:2},{value:"\u68c0\u67e5",id:"\u68c0\u67e5",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MySQL 5.7+"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/try-flink/local_installation/"},"Flink 1.13.5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+")),(0,a.kt)("h2",{id:"\u51c6\u5907\u6d88\u606f\u961f\u5217"},"\u51c6\u5907\u6d88\u606f\u961f\u5217"),(0,a.kt)("p",null,"InLong \u5f53\u524d\u652f\u6301\u4ee5\u4e0b\u6d88\u606f\u961f\u5217\uff0c\u6839\u636e\u4f7f\u7528\u60c5\u51b5",(0,a.kt)("strong",{parentName:"p"},"\u9009\u62e9\u5176\u4e00"),"\u5373\u53ef\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/1.3.0/modules/tubemq/quick_start"},"InLong TubeMQ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/2.8.1/standalone/"},"Apache Pulsar 2.8.x"))),(0,a.kt)("h2",{id:"\u4e0b\u8f7d\u5b89\u88c5\u5305"},"\u4e0b\u8f7d\u5b89\u88c5\u5305"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download"},"\u4e0b\u8f7d\u9875\u9762")," \u83b7\u53d6\u4e8c\u8fdb\u5236\u5305\uff0c\u6216\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.0/quick_start/how_to_build"},"\u5982\u4f55\u7f16\u8bd1")," \u7f16\u8bd1\u9700\u8981\u7684\u7248\u672c\u3002"),(0,a.kt)("p",null,"\u89e3\u538b ",(0,a.kt)("inlineCode",{parentName:"p"},"apache-inlong-[version]-bin.tar.gz")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"apache-inlong-[version]-sort-connectors.tar.gz"),"\uff0c\u5e76\u786e\u4fdd ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-sort/connectors/")," \u76ee\u5f55\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"sort-connector-[type]-[version].jar"),"\u3002"),(0,a.kt)("h2",{id:"db-\u4f9d\u8d56"},"DB \u4f9d\u8d56"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 MySQL \u6570\u636e\u5e93\uff0c\u8bf7\u4e0b\u8f7d ",(0,a.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.27/mysql-connector-java-8.0.27.jar"},"mysql-connector-java-8.0.27.jar"),", \u5e76\u5c06\u5176\u653e\u5165\u4ee5\u4e0b\u76ee\u5f55\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"inlong-agent/lib/\ninlong-audit/lib/\ninlong-manager/lib/\ninlong-tubemq-manager/lib/\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u540e\u7aef\u8fde\u63a5 PostgreSQL \u6570\u636e\u5e93\uff0c\u4e0d\u9700\u8981\u5f15\u5165\u989d\u5916\u4f9d\u8d56\u3002")),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"conf/inlong.conf"),"\u6587\u4ef6\u4e2d\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u914d\u7f6e\u53c2\u6570\uff0c\u4e3b\u8981\u5305\u62ec\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u672c\u5730\u673a\u5668 IP\nlocal_ip=\n# MySQL \u914d\u7f6e\nspring_datasource_hostname=\nspring_datasource_port=3306\nspring_datasource_username=root\nspring_datasource_password=inlong\n# \u914d\u7f6e Pulsar \u6216\u8005 TubeMQ \u5730\u5740\n# Flink REST server \u5730\u5740\nflink_rest_address=\n# Flink REST server \u7aef\u53e3\nflink_rest_port=8081\n")),(0,a.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"bin/inlong-daemon start standalone\n")),(0,a.kt)("h2",{id:"\u6ce8\u518c\u6d88\u606f\u961f\u5217"},"\u6ce8\u518c\u6d88\u606f\u961f\u5217"),(0,a.kt)("p",null,"\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://inlong.apache.org/zh-CN/docs/next/modules/manager/quick_start/#%E6%B3%A8%E5%86%8C-mq-%E9%9B%86%E7%BE%A4"},"\u6ce8\u518c MQ \u96c6\u7fa4")," \u5411 Manger \u6ce8\u518c\u6d88\u606f\u961f\u5217\u670d\u52a1\u3002"),(0,a.kt)("h2",{id:"\u68c0\u67e5"},"\u68c0\u67e5"),(0,a.kt)("p",null,"\u5f53\u6240\u6709\u7ec4\u4ef6\u90fd\u6210\u529f\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u8bbf\u95ee",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost"),"\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u9ed8\u8ba4\u8d26\u53f7\u767b\u5f55:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"user: admin\npassword: inlong\n")))}u.isMDXComponent=!0}}]);
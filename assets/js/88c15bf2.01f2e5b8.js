"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3616],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),g=a,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||i;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},90521:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={title:"Manager Custom Plugin",sidebar_position:3},l=void 0,o={unversionedId:"development/inlong_manager_plugin",id:"version-1.5.0/development/inlong_manager_plugin",title:"Manager Custom Plugin",description:"Overview",source:"@site/versioned_docs/version-1.5.0/development/inlong_manager_plugin.md",sourceDirName:"development",slug:"/development/inlong_manager_plugin",permalink:"/docs/development/inlong_manager_plugin",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.5.0/development/inlong_manager_plugin.md",tags:[],version:"1.5.0",sidebarPosition:3,frontMatter:{title:"Manager Custom Plugin",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Custom Authentication",permalink:"/docs/development/inlong_manager_shiro_plugin"},next:{title:"User Management",permalink:"/docs/administration/user_management"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Before Development",id:"before-development",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Reference Demo",id:"reference-demo",level:2},{value:"Last but not Least",id:"last-but-not-least",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...i}=e;return(0,a.kt)(c,(0,r.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This article is aimed at InLong-Manager plugin developers, trying to explain the process of developing an Manager plugin as comprehensively as possible, and strive to eliminate the confusion of developers and make plugin development easier."),(0,a.kt)("h2",{id:"before-development"},"Before Development"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Inlong is stream processing framework constructed with a Group + Stream architecture."),(0,a.kt)("li",{parentName:"ul"},"An Inlong Group contains more than one Inlong Stream, each Inlong Stream is capable of a single individual dataflow."),(0,a.kt)("li",{parentName:"ul"},"Inlong Group is responsible for physical resource definition shared by all Inlong Streams included, especially middleware clusters and sort functions."),(0,a.kt)("li",{parentName:"ul"},"In order to create Inlong Group, Inlong Manager use ",(0,a.kt)("strong",{parentName:"li"},"CreateGroupWorkflowDefinition")," to init all necessary physical resources, a workflow definition contains several individual service tasks. When it's created and processed, service tasks will be executed one after another."),(0,a.kt)("li",{parentName:"ul"},"Service task is constructed in ",(0,a.kt)("strong",{parentName:"li"},"observer pattern"),", which also known as the ",(0,a.kt)("strong",{parentName:"li"},"publish-subscribe pattern"),", each service task will register several task listeners. Listener accepts workflow context and controls execution logic on physical resources."),(0,a.kt)("li",{parentName:"ul"},"As a developer, you need to develop specific Listener with personalized logic.")),(0,a.kt)("h2",{id:"demonstration"},"Demonstration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Inlong Manager plugin mechanism can be represented by the following figure:")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(55151).Z,width:"1471",height:"696"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When Inlong Manager is deployed, plugins must be located under installation directory, then ",(0,a.kt)("strong",{parentName:"li"},"Manager Process")," will find the plugin jar and install the plugin automatically.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(38480).Z,width:"2042",height:"210"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"As a developer, you can confirm your plugin be loaded successfully by searching logs below:")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(66805).Z,width:"3012",height:"850"})),(0,a.kt)("h2",{id:"reference-demo"},"Reference Demo"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For helping all Inlong developers. We hava provide ",(0,a.kt)("strong",{parentName:"li"},"manager-plugins")," in Inlong Manager Module, which provide ",(0,a.kt)("strong",{parentName:"li"},"FlinkSortProcessPlugin")," as an example; or you can create ",(0,a.kt)("strong",{parentName:"li"},"ProcessPlugin")," as below;")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class EmptyProcessPlugin implements ProcessPlugin {\n\n    @Override\n    public Map<DataSourceOperateListener, EventSelector> createSourceOperateListeners() {\n        return new LinkedHashMap<>();\n    }\n\n    @Override\n    public Map<QueueOperateListener, EventSelector> createQueueOperateListeners() {\n        return new LinkedHashMap<>();\n    }\n\n    @Override\n    public Map<SortOperateListener, EventSelector> createSortOperateListeners() {\n        return ProcessPlugin.super.createSortOperateListeners();\n    }\n\n    @Override\n    public Map<SinkOperateListener, EventSelector> createSinkOperateListeners() {\n        return ProcessPlugin.super.createSinkOperateListeners();\n    }\n\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DataSourceOperateListener"),",",(0,a.kt)("strong",{parentName:"li"},"QueueOperateListener"),",",(0,a.kt)("strong",{parentName:"li"},"SortOperateListener"),",",(0,a.kt)("strong",{parentName:"li"},"SinkOperateListener")," are child_classes extended from ",(0,a.kt)("strong",{parentName:"li"},"TaskEventListener"),". Then ",(0,a.kt)("strong",{parentName:"li"},"EventSelector")," decides whether the listener should be triggered.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface EventSelector {\n\n    boolean accept(WorkflowContext context);\n\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"After developing you plugin, you should prepare plugin definition file in ",(0,a.kt)("strong",{parentName:"li"},"Yaml"),", and put it under resources/META-INF.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: example\ndescription: example for manager plugin\njavaVersion: 1.8\npluginClass: org.apache.inlong.manager.plugin.EmptyProcessPlugin\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To develop available Listeners , you can refer to the native Listeners in ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.inlong.manager.service.workflow.listener.GroupTaskListenerFactory"))),(0,a.kt)("h2",{id:"last-but-not-least"},"Last but not Least"),(0,a.kt)("p",null,"We provide the plugin mechanism in Inlong Manager make it easier and more convenient for developers to customize personalized logic when Inlong is not supported.\nPlugin mechanism is far from perfect now and we will continuously devote to improve it."))}d.isMDXComponent=!0},55151:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/inlong_plugin-189f358c3cf91a3814a31d3f43d8692b.png"},38480:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/plugin_location-c07bc755eb46f282a2e4dea5747a39d0.png"},66805:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/plugin_log-e98df1d61e487d1b747315d1297314a3.png"}}]);
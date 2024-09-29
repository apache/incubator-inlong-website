"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[68911],{15680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>y});var o=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var u=o.createContext({}),p=function(e){var n=o.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=p(e.components);return o.createElement(u.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(r),g=t,y=s["".concat(u,".").concat(g)]||s[g]||c[g]||l;return r?o.createElement(y,a(a({ref:n},d),{},{components:r})):o.createElement(y,a({ref:n},d))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,a=new Array(l);a[0]=g;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[s]="string"==typeof e?e:t,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},98930:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=r(58168),t=(r(96540),r(15680));const l={title:"\u79bb\u7ebf\u540c\u6b65 Connector \u63d2\u4ef6\u6269\u5c55",sidebar_position:6},a=void 0,i={unversionedId:"development/extension_sort/offline_data_sync",id:"development/extension_sort/offline_data_sync",title:"\u79bb\u7ebf\u540c\u6b65 Connector \u63d2\u4ef6\u6269\u5c55",description:"\u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/extension_sort/offline_data_sync.md",sourceDirName:"development/extension_sort",slug:"/development/extension_sort/offline_data_sync",permalink:"/zh-CN/docs/next/development/extension_sort/offline_data_sync",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/development/extension_sort/offline_data_sync.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u79bb\u7ebf\u540c\u6b65 Connector \u63d2\u4ef6\u6269\u5c55",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"REST API",permalink:"/zh-CN/docs/next/development/api"},next:{title:"Transform \u6269\u5c55 UDF",permalink:"/zh-CN/docs/next/development/extension_transform/transform_udf"}},u={},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u79bb\u7ebf\u6570\u636e\u6e90\u6269\u5c55",id:"\u79bb\u7ebf\u6570\u636e\u6e90\u6269\u5c55",level:2},{value:"\u6570\u636e\u6e90\u8fb9\u754c",id:"\u6570\u636e\u6e90\u8fb9\u754c",level:3},{value:"Source \u7684\u8fb9\u754c\u8bbe\u7f6e",id:"source-\u7684\u8fb9\u754c\u8bbe\u7f6e",level:3},{value:"\u79bb\u7ebf\u540c\u6b65\u4efb\u52a1\u8c03\u5ea6",id:"\u79bb\u7ebf\u540c\u6b65\u4efb\u52a1\u8c03\u5ea6",level:2},{value:"\u8c03\u5ea6\u80fd\u529b\u6269\u5c55",id:"\u8c03\u5ea6\u80fd\u529b\u6269\u5c55",level:3},{value:"\u8c03\u5ea6\u4efb\u52a1\u6ce8\u518c",id:"\u8c03\u5ea6\u4efb\u52a1\u6ce8\u518c",level:4},{value:"\u8c03\u5ea6\u4efb\u52a1\u6267\u884c",id:"\u8c03\u5ea6\u4efb\u52a1\u6267\u884c",level:4},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],d={toc:p},s="wrapper";function c(e){let{components:n,...l}=e;return(0,t.yg)(s,(0,o.A)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,t.yg)("p",null,"\u76ee\u524d\uff0cApache InLong \u652f\u6301\u6570\u636e\u5b9e\u65f6\u540c\u6b65\u548c\u79bb\u7ebf\u540c\u6b65\uff0c\u5e95\u5c42\u7684\u6570\u636e\u8ba1\u7b97\u5f15\u64ce\u90fd\u662f Flink\u3002"),(0,t.yg)("p",null,"Apache InLong \u901a\u8fc7\u6d41\u6279\u7edf\u4e00\u7684 Flink SQL API \u5b9e\u73b0\u4e00\u5957\u4ee3\u7801\u540c\u65f6\u652f\u6301\u5b9e\u65f6\u548c\u79bb\u7ebf\u7684\u6570\u636e\u540c\u6b65\u4efb\u52a1\u7684\u80fd\u529b\u3002\n\u4e24\u8005\u7684\u533a\u522b\u662f\u5b9e\u65f6\u540c\u6b65\u4f7f\u7528 Flink Streaming \u5b9e\u73b0\u6570\u636e\u540c\u6b65\uff0c\u800c\u79bb\u7ebf\u540c\u6b65\u5219\u662f\u4f7f\u7528 Flink Batch \u5b9e\u73b0\u6570\u636e\u540c\u6b65\u3002\n\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u9009\u62e9\u5408\u9002\u7684\u540c\u6b65\u65b9\u5f0f\u3002"),(0,t.yg)("p",null,"\u672c\u6587\u63cf\u8ff0\u5982\u4f55\u6269\u5c55\u79bb\u7ebf\u540c\u6b65 connector \u63d2\u4ef6\u4ee5\u53ca\u5982\u4f55\u6269\u5c55\u7b2c\u4e09\u65b9\u8c03\u5ea6\u670d\u52a1\u3002"),(0,t.yg)("h2",{id:"\u79bb\u7ebf\u6570\u636e\u6e90\u6269\u5c55"},"\u79bb\u7ebf\u6570\u636e\u6e90\u6269\u5c55"),(0,t.yg)("p",null,"\u79bb\u7ebf\u540c\u6b65\u548c\u5b9e\u65f6\u540c\u6b65\u4e00\u6837\uff0c\u4e5f\u4e3b\u8981\u5305\u62ec Source \u548c Sink \u4e24\u90e8\u5206\uff0c\u6700\u5927\u7684\u533a\u522b\u5728\u4e8e Source \u662f\u5426\u6709\u754c\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5b9e\u65f6\u540c\u6b65\u7684 Source \u662f\u65e0\u8fb9\u754c\u7684"),(0,t.yg)("li",{parentName:"ul"},"\u79bb\u7ebf\u540c\u6b65\u7684 Source \u662f\u6709\u8fb9\u754c\u7684")),(0,t.yg)("p",null,"\u8fb9\u754c\u662f\u6307\u79bb\u7ebf\u6570\u636e\u6e90\u5177\u6709\u660e\u786e\u7684\u8d77\u59cb\u548c\u7ed3\u675f\uff0c\u4e00\u822c\u91c7\u7528\u6279\u5904\u7406\u7684\u65b9\u5f0f\u6765\u505a\u79bb\u7ebf\u6570\u636e\u540c\u6b65\u3002\n\u79bb\u7ebf\u6570\u636e\u6e90\u590d\u7528\u4e86\u5b9e\u65f6\u540c\u6b65\u7684 Flink Connector\uff0c\u5e76\u4e14\u589e\u52a0\u4e86 Source \u7684\u662f\u5426\u6709\u8fb9\u754c\u7684\u5c5e\u6027\uff0cSink \u7684\u5b9e\u73b0\u548c\u5b9e\u65f6\u540c\u6b65\u7684 Sink \u4e00\u81f4\u3002"),(0,t.yg)("p",null,"Flink \u7684 Source \u4e2d\u63d0\u4f9b\u4e86\u63a5\u53e3\u6765\u8bbe\u7f6e\u6570\u636e\u8fb9\u754c\u7684\u63a5\u53e3\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Get the boundedness of this source.\n     *\n     * @return the boundedness of this source.\n     */\n    Boundedness getBoundedness();\n")),(0,t.yg)("p",null,"Boundedness \u662f\u4e00\u4e2a\u679a\u4e3e\u7c7b\u578b\uff0c\u6709\u4e24\u4e2a\u503c\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"@Public\npublic enum Boundedness {\n    /**\n     * A BOUNDED stream is a stream with finite records.\n     */\n    BOUNDED,\n\n    /**\n     * A CONTINUOUS_UNBOUNDED stream is a stream with infinite records.\n     */\n    CONTINUOUS_UNBOUNDED\n}\n")),(0,t.yg)("p",null,"\u4ee5 Pulsar Source \u4e3a\u4f8b\uff0c\u6765\u63cf\u8ff0\u5982\u4f55\u4e3a Pulsar Source \u8bbe\u7f6e\u8fb9\u754c\u5c5e\u6027\u3002"),(0,t.yg)("h3",{id:"\u6570\u636e\u6e90\u8fb9\u754c"},"\u6570\u636e\u6e90\u8fb9\u754c"),(0,t.yg)("p",null,"\u8fb9\u754c\u7531 ",(0,t.yg)("inlineCode",{parentName:"p"},"Boundaries")," \u786e\u5b9a\uff0c\u5305\u62ec "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"lowerBound")," \uff1a\u8868\u793a\u8fb9\u754c\u7684\u8d77\u59cb\u4f4d\u7f6e"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"upperBound")," \uff1a\u8868\u793a\u8fb9\u754c\u7684\u7ed3\u675f\u4f4d\u7f6e"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"boundaryType")," \uff1a \u8868\u793a\u8fb9\u754c\u7684\u7c7b\u578b\uff0c\u76ee\u524d\u652f\u6301 ",(0,t.yg)("inlineCode",{parentName:"li"},"TIME")," \u548c ",(0,t.yg)("inlineCode",{parentName:"li"},"OFFSET")," \u4e24\u79cd\u7c7b\u578b")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"public class Boundaries {\n    public String lowerBound;\n    public String upperBound;\n    public BoundaryType boundaryType;\n}\n")),(0,t.yg)("p",null,"\u8fb9\u754c\u4fe1\u606f\u662f\u7531 ",(0,t.yg)("inlineCode",{parentName:"p"},"ExtractNode")," \u643a\u5e26\u7684\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"ExtractNode")," \u5bf9\u5e94 Flink \u7684 Source\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'public abstract class ExtractNode implements Node {\n    public void fillInBoundaries(Boundaries boundaries) {\n        Preconditions.checkNotNull(boundaries, "boundaries is null");\n        // every single kind of extract node should provide the way to fill in boundaries individually\n    }\n}\n')),(0,t.yg)("h3",{id:"source-\u7684\u8fb9\u754c\u8bbe\u7f6e"},"Source \u7684\u8fb9\u754c\u8bbe\u7f6e"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"PulsarExtractNode")," \u4e2d\u4f1a\u5c06 Boundaries \u4fe1\u606f\u914d\u7f6e\u5230 Pulsar Connector \u7684\u76f8\u5173\u53c2\u6570\u4e2d\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'@Override\n    public void fillInBoundaries(Boundaries boundaries) {\n        super.fillInBoundaries(boundaries);\n        BoundaryType boundaryType = boundaries.getBoundaryType();\n        String lowerBoundary = boundaries.getLowerBound();\n        String upperBoundary = boundaries.getUpperBound();\n        if (Objects.requireNonNull(boundaryType) == BoundaryType.TIME) {\n            // \u8bbe\u7f6e\u65f6\u95f4\u8fb9\u754c\n            sourceBoundaryOptions.put("source.start.publish-time", lowerBoundary);\n            sourceBoundaryOptions.put("source.stop.at-publish-time", upperBoundary);\n            log.info("Filled in source boundaries options");\n        } else {\n            log.warn("Not supported boundary type: {}", boundaryType);\n        }\n    }\n')),(0,t.yg)("p",null,"\u8fd9\u4e9b\u53c2\u6570\u4f1a\u88ab PulsarSource \u611f\u77e5\u5230\uff0c\u5728\u521d\u59cb\u5316 PulsarSource \u65f6\uff0c\u4f1a\u4e3a Source \u8bbe\u7f6e\u4e00\u4e2a ",(0,t.yg)("inlineCode",{parentName:"p"},"BoundedStopCursor")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"@Override\npublic ScanRuntimeProvider getScanRuntimeProvider(ScanContext context) {\n    PulsarDeserializationSchema<RowData> deserializationSchema =\n            deserializationSchemaFactory.createPulsarDeserialization(context);\n    PulsarSourceBuilder<RowData> sourceBuilder = PulsarSource.builder();\n    sourceBuilder\n            .setTopics(topics)\n            .setStartCursor(startCursor)\n            .setDeserializationSchema(deserializationSchema)\n            .setProperties(properties);\n    if (!(stopCursor instanceof NeverStopCursor)) {\n        // \u8bbe\u7f6e stop cursor\n        sourceBuilder.setBoundedStopCursor(stopCursor);\n    } else {\n        sourceBuilder.setUnboundedStopCursor(stopCursor);\n    }\n    return SourceProvider.of(sourceBuilder.build());\n}\n")),(0,t.yg)("p",null,"\u5982\u679c\u914d\u7f6e\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"BoundedStopCursor"),"\uff0c\u5219\u4f1a\u5c06 Source \u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"boundedness")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"Boundedness.BOUNDED"),"\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"public PulsarSourceBuilder<OUT> setBoundedStopCursor(StopCursor stopCursor) {\n        this.boundedness = Boundedness.BOUNDED;\n        this.stopCursor = checkNotNull(stopCursor);\n        return this;\n    }\n")),(0,t.yg)("p",null,"\u8fd9\u6837 Flink \u5f15\u64ce\u5c31\u53ef\u4ee5\u611f\u77e5\u8fd9\u662f\u4e00\u4e2a\u6709\u8fb9\u754c\u7684 Source\uff0c\u4ece\u800c\u4f7f\u7528 Batch \u7684\u65b9\u5f0f\u6765\u5904\u7406\u6570\u636e\u3002"),(0,t.yg)("h2",{id:"\u79bb\u7ebf\u540c\u6b65\u4efb\u52a1\u8c03\u5ea6"},"\u79bb\u7ebf\u540c\u6b65\u4efb\u52a1\u8c03\u5ea6"),(0,t.yg)("p",null,"\u79bb\u7ebf\u540c\u6b65\u662f\u57fa\u4e8e Flink batch \u7684\u4efb\u52a1\uff0c\u5e76\u4e14\u53ef\u4ee5\u6309\u7167\u4e00\u5b9a\u7684\u5468\u671f\u8fdb\u884c\u8c03\u5ea6\uff0c\u6bcf\u4e2a Flink Batch \u4efb\u52a1\u90fd\u662f\u7531\u8c03\u5ea6\u7cfb\u7edf\u89e6\u53d1\u7684\u3002 InLong \u5185\u7f6e\u4e86\u57fa\u4e8e Quartz \u7684\u8c03\u5ea6\u7cfb\u7edf\uff0c\u53ef\u4ee5\u652f\u6301\u79bb\u7ebf\u4efb\u52a1\u7684\u8c03\u5ea6\u3002"),(0,t.yg)("p",null,"\u79bb\u7ebf\u540c\u6b65\u4efb\u52a1\u8c03\u5ea6\u7684\u6574\u4f53\u6d41\u7a0b\u5982\u56fe\u6240\u793a\uff1a"),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"Offline Sync Schedule",src:r(36047).A,width:"574",height:"718"})),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u7528\u6237\u521b\u5efa\u79bb\u7ebf\u540c\u6b65\u4efb\u52a1"),(0,t.yg)("li",{parentName:"ul"},"\u4efb\u52a1\u5ba1\u6279\u4e4b\u540e\uff0c\u4f1a\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"li"},"ScheduleClient")," \u5411\u8c03\u5ea6\u7cfb\u7edf\u6ce8\u518c\u4efb\u52a1"),(0,t.yg)("li",{parentName:"ul"},"\u8c03\u5ea6\u670d\u52a1\u4f1a\u6839\u636e\u8c03\u5ea6\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u5468\u671f\u6027\u7684\u751f\u6210\u8c03\u5ea6\u5b9e\u4f8b"),(0,t.yg)("li",{parentName:"ul"},"\u8c03\u5ea6\u5b9e\u4f8b\u4f1a\u56de\u8c03 InLong \u7684 ",(0,t.yg)("inlineCode",{parentName:"li"},"Schedule Operator"),"\uff0c\u53d1\u8d77\u4e00\u6b21\u4efb\u52a1\u6267\u884c\uff0c\u56de\u8c03\u4e2d\u4f1a\u643a\u5e26\u4efb\u52a1\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5305\u62ec GroupId\u3001StreamId\u3001\u4efb\u52a1\u8d77\u59cb\u548c\u7ed3\u675f\u8fb9\u754c\u7b49\u53c2\u6570"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"Schedule Operator")," \u4f1a\u6839\u636e\u4efb\u52a1\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u521b\u5efa\u4e00\u4e2a Flink Job\uff0c\u63d0\u4ea4\u5230 Flink \u96c6\u7fa4\u4e2d\u6267\u884c")),(0,t.yg)("h3",{id:"\u8c03\u5ea6\u80fd\u529b\u6269\u5c55"},"\u8c03\u5ea6\u80fd\u529b\u6269\u5c55"),(0,t.yg)("p",null,"InLong \u7684\u79bb\u7ebf\u8c03\u5ea6\u80fd\u529b\u652f\u6301\u7b2c\u4e09\u65b9\u8c03\u5ea6\u7cfb\u7edf\uff0c\u63a5\u4e0b\u6765\u4ecb\u7ecd\u5982\u4f55\u6269\u5c55\u8c03\u5ea6\u80fd\u529b\u3002"),(0,t.yg)("h4",{id:"\u8c03\u5ea6\u4efb\u52a1\u6ce8\u518c"},"\u8c03\u5ea6\u4efb\u52a1\u6ce8\u518c"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"ScheduleClient")," \u662f\u8c03\u5ea6\u4efb\u52a1\u6ce8\u518c\u7684\u5ba2\u6237\u7aef\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"ScheduleClient")," \u5411\u8c03\u5ea6\u7cfb\u7edf\u6ce8\u518c\u4efb\u52a1\u3002\n",(0,t.yg)("inlineCode",{parentName:"p"},"ScheduleClient")," \u4f1a\u6839\u636e ",(0,t.yg)("inlineCode",{parentName:"p"},"ScheduleInfo")," \u4e2d\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"engineType")," \u6765\u9009\u62e9\u8c03\u5ea6\u5f15\u64ce\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0 ",(0,t.yg)("inlineCode",{parentName:"p"},"ScheduleEngineClient")," \u63a5\u53e3\u6765\u6269\u5c55\u8c03\u5ea6\u80fd\u529b\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"public interface ScheduleEngineClient {\n    /**\n     * Check whether scheduleEngine type is matched.\n     * */\n    boolean accept(String engineType);\n    /**\n     * Register schedule to schedule engine.\n     * @param scheduleInfo schedule info to register\n     * */\n    boolean register(ScheduleInfo scheduleInfo);\n    /**\n     * Un-register schedule from schedule engine.\n     *\n     * @param groupId schedule info to unregister\n     */\n    boolean unregister(String groupId);\n    /**\n     * Update schedule from schedule engine.\n     * @param scheduleInfo schedule info to update\n     * */\n    boolean update(ScheduleInfo scheduleInfo);\n}\n")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"ScheduleEngineClient")," \u63d0\u4f9b\u4e86\u6ce8\u518c\u3001\u6ce8\u9500\u3001\u66f4\u65b0\u8c03\u5ea6\u4efb\u52a1\u7684\u80fd\u529b\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u5b9e\u73b0\u8fd9\u4e9b\u63a5\u53e3\u3002"),(0,t.yg)("h4",{id:"\u8c03\u5ea6\u4efb\u52a1\u6267\u884c"},"\u8c03\u5ea6\u4efb\u52a1\u6267\u884c"),(0,t.yg)("p",null,"\u8c03\u5ea6\u4efb\u52a1\u7684\u6267\u884c\u4f9d\u8d56\u4e8e\u8c03\u5ea6\u670d\u52a1\uff0c\u8c03\u5ea6\u670d\u52a1\u4f1a\u6839\u636e\u8c03\u5ea6\u914d\u7f6e\u4fe1\u606f\uff0c\u5468\u671f\u6027\u7684\u751f\u6210\u8c03\u5ea6\u5b9e\u4f8b\uff0c\u7136\u540e\u56de\u8c03 InLong \u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"Schedule Operator"),"\uff0c\u53d1\u8d77\u4e00\u6b21\u4efb\u52a1\u6267\u884c\u3002\n\u4ee5\u5185\u7f6e\u7684 Quartz \u8c03\u5ea6\u670d\u52a1\u4e3a\u4f8b\u6765\u5c55\u793a\u8c03\u5ea6\u7cfb\u7edf\u5982\u4f55\u5468\u671f\u6027\u89e6\u53d1\u79bb\u7ebf\u540c\u6b65\u4efb\u52a1\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"public interface ScheduleEngine {\n    /**\n     * Start schedule engine.\n     * */\n    void start();\n    /**\n     * Handle schedule register.\n     * @param scheduleInfo schedule info to register\n     * */\n    boolean handleRegister(ScheduleInfo scheduleInfo);\n    /**\n     * Handle schedule unregister.\n     * @param groupId group to un-register schedule info\n     * */\n    boolean handleUnregister(String groupId);\n    /**\n     * Handle schedule update.\n     * @param scheduleInfo schedule info to update\n     * */\n    boolean handleUpdate(ScheduleInfo scheduleInfo);\n    /**\n     * Stop schedule engine.\n     * */\n    void stop();\n}\n")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"QuartzScheduleEngine")," \u63d0\u4f9b\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"Scheduler")," \u8c03\u5ea6\u5668\uff0c\u9488\u5bf9\u4e8e ",(0,t.yg)("inlineCode",{parentName:"p"},"ScheduleEngineClient")," \u7684\u6ce8\u518c\u3001\u6ce8\u9500\u3001\u66f4\u65b0\u8bf7\u6c42\uff0c \u63d0\u4f9b\u4e86\u7684\u542f\u52a8\u3001\u505c\u6b62\u3001\u6ce8\u518c\u3001\u6ce8\u9500\u3001\u66f4\u65b0\u8c03\u5ea6\u4efb\u52a1\u7684\u80fd\u529b\u3002"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"QuartzScheduleEngine")," \u76ee\u524d\u63d0\u4f9b\u4e86\u57fa\u4e8e\u8c03\u5ea6\u5468\u671f\u914d\u7f6e\u4ee5\u53ca\u57fa\u4e8e crontab \u8868\u8fbe\u5f0f\u7684\u5468\u671f\u8c03\u5ea6\u80fd\u529b\uff0c\u6bcf\u4e2a\u5468\u671f\u4ea7\u751f\u7684\u8c03\u5ea6\u5b9e\u4f8b\u4e2d\u5305\u542b\u4e86\u89e6\u53d1\u65f6\u95f4\u3001\u5468\u671f\u7b49\u4fe1\u606f\uff0c\u6839\u636e\u8fd9\u4e9b\u4fe1\u606f\u5b8c\u6210\u5bf9 InLong \u6570\u636e\u540c\u6b65\u4efb\u52a1\u7684\u62c9\u8d77\u3002"),(0,t.yg)("p",null,"\u6bcf\u4e2a\u8c03\u5ea6\u5b9e\u4f8b\u90fd\u5bf9\u5e94\u4e8e\u4e00\u4e2a ",(0,t.yg)("inlineCode",{parentName:"p"},"QuartzOfflineSyncJob"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"QuartzOfflineSyncJob")," \u5411 ",(0,t.yg)("inlineCode",{parentName:"p"},"Manager")," \u53d1\u8d77\u4e00\u6b21 ",(0,t.yg)("inlineCode",{parentName:"p"},"OfflineJobRequest")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'public class OfflineJobRequest {\n\n    @ApiModelProperty("Inlong Group ID")\n    @NotNull\n    private String groupId;\n\n    @ApiModelProperty("Source boundary type, TIME and OFFSET are supported")\n    @NotNull\n    private String boundaryType;\n\n    @ApiModelProperty("The lower bound for bounded source")\n    @NotNull\n    private String lowerBoundary;\n\n    @ApiModelProperty("The upper bound for bounded source")\n    @NotNull\n    private String upperBoundary;\n}\n')),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"OfflineJobRequest")," \u5305\u542b\u4e86 GroupId\u3001StreamId\u3001\u4efb\u52a1\u8d77\u59cb\u548c\u7ed3\u675f\u8fb9\u754c\u7b49\u53c2\u6570\u3002"),(0,t.yg)("p",null,"\u5728\u6269\u5c55\u7b2c\u4e09\u65b9\u8c03\u5ea6\u5f15\u64ce\u65f6\uff0c\u7528\u6237\u9700\u8981\u540c\u6837\u7684\u5728\u8c03\u5ea6\u5b9e\u4f8b\u4e2d\u6784\u5efa ",(0,t.yg)("inlineCode",{parentName:"p"},"OfflineJobRequest"),"\uff0c\u5e76\u5411 ",(0,t.yg)("inlineCode",{parentName:"p"},"Manager")," \u53d1\u8d77\u4efb\u52a1\u6267\u884c\u8bf7\u6c42\u3002"),(0,t.yg)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,t.yg)("p",null,"\u672c\u6587\u4e3b\u8981\u63cf\u8ff0\u4e86\u79bb\u7ebf\u6570\u636e\u540c\u6b65\u7684\u6269\u5c55\u65b9\u6cd5\uff0c\u5305\u62ec\u5982\u4f55\u57fa\u4e8e\u5b9e\u65f6\u540c\u6b65\u7684\u6570\u636e\u6e90\u6765\u6269\u5c55\u79bb\u7ebf\u540c\u6b65\u7684\u80fd\u529b\uff0c\u4ee5\u53ca\u5982\u4f55\u6269\u5c55\u652f\u6301\u7b2c\u4e09\u65b9\u7684\u8c03\u5ea6\u5f15\u64ce\u3002"))}c.isMDXComponent=!0},36047:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/offline_sync_schedule-75e47ed18a3f637eec871fa4438cb95b.png"}}]);
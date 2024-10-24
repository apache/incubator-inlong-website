"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[78302],{15680:(t,e,n)=>{n.d(e,{xA:()=>d,yg:()=>m});var a=n(96540);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},y=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(n),y=r,m=u["".concat(s,".").concat(y)]||u[y]||g[y]||i;return n?a.createElement(m,l(l({ref:e},d),{},{components:n})):a.createElement(m,l({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4022:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const i={title:"HTTP \u4e0a\u62a5",sidebar_position:3},l=void 0,o={unversionedId:"sdk/dataproxy-sdk/http",id:"version-2.0.0/sdk/dataproxy-sdk/http",title:"HTTP \u4e0a\u62a5",description:"HTTP \u4e0a\u62a5\u6d41\u7a0b\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0.0/sdk/dataproxy-sdk/http.md",sourceDirName:"sdk/dataproxy-sdk",slug:"/sdk/dataproxy-sdk/http",permalink:"/zh-CN/docs/sdk/dataproxy-sdk/http",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-2.0.0/sdk/dataproxy-sdk/http.md",tags:[],version:"2.0.0",sidebarPosition:3,frontMatter:{title:"HTTP \u4e0a\u62a5",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Java SDK",permalink:"/zh-CN/docs/sdk/dataproxy-sdk/java"},next:{title:"Golang SDK",permalink:"/zh-CN/docs/sdk/dataproxy-sdk/go"}},s={},p=[{value:"HTTP \u4e0a\u62a5\u6d41\u7a0b\u4ecb\u7ecd",id:"http-\u4e0a\u62a5\u6d41\u7a0b\u4ecb\u7ecd",level:2},{value:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1",id:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1",level:2},{value:"\u65b9\u5f0f\u4e00\uff1a\u8c03\u7528 URL \u4e0a\u62a5",id:"\u65b9\u5f0f\u4e00\u8c03\u7528-url-\u4e0a\u62a5",level:2},{value:"\u65b9\u5f0f\u4e8c\uff1a\u5c01\u88c5 HTTP Client\uff08Java)",id:"\u65b9\u5f0f\u4e8c\u5c01\u88c5-http-clientjava",level:2}],d={toc:p},u="wrapper";function g(t){let{components:e,...i}=t;return(0,r.yg)(u,(0,a.A)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"http-\u4e0a\u62a5\u6d41\u7a0b\u4ecb\u7ecd"},"HTTP \u4e0a\u62a5\u6d41\u7a0b\u4ecb\u7ecd"),(0,r.yg)("p",null,"InLong \u901a\u8fc7 DataProxy \u8282\u70b9\u5904\u7406 HTTP \u4e0a\u62a5\u6d88\u606f\uff0c\u4e0a\u62a5\u6e90\u5b9a\u671f\u4ece Manager \u83b7\u53d6\u63a5\u5165\u70b9\u5217\u8868\uff0c\u7136\u540e\u6839\u636e\u81ea\u8eab\u7b56\u7565\u4ece\u63a5\u5165\u70b9\u5217\u8868\u91cc\u9009\u62e9\u53ef\u7528\u7684 HTTP \u4e0a\u62a5\u8282\u70b9\uff0c\u518d\u91c7\u7528 HTTP \u534f\u8bae\u8fdb\u884c\u6570\u636e\u751f\u4ea7\u3002\u603b\u7684 HTTP \u4e0a\u62a5\u6d41\u7a0b\u5982\u4e0b\u56fe\u793a\uff1a"),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(42509).A,width:"3173",height:"1490"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5fc3\u8df3\u4e0a\u62a5\uff1aDataProxy \u5b9a\u671f\u4e0a\u62a5\u5fc3\u8df3\u81f3 Manager\uff0c\u63d0\u4f9b\u8be5\u8282\u70b9\u5df2\u542f\u7528\u63a5\u5165\u7684 {IP\uff0cPort\uff0cProtocol\uff0cLoad} \u4fe1\u606f\uff1b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5728\u7ebf\u8282\u70b9\u7f13\u5b58\uff1aManager \u7f13\u5b58 DataProxy \u4e0a\u62a5\u7684\u5fc3\u8df3\u4fe1\u606f\uff0c\u611f\u77e5\u96c6\u7fa4\u91cc\u53ef\u7528\u7684\u63a5\u5165\u8282\u70b9\uff0c\u4ee5\u53ca\u53ef\u7528\u7684\u4e0a\u62a5\u63a5\u5165\u4fe1\u606f\uff1b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u63a5\u5165\u70b9\u83b7\u53d6\uff1aHTTP SDK\uff08\u6570\u636e\u4e0a\u62a5\u6e90\u91c7\u7528 DataProxy-SDK \u5b9e\u73b0\u7684 HttpProxySender\uff0c\u6216\u8005\u636e HTTP \u4e0a\u62a5\u534f\u8bae\u81ea\u884c\u5f00\u53d1\u7684 HTTP \u4e0a\u62a5 SDK\uff09\u5b9a\u671f\u901a\u8fc7\u201c/inlong/manager/openapi/dataproxy/getIpList/{inlongGroupId}\u201d\u65b9\u6cd5\u4ece Manager \u83b7\u53d6\u5f53\u524d\u4e0a\u62a5\u7684groupId\u5bf9\u5e94\u7684\u53ef\u7528\u4e0a\u62a5\u63a5\u5165\u70b9\u5217\u8868\u4fe1\u606f\uff1b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u63a5\u5165\u70b9\u9009\u53d6\uff1aHTTP SDK \u6839\u636e\u4e0a\u62a5\u8282\u70b9\u9009\u53d6\u7b56\u7565\uff0c\u9009\u62e9\u5f85\u8fdb\u884c\u6d88\u606f\u4e0a\u62a5\u7684 DataProxy \u8282\u70b9\uff1b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6570\u636e\u4e0a\u62a5\uff1aHTTP SDK \u6839\u636e HTTP \u4e0a\u62a5\u534f\u8bae\u6784\u9020\u4e0a\u62a5\u6d88\u606f\uff0c\u5411\u9009\u4e2d\u7684 DataProxy \u8282\u70b9\u53d1\u9001\u8bf7\u6c42\u6d88\u606f\uff0c\u5e76\u5728\u6536\u5230\u54cd\u5e94\u540e\u6839\u636e\u54cd\u5e94\u7ed3\u679c\u505a\u662f\u5426\u91cd\u53d1\u3001\u5f02\u5e38\u8f93\u51fa\u7b49\u64cd\u4f5c\uff1b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6570\u636e\u63a5\u7eb3\uff1aDataProxy \u68c0\u67e5 HTTP \u6d88\u606f\uff0c\u5982\u679c\u6210\u529f\u63a5\u7eb3\u5219\u8fd4\u56de\u6210\u529f\u54cd\u5e94\uff0c\u5e76\u5c06\u6d88\u606f\u8f6c\u53d1\u7ed9 MQ \u96c6\u7fa4\uff1b\u5982\u679c\u6d88\u606f\u683c\u5f0f\u6216\u8005\u6570\u503c\u4e0d\u7b26\u5408\u89c4\u8303\uff0c\u6216\u8005\u6d88\u606f\u5904\u7406\u5931\u8d25\uff0c\u5219 DataProxy \u8fd4\u56de\u5931\u8d25\u54cd\u5e94\uff0c\u54cd\u5e94\u91cc\u643a\u5e26\u5bf9\u5e94\u7684\u9519\u8bef\u7801\u548c\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\u3002"))),(0,r.yg)("p",null,"\u5efa\u8bae\uff1a\n\u7531\u4e8e HTTP \u4e0a\u62a5\u5b58\u5728\u6027\u80fd\u4f4e\u3001\u6709\u6548\u6570\u636e\u5360\u6bd4\u4f4e\u3001\u8bf7\u6c42\u6d88\u606f\u5bb9\u6613\u4e22\u5931\u7b49\u95ee\u9898\uff0c\u5efa\u8bae\u4e1a\u52a1\u5c3d\u91cf\u7528 TCP \u65b9\u5f0f\u8fdb\u884c\u6570\u636e\u4e0a\u62a5\u3002"),(0,r.yg)("h2",{id:"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1"},"\u65b0\u5efa\u5b9e\u65f6\u540c\u6b65\u4efb\u52a1"),(0,r.yg)("p",null,"\u5728 Dashboard \u6216\u8005\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u521b\u5efa\u4efb\u52a1\uff0c\u6570\u636e\u6e90\u7c7b\u578b\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"Auto Push")," (\u81ea\u4e3b\u63a8\u9001)\u3002"),(0,r.yg)("h2",{id:"\u65b9\u5f0f\u4e00\u8c03\u7528-url-\u4e0a\u62a5"},"\u65b9\u5f0f\u4e00\uff1a\u8c03\u7528 URL \u4e0a\u62a5"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -d 'groupId=give_your_group_id&streamId=give_your_stream_id&dt=data_time&body=give_your_data_body&cnt=1' http://dataproxy_url:46802/dataproxy/message\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u53c2\u6570\u8bf4\u660e\uff1a")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,r.yg)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"groupId"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u6d41\u7ec4 id"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"streamId"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u6d41 ID"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"body"),(0,r.yg)("td",{parentName:"tr",align:null},"\u63a8\u9001\u7684\u6570\u636e\u5185\u5bb9"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dt"),(0,r.yg)("td",{parentName:"tr",align:null},"\u63a8\u9001\u7684\u6570\u636e\u65f6\u95f4"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6beb\u79d2\u4e3a\u5355\u4f4d\u7684\u65f6\u95f4\u6233")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cnt"),(0,r.yg)("td",{parentName:"tr",align:null},"\u63a8\u9001\u6761\u6570"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\uff1a")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u7801"),(0,r.yg)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6210\u529f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u975e1"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5931\u8d25")))),(0,r.yg)("h2",{id:"\u65b9\u5f0f\u4e8c\u5c01\u88c5-http-clientjava"},"\u65b9\u5f0f\u4e8c\uff1a\u5c01\u88c5 HTTP Client\uff08Java)"),(0,r.yg)("p",null,"\u9700\u8981 ",(0,r.yg)("inlineCode",{parentName:"p"},"httpclient"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"commons-lang3"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"jackson-databind"),"\uff0c\u4ee3\u7801\u793a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public class DataPush {\n\n    private static CloseableHttpClient httpClient;\n    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();\n    private final Random rand = new Random();\n\n    private String sendByHttp(List<String> bodies, String groupId, String streamId, long dataTime,\n            long timeout, TimeUnit timeUnit, List<String> addresses) throws Exception {\n        if (null == addresses || addresses.isEmpty()) {\n            throw new RuntimeException("addresses are null");\n        }\n        HttpPost httpPost = null;\n        CloseableHttpResponse response = null;\n        try {\n            if (httpClient == null) {\n                httpClient = constructHttpClient(timeout, timeUnit);\n            }\n            int randomNum = rand.nextInt((addresses.size() - 1) + 1);\n            String url = "http://" + addresses.get(randomNum) + "/dataproxy/message";\n\n            httpPost = new HttpPost(url);\n            httpPost.setHeader(HttpHeaders.CONNECTION, "close");\n            httpPost.setHeader(HttpHeaders.CONTENT_TYPE, "application/x-www-form-urlencoded");\n            ArrayList<BasicNameValuePair> contents = getContents(bodies, groupId, streamId, dataTime);\n            String s = URLEncodedUtils.format(contents, StandardCharsets.UTF_8);\n            httpPost.setEntity(new StringEntity(s));\n\n            response = httpClient.execute(httpPost);\n            String returnStr = EntityUtils.toString(response.getEntity());\n\n            if (StringUtils.isNotBlank(returnStr) && response.getStatusLine().getStatusCode() == 200) {\n                JsonNode jsonNode = OBJECT_MAPPER.readTree(returnStr);\n                if (jsonNode.has("code")) {\n                    int code = jsonNode.get("code").asInt();\n                    if (code == 0) {\n                        return "success";\n                    } else {\n                        return "fail";\n                    }\n                }\n\n            } else {\n                throw new Exception("exception to get response from request " + returnStr + " "\n                        + response.getStatusLine().getStatusCode());\n            }\n\n        } finally {\n            if (httpPost != null) {\n                httpPost.releaseConnection();\n            }\n            if (response != null) {\n                response.close();\n            }\n        }\n        return "fail";\n    }\n\n    private static synchronized CloseableHttpClient constructHttpClient(long timeout, TimeUnit timeUnit) {\n        if (httpClient != null) {\n            return httpClient;\n        }\n        long timeoutInMs = timeUnit.toMillis(timeout);\n        RequestConfig requestConfig = RequestConfig.custom()\n                .setConnectTimeout((int) timeoutInMs)\n                .setSocketTimeout((int) timeoutInMs).build();\n        HttpClientBuilder httpClientBuilder = HttpClientBuilder.create();\n        httpClientBuilder.setDefaultRequestConfig(requestConfig);\n        return httpClientBuilder.build();\n    }\n\n    private static ArrayList<BasicNameValuePair> getContents(List<String> bodies,\n            String groupId, String streamId, long dt) {\n        ArrayList<BasicNameValuePair> params = new ArrayList<BasicNameValuePair>();\n        params.add(new BasicNameValuePair("groupId", groupId));\n        params.add(new BasicNameValuePair("streamId", streamId));\n        params.add(new BasicNameValuePair("dt", String.valueOf(dt)));\n        params.add(new BasicNameValuePair("body", StringUtils.join(bodies, "\\n")));\n        params.add(new BasicNameValuePair("cnt", String.valueOf(bodies.size())));\n        return params;\n    }\n}\n')))}g.isMDXComponent=!0},42509:(t,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/http_report-3c151f929af9c513d5afe653ca36ecd0.png"}}]);
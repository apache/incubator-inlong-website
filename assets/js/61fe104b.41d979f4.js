"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[79783],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(g,l(l({ref:e},d),{},{components:n})):a.createElement(g,l({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41209:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"HTTP Report",sidebar_position:3},l=void 0,o={unversionedId:"sdk/dataproxy-sdk/http",id:"sdk/dataproxy-sdk/http",title:"HTTP Report",description:"Create real-time synchronization task",source:"@site/docs/sdk/dataproxy-sdk/http.md",sourceDirName:"sdk/dataproxy-sdk",slug:"/sdk/dataproxy-sdk/http",permalink:"/docs/next/sdk/dataproxy-sdk/http",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/sdk/dataproxy-sdk/http.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"HTTP Report",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Java SDK",permalink:"/docs/next/sdk/dataproxy-sdk/java"},next:{title:"Example",permalink:"/docs/next/sdk/manager-sdk/example"}},s={},p=[{value:"Create real-time synchronization task",id:"create-real-time-synchronization-task",level:2},{value:"Method 1: Call the interface to report (CURL)",id:"method-1-call-the-interface-to-report-curl",level:2},{value:"Method 2\uff1aEncapsulate the HTTP client\uff08Java)",id:"method-2encapsulate-the-http-clientjava",level:2}],d={toc:p},u="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-real-time-synchronization-task"},"Create real-time synchronization task"),(0,r.kt)("p",null,"Create a task on the Dashboard or through the command line, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"Auto Push")," (autonomous push) as the data source type."),(0,r.kt)("h2",{id:"method-1-call-the-interface-to-report-curl"},"Method 1: Call the interface to report (CURL)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -d 'groupId=give_your_group_id&streamId=give_your_stream_id&dt=data_time&body=give_your_data_body&cnt=1' http://dataproxy_url:46802/dataproxy/message\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parameter Description\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"groupId"),(0,r.kt)("td",{parentName:"tr",align:null},"Data stream group id"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"streamId"),(0,r.kt)("td",{parentName:"tr",align:null},"Data stream ID"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"Data content to be pushed"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dt"),(0,r.kt)("td",{parentName:"tr",align:null},"Data time to be pushed"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cnt"),(0,r.kt)("td",{parentName:"tr",align:null},"The count of data pieces to be pushed"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Return Value\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"return value"),(0,r.kt)("th",{parentName:"tr",align:null},"meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Success")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"!=1"),(0,r.kt)("td",{parentName:"tr",align:null},"Failure")))),(0,r.kt)("h2",{id:"method-2encapsulate-the-http-clientjava"},"Method 2\uff1aEncapsulate the HTTP client\uff08Java)"),(0,r.kt)("p",null,"The following packages need to be imported first ",(0,r.kt)("inlineCode",{parentName:"p"},"httpclient"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"commons-lang3"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"jackson-databind")," code example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class DataPush {\n\n    private static CloseableHttpClient httpClient;\n    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();\n    private final Random rand = new Random();\n\n    private String sendByHttp(List<String> bodies, String groupId, String streamId, long dataTime,\n            long timeout, TimeUnit timeUnit, List<String> addresses) throws Exception {\n        if (null == addresses || addresses.isEmpty()) {\n            throw new RuntimeException("addresses are null");\n        }\n        HttpPost httpPost = null;\n        CloseableHttpResponse response = null;\n        try {\n            if (httpClient == null) {\n                httpClient = constructHttpClient(timeout, timeUnit);\n            }\n            int randomNum = rand.nextInt((addresses.size() - 1) + 1);\n            String url = "http://" + addresses.get(randomNum) + "/dataproxy/message";\n\n            httpPost = new HttpPost(url);\n            httpPost.setHeader(HttpHeaders.CONNECTION, "close");\n            httpPost.setHeader(HttpHeaders.CONTENT_TYPE, "application/x-www-form-urlencoded");\n            ArrayList<BasicNameValuePair> contents = getContents(bodies, groupId, streamId, dataTime);\n            String s = URLEncodedUtils.format(contents, StandardCharsets.UTF_8);\n            httpPost.setEntity(new StringEntity(s));\n\n            response = httpClient.execute(httpPost);\n            String returnStr = EntityUtils.toString(response.getEntity());\n\n            if (StringUtils.isNotBlank(returnStr) && response.getStatusLine().getStatusCode() == 200) {\n                JsonNode jsonNode = OBJECT_MAPPER.readTree(returnStr);\n                if (jsonNode.has("code")) {\n                    int code = jsonNode.get("code").asInt();\n                    if (code == 1) {\n                        return "success";\n                    } else {\n                        return "fail";\n                    }\n                }\n\n            } else {\n                throw new Exception("exception to get response from request " + returnStr + " "\n                        + response.getStatusLine().getStatusCode());\n            }\n\n        } finally {\n            if (httpPost != null) {\n                httpPost.releaseConnection();\n            }\n            if (response != null) {\n                response.close();\n            }\n        }\n        return "fail";\n    }\n\n    private static synchronized CloseableHttpClient constructHttpClient(long timeout, TimeUnit timeUnit) {\n        if (httpClient != null) {\n            return httpClient;\n        }\n        long timeoutInMs = timeUnit.toMillis(timeout);\n        RequestConfig requestConfig = RequestConfig.custom()\n                .setConnectTimeout((int) timeoutInMs)\n                .setSocketTimeout((int) timeoutInMs).build();\n        HttpClientBuilder httpClientBuilder = HttpClientBuilder.create();\n        httpClientBuilder.setDefaultRequestConfig(requestConfig);\n        return httpClientBuilder.build();\n    }\n\n    private static ArrayList<BasicNameValuePair> getContents(List<String> bodies,\n            String groupId, String streamId, long dt) {\n        ArrayList<BasicNameValuePair> params = new ArrayList<BasicNameValuePair>();\n        params.add(new BasicNameValuePair("groupId", groupId));\n        params.add(new BasicNameValuePair("streamId", streamId));\n        params.add(new BasicNameValuePair("dt", String.valueOf(dt)));\n        params.add(new BasicNameValuePair("body", StringUtils.join(bodies, "\\n")));\n        params.add(new BasicNameValuePair("cnt", String.valueOf(bodies.size())));\n        return params;\n    }\n}\n')))}c.isMDXComponent=!0}}]);
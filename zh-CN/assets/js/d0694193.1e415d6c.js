"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[182],{3905:(t,e,l)=>{l.d(e,{Zo:()=>u,kt:()=>p});var n=l(67294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function s(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var d=n.createContext({}),i=function(t){var e=n.useContext(d),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},u=function(t){var e=i(t.components);return n.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,r=t.originalType,d=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),k=i(l),p=a,N=k["".concat(d,".").concat(p)]||k[p]||c[p]||r;return l?n.createElement(N,o(o({ref:e},u),{},{components:l})):n.createElement(N,o({ref:e},u))}));function p(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=l.length,o=new Array(r);o[0]=k;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var i=2;i<r;i++)o[i]=l[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},88135:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var n=l(87462),a=(l(67294),l(3905));const r={title:"Oracle-CDC",sidebar_position:7},o=void 0,s={unversionedId:"data_node/extract_node/oracle-cdc",id:"data_node/extract_node/oracle-cdc",title:"Oracle-CDC",description:"\u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data_node/extract_node/oracle-cdc.md",sourceDirName:"data_node/extract_node",slug:"/data_node/extract_node/oracle-cdc",permalink:"/zh-CN/docs/next/data_node/extract_node/oracle-cdc",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/data_node/extract_node/oracle-cdc.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Oracle-CDC",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"MySQL-CDC",permalink:"/zh-CN/docs/next/data_node/extract_node/mysql-cdc"},next:{title:"PostgreSQL-CDC",permalink:"/zh-CN/docs/next/data_node/extract_node/postgresql-cdc"}},d={},i=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u652f\u6301\u7684\u7248\u672c",id:"\u652f\u6301\u7684\u7248\u672c",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"Maven \u4f9d\u8d56",id:"maven-\u4f9d\u8d56",level:3},{value:"\u8bbe\u7f6e Oracle",id:"\u8bbe\u7f6e-oracle",level:2},{value:"\u5bf9\u4e8e\u975e CDB \u6570\u636e\u5e93",id:"\u5bf9\u4e8e\u975e-cdb-\u6570\u636e\u5e93",level:3},{value:"\u5bf9\u4e8e CDB \u6570\u636e\u5e93",id:"\u5bf9\u4e8e-cdb-\u6570\u636e\u5e93",level:3},{value:"\u5982\u4f55\u521b\u5efa Oracle Extract \u8282\u70b9",id:"\u5982\u4f55\u521b\u5efa-oracle-extract-\u8282\u70b9",level:2},{value:"SQL API \u7528\u6cd5",id:"sql-api-\u7528\u6cd5",level:3},{value:"InLong Dashboard \u7528\u6cd5",id:"inlong-dashboard-\u7528\u6cd5",level:3},{value:"InLong Manager Client \u7528\u6cd5",id:"inlong-manager-client-\u7528\u6cd5",level:3},{value:"Oracle Extact \u8282\u70b9\u53c2\u6570",id:"oracle-extact-\u8282\u70b9\u53c2\u6570",level:2},{value:"\u5c40\u9650\u6027",id:"\u5c40\u9650\u6027",level:2},{value:"\u5728\u626b\u63cf\u8868\u7684\u5feb\u7167\u671f\u95f4\u65e0\u6cd5\u6267\u884c <code>checkpoint</code>",id:"\u5728\u626b\u63cf\u8868\u7684\u5feb\u7167\u671f\u95f4\u65e0\u6cd5\u6267\u884c-checkpoint",level:3},{value:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5",id:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5",level:2},{value:"\u7279\u5f81",id:"\u7279\u5f81",level:2},{value:"Exactly-Once \u5904\u7406",id:"exactly-once-\u5904\u7406",level:3},{value:"\u542f\u52a8\u8bfb\u53d6\u4f4d\u7f6e",id:"\u542f\u52a8\u8bfb\u53d6\u4f4d\u7f6e",level:3},{value:"\u5355\u7ebf\u7a0b\u8bfb\u53d6",id:"\u5355\u7ebf\u7a0b\u8bfb\u53d6",level:3},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2}],u={toc:i};function c(t){let{components:e,...l}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"Oracle Extract \u8282\u70b9\u5141\u8bb8\u4ece Oracle \u6570\u636e\u5e93\u4e2d\u8bfb\u53d6\u5feb\u7167\u6570\u636e\u548c\u589e\u91cf\u6570\u636e\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u8bbe\u7f6e Oracle Extract \u8282\u70b9\u4ee5\u5bf9 Oracle \u6570\u636e\u5e93\u8fd0\u884c SQL \u67e5\u8be2\u3002"),(0,a.kt)("h2",{id:"\u652f\u6301\u7684\u7248\u672c"},"\u652f\u6301\u7684\u7248\u672c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Extract \u8282\u70b9"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"),(0,a.kt)("th",{parentName:"tr",align:null},"Driver"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-CN/docs/next/data_node/extract_node/oracle-cdc"},"Oracle-CDC")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.oracle.com/index.html"},"Oracle"),": 11, 12, 19"),(0,a.kt)("td",{parentName:"tr",align:null},"Oracle Driver: 19.3.0.0")))),(0,a.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,a.kt)("p",null,"\u4e3a\u4e86\u8bbe\u7f6e Oracle Extract \u8282\u70b9\uff0c\u4e0b\u8868\u63d0\u4f9b\u4e86\u4f7f\u7528\u6784\u5efa\u81ea\u52a8\u5316\u5de5\u5177\uff08\u4f8b\u5982 Maven \u6216 SBT\uff09\u548c\u5e26\u6709 Sort Connectors JAR \u5305\u7684 SQL \u5ba2\u6237\u7aef\u7684\u4e24\u4e2a\u9879\u76ee\u7684\u4f9d\u8d56\u5173\u7cfb\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"maven-\u4f9d\u8d56"},"Maven \u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-oracle-cdc</artifactId>\n    \x3c!-- \u9009\u62e9\u9002\u5408\u4f60\u7684 Application \u7684\u7248\u672c --\x3e\n    <version>inlong_version</version>\n</dependency>\n")),(0,a.kt)("p",null,"\u8fde\u63a5 Oracle \u6570\u636e\u5e93\u8fd8\u9700\u8981 Oracle \u9a71\u52a8\u7a0b\u5e8f\u4f9d\u8d56\u9879\u3002\u8bf7\u4e0b\u8f7d",(0,a.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/com/oracle/database/jdbc/ojdbc8/19.3.0.0/ojdbc8-19.3.0.0.jar"},"ojdbc8-19.3.0.0.jar")," \u5e76\u5c06\u5176\u653e\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"FLINK_HOME/lib/"),"\u3002"),(0,a.kt)("h2",{id:"\u8bbe\u7f6e-oracle"},"\u8bbe\u7f6e Oracle"),(0,a.kt)("p",null,"\u4f60\u5fc5\u987b\u4e3a Oracle \u6570\u636e\u5e93\u542f\u7528\u65e5\u5fd7\u5f52\u6863\uff0c\u5e76\u5b9a\u4e49\u4e00\u4e2a\u5bf9 Debezium Oracle \u8fde\u63a5\u5668\u76d1\u63a7\u7684\u6240\u6709\u6570\u636e\u5e93\u5177\u6709\u9002\u5f53\u6743\u9650\u7684 Oracle \u7528\u6237\u3002"),(0,a.kt)("h3",{id:"\u5bf9\u4e8e\u975e-cdb-\u6570\u636e\u5e93"},"\u5bf9\u4e8e\u975e CDB \u6570\u636e\u5e93"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u542f\u7528\u65e5\u5fd7\u5f52\u6863"),(0,a.kt)("p",{parentName:"li"},"(1.1). \u4ee5 DBA \u8eab\u4efd\u8fde\u63a5\u5230\u6570\u636e\u5e93"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ORACLE_SID=SID\nexport ORACLE_SID\nsqlplus /nolog\n  CONNECT sys/password AS SYSDBA\n")),(0,a.kt)("p",{parentName:"li"},"(1.2). \u542f\u7528\u65e5\u5fd7\u5f52\u6863"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"alter system set db_recovery_file_dest_size = 10G;\nalter system set db_recovery_file_dest = '/opt/oracle/oradata/recovery_area' scope=spfile;\nshutdown immediate;\nstartup mount;\nalter database archivelog;\nalter database open;\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Note:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Enable log archiving requires database restart, pay attention when try to do it"),(0,a.kt)("li",{parentName:"ul"},"The archived logs will occupy a large amount of disk space, so consider clean the expired logs the periodically")),(0,a.kt)("p",{parentName:"li"},"(1.3). \u68c0\u67e5\u662f\u5426\u542f\u7528\u4e86\u65e5\u5fd7\u5f52\u6863"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'-- Should now "Database log mode: Archive Mode"\narchive log list;\n')),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f:")),(0,a.kt)("p",{parentName:"li"},"\u5fc5\u987b\u4e3a\u6355\u83b7\u7684\u8868\u6216\u6570\u636e\u5e93\u542f\u7528\u8865\u5145\u65e5\u5fd7\u8bb0\u5f55\uff0c\u4ee5\u4fbf\u6570\u636e\u66f4\u6539\u80fd\u591f\u6355\u83b7\u5df2\u66f4\u6539\u6570\u636e\u5e93\u884c\u7684",(0,a.kt)("em",null,"\u4e4b\u524d"),"\u72b6\u6001\u3002\n\u4e0b\u9762\u8bf4\u660e\u4e86\u5982\u4f55\u5728\u8868/\u6570\u636e\u5e93\u7ea7\u522b\u8fdb\u884c\u914d\u7f6e\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u4e3a\u7279\u5b9a\u8868\u542f\u7528\u8865\u5145\u65e5\u5fd7\u8bb0\u5f55\uff1a\nALTER TABLE inventory.customers ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u4e3a\u6570\u636e\u5e93\u542f\u7528\u8865\u5145\u65e5\u5fd7\u8bb0\u5f55\uff1a\nALTER DATABASE ADD SUPPLEMENTAL LOG DATA;\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u5177\u6709\u6743\u9650\u7684 Oracle \u7528\u6237"),(0,a.kt)("p",{parentName:"li"},"(2.1). \u521b\u5efa\u8868\u7a7a\u95f4"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"sqlplus sys/password@host:port/SID AS SYSDBA;\n  CREATE TABLESPACE logminer_tbs DATAFILE '/opt/oracle/oradata/SID/logminer_tbs.dbf' SIZE 25M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED;\n  exit;\n")),(0,a.kt)("p",{parentName:"li"},"(2.2). \u521b\u5efa\u7528\u6237\u5e76\u6388\u4e88\u6743\u9650"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"sqlplus sys/password@host:port/SID AS SYSDBA;\n  CREATE USER flinkuser IDENTIFIED BY flinkpw DEFAULT TABLESPACE LOGMINER_TBS QUOTA UNLIMITED ON LOGMINER_TBS;\n  GRANT CREATE SESSION TO flinkuser;\n  GRANT SET CONTAINER TO flinkuser;\n  GRANT SELECT ON V_$DATABASE to flinkuser;\n  GRANT FLASHBACK ANY TABLE TO flinkuser;\n  GRANT SELECT ANY TABLE TO flinkuser;\n  GRANT SELECT_CATALOG_ROLE TO flinkuser;\n  GRANT EXECUTE_CATALOG_ROLE TO flinkuser;\n  GRANT SELECT ANY TRANSACTION TO flinkuser;\n  GRANT LOGMINING TO flinkuser;\n\n  GRANT CREATE TABLE TO flinkuser;\n  GRANT LOCK ANY TABLE TO flinkuser;\n  GRANT ALTER ANY TABLE TO flinkuser;\n  GRANT CREATE SEQUENCE TO flinkuser;\n\n  GRANT EXECUTE ON DBMS_LOGMNR TO flinkuser;\n  GRANT EXECUTE ON DBMS_LOGMNR_D TO flinkuser;\n\n  GRANT SELECT ON V_$LOG TO flinkuser;\n  GRANT SELECT ON V_$LOG_HISTORY TO flinkuser;\n  GRANT SELECT ON V_$LOGMNR_LOGS TO flinkuser;\n  GRANT SELECT ON V_$LOGMNR_CONTENTS TO flinkuser;\n  GRANT SELECT ON V_$LOGMNR_PARAMETERS TO flinkuser;\n  GRANT SELECT ON V_$LOGFILE TO flinkuser;\n  GRANT SELECT ON V_$ARCHIVED_LOG TO flinkuser;\n  GRANT SELECT ON V_$ARCHIVE_DEST_STATUS TO flinkuser;\n  exit;\n")))),(0,a.kt)("h3",{id:"\u5bf9\u4e8e-cdb-\u6570\u636e\u5e93"},"\u5bf9\u4e8e CDB \u6570\u636e\u5e93"),(0,a.kt)("p",null,"\u603b\u7684\u6765\u8bf4\uff0c\u914d\u7f6e CDB \u6570\u636e\u5e93\u7684\u6b65\u9aa4\u4e0e\u975e CDB \u6570\u636e\u5e93\u975e\u5e38\u76f8\u4f3c\uff0c\u4f46\u547d\u4ee4\u53ef\u80fd\u4f1a\u6709\u6240\u4e0d\u540c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u542f\u7528\u65e5\u5fd7\u5f52\u6863"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ORACLE_SID=ORCLCDB\nexport ORACLE_SID\nsqlplus /nolog\n  CONNECT sys/password AS SYSDBA\n  alter system set db_recovery_file_dest_size = 10G;\n  -- should exist\n  alter system set db_recovery_file_dest = '/opt/oracle/oradata/recovery_area' scope=spfile;\n  shutdown immediate\n  startup mount\n  alter database archivelog;\n  alter database open;\n  -- Should show \"Database log mode: Archive Mode\"\n  archive log list\n  exit;\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f:"),"\n\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u7528\u8865\u5145\u65e5\u5fd7\u8bb0\u5f55\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- Enable supplemental logging for a specific table:\nALTER TABLE inventory.customers ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;\n-- Enable supplemental logging for database\nALTER DATABASE ADD SUPPLEMENTAL LOG DATA;\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u5177\u6709\u6743\u9650\u7684 Oracle \u7528\u6237"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"sqlplus sys/password@//localhost:1521/ORCLCDB as sysdba\n  CREATE TABLESPACE logminer_tbs DATAFILE '/opt/oracle/oradata/ORCLCDB/logminer_tbs.dbf' SIZE 25M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED;\n  exit\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"sqlplus sys/password@//localhost:1521/ORCLPDB1 as sysdba\n  CREATE TABLESPACE logminer_tbs DATAFILE '/opt/oracle/oradata/ORCLCDB/ORCLPDB1/logminer_tbs.dbf' SIZE 25M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED;\n  exit\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"sqlplus sys/password@//localhost:1521/ORCLCDB as sysdba\n  CREATE USER flinkuser IDENTIFIED BY flinkpw DEFAULT TABLESPACE logminer_tbs QUOTA UNLIMITED ON logminer_tbs CONTAINER=ALL;\n  GRANT CREATE SESSION TO flinkuser CONTAINER=ALL;\n  GRANT SET CONTAINER TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ON V_$DATABASE to flinkuser CONTAINER=ALL;\n  GRANT FLASHBACK ANY TABLE TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ANY TABLE TO flinkuser CONTAINER=ALL;\n  GRANT SELECT_CATALOG_ROLE TO flinkuser CONTAINER=ALL;\n  GRANT EXECUTE_CATALOG_ROLE TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ANY TRANSACTION TO flinkuser CONTAINER=ALL;\n  GRANT LOGMINING TO flinkuser CONTAINER=ALL;\n  GRANT CREATE TABLE TO flinkuser CONTAINER=ALL;\n  GRANT LOCK ANY TABLE TO flinkuser CONTAINER=ALL;\n  GRANT CREATE SEQUENCE TO flinkuser CONTAINER=ALL;\n\n  GRANT EXECUTE ON DBMS_LOGMNR TO flinkuser CONTAINER=ALL;\n  GRANT EXECUTE ON DBMS_LOGMNR_D TO flinkuser CONTAINER=ALL;\n\n  GRANT SELECT ON V_$LOG TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ON V_$LOG_HISTORY TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ON V_$LOGMNR_LOGS TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ON V_$LOGMNR_CONTENTS TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ON V_$LOGMNR_PARAMETERS TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ON V_$LOGFILE TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ON V_$ARCHIVED_LOG TO flinkuser CONTAINER=ALL;\n  GRANT SELECT ON V_$ARCHIVE_DEST_STATUS TO flinkuser CONTAINER=ALL;\n  exit\n")))),(0,a.kt)("p",null,"\u67e5\u770b\u66f4\u591a\u5173\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://debezium.io/documentation/reference/1.5/connectors/oracle.html#setting-up-oracle"},"\u8bbe\u7f6e Oracle")),(0,a.kt)("h2",{id:"\u5982\u4f55\u521b\u5efa-oracle-extract-\u8282\u70b9"},"\u5982\u4f55\u521b\u5efa Oracle Extract \u8282\u70b9"),(0,a.kt)("h3",{id:"sql-api-\u7528\u6cd5"},"SQL API \u7528\u6cd5"),(0,a.kt)("p",null,"Oracle Extract \u8282\u70b9\u53ef\u4ee5\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u521b\u5efa an Oracle Extract \u8282\u70b9 'products' in Flink SQL\nFlink SQL> CREATE TABLE products (\n     ID INT NOT NULL,\n     NAME STRING,\n     DESCRIPTION STRING,\n     WEIGHT DECIMAL(10, 3),\n     PRIMARY KEY(id) NOT ENFORCED\n     ) WITH (\n     'connector' = 'oracle-cdc',\n     'hostname' = 'localhost',\n     'port' = '1521',\n     'username' = 'flinkuser',\n     'password' = 'flinkpw',\n     'database-name' = 'XE',\n     'schema-name' = 'inlong',\n     'table-name' = 'user');\n     \nFlink SQL> SELECT * FROM products;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f:")),(0,a.kt)("p",null,"\u5f53\u4f7f\u7528 CDB + PDB \u6a21\u578b\u65f6\uff0c\u60a8\u9700\u8981\u5728 Flink DDL \u4e2d\u6dfb\u52a0\u4e00\u4e2a\u989d\u5916\u7684\u9009\u9879 ",(0,a.kt)("inlineCode",{parentName:"p"},"'debezium.database.pdb.name' = 'xxx'")," \u6765\u6307\u5b9a\u8981\u8fde\u63a5\u7684 PDB \u7684\u540d\u79f0\u3002"),(0,a.kt)("h3",{id:"inlong-dashboard-\u7528\u6cd5"},"InLong Dashboard \u7528\u6cd5"),(0,a.kt)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,a.kt)("h3",{id:"inlong-manager-client-\u7528\u6cd5"},"InLong Manager Client \u7528\u6cd5"),(0,a.kt)("p",null,"TODO: \u5c06\u5728\u672a\u6765\u652f\u6301\u6b64\u529f\u80fd\u3002"),(0,a.kt)("h2",{id:"oracle-extact-\u8282\u70b9\u53c2\u6570"},"Oracle Extact \u8282\u70b9\u53c2\u6570"),(0,a.kt)("div",{class:"highlight"},(0,a.kt)("table",{class:"colwidths-auto docutils"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{class:"text-left",style:{width:"25%"}},"\u53c2\u6570"),(0,a.kt)("th",{class:"text-left",style:{width:"8%"}},"\u662f\u5426\u5fc5\u987b"),(0,a.kt)("th",{class:"text-left",style:{width:"7%"}},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{class:"text-left",style:{width:"10%"}},"\u6570\u636e\u7c7b\u578b"),(0,a.kt)("th",{class:"text-left",style:{width:"50%"}},"\u63cf\u8ff0"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"connector"),(0,a.kt)("td",null,"required"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u8fde\u63a5\u5668\uff0c\u8fd9\u91cc\u5e94\u8be5\u662f ",(0,a.kt)("code",null,"'oracle-cdc'"),"\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"hostname"),(0,a.kt)("td",null,"required"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"Oracle \u6570\u636e\u5e93\u670d\u52a1\u5668\u7684 IP \u5730\u5740\u6216\u4e3b\u673a\u540d\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"username"),(0,a.kt)("td",null,"required"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"\u8fde\u63a5\u5230 Oracle \u6570\u636e\u5e93\u670d\u52a1\u5668\u65f6\u8981\u4f7f\u7528\u7684 Oracle \u6570\u636e\u5e93\u7684\u540d\u79f0\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"password"),(0,a.kt)("td",null,"required"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"\u8fde\u63a5\u5230 Oracle \u6570\u636e\u5e93\u670d\u52a1\u5668\u65f6\u4f7f\u7528\u7684\u5bc6\u7801\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"database-name"),(0,a.kt)("td",null,"required"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"\u8981\u76d1\u89c6\u7684 Oracle \u670d\u52a1\u5668\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"schema-name"),(0,a.kt)("td",null,"required"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"\u8981\u76d1\u89c6\u7684 Oracle \u6570\u636e\u5e93\u7684 Schema \u540d\u79f0\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"table-name"),(0,a.kt)("td",null,"required"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"\u8981\u76d1\u89c6\u7684 Oracle \u6570\u636e\u5e93\u7684\u8868\u540d\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"port"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"1521"),(0,a.kt)("td",null,"Integer"),(0,a.kt)("td",null,"Oracle \u6570\u636e\u5e93\u670d\u52a1\u5668\u7684\u6574\u6570\u7aef\u53e3\u53f7\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scan.startup.mode"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"initial"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,'Oracle CDC \u6d88\u8d39\u8005\u7684\u53ef\u9009\u542f\u52a8\u6a21\u5f0f\uff0c\u6709\u6548\u679a\u4e3e\u4e3a"initial" \u548c"latest-offset"\u3002 \u8bf7\u53c2\u9605',(0,a.kt)("a",{href:"#startup-reading-position"},"\u542f\u52a8\u9605\u8bfb\u4f4d\u7f6e"),"\u90e8\u5206\u4e86\u89e3\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"debezium.*"),(0,a.kt)("td",null,"optional"),(0,a.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,a.kt)("td",null,"String"),(0,a.kt)("td",null,"\u5c06 Debezium \u7684\u5c5e\u6027\u6574\u5408\u5230\u7528\u4e8e\u4ece Oracle \u670d\u52a1\u5668\u6355\u83b7\u6570\u636e\u66f4\u6539\u7684 Debezium Embedded Engine\u3002 \u4f8b\u5982\uff1a",(0,a.kt)("code",null,"'debezium.snapshot.mode' = 'never'"),"\u3002 \u8be6\u7ec6\u4e86\u89e3 ",(0,a.kt)("a",{href:"https://debezium.io/documentation/reference/1.5/connectors/oracle.html#oracle-connector-properties"},"Debezium \u7684 Oracle \u8fde\u63a5\u5668\u5c5e\u6027")))))),(0,a.kt)("h2",{id:"\u5c40\u9650\u6027"},"\u5c40\u9650\u6027"),(0,a.kt)("h3",{id:"\u5728\u626b\u63cf\u8868\u7684\u5feb\u7167\u671f\u95f4\u65e0\u6cd5\u6267\u884c-checkpoint"},"\u5728\u626b\u63cf\u8868\u7684\u5feb\u7167\u671f\u95f4\u65e0\u6cd5\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"h3"},"checkpoint")),(0,a.kt)("p",null,"\u5728\u626b\u63cf\u6570\u636e\u5e93\u8868\u7684\u5feb\u7167\u65f6\uff0c\u7531\u4e8e\u6ca1\u6709\u53ef\u6062\u590d\u7684\u4f4d\u7f6e\uff0c\u6211\u4eec\u65e0\u6cd5\u6267\u884c\u68c0\u67e5\u70b9\u3002\u4e3a\u4e86\u4e0d\u6267\u884c\u68c0\u67e5\u70b9\uff0cOracle CDC \u6e90\u5c06\u4fdd\u6301\u68c0\u67e5\u70b9\u7b49\u5f85\u8d85\u65f6\u3002\u8d85\u65f6\u68c0\u67e5\u70b9\u5c06\u88ab\u8bc6\u522b\u4e3a\u5931\u8d25\u7684\u68c0\u67e5\u70b9\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u5c06\u89e6\u53d1 Flink \u4f5c\u4e1a\u7684\u6545\u969c\u8f6c\u79fb\u3002\u6240\u4ee5\u5982\u679c\u6570\u636e\u5e93\u8868\u5f88\u5927\uff0c\u5efa\u8bae\u6dfb\u52a0\u4ee5\u4e0b Flink \u914d\u7f6e\uff0c\u907f\u514d\u56e0\u4e3a\u8d85\u65f6\u68c0\u67e5\u70b9\u800c\u5bfc\u81f4\u6545\u969c\u8f6c\u79fb\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"execution.checkpointing.interval: 10min\nexecution.checkpointing.tolerable-failed-checkpoints: 100\nrestart-strategy: fixed-delay\nrestart-strategy.fixed-delay.attempts: 2147483647\n")),(0,a.kt)("h2",{id:"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5"},"\u53ef\u7528\u7684\u5143\u6570\u636e\u5b57\u6bb5"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u683c\u5f0f\u5143\u6570\u636e\u53ef\u4ee5\u4f5c\u4e3a\u8868\u5b9a\u4e49\u4e2d\u7684\u53ea\u8bfb (VIRTUAL) \u5217\u516c\u5f00\u3002"),(0,a.kt)("table",{class:"colwidths-auto docutils"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{class:"text-left",style:{width:"15%"}},"\u5b57\u6bb5\u540d\u79f0"),(0,a.kt)("th",{class:"text-left",style:{width:"30%"}},"\u6570\u636e\u7c7b\u578b"),(0,a.kt)("th",{class:"text-left",style:{width:"55%"}},"\u63cf\u8ff0"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"table_name"),(0,a.kt)("td",null,"STRING NOT NULL"),(0,a.kt)("td",null,"Name of the table that contain the row.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"schema_name"),(0,a.kt)("td",null,"STRING NOT NULL"),(0,a.kt)("td",null,"Name of the schema that contain the row.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"database_name"),(0,a.kt)("td",null,"STRING NOT NULL"),(0,a.kt)("td",null,"Name of the database that contain the row.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"op_ts"),(0,a.kt)("td",null,"TIMESTAMP_LTZ(3) NOT NULL"),(0,a.kt)("td",null,"It indicates the time that the change was made in the database. ",(0,a.kt)("br",null),"If the record is read from snapshot of the table instead of the change stream, the value is always 0.")))),(0,a.kt)("p",null,"\u6269\u5c55\u7684 CREATE TABLE \u793a\u4f8b\u6f14\u793a\u4e86\u516c\u5f00\u8fd9\u4e9b\u5143\u6570\u636e\u5b57\u6bb5\u7684\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE products (\n    db_name STRING METADATA FROM 'database_name' VIRTUAL,\n    schema_name STRING METADATA FROM 'schema_name' VIRTUAL, \n    table_name STRING METADATA  FROM 'table_name' VIRTUAL,\n    operation_ts TIMESTAMP_LTZ(3) METADATA FROM 'op_ts' VIRTUAL,\n    ID INT NOT NULL,\n    NAME STRING,\n    DESCRIPTION STRING,\n    WEIGHT DECIMAL(10, 3),\n    PRIMARY KEY(id) NOT ENFORCED\n) WITH (\n    'connector' = 'oracle-cdc',\n    'hostname' = 'localhost',\n    'port' = '1521',\n    'username' = 'flinkuser',\n    'password' = 'flinkpw',\n    'database-name' = 'XE',\n    'schema-name' = 'inventory',\n    'table-name' = 'products'\n);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1aOracle \u65b9\u8a00\u662f\u533a\u5206\u5927\u5c0f\u5199\u7684\uff0c\u5982\u679c\u5b57\u6bb5\u540d\u6ca1\u6709\u88ab\u5f15\u7528\uff0c\u5b83\u4f1a\u5c06\u5b57\u6bb5\u540d\u8f6c\u6362\u4e3a\u5927\u5199\uff0cFlink SQL \u4e0d\u4f1a\u8f6c\u6362\u5b57\u6bb5\u540d\u3002\u56e0\u6b64\u5bf9\u4e8e oracle \u6570\u636e\u5e93\u4e2d\u7684\u7269\u7406\u5217\uff0c\u6211\u4eec\u5728 Flink SQL \u4e2d\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"oracle-cdc")," \u8868\u65f6\u5e94\u8be5\u4f7f\u7528\u5176\u5728 Oracle \u4e2d\u8f6c\u6362\u540e\u7684\u5b57\u6bb5\u540d\u79f0\u3002"),(0,a.kt)("h2",{id:"\u7279\u5f81"},"\u7279\u5f81"),(0,a.kt)("h3",{id:"exactly-once-\u5904\u7406"},"Exactly-Once \u5904\u7406"),(0,a.kt)("p",null,"Oracle Extract \u8282\u70b9\u662f\u4e00\u4e2a Flink Source \u8fde\u63a5\u5668\uff0c\u5b83\u5c06\u9996\u5148\u8bfb\u53d6\u6570\u636e\u5e93\u5feb\u7167\uff0c\u7136\u540e\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"exactly-once \u5904\u7406"),"\u7ee7\u7eed\u8bfb\u53d6\u66f4\u6539\u4e8b\u4ef6\uff0c\u5373\u4f7f\u53d1\u751f\u6545\u969c\u3002\u8bf7\u9605\u8bfb ",(0,a.kt)("a",{parentName:"p",href:"https://debezium.io/documentation/reference/1.5/connectors/oracle.html#how-the-oracle-connector-works"},"\u8fde\u63a5\u5668\u7684\u5de5\u4f5c\u539f\u7406"),"\u3002"),(0,a.kt)("h3",{id:"\u542f\u52a8\u8bfb\u53d6\u4f4d\u7f6e"},"\u542f\u52a8\u8bfb\u53d6\u4f4d\u7f6e"),(0,a.kt)("a",{name:"startup-reading-position"}),(0,a.kt)("p",null,"\u914d\u7f6e\u9009\u9879 ",(0,a.kt)("inlineCode",{parentName:"p"},"scan.startup.mode")," \u6307\u5b9a Oracle Extract \u8282\u70b9\u6d88\u8d39\u8005\u7684\u542f\u52a8\u6a21\u5f0f\u3002\u6709\u6548\u7684\u679a\u4e3e\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"initial")," (\u9ed8\u8ba4): \u9996\u6b21\u542f\u52a8\u65f6\u5bf9\u88ab\u76d1\u63a7\u7684\u6570\u636e\u5e93\u8868\u8fdb\u884c\u521d\u59cb\u5feb\u7167\uff0c\u5e76\u7ee7\u7eed\u8bfb\u53d6\u6700\u65b0\u7684 Binlog\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"latest-offset"),": \u6c38\u8fdc\u4e0d\u8981\u5728\u7b2c\u4e00\u6b21\u542f\u52a8\u65f6\u5bf9\u53d7\u76d1\u63a7\u7684\u6570\u636e\u5e93\u8868\u6267\u884c\u5feb\u7167\uff0c\u53ea\u9700\u4ece\u81ea\u8fde\u63a5\u5668\u542f\u52a8\u4ee5\u6765\u7684\u66f4\u6539\u3002")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u6ce8\u610f: ",(0,a.kt)("inlineCode",{parentName:"em"},"scan.startup.mode")," \u9009\u9879\u7684\u673a\u5236\u4f9d\u8d56\u4e8e Debezium \u7684",(0,a.kt)("inlineCode",{parentName:"em"},"snapshot.mode")," \u914d\u7f6e\u3002\u6240\u4ee5\u8bf7\u4e0d\u8981\u4e00\u8d77\u4f7f\u7528\u5b83\u4eec\u3002\u5982\u679c\u60a8\u5728 DDL \u8868\u4e2d\u540c\u65f6\u6307\u5b9a\u4e86 ",(0,a.kt)("inlineCode",{parentName:"em"},"scan.startup.mode")," \u548c ",(0,a.kt)("inlineCode",{parentName:"em"},"debezium.snapshot.mode")," \u9009\u9879\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4 ",(0,a.kt)("inlineCode",{parentName:"em"},"scan.startup.mode")," \u4e0d\u8d77\u4f5c\u7528\u3002")),(0,a.kt)("h3",{id:"\u5355\u7ebf\u7a0b\u8bfb\u53d6"},"\u5355\u7ebf\u7a0b\u8bfb\u53d6"),(0,a.kt)("p",null,"Oracle Extract \u8282\u70b9\u4e0d\u80fd\u5e76\u884c\u8bfb\u53d6\uff0c\u56e0\u4e3a\u53ea\u6709\u4e00\u4e2a\u4efb\u52a1\u53ef\u4ee5\u63a5\u6536\u66f4\u6539\u4e8b\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,a.kt)("div",{class:"wy-table-responsive"},(0,a.kt)("table",{class:"colwidths-auto docutils"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{class:"text-left"},"Oracle type",(0,a.kt)("a",{href:"https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html"})),(0,a.kt)("th",{class:"text-left"},"Flink SQL type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"NUMBER(p, s <= 0), p - s < 3"),(0,a.kt)("td",null,"TINYINT")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"NUMBER(p, s <= 0), p - s < 5"),(0,a.kt)("td",null,"SMALLINT")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"NUMBER(p, s <= 0), p - s < 10"),(0,a.kt)("td",null,"INT")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"NUMBER(p, s <= 0), p - s < 19"),(0,a.kt)("td",null,"BIGINT")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"NUMBER(p, s <= 0), 19 <= p - s <= 38 ",(0,a.kt)("br",null)),(0,a.kt)("td",null,"DECIMAL(p - s, 0)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"NUMBER(p, s > 0)"),(0,a.kt)("td",null,"DECIMAL(p, s)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"NUMBER(p, s <= 0), p - s > 38"),(0,a.kt)("td",null,"STRING")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"FLOAT",(0,a.kt)("br",null),"BINARY_FLOAT"),(0,a.kt)("td",null,"FLOAT")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"DOUBLE PRECISION",(0,a.kt)("br",null),"BINARY_DOUBLE"),(0,a.kt)("td",null,"DOUBLE")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"NUMBER(1)"),(0,a.kt)("td",null,"BOOLEAN")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"DATE",(0,a.kt)("br",null),"TIMESTAMP [(p)]"),(0,a.kt)("td",null,"TIMESTAMP [(p)] [WITHOUT TIMEZONE]")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"TIMESTAMP [(p)] WITH TIME ZONE"),(0,a.kt)("td",null,"TIMESTAMP [(p)] WITH TIME ZONE")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"TIMESTAMP [(p)] WITH LOCAL TIME ZONE"),(0,a.kt)("td",null,"TIMESTAMP_LTZ [(p)]")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"CHAR(n)",(0,a.kt)("br",null),"NCHAR(n)",(0,a.kt)("br",null),"NVARCHAR2(n)",(0,a.kt)("br",null),"VARCHAR(n)",(0,a.kt)("br",null),"VARCHAR2(n)",(0,a.kt)("br",null),"CLOB",(0,a.kt)("br",null),"NCLOB",(0,a.kt)("br",null),"XMLType"),(0,a.kt)("td",null,"STRING")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"BLOB",(0,a.kt)("br",null),"ROWID"),(0,a.kt)("td",null,"BYTES")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"INTERVAL DAY TO SECOND",(0,a.kt)("br",null),"INTERVAL YEAR TO MONTH"),(0,a.kt)("td",null,"BIGINT"))))))}c.isMDXComponent=!0}}]);
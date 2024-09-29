"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[39815],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(58168),a=(r(96540),r(15680));const o={title:"Transform UDF extension",sidebar_position:3},s="Basic Concepts",i={unversionedId:"development/extension_transform/transform_udf",id:"development/extension_transform/transform_udf",title:"Transform UDF extension",description:"The following are some basic concepts that need to be understood during the development process:",source:"@site/docs/development/extension_transform/transform_udf.md",sourceDirName:"development/extension_transform",slug:"/development/extension_transform/transform_udf",permalink:"/docs/next/development/extension_transform/transform_udf",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/development/extension_transform/transform_udf.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Transform UDF extension",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Offline Sync Connector Extension",permalink:"/docs/next/development/extension_sort/offline_data_sync"},next:{title:"REST API",permalink:"/docs/next/development/api"}},c={},l=[{value:"Create Function Class File",id:"create-function-class-file",level:2},{value:"Basic Code Framework Construction",id:"basic-code-framework-construction",level:2},{value:"Add Constructor and ValueParser Object",id:"add-constructor-and-valueparser-object",level:2},{value:"Function Implement",id:"function-implement",level:2},{value:"Add Unit Test Code",id:"add-unit-test-code",level:2},{value:"Create Parser Class File",id:"create-parser-class-file",level:2},{value:"Basic Code Framework Construction",id:"basic-code-framework-construction-1",level:2},{value:"Add Constructor and Member Variables",id:"add-constructor-and-member-variables",level:2},{value:"Parsing Implement",id:"parsing-implement",level:2},{value:"Add Unit Test Code",id:"add-unit-test-code-1",level:2},{value:"Create Logical Operator Class File",id:"create-logical-operator-class-file",level:2},{value:"Basic Code Framework Construction",id:"basic-code-framework-construction-2",level:2},{value:"Add Constructor and Member Variables",id:"add-constructor-and-member-variables-1",level:2},{value:"Operator Implement",id:"operator-implement",level:2},{value:"Add Unit Test Code",id:"add-unit-test-code-2",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"basic-concepts"},"Basic Concepts"),(0,a.yg)("p",null,"The following are some basic concepts that need to be understood during the development process:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Transform SQL functions, including arithmetic functions (such as abs, power), time functions (such as localtime, date_format), string functions (such as locate, translate), etc. Functions generally have one or more parameters, and their function is to perform some transformation operation on the input data, and then output the transformed result."),(0,a.yg)("li",{parentName:"ul"},"Transform SQL parser, there are mainly two types of parsers, one is the parser class for type, which is used to convert the original data into the corresponding type object, such as DateParser can convert the input data into a Date object in Java, which is convenient for further conversion operations; The other is the parser class for calculation expressions, which is used to perform certain calculation operations on the converted original data and output the calculation result (similar to a function), such as AdditionParser can parse the part like a + b in SQL statements and output the corresponding result."),(0,a.yg)("li",{parentName:"ul"},"Transform SQL operators, mainly some logical operators, such as (and, or, not), etc., to implement some logical judgment operations, and the output result is a Boolean value.")),(0,a.yg)("h1",{id:"function-development"},"Function Development"),(0,a.yg)("p",null,"This section introduces how to expand a new function."),(0,a.yg)("h2",{id:"create-function-class-file"},"Create Function Class File"),(0,a.yg)("p",null,"The function implementation class is stored in this ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/function"},"directory"),". After determining the function you want to expand, create a new class in this directory, and the class name consists of function name + Function, such as AbsFunction."),(0,a.yg)("h2",{id:"basic-code-framework-construction"},"Basic Code Framework Construction"),(0,a.yg)("p",null,"After creating the class, build the basic framework of the code, taking AbsFunction as an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'/**\n * AbsFunction\n * description: abs(numeric)--returns the absolute value of numeric\n */\n@TransformFunction(names = {"abs"})\npublic class AbsFunction implements ValueParser {\n\n    @Override\n    public Object parse(SourceData sourceData, int rowIndex, Context context) {\n        \n    }\n}\n')),(0,a.yg)("p",null,"Add corresponding class comments and @TransformFunction annotation for the function. The function needs to implement the ValueParser interface and override the parse method in the interface."),(0,a.yg)("h2",{id:"add-constructor-and-valueparser-object"},"Add Constructor and ValueParser Object"),(0,a.yg)("p",null,"Add a parameterized constructor and related ValueParser member variables to the function. In the constructor, parse the function expression and initialize the parameter parser object. Taking AbsFunction as an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"private ValueParser numberParser;\n\npublic AbsFunction(Function expr) {\n    numberParser = OperatorTools.buildParser(expr.getParameters().getExpressions().get(0));\n}\n")),(0,a.yg)("p",null,"The number of ValueParser objects is the same as the number of function parameters."),(0,a.yg)("h2",{id:"function-implement"},"Function Implement"),(0,a.yg)("p",null,"Override the parse method, parse the parameters and implement the function logic, and calculate the function return value. Taking AbsFunction as an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"@Override\npublic Object parse(SourceData sourceData, int rowIndex, Context context) {\n    Object numberObj = numberParser.parse(sourceData, rowIndex, context);\n    BigDecimal numberValue = OperatorTools.parseBigDecimal(numberObj);\n    return numberValue.abs();\n}\n")),(0,a.yg)("h2",{id:"add-unit-test-code"},"Add Unit Test Code"),(0,a.yg)("p",null,"Each function needs to pass unit tests to verify whether the function logic is correct. The unit test class is located in this directory. All unit test functions for each function are placed in the same unit test class, and the unit test class is named in the format of Test + function name + Function, taking testAbsFunction() as an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void testAbsFunction() throws Exception {\n    String transformSql = "select abs(numeric1) from source";\n    TransformConfig config = new TransformConfig(transformSql);\n    // case1: |2|\n    TransformProcessor<String, String> processor = TransformProcessor\n            .create(config, SourceDecoderFactory.createCsvDecoder(csvSource),\n                    SinkEncoderFactory.createKvEncoder(kvSink));\n    List<String> output1 = processor.transform("2|4|6|8", new HashMap<>());\n    Assert.assertEquals(1, output1.size());\n    Assert.assertEquals(output1.get(0), "result=2");\n    // case2: |-4.25|\n    List<String> output2 = processor.transform("-4.25|4|6|8", new HashMap<>());\n    Assert.assertEquals(1, output2.size());\n    Assert.assertEquals(output2.get(0), "result=4.25");\n}\n')),(0,a.yg)("p",null,"After the above steps, congratulations on completing the implementation of a new function, and you can submit your code to the community. The complete code of AbsFunction can be seen at ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/function/AbsFunction.java"},"code link")),(0,a.yg)("p",null,"Here are some precautions:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Some function parameters can be NULL. Pay attention to the parsing logic for NULL objects in the parse function to prevent NullPointerException."),(0,a.yg)("li",{parentName:"ul"},"The function name in the @TransformFunction annotation can have multiple names, as long as it follows the naming conventions of various databases."),(0,a.yg)("li",{parentName:"ul"},"Some functions have a variable number of parameters. Be careful to prevent IndexOutOfBoundsException when constructing ValueParser."),(0,a.yg)("li",{parentName:"ul"},"Please cover as many situations as possible in unit tests, such as using different numbers of parameters, setting parameters to NULL, etc., to ensure that the function can output correct results under different circumstances.")),(0,a.yg)("h1",{id:"parser-development"},"Parser Development"),(0,a.yg)("p",null,"This section introduces how to expand a new parser class."),(0,a.yg)("h2",{id:"create-parser-class-file"},"Create Parser Class File"),(0,a.yg)("p",null,"Parsers are stored in this ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/parser"},"directory"),". After determining the parser you want to expand, create a new class in this directory, and the class name consists of type + Parser, such as AdditionParser."),(0,a.yg)("h2",{id:"basic-code-framework-construction-1"},"Basic Code Framework Construction"),(0,a.yg)("p",null,"After creating the class, build the basic framework of the code, taking AdditionParser as an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * description: calcute a + b\n */\n@TransformParser(values = Addition.class)\npublic class AdditionParser implements ValueParser {\n\n    @Override\n    public Object parse(SourceData sourceData, int rowIndex, Context context) {\n    }\n}\n")),(0,a.yg)("p",null,"Add the corresponding @TransformParser annotation to the parser class. Type parser classes need to implement the ValueParser interface and override the parse method in the interface."),(0,a.yg)("h2",{id:"add-constructor-and-member-variables"},"Add Constructor and Member Variables"),(0,a.yg)("p",null,"Add a parameterized constructor and related member variables to the parser class. In the constructor, parse the input expression and convert it into the corresponding type object. Taking AdditionParser as an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"    private final ValueParser left;\n\n    private final ValueParser right;\n\n    public AdditionParser(Addition expr) {\n        this.left = OperatorTools.buildParser(expr.getLeftExpression());\n        this.right = OperatorTools.buildParser(expr.getRightExpression());\n    }\n")),(0,a.yg)("h2",{id:"parsing-implement"},"Parsing Implement"),(0,a.yg)("p",null,"Override the parse method. If the parser needs to perform further processing on the type object parsed in the previous step, you can implement the corresponding processing logic in this method. Otherwise, just return the type object parsed in the previous step directly. Taking AdditionParser as an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public Object parse(SourceData sourceData, int rowIndex, Context context) {\n        if (this.left instanceof IntervalParser && this.right instanceof IntervalParser) {\n            return null;\n        } else if (this.left instanceof IntervalParser || this.right instanceof IntervalParser) {\n            IntervalParser intervalParser = null;\n            ValueParser dateParser = null;\n            if (this.left instanceof IntervalParser) {\n                intervalParser = (IntervalParser) this.left;\n                dateParser = this.right;\n            } else {\n                intervalParser = (IntervalParser) this.right;\n                dateParser = this.left;\n            }\n            Object intervalPairObj = intervalParser.parse(sourceData, rowIndex, context);\n            Object dateObj = dateParser.parse(sourceData, rowIndex, context);\n            if (intervalPairObj == null || dateObj == null) {\n                return null;\n            }\n            return DateUtil.dateAdd(OperatorTools.parseString(dateObj),\n                    (Pair<Integer, Map<ChronoField, Long>>) intervalPairObj, 1);\n        } else {\n            return numericalOperation(sourceData, rowIndex, context);\n        }\n    }\n")),(0,a.yg)("h2",{id:"add-unit-test-code-1"},"Add Unit Test Code"),(0,a.yg)("p",null,"Each parser class needs to pass unit tests to verify whether the logic is correct. The unit test class is located in this directory. All unit test functions for each parser are placed in the same unit test class, and the unit test class is named in the format of Test + Parser Name + Parser, taking TestAdditionParser as an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'    @Test\n    public void testAdditionParser() throws Exception {\n        String transformSql = null;\n        TransformConfig config = null;\n        TransformProcessor<String, String> processor = null;\n        List<String> output = null;\n\n        transformSql = "select numeric1 + numeric2 from source";\n        config = new TransformConfig(transformSql);\n        processor = TransformProcessor\n                .create(config, SourceDecoderFactory.createCsvDecoder(csvSource),\n                        SinkEncoderFactory.createKvEncoder(kvSink));\n        // case1: 1 + 10\n        output = processor.transform("1|10||||", new HashMap<>());\n        Assert.assertEquals(1, output.size());\n        Assert.assertEquals("result=11", output.get(0));\n    }\n')),(0,a.yg)("p",null,"After the above steps, congratulations on completing the implementation of a new parser class, and you can submit your code to the community. The complete code of AdditionParser can be seen at ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/parser/AdditionParser.java"},"code link")),(0,a.yg)("h1",{id:"logic-operator-development-specification"},"Logic Operator Development Specification"),(0,a.yg)("p",null,"This section introduces how to expand a new logical operator class."),(0,a.yg)("h2",{id:"create-logical-operator-class-file"},"Create Logical Operator Class File"),(0,a.yg)("p",null,"Logical operator classes are stored in this ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/operator"},"directory"),". After determining the logical operator you want to expand, create a new class in this directory, and the class name consists of logical operator name + Parser, such as AndOperator."),(0,a.yg)("h2",{id:"basic-code-framework-construction-2"},"Basic Code Framework Construction"),(0,a.yg)("p",null,"After creating the class, build the basic framework of the code, taking AndOperator as an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"@TransformOperator(values = AndExpression.class)\npublic class AndOperator implements ExpressionOperator {\n\n    @Override\n    public boolean check(SourceData sourceData, int rowIndex, Context context) {\n    \n    }\n\n}\n")),(0,a.yg)("p",null,"Add the corresponding @TransformOperator annotation to the logical operator class. The operator class needs to implement the ExpressionOperator interface and override the check method in the interface."),(0,a.yg)("h2",{id:"add-constructor-and-member-variables-1"},"Add Constructor and Member Variables"),(0,a.yg)("p",null,"Add a parameterized constructor and related member variables to the class. In the constructor, parse the input expression and construct the objects needed for the judgment logic in the check method. Taking AndOperator as an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"private final ExpressionOperator left;\nprivate final ExpressionOperator right;\n\npublic AndOperator(AndExpression expr) {\n    this.left = OperatorTools.buildOperator(expr.getLeftExpression());\n    this.right = OperatorTools.buildOperator(expr.getRightExpression());\n}\n")),(0,a.yg)("h2",{id:"operator-implement"},"Operator Implement"),(0,a.yg)("p",null,"Override the check method, implement the judgment logic according to the definition of the logical operator and the data parsed in the previous step, and output the judgment result (true or false). Taking AndOperator as an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"@Override\npublic boolean check(SourceData sourceData, int rowIndex, Context context) {\n    return OperatorTools.compareValue((Comparable) this.left.parse(sourceData, rowIndex, context),\n            (Comparable) this.right.parse(sourceData, rowIndex, context)) > 0;\n}\n")),(0,a.yg)("h2",{id:"add-unit-test-code-2"},"Add Unit Test Code"),(0,a.yg)("p",null,"Each logical operator class needs to pass unit tests to verify whether the logic is correct. The unit test class is located in this ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/tree/master/inlong-sdk/transform-sdk/src/test/java/org/apache/inlong/sdk/transform/process/operator"},"directory"),". All unit test functions for each logical operator are placed in the same unit test class, and the unit test class is named in the format of Test + Logical Operator Name + Operator, taking TestAndOperator as an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'    public void testAndOperator() throws Exception {\n        String transformSql = "select if((string2 < 4) and (numeric4 > 5),1,0) from source";\n        TransformConfig config = new TransformConfig(transformSql);\n        // case1: "3.14159265358979323846|3a|4|4"\n        TransformProcessor<String, String> processor = TransformProcessor\n                .create(config, SourceDecoderFactory.createCsvDecoder(csvSource),\n                        SinkEncoderFactory.createKvEncoder(kvSink));\n        List<String> output1 = processor.transform("3.14159265358979323846|3a|4|4");\n        Assert.assertEquals(1, output1.size());\n        Assert.assertEquals(output1.get(0), "result=0");\n        // case2: "3.14159265358979323846|5|4|8"\n        List<String> output2 = processor.transform("3.14159265358979323846|5|4|8");\n        Assert.assertEquals(1, output1.size());\n        Assert.assertEquals(output2.get(0), "result=0");\n        // case3: "3.14159265358979323846|3|4|8"\n        List<String> output3 = processor.transform("3.14159265358979323846|3|4|8");\n        Assert.assertEquals(1, output1.size());\n        Assert.assertEquals(output3.get(0), "result=1");\n\n        transformSql = "select if((numeric3 < 4) and (numeric4 > 5),1,0) from source";\n        config = new TransformConfig(transformSql);\n        // case4: "3.14159265358979323846|4|4|8"\n        processor = TransformProcessor\n                .create(config, SourceDecoderFactory.createCsvDecoder(csvSource),\n                        SinkEncoderFactory.createKvEncoder(kvSink));\n        List<String> output4 = processor.transform("3.14159265358979323846|4|4|8");\n        Assert.assertEquals(1, output1.size());\n        Assert.assertEquals(output4.get(0), "result=0");\n        // case5: "3.14159265358979323846|4|3.2|4"\n        List<String> output5 = processor.transform("3.14159265358979323846|4|3.2|4");\n        Assert.assertEquals(1, output1.size());\n        Assert.assertEquals(output5.get(0), "result=0");\n        // case6: "3.14159265358979323846|4|3.2|8"\n        List<String> output6 = processor.transform("3.14159265358979323846|4|3.2|8");\n        Assert.assertEquals(1, output1.size());\n        Assert.assertEquals(output6.get(0), "result=1");\n    }\n')),(0,a.yg)("p",null,"After the above steps, congratulations on completing the implementation of a new logical operator class, and you can submit your code to the community. The complete code of AndOperator can be seen at ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/inlong/blob/master/inlong-sdk/transform-sdk/src/main/java/org/apache/inlong/sdk/transform/process/operator/AndOperator.java"},"code link")))}d.isMDXComponent=!0}}]);
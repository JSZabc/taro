(window.webpackJsonp=window.webpackJsonp||[]).push([[988],{1044:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return o}));var a=n(2),b=n(6),p=(n(0),n(1721)),i={slug:"2019-03-12-mini-program-framework-full-review",title:"\u5c0f\u7a0b\u5e8f\u6846\u67b6\u5168\u9762\u6d4b\u8bc4",author:"yuche",author_url:"https://github.com/yuche",author_image_url:"https://static.geekbang.org/ck/5cb53de0e50c0.jpeg?imageView2/0/w/800"},r={permalink:"/taro/blog/2019-03-12-mini-program-framework-full-review",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2019-03-12-mini-program-framework-full-review.md",source:"@site/blog/2019-03-12-mini-program-framework-full-review.md",description:"image",date:"2019-03-12T00:00:00.000Z",tags:[],title:"\u5c0f\u7a0b\u5e8f\u6846\u67b6\u5168\u9762\u6d4b\u8bc4",readingTime:2.45,truncated:!0,prevItem:{title:"Taro 1.3 \u9707\u64bc\u5347\u7ea7\uff1a\u5168\u9762\u652f\u6301 JSX \u8bed\u6cd5\u548c HOOKS",permalink:"/taro/blog/2019-06-13-taro-1-3"},nextItem:{title:"\u51b3\u6218\u6027\u80fd\u4e4b\u5dc5 - Taro H5 \u8f6c\u6362\u4e0e\u4f18\u5316\u5347\u7ea7",permalink:"/taro/blog/2019-02-28-taro-h5-optimize"}},l=[{value:"\u591a\u7aef",id:"\u591a\u7aef",children:[]},{value:"\u751f\u6001",id:"\u751f\u6001",children:[]},{value:"\u672a\u6765",id:"\u672a\u6765",children:[]},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",children:[]}],c={rightToc:l};function o(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("img",Object(a.a)({parentName:"p"},{src:"https://storage.jd.com/taro-resource/review.jpg",alt:"image"}))),Object(p.b)("p",null,"\u6700\u8fd1\u524d\u7aef\u5c4a\u591a\u7aef\u6846\u67b6\u9891\u51fa\uff0c\u76f8\u4fe1\u5f88\u591a\u6709\u4ee3\u7801\u591a\u7aef\u8fd0\u884c\u9700\u6c42\u7684\u5f00\u53d1\u8005\u90fd\u4f1a\u4ea7\u751f\u4e00\u4e9b\u7591\u60d1\uff1a\u8fd9\u4e9b\u6846\u67b6\u90fd\u6709\u4ec0\u4e48\u4f18\u7f3a\u70b9\uff1f\u5230\u5e95\u5e94\u8be5\u7528\u54ea\u4e2a\uff1f"),Object(p.b)("p",null,"\u4f5c\u4e3a Taro \u5f00\u53d1\u56e2\u961f\u4e00\u5458\uff0c\u7b14\u8005\u60f3\u5728\u672c\u6587\u5c3d\u91cf\u7ad9\u5728\u4e00\u4e2a\u5ba2\u89c2\u516c\u6b63\u7684\u89d2\u5ea6\u53bb\u8bc4\u4ef7\u5404\u4e2a\u6846\u67b6\u7684\u9009\u578b\u548c\u4f18\u52a3\u3002\u4f46\u5ba5\u4e8e\u5229\u76ca\u76f8\u5173\uff0c\u672c\u6587\u7684\u89c2\u70b9\u5f88\u53ef\u80fd\u662f\u5e26\u6709\u504f\u5411\u6027\u7684\uff0c\u5927\u5bb6\u53ef\u4ee5\u5e26\u7740\u6279\u5224\u7684\u773c\u5149\u53bb\u770b\u5f85\uff0c\u6743\u5f53\u629b\u7816\u5f15\u7389\u3002"),Object(p.b)("p",null,"\u90a3\u4e48\uff0c\u5f53\u6211\u4eec\u5728\u8ba8\u8bba\u591a\u7aef\u6846\u67b6\u65f6\uff0c\u6211\u4eec\u5728\u8c08\u8bba\u4ec0\u4e48\uff1a"),Object(p.b)("h2",{id:"\u591a\u7aef"},"\u591a\u7aef"),Object(p.b)("p",null,"\u7b14\u8005\u4ee5\u4e3a\uff0c\u73b0\u5728\u6d41\u884c\u7684\u591a\u7aef\u6846\u67b6\u53ef\u4ee5\u5927\u81f4\u5206\u4e3a\u4e09\u7c7b\uff1a"),Object(p.b)("h4",{id:"1-\u5168\u5305\u578b"},"1. \u5168\u5305\u578b"),Object(p.b)("p",null,"\u8fd9\u7c7b\u6846\u67b6\u6700\u5927\u7684\u7279\u70b9\u5c31\u662f\u4ece\u5e95\u5c42\u7684\u6e32\u67d3\u5f15\u64ce\u3001\u5e03\u5c40\u5f15\u64ce\uff0c\u5230\u4e2d\u5c42\u7684 DSL\uff0c\u518d\u5230\u4e0a\u5c42\u7684\u6846\u67b6\u5168\u90e8\u7531\u81ea\u5df1\u5f00\u53d1\uff0c\u4ee3\u8868\u6846\u67b6\u662f Qt \u548c Flutter\u3002\u8fd9\u7c7b\u6846\u67b6\u4f18\u70b9\u975e\u5e38\u660e\u663e\uff1a\u6027\u80fd\uff08\u7684\u4e0a\u9650\uff09\u9ad8\uff1b\u5404\u5e73\u53f0\u6e32\u67d3\u7ed3\u679c\u4e00\u81f4\u3002\u7f3a\u70b9\u4e5f\u975e\u5e38\u660e\u663e\uff1a\u9700\u8981\u5b8c\u5168\u91cd\u65b0\u5b66\u4e60 DSL\uff08QML/Dart\uff09\uff0c\u4ee5\u53ca\u96be\u4ee5\u9002\u914d\u4e2d\u56fd\u7279\u8272\u7684\u7aef\uff1a\u5c0f\u7a0b\u5e8f\u3002"),Object(p.b)("p",null,"\u8fd9\u7c7b\u6846\u67b6\u662f\u6700\u539f\u59cb\u4e5f\u662f\u6700\u7eaf\u6b63\u7684\u7684\u591a\u7aef\u5f00\u53d1\u6846\u67b6\uff0c\u7531\u4e8e\u5e95\u5c42\u5230\u4e0a\u5c42\u6bcf\u4e2a\u73af\u8282\u90fd\u638c\u63e1\u5728\u81ea\u5df1\u624b\u91cc\uff0c\u4e5f\u80fd\u6700\u5927\u53ef\u80fd\u5730\u53bb\u4fdd\u8bc1\u5f00\u53d1\u548c\u8de8\u7aef\u4f53\u9a8c\u4e00\u81f4\u3002\u4f46\u5b83\u4eec\u7684\u6846\u67b6\u7814\u53d1\u6210\u672c\u5de8\u5927\uff0c\u6e32\u67d3\u5f15\u64ce\u3001\u5e03\u5c40\u5f15\u64ce\u3001DSL\u3001\u4e0a\u5c42\u6846\u67b6\u6bcf\u4e2a\u90e8\u5206\u90fd\u9700\u8981\u5927\u91cf\u4eba\u529b\u5f00\u53d1\u7ef4\u62a4\u3002"),Object(p.b)("h4",{id:"2-web-\u6280\u672f\u578b"},"2. Web \u6280\u672f\u578b"),Object(p.b)("p",null,"\u8fd9\u7c7b\u6846\u67b6\u628a Web \u6280\u672f\uff08JavaScript\uff0cCSS\uff09\u5e26\u5230\u79fb\u52a8\u5f00\u53d1\u4e2d\uff0c\u81ea\u7814\u5e03\u5c40\u5f15\u64ce\u5904\u7406 CSS\uff0c\u4f7f\u7528 JavaScript \u5199\u4e1a\u52a1\u903b\u8f91\uff0c\u4f7f\u7528\u6d41\u884c\u7684\u524d\u7aef\u6846\u67b6\u4f5c\u4e3a DSL\uff0c\u5404\u7aef\u5206\u522b\u4f7f\u7528\u5404\u81ea\u7684\u539f\u751f\u7ec4\u4ef6\u6e32\u67d3\u3002\u4ee3\u8868\u6846\u67b6\u662f React Native \u548c Weex\uff0c\u8fd9\u6837\u505a\u7684\u4f18\u70b9\u6709\uff1a"),Object(p.b)("ol",null,Object(p.b)("li",{parentName:"ol"},"\u5f00\u53d1\u8fc5\u901f"),Object(p.b)("li",{parentName:"ol"},"\u590d\u7528\u524d\u7aef\u751f\u6001"),Object(p.b)("li",{parentName:"ol"},"\u6613\u4e8e\u5b66\u4e60\u4e0a\u624b\uff0c\u4e0d\u7ba1\u524d\u7aef\u540e\u7aef\u79fb\u52a8\u7aef\uff0c\u591a\u591a\u5c11\u5c11\u90fd\u4f1a\u4e00\u70b9 JS\u3001CSS")),Object(p.b)("p",null,"\u7f3a\u70b9\u6709\uff1a"),Object(p.b)("ol",null,Object(p.b)("li",{parentName:"ol"},"\u4ea4\u4e92\u590d\u6742\u65f6\u96be\u4ee5\u5199\u51fa\u9ad8\u6027\u80fd\u7684\u4ee3\u7801\uff0c\u8fd9\u7c7b\u6846\u67b6\u7684\u8bbe\u8ba1\u5c31\u5fc5\u7136\u5bfc\u81f4 ",Object(p.b)("inlineCode",{parentName:"li"},"JS")," \u548c ",Object(p.b)("inlineCode",{parentName:"li"},"Native"),"  \u4e4b\u95f4\u9700\u8981\u901a\u4fe1\uff0c\u7c7b\u4f3c\u4e8e\u624b\u52bf\u64cd\u4f5c\u8fd9\u6837\u9891\u7e41\u5730\u89e6\u53d1\u901a\u4fe1\u5c31\u5f88\u53ef\u80fd\u4f7f\u5f97 UI \u65e0\u6cd5\u5728 16ms \u5185\u53ca\u65f6\u7ed8\u5236\u3002React Native \u6709\u4e00\u4e9b\u58f0\u660e\u5f0f\u7684\u7ec4\u4ef6\u53ef\u4ee5\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f46\u58f0\u660e\u5f0f\u7684\u5199\u6cd5\u5f88\u96be\u6ee1\u8db3\u590d\u6742\u4ea4\u4e92\u7684\u9700\u6c42\u3002"),Object(p.b)("li",{parentName:"ol"},"\u7531\u4e8e\u6ca1\u6709\u6e32\u67d3\u5f15\u64ce\uff0c\u4f7f\u7528\u5404\u7aef\u7684\u539f\u751f\u7ec4\u4ef6\u6e32\u67d3\uff0c\u76f8\u540c\u4ee3\u7801\u6e32\u67d3\u7684\u4e00\u81f4\u6027\u6ca1\u6709\u7b2c\u4e00\u79cd\u9ad8\u3002")),Object(p.b)("h4",{id:"3-javascript-\u7f16\u8bd1\u578b"},"3. JavaScript \u7f16\u8bd1\u578b"),Object(p.b)("p",null,"\u8fd9\u7c7b\u6846\u67b6\u5c31\u662f\u6211\u4eec\u8fd9\u7bc7\u6587\u7ae0\u7684\u4e3b\u89d2\u4eec\uff1a",Object(p.b)("inlineCode",{parentName:"p"},"Taro"),"\u3001",Object(p.b)("inlineCode",{parentName:"p"},"WePY")," \u3001",Object(p.b)("inlineCode",{parentName:"p"},"uni-app"),"  \u3001 ",Object(p.b)("inlineCode",{parentName:"p"},"mpvue")," \u3001 ",Object(p.b)("inlineCode",{parentName:"p"},"chameleon"),"\uff0c\u5b83\u4eec\u7684\u539f\u7406\u4e5f\u90fd\u5927\u540c\u5c0f\u5f02\uff1a\u5148\u4ee5 JavaScript \u4f5c\u4e3a\u57fa\u7840\u9009\u5b9a\u4e00\u4e2a DSL \u6846\u67b6\uff0c\u4ee5\u8fd9\u4e2a DSL \u6846\u67b6\u4e3a\u6807\u51c6\u5728\u5404\u7aef\u5206\u522b\u7f16\u8bd1\u4e3a\u4e0d\u540c\u7684\u4ee3\u7801\uff0c\u5404\u7aef\u5206\u522b\u6709\u4e00\u4e2a\u8fd0\u884c\u65f6\u6846\u67b6\u6216\u517c\u5bb9\u7ec4\u4ef6\u5e93\u4fdd\u8bc1\u4ee3\u7801\u6b63\u786e\u8fd0\u884c\u3002"),Object(p.b)("p",null,"\u8fd9\u7c7b\u6846\u67b6\u6700\u5927\u4f18\u70b9\u548c\u521b\u9020\u7684\u6700\u5927\u539f\u56e0\u5c31\u662f\u5c0f\u7a0b\u5e8f\uff0c\u56e0\u4e3a\u7b2c\u4e00\u7b2c\u4e8c\u79cd\u6846\u67b6\u5176\u5b9e\u9664\u4e86\u53ef\u4ee5\u8de8\u7cfb\u7edf\u5e73\u53f0\u4e4b\u5916\uff0c\u4e5f\u90fd\u80fd\u7f16\u8bd1\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u4e2d\u3002(Qt \u6709 Qt for WebAssembly, Flutter \u6709 Hummingbird\uff0cReact Native \u6709 ",Object(p.b)("inlineCode",{parentName:"p"},"react-native-web"),", Weex \u539f\u751f\u652f\u6301)"),Object(p.b)("p",null,"\u53e6\u5916\u4e00\u4e2a\u4f18\u70b9\u662f\u5728\u79fb\u52a8\u7aef\u4e00\u822c\u4f1a\u7f16\u8bd1\u5230 React Native/Weex\uff0c\u6240\u4ee5\u5b83\u4eec\u4e5f\u90fd\u62e5\u6709 Web \u6280\u672f\u578b\u6846\u67b6\u7684\u4f18\u70b9\u3002\u8fd9\u770b\u8d77\u6765\u5f88\u7f8e\u597d\uff0c\u4f46\u5b9e\u9645\u4e0a React Native/Weex \u7684\u7f3a\u70b9\u7f16\u8bd1\u578b\u6846\u67b6\u4e5f\u65e0\u6cd5\u907f\u514d\u3002\u9664\u6b64\u4e4b\u5916\uff0c",Object(p.b)("strong",{parentName:"p"},"\u7f16\u8bd1\u578b\u6846\u67b6\u7684\u62bd\u8c61\u4e5f\u4e0d\u662f\u514d\u8d39\u7684"),"\uff1a\u5f53 bug \u51fa\u73b0\u65f6\uff0c\u95ee\u9898\u7684\u6839\u6e90\u53ef\u80fd\u51fa\u5728\u8fd0\u884c\u65f6\u3001\u7f16\u8bd1\u65f6\u3001\u7ec4\u4ef6\u5e93\u4ee5\u53ca\u4e09\u8005\u4f9d\u8d56\u7684\u5e93\u7b49\u7b49\u5404\u4e2a\u65b9\u9762\u3002\u5728 Taro \u5f00\u6e90\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c31\u9047\u5230\u8fc7 Babel \u7684 bug\uff0cReact Native \u7684 bug\uff0cJavaScript \u5f15\u64ce\u7684 bug\uff0c\u5f53\u7136\u4e5f\u5c11\u4e0d\u4e86 Taro \u672c\u8eab\u7684 bug\u3002\u76f8\u4fe1\u5176\u5b83\u539f\u7406\u76f8\u540c\u7684\u6846\u67b6\u4e5f\u65e0\u6cd5\u907f\u514d\u8fd9\u4e00\u95ee\u9898\u3002"),Object(p.b)("p",null,"\u4f46\u8fd9\u5e76\u4e0d\u610f\u5473\u7740\u8fd9\u7c7b\u4e3a\u4e86\u5c0f\u7a0b\u5e8f\u800c\u8bbe\u8ba1\u7684\u591a\u7aef\u6846\u67b6\u5c31\u90fd\u4e0d\u582a\u5927\u7528\u3002\u9996\u5148\u73b0\u5728\u5404\u5de8\u5934\u8d85\u7ea7 App \u7684\u5c0f\u7a0b\u5e8f\u767e\u82b1\u9f50\u653e\uff0c\u6846\u67b6\u4f1a\u4e3a\u4e86\u62b9\u5e73\u5c0f\u7a0b\u5e8f\u505a\u4e86\u8bb8\u591a\u5de5\u4f5c\uff0c\u8fd9\u4e9b\u5de5\u4f5c\u5728\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u662f\u4e0d\u9700\u8981\u5f00\u53d1\u8005\u5173\u5fc3\u7684\u3002\u5176\u6b21\u662f\u8bb8\u591a\u4e1a\u52a1\u7c7b\u578b\u5e76\u4e0d\u9700\u8981\u590d\u6742\u7684\u903b\u8f91\u548c\u4ea4\u4e92\uff0c\u6ca1\u90a3\u4e48\u5bb9\u6613\u89e6\u53d1\u5230\u6846\u67b6\u5e95\u5c42\u4f9d\u8d56\u7684 bug\u3002"),Object(p.b)("p",null,"\u90a3\u4e48\u5f53\u4f60\u7684\u4e1a\u52a1\u9002\u5408\u9009\u62e9\u7f16\u8bd1\u578b\u6846\u67b6\u65f6\uff0c\u5728\u7b14\u8005\u770b\u6765\u9996\u5148\u8981\u8003\u8651\u7684\u5c31\u662f\u9009\u62e9 DSL \u7684\u8d77\u70b9\u3002\u56e0\u4e3a\u6709\u591a\u7aef\u9700\u6c42\u4e1a\u52a1\u901a\u5e38\u90fd\u5e0c\u671b\u80fd\u5feb\u901f\u5f00\u53d1\uff0c\u4e00\u4e2a\u80fd\u591f\u5feb\u901f\u9002\u5e94\u56e2\u961f\u5f00\u53d1\u8282\u594f\u7684 DSL \u5c31\u81f3\u5173\u91cd\u8981\u3002\u4e0d\u7ba1\u662f React \u8fd8\u662f Vue\uff08\u6216\u8005\u7c7b Vue\uff09\u90fd\u6709\u5b83\u4eec\u7684\u4f18\u7f3a\u70b9\uff0c\u5927\u5bb6\u53ef\u4ee5\u6839\u636e\u56e2\u961f\u6280\u672f\u6808\u548c\u504f\u597d\u81ea\u884c\u9009\u62e9\u3002"),Object(p.b)("p",null,"\u5982\u679c\u4e0d\u7ba1\u4ec0\u4e48 DSL \u90fd\u80fd\u63a5\u53d7\uff0c\u90a3\u5c31\u53ef\u4ee5\u8fdb\u5165\u4e0b\u4e00\u4e2a\u73af\u8282\uff1a"),Object(p.b)("h2",{id:"\u751f\u6001"},"\u751f\u6001"),Object(p.b)("p",null,"\u4ee5\u4e0b\u5185\u5bb9\u5747\u4ee5\u5404\u6846\u67b6\u73b0\u5728\uff082019 \u5e74 3 \u6708 11\u65e5\uff09\u5df2\u53d1\u5e03\u7a33\u5b9a\u7248\u4e3a\u6807\u51c6\u8fdb\u884c\u8ba8\u8bba\u3002"),Object(p.b)("h4",{id:"\u5f00\u53d1\u5de5\u5177"},"\u5f00\u53d1\u5de5\u5177"),Object(p.b)("p",null,"\u5c31\u5f00\u53d1\u5de5\u5177\u800c\u8a00 ",Object(p.b)("inlineCode",{parentName:"p"},"uni-app")," \u5e94\u8be5\u662f\u4e00\u9a91\u7edd\u5c18\uff0c\u5b83\u7684\u6587\u6863\u5185\u5bb9\u6700\u4e3a\u7fd4\u5b9e\u4e30\u5bcc\uff0c\u8fd8\u81ea\u5e26\u4e86 IDE \u56fe\u5f62\u5316\u5f00\u53d1\u5de5\u5177\uff0c\u9f20\u6807\u70b9\u70b9\u70b9\u5c31\u80fd\u7f16\u8bd1\u6d4b\u8bd5\u53d1\u5e03\u3002"),Object(p.b)("p",null,"\u5176\u5b83\u7684\u6846\u67b6\u90fd\u662f\u4f7f\u7528 CLI \u547d\u4ee4\u884c\u5de5\u5177\uff0c\u4f46\u503c\u5f97\u6ce8\u610f\u7684\u662f ",Object(p.b)("inlineCode",{parentName:"p"},"chameleon"),"  \u6709\u72ec\u7acb\u7684\u8bed\u6cd5\u68c0\u67e5\u5de5\u5177\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"Taro")," \u5219\u5355\u72ec\u5199\u4e86 ESLint \u89c4\u5219\u548c\u89c4\u5219\u96c6\u3002"),Object(p.b)("p",null,"\u5728\u8bed\u6cd5\u652f\u6301\u65b9\u9762\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"mpvue"),"\u3001",Object(p.b)("inlineCode",{parentName:"p"},"uni-app"),"\u3001",Object(p.b)("inlineCode",{parentName:"p"},"Taro")," \u3001",Object(p.b)("inlineCode",{parentName:"p"},"WePY")," \u5747\u652f\u6301 TypeScript\uff0c\u56db\u8005\u4e5f\u90fd\u80fd\u901a\u8fc7 ",Object(p.b)("inlineCode",{parentName:"p"},"typing")," \u5b9e\u73b0\u7f16\u8f91\u5668\u81ea\u52a8\u8865\u5168\u3002\u9664\u4e86 API \u8865\u5168\u4e4b\u5916\uff0c\u5f97\u76ca\u4e8e TypeScript \u5bf9\u4e8e JSX \u7684\u826f\u597d\u652f\u6301\uff0cTaro \u4e5f\u80fd\u5bf9\u7ec4\u4ef6\u8fdb\u884c\u81ea\u52a8\u8865\u5168\u3002"),Object(p.b)("p",null,"CSS \u65b9\u9762\uff0c\u6240\u6709\u6846\u67b6\u5747\u652f\u6301 ",Object(p.b)("inlineCode",{parentName:"p"},"SASS"),"\u3001",Object(p.b)("inlineCode",{parentName:"p"},"LESS"),"\u3001",Object(p.b)("inlineCode",{parentName:"p"},"Stylus"),"\uff0cTaro \u5219\u591a\u4e00\u4e2a ",Object(p.b)("inlineCode",{parentName:"p"},"CSS Modules")," \u7684\u652f\u6301\u3002"),Object(p.b)("p",null,"\u6240\u4ee5\u8fd9\u4e00\u8f6e\u6bd4\u62fc\u7684\u7ed3\u679c\u5e94\u8be5\u662f\uff1a"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"uni-app"),"  > ",Object(p.b)("inlineCode",{parentName:"p"},"Taro")," >  ",Object(p.b)("inlineCode",{parentName:"p"},"chameleon"),"  > ",Object(p.b)("inlineCode",{parentName:"p"},"WePY"),"\u3001",Object(p.b)("inlineCode",{parentName:"p"},"mpvue")),Object(p.b)("p",null," ",Object(p.b)("img",Object(a.a)({parentName:"p"},{src:"https://storage.jd.com/taro-resource/develop_tools.png",alt:"\u5f00\u53d1\u5de5\u5177"}))),Object(p.b)("h4",{id:"\u591a\u7aef\u652f\u6301\u5ea6"},"\u591a\u7aef\u652f\u6301\u5ea6"),Object(p.b)("p",null,"\u53ea\u4ece\u652f\u6301\u7aef\u7684\u6570\u91cf\u6765\u770b\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"Taro")," \u548c ",Object(p.b)("inlineCode",{parentName:"p"},"uni-app")," \u4ee5\u516d\u7aef\u7565\u5fae\u9886\u5148\uff08\u79fb\u52a8\u7aef\u3001H5\u3001\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3001\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u3001\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u3001\u5934\u6761\u5c0f\u7a0b\u5e8f\uff09\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"chameleon ")," \u5c11\u4e86\u5934\u6761\u5c0f\u7a0b\u5e8f\u7d27\u968f\u5176\u540e\u3002"),Object(p.b)("p",null,"\u4f46\u503c\u5f97\u4e00\u63d0\u7684\u662f ",Object(p.b)("inlineCode",{parentName:"p"},"chameleon")," \u6709\u4e00\u5957\u81ea\u7814",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"//cmljs.org/doc/framework/polymorphism/intro.html"}),"\u591a\u6001\u534f\u8bae"),"\uff0c\u7f16\u5199\u591a\u7aef\u4ee3\u7801\u7684\u4f53\u9a8c\u4f1a\u597d\u8bb8\u591a\uff0c\u53ef\u4ee5\u8bf4\u662f\u4e00\u4e2a\u80fd\u6233\u5230\u591a\u7aef\u5f00\u53d1\u75db\u70b9\u7684\u529f\u80fd\u3002",Object(p.b)("inlineCode",{parentName:"p"},"uni-app")," \u5219\u6709\u4e00\u5957\u72ec\u7acb\u7684",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"://uniapp.dcloud.io/platform"}),"\u6761\u4ef6\u7f16\u8bd1\u8bed\u6cd5"),"\uff0c\u8fd9\u5957\u8bed\u6cd5\u80fd\u540c\u65f6\u4f5c\u7528\u4e8e ",Object(p.b)("inlineCode",{parentName:"p"},"js"),"\u3001\u6837\u5f0f\u548c\u6a21\u677f\u6587\u4ef6\u3002",Object(p.b)("inlineCode",{parentName:"p"},"Taro")," \u53ef\u4ee5\u5728\u4e1a\u52a1\u903b\u8f91\u4e2d\u6839\u636e\u73af\u5883\u53d8\u91cf\u4f7f\u7528\u6761\u4ef6\u7f16\u8bd1\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://nervjs.github.io/taro/docs/envs.html"}),"\u6761\u4ef6\u7f16\u8bd1\u6587\u4ef6"),"\uff08\u7c7b\u4f3c React Native \u7684\u65b9\u5f0f\uff09\u3002"),Object(p.b)("p",null,"\u5728\u79fb\u52a8\u7aef\u65b9\u9762\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"uni-app")," \u57fa\u4e8e ",Object(p.b)("inlineCode",{parentName:"p"},"weex")," \u5b9a\u5236\u4e86\u4e00\u5957 ",Object(p.b)("inlineCode",{parentName:"p"},"nvue")," \u65b9\u6848 \u5f25\u8865 ",Object(p.b)("inlineCode",{parentName:"p"},"weex")," API \u7684\u4e0d\u8db3\uff1b",Object(p.b)("inlineCode",{parentName:"p"},"Taro")," \u5219\u662f\u6682\u65f6\u57fa\u4e8e ",Object(p.b)("inlineCode",{parentName:"p"},"expo")," \u8fbe\u5230\u540c\u6837\u7684\u6548\u679c\uff1b",Object(p.b)("inlineCode",{parentName:"p"},"chameleon")," \u5728\u79fb\u52a8\u7aef\u5219\u6709\u4e00\u5957 SDK \u914d\u5408\u591a\u7aef\u534f\u8bae\u4e0e\u539f\u751f\u8bed\u8a00\u901a\u4fe1\u3002"),Object(p.b)("p",null,"H5 \u65b9\u9762\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"chameleon")," \u540c\u6837\u662f\u7531\u591a\u6001\u534f\u8bae\u5b9e\u73b0\u652f\u6301\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"uni-app")," \u548c ",Object(p.b)("inlineCode",{parentName:"p"},"Taro")," \u5219\u662f\u90fd\u5728 H5 \u5b9e\u73b0\u4e86\u4e00\u5957\u517c\u5bb9\u7684\u7ec4\u4ef6\u5e93\u548c API\u3002"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"mpvue")," \u548c ",Object(p.b)("inlineCode",{parentName:"p"},"WePY"),"  \u90fd\u63d0\u4f9b\u4e86\u8f6c\u6362\u5404\u7aef\u5c0f\u7a0b\u5e8f\u7684\u529f\u80fd\uff0c\u4f46\u90fd\u6ca1\u6709 h5 \u548c\u79fb\u52a8\u7aef\u7684\u652f\u6301\u3002"),Object(p.b)("p",null,"\u6240\u4ee5\u6700\u540e\u4e00\u8f6e\u5bf9\u6bd4\u7684\u7ed3\u679c\u662f\uff1a"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"chameleon")," > ",Object(p.b)("inlineCode",{parentName:"p"},"Taro"),"\u3001",Object(p.b)("inlineCode",{parentName:"p"},"uni-app")," > ",Object(p.b)("inlineCode",{parentName:"p"},"mpvue")," > ",Object(p.b)("inlineCode",{parentName:"p"},"WePY")),Object(p.b)("p",null,Object(p.b)("img",Object(a.a)({parentName:"p"},{src:"https://storage.jd.com/taro-resource/duoduan.png",alt:"\u591a\u7aef\u652f\u6301"}))),Object(p.b)("h4",{id:"\u7ec4\u4ef6\u5e93\u5de5\u5177\u5e93demo"},"\u7ec4\u4ef6\u5e93/\u5de5\u5177\u5e93/demo"),Object(p.b)("p",null,"\u4f5c\u4e3a\u5f00\u6e90\u65f6\u95f4\u6700\u957f\u7684\u6846\u67b6\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"WePY")," \u4e0d\u7ba1\u4ece Demo\uff0c\u7ec4\u4ef6\u5e93\u6570\u91cf \uff0c\u5de5\u5177\u5e93\u6765\u770b\u90fd\u5360\u6709\u4e00\u5b9a\u4f18\u52bf\u3002"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"uni-app")," \u5219\u6709\u81ea\u5df1\u7684\u63d2\u4ef6\u5e02\u573a\u548c UI \u5e93\uff0c\u5982\u679c\u7b97\u4e0a\u6536\u8d39\u7684\u6846\u67b6\u548c\u63d2\u4ef6\u6bd4\u8d77 ",Object(p.b)("inlineCode",{parentName:"p"},"WePy")," \u4e5f\u662f\u5b8c\u5168\u4e0d\u9051\u591a\u8ba9\u7684\u3002"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"Taro ")," \u4e5f\u6709\u5b98\u65b9\u7ef4\u62a4\u7684\u8de8\u7aef UI \u5e93 ",Object(p.b)("inlineCode",{parentName:"p"},"taro-ui")," \uff0c\u53e6\u5916\u5728\u72b6\u6001\u7ba1\u7406\u5de5\u5177\u4e0a\u4e5f\u6709\u975e\u5e38\u4e30\u5bcc\u7684\u9009\u62e9\uff08Redux\u3001MobX\u3001dva\uff09\uff0c\u4f46 demo \u7684\u6570\u91cf\u4e0d\u5982\u524d\u4e24\u4e2a\u3002\u4f46 ",Object(p.b)("inlineCode",{parentName:"p"},"Taro")," \u6709\u4e00\u4e2a\u8f6c\u6362\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4ee3\u7801\u4e3a Taro \u4ee3\u7801\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5f25\u8865\u8fd9\u4e00\u95ee\u9898\u3002"),Object(p.b)("p",null,"\u800c ",Object(p.b)("inlineCode",{parentName:"p"},"mpvue")," \u6ca1\u6709\u5b98\u65b9\u7ef4\u62a4\u7684 UI \u5e93\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"chameleon")," \u7b2c\u4e09\u65b9\u7684 demo \u548c\u5de5\u5177\u5e93\u4e5f\u8fd8\u57fa\u672c\u6ca1\u6709\u3002"),Object(p.b)("p",null,"\u6240\u4ee5\u8fd9\u8f6e\u7684\u6392\u5e8f\u662f\uff1a"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"WePY"),"  > ",Object(p.b)("inlineCode",{parentName:"p"},"uni-app")," \u3001",Object(p.b)("inlineCode",{parentName:"p"},"taro")," > ",Object(p.b)("inlineCode",{parentName:"p"},"mpvue")," > ",Object(p.b)("inlineCode",{parentName:"p"},"chameleon")),Object(p.b)("p",null,Object(p.b)("img",Object(a.a)({parentName:"p"},{src:"https://storage.jd.com/taro-resource/component.png",alt:"\u7ec4\u4ef6\u5e93/\u5de5\u5177\u5e93/demo"}))),Object(p.b)("h4",{id:"\u63a5\u5165\u6210\u672c"},"\u63a5\u5165\u6210\u672c"),Object(p.b)("p",null,"\u63a5\u5165\u6210\u672c\u6709\u4e24\u4e2a\u65b9\u9762\uff1a"),Object(p.b)("p",null,"\u7b2c\u4e00\u662f\u6846\u67b6\u63a5\u5165\u539f\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u751f\u6001\u3002\u7531\u4e8e\u76ee\u524d\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5df2\u5448\u4e00\u5bb6\u72ec\u5927\u4e4b\u52bf\uff0c\u5f00\u6e90\u7684\u7ec4\u4ef6\u548c\u5e93\uff08\u4f8b\u5982 ",Object(p.b)("inlineCode",{parentName:"p"},"wxparse"),"\u3001",Object(p.b)("inlineCode",{parentName:"p"},"echart"),"\u3001",Object(p.b)("inlineCode",{parentName:"p"},"zan-ui"),"  \u7b49\uff09\u591a\u662f\u57fa\u4e8e\u539f\u751f\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u6846\u67b6\u8bed\u6cd5\u5199\u6210\u7684\u3002\u76ee\u524d\u770b\u6765 ",Object(p.b)("inlineCode",{parentName:"p"},"uni-app")," \u3001",Object(p.b)("inlineCode",{parentName:"p"},"Taro"),"\u3001",Object(p.b)("inlineCode",{parentName:"p"},"mpvue")," \u5747\u6709\u6587\u6863\u6216 demo \u5728\u6846\u67b6\u4e2d\u76f4\u63a5\u4f7f\u7528\u539f\u751f\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6/\u5e93\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"WePY")," \u7531\u4e8e\u8fd0\u884c\u673a\u5236\u7684\u95ee\u9898\uff0c\u5f88\u591a\u60c5\u51b5\u9700\u8981\u5c0f\u6539\u4e00\u4e0b\u76ee\u6807\u5e93\u7684\u6e90\u7801\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"chameleon")," \u5219\u662f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u6309\u6b65\u9aa4\u5927\u6539\u76ee\u6807\u5e93\u6e90\u7801\u7684\u8fc1\u79fb\u65b9\u5f0f\u3002"),Object(p.b)("p",null,"\u7b2c\u4e8c\u662f\u539f\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u9879\u76ee\u90e8\u5206\u63a5\u5165\u6846\u67b6\u91cd\u6784\u3002\u5728\u8fd9\u4e2a\u65b9\u9762 Taro \u5728\u4eac\u4e1c\u8d2d\u7269\u5c0f\u7a0b\u5e8f\u4e0a\u8fdb\u884c\u4e86\u5927\u80c6\u7684\u5b9e\u8df5\uff0c\u5177\u4f53\u53ef\u4ee5\u67e5\u770b\u6587\u7ae0",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"//aotu.io/notes/2018/09/11/taro-in-jd/"}),"\u300aTaro \u5728\u4eac\u4e1c\u8d2d\u7269\u5c0f\u7a0b\u5e8f\u4e0a\u7684\u5b9e\u8df5\u300b"),"\u3002\u5176\u5b83\u6846\u67b6\u5219\u6ca1\u6709\u63d0\u5230\u76f8\u5173\u5185\u5bb9\u3002"),Object(p.b)("p",null,"\u800c\u5bf9\u4e8e\u4e24\u79cd\u63a5\u5165\u65b9\u5f0f Taro \u90fd\u63d0\u4f9b\u4e86 ",Object(p.b)("inlineCode",{parentName:"p"},"taro convert")," \u529f\u80fd\uff0c\u65e2\u53ef\u4ee5\u5c06\u539f\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u9879\u76ee\u8f6c\u6362\u4e3a Taro \u591a\u7aef\u4ee3\u7801\uff0c\u4e5f\u53ef\u4ee5\u5c06\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u751f\u6001\u7684\u7ec4\u4ef6\u8f6c\u6362\u4e3a Taro \u7ec4\u4ef6\u3002"),Object(p.b)("p",null,"\u6240\u4ee5\u8fd9\u8f6e\u7684\u6392\u5e8f\u662f\uff1a"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"Taro")," >  ",Object(p.b)("inlineCode",{parentName:"p"},"mpvue")," \u3001 ",Object(p.b)("inlineCode",{parentName:"p"},"uni-app"),"  > ",Object(p.b)("inlineCode",{parentName:"p"},"WePY")," >  ",Object(p.b)("inlineCode",{parentName:"p"},"chameleon"),"  "),Object(p.b)("h4",{id:"\u6d41\u884c\u5ea6"},"\u6d41\u884c\u5ea6"),Object(p.b)("p",null,"\u4ece GitHub \u7684 star \u6765\u770b\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"mpvue")," \u3001",Object(p.b)("inlineCode",{parentName:"p"},"Taro"),"\u3001",Object(p.b)("inlineCode",{parentName:"p"},"WePY")," \u7684\u5dee\u8ddd\u975e\u5e38\u5c0f\u3002\u4ece NPM \u548c CNPM \u7684 CLI \u5de5\u5177\u4e0b\u8f7d\u91cf\u6765\u770b\uff0c\u662f Taro\uff083k/week\uff09> mpvue (2k/w) > WePY (1k/w)\u3002\u4f46\u53d1\u5e03\u65f6\u95f4\u4e5f\u521a\u597d\u53cd\u8fc7\u6765\u3002\u7b14\u8005\u4f30\u8ba1\u4e09\u5bb6\u7684\u6d41\u884c\u7a0b\u5ea6\u548c\u6848\u4f8b\u90fd\u5dee\u4e0d\u592a\u591a\u3002"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"uni-app")," \u5219\u53f7\u79f0\u6709\u4e0a\u4e07\u6848\u4f8b\uff0c\u4f46\u4e0d\u50cf\u5176\u5b83\u6846\u67b6\u4e00\u6837\u6709\u4e00\u4e9b\u5927\u5382\u5e94\u7528\u6848\u4f8b\u3002\u53e6\u5916\u4ece\u5f00\u53d1\u8005\u7684\u6570\u91cf\u6765\u770b\u4e5f\u662f ",Object(p.b)("inlineCode",{parentName:"p"},"uni-app")," \u9886\u5148\uff0c\u5b83\u62e5\u6709 20+ \u4e2a QQ \u4ea4\u6d41\u7fa4\uff08\u6700\u5927\u4eba\u6570 2000\uff09\u3002"),Object(p.b)("p",null,"\u6240\u4ee5\u4ece\u6d41\u884c\u7a0b\u5ea6\u6765\u770b\u5e94\u8be5\u662f\uff1a"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"uni-app")," > ",Object(p.b)("inlineCode",{parentName:"p"},"Taro"),"\u3001",Object(p.b)("inlineCode",{parentName:"p"},"WePY"),"\u3001",Object(p.b)("inlineCode",{parentName:"p"},"mpvue")," > ",Object(p.b)("inlineCode",{parentName:"p"},"chameleon")),Object(p.b)("p",null,Object(p.b)("img",Object(a.a)({parentName:"p"},{src:"https://storage.jd.com/taro-resource/popluar.png",alt:"\u6d41\u884c\u5ea6"}))),Object(p.b)("h4",{id:"\u5f00\u6e90\u5efa\u8bbe"},"\u5f00\u6e90\u5efa\u8bbe"),Object(p.b)("p",null,"\u4e00\u4e2a\u5f00\u6e90\u4f5c\u54c1\u80fd\u8d70\u591a\u8fdc\u662f\u7531\u6846\u67b6\u7ef4\u62a4\u56e2\u961f\u548c\u7b2c\u4e09\u65b9\u5f00\u53d1\u8005\u5171\u540c\u51b3\u5b9a\u7684\u3002\u867d\u7136\u5f00\u6e90\u5efa\u8bbe\u4e0d\u80fd\u5177\u4f53\u5730\u91cf\u5316\uff0c\u4f46\u4f9d\u7136\u662f\u8861\u91cf\u4e00\u4e2a\u6846\u67b6/\u5e93\u751f\u547d\u529b\u7684\u975e\u5e38\u91cd\u8981\u7684\u6807\u51c6\u3002"),Object(p.b)("p",null,"\u4ece\u7b2c\u4e09\u65b9\u8d21\u732e\u8005\u6570\u91cf\u6765\u770b\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"Taro")," \u5728\u8fd9\u4e00\u65b9\u9762\u9886\u5148\uff0c\u5e76\u4e14 ",Object(p.b)("inlineCode",{parentName:"p"},"Taro")," \u7684\u4e00\u4e9b\u6838\u5fc3\u5305/\u529f\u80fd\uff08MobX\u3001CSS Modules\u3001alias\uff09\u4e5f\u662f\u7531\u7b2c\u4e09\u65b9\u5f00\u53d1\u8005\u8d21\u732e\u7684\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u817e\u8baf\u5f00\u6e90\u7684 ",Object(p.b)("inlineCode",{parentName:"p"},"omi")," \u6846\u67b6\u5c0f\u7a0b\u5e8f\u90e8\u5206\u4e5f\u662f\u57fa\u4e8e Taro \u5b8c\u6210\u7684\u3002"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"WePY")," \u5728\u817e\u8baf\u5f00\u6e90\u8ba1\u5212\u7684\u52a0\u6301\u4e0b\u5728\u8fd9\u4e00\u65b9\u9762\u4e5f\u6709\u4e0d\u9519\u7684\u8868\u73b0\uff1b",Object(p.b)("inlineCode",{parentName:"p"},"mpvue")," \u7531\u4e8e\u505c\u6ede\u5f00\u53d1\u4e86\u5f88\u4e45\u5c31\u6bd4\u8f83\u843d\u540e\u4e86\uff1b\u53ef\u80fd\u662f\u4ea7\u54c1\u7b56\u7565\u7684\u539f\u56e0\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"uni-app")," \u5728\u5f00\u6e90\u5efa\u8bbe\u4e0a\u5e76\u4e0d\u70ed\u5fc3\uff0c\u751a\u81f3\u6709\u4e9b\u90e8\u5206\u4ee3\u7801\u90fd\u6ca1\u6709\u5f00\u6e90\uff1b",Object(p.b)("inlineCode",{parentName:"p"},"chameleon")," \u521a\u521a\u5f00\u6e90\u4e0d\u4e45\uff0c\u4f46\u5b83\u7684\u4ee3\u7801\u548c\u6d4b\u8bd5\u7528\u4f8b\u90fd\u975e\u5e38\u89c4\u8303\uff0c\u4ee5\u540e\u6216\u8bb8\u4f1a\u6709\u4e0d\u9519\u7684\u8868\u73b0\u3002"),Object(p.b)("p",null,"\u90a3\u4e48\u8fd9\u4e00\u8f6e\u7684\u5bf9\u6bd4\u7ed3\u679c\u662f\uff1a"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"Taro")," > ",Object(p.b)("inlineCode",{parentName:"p"},"WePY")," > ",Object(p.b)("inlineCode",{parentName:"p"},"mpvue")," > ",Object(p.b)("inlineCode",{parentName:"p"},"chameleon"),"  > ",Object(p.b)("inlineCode",{parentName:"p"},"uni-app")),Object(p.b)("p",null,"\u6700\u540e\u8865\u4e00\u4e2a\u603b\u7684\u751f\u6001\u5bf9\u6bd4\u56fe\u8868\uff1a"),Object(p.b)("p",null,Object(p.b)("img",Object(a.a)({parentName:"p"},{src:"https://storage.jd.com/taro-resource/all.png",alt:"\u603b\u8868"}))),Object(p.b)("h2",{id:"\u672a\u6765"},"\u672a\u6765"),Object(p.b)("p",null,"\u4ece\u5404\u6846\u67b6\u5df2\u7ecf\u516c\u5e03\u7684\u89c4\u5212\u6765\u770b\uff1a"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"WePY"),"  \u5df2\u7ecf\u53d1\u5e03\u4e86 ",Object(p.b)("inlineCode",{parentName:"p"},"v2.0.alpha"),"  \u7248\u672c\uff0c\u867d\u7136\u6ca1\u6709\u516c\u5f00\u7684\u6587\u6863\u53ef\u4ee5\u67e5\u9605\u5230 ",Object(p.b)("inlineCode",{parentName:"p"},"2.0")," \u7248\u672c\u6709\u4ec0\u4e48\u65b0\u529f\u80fd/\u7279\u6027\uff0c\u4f46\u636e\u5176\u4f5c\u8005\u4ecb\u7ecd\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"WePY 2.0"),"  \u4f1a\u653e\u5927\u62db\uff0c\u662f\u4e00\u4e2a\u300c\u5bf9\u5f97\u8d77\u5f00\u53d1\u8005\u300d\u7684\u7248\u672c\u3002\u7b14\u8005\u4e5f\u975e\u5e38\u671f\u5f85 2.0 \u6b63\u5f0f\u53d1\u5e03\u540e ",Object(p.b)("inlineCode",{parentName:"p"},"WePY")," \u7684\u8868\u73b0\u3002"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"mpvue")," \u5df2\u7ecf\u53d1\u5e03\u4e86 ",Object(p.b)("inlineCode",{parentName:"p"},"2.0")," \u7684\u7248\u672c\uff0c\u4e3b\u8981\u662f\u66f4\u65b0\u4e86\u5176\u5b83\u7aef\u5c0f\u7a0b\u5e8f\u7684\u652f\u6301\u3002\u4f46\u4ece\u4ee3\u7801\u63d0\u4ea4\uff0c issue \u7684\u56de\u590d/\u89e3\u51b3\u7387\u6765\u770b\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"mpvue")," \u8981\u60f3\u5728\u672a\u6765\u6709\u4f5c\u4e3a\u9996\u5148\u8981\u6253\u6d88\u793e\u533a\u5bf9\u4e8e ",Object(p.b)("inlineCode",{parentName:"p"},"mpvue")," \u4e0d\u7ba1\u4e0d\u987e\u4e0d\u66f4\u65b0\u7684\u8d28\u7591\u3002"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"uni-app")," \u5df2\u7ecf\u5728\u751f\u6001\u4e0a\u5efa\u8bbe\u5f97\u5f88\u597d\u4e86\uff0c\u5e94\u8be5\u4f1a\u5728\u6b64\u57fa\u7840\u4e4b\u4e0a\u7ee7\u7eed\u7a33\u6b65\u53d1\u5c55\u3002\u5982\u679c ",Object(p.b)("inlineCode",{parentName:"p"},"uni-app")," \u80fd\u52a0\u5f3a\u5f00\u6e90\u5f00\u653e\uff0c\u518d\u52a0\u5f3a\u4e0e\u5927\u5382\u7684\u5408\u4f5c\uff0c\u76f8\u4fe1\u672a\u6765\u8fd8\u80fd\u66f4\u4e0a\u4e00\u5c42\u697c\u3002"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"chameleon")," \u7684\u89c4\u5212\u6bd4\u8f83\u5b8f\u5927\uff0c\u867d\u7136\u662f\u6700\u540e\u53d1\u7684\u6846\u67b6\uff0c\u4f46\u5df2\u7ecf\u5728\u89c4\u5212\u6216\u6b63\u5728\u5b9e\u73b0\u7684\u529f\u80fd\u6709\uff1a"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"\u5feb\u5e94\u7528\u548c\u7aef\u62d3\u5c55\u534f\u8bae"),Object(p.b)("li",{parentName:"ul"},"\u901a\u7528\u7ec4\u4ef6\u5e93\u548c\u5782\u76f4\u7c7b\u7ec4\u4ef6\u5e93"),Object(p.b)("li",{parentName:"ul"},"\u9762\u5411\u7814\u53d1\u7684\u56fe\u5f62\u5316\u5f00\u53d1\u5de5\u5177"),Object(p.b)("li",{parentName:"ul"},"\u9762\u5411\u975e\u7814\u53d1\u7684\u56fe\u5f62\u5316\u9875\u9762\u642d\u5efa\u5de5\u5177")),Object(p.b)("p",null,"\u5982\u679c ",Object(p.b)("inlineCode",{parentName:"p"},"chameleon")," \u628a\u8fd9\u4e9b\u529f\u80fd\u90fd\u505a\u51fa\u6765\u7684\u8bdd\uff0c\u518d\u7ee7\u7eed\u5b8c\u5584\u751f\u6001\uff0c\u4e89\u53d6\u66f4\u591a\u7b2c\u4e09\u65b9\u5f00\u53d1\u8005\uff0c\u90a3\u4e48\u5728\u672a\u6765  ",Object(p.b)("inlineCode",{parentName:"p"},"chameleon"),"  \u5c06\u5927\u6709\u53ef\u4e3a\u3002"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"Taro")," \u7684\u672a\u6765\u4e5f\u4e00\u6837\u503c\u5f97\u61a7\u61ac\u3002Taro \u5373\u5c06\u8981\u53d1\u5e03\u7684 ",Object(p.b)("inlineCode",{parentName:"p"},"1.3")," \u7248\u672c\u5c31\u4f1a\u652f\u6301\u4ee5\u4e0b\u529f\u80fd\uff1a"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"\u5feb\u5e94\u7528\u652f\u6301"),Object(p.b)("li",{parentName:"ul"},"Taro Doctor\uff0c\u81ea\u52a8\u5316\u68c0\u67e5\u9879\u76ee\u914d\u7f6e\u548c\u4ee3\u7801\u5408\u6cd5\u6027"),Object(p.b)("li",{parentName:"ul"},"\u66f4\u591a\u7684 JSX \u8bed\u6cd5\u652f\u6301\uff0c1.3 \u4e4b\u540e\u9650\u5236\u751f\u4ea7\u529b\u7684\u8bed\u6cd5\u53ea\u6709 ",Object(p.b)("inlineCode",{parentName:"li"},"\u53ea\u80fd\u7528 map \u521b\u9020\u5faa\u73af\u7ec4\u4ef6")," \u4e00\u6761"),Object(p.b)("li",{parentName:"ul"},"H5 \u6253\u5305\u4f53\u79ef\u5927\u5e45\u7cbe\u7b80")),Object(p.b)("p",null,"\u540c\u65f6 ",Object(p.b)("inlineCode",{parentName:"p"},"Taro")," \u4e5f\u6b63\u5728\u5bf9\u79fb\u52a8\u7aef\u8fdb\u884c\u5927\u89c4\u6a21\u91cd\u6784\uff1b\u5f00\u53d1\u56fe\u5f62\u5316\u5f00\u53d1\u5de5\u5177\uff1b\u5f00\u53d1\u7ec4\u4ef6/\u7269\u6599\u5e73\u53f0\u4ee5\u53ca\u56fe\u5f62\u5316\u9875\u9762\u642d\u5efa\u5de5\u5177\u3002"),Object(p.b)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),Object(p.b)("p",null,"\u90a3\u8bf4\u4e86\u90a3\u4e48\u591a\uff0c\u5230\u5e95\u7528\u54ea\u4e2a\u5462\uff1f"),Object(p.b)("p",null,"\u5982\u679c\u4e0d\u4ecb\u610f\u5c1d\u9c9c\u548c\u5b66\u4e60 DSL \u7684\u8bdd\uff0c\u5b8c\u5168\u53ef\u4ee5\u5c1d\u8bd5 ",Object(p.b)("inlineCode",{parentName:"p"},"WePY")," 2.0  \u548c ",Object(p.b)("inlineCode",{parentName:"p"},"chameleon")," \uff0c\u4e00\u4e2a\u662f\u915d\u917f\u4e86\u5f88\u4e45\u7684 2.0 \u5168\u65b0\u5347\u7ea7\uff0c\u4e00\u4e2a\u6709\u4e13\u95e8\u9488\u5bf9\u591a\u7aef\u5f00\u53d1\u7684\u591a\u6001\u534f\u8bae\u3002"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"uni-app")," \u548c ",Object(p.b)("inlineCode",{parentName:"p"},"Taro")," \u76f8\u6bd4\u8d77\u6765\u5c31\u66f4\u50cf\u662f\u300c\u6c34\u6876\u578b\u300d\u6846\u67b6\uff0c\u4ece\u5de5\u5177\u3001UI \u5e93\uff0c\u5f00\u53d1\u4f53\u9a8c\u3001\u591a\u7aef\u652f\u6301\u7b49\u5404\u65b9\u9762\u6765\u770b\u90fd\u6ca1\u6709\u660e\u663e\u7684\u77ed\u677f\u3002\u800c ",Object(p.b)("inlineCode",{parentName:"p"},"mpvue")," \u7531\u4e8e\u5f00\u53d1\u4e00\u5ea6\u505c\u6ede\uff0c\u73b0\u5728\u770b\u6765\u5404\u4e2a\u65b9\u9762\u90fd\u4e0d\u5982\u5728\u5c0f\u7a0b\u5e8f\u7aef\u57fa\u4e8e\u5b83\u7684 ",Object(p.b)("inlineCode",{parentName:"p"},"uni-app")," \u3002"),Object(p.b)("p",null,"\u5f53\u7136\uff0cTalk is cheap\u3002\u5982\u679c\u5bf9\u8fd9\u4e2a\u8bdd\u9898\u6709\u66f4\u591a\u5174\u8da3\u7684\u540c\u5b66\u53ef\u4ee5\u53bb GitHub \u53e6\u884c\u7814\u7a76\uff0c\u6709\u7a7a\u770b\u4ee3\u7801\uff0c\u6ca1\u7a7a\u770b\u63d0\u4ea4\uff1a"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"chameleon: ",Object(p.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/didi/chameleon"}),"https://github.com/didi/chameleon")),Object(p.b)("li",{parentName:"ul"},"mpvue: ",Object(p.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Meituan-Dianping/mpvue"}),"https://github.com/Meituan-Dianping/mpvue")),Object(p.b)("li",{parentName:"ul"},"Taro: ",Object(p.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/NervJS/taro"}),"https://github.com/NervJS/taro")),Object(p.b)("li",{parentName:"ul"},"uni-app: ",Object(p.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/dcloudio/uni-app"}),"https://github.com/dcloudio/uni-app")),Object(p.b)("li",{parentName:"ul"},"WePY: ",Object(p.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Tencent/wepy"}),"https://github.com/Tencent/wepy"))),Object(p.b)("p",null,"(\u6309\u5b57\u6bcd\u987a\u5e8f\u6392\u5e8f)"))}o.isMDXComponent=!0},1721:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),b=n.n(a);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var c=b.a.createContext({}),o=function(e){var t=b.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=o(e.components);return b.a.createElement(c.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=o(n),O=a,u=m["".concat(i,".").concat(O)]||m[O]||j[O]||p;return n?b.a.createElement(u,r(r({ref:t},c),{},{components:n})):b.a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=O;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var c=2;c<p;c++)i[c]=n[c];return b.a.createElement.apply(null,i)}return b.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);
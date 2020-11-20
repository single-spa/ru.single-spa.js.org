(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{274:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(1),o=n(9),i=(n(0),n(311)),r={id:"ecosystem-riot",title:"single-spa-riot",sidebar_label:"Riot"},p=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Options",id:"options",children:[]}],l={rightToc:p},c="wrapper";function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(c,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"single-spa-riot is a helper library that helps implement ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#registering-applications"}),"single-spa registered application")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/building-applications#registered-application-lifecycle"}),"lifecycle functions")," (bootstrap, mount and unmount) for for use with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://riot.js.org/"}),"riot"),". Check out the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ariesjia/single-spa-riot"}),"single-spa-riot github"),"."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/single-spa-riot"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/single-spa-riot.svg",alt:"NPM"})))),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://travis-ci.com/ariesjia/single-spa-riot"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://travis-ci.com/ariesjia/single-spa-riot.svg?branch=master",alt:"Build Status"})))),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://bundlephobia.com/result?p=single-spa-riot"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://badgen.net/bundlephobia/minzip/single-spa-riot",alt:"minified"})))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save single-spa-riot\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import * as Riot from 'riot';\nimport singleSpaRiot from 'single-spa-riot';\nimport App from './App.riot'\n\nconst riotLifecycles = singleSpaRiot({\n  rootComponent: Riot.component(App),\n  domElementGetter: () => document.getElementById('#app')\n});\n\nexport const bootstrap = riotLifecycles.bootstrap;\n\nexport const mount = riotLifecycles.mount;\n\nexport const unmount = riotLifecycles.unmount;\n")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("p",null,"All options are passed to single-spa-riot via the ",Object(i.b)("inlineCode",{parentName:"p"},"opts")," parameter when calling ",Object(i.b)("inlineCode",{parentName:"p"},"singleSpaRiot(opts)"),". The following options are available:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"domElementGetter"),": (required) the callback to get root component mount element."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rootComponent"),": (optional and replaces ",Object(i.b)("inlineCode",{parentName:"li"},"appOptions.loadRootComponent"),") the root riot component."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"loadRootComponent"),": (optional and replaces ",Object(i.b)("inlineCode",{parentName:"li"},"appOptions.rootComponent"),") A promise that resolves with your root component. This is useful for lazy loading.")))}s.isMDXComponent=!0},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a),i=o.a.createContext({}),r=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},p=function(e){var t=r(e.components);return o.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=r(n),b=a,m=s[p+"."+b]||s[b]||c[b]||i;return n?o.a.createElement(m,Object.assign({},{ref:t},l,{components:n})):o.a.createElement(m,Object.assign({},{ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[l]="string"==typeof e?e:a,r[1]=p;for(var b=2;b<i;b++)r[b]=n[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);
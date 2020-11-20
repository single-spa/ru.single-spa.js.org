(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{163:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return s}));var a=t(1),i=t(9),l=(t(0),t(311)),r={id:"ecosystem-html-web-components",title:"single-spa-html",sidebar_label:"HTML / Web Components"},o=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Via npm",id:"via-npm",children:[]},{value:"Via cdn",id:"via-cdn",children:[]}]},{value:"API / Options",id:"api--options",children:[]}],p={rightToc:o},c="wrapper";function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)(c,Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-html"}),"single-spa-html")," is a helper library for mounting raw HTML and web components as\nsingle-spa applications or parcels."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save single-spa-html\n\n# or\nyarn add single-spa-html\n")),Object(l.b)("p",null,"Alternatively, you can use single-spa-html from a CDN as a global variable:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<script src="https://cdn.jsdelivr.net/npm/single-spa-html"><\/script>\n')),Object(l.b)("p",null,"Note that you might want to lock down the package to a specific version. See ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://cdn.jsdelivr.net/npm/single-spa-html"}),"here")," for\nhow to do that."),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("h3",{id:"via-npm"},"Via npm"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import singleSpaHtml from 'single-spa-html';\n\nconst htmlLifecycles = singleSpaHtml({\n  template: '<x-my-web-component></x-my-web-component>',\n})\n\nexport const bootstrap = htmlLifecycles.bootstrap;\nexport const mount = htmlLifecycles.mount;\nexport const unmount = htmlLifecycles.unmount;\n")),Object(l.b)("h3",{id:"via-cdn"},"Via cdn"),Object(l.b)("p",null,"Example usage when installed via CDN:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const webComponentApp = window.singleSpaHtml.default({\n  template: props => `<x-my-web-component attr=\"${props.attr}\"></x-my-web-component>`,\n})\n\nsingleSpa.registerApplication({\n  name: 'name',\n  app: webComponentApp,\n  activeWhen: () => true\n})\n")),Object(l.b)("h2",{id:"api--options"},"API / Options"),Object(l.b)("p",null,"single-spa-html is called with an object that has the following properties:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"template")," (required): An HTML string or a function that returns a string. The function will be called with the single-spa custom props. The returned string is injected into the DOM during the single-spa mount lifecycle."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"domElementGetter")," (optional): A function that returns the dom element container into which the HTML will be injected. If omitted,\na default implementation is provided that wraps the template in a ",Object(l.b)("inlineCode",{parentName:"li"},"<div>")," that is appended to ",Object(l.b)("inlineCode",{parentName:"li"},"document.body"),".")))}s.isMDXComponent=!0},311:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a),l=i.a.createContext({}),r=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},o=function(e){var n=r(e.components);return i.a.createElement(l.Provider,{value:n},e.children)};var p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},s=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),s=r(t),m=a,b=s[o+"."+m]||s[m]||c[m]||l;return t?i.a.createElement(b,Object.assign({},{ref:n},p,{components:t})):i.a.createElement(b,Object.assign({},{ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=s;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:a,r[1]=o;for(var m=2;m<l;m++)r[m]=t[m];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);
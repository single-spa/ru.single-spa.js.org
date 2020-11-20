(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return s}));var a=n(1),i=n(9),l=(n(0),n(311)),o={id:"migrating-angularJS-tutorial",title:"Migrating an Existing AngularJS Project",sidebar_label:"AngularJS - Migrating to single-spa"},r=[{value:"Project Setup",id:"project-setup",children:[]},{value:"Step One: Create a single-spa config",id:"step-one-create-a-single-spa-config",children:[{value:"a) importing without using import",id:"a-importing-without-using-import",children:[]},{value:"b) Connect the config file",id:"b-connect-the-config-file",children:[]}]},{value:"Step Two: Register the application",id:"step-two-register-the-application",children:[]},{value:"Step Three: Setup Lifecycle Functions",id:"step-three-setup-lifecycle-functions",children:[]},{value:"Step Four: Adjust your HTML file",id:"step-four-adjust-your-html-file",children:[{value:"a) Prevent auto bootstrapping",id:"a-prevent-auto-bootstrapping",children:[]},{value:"b) Create a Template",id:"b-create-a-template",children:[]},{value:"c) Create a Directive",id:"c-create-a-directive",children:[]}]}],c={rightToc:r},p="wrapper";function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)(p,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"project-setup"},"Project Setup"),Object(l.b)("p",null,"You can find the code needed to follow along ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/alocke12992/single-spa-angular-migration-starter"}),"here"),". You can find the completed ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/alocke12992/single-spa-angular-migration"}),"code for this tutorial here"),"."),Object(l.b)("p",null,"Since this is an older project, there are a few dependencies you might not currently have installed on your machine. This project requires that you have ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://gruntjs.com/getting-started"}),"Grunt"),", ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://bower.io/"}),"Bower"),", and ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://sass-lang.com/"}),"Sass")," installed to get up and running."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install -g grunt-cli\nnpm install -g bower\nnpm install -g sass\n")),Object(l.b)("p",null,"With those dependencies installed, you can get started by typing the following command into your terminal:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:alocke12992/single-spa-angular-migration-starter.git\ncd single-spa-angular-migration-starter\nyarn\ncd public/assets\nbower install\n")),Object(l.b)("p",null,"Run ",Object(l.b)("inlineCode",{parentName:"p"},"grunt")," in the root directory to fire up a server at ",Object(l.b)("inlineCode",{parentName:"p"},"http://localhost:8080"),"."),Object(l.b)("h2",{id:"step-one-create-a-single-spa-config"},"Step One: Create a single-spa config"),Object(l.b)("p",null,"The single spa config consists of all code that is not part of a ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://single-spa.js.org/docs/configuration.html#registeringapplications"}),"registered application"),". Ideally, this only includes an HTML file and a JavaScript file that registers single-spa applications. It is best practice to keep your single spa config as small as possible and to simply defer to single-spa to manage all of the applications. The single spa config should not be doing client-side HTML rendering nor should it be responding to routing events such as ",Object(l.b)("inlineCode",{parentName:"p"},"hashchange")," or ",Object(l.b)("inlineCode",{parentName:"p"},"popstate"),". Instead, all of that functionality should be taken care of either by single-spa itself or by a single-spa application."),Object(l.b)("p",null,"It is required to ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://single-spa.js.org/docs/configuration.html#registering-applications"}),"register applications")," with single-spa. This enables single-spa to know how and when to bootstrap, mount and unmount an application. We will be creating a ",Object(l.b)("inlineCode",{parentName:"p"},"single-spa.config.js")," file to house all of our single-spa logic."),Object(l.b)("p",null,"Inside the ",Object(l.b)("em",{parentName:"p"},"public/")," folder, create a ",Object(l.b)("em",{parentName:"p"},"single-spa-config.js")," file."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"touch public/single-spa.config.js\n")),Object(l.b)("h3",{id:"a-importing-without-using-import"},"a) importing without using import"),Object(l.b)("p",null,"Since we are using an older version of Angular, and we do not have access to babel, we cannot use ",Object(l.b)("inlineCode",{parentName:"p"},"import")," or even ",Object(l.b)("inlineCode",{parentName:"p"},"require()")," to obtain access to the single-spa library. One way around this is to include a ",Object(l.b)("inlineCode",{parentName:"p"},"<script>")," tag in the project's HTML file which will provide us access to the library. Single-spa is hosted on ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://unpkg.com/"}),"https://unpkg.com/")," and when called, creates a global variable."),Object(l.b)("p",null,"In ",Object(l.b)("inlineCode",{parentName:"p"},"public/index.html"),", add the following script tag at the bottom of the ",Object(l.b)("inlineCode",{parentName:"p"},"<head>")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<head>\n\x3c!-- ... --\x3e\n<script src="https://unpkg.com/single-spa"><\/script>\n</head>\n')),Object(l.b)("h3",{id:"b-connect-the-config-file"},"b) Connect the config file"),Object(l.b)("p",null,"To get single-spa connected, we will need to include a script tag connecting the HTML file to single-spa.config.js (we will be building the single-spa.config.js file in the next step)."),Object(l.b)("p",null,"Add the following ",Object(l.b)("inlineCode",{parentName:"p"},"<script>")," at the bottom of ",Object(l.b)("inlineCode",{parentName:"p"},"index.html")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<body>\n  \x3c!-- ... --\x3e\n  <script src="/assets/js/angular_drums.min.js"><\/script>\n  <script src="single-spa.config.js"><\/script>\n</body>\n')),Object(l.b)("h2",{id:"step-two-register-the-application"},"Step Two: Register the application"),Object(l.b)("p",null,"Now that our application has access to the single-spa library, we can use ",Object(l.b)("inlineCode",{parentName:"p"},"window.singleSpa")," to call specific functions within the library. In order to register an application with single-spa we call the ",Object(l.b)("inlineCode",{parentName:"p"},"registerApplication()")," api and include the application ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#application-name"}),"name"),", a ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#loading-function-or-application"}),"loadingFunction")," and an ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#activity-function"}),"activityFunction"),". "),Object(l.b)("p",null,"Finally, the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.x/api#start"}),"start()")," api ",Object(l.b)("strong",{parentName:"p"},"must")," be called by your single spa config in order for applications to actually be mounted. Before ",Object(l.b)("inlineCode",{parentName:"p"},"start()")," is called, applications will be loaded, but not bootstrapped/mounted/unmounted."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Note that since we are not using Babel, we cannot use the ES6 ",Object(l.b)("inlineCode",{parentName:"em"},"const"),", ",Object(l.b)("inlineCode",{parentName:"em"},"let"),", or ",Object(l.b)("inlineCode",{parentName:"em"},"arrow functions"),".")),Object(l.b)("p",null,"Start by stubbing out the registration function by adding the following in ",Object(l.b)("inlineCode",{parentName:"p"},"public/single-spa.config.js"),":"),Object(l.b)("p",{className:"filename"},"public/single-spa.config.js"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"window.singleSpa.registerApplication(\n  'drum-machine', \n  loadingFunction,\n  function activityFunction() {\n    return true;\n  }\n)\n\nwindow.singleSpa.start();\n")),Object(l.b)("p",null,"The second argument in ",Object(l.b)("inlineCode",{parentName:"p"},"registerApplication"),", ",Object(l.b)("inlineCode",{parentName:"p"},"loadingFunction"),", must be a function that returns a promise (or an ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://ponyfoo.com/articles/understanding-javascript-async-await"}),'"async function"'),"). The function will be called with no arguments when it's time to load the application for the first time. The returned promise must be resolved with the application. We will be creating this in the next step."),Object(l.b)("p",null,"The third argument, ",Object(l.b)("inlineCode",{parentName:"p"},"activityFunction"),", must be a pure function. The function is provided ",Object(l.b)("inlineCode",{parentName:"p"},"window.location")," as the first argument, and returns a truthy value whenever the application should be active. In this case we have set the activity function to return true. This will set our SPA to always be mounted regardless of the location. Later, if we wanted to add other SPAs to our single-spa web application, we can change the activity function to return based on ",Object(l.b)("inlineCode",{parentName:"p"},"location.hash.startsWith('#/someRoute')"),"."),Object(l.b)("h2",{id:"step-three-setup-lifecycle-functions"},"Step Three: Setup Lifecycle Functions"),Object(l.b)("p",null,"Since we have registered our application, single-spa will be listening for the application to ",Object(l.b)("inlineCode",{parentName:"p"},"bootstrap")," and ",Object(l.b)("inlineCode",{parentName:"p"},"mount"),". We can use the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.x/ecosystem-angularjs"}),"single-spa-angularjs")," helper library which will handle generic lifecycle hooks (bootstrap, mount and unmount) for registered angularjs applications."),Object(l.b)("p",null,"To gain access to the ",Object(l.b)("inlineCode",{parentName:"p"},"single-spa-angularjs")," library, we will need to include another ",Object(l.b)("inlineCode",{parentName:"p"},"<script>")," tag in our HTML file."),Object(l.b)("p",null,"Add the following in ",Object(l.b)("inlineCode",{parentName:"p"},"public/index.html")," at the very bottom of the ",Object(l.b)("inlineCode",{parentName:"p"},"<head>"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<head>\n  ...\n  <script src="https://unpkg.com/single-spa"><\/script>\n  <script src="https://unpkg.com/single-spa-angularjs"><\/script>\n</head>\n')),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"You may want to read more about ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://eager.io/blog/everything-I-know-about-the-script-tag/"}),"the importance of ",Object(l.b)("inlineCode",{parentName:"a"},"<script>")," tag order"),".")),Object(l.b)("p",null,"Now that our application has access to the ",Object(l.b)("inlineCode",{parentName:"p"},"single-spa-angularjs")," library, we can set up the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.x/building-applications#registered-application-lifecycle"}),"application lifecycle"),". Add the following code:"),Object(l.b)("p",{className:"filename"},"public/single-spa.config.js"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var drumMachineApp = window.singleSpaAngularjs.default({\n  angular: window.angular,\n  domElementGetter: function() {\n    // A div with this id will be added to our index.html later, in step four\n    return document.getElementById('drum-machine')\n  },\n  mainAngularModule: 'AngularDrumMachine',\n  uiRouter: false,\n  preserveGlobal: true,\n  // This template will be built in step four\n  template: '<display-machine />',\n})\n...\n")),Object(l.b)("p",null,"With our app's lifecycle function defined, we can now include it in our ",Object(l.b)("inlineCode",{parentName:"p"},"registerApplication")," function."),Object(l.b)("p",{className:"filename"},"public/single-spa.config.js"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{4}","{4}":!0}),"...\nwindow.singleSpa.registerApplication(\n  'drum-machine', \n  drumMachineApp, \n  function activityFunction(location) {\n    return true;\n  }\n)\n\nwindow.singleSpa.start();\n")),Object(l.b)("h2",{id:"step-four-adjust-your-html-file"},"Step Four: Adjust your HTML file"),Object(l.b)("p",null,"Since most existing SPAs are used to having control of an ",Object(l.b)("em",{parentName:"p"},"index.html")," file for their css, fonts, third party script-tags, etc., it's likely that you'll have to do some work to make sure all of those keep on working when your SPA becomes an html-less application."),Object(l.b)("p",null,"In this case, we are going to have to make a few adjustments to the current ",Object(l.b)("em",{parentName:"p"},"index.html")," to make sure that the SPA is not mounted until single-spa tells it to."),Object(l.b)("h3",{id:"a-prevent-auto-bootstrapping"},"a) Prevent auto bootstrapping"),Object(l.b)("p",null,"Currently, our ",Object(l.b)("em",{parentName:"p"},"index.html")," contains two hurdles we will need to overcome to allow single-spa to control the DOM. The first is the auto-bootstrap directive ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.angularjs.org/api/ng/directive/ngApp"}),Object(l.b)("inlineCode",{parentName:"a"},"ng-app"))," at the top of the HTML file. If left in the HTML file, ",Object(l.b)("inlineCode",{parentName:"p"},"ng-app")," will force the entire application to automatically bootstrap and render, overriding the single-spa lifecycle functions. To fix this, we simply need to remove ",Object(l.b)("inlineCode",{parentName:"p"},"ng-app")," from the HTML file and then allow ",Object(l.b)("inlineCode",{parentName:"p"},"single-spa-angularjs")," to call the ",Object(l.b)("inlineCode",{parentName:"p"},"bootstrap")," function instead (recall that we set this up in ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.x/migrating-angularJS-tutorial#step-three-setup-lifecycle-functions"}),"Step Three"),")."),Object(l.b)("p",null,"In ",Object(l.b)("em",{parentName:"p"},"index.html")," remove ",Object(l.b)("inlineCode",{parentName:"p"},'ng-app="AngularDrumMachine'),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n\x3c!-- Remove ng-app --\x3e\n<html lang="en-us">\n\x3c!-- ... --\x3e\n</html>\n')),Object(l.b)("h3",{id:"b-create-a-template"},"b) Create a Template"),Object(l.b)("p",null,"The second challenge is that the ",Object(l.b)("em",{parentName:"p"},"index.html")," currently holds the entire application template. Since HTML will automatically render anything in the file, we will need to pull all of the SPAs logic out of the HTML file and replace it with a new ",Object(l.b)("inlineCode",{parentName:"p"},"<div />")," containing the ",Object(l.b)("inlineCode",{parentName:"p"},"id")," single-spa will use to mount the application. To do this, we will create a new template that we can then provide to the ",Object(l.b)("inlineCode",{parentName:"p"},"single-spa-angularjs")," lifecycle function."),Object(l.b)("p",null,"Create a new directory inside of ",Object(l.b)("em",{parentName:"p"},"public/assets")," called ",Object(l.b)("em",{parentName:"p"},"templates/"),". Then create a new template called ",Object(l.b)("em",{parentName:"p"},"display-machine.template.html"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mkdir public/assets/templates\ntouch public/assets/templates/display-machine.template.html\n")),Object(l.b)("p",null,"Then, remove lines 24 - 83 from ",Object(l.b)("em",{parentName:"p"},"index.html")," and paste them inside of ",Object(l.b)("em",{parentName:"p"},"display-machine.template.html"),". You will also need to remove the ",Object(l.b)("inlineCode",{parentName:"p"},"ng-view")," directive in the ",Object(l.b)("inlineCode",{parentName:"p"},"<body>")," tag. Once removed, add a new ",Object(l.b)("inlineCode",{parentName:"p"},"<div>")," containing the id single-spa will use to mount the SPA."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"index.html")," should now look like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<body>\n  \x3c!-- Notice that this id was set when we built the lifecycle functions in step three --\x3e\n  <div id="drum-machine" />\n  <script src="/assets/js/angular_drums.min.js"><\/script>\n  <script src="single-spa.config.js"><\/script>\n</body>\n')),Object(l.b)("p",null,"The new template ",Object(l.b)("em",{parentName:"p"},"display-machine.template.html")," should look like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<a class="show-for-medium-up" href="https://github.com/dougjohnston/angular-drum-machine">\n  <img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"\n    alt="Fork me on GitHub">\n</a>\n<div id="container" class="row">\n  <div class="large-12 large-centered columns" ng-controller="DrumMachineCtrl as dm">\n    <header>\n      <h1>Angular Drum Machine</h1>\n      <div id="loading-wrap" ng-show="loading">\n        <div class="loading loading-outer">\n          <div class="loading loading-inner"></div>\n        </div>\n        <h3>loading...</h3>\n      </div>\n    </header>\n\n    <div id="controls" ng-hide="loading">\n      <button id="play" class="button small success radius" ng-click="playLoop()">Play</button>\n      <button id="pause" class="button small alert radius" ng-click="stopLoop()">Stop</button>\n      <button id="reset" class="button small radius" ng-click="resetLoop()">Clear</button>\n      <div id="readout">\n        <span id="tempo">\n          <input type="range" min="60" max="180" ng-change="updateTempo()" ng-model="tempo">\n          <input id="bpmEdit" type="text" min="60" max="180" ng-change="updateTempo()" ng-blur="CloseEdit()" ng-model="tempo" style="width:50px;display:none;">\n          <span id="bpm" ng-click="EditBPM()">{{tempo}} bpm</span>\n        </span>\n      </div>\n    </div>\n\n    <ul id="dm-grid" ng-hide="loading">\n      <li class="dm-header">\n        <ul>\n          <li class=\'instrument-name\'></li>\n          <li class=\'beat-num\' data-ng-repeat="i in [] | range:machine.gridLength()">\n            <div ng-class="{true: \'current-beat\'}[($index + 1) === machine.currentBeat()]">{{$index + 1}}</div>\n          </li>\n        </ul>\n      </li>\n      <li class="dm-row" ng-repeat="row in machine.rows()">\n        <ul class="instrument">\n          <li class=\'instrument-name\'>\n            {{row.getInstrument().getName()}}\n            <br>\n            <span>{{row.getInstrument().getDescription()}}\n              <span>\n          </li>\n          <li data-ng-repeat="beat in row.getBeats()">\n            <button class="btn" ng-class="{\'btn-on\':beat.isActive()}" ng-click="beat.toggle()">\n              <div></div>\n            </button>\n          </li>\n        </ul>\n      </li>\n    </ul>\n\n    <footer ng-hide="loading">\n      Developed by\n      <a href="http://www.dojosto.com">Doug Johnston</a> using\n      <a href="http://angularjs.org/">AngularJS</a>.\n      <br>Drum loops provided by\n      <a href="http://www.musicradar.com/news/tech/free-music-samples-download-loops-hits-and-multis-217833/65">Music Radar</a>.\n    </footer>\n\n    <aside class="msg-play show-for-large-up" ng-class="{\'faded\': fade_msg_play}" ng-hide="loading"></aside>\n  </div>\n')),Object(l.b)("h3",{id:"c-create-a-directive"},"c) Create a Directive"),Object(l.b)("p",null,"Per the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.angularjs.org/guide/directive"}),"AngularJS conventions"),', we will need to create a directive in order to "compile" our new HTML template. Let\'s start by creating a new ',Object(l.b)("em",{parentName:"p"},"directives/")," folder inside ",Object(l.b)("em",{parentName:"p"},"public/app")," to house a new ",Object(l.b)("em",{parentName:"p"},"display-machine.directive.js")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mkdir public/app/directives\ntouch public/app/directives/display-machine.directive.js\n")),Object(l.b)("p",null,"Then, inside of ",Object(l.b)("inlineCode",{parentName:"p"},"display-machine.directive.js"),' we will register our new directive on the "AngularDrumMachine" module, restrict the directive to be triggered by a class name using the ',Object(l.b)("inlineCode",{parentName:"p"},"E")," option, and tell it to load our template using the ",Object(l.b)("inlineCode",{parentName:"p"},"templateUrl")," option."),Object(l.b)("p",null,"Add the following code to ",Object(l.b)("em",{parentName:"p"},"public/app/directives/display-machine.directive.js"),"`*:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"'use strict';\n\nangular\n.module('AngularDrumMachine')\n.directive('displayMachine', [function() {\n  return {\n    restrict: 'E',\n    templateUrl: 'assets/templates/display-machine.template.html',\n  }\n}])\n")),Object(l.b)("h1",{id:"thats-it"},"That's it"),Object(l.b)("p",null,"Head back to the console and start up the server on ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:8080"}),"http://localhost:8080")," by running ",Object(l.b)("inlineCode",{parentName:"p"},"grunt")," from the root directory."),Object(l.b)("p",null,"Inspect the page and notice that our drum-machine app is now being rendered inside of the ",Object(l.b)("inlineCode",{parentName:"p"},'<div id="drum-machine"/>')," we created. Technically, we are back to square one, with a fully functioning SPA. However, now that our SPA is a registered single-spa application we can take advantage of single-spa's functionality by building additional applications to mount side by side with our current AngularJS SPA."),Object(l.b)("p",null,"Feel free to start using that new JavaScript framework everyone has been talking about."))}s.isMDXComponent=!0},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a),l=i.a.createContext({}),o=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},r=function(e){var t=o(e.components);return i.a.createElement(l.Provider,{value:t},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=o(n),b=a,u=s[r+"."+b]||s[b]||p[b]||l;return n?i.a.createElement(u,Object.assign({},{ref:t},c,{components:n})):i.a.createElement(u,Object.assign({},{ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[c]="string"==typeof e?e:a,o[1]=r;for(var b=2;b<l;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);
import{l as g,c as a,f as v,d as b,s as h,Q as f,m as w,av as _,aA as N,e as u,w as C}from"./iframe-D_72XrxV.js";import{d as S}from"./parameters-bundle.css-Ck1Ftt8r.js";var p;(function(o){o.Auto="Auto",o.Collapsed="Collapsed",o.Expanded="Expanded"})(p||(p={}));function x(){return g("div",{class:"ui5-nl-root",children:[a("header",{class:"ui5-nl-header",children:a("slot",{name:"header"})}),g("section",{class:"ui5-nl-section",children:[a("aside",{class:"ui5-nl-aside",children:a("slot",{name:"sideContent"})}),a("div",{class:"ui5-nl-content",children:a("slot",{})})]})]})}v("@ui5/webcomponents-theming","sap_horizon",async()=>b);v("@ui5/webcomponents-fiori","sap_horizon",async()=>S,"host");const T=`:host(:not([hidden])){position:absolute;inset:0;display:block;background:var(--sapBackgroundColor);box-sizing:border-box;overflow:hidden}.ui5-nl-root{width:100%;height:100%;display:flex;flex-direction:column;box-sizing:border-box}.ui5-nl-header{z-index:3}.ui5-nl-section{display:flex;flex:1;min-height:0;position:relative}.ui5-nl-aside{transition:transform .3s;z-index:2}.ui5-nl-content{flex:1;min-width:0;overflow:auto}@media (width < 600px){:host .ui5-nl-aside{position:absolute;top:0;left:0;bottom:0;width:100%}:host ::slotted([ui5-side-navigation][slot="sideContent"]){width:100%;box-shadow:none}:host([side-collapsed]) .ui5-nl-aside{transform:translate(-100%)}:host([side-collapsed]) :dir(rtl) .ui5-nl-aside{transform:translate(100%)}}:host([is-phone]) .ui5-nl-aside{position:absolute;top:0;left:0;bottom:0;width:100%}:host([is-phone]) ::slotted([ui5-side-navigation][slot="sideContent"]){width:100%;box-shadow:none}:host([side-collapsed][is-phone]) .ui5-nl-aside{transform:translate(-100%)}:host([side-collapsed][is-phone]) :dir(rtl) .ui5-nl-aside{transform:translate(100%)}:host([has-side-navigation]) ::slotted([ui5-shellbar][slot="header"]){padding-inline:.875rem 1rem}
`;var i=function(o,e,s,l){var d=arguments.length,n=d<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,s):l,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,s,l);else for(var c=o.length-1;c>=0;c--)(r=o[c])&&(n=(d<3?r(n):d>3?r(e,s,n):r(e,s))||n);return d>3&&n&&Object.defineProperty(e,s,n),n};const y=600;let t=class extends N{constructor(){super(...arguments),this.mode="Auto",this.sideCollapsed=u()||window.innerWidth<y,this.hasSideNavigation=!1,this.isPhone=u()}isSideCollapsed(){return this.calcSideCollapsed(),this.sideCollapsed}onBeforeRendering(){this.calcSideCollapsed();const e=this.sideContent[0];this.hasSideNavigation=!!e,e&&(e.collapsed=this.isSideCollapsed())}calcSideCollapsed(){this.mode===p.Auto?this.sideCollapsed=u()||window.innerWidth<y:this.sideCollapsed=this.mode===p.Collapsed}};i([h()],t.prototype,"mode",void 0);i([h({type:Boolean})],t.prototype,"sideCollapsed",void 0);i([h({type:Boolean})],t.prototype,"hasSideNavigation",void 0);i([h({type:Boolean})],t.prototype,"isPhone",void 0);i([f()],t.prototype,"header",void 0);i([f()],t.prototype,"sideContent",void 0);i([f({type:HTMLElement,default:!0})],t.prototype,"content",void 0);t=i([w({tag:"ui5-navigation-layout",languageAware:!0,renderer:_,styles:[T],template:x})],t);t.define();const m=C("ui5-navigation-layout",["mode"],[],["header","sideContent"],[]);m.displayName="NavigationLayout";try{m.displayName="NavigationLayout",m.__docgenInfo={description:`The \`NavigationLayout\` is a container component that can be used to
create a layout with a header, a side navigation and a content area.

### Usage

Use the \`NavigationLayout\` to create whole screen of an application with vertical navigation.

### Responsive Behavior

On larger screens with a width of 600px or more, excluding mobile phone devices, the side navigation is visible
by default and can be expanded or collapsed using the \`mode\` property.
On mobile phone devices and screens with a width of 599px or less, the side navigation is hidden by
default and can be displayed using the \`mode\` property.



__Note:__ This is a UI5 Web Component! [NavigationLayout UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/NavigationLayout) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"NavigationLayout",props:{children:{defaultValue:null,description:"Defines the content.\n\n__Supported Node Type/s:__ `Array<HTMLElement>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},sideContent:{defaultValue:null,description:`Defines the side content.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="sideContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<SideNavigation>\``,name:"sideContent",required:!1,type:{name:"UI5WCSlotsNode"}},mode:{defaultValue:{value:'"Auto"'},description:"Specifies the navigation layout mode.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"Auto"'},{value:'"Auto"'},{value:'"Collapsed"'},{value:'"Expanded"'},{value:'"Collapsed"'},{value:'"Expanded"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{p as N,m as a};

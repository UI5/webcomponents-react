import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{$m as r,$p as i,Au as a,Bn as o,Cm as s,Cu as c,Dh as l,Dm as u,Du as d,Em as f,Eu as p,Gu as ee,Hn as te,Ju as m,Ln as h,Oh as ne,Om as g,Op as re,Qp as ie,Rd as ae,Rn as oe,Sm as _,Su as se,Tm as v,Tp as ce,Vn as le,Wu as ue,Xh as y,Yh as b,_d as de,aa as fe,am as x,ar as pe,bm as me,bp as he,ch as ge,dn as _e,em as ve,fn as ye,i as be,im as S,ju as xe,km as C,kp as Se,lh as Ce,ng as w,nm as T,qt as we,r as Te,rg as E,rm as D,s as Ee,sa as De,tm as O,u as Oe,wm as k,wp as ke,xp as Ae,zd as je,zg as Me,zn as Ne}from"./iframe-XBPQU9Jw.js";import{_ as Pe,d as Fe,f as Ie,g as Le,h as Re,l as ze,m as Be,n as A,p as Ve,t as j,u as He,v as Ue,y as M}from"./parameters-bundle.css-ivWRUyAZ.js";import{t as We}from"./navigation-left-arrow-gvCapyQE.js";var Ge,Ke=n((()=>{E(),S(),j(),w(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>x),w(`@ui5/webcomponents-ai`,`sap_horizon`,async()=>A,`host`),Ge=`.ui5-ai-textarea-root{position:relative;display:flex;flex-direction:column;width:100%;height:100%}.ui5-ai-textarea-root .ui5-textarea-wrapper{display:flex;flex-direction:column;flex:1;position:relative}.ui5-ai-textarea-root [part=footer]{position:relative;width:100%;margin-top:auto;flex-shrink:0}.ui5-ai-writing-assistant-footer-bar{background:var(--_ui5_texteditor_toolbar_background, var(--sapPageFooter_Background));width:100%;box-sizing:border-box;box-shadow:none;border-bottom:none;border-top:none}.ui5-ai-writing-assistant-footer-bar--with-border{border-top:1px solid var(--sapPageFooter_BorderColor)}.ui5-ai-writing-assistant-action-label{margin-left:.5rem;color:var(--sapContent_LabelColor);font-size:var(--sapFontSmallSize)}#ai-menu-wrapper{position:relative;z-index:1000}
`})),qe,Je=n((()=>{E(),S(),j(),w(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>x),w(`@ui5/webcomponents-ai`,`sap_horizon`,async()=>A,`host`),qe=`.ui5-ai-writing-assistant-footer-bar{background:var(--_ui5_texteditor_toolbar_background, var(--sapPageFooter_Background));width:100%;box-sizing:border-box;box-shadow:none;border-bottom:none;border-top:none;padding:.5rem;display:flex;align-items:center;justify-content:flex-start}.ui5-ai-writing-assistant-footer-bar--with-border{border-top:1px solid var(--sapPageFooter_BorderColor)}.ui5-ai-writing-assistant-action-label{color:var(--sapContent_LabelColor);font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);margin-left:.25rem}
`}));function Ye(){return T(`span`,{class:`ui5-ai-toolbar-label`,children:this.text})}var Xe=n((()=>{O()})),N,P,F,I=n((()=>{_(),g(),f(),c(),Xe(),N=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},P=class extends se{constructor(){super(...arguments),this.text=``}get isInteractive(){return!1}get classes(){return{root:{...super.classes.root,"ui5-ai-tb-label":!0}}}},N([u()],P.prototype,`text`,void 0),P=N([C({tag:`ui5-ai-toolbar-label`,template:Ye,renderer:s})],P),P.define(),F=P}));function Ze(){return D(ve,{children:[T(p,{design:`Transparent`,icon:`navigation-left-arrow`,tooltip:this._previousButtonTooltip,accessibleName:this._previousButtonAccessibleName,disabled:this.currentStep<=1,onClick:this.handlePreviousVersionClick,"data-ui5-versioning-button":`previous`}),T(F,{text:`${this.currentStep} / ${this.totalSteps}`,class:`version-step-counter`}),T(p,{design:`Transparent`,icon:`navigation-right-arrow`,tooltip:this._nextButtonTooltip,accessibleName:this._nextButtonAccessibleName,disabled:this.totalSteps<=0||this.currentStep>=this.totalSteps,onClick:this.handleNextVersionClick,"data-ui5-versioning-button":`next`})]})}var Qe=n((()=>{O(),I(),d(),We(),m()})),$e,et=n((()=>{E(),S(),j(),w(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>x),w(`@ui5/webcomponents-ai`,`sap_horizon`,async()=>A,`host`),$e=`:host{display:inline-flex;align-items:center}#versioning-history{display:flex;align-items:center;gap:0}.version-step-counter{margin:0 .25rem;display:flex;align-items:center;color:var(--sapContent_LabelColor);font-size:var(--sapFontSmallSize);line-height:1}
`})),L,R,z,B,V,tt=n((()=>{c(),g(),f(),k(),_(),y(),M(),Ae(),i(),d(),I(),Qe(),et(),We(),m(),L=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},(function(e){e.None=``,e.Previous=`previous`,e.Next=`next`})(z||={}),B=R=class extends se{constructor(){super(...arguments),this.currentStep=0,this.totalSteps=0,this._previousCurrentStep=0,this._previousTotalSteps=0,this._lastClickedButton=z.None}static async onDefine(){R.i18nBundle=await b(`@ui5/webcomponents-ai`)}onAfterRendering(){this._manageFocus(),this._previousCurrentStep=this.currentStep,this._previousTotalSteps=this.totalSteps,this._lastClickedButton=z.None}_manageFocus(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector(`[data-ui5-versioning-button="previous"]`),t=this.shadowRoot.querySelector(`[data-ui5-versioning-button="next"]`);if(!e||!t)return;let n=this.currentStep<=1,r=this.currentStep>=this.totalSteps,i=this._previousCurrentStep<=1,a=this._previousCurrentStep>=this._previousTotalSteps;n&&!i&&!r&&this._lastClickedButton===z.Previous&&t instanceof HTMLElement?(t.focus(),this._lastClickedButton=z.None):r&&!a&&!n&&this._lastClickedButton===z.Next&&e instanceof HTMLElement&&(e.focus(),this._lastClickedButton=z.None)}handlePreviousVersionClick(){this._lastClickedButton=z.Previous,this.fireDecoratorEvent(`version-change`,{backwards:!0})}handleNextVersionClick(){this._lastClickedButton=z.Next,this.fireDecoratorEvent(`version-change`,{backwards:!1})}get _previousButtonAccessibleName(){return R.i18nBundle.getText(Fe)}get _nextButtonAccessibleName(){return R.i18nBundle.getText(ze)}get _previousButtonTooltip(){return R.i18nBundle.getText(Ie)}get _nextButtonTooltip(){return R.i18nBundle.getText(He)}get classes(){return{root:{...super.classes.root,"ui5-ai-versioning":!0}}}},L([u({type:Number})],B.prototype,`currentStep`,void 0),L([u({type:Number})],B.prototype,`totalSteps`,void 0),B=R=L([C({tag:`ui5-ai-versioning`,renderer:s,styles:$e,template:Ze,dependencies:[he,ie,p,F]}),v(`version-change`)],B),B.define(),V=B}));function nt(){let e=this.totalVersions>1,t=this.totalVersions>0&&this.promptDescription||this.loading;return D(a,{accessibleName:this._toolbarAccessibleName,"aria-roledescription":`toolbar`,class:`ui5-ai-writing-assistant-footer-bar${t?`--with-border`:``}`,children:[e&&!this.loading&&T(V,{currentStep:this.currentVersion,totalSteps:this.totalVersions,"onVersion-change":this.handleVersionChange}),t&&this.promptDescription&&T(F,{text:this.promptDescription,class:`ui5-ai-writing-assistant-action-label`}),T(_e,{}),this.focused&&T(p,{id:`ai-menu-btn`,design:`Transparent`,icon:this.loading?`stop`:`ai`,"data-state":this.loading?`generating`:`generate`,onClick:this.handleButtonClick,tooltip:this.loading?this._stopTooltip:this._buttonTooltip,accessibilityAttributes:{hasPopup:this.loading?`false`:`menu`},accessibleName:this._buttonAccessibleName,overflowPriority:`NeverOverflow`})]})}var rt=n((()=>{O(),tt(),I(),xe(),ye(),d()})),H,U,W,it,at=n((()=>{g(),f(),k(),de(),_(),ne(),ue(),y(),M(),Je(),rt(),tt(),I(),xe(),ye(),d(),pe(),we(),H=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},W=U=class extends l{constructor(){super(...arguments),this.loading=!1,this.promptDescription=``,this.currentVersion=0,this.totalVersions=0,this.focused=!1}static async onDefine(){U.i18nBundleAi=await b(`@ui5/webcomponents-ai`)}handleVersionChange(e){this.fireDecoratorEvent(`version-change`,{backwards:e.detail.backwards})}handleButtonClick(e){let t=e.target;t?.dataset?.state===`generating`?this.fireDecoratorEvent(`stop-generation`):(this.fireDecoratorEvent(`button-click`,{clickTarget:t}),ee(U.i18nBundleAi.getText(Re),`Polite`))}get _ariaLabel(){return U.i18nBundleAi.getText(Le)}get _previousButtonAccessibleName(){return U.i18nBundleAi.getText(Fe)}get _nextButtonAccessibleName(){return U.i18nBundleAi.getText(ze)}get _toolbarAccessibleName(){return U.i18nBundleAi.getText(Ue)}get _buttonAccessibleName(){return U.i18nBundleAi.getText(Ve)}get _buttonTooltip(){return U.i18nBundleAi.getText(Be)}get _stopTooltip(){return U.i18nBundleAi.getText(Pe)}},H([u({type:Boolean})],W.prototype,`loading`,void 0),H([u()],W.prototype,`promptDescription`,void 0),H([u({type:Number})],W.prototype,`currentVersion`,void 0),H([u({type:Number})],W.prototype,`totalVersions`,void 0),H([u({type:Boolean})],W.prototype,`focused`,void 0),H([me(`@ui5/webcomponents-ai`)],W,`i18nBundleAi`,void 0),W=U=H([C({tag:`ui5-ai-writing-assistant`,languageAware:!0,renderer:s,template:nt,styles:[qe],dependencies:[V,F,a,_e,p]}),v(`version-change`),v(`button-click`),v(`stop-generation`)],W),W.define(),it=W}));function ot(){return D(`div`,{class:`ui5-ai-textarea-root`,children:[D(`div`,{class:this.classes.root,onFocusIn:this._onfocusin,onFocusOut:this._onfocusout,children:[D(`div`,{class:`ui5-textarea-wrapper`,children:[this.growing&&T(`div`,{id:`${this._id}-mirror`,class:`ui5-textarea-mirror`,"aria-hidden":`true`,children:this._mirrorText.map(e=>D(ve,{children:[e.text,T(`br`,{})]}))}),T(ke,{id:`${this._id}-busyIndicator`,active:this.loading,class:`ui5-textarea-busy-indicator`,children:T(`textarea`,{id:`${this._id}-inner`,class:`ui5-textarea-inner`,part:`textarea`,placeholder:this.placeholder,disabled:this.disabled,readonly:this.readonly,"aria-label":this._ariaLabel,"aria-describedby":this.ariaDescribedBy,"aria-invalid":this._ariaInvalid,"aria-required":this.required,maxlength:this._exceededTextProps.calcedMaxLength,value:this.value,"data-sap-focus-ref":!0,onInput:this._oninput,onChange:this._onchange,onKeyUp:this._onkeyup,onKeyDown:this._onkeydown,onSelect:this._onselect,onScroll:this._onscroll})}),T(`div`,{part:`footer`,children:T(`slot`,{name:`footer`,children:T(it,{loading:this.loading,currentVersion:this.currentVersion,totalVersions:this.totalVersions,promptDescription:this.promptDescription,focused:this.focused,onButtonClick:this._handleAIButtonClick,onStopGeneration:this.handleStopGeneration,onVersionChange:this._handleVersionChange})})})]}),this.showExceededText&&T(`span`,{class:`ui5-textarea-exceeded-text`,children:this._exceededTextProps.exceededText}),this.hasValueState&&T(`span`,{id:`${this._id}-valueStateDesc`,class:`ui5-hidden-text`,children:this.ariaValueStateHiddenText})]}),le.call(this),T(`div`,{"aria-live":`polite`,"aria-atomic":`true`,class:`ui5-hidden-text`,children:this.loading?this.promptDescription:``}),T(`div`,{id:`ai-menu-wrapper`,children:T(`slot`,{name:`menu`})})]})}var st=n((()=>{O(),at(),ce(),te()})),G,K,q,ct=n((()=>{g(),f(),Se(),k(),_(),oe(),y(),M(),Ke(),o(),je(),st(),G=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},q=K=class extends h{constructor(){super(...arguments),this.loading=!1,this.promptDescription=``,this.currentVersion=0,this.totalVersions=0,this.focused=!1,this._handleAIButtonClick=e=>{let t=this.getSlottedNodes(`menu`);if(t.length===0||!e.detail?.clickTarget)return;let n=t[0];n&&n.open!==void 0&&(n.opener=e.detail.clickTarget.shadowRoot?.querySelector(`ui5-button`),n.horizontalAlign=`End`,n.open=!0)},this.handleStopGeneration=()=>{this.fireDecoratorEvent(`stop-generation`)}}static async onDefine(){K.i18nBundle=await b(`@ui5/webcomponents-ai`)}_handlePreviousVersionClick(){this.fireDecoratorEvent(`version-change`,{backwards:!0})}_handleNextVersionClick(){this.fireDecoratorEvent(`version-change`,{backwards:!1})}_handleVersionChange(e){e.detail.backwards?this._handlePreviousVersionClick():this._handleNextVersionClick()}_handleKeydown(e){let t=e.ctrlKey||e.metaKey,n=e.shiftKey;if(n&&e.key.toLowerCase()===`f4`){let e=(this.shadowRoot?.querySelector(`[ui5-ai-writing-assistant]`))?.shadowRoot?.querySelector(`#ai-menu-btn`);e&&e.focus();return}if(this.totalVersions>1){if(t&&n&&e.key.toLowerCase()===`z`){e.preventDefault(),this._handlePreviousVersionClick();return}t&&n&&e.key.toLowerCase()===`y`&&(e.preventDefault(),this._handleNextVersionClick())}}onAfterRendering(){super.onAfterRendering();let e=this.shadowRoot?.querySelector(`textarea`);e&&!this._keydownHandler&&(this._keydownHandler=this._handleKeydown.bind(this),e.addEventListener(`keydown`,this._keydownHandler));let t=this.getSlottedNodes(`menu`);if(t.length>0){let e=t[0];this._menuFocusinHandler||(this._menuFocusinHandler=()=>{this.focused=!0},e.addEventListener(`focusin`,this._menuFocusinHandler)),this._menuFocusoutHandler||(this._menuFocusoutHandler=t=>{let n=t.relatedTarget,r=n&&this.shadowRoot?.contains(n),i=n&&e.contains(n);!r&&!i&&(this.focused=!1)},e.addEventListener(`focusout`,this._menuFocusoutHandler))}}_onfocusin(){super._onfocusin(),this.focused=!0}_onfocusout(e){super._onfocusout(e);let t=e.relatedTarget,n=t&&this.shadowRoot?.contains(t),r=this.getSlottedNodes(`menu`),i=r.length>0&&t&&(r[0].contains(t)||t===r[0]);!n&&!i&&(this.focused=!1)}get _ariaLabel(){return this.accessibleName||K.i18nBundle.getText(Le)}},G([u({type:Boolean})],q.prototype,`loading`,void 0),G([u()],q.prototype,`promptDescription`,void 0),G([u({type:Number})],q.prototype,`currentVersion`,void 0),G([u({type:Number})],q.prototype,`totalVersions`,void 0),G([u({type:Boolean})],q.prototype,`focused`,void 0),G([re({type:HTMLElement})],q.prototype,`menu`,void 0),q=K=G([C({tag:`ui5-ai-textarea`,languageAware:!0,renderer:s,template:ot,styles:[Ne,ae,Ge]}),v(`version-change`),v(`stop-generation`)],q),q.define()})),J,lt=n((()=>{ct(),r(),J=ge(`ui5-ai-textarea`,[`accessibleDescription`,`accessibleDescriptionRef`,`accessibleName`,`accessibleNameRef`,`currentVersion`,`growingMaxRows`,`maxlength`,`name`,`placeholder`,`promptDescription`,`rows`,`totalVersions`,`value`,`valueState`],[`disabled`,`growing`,`loading`,`readonly`,`required`,`showExceededText`],[`menu`,`valueStateMessage`],[`change`,`input`,`scroll`,`select`,`stop-generation`,`version-change`]),J.displayName=`TextArea`;try{J.displayName=`TextArea`,J.__docgenInfo={description:`The \`TextArea\` component extends the standard TextArea with Writing Assistant capabilities.
It provides AI-powered text generation, editing suggestions, and version management functionality.

### Structure
The \`TextArea\` consists of the following elements:
- TextArea: The main text input area with all standard textarea functionality
- WritingAssistant: Dedicated toolbar containing:
  - Versioning: A component with left/right navigation buttons and a label for browsing AI-generated versions
  - AI Button: Opens a menu that can be extended with custom AI generation options through slotting



__Note:__ This is a UI5 Web Component! [TextArea UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ai/TextArea) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`TextArea`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,methods:[],props:{menu:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaPropTypes`}],description:`Defines a slot for \`ui5-menu\` integration. This slot allows you to pass a \`ui5-menu\` instance that will be associated with the assistant.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="menu"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`HTMLElement\``,name:`menu`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},valueStateMessage:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaPropTypes`}],description:`Defines the value state message that will be displayed as pop up under the component.
The value state message slot should contain only one root element.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed if the component has
\`valueState\` of type \`Information\`, \`Critical\` or \`Negative\`.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`valueStateMessage`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaPropTypes`}],description:`Fired when the text has changed and the focus leaves the component.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onChange`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TextAreaDomRef, never>) => void`}},onInput:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaPropTypes`}],description:`Fired when the value of the component changes at each keystroke or when
something is pasted.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onInput`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TextAreaDomRef, TextAreaInputEventDetail>) => void`}},onScroll:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaPropTypes`}],description:`Fired when textarea is scrolled.

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onScroll`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TextAreaDomRef, never>) => void`}},onSelect:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaPropTypes`}],description:`Fired when some text has been selected.

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onSelect`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TextAreaDomRef, never>) => void`}},onStopGeneration:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaPropTypes`}],description:`Fired when the user requests to stop AI text generation.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onStopGeneration`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TextAreaDomRef, never>) => void`}},onVersionChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaPropTypes`}],description:`Fired when the user clicks on version navigation buttons.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onVersionChange`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TextAreaDomRef, TextAreaVersionChangeEventDetail>) => void`}},accessibleDescription:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Defines the accessible description of the component.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents-ai**.`,name:`accessibleDescription`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleDescriptionRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Receives id(or many ids) of the elements that describe the textarea.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents-ai**.`,name:`accessibleDescriptionRef`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Defines the accessible ARIA name of the component.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Receives id(or many ids) of the elements that label the textarea.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},currentVersion:{defaultValue:{value:`0`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Indicates the index of the currently displayed version.`,name:`currentVersion`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`0`},type:{name:`number`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Indicates whether the user can interact with the component or not.

**Note:** A disabled component is completely noninteractive.`,name:`disabled`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},growing:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Enables the component to automatically grow and shrink dynamically with its content.`,name:`growing`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},growingMaxRows:{defaultValue:{value:`0`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Defines the maximum number of rows that the component can grow.`,name:`growingMaxRows`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`0`},type:{name:`number`}},loading:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:"Defines whether the `TextArea` is currently in a loading(processing) state.",name:`loading`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},maxlength:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:"Defines the maximum number of characters that the `value` can have.",name:`maxlength`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`undefined`},type:{name:`number`}},name:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:`name`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},placeholder:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Defines a short hint intended to aid the user with data entry when the component has no value.`,name:`placeholder`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},promptDescription:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Defines the prompt description of the current action.`,name:`promptDescription`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{},type:{name:`string`}},readonly:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:`readonly`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},required:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Defines whether the component is required.`,name:`required`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},rows:{defaultValue:{value:`0`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Defines the number of visible text rows for the component.

**Notes:**

- If the \`growing\` property is enabled, this property defines the minimum rows to be displayed
in the textarea.
- The CSS \`height\` property wins over the \`rows\` property, if both are set.`,name:`rows`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`0`},type:{name:`number`}},showExceededText:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:"Determines whether the characters exceeding the maximum allowed character count are visible\nin the component.\n\nIf set to `false`, the user is not allowed to enter more characters than what is set in the\n`maxlength` property.\nIf set to `true` the characters exceeding the `maxlength` value are selected on\npaste and the counter below the component displays their number.",name:`showExceededText`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},totalVersions:{defaultValue:{value:`0`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Indicates the total number of result versions available.

Notes:
Versioning is hidden if the value is \`0\``,name:`totalVersions`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`0`},type:{name:`number`}},value:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Defines the value of the component.`,name:`value`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{},type:{name:`string`}},valueState:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Defines the value state of the component.

**Note:** If \`maxlength\` property is set,
the component turns into "Critical" state once the characters exceeds the limit.
In this case, only the "Negative" state is considered and can be applied.`,name:`valueState`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"Information" | "None" | ValueState | "Positive" | "Critical" | "Negative"`,value:[{value:`"Information"`},{value:`"None"`},{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`},{value:`"Critical"`},{value:`"Negative"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of __@ui5/webcomponents-ai__.`,experimental:`The **@ui5/webcomponents-ai** package is under development and considered experimental - components' APIs are subject to change.
Furthermore, the package supports **Horizon** themes only.`}}}catch{}})),ut=e({Default:()=>Q,WithFakeStream:()=>$,__namedExportsOrder:()=>ft,default:()=>Z}),Y,X,Z,Q,dt,$,ft,pt=n((()=>{Oe(),Y=t(Me(),1),Te(),lt(),X=Ce(),Z={title:`TextArea`,component:J,argTypes:{menu:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},tags:[`package:@ui5/webcomponents-ai`,`experimental`]},Q={},dt=`Innovation managers operate with both creativity and business acumen, driving initiatives that cultivate an innovation-friendly culture, streamline the execution of new ideas, and ultimately unlock value for the organization and its customers.`,$={name:`with Stream`,args:{placeholder:`Write your content here...`,rows:8},render(e){let{value:t,isTyping:n,isProcessing:r,setValue:i,startStream:a,stopStream:o}=be(),[s,c]=(0,Y.useState)([]),[l,u]=(0,Y.useState)(-1),[d,f]=(0,Y.useState)(``),p=(0,Y.useRef)(``),ee=r||n,te=e=>{let{action:t}=e.detail.item.dataset;r||!t||(p.current=t,f(`Generating text...`),a({text:dt,onComplete:e=>{c(n=>[...n,{action:t,endAction:`completed`,timestamp:new Date().toISOString(),value:e,promptDescription:`Generated text`}]),u(e=>e+1),i(``),f(``)}}))},m=()=>{o(),h()},h=()=>{c(e=>[...e,{action:p.current,endAction:`stopped`,timestamp:new Date().toISOString(),value:t,promptDescription:`Generated text (stopped)`}]),u(e=>e+1),i(``),f(``)},ne=e=>{u(t=>e.detail.backwards?t-1:t+1),i(``)},g=e=>{i(e.target.value)};return Ee(ee,o,h),(0,X.jsx)(J,{...e,value:t||s[l]?.value||``,currentVersion:l+1,totalVersions:s.length,loading:ee,promptDescription:d||s[l]?.promptDescription||``,onStopGeneration:m,onVersionChange:ne,onInput:g,menu:(0,X.jsx)(De,{onItemClick:te,children:(0,X.jsx)(fe,{text:`Generate text`,"data-action":`generate`})})})}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'with Stream',
  args: {
    placeholder: 'Write your content here...',
    rows: 8
  },
  render(args) {
    const {
      value,
      isTyping,
      isProcessing,
      setValue,
      startStream,
      stopStream
    } = useFakeStream();
    const [versionHistory, setVersionHistory] = useState<VersionHistoryItem[]>([]);
    const [currentHistoryIndex, setCurrentHistoryIndex] = useState(-1);
    const [promptDescription, setPromptDescription] = useState('');
    const currentActionRef = useRef<string>('');
    const isLoading = isProcessing || isTyping;
    const handleItemClick: MenuPropTypes['onItemClick'] = e => {
      const {
        action
      } = e.detail.item.dataset;
      if (isProcessing || !action) {
        return;
      }
      currentActionRef.current = action;
      setPromptDescription('Generating text...');
      startStream({
        text: SAMPLE_TEXT,
        onComplete: fullText => {
          setVersionHistory(prev => [...prev, {
            action,
            endAction: 'completed',
            timestamp: new Date().toISOString(),
            value: fullText,
            promptDescription: 'Generated text'
          }]);
          setCurrentHistoryIndex(prev => prev + 1);
          setValue('');
          setPromptDescription('');
        }
      });
    };
    const handleStopGeneration: TextAreaPropTypes['onStopGeneration'] = () => {
      stopStream();
      handleStop();
    };
    const handleStop = () => {
      setVersionHistory(prev => [...prev, {
        action: currentActionRef.current,
        endAction: 'stopped',
        timestamp: new Date().toISOString(),
        value: value,
        promptDescription: 'Generated text (stopped)'
      }]);
      setCurrentHistoryIndex(prev => prev + 1);
      setValue('');
      setPromptDescription('');
    };
    const handleVersionChange: TextAreaPropTypes['onVersionChange'] = e => {
      setCurrentHistoryIndex(prev => e.detail.backwards ? prev - 1 : prev + 1);
      setValue('');
    };
    const handleInput: TextAreaPropTypes['onInput'] = e => {
      setValue(e.target.value);
    };
    useStopStreamByESC(isLoading, stopStream, handleStop);
    return <TextArea {...args} value={value || versionHistory[currentHistoryIndex]?.value || ''} currentVersion={currentHistoryIndex + 1} totalVersions={versionHistory.length} loading={isLoading} promptDescription={promptDescription || versionHistory[currentHistoryIndex]?.promptDescription || ''} onStopGeneration={handleStopGeneration} onVersionChange={handleVersionChange} onInput={handleInput} menu={<Menu onItemClick={handleItemClick}>
            <MenuItem text="Generate text" data-action="generate" />
          </Menu>} />;
  }
}`,...$.parameters?.docs?.source}}},ft=[`Default`,`WithFakeStream`]}));pt();export{Q as Default,$ as WithFakeStream,ft as __namedExportsOrder,Z as default,pt as n,ut as t};
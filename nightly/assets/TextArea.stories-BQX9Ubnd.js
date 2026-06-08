import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{$u as r,Am as i,Ap as a,Bn as o,Dm as s,Du as c,Ep as l,Fu as u,Hn as ee,Iu as d,Jt as f,Mh as p,Mm as m,Mu as h,Nh as g,Nm as _,Om as v,Ou as te,Pm as y,Rn as ne,Sd as re,Tm as ie,Tp as ae,Ud as oe,Un as se,Vn as ce,Wd as le,Wg as ue,Xu as de,Yu as fe,am as pe,ca as me,cg as b,cm as x,eg as S,fn as he,i as ge,ih as _e,im as ve,jm as C,ju as w,km as T,kp as ye,lm as E,mh as be,nm as xe,om as D,or as Se,ph as Ce,pn as we,r as Te,rm as Ee,s as De,sg as O,sm as k,tg as A,tm as Oe,u as ke,ua as Ae,um as j,zn as je}from"./iframe-B3_8Vy_N.js";import{_ as Me,d as Ne,f as Pe,g as Fe,h as Ie,l as Le,m as Re,n as M,p as ze,t as N,u as Be,v as Ve,y as He}from"./parameters-bundle.css-ivWRUyAZ.js";import{t as Ue}from"./navigation-left-arrow-DMnDdNXH.js";var We,Ge=n((()=>{b(),E(),N(),O(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>j),O(`@ui5/webcomponents-ai`,`sap_horizon`,async()=>M,`host`),We=`.ui5-ai-textarea-root{position:relative;display:flex;flex-direction:column;width:100%;height:100%}.ui5-ai-textarea-root .ui5-textarea-wrapper{display:flex;flex-direction:column;flex:1;position:relative}.ui5-ai-textarea-root [part=footer]{position:relative;width:100%;margin-top:auto;flex-shrink:0}.ui5-ai-writing-assistant-footer-bar{background:var(--_ui5_texteditor_toolbar_background, var(--sapPageFooter_Background));width:100%;box-sizing:border-box;box-shadow:none;border-bottom:none;border-top:none}.ui5-ai-writing-assistant-footer-bar--with-border{border-top:1px solid var(--sapPageFooter_BorderColor)}.ui5-ai-writing-assistant-action-label{margin-left:.5rem;color:var(--sapContent_LabelColor);font-size:var(--sapFontSmallSize)}#ai-menu-wrapper{position:relative;z-index:1000}
`})),Ke,qe=n((()=>{b(),E(),N(),O(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>j),O(`@ui5/webcomponents-ai`,`sap_horizon`,async()=>M,`host`),Ke=`.ui5-ai-writing-assistant-footer-bar{background:var(--_ui5_texteditor_toolbar_background, var(--sapPageFooter_Background));width:100%;box-sizing:border-box;box-shadow:none;border-bottom:none;border-top:none;padding:.5rem;display:flex;align-items:center;justify-content:flex-start}.ui5-ai-writing-assistant-footer-bar--with-border{border-top:1px solid var(--sapPageFooter_BorderColor)}.ui5-ai-writing-assistant-action-label{color:var(--sapContent_LabelColor);font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);margin-left:.25rem}
`}));function Je(){return k(`span`,{class:`ui5-ai-toolbar-label`,children:this.text})}var Ye=n((()=>{D()})),P,F,I,L=n((()=>{s(),_(),C(),te(),Ye(),P=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},F=class extends c{constructor(){super(...arguments),this.text=``}get isInteractive(){return!1}get classes(){return{root:{...super.classes.root,"ui5-ai-tb-label":!0}}}},P([m()],F.prototype,`text`,void 0),F=P([y({tag:`ui5-ai-toolbar-label`,template:Je,renderer:v})],F),F.define(),I=F}));function Xe(){return x(pe,{children:[k(w,{design:`Transparent`,icon:`navigation-left-arrow`,tooltip:this._previousButtonTooltip,accessibleName:this._previousButtonAccessibleName,disabled:this.currentStep<=1,onClick:this.handlePreviousVersionClick,"data-ui5-versioning-button":`previous`}),k(I,{text:`${this.currentStep} / ${this.totalSteps}`,class:`version-step-counter`}),k(w,{design:`Transparent`,icon:`navigation-right-arrow`,tooltip:this._nextButtonTooltip,accessibleName:this._nextButtonAccessibleName,disabled:this.totalSteps<=0||this.currentStep>=this.totalSteps,onClick:this.handleNextVersionClick,"data-ui5-versioning-button":`next`})]})}var Ze=n((()=>{D(),L(),h(),Ue(),r()})),Qe,$e=n((()=>{b(),E(),N(),O(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>j),O(`@ui5/webcomponents-ai`,`sap_horizon`,async()=>M,`host`),Qe=`:host{display:inline-flex;align-items:center}#versioning-history{display:flex;align-items:center;gap:0}.version-step-counter{margin:0 .25rem;display:flex;align-items:center;color:var(--sapContent_LabelColor);font-size:var(--sapFontSmallSize);line-height:1}
`})),R,z,B,V,H,et=n((()=>{te(),_(),C(),T(),s(),A(),He(),l(),ve(),h(),L(),Ze(),$e(),Ue(),r(),R=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},(function(e){e.None=``,e.Previous=`previous`,e.Next=`next`})(B||={}),V=z=class extends c{constructor(){super(...arguments),this.currentStep=0,this.totalSteps=0,this._previousCurrentStep=0,this._previousTotalSteps=0,this._lastClickedButton=B.None}static async onDefine(){z.i18nBundle=await S(`@ui5/webcomponents-ai`)}onAfterRendering(){this._manageFocus(),this._previousCurrentStep=this.currentStep,this._previousTotalSteps=this.totalSteps,this._lastClickedButton=B.None}_manageFocus(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector(`[data-ui5-versioning-button="previous"]`),t=this.shadowRoot.querySelector(`[data-ui5-versioning-button="next"]`);if(!e||!t)return;let n=this.currentStep<=1,r=this.currentStep>=this.totalSteps,i=this._previousCurrentStep<=1,a=this._previousCurrentStep>=this._previousTotalSteps;n&&!i&&!r&&this._lastClickedButton===B.Previous&&t instanceof HTMLElement?(t.focus(),this._lastClickedButton=B.None):r&&!a&&!n&&this._lastClickedButton===B.Next&&e instanceof HTMLElement&&(e.focus(),this._lastClickedButton=B.None)}handlePreviousVersionClick(){this._lastClickedButton=B.Previous,this.fireDecoratorEvent(`version-change`,{backwards:!0})}handleNextVersionClick(){this._lastClickedButton=B.Next,this.fireDecoratorEvent(`version-change`,{backwards:!1})}get _previousButtonAccessibleName(){return z.i18nBundle.getText(Ne)}get _nextButtonAccessibleName(){return z.i18nBundle.getText(Le)}get _previousButtonTooltip(){return z.i18nBundle.getText(Pe)}get _nextButtonTooltip(){return z.i18nBundle.getText(Be)}get classes(){return{root:{...super.classes.root,"ui5-ai-versioning":!0}}}},R([m({type:Number})],V.prototype,`currentStep`,void 0),R([m({type:Number})],V.prototype,`totalSteps`,void 0),V=z=R([y({tag:`ui5-ai-versioning`,renderer:v,styles:Qe,template:Xe,dependencies:[ae,Ee,w,I]}),i(`version-change`)],V),V.define(),H=V}));function tt(){let e=this.totalVersions>1,t=this.totalVersions>0&&this.promptDescription||this.loading;return x(u,{accessibleName:this._toolbarAccessibleName,"aria-roledescription":`toolbar`,class:`ui5-ai-writing-assistant-footer-bar${t?`--with-border`:``}`,children:[e&&!this.loading&&k(H,{currentStep:this.currentVersion,totalSteps:this.totalVersions,"onVersion-change":this.handleVersionChange}),t&&this.promptDescription&&k(I,{text:this.promptDescription,class:`ui5-ai-writing-assistant-action-label`}),k(he,{}),this.focused&&k(w,{id:`ai-menu-btn`,design:`Transparent`,icon:this.loading?`stop`:`ai`,"data-state":this.loading?`generating`:`generate`,onClick:this.handleButtonClick,tooltip:this.loading?this._stopTooltip:this._buttonTooltip,accessibilityAttributes:{hasPopup:this.loading?`false`:`menu`},accessibleName:this._buttonAccessibleName,overflowPriority:`NeverOverflow`})]})}var nt=n((()=>{D(),et(),L(),d(),we(),h()})),U,W,G,rt,it=n((()=>{_(),C(),T(),re(),s(),g(),fe(),A(),He(),qe(),nt(),et(),L(),d(),we(),h(),Se(),f(),U=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},G=W=class extends p{constructor(){super(...arguments),this.loading=!1,this.promptDescription=``,this.currentVersion=0,this.totalVersions=0,this.focused=!1}static async onDefine(){W.i18nBundleAi=await S(`@ui5/webcomponents-ai`)}handleVersionChange(e){this.fireDecoratorEvent(`version-change`,{backwards:e.detail.backwards})}handleButtonClick(e){let t=e.target;t?.dataset?.state===`generating`?this.fireDecoratorEvent(`stop-generation`):(this.fireDecoratorEvent(`button-click`,{clickTarget:t}),de(W.i18nBundleAi.getText(Ie),`Polite`))}get _ariaLabel(){return W.i18nBundleAi.getText(Fe)}get _previousButtonAccessibleName(){return W.i18nBundleAi.getText(Ne)}get _nextButtonAccessibleName(){return W.i18nBundleAi.getText(Le)}get _toolbarAccessibleName(){return W.i18nBundleAi.getText(Ve)}get _buttonAccessibleName(){return W.i18nBundleAi.getText(ze)}get _buttonTooltip(){return W.i18nBundleAi.getText(Re)}get _stopTooltip(){return W.i18nBundleAi.getText(Me)}},U([m({type:Boolean})],G.prototype,`loading`,void 0),U([m()],G.prototype,`promptDescription`,void 0),U([m({type:Number})],G.prototype,`currentVersion`,void 0),U([m({type:Number})],G.prototype,`totalVersions`,void 0),U([m({type:Boolean})],G.prototype,`focused`,void 0),U([ie(`@ui5/webcomponents-ai`)],G,`i18nBundleAi`,void 0),G=W=U([y({tag:`ui5-ai-writing-assistant`,languageAware:!0,renderer:v,template:tt,styles:[Ke],dependencies:[H,I,u,he,w]}),i(`version-change`),i(`button-click`),i(`stop-generation`)],G),G.define(),rt=G}));function at(){return x(`div`,{class:`ui5-ai-textarea-root`,children:[x(`div`,{class:this.classes.root,onFocusIn:this._onfocusin,onFocusOut:this._onfocusout,children:[x(`div`,{class:`ui5-textarea-wrapper`,children:[this.growing&&k(`div`,{id:`${this._id}-mirror`,class:`ui5-textarea-mirror`,"aria-hidden":`true`,children:this._mirrorText.map(e=>x(pe,{children:[e.text,k(`br`,{})]}))}),k(ye,{id:`${this._id}-busyIndicator`,active:this.loading,class:`ui5-textarea-busy-indicator`,children:k(`textarea`,{id:`${this._id}-inner`,class:`ui5-textarea-inner`,part:`textarea`,placeholder:this.placeholder,disabled:this.disabled,readonly:this.readonly,"aria-label":this._ariaLabel,"aria-describedby":this.ariaDescribedBy,"aria-invalid":this._ariaInvalid,"aria-required":this.required,maxlength:this._exceededTextProps.calcedMaxLength,value:this.value,"data-sap-focus-ref":!0,onInput:this._oninput,onChange:this._onchange,onKeyUp:this._onkeyup,onKeyDown:this._onkeydown,onSelect:this._onselect,onScroll:this._onscroll})}),k(`div`,{part:`footer`,children:k(`slot`,{name:`footer`,children:k(rt,{loading:this.loading,currentVersion:this.currentVersion,totalVersions:this.totalVersions,promptDescription:this.promptDescription,focused:this.focused,onButtonClick:this._handleAIButtonClick,onStopGeneration:this.handleStopGeneration,onVersionChange:this._handleVersionChange})})})]}),this.showExceededText&&k(`span`,{class:`ui5-textarea-exceeded-text`,children:this._exceededTextProps.exceededText}),this.hasValueState&&k(`span`,{id:`${this._id}-valueStateDesc`,class:`ui5-hidden-text`,children:this.ariaValueStateHiddenText})]}),ee.call(this),k(`div`,{"aria-live":`polite`,"aria-atomic":`true`,class:`ui5-hidden-text`,children:this.loading?this.promptDescription:``}),k(`div`,{id:`ai-menu-wrapper`,children:k(`slot`,{name:`menu`})})]})}var ot=n((()=>{D(),it(),a(),se()})),K,q,J,st=n((()=>{_(),C(),xe(),T(),s(),je(),A(),He(),Ge(),ce(),le(),ot(),K=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},J=q=class extends ne{constructor(){super(...arguments),this.loading=!1,this.promptDescription=``,this.currentVersion=0,this.totalVersions=0,this.focused=!1,this._handleAIButtonClick=e=>{let t=this.getSlottedNodes(`menu`);if(t.length===0||!e.detail?.clickTarget)return;let n=t[0];n&&n.open!==void 0&&(n.opener=e.detail.clickTarget.shadowRoot?.querySelector(`ui5-button`),n.horizontalAlign=`End`,n.open=!0)},this.handleStopGeneration=()=>{this.fireDecoratorEvent(`stop-generation`)}}static async onDefine(){q.i18nBundle=await S(`@ui5/webcomponents-ai`)}_handlePreviousVersionClick(){this.fireDecoratorEvent(`version-change`,{backwards:!0})}_handleNextVersionClick(){this.fireDecoratorEvent(`version-change`,{backwards:!1})}_handleVersionChange(e){e.detail.backwards?this._handlePreviousVersionClick():this._handleNextVersionClick()}_handleKeydown(e){let t=e.ctrlKey||e.metaKey,n=e.shiftKey;if(n&&e.key.toLowerCase()===`f4`){let e=(this.shadowRoot?.querySelector(`[ui5-ai-writing-assistant]`))?.shadowRoot?.querySelector(`#ai-menu-btn`);e&&e.focus();return}if(this.totalVersions>1){if(t&&n&&e.key.toLowerCase()===`z`){e.preventDefault(),this._handlePreviousVersionClick();return}t&&n&&e.key.toLowerCase()===`y`&&(e.preventDefault(),this._handleNextVersionClick())}}onAfterRendering(){super.onAfterRendering();let e=this.shadowRoot?.querySelector(`textarea`);e&&!this._keydownHandler&&(this._keydownHandler=this._handleKeydown.bind(this),e.addEventListener(`keydown`,this._keydownHandler));let t=this.getSlottedNodes(`menu`);if(t.length>0){let e=t[0];this._menuFocusinHandler||(this._menuFocusinHandler=()=>{this.focused=!0},e.addEventListener(`focusin`,this._menuFocusinHandler)),this._menuFocusoutHandler||(this._menuFocusoutHandler=t=>{let n=t.relatedTarget,r=n&&this.shadowRoot?.contains(n),i=n&&e.contains(n);!r&&!i&&(this.focused=!1)},e.addEventListener(`focusout`,this._menuFocusoutHandler))}}_onfocusin(){super._onfocusin(),this.focused=!0}_onfocusout(e){super._onfocusout(e);let t=e.relatedTarget,n=t&&this.shadowRoot?.contains(t),r=this.getSlottedNodes(`menu`),i=r.length>0&&t&&(r[0].contains(t)||t===r[0]);!n&&!i&&(this.focused=!1)}get _ariaLabel(){return this.accessibleName||q.i18nBundle.getText(Fe)}},K([m({type:Boolean})],J.prototype,`loading`,void 0),K([m()],J.prototype,`promptDescription`,void 0),K([m({type:Number})],J.prototype,`currentVersion`,void 0),K([m({type:Number})],J.prototype,`totalVersions`,void 0),K([m({type:Boolean})],J.prototype,`focused`,void 0),K([Oe({type:HTMLElement})],J.prototype,`menu`,void 0),J=q=K([y({tag:`ui5-ai-textarea`,languageAware:!0,renderer:v,template:at,styles:[o,oe,We]}),i(`version-change`),i(`stop-generation`)],J),J.define()})),Y,ct=n((()=>{st(),_e(),Y=Ce(`ui5-ai-textarea`,[`accessibleDescription`,`accessibleDescriptionRef`,`accessibleName`,`accessibleNameRef`,`currentVersion`,`growingMaxRows`,`maxlength`,`name`,`placeholder`,`promptDescription`,`rows`,`totalVersions`,`value`,`valueState`],[`disabled`,`growing`,`loading`,`readonly`,`required`,`showExceededText`],[`menu`,`valueStateMessage`],[`change`,`input`,`scroll`,`select`,`stop-generation`,`version-change`]),Y.displayName=`TextArea`;try{Y.displayName=`TextArea`,Y.__docgenInfo={description:`The \`TextArea\` component extends the standard TextArea with Writing Assistant capabilities.
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
In this case, only the "Negative" state is considered and can be applied.`,name:`valueState`,parent:{fileName:`webcomponents-react/packages/ai/dist/components/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | ValueState | "Positive" | "Critical" | "Negative" | "Information"`,value:[{value:`"None"`},{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`},{value:`"Critical"`},{value:`"Negative"`},{value:`"Information"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of __@ui5/webcomponents-ai__.`,experimental:`The **@ui5/webcomponents-ai** package is under development and considered experimental - components' APIs are subject to change.
Furthermore, the package supports **Horizon** themes only.`}}}catch{}})),lt=e({Default:()=>Q,WithFakeStream:()=>$,__namedExportsOrder:()=>ft,default:()=>ut}),X,Z,ut,Q,dt,$,ft,pt=n((()=>{ke(),X=t(ue(),1),Te(),ct(),Z=be(),ut={title:`TextArea`,component:Y,argTypes:{menu:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},tags:[`package:@ui5/webcomponents-ai`,`experimental`]},Q={},dt=`Innovation managers operate with both creativity and business acumen, driving initiatives that cultivate an innovation-friendly culture, streamline the execution of new ideas, and ultimately unlock value for the organization and its customers.`,$={name:`with Stream`,args:{placeholder:`Write your content here...`,rows:8},render(e){let{value:t,isTyping:n,isProcessing:r,setValue:i,startStream:a,stopStream:o}=ge(),[s,c]=(0,X.useState)([]),[l,u]=(0,X.useState)(-1),[ee,d]=(0,X.useState)(``),f=(0,X.useRef)(``),p=r||n,m=e=>{let{action:t}=e.detail.item.dataset;r||!t||(f.current=t,d(`Generating text...`),a({text:dt,onComplete:e=>{c(n=>[...n,{action:t,endAction:`completed`,timestamp:new Date().toISOString(),value:e,promptDescription:`Generated text`}]),u(e=>e+1),i(``),d(``)}}))},h=()=>{o(),g()},g=()=>{c(e=>[...e,{action:f.current,endAction:`stopped`,timestamp:new Date().toISOString(),value:t,promptDescription:`Generated text (stopped)`}]),u(e=>e+1),i(``),d(``)},_=e=>{u(t=>e.detail.backwards?t-1:t+1),i(``)},v=e=>{i(e.target.value)};return De(p,o,g),(0,Z.jsx)(Y,{...e,value:t||s[l]?.value||``,currentVersion:l+1,totalVersions:s.length,loading:p,promptDescription:ee||s[l]?.promptDescription||``,onStopGeneration:h,onVersionChange:_,onInput:v,menu:(0,Z.jsx)(Ae,{onItemClick:m,children:(0,Z.jsx)(me,{text:`Generate text`,"data-action":`generate`})})})}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},ft=[`Default`,`WithFakeStream`]}));pt();export{Q as Default,$ as WithFakeStream,ft as __namedExportsOrder,ut as default,pt as n,lt as t};
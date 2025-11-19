import{p as x,d as L,c as r,s as c,m as D,ai as R,l as v,ag as j,b6 as y,a1 as re,cC as le,gM as O,aq as ue,b4 as ce,bC as de,B as pe,w as he,cB as me,r as C,gN as fe,j as M,X as ge}from"./iframe-DDMtxVo3.js";import{T as be,t as ve,a as ye}from"./TextArea-BfjXrAPn.js";import{d as U,V as $,e as K,f as we,g as xe,W as _e,h as X,i as Te,j as Se,k as Ne,l as Ve}from"./parameters-bundle.css-LNoaTEUu.js";import{v as Ae}from"./ValueStateMessage.css-CBQfZKeo.js";import{p as Ce}from"./InvisibleMessage-CxUh_0D_.js";import{T as J,b as V,c as Q}from"./ToolbarButton-PvDnzwsA.js";import"./navigation-left-arrow-Dqy7AQkL.js";import"./navigation-right-arrow-BdCl3OJM.js";import{T as Y}from"./ToolbarSpacer-BinQNZtt.js";import"./ai-CKeOrqb_.js";import"./stop-CZ89hBC4.js";import{M as Ie}from"./index-DkFQZdNy.js";x("@ui5/webcomponents-theming","sap_horizon",async()=>L);x("@ui5/webcomponents-ai","sap_horizon",async()=>U);const De=`.ui5-ai-textarea-root{position:relative;display:flex;flex-direction:column;width:100%;height:100%}.ui5-ai-textarea-root .ui5-textarea-wrapper{display:flex;flex-direction:column;flex:1;position:relative}.ui5-ai-textarea-root [part=footer]{position:relative;width:100%;margin-top:auto;flex-shrink:0}.ui5-ai-writing-assistant-footer-bar{background:var(--_ui5-v2-16-1_texteditor_toolbar_background, var(--sapPageFooter_Background));width:100%;box-sizing:border-box;box-shadow:none;border-bottom:none;border-top:none}.ui5-ai-writing-assistant-footer-bar--with-border{border-top:1px solid var(--sapPageFooter_BorderColor)}.ui5-ai-writing-assistant-action-label{margin-left:.5rem;color:var(--sapContent_LabelColor);font-size:var(--sapFontSmallSize)}#ai-menu-wrapper{position:relative;z-index:1000}
`;x("@ui5/webcomponents-theming","sap_horizon",async()=>L);x("@ui5/webcomponents-ai","sap_horizon",async()=>U);const Re=`.ui5-ai-textarea-root{position:relative;display:flex;flex-direction:column;width:100%;height:100%}.ui5-ai-textarea-root .ui5-textarea-wrapper{display:flex;flex-direction:column;flex:1;position:relative}.ui5-ai-textarea-root [part=footer]{width:100%;margin-top:auto;flex-shrink:0}.ui5-ai-writing-assistant-footer-bar{background:var(--_ui5-v2-16-1_texteditor_toolbar_background, var(--sapPageFooter_Background));width:100%;box-sizing:border-box;box-shadow:none;border-bottom:none;border-top:none;padding:.5rem;min-height:2.75rem;display:flex;align-items:center;justify-content:flex-start}.ui5-ai-writing-assistant-footer-bar--with-border{border-top:1px solid var(--sapPageFooter_BorderColor)}.ui5-ai-writing-assistant-action-label{color:var(--sapContent_LabelColor);font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);margin-left:.25rem}
`;function qe(){return r("span",{class:"ui5-ai-toolbar-label",children:this.text})}var Z=function(a,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,n,o);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(t=(i<3?s(t):i>3?s(e,n,t):s(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let A=class extends J{constructor(){super(...arguments),this.text=""}get isInteractive(){return!1}get classes(){return{root:{...super.classes.root,"ui5-ai-tb-label":!0}}}};Z([c()],A.prototype,"text",void 0);A=Z([D({tag:"ui5-ai-toolbar-label",template:qe,renderer:R})],A);A.define();const q=A;function Be(){return v(j,{children:[r(V,{design:"Transparent",icon:"navigation-left-arrow",tooltip:this._previousButtonTooltip,accessibleName:this._previousButtonAccessibleName,disabled:this.currentStep<=1,onClick:this.handlePreviousVersionClick,"data-ui5-versioning-button":"previous"}),r(q,{text:`${this.currentStep} / ${this.totalSteps}`,class:"version-step-counter"}),r(V,{design:"Transparent",icon:"navigation-right-arrow",tooltip:this._nextButtonTooltip,accessibleName:this._nextButtonAccessibleName,disabled:this.totalSteps<=0||this.currentStep>=this.totalSteps,onClick:this.handleNextVersionClick,"data-ui5-versioning-button":"next"})]})}x("@ui5/webcomponents-theming","sap_horizon",async()=>L);x("@ui5/webcomponents-ai","sap_horizon",async()=>U);const Ee=`:host{display:inline-flex;align-items:center}#versioning-history{display:flex;align-items:center;gap:0}.version-step-counter{margin:0 .25rem;display:flex;align-items:center;color:var(--sapContent_LabelColor);font-size:var(--sapFontSmallSize);line-height:1}
`;var H=function(a,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,n,o);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(t=(i<3?s(t):i>3?s(e,n,t):s(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t},f,d;(function(a){a.None="",a.Previous="previous",a.Next="next"})(d||(d={}));let w=f=class extends J{constructor(){super(...arguments),this.currentStep=0,this.totalSteps=0,this._previousCurrentStep=0,this._previousTotalSteps=0,this._lastClickedButton=d.None}static async onDefine(){f.i18nBundle=await O("@ui5/webcomponents-ai")}onAfterRendering(){this._manageFocus(),this._previousCurrentStep=this.currentStep,this._previousTotalSteps=this.totalSteps,this._lastClickedButton=d.None}_manageFocus(){if(!this.shadowRoot)return;const e=this.shadowRoot.querySelector('[data-ui5-versioning-button="previous"]'),n=this.shadowRoot.querySelector('[data-ui5-versioning-button="next"]');if(!e||!n)return;const o=this.currentStep<=1,i=this.currentStep>=this.totalSteps,t=this._previousCurrentStep<=1,s=this._previousCurrentStep>=this._previousTotalSteps;o&&!t&&!i&&this._lastClickedButton===d.Previous&&n instanceof HTMLElement?(n.focus(),this._lastClickedButton=d.None):i&&!s&&!o&&this._lastClickedButton===d.Next&&e instanceof HTMLElement&&(e.focus(),this._lastClickedButton=d.None)}handlePreviousVersionClick(){this._lastClickedButton=d.Previous,this.fireDecoratorEvent("version-change",{backwards:!0})}handleNextVersionClick(){this._lastClickedButton=d.Next,this.fireDecoratorEvent("version-change",{backwards:!1})}get _previousButtonAccessibleName(){return f.i18nBundle.getText($)}get _nextButtonAccessibleName(){return f.i18nBundle.getText(K)}get _previousButtonTooltip(){return f.i18nBundle.getText(we)}get _nextButtonTooltip(){return f.i18nBundle.getText(xe)}get classes(){return{root:{...super.classes.root,"ui5-ai-versioning":!0}}}};H([c({type:Number})],w.prototype,"currentStep",void 0);H([c({type:Number})],w.prototype,"totalSteps",void 0);w=f=H([D({tag:"ui5-ai-versioning",renderer:R,styles:Ee,template:Be,dependencies:[re,le,V,q]}),y("version-change")],w);w.define();const ee=w;function ke(){const a=this.totalVersions>1,e=this.totalVersions>0&&this.promptDescription||this.loading;return v(Q,{accessibleName:this._toolbarAccessibleName,"aria-roledescription":"toolbar",class:`ui5-ai-writing-assistant-footer-bar${e?"--with-border":""}`,children:[a&&!this.loading&&r(ee,{currentStep:this.currentVersion,totalSteps:this.totalVersions,"onVersion-change":this.handleVersionChange}),e&&this.promptDescription&&r(q,{text:this.promptDescription,class:"ui5-ai-writing-assistant-action-label"}),r(Y,{}),r(V,{id:"ai-menu-btn",design:"Transparent",icon:this.loading?"stop":"ai","data-state":this.loading?"generating":"generate",onClick:this.handleButtonClick,tooltip:this.loading?this._stopTooltip:this._buttonTooltip,accessibilityAttributes:{hasPopup:this.loading?"false":"menu"},accessibleName:this._buttonAccessibleName,overflowPriority:"NeverOverflow"})]})}var _=function(a,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,n,o);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(t=(i<3?s(t):i>3?s(e,n,t):s(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t},u;let h=u=class extends ce{constructor(){super(...arguments),this.loading=!1,this.promptDescription="",this.currentVersion=0,this.totalVersions=0}static async onDefine(){u.i18nBundleAi=await O("@ui5/webcomponents-ai")}handleVersionChange(e){this.fireDecoratorEvent("version-change",{backwards:e.detail.backwards})}handleButtonClick(e){const n=e.target;n?.dataset?.state==="generating"?this.fireDecoratorEvent("stop-generation"):(this.fireDecoratorEvent("button-click",{clickTarget:n}),Ce(u.i18nBundleAi.getText(_e),"Polite"))}get _ariaLabel(){return u.i18nBundleAi.getText(X)}get _previousButtonAccessibleName(){return u.i18nBundleAi.getText($)}get _nextButtonAccessibleName(){return u.i18nBundleAi.getText(K)}get _toolbarAccessibleName(){return u.i18nBundleAi.getText(Te)}get _buttonAccessibleName(){return u.i18nBundleAi.getText(Se)}get _buttonTooltip(){return u.i18nBundleAi.getText(Ne)}get _stopTooltip(){return u.i18nBundleAi.getText(Ve)}};_([c({type:Boolean})],h.prototype,"loading",void 0);_([c()],h.prototype,"promptDescription",void 0);_([c({type:Number})],h.prototype,"currentVersion",void 0);_([c({type:Number})],h.prototype,"totalVersions",void 0);_([ue("@ui5/webcomponents-ai")],h,"i18nBundleAi",void 0);h=u=_([D({tag:"ui5-ai-writing-assistant",languageAware:!0,renderer:R,template:ke,styles:[Re],dependencies:[ee,q,Q,Y,V]}),y("version-change"),y("button-click"),y("stop-generation")],h);h.define();const Pe=h;function Me(){return v("div",{class:"ui5-ai-textarea-root",children:[v("div",{class:this.classes.root,onFocusIn:this._onfocusin,onFocusOut:this._onfocusout,children:[v("div",{class:"ui5-textarea-wrapper",children:[this.growing&&r("div",{id:`${this._id}-mirror`,class:"ui5-textarea-mirror","aria-hidden":"true",children:this._mirrorText.map(a=>v(j,{children:[a.text,r("br",{})]}))}),r(de,{id:`${this._id}-busyIndicator`,active:this.loading,class:"ui5-textarea-busy-indicator",children:r("textarea",{id:`${this._id}-inner`,class:"ui5-textarea-inner",part:"textarea",placeholder:this.placeholder,disabled:this.disabled,readonly:this.readonly,"aria-label":this._ariaLabel,"aria-describedby":this.ariaDescribedBy,"aria-invalid":this._ariaInvalid,"aria-required":this.required,maxlength:this._exceededTextProps.calcedMaxLength,value:this.value,"data-sap-focus-ref":!0,onInput:this._oninput,onChange:this._onchange,onKeyUp:this._onkeyup,onKeyDown:this._onkeydown,onSelect:this._onselect,onScroll:this._onscroll})}),r("div",{part:"footer",children:r("slot",{name:"footer",children:r(Pe,{loading:this.loading,currentVersion:this.currentVersion,totalVersions:this.totalVersions,promptDescription:this.promptDescription,onButtonClick:this._handleAIButtonClick,onStopGeneration:this.handleStopGeneration,onVersionChange:this._handleVersionChange})})})]}),this.showExceededText&&r("span",{class:"ui5-textarea-exceeded-text",children:this._exceededTextProps.exceededText}),this.hasValueState&&r("span",{id:`${this._id}-valueStateDesc`,class:"ui5-hidden-text",children:this.ariaValueStateHiddenText})]}),be.call(this),r("div",{"aria-live":"polite","aria-atomic":"true",class:"ui5-hidden-text",children:this.loading?this.promptDescription:""}),r("div",{id:"ai-menu-wrapper",children:r("slot",{name:"menu"})})]})}var T=function(a,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,n,o);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(t=(i<3?s(t):i>3?s(e,n,t):s(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t},I;let m=I=class extends ye{constructor(){super(...arguments),this.loading=!1,this.promptDescription="",this.currentVersion=0,this.totalVersions=0,this._handleAIButtonClick=e=>{const n=this.getSlottedNodes("menu");if(n.length===0||!e.detail?.clickTarget)return;const o=n[0];o&&typeof o.open<"u"&&(o.opener=e.detail.clickTarget,o.open=!0)},this.handleStopGeneration=()=>{this.fireDecoratorEvent("stop-generation")}}static async onDefine(){I.i18nBundle=await O("@ui5/webcomponents-ai")}_handlePreviousVersionClick(){this.fireDecoratorEvent("version-change",{backwards:!0})}_handleNextVersionClick(){this.fireDecoratorEvent("version-change",{backwards:!1})}_handleVersionChange(e){e.detail.backwards?this._handlePreviousVersionClick():this._handleNextVersionClick()}_handleKeydown(e){const n=e.ctrlKey||e.metaKey,o=e.shiftKey;if(o&&e.key.toLowerCase()==="f4"){const t=this.shadowRoot?.querySelector("[ui5-ai-writing-assistant]")?.shadowRoot?.querySelector("#ai-menu-btn");t&&t.focus();return}if(this.totalVersions>1){if(n&&o&&e.key.toLowerCase()==="z"){e.preventDefault(),this._handlePreviousVersionClick();return}n&&o&&e.key.toLowerCase()==="y"&&(e.preventDefault(),this._handleNextVersionClick())}}onAfterRendering(){super.onAfterRendering();const e=this.shadowRoot?.querySelector("textarea");e&&!this._keydownHandler&&(this._keydownHandler=this._handleKeydown.bind(this),e.addEventListener("keydown",this._keydownHandler))}get _ariaLabel(){return this.accessibleName||I.i18nBundle.getText(X)}};T([c({type:Boolean})],m.prototype,"loading",void 0);T([c()],m.prototype,"promptDescription",void 0);T([c({type:Number})],m.prototype,"currentVersion",void 0);T([c({type:Number})],m.prototype,"totalVersions",void 0);T([pe({type:HTMLElement})],m.prototype,"menu",void 0);m=I=T([D({tag:"ui5-ai-textarea",languageAware:!0,renderer:R,template:Me,styles:[ve,Ae,De]}),y("version-change"),y("stop-generation")],m);m.define();const g=he("ui5-ai-textarea",["accessibleDescription","accessibleDescriptionRef","accessibleName","accessibleNameRef","currentVersion","growingMaxRows","maxlength","name","placeholder","promptDescription","rows","totalVersions","value","valueState"],["disabled","growing","loading","readonly","required","showExceededText"],["menu","valueStateMessage"],["change","input","scroll","select","stop-generation","version-change"]);g.displayName="TextArea";try{g.displayName="TextArea",g.__docgenInfo={description:`The \`TextArea\` component extends the standard TextArea with Writing Assistant capabilities.
It provides AI-powered text generation, editing suggestions, and version management functionality.

### Structure
The \`TextArea\` consists of the following elements:
- TextArea: The main text input area with all standard textarea functionality
- WritingAssistant: Dedicated toolbar containing:
  - Versioning: A component with left/right navigation buttons and a label for browsing AI-generated versions
  - AI Button: Opens a menu that can be extended with custom AI generation options through slotting



__Note:__ This is a UI5 Web Component! [TextArea UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ai/TextArea) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"TextArea",props:{menu:{defaultValue:null,description:"Defines a slot for `ui5-menu` integration. This slot allows you to pass a `ui5-menu` instance that will be associated with the assistant.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"menu\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).\n\n__Supported Node Type/s:__ `HTMLElement`",name:"menu",required:!1,type:{name:"UI5WCSlotsNode"}},valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\nThe value state message slot should contain only one root element.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n\n**Note:** The `valueStateMessage` would be displayed if the component has\n`valueState` of type `Information`, `Critical` or `Negative`.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).\n\n__Supported Node Type/s:__ `Array<HTMLElement>`",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Fired when the text has changed and the focus leaves the component.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component changes at each keystroke or when
something is pasted.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, TextAreaInputEventDetail>) => void"}},onScroll:{defaultValue:null,description:`Fired when textarea is scrolled.

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onScroll",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, never>) => void"}},onSelect:{defaultValue:null,description:`Fired when some text has been selected.

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onSelect",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, never>) => void"}},onStopGeneration:{defaultValue:null,description:`Fired when the user requests to stop AI text generation.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onStopGeneration",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, never>) => void"}},onVersionChange:{defaultValue:null,description:`Fired when the user clicks on version navigation buttons.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onVersionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, TextAreaVersionChangeEventDetail>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents-ai**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the textarea.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents-ai**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the textarea.",name:"accessibleNameRef",required:!1,type:{name:"string"}},currentVersion:{defaultValue:{value:"0"},description:"Indicates the index of the currently displayed version.",name:"currentVersion",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:`Indicates whether the user can interact with the component or not.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},growing:{defaultValue:{value:"false"},description:"Enables the component to automatically grow and shrink dynamically with its content.",name:"growing",required:!1,type:{name:"boolean"}},growingMaxRows:{defaultValue:{value:"0"},description:"Defines the maximum number of rows that the component can grow.",name:"growingMaxRows",required:!1,type:{name:"number"}},loading:{defaultValue:{value:"false"},description:"Defines whether the `TextArea` is currently in a loading(processing) state.",name:"loading",required:!1,type:{name:"boolean"}},maxlength:{defaultValue:{value:"undefined"},description:"Defines the maximum number of characters that the `value` can have.",name:"maxlength",required:!1,type:{name:"number"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"undefined"},description:"Defines a short hint intended to aid the user with data entry when the component has no value.",name:"placeholder",required:!1,type:{name:"string"}},promptDescription:{defaultValue:null,description:"Defines the prompt description of the current action.",name:"promptDescription",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},rows:{defaultValue:{value:"0"},description:"Defines the number of visible text rows for the component.\n\n**Notes:**\n\n- If the `growing` property is enabled, this property defines the minimum rows to be displayed\nin the textarea.\n- The CSS `height` property wins over the `rows` property, if both are set.",name:"rows",required:!1,type:{name:"number"}},showExceededText:{defaultValue:{value:"false"},description:"Determines whether the characters exceeding the maximum allowed character count are visible\nin the component.\n\nIf set to `false`, the user is not allowed to enter more characters than what is set in the\n`maxlength` property.\nIf set to `true` the characters exceeding the `maxlength` value are selected on\npaste and the counter below the component displays their number.",name:"showExceededText",required:!1,type:{name:"boolean"}},totalVersions:{defaultValue:{value:"0"},description:`Indicates the total number of result versions available.

Notes:
Versioning is hidden if the value is \`0\``,name:"totalVersions",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"Defines the value of the component.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:`Defines the value state of the component.

**Note:** If \`maxlength\` property is set,
the component turns into "Critical" state once the characters exceeds the limit.
In this case, only the "Negative" state is considered and can be applied.`,name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Critical"'},{value:'"Information"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="TextArea",g.__docgenInfo={description:`The \`TextArea\` component extends the standard TextArea with Writing Assistant capabilities.
It provides AI-powered text generation, editing suggestions, and version management functionality.

### Structure
The \`TextArea\` consists of the following elements:
- TextArea: The main text input area with all standard textarea functionality
- WritingAssistant: Dedicated toolbar containing:
  - Versioning: A component with left/right navigation buttons and a label for browsing AI-generated versions
  - AI Button: Opens a menu that can be extended with custom AI generation options through slotting



__Note:__ This is a UI5 Web Component! [TextArea UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ai/TextArea) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"TextArea",props:{menu:{defaultValue:null,description:"Defines a slot for `ui5-menu` integration. This slot allows you to pass a `ui5-menu` instance that will be associated with the assistant.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"menu\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).\n\n__Supported Node Type/s:__ `HTMLElement`",name:"menu",required:!1,type:{name:"UI5WCSlotsNode"}},valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\nThe value state message slot should contain only one root element.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n\n**Note:** The `valueStateMessage` would be displayed if the component has\n`valueState` of type `Information`, `Critical` or `Negative`.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).\n\n__Supported Node Type/s:__ `Array<HTMLElement>`",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Fired when the text has changed and the focus leaves the component.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component changes at each keystroke or when
something is pasted.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, TextAreaInputEventDetail>) => void"}},onScroll:{defaultValue:null,description:`Fired when textarea is scrolled.

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onScroll",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, never>) => void"}},onSelect:{defaultValue:null,description:`Fired when some text has been selected.

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onSelect",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, never>) => void"}},onStopGeneration:{defaultValue:null,description:`Fired when the user requests to stop AI text generation.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onStopGeneration",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, never>) => void"}},onVersionChange:{defaultValue:null,description:`Fired when the user clicks on version navigation buttons.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onVersionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, TextAreaVersionChangeEventDetail>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents-ai**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the textarea.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents-ai**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the textarea.",name:"accessibleNameRef",required:!1,type:{name:"string"}},currentVersion:{defaultValue:{value:"0"},description:"Indicates the index of the currently displayed version.",name:"currentVersion",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:`Indicates whether the user can interact with the component or not.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},growing:{defaultValue:{value:"false"},description:"Enables the component to automatically grow and shrink dynamically with its content.",name:"growing",required:!1,type:{name:"boolean"}},growingMaxRows:{defaultValue:{value:"0"},description:"Defines the maximum number of rows that the component can grow.",name:"growingMaxRows",required:!1,type:{name:"number"}},loading:{defaultValue:{value:"false"},description:"Defines whether the `TextArea` is currently in a loading(processing) state.",name:"loading",required:!1,type:{name:"boolean"}},maxlength:{defaultValue:{value:"undefined"},description:"Defines the maximum number of characters that the `value` can have.",name:"maxlength",required:!1,type:{name:"number"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"undefined"},description:"Defines a short hint intended to aid the user with data entry when the component has no value.",name:"placeholder",required:!1,type:{name:"string"}},promptDescription:{defaultValue:null,description:"Defines the prompt description of the current action.",name:"promptDescription",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},rows:{defaultValue:{value:"0"},description:"Defines the number of visible text rows for the component.\n\n**Notes:**\n\n- If the `growing` property is enabled, this property defines the minimum rows to be displayed\nin the textarea.\n- The CSS `height` property wins over the `rows` property, if both are set.",name:"rows",required:!1,type:{name:"number"}},showExceededText:{defaultValue:{value:"false"},description:"Determines whether the characters exceeding the maximum allowed character count are visible\nin the component.\n\nIf set to `false`, the user is not allowed to enter more characters than what is set in the\n`maxlength` property.\nIf set to `true` the characters exceeding the `maxlength` value are selected on\npaste and the counter below the component displays their number.",name:"showExceededText",required:!1,type:{name:"boolean"}},totalVersions:{defaultValue:{value:"0"},description:`Indicates the total number of result versions available.

Notes:
Versioning is hidden if the value is \`0\``,name:"totalVersions",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"Defines the value of the component.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:`Defines the value state of the component.

**Note:** If \`maxlength\` property is set,
the component turns into "Critical" state once the characters exceeds the limit.
In this case, only the "Negative" state is considered and can be applied.`,name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Critical"'},{value:'"Information"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Le={title:"TextArea",component:g,argTypes:{menu:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},tags:["package:@ui5/webcomponents-ai","experimental"]},S={},Oe="Innovation managers operate with both creativity and business acumen, driving initiatives that cultivate an innovation-friendly culture, streamline the execution of new ideas, and ultimately unlock value for the organization and its customers.",N={name:"with Stream",args:{placeholder:"Write your content here...",rows:8},render(a){const{value:e,isTyping:n,isProcessing:o,setValue:i,startStream:t,stopStream:s}=me(),[l,W]=C.useState([]),[B,E]=C.useState(-1),[te,k]=C.useState(""),G=C.useRef(""),F=o||n,ne=p=>{const{action:b}=p.detail.item.dataset;o||!b||(G.current=b,k("Generating text..."),t({text:Oe,onComplete:se=>{W(P=>[...P,{action:b,endAction:"completed",timestamp:new Date().toISOString(),value:se,promptDescription:"Generated text"}]),E(P=>P+1),i(""),k("")}}))},oe=()=>{s(),z()},z=()=>{W(p=>[...p,{action:G.current,endAction:"stopped",timestamp:new Date().toISOString(),value:e,promptDescription:"Generated text (stopped)"}]),E(p=>p+1),i(""),k("")},ae=p=>{E(b=>p.detail.backwards?b-1:b+1),i("")},ie=p=>{i(p.target.value)};return fe(F,s,z),M.jsx(g,{...a,value:e||l[B]?.value||"",currentVersion:B+1,totalVersions:l.length,loading:F,promptDescription:te||l[B]?.promptDescription||"",onStopGeneration:oe,onVersionChange:ae,onInput:ie,menu:M.jsx(ge,{onItemClick:ne,children:M.jsx(Ie,{text:"Generate text","data-action":"generate"})})})}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"{}",...S.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};const Ue=["Default","WithFakeStream"],ot=Object.freeze(Object.defineProperty({__proto__:null,Default:S,WithFakeStream:N,__namedExportsOrder:Ue,default:Le},Symbol.toStringTag,{value:"Module"}));export{ot as C,S as D,N as W};

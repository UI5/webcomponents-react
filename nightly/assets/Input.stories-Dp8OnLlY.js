import{p as L,d as W,c as n,l as _,bS as z,au as j,a1 as V,cI as $,at as B,cJ as X,cK as Y,s as C,A as Z,m as J,az as x,av as Q,aJ as ee,cL as te,w as ne,j as u,r as S,cM as ie}from"./iframe-DsoLxTrs.js";import{c as ae,I as oe}from"./Input-Dk2NFph3.js";import{d as se,I as re,W as D,a as le,b as ue}from"./parameters-bundle.css-j-IoYmGi.js";import{R as ce}from"./ResponsivePopoverCommon.css-DQ_Sc_46.js";import{v as pe}from"./ValueStateMessage.css-DnTQjXaN.js";import"./navigation-left-arrow-fVzF7iUy.js";import"./navigation-right-arrow--m1ezy9Z.js";import{M as y}from"./index-BjmUn7DV.js";L("@ui5/webcomponents-theming","sap_horizon",async()=>W);L("@ui5/webcomponents-ai","sap_horizon",async()=>se);const de=`.ui5-ai-input-root{width:100%;height:100%;border-right:none}:host([focused]:not([opened])[_is-menu-open]) .ui5-ai-input-root:hover{border-radius:var(--_ui5-v2-18-0_input_border_radius);box-shadow:var(--sapField_Hover_Shadow)}:host([focused]:not([opened])[_is-menu-open]) .ui5-input-focusable-element:after{border:var(--_ui5-v2-18-0-input-border)}.ui5-input-busy-indicator{flex:1;width:100%;height:100%;position:relative;box-sizing:border-box;display:block}.ui5-ai-input-busy .ui5-ai-input-button-wrapper{background-color:inherit;border:none}.ui5-ai-input-button-wrapper{display:flex;justify-content:center;align-items:center;width:var(--_ui5-v2-18-0_input_icon_width);min-width:var(--_ui5-v2-18-0_input_icon_width);height:var(--_ui5-v2-18-0_input_icon_wrapper_height);padding:0;box-sizing:border-box;border-radius:var(--_ui5-v2-18-0_input_border_radius);cursor:pointer;border:none}.ui5-input-ai-button[hidden]{display:none}.ui5-ai-input-button-wrapper.ui5-input-button-menu-open,.ui5-ai-input-button-wrapper:active{background-color:var(--sapButton_Selected_Background);box-shadow:var(--sapField_Hover_Shadow);color:var(--sapButton_Selected_TextColor)}.ui5-ai-input-button-wrapper:not(.ui5-input-button-menu-open):not(.ui5-ai-input-loading):not(:active):hover,.ui5-ai-input-button-wrapper.ui5-ai-input-loading:hover{background-color:var(--sapButton_Hover_Background);border:1px solid var(--sapButton_Hover_BorderColor);box-shadow:inset 0 0 0 .0625rem var(--sapContent_Neutral_Shadow)}.ui5-input-button-menu-open{background-color:var(--sapButton_Selected_Background);box-shadow:var(--sapField_Hover_Shadow)}[ui5-menu-item].ui5-ai-versioning-menu-footer:hover{background-color:inherit}.ui5-ai-versioning-menu-footer::part(native-li){padding-right:.25rem}#ai-menu-btn{--_ui5-v2-18-0_button_focused_border: none}
`;function he(s){const e=s?.preContent||ge,i=s?.postContent||be;return n(B,{children:n("div",{class:`ui5-ai-input-root ui5-input-focusable-element ${this.loading&&"ui5-ai-input-busy"}`,onFocusIn:this._onfocusin,onFocusOut:this._onfocusout,children:_("div",{class:"ui5-input-content",children:[n(z,{id:`${this._id}-busyIndicator`,active:this.loading,class:"ui5-input-busy-indicator",children:n("div",{class:"ui5-input-root",part:"root",children:_("div",{class:"ui5-input-content",children:[e.call(this),n("input",{id:"inner",part:"input",class:"ui5-input-inner",style:this.styles.innerInput,type:this.inputNativeType,"inner-input":!0,"inner-input-with-icon":!!this.icon.length,disabled:this.disabled,readonly:this._readonly||this.loading,value:this._innerValue,placeholder:this._placeholder,maxlength:this.maxlength,role:this.accInfo.role,enterkeyhint:this.hint,"aria-controls":this.accInfo.ariaControls,"aria-invalid":this.accInfo.ariaInvalid,"aria-haspopup":this.accInfo.ariaHasPopup,"aria-describedby":this.accInfo.ariaDescribedBy,"aria-roledescription":this.accInfo.ariaRoledescription,"aria-autocomplete":this.accInfo.ariaAutoComplete,"aria-expanded":this.accInfo.ariaExpanded,"aria-label":this.ariaLabel,"aria-required":this.required,autocomplete:"off","data-sap-focus-ref":!0,step:this.nativeInputAttributes.step,min:this.nativeInputAttributes.min,max:this.nativeInputAttributes.max,onInput:this._handleNativeInput,onChange:this._handleChange,onSelect:this._handleSelect,onKeyDown:this._onkeydown,onKeyUp:this._onkeyup,onClick:this._click,onFocusIn:this.innerFocusIn}),this._effectiveShowClearIcon&&n("div",{tabindex:-1,part:"clear-icon-wrapper",class:"ui5-input-clear-icon-wrapper inputIcon",onClick:this._clear,onMouseDown:this._iconMouseDown,children:n(j,{part:"clear-icon",class:"ui5-input-clear-icon",name:"decline",tabindex:-1,accessibleName:this.clearIconAccessibleName})}),this.icon.length>0&&n("div",{class:"ui5-input-icon-root",tabindex:-1,children:n("slot",{name:"icon"})}),n("div",{class:"ui5-input-value-state-icon",children:this._valueStateInputIcon}),i.call(this),this.accInfo.ariaDescription&&n("span",{id:"descr",class:"ui5-hidden-text",children:this.accInfo.ariaDescription}),this.accInfo.accessibleDescription&&n("span",{id:"accessibleDescription",class:"ui5-hidden-text",children:this.accInfo.accessibleDescription}),this.linksInAriaValueStateHiddenText.length>0&&n("span",{id:"hiddenText-value-state-link-shortcut",class:"ui5-hidden-text",children:this.valueStateLinksShortcutsTextAcc}),this.hasValueState&&n("span",{id:"valueStateDesc",class:"ui5-hidden-text",children:this.ariaValueStateHiddenText})]})})}),n(V,{id:"ai-menu-btn",hidden:!this.isFocused&&!this.loading||!this.hasActions||this.readonly,tabIndex:-1,class:`ui5-input-ai-button ui5-ai-input-button-wrapper ${this._isMenuOpen&&"ui5-input-button-menu-open"} ${this.loading&&"ui5-ai-input-loading"}`,design:"Transparent",icon:this.loading?"stop":"ai",onClick:this._handleAIButtonClick,onKeyDown:this._handleAIButtonKeydown,"aria-keyshortcuts":this.loading?"Esc":"Shift + F4",tooltip:this.loading?this.stopGeneratingTooltip:this.ariaLabel,accessibilityAttributes:{hasPopup:this.loading?"false":"menu"}}),_($,{onItemClick:this._onMenuIconClick,onBeforeOpen:()=>{this._isMenuOpen=!0},onBeforeClose:()=>{this._isMenuOpen=!1},onClose:()=>{this.loading||this.focus()},children:[n("slot",{name:"actions"}),this.totalVersions>1&&me.call(this)]})]})})})}function me(){return _(B,{children:[n(Y,{}),_(X,{type:"Inactive",class:"ui5-ai-versioning-menu-footer",text:`${this.currentVersion} / ${this.totalVersions}`,children:[n(V,{id:"arrow-left",class:"versioning-button",slot:"endContent",design:"Transparent",icon:"navigation-left-arrow",tooltip:this.previousButtonAccessibleName,accessibleName:this.previousButtonAccessibleName,"aria-keyshortcut":"Shift+Ctrl+Z",disabled:this.currentVersion<=1,onClick:this._handlePreviousButtonClick,"data-ui5-versioning-button":"previous"}),n(V,{id:"arrow-right",class:"versioning-button",slot:"endContent",design:"Transparent",icon:"navigation-right-arrow",tooltip:this.nextButtonAccessibleName,accessibleName:this.nextButtonAccessibleName,"aria-keyshortcut":"Shift+Ctrl+Y",disabled:this.currentVersion>=this.totalVersions,onClick:this._handleNextButtonClick,"data-ui5-versioning-button":"next"})]})]})}function ge(){}function be(){}var v=function(s,e,i,a){var r=arguments.length,l=r<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(s,e,i,a);else for(var b=s.length-1;b>=0;b--)(d=s[b])&&(l=(r<3?d(l):r>3?d(e,i,l):d(e,i))||l);return r>3&&l&&Object.defineProperty(e,i,l),l},g;let p=g=class extends oe{constructor(){super(...arguments),this.currentVersion=0,this.totalVersions=0,this.loading=!1,this._isMenuOpen=!1,this._previousCurrentStep=0,this._previousTotalSteps=0,this.isFocused=!1,this._handleAIButtonKeydown=e=>{ee(e)&&this.loading&&this.fireDecoratorEvent("stop-generation")}}_onfocusin(e){super._onfocusin(e),this.isFocused=!0}_onfocusout(e){super._onfocusout(e),this.isFocused=!1}_manageVersionButtonsFocus(){const e=this.shadowRoot?.getElementById("arrow-left"),i=this.shadowRoot?.getElementById("arrow-right"),a=this.currentVersion<=1,r=this.currentVersion>=this.totalVersions;a&&e?setTimeout(()=>{i.focus()},0):r&&i&&setTimeout(()=>{e.focus()},0)}_handleAIButtonClick(e){if(e.target?.icon==="stop")this.fireDecoratorEvent("stop-generation");else{const a=this.shadowRoot?.querySelector(".ui5-input-ai-button");this.fireDecoratorEvent("button-click"),this.menu.opener=a,this.menu.open=!0,this.menu.horizontalAlign="End"}}_handleVersionChange(e){this.fireDecoratorEvent("version-change",{backwards:e.detail.backwards}),this._manageVersionButtonsFocus()}_handlePreviousButtonClick(){this._handleVersionChange(new CustomEvent("version-change",{detail:{backwards:!0}}))}_handleNextButtonClick(){this._handleVersionChange(new CustomEvent("version-change",{detail:{backwards:!1}}))}_onMenuIconClick(e){this.fireDecoratorEvent("item-click",e.detail)}_onkeydown(e){super._onkeydown(e);const i=this.shadowRoot?.getElementById("ai-menu-btn");te(e)&&(i?.focus(),this.menu.opener=i,this.menu.open=!0,this.menu.horizontalAlign="End");const a=e.key==="Z"&&e.shiftKey&&e.ctrlKey,r=e.key==="Y"&&e.shiftKey&&e.ctrlKey;a?(e.preventDefault(),this._handlePreviousButtonClick()):r&&(e.preventDefault(),this._handleNextButtonClick())}get hasActions(){return!!this?.menu?.getSlottedNodes("items").length}get ariaLabel(){return this.accessibleName||!this.loading?g.i18nBundle.getText(re):g.i18nBundle.getText(D)}get stopGeneratingTooltip(){return g.i18nBundle.getText(D)}get nextButtonAccessibleName(){return g.i18nBundle.getText(le)}get previousButtonAccessibleName(){return g.i18nBundle.getText(ue)}get menu(){return this.shadowRoot?.querySelector("[ui5-menu]")}};v([C({type:Number})],p.prototype,"currentVersion",void 0);v([C({type:Number})],p.prototype,"totalVersions",void 0);v([C({type:Boolean})],p.prototype,"loading",void 0);v([C({type:Boolean})],p.prototype,"_isMenuOpen",void 0);v([Z({type:HTMLElement,invalidateOnChildChange:!0})],p.prototype,"actions",void 0);p=g=v([J({tag:"ui5-ai-input",languageAware:!0,renderer:Q,template:he,styles:[de,ae,ce,pe]}),x("button-click",{cancelable:!0}),x("item-click"),x("stop-generation"),x("version-change")],p);p.define();const f=ne("ui5-ai-input",["accessibleDescription","accessibleDescriptionRef","accessibleName","accessibleNameRef","currentVersion","maxlength","name","placeholder","totalVersions","type","value","valueState"],["disabled","loading","noTypeahead","open","readonly","required","showClearIcon","showSuggestions"],["actions","icon","valueStateMessage"],["button-click","change","close","input","item-click","open","select","selection-change","stop-generation","version-change"]);f.displayName="Input";try{f.displayName="Input",f.__docgenInfo={description:`The \`Input\` component extends the standard \`ui5-input\` with **AI Writing Assistant** capabilities.

### Structure

The \`Input\` consists of the following main parts:

- **Input Field** – Inherits all standard Input behaviors.
- **AI Action Button** – Appears when focused or loading, providing access to AI-related actions or stopping generation.

The component automatically determines which elements to render based on its internal state:
- The AI Button is only shown when there are available \`actions\`.
- The version navigation appears only when \`totalVersions > 1\`.

### Keyboard Support

- **Shift + F4** — Opens the AI menu.
- **Ctrl + Shift + Z / Y** — Navigates backward/forward between AI-generated versions.



__Note:__ This is a UI5 Web Component! [Input UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ai/Input) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"Input",props:{actions:{defaultValue:null,description:`Defines the items of the menu for the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="actions"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:"actions",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the suggestion items.\n\n**Note:** The suggestions would be displayed only if the `showSuggestions`\nproperty is set to `true`.\n\n**Note:** The `<ui5-suggestion-item>`, `<ui5-suggestion-item-group>` and `ui5-suggestion-item-custom` are recommended to be used as suggestion items.\n\n__Supported Node Type/s:__ `Array<IInputSuggestionItem>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed in the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<IIcon>\``,name:"icon",required:!1,type:{name:"UI5WCSlotsNode"}},valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.
The value state message slot should contain only one root element.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

**Note:** If the component has \`suggestionItems\`,
the \`valueStateMessage\` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onButtonClick:{defaultValue:null,description:`Fired when the user selects the AI button.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onButtonClick",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onChange:{defaultValue:null,description:`Fired when the input operation has finished by pressing Enter or on focusout.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onClose:{defaultValue:null,description:`Fired when the suggestions picker is closed.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component changes at each keystroke,
and when a suggestion item has been selected.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onItemClick:{defaultValue:null,description:`Fired when an item from the AI actions menu is clicked.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, MenuItemClickEventDetail>) => void"}},onOpen:{defaultValue:null,description:`Fired when the suggestions picker is open.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onSelect:{defaultValue:null,description:`Fired when some text has been selected.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onSelect",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onSelectionChange:{defaultValue:null,description:`Fired when the user navigates to a suggestion item via the ARROW keys,
as a preview, before the final selection.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, InputSelectionChangeEventDetail>) => void"}},onStopGeneration:{defaultValue:null,description:`Fired when the user selects the "Stop" button to stop ongoing AI text generation.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onStopGeneration",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onVersionChange:{defaultValue:null,description:`Fired when the user selects the version navigation buttons.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onVersionChange",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, InputVersionChangeEventDetail>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents-ai**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the input.

**Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents-ai**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},currentVersion:{defaultValue:{value:"0"},description:"Indicates the index of the currently displayed version.",name:"currentVersion",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Defines whether the AI Writing Assistant is currently loading.\n\nWhen `true`, indicates that an AI action is in progress.",name:"loading",required:!1,type:{name:"boolean"}},maxlength:{defaultValue:{value:"undefined"},description:`Sets the maximum number of characters available in the input field.

**Note:** This property is not compatible with the ui5-input type InputType.Number. If the ui5-input type is set to Number, the maxlength value is ignored.`,name:"maxlength",required:!1,type:{name:"number"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},noTypeahead:{defaultValue:{value:"false"},description:`Defines whether the value will be autcompleted to match an item

**Note:** Available since [v1.4.0](https://github.com/UI5/webcomponents/releases/tag/v1.4.0) of **@ui5/webcomponents-ai**.`,name:"noTypeahead",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"false"},description:"Defines whether the suggestions picker is open.\nThe picker will not open if the `showSuggestions` property is set to `false`, the input is disabled or the input is readonly.\nThe picker will close automatically and `close` event will be fired if the input is not in the viewport.\n\n**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.",name:"open",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint intended to aid the user with data entry when the
component has no value.`,name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},showClearIcon:{defaultValue:{value:"false"},description:`Defines whether the clear icon of the input will be shown.

**Note:** Available since [v1.2.0](https://github.com/UI5/webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents-ai**.`,name:"showClearIcon",required:!1,type:{name:"boolean"}},showSuggestions:{defaultValue:{value:"false"},description:"Defines whether the component should show suggestions, if such are present.",name:"showSuggestions",required:!1,type:{name:"boolean"}},totalVersions:{defaultValue:{value:"0"},description:`Indicates the total number of result versions available.

When not set or set to 0, the versioning will be hidden.`,name:"totalVersions",required:!1,type:{name:"number"}},type:{defaultValue:{value:'"Text"'},description:`Defines the HTML type of the component.

**Notes:**

- The particular effect of this property differs depending on the browser
and the current language settings, especially for type \`Number\`.
- The property is mostly intended to be used with touch devices
that use different soft keyboard layouts depending on the given input type.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'},{value:'"Search"'},{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'},{value:'"Search"'}]}},value:{defaultValue:null,description:`Defines the value of the component.

**Note:** The property is updated upon typing.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Information"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const fe={title:"Input",component:f,argTypes:{actions:{control:{disable:!0}},children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},tags:["package:@ui5/webcomponents-ai","experimental"]},I={render(s){return u.jsx(f,{...s,actions:u.jsx(y,{text:"Generate","data-action":"generate"},"generate")})}},m={en:"Innovation managers lead with creativity.",bg:"Мениджърите по иновации водят с креативност.",de:"Innovationsmanager führen mit Kreativität.",expanded:"They combine creative ideas with strategic action.",simplified:"They lead using creativity.",summarized:"Driving innovation creatively."},ve=[{text:"Regenerate",action:"regenerate",processingLabel:"Regenerating text...",completedLabel:"Regenerated text",textKey:"en",replaces:"generate"},{text:"Fix spelling and grammar",action:"fixSpelling",processingLabel:"Fixing spelling and grammar...",completedLabel:"Fixed spelling and grammar",textKey:"en"},{text:"Rewrite text",isGroup:!0,children:[{text:"Simplify",action:"simplify",processingLabel:"Simplifying text...",completedLabel:"Simplified text",textKey:"simplified",isChild:!0},{text:"Expand",action:"expand",processingLabel:"Expanding text...",completedLabel:"Expanded text",textKey:"expanded",isChild:!0},{text:"Summarize",action:"summarize",processingLabel:"Summarizing text...",completedLabel:"Summarized text",textKey:"summarized",isChild:!0}]},{text:"Translate",isGroup:!0,children:[{text:"English",action:"translateEN",processingLabel:"Translating to English...",completedLabel:"Translated to English",textKey:"en",isChild:!0},{text:"German",action:"translateDE",processingLabel:"Translating to German...",completedLabel:"Translated to German",textKey:"de",isChild:!0},{text:"Bulgarian",action:"translateBG",processingLabel:"Translating to Bulgarian...",completedLabel:"Translated to Bulgarian",textKey:"bg",isChild:!0}]}],E="Write your title",w={name:"with Stream",render:s=>{const[e,i]=S.useState([]),[a,r]=S.useState(-1),[l,d]=S.useState(E),b=e.length>0,A=S.useRef(""),{value:M,isTyping:R,isProcessing:T,setValue:N,startStream:P,stopStream:U}=ie(),q=t=>{r(o=>t.detail.backwards?o-1:o+1)},H=t=>{const{action:o,processingLabel:c,textKey:G}=t.detail.item.dataset;if(T||!o)return;A.current=o;let h=m[G??"en"];switch(o){case"simplify":{h=m.simplified;break}case"expand":{h=m.expanded;break}case"summarize":{h=m.expanded;break}case"translateEN":{h=m.en;break}case"translateDE":{h=m.de;break}case"translateBG":{h=m.bg;break}}d(c),P({text:h,onProcessingComplete:()=>{d(E)},onComplete:K=>{i(k=>[...k,{action:o,endAction:"completed",timestamp:new Date().toISOString(),value:K}]),r(k=>k+1),N("")}})},F=t=>{U(),i(o=>[...o,{action:A.current,endAction:"stopped",timestamp:new Date().toISOString(),value:t.target.value}]),r(o=>o+1),N("")},O=t=>{N(t.target.value)};return u.jsx(f,{...s,style:{width:"400px"},value:T?"":M||e[a]?.value||"",placeholder:l,currentVersion:a+1,totalVersions:e.length,loading:T||R,onVersionChange:q,onStopGeneration:F,onItemClick:H,onInput:O,actions:u.jsx(u.Fragment,{children:b?ve.map((t,o)=>t.replaces&&!b?null:t.isGroup&&Array.isArray(t.children)?u.jsx(y,{text:t.text,children:t.children.map(c=>u.jsx(y,{text:c.text,"data-action":c.action,"data-processing-label":c.processingLabel,"data-completed-label":c.completedLabel,"data-text-key":c.textKey},c.text))},o):u.jsx(y,{text:t.text,"data-action":t.action,"data-processing-label":t.processingLabel,"data-completed-label":t.completedLabel,"data-text-key":t.textKey},t.text)):u.jsx(y,{text:"Generate","data-action":"generate","data-processing-label":"Processing..."},"generate")})})}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Input {...args} actions={<MenuItem key="generate" text="Generate" data-action="generate" />} />;
  }
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'with Stream',
  render: args => {
    const [versionHistory, setVersionHistory] = useState<VersionHistoryItem[]>([]);
    const [currentHistoryIndex, setCurrentHistoryIndex] = useState(-1);
    const [placeholder, setPlaceholder] = useState(initialPlaceholder);
    const hasHistory = versionHistory.length > 0;
    const currentActionRef = useRef<string>('');
    const {
      value,
      isTyping,
      isProcessing,
      setValue,
      startStream,
      stopStream
    } = useFakeStream();
    const handleVersionChange: InputPropTypes['onVersionChange'] = e => {
      setCurrentHistoryIndex(prev => e.detail.backwards ? prev - 1 : prev + 1);
    };
    const handleItemClick: InputPropTypes['onItemClick'] = e => {
      const {
        action,
        processingLabel,
        textKey
      } = e.detail.item.dataset;
      if (isProcessing || !action) {
        return;
      }
      currentActionRef.current = action;
      let text = SAMPLE_TEXTS[textKey ?? 'en'];
      switch (action) {
        case 'simplify':
          {
            text = SAMPLE_TEXTS.simplified;
            break;
          }
        case 'expand':
          {
            text = SAMPLE_TEXTS.expanded;
            break;
          }
        case 'summarize':
          {
            text = SAMPLE_TEXTS.expanded;
            break;
          }
        case 'translateEN':
          {
            text = SAMPLE_TEXTS.en;
            break;
          }
        case 'translateDE':
          {
            text = SAMPLE_TEXTS.de;
            break;
          }
        case 'translateBG':
          {
            text = SAMPLE_TEXTS.bg;
            break;
          }
      }
      setPlaceholder(processingLabel);
      startStream({
        text,
        onProcessingComplete: () => {
          setPlaceholder(initialPlaceholder);
        },
        onComplete: fullText => {
          setVersionHistory(prev => [...prev, {
            action,
            endAction: 'completed',
            timestamp: new Date().toISOString(),
            value: fullText
          }]);
          setCurrentHistoryIndex(prev => prev + 1);
          setValue('');
        }
      });
    };
    const handleStopGeneration: InputPropTypes['onStopGeneration'] = e => {
      stopStream();
      setVersionHistory(prev => [...prev, {
        action: currentActionRef.current,
        endAction: 'stopped',
        timestamp: new Date().toISOString(),
        value: e.target.value
      }]);
      setCurrentHistoryIndex(prev => prev + 1);
      setValue('');
    };
    const handleInput: InputPropTypes['onInput'] = e => {
      setValue(e.target.value);
    };
    return <Input {...args} style={{
      width: '400px'
    }} value={isProcessing ? '' : value || versionHistory[currentHistoryIndex]?.value || ''} placeholder={placeholder} currentVersion={currentHistoryIndex + 1} totalVersions={versionHistory.length} loading={isProcessing || isTyping} onVersionChange={handleVersionChange} onStopGeneration={handleStopGeneration} onItemClick={handleItemClick} onInput={handleInput} actions={<>
            {hasHistory ? MENU_CONFIG.map((configItem, index) => {
        if (configItem.replaces && !hasHistory) {
          return null;
        }
        if (configItem.isGroup && Array.isArray(configItem.children)) {
          return <MenuItem key={index} text={configItem.text}>
                      {configItem.children.map(child => <MenuItem key={child.text} text={child.text} data-action={child.action} data-processing-label={child.processingLabel} data-completed-label={child.completedLabel} data-text-key={child.textKey} />)}
                    </MenuItem>;
        }
        return <MenuItem key={configItem.text} text={configItem.text} data-action={configItem.action} data-processing-label={configItem.processingLabel} data-completed-label={configItem.completedLabel} data-text-key={configItem.textKey} />;
      }) : <MenuItem key="generate" text="Generate" data-action="generate" data-processing-label="Processing..." />}
          </>} />;
  }
}`,...w.parameters?.docs?.source}}};const ye=["Default","WithFakeStream"],Ve=Object.freeze(Object.defineProperty({__proto__:null,Default:I,WithFakeStream:w,__namedExportsOrder:ye,default:fe},Symbol.toStringTag,{value:"Module"}));export{Ve as C,I as D,w as W};

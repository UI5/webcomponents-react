import{p as g,d as V,b as R,l as E,c as T,s as d,B as C,m as D,b6 as S,ai as x,w as _,b4 as j,j as l,r as q,V as W}from"./iframe-BpIV0mIG.js";import{a as P,T as N}from"./index-BFZHnBZg.js";import{S as k}from"./Select-CtSXIsWd.js";import{O as F}from"./Option-BMHYCgFj.js";import{T as U}from"./ToolbarButton-ZAB4WYn_.js";import"./ToolbarSpacer-Cf2eSgJQ.js";g("@ui5/webcomponents-theming","sap_horizon",async()=>V);g("@ui5/webcomponents","sap_horizon",async()=>R);const L=`:host(:not([hidden])){width:100%}:host([is-overflowed]) .ui5-tb-popover-item{align-items:inherit;width:100%}
`;function B(){return E(k,{class:this.classes.root,style:this.styles,value:this.value,"data-ui5-external-action-item-id":this._id,valueState:this.valueState,disabled:this.disabled,accessibleName:this.accessibleName,accessibleNameRef:this.accessibleNameRef,onClick:(...t)=>this.onClick(...t),onClose:(...t)=>this.onClose(...t),onOpen:(...t)=>this.onOpen(...t),onChange:(...t)=>this.onChange(...t),children:[this.hasCustomLabel&&T("slot",{name:"label",slot:"label"}),this.options.map((t,e)=>T(F,{selected:t.selected,"data-ui5-external-action-item-index":e,children:t.textContent}))]})}var u=function(t,e,n,a){var r=arguments.length,o=r<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(r<3?i(o):r>3?i(e,n,o):i(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o};let c=class extends U{constructor(){super(...arguments),this.valueState="None",this.disabled=!1,this._value=""}set value(e){this.select&&this.select.value!==e&&(this.select.value=e),this._value=e}get value(){return this.select?this.select.value:this._value}get select(){return this.shadowRoot.querySelector("[ui5-select]")}onClick(e){e.stopImmediatePropagation(),!this.fireDecoratorEvent("click",{targetRef:e.target})&&!this.preventOverflowClosing&&this.fireDecoratorEvent("close-overflow")}onOpen(e){e.stopImmediatePropagation(),!this.fireDecoratorEvent("open",{targetRef:e.target})&&this.fireDecoratorEvent("close-overflow")}onClose(e){e.stopImmediatePropagation(),!this.fireDecoratorEvent("close",{targetRef:e.target})&&this.fireDecoratorEvent("close-overflow")}onChange(e){e.stopImmediatePropagation(),!this.fireDecoratorEvent("change",{...e.detail,targetRef:e.target})||this.fireDecoratorEvent("close-overflow"),this._syncOptions(e.detail.selectedOption)}_syncOptions(e){const n=Number(e?.getAttribute("data-ui5-external-action-item-index"));this.options.forEach((a,r)=>{r===n?a.setAttribute("selected",""):a.removeAttribute("selected")})}get styles(){return{width:this.isOverflowed?void 0:this.width}}get hasCustomLabel(){return!!this.label.length}};u([d()],c.prototype,"width",void 0);u([C({default:!0,type:HTMLElement})],c.prototype,"options",void 0);u([C()],c.prototype,"label",void 0);u([d()],c.prototype,"valueState",void 0);u([d({type:Boolean})],c.prototype,"disabled",void 0);u([d()],c.prototype,"accessibleName",void 0);u([d()],c.prototype,"accessibleNameRef",void 0);u([d()],c.prototype,"value",null);c=u([D({tag:"ui5-toolbar-select",template:B,renderer:x,styles:L}),S("change",{bubbles:!0,cancelable:!0}),S("open",{bubbles:!0}),S("close")],c);c.define();const m=_("ui5-toolbar-select",["accessibleName","accessibleNameRef","overflowPriority","value","valueState","width"],["disabled","preventOverflowClosing"],["label"],["change","close","open"]);m.displayName="ToolbarSelect";try{m.displayName="ToolbarSelect",m.__docgenInfo={description:'The `ToolbarSelect` component is used to create a toolbar drop-down list.\nThe items inside the `ToolbarSelect` define the available options by using the `ToolbarSelectOption` component.\n\n\n\n`import "@ui5/webcomponents/dist/ToolbarSelectOption.js";` (comes with `ToolbarSelect`)\n\n__Note:__ This is a UI5 Web Component! [ToolbarSelect UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSelect) | [Repository](https://github.com/UI5/webcomponents)',displayName:"ToolbarSelect",props:{children:{defaultValue:null,description:`Defines the component options.

**Note:** Only one selected option is allowed.
If more than one option is defined as selected, the last one would be considered as the selected one.

**Note:** Use the \`ToolbarSelectOption\` component to define the desired options.

__Supported Node Type/s:__ \`Array<ToolbarSelectOption>\``,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},label:{defaultValue:null,description:`Defines the HTML element that will be displayed in the component input part,
representing the selected option.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="label"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:"label",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Fired when the selected option changes.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarSelectDomRef, ToolbarSelectChangeEventDetail>) => void"}},onClose:{defaultValue:null,description:`Fired after the component's dropdown menu closes.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarSelectDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired after the component's dropdown menu opens.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarSelectDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the select.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Defines the value of the component:

**Note:** Available since [v2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents**.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Critical"'},{value:'"Information"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'}]}},width:{defaultValue:{value:"undefined"},description:`Defines the width of the select.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{m.displayName="ToolbarSelect",m.__docgenInfo={description:'The `ToolbarSelect` component is used to create a toolbar drop-down list.\nThe items inside the `ToolbarSelect` define the available options by using the `ToolbarSelectOption` component.\n\n\n\n`import "@ui5/webcomponents/dist/ToolbarSelectOption.js";` (comes with `ToolbarSelect`)\n\n__Note:__ This is a UI5 Web Component! [ToolbarSelect UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSelect) | [Repository](https://github.com/UI5/webcomponents)',displayName:"ToolbarSelect",props:{children:{defaultValue:null,description:`Defines the component options.

**Note:** Only one selected option is allowed.
If more than one option is defined as selected, the last one would be considered as the selected one.

**Note:** Use the \`ToolbarSelectOption\` component to define the desired options.

__Supported Node Type/s:__ \`Array<ToolbarSelectOption>\``,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},label:{defaultValue:null,description:`Defines the HTML element that will be displayed in the component input part,
representing the selected option.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="label"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:"label",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Fired when the selected option changes.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarSelectDomRef, ToolbarSelectChangeEventDetail>) => void"}},onClose:{defaultValue:null,description:`Fired after the component's dropdown menu closes.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarSelectDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired after the component's dropdown menu opens.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarSelectDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the select.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Defines the value of the component:

**Note:** Available since [v2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents**.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Critical"'},{value:'"Information"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'}]}},width:{defaultValue:{value:"undefined"},description:`Defines the width of the select.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var I=function(t,e,n,a){var r=arguments.length,o=r<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(r<3?i(o):r>3?i(e,n,o):i(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o};let w=class extends j{constructor(){super(...arguments),this.selected=!1}};I([d({type:Boolean})],w.prototype,"selected",void 0);I([C({type:Node,default:!0,invalidateOnChildChange:!0})],w.prototype,"text",void 0);w=I([D("ui5-toolbar-select-option")],w);w.define();const p=_("ui5-toolbar-select-option",[],["selected"],[],[]);p.displayName="ToolbarSelectOption";try{p.displayName="ToolbarSelectOption",p.__docgenInfo={description:"The `ToolbarSelectOption` component defines the content of an option in the `ToolbarSelect`.\n\n__Note:__ This is a UI5 Web Component! [ToolbarSelectOption UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSelectOption) | [Repository](https://github.com/UI5/webcomponents)",displayName:"ToolbarSelectOption",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

__Supported Node Type/s:__ \`Array<Node>\``,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="ToolbarSelectOption",p.__docgenInfo={description:"The `ToolbarSelectOption` component defines the content of an option in the `ToolbarSelect`.\n\n__Note:__ This is a UI5 Web Component! [ToolbarSelectOption UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSelectOption) | [Repository](https://github.com/UI5/webcomponents)",displayName:"ToolbarSelectOption",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

__Supported Node Type/s:__ \`Array<Node>\``,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function z(){return T("div",{class:"ui5-tb-separator ui5-tb-item","data-ui5-external-action-item-id":this._id})}g("@ui5/webcomponents-theming","sap_horizon",async()=>V);g("@ui5/webcomponents","sap_horizon",async()=>R);const M=`.ui5-tb-separator{height:var(--_ui5-v2-16-1-toolbar-separator-height);width:.0625rem;background:var(--sapToolbar_SeparatorColor);box-sizing:border-box}
`;var A=function(t,e,n,a){var r=arguments.length,o=r<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(r<3?i(o):r>3?i(e,n,o):i(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o};let y=class extends U{constructor(){super(...arguments),this.visible=!1}get isSeparator(){return!0}get isInteractive(){return!1}};A([d({type:Boolean})],y.prototype,"visible",void 0);y=A([D({tag:"ui5-toolbar-separator",template:z,renderer:x,styles:[M]})],y);y.define();const f=_("ui5-toolbar-separator",["overflowPriority"],["preventOverflowClosing"],[],[]);f.displayName="ToolbarSeparator";try{f.displayName="ToolbarSeparator",f.__docgenInfo={description:`The \`ToolbarSeparator\` is an element, used for visual separation between two elements.
It takes no space in calculating toolbar items width.

__Note:__ This is a UI5 Web Component! [ToolbarSeparator UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSeparator) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"ToolbarSeparator",props:{overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="ToolbarSeparator",f.__docgenInfo={description:`The \`ToolbarSeparator\` is an element, used for visual separation between two elements.
It takes no space in calculating toolbar items width.

__Note:__ This is a UI5 Web Component! [ToolbarSeparator UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSeparator) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"ToolbarSeparator",props:{overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const h=_("ui5-toolbar-spacer",["overflowPriority","width"],["preventOverflowClosing"],[],[]);h.displayName="ToolbarSpacer";try{h.displayName="ToolbarSpacer",h.__docgenInfo={description:`The \`ToolbarSpacer\` is an element, used for taking needed space for toolbar items to take 100% width.
It takes no space in calculating toolbar items width.

__Note:__ This is a UI5 Web Component! [ToolbarSpacer UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSpacer) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"ToolbarSpacer",props:{overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"undefined"},description:`Defines the width of the spacer.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="ToolbarSpacer",h.__docgenInfo={description:`The \`ToolbarSpacer\` is an element, used for taking needed space for toolbar items to take 100% width.
It takes no space in calculating toolbar items width.

__Note:__ This is a UI5 Web Component! [ToolbarSpacer UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSpacer) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"ToolbarSpacer",props:{overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"undefined"},description:`Defines the width of the spacer.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var O;(function(t){t.Start="Start",t.End="End"})(O||(O={}));const H={title:"Layouts & Floorplans / Toolbar",component:P,argTypes:{children:{control:{disable:!0}}},args:{alignContent:O.Start},tags:["package:@ui5/webcomponents"]},b={render:t=>l.jsxs(P,{...t,children:[l.jsx(N,{text:"Button 1"}),l.jsxs(m,{children:[l.jsx(p,{children:"Option 1"}),l.jsx(p,{children:"Option 2"}),l.jsx(p,{children:"Option 3"})]}),l.jsx(f,{}),l.jsx(h,{}),l.jsx(f,{}),l.jsx(N,{text:"Button 2"}),l.jsxs(m,{children:[l.jsx(p,{children:"Option 1"}),l.jsx(p,{children:"Option 2"}),l.jsx(p,{children:"Option 3"})]})]})},v={name:"Opening Popovers via ToolbarButton",render(t){const[e,n]=q.useState(!1),a=q.useRef(null);return l.jsxs(l.Fragment,{children:[l.jsx(P,{...t,children:l.jsx(N,{onClick:r=>{const{targetRef:o}=r.detail;a.current&&(a.current.opener=o,n(!0))},text:"Open Popover"})}),l.jsx(W,{open:e,ref:a,onClose:()=>{n(!1)},children:"Content"})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Toolbar {...args}>
      <ToolbarButton text="Button 1" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
      <ToolbarSeparator />
      <ToolbarSpacer />
      <ToolbarSeparator />
      <ToolbarButton text="Button 2" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
    </Toolbar>
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Opening Popovers via ToolbarButton',
  render(args) {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const popoverRef = useRef<PopoverDomRef>(null);
    return <>
        <Toolbar {...args}>
          <ToolbarButton onClick={e => {
          const {
            targetRef
          } = e.detail;
          if (popoverRef.current) {
            popoverRef.current.opener = targetRef;
            setPopoverOpen(true);
          }
        }} text="Open Popover" />
        </Toolbar>
        <Popover open={popoverOpen} ref={popoverRef} onClose={() => {
        setPopoverOpen(false);
      }}>
          Content
        </Popover>
      </>;
  }
}`,...v.parameters?.docs?.source}}};const $=["Default","OpenPopover"],oe=Object.freeze(Object.defineProperty({__proto__:null,Default:b,OpenPopover:v,__namedExportsOrder:$,default:H},Symbol.toStringTag,{value:"Module"}));export{oe as C,b as D,v as O,m as T,p as a,f as b,h as c};

import{p as g,d as I,b as j,l as E,c as _,s as d,A as C,m as D,az as T,av as q,w as S,aA as A,j as r,r as R,V as B}from"./iframe-BH4bVelf.js";import{a as x,T as O}from"./index-C9Tx5UXj.js";import{S as F}from"./Select-5ewiLwL1.js";import{O as W}from"./Option-D8eBTNON.js";import{T as V}from"./ToolbarButton-B4iqw5Ro.js";import"./ToolbarSpacer-CJTbp1Jt.js";g("@ui5/webcomponents-theming","sap_horizon",async()=>I);g("@ui5/webcomponents","sap_horizon",async()=>j);const z=`:host(:not([hidden])){width:100%}:host([is-overflowed]) .ui5-tb-popover-item{align-items:inherit;width:100%}
`;function k(){return E(F,{class:this.classes.root,style:this.styles,value:this.value,"data-ui5-external-action-item-id":this._id,valueState:this.valueState,disabled:this.disabled,accessibleName:this.accessibleName,accessibleNameRef:this.accessibleNameRef,onClick:(...t)=>this.onClick(...t),onClose:(...t)=>this.onClose(...t),onOpen:(...t)=>this.onOpen(...t),onChange:(...t)=>this.onChange(...t),children:[this.hasCustomLabel&&_("slot",{name:"label",slot:"label"}),this.options.map((t,e)=>_(W,{selected:t.selected,"data-ui5-external-action-item-index":e,children:t.textContent}))]})}var u=function(t,e,n,a){var l=arguments.length,o=l<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(l<3?i(o):l>3?i(e,n,o):i(e,n))||o);return l>3&&o&&Object.defineProperty(e,n,o),o};let p=class extends V{constructor(){super(...arguments),this.valueState="None",this.disabled=!1,this._value=""}set value(e){this.select&&this.select.value!==e&&(this.select.value=e),this._value=e}get value(){return this.select?this.select.value:this._value}get select(){return this.shadowRoot.querySelector("[ui5-select]")}onClick(e){e.stopImmediatePropagation(),!this.fireDecoratorEvent("click",{targetRef:e.target})&&!this.preventOverflowClosing&&this.fireDecoratorEvent("close-overflow")}onOpen(e){e.stopImmediatePropagation(),!this.fireDecoratorEvent("open",{targetRef:e.target})&&this.fireDecoratorEvent("close-overflow")}onClose(e){e.stopImmediatePropagation(),!this.fireDecoratorEvent("close",{targetRef:e.target})&&this.fireDecoratorEvent("close-overflow")}onChange(e){e.stopImmediatePropagation(),!this.fireDecoratorEvent("change",{...e.detail,targetRef:e.target})||this.fireDecoratorEvent("close-overflow"),this._syncOptions(e.detail.selectedOption)}_syncOptions(e){const n=Number(e?.getAttribute("data-ui5-external-action-item-index"));this.options.forEach((a,l)=>{l===n?a.setAttribute("selected",""):a.removeAttribute("selected")})}get styles(){return{width:this.isOverflowed?void 0:this.width}}get hasCustomLabel(){return!!this.label.length}};u([d()],p.prototype,"width",void 0);u([C({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],p.prototype,"options",void 0);u([C()],p.prototype,"label",void 0);u([d()],p.prototype,"valueState",void 0);u([d({type:Boolean})],p.prototype,"disabled",void 0);u([d()],p.prototype,"accessibleName",void 0);u([d()],p.prototype,"accessibleNameRef",void 0);u([d()],p.prototype,"value",null);p=u([D({tag:"ui5-toolbar-select",template:k,renderer:q,styles:z}),T("change",{bubbles:!0,cancelable:!0}),T("open",{bubbles:!0}),T("close")],p);p.define();const h=S("ui5-toolbar-select",["accessibleName","accessibleNameRef","overflowPriority","value","valueState","width"],["disabled","preventOverflowClosing"],["label"],["change","close","open"]);h.displayName="ToolbarSelect";try{h.displayName="ToolbarSelect",h.__docgenInfo={description:'The `ToolbarSelect` component is used to create a toolbar drop-down list.\nThe items inside the `ToolbarSelect` define the available options by using the `ToolbarSelectOption` component.\n\n\n\n`import "@ui5/webcomponents/dist/ToolbarSelectOption.js";` (comes with `ToolbarSelect`)\n\n__Note:__ This is a UI5 Web Component! [ToolbarSelect UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSelect) | [Repository](https://github.com/UI5/webcomponents)',displayName:"ToolbarSelect",props:{children:{defaultValue:null,description:`Defines the component options.

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

**Note:** Available since [v2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents**.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Information"'}]}},width:{defaultValue:{value:"undefined"},description:`Defines the width of the select.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var P=function(t,e,n,a){var l=arguments.length,o=l<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(l<3?i(o):l>3?i(e,n,o):i(e,n))||o);return l>3&&o&&Object.defineProperty(e,n,o),o};let b=class extends A{constructor(){super(...arguments),this.selected=!1}};P([d({type:Boolean})],b.prototype,"selected",void 0);P([C({type:Node,default:!0,invalidateOnChildChange:!0})],b.prototype,"text",void 0);b=P([D("ui5-toolbar-select-option")],b);b.define();const c=S("ui5-toolbar-select-option",[],["selected"],[],[]);c.displayName="ToolbarSelectOption";try{c.displayName="ToolbarSelectOption",c.__docgenInfo={description:"The `ToolbarSelectOption` component defines the content of an option in the `ToolbarSelect`.\n\n__Note:__ This is a UI5 Web Component! [ToolbarSelectOption UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSelectOption) | [Repository](https://github.com/UI5/webcomponents)",displayName:"ToolbarSelectOption",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

__Supported Node Type/s:__ \`Array<Node>\``,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function L(){return _("div",{class:"ui5-tb-separator ui5-tb-item","data-ui5-external-action-item-id":this._id})}g("@ui5/webcomponents-theming","sap_horizon",async()=>I);g("@ui5/webcomponents","sap_horizon",async()=>j);const M=`.ui5-tb-separator{height:var(--_ui5-v2-17-0-toolbar-separator-height);width:.0625rem;background:var(--sapToolbar_SeparatorColor);box-sizing:border-box}
`;var U=function(t,e,n,a){var l=arguments.length,o=l<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(l<3?i(o):l>3?i(e,n,o):i(e,n))||o);return l>3&&o&&Object.defineProperty(e,n,o),o};let w=class extends V{constructor(){super(...arguments),this.visible=!1}get isSeparator(){return!0}get isInteractive(){return!1}};U([d({type:Boolean})],w.prototype,"visible",void 0);w=U([D({tag:"ui5-toolbar-separator",template:L,renderer:q,styles:[M]})],w);w.define();const v=S("ui5-toolbar-separator",["overflowPriority"],["preventOverflowClosing"],[],[]);v.displayName="ToolbarSeparator";try{v.displayName="ToolbarSeparator",v.__docgenInfo={description:`The \`ToolbarSeparator\` is an element, used for visual separation between two elements.
It takes no space in calculating toolbar items width.

__Note:__ This is a UI5 Web Component! [ToolbarSeparator UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSeparator) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"ToolbarSeparator",props:{overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const y=S("ui5-toolbar-spacer",["overflowPriority","width"],["preventOverflowClosing"],[],[]);y.displayName="ToolbarSpacer";try{y.displayName="ToolbarSpacer",y.__docgenInfo={description:`The \`ToolbarSpacer\` is an element, used for taking needed space for toolbar items to take 100% width.
It takes no space in calculating toolbar items width.

__Note:__ This is a UI5 Web Component! [ToolbarSpacer UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSpacer) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"ToolbarSpacer",props:{overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"undefined"},description:`Defines the width of the spacer.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var N;(function(t){t.Start="Start",t.End="End"})(N||(N={}));const H={title:"Layouts & Floorplans / Toolbar",component:x,argTypes:{children:{control:{disable:!0}}},args:{alignContent:N.Start},tags:["package:@ui5/webcomponents"]},m={render:t=>r.jsxs(x,{...t,children:[r.jsx(O,{text:"Button 1"}),r.jsxs(h,{children:[r.jsx(c,{children:"Option 1"}),r.jsx(c,{children:"Option 2"}),r.jsx(c,{children:"Option 3"})]}),r.jsx(v,{}),r.jsx(y,{}),r.jsx(v,{}),r.jsx(O,{text:"Button 2"}),r.jsxs(h,{children:[r.jsx(c,{children:"Option 1"}),r.jsx(c,{children:"Option 2"}),r.jsx(c,{children:"Option 3"})]})]})},f={name:"Opening Popovers via ToolbarButton",render(t){const[e,n]=R.useState(!1),a=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(x,{...t,children:r.jsx(O,{onClick:l=>{const{targetRef:o}=l.detail;a.current&&(a.current.opener=o,n(!0))},text:"Open Popover"})}),r.jsx(B,{open:e,ref:a,onClose:()=>{n(!1)},children:"Content"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const $=["Default","OpenPopover"],oe=Object.freeze(Object.defineProperty({__proto__:null,Default:m,OpenPopover:f,__namedExportsOrder:$,default:H},Symbol.toStringTag,{value:"Module"}));export{oe as C,m as D,f as O,h as T,c as a,v as b,y as c};

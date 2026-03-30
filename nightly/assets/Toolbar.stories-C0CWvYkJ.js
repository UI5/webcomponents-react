import{w as y,f as x,d as k,a as E,k as F,b as j,s as m,O as B,c as q,av as A,az as O,aA as z,j as t,n as V,a2 as L}from"./iframe-DMCuegit.js";import{C}from"./index-E66unuDm.js";import{a as H,C as I}from"./index-IhQAu6dU.js";import{D as $}from"./index-NkeT4sxo.js";import{I as G}from"./index-DyUeQWg1.js";import{a as J,M as N}from"./index-D-POlRPn.js";import{R as D}from"./index-dJcGNDur.js";import{S as K}from"./index-GAFO2n_O.js";import{a as _,T as P}from"./index-Bx110qJ4.js";import"./ToolbarSpacer-COnzqpGG.js";import{S as Q}from"./Select-47892hrl.js";import{O as X}from"./Option-K8omM4DC.js";import{T as W}from"./ToolbarButton-DTkJdm_w.js";const c=y("ui5-toolbar-item",["overflowPriority"],["preventOverflowClosing"],[],[]);c.displayName="ToolbarItem";try{c.displayName="ToolbarItem",c.__docgenInfo={description:`The \`ToolbarItem\` is a wrapper component used to integrate UI5 Web Components into the \`Toolbar\`.
It renders within the toolbar's shadow DOM and manages the lifecycle
and overflow behavior of its child component.

### Structure
The toolbar item wraps a single UI5 Web Component (such as CheckBox, Title, etc.) and handles:
- Overflow management (determining if the item should be displayed in the main toolbar or overflow popover)
- Automatic popover closing on interaction
- CSS custom state exposure for styling based on overflow state

### Usage
The \`ToolbarItem\` is typically used implicitly when adding components to a toolbar,
but specialized wrappers like \`ToolbarButton\` provide
component-specific functionality and should be preferred when available.

__Note:__ This is a UI5 Web Component! [ToolbarItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarItem) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"ToolbarItem",props:{children:{defaultValue:null,description:`Wrapped component slot.

**Note:** Available since [v2.20.0](https://github.com/UI5/webcomponents/releases/tag/v2.20.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<IToolbarItemContent>\``,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:'"Default" | ToolbarItemOverflowBehavior | "NeverOverflow" | "AlwaysOverflow"'}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon interaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}x("@ui5/webcomponents-theming","sap_horizon",async()=>k);x("@ui5/webcomponents","sap_horizon",async()=>E,"host");const Y=`:host(:not([hidden])){width:100%}:host([is-overflowed]) .ui5-tb-popover-item{align-items:inherit;width:100%}
`;function Z(){return F(Q,{class:this.classes.root,style:this.styles,value:this.value,"data-ui5-external-action-item-id":this._id,valueState:this.valueState,disabled:this.disabled,accessibleName:this.accessibleName,accessibleNameRef:this.accessibleNameRef,onClick:(...o)=>this.onClick(...o),onClose:(...o)=>this.onClose(...o),onOpen:(...o)=>this.onOpen(...o),onChange:(...o)=>this.onChange(...o),children:[this.hasCustomLabel&&j("slot",{name:"label",slot:"label"}),this.options.map((o,e)=>j(X,{selected:o.selected,"data-ui5-external-action-item-index":e,children:o.textContent}))]})}var u=function(o,e,n,a){var l=arguments.length,r=l<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,n,a);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(r=(l<3?i(r):l>3?i(e,n,r):i(e,n))||r);return l>3&&r&&Object.defineProperty(e,n,r),r};let p=class extends W{constructor(){super(...arguments),this.valueState="None",this.disabled=!1,this._value=""}set value(e){this.select&&this.select.value!==e&&(this.select.value=e),this._value=e}get value(){return this.select?this.select.value:this._value}get select(){return this.shadowRoot.querySelector("[ui5-select]")}onClick(e){e.stopImmediatePropagation(),!this.fireDecoratorEvent("click",{targetRef:e.target})&&!this.preventOverflowClosing&&this.fireDecoratorEvent("close-overflow")}onOpen(e){e.stopImmediatePropagation(),!this.fireDecoratorEvent("open",{targetRef:e.target})&&this.fireDecoratorEvent("close-overflow")}onClose(e){e.stopImmediatePropagation(),!this.fireDecoratorEvent("close",{targetRef:e.target})&&this.fireDecoratorEvent("close-overflow")}onChange(e){e.stopImmediatePropagation(),!this.fireDecoratorEvent("change",{...e.detail,targetRef:e.target})||this.fireDecoratorEvent("close-overflow"),this._syncOptions(e.detail.selectedOption)}_syncOptions(e){const n=Number(e?.getAttribute("data-ui5-external-action-item-index"));this.options.forEach((a,l)=>{a.selected=l===n})}get styles(){return{width:this.isOverflowed?void 0:this.width}}get hasCustomLabel(){return!!this.label.length}};u([m()],p.prototype,"width",void 0);u([B({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],p.prototype,"options",void 0);u([B()],p.prototype,"label",void 0);u([m()],p.prototype,"valueState",void 0);u([m({type:Boolean})],p.prototype,"disabled",void 0);u([m()],p.prototype,"accessibleName",void 0);u([m()],p.prototype,"accessibleNameRef",void 0);u([m()],p.prototype,"value",null);p=u([q({tag:"ui5-toolbar-select",template:Z,renderer:A,styles:Y}),O("change",{bubbles:!0,cancelable:!0}),O("open",{bubbles:!0}),O("close")],p);p.define();const v=y("ui5-toolbar-select",["accessibleName","accessibleNameRef","overflowPriority","value","valueState","width"],["disabled","preventOverflowClosing"],["label"],["change","close","open"]);v.displayName="ToolbarSelect";try{v.displayName="ToolbarSelect",v.__docgenInfo={description:'The `ToolbarSelect` component is used to create a toolbar drop-down list.\nThe items inside the `ToolbarSelect` define the available options by using the `ToolbarSelectOption` component.\n\n\n\n`import "@ui5/webcomponents/dist/ToolbarSelectOption.js";` (comes with `ToolbarSelect`)\n\n__Note:__ This is a UI5 Web Component! [ToolbarSelect UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSelect) | [Repository](https://github.com/UI5/webcomponents)',displayName:"ToolbarSelect",props:{children:{defaultValue:null,description:`Defines the component options.

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
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:'"Default" | ToolbarItemOverflowBehavior | "NeverOverflow" | "AlwaysOverflow"'}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon interaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Defines the value of the component:

**Note:** Available since [v2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents**.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:'"None" | "Critical" | ValueState | "Positive" | "Negative" | "Information"'}},width:{defaultValue:{value:"undefined"},description:`Defines the width of the select.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var U=function(o,e,n,a){var l=arguments.length,r=l<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,n,a);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(r=(l<3?i(r):l>3?i(e,n,r):i(e,n))||r);return l>3&&r&&Object.defineProperty(e,n,r),r};let w=class extends z{set selected(e){e?(this.setAttribute("selected",""),this._clearSiblingsAndSync()):this.removeAttribute("selected")}get selected(){return this.hasAttribute("selected")}_clearSiblingsAndSync(){const e=this.parentElement;e&&(e.options?.forEach(n=>{n!==this&&n.removeAttribute("selected")}),e.select&&(e.select.value=this.textContent||""))}};U([m({type:Boolean})],w.prototype,"selected",null);U([B({type:Node,default:!0,invalidateOnChildChange:!0})],w.prototype,"text",void 0);w=U([q("ui5-toolbar-select-option")],w);w.define();const d=y("ui5-toolbar-select-option",[],["selected"],[],[]);d.displayName="ToolbarSelectOption";try{d.displayName="ToolbarSelectOption",d.__docgenInfo={description:"The `ToolbarSelectOption` component defines the content of an option in the `ToolbarSelect`.\n\n__Note:__ This is a UI5 Web Component! [ToolbarSelectOption UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSelectOption) | [Repository](https://github.com/UI5/webcomponents)",displayName:"ToolbarSelectOption",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

__Supported Node Type/s:__ \`Array<Node>\``,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function ee(){return j("div",{class:"ui5-tb-separator ui5-tb-item","data-ui5-external-action-item-id":this._id})}x("@ui5/webcomponents-theming","sap_horizon",async()=>k);x("@ui5/webcomponents","sap_horizon",async()=>E,"host");const te=`.ui5-tb-separator{height:var(--_ui5-toolbar-separator-height);width:.0625rem;background:var(--sapToolbar_SeparatorColor);box-sizing:border-box}
`;var M=function(o,e,n,a){var l=arguments.length,r=l<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,n,a);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(r=(l<3?i(r):l>3?i(e,n,r):i(e,n))||r);return l>3&&r&&Object.defineProperty(e,n,r),r};let T=class extends W{constructor(){super(...arguments),this.visible=!1}get isSeparator(){return!0}get isInteractive(){return!1}};M([m({type:Boolean})],T.prototype,"visible",void 0);T=M([q({tag:"ui5-toolbar-separator",template:ee,renderer:A,styles:[te]})],T);T.define();const g=y("ui5-toolbar-separator",["overflowPriority"],["preventOverflowClosing"],[],[]);g.displayName="ToolbarSeparator";try{g.displayName="ToolbarSeparator",g.__docgenInfo={description:`The \`ToolbarSeparator\` is an element, used for visual separation between two elements.
It takes no space in calculating toolbar items width.

__Note:__ This is a UI5 Web Component! [ToolbarSeparator UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSeparator) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"ToolbarSeparator",props:{overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:'"Default" | ToolbarItemOverflowBehavior | "NeverOverflow" | "AlwaysOverflow"'}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon interaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const S=y("ui5-toolbar-spacer",["overflowPriority","width"],["preventOverflowClosing"],[],[]);S.displayName="ToolbarSpacer";try{S.displayName="ToolbarSpacer",S.__docgenInfo={description:`The \`ToolbarSpacer\` is an element, used for taking needed space for toolbar items to take 100% width.
It takes no space in calculating toolbar items width.

__Note:__ This is a UI5 Web Component! [ToolbarSpacer UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSpacer) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"ToolbarSpacer",props:{overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:'"Default" | ToolbarItemOverflowBehavior | "NeverOverflow" | "AlwaysOverflow"'}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon interaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"undefined"},description:`Defines the width of the spacer.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var R;(function(o){o.Start="Start",o.End="End"})(R||(R={}));const oe={title:"Layouts & Floorplans / Toolbar",component:_,argTypes:{children:{control:{disable:!0}}},args:{alignContent:R.Start},tags:["package:@ui5/webcomponents"]},h={render:o=>t.jsxs(_,{...o,children:[t.jsx(P,{text:"Button 1"}),t.jsxs(v,{children:[t.jsx(d,{children:"Option 1"}),t.jsx(d,{children:"Option 2"}),t.jsx(d,{children:"Option 3"})]}),t.jsx(g,{}),t.jsx(S,{}),t.jsx(g,{}),t.jsx(P,{text:"Button 2"}),t.jsxs(v,{children:[t.jsx(d,{children:"Option 1"}),t.jsx(d,{children:"Option 2"}),t.jsx(d,{children:"Option 3"})]})]})},f={name:"Opening Popovers via ToolbarButton",render(o){const[e,n]=V.useState(!1),a=V.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(_,{...o,children:t.jsx(P,{onClick:l=>{l.preventDefault();const{targetRef:r}=l.detail;a.current&&(a.current.opener=r,n(!0))},text:"Open Popover"})}),t.jsx(L,{open:e,ref:a,onClose:()=>{n(!1)},children:"Content"})]})}},b={render(o){return t.jsxs(_,{...o,children:[t.jsx(c,{children:t.jsxs("div",{role:"radiogroup","aria-label":"Options",className:"toolbar-item-group",children:[t.jsx(D,{name:"group1",text:"Option 1",checked:!0}),t.jsx(D,{name:"group1",text:"Option 2"}),t.jsx(D,{name:"group1",text:"Option 3"})]})}),t.jsx(c,{children:t.jsxs("div",{role:"group","aria-label":"Checkboxes",className:"toolbar-item-group",children:[t.jsx(C,{text:"Checkbox 1"}),t.jsx(C,{text:"Checkbox 2",checked:!0}),t.jsx(C,{text:"Checkbox 3"})]})}),t.jsx(c,{children:t.jsx(G,{placeholder:"Enter text"})}),t.jsx(c,{children:t.jsxs(H,{placeholder:"Select an option",children:[t.jsx(I,{text:"Option 1"}),t.jsx(I,{text:"Option 2"}),t.jsx(I,{text:"Option 3"})]})}),t.jsx(c,{children:t.jsxs(J,{placeholder:"Select options",children:[t.jsx(N,{text:"Item 1"}),t.jsx(N,{text:"Item 2"}),t.jsx(N,{text:"Item 3"})]})}),t.jsx(c,{children:t.jsx(K,{textOn:"On",textOff:"Off"})}),t.jsx(c,{children:t.jsx($,{placeholder:"Select a date"})})]})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Opening Popovers via ToolbarButton',
  render(args) {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const popoverRef = useRef<PopoverDomRef>(null);
    return <>
        <Toolbar {...args}>
          <ToolbarButton onClick={e => {
          e.preventDefault();
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Toolbar {...args}>
        <ToolbarItem>
          <div role="radiogroup" aria-label="Options" className="toolbar-item-group">
            <RadioButton name="group1" text="Option 1" checked />
            <RadioButton name="group1" text="Option 2" />
            <RadioButton name="group1" text="Option 3" />
          </div>
        </ToolbarItem>
        <ToolbarItem>
          <div role="group" aria-label="Checkboxes" className="toolbar-item-group">
            <CheckBox text="Checkbox 1" />
            <CheckBox text="Checkbox 2" checked />
            <CheckBox text="Checkbox 3" />
          </div>
        </ToolbarItem>
        <ToolbarItem>
          <Input placeholder="Enter text" />
        </ToolbarItem>
        <ToolbarItem>
          <ComboBox placeholder="Select an option">
            <ComboBoxItem text="Option 1" />
            <ComboBoxItem text="Option 2" />
            <ComboBoxItem text="Option 3" />
          </ComboBox>
        </ToolbarItem>
        <ToolbarItem>
          <MultiComboBox placeholder="Select options">
            <MultiComboBoxItem text="Item 1" />
            <MultiComboBoxItem text="Item 2" />
            <MultiComboBoxItem text="Item 3" />
          </MultiComboBox>
        </ToolbarItem>
        <ToolbarItem>
          <Switch textOn="On" textOff="Off" />
        </ToolbarItem>
        <ToolbarItem>
          <DatePicker placeholder="Select a date" />
        </ToolbarItem>
      </Toolbar>;
  }
}`,...b.parameters?.docs?.source}}};const ne=["Default","OpenPopover","WithToolbarItem"],ye=Object.freeze(Object.defineProperty({__proto__:null,Default:h,OpenPopover:f,WithToolbarItem:b,__namedExportsOrder:ne,default:oe},Symbol.toStringTag,{value:"Module"}));export{ye as C,h as D,f as O,c as T,b as W,v as a,d as b,g as c,S as d};

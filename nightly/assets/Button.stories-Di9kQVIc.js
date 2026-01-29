import{s as d,m as I,aA as A,w as k,k as R,c as _,at as M,p as j,d as E,Q as N,aS as P,az as x,av as U,bZ as q,dS as L,bm as V,c6 as F,U as Y,r as w,j as o,M as G}from"./iframe-CaWUkniD.js";import{a as B}from"./ai-XjM464K3.js";import{n as W}from"./navigation-down-arrow-C-jc4BDF.js";import{s as $}from"./stop-BrrOHZDy.js";import{o as O}from"./query-CzSBusdE.js";import{d as z,B as K}from"./parameters-bundle.css-j-IoYmGi.js";import{S}from"./SplitButton-DGrOyo5r.js";import{M as H}from"./index-ByWM2826.js";import{M as u}from"./index-QqNL9gtx.js";var b=function(r,t,e,a){var n=arguments.length,i=n<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,e):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,a);else for(var l=r.length-1;l>=0;l--)(s=r[l])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i};let h=class extends A{constructor(){super(...arguments),this.showArrowButton=!1}};b([d()],h.prototype,"name",void 0);b([d()],h.prototype,"text",void 0);b([d()],h.prototype,"icon",void 0);b([d()],h.prototype,"endIcon",void 0);b([d({type:Boolean})],h.prototype,"showArrowButton",void 0);h=b([I("ui5-ai-button-state")],h);h.define();const m=k("ui5-ai-button-state",["endIcon","icon","name","text"],["showArrowButton"],[],[]);m.displayName="ButtonState";try{m.displayName="ButtonState",m.__docgenInfo={description:"`ButtonState` is the item to use for defining states of `Button` components.\n\n### Usage\n\n`ButtonState` is an abstract element, representing a state of `Button`. It is meant to be used in the `default` slot\nof `Button` and should not be used as standalone component.\n\n\n\n__Note:__ This is a UI5 Web Component! [ButtonState UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ai/ButtonState) | [Repository](https://github.com/UI5/webcomponents)",displayName:"ButtonState",props:{endIcon:{defaultValue:{value:"undefined"},description:`Defines the icon to be displayed as graphical element within the component after the text.
The SAP-icons font provides numerous options.

**Example:**

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"endIcon",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:`Defines the icon to be displayed as graphical element within the component before the text.
The SAP-icons font provides numerous options.

**Example:**

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},name:{defaultValue:{value:"undefined"},description:"Defines the name of the button state.",name:"name",required:!1,type:{name:"string"}},showArrowButton:{defaultValue:{value:"false"},description:`Defines if the component is in split button mode.

**Note:** Available since [v2.6.0](https://github.com/UI5/webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents-ai**.`,name:"showArrowButton",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Defines the text of the button in this state.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function J(){return R(M,{children:[_(S,{class:"ui5-ai-button-inner",design:this.design,icon:this._stateIcon,disabled:this.disabled,_endIcon:this._stateEndIcon,_hideArrowButton:this._hideArrowButton,onClick:this._onClick,onArrowClick:this._onArrowClick,accessibilityAttributes:this._computedAccessibilityAttributes,children:this._hasText&&_("div",{class:"ui5-ai-button-text",children:this._stateText})}),_(S,{class:"ui5-ai-button-hidden",design:this.design})]})}j("@ui5/webcomponents-theming","sap_horizon",async()=>E);j("@ui5/webcomponents-ai","sap_horizon",async()=>z);const Q=`:host{display:inline-block}:host([disabled]){pointer-events:none}.ui5-ai-button-text{display:inline-block}:host([icon-only]) .ui5-ai-button-text{min-width:0;margin-inline-start:0}.ui5-ai-button-hidden{position:absolute;top:-10000px;left:-10000px;visibility:hidden;display:block;width:fit-content}:host .ui5-ai-button-inner{width:100%}:host{width:auto;position:relative;transition:width .18s cubic-bezier(.67,1,.95,1.3) .12s}:host([icon-only]) .ui5-ai-button-inner[_end-icon=""]::part(textButton),:host(.ui5-ai-button-menu-to-button[icon-only]) .ui5-ai-button-inner::part(textButton){min-width:var(--_ui5-v2-18-0_button_base_min_width)!important;max-width:var(--_ui5-v2-18-0_button_base_min_width)!important}:host(.ui5-ai-button-menu-to-button) .ui5-ai-button-inner::part(button),:host(.ui5-ai-button-fade-out:not([icon-only])) .ui5-ai-button-inner::part(button){justify-content:flex-start}:host([icon-only]) .ui5-ai-button-inner[_end-icon]:not([_end-icon=""])::part(button),:host([icon-only]) .ui5-ai-button-inner[_hide-arrow-button]::part(button){justify-content:flex-start;padding-inline-start:var(--_ui5-v2-18-0_button_base_padding)}:host(.ui5-ai-button-fade-in[icon-only]) .ui5-ai-button-inner[_end-icon=""]::part(button){max-width:var(--_ui5-v2-18-0_button_base_min_width)}:host([icon-only]) .ui5-ai-button-inner[_end-icon=""]::part(textButton),:host(.ui5-ai-button-menu-to-button[icon-only]) .ui5-ai-button-inner::part(textButton){min-width:var(--_ui5-v2-18-0_button_base_min_width);max-width:var(--_ui5-v2-18-0_button_base_min_width)}:host(:not(.ui5-ai-button-fade-out):not(.ui5-ai-button-fade-mid):not(.ui5-ai-button-fade-in)) .ui5-ai-button-text,:host(:not(.ui5-ai-button-fade-out):not(.ui5-ai-button-fade-mid):not(.ui5-ai-button-fade-in)) ::part(endIcon),:host(:not(.ui5-ai-button-fade-out):not(.ui5-ai-button-fade-mid):not(.ui5-ai-button-fade-in)) ::part(arrowButton){opacity:1;transform:translateY(0)}:host(.ui5-ai-button-button-to-menu) .ui5-ai-button-inner::part(endIcon),:host(.ui5-ai-button-button-to-menu) .ui5-ai-button-inner::part(arrowButton){display:none;transform:translateY(0);opacity:0}:host(.ui5-ai-button-fade-out) .ui5-ai-button-text{opacity:0;transform:translateY(-1rem);transition:opacity .06s ease-in-out .12s,transform .08s ease-in-out .12s}:host(.ui5-ai-button-fade-out) ::part(icon){opacity:0;transform:translateY(-1rem);transition:opacity .05s ease-in-out 25ms,transform .1s ease-in-out 0s}:host(.ui5-ai-button-fade-out) ::part(endIcon){opacity:0;transform:translateY(-1rem);transition:opacity .06s ease-in-out .12s,transform .08s ease-in-out .12s}:host(.ui5-ai-button-fade-mid) .ui5-ai-button-text,:host(.ui5-ai-button-fade-mid) ::part(icon),:host(.ui5-ai-button-fade-mid) ::part(endIcon),:host(.ui5-ai-button-fade-mid) ::part(arrowButton){opacity:0;transform:translateY(1rem);transition:none}:host(.ui5-ai-button-fade-in) .ui5-ai-button-text{opacity:1;transform:translateY(0);transition:opacity .06s ease-in-out .12s,transform .08s ease-in-out .12s}:host(.ui5-ai-button-fade-in) ::part(icon){opacity:1;transform:translateY(0);transition:opacity .05s ease-in-out 25ms,transform .1s ease-in-out 0s}:host(.ui5-ai-button-fade-in) ::part(endIcon){opacity:1;transform:translateY(0);transition:opacity .06s ease-in-out .12s,transform .08s ease-in-out .12s}
`;var p=function(r,t,e,a){var n=arguments.length,i=n<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,e):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,t,e,a);else for(var l=r.length-1;l>=0;l--)(s=r[l])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i},v;let c=v=class extends A{constructor(){super(...arguments),this.design="Default",this.disabled=!1,this.arrowButtonPressed=!1,this.accessibilityAttributes={},this.iconOnly=!1}get _hideArrowButton(){return!this._effectiveStateObject?.showArrowButton}get _effectiveState(){return this.state||this.states.length&&this.states[0].name||""}get _effectiveStateObject(){return this.states.find(t=>t.name===this._effectiveState)}get _stateIconOnly(){return!this._stateText&&!!this._stateIcon}get _stateText(){return this._currentStateObject?.text}get _stateIcon(){return this._currentStateObject?.icon}get _stateEndIcon(){return this._effectiveStateObject?.showArrowButton?"":this._effectiveStateObject?.endIcon}get _hasText(){return!!this._stateText}onBeforeRendering(){const t=this._splitButton;t&&(t.activeArrowButton=this.arrowButtonPressed),this._currentStateObject?.name||(this._currentStateObject=this._effectiveStateObject);const e=this._currentStateObject?.name||"";this.iconOnly=this._stateIconOnly,e!==""&&e!==this._effectiveState&&this._fadeOut()}async _fadeOut(){const e=this._splitButton,a=this._hiddenSplitButton,n=this._effectiveStateObject;if(!n){console.warn(`State with name="${this.state}" doesn't exist!`);return}if(!e||!a)return;const i=e.offsetWidth,s=this._currentStateObject||{};(!s.showArrowButton&&n.showArrowButton||!s.endIcon&&n.endIcon)&&this.classList.add("ui5-ai-button-button-to-menu"),(s.showArrowButton&&!n.showArrowButton||s.endIcon&&!n.endIcon)&&this.classList.add("ui5-ai-button-menu-to-button"),this.style.width=`${i}px`,a.icon=n.icon,a._endIcon=n.endIcon,a.textContent=n.text||null,a._hideArrowButton=this._hideArrowButton,await q();const l=a.offsetWidth;this.style.width=`${l}px`,this.classList.add("ui5-ai-button-fade-out"),setTimeout(()=>{this.classList.add("ui5-ai-button-fade-mid"),e._hideArrowButton=this._hideArrowButton,this._fadeIn()},180)}_fadeIn(){setTimeout(()=>{const e=this._effectiveStateObject;this._currentStateObject=e,this.classList.add("ui5-ai-button-fade-in"),this._resetFade()},160)}_resetFade(){setTimeout(()=>{this.classList.remove("ui5-ai-button-fade-out"),this.classList.remove("ui5-ai-button-fade-mid"),this.classList.remove("ui5-ai-button-fade-in"),this.classList.remove("ui5-ai-button-button-to-menu"),this.classList.remove("ui5-ai-button-menu-to-button")},160);const e=this._splitButton;e&&(e.style.width="")}_onClick(t){t.stopImmediatePropagation(),this.fireDecoratorEvent("click")}_onArrowClick(t){t.stopImmediatePropagation(),this.fireDecoratorEvent("arrow-button-click")}get _computedAccessibilityAttributes(){const t=L(this)||V(this)||F(this)||"",a=`${this._hasText?v.i18nBundleAi.getText(K,this._stateText):""} ${t}`.trim();return{root:{hasPopup:this.accessibilityAttributes?.root?.hasPopup||"false",roleDescription:this.accessibilityAttributes?.root?.roleDescription,title:this.accessibilityAttributes?.root?.title||a,ariaKeyShortcuts:this.accessibilityAttributes?.root?.ariaKeyShortcuts},arrowButton:{hasPopup:this.accessibilityAttributes?.arrowButton?.hasPopup,expanded:this.accessibilityAttributes?.arrowButton?.expanded,title:this.accessibilityAttributes?.arrowButton?.title}}}};p([d()],c.prototype,"design",void 0);p([d({type:Boolean})],c.prototype,"disabled",void 0);p([d()],c.prototype,"state",void 0);p([d({type:Boolean,noAttribute:!0})],c.prototype,"arrowButtonPressed",void 0);p([d({type:Object})],c.prototype,"accessibilityAttributes",void 0);p([d({type:Object})],c.prototype,"_currentStateObject",void 0);p([d({type:Boolean})],c.prototype,"iconOnly",void 0);p([N({type:HTMLElement,default:!0})],c.prototype,"states",void 0);p([O("[ui5-split-button]")],c.prototype,"_splitButton",void 0);p([O(".ui5-ai-button-hidden[ui5-split-button]")],c.prototype,"_hiddenSplitButton",void 0);p([P("@ui5/webcomponents-ai")],c,"i18nBundleAi",void 0);c=v=p([I({tag:"ui5-ai-button",languageAware:!0,renderer:U,template:J,styles:Q,shadowRootOptions:{delegatesFocus:!0}}),x("click",{bubbles:!0}),x("arrow-button-click",{bubbles:!0})],c);c.define();const y=k("ui5-ai-button",["accessibilityAttributes","design","state"],["arrowButtonPressed","disabled"],[],["arrow-button-click","click"]);y.displayName="Button";try{y.displayName="Button",y.__docgenInfo={description:`The \`Button\` component serves as a button for AI-related scenarios. Users can trigger actions by clicking or tapping the \`Button\`
or by pressing keyboard keys like [Enter] or [Space].

### Usage

For the \`Button\` user interface, you can define one or more button states by placing \`ButtonState\` components in their default slot.
Each state has a name for identification and can include text, an icon, and an end icon, as needed for its purpose.
You can define a split mode for the \`Button\`, which will results in displaying an arrow button for additional actions.

You can choose from a set of predefined designs for \`Button\` (as in \`ui5-button\`) to match the desired styling.

The \`Button\` can be activated by clicking or tapping it. You can change the button state in the click event handler. When the button is
in split mode, you can activate the default button action by clicking or tapping it, or by pressing keyboard keys like [Enter] or [Space].
You can activate the arrow button by clicking or tapping it, or by pressing keyboard keys like [Arrow Up], [Arrow Down], or [F4].
To display additional actions, you can attach a menu to the arrow button.



__Note:__ This is a UI5 Web Component! [Button UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ai/Button) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"Button",props:{children:{defaultValue:null,description:"Defines the available states of the component.\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that\nyou only use `ButtonState` components in order to preserve the intended design.\n\n__Supported Node Type/s:__ `Array<ButtonState>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onArrowButtonClick:{defaultValue:null,description:`Fired when the component is in split mode and after the arrow button
is activated either by clicking or tapping it or by using the [Arrow Up] / [Arrow Down],
[Alt] + [Arrow Up]/ [Arrow Down], or [F4] keyboard keys.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onArrowButtonClick",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, never>) => void"}},onClick:{defaultValue:null,description:`Fired when the component is activated either with a
mouse/tap or by using the Enter or Space key.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:'Defines the additional accessibility attributes that will be applied to the component.\n\nThis property allows for fine-tuned control of ARIA attributes for screen reader support.\nIt accepts an object with the following optional fields:\n\n- **root**: Accessibility attributes that will be applied to the root element.\n - **hasPopup**: Indicates the availability and type of interactive popup element (such as a menu or dialog).\n   Accepts string values: `"dialog"`, `"grid"`, `"listbox"`, `"menu"`, or `"tree"`.\n - **roleDescription**: Defines a human-readable description for the button\'s role.\n   Accepts any string value.\n - **title**: Specifies a tooltip or description for screen readers.\n   Accepts any string value.\n- **ariaKeyShortcuts**: Defines keyboard shortcuts that activate or focus the button.\n\n- **arrowButton**: Accessibility attributes that will be applied to the arrow (split) button element.\n - **hasPopup**: Indicates the type of popup triggered by the arrow button.\n   Accepts string values: `"dialog"`, `"grid"`, `"listbox"`, `"menu"`, or `"tree"`.\n - **expanded**: Indicates whether the popup controlled by the arrow button is currently expanded.\n   Accepts boolean values: `true` or `false`.\n\n**Note:** Available since [v2.6.0](https://github.com/UI5/webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents-ai**.',name:"accessibilityAttributes",required:!1,type:{name:"AIButtonAccessibilityAttributes"}},arrowButtonPressed:{defaultValue:{value:"false"},description:`Defines the active state of the arrow button in split mode.
Set to true when the button is in split mode and a menu with additional options
is opened by the arrow button. Set back to false when the menu is closed.

**Note:** Available since [v2.6.0](https://github.com/UI5/webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents-ai**.`,name:"arrowButtonPressed",required:!1,type:{name:"boolean"}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Transparent"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"undefined"},description:"Defines the current state of the component.",name:"state",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const X={title:"Button",component:y,argTypes:{children:{control:"text"}},args:{design:Y.Default},tags:["package:@ui5/webcomponents-ai","experimental"]},f={render(r){const t=w.useRef(null),e=w.useRef(null),[a,n]=w.useState("generate"),[i,s]=w.useState(!1),l=()=>{t.current=setTimeout(()=>{n("revise")},3e3)},T=g=>{const C=g.target;switch(r.onClick(g),s(!1),C.state){case"generate":n("generating"),l();break;case"generating":t.current&&(clearTimeout(t.current),t.current=null),n("generate");break;case"revise":s(!0);break}},D=g=>{g.detail.text==="Regenerate"&&(n("generating"),l())};return o.jsxs(o.Fragment,{children:[o.jsxs(y,{...r,onClick:T,state:a,ref:e,children:[o.jsx(m,{name:"generate",text:"Generate",icon:B}),o.jsx(m,{name:"generating",text:"Stop Generating",icon:$}),o.jsx(m,{name:"revise",text:"Revise",icon:B,endIcon:W})]}),i&&o.jsxs(G,{opener:e.current,open:!0,onItemClick:D,onClose:()=>{s(!1)},children:[o.jsx(u,{text:"Regenerate"}),o.jsx(H,{}),o.jsx(u,{text:"Fix Spelling & Grammar"}),o.jsxs(u,{text:"Change Tone",children:[o.jsx(u,{text:"Option 1"}),o.jsx(u,{text:"Option 2"}),o.jsx(u,{text:"Option 3"})]}),o.jsxs(u,{text:"Adjust Length",children:[o.jsx(u,{text:"Shorten text"}),o.jsx(u,{text:"Lengthen text"})]}),o.jsx(u,{text:"Bulleted List"}),o.jsxs(u,{text:"Translate",children:[o.jsx(u,{text:"English"}),o.jsx(u,{text:"German"}),o.jsx(u,{text:"Spanish"})]})]})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render(args) {
    const generationIdRef = useRef<NodeJS.Timeout | null>(null);
    const buttonRef = useRef<ButtonDomRef>(null);
    const [buttonState, setButtonState] = useState('generate');
    const [menuOpen, setMenuOpen] = useState(false);
    const startGeneration = () => {
      generationIdRef.current = setTimeout(() => {
        setButtonState('revise');
      }, 3000);
    };
    const handleClick: ButtonPropTypes['onClick'] = e => {
      const btn = e.target;
      args.onClick(e);
      setMenuOpen(false);
      switch (btn.state) {
        case 'generate':
          setButtonState('generating');
          startGeneration();
          break;
        case 'generating':
          if (generationIdRef.current) {
            clearTimeout(generationIdRef.current);
            generationIdRef.current = null;
          }
          setButtonState('generate');
          break;
        case 'revise':
          setMenuOpen(true);
          break;
      }
    };
    const handleMenuItemClick: MenuPropTypes['onItemClick'] = e => {
      if (e.detail.text === 'Regenerate') {
        setButtonState('generating');
        startGeneration();
      }
    };
    return <>
        <Button {...args} onClick={handleClick} state={buttonState} ref={buttonRef}>
          <ButtonState name="generate" text="Generate" icon={aiIcon} />
          <ButtonState name="generating" text="Stop Generating" icon={stopIcon} />
          <ButtonState name="revise" text="Revise" icon={aiIcon} endIcon={navDownIcon} />
        </Button>
        {menuOpen && <Menu opener={buttonRef.current} open onItemClick={handleMenuItemClick} onClose={() => {
        setMenuOpen(false);
      }}>
            <MenuItem text="Regenerate" />
            <MenuSeparator />
            <MenuItem text="Fix Spelling & Grammar" />
            <MenuItem text="Change Tone">
              <MenuItem text="Option 1" />
              <MenuItem text="Option 2" />
              <MenuItem text="Option 3" />
            </MenuItem>
            <MenuItem text="Adjust Length">
              <MenuItem text="Shorten text" />
              <MenuItem text="Lengthen text" />
            </MenuItem>
            <MenuItem text="Bulleted List" />
            <MenuItem text="Translate">
              <MenuItem text="English" />
              <MenuItem text="German" />
              <MenuItem text="Spanish" />
            </MenuItem>
          </Menu>}
      </>;
  }
}`,...f.parameters?.docs?.source}}};const Z=["Default"],dt=Object.freeze(Object.defineProperty({__proto__:null,Default:f,__namedExportsOrder:Z,default:X},Symbol.toStringTag,{value:"Module"}));export{m as B,dt as C,f as D};

import{n as y,c as p,b3 as w,F as g,b4 as _,f as P,d as R,b as D,s as c,cT as N,S as I,bk as T,e as x,aw as O,aA as b,aB as S,cU as j,cV as E,w as k,_ as B,q as C,j as o,Y as q}from"./iframe-BB6QsCcm.js";import{a as A,C as r}from"./index-HSk2qeR-.js";import{R as V}from"./ResponsivePopoverCommon.css-6GP8Lm0R.js";function U(){return y(_,{hideArrow:!0,contentOnlyOnDesktop:!0,placement:this.placement,opener:this.opener,open:this._open,onClose:this.onAfterClose,onOpen:this.onAfterOpen,accessibleName:this._colorPaletteTitle,children:[p("div",{slot:"header",class:"ui5-cp-header",children:p(w,{level:"H1",wrappingType:"None",children:this._colorPaletteTitle})}),p("div",{children:p(A,{showMoreColors:this.showMoreColors,showRecentColors:this.showRecentColors,showDefaultColor:this.showDefaultColor,defaultColor:this.defaultColor,accessibleName:this.accessibleName,accessibleNameRef:this.accessibleNameRef,popupMode:!0,onItemClick:this.onSelectedColor,children:this.colorPaletteColors.map(n=>p("slot",{name:n._individualSlot}))})}),p("div",{slot:"footer",class:"ui5-cp-footer",children:p(g,{design:"Transparent",onClick:this.closePopover,children:this._cancelButtonLabel})})]})}P("@ui5/webcomponents-theming","sap_horizon",async()=>R);P("@ui5/webcomponents","sap_horizon",async()=>D,"host");const M=`.ui5-cp-header{width:100%;height:var(--_ui5_color-palette-button-height);display:flex;align-items:center}.ui5-cp-footer{width:100%;display:flex;justify-content:flex-end;align-items:center;margin:.1875rem 0}[ui5-responsive-popover]::part(content){padding:0}.ui5-cp-item-container{padding:.3125rem .6875rem}
`;var s=function(n,e,a,i){var u=arguments.length,l=u<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,a):i,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(n,e,a,i);else for(var v=n.length-1;v>=0;v--)(m=n[v])&&(l=(u<3?m(l):u>3?m(e,a,l):m(e,a))||l);return u>3&&l&&Object.defineProperty(e,a,l),l},f;let t=f=class extends S{constructor(){super(),this.showRecentColors=!1,this.showMoreColors=!1,this.showDefaultColor=!1,this.open=!1,this.placement="Bottom"}get responsivePopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}get respPopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}closePopover(){this.open=!1}onAfterClose(){this.closePopover(),this.fireDecoratorEvent("close")}onAfterOpen(){const e=this._colorPalette;e._currentlySelected?e._currentlySelected?.focus():e.showRecentColors&&e.recentColorsElements.length?e.recentColorsElements[0].focus():e.showDefaultColor&&e._defaultColorButton?.focus(),e.allColorsInPalette.forEach(a=>{const i=a.offsetHeight+4;a.style.setProperty("--_ui5_color_palette_item_height",`${i}px`)})}onSelectedColor(e){this.closePopover(),this.fireDecoratorEvent("item-click",e.detail)}get _colorPalette(){return this.responsivePopover.content[0].querySelector("[ui5-color-palette]")}isOpen(){return this.open}get colorPaletteColors(){return this.getSlottedNodes("colors")}get _colorPaletteTitle(){return f.i18nBundle.getText(j)}get _cancelButtonLabel(){return f.i18nBundle.getText(E)}get _open(){return this.open||void 0}};s([c({type:Boolean})],t.prototype,"showRecentColors",void 0);s([c({type:Boolean})],t.prototype,"showMoreColors",void 0);s([c({type:Boolean})],t.prototype,"showDefaultColor",void 0);s([c()],t.prototype,"defaultColor",void 0);s([c()],t.prototype,"accessibleName",void 0);s([c()],t.prototype,"accessibleNameRef",void 0);s([c({type:Boolean})],t.prototype,"open",void 0);s([c({converter:N})],t.prototype,"opener",void 0);s([c()],t.prototype,"placement",void 0);s([I({default:!0,type:HTMLElement,individualSlots:!0})],t.prototype,"colors",void 0);s([T("@ui5/webcomponents")],t,"i18nBundle",void 0);t=f=s([x({tag:"ui5-color-palette-popover",renderer:O,styles:[V,M],template:U}),b("item-click",{bubbles:!0}),b("close",{bubbles:!0})],t);t.define();const d=k("ui5-color-palette-popover",["accessibleName","accessibleNameRef","defaultColor","opener","placement"],["open","showDefaultColor","showMoreColors","showRecentColors"],[],["close","item-click"]);d.displayName="ColorPalettePopover";try{d.displayName="ColorPalettePopover",d.__docgenInfo={description:`Represents a predefined range of colors for easier selection.

Overview
The ColorPalettePopover provides the users with a slot to predefine colors.

You can customize them with the use of the colors property. You can specify a defaultColor and display a "Default color" button for the user to choose directly.
You can display a "More colors..." button that opens an additional color picker for the user to choose specific colors that are not present in the predefined range.

### Usage

The palette is intended for users, who don't want to check and remember the different values of the colors and spend large amount of time to configure the right color through the color picker.

For the \`ColorPalettePopover\`


__Note:__ This is a UI5 Web Component! [ColorPalettePopover UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ColorPalettePopover) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"ColorPalettePopover",props:{children:{defaultValue:null,description:"Defines the content of the component.\n\n__Supported Node Type/s:__ `Array<IColorPaletteItem>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClose:{defaultValue:null,description:`Fired when the \`ColorPalettePopover\` is closed due to user interaction.

**Note:** Available since [v1.21.0](https://github.com/UI5/webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, never>) => void"}},onItemClick:{defaultValue:null,description:`Fired when the user selects a color.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPalettePopoverDomRef, ColorPaletteItemClickEventDetail>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible name of the component.

**Note:** Available since [v2.20.0](https://github.com/UI5/webcomponents/releases/tag/v2.20.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v2.20.0](https://github.com/UI5/webcomponents/releases/tag/v2.20.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},defaultColor:{defaultValue:{value:"undefined"},description:`Defines the default color of the component.

**Note:** The default color should be a part of the ColorPalette colors\``,name:"defaultColor",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Defines the open | closed state of the popover.

**Note:** Available since [v1.21.0](https://github.com/UI5/webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},opener:{defaultValue:{value:"undefined"},description:"Defines the ID or DOM Reference of the element that the popover is shown at.\nWhen using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.\nYou can only set the `opener` attribute to a DOM Reference when using JavaScript.\n\n**Note:** Available since [v1.21.0](https://github.com/UI5/webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.",name:"opener",required:!1,type:{name:"string | HTMLElement"}},placement:{defaultValue:{value:'"Bottom"'},description:`Determines on which side the component is placed at.

**Note:** Available since [v2.19.0](https://github.com/UI5/webcomponents/releases/tag/v2.19.0) of **@ui5/webcomponents**.`,name:"placement",required:!1,type:{name:'"Start" | "End" | PopoverPlacement | "Top" | "Bottom"'}},showDefaultColor:{defaultValue:{value:"false"},description:"Defines whether the user can choose the default color from a button.",name:"showDefaultColor",required:!1,type:{name:"boolean"}},showMoreColors:{defaultValue:{value:"false"},description:"Defines whether the user can choose a custom color from a component.",name:"showMoreColors",required:!1,type:{name:"boolean"}},showRecentColors:{defaultValue:{value:"false"},description:"Defines whether the user can see the last used colors in the bottom of the component",name:"showRecentColors",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const L={title:"Modals & Popovers / ColorPalettePopover",component:d,argTypes:{children:{control:{disable:!0}},defaultColor:{control:{type:"color"}}},parameters:{chromatic:{delay:1e3},open:B},tags:["package:@ui5/webcomponents"]},h={render(n){const e=C.useRef(null),[a,i]=C.useState(n.open),u=()=>{i(l=>!l)};return C.useEffect(()=>{i(n.open)},[n.open]),o.jsxs(o.Fragment,{children:[o.jsx(q,{onClick:u,ref:e,children:"Open ColorPalettePopover"}),o.jsxs(d,{...n,opener:e.current,open:a,onClose:l=>{n.onClose(l),i(!1)},children:[o.jsx(r,{value:"black"}),o.jsx(r,{value:"darkblue"}),o.jsx(r,{value:"#444444"}),o.jsx(r,{value:"rgb(0,200,0)"}),o.jsx(r,{value:"green"}),o.jsx(r,{value:"darkred"}),o.jsx(r,{value:"yellow"}),o.jsx(r,{value:"blue"}),o.jsx(r,{value:"cyan"}),o.jsx(r,{value:"orange"}),o.jsx(r,{value:"#5480e7"}),o.jsx(r,{value:"#ff6699"})]})]})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render(args) {
    const btnRef = useRef(null);
    const [open, setOpen] = useState(args.open);
    const onButtonClick = () => {
      setOpen(prev => !prev);
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={onButtonClick} ref={btnRef}>
          Open ColorPalettePopover
        </Button>
        <ColorPalettePopover {...args} opener={btnRef.current} open={open} onClose={e => {
        args.onClose(e);
        setOpen(false);
      }}>
          <ColorPaletteItem value="black" />
          <ColorPaletteItem value="darkblue" />
          <ColorPaletteItem value="#444444" />
          <ColorPaletteItem value="rgb(0,200,0)" />
          <ColorPaletteItem value="green" />
          <ColorPaletteItem value="darkred" />
          <ColorPaletteItem value="yellow" />
          <ColorPaletteItem value="blue" />
          <ColorPaletteItem value="cyan" />
          <ColorPaletteItem value="orange" />
          <ColorPaletteItem value="#5480e7" />
          <ColorPaletteItem value="#ff6699" />
        </ColorPalettePopover>
      </>;
  }
}`,...h.parameters?.docs?.source}}};const F=["Default"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:h,__namedExportsOrder:F,default:L},Symbol.toStringTag,{value:"Module"}));export{$ as C,h as D};

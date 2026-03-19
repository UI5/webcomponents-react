import{f as G,d as C,b as T,c as m,n as k,F as S,s as v,S as B,bk as R,e as N,aw as E,aA as b,aB as D,di as O,bi as L,dj as z,dk as U,dl as W,dm as w,dn as P,h as H,bj as y,bm as V,bn as A,w as j,j as p}from"./iframe-D9XQThMB.js";import{A as _}from"./index-9BnKq7JY.js";import{A as a}from"./AvatarSize-BtKTMFJ5.js";import{A as I}from"./AvatarColorScheme-8OTP3zdx.js";var i;(function(s){s.Group="Group",s.Individual="Individual"})(i||(i={}));G("@ui5/webcomponents-theming","sap_horizon",async()=>C);G("@ui5/webcomponents","sap_horizon",async()=>T,"host");const M=`:host{-webkit-tap-highlight-color:rgba(0,0,0,0)}:host(:not([hidden])){display:block;width:100%}.ui5-avatar-group-items:focus{outline:none}:host([type="Group"][desktop]) .ui5-avatar-group-items:focus,:host([type="Group"]) .ui5-avatar-group-items:focus-visible{outline:var(--_ui5_avatar_outline);outline-offset:var(--_ui5_avatar_focus_offset);border-radius:var(--_ui5_avatar_group_focus_border_radius)}.ui5-avatar-group-root{display:flex;padding:var(--_ui5_avatar_group_padding)}.ui5-avatar-group-items{white-space:nowrap;position:relative;display:inline-flex}:host([type="Group"]) .ui5-avatar-group-items{cursor:pointer}:host([type="Group"]) .ui5-avatar-group-items:not(:active):hover ::slotted([ui5-avatar]:not([disabled])){box-shadow:var(--ui5-avatar-hover-box-shadow-offset)}:host([type="Group"]) .ui5-avatar-group-items:active ::slotted([ui5-avatar]){background-color:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([type="Group"]) .ui5-avatar-group-items:not(:active):hover .ui5-avatar-group-overflow-btn{box-shadow:var(--ui5-avatar-hover-box-shadow-offset);background-color:var(--sapButton_Lite_Hover_Background)}:host([type="Group"]) .ui5-avatar-group-items:active .ui5-avatar-group-overflow-btn{background-color:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([type="Group"]) ::slotted([ui5-button]),:host([type="Group"]) ::slotted([ui5-avatar]),:host([type="Group"]) .ui5-avatar-group-overflow-btn{pointer-events:none}.ui5-avatar-group-overflow-btn{overflow:visible}.ui5-avatar-group-overflow-btn::part(button){min-width:auto}::slotted([ui5-button]:not([hidden])),.ui5-avatar-group-overflow-btn:not([hidden]){--_ui5_button_focused_border: var(--_ui5_avatar_group_button_focus_border);--_ui5_button_base_padding: 0;border-radius:50%;display:inline-flex;text-overflow:initial;z-index:0}::slotted([ui5-button][desktop]:focus),.ui5-avatar-group-overflow-btn[desktop]:focus{outline:var(--_ui5_avatar_outline);outline-offset:var(--_ui5_avatar_overflow_button_focus_offset)}.ui5-avatar-group-overflow-btn::part(button):focus-visible:after{outline:var(--_ui5_avatar_outline);outline-offset:var(--_ui5_avatar_focus_offset);border-radius:50%}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-xs{height:2rem;width:2rem;min-width:2rem;font-size:.75rem}::slotted([ui5-button]),.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-s{height:3rem;width:3rem;min-width:3rem;font-size:1.125rem}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-m{height:4rem;width:4rem;min-width:4rem;font-size:1.625rem}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-l{height:5rem;width:5rem;min-width:5rem;font-size:2rem}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-xl{height:7rem;width:7rem;min-width:7rem;font-size:2.75rem}
`;function q(){return m("div",{class:"ui5-avatar-group-root",children:k("div",{class:{"ui5-avatar-group-items":!0,"ui5-avatar-group-items-xs":this.firstAvatarSize===a.XS,"ui5-avatar-group-items-s":this.firstAvatarSize===a.S,"ui5-avatar-group-items-m":this.firstAvatarSize===a.M,"ui5-avatar-group-items-l":this.firstAvatarSize===a.L,"ui5-avatar-group-items-xl":this.firstAvatarSize===a.XL},role:this._role,tabindex:this._groupTabIndex,"aria-label":this._ariaLabelText,"aria-haspopup":this._containerAriaHasPopup,onClick:this._onClick,onKeyUp:this._onkeyup,onKeyDown:this._onkeydown,onFocusIn:this._onfocusin,children:[m("slot",{onClick:this.onAvatarClick,"onui5-click":this.onAvatarUI5Click}),this._customOverflowButton?m("slot",{onClick:this.onOverflowButtonClick,name:"overflowButton"}):m(S,{onClick:this.onOverflowButtonClick,accessibilityAttributes:this._overflowButtonAccAttributes,accessibleName:this._overflowButtonAriaLabelText,hidden:this._overflowBtnHidden,nonInteractive:this._isGroup,class:{"ui5-avatar-group-overflow-btn":!0,"ui5-avatar-group-overflow-btn-xs":this.firstAvatarSize===a.XS,"ui5-avatar-group-overflow-btn-s":this.firstAvatarSize===a.S,"ui5-avatar-group-overflow-btn-m":this.firstAvatarSize===a.M,"ui5-avatar-group-overflow-btn-l":this.firstAvatarSize===a.L,"ui5-avatar-group-overflow-btn-xl":this.firstAvatarSize===a.XL},children:this._overflowButtonText})]})})}var u=function(s,t,e,o){var r=arguments.length,l=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(s,t,e,o);else for(var g=s.length-1;g>=0;g--)(f=s[g])&&(l=(r<3?f(l):r>3?f(t,e,l):f(t,e))||l);return r>3&&l&&Object.defineProperty(t,e,l),l},h;const x="ui5-avatar-group-overflow-btn",$=`.${x}`,F={[a.XS]:{[i.Individual]:"0.0625rem",[i.Group]:"-0.5rem"},[a.S]:{[i.Individual]:"0.125rem",[i.Group]:"-1.25rem"},[a.M]:{[i.Individual]:"0.125rem",[i.Group]:"-1.625rem"},[a.L]:{[i.Individual]:"0.125rem",[i.Group]:"-2rem"},[a.XL]:{[i.Individual]:"0.25rem",[i.Group]:"-2.75rem"}};let n=h=class extends D{get _slottedItems(){return this.getSlottedNodes("items")}constructor(){super(),this.type="Group",this.accessibilityAttributes={},this._colorIndex=0,this._hiddenItems=0,this._itemNavigation=new O(this,{getItemsCallback:()=>this._isGroup?[]:this._slottedItems.slice(0,this._hiddenStartIndex)}),this._onResizeHandler=this._onResize.bind(this)}get hiddenItems(){return this._slottedItems.slice(this._hiddenStartIndex)}get colorScheme(){return this._slottedItems.map(t=>t.effectiveBackgroundColor)}get _customOverflowButton(){return this.overflowButton.length?this.overflowButton[0]:void 0}get _ariaLabelText(){if(this.accessibleName||this.accessibleNameRef)return L(this);const t=this.hiddenItems.length,e=this._isGroup?z:U;let o=h.i18nBundle.getText(e);return o+=` ${h.i18nBundle.getText(W,this._itemsCount-t,t)}`,this._isGroup?o+=` ${h.i18nBundle.getText(w)}`:o+=` ${h.i18nBundle.getText(P)}`,o}get _overflowButtonAriaLabelText(){return this._isGroup?void 0:h.i18nBundle.getText(w)}get _containerAriaHasPopup(){return this._isGroup?this._getAriaHasPopup():void 0}get _overflowButtonAccAttributes(){return{hasPopup:this._isGroup?void 0:this._getAriaHasPopup()}}get _role(){return this._isGroup?"button":"group"}get _hiddenStartIndex(){return this._itemsCount-this._hiddenItems}get _overflowBtnHidden(){return this._hiddenItems===0}get _isGroup(){return this.type===i.Group}get _itemsCount(){return this._slottedItems.length}get _groupTabIndex(){return this._isGroup?0:-1}get _overflowButton(){return this.shadowRoot.querySelector($)}get _overflowButtonEffectiveWidth(){const t=this._customOverflowButton?this._customOverflowButton:this._overflowButton;if(!t)return 0;if(this._isGroup){let e=this._slottedItems[1];const o=e.offsetLeft-this.offsetLeft;return(!e||e.hidden)&&(e=t),this.effectiveDir==="rtl"?this._getWidthToItem(e):o}return t.offsetWidth}get firstAvatarSize(){return this._slottedItems[0]?.size??a.S}onAfterRendering(){this._overflowItems()}onBeforeRendering(){this._customOverflowButton&&(this._customOverflowButton.nonInteractive=this._isGroup),this._prepareAvatars()}onEnterDOM(){H()&&this.setAttribute("desktop",""),y.register(this,this._onResizeHandler)}onExitDOM(){y.deregister(this,this._onResizeHandler)}_onResize(){this._overflowItems()}_onkeydown(t){this._isGroup&&(V(t)?this._fireGroupEvent(t.target):A(t)&&t.preventDefault())}_onkeyup(t){!t.shiftKey&&A(t)&&this._isGroup&&(this._fireGroupEvent(t.target),t.preventDefault())}_fireGroupEvent(t){const e=t.classList.contains(x)||t===this._customOverflowButton;this.fireDecoratorEvent("click",{targetRef:t,overflowButtonClicked:e})}_onClick(t){t.stopPropagation(),this._isGroup&&this._fireGroupEvent(t.target)}onAvatarClick(t){t.stopPropagation(),this.fireDecoratorEvent("click",{targetRef:t.target,overflowButtonClicked:!1})}onAvatarUI5Click(t){t.stopPropagation()}onOverflowButtonClick(t){t.stopPropagation(),this.fireDecoratorEvent("click",{targetRef:t.target,overflowButtonClicked:!0})}_prepareAvatars(){this._colorIndex=0,this._slottedItems.forEach((t,e)=>{const o=this._getNextBackgroundColor();t.interactive=!this._isGroup,t.getAttribute("_color-scheme")===I.Auto&&t.setAttribute("_color-scheme",I[`Accent${o}`]),e!==this._itemsCount-1||this._customOverflowButton?t.style.marginInlineEnd=F[t.effectiveSize][this.type]:t.style.marginInlineEnd=""})}_onfocusin(t){this._itemNavigation.setCurrentItem(t.target)}getFocusDomRef(){return this._itemNavigation._getCurrentItem()}_getWidthToItem(t){const e=this.effectiveDir==="rtl",o=t.offsetLeft-this.offsetLeft;if(e){const r=t.offsetParent;return r?r.offsetWidth-t.offsetLeft-t.offsetWidth:0}return o}_overflowItems(){if(this._slottedItems.length<2){this._setHiddenItems(0);return}let t=0;for(let e=0;e<this._itemsCount;e++){const o=this._slottedItems[e];o.hidden=!1;let r=this._getWidthToItem(o)+o.offsetWidth;if((e!==this._itemsCount-1||this._customOverflowButton)&&(r+=this._overflowButtonEffectiveWidth),r>this.offsetWidth){t=this._itemsCount-e;break}}this._setHiddenItems(t)}_getNextBackgroundColor(){return++this._colorIndex>10&&(this._colorIndex=1),this._colorIndex}_setHiddenItems(t){const e=this._hiddenItems!==t;this._hiddenItems=t,this._slottedItems.forEach((o,r)=>{o.hidden=r>=this._hiddenStartIndex}),this._overflowButtonText=`+${t>99?99:t}`,e&&this.fireDecoratorEvent("overflow")}_getAriaHasPopup(){return this.accessibilityAttributes.hasPopup}};u([v()],n.prototype,"type",void 0);u([v({type:Object})],n.prototype,"accessibilityAttributes",void 0);u([v({noAttribute:!0})],n.prototype,"_overflowButtonText",void 0);u([v()],n.prototype,"accessibleName",void 0);u([v()],n.prototype,"accessibleNameRef",void 0);u([B({type:HTMLElement,default:!0})],n.prototype,"items",void 0);u([B()],n.prototype,"overflowButton",void 0);u([R("@ui5/webcomponents")],n,"i18nBundle",void 0);n=h=u([N({tag:"ui5-avatar-group",renderer:E,template:q,styles:M}),b("click"),b("overflow")],n);n.define();const c=j("ui5-avatar-group",["accessibilityAttributes","accessibleName","accessibleNameRef","type"],[],["overflowButton"],["click","overflow"]);c.displayName="AvatarGroup";try{c.displayName="AvatarGroup",c.__docgenInfo={description:`Displays a group of avatars arranged horizontally. It is useful to visually
showcase a group of related avatars, such as, project team members or employees.

The component allows you to display the avatars in different sizes,
depending on your use case.

The \`AvatarGroup\` component has two group types:

- \`Group\` type: The avatars are displayed as partially overlapped on
top of each other and the entire group has one click/tap area.
- \`Individual\` type: The avatars are displayed side-by-side and each
avatar has its own click/tap area.

### Usage

Use the \`AvatarGroup\` if:

- You want to display a group of avatars.
- You want to display several avatars which have something in common.

Do not use the \`AvatarGroup\` if:

- You want to display a single avatar.
- You want to display a gallery for simple images.
- You want to use it for other visual content than avatars.

### Responsive Behavior

When the available space is less than the width required to display all avatars,
an overflow visualization appears as a button placed at the end with the same shape
and size as the avatars. The visualization displays the number of avatars that have overflowed
and are not currently visible.

### Keyboard Handling
The component provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:

\`type\` Individual:

- [Tab] - Move focus to the overflow button
- [Left] - Navigate one avatar to the left
- [Right] - Navigate one avatar to the right
- [Home] - Navigate to the first avatar
- [End] - Navigate to the last avatar
- [Space] / [Enter] or [Return] - Trigger \`ui5-click\` event

\`type\` Group:

- [Tab] - Move focus to the next interactive element after the component
- [Space] / [Enter] or [Return] - Trigger \`ui5-click\` event

__Note:__ This is a UI5 Web Component! [AvatarGroup UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/AvatarGroup) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"AvatarGroup",props:{children:{defaultValue:null,description:`Defines the items of the component. Use the \`Avatar\` component as an item.

**Note:** The UX guidelines recommends using avatars with "Circle" shape.

Moreover, if you use avatars with "Square" shape, there will be visual inconsistency
as the built-in overflow action has "Circle" shape.

__Supported Node Type/s:__ \`Array<IAvatarGroupItem>\``,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},overflowButton:{defaultValue:null,description:`Defines the overflow button of the component.

**Note:** We recommend using the \`Button\` component.

**Note:** If this slot is not used, the component will display the built-in overflow button.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="overflowButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<IButton>\``,name:"overflowButton",required:!1,type:{name:"UI5WCSlotsNode"}},onClick:{defaultValue:null,description:`Fired when the component is activated either with a
click/tap or by using the Enter or Space key.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<AvatarGroupDomRef, AvatarGroupClickEventDetail>) => void"}},onOverflow:{defaultValue:null,description:`Fired when the count of visible \`Avatar\` elements in the
component has changed

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOverflow",required:!1,type:{name:"(event: Ui5CustomEvent<AvatarGroupDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following field is supported:\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"AvatarGroupAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible name of the AvatarGroup.
When provided, this will override the default aria-label text.

**Note:** Available since [v2.12.0](https://github.com/UI5/webcomponents/releases/tag/v2.12.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Receives id(s) of the elements that describe the AvatarGroup.
When provided, this will be used as aria-labelledby instead of aria-label.

**Note:** Available since [v2.12.0](https://github.com/UI5/webcomponents/releases/tag/v2.12.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Group"'},description:"Defines the mode of the `AvatarGroup`.",name:"type",required:!1,type:{name:'AvatarGroupType | "Group" | "Individual"'}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const X={title:"Data Display / AvatarGroup",component:c,argTypes:{children:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{type:i.Group},tags:["package:@ui5/webcomponents"]},d={render(s){return p.jsxs(c,{...s,children:[p.jsx(_,{icon:"employee"}),p.jsx(_,{initials:"JD"}),p.jsx(_,{children:p.jsx("img",{src:"https://ui5.github.io/webcomponents/images/avatars/woman_avatar_5.png",alt:"Avatar1"})}),p.jsx(_,{children:p.jsx("img",{src:"https://ui5.github.io/webcomponents/images/avatars/man_avatar_3.png",alt:"Avatar2"})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <AvatarGroup {...args}>
        <Avatar icon="employee" />
        <Avatar initials="JD" />
        <Avatar>
          <img src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_5.png" alt="Avatar1" />
        </Avatar>
        <Avatar>
          <img src="https://ui5.github.io/webcomponents/images/avatars/man_avatar_3.png" alt="Avatar2" />
        </Avatar>
      </AvatarGroup>;
  }
}`,...d.parameters?.docs?.source}}};const Y=["Default"],et=Object.freeze(Object.defineProperty({__proto__:null,Default:d,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{et as C,d as D};

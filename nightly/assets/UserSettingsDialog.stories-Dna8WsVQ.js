import{c as d,l as M,ba as H,A as C,m as T,az as F,av as L,w as V,B as W,gx as G,p as E,d as K,s as U,gy as k,r as S,j as e,I as z,T as Q,J as p,Q as u}from"./iframe-BZdybOkV.js";import{b as B,c as $,d as q,e as J,U as g,a as h}from"./action-settings-CVxAX0nx.js";import{S as X}from"./index-CINyJYO9.js";import{a as P,A as Y}from"./index-DEm1B2JB.js";import{A as D}from"./AvatarSize-BtKTMFJ5.js";import{d as Z}from"./parameters-bundle.css-B37gDvcF.js";import"./product-jvNrPG6m.js";import{S as ee}from"./index-B-XXGM93.js";import{U as te,a as ne,b as ie}from"./index-DVTsDxcY.js";import{L as m}from"./index-QZaRYYY3.js";import{P as N}from"./index-DQ6hlW-w.js";import{C as ae,a as v}from"./index-BetZKVJI.js";import{R}from"./index-flhc0_e8.js";import{C as oe}from"./index-n0APwmh8.js";function se(){return d("div",{class:"ui5-user-settings-view-container",children:M("div",{class:"ui5-user-settings-view",children:[d("slot",{name:"additionalContent"}),d(H,{"header-text":this.text,class:"user-settings-appearance-view-list",onItemClick:this._handleItemClick,children:d("slot",{})})]})})}var j=function(a,n,i,o){var s=arguments.length,t=s<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,i):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,n,i,o);else for(var r=a.length-1;r>=0;r--)(l=a[r])&&(t=(s<3?l(t):s>3?l(n,i,t):l(n,i))||t);return s>3&&t&&Object.defineProperty(n,i,t),t};let x=class extends ${constructor(){super(...arguments),this._handleItemClick=n=>{const i=n.detail.item;if(i.tagName==="UI5-USER-SETTINGS-APPEARANCE-VIEW-ITEM"){const o=i;!this.fireDecoratorEvent("selection-change",{item:o})||(this._getAllItems().forEach(t=>{t.selected=!1}),o.selected=!0)}}}_getAllItems(){const n=[];return this.items.forEach(i=>{if(i.tagName==="UI5-USER-SETTINGS-APPEARANCE-VIEW-GROUP"){const s=Array.from(i.children).filter(t=>t.tagName==="UI5-USER-SETTINGS-APPEARANCE-VIEW-ITEM");n.push(...s)}else i.tagName==="UI5-USER-SETTINGS-APPEARANCE-VIEW-ITEM"&&n.push(i)}),n}};j([C({type:HTMLElement,default:!0,invalidateOnChildChange:!0})],x.prototype,"items",void 0);j([C({type:HTMLElement})],x.prototype,"additionalContent",void 0);x=j([T({tag:"ui5-user-settings-appearance-view",renderer:L,template:se,styles:[B]}),F("selection-change",{cancelable:!0})],x);x.define();const A=V("ui5-user-settings-appearance-view",["text"],["secondary","selected"],["additionalContent"],["selection-change"]);A.displayName="UserSettingsAppearanceView";try{A.displayName="UserSettingsAppearanceView",A.__docgenInfo={description:"The `UserSettingsAppearanceView` represents a view displayed in the `UserSettingsItem`.\n\n\n\n__Note:__ This is a UI5 Web Component! [UserSettingsAppearanceView UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/UserSettingsAppearanceView) | [Repository](https://github.com/UI5/webcomponents)",displayName:"UserSettingsAppearanceView",props:{additionalContent:{defaultValue:null,description:`Defines additional content displayed below the items list.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="additionalContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement> | undefined\``,name:"additionalContent",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the items of the component.\n\n__Supported Node Type/s:__ `Array<UserSettingsAppearanceViewGroup | UserSettingsAppearanceViewItem>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onSelectionChange:{defaultValue:null,description:`Fired when an item is selected.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<UserSettingsAppearanceViewDomRef, UserSettingsAppearanceViewItemSelectEventDetail>) => void"}},secondary:{defaultValue:{value:"false"},description:"Indicates whether the view is secondary. It is relevant only if the view is used in `pages` slot of `UserSettingsItem`\nand controls the visibility of the back button.",name:"secondary",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Defines whether the view is selected. There can be just one selected view at a time.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Defines the title text of the user settings view.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var O=function(a,n,i,o){var s=arguments.length,t=s<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,i):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,n,i,o);else for(var r=a.length-1;r>=0;r--)(l=a[r])&&(t=(s<3?l(t):s>3?l(n,i,t):l(n,i))||t);return s>3&&t&&Object.defineProperty(n,i,t),t};let _=class extends W{};O([C({default:!0,invalidateOnChildChange:!0,type:HTMLElement})],_.prototype,"items",void 0);_=O([T({tag:"ui5-user-settings-appearance-view-group"})],_);_.define();const w=V("ui5-user-settings-appearance-view-group",["headerAccessibleName","headerText","wrappingType"],[],["header"],["move-over","move"]);w.displayName="UserSettingsAppearanceViewGroup";try{w.displayName="UserSettingsAppearanceViewGroup",w.__docgenInfo={description:`The \`UserSettingsAppearanceViewGroup\` is a special list item group used to group appearance view items.

This is the item to use inside a \`UserSettingsAppearanceView\`.



__Note:__ This is a UI5 Web Component! [UserSettingsAppearanceViewGroup UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/UserSettingsAppearanceViewGroup) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"UserSettingsAppearanceViewGroup",props:{children:{defaultValue:null,description:"Defines the items of the <code>ui5-user-settings-appearance-view-group</code>.\n\n__Supported Node Type/s:__ `Array<UserSettingsAppearanceViewItem>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header of the component.

**Note:** Using this slot, the default header text of group and the value of \`headerText\` property will be overwritten.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<ListItemBase>\``,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},onMove:{defaultValue:null,description:`Fired when a movable list item is dropped onto a drop target.

**Note:** \`move\` event is fired only if there was a preceding \`move-over\` with prevented default action.

**Note:** Available since [v2.1.0](https://github.com/UI5/webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents-fiori**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onMove",required:!1,type:{name:"(event: Ui5CustomEvent<UserSettingsAppearanceViewGroupDomRef, ListItemGroupMoveEventDetail>) => void"}},onMoveOver:{defaultValue:null,description:`Fired when a movable list item is moved over a potential drop target during a dragging operation.

If the new position is valid, prevent the default action of the event using \`preventDefault()\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.1.0](https://github.com/UI5/webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents-fiori**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onMoveOver",required:!1,type:{name:"(event: Ui5CustomEvent<UserSettingsAppearanceViewGroupDomRef, ListItemGroupMoveEventDetail>) => void"}},headerAccessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the header.",name:"headerAccessibleName",required:!1,type:{name:"string"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the header text of the <code>ui5-li-group</code>.",name:"headerText",required:!1,type:{name:"string"}},wrappingType:{defaultValue:{value:'"None"'},description:`Defines if the text of the component should wrap when it's too long.
When set to "Normal", the content (title, description) will be wrapped
using the \`ui5-expandable-text\` component.<br/>

The text can wrap up to 100 characters on small screens (size S) and
up to 300 characters on larger screens (size M and above). When text exceeds
these limits, it truncates with an ellipsis followed by a text expansion trigger.

Available options are:
- \`None\` (default) - The text will truncate with an ellipsis.
- \`Normal\` - The text will wrap (without truncation).

**Note:** Available since [v2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents-fiori**.`,name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function re(){return G.call(this,{listItemContent:le.bind(this)})}function le(){return d("div",{class:"list-item",children:M("div",{class:"item-left",children:[d(P,{class:"avatar-cozy",shape:"Square",icon:this.icon,"color-scheme":this.colorScheme,size:D.S}),d(P,{class:"avatar-compact",shape:"Square",icon:this.icon,"color-scheme":this.colorScheme,size:D.XS}),d("div",{class:"item-texts",children:d("span",{class:"item-title",children:this.text})})]})})}E("@ui5/webcomponents-theming","sap_horizon",async()=>K);E("@ui5/webcomponents-fiori","sap_horizon",async()=>Z);const ce=`.list-item{display:flex;align-items:center;justify-content:space-between;padding:.625rem 0;width:100%}.item-left{display:flex;align-items:center;gap:.75rem;flex:1}.avatar-cozy{display:inline-block}.avatar-compact{display:none}:host-context(.sapUiSizeCompact) .avatar-cozy,:host-context(.ui5-content-density-compact) .avatar-cozy,:host-context([data-ui5-compact-size]) .avatar-cozy{display:none}:host-context(.sapUiSizeCompact) .avatar-compact,:host-context(.ui5-content-density-compact) .avatar-compact,:host-context([data-ui5-compact-size]) .avatar-compact{display:inline-block}.item-texts{display:flex;flex-direction:column}.item-title{font-weight:600;font-size:var(--sapFontSize);color:var(--sapList_TextColor);margin:.5rem}:host-context(.sapUiSizeCompact) .item-title,:host-context([data-ui5-compact-size]) .item-title{font-size:var(--sapFontLargeSize)}.item-subtitle{color:var(--sapContent_LabelColor);font-size:var(--sapFontSize);margin:.5rem}.item-right{display:flex;align-items:center;gap:.5rem}
`;var y=function(a,n,i,o){var s=arguments.length,t=s<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,i):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,n,i,o);else for(var r=a.length-1;r>=0;r--)(l=a[r])&&(t=(s<3?l(t):s>3?l(n,i,t):l(n,i))||t);return s>3&&t&&Object.defineProperty(n,i,t),t};let f=class extends k{constructor(){super(...arguments),this.itemKey="",this.text="",this.icon="product",this.colorScheme="Accent7"}};y([U()],f.prototype,"itemKey",void 0);y([U()],f.prototype,"text",void 0);y([U()],f.prototype,"icon",void 0);y([U()],f.prototype,"colorScheme",void 0);f=y([T({tag:"ui5-user-settings-appearance-view-item",renderer:L,template:re,styles:[k.styles,B,ce]})],f);f.define();const c=V("ui5-user-settings-appearance-view-item",["accessibilityAttributes","accessibleName","colorScheme","highlight","icon","itemKey","text","tooltip","type"],["movable","navigated","selected"],["deleteButton"],["detail-click"]);c.displayName="UserSettingsAppearanceViewItem";try{c.displayName="UserSettingsAppearanceViewItem",c.__docgenInfo={description:`The \`UserSettingsAppearanceViewItem\` represents a theme/appearance option item
within the \`UserSettingsAppearanceView\`.

It displays a theme with an avatar icon, text label, and can be selected.



__Note:__ This is a UI5 Web Component! [UserSettingsAppearanceViewItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/UserSettingsAppearanceViewItem) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"UserSettingsAppearanceViewItem",props:{children:{defaultValue:null,description:"Defines the content of the component.\n\n__Supported Node Type/s:__ `Array<Node>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},deleteButton:{defaultValue:null,description:`Defines the delete button, displayed in "Delete" mode.
**Note:** While the slot allows custom buttons, to match
design guidelines, please use the \`ui5-button\` component.
**Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.9.0](https://github.com/UI5/webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents-fiori**.

__Supported Node Type/s:__ \`Array<IButton>\``,name:"deleteButton",required:!1,type:{name:"UI5WCSlotsNode"}},onDetailClick:{defaultValue:null,description:`Fired when the user clicks on the detail button when type is \`Detail\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onDetailClick",required:!1,type:{name:"(event: Ui5CustomEvent<UserSettingsAppearanceViewItemDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:`Defines the additional accessibility attributes that will be applied to the component.
The following fields are supported:

- **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
**Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set \`-1\`.

	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.

**Note:** Available since [v1.15.0](https://github.com/UI5/webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents-fiori**.`,name:"accessibilityAttributes",required:!1,type:{name:"ListItemAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the text alternative of the component.

**Note**: If not provided a default text alternative will be set, if present.`,name:"accessibleName",required:!1,type:{name:"string"}},colorScheme:{defaultValue:{value:'"Accent7"'},description:"Defines the color scheme of the avatar.",name:"colorScheme",required:!1,type:{name:"string"}},highlight:{defaultValue:{value:'"None"'},description:'Defines the highlight state of the list items.\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.\n\n**Note:** Available since [v1.24](https://github.com/UI5/webcomponents/releases/tag/v1.24) of **@ui5/webcomponents-fiori**.',name:"highlight",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Critical"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'}]}},icon:{defaultValue:{value:'"product"'},description:"Defines the icon of the appearance item.",name:"icon",required:!1,type:{name:"string"}},itemKey:{defaultValue:null,description:"Defines the unique identifier of the item.",name:"itemKey",required:!1,type:{name:"string"}},movable:{defaultValue:{value:"false"},description:`Defines whether the item is movable.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.`,name:"movable",required:!1,type:{name:"boolean"}},navigated:{defaultValue:{value:"false"},description:`The navigated state of the list item.
If set to \`true\`, a navigation indicator is displayed at the end of the list item.

**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents-fiori**.`,name:"navigated",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text label displayed for the appearance item.",name:"text",required:!1,type:{name:"string"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the text of the tooltip that would be displayed for the list item.

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents-fiori**.`,name:"tooltip",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Active"'},description:"Defines the visual indication and behavior of the list items.\nAvailable options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,\nwhile with type `Inactive` and `Detail` - will not.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const pe={title:"Modals & Popovers / UserSettingsDialog",component:q,argTypes:{children:{control:{disable:!0}},fixedItems:{control:{disable:!0}}},args:{},tags:["package:@ui5/webcomponents","experimental"]},b={render(a){const n=S.useRef(null),[i,o]=S.useState(!1),[s,t]=S.useState(a.open),l=r=>{const{settings:I}=r.detail.item.dataset;I&&t(!0)};return S.useEffect(()=>{t(a.open)},[a.open]),e.jsxs(e.Fragment,{children:[e.jsx(ee,{primaryTitle:"Corporate Portal",logo:e.jsx("img",{src:"https://ui5.github.io/webcomponents/images/sap-logo-svg.svg",alt:"SAP Logo"}),profile:e.jsx(Y,{children:e.jsx("img",{src:"https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png",alt:"Avatar of the current user"})}),onProfileClick:r=>{n.current.opener=r.detail.targetRef,n.current.open=!0,o(I=>!I)}}),e.jsx(te,{ref:n,open:i,accounts:e.jsx(ie,{avatarSrc:"https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png",titleText:"Alaina Chevalier",subtitleText:"aliana.chevalier@sap.com",description:"Delivery Manager, SAP SE",selected:!0}),onClose:()=>{o(!1)},onItemClick:l,children:e.jsx(ne,{icon:J,text:"Settings","data-settings":"true"})}),e.jsxs(q,{...a,open:s,onClose:r=>{a.onClose(r),t(!1)},children:[e.jsx(g,{icon:"user-settings",text:"User Account",tooltip:"User Account",headerText:"User Account",tabs:e.jsx(e.Fragment,{children:e.jsxs(h,{children:[e.jsx(z,{name:"person-placeholder"}),e.jsx(Q,{level:"H3",size:"H3",className:"ua-name",children:"Alain Chevalier"}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"ua-info-item",children:[e.jsx(m,{for:"name",children:"Name:"}),e.jsx(p,{children:"Alain Chevalier"})]}),e.jsxs("div",{className:"ua-info-item",children:[e.jsx(m,{for:"email",children:"Email:"}),e.jsx(p,{children:"alian.chevalier@sap.com"})]}),e.jsxs("div",{className:"ua-info-item",children:[e.jsx(m,{for:"server",children:"Server:"}),e.jsx(p,{children:"delivery-001.sap.com"})]})]}),e.jsx(m,{for:"reset-all-button",children:"Personalization"}),e.jsx("br",{}),e.jsx(u,{children:"Reset All Personalization"}),e.jsx(N,{fixed:!0,className:"ua-panel",children:e.jsx(p,{children:"Reset your personalization settings for the launchpad (such as theme, language, user activities, and home page content)."})})]})})}),e.jsx(g,{icon:"palette",text:"Appearance",tooltip:"Appearance",headerText:"Appearance",children:e.jsxs(A,{text:"Themes",additionalContent:e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem",width:"100%"},children:[e.jsx(p,{children:"Optimize for Touch Input"}),e.jsx(X,{})]}),e.jsx(p,{style:{display:"block",color:"var(--sapContent_LabelColor)",fontSize:"var(--sapFontSmallSize)"},children:"Increases the size and spacing of controls to allow you to interact with them more easily using your fingertip. This is useful for hybrid devices that combine touch and mouse events."})]}),children:[e.jsxs(w,{headerText:"SAP Horizon",children:[e.jsx(c,{itemKey:"sap_horizon",text:"SAP Morning Horizon"}),e.jsx(c,{itemKey:"sap_horizon_dark",text:"SAP Evening Horizon"}),e.jsx(c,{itemKey:"sap_horizon_hcb",text:"SAP Horizon High Contrast Black"}),e.jsx(c,{itemKey:"sap_horizon_hcw",text:"SAP Horizon High Contrast White"})]}),e.jsxs(w,{headerText:"SAP Quartz",children:[e.jsx(c,{itemKey:"sap_fiori_3",text:"SAP Quartz Light"}),e.jsx(c,{itemKey:"sap_fiori_3_dark",text:"SAP Quartz Dark"}),e.jsx(c,{itemKey:"sap_fiori_3_hcb",text:"SAP Quartz High Contrast Black"}),e.jsx(c,{itemKey:"sap_fiori_3_hcw",text:"SAP Quartz High Contrast White"})]})]})}),e.jsx(g,{text:"Language & Region",tooltip:"Language & Region",headerText:"Language & Region",tabs:e.jsxs(h,{children:[e.jsxs("div",{className:"us-container",children:[e.jsxs("div",{className:"lr-item",children:[e.jsx(m,{children:"Language and Region:"}),e.jsxs(ae,{placeholder:"Language",children:[e.jsx(v,{text:"Browse Language"}),e.jsx(v,{text:"English"}),e.jsx(v,{text:"European Spanish"}),e.jsx(v,{text:"French (France)"}),e.jsx(v,{text:"Germany"})]})]}),e.jsxs("div",{className:"lr-item",children:[e.jsx(m,{for:"format",children:"Date Format:"}),e.jsx(p,{children:"MMM d, y"})]})]}),e.jsx(N,{fixed:!0,children:e.jsx(m,{children:`The time zone will not be applied in UI5 apps. If you don't know the type of an app, you can check it in the "About" dialog in the "ID of the Application Framework” field.`})}),e.jsx("br",{}),e.jsxs("div",{className:"lt-time-format",children:[e.jsx(m,{for:"timeFormat",children:"Time Format:"}),e.jsx(R,{name:"timeFormat",text:"12h"}),e.jsx(R,{checked:!0,name:"timeFormat",text:"24h"})]}),e.jsx(N,{fixed:!0,children:e.jsx(m,{children:"After you save your settings, the browser will refresh for the new settings to take effect."})})]})}),e.jsxs(g,{icon:"iphone",text:"SAP Mobile Start Application",tooltip:"SAP Mobile Start Application",headerText:"SAP Mobile Start Application",children:[e.jsxs(h,{slot:"pages",children:[e.jsx(u,{children:"iOS"}),e.jsx(u,{children:"Android"})]}),e.jsxs(h,{slot:"pages",text:"Inner Page",secondary:!0,children:[e.jsx(p,{children:"Enable access to your site from the SAP Mobile Start application."}),e.jsx(u,{children:"Install"}),e.jsx(u,{children:"Register"}),e.jsx(p,{children:"Scan the QR Code to install the mobile application"}),e.jsx(z,{name:"qr-code",style:{width:"20rem",height:"20rem"}})]})]}),e.jsx(g,{icon:"bell",text:"Notifications",tooltip:"Notifications",headerText:"Notifications",children:e.jsx(h,{slot:"pages",children:e.jsx(oe,{checked:!0,text:"Show High-Priority Notification Alerts"})})}),e.jsxs(g,{icon:"reset",slot:"fixedItems",text:"Reset Settings",tooltip:"Reset Settings",headerText:"Reset Settings",children:[e.jsx(h,{text:"Reset Personalization",children:e.jsx(u,{children:"Reset Personalization content"})}),e.jsx(h,{text:"Reset All Settings",children:e.jsx(u,{children:"Reset All Settings content"})})]})]})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render(args) {
    const userMenuRef = useRef<UserMenuDomRef>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [open, setOpen] = useState(args.open);
    const handleUserMenuItemClick: UserMenuPropTypes['onItemClick'] = e => {
      const {
        settings
      } = e.detail.item.dataset;
      if (settings) {
        setOpen(true);
      }
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <ShellBar primaryTitle={'Corporate Portal'} logo={<img src="https://ui5.github.io/webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />} profile={<Avatar>
              <img src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png" alt={'Avatar of the current user'} />
            </Avatar>} onProfileClick={event => {
        userMenuRef.current.opener = event.detail.targetRef;
        userMenuRef.current.open = true;
        setMenuOpen(prev => !prev);
      }} />
        <UserMenu ref={userMenuRef} open={menuOpen} accounts={<UserMenuAccount avatarSrc="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png" titleText="Alaina Chevalier" subtitleText="aliana.chevalier@sap.com" description="Delivery Manager, SAP SE" selected />} onClose={() => {
        setMenuOpen(false);
      }} onItemClick={handleUserMenuItemClick}>
          <UserMenuItem icon={actionSettingsIcon} text="Settings" data-settings={'true'} />
        </UserMenu>
        <UserSettingsDialog {...args} open={open} onClose={e => {
        args.onClose(e);
        setOpen(false);
      }}>
          <UserSettingsItem icon="user-settings" text="User Account" tooltip="User Account" headerText="User Account" tabs={<>
                <UserSettingsView>
                  <Icon name="person-placeholder" />
                  <Title level="H3" size="H3" className="ua-name">
                    Alain Chevalier
                  </Title>
                  <div className="container">
                    <div className="ua-info-item">
                      <Label for="name">Name:</Label>
                      <Text>Alain Chevalier</Text>
                    </div>
                    <div className="ua-info-item">
                      <Label for="email">Email:</Label>
                      <Text>alian.chevalier@sap.com</Text>
                    </div>
                    <div className="ua-info-item">
                      <Label for="server">Server:</Label>
                      <Text>delivery-001.sap.com</Text>
                    </div>
                  </div>
                  <Label for="reset-all-button">Personalization</Label>
                  <br />
                  <Button>Reset All Personalization</Button>
                  <Panel fixed className="ua-panel">
                    <Text>
                      Reset your personalization settings for the launchpad (such as theme, language, user activities,
                      and home page content).
                    </Text>
                  </Panel>
                </UserSettingsView>
              </>} />
          <UserSettingsItem icon="palette" text="Appearance" tooltip="Appearance" headerText="Appearance">
            <UserSettingsAppearanceView text="Themes" additionalContent={<div>
                  <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.5rem',
              width: '100%'
            }}>
                    <Text>Optimize for Touch Input</Text>
                    <Switch />
                  </div>

                  <Text style={{
              display: 'block',
              color: 'var(--sapContent_LabelColor)',
              fontSize: 'var(--sapFontSmallSize)'
            }}>
                    Increases the size and spacing of controls to allow you to interact with them more easily using your
                    fingertip. This is useful for hybrid devices that combine touch and mouse events.
                  </Text>
                </div>}>
              <UserSettingsAppearanceViewGroup headerText="SAP Horizon">
                <UserSettingsAppearanceViewItem itemKey="sap_horizon" text="SAP Morning Horizon" />
                <UserSettingsAppearanceViewItem itemKey="sap_horizon_dark" text="SAP Evening Horizon" />
                <UserSettingsAppearanceViewItem itemKey="sap_horizon_hcb" text="SAP Horizon High Contrast Black" />
                <UserSettingsAppearanceViewItem itemKey="sap_horizon_hcw" text="SAP Horizon High Contrast White" />
              </UserSettingsAppearanceViewGroup>

              <UserSettingsAppearanceViewGroup headerText="SAP Quartz">
                <UserSettingsAppearanceViewItem itemKey="sap_fiori_3" text="SAP Quartz Light" />
                <UserSettingsAppearanceViewItem itemKey="sap_fiori_3_dark" text="SAP Quartz Dark" />
                <UserSettingsAppearanceViewItem itemKey="sap_fiori_3_hcb" text="SAP Quartz High Contrast Black" />
                <UserSettingsAppearanceViewItem itemKey="sap_fiori_3_hcw" text="SAP Quartz High Contrast White" />
              </UserSettingsAppearanceViewGroup>
            </UserSettingsAppearanceView>
          </UserSettingsItem>
          <UserSettingsItem text="Language & Region" tooltip="Language & Region" headerText="Language & Region" tabs={<UserSettingsView>
                <div className="us-container">
                  <div className="lr-item">
                    <Label>Language and Region:</Label>
                    <ComboBox placeholder="Language">
                      <ComboBoxItem text="Browse Language" />
                      <ComboBoxItem text="English" />
                      <ComboBoxItem text="European Spanish" />
                      <ComboBoxItem text="French (France)" />
                      <ComboBoxItem text="Germany" />
                    </ComboBox>
                  </div>
                  <div className="lr-item">
                    <Label for="format">Date Format:</Label>
                    <Text>MMM d, y</Text>
                  </div>
                </div>
                <Panel fixed>
                  <Label>
                    The time zone will not be applied in UI5 apps. If you don't know the type of an app, you can check
                    it in the "About" dialog in the "ID of the Application Framework” field.
                  </Label>
                </Panel>
                <br />
                <div className="lt-time-format">
                  <Label for="timeFormat">Time Format:</Label>
                  <RadioButton name="timeFormat" text="12h" />
                  <RadioButton checked name="timeFormat" text="24h" />
                </div>
                <Panel fixed>
                  <Label>
                    After you save your settings, the browser will refresh for the new settings to take effect.
                  </Label>
                </Panel>
              </UserSettingsView>} />
          <UserSettingsItem icon="iphone" text="SAP Mobile Start Application" tooltip="SAP Mobile Start Application" headerText="SAP Mobile Start Application">
            <UserSettingsView slot="pages">
              <Button>iOS</Button>
              <Button>Android</Button>
            </UserSettingsView>
            <UserSettingsView slot="pages" text="Inner Page" secondary>
              <Text>Enable access to your site from the SAP Mobile Start application.</Text>
              <Button>Install</Button>
              <Button>Register</Button>
              <Text>Scan the QR Code to install the mobile application</Text>
              <Icon name="qr-code" style={{
              width: '20rem',
              height: '20rem'
            }} />
            </UserSettingsView>
          </UserSettingsItem>
          <UserSettingsItem icon="bell" text="Notifications" tooltip="Notifications" headerText="Notifications">
            <UserSettingsView slot="pages">
              <CheckBox checked text="Show High-Priority Notification Alerts" />
            </UserSettingsView>
          </UserSettingsItem>
          <UserSettingsItem icon="reset" slot="fixedItems" text="Reset Settings" tooltip="Reset Settings" headerText="Reset Settings">
            <UserSettingsView text="Reset Personalization">
              <Button>Reset Personalization content</Button>
            </UserSettingsView>
            <UserSettingsView text="Reset All Settings">
              <Button>Reset All Settings content</Button>
            </UserSettingsView>
          </UserSettingsItem>
        </UserSettingsDialog>
      </>;
  }
}`,...b.parameters?.docs?.source}}};const me=["Default"],Te=Object.freeze(Object.defineProperty({__proto__:null,Default:b,__namedExportsOrder:me,default:pe},Symbol.toStringTag,{value:"Module"}));export{Te as C,b as D,A as U,w as a,c as b};

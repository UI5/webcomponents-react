import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{X as r,Y as i,it as a,tt as o}from"./CustomElementsScopeUtils-DlPt2d7w.js";import{n as s,t as ee}from"./Icon-CCW8SioR.js";import{_ as te,a as c,c as ne,d as l,f as u,g as d,i as f,l as re,n as p,o as m,r as h,s as ie,u as g}from"./jsx-runtime-_6Ks8TR0.js";import{n as ae,q as oe}from"./Keys-DqJfIghV.js";import{n as se,r as ce}from"./FocusableElements-BJQVy01k.js";import{n as _,t as v}from"./withWebComponent-Ch44EV4A.js";import{t as le}from"./jsx-runtime-BdxMnOeJ.js";import{n as y,t as ue}from"./event-strict-C4u0wMzB.js";import{n as de,t as fe}from"./i18n-DHtb1CQ9.js";import{n as b,t as x}from"./slot-strict-BSUUcNBc.js";import{a as pe,i as me,n as he,o as ge,r as _e,t as ve}from"./List-DwuRHA49.js";import{n as ye,t as be}from"./Icon-BnLAwz-Z.js";import{n as xe,t as Se}from"./ListItemGroup-B6o0nI8a.js";import{n as Ce,r as we}from"./TabbableElements-ggtWKgGx.js";import{t as Te}from"./slim-arrow-right-D_P0aSG2.js";import{n as Ee,t as S}from"./Text-ChQNQxe9.js";import{n as De,t as C}from"./Button-p1a3O0yC.js";import{n as Oe,t as ke}from"./Title-B5eBI1fL.js";import{n as Ae,t as w}from"./Label-D91VnD5N.js";import{n as je,t as T}from"./Option-DG_IrJRG.js";import{n as Me,t as E}from"./Panel-DFyDlX7e.js";import{n as Ne,t as D}from"./Select-vFLIWwPn.js";import{n as Pe,t as Fe}from"./Avatar-Bfpz1DAz.js";import{Vr as Ie,fr as Le,pr as Re}from"./i18n-defaults-Yid-Aku_.js";import{n as O,t as k}from"./parameters-bundle.css-sD0-XBn7.js";import{i as ze,n as Be,r as Ve,t as A}from"./ComboBoxItem-6L_1kZNQ.js";import{n as He,t as Ue}from"./Link-CN1KsNkt.js";import{n as We,t as Ge}from"./MessageStrip-DmynTBu9.js";import{n as Ke,t as qe}from"./RadioButton-NY6D3W3k.js";import{n as Je,t as Ye}from"./ShellBar-BpY9Gbam.js";import{i as Xe,n as Ze,r as Qe,t as $e}from"./Switch-BDIJhaD0.js";import{a as et,i as tt,n as nt,o as rt,r as it,t as at}from"./UserMenuItem-Bl2ZgewS.js";import{a as ot,c as st,d as ct,f as lt,g as ut,h as dt,i as ft,l as pt,m as mt,n as ht,o as gt,p as _t,r as j,s as M,t as N,u as vt}from"./UserSettingsView-CUYPEbWa.js";import{n as yt,t as bt}from"./action-settings-CnQv_PcQ.js";function xt(){return h(`div`,{class:`ui5-user-settings-view-container`,children:f(`div`,{class:`ui5-user-settings-view ui5-user-settings-notifications-view-content`,children:[h(`slot`,{name:`additionalContent`}),this._hasHeaderItems&&this.headerItems.map(e=>h(`div`,{role:`form`,class:`ui5-user-settings-notifications-view-form`,"onui5-_form-item-click":this._handleFormItemClick,children:h(`slot`,{name:e._individualSlot})})),h(ve,{class:`ui5-user-settings-notifications-view-list`,separators:`All`,onItemClick:this._handleItemClick,"data-sap-ui-fastnavgroup":`false`,accessibleName:this._listAccessibleName,children:h(`slot`,{})})]})})}function St(){return(St=e((()=>{p(),he()})))()}var Ct;function wt(){return(wt=e((()=>{r(),c(),k(),i(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>m),i(`@ui5/webcomponents-fiori`,`sap_horizon`,async()=>O,`host`),Ct=`.ui5-user-settings-notifications-view-content{display:flex;flex-direction:column;gap:.5rem}.ui5-user-settings-notifications-view-list{padding:0;margin:0;--ui5-group-header-listitem-background-color: var(--sapList_Background)}.ui5-user-settings-notifications-view-form{background:var(--sapGroup_ContentBackground);border-bottom:.0625rem solid var(--sapList_BorderColor);overflow:visible}slot[name=additionalContent]::slotted(*){display:block}
`})))()}function Tt(){return this._isHeaderItem?Et(this):pe.call(this,{listItemContent:Dt.bind(this)})}function Et(e){return f(`div`,{class:`ui5-user-settings-notifications-form-item`,role:`group`,"aria-label":e._accessibleSwitchName,"data-sap-focus-ref":!0,tabindex:e._effectiveTabIndex,onFocusIn:e._onfocusin,onFocusOut:e._onfocusout,onKeyUp:e._onkeyup,onKeyDown:e._onkeydown,onClick:e._handleFormItemClick,children:[Ot(e),e.navigable&&h(ee,{class:`ui5-user-settings-notifications-item-arrow`,name:`slim-arrow-right`,mode:`Decorative`})]})}function Dt(){return Ot(this)}function Ot(e){return f(`div`,{class:`ui5-user-settings-notifications-item${e.bylineText&&e.text?` has-byline`:``}`,children:[h(`div`,{class:`ui5-user-settings-notifications-item-start`,children:f(`div`,{class:`ui5-user-settings-notifications-item-texts`,children:[e.text&&h(`span`,{class:`ui5-user-settings-notifications-item-title`,children:e.text}),e.bylineText&&h(`span`,{class:`ui5-user-settings-notifications-item-byline`,children:e.bylineText})]})}),h(`div`,{class:`ui5-user-settings-notifications-item-end`,children:e._hasEndContent?h(`slot`,{name:`endContent`,onClick:e._handleEndClick}):h(Qe,{class:`ui5-user-settings-notifications-item-switch`,checked:e.checked,onChange:e._handleSwitchChange,accessibleName:e._accessibleSwitchName,onClick:e._handleEndClick})})]})}function kt(){return(kt=e((()=>{p(),ge(),Xe(),s(),Te()})))()}var At;function jt(){return(jt=e((()=>{r(),c(),k(),i(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>m),i(`@ui5/webcomponents-fiori`,`sap_horizon`,async()=>O,`host`),At=`:host{--_ui5_user_settings_notifications_item_end_margin: .75rem;min-height:var(--sapElement_LineHeight);overflow:visible}.ui5-li-root,.ui5-li-content{overflow:visible}.ui5-user-settings-notifications-form-item{display:flex;align-items:center;width:100%;min-height:var(--sapElement_LineHeight);padding:var(--_ui5_list_item_base_padding, 0 1rem);box-sizing:border-box;background:var(--sapList_Background);outline:none;position:relative;cursor:default}@media (hover: hover){.ui5-user-settings-notifications-form-item:hover{background:var(--sapList_Hover_Background)}}:host([navigable]) .ui5-user-settings-notifications-form-item{cursor:pointer}.ui5-user-settings-notifications-form-item .ui5-user-settings-notifications-item-end{padding-inline-end:var(--_ui5_list_item_icon_size, 1.125rem)}:host([navigable]) .ui5-user-settings-notifications-form-item .ui5-user-settings-notifications-item-end{padding-inline-end:.25rem}.ui5-user-settings-notifications-form-item .ui5-user-settings-notifications-item{flex:1 1 auto;min-width:0}.ui5-user-settings-notifications-item-arrow{flex-shrink:0}:host([desktop]) .ui5-user-settings-notifications-form-item:focus:after,.ui5-user-settings-notifications-form-item:focus-visible:after{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;inset:.125rem;pointer-events:none}@container style(--ui5_content_density: compact){:host{--_ui5_user_settings_notifications_item_end_margin: 1rem;min-height:var(--sapElement_Compact_LineHeight)}}.ui5-user-settings-notifications-item{display:flex;align-items:center;justify-content:space-between;width:100%;height:100%;box-sizing:border-box}.ui5-user-settings-notifications-item-start{display:flex;align-items:center;flex:1;min-width:0;gap:.75rem}.ui5-user-settings-notifications-item-texts{display:flex;flex-direction:column;min-width:0;overflow:hidden}.ui5-user-settings-notifications-item-title{font-family:var(--sapFontFamily);font-size:var(--sapFontLargeSize);font-weight:400;color:var(--sapList_TextColor);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@container style(--ui5_content_density: compact){.ui5-user-settings-notifications-item-title{font-size:var(--sapFontSize)}}.ui5-user-settings-notifications-item-byline{font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;color:var(--sapContent_LabelColor);padding-top:.5rem;padding-bottom:.125rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-user-settings-notifications-item-end{display:flex;align-items:center;flex-shrink:0;margin-inline-start:var(--_ui5_user_settings_notifications_item_end_margin);padding-inline-end:.25rem;overflow:visible}:host(:not([navigable])) .ui5-user-settings-notifications-item-end{padding-inline-end:calc(var(--_ui5_list_item_icon_size, 1.125rem) + .25rem)}.ui5-user-settings-notifications-item.has-byline{align-items:stretch;min-height:5rem}@container style(--ui5_content_density: compact){.ui5-user-settings-notifications-item.has-byline{min-height:4rem}}.has-byline .ui5-user-settings-notifications-item-start{align-items:center}.has-byline .ui5-user-settings-notifications-item-title{padding-top:.125rem}
`})))()}var P,F,I;function L(){return(L=e((()=>{kt(),jt(),ut(),l(),re(),b(),ue(),ie(),me(),d(),oe(),we(),P=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},F=class extends _e{constructor(){super(...arguments),this.itemKey=``,this.text=``,this.bylineText=``,this.checked=!1,this.navigable=!1,this._handleSwitchChange=e=>{let t=e.target;this.checked=t.checked,this.fireDecoratorEvent(`switch-change`,{item:this,checked:this.checked})},this._handleFormItemClick=e=>{this.navigable&&(e.target?.closest(`[ui5-switch]`)||this.fireDecoratorEvent(`_form-item-click`,{item:this}))},this._handleEndClick=e=>{e.stopPropagation()}}get isUserSettingsNotificationsViewItem(){return!0}get typeNavigation(){return this.navigable}get _isHeaderItem(){return this._individualSlot?.startsWith(`headerItems`)??!1}shouldForwardTabAfter(){return this._isHeaderItem?Ce(this.getFocusDomRef()).length===0:super.shouldForwardTabAfter()}get _hasEndContent(){return this.endContent.length>0}get _accessibleSwitchName(){return this.bylineText?`${this.text} ${this.bylineText}`:this.text}_onkeyup(e){if(ae(e)&&e.target===this.getFocusDomRef()&&!this._hasEndContent){this.checked=!this.checked,this.fireDecoratorEvent(`switch-change`,{item:this,checked:this.checked});return}super._onkeyup(e)}get accessibilityInfo(){return{...super.accessibilityInfo,description:this._accessibleSwitchName}}},P([g()],F.prototype,`itemKey`,void 0),P([g()],F.prototype,`text`,void 0),P([g()],F.prototype,`bylineText`,void 0),P([g({type:Boolean})],F.prototype,`checked`,void 0),P([g({type:Boolean})],F.prototype,`navigable`,void 0),P([x({type:HTMLElement})],F.prototype,`endContent`,void 0),F=P([u({tag:`ui5-user-settings-notifications-view-item`,renderer:ne,template:Tt,styles:[_e.styles,dt,At]}),y(`switch-change`,{bubbles:!0}),y(`_form-item-click`,{bubbles:!0})],F),F.define(),I=te(`isUserSettingsNotificationsViewItem`)})))()}var Mt;function Nt(){return(Nt=e((()=>{r(),c(),k(),i(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>m),i(`@ui5/webcomponents-fiori`,`sap_horizon`,async()=>O,`host`),Mt=`:host{background:var(--sapList_Background)}::part(header){background:var(--sapList_Background);border-bottom:none}
`})))()}var R,z,Pt;function B(){return(B=e((()=>{xe(),l(),b(),d(),Nt(),R=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},z=class extends Se{get isUserSettingsNotificationsViewGroup(){return!0}},R([x({default:!0,invalidateOnChildChange:!0,type:HTMLElement})],z.prototype,`items`,void 0),z=R([u({tag:`ui5-user-settings-notifications-view-group`,styles:[Se.styles,Mt]})],z),z.define(),Pt=te(`isUserSettingsNotificationsViewGroup`)})))()}var V,H,U;function Ft(){return(Ft=e((()=>{mt(),St(),ut(),wt(),L(),B(),ce(),o(),de(),l(),b(),ue(),ie(),Ie(),V=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},U=H=class extends _t{constructor(){super(...arguments),this._lastNavigatedItem=null,this._handleItemClick=e=>{this._processItemClick(e.detail.item)},this._handleFormItemClick=e=>{this._processItemClick(e.detail.item)}}getAllItems(){let e=[...this.headerItems];return this.items.forEach(t=>{Pt(t)?t.items.forEach(t=>{I(t)&&e.push(t)}):I(t)&&e.push(t)}),e}getItemByKey(e){return this.getAllItems().find(t=>t.itemKey===e)}get _hasHeaderItems(){return this.headerItems.length>0}get _listAccessibleName(){return this.secondary?H.i18nBundle.getText(Re):H.i18nBundle.getText(Le)}_navigateToSecondaryView(e){let t=this.closest(`[ui5-user-settings-item]`)?.pages?.filter(e=>e!==this&&e.secondary)??[],n=e.itemKey?t.find(t=>t.id===e.itemKey):void 0,r=n??t[0];r&&((!n||!r.text)&&(r.text=e.text),this.selected=!1,this._lastNavigatedItem=e,r.selected=!0,a().then(async()=>{this.isConnected&&(await r._waitForDomRef(),(await se(r.getDomRef()))?.focus())}))}_processItemClick(e){I(e)&&e.navigable&&this.fireDecoratorEvent(`item-click`,{item:e})&&this._navigateToSecondaryView(e)}},V([x({type:HTMLElement,default:!0,invalidateOnChildChange:!0})],U.prototype,`items`,void 0),V([x({type:HTMLElement,invalidateOnChildChange:!0,individualSlots:!0})],U.prototype,`headerItems`,void 0),V([x({type:HTMLElement})],U.prototype,`additionalContent`,void 0),V([fe(`@ui5/webcomponents-fiori`)],U,`i18nBundle`,void 0),U=H=V([u({tag:`ui5-user-settings-notifications-view`,renderer:ne,template:xt,styles:[dt,Ct]}),y(`item-click`,{cancelable:!0})],U),U.define()})))()}var W;function G(){return(G=e((()=>{Ft(),v(),W=_(`ui5-user-settings-notifications-view`,[`text`],[`secondary`,`selected`],[`additionalContent`,`headerItems`],[`item-click`]),W.displayName=`UserSettingsNotificationsView`;try{W.displayName=`UserSettingsNotificationsView`,W.__docgenInfo={description:"The `UserSettingsNotificationsView` represents a view displayed in the\n`UserSettingsItem` that lists notification preferences. Individual settings\nare represented by `UserSettingsNotificationsViewItem` elements, optionally\ngrouped by `UserSettingsNotificationsViewGroup`.\n\nWhen a navigable item is clicked, the view drills into a sibling secondary view of\nits parent `UserSettingsItem`. When an item's `item-key` matches a target\nview's `id`, that view is opened and keeps its own `text`. Otherwise the first\nsibling marked as `secondary` is opened and its `text` is set to the clicked\nitem's `text` so the drill-in header reflects the origin.\n\nApps can override this behavior by preventing the `item-click` event.\n\nApplications should listen to the item's `switch-change` event (which bubbles) to\nbe notified when a switch is toggled.\n\nAdditional content (e.g. an information message strip) can be placed via the\n`additionalContent` slot, which is rendered above the list.\n\n\n\n__Note:__ This is a UI5 Web Component! [UserSettingsNotificationsView UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/UserSettingsNotificationsView) | [Repository](https://github.com/UI5/webcomponents)",displayName:`UserSettingsNotificationsView`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsView/index.d.ts`,methods:[],props:{additionalContent:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsView/index.d.ts`,name:`UserSettingsNotificationsViewPropTypes`}],description:`Defines additional content displayed above the items list.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="additionalContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`additionalContent`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsView/index.d.ts`,name:`UserSettingsNotificationsViewPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsView/index.d.ts`,name:`UserSettingsNotificationsViewPropTypes`}],description:"Defines the items of the component. Can be a mix of\n`UserSettingsNotificationsViewItem` and\n`UserSettingsNotificationsViewGroup` elements.\n\n__Supported Node Type/s:__ `Array<UserSettingsNotificationsViewGroup | UserSettingsNotificationsViewItem>`",name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsView/index.d.ts`,name:`UserSettingsNotificationsViewPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},headerItems:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsView/index.d.ts`,name:`UserSettingsNotificationsViewPropTypes`}],description:`Defines header items rendered above the grouped items list.
Each item is wrapped in a \`role="form"\` landmark — a separate Tab stop.
Use this slot for product-level toggles (e.g. "Allow Notifications") that appear
above the notification-type groups.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="headerItems"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<UserSettingsNotificationsViewItem>\``,name:`headerItems`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsView/index.d.ts`,name:`UserSettingsNotificationsViewPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onItemClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsView/index.d.ts`,name:`UserSettingsNotificationsViewPropTypes`}],description:`Fired when a navigable item in the list is clicked.

The event is cancelable: preventing it skips the built-in drill-in to the
parent's secondary view, allowing the application to take over.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:`onItemClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsView/index.d.ts`,name:`UserSettingsNotificationsViewPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<UserSettingsNotificationsViewDomRef, UserSettingsNotificationsViewItemClickEventDetail>) => void`}},secondary:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsView/index.d.ts`,name:`UserSettingsNotificationsViewAttributes`}],description:"Indicates whether the view is secondary. It is relevant only if the view is used in `pages` slot of `UserSettingsItem`\nand controls the visibility of the back button.",name:`secondary`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsView/index.d.ts`,name:`UserSettingsNotificationsViewAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},selected:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsView/index.d.ts`,name:`UserSettingsNotificationsViewAttributes`}],description:`Defines whether the view is selected. There can be just one selected view at a time.`,name:`selected`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsView/index.d.ts`,name:`UserSettingsNotificationsViewAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},text:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsView/index.d.ts`,name:`UserSettingsNotificationsViewAttributes`}],description:`Defines the title text of the user settings view.`,name:`text`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsView/index.d.ts`,name:`UserSettingsNotificationsViewAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.27.0](https://github.com/UI5/webcomponents/releases/tag/v2.27.0) of __@ui5/webcomponents-fiori__.`}}}catch{}})))()}var K;function q(){return(q=e((()=>{B(),v(),K=_(`ui5-user-settings-notifications-view-group`,[`headerAccessibleName`,`headerText`,`wrappingType`],[],[`header`],[`move-over`,`move`]),K.displayName=`UserSettingsNotificationsViewGroup`;try{K.displayName=`UserSettingsNotificationsViewGroup`,K.__docgenInfo={description:`The \`UserSettingsNotificationsViewGroup\` groups \`UserSettingsNotificationsViewItem\`
elements inside a \`UserSettingsNotificationsView\`. Its header renders as a plain bold
section title with a separator line below, per the notifications design spec.



__Note:__ This is a UI5 Web Component! [UserSettingsNotificationsViewGroup UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/UserSettingsNotificationsViewGroup) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`UserSettingsNotificationsViewGroup`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewGroup/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewGroup/index.d.ts`,name:`UserSettingsNotificationsViewGroupPropTypes`}],description:"Defines the items of the `UserSettingsNotificationsViewGroup`.\n\n__Supported Node Type/s:__ `Array<UserSettingsNotificationsViewItem>`",name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewGroup/index.d.ts`,name:`UserSettingsNotificationsViewGroupPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},header:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewGroup/index.d.ts`,name:`UserSettingsNotificationsViewGroupPropTypes`}],description:`Defines the header of the component.

**Note:** Using this slot, the default header text of group and the value of \`headerText\` property will be overwritten.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<ListItemBase>\``,name:`header`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewGroup/index.d.ts`,name:`UserSettingsNotificationsViewGroupPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onMove:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewGroup/index.d.ts`,name:`UserSettingsNotificationsViewGroupPropTypes`}],description:`Fired when a movable list item is dropped onto a drop target.

**Note:** \`move\` event is fired only if there was a preceding \`move-over\` with prevented default action.

**Note:** Available since [v2.1.0](https://github.com/UI5/webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents-fiori**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onMove`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewGroup/index.d.ts`,name:`UserSettingsNotificationsViewGroupPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<UserSettingsNotificationsViewGroupDomRef, ListItemGroupMoveEventDetail>) => void`}},onMoveOver:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewGroup/index.d.ts`,name:`UserSettingsNotificationsViewGroupPropTypes`}],description:`Fired when a movable list item is moved over a potential drop target during a dragging operation.

If the new position is valid, prevent the default action of the event using \`preventDefault()\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.1.0](https://github.com/UI5/webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents-fiori**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onMoveOver`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewGroup/index.d.ts`,name:`UserSettingsNotificationsViewGroupPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<UserSettingsNotificationsViewGroupDomRef, ListItemGroupMoveEventDetail>) => void`}},headerAccessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewGroup/index.d.ts`,name:`UserSettingsNotificationsViewGroupAttributes`}],description:`Defines the accessible name of the header.`,name:`headerAccessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewGroup/index.d.ts`,name:`UserSettingsNotificationsViewGroupAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},headerText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewGroup/index.d.ts`,name:`UserSettingsNotificationsViewGroupAttributes`}],description:`Defines the header text of the group.`,name:`headerText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewGroup/index.d.ts`,name:`UserSettingsNotificationsViewGroupAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},wrappingType:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewGroup/index.d.ts`,name:`UserSettingsNotificationsViewGroupAttributes`}],description:`Defines if the text of the component should wrap when it's too long.
When set to "Normal", the content (title, description) will be wrapped
using the \`ui5-expandable-text\` component.<br/>

The text can wrap up to 100 characters on small screens (size S) and
up to 300 characters on larger screens (size M and above). When text exceeds
these limits, it truncates with an ellipsis followed by a text expansion trigger.

Available options are:
- \`None\` (default) - The text will truncate with an ellipsis.
- \`Normal\` - The text will wrap (without truncation).

**Note:** Available since [v2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents-fiori**.`,name:`wrappingType`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewGroup/index.d.ts`,name:`UserSettingsNotificationsViewGroupAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`WrappingType | "None" | "Normal"`,value:[{value:`"None"`,description:`The text will be truncated with an ellipsis.`,fullComment:`The text will be truncated with an ellipsis.
@public`,tags:{public:``}},{value:`"Normal"`,description:`The text will wrap. The words will not be broken based on hyphenation.`,fullComment:`The text will wrap. The words will not be broken based on hyphenation.
@public`,tags:{public:``}},{value:`"None"`},{value:`"Normal"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.27.0](https://github.com/UI5/webcomponents/releases/tag/v2.27.0) of __@ui5/webcomponents-fiori__.`}}}catch{}})))()}var J;function Y(){return(Y=e((()=>{L(),v(),J=_(`ui5-user-settings-notifications-view-item`,[`accessibilityAttributes`,`accessibleName`,`accessibleRole`,`bylineText`,`highlight`,`itemKey`,`text`,`tooltip`,`type`],[`checked`,`movable`,`navigable`,`navigated`,`selected`],[`deleteButton`,`endContent`],[`click`,`detail-click`,`switch-change`]),J.displayName=`UserSettingsNotificationsViewItem`;try{J.displayName=`UserSettingsNotificationsViewItem`,J.__docgenInfo={description:"The `UserSettingsNotificationsViewItem` represents a single notification setting\nwithin the `UserSettingsNotificationsView`.\n\nIt displays a title and an optional byline. By default a trailing switch reflects\nthe `checked` state. Applications can override the trailing control by providing content\nin the `endContent` slot (e.g. a `ui5-select` for a value picker); the built-in switch and\nits `switch-change` event are then suppressed. Items can additionally be flagged as\n`navigable` to display a navigation arrow and behave as clickable list rows.\n\n**Note:** The default switch and the `endContent` slot are mutually exclusive.\nWhen any content is provided in `endContent`, the trailing switch is not rendered\nand no `switch-change` event is fired.\n\n\n\n__Note:__ This is a UI5 Web Component! [UserSettingsNotificationsViewItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/UserSettingsNotificationsViewItem) | [Repository](https://github.com/UI5/webcomponents)",displayName:`UserSettingsNotificationsViewItem`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemPropTypes`}],description:`Defines the content of the component.

__Supported Node Type/s:__ \`Array<Node>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},deleteButton:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemPropTypes`}],description:`Defines the delete button, displayed in "Delete" mode.
**Note:** While the slot allows custom buttons, to match
design guidelines, please use the \`ui5-button\` component.
**Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.9.0](https://github.com/UI5/webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents-fiori**.

__Supported Node Type/s:__ \`Array<IButton>\``,name:`deleteButton`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},endContent:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemPropTypes`}],description:`Defines custom content rendered at the trailing end of the item, replacing the
default switch. Use this to place a \`ui5-select\`, \`ui5-input\`, or any other
control instead of a boolean toggle.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="endContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`endContent`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemPropTypes`}],description:`Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\` property is set to \`true\`.

**Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents-fiori**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<UserSettingsNotificationsViewItemDomRef, ListItemBaseClickEventDetail>) => void`}},onDetailClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemPropTypes`}],description:`Fired when the user clicks on the detail button when type is \`Detail\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onDetailClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<UserSettingsNotificationsViewItemDomRef, never>) => void`}},onSwitchChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemPropTypes`}],description:`Fired when the switch state changes.

Not fired when the \`endContent\` slot is used to override the trailing control.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onSwitchChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<UserSettingsNotificationsViewItemDomRef, UserSettingsNotificationsViewItemSwitchChangeEventDetail>) => void`}},accessibilityAttributes:{defaultValue:{value:`{}`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`}],description:`Defines the additional accessibility attributes that will be applied to the component.
The following fields are supported:

- **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
**Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set \`-1\`.

	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.

**Note:** Available since [v1.15.0](https://github.com/UI5/webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents-fiori**.`,name:`accessibilityAttributes`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`},required:!1,tags:{default:`{}`},type:{name:`ListItemAccessibilityAttributes`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`}],description:`Defines the text alternative of the component.

**Note**: If not provided a default text alternative will be set, if present.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleRole:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`}],description:"Used to define the role of the list item.\n\n**Note:** If not set, the role is automatically inherited from the parent `ui5-list` based on its `accessible-role` property\n(e.g. `Menu` -> `MenuItem`, `Tree` -> `TreeItem`, `ListBox` -> `Option`).\nAn explicitly set `accessible-role` on the list item takes precedence over the inherited role.\n\n**Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents-fiori**.",name:`accessibleRole`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`},required:!1,tags:{default:`undefined`},type:{name:`enum`,raw:`"None" | ListItemAccessibleRole | "ListItem" | "MenuItem" | "TreeItem" | "Option"`,value:[{value:`"None"`},{value:`"ListItem"`,description:`Represents the ARIA role "listitem". (by default)`,fullComment:`Represents the ARIA role "listitem". (by default)
@public`,tags:{public:``}},{value:`"MenuItem"`,description:`Represents the ARIA role "menuitem".`,fullComment:`Represents the ARIA role "menuitem".
@public`,tags:{public:``}},{value:`"TreeItem"`,description:`Represents the ARIA role "treeitem".`,fullComment:`Represents the ARIA role "treeitem".
@public`,tags:{public:``}},{value:`"Option"`,description:`Represents the ARIA role "option".`,fullComment:`Represents the ARIA role "option".
@public`,tags:{public:``}},{value:`"None"`,description:`Represents the ARIA role "none".`,fullComment:`Represents the ARIA role "none".
@public`,tags:{public:``}},{value:`"ListItem"`},{value:`"MenuItem"`},{value:`"TreeItem"`},{value:`"Option"`}]}},bylineText:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`}],description:`Defines the byline text of the item, rendered below the title.`,name:`bylineText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`},required:!1,tags:{},type:{name:`string`}},checked:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`}],description:`Defines whether the trailing switch is on.

Ignored when the \`endContent\` slot is used.`,name:`checked`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},highlight:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`}],description:'Defines the highlight state of the list items.\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.\n\n**Note:** Available since [v1.24](https://github.com/UI5/webcomponents/releases/tag/v1.24) of **@ui5/webcomponents-fiori**.',name:`highlight`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"Information" | "Positive" | "Negative" | "Critical" | "None" | Highlight`,value:[{value:`"Information"`},{value:`"Positive"`},{value:`"Negative"`},{value:`"Critical"`},{value:`"None"`},{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}}]}},itemKey:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`}],description:"Defines the unique identifier of the item.\n\nWhen the item is navigable, `itemKey` is also used to route to a matching sibling\n`secondary` view by id.",name:`itemKey`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`},required:!1,tags:{},type:{name:`string`}},movable:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`}],description:`Defines whether the item is movable.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.`,name:`movable`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},navigable:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`}],description:"Defines whether the item is navigable. When true, a navigation arrow is rendered\nand the whole row becomes clickable (fires the parent view's `item-click` event).",name:`navigable`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},navigated:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`}],description:`The navigated state of the list item.
If set to \`true\`, a navigation indicator is displayed at the end of the list item.

**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents-fiori**.`,name:`navigated`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},selected:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`}],description:`Defines the selected state of the component.`,name:`selected`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},text:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`}],description:`Defines the title text of the item.`,name:`text`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`},required:!1,tags:{},type:{name:`string`}},tooltip:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`}],description:`Defines the text of the tooltip that would be displayed for the list item.

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents-fiori**.`,name:`tooltip`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},type:{defaultValue:{value:`"Active"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`}],description:"Defines the visual indication and behavior of the list items.\nAvailable options are `Active` (by default), `Inactive`, `InactiveSelectable`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,\nwhile with type `Inactive`, `InactiveSelectable` and `Detail` - will not.\n\n**Note:** `InactiveSelectable` behaves like `Inactive` (no active press/hover feedback and the\n`item-click` event is not fired), but the item can still be selected. Clicking the item body,\npressing Space/Enter, or interacting with the selection component (checkbox in Multi mode, radio\nbutton in Single modes) toggles the selection when the list has a selection mode.",name:`type`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserSettingsNotificationsViewItem/index.d.ts`,name:`UserSettingsNotificationsViewItemAttributes`},required:!1,tags:{default:`"Active"`},type:{name:`enum`,raw:`ListItemType | "Inactive" | "InactiveSelectable" | "Active" | "Detail" | "Navigation"`,value:[{value:`"Inactive"`,description:`Indicates the list item does not have any active feedback when item is pressed.`,fullComment:`Indicates the list item does not have any active feedback when item is pressed.
@public`,tags:{public:``}},{value:`"InactiveSelectable"`,description:`Indicates the list item does not have any active feedback when item is pressed,
but the item can still be selected when a selection mode is active
(via the item body, Space/Enter, or the checkbox/radio).
The \`item-click\` event is not fired for items of this type.`,fullComment:`Indicates the list item does not have any active feedback when item is pressed,
but the item can still be selected when a selection mode is active
(via the item body, Space/Enter, or the checkbox/radio).
The \`item-click\` event is not fired for items of this type.
@public
@since 2.26.0`,tags:{public:``,since:`2.26.0`}},{value:`"Active"`,description:`Indicates that the item is clickable via active feedback when item is pressed.`,fullComment:`Indicates that the item is clickable via active feedback when item is pressed.
@public`,tags:{public:``}},{value:`"Detail"`,description:`Enables detail button of the list item that fires detail-click event.`,fullComment:`Enables detail button of the list item that fires detail-click event.
@public`,tags:{public:``}},{value:`"Navigation"`,description:`Enables the type of navigation, which is specified to add an arrow at the end of the items and fires navigate-click event.`,fullComment:`Enables the type of navigation, which is specified to add an arrow at the end of the items and fires navigate-click event.
@public`,tags:{public:``}},{value:`"Inactive"`},{value:`"InactiveSelectable"`},{value:`"Active"`},{value:`"Detail"`},{value:`"Navigation"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.27.0](https://github.com/UI5/webcomponents/releases/tag/v2.27.0) of __@ui5/webcomponents-fiori__.`}}}catch{}})))()}var It=t({Default:()=>Q,__namedExportsOrder:()=>Rt,default:()=>Lt}),X,Z,Lt,Q,Rt;function $(){return($=e((()=>{yt(),Pe(),De(),ze(),Be(),ye(),He(),We(),je(),Ne(),Ee(),Ae(),Me(),Je(),rt(),tt(),nt(),ft(),ht(),Oe(),Ke(),X=n(),Ze(),lt(),vt(),st(),G(),q(),Y(),gt(),Z=le(),Lt={title:`Modals & Popovers / UserSettingsDialog`,component:ot,argTypes:{children:{control:{disable:!0}},fixedItems:{control:{disable:!0}}},args:{},tags:[`package:@ui5/webcomponents`]},Q={render(e){let t=(0,X.useRef)(null),[n,r]=(0,X.useState)(!1),[i,a]=(0,X.useState)(e.open);return(0,X.useEffect)(()=>{a(e.open)},[e.open]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ye,{primaryTitle:`Corporate Portal`,logo:(0,Z.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/sap-logo-svg.svg`,alt:`SAP Logo`}),profile:(0,Z.jsx)(Fe,{children:(0,Z.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,alt:`Avatar of the current user`})}),onProfileClick:e=>{t.current.opener=e.detail.targetRef,t.current.open=!0,r(e=>!e)}}),(0,Z.jsx)(et,{ref:t,open:n,accounts:(0,Z.jsx)(it,{avatarSrc:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,titleText:`Alaina Chevalier`,subtitleText:`aliana.chevalier@sap.com`,description:`Delivery Manager, SAP SE`,selected:!0}),onClose:()=>{r(!1)},onItemClick:e=>{let{settings:t}=e.detail.item.dataset;t&&a(!0)},children:(0,Z.jsx)(at,{icon:bt,text:`Settings`,"data-settings":`true`})}),(0,Z.jsxs)(ot,{...e,open:i,onClose:t=>{e.onClose(t),a(!1)},children:[(0,Z.jsx)(j,{icon:`user-settings`,text:`User Account`,tooltip:`User Account`,headerText:`User Account`,tabs:(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(N,{children:[(0,Z.jsx)(be,{name:`person-placeholder`}),(0,Z.jsx)(ke,{level:`H3`,size:`H3`,className:`ua-name`,children:`Alain Chevalier`}),(0,Z.jsxs)(`div`,{className:`container`,children:[(0,Z.jsxs)(`div`,{className:`ua-info-item`,children:[(0,Z.jsx)(w,{for:`name`,children:`Name:`}),(0,Z.jsx)(S,{children:`Alain Chevalier`})]}),(0,Z.jsxs)(`div`,{className:`ua-info-item`,children:[(0,Z.jsx)(w,{for:`email`,children:`Email:`}),(0,Z.jsx)(S,{children:`alian.chevalier@sap.com`})]}),(0,Z.jsxs)(`div`,{className:`ua-info-item`,children:[(0,Z.jsx)(w,{for:`server`,children:`Server:`}),(0,Z.jsx)(S,{children:`delivery-001.sap.com`})]})]}),(0,Z.jsx)(w,{for:`reset-all-button`,children:`Personalization`}),(0,Z.jsx)(`br`,{}),(0,Z.jsx)(C,{children:`Reset All Personalization`}),(0,Z.jsx)(E,{fixed:!0,className:`ua-panel`,children:(0,Z.jsx)(S,{children:`Reset your personalization settings for the launchpad (such as theme, language, user activities, and home page content).`})})]})})}),(0,Z.jsx)(j,{icon:`palette`,text:`Appearance`,tooltip:`Appearance`,headerText:`Appearance`,children:(0,Z.jsxs)(ct,{text:`Themes`,additionalContent:(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`0.5rem`,width:`100%`},children:[(0,Z.jsx)(S,{children:`Optimize for Touch Input`}),(0,Z.jsx)($e,{})]}),(0,Z.jsx)(S,{style:{display:`block`,color:`var(--sapContent_LabelColor)`,fontSize:`var(--sapFontSmallSize)`},children:`Increases the size and spacing of controls to allow you to interact with them more easily using your fingertip. This is useful for hybrid devices that combine touch and mouse events.`})]}),children:[(0,Z.jsxs)(pt,{headerText:`SAP Horizon`,children:[(0,Z.jsx)(M,{itemKey:`sap_horizon`,text:`SAP Morning Horizon`}),(0,Z.jsx)(M,{itemKey:`sap_horizon_dark`,text:`SAP Evening Horizon`}),(0,Z.jsx)(M,{itemKey:`sap_horizon_hcb`,text:`SAP Horizon High Contrast Black`}),(0,Z.jsx)(M,{itemKey:`sap_horizon_hcw`,text:`SAP Horizon High Contrast White`})]}),(0,Z.jsxs)(pt,{headerText:`SAP Quartz`,children:[(0,Z.jsx)(M,{itemKey:`sap_fiori_3`,text:`SAP Quartz Light`}),(0,Z.jsx)(M,{itemKey:`sap_fiori_3_dark`,text:`SAP Quartz Dark`}),(0,Z.jsx)(M,{itemKey:`sap_fiori_3_hcb`,text:`SAP Quartz High Contrast Black`}),(0,Z.jsx)(M,{itemKey:`sap_fiori_3_hcw`,text:`SAP Quartz High Contrast White`})]})]})}),(0,Z.jsx)(j,{text:`Language & Region`,tooltip:`Language & Region`,headerText:`Language & Region`,tabs:(0,Z.jsxs)(N,{children:[(0,Z.jsxs)(`div`,{className:`us-container`,children:[(0,Z.jsxs)(`div`,{className:`lr-item`,children:[(0,Z.jsx)(w,{children:`Language and Region:`}),(0,Z.jsxs)(Ve,{placeholder:`Language`,children:[(0,Z.jsx)(A,{text:`Browse Language`}),(0,Z.jsx)(A,{text:`English`}),(0,Z.jsx)(A,{text:`European Spanish`}),(0,Z.jsx)(A,{text:`French (France)`}),(0,Z.jsx)(A,{text:`Germany`})]})]}),(0,Z.jsxs)(`div`,{className:`lr-item`,children:[(0,Z.jsx)(w,{for:`format`,children:`Date Format:`}),(0,Z.jsx)(S,{children:`MMM d, y`})]})]}),(0,Z.jsx)(E,{fixed:!0,children:(0,Z.jsx)(w,{children:`The time zone will not be applied in UI5 apps. If you don't know the type of an app, you can check it in the "About" dialog in the "ID of the Application Framework” field.`})}),(0,Z.jsx)(`br`,{}),(0,Z.jsxs)(`div`,{className:`lt-time-format`,children:[(0,Z.jsx)(w,{for:`timeFormat`,children:`Time Format:`}),(0,Z.jsx)(qe,{name:`timeFormat`,text:`12h`}),(0,Z.jsx)(qe,{checked:!0,name:`timeFormat`,text:`24h`})]}),(0,Z.jsx)(E,{fixed:!0,children:(0,Z.jsx)(w,{children:`After you save your settings, the browser will refresh for the new settings to take effect.`})})]})}),(0,Z.jsxs)(j,{icon:`iphone`,text:`SAP Mobile Start Application`,tooltip:`SAP Mobile Start Application`,headerText:`SAP Mobile Start Application`,children:[(0,Z.jsxs)(N,{slot:`pages`,children:[(0,Z.jsx)(C,{children:`iOS`}),(0,Z.jsx)(C,{children:`Android`})]}),(0,Z.jsxs)(N,{slot:`pages`,text:`Inner Page`,secondary:!0,children:[(0,Z.jsx)(S,{children:`Enable access to your site from the SAP Mobile Start application.`}),(0,Z.jsx)(C,{children:`Install`}),(0,Z.jsx)(C,{children:`Register`}),(0,Z.jsx)(S,{children:`Scan the QR Code to install the mobile application`}),(0,Z.jsx)(be,{name:`qr-code`,style:{width:`20rem`,height:`20rem`}})]})]}),(0,Z.jsxs)(j,{icon:`bell`,text:`Notifications`,tooltip:`Notifications`,headerText:`Notifications`,children:[(0,Z.jsxs)(W,{additionalContent:(0,Z.jsxs)(Ge,{design:`Information`,hideCloseButton:!0,children:[`Some settings are managed by your organization. `,(0,Z.jsx)(Ue,{children:`Learn More`})]}),headerItems:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(J,{itemKey:`allow-notifications`,text:`Allow Notifications`,checked:!0}),(0,Z.jsx)(J,{itemKey:`allow-banner-alerts`,text:`Allow Banner Alerts`,bylineText:`Switch on Banner for Notifications`,checked:!0})]}),children:[(0,Z.jsxs)(K,{headerText:`Sales`,children:[(0,Z.jsx)(J,{itemKey:`sales-order-updates`,text:`Sales Order Updates`,checked:!0,navigable:!0}),(0,Z.jsx)(J,{itemKey:`sales-order-approvals`,text:`Sales Order Approvals`,navigable:!0}),(0,Z.jsx)(J,{itemKey:`sales-order-release`,text:`Sales Order Release`,checked:!0,navigable:!0})]}),(0,Z.jsxs)(K,{headerText:`Purchasing`,children:[(0,Z.jsx)(J,{itemKey:`po-approval`,text:`Purchase Order Approval`,checked:!0,navigable:!0}),(0,Z.jsx)(J,{itemKey:`po-rejection`,text:`Purchase Order Rejection`}),(0,Z.jsx)(J,{itemKey:`po-overdue`,text:`Purchase Order Overdue`,checked:!0,navigable:!0})]})]}),(0,Z.jsx)(W,{id:`allow-notifications`,secondary:!0,additionalContent:(0,Z.jsx)(S,{children:`Control how and where you receive notifications.`}),children:(0,Z.jsxs)(K,{headerText:`Notification Channels`,children:[(0,Z.jsx)(J,{itemKey:`an-panel`,text:`Notifications Panel`,bylineText:`Receive notifications through the central notifications panel.`,checked:!0}),(0,Z.jsx)(J,{itemKey:`an-email`,text:`Email`,bylineText:`Receive notifications by email.`,checked:!0}),(0,Z.jsx)(J,{itemKey:`an-push`,text:`Push Notifications`,bylineText:`Receive notifications instantly on your mobile device.`})]})}),(0,Z.jsx)(W,{id:`allow-banner-alerts`,secondary:!0,additionalContent:(0,Z.jsx)(S,{children:`Configure banner alert behavior for incoming notifications.`}),children:(0,Z.jsxs)(K,{headerText:`Banner Settings`,children:[(0,Z.jsx)(J,{itemKey:`ab-sound`,text:`Play Sound`,bylineText:`Play a sound when a banner alert appears.`,checked:!0}),(0,Z.jsx)(J,{itemKey:`ab-duration`,text:`Display Duration`,bylineText:`Choose how long the banner stays on screen.`,endContent:(0,Z.jsxs)(D,{children:[(0,Z.jsx)(T,{selected:!0,children:`5 seconds`}),(0,Z.jsx)(T,{children:`10 seconds`}),(0,Z.jsx)(T,{children:`Until dismissed`})]})})]})}),(0,Z.jsx)(W,{id:`sales-order-updates`,secondary:!0,additionalContent:(0,Z.jsx)(S,{children:`Configure how you want to receive Sales Order Updates notifications.`}),children:(0,Z.jsxs)(K,{headerText:`Notification Preferences`,children:[(0,Z.jsx)(J,{itemKey:`sou-panel`,text:`Notifications Panel`,bylineText:`Receive notifications through the central notifications panel.`,checked:!0}),(0,Z.jsx)(J,{itemKey:`sou-banner`,text:`Banner Alerts`,bylineText:`Receive notifications instantly as a fly-in banner.`,checked:!0}),(0,Z.jsx)(J,{itemKey:`sou-push`,text:`Push Notifications`,bylineText:`Receive notifications instantly on your mobile device.`}),(0,Z.jsx)(J,{itemKey:`sou-email`,text:`Email`,bylineText:`Receive notifications by email.`,checked:!0}),(0,Z.jsx)(J,{itemKey:`sou-frequency`,text:`Frequency`,bylineText:`Choose the frequency of receiving a notification.`,endContent:(0,Z.jsxs)(D,{children:[(0,Z.jsx)(T,{selected:!0,children:`Immediate`}),(0,Z.jsx)(T,{children:`Every 15 minutes`}),(0,Z.jsx)(T,{children:`Hourly`}),(0,Z.jsx)(T,{children:`Daily digest`})]})})]})}),(0,Z.jsx)(W,{id:`sales-order-approvals`,secondary:!0,additionalContent:(0,Z.jsx)(S,{children:`Configure how you want to receive Sales Order Approvals notifications.`}),children:(0,Z.jsxs)(K,{headerText:`Notification Preferences`,children:[(0,Z.jsx)(J,{itemKey:`soa-panel`,text:`Notifications Panel`,bylineText:`Receive notifications through the central notifications panel.`,checked:!0}),(0,Z.jsx)(J,{itemKey:`soa-banner`,text:`Banner Alerts`,bylineText:`Receive notifications instantly as a fly-in banner.`}),(0,Z.jsx)(J,{itemKey:`soa-push`,text:`Push Notifications`,bylineText:`Receive notifications instantly on your mobile device.`,checked:!0}),(0,Z.jsx)(J,{itemKey:`soa-email`,text:`Email`,bylineText:`Receive notifications by email.`,checked:!0})]})}),(0,Z.jsx)(W,{id:`sales-order-release`,secondary:!0,additionalContent:(0,Z.jsx)(S,{children:`Configure how you want to receive Sales Order Release notifications.`}),children:(0,Z.jsxs)(K,{headerText:`Notification Preferences`,children:[(0,Z.jsx)(J,{itemKey:`sor-panel`,text:`Notifications Panel`,bylineText:`Receive notifications through the central notifications panel.`,checked:!0}),(0,Z.jsx)(J,{itemKey:`sor-email`,text:`Email`,bylineText:`Receive notifications by email.`}),(0,Z.jsx)(J,{itemKey:`sor-frequency`,text:`Frequency`,bylineText:`Choose the frequency of receiving a notification.`,endContent:(0,Z.jsxs)(D,{children:[(0,Z.jsx)(T,{selected:!0,children:`Immediate`}),(0,Z.jsx)(T,{children:`Every 15 minutes`}),(0,Z.jsx)(T,{children:`Daily digest`})]})})]})}),(0,Z.jsx)(W,{id:`po-approval`,secondary:!0,additionalContent:(0,Z.jsx)(S,{children:`Approval-specific channels. These settings apply only to Purchase Order Approval notifications.`}),children:(0,Z.jsxs)(K,{headerText:`Approver Preferences`,children:[(0,Z.jsx)(J,{itemKey:`po-approval-mobile`,text:`Push to mobile`,bylineText:`Approve or reject directly from your device.`,checked:!0}),(0,Z.jsx)(J,{itemKey:`po-approval-summary`,text:`Daily summary email`,bylineText:`Receive one email per day with all pending approvals.`}),(0,Z.jsx)(J,{itemKey:`po-approval-delegation`,text:`Delegation`,bylineText:`Route approvals to a delegate when you are out of office.`})]})}),(0,Z.jsx)(W,{id:`po-overdue`,secondary:!0,additionalContent:(0,Z.jsx)(S,{children:`Configure how you want to receive Purchase Order Overdue notifications.`}),children:(0,Z.jsxs)(K,{headerText:`Notification Preferences`,children:[(0,Z.jsx)(J,{itemKey:`poo-panel`,text:`Notifications Panel`,bylineText:`Receive notifications through the central notifications panel.`,checked:!0}),(0,Z.jsx)(J,{itemKey:`poo-banner`,text:`Banner Alerts`,bylineText:`Receive notifications instantly as a fly-in banner.`,checked:!0}),(0,Z.jsx)(J,{itemKey:`poo-push`,text:`Push Notifications`,bylineText:`Receive notifications instantly on your mobile device.`,checked:!0}),(0,Z.jsx)(J,{itemKey:`poo-email`,text:`Email`,bylineText:`Receive notifications by email.`,checked:!0})]})})]}),(0,Z.jsxs)(j,{icon:`reset`,slot:`fixedItems`,text:`Reset Settings`,tooltip:`Reset Settings`,headerText:`Reset Settings`,children:[(0,Z.jsx)(N,{text:`Reset Personalization`,children:(0,Z.jsx)(C,{children:`Reset Personalization content`})}),(0,Z.jsx)(N,{text:`Reset All Settings`,children:(0,Z.jsx)(C,{children:`Reset All Settings content`})})]})]})]})}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
            <UserSettingsNotificationsView additionalContent={<MessageStrip design="Information" hideCloseButton>
                  Some settings are managed by your organization. <Link>Learn More</Link>
                </MessageStrip>} headerItems={<>
                  <UserSettingsNotificationsViewItem itemKey="allow-notifications" text="Allow Notifications" checked />
                  <UserSettingsNotificationsViewItem itemKey="allow-banner-alerts" text="Allow Banner Alerts" bylineText="Switch on Banner for Notifications" checked />
                </>}>
              <UserSettingsNotificationsViewGroup headerText="Sales">
                <UserSettingsNotificationsViewItem itemKey="sales-order-updates" text="Sales Order Updates" checked navigable />
                <UserSettingsNotificationsViewItem itemKey="sales-order-approvals" text="Sales Order Approvals" navigable />
                <UserSettingsNotificationsViewItem itemKey="sales-order-release" text="Sales Order Release" checked navigable />
              </UserSettingsNotificationsViewGroup>
              <UserSettingsNotificationsViewGroup headerText="Purchasing">
                <UserSettingsNotificationsViewItem itemKey="po-approval" text="Purchase Order Approval" checked navigable />
                <UserSettingsNotificationsViewItem itemKey="po-rejection" text="Purchase Order Rejection" />
                <UserSettingsNotificationsViewItem itemKey="po-overdue" text="Purchase Order Overdue" checked navigable />
              </UserSettingsNotificationsViewGroup>
            </UserSettingsNotificationsView>

            <UserSettingsNotificationsView id="allow-notifications" secondary additionalContent={<Text>Control how and where you receive notifications.</Text>}>
              <UserSettingsNotificationsViewGroup headerText="Notification Channels">
                <UserSettingsNotificationsViewItem itemKey="an-panel" text="Notifications Panel" bylineText="Receive notifications through the central notifications panel." checked />
                <UserSettingsNotificationsViewItem itemKey="an-email" text="Email" bylineText="Receive notifications by email." checked />
                <UserSettingsNotificationsViewItem itemKey="an-push" text="Push Notifications" bylineText="Receive notifications instantly on your mobile device." />
              </UserSettingsNotificationsViewGroup>
            </UserSettingsNotificationsView>

            <UserSettingsNotificationsView id="allow-banner-alerts" secondary additionalContent={<Text>Configure banner alert behavior for incoming notifications.</Text>}>
              <UserSettingsNotificationsViewGroup headerText="Banner Settings">
                <UserSettingsNotificationsViewItem itemKey="ab-sound" text="Play Sound" bylineText="Play a sound when a banner alert appears." checked />
                <UserSettingsNotificationsViewItem itemKey="ab-duration" text="Display Duration" bylineText="Choose how long the banner stays on screen." endContent={<Select>
                      <Option selected>5 seconds</Option>
                      <Option>10 seconds</Option>
                      <Option>Until dismissed</Option>
                    </Select>} />
              </UserSettingsNotificationsViewGroup>
            </UserSettingsNotificationsView>

            <UserSettingsNotificationsView id="sales-order-updates" secondary additionalContent={<Text>Configure how you want to receive Sales Order Updates notifications.</Text>}>
              <UserSettingsNotificationsViewGroup headerText="Notification Preferences">
                <UserSettingsNotificationsViewItem itemKey="sou-panel" text="Notifications Panel" bylineText="Receive notifications through the central notifications panel." checked />
                <UserSettingsNotificationsViewItem itemKey="sou-banner" text="Banner Alerts" bylineText="Receive notifications instantly as a fly-in banner." checked />
                <UserSettingsNotificationsViewItem itemKey="sou-push" text="Push Notifications" bylineText="Receive notifications instantly on your mobile device." />
                <UserSettingsNotificationsViewItem itemKey="sou-email" text="Email" bylineText="Receive notifications by email." checked />
                <UserSettingsNotificationsViewItem itemKey="sou-frequency" text="Frequency" bylineText="Choose the frequency of receiving a notification." endContent={<Select>
                      <Option selected>Immediate</Option>
                      <Option>Every 15 minutes</Option>
                      <Option>Hourly</Option>
                      <Option>Daily digest</Option>
                    </Select>} />
              </UserSettingsNotificationsViewGroup>
            </UserSettingsNotificationsView>

            <UserSettingsNotificationsView id="sales-order-approvals" secondary additionalContent={<Text>Configure how you want to receive Sales Order Approvals notifications.</Text>}>
              <UserSettingsNotificationsViewGroup headerText="Notification Preferences">
                <UserSettingsNotificationsViewItem itemKey="soa-panel" text="Notifications Panel" bylineText="Receive notifications through the central notifications panel." checked />
                <UserSettingsNotificationsViewItem itemKey="soa-banner" text="Banner Alerts" bylineText="Receive notifications instantly as a fly-in banner." />
                <UserSettingsNotificationsViewItem itemKey="soa-push" text="Push Notifications" bylineText="Receive notifications instantly on your mobile device." checked />
                <UserSettingsNotificationsViewItem itemKey="soa-email" text="Email" bylineText="Receive notifications by email." checked />
              </UserSettingsNotificationsViewGroup>
            </UserSettingsNotificationsView>

            <UserSettingsNotificationsView id="sales-order-release" secondary additionalContent={<Text>Configure how you want to receive Sales Order Release notifications.</Text>}>
              <UserSettingsNotificationsViewGroup headerText="Notification Preferences">
                <UserSettingsNotificationsViewItem itemKey="sor-panel" text="Notifications Panel" bylineText="Receive notifications through the central notifications panel." checked />
                <UserSettingsNotificationsViewItem itemKey="sor-email" text="Email" bylineText="Receive notifications by email." />
                <UserSettingsNotificationsViewItem itemKey="sor-frequency" text="Frequency" bylineText="Choose the frequency of receiving a notification." endContent={<Select>
                      <Option selected>Immediate</Option>
                      <Option>Every 15 minutes</Option>
                      <Option>Daily digest</Option>
                    </Select>} />
              </UserSettingsNotificationsViewGroup>
            </UserSettingsNotificationsView>

            <UserSettingsNotificationsView id="po-approval" secondary additionalContent={<Text>
                  Approval-specific channels. These settings apply only to Purchase Order Approval notifications.
                </Text>}>
              <UserSettingsNotificationsViewGroup headerText="Approver Preferences">
                <UserSettingsNotificationsViewItem itemKey="po-approval-mobile" text="Push to mobile" bylineText="Approve or reject directly from your device." checked />
                <UserSettingsNotificationsViewItem itemKey="po-approval-summary" text="Daily summary email" bylineText="Receive one email per day with all pending approvals." />
                <UserSettingsNotificationsViewItem itemKey="po-approval-delegation" text="Delegation" bylineText="Route approvals to a delegate when you are out of office." />
              </UserSettingsNotificationsViewGroup>
            </UserSettingsNotificationsView>

            <UserSettingsNotificationsView id="po-overdue" secondary additionalContent={<Text>Configure how you want to receive Purchase Order Overdue notifications.</Text>}>
              <UserSettingsNotificationsViewGroup headerText="Notification Preferences">
                <UserSettingsNotificationsViewItem itemKey="poo-panel" text="Notifications Panel" bylineText="Receive notifications through the central notifications panel." checked />
                <UserSettingsNotificationsViewItem itemKey="poo-banner" text="Banner Alerts" bylineText="Receive notifications instantly as a fly-in banner." checked />
                <UserSettingsNotificationsViewItem itemKey="poo-push" text="Push Notifications" bylineText="Receive notifications instantly on your mobile device." checked />
                <UserSettingsNotificationsViewItem itemKey="poo-email" text="Email" bylineText="Receive notifications by email." checked />
              </UserSettingsNotificationsViewGroup>
            </UserSettingsNotificationsView>
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
}`,...Q.parameters?.docs?.source}}},Rt=[`Default`]})))()}export{Y as a,W as c,J as i,G as l,It as n,K as o,$ as r,q as s,Q as t};
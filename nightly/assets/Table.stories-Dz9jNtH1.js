import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-C21x__mS.js";import{B as r,X as i,Y as a}from"./CustomElementsScopeUtils-CeUpht4U.js";import{s as o,u as s}from"./Icon-D1bUSmAg.js";import{a as c,c as ee,d as l,f as u,i as te,l as d,m as ne,n as re,o as ie,p as ae,r as f,s as oe,t as se,u as p}from"./jsx-runtime-BpKzXHRO.js";import{$ as ce,I as le,N as ue,O as de,Y as fe,_ as pe,g as me,n as he,nt as ge,q as _e,ut as ve,v as ye,y as be}from"./Keys-DqJfIghV.js";import{n as m,t as h}from"./withWebComponent-RGzXMq_m.js";import{t as xe}from"./jsx-runtime-BdxMnOeJ.js";import{n as Se,t as Ce}from"./event-strict-C4u0wMzB.js";import{n as we,t as Te}from"./i18n-DHtb1CQ9.js";import{Qi as Ee,So as g,Xi as De,Zi as Oe,ea as ke}from"./i18n-defaults-DtiunA_G.js";import{n as Ae,t as je}from"./parameters-bundle.css-CXl3cTl0.js";import{A as Me,C as Ne}from"./i18n-defaults-mbnv3Rxx.js";import{n as Pe,t as Fe}from"./getActiveElement-CN57HK2a.js";import{n as _,r as Ie}from"./TabbableElements-ggtWKgGx.js";import{n as Le,t as Re}from"./edit-CglehSzs.js";import{t as ze}from"./navigation-right-arrow-Cd8ot11t.js";import{n as Be,t as Ve}from"./Label-Dwa6_Zkc.js";import{n as He,t as Ue}from"./query-DgyfBxue.js";import{C as We,S as v,T as Ge,_ as Ke,a as y,d as qe,f as Je,g as Ye,i as Xe,l as b,m as Ze,n as Qe,o as $e,p as et,r as x,t as tt,u as nt,w as rt,x as it}from"./TableHeaderRow-C5d4peo2.js";import{i as at,n as ot,r as S,t as C}from"./SegmentedButtonItem-CzQoQUGc.js";import{n as st,t as ct}from"./TableSelectionMulti-CFiIK5YY.js";import{i as lt,n as ut,r as dt,t as ft}from"./TableRowAction-BQGk2Byc.js";import{n as pt,t as mt}from"./TableSelectionSingle-C5oHUcl_.js";import{n as ht,t as gt}from"./Friends500-DFsllH8N.js";function _t(){return te(se,{children:[f(rt,{id:`group-cell`,"aria-colindex":1,"aria-colspan":this._ariaColSpan,"data-excluded-from-navigation":!0,children:f(`slot`,{})}),this._renderDummyCell&&f(rt,{id:`dummy-cell`,role:`none`,"aria-hidden":!0,"data-excluded-from-navigation":`nofocus`})]})}function vt(){return(vt=e((()=>{re(),Ge()})))()}var yt;function bt(){return(bt=e((()=>{i(),c(),je(),a(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>ie),a(`@ui5/webcomponents`,`sap_horizon`,async()=>Ae,`host`),yt=`:host{color:var(--sapList_TableGroupHeaderTextColor);background:var(--sapList_TableGroupHeaderBackground);font-weight:700;min-height:2rem}#group-cell{grid-column:1 / -1;padding-inline:var(--_ui5_first_table_cell_horizontal_padding)}:host([_render-dummy-cell]) #group-cell{grid-column:1 / -2}:host(:first-of-type)>[ui5-table-cell][aria-colspan]{border-bottom:var(--sapList_BorderWidth) solid var(--sapList_BorderColor);border-top:none}
`})))()}var w,T,xt,St,E;function Ct(){return(Ct=e((()=>{l(),Ue(),Je(),Ze(),vt(),bt(),g(),w=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},xt=[],St=[],E=T=class extends qe{constructor(){super(),Object.defineProperty(this,"cells",{get:()=>xt}),Object.defineProperty(this,"actions",{get:()=>St})}isGroupRow(){return!0}onEnterDOM(){super.onEnterDOM(),this.toggleAttribute(`ui5-table-row`,!0),this.setAttribute(`aria-roledescription`,T.i18nBundle.getText(De))}get _tableSelection(){}get _hasSelector(){return!1}get _isSelectable(){return!1}get _isInteractive(){return!1}get _isNavigable(){return!1}get _hasPopin(){return!1}get _ariaColSpan(){let e=this._table?.headerRow[0]?._visibleCells.length??1;return this._renderDummyCell?e-1:e}},w([He(`#group-cell`)],E.prototype,`_groupCell`,void 0),E=T=w([u({tag:`ui5-table-group-row`,styles:[et.styles,yt],template:_t})],E),E.define()})))()}var D;function O(){return(O=e((()=>{Ct(),h(),D=m(`ui5-table-group-row`,[`position`,`rowKey`],[`interactive`,`movable`,`navigated`],[`actions`],[]),D.displayName=`TableGroupRow`;try{D.displayName=`TableGroupRow`,D.__docgenInfo={description:"The `TableGroupRow` component represents a group header row in the `Table`.\nIt is used to visually group rows and spans across all visible table columns.\n\n### Usage\n\nThe `TableGroupRow` is placed as a direct child of `Table`, alongside `TableRow` elements.\nRows following a group row are considered part of that group until the next group row.\n\n```html\n<Table>\n  <TableHeaderRow>...</TableHeaderRow>\n  <TableGroupRow>Country: Germany</TableGroupRow>\n  <TableRow>...</TableRow>\n  <TableRow>...</TableRow>\n  <TableGroupRow>Country: France</TableGroupRow>\n  <TableRow>...</TableRow>\n</Table>\n```\n\n### Unsupported Features\n\nThe following features of `TableRow` are currently not supported by `TableGroupRow` and have no effect:\n\n- **Cells** (`cells` slot): Group rows render a single spanning cell with a text. Any slotted `TableCell` elements are ignored.\n- **Actions** (`actions` slot): Row actions such as `TableRowAction` or `TableRowActionNavigation` are not rendered.\n- **Navigation** (`navigated` property): The navigated indicator is not rendered on group rows.\n- **Interactive** (`interactive` property): Group rows do not support click/activation behavior.\n- **Selection** (`rowKey` property`): Group rows cannot be selected. They are excluded from select all and range selection operations.\n- **Virtualizer** (`position` property`): Group rows are not supported by the `TableVirtualizer`.\n\n\n\n__Note:__ This is a UI5 Web Component! [TableGroupRow UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TableGroupRow) | [Repository](https://github.com/UI5/webcomponents)",displayName:`TableGroupRow`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,methods:[],props:{actions:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowPropTypes`}],description:`Defines the actions of the component.

**Note:** Use \`TableRowAction\` or \`TableRowActionNavigation\` for the intended design.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="actions"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.7.0](https://github.com/UI5/webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<TableRowActionBase>\``,name:`actions`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowPropTypes`}],description:`Defines the cells of the component.

**Note:** Use \`TableCell\` for the intended design.

__Supported Node Type/s:__ \`Array<TableCell>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},interactive:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`}],description:`Defines the interactive state of the row.`,name:`interactive`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},movable:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`}],description:`Defines whether the row is movable.

**Note:** Available since [v2.6.0](https://github.com/UI5/webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents**.`,name:`movable`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},navigated:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`}],description:`Defines the navigated state of the row.`,name:`navigated`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},position:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`}],description:`Defines the 0-based position of the row related to the total number of rows within the table when the \`TableVirtualizer\` feature is used.

**Note:** Available since [v2.5.0](https://github.com/UI5/webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:`position`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`},required:!1,tags:{default:`undefined`},type:{name:`number`}},rowKey:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`}],description:`Unique identifier of the row.

**Note:** For selection features to work properly, this property is mandatory, and its value must not contain spaces.`,name:`rowKey`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of __@ui5/webcomponents__.`}}}catch{}})))()}var wt,k;function A(){return(A=e((()=>{(function(e){e.Button=`Button`,e.Scroll=`Scroll`})(wt||={}),k=wt})))()}function Tt(){return te(`div`,{id:`button`,tabindex:0,"data-ui5-growing-active":this._activeState,onClick:this.loadMore,onKeyDown:this._onKeydown,onKeyUp:this._onKeyup,onFocusOut:this._onFocusout,role:`button`,"aria-labelledby":`text subtext`,"aria-describedby":`description`,children:[f(`span`,{id:`text`,children:this._buttonText}),this.subtext&&f(`span`,{id:`subtext`,children:this.subtext}),f(`span`,{id:`description`,class:`ui5-hidden-text`,"aria-hidden":`true`,children:this._buttonDescription})]})}function Et(){return(Et=e((()=>{re()})))()}var Dt;function Ot(){return(Ot=e((()=>{i(),c(),je(),a(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>ie),a(`@ui5/webcomponents`,`sap_horizon`,async()=>Ae,`host`),Dt=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}#button{display:flex;align-items:center;flex-direction:column;cursor:pointer;border-bottom:1px solid var(--sapList_BorderColor);background:var(--sapList_Background)}#button:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(-1 * var(--sapContent_FocusWidth))}@media (hover: hover){#button:hover{background:var(--sapButton_Hover_Background)}}#button:active,#button[data-ui5-growing-active=true]{background:var(--sapList_Active_Background)}#text{padding:1rem 0;font-size:var(--sapFontSize);color:var(--sapButton_TextColor);font-weight:700}#subtext{padding-bottom:1rem;color:var(--sapButton_TextColor)}
`})))()}var j,M,N;function kt(){return(kt=e((()=>{ne(),l(),d(),Ce(),we(),oe(),A(),Et(),Ot(),_e(),g(),Ke(),j=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},N=M=class extends ae{constructor(){super(...arguments),this.mode=`Button`,this._activeState=!1,this._invalidate=0,this.identifier=`TableGrowing`,this._renderContent=!0}onTableActivate(e){this._table=e,this._shouldFocusRow=!1}onTableAfterRendering(){if(this._shouldFocusRow){this._shouldFocusRow=!1;let e=this._currentLastRow?.nextElementSibling;this.hasGrowingComponent()&&(e||=this.getFocusDomRef()),e||=this._table?.rows[0],e?.focus()}if(this._renderContent!==this.hasGrowingComponent()){this._invalidate++;return}this._hasScrollToLoad()&&!this.hasGrowingComponent()&&!this._observer&&this._observeTableEnd()}onExitDOM(){this._table=void 0,this._observer?.disconnect(),this._observer=void 0,this._currentLastRow=void 0}onBeforeRendering(){this._observer?.disconnect(),this._observer=void 0,this._renderContent=this.hasGrowingComponent(),this._invalidateTable()}hasGrowingComponent(){return this.mode===k.Scroll?!!this._table&&this._table._scrollContainer.clientHeight>=this._table._tableElement.scrollHeight:this.mode===`${k.Button}`}loadMore(){this._table&&this.hasGrowingComponent()&&(this._currentLastRow=this._table.rows[this._table.rows.length-1],this._shouldFocusRow=!0),this.fireDecoratorEvent(`load-more`)}_hasScrollToLoad(){return this.mode===k.Scroll}_observeTableEnd(){this._table&&this._getIntersectionObserver().observe(this._table._endRow)}_getIntersectionObserver(){return this._observer||=new IntersectionObserver(this._onIntersection.bind(this),{root:Ye(this._table??document.body),rootMargin:`5px`}),this._observer}_onIntersection(e){e.some(e=>e.isIntersecting)&&this.loadMore()}_invalidateTable(){this._table&&this._table._invalidate++}_onKeydown(e){he(e)&&(e.preventDefault(),this._activeState=!0),le(e)&&(this.loadMore(),this._activeState=!0)}_onKeyup(e){he(e)&&this.loadMore(),this._activeState=!1}_onFocusout(){this._activeState=!1}get _buttonText(){return this.text||M.i18nBundle.getText(Oe)}get _buttonDescription(){return M.i18nBundle.getText(Ee)}get _hasButton(){return this.hasGrowingComponent()}},j([p()],N.prototype,`mode`,void 0),j([p()],N.prototype,`text`,void 0),j([p()],N.prototype,`subtext`,void 0),j([p({type:Boolean,noAttribute:!0})],N.prototype,`_activeState`,void 0),j([p({type:Number,noAttribute:!0})],N.prototype,`_invalidate`,void 0),j([Te(`@ui5/webcomponents`)],N,`i18nBundle`,void 0),N=M=j([u({tag:`ui5-table-growing`,renderer:ee,template:Tt,styles:Dt}),Se(`load-more`,{bubbles:!1})],N),N.define()})))()}var P;function F(){return(F=e((()=>{kt(),h(),P=m(`ui5-table-growing`,[`mode`,`subtext`,`text`],[],[],[`load-more`]),P.displayName=`TableGrowing`;try{P.displayName=`TableGrowing`,P.__docgenInfo={description:`The \`TableGrowing\` component is used inside the \`Table\` to add a growing/data loading functionalities
to the table.

The component offers two options:
* Button - a More button is displayed, clicking it will load more data.
* Scroll - additional data is loaded automatically when the user scrolls to the end of the table.

### Usage

The \`TableGrowing\` component is only used inside the \`Table\` component as a feature.
It has to be slotted inside the \`Table\` in the \`features\` slot.
The component is not intended to be used as a standalone component.

\`\`\`html
<Table>
	<TableGrowing mode="Button" text="More" slot="features"></TableGrowing>
</Table>
\`\`\`

**Notes**:
* When the \`TableGrowing\` component is used with the \`Scroll\` mode and the table is currently not scrollable,
the component will render a growing button instead to ensure growing capabilities until the table becomes scrollable.



__Note:__ This is a UI5 Web Component! [TableGrowing UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TableGrowing) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`TableGrowing`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/TableGrowing/index.d.ts`,methods:[],props:{onLoadMore:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGrowing/index.d.ts`,name:`TableGrowingPropTypes`}],description:`Fired when the growing button is pressed or the user scrolls to the end of the table.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onLoadMore`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGrowing/index.d.ts`,name:`TableGrowingPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TableGrowingDomRef, never>) => void`}},mode:{defaultValue:{value:`"Button"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGrowing/index.d.ts`,name:`TableGrowingAttributes`}],description:`Defines the mode of the <code>ui5-table</code> growing.

Available options are:

Button - Shows a More button at the bottom of the table, pressing it will load more rows.

Scroll - The rows are loaded automatically by scrolling to the bottom of the table. If the table is not scrollable,
a growing button will be rendered instead to ensure growing functionality.`,name:`mode`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGrowing/index.d.ts`,name:`TableGrowingAttributes`},required:!1,tags:{default:`"Button"`},type:{name:`enum`,raw:`TableGrowingMode | "Button" | "Scroll"`,value:[{value:`"Button"`,description:`Renders a growing button, which can be pressed to load more data.`,fullComment:`Renders a growing button, which can be pressed to load more data.
@public`,tags:{public:``}},{value:`"Scroll"`,description:`Scroll to load more data.

**Note:** If the table is not scrollable, a growing button will be rendered instead to ensure growing functionality.`,fullComment:`Scroll to load more data.

**Note:** If the table is not scrollable, a growing button will be rendered instead to ensure growing functionality.
@public`,tags:{public:``}},{value:`"Button"`},{value:`"Scroll"`}]}},subtext:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGrowing/index.d.ts`,name:`TableGrowingAttributes`}],description:"Defines the text that will be displayed below the `text` inside the growing button.\nHas no effect when mode is set to Scroll.",name:`subtext`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGrowing/index.d.ts`,name:`TableGrowingAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},text:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGrowing/index.d.ts`,name:`TableGrowingAttributes`}],description:`Defines the text that will be displayed inside the growing button.
Has no effect when mode is set to \`Scroll\`.

**Note:** When not provided and the mode is set to Button, a default text is displayed, corresponding to the
current language.`,name:`text`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGrowing/index.d.ts`,name:`TableGrowingAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.`}}}catch{}})))()}var I,At,L;function jt(){return(jt=e((()=>{l(),d(),we(),lt(),ze(),g(),I=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},L=At=class extends dt{constructor(){super(...arguments),this.interactive=!1}isFixedAction(){return!0}onEnterDOM(){super.onEnterDOM(),this.interactive||console.warn("[ui5-table-row-action-navigation] The non-interactive (icon) rendering mode is deprecated and will be removed in the next major version. Set the `interactive` property to render the navigation action as an accessible button and handle the action via the `click` event. If the navigation should be triggered when a row is pressed, set the row's `interactive` property and use the `row-click` event of `ui5-table`. Button rendering will become the only supported behavior, and the `interactive` property will then be removed.")}getRenderInfo(){return{text:this._i18nNavigation,icon:`navigation-right-arrow`,interactive:this.interactive}}get _i18nNavigation(){return At.i18nBundle.getText(ke)}},I([p({type:Boolean})],L.prototype,`interactive`,void 0),I([Te(`@ui5/webcomponents`)],L,`i18nBundle`,void 0),L=At=I([u({tag:`ui5-table-row-action-navigation`})],L),L.define()})))()}var R;function Mt(){return(Mt=e((()=>{jt(),h(),R=m(`ui5-table-row-action-navigation`,[],[`interactive`,`invisible`],[],[`click`]),R.displayName=`TableRowActionNavigation`;try{R.displayName=`TableRowActionNavigation`,R.__docgenInfo={description:`The \`TableRowActionNavigation\` component defines a navigation action for table rows.



__Note:__ This is a UI5 Web Component! [TableRowActionNavigation UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TableRowActionNavigation) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`TableRowActionNavigation`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/TableRowActionNavigation/index.d.ts`,methods:[],props:{onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableRowActionNavigation/index.d.ts`,name:`TableRowActionNavigationPropTypes`}],description:`Fired when a row action is clicked.

**Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableRowActionNavigation/index.d.ts`,name:`TableRowActionNavigationPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TableRowActionNavigationDomRef, never>) => void`}},interactive:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableRowActionNavigation/index.d.ts`,name:`TableRowActionNavigationAttributes`}],description:`Defines the interactive state of the navigation action.`,name:`interactive`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableRowActionNavigation/index.d.ts`,name:`TableRowActionNavigationAttributes`},required:!1,tags:{default:`false`,deprecated:"As of version 2.20.0, the navigation icon is deprecated.\nFor better accessibility, the interactive mode which renders a button, must be used instead. To handle the action, attach a listener to the `click` event.\nIf the navigation should be triggered when a row is pressed, set the row's `interactive` property and use the `row-click` event of the `ui5-table`.\nThis property will be removed in the next major version."},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},invisible:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableRowActionNavigation/index.d.ts`,name:`TableRowActionNavigationAttributes`}],description:`Defines the visibility of the row action.

**Note:** Invisible row actions still take up space, allowing to hide the action while maintaining its position.`,name:`invisible`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableRowActionNavigation/index.d.ts`,name:`TableRowActionNavigationAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.7.0](https://github.com/UI5/webcomponents/releases/tag/v2.7.0) of __@ui5/webcomponents__.`}}}catch{}})))()}var z,B,V;function Nt(){return(Nt=e((()=>{_e(),ne(),l(),d(),Ce(),Fe(),Ie(),Ke(),z=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},(function(e){e[e.None=0]=`None`,e[e.Next=1]=`Next`,e[e.Previous=2]=`Previous`,e[e.Released=4]=`Released`,e[e.NextReleased=5]=`NextReleased`,e[e.PreviousReleased=6]=`PreviousReleased`})(B||={}),V=class extends ae{constructor(){super(),this.rowHeight=45,this.rowCount=100,this.extraRows=0,this.identifier=`TableVirtualizer`,this._lastRowPosition=0,this._firstRowPosition=0,this._visibleRowCount=0,this._tabBlockingState=B.None,this._onScrollBound=it(this._onScroll.bind(this)),this._onRowInvalidateBound=this._onRowInvalidate.bind(this)}onAfterRendering(){this._table&&this._table._invalidate++}onTableAfterRendering(e){if(this._table?this._updateRowsHeight():(this._table=e,this._scrollContainer.addEventListener(`scroll`,this._onScrollBound,{passive:!0}),this._updateRowsHeight(),this._onScroll()),this._tabBlockingState&B.Released){let e=this._table.rows.at(this._tabBlockingState&B.Next?-1:0),t=_(e).at(this._tabBlockingState&B.Next?0:-1);this._tabBlockingState=B.None,(t||e).focus()}}onExitDOM(){this._table&&=(this._scrollContainer.removeEventListener(`scroll`,this._onScrollBound),void 0)}reset(){this._lastRowPosition=-1,this._firstRowPosition=-1,this._table&&(this._scrollContainer.scrollTop>0?this._scrollContainer.scrollTop=0:this._onScroll())}get _scrollContainer(){return this._table._tableElement}get _rowsContainer(){return this._table.shadowRoot.getElementById(`rows`)}_onScroll(){let e=this._table.headerRow[0],t=e.offsetHeight,n=this._scrollContainer.scrollTop,r=this._scrollContainer.clientHeight;e.sticky?r=Math.max(0,r-t):n=Math.max(0,n-t),this._visibleRowCount=Math.ceil(r/this.rowHeight);let i=Math.floor(n/this.rowHeight)-this.extraRows;i=Math.max(0,i);let a=Math.max(0,i+this._visibleRowCount+2*this.extraRows);a=Math.min(a,this.rowCount),(this._firstRowPosition!==i||this._lastRowPosition!==a)&&(this._lastRowPosition=a,this._firstRowPosition=i,this.fireDecoratorEvent(`range-change`,{first:i,last:a}))}_updateRowsHeight(){let e=this.rowCount*this.rowHeight;this._rowsContainer.style.height=`${e}px`}_getTransform(){if(!this._table)return;let e=this._table.rows[0];if(e&&e.position!==void 0&&e.position>0)return`translateY(${e.position*this.rowHeight}px)`}_onRowInvalidate(e){e.name===`position`&&(e.target.detachInvalidate(this._onRowInvalidateBound),this._tabBlockingState|=B.Released)}_onKeyDown(e){if(!this._table)return;let t=0,n=this._table.rows,r=n[0],i=n[n.length-1],a=r.position!==0,o=i.position!==this.rowCount-1,s=this._table._tableNavigation,c=Pe();if(ve(e)&&o&&_(this._rowsContainer).pop()===c?(this._tabBlockingState=B.Next,i.attachInvalidate(this._onRowInvalidateBound),t=this.rowHeight):de(e)&&a&&_(this._rowsContainer).shift()===c?(this._tabBlockingState=B.Previous,r.attachInvalidate(this._onRowInvalidateBound),t=this.rowHeight*-1):o&&s._getNavigationItemsOfRow(i).includes(c)?ue(e)||pe(e)?t=this.rowHeight:ge(e)?t=this._visibleRowCount*this.rowHeight:ce(e)&&c===i&&(t=this.rowCount*this.rowHeight):a&&s._getNavigationItemsOfRow(r).includes(c)&&(be(e)||ye(e)?t=this.rowHeight*-1:fe(e)?t=this._visibleRowCount*this.rowHeight*-1:me(e)&&c===r&&(t=this.rowCount*this.rowHeight*-1)),t){let n=this._table.scrollTop;this._scrollContainer.scrollTop+=t,this._scrollContainer.scrollTop!==n&&e.preventDefault()}}},z([p({type:Number})],V.prototype,`rowHeight`,void 0),z([p({type:Number})],V.prototype,`rowCount`,void 0),z([p({type:Number})],V.prototype,`extraRows`,void 0),V=z([u({tag:`ui5-table-virtualizer`}),Se(`range-change`)],V),V.define()})))()}var H;function Pt(){return(Pt=e((()=>{Nt(),h(),H=m(`ui5-table-virtualizer`,[`extraRows`,`rowCount`,`rowHeight`],[],[],[`range-change`]),H.displayName=`TableVirtualizer`;try{H.displayName=`TableVirtualizer`,H.__docgenInfo={description:"The `TableVirtualizer` component is used inside the `Table` to virtualize the table rows, if the `overflowMode` property of the table is set to 'Scroll'.\nIt is responsible for rendering only the rows that are visible in the viewport and updating them on scroll.\nThis allows large numbers of rows to exist, but maintain high performance by only paying the cost for those that are currently visible.\n\n**Note:** The maximum number of virtualized rows is limited by browser constraints, specifically the maximum supported height for a DOM element.\n**Note:** The `TableGroupRow` component is not supported by the virtualizer. Only `TableRow` elements can be virtualized.\n\n\n\n__Note:__ This is a UI5 Web Component! [TableVirtualizer UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TableVirtualizer) | [Repository](https://github.com/UI5/webcomponents)",displayName:`TableVirtualizer`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/TableVirtualizer/index.d.ts`,methods:[],props:{onRangeChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableVirtualizer/index.d.ts`,name:`TableVirtualizerPropTypes`}],description:`Fired when the virtualizer is changed by user interaction e.g. on scrolling.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onRangeChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableVirtualizer/index.d.ts`,name:`TableVirtualizerPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TableVirtualizerDomRef, RangeChangeEventDetail>) => void`}},extraRows:{defaultValue:{value:`0`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableVirtualizer/index.d.ts`,name:`TableVirtualizerAttributes`}],description:`Defines the count of extra rows to be rendered at the top and bottom of the table.

**Note:** This property is experimental and may be changed or deleted in the future.`,name:`extraRows`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableVirtualizer/index.d.ts`,name:`TableVirtualizerAttributes`},required:!1,tags:{default:`0`},type:{name:`number`}},rowCount:{defaultValue:{value:`100`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableVirtualizer/index.d.ts`,name:`TableVirtualizerAttributes`}],description:`Defines the total count of rows in the table.

**Note:** For virtualization to work properly, this property is mandatory.`,name:`rowCount`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableVirtualizer/index.d.ts`,name:`TableVirtualizerAttributes`},required:!1,tags:{default:`100`},type:{name:`number`}},rowHeight:{defaultValue:{value:`45`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableVirtualizer/index.d.ts`,name:`TableVirtualizerAttributes`}],description:`Defines the height of the rows in the table.

**Note:** For virtualization to work properly, this property is mandatory.`,name:`rowHeight`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableVirtualizer/index.d.ts`,name:`TableVirtualizerAttributes`},required:!1,tags:{default:`45`},type:{name:`number`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.5.0](https://github.com/UI5/webcomponents/releases/tag/v2.5.0) of __@ui5/webcomponents__.`,experimental:`This component is not intended to be used in a productive enviroment. The API is under development and may be changed in the future.`}}}catch{}})))()}var Ft,It,Lt,Rt;function zt(){return(zt=e((()=>{o(),Me(),Ft=`save`,It=`M1 11.344V2.688c0-.48.161-.88.484-1.204A1.633 1.633 0 0 1 2.688 1h10.624c.459 0 .855.161 1.188.484.333.323.5.724.5 1.204v10.624c0 .48-.167.88-.5 1.204-.333.322-.73.484-1.188.484H4.656c-.104 0-.24-.052-.406-.156l-3.094-3.125A.512.512 0 0 1 1 11.344Zm1-.188L4.844 14H5v-4c0-.292.094-.531.281-.719A.973.973 0 0 1 6 9h4c.27 0 .505.094.703.281A.947.947 0 0 1 11 10v4h2.313a.661.661 0 0 0 .484-.203.661.661 0 0 0 .203-.485V2.688a.661.661 0 0 0-.203-.485.661.661 0 0 0-.485-.203H12v4a.947.947 0 0 1-.297.719A.988.988 0 0 1 11 7H5a.973.973 0 0 1-.719-.281A.973.973 0 0 1 4 6V2H2.687a.661.661 0 0 0-.484.203.661.661 0 0 0-.203.485v8.468ZM5 2v4h6V2H5Zm5 12v-4H6v4h4Zm-3-1.75v-1.5c0-.167.073-.25.219-.25h.531c.167 0 .25.083.25.25v1.5c0 .167-.083.25-.25.25h-.531c-.146 0-.219-.083-.219-.25Z`,Lt=Ne,Rt=`0 0 16 16`,s(Ft,{pathData:It,ltr:!1,viewBox:Rt,accData:Lt,collection:`SAP-icons-v4`,packageName:`@ui5/webcomponents-icons`})})))()}var Bt,Vt,Ht,Ut;function Wt(){return(Wt=e((()=>{o(),Me(),Bt=`save`,Vt=`M10.61 1c.175 0 .298.105.402.202l3.75 3.5A.75.75 0 0 1 15 5.25v8A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25V2.75C1 1.784 1.784 1 2.75 1h7.86ZM2.75 2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25H4.5V9.75A.75.75 0 0 1 5.25 9h5.5a.75.75 0 0 1 .75.75v3.75h1.75a.25.25 0 0 0 .25-.25V5.575L10.205 2.5H6v2h3.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V2.5H2.75ZM6 13.5h4v-3H6v3Z`,Ht=Ne,Ut=`0 0 16 16`,s(Bt,{pathData:Vt,ltr:!1,viewBox:Ut,accData:Ht,collection:`SAP-icons-v5`,packageName:`@ui5/webcomponents-icons`})})))()}var Gt;function Kt(){return(Kt=e((()=>{r(),zt(),Wt(),Gt=`save`})))()}var qt=t({Default:()=>K,GrowingTable:()=>q,VirtualizedTableRows:()=>X,WithSelection:()=>J,__namedExportsOrder:()=>Xt,default:()=>Yt,dragAndDropRows:()=>Q,withGroupRows:()=>$,withRowActions:()=>Z}),U,W,Jt,G,Yt,K,q,J,Y,X,Z,Q,$,Xt;function Zt(){return(Zt=e((()=>{ht(),A(),Le(),Kt(),U=n(),Be(),at(),ot(),We(),O(),F(),Xe(),Qe(),nt(),ut(),Mt(),st(),pt(),Pt(),$e(),W=xe(),Jt=(0,W.jsxs)(tt,{sticky:!0,children:[(0,W.jsx)(x,{width:`200px`,minWidth:`200px`,children:(0,W.jsx)(`span`,{children:`Product`})}),(0,W.jsx)(x,{minWidth:`200px`,children:(0,W.jsx)(`span`,{children:`Supplier`})}),(0,W.jsx)(x,{minWidth:`200px`,children:(0,W.jsx)(`span`,{children:`Dimensions`})}),(0,W.jsx)(x,{minWidth:`100px`,children:(0,W.jsx)(`span`,{children:`Weight`})}),(0,W.jsx)(x,{minWidth:`200px`,children:(0,W.jsx)(`span`,{children:`Price`})})]}),G=(0,W.jsxs)(tt,{sticky:!0,children:[(0,W.jsx)(x,{children:`Name`}),(0,W.jsx)(x,{children:`Age`}),(0,W.jsx)(x,{children:`Friend Name`}),(0,W.jsx)(x,{children:`Friend Age`})]}),Yt={title:`Data Display / Table`,component:y,argTypes:{headerRow:{control:{disable:!0}},features:{control:{disable:!0}},children:{control:{disable:!0}}},args:{headerRow:Jt},tags:[`package:@ui5/webcomponents`]},K={render:e=>(0,W.jsxs)(y,{...e,children:[(0,W.jsxs)(b,{rowKey:`0`,children:[(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`Notebook Basic`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`Very Best Screens`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`30 x 18 x 3cm`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`4.2KG`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`956EUR`})})]}),(0,W.jsxs)(b,{rowKey:`1`,children:[(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`Notebook Basic 17HT-1001`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`Very Best Screens`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`29 x 17 x 3.1cm`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`4.5KG`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`1249EUR`})})]})]})},q={render:e=>{let[t,n]=(0,U.useState)(k.Button),r=e=>Array(25).fill(``).map((t,n)=>(0,W.jsxs)(b,{children:[(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:n+e})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`Placeholder`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`Placeholder 2`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`Placeholder 3`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`Placeholder 4`})})]},`${n+e}-row`)),[i,a]=(0,U.useState)(r(1)),o=()=>{a(e=>[...e,...r(e.length+1)])};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(Ve,{showColon:!0,style:{marginInlineEnd:`0.5rem`},children:[`Growing `,(0,W.jsx)(`code`,{children:`mode`})]}),(0,W.jsxs)(S,{style:{marginBlockEnd:`0.5rem`},onSelectionChange:e=>{n(e.detail.selectedItems[0].textContent)},children:[(0,W.jsx)(C,{selected:t===k.Scroll,children:`Scroll`}),(0,W.jsx)(C,{selected:t===k.Button,children:`Button`})]}),(0,W.jsx)(`div`,{style:{height:`250px`,overflow:`auto`},children:(0,W.jsx)(y,{...e,features:(0,W.jsx)(P,{onLoadMore:o,mode:t}),children:i})})]})}},J={render(e){let[t,n]=(0,U.useState)(`Single`),[r,i]=(0,U.useState)(`RowSelector`);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(S,{onSelectionChange:e=>{n(e.detail.selectedItems[0].textContent)},children:[(0,W.jsx)(C,{selected:t===`None`,children:`None`}),(0,W.jsx)(C,{selected:t===`Single`,children:`Single`}),(0,W.jsx)(C,{selected:t===`Multi`,children:`Multi`})]}),(0,W.jsx)(Ve,{"aria-hidden":!0,style:{marginInline:`0.25rem`},children:`|`}),(0,W.jsxs)(S,{onSelectionChange:e=>{i(e.detail.selectedItems[0].textContent)},children:[(0,W.jsx)(C,{selected:r===`RowSelector`,children:`RowSelector`}),(0,W.jsx)(C,{selected:r===`RowOnly`,children:`RowOnly`})]}),(0,W.jsxs)(y,{...e,features:(0,W.jsxs)(W.Fragment,{children:[t===`Single`&&(0,W.jsx)(mt,{behavior:r}),t===`Multi`&&(0,W.jsx)(ct,{behavior:r})]}),children:[(0,W.jsxs)(b,{rowKey:`0`,children:[(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`Notebook Basic`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`Very Best Screens`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`30 x 18 x 3cm`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`4.2KG`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`956EUR`})})]}),(0,W.jsxs)(b,{rowKey:`1`,children:[(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`Notebook Basic 17HT-1001`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`Very Best Screens`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`29 x 17 x 3.1cm`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`4.5KG`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`1249EUR`})})]})]})]})}},Y=gt.map((e,t)=>({...e,position:t})),X={args:{className:`tableHeightContentDensity`,headerRow:G},render(e){let[t,n]=(0,U.useState)(Y.slice(0,9)),[r,i]=(0,U.useState)(!0),a=e=>{let{first:t,last:r}=e.detail,i=Math.max(t-2,0),a=Math.min(r+2,Y.length);n(Y.slice(i,a))};return(0,U.useEffect)(()=>{let e=document.body;if(!e)return;let t=new MutationObserver(t=>{t.forEach(t=>{t.type===`attributes`&&t.attributeName===`class`&&i(!e.classList.contains(`ui5-content-density-compact`))})});return t.observe(e,{attributes:!0,attributeFilter:[`class`]}),()=>{t.disconnect()}},[]),(0,W.jsx)(y,{...e,features:(0,W.jsx)(H,{rowCount:500,rowHeight:r?44:32,onRangeChange:a}),children:t.map(e=>(0,W.jsxs)(b,{position:e.position,children:[(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:e.name})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:e.age})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:e.friend.name})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:e.friend.age})})]},e.position))})}},Z={args:{headerRow:G,rowActionCount:3},render(e){return(0,W.jsx)(y,{...e,children:gt.slice(0,10).map((e,t)=>(0,W.jsxs)(b,{actions:(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(ft,{icon:Re,text:`Edit`}),(0,W.jsx)(ft,{icon:Gt,text:`Save`}),(0,W.jsx)(R,{interactive:!!(t%2)})]}),children:[(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:e.name})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:e.age})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:e.friend.name})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:e.friend.age})})]},`${e.name}-${e.age}`))})}},Q={args:{headerRow:G},render(e){let[t,n]=(0,U.useState)(Y.slice(0,10)),r=e=>{let{source:t,destination:r}=e.detail;n(e=>{let n=e.findIndex(e=>`${e.position}`===t.element.dataset.id),i=e.findIndex(e=>`${e.position}`===r.element.dataset.id);if(n===-1||i===-1)return e;let a=[...e],[o]=a.splice(n,1);return r.placement===`Before`?a.splice(i,0,o):r.placement===`After`&&a.splice(i+1,0,o),a})},i=e=>{let{source:t,destination:n}=e.detail;t.element.hasAttribute(`ui5-table-row`)&&n.element.hasAttribute(`ui5-table-row`)&&n.placement!==`On`&&e.preventDefault()};return(0,W.jsx)(y,{...e,onMove:r,onMoveOver:i,children:t.map(e=>(0,W.jsxs)(b,{movable:!0,"data-id":e.position,children:[(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:e.name})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:e.age})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:e.friend.name})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:e.friend.age})})]},e.position))})}},$={render:e=>(0,W.jsxs)(y,{...e,headerRow:Jt,children:[(0,W.jsx)(D,{children:`Supplier: Very Best Screens`}),(0,W.jsxs)(b,{rowKey:`0`,children:[(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`Notebook Basic`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`Very Best Screens`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`30 x 18 x 3cm`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`4.2KG`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`956EUR`})})]}),(0,W.jsxs)(b,{rowKey:`1`,children:[(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`Notebook Basic 17HT-1001`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`Very Best Screens`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`29 x 17 x 3.1cm`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`4.5KG`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`1249EUR`})})]}),(0,W.jsx)(D,{children:`Supplier: Smartcards`}),(0,W.jsxs)(b,{rowKey:`2`,children:[(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`ITelO Vault`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`Smartcards`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`32 x 21 x 4cm`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`5.1KG`})}),(0,W.jsx)(v,{children:(0,W.jsx)(`span`,{children:`299EUR`})})]})]})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Table {...args}>
        <TableRow rowKey={'0'}>
          <TableCell>
            <span>Notebook Basic</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>30 x 18 x 3cm</span>
          </TableCell>
          <TableCell>
            <span>4.2KG</span>
          </TableCell>
          <TableCell>
            <span>956EUR</span>
          </TableCell>
        </TableRow>
        <TableRow rowKey={'1'}>
          <TableCell>
            <span>Notebook Basic 17HT-1001</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>29 x 17 x 3.1cm</span>
          </TableCell>
          <TableCell>
            <span>4.5KG</span>
          </TableCell>
          <TableCell>
            <span>1249EUR</span>
          </TableCell>
        </TableRow>
      </Table>;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [mode, setMode] = useState<TableGrowingPropTypes['mode']>(TableGrowingMode.Button);
    const createRows = indexOffset => {
      return new Array(25).fill('').map((_, index) => <TableRow key={\`\${index + indexOffset}-row\`}>
          <TableCell>
            <span>{index + indexOffset}</span>
          </TableCell>
          <TableCell>
            <span>Placeholder</span>
          </TableCell>
          <TableCell>
            <span>Placeholder 2</span>
          </TableCell>
          <TableCell>
            <span>Placeholder 3</span>
          </TableCell>
          <TableCell>
            <span>Placeholder 4</span>
          </TableCell>
        </TableRow>);
    };
    const [rows, setRows] = useState(createRows(1));
    const onLoadMore = () => {
      setRows(prev => [...prev, ...createRows(prev.length + 1)]);
    };
    return <>
        <Label showColon style={{
        marginInlineEnd: '0.5rem'
      }}>
          Growing <code>mode</code>
        </Label>
        <SegmentedButton style={{
        marginBlockEnd: '0.5rem'
      }} onSelectionChange={e => {
        setMode(e.detail.selectedItems[0].textContent as TableGrowingPropTypes['mode']);
      }}>
          <SegmentedButtonItem selected={mode === TableGrowingMode.Scroll}>Scroll</SegmentedButtonItem>
          <SegmentedButtonItem selected={mode === TableGrowingMode.Button}>Button</SegmentedButtonItem>
        </SegmentedButton>
        <div style={{
        height: '250px',
        overflow: 'auto'
      }}>
          <Table {...args} features={<TableGrowing onLoadMore={onLoadMore} mode={mode} />}>
            {rows}
          </Table>
        </div>
      </>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [mode, setMode] = useState<'Single' | 'Multi' | 'None'>('Single');
    const [behavior, setBehavior] = useState<TableSelectionSinglePropTypes['behavior']>('RowSelector');
    return <>
        <SegmentedButton onSelectionChange={e => {
        setMode(e.detail.selectedItems[0].textContent as 'Single' | 'Multi' | 'None');
      }}>
          <SegmentedButtonItem selected={'None' === mode}>None</SegmentedButtonItem>
          <SegmentedButtonItem selected={'Single' === mode}>Single</SegmentedButtonItem>
          <SegmentedButtonItem selected={'Multi' === mode}>Multi</SegmentedButtonItem>
        </SegmentedButton>
        <Label aria-hidden style={{
        marginInline: '0.25rem'
      }}>
          |
        </Label>
        <SegmentedButton onSelectionChange={e => {
        setBehavior(e.detail.selectedItems[0].textContent as TableSelectionSinglePropTypes['behavior']);
      }}>
          <SegmentedButtonItem selected={'RowSelector' === behavior}>RowSelector</SegmentedButtonItem>
          <SegmentedButtonItem selected={'RowOnly' === behavior}>RowOnly</SegmentedButtonItem>
        </SegmentedButton>
        <Table {...args} features={<>
              {'Single' === mode && <TableSelectionSingle behavior={behavior} />}
              {'Multi' === mode && <TableSelectionMulti behavior={behavior} />}
            </>}>
          <TableRow rowKey={'0'}>
            <TableCell>
              <span>Notebook Basic</span>
            </TableCell>
            <TableCell>
              <span>Very Best Screens</span>
            </TableCell>
            <TableCell>
              <span>30 x 18 x 3cm</span>
            </TableCell>
            <TableCell>
              <span>4.2KG</span>
            </TableCell>
            <TableCell>
              <span>956EUR</span>
            </TableCell>
          </TableRow>
          <TableRow rowKey={'1'}>
            <TableCell>
              <span>Notebook Basic 17HT-1001</span>
            </TableCell>
            <TableCell>
              <span>Very Best Screens</span>
            </TableCell>
            <TableCell>
              <span>29 x 17 x 3.1cm</span>
            </TableCell>
            <TableCell>
              <span>4.5KG</span>
            </TableCell>
            <TableCell>
              <span>1249EUR</span>
            </TableCell>
          </TableRow>
        </Table>
      </>;
  }
}`,...J.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'tableHeightContentDensity',
    headerRow: columns
  },
  render(args) {
    const [data, setData] = useState(dataLargeWithPosition.slice(0, 9));
    const [isCozy, setIsCozy] = useState(true);
    const handleRangeChange: TableVirtualizerPropTypes['onRangeChange'] = e => {
      const {
        first,
        last
      } = e.detail;

      // overscanCount = 2
      const overscanCountStart = Math.max(first - 2, 0);
      const overscanCountEnd = Math.min(last + 2, dataLargeWithPosition.length);
      setData(dataLargeWithPosition.slice(overscanCountStart, overscanCountEnd));
    };

    // adjust row height according to content-density mode (only for demo purposes)
    useEffect(() => {
      const body = document.body;
      if (!body) return;
      const observer = new MutationObserver(mutationsList => {
        mutationsList.forEach(mutation => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            setIsCozy(!body.classList.contains('ui5-content-density-compact'));
          }
        });
      });
      observer.observe(body, {
        attributes: true,
        attributeFilter: ['class']
      });
      return () => {
        observer.disconnect();
      };
    }, []);
    return <Table {...args} features={<TableVirtualizer rowCount={500} rowHeight={isCozy ? 44 : 32} onRangeChange={handleRangeChange} />}>
        {data.map(row => <TableRow key={row.position} position={row.position}>
            <TableCell>
              <span>{row.name}</span>
            </TableCell>
            <TableCell>
              <span>{row.age}</span>
            </TableCell>
            <TableCell>
              <span>{row.friend.name}</span>
            </TableCell>
            <TableCell>
              <span>{row.friend.age}</span>
            </TableCell>
          </TableRow>)}
      </Table>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    headerRow: columns,
    rowActionCount: 3
  },
  render(args) {
    return <Table {...args}>
        {dataLarge.slice(0, 10).map((row, index) => <TableRow key={\`\${row.name}-\${row.age}\`} actions={<>
                <TableRowAction icon={editIcon} text="Edit" />
                <TableRowAction icon={saveIcon} text="Save" />
                <TableRowActionNavigation interactive={!!(index % 2)} />
              </>}>
            <TableCell>
              <span>{row.name}</span>
            </TableCell>
            <TableCell>
              <span>{row.age}</span>
            </TableCell>
            <TableCell>
              <span>{row.friend.name}</span>
            </TableCell>
            <TableCell>
              <span>{row.friend.age}</span>
            </TableCell>
          </TableRow>)}
      </Table>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    headerRow: columns
  },
  render(args) {
    const [rows, setRows] = useState(dataLargeWithPosition.slice(0, 10));
    const handleMove: TablePropTypes['onMove'] = e => {
      const {
        source,
        destination
      } = e.detail;
      // enabling this causes the Storybook to freeze due to the number of logs
      // args.onMove(e);

      setRows(prevRows => {
        const sourceIndex = prevRows.findIndex(row => \`\${row.position}\` === source.element.dataset.id);
        const destinationIndex = prevRows.findIndex(row => \`\${row.position}\` === destination.element.dataset.id);
        if (sourceIndex === -1 || destinationIndex === -1) {
          return prevRows;
        }
        const updatedRows = [...prevRows];
        const [movedRow] = updatedRows.splice(sourceIndex, 1);
        if (destination.placement === 'Before') {
          updatedRows.splice(destinationIndex, 0, movedRow);
        } else if (destination.placement === 'After') {
          updatedRows.splice(destinationIndex + 1, 0, movedRow);
        }
        return updatedRows;
      });
    };
    const handleMoveOver: TablePropTypes['onMoveOver'] = e => {
      const {
        source,
        destination
      } = e.detail;
      // args.onMoveOver(e);

      if (source.element.hasAttribute('ui5-table-row') && destination.element.hasAttribute('ui5-table-row') && destination.placement !== 'On') {
        e.preventDefault();
      }
    };
    return <Table {...args} onMove={handleMove} onMoveOver={handleMoveOver}>
        {rows.map(row => <TableRow key={row.position} movable data-id={row.position}>
            <TableCell>
              <span>{row.name}</span>
            </TableCell>
            <TableCell>
              <span>{row.age}</span>
            </TableCell>
            <TableCell>
              <span>{row.friend.name}</span>
            </TableCell>
            <TableCell>
              <span>{row.friend.age}</span>
            </TableCell>
          </TableRow>)}
      </Table>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Table {...args} headerRow={popInColumns}>
        <TableGroupRow>Supplier: Very Best Screens</TableGroupRow>
        <TableRow rowKey={'0'}>
          <TableCell>
            <span>Notebook Basic</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>30 x 18 x 3cm</span>
          </TableCell>
          <TableCell>
            <span>4.2KG</span>
          </TableCell>
          <TableCell>
            <span>956EUR</span>
          </TableCell>
        </TableRow>
        <TableRow rowKey={'1'}>
          <TableCell>
            <span>Notebook Basic 17HT-1001</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>29 x 17 x 3.1cm</span>
          </TableCell>
          <TableCell>
            <span>4.5KG</span>
          </TableCell>
          <TableCell>
            <span>1249EUR</span>
          </TableCell>
        </TableRow>
        <TableGroupRow>Supplier: Smartcards</TableGroupRow>
        <TableRow rowKey={'2'}>
          <TableCell>
            <span>ITelO Vault</span>
          </TableCell>
          <TableCell>
            <span>Smartcards</span>
          </TableCell>
          <TableCell>
            <span>32 x 21 x 4cm</span>
          </TableCell>
          <TableCell>
            <span>5.1KG</span>
          </TableCell>
          <TableCell>
            <span>299EUR</span>
          </TableCell>
        </TableRow>
      </Table>;
  }
}`,...$.parameters?.docs?.source}}},Xt=[`Default`,`GrowingTable`,`WithSelection`,`VirtualizedTableRows`,`withRowActions`,`dragAndDropRows`,`withGroupRows`]})))()}export{O as _,J as a,$ as c,Pt as d,R as f,D as g,F as h,X as i,Z as l,P as m,q as n,Q as o,Mt as p,qt as r,Zt as s,K as t,H as u};
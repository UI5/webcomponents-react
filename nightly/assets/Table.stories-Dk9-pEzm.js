import{l as se,c as z,p as Y,d as ie,b as re,s as m,aH as Z,m as F,az as Q,av as le,aA as X,bq as K,bp as ce,gZ as de,g_ as he,w as k,g$ as ue,dJ as G,ap as pe,bA as be,bz as me,bu as ge,d9 as we,dg as fe,cg as ve,bv as xe,aq as Te,df as _e,cf as Ce,aj as ee,h0 as te,j as e,r as g,fg as ye}from"./iframe-C9GC-4U4.js";import{d as ne}from"./Friends500-CRbR9XAn.js";import{L as oe}from"./index-B091rt76.js";import{a as O,S as x}from"./index-Bx7ENpLR.js";import{j as Re,t as Se,T,e as ae,g as p,c as f,d as i}from"./index-okOgV0wS.js";import{a as je,T as J}from"./index-BHsXmJXR.js";import"./navigation-right-arrow-CqPwNeVv.js";import{T as Ne}from"./index-Dnnhsd1w.js";import{T as Be}from"./index-De-WGQgZ.js";var w;(function(o){o.Button="Button",o.Scroll="Scroll"})(w||(w={}));function Ie(){return se("div",{id:"button",tabindex:-1,"data-ui5-growing-active":this._activeState,onClick:this.loadMore,onKeyDown:this._onKeydown,onKeyUp:this._onKeyup,onFocusOut:this._onFocusout,role:"button","aria-labelledby":"text subtext","aria-describedby":"description",children:[z("span",{id:"text",children:this._buttonText}),this.subtext&&z("span",{id:"subtext",children:this.subtext}),z("span",{id:"description",class:"ui5-hidden-text","aria-hidden":"true",children:this._buttonDescription})]})}Y("@ui5/webcomponents-theming","sap_horizon",async()=>ie);Y("@ui5/webcomponents","sap_horizon",async()=>re);const Me=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}#button{display:flex;align-items:center;flex-direction:column;cursor:pointer;border-bottom:1px solid var(--sapList_BorderColor);background:var(--sapList_Background)}#button:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(-1 * var(--sapContent_FocusWidth))}@media (hover: hover){#button:hover{background:var(--sapButton_Hover_Background)}}#button:active,#button[data-ui5-growing-active=true]{background:var(--sapList_Active_Background)}#text{padding:1rem 0;font-size:var(--sapFontSize);color:var(--sapButton_TextColor);font-weight:700}#subtext{padding-bottom:1rem;color:var(--sapButton_TextColor)}
`;var _=function(o,t,a,r){var c=arguments.length,n=c<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,a):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,a,r);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(n=(c<3?s(n):c>3?s(t,a,n):s(t,a))||n);return c>3&&n&&Object.defineProperty(t,a,n),n},D;let b=D=class extends X{constructor(){super(...arguments),this.mode="Button",this._activeState=!1,this._invalidate=0,this.identifier="TableGrowing",this._renderContent=!0}onTableActivate(t){this._table=t,this._shouldFocusRow=!1}onTableAfterRendering(){if(this._shouldFocusRow){this._shouldFocusRow=!1;let t=this._currentLastRow?.nextElementSibling;this.hasGrowingComponent()&&(t||=this.getFocusDomRef()),t||=this._table?.rows[0],t?.focus()}if(this._renderContent!==this.hasGrowingComponent()){this._invalidate++;return}this._hasScrollToLoad()&&!this.hasGrowingComponent()&&!this._observer&&this._observeTableEnd()}onExitDOM(){this._table=void 0,this._observer?.disconnect(),this._observer=void 0,this._currentLastRow=void 0}onBeforeRendering(){this._observer?.disconnect(),this._observer=void 0,this._renderContent=this.hasGrowingComponent(),this._invalidateTable()}hasGrowingComponent(){return this.mode===w.Scroll?!!this._table&&this._table._scrollContainer.clientHeight>=this._table._tableElement.scrollHeight:this.mode===`${w.Button}`}loadMore(){this._table&&this.hasGrowingComponent()&&(this._currentLastRow=this._table.rows[this._table.rows.length-1],this._shouldFocusRow=!0),this.fireDecoratorEvent("load-more")}_hasScrollToLoad(){return this.mode===w.Scroll}_observeTableEnd(){this._table&&this._getIntersectionObserver().observe(this._table._endRow)}_getIntersectionObserver(){return this._observer||(this._observer=new IntersectionObserver(this._onIntersection.bind(this),{root:Re(this._table??document.body),rootMargin:"5px"})),this._observer}_onIntersection(t){t.some(a=>a.isIntersecting)&&this.loadMore()}_invalidateTable(){this._table&&this._table._invalidate++}_onKeydown(t){K(t)&&(t.preventDefault(),this._activeState=!0),ce(t)&&(this.loadMore(),this._activeState=!0)}_onKeyup(t){K(t)&&this.loadMore(),this._activeState=!1}_onFocusout(){this._activeState=!1}get _buttonText(){return this.text||D.i18nBundle.getText(de)}get _buttonDescription(){return D.i18nBundle.getText(he)}get _hasButton(){return this.hasGrowingComponent()}};_([m()],b.prototype,"mode",void 0);_([m()],b.prototype,"text",void 0);_([m()],b.prototype,"subtext",void 0);_([m({type:Boolean,noAttribute:!0})],b.prototype,"_activeState",void 0);_([m({type:Number,noAttribute:!0})],b.prototype,"_invalidate",void 0);_([Z("@ui5/webcomponents")],b,"i18nBundle",void 0);b=D=_([F({tag:"ui5-table-growing",renderer:le,template:Ie,styles:Me}),Q("load-more",{bubbles:!1})],b);b.define();const A=k("ui5-table-growing",["mode","subtext","text"],[],[],["load-more"]);A.displayName="TableGrowing";try{A.displayName="TableGrowing",A.__docgenInfo={description:`The \`TableGrowing\` component is used inside the \`Table\` to add a growing/data loading functionalities
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



__Note:__ This is a UI5 Web Component! [TableGrowing UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TableGrowing) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"TableGrowing",props:{onLoadMore:{defaultValue:null,description:`Fired when the growing button is pressed or the user scrolls to the end of the table.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<TableGrowingDomRef, never>) => void"}},mode:{defaultValue:{value:'"Button"'},description:`Defines the mode of the <code>ui5-table</code> growing.

Available options are:

Button - Shows a More button at the bottom of the table, pressing it will load more rows.

Scroll - The rows are loaded automatically by scrolling to the bottom of the table. If the table is not scrollable,
a growing button will be rendered instead to ensure growing functionality.`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"Scroll"'}]}},subtext:{defaultValue:{value:"undefined"},description:"Defines the text that will be displayed below the `text` inside the growing button.\nHas no effect when mode is set to Scroll.",name:"subtext",required:!1,type:{name:"string"}},text:{defaultValue:{value:"undefined"},description:`Defines the text that will be displayed inside the growing button.
Has no effect when mode is set to \`Scroll\`.

**Note:** When not provided and the mode is set to Button, a default text is displayed, corresponding to the
current language.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var U=function(o,t,a,r){var c=arguments.length,n=c<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,a):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,a,r);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(n=(c<3?s(n):c>3?s(t,a,n):s(t,a))||n);return c>3&&n&&Object.defineProperty(t,a,n),n},L;let I=L=class extends je{constructor(){super(...arguments),this.interactive=!1}isFixedAction(){return!0}getRenderInfo(){return{text:this._i18nNavigation,icon:"navigation-right-arrow",interactive:this.interactive}}get _i18nNavigation(){return L.i18nBundle.getText(ue)}};U([m({type:Boolean})],I.prototype,"interactive",void 0);U([Z("@ui5/webcomponents")],I,"i18nBundle",void 0);I=L=U([F({tag:"ui5-table-row-action-navigation"})],I);I.define();const E=k("ui5-table-row-action-navigation",[],["interactive","invisible"],[],["click"]);E.displayName="TableRowActionNavigation";try{E.displayName="TableRowActionNavigation",E.__docgenInfo={description:`The \`TableRowActionNavigation\` component defines a navigation action for table rows.



__Note:__ This is a UI5 Web Component! [TableRowActionNavigation UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TableRowActionNavigation) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"TableRowActionNavigation",props:{onClick:{defaultValue:null,description:`Fired when a row action is clicked.

**Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<TableRowActionNavigationDomRef, never>) => void"}},interactive:{defaultValue:{value:"false"},description:"Defines the interactive state of the navigation action.",name:"interactive",required:!1,type:{name:"boolean"}},invisible:{defaultValue:{value:"false"},description:`Defines the visibility of the row action.

**Note:** Invisible row actions still take up space, allowing to hide the action while maintaining its position.`,name:"invisible",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var H=function(o,t,a,r){var c=arguments.length,n=c<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,a):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,a,r);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(n=(c<3?s(n):c>3?s(t,a,n):s(t,a))||n);return c>3&&n&&Object.defineProperty(t,a,n),n},u;(function(o){o[o.None=0]="None",o[o.Next=1]="Next",o[o.Previous=2]="Previous",o[o.Released=4]="Released",o[o.NextReleased=5]="NextReleased",o[o.PreviousReleased=6]="PreviousReleased"})(u||(u={}));let C=class extends X{constructor(){super(),this.rowHeight=45,this.rowCount=100,this.extraRows=0,this.identifier="TableVirtualizer",this._lastRowPosition=0,this._firstRowPosition=0,this._visibleRowCount=0,this._tabBlockingState=u.None,this._onScrollBound=Se(this._onScroll.bind(this)),this._onRowInvalidateBound=this._onRowInvalidate.bind(this)}onAfterRendering(){this._table&&this._table._invalidate++}onTableAfterRendering(t){if(this._table?this._updateRowsHeight():(this._table=t,this._scrollContainer.addEventListener("scroll",this._onScrollBound,{passive:!0}),this._updateRowsHeight(),this._onScroll()),this._tabBlockingState&u.Released){const a=this._table.rows.at(this._tabBlockingState&u.Next?-1:0),r=G(a).at(this._tabBlockingState&u.Next?0:-1);this._tabBlockingState=u.None,(r||a).focus()}}onExitDOM(){this._table&&(this._scrollContainer.removeEventListener("scroll",this._onScrollBound),this._table=void 0)}reset(){this._lastRowPosition=-1,this._firstRowPosition=-1,this._table&&(this._scrollContainer.scrollTop>0?this._scrollContainer.scrollTop=0:this._onScroll())}get _scrollContainer(){return this._table._tableElement}get _rowsContainer(){return this._table.shadowRoot.getElementById("rows")}_onScroll(){const t=this._table.headerRow[0],a=t.offsetHeight;let r=this._scrollContainer.scrollTop,c=this._scrollContainer.clientHeight;t.sticky?c=Math.max(0,c-a):r=Math.max(0,r-a),this._visibleRowCount=Math.ceil(c/this.rowHeight);let n=Math.floor(r/this.rowHeight)-this.extraRows;n=Math.max(0,n);let s=Math.max(0,n+this._visibleRowCount+2*this.extraRows);s=Math.min(s,this.rowCount),!(this._firstRowPosition===n&&this._lastRowPosition===s)&&(this._lastRowPosition=s,this._firstRowPosition=n,this.fireDecoratorEvent("range-change",{first:n,last:s}))}_updateRowsHeight(){const t=this.rowCount*this.rowHeight;this._rowsContainer.style.height=`${t}px`}_getTransform(){if(!this._table)return;const t=this._table.rows[0];if(t&&t.position!==void 0&&t.position>0)return`translateY(${t.position*this.rowHeight}px)`}_onRowInvalidate(t){t.name==="position"&&(t.target.detachInvalidate(this._onRowInvalidateBound),this._tabBlockingState|=u.Released)}_onKeyDown(t){if(!this._table)return;let a=0;const r=this._table.rows,c=r[0],n=r[r.length-1],s=c.position!==0,l=n.position!==this.rowCount-1,h=this._table._tableNavigation,d=pe();if(be(t)&&l&&G(this._rowsContainer).pop()===d?(this._tabBlockingState=u.Next,n.attachInvalidate(this._onRowInvalidateBound),a=this.rowHeight):me(t)&&s&&G(this._rowsContainer).shift()===d?(this._tabBlockingState=u.Previous,c.attachInvalidate(this._onRowInvalidateBound),a=this.rowHeight*-1):l&&h._getNavigationItemsOfRow(n).includes(d)?ge(t)||we(t)?a=this.rowHeight:fe(t)?a=this._visibleRowCount*this.rowHeight:ve(t)&&d===n&&(a=this.rowCount*this.rowHeight):s&&h._getNavigationItemsOfRow(c).includes(d)&&(xe(t)||Te(t)?a=this.rowHeight*-1:_e(t)?a=this._visibleRowCount*this.rowHeight*-1:Ce(t)&&d===c&&(a=this.rowCount*this.rowHeight*-1)),a){const v=this._table.scrollTop;this._scrollContainer.scrollTop+=a,this._scrollContainer.scrollTop!==v&&t.preventDefault()}}};H([m({type:Number})],C.prototype,"rowHeight",void 0);H([m({type:Number})],C.prototype,"rowCount",void 0);H([m({type:Number})],C.prototype,"extraRows",void 0);C=H([F({tag:"ui5-table-virtualizer"}),Q("range-change")],C);C.define();const q=k("ui5-table-virtualizer",["extraRows","rowCount","rowHeight"],[],[],["range-change"]);q.displayName="TableVirtualizer";try{q.displayName="TableVirtualizer",q.__docgenInfo={description:`The \`TableVirtualizer\` component is used inside the \`Table\` to virtualize the table rows, if the \`overflowMode\` property of the table is set to 'Scroll'.
It is responsible for rendering only the rows that are visible in the viewport and updating them on scroll.
This allows large numbers of rows to exist, but maintain high performance by only paying the cost for those that are currently visible.

**Note:** The maximum number of virtualized rows is limited by browser constraints, specifically the maximum supported height for a DOM element.



__Note:__ This is a UI5 Web Component! [TableVirtualizer UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TableVirtualizer) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"TableVirtualizer",props:{onRangeChange:{defaultValue:null,description:`Fired when the virtualizer is changed by user interaction e.g. on scrolling.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onRangeChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableVirtualizerDomRef, RangeChangeEventDetail>) => void"}},extraRows:{defaultValue:{value:"0"},description:`Defines the count of extra rows to be rendered at the top and bottom of the table.

**Note:** This property is experimental and may be changed or deleted in the future.`,name:"extraRows",required:!1,type:{name:"number"}},rowCount:{defaultValue:{value:"100"},description:`Defines the total count of rows in the table.

**Note:** For virtualization to work properly, this property is mandatory.`,name:"rowCount",required:!1,type:{name:"number"}},rowHeight:{defaultValue:{value:"45"},description:`Defines the height of the rows in the table.

**Note:** For virtualization to work properly, this property is mandatory.`,name:"rowHeight",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const De="save",Ve="M32 363V86q0-23 15.5-38.5T86 32h340q22 0 38 15.5T480 86v340q0 23-16 38.5T426 480H149q-5 0-13-5L37 375q-5-5-5-12zm32-6l91 91h5V320q0-14 9-23t23-9h128q13 0 22.5 9t9.5 23v128h74q9 0 15.5-6.5T448 426V86q0-9-6.5-15.5T426 64h-42v128q0 14-9.5 23t-22.5 9H160q-14 0-23-9t-9-23V64H86q-9 0-15.5 6.5T64 86v271zm96-293v128h192V64H160zm160 384V320H192v128h128zm-96-56v-48q0-8 7-8h17q8 0 8 8v48q0 8-8 8h-17q-7 0-7-8z",Ae=!1,Ee=te,qe="SAP-icons-v4",He="@ui5/webcomponents-icons";ee(De,{pathData:Ve,ltr:Ae,accData:Ee,collection:qe,packageName:He});const Pe="save",ze="M505 151q7 9 7 19v252q0 38-26 64t-64 26H90q-38 0-64-26T0 422V90q0-38 26-64T90 0h252q10 0 19 7zm-44 29L332 51H179v90h147q11 0 18.5 7.5T352 167t-7.5 18-18.5 7H153q-11 0-18-7t-7-18V51H90q-17 0-28 11T51 90v332q0 17 11 28t28 11h38V314q0-11 7-18.5t18-7.5h206q11 0 18 7.5t7 18.5v147h38q17 0 28-11t11-28V180zM333 339H179v122h154V339z",Ge=!1,Oe=te,Le="SAP-icons-v5",Fe="@ui5/webcomponents-icons";ee(Pe,{pathData:ze,ltr:Ge,accData:Oe,collection:Le,packageName:Fe});const ke="save",Ue=e.jsxs(ae,{sticky:!0,children:[e.jsx(p,{width:"200px",minWidth:"200px",children:e.jsx("span",{children:"Product"})}),e.jsx(p,{minWidth:"200px",children:e.jsx("span",{children:"Supplier"})}),e.jsx(p,{minWidth:"200px",children:e.jsx("span",{children:"Dimensions"})}),e.jsx(p,{minWidth:"100px",children:e.jsx("span",{children:"Weight"})}),e.jsx(p,{minWidth:"200px",children:e.jsx("span",{children:"Price"})})]}),$=e.jsxs(ae,{sticky:!0,children:[e.jsx(p,{children:"Name"}),e.jsx(p,{children:"Age"}),e.jsx(p,{children:"Friend Name"}),e.jsx(p,{children:"Friend Age"})]}),$e={title:"Data Display / Table",component:T,argTypes:{headerRow:{control:{disable:!0}},features:{control:{disable:!0}},children:{control:{disable:!0}}},args:{headerRow:Ue},tags:["package:@ui5/webcomponents"]},y={render:o=>e.jsxs(T,{...o,children:[e.jsxs(f,{rowKey:"0",children:[e.jsx(i,{children:e.jsx("span",{children:"Notebook Basic"})}),e.jsx(i,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(i,{children:e.jsx("span",{children:"30 x 18 x 3cm"})}),e.jsx(i,{children:e.jsx("span",{children:"4.2KG"})}),e.jsx(i,{children:e.jsx("span",{children:"956EUR"})})]}),e.jsxs(f,{rowKey:"1",children:[e.jsx(i,{children:e.jsx("span",{children:"Notebook Basic 17HT-1001"})}),e.jsx(i,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(i,{children:e.jsx("span",{children:"29 x 17 x 3.1cm"})}),e.jsx(i,{children:e.jsx("span",{children:"4.5KG"})}),e.jsx(i,{children:e.jsx("span",{children:"1249EUR"})})]})]})},R={render:o=>{const[t,a]=g.useState(w.Button),r=l=>new Array(25).fill("").map((h,d)=>e.jsxs(f,{children:[e.jsx(i,{children:e.jsx("span",{children:d+l})}),e.jsx(i,{children:e.jsx("span",{children:"Placeholder"})}),e.jsx(i,{children:e.jsx("span",{children:"Placeholder 2"})}),e.jsx(i,{children:e.jsx("span",{children:"Placeholder 3"})}),e.jsx(i,{children:e.jsx("span",{children:"Placeholder 4"})})]},`${d+l}-row`)),[c,n]=g.useState(r(1)),s=()=>{n(l=>[...l,...r(l.length+1)])};return e.jsxs(e.Fragment,{children:[e.jsxs(oe,{showColon:!0,style:{marginInlineEnd:"0.5rem"},children:["Growing ",e.jsx("code",{children:"mode"})]}),e.jsxs(O,{style:{marginBlockEnd:"0.5rem"},onSelectionChange:l=>{a(l.detail.selectedItems[0].textContent)},children:[e.jsx(x,{selected:t===w.Scroll,children:"Scroll"}),e.jsx(x,{selected:t===w.Button,children:"Button"})]}),e.jsx("div",{style:{height:"250px",overflow:"auto"},children:e.jsx(T,{...o,features:e.jsx(A,{onLoadMore:s,mode:t}),children:c})})]})}},S={render(o){const[t,a]=g.useState("Single"),[r,c]=g.useState("RowSelector");return e.jsxs(e.Fragment,{children:[e.jsxs(O,{onSelectionChange:n=>{a(n.detail.selectedItems[0].textContent)},children:[e.jsx(x,{selected:t==="None",children:"None"}),e.jsx(x,{selected:t==="Single",children:"Single"}),e.jsx(x,{selected:t==="Multi",children:"Multi"})]}),e.jsx(oe,{"aria-hidden":!0,style:{marginInline:"0.25rem"},children:"|"}),e.jsxs(O,{onSelectionChange:n=>{c(n.detail.selectedItems[0].textContent)},children:[e.jsx(x,{selected:r==="RowSelector",children:"RowSelector"}),e.jsx(x,{selected:r==="RowOnly",children:"RowOnly"})]}),e.jsxs(T,{...o,features:e.jsxs(e.Fragment,{children:[t==="Single"&&e.jsx(Be,{behavior:r}),t==="Multi"&&e.jsx(Ne,{behavior:r})]}),children:[e.jsxs(f,{rowKey:"0",children:[e.jsx(i,{children:e.jsx("span",{children:"Notebook Basic"})}),e.jsx(i,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(i,{children:e.jsx("span",{children:"30 x 18 x 3cm"})}),e.jsx(i,{children:e.jsx("span",{children:"4.2KG"})}),e.jsx(i,{children:e.jsx("span",{children:"956EUR"})})]}),e.jsxs(f,{rowKey:"1",children:[e.jsx(i,{children:e.jsx("span",{children:"Notebook Basic 17HT-1001"})}),e.jsx(i,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(i,{children:e.jsx("span",{children:"29 x 17 x 3.1cm"})}),e.jsx(i,{children:e.jsx("span",{children:"4.5KG"})}),e.jsx(i,{children:e.jsx("span",{children:"1249EUR"})})]})]})]})}},V=ne.map((o,t)=>({...o,position:t})),j={args:{className:"tableHeightContentDensity",headerRow:$},render(o){const[t,a]=g.useState(V.slice(0,9)),[r,c]=g.useState(!0),n=s=>{const{first:l,last:h}=s.detail,d=Math.max(l-2,0),v=Math.min(h+2,V.length);a(V.slice(d,v))};return g.useEffect(()=>{const s=document.body;if(!s)return;const l=new MutationObserver(h=>{h.forEach(d=>{d.type==="attributes"&&d.attributeName==="class"&&c(!s.classList.contains("ui5-content-density-compact"))})});return l.observe(s,{attributes:!0,attributeFilter:["class"]}),()=>{l.disconnect()}},[]),e.jsx(T,{...o,features:e.jsx(q,{rowCount:500,rowHeight:r?44:32,onRangeChange:n}),children:t.map(s=>e.jsxs(f,{position:s.position,children:[e.jsx(i,{children:e.jsx("span",{children:s.name})}),e.jsx(i,{children:e.jsx("span",{children:s.age})}),e.jsx(i,{children:e.jsx("span",{children:s.friend.name})}),e.jsx(i,{children:e.jsx("span",{children:s.friend.age})})]},s.position))})}},N={args:{headerRow:$,rowActionCount:3},render(o){return e.jsx(T,{...o,children:ne.slice(0,10).map((t,a)=>e.jsxs(f,{actions:e.jsxs(e.Fragment,{children:[e.jsx(J,{icon:ye,text:"Edit"}),e.jsx(J,{icon:ke,text:"Save"}),e.jsx(E,{interactive:!!(a%2)})]}),children:[e.jsx(i,{children:e.jsx("span",{children:t.name})}),e.jsx(i,{children:e.jsx("span",{children:t.age})}),e.jsx(i,{children:e.jsx("span",{children:t.friend.name})}),e.jsx(i,{children:e.jsx("span",{children:t.friend.age})})]},`${t.name}-${t.age}`))})}},B={args:{headerRow:$},render(o){const[t,a]=g.useState(V.slice(0,10)),r=n=>{const{source:s,destination:l}=n.detail;a(h=>{const d=h.findIndex(P=>`${P.position}`===s.element.dataset.id),v=h.findIndex(P=>`${P.position}`===l.element.dataset.id);if(d===-1||v===-1)return h;const M=[...h],[W]=M.splice(d,1);return l.placement==="Before"?M.splice(v,0,W):l.placement==="After"&&M.splice(v+1,0,W),M})},c=n=>{const{source:s,destination:l}=n.detail;s.element.hasAttribute("ui5-table-row")&&l.element.hasAttribute("ui5-table-row")&&l.placement!=="On"&&n.preventDefault()};return e.jsx(T,{...o,onMove:r,onMoveOver:c,children:t.map(n=>e.jsxs(f,{movable:!0,"data-id":n.position,children:[e.jsx(i,{children:e.jsx("span",{children:n.name})}),e.jsx(i,{children:e.jsx("span",{children:n.age})}),e.jsx(i,{children:e.jsx("span",{children:n.friend.name})}),e.jsx(i,{children:e.jsx("span",{children:n.friend.age})})]},n.position))})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};const We=["Default","GrowingTable","WithSelection","VirtualizedTableRows","withRowActions","dragAndDropRows"],it=Object.freeze(Object.defineProperty({__proto__:null,Default:y,GrowingTable:R,VirtualizedTableRows:j,WithSelection:S,__namedExportsOrder:We,default:$e,dragAndDropRows:B,withRowActions:N},Symbol.toStringTag,{value:"Module"}));export{it as C,y as D,R as G,E as T,j as V,S as W,A as a,q as b,B as d,N as w};

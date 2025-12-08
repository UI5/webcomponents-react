import{l as ie,c as H,p as J,d as se,b as le,s as b,aB as Q,m as O,at as X,ap as re,au as Z,bj as K,bi as ce,gS as de,gT as he,w as k,gU as ue,dA as P,aj as pe,bt as me,bs as be,bn as fe,c$ as we,d4 as ge,c7 as ve,bo as Te,ak as xe,d3 as ye,c6 as _e,ad as ee,gV as te,j as e,r as f,f7 as Ce}from"./iframe-BF6vIVo6.js";import{d as ne}from"./Friends500-CRbR9XAn.js";import{L as oe}from"./index-CTIQkpgO.js";import{a as U,S as T}from"./index-BGv_PDyM.js";import{j as Re,t as Se,T as x,e as ae,g as p,c as g,d as s}from"./index-B1ymFGAn.js";import{a as je,T as Y}from"./index-B2caqGSh.js";import"./navigation-right-arrow-CbOrGt_U.js";import{T as Ne}from"./index-BGwF2ONL.js";import{T as Ie}from"./index-D1VHEBMG.js";var w;(function(o){o.Button="Button",o.Scroll="Scroll"})(w||(w={}));function Be(){return ie("div",{id:"button",tabindex:-1,"data-ui5-growing-active":this._activeState,onClick:this.loadMore,onKeyDown:this._onKeydown,onKeyUp:this._onKeyup,onFocusOut:this._onFocusout,role:"button","aria-labelledby":"text subtext","aria-describedby":"description",children:[H("span",{id:"text",children:this._buttonText}),this.subtext&&H("span",{id:"subtext",children:this.subtext}),H("span",{id:"description",class:"ui5-hidden-text","aria-hidden":"true",children:this._buttonDescription})]})}J("@ui5/webcomponents-theming","sap_horizon",async()=>se);J("@ui5/webcomponents","sap_horizon",async()=>le);const De=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}#button{display:flex;align-items:center;flex-direction:column;cursor:pointer;border-bottom:1px solid var(--sapList_BorderColor)}#button:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(-1 * var(--sapContent_FocusWidth))}@media (hover: hover){#button:hover{background:var(--sapButton_Hover_Background)}}#button:active,#button[data-ui5-growing-active=true]{background:var(--sapList_Active_Background)}#text{padding:1rem 0;font-size:var(--sapFontSize);color:var(--sapButton_TextColor);font-weight:700}#subtext{padding-bottom:1rem;color:var(--sapButton_TextColor)}
`;var y=function(o,t,a,l){var c=arguments.length,n=c<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,a):l,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,a,l);else for(var r=o.length-1;r>=0;r--)(i=o[r])&&(n=(c<3?i(n):c>3?i(t,a,n):i(t,a))||n);return c>3&&n&&Object.defineProperty(t,a,n),n},A;let m=A=class extends Z{constructor(){super(...arguments),this.mode="Button",this._activeState=!1,this._invalidate=0,this.identifier="TableGrowing",this._renderContent=!0}onTableActivate(t){this._table=t,this._shouldFocusRow=!1}onTableAfterRendering(){if(this._shouldFocusRow){this._shouldFocusRow=!1;let t=this._currentLastRow?.nextElementSibling;this.hasGrowingComponent()&&(t||=this.getFocusDomRef()),t||=this._table?.rows[0],t?.focus()}if(this._renderContent!==this.hasGrowingComponent()){this._invalidate++;return}this._hasScrollToLoad()&&!this.hasGrowingComponent()&&!this._observer&&this._observeTableEnd()}onExitDOM(){this._table=void 0,this._observer?.disconnect(),this._observer=void 0,this._currentLastRow=void 0}onBeforeRendering(){this._observer?.disconnect(),this._observer=void 0,this._renderContent=this.hasGrowingComponent(),this._invalidateTable()}hasGrowingComponent(){return this.mode===w.Scroll?!!this._table&&this._table._scrollContainer.clientHeight>=this._table._tableElement.scrollHeight:this.mode===`${w.Button}`}loadMore(){this._table&&this.hasGrowingComponent()&&(this._currentLastRow=this._table.rows[this._table.rows.length-1],this._shouldFocusRow=!0),this.fireDecoratorEvent("load-more")}_hasScrollToLoad(){return this.mode===w.Scroll}_observeTableEnd(){this._table&&this._getIntersectionObserver().observe(this._table._endRow)}_getIntersectionObserver(){return this._observer||(this._observer=new IntersectionObserver(this._onIntersection.bind(this),{root:Re(this._table??document.body),rootMargin:"5px"})),this._observer}_onIntersection(t){t.some(a=>a.isIntersecting)&&this.loadMore()}_invalidateTable(){this._table&&this._table._invalidate++}_onKeydown(t){K(t)&&(t.preventDefault(),this._activeState=!0),ce(t)&&(this.loadMore(),this._activeState=!0)}_onKeyup(t){K(t)&&this.loadMore(),this._activeState=!1}_onFocusout(){this._activeState=!1}get _buttonText(){return this.text||A.i18nBundle.getText(de)}get _buttonDescription(){return A.i18nBundle.getText(he)}get _hasButton(){return this.hasGrowingComponent()}};y([b()],m.prototype,"mode",void 0);y([b()],m.prototype,"text",void 0);y([b()],m.prototype,"subtext",void 0);y([b({type:Boolean,noAttribute:!0})],m.prototype,"_activeState",void 0);y([b({type:Number,noAttribute:!0})],m.prototype,"_invalidate",void 0);y([Q("@ui5/webcomponents")],m,"i18nBundle",void 0);m=A=y([O({tag:"ui5-table-growing",renderer:re,template:Be,styles:De}),X("load-more",{bubbles:!1})],m);m.define();const _=k("ui5-table-growing",["mode","subtext","text"],[],[],["load-more"]);_.displayName="TableGrowing";try{_.displayName="TableGrowing",_.__docgenInfo={description:`The \`TableGrowing\` component is used inside the \`Table\` to add a growing/data loading functionalities
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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{_.displayName="TableGrowing",_.__docgenInfo={description:`The \`TableGrowing\` component is used inside the \`Table\` to add a growing/data loading functionalities
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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var L=function(o,t,a,l){var c=arguments.length,n=c<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,a):l,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,a,l);else for(var r=o.length-1;r>=0;r--)(i=o[r])&&(n=(c<3?i(n):c>3?i(t,a,n):i(t,a))||n);return c>3&&n&&Object.defineProperty(t,a,n),n},F;let M=F=class extends je{constructor(){super(...arguments),this.interactive=!1}isFixedAction(){return!0}getRenderInfo(){return{text:this._i18nNavigation,icon:"navigation-right-arrow",interactive:this.interactive}}get _i18nNavigation(){return F.i18nBundle.getText(ue)}};L([b({type:Boolean})],M.prototype,"interactive",void 0);L([Q("@ui5/webcomponents")],M,"i18nBundle",void 0);M=F=L([O({tag:"ui5-table-row-action-navigation"})],M);M.define();const C=k("ui5-table-row-action-navigation",[],["interactive","invisible"],[],["click"]);C.displayName="TableRowActionNavigation";try{C.displayName="TableRowActionNavigation",C.__docgenInfo={description:`The \`TableRowActionNavigation\` component defines a navigation action for table rows.



__Note:__ This is a UI5 Web Component! [TableRowActionNavigation UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TableRowActionNavigation) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"TableRowActionNavigation",props:{onClick:{defaultValue:null,description:`Fired when a row action is clicked.

**Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<TableRowActionNavigationDomRef, never>) => void"}},interactive:{defaultValue:{value:"false"},description:"Defines the interactive state of the navigation action.",name:"interactive",required:!1,type:{name:"boolean"}},invisible:{defaultValue:{value:"false"},description:`Defines the visibility of the row action.

**Note:** Invisible row actions still take up space, allowing to hide the action while maintaining its position.`,name:"invisible",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{C.displayName="TableRowActionNavigation",C.__docgenInfo={description:`The \`TableRowActionNavigation\` component defines a navigation action for table rows.



__Note:__ This is a UI5 Web Component! [TableRowActionNavigation UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TableRowActionNavigation) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"TableRowActionNavigation",props:{onClick:{defaultValue:null,description:`Fired when a row action is clicked.

**Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<TableRowActionNavigationDomRef, never>) => void"}},interactive:{defaultValue:{value:"false"},description:"Defines the interactive state of the navigation action.",name:"interactive",required:!1,type:{name:"boolean"}},invisible:{defaultValue:{value:"false"},description:`Defines the visibility of the row action.

**Note:** Invisible row actions still take up space, allowing to hide the action while maintaining its position.`,name:"invisible",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var G=function(o,t,a,l){var c=arguments.length,n=c<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,a):l,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,a,l);else for(var r=o.length-1;r>=0;r--)(i=o[r])&&(n=(c<3?i(n):c>3?i(t,a,n):i(t,a))||n);return c>3&&n&&Object.defineProperty(t,a,n),n},u;(function(o){o[o.None=0]="None",o[o.Next=1]="Next",o[o.Previous=2]="Previous",o[o.Released=4]="Released",o[o.NextReleased=5]="NextReleased",o[o.PreviousReleased=6]="PreviousReleased"})(u||(u={}));let R=class extends Z{constructor(){super(),this.rowHeight=45,this.rowCount=100,this.extraRows=0,this.identifier="TableVirtualizer",this._lastRowPosition=0,this._firstRowPosition=0,this._visibleRowCount=0,this._tabBlockingState=u.None,this._onScrollBound=Se(this._onScroll.bind(this)),this._onRowInvalidateBound=this._onRowInvalidate.bind(this)}onAfterRendering(){this._table&&this._table._invalidate++}onTableAfterRendering(t){if(this._table?this._updateRowsHeight():(this._table=t,this._scrollContainer.addEventListener("scroll",this._onScrollBound,{passive:!0}),this._updateRowsHeight(),this._onScroll()),this._tabBlockingState&u.Released){const a=this._table.rows.at(this._tabBlockingState&u.Next?-1:0),l=P(a).at(this._tabBlockingState&u.Next?0:-1);this._tabBlockingState=u.None,(l||a).focus()}}onExitDOM(){this._table&&(this._scrollContainer.removeEventListener("scroll",this._onScrollBound),this._table=void 0)}reset(){this._lastRowPosition=-1,this._firstRowPosition=-1,this._table&&(this._scrollContainer.scrollTop>0?this._scrollContainer.scrollTop=0:this._onScroll())}get _scrollContainer(){return this._table._tableElement}get _rowsContainer(){return this._table.shadowRoot.getElementById("rows")}_onScroll(){const t=this._table.headerRow[0],a=t.offsetHeight;let l=this._scrollContainer.scrollTop,c=this._scrollContainer.clientHeight;t.sticky?c=Math.max(0,c-a):l=Math.max(0,l-a),this._visibleRowCount=Math.ceil(c/this.rowHeight);let n=Math.floor(l/this.rowHeight)-this.extraRows;n=Math.max(0,n);let i=Math.max(0,n+this._visibleRowCount+2*this.extraRows);i=Math.min(i,this.rowCount),!(this._firstRowPosition===n&&this._lastRowPosition===i)&&(this._lastRowPosition=i,this._firstRowPosition=n,this.fireDecoratorEvent("range-change",{first:n,last:i}))}_updateRowsHeight(){const t=this.rowCount*this.rowHeight;this._rowsContainer.style.height=`${t}px`}_getTransform(){if(!this._table)return;const t=this._table.rows[0];if(t&&t.position!==void 0&&t.position>0)return`translateY(${t.position*this.rowHeight}px)`}_onRowInvalidate(t){t.name==="position"&&(t.target.detachInvalidate(this._onRowInvalidateBound),this._tabBlockingState|=u.Released)}_onKeyDown(t){if(!this._table)return;let a=0;const l=this._table.rows,c=l[0],n=l[l.length-1],i=c.position!==0,r=n.position!==this.rowCount-1,h=this._table._tableNavigation,d=pe();if(me(t)&&r&&P(this._rowsContainer).pop()===d?(this._tabBlockingState=u.Next,n.attachInvalidate(this._onRowInvalidateBound),a=this.rowHeight):be(t)&&i&&P(this._rowsContainer).shift()===d?(this._tabBlockingState=u.Previous,c.attachInvalidate(this._onRowInvalidateBound),a=this.rowHeight*-1):r&&h._getNavigationItemsOfRow(n).includes(d)?fe(t)||we(t)?a=this.rowHeight:ge(t)?a=this._visibleRowCount*this.rowHeight:ve(t)&&d===n&&(a=this.rowCount*this.rowHeight):i&&h._getNavigationItemsOfRow(c).includes(d)&&(Te(t)||xe(t)?a=this.rowHeight*-1:ye(t)?a=this._visibleRowCount*this.rowHeight*-1:_e(t)&&d===c&&(a=this.rowCount*this.rowHeight*-1)),a){const v=this._table.scrollTop;this._scrollContainer.scrollTop+=a,this._scrollContainer.scrollTop!==v&&t.preventDefault()}}};G([b({type:Number})],R.prototype,"rowHeight",void 0);G([b({type:Number})],R.prototype,"rowCount",void 0);G([b({type:Number})],R.prototype,"extraRows",void 0);R=G([O({tag:"ui5-table-virtualizer"}),X("range-change")],R);R.define();const S=k("ui5-table-virtualizer",["extraRows","rowCount","rowHeight"],[],[],["range-change"]);S.displayName="TableVirtualizer";try{S.displayName="TableVirtualizer",S.__docgenInfo={description:`The \`TableVirtualizer\` component is used inside the \`Table\` to virtualize the table rows, if the \`overflowMode\` property of the table is set to 'Scroll'.
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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{S.displayName="TableVirtualizer",S.__docgenInfo={description:`The \`TableVirtualizer\` component is used inside the \`Table\` to virtualize the table rows, if the \`overflowMode\` property of the table is set to 'Scroll'.
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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Ve="save",Me="M32 363V86q0-23 15.5-38.5T86 32h340q22 0 38 15.5T480 86v340q0 23-16 38.5T426 480H149q-5 0-13-5L37 375q-5-5-5-12zm32-6l91 91h5V320q0-14 9-23t23-9h128q13 0 22.5 9t9.5 23v128h74q9 0 15.5-6.5T448 426V86q0-9-6.5-15.5T426 64h-42v128q0 14-9.5 23t-22.5 9H160q-14 0-23-9t-9-23V64H86q-9 0-15.5 6.5T64 86v271zm96-293v128h192V64H160zm160 384V320H192v128h128zm-96-56v-48q0-8 7-8h17q8 0 8 8v48q0 8-8 8h-17q-7 0-7-8z",qe=!1,Ae=te,Ee="SAP-icons-v4",Ge="@ui5/webcomponents-icons";ee(Ve,{pathData:Me,ltr:qe,accData:Ae,collection:Ee,packageName:Ge});const ze="save",He="M505 151q7 9 7 19v252q0 38-26 64t-64 26H90q-38 0-64-26T0 422V90q0-38 26-64T90 0h252q10 0 19 7zm-44 29L332 51H179v90h147q11 0 18.5 7.5T352 167t-7.5 18-18.5 7H153q-11 0-18-7t-7-18V51H90q-17 0-28 11T51 90v332q0 17 11 28t28 11h38V314q0-11 7-18.5t18-7.5h206q11 0 18 7.5t7 18.5v147h38q17 0 28-11t11-28V180zM333 339H179v122h154V339z",Pe=!1,Ue=te,Fe="SAP-icons-v5",Oe="@ui5/webcomponents-icons";ee(ze,{pathData:He,ltr:Pe,accData:Ue,collection:Fe,packageName:Oe});const ke="save",Le=e.jsxs(ae,{sticky:!0,children:[e.jsx(p,{width:"200px",minWidth:"200px",children:e.jsx("span",{children:"Product"})}),e.jsx(p,{minWidth:"200px",children:e.jsx("span",{children:"Supplier"})}),e.jsx(p,{minWidth:"200px",children:e.jsx("span",{children:"Dimensions"})}),e.jsx(p,{minWidth:"100px",children:e.jsx("span",{children:"Weight"})}),e.jsx(p,{minWidth:"200px",children:e.jsx("span",{children:"Price"})})]}),W=e.jsxs(ae,{sticky:!0,children:[e.jsx(p,{children:"Name"}),e.jsx(p,{children:"Age"}),e.jsx(p,{children:"Friend Name"}),e.jsx(p,{children:"Friend Age"})]}),We={title:"Data Display / Table",component:x,argTypes:{headerRow:{control:{disable:!0}},features:{control:{disable:!0}},children:{control:{disable:!0}}},args:{headerRow:Le},tags:["package:@ui5/webcomponents"]},j={render:o=>e.jsxs(x,{...o,children:[e.jsxs(g,{rowKey:"0",children:[e.jsx(s,{children:e.jsx("span",{children:"Notebook Basic"})}),e.jsx(s,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(s,{children:e.jsx("span",{children:"30 x 18 x 3cm"})}),e.jsx(s,{children:e.jsx("span",{children:"4.2KG"})}),e.jsx(s,{children:e.jsx("span",{children:"956EUR"})})]}),e.jsxs(g,{rowKey:"1",children:[e.jsx(s,{children:e.jsx("span",{children:"Notebook Basic 17HT-1001"})}),e.jsx(s,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(s,{children:e.jsx("span",{children:"29 x 17 x 3.1cm"})}),e.jsx(s,{children:e.jsx("span",{children:"4.5KG"})}),e.jsx(s,{children:e.jsx("span",{children:"1249EUR"})})]})]})},N={render:o=>{const[t,a]=f.useState(w.Button),l=r=>new Array(25).fill("").map((h,d)=>e.jsxs(g,{children:[e.jsx(s,{children:e.jsx("span",{children:d+r})}),e.jsx(s,{children:e.jsx("span",{children:"Placeholder"})}),e.jsx(s,{children:e.jsx("span",{children:"Placeholder 2"})}),e.jsx(s,{children:e.jsx("span",{children:"Placeholder 3"})}),e.jsx(s,{children:e.jsx("span",{children:"Placeholder 4"})})]},`${d+r}-row`)),[c,n]=f.useState(l(1)),i=()=>{n(r=>[...r,...l(r.length+1)])};return e.jsxs(e.Fragment,{children:[e.jsxs(oe,{showColon:!0,style:{marginInlineEnd:"0.5rem"},children:["Growing ",e.jsx("code",{children:"mode"})]}),e.jsxs(U,{style:{marginBlockEnd:"0.5rem"},onSelectionChange:r=>{a(r.detail.selectedItems[0].textContent)},children:[e.jsx(T,{selected:t===w.Scroll,children:"Scroll"}),e.jsx(T,{selected:t===w.Button,children:"Button"})]}),e.jsx("div",{style:{height:"250px",overflow:"auto"},children:e.jsx(x,{...o,features:e.jsx(_,{onLoadMore:i,mode:t}),children:c})})]})}},I={render(o){const[t,a]=f.useState("Single"),[l,c]=f.useState("RowSelector");return e.jsxs(e.Fragment,{children:[e.jsxs(U,{onSelectionChange:n=>{a(n.detail.selectedItems[0].textContent)},children:[e.jsx(T,{selected:t==="None",children:"None"}),e.jsx(T,{selected:t==="Single",children:"Single"}),e.jsx(T,{selected:t==="Multi",children:"Multi"})]}),e.jsx(oe,{"aria-hidden":!0,style:{marginInline:"0.25rem"},children:"|"}),e.jsxs(U,{onSelectionChange:n=>{c(n.detail.selectedItems[0].textContent)},children:[e.jsx(T,{selected:l==="RowSelector",children:"RowSelector"}),e.jsx(T,{selected:l==="RowOnly",children:"RowOnly"})]}),e.jsxs(x,{...o,features:e.jsxs(e.Fragment,{children:[t==="Single"&&e.jsx(Ie,{behavior:l}),t==="Multi"&&e.jsx(Ne,{behavior:l})]}),children:[e.jsxs(g,{rowKey:"0",children:[e.jsx(s,{children:e.jsx("span",{children:"Notebook Basic"})}),e.jsx(s,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(s,{children:e.jsx("span",{children:"30 x 18 x 3cm"})}),e.jsx(s,{children:e.jsx("span",{children:"4.2KG"})}),e.jsx(s,{children:e.jsx("span",{children:"956EUR"})})]}),e.jsxs(g,{rowKey:"1",children:[e.jsx(s,{children:e.jsx("span",{children:"Notebook Basic 17HT-1001"})}),e.jsx(s,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(s,{children:e.jsx("span",{children:"29 x 17 x 3.1cm"})}),e.jsx(s,{children:e.jsx("span",{children:"4.5KG"})}),e.jsx(s,{children:e.jsx("span",{children:"1249EUR"})})]})]})]})}},E=ne.map((o,t)=>({...o,position:t})),B={args:{className:"tableHeightContentDensity",headerRow:W},render(o){const[t,a]=f.useState(E.slice(0,9)),[l,c]=f.useState(!0),n=i=>{const{first:r,last:h}=i.detail,d=Math.max(r-2,0),v=Math.min(h+2,E.length);a(E.slice(d,v))};return f.useEffect(()=>{const i=document.body;if(!i)return;const r=new MutationObserver(h=>{h.forEach(d=>{d.type==="attributes"&&d.attributeName==="class"&&c(!i.classList.contains("ui5-content-density-compact"))})});return r.observe(i,{attributes:!0,attributeFilter:["class"]}),()=>{r.disconnect()}},[]),e.jsx(x,{...o,features:e.jsx(S,{rowCount:500,rowHeight:l?44:32,onRangeChange:n}),children:t.map(i=>e.jsxs(g,{position:i.position,children:[e.jsx(s,{children:e.jsx("span",{children:i.name})}),e.jsx(s,{children:e.jsx("span",{children:i.age})}),e.jsx(s,{children:e.jsx("span",{children:i.friend.name})}),e.jsx(s,{children:e.jsx("span",{children:i.friend.age})})]},i.position))})}},D={args:{headerRow:W,rowActionCount:3},render(o){return e.jsx(x,{...o,children:ne.slice(0,10).map((t,a)=>e.jsxs(g,{actions:e.jsxs(e.Fragment,{children:[e.jsx(Y,{icon:Ce,text:"Edit"}),e.jsx(Y,{icon:ke,text:"Save"}),e.jsx(C,{interactive:!!(a%2)})]}),children:[e.jsx(s,{children:e.jsx("span",{children:t.name})}),e.jsx(s,{children:e.jsx("span",{children:t.age})}),e.jsx(s,{children:e.jsx("span",{children:t.friend.name})}),e.jsx(s,{children:e.jsx("span",{children:t.friend.age})})]},`${t.name}-${t.age}`))})}},V={args:{headerRow:W},render(o){const[t,a]=f.useState(E.slice(0,10)),l=n=>{const{source:i,destination:r}=n.detail;a(h=>{const d=h.findIndex(z=>`${z.position}`===i.element.dataset.id),v=h.findIndex(z=>`${z.position}`===r.element.dataset.id);if(d===-1||v===-1)return h;const q=[...h],[$]=q.splice(d,1);return r.placement==="Before"?q.splice(v,0,$):r.placement==="After"&&q.splice(v+1,0,$),q})},c=n=>{const{source:i,destination:r}=n.detail;i.element.hasAttribute("ui5-table-row")&&r.element.hasAttribute("ui5-table-row")&&r.placement!=="On"&&n.preventDefault()};return e.jsx(x,{...o,onMove:l,onMoveOver:c,children:t.map(n=>e.jsxs(g,{movable:!0,"data-id":n.position,children:[e.jsx(s,{children:e.jsx("span",{children:n.name})}),e.jsx(s,{children:e.jsx("span",{children:n.age})}),e.jsx(s,{children:e.jsx("span",{children:n.friend.name})}),e.jsx(s,{children:e.jsx("span",{children:n.friend.age})})]},n.position))})}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};const $e=["Default","GrowingTable","WithSelection","VirtualizedTableRows","withRowActions","dragAndDropRows"],st=Object.freeze(Object.defineProperty({__proto__:null,Default:j,GrowingTable:N,VirtualizedTableRows:B,WithSelection:I,__namedExportsOrder:$e,default:We,dragAndDropRows:V,withRowActions:D},Symbol.toStringTag,{value:"Module"}));export{st as C,j as D,N as G,C as T,B as V,I as W,_ as a,S as b,V as d,D as w};

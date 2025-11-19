import{l as N,c as r,df as X,p as L,d as q,b as V,s as a,B as S,aq as U,m as G,ai as $,b4 as H,A as x,by as z,gj as k,w as C,gk as O,ag as W}from"./iframe-BdLp08tI.js";function B(){return N("div",{class:"ui5-form-root",role:this.effectiveAccessibleRole,"aria-label":this.effectiveAccessibleName,"aria-labelledby":this.effectiveАccessibleNameRef,children:[this.hasHeader&&r("div",{class:"ui5-form-header",part:"header",children:this.hasCustomHeader?r("slot",{name:"header"}):r(X,{id:`${this._id}-header-text`,level:this.headerLevel,children:this.headerText})}),this.hasGroupItems?P.call(this):Y.call(this)]})}function P(){return r("div",{class:"ui5-form-layout",part:"layout",children:this.groupItemsInfo.map(i=>{const e=i.groupItem;return r("div",{class:{"ui5-form-column":!0,[`ui5-form-column-spanL-${e.colsL}`]:!0,[`ui5-form-column-spanXL-${e.colsXl}`]:!0,[`ui5-form-column-spanM-${e.colsM}`]:!0,[`ui5-form-column-spanS-${e.colsS}`]:!0},part:"column",children:N("div",{class:"ui5-form-group",role:i.role,"aria-labelledby":i.accessibleNameRef,"aria-label":i.accessibleName,children:[e.headerText&&r("div",{class:"ui5-form-group-heading",children:r(X,{id:`${e._id}-group-header-text`,level:e.headerLevel,size:"H6",children:e.headerText})}),this.accessibleMode==="Edit"?r("div",{class:"ui5-form-group-layout",children:r("slot",{name:e._individualSlot})}):r("dl",{class:"ui5-form-group-layout","aria-labelledby":i.accessibleNameRefInner,"aria-label":i.accessibleNameInner,children:r("slot",{name:e._individualSlot})})]})})})})}function Y(){return this.accessibleMode==="Edit"?r("div",{class:"ui5-form-layout",part:"layout",children:R.call(this)}):r("dl",{class:"ui5-form-layout",part:"layout",children:R.call(this)})}function R(){return this.itemsInfo.map(i=>{const e=i.item;return r("div",{class:{"ui5-form-item":!0,[`ui5-form-item-span-${e.columnSpan}`]:e.columnSpan!==void 0},children:r("slot",{name:e._individualSlot})})})}L("@ui5/webcomponents-theming","sap_horizon",async()=>q);L("@ui5/webcomponents","sap_horizon",async()=>V);const K=`@container (max-width: 600px){.ui5-form-layout{grid-template-columns:1fr}::slotted(*){justify-self:start}::slotted(:nth-child(2n)){margin-bottom:.5rem}}@container (width > 600px) and (width <= 1024px){.ui5-form-layout{grid-template-columns:1fr}:host([columns-m="1"]) .ui5-form-layout{grid-template-columns:1fr}:host([columns-m="2"]) .ui5-form-layout{grid-template-columns:repeat(2,1fr)}.ui5-form-column-spanM-2{grid-column:span 2}.ui5-form-column-spanM-2 .ui5-form-group-layout{grid-template-columns:repeat(2,1fr)}}@container (width > 1024px) and (width <= 1440px){.ui5-form-layout{grid-template-columns:repeat(2,1fr)}.ui5-form-column{grid-template-columns:1fr}:host([columns-l="1"]) .ui5-form-layout{grid-template-columns:1fr}:host([columns-l="2"]) .ui5-form-layout{grid-template-columns:repeat(2,1fr)}:host([columns-l="3"]) .ui5-form-layout{grid-template-columns:repeat(3,1fr)}.ui5-form-column-spanL-2{grid-column:span 2}.ui5-form-column-spanL-2 .ui5-form-group-layout{grid-template-columns:repeat(2,1fr)}.ui5-form-column-spanL-3{grid-column:span 3}.ui5-form-column-spanL-3 .ui5-form-group-layout{grid-template-columns:repeat(3,1fr)}}@container (min-width: 1441px){.ui5-form-layout{grid-template-columns:repeat(3,1fr)}:host([columns-xl="1"]) .ui5-form-layout{grid-template-columns:1fr}:host([columns-xl="2"]) .ui5-form-layout{grid-template-columns:repeat(2,1fr)}:host([columns-xl="3"]) .ui5-form-layout{grid-template-columns:repeat(3,1fr)}:host([columns-xl="4"]) .ui5-form-layout{grid-template-columns:repeat(4,1fr)}:host([columns-xl="5"]) .ui5-form-layout{grid-template-columns:repeat(5,1fr)}:host([columns-xl="6"]) .ui5-form-layout{grid-template-columns:repeat(6,1fr)}.ui5-form-column-spanXL-2{grid-column:span 2}.ui5-form-column-spanXL-2 .ui5-form-group-layout{grid-template-columns:repeat(2,1fr)}.ui5-form-column-spanXL-3{grid-column:span 3}.ui5-form-column-spanXL-3 .ui5-form-group-layout{grid-template-columns:repeat(3,1fr)}.ui5-form-column-spanXL-4{grid-column:span 4}.ui5-form-column-spanXL-4 .ui5-form-group-layout{grid-template-columns:repeat(4,1fr)}.ui5-form-column-spanXL-5{grid-column:span 5}.ui5-form-column-spanXL-5 .ui5-form-group-layout{grid-template-columns:repeat(5,1fr)}.ui5-form-column-spanXL-6{grid-column:span 6}.ui5-form-column-spanXL-6 .ui5-form-group-layout{grid-template-columns:repeat(6,1fr)}}.ui5-form-item-span-2{grid-column:span 2}.ui5-form-item-span-3{grid-column:span 3}.ui5-form-item-span-4{grid-column:span 4}.ui5-form-item-span-5{grid-column:span 5}.ui5-form-item-span-6{grid-column:span 6}@container (max-width: 600px){.ui5-form-item,.ui5-form-group{--ui5-v2-16-1-form-item-layout: var(--ui5-v2-16-1-form-item-layout-S)}:host([label-span-s="12"]) .ui5-form-item,:host([label-span-s="12"]) .ui5-form-group{--ui5-v2-16-1-form-item-label-justify: var(--ui5-v2-16-1-form-item-label-justify-span12);--ui5-v2-16-1-form-item-label-padding: var(--ui5-v2-16-1-form-item-label-padding-span12)}}@container (width > 600px) and (width <= 1024px){.ui5-form-item,.ui5-form-group{--ui5-v2-16-1-form-item-layout: var(--ui5-v2-16-1-form-item-layout-M)}:host([label-span-m="12"]) .ui5-form-item,:host([label-span-m="12"]) .ui5-form-group{--ui5-v2-16-1-form-item-label-justify: var(--ui5-v2-16-1-form-item-label-justify-span12);--ui5-v2-16-1-form-item-label-padding: var(--ui5-v2-16-1-form-item-label-padding-span12)}}@container (width > 1024px) and (width <= 1440px){.ui5-form-item,.ui5-form-group{--ui5-v2-16-1-form-item-layout: var(--ui5-v2-16-1-form-item-layout-L)}:host([label-span-l="12"]) .ui5-form-item,:host([label-span-l="12"]) .ui5-form-group{--ui5-v2-16-1-form-item-label-justify: var(--ui5-v2-16-1-form-item-label-justify-span12);--ui5-v2-16-1-form-item-label-padding: var(--ui5-v2-16-1-form-item-label-padding-span12)}}@container (min-width: 1441px){.ui5-form-item,.ui5-form-group{--ui5-v2-16-1-form-item-layout: var(--ui5-v2-16-1-form-item-layout-XL)}:host([label-span-xl="12"]) .ui5-form-item,:host([label-span-xl="12"]) .ui5-form-group{--ui5-v2-16-1-form-item-label-justify: var(--ui5-v2-16-1-form-item-label-justify-span12);--ui5-v2-16-1-form-item-label-padding: var(--ui5-v2-16-1-form-item-label-padding-span12)}}:host{display:block}.ui5-form-root{display:flex;flex-direction:column;background-color:var(--sapGroup_ContentBackground);border-radius:.75rem;container-type:inline-size}.ui5-form-header{display:flex;min-height:2.75rem;align-items:center;border-bottom:1px solid var(--sapGroup_TitleBorderColor);padding:.875rem 1rem;box-sizing:border-box}.ui5-form-layout{display:grid;column-gap:1rem;row-gap:.125rem;padding:1rem .75rem}.ui5-form-group-layout{display:grid;column-gap:1rem}.ui5-form-group-heading{height:var(--_ui5-v2-16-1-form-group-heading-height);line-height:var(--_ui5-v2-16-1-form-group-heading-height);padding-inline-start:.25rem}.ui5-form-column{padding-top:.5rem;padding-bottom:1rem;box-sizing:border-box}::slotted([ui5-form-group]){display:contents}dl{all:unset}
`;var p=function(i,e,t,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var u=i.length-1;u>=0;u--)(m=i[u])&&(n=(s<3?m(n):s>3?m(e,t,n):m(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},T;const I=new Map,f={S:1,M:2,L:3,XL:6},Q=["S","M","L","Xl"],_=12,J="4fr 8fr 0fr",Z="1fr";let l=T=class extends H{constructor(){super(...arguments),this.accessibleMode="Display",this.layout="S1 M1 L2 XL3",this.labelSpan="S12 M4 L4 XL4",this.emptySpan="S0 M0 L0 XL0",this.headerLevel="H2",this.itemSpacing="Normal",this.columnsS=1,this.labelSpanS=12,this.emptySpanS=0,this.columnsM=1,this.labelSpanM=4,this.emptySpanM=0,this.columnsL=2,this.labelSpanL=4,this.emptySpanL=0,this.columnsXl=3,this.labelSpanXl=4,this.emptySpanXl=0}onBeforeRendering(){this.setColumnLayout(),this.setFormItemLayout(),this.setGroupsColSpan(),this.setItemsState()}onAfterRendering(){this.createAdditionalCSSStyleSheet(),this.setFastNavGroup()}setColumnLayout(){this.layout.split(" ").forEach(t=>{t.startsWith("S")?this.columnsS=parseInt(t.slice(1)):t.startsWith("M")?this.columnsM=parseInt(t.slice(1)):t.startsWith("L")?this.columnsL=parseInt(t.slice(1)):t.startsWith("XL")&&(this.columnsXl=parseInt(t.slice(2)))})}parseFormItemSpan(){this.labelSpan.split(" ").forEach(e=>{e.startsWith("S")?this.labelSpanS=parseInt(e.slice(1)):e.startsWith("M")?this.labelSpanM=parseInt(e.slice(1)):e.startsWith("L")?this.labelSpanL=parseInt(e.slice(1)):e.startsWith("XL")&&(this.labelSpanXl=parseInt(e.slice(2)))}),this.emptySpan.split(" ").forEach(e=>{e.startsWith("S")?this.emptySpanS=parseInt(e.slice(1)):e.startsWith("M")?this.emptySpanM=parseInt(e.slice(1)):e.startsWith("L")?this.emptySpanL=parseInt(e.slice(1)):e.startsWith("XL")&&(this.emptySpanXl=parseInt(e.slice(2)))})}setFormItemLayout(){this.parseFormItemSpan(),[{breakpoint:"S",labelSpan:this.labelSpanS,emptySpan:this.emptySpanS},{breakpoint:"M",labelSpan:this.labelSpanM,emptySpan:this.emptySpanM},{breakpoint:"L",labelSpan:this.labelSpanL,emptySpan:this.emptySpanL},{breakpoint:"XL",labelSpan:this.labelSpanXl,emptySpan:this.emptySpanXl}].forEach(e=>{if(this.isValidFormItemLayout(e.labelSpan,e.emptySpan)){const t=e.labelSpan===_?"1fr":`${e.labelSpan}fr ${_-(e.labelSpan+e.emptySpan)}fr ${e.emptySpan}fr`;this.style.setProperty(x(`--ui5-form-item-layout-${e.breakpoint}`),t)}else console.warn(`Form :: invalid usage of emptySpan and/or labelSpan in ${e.breakpoint} size. The labelSpan must be <=12 and when emptySpace is used - their combined values must not exceed 11.`),this.style.setProperty(x(`--ui5-form-item-layout-${e.breakpoint}`),e.breakpoint==="S"?Z:J)})}isValidFormItemLayout(e,t){return t===0?e<=_:e+t<=_-1}setFastNavGroup(){this.hasGroupItems?this.removeAttribute("data-sap-ui-fastnavgroup"):this.setAttribute("data-sap-ui-fastnavgroup","true")}setGroupsColSpan(){if(!this.hasGroupItems)return;const e=this.items.length;[...this.items].sort((o,s)=>s?.items.length-o?.items.length).forEach((o,s)=>{o.colsXl=this.getGroupsColSpan(this.columnsXl,e,s,o),o.colsL=this.getGroupsColSpan(this.columnsL,e,s,o),o.colsM=this.getGroupsColSpan(this.columnsM,e,s,o),o.colsS=this.getGroupsColSpan(this.columnsS,e,s,o)})}getGroupsColSpan(e,t,o,s){if(s.columnSpan)return s.columnSpan;if(e===1||e<=t)return 1;if(e%t===0)return e/t;const n=1,m=e-t;return m<=t?o<m?n+1:n:o===0?n+(m-t)+1:n+1}setItemsState(){this.items.forEach(e=>{e.itemSpacing=this.itemSpacing,e.accessibleMode=this.accessibleMode})}get hasGroupItems(){return this.items.some(e=>e.isGroup)}get hasHeader(){return this.hasCustomHeader||this.hasHeaderText}get hasHeaderText(){return!!this.headerText}get hasCustomHeader(){return!!this.header.length}get effectiveAccessibleName(){return this.accessibleName||this.accessibleNameRef?z(this):this.hasHeader?void 0:T.i18nBundle.getText(k)}get effectiveАccessibleNameRef(){if(!(this.accessibleName||this.accessibleNameRef))return this.hasHeaderText&&!this.hasCustomHeader?`${this._id}-header-text`:void 0}get effectiveAccessibleRole(){return this.hasGroupItems?"region":"form"}get groupItemsInfo(){return this.items.map((e,t)=>{const o=this.getItemsInfo(Array.from(e.children));Q.forEach(n=>{const m=e[`cols${n}`]||1,u=Math.ceil(o.length/m),w=m*u,j=m-(w-o.length)-1;let D=0;for(let F=0;F<w;F++){const A=Math.floor(F/u),E=F%u;E===u-1&&A>j||(o[D].item.style.setProperty(x(`--ui5-form-item-order-${n}`),`${A+E*m}`),D++)}});const s=e.effectiveAccessibleNameRef;return{groupItem:e,accessibleName:this.accessibleMode==="Edit"?e.getEffectiveAccessibleName(t):void 0,accessibleNameInner:this.accessibleMode==="Edit"?void 0:e.getEffectiveAccessibleName(t),accessibleNameRef:this.accessibleMode==="Edit"?s:void 0,accessibleNameRefInner:this.accessibleMode==="Edit"?void 0:s,items:this.getItemsInfo(Array.from(e.children)),role:this.accessibleMode==="Edit"?"form":void 0}})}get itemsInfo(){return this.getItemsInfo()}getItemsInfo(e){return(e||this.items).map(t=>({item:t,classes:t.columnSpan?`ui5-form-item-span-${t.columnSpan}`:"",classMap:{[`ui5-form-item-span-${t.columnSpan}`]:t.columnSpan!==void 0}}))}createAdditionalCSSStyleSheet(){[{breakpoint:"S",columns:this.columnsS},{breakpoint:"M",columns:this.columnsM},{breakpoint:"L",columns:this.columnsL},{breakpoint:"XL",columns:this.columnsXl}].forEach(e=>{const t=this.getAdditionalCSS(e.breakpoint,e.columns);t&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.getCSSStyleSheet(t)])})}getAdditionalCSS(e,t){if(f[e]>=t)return;const o=`${e}-${t}`;if(!I.has(o)){let s,n=f.S,m="",u=t;for(e==="S"?(n=f.S,s="@container (max-width: 599px) {"):e==="M"?(n=f.M,s="@container (width > 599px) and (width < 1024px) {"):e==="L"?(n=f.L,s="@container (width > 1023px) and (width < 1439px) {"):e==="XL"&&(s="@container (min-width: 1440px) {",n=f.XL);u>n;)m+=`
				:host([columns-${e.toLocaleLowerCase()}="${u}"]) .ui5-form-layout {
					grid-template-columns: repeat(${u}, 1fr);
				}

				.ui5-form-column-span${e}-${u},
				.ui5-form-item-span-${u} {
					grid-column: span ${u};
				}

				.ui5-form-column-span${e}-${u} .ui5-form-group-layout {
					grid-template-columns: repeat(${u}, 1fr);
				}
				`,u--;const w=`${s}${m}}`;I.set(o,w)}return I.get(o)}getCSSStyleSheet(e){const t=new CSSStyleSheet;return t.replaceSync(e),t}};p([a()],l.prototype,"accessibleName",void 0);p([a()],l.prototype,"accessibleNameRef",void 0);p([a()],l.prototype,"accessibleMode",void 0);p([a()],l.prototype,"layout",void 0);p([a()],l.prototype,"labelSpan",void 0);p([a()],l.prototype,"emptySpan",void 0);p([a()],l.prototype,"headerText",void 0);p([a()],l.prototype,"headerLevel",void 0);p([a()],l.prototype,"itemSpacing",void 0);p([S({type:HTMLElement})],l.prototype,"header",void 0);p([S({type:HTMLElement,default:!0,individualSlots:!0,invalidateOnChildChange:!0})],l.prototype,"items",void 0);p([a({type:Number})],l.prototype,"columnsS",void 0);p([a({type:Number})],l.prototype,"labelSpanS",void 0);p([a({type:Number})],l.prototype,"emptySpanS",void 0);p([a({type:Number})],l.prototype,"columnsM",void 0);p([a({type:Number})],l.prototype,"labelSpanM",void 0);p([a({type:Number})],l.prototype,"emptySpanM",void 0);p([a({type:Number})],l.prototype,"columnsL",void 0);p([a({type:Number})],l.prototype,"labelSpanL",void 0);p([a({type:Number})],l.prototype,"emptySpanL",void 0);p([a({type:Number})],l.prototype,"columnsXl",void 0);p([a({type:Number})],l.prototype,"labelSpanXl",void 0);p([a({type:Number})],l.prototype,"emptySpanXl",void 0);p([U("@ui5/webcomponents")],l,"i18nBundle",void 0);l=T=p([G({tag:"ui5-form",renderer:$,styles:K,template:B})],l);l.define();const y=C("ui5-form",["accessibleMode","accessibleName","accessibleNameRef","emptySpan","headerLevel","headerText","itemSpacing","labelSpan","layout"],[],["header"],[]);y.displayName="Form";try{y.displayName="Form",y.__docgenInfo={description:`The Form is a layout component that arranges labels and form fields (like input fields) pairs
into a specific number of columns.

**Note:** The Form web component is a layout component, it isn't a replacement for the native \`form\` HTML element.
The Form web component does not provide any APIs for form submission.

### Structure

- **Form** (\`Form\`) is the top-level container component, responsible for the content layout and responsiveness.
- **FormGroup** (\`FormGroup\`) enables the grouping of the Form content.
- **FormItem** (\`FormItem\`) is a pair of label and form fields and can be used directly in a Form, or as part of a FormGroup.

The simplest Form (\`Form\`) consists of a header area on top,
displaying a header text (see the \`headingText\` property) and content below - an arbitrary number of FormItems (ui5-form-item),
representing the pairs of label and form fields.

And, there is also "grouping" available to assist the implementation of richer UIs.
This is enabled by the FormGroup (\`FormGroup\`) component.
In this case, the Form is structured into FormGroups and each FormGroup consists of FormItems.

### Responsiveness

The Form component reacts and changes its layout on predefined breakpoints.
Depending on its size, the Form content (FormGroups and FormItems) gets divided into one or more columns as follows:
- **S** (< 600px) – 1 column is recommended (default: 1)
- **M** (600px - 1022px) – up to 2 columns are recommended (default: 1)
- **L** (1023px - 1439px) - up to 3 columns are recommended (default: 2)
- **XL** (> 1439px) – up to 6 columns are recommended (default: 3)

To change the layout, use the \`layout\` property - f.e. layout="S1 M2 L3 XL6".

### Groups

To make better use of screen space, there is built-in logic to determine how many columns should a FormGroup occupy.

- **Example #1** (perfect match):
4 columns and 4 groups: each group will use 1 column.

- **Example #2** (balanced distribution):
4 columns and 2 groups: each group will use 2 columns.
6 columns and 2 groups: each group will use 3 columns.

- **Example #3** (unbalanced distribution):
3 columns and 2 groups: the larger one will use 2 columns, the smaller 1 column.
5 columns and 3 groups: two of the groups will use 2 columns each, the smallest 1 column.

**Note:** The size of a group element is determined by the number of FormItems assigned to it.
In the case of equality, the first in the DOM will use more columns, and the last - fewer columns.

- **Example #4** (more groups than columns):
3 columns and 4 groups: each FormGroup uses only 1 column, the last FormGroup will wrap on the second row.

### Groups Column Span

To influence the built-in group distribution, described in the previous section,
you can use the FormGroup's \`columnSpan\` property, that defines how many columns the group should expand to.

### Items Column Span

FormItem's columnSpan property defines how many columns the form item should expand to inside a form group or the form.

### Items Label Span

The placement of the labels depends on the size of the used column.
If there is enough space, the labels are next to their associated fields, otherwise  - above the fields.
By default, the labels take 4/12 of the FormItem, leaving 8/12 parts to associated fields.
You can control what space the labels should take via the \`labelSpan\` property.

**For example:** To always place the labels on top set: \`labelSpan="S12 M12 L12 XL12"\` property.

### Items Empty Span

By default, a form item spans 12 cells, fully divided between its label and field, with no empty space at the end:
- **Label:** occupies 4 cells.
- **Field:** occupies 8 cells.

The \`emptySpan\` property provides additional layout flexibility by defining empty space at the form item’s end.

**For example:** Setting "S0 M0 L3 XL3" (or just "L3 XL3") adjusts the layout as follows:
- **Label:** remains 4 cells.
- **Field:** is reduced to 5 cells.
- **Empty space:** 3 cells are added at the end.

Greater values increase the empty space at the end of the form item, reducing the space available for the label and its field.
However, setting \`emptySpan\` to 1 cell is recommended and typically sufficient to achieve a balanced layout.

### Navigation flow

The Form component supports two layout options for keyboard navigation:

#### Simple form

In this "simple form" layout, each \`FormItem\` acts as a standalone group
with one item, so focus moves horizontally across the grid from one \`FormItem\` to the next.
This layout is ideal for simpler forms and supports custom arrangements, e.g.,

\`\`\`
| 1 | 2 |
|   3   |
| 4 | 5 |
\`\`\`

#### Complex form

In this layout, items are grouped into \`FormGroup\` elements, allowing more complex configurations:

- **Single-Column Group**: Focus moves vertically down from one item to the next.
  \`\`\`
  | 1 |
  | 2 |
  | 3 |
  \`\`\`

- **Multi-Column Group**: Focus moves horizontally within each row, advancing to the next row after completing the current one.
  \`\`\`
  | 1 | 4 |
  | 2 | 5 |
  | 3 | 6 |
  \`\`\`

### Keyboard Handling

- [Tab] - Moves the focus to the next interactive element within the Form/FormGroup (if available) or to the next element in the tab chain outside the Form
- [Shift] + [Tab] - Moves the focus to the previous interactive element within the Form/FormGroup (if available) or to the previous element in the tab chain outside the Form
- [F6] - Moves the focus to the first interactive element of the next FormGroup (if available) or to the next element in the tab chain outside the Form
- [Shift] + [F6] - Moves the focus to the first interactive element of the previous FormGroup (if available) or to the previous element in the tab chain outside the Form

### ES6 Module Import

- import`,displayName:"Form",props:{children:{defaultValue:null,description:`Defines the component content - FormGroups or FormItems.

**Note:** Mixing FormGroups and standalone FormItems (not belonging to a group) is not supported.
Either use FormGroups and make sure all FormItems are part of a FormGroup, or use just FormItems without any FormGroups.

__Supported Node Type/s:__ \`Array<IFormItem>\``,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header area.

**Note:** When a \`header\` is provided, the \`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},accessibleMode:{defaultValue:{value:'"Display"'},description:`Defines the accessibility mode of the component in "edit" and "display" use-cases.

Based on the mode, the component renders different HTML elements and ARIA attributes,
which are appropriate for the use-case.

**Usage:**
- Set this property to "Display", when the form consists of non-editable (e.g. texts) form items.
- Set this property to "Edit", when the form consists of editable (e.g. input fields) form items.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:"accessibleMode",required:!1,type:{name:"enum",value:[{value:'"Display"'},{value:'"Edit"'},{value:'"Display"'},{value:'"Edit"'}]}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Defines id (or many ids) of the element (or elements) that label the component.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},emptySpan:{defaultValue:{value:'"S0 M0 L0 XL0"'},description:`Defines the number of cells that are empty at the end of each form item, configurable by breakpoint.

By default, a form item spans 12 cells, fully divided between its label (4 cells) and field (8 cells), with no empty space at the end.
The \`emptySpan\` provides additional layout flexibility by defining empty space at the form item’s end.

**Note:**
- The maximum allowable empty space is 10 cells. At least 1 cell each must remain for the label and the field.
- When \`emptySpan\` is specified (greater than 0), ensure that the combined value of \`emptySpan\` and \`labelSpan\` does not exceed 11. This guarantees a minimum of 1 cell for the field.

**Note:** Available since [v2.5.0](https://github.com/UI5/webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:"emptySpan",required:!1,type:{name:"string"}},headerLevel:{defaultValue:{value:'"H2"'},description:`Defines the compoennt heading level,
set by the \`headerText\`.

**Note:** Available since [v2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.`,name:"headerLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},headerText:{defaultValue:{value:"undefined"},description:"Defines the header text of the component.\n\n**Note:** The property gets overridden by the `header` slot.",name:"headerText",required:!1,type:{name:"string"}},itemSpacing:{defaultValue:{value:'"Normal"'},description:`Defines the vertical spacing between form items.

**Note:** If the Form is meant to be switched between "display"("non-edit") and "edit" modes,
we recommend using "Large" item spacing in "display"("non-edit") mode, and "Normal" - for "edit" mode,
to avoid "jumping" effect, caused by the hight difference between texts in "display"("non-edit") mode and the input fields in "edit" mode.`,name:"itemSpacing",required:!1,type:{name:"enum",value:[{value:'"Large"'},{value:'"Normal"'},{value:'"Normal"'},{value:'"Large"'}]}},labelSpan:{defaultValue:{value:'"S12 M4 L4 XL4"'},description:`Defines the width proportion of the labels and fields of a form item by breakpoint.

By default, the labels take 4/12 (or 1/3) of the form item in M,L and XL sizes,
and 12/12 in S size, e.g in S the label is on top of its associated field.

The supported values are between 1 and 12. Greater the number, more space the label will use.

**Note:** If "12" is set, the label will be displayed on top of its assosiated field.`,name:"labelSpan",required:!1,type:{name:"string"}},layout:{defaultValue:{value:'"S1 M1 L2 XL3"'},description:"Defines the number of columns to distribute the form content by breakpoint.\n\nSupported values:\n- `S` - 1 column by default (1 column is recommended)\n- `M` - 1 column by default (up to 2 columns are recommended)\n- `L` - 2 columns by default (up to 3 columns are recommended)\n- `XL` - 3 columns by default (up to 6 columns  are recommended)",name:"layout",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{y.displayName="Form",y.__docgenInfo={description:`The Form is a layout component that arranges labels and form fields (like input fields) pairs
into a specific number of columns.

**Note:** The Form web component is a layout component, it isn't a replacement for the native \`form\` HTML element.
The Form web component does not provide any APIs for form submission.

### Structure

- **Form** (\`Form\`) is the top-level container component, responsible for the content layout and responsiveness.
- **FormGroup** (\`FormGroup\`) enables the grouping of the Form content.
- **FormItem** (\`FormItem\`) is a pair of label and form fields and can be used directly in a Form, or as part of a FormGroup.

The simplest Form (\`Form\`) consists of a header area on top,
displaying a header text (see the \`headingText\` property) and content below - an arbitrary number of FormItems (ui5-form-item),
representing the pairs of label and form fields.

And, there is also "grouping" available to assist the implementation of richer UIs.
This is enabled by the FormGroup (\`FormGroup\`) component.
In this case, the Form is structured into FormGroups and each FormGroup consists of FormItems.

### Responsiveness

The Form component reacts and changes its layout on predefined breakpoints.
Depending on its size, the Form content (FormGroups and FormItems) gets divided into one or more columns as follows:
- **S** (< 600px) – 1 column is recommended (default: 1)
- **M** (600px - 1022px) – up to 2 columns are recommended (default: 1)
- **L** (1023px - 1439px) - up to 3 columns are recommended (default: 2)
- **XL** (> 1439px) – up to 6 columns are recommended (default: 3)

To change the layout, use the \`layout\` property - f.e. layout="S1 M2 L3 XL6".

### Groups

To make better use of screen space, there is built-in logic to determine how many columns should a FormGroup occupy.

- **Example #1** (perfect match):
4 columns and 4 groups: each group will use 1 column.

- **Example #2** (balanced distribution):
4 columns and 2 groups: each group will use 2 columns.
6 columns and 2 groups: each group will use 3 columns.

- **Example #3** (unbalanced distribution):
3 columns and 2 groups: the larger one will use 2 columns, the smaller 1 column.
5 columns and 3 groups: two of the groups will use 2 columns each, the smallest 1 column.

**Note:** The size of a group element is determined by the number of FormItems assigned to it.
In the case of equality, the first in the DOM will use more columns, and the last - fewer columns.

- **Example #4** (more groups than columns):
3 columns and 4 groups: each FormGroup uses only 1 column, the last FormGroup will wrap on the second row.

### Groups Column Span

To influence the built-in group distribution, described in the previous section,
you can use the FormGroup's \`columnSpan\` property, that defines how many columns the group should expand to.

### Items Column Span

FormItem's columnSpan property defines how many columns the form item should expand to inside a form group or the form.

### Items Label Span

The placement of the labels depends on the size of the used column.
If there is enough space, the labels are next to their associated fields, otherwise  - above the fields.
By default, the labels take 4/12 of the FormItem, leaving 8/12 parts to associated fields.
You can control what space the labels should take via the \`labelSpan\` property.

**For example:** To always place the labels on top set: \`labelSpan="S12 M12 L12 XL12"\` property.

### Items Empty Span

By default, a form item spans 12 cells, fully divided between its label and field, with no empty space at the end:
- **Label:** occupies 4 cells.
- **Field:** occupies 8 cells.

The \`emptySpan\` property provides additional layout flexibility by defining empty space at the form item’s end.

**For example:** Setting "S0 M0 L3 XL3" (or just "L3 XL3") adjusts the layout as follows:
- **Label:** remains 4 cells.
- **Field:** is reduced to 5 cells.
- **Empty space:** 3 cells are added at the end.

Greater values increase the empty space at the end of the form item, reducing the space available for the label and its field.
However, setting \`emptySpan\` to 1 cell is recommended and typically sufficient to achieve a balanced layout.

### Navigation flow

The Form component supports two layout options for keyboard navigation:

#### Simple form

In this "simple form" layout, each \`FormItem\` acts as a standalone group
with one item, so focus moves horizontally across the grid from one \`FormItem\` to the next.
This layout is ideal for simpler forms and supports custom arrangements, e.g.,

\`\`\`
| 1 | 2 |
|   3   |
| 4 | 5 |
\`\`\`

#### Complex form

In this layout, items are grouped into \`FormGroup\` elements, allowing more complex configurations:

- **Single-Column Group**: Focus moves vertically down from one item to the next.
  \`\`\`
  | 1 |
  | 2 |
  | 3 |
  \`\`\`

- **Multi-Column Group**: Focus moves horizontally within each row, advancing to the next row after completing the current one.
  \`\`\`
  | 1 | 4 |
  | 2 | 5 |
  | 3 | 6 |
  \`\`\`

### Keyboard Handling

- [Tab] - Moves the focus to the next interactive element within the Form/FormGroup (if available) or to the next element in the tab chain outside the Form
- [Shift] + [Tab] - Moves the focus to the previous interactive element within the Form/FormGroup (if available) or to the previous element in the tab chain outside the Form
- [F6] - Moves the focus to the first interactive element of the next FormGroup (if available) or to the next element in the tab chain outside the Form
- [Shift] + [F6] - Moves the focus to the first interactive element of the previous FormGroup (if available) or to the previous element in the tab chain outside the Form

### ES6 Module Import

- import`,displayName:"Form",props:{children:{defaultValue:null,description:`Defines the component content - FormGroups or FormItems.

**Note:** Mixing FormGroups and standalone FormItems (not belonging to a group) is not supported.
Either use FormGroups and make sure all FormItems are part of a FormGroup, or use just FormItems without any FormGroups.

__Supported Node Type/s:__ \`Array<IFormItem>\``,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header area.

**Note:** When a \`header\` is provided, the \`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},accessibleMode:{defaultValue:{value:'"Display"'},description:`Defines the accessibility mode of the component in "edit" and "display" use-cases.

Based on the mode, the component renders different HTML elements and ARIA attributes,
which are appropriate for the use-case.

**Usage:**
- Set this property to "Display", when the form consists of non-editable (e.g. texts) form items.
- Set this property to "Edit", when the form consists of editable (e.g. input fields) form items.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:"accessibleMode",required:!1,type:{name:"enum",value:[{value:'"Display"'},{value:'"Edit"'},{value:'"Display"'},{value:'"Edit"'}]}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Defines id (or many ids) of the element (or elements) that label the component.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},emptySpan:{defaultValue:{value:'"S0 M0 L0 XL0"'},description:`Defines the number of cells that are empty at the end of each form item, configurable by breakpoint.

By default, a form item spans 12 cells, fully divided between its label (4 cells) and field (8 cells), with no empty space at the end.
The \`emptySpan\` provides additional layout flexibility by defining empty space at the form item’s end.

**Note:**
- The maximum allowable empty space is 10 cells. At least 1 cell each must remain for the label and the field.
- When \`emptySpan\` is specified (greater than 0), ensure that the combined value of \`emptySpan\` and \`labelSpan\` does not exceed 11. This guarantees a minimum of 1 cell for the field.

**Note:** Available since [v2.5.0](https://github.com/UI5/webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:"emptySpan",required:!1,type:{name:"string"}},headerLevel:{defaultValue:{value:'"H2"'},description:`Defines the compoennt heading level,
set by the \`headerText\`.

**Note:** Available since [v2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.`,name:"headerLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},headerText:{defaultValue:{value:"undefined"},description:"Defines the header text of the component.\n\n**Note:** The property gets overridden by the `header` slot.",name:"headerText",required:!1,type:{name:"string"}},itemSpacing:{defaultValue:{value:'"Normal"'},description:`Defines the vertical spacing between form items.

**Note:** If the Form is meant to be switched between "display"("non-edit") and "edit" modes,
we recommend using "Large" item spacing in "display"("non-edit") mode, and "Normal" - for "edit" mode,
to avoid "jumping" effect, caused by the hight difference between texts in "display"("non-edit") mode and the input fields in "edit" mode.`,name:"itemSpacing",required:!1,type:{name:"enum",value:[{value:'"Large"'},{value:'"Normal"'},{value:'"Normal"'},{value:'"Large"'}]}},labelSpan:{defaultValue:{value:'"S12 M4 L4 XL4"'},description:`Defines the width proportion of the labels and fields of a form item by breakpoint.

By default, the labels take 4/12 (or 1/3) of the form item in M,L and XL sizes,
and 12/12 in S size, e.g in S the label is on top of its associated field.

The supported values are between 1 and 12. Greater the number, more space the label will use.

**Note:** If "12" is set, the label will be displayed on top of its assosiated field.`,name:"labelSpan",required:!1,type:{name:"string"}},layout:{defaultValue:{value:'"S1 M1 L2 XL3"'},description:"Defines the number of columns to distribute the form content by breakpoint.\n\nSupported values:\n- `S` - 1 column by default (1 column is recommended)\n- `M` - 1 column by default (up to 2 columns are recommended)\n- `L` - 2 columns by default (up to 3 columns are recommended)\n- `XL` - 3 columns by default (up to 6 columns  are recommended)",name:"layout",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var c=function(i,e,t,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var u=i.length-1;u>=0;u--)(m=i[u])&&(n=(s<3?m(n):s>3?m(e,t,n):m(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},M;let d=M=class extends H{constructor(){super(...arguments),this.headerLevel="H3",this.colsS=1,this.colsM=1,this.colsL=1,this.colsXl=1,this.itemSpacing="Normal"}onBeforeRendering(){this.processFormItems()}processFormItems(){this.items.forEach(e=>{e.itemSpacing=this.itemSpacing})}getEffectiveAccessibleName(e){if(this.accessibleName||this.accessibleNameRef)return z(this);if(!this.headerText)return M.i18nBundle.getText(O,e+1)}get effectiveAccessibleNameRef(){if(!(this.accessibleName||this.accessibleNameRef))return this.headerText?`${this._id}-group-header-text`:void 0}get isGroup(){return!0}};c([a()],d.prototype,"headerText",void 0);c([a()],d.prototype,"headerLevel",void 0);c([a({type:Number})],d.prototype,"columnSpan",void 0);c([a()],d.prototype,"accessibleName",void 0);c([a()],d.prototype,"accessibleNameRef",void 0);c([S({type:HTMLElement,default:!0})],d.prototype,"items",void 0);c([a({type:Number})],d.prototype,"colsS",void 0);c([a({type:Number})],d.prototype,"colsM",void 0);c([a({type:Number})],d.prototype,"colsL",void 0);c([a({type:Number})],d.prototype,"colsXl",void 0);c([a()],d.prototype,"itemSpacing",void 0);c([U("@ui5/webcomponents")],d,"i18nBundle",void 0);d=M=c([G({tag:"ui5-form-group",fastNavigation:!0})],d);d.define();const g=C("ui5-form-group",["accessibleName","accessibleNameRef","columnSpan","headerLevel","headerText"],[],[],[]);g.displayName="FormGroup";try{g.displayName="FormGroup",g.__docgenInfo={description:`The FormGroup (ui5-form-group) represents a group inside the Form (ui5-form) component
and it consists of FormItem (ui5-form-item) components.

The layout of the FormGroup is mostly defined and controlled by the overarching Form (ui5-form) component.
Still, one can influence the layout via the FormGroup's \`columnSpan\` property,
that defines how many columns the group should expand to.

### Usage

Тhe FormGroup (ui5-form-group) allows to split a Form into groups,
e.g to group FormItems that logically belong together.

### ES6 Module Import

- import`,displayName:"FormGroup",props:{children:{defaultValue:null,description:"Defines the items of the component.\n\n__Supported Node Type/s:__ `Array<FormItem>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Defines id (or many ids) of the element (or elements) that label the component.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},columnSpan:{defaultValue:{value:"undefined"},description:`Defines column span of the component,
e.g how many columns the group should span to.`,name:"columnSpan",required:!1,type:{name:"number"}},headerLevel:{defaultValue:{value:'"H3"'},description:`Defines the compoennt heading level,
set by the \`headerText\`.

**Note:** Available since [v2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.`,name:"headerLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},headerText:{defaultValue:{value:"undefined"},description:"Defines header text of the component.",name:"headerText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="FormGroup",g.__docgenInfo={description:`The FormGroup (ui5-form-group) represents a group inside the Form (ui5-form) component
and it consists of FormItem (ui5-form-item) components.

The layout of the FormGroup is mostly defined and controlled by the overarching Form (ui5-form) component.
Still, one can influence the layout via the FormGroup's \`columnSpan\` property,
that defines how many columns the group should expand to.

### Usage

Тhe FormGroup (ui5-form-group) allows to split a Form into groups,
e.g to group FormItems that logically belong together.

### ES6 Module Import

- import`,displayName:"FormGroup",props:{children:{defaultValue:null,description:"Defines the items of the component.\n\n__Supported Node Type/s:__ `Array<FormItem>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Defines id (or many ids) of the element (or elements) that label the component.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},columnSpan:{defaultValue:{value:"undefined"},description:`Defines column span of the component,
e.g how many columns the group should span to.`,name:"columnSpan",required:!1,type:{name:"number"}},headerLevel:{defaultValue:{value:'"H3"'},description:`Defines the compoennt heading level,
set by the \`headerText\`.

**Note:** Available since [v2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.`,name:"headerLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},headerText:{defaultValue:{value:"undefined"},description:"Defines header text of the component.",name:"headerText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function ee(){return r("div",{class:"ui5-form-item-root",children:r("div",{class:"ui5-form-item-layout",part:"layout",children:this.accessibleMode==="Edit"?te.call(this):ne.call(this)})})}function te(){return N(W,{children:[r("div",{class:"ui5-form-item-label",part:"label",children:r("slot",{name:"labelContent"})}),r("div",{class:"ui5-form-item-content",part:"content",children:this.content.map(i=>r("div",{class:"ui5-form-item-content-child",children:r("slot",{name:i._individualSlot})}))})]})}function ne(){return N(W,{children:[r("dt",{class:"ui5-form-item-label",part:"label",children:r("slot",{name:"labelContent"})}),r("dd",{class:"ui5-form-item-content",part:"content",children:this.content.map(i=>r("div",{class:"ui5-form-item-content-child",children:r("slot",{name:i._individualSlot})}))})]})}L("@ui5/webcomponents-theming","sap_horizon",async()=>q);L("@ui5/webcomponents","sap_horizon",async()=>V);const oe=`:host(:not([hidden])){display:block;width:100%}:host([column-span="1"]){grid-column:span 1}:host([column-span="2"]){grid-column:span 2}:host([column-span="3"]){grid-column:span 3}:host([column-span="4"]){grid-column:span 4}:host([column-span="5"]){grid-column:span 5}:host([column-span="6"]){grid-column:span 6}.ui5-form-item-root{container-type:inline-size;background-color:inherit;color:inherit}.ui5-form-item-layout{display:grid;grid-template-columns:var(--ui5-v2-16-1-form-item-layout);align-items:center}.ui5-form-item-label{padding:var(--ui5-v2-16-1-form-item-label-padding);padding-inline-end:var(--ui5-v2-16-1-form-item-label-padding-end);justify-self:var(--ui5-v2-16-1-form-item-label-justify)}.ui5-form-item-content{overflow:hidden;width:100%;display:flex;padding:0 .25rem}.ui5-form-item-content-child{padding-inline-end:.5rem;box-sizing:border-box;width:100%}:host([item-spacing="Large"]) .ui5-form-item-layout{min-height:var(--_ui5-v2-16-1_form_item_min_height);padding-top:var(--_ui5-v2-16-1_form_item_padding);padding-bottom:var(--_ui5-v2-16-1_form_item_padding);box-sizing:border-box}::slotted(*){width:100%}@container (max-width: 600px){:host{order:var(--ui5-v2-16-1-form-item-order-S, unset)}}@container (width > 600px) and (width <= 1024px){:host{order:var(--ui5-v2-16-1-form-item-order-M, unset)}}@container (width > 1024px) and (width <= 1440px){:host{order:var(--ui5-v2-16-1-form-item-order-L, unset)}}@container (min-width: 1441px){:host{order:var(--ui5-v2-16-1-form-item-order-Xl, unset)}}dd{all:unset}
`;var b=function(i,e,t,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var u=i.length-1;u>=0;u--)(m=i[u])&&(n=(s<3?m(n):s>3?m(e,t,n):m(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let h=class extends H{constructor(){super(...arguments),this.itemSpacing="Normal",this.accessibleMode="Display"}get isGroup(){return!1}};b([a({type:Number})],h.prototype,"columnSpan",void 0);b([S()],h.prototype,"labelContent",void 0);b([S({type:HTMLElement,default:!0,individualSlots:!0})],h.prototype,"content",void 0);b([a()],h.prototype,"itemSpacing",void 0);b([a()],h.prototype,"accessibleMode",void 0);h=b([G({tag:"ui5-form-item",renderer:$,styles:oe,template:ee})],h);h.define();const v=C("ui5-form-item",["columnSpan"],[],["labelContent"],[]);v.displayName="FormItem";try{v.displayName="FormItem",v.__docgenInfo={description:`The FormItem (ui5-form-item) represents pair of a label and
one or more components (text or text fields), associated to it.

### Usage

The FormItem is being used in FormGroup (ui5-form-group) or directly in Form (ui5-form).

### ES6 Module Import

- import`,displayName:"FormItem",props:{children:{defaultValue:null,description:"Defines the content of the component,\nassociated to `labelContent`.\n\n__Supported Node Type/s:__ `Array<HTMLElement>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},labelContent:{defaultValue:null,description:`Defines the label of the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="labelContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:"labelContent",required:!1,type:{name:"UI5WCSlotsNode"}},columnSpan:{defaultValue:{value:"undefined"},description:`Defines the column span of the component,
e.g how many columns the component should span to.

**Note:** The column span should be a number between 1 and the available columns of the FormGroup (when items are placed in a group)
or the Form. The available columns can be affected by the FormGroup#columnSpan and/or the Form#layout.
A number bigger than the available columns won't take effect.`,name:"columnSpan",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{v.displayName="FormItem",v.__docgenInfo={description:`The FormItem (ui5-form-item) represents pair of a label and
one or more components (text or text fields), associated to it.

### Usage

The FormItem is being used in FormGroup (ui5-form-group) or directly in Form (ui5-form).

### ES6 Module Import

- import`,displayName:"FormItem",props:{children:{defaultValue:null,description:"Defines the content of the component,\nassociated to `labelContent`.\n\n__Supported Node Type/s:__ `Array<HTMLElement>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},labelContent:{defaultValue:null,description:`Defines the label of the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="labelContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:"labelContent",required:!1,type:{name:"UI5WCSlotsNode"}},columnSpan:{defaultValue:{value:"undefined"},description:`Defines the column span of the component,
e.g how many columns the component should span to.

**Note:** The column span should be a number between 1 and the available columns of the FormGroup (when items are placed in a group)
or the Form. The available columns can be affected by the FormGroup#columnSpan and/or the Form#layout.
A number bigger than the available columns won't take effect.`,name:"columnSpan",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{y as F,g as a,v as b};

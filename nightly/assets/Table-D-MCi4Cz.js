import{c as b,p as v,d as S,s as p,aq as G,m as N,b6 as L,ai as D,db as I,b4 as M,w as A,dc as F,j as e,K as B}from"./iframe-cBdQNv77.js";import{useMDXComponents as R}from"./index-cOSrw8iI.js";import{M as E,C as w,a as U,D as u,A as m}from"./blocks-DJzZLxIJ.js";import"./Tag-C7wlfelX.js";import{M as k}from"./index-3Ka_JXyV.js";import{C as q}from"./ControlsWithNote-BtzrHLWv.js";import{D as P}from"./DocsHeader-vxE0rq5F.js";import{F as O}from"./CommandsAndQueries-DjEzsLYR.js";import{S as V}from"./SubcomponentsSection-BVy4lpQe.js";import{d as W,T as $,a as H,C as _,D as g,G as z,b as x,c as T,e as y}from"./Table.stories-DYgAuULr.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DNcsXuRB.js";import"./sys-enter-2-Bl2cFkII.js";import"./alert-CmJVw_4E.js";import"./index-A4dU9HLI.js";import"./index-_yOX_kaH.js";import"./Link-CQDhsa8i.js";import"./copy-BlVq76a_.js";import"./copy-IvR5q6ZX.js";import"./GitHub-Mark-MErHyXJn.js";import"./TableOfContent-fkRerJpI.js";import"./index-BUV_LApg.js";import"./index-D8zOOSR2.js";import"./index-DBSQPl1H.js";import"./index-BRmdbvU0.js";import"./index-JUan3IFj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpA8OOPe.js";import"./addCustomCSSWithScoping-DRPx1DdS.js";function X(){return b("tr",{part:"group-row",class:"ui5-table-group-row-root","aria-label":this.ariaLabelText,tabindex:this.forcedTabIndex?parseInt(this.forcedTabIndex):void 0,onFocusIn:this._onfocusin,children:b("td",{colspan:this.colSpan,children:b("slot",{})})})}v("@ui5/webcomponents-theming","sap_horizon",async()=>S);v("@ui5/webcomponents-compat","sap_horizon",async()=>W);const K=`:host{display:contents}:host([_busy]) .ui5-table-group-row-root{opacity:.72;pointer-events:none}.ui5-table-group-row-root{height:var(--ui5-v2-16-1_table_group_row_height);border-style:solid;border-color:var(--sapList_TableGroupHeaderBorderColor);border-width:var(--ui5-v2-16-1_table_border_width);background-color:var(--sapList_TableGroupHeaderBackground);color:var(--sapList_TableGroupHeaderTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:var(--ui5-v2-16-1_table_group_row_font-weight)}.ui5-table-group-row-root:focus{outline:var(--ui5-v2-16-1_table_row_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(-1 * var(--ui5-v2-16-1_table_focus_outline_offset))}td{word-break:break-word;vertical-align:middle;padding:.5rem .25rem .5rem 1rem;text-align:start}
`;var i=function(t,o,r,l){var c=arguments.length,a=c<3?o:l===null?l=Object.getOwnPropertyDescriptor(o,r):l,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,o,r,l);else for(var h=t.length-1;h>=0;h--)(d=t[h])&&(a=(c<3?d(a):c>3?d(o,r,a):d(o,r))||a);return c>3&&a&&Object.defineProperty(o,r,a),a},f;let n=f=class extends M{constructor(){super(...arguments),this.mode="None",this.forcedBusy=!1,this.selected=!1,this.tabbableElements=[],this._columnsInfoString=""}get colSpan(){return this._colSpan}get ariaLabelText(){return`${f.i18nBundle.getText($)} ${this.textContent}. ${this.forcedAriaPosition}`}visibleColCount(){let o=this._columnsInfo?.reduce((r,l)=>l.visible?++r:r,0)||0;return this.mode===H.MultiSelect&&o++,o}onBeforeRendering(){!this._columnsInfo||this._columnsInfo.length===0||(this._colSpan=this.visibleColCount())}_onfocusin(o){this.fireDecoratorEvent("_focused",o)}};i([p()],n.prototype,"mode",void 0);i([p({type:Array})],n.prototype,"_columnsInfo",void 0);i([p()],n.prototype,"forcedTabIndex",void 0);i([p({type:Boolean})],n.prototype,"forcedBusy",void 0);i([p()],n.prototype,"forcedAriaPosition",void 0);i([G("@ui5/webcomponents")],n,"i18nBundle",void 0);n=f=i([N({tag:"ui5-table-group-row",styles:K,renderer:D,template:X}),L("_focused",{bubbles:!0})],n);I(n);n.define();const C=F(),J=C?`-${C}`:"",s=A(`ui5-table-group-row${J}`,[],[],[],[]);s.displayName="TableGroupRow";try{s.displayName="TableGroupRow",s.__docgenInfo={description:"The `TableGroupRow` component represents a group row in the `Table`.\n\n__Note:__ This is a UI5 Web Component! [TableGroupRow UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/compat/TableGroupRow) | [Repository](https://github.com/UI5/webcomponents)",displayName:"TableGroupRow",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

__Supported Node Type/s:__ \`Array<Node>\``,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="TableGroupRow",s.__docgenInfo={description:"The `TableGroupRow` component represents a group row in the `Table`.\n\n__Note:__ This is a UI5 Web Component! [TableGroupRow UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/compat/TableGroupRow) | [Repository](https://github.com/UI5/webcomponents)",displayName:"TableGroupRow",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

__Supported Node Type/s:__ \`Array<Node>\``,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function j(t){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...R(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(E,{of:_}),`
`,e.jsx(P,{of:_}),`
`,e.jsx(k,{children:e.jsxs(B,{children:["Using the Table from the ",e.jsx(o.code,{children:"compat"})," package and the ",e.jsx(o.code,{children:"main"})," package in the same application is not supported without scoping the compat package."]}),design:"Critical",hideCloseButton:!0}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(w,{of:g}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(q,{of:g}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"growing-table",children:"Growing Table"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Table"})," with ",e.jsx(o.code,{children:"growing={TableGrowingMode.Scroll}"}),"."]}),`
`,e.jsx(w,{of:z}),`
`,e.jsx(o.h3,{id:"code",children:"Code"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const createRows = (indexOffset) => {
  return new Array(25).fill('').map((_, index) => (
    <TableRow key={\`\${index + indexOffset} - row\`}>
      <TableCell>
        <Label>{index + indexOffset}</Label>
      </TableCell>
      <TableCell>
        <Label>Placeholder</Label>
      </TableCell>
    </TableRow>
  ));
};

const GrowingTable = () => {
  const [rows, setRows] = useState(createRows(1));
  const onLoadMore = () => {
    setRows((prev) => [...prev, ...createRows(prev.length + 1)]);
  };
  return (
    <div style={{ height: '250px', overflow: 'auto' }}>
      <Table
        onLoadMore={onLoadMore}
        growing={TableGrowingMode.Scroll}
        columns={
          <>
            <TableColumn>
              <Label>Column 1</Label>
            </TableColumn>
            <TableColumn>
              <Label>Column 2</Label>
            </TableColumn>
          </>
        }
      >
        {rows}
      </Table>
    </div>
  );
};
`})}),`
`,e.jsx(U,{children:V}),`
`,e.jsx(o.h2,{id:"tablecolumn",children:"TableColumn"}),`
`,e.jsx(u,{of:x}),`
`,e.jsx(m,{of:x}),`
`,e.jsx(o.h2,{id:"tablerow",children:"TableRow"}),`
`,e.jsx(u,{of:T}),`
`,e.jsx(m,{of:T}),`
`,e.jsx(o.h2,{id:"tablegrouprow",children:"TableGroupRow"}),`
`,e.jsx(u,{of:s}),`
`,e.jsx(m,{of:s}),`
`,e.jsx(o.h2,{id:"tablecell",children:"TableCell"}),`
`,e.jsx(u,{of:y}),`
`,e.jsx(m,{of:y}),`
`,e.jsx(O,{})]})}function Se(t={}){const{wrapper:o}={...R(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(j,{...t})}):j(t)}export{Se as default};

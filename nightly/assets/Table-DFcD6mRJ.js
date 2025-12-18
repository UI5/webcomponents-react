import{c as b,p as v,d as S,s as p,aH as G,m as L,az as M,av as D,dh as N,aA as I,w as A,di as B,j as e,J as F}from"./iframe-C-IdMOTF.js";import{useMDXComponents as R}from"./index-8Reouw5a.js";import{M as E,C as w,a as O,D as u,A as m}from"./blocks-D6xfaR3T.js";import"./Tag-BJpDTkrR.js";import{M as P}from"./index-MVeIUVva.js";import{C as k}from"./ControlsWithNote-DUmHhhde.js";import{D as U}from"./DocsHeader-B5-aSgVt.js";import{F as $}from"./CommandsAndQueries-BrMhh7sy.js";import{S as H}from"./SubcomponentsSection-BVy4lpQe.js";import{d as z,T as W,a as q,C as x,D as g,G as V,b as _,c as T,e as y}from"./Table.stories-Xhhgb6g_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BEN_uXq9.js";import"./sys-enter-2-Bq6u4lfD.js";import"./alert-6-dTv6Ft.js";import"./index-D6nYdynl.js";import"./index-CZVRMt16.js";import"./Link-pmU5zsTc.js";import"./copy-DqMtsEgu.js";import"./copy-F55MzcCW.js";import"./GitHub-Mark-CM1egXrj.js";import"./TableOfContent-Dx5PRGec.js";import"./index-hTsIN61t.js";import"./index-D23QN9vi.js";import"./index-gC0QYgWs.js";import"./index-DtAqbdZo.js";import"./index-C0vIcEg8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKAG68DO.js";import"./addCustomCSSWithScoping-D9pslfxW.js";function X(){return b("tr",{part:"group-row",class:"ui5-table-group-row-root","aria-label":this.ariaLabelText,tabindex:this.forcedTabIndex?parseInt(this.forcedTabIndex):void 0,onFocusIn:this._onfocusin,children:b("td",{colspan:this.colSpan,children:b("slot",{})})})}v("@ui5/webcomponents-theming","sap_horizon",async()=>S);v("@ui5/webcomponents-compat","sap_horizon",async()=>z);const J=`:host{display:contents}:host([_busy]) .ui5-table-group-row-root{opacity:.72;pointer-events:none}.ui5-table-group-row-root{height:var(--ui5-v2-17-0_table_group_row_height);border-style:solid;border-color:var(--sapList_TableGroupHeaderBorderColor);border-width:var(--ui5-v2-17-0_table_border_width);background-color:var(--sapList_TableGroupHeaderBackground);color:var(--sapList_TableGroupHeaderTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:var(--ui5-v2-17-0_table_group_row_font-weight)}.ui5-table-group-row-root:focus{outline:var(--ui5-v2-17-0_table_row_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(-1 * var(--ui5-v2-17-0_table_focus_outline_offset))}td{word-break:break-word;vertical-align:middle;padding:.5rem .25rem .5rem 1rem;text-align:start}
`;var s=function(n,o,r,i){var c=arguments.length,a=c<3?o:i===null?i=Object.getOwnPropertyDescriptor(o,r):i,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,o,r,i);else for(var h=n.length-1;h>=0;h--)(d=n[h])&&(a=(c<3?d(a):c>3?d(o,r,a):d(o,r))||a);return c>3&&a&&Object.defineProperty(o,r,a),a},f;let t=f=class extends I{constructor(){super(...arguments),this.mode="None",this.forcedBusy=!1,this.selected=!1,this.tabbableElements=[],this._columnsInfoString=""}get colSpan(){return this._colSpan}get ariaLabelText(){return`${f.i18nBundle.getText(W)} ${this.textContent}. ${this.forcedAriaPosition}`}visibleColCount(){let o=this._columnsInfo?.reduce((r,i)=>i.visible?++r:r,0)||0;return this.mode===q.MultiSelect&&o++,o}onBeforeRendering(){!this._columnsInfo||this._columnsInfo.length===0||(this._colSpan=this.visibleColCount())}_onfocusin(o){this.fireDecoratorEvent("_focused",o)}};s([p()],t.prototype,"mode",void 0);s([p({type:Array})],t.prototype,"_columnsInfo",void 0);s([p()],t.prototype,"forcedTabIndex",void 0);s([p({type:Boolean})],t.prototype,"forcedBusy",void 0);s([p()],t.prototype,"forcedAriaPosition",void 0);s([G("@ui5/webcomponents")],t,"i18nBundle",void 0);t=f=s([L({tag:"ui5-table-group-row",styles:J,renderer:D,template:X}),M("_focused",{bubbles:!0})],t);N(t);t.define();const j=B(),K=j?`-${j}`:"",l=A(`ui5-table-group-row${K}`,[],[],[],[]);l.displayName="TableGroupRow";try{l.displayName="TableGroupRow",l.__docgenInfo={description:"The `TableGroupRow` component represents a group row in the `Table`.\n\n__Note:__ This is a UI5 Web Component! [TableGroupRow UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/compat/TableGroupRow) | [Repository](https://github.com/UI5/webcomponents)",displayName:"TableGroupRow",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

__Supported Node Type/s:__ \`Array<Node>\``,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function C(n){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...R(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(E,{of:x}),`
`,e.jsx(U,{of:x}),`
`,e.jsx(P,{children:e.jsxs(F,{children:["Using the Table from the ",e.jsx(o.code,{children:"compat"})," package and the ",e.jsx(o.code,{children:"main"})," package in the same application is not supported without scoping the compat package."]}),design:"Critical",hideCloseButton:!0}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(w,{of:g}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(k,{of:g}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"growing-table",children:"Growing Table"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Table"})," with ",e.jsx(o.code,{children:"growing={TableGrowingMode.Scroll}"}),"."]}),`
`,e.jsx(w,{of:V}),`
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
`,e.jsx(O,{children:H}),`
`,e.jsx(o.h2,{id:"tablecolumn",children:"TableColumn"}),`
`,e.jsx(u,{of:_}),`
`,e.jsx(m,{of:_}),`
`,e.jsx(o.h2,{id:"tablerow",children:"TableRow"}),`
`,e.jsx(u,{of:T}),`
`,e.jsx(m,{of:T}),`
`,e.jsx(o.h2,{id:"tablegrouprow",children:"TableGroupRow"}),`
`,e.jsx(u,{of:l}),`
`,e.jsx(m,{of:l}),`
`,e.jsx(o.h2,{id:"tablecell",children:"TableCell"}),`
`,e.jsx(u,{of:y}),`
`,e.jsx(m,{of:y}),`
`,e.jsx($,{})]})}function Se(n={}){const{wrapper:o}={...R(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(C,{...n})}):C(n)}export{Se as default};

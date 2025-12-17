import{c as $,_ as X,a1 as Y,p as k,d as J,b as Q,az as K,m as _,av as Z,aA as O,ap as U,aH as ee,fP as ne,w as L,s as V,aq as te,j as n}from"./iframe-bzWujj58.js";import{useMDXComponents as G}from"./index-BCWfYBG3.js";import{M as oe,C as u,a as ie,D as c,A as d}from"./blocks-X5VJ78n5.js";import"./Tag-CVKVqceK.js";import"./index-CSD4D-IO.js";import{C as le}from"./ControlsWithNote-COjTHVw-.js";import{D as se}from"./DocsHeader-RPqrqGlV.js";import{F as ae}from"./CommandsAndQueries-CSnnb9h_.js";import{S as re}from"./SubcomponentsSection-BVy4lpQe.js";import{i as ce,a as de,f as he,e as R,g as y,c as j,d as v}from"./index-CdqCGwI2.js";import{C as A,D as M,G as pe,W as ue,V as be,w as me,d as fe,T as I,a as N,b as D}from"./Table.stories-COMkY2GH.js";import{T as H}from"./index-Dz7Fx2dF.js";import"./ai-BMBb0NQA.js";import{T as B}from"./index-rmX67v2a.js";import{T as P}from"./index-D7XKture.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C9FM1h13.js";import"./sys-enter-2-BEIn8VDt.js";import"./alert-3fLrr5gT.js";import"./index-CUs-JjpA.js";import"./index-CBomhFI_.js";import"./Link-DZnymjml.js";import"./copy-CIFT9wWr.js";import"./copy-GDuXt_K5.js";import"./GitHub-Mark-ClHMqzFf.js";import"./TableOfContent-2Rlpvfej.js";import"./index-1tcJfS2t.js";import"./index-DVLKNd8I.js";import"./index-BfOrv2Q6.js";import"./index-CCshg6zD.js";import"./index-DD0jDMax.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BiRbi5N7.js";import"./addCustomCSSWithScoping-CWEhHtD-.js";import"./query-CzSBusdE.js";import"./overflow-CJItkSIR.js";import"./sort-descending-oyA5Y4oF.js";import"./IconDesign-DXd8PPVF.js";import"./Friends500-CRbR9XAn.js";import"./index-BltXzpxB.js";import"./SegmentedButton-CWgqCnl8.js";import"./navigation-right-arrow-C1871DiJ.js";import"./TableSelectionBase-BDgePyZg.js";function we(){return $(Y,{icon:this._icon,tooltip:this._tooltip,onClick:this._onClick,design:X.Transparent})}k("@ui5/webcomponents-theming","sap_horizon",async()=>J);k("@ui5/webcomponents","sap_horizon",async()=>Q);const ge=`:host{flex-shrink:0}:host([_popin]){margin-inline:.0625rem 0}[ui5-button]{min-width:1.625rem;width:1.625rem;height:1.625rem}[ui5-button]::part(icon){width:1rem;height:1rem}:host([_popin]) [ui5-button]::part(icon){width:.75rem;height:.75rem}
`;var Te=function(l,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(l,e,t,o);else for(var r=l.length-1;r>=0;r--)(a=l[r])&&(i=(s<3?a(i):s>3?a(e,t,i):a(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i};let T=class extends O{onBeforeRendering(){this.toggleAttribute("_popin",!this.parentElement)}_onClick(e){(this.parentElement?.hasAttribute("ui5-table-header-cell")?this:this.getRootNode().host._headerCell.action[0]).fireDecoratorEvent("click",{targetRef:e.target}),e.stopPropagation()}get accessibilityInfo(){return{description:U()?.hasAttribute("ui5-table-cell-base")?this._tooltip:""}}get _tooltip(){return this.getRenderInfo().tooltip}get _icon(){return this.getRenderInfo().icon}};T=Te([K("click",{bubbles:!1}),_({renderer:Z,styles:ge,template:we})],T);const xe=T;var z=function(l,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(l,e,t,o);else for(var r=l.length-1;r>=0;r--)(a=l[r])&&(i=(s<3?a(i):s>3?a(e,t,i):a(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i},x;let w=x=class extends xe{onAfterRendering(){super.onAfterRendering(),this.toggleAttribute("_popin",!this.parentElement?.hasAttribute("ui5-table-header-cell"))}getRenderInfo(){return{icon:"ai",tooltip:x.i18nBundle.getText(ne)}}};z([ee("@ui5/webcomponents")],w,"i18nBundle",void 0);w=x=z([_({tag:"ui5-table-header-cell-action-ai"})],w);w.define();const b=L("ui5-table-header-cell-action-ai",[],[],[],["click"]);b.displayName="TableHeaderCellActionAI";try{b.displayName="TableHeaderCellActionAI",b.__docgenInfo={description:`The \`TableHeaderCellActionAI\` component defines a dedicated AI action for the table column.



__Note:__ This is a UI5 Web Component! [TableHeaderCellActionAI UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TableHeaderCellActionAI) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"TableHeaderCellActionAI",props:{onClick:{defaultValue:null,description:`Fired when a header cell action is clicked.

**Note:** Available since [v2.8.0](https://github.com/UI5/webcomponents/releases/tag/v2.8.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<TableHeaderCellActionAIDomRef, TableHeaderCellActionClickEventDetail>) => void"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var S;(function(l){l.None="None",l.Single="Single",l.Multiple="Multiple"})(S||(S={}));const h=S;var C=function(l,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(l,e,t,o);else for(var r=l.length-1;r>=0;r--)(a=l[r])&&(i=(s<3?a(i):s>3?a(e,t,i):a(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i};let m=class extends O{constructor(){super(),this.mode="Multiple",this.selected="",this.identifier="TableSelection",this._rowsLength=0,this.onClickCaptureBound=this._onClickCapture.bind(this)}onTableActivate(e){this._table=e,this._invalidateTableAndRows()}onExitDOM(){this.mode=h.None,this._invalidateTableAndRows(),this._table=void 0}onBeforeRendering(){this._invalidateTableAndRows()}onTableBeforeRendering(){this.isMultiSelectable()&&this._table&&this._table.headerRow[0]&&this._rowsLength!==this._table.rows.length&&(this._rowsLength=this._table.rows.length,this._table.headerRow[0]._invalidate++),this._table?.removeEventListener("click",this.onClickCaptureBound)}onTableAfterRendering(){this._table?.addEventListener("click",this.onClickCaptureBound,{capture:!0})}isSelectable(){return this.mode!==h.None}isMultiSelectable(){return this.mode===h.Multiple}isRowSelectorRequired(){return this.mode!==h.None}getAriaDescriptionForTable(){}getAriaDescriptionForColumnHeader(){}getRowKey(e){return e.rowKey||""}isSelected(e){if(!this._table||!this.isSelectable())return!1;if(e.isHeaderRow())return this.areAllRowsSelected();const t=this.getRowKey(e);return this.selectedAsArray.includes(t)}hasSelectedRow(){if(!this._table||!this.isSelectable())return!1;const e=this.selectedAsArray;return this._table.rows.some(t=>{const o=this.getRowKey(t);return e.includes(o)})}areAllRowsSelected(){if(!this._table||!this._table.rows.length||this.mode!==h.Multiple)return!1;const e=this.selectedAsArray;return this._table.rows.every(t=>{const o=this.getRowKey(t);return e.includes(o)})}setSelected(e,t,o=!1){this._rangeSelection?.isMouse&&this._rangeSelection.shiftPressed||(e.isHeaderRow()?this._selectHeaderRow(t):this._selectRow(e,t),o&&this.fireDecoratorEvent("change"))}get selectedAsArray(){return this.selected.split(" ").filter(String)}set selectedAsArray(e){this.selected=e.filter(String).join(" ")}get selectedAsSet(){return new Set(this.selectedAsArray)}set selectedAsSet(e){this.selectedAsArray=[...e]}_selectRow(e,t){const o=this.getRowKey(e);if(this.mode===h.Multiple){const s=this.selectedAsSet;s[t?"add":"delete"](o),this.selectedAsSet=s}else this.selected=t?o:""}_selectHeaderRow(e){const t=this.selectedAsSet;this._table.rows.forEach(o=>{const s=this.getRowKey(o);t[e?"add":"delete"](s)}),this.selectedAsSet=t}_invalidateTableAndRows(){this._table&&(this.isSelectable()?this.isMultiSelectable()||(this.selected=this.selectedAsArray.shift()||""):this.selected="",this._table._invalidate++,this._table.headerRow[0]._invalidate++,this._table.rows.forEach(e=>e._invalidate++))}_onkeydown(e){if(!this.isMultiSelectable()||!this._table||!e.shiftKey)return;const t=U();if(!(t?.hasAttribute("ui5-table-row")||this._rangeSelection?.isMouse)){this._stopRangeSelection();return}if(this._rangeSelection){if(e.key==="ArrowUp"||e.key==="ArrowDown"){const o=te(e)?-1:1;this._handleRangeSelection(t,o)}}else{const o=t;this._startRangeSelection(o,this.isSelected(o))}this._rangeSelection&&(this._rangeSelection.shiftPressed=e.shiftKey)}_onkeyup(e,t){this._table&&((!t.hasAttribute("ui5-table-row")||!this._rangeSelection||!e.shiftKey)&&this._stopRangeSelection(),this._rangeSelection&&(this._rangeSelection.shiftPressed=e.shiftKey))}_onClickCapture(e){if(!this._table||this.mode!==h.Multiple)return;if(ce(e)){this._stopRangeSelection();return}if(!de(e)){this._stopRangeSelection();return}const t=he(e.composedPath());if(e.shiftKey&&this._rangeSelection?.isMouse){const o=this._rangeSelection.rows[0],s=this._table.rows.indexOf(o),i=this._table.rows.indexOf(t),a=this.isSelected(o);if(t.shadowRoot?.querySelector("#selection-component")?.toggleAttribute("checked",a),e.stopPropagation(),s===-1||i===-1||t.rowKey===o.rowKey||t.rowKey===this._rangeSelection.rows[this._rangeSelection.rows.length-1].rowKey)return;const r=i-s;this._handleRangeSelection(t,r)}else t&&this._startRangeSelection(t,!this.isSelected(t),!0)}_startRangeSelection(e,t,o=!1){this._rangeSelection={selected:t,isUp:null,rows:[e],isMouse:o,shiftPressed:!1}}_handleRangeSelection(e,t){if(!this._rangeSelection)return;const o=t>0;this._rangeSelection.isUp??=o;const s=o!==this._rangeSelection.isUp&&!this._rangeSelection.isMouse;let i=s&&this.isSelected(e);if(s)this._reverseRangeSelection();else{const a=this._table.rows.indexOf(e),[r,q]=[a,a-t].sort((g,p)=>g-p);i=this._table?.rows.slice(r,q+1).reduce((g,p)=>{const W=!this._rangeSelection?.rows.includes(p),F=this.isSelected(p)!==this._rangeSelection.selected;return W&&this._rangeSelection?.rows.push(p),this._selectRow(p,this._rangeSelection.selected),g||F},i)||!1}i&&this.fireDecoratorEvent("change")}_stopRangeSelection(){this._rangeSelection=null}_reverseRangeSelection(){const e=this._rangeSelection?.rows.pop();e&&this._selectRow(e,!1),this._rangeSelection?.rows.length===1&&(this._rangeSelection.isUp=null)}};C([V()],m.prototype,"mode",void 0);C([V()],m.prototype,"selected",void 0);m=C([_({tag:"ui5-table-selection"}),K("change",{bubbles:!0})],m);m.define();const f=L("ui5-table-selection",["mode","selected"],[],[],["change"]);f.displayName="TableSelection";try{f.displayName="TableSelection",f.__docgenInfo={description:'The `TableSelection` component is used inside the `Table` to add key-based selection capabilities to the `Table`.\n\nThe component offers three selection modes:\n* Single - select a single row.\n* Multiple - select multiple rows.\n* None - no selection active.\n\nAs the selection is key-based, `TableRow` components need to define a unique `row-key` property.\n\n### Usage\n\nThe `TableSelection` component is only used inside the `Table` component as a feature.\nIt has to be slotted inside the `Table` in the `features` slot.\nThe component is not intended to be used as a standalone component.\n\n```html\n<Table>\n	<TableSelection mode="Multiple" slot="features"></TableSelection>\n</Table>\n```\n\n\n\n__Note:__ This is a UI5 Web Component! [TableSelection UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TableSelection) | [Repository](https://github.com/UI5/webcomponents)',displayName:"TableSelection",props:{onChange:{defaultValue:null,description:`Fired when the selection is changed by user interaction.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableSelectionDomRef, never>) => void"}},mode:{defaultValue:{value:'"Multiple"'},description:"Defines the selection mode.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"None"'},{value:'"Single"'},{value:'"Multiple"'}]}},selected:{defaultValue:null,description:"Defines the selected rows separated by a space.",name:"selected",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function E(l){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...G(),...l.components};return n.jsxs(n.Fragment,{children:[n.jsx(oe,{of:A}),`
`,n.jsx(se,{of:A}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"example",children:"Example"}),`
`,n.jsx(u,{of:M}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(le,{of:M}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"growing-table",children:"Growing Table"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Table"})," with growing feature (",n.jsx(e.code,{children:"<TableGrowing onLoadMore={onLoadMore} mode={TableGrowingMode.Scroll} />"}),"):"]}),`
`,n.jsx(u,{of:pe}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"Show static code"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const createRows = (indexOffset) => {
  return new Array(25).fill('').map((_, index) => (
    <TableRow key={\`\${index + indexOffset}-row\`}>
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
    </TableRow>
  ));
};

const GrowingTable = (props) => {
  const [mode, setMode] = useState<TableGrowingPropTypes['mode']>(TableGrowingMode.Button);
  const [rows, setRows] = useState(createRows(1));
  const onLoadMore = () => {
    setRows((prev) => [...prev, ...createRows(prev.length + 1)]);
  };
  return (
    <>
      <Label showColon style={{ marginInlineEnd: '0.5rem' }}>
        Growing <code>mode</code>
      </Label>
      <SegmentedButton
        style={{ marginBlockEnd: '0.5rem' }}
        onSelectionChange={(e) => {
          setMode(e.detail.selectedItems[0].textContent as TableGrowingPropTypes['mode']);
        }}
      >
        <SegmentedButtonItem selected={mode === TableGrowingMode.Scroll}>Scroll</SegmentedButtonItem>
        <SegmentedButtonItem selected={mode === TableGrowingMode.Button}>Button</SegmentedButtonItem>
      </SegmentedButton>
      <div style={{ height: '250px', overflow: 'auto' }}>
        <Table {...props} features={<TableGrowing onLoadMore={onLoadMore} mode={mode} />}>
          {rows}
        </Table>
      </div>
    </>
  );
};
`})})]}),`
`,n.jsx(e.h2,{id:"table-with-row-selection",children:"Table with row selection"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Table"})," with selection features (",n.jsx(e.code,{children:"<TableSelectionSingle />"})," & ",n.jsx(e.code,{children:"<TableSelectionMulti />"}),")"]}),`
`,n.jsx(u,{of:ue}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"Show static code"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`function TableWithRowSelection(props) {
  const [mode, setMode] = useState<'Single' | 'Multi' | 'None'>('Single');
  return (
    <>
      <SegmentedButton
        onSelectionChange={(e) => {
          setMode(e.detail.selectedItems[0].textContent as 'Single' | 'Multi' | 'None');
        }}
      >
        <SegmentedButtonItem selected={'None' === mode}>None</SegmentedButtonItem>
        <SegmentedButtonItem selected={'Single' === mode}>Single</SegmentedButtonItem>
        <SegmentedButtonItem selected={'Multi' === mode}>Multi</SegmentedButtonItem>
      </SegmentedButton>
      <Table
        {...props}
        features={
          <>
            {'Single' === mode && <TableSelectionSingle />}
            {'Multi' === mode && <TableSelectionMulti />}
          </>
        }
      >
        <TableRow>
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
        <TableRow>
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
    </>
  );
}
`})})]}),`
`,n.jsx(e.h2,{id:"table-with-virtualized-rows",children:"Table with virtualized rows"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Table"})," with virtualization feature (",n.jsx(e.code,{children:"<TableVirtualizer {...props) />"}),"):"]}),`
`,n.jsx(u,{of:be}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"Show static code"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// enrich data with \`position\` (if not already available)
const dataLargeWithPosition = dataLarge.map((item, index) => ({
  ...item,
  position: index
}));

function VirtualizedTable(props) {
  const [data, setData] = useState(dataLargeWithPosition.slice(0, 9));

  const handleRangeChange: TableVirtualizerPropTypes['onRangeChange'] = (e) => {
    const { first, last } = e.detail;

    // render two rows before and after the visible area of the table body container
    const overscanCountStart = Math.max(first - 2, 0);
    const overscanCountEnd = Math.min(last + 2, dataLargeWithPosition.length);
    setData(dataLargeWithPosition.slice(overscanCountStart, overscanCountEnd));
  };
  return (
    <Table
      {...props}
      // headerRow + 8 visible rows:
      // 9 * 44px = 396px (content-density: Cozy)
      // 9 * 32px = 288px (content-density: Compact)
      style={{ height: '396px' }}
      headerRow={
        <TableHeaderRow sticky>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Age</TableHeaderCell>
          <TableHeaderCell>Friend Name</TableHeaderCell>
          <TableHeaderCell>Friend Age</TableHeaderCell>
        </TableHeaderRow>
      }
      features={<TableVirtualizer rowCount={500} rowHeight={44} onRangeChange={handleRangeChange} />}
    >
      {data.map((row) => (
        <TableRow key={row.position} position={row.position}>
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
        </TableRow>
      ))}
    </Table>
  );
}
`})})]}),`
`,n.jsx(e.h2,{id:"table-with-row-actions",children:"Table with row actions"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"TableRowAction"})," & ",n.jsx(e.code,{children:"TableRowActionNavigation"}),` component lets you incorporate interactive elements into table rows, enabling users to take actions directly related to each row.
The `,n.jsx(e.code,{children:"rowActionCount"})," prop of the ",n.jsx(e.code,{children:"Table"})," component determines the width of the row action column. A maximum value of 3 is recommended, as exceeding this limit may take up too much space on smaller screens. If the number of row actions exceeds the ",n.jsx(e.code,{children:"rowActionCount"}),", an overflow button will appear, providing access to the additional actions."]}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"invisible"})," prop of row actions allows you to hide specific row actions while preserving their space. This can be useful for consistent alignment of row actions across several rows."]}),`
`,n.jsx(u,{of:me}),`
`,n.jsx(e.h2,{id:"drag-and-rop-table-rows",children:"Drag and rop table rows"}),`
`,n.jsxs(e.p,{children:["Enable drag-and-drop by using the ",n.jsx(e.code,{children:"onMoveOver"})," and ",n.jsx(e.code,{children:"onMove"})," event in combination with the ",n.jsx(e.code,{children:"movable"})," prop on the ",n.jsx(e.code,{children:"TableRow"}),"."]}),`
`,n.jsx(u,{of:fe}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"Show static code"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`function DragAndDropTableRows(props) {
  const [rows, setRows] = useState(dataLargeWithPosition.slice(0, 10));

  const handleMove: TablePropTypes["onMove"] = (e) => {
    const { source, destination } = e.detail;

    setRows((prevRows) => {
      const sourceIndex = prevRows.findIndex(
        (row) => \`\${row.position}\` === source.element.dataset.id,
      );
      const destinationIndex = prevRows.findIndex(
        (row) => \`\${row.position}\` === destination.element.dataset.id,
      );

      if (sourceIndex === -1 || destinationIndex === -1) {
        return prevRows;
      }

      const updatedRows = [...prevRows];
      const [movedRow] = updatedRows.splice(sourceIndex, 1);

      if (destination.placement === "Before") {
        updatedRows.splice(destinationIndex, 0, movedRow);
      } else if (destination.placement === "After") {
        updatedRows.splice(destinationIndex + 1, 0, movedRow);
      }

      return updatedRows;
    });
  };

  const handleMoveOver: TablePropTypes["onMoveOver"] = (e) => {
    const { source, destination } = e.detail;

    if (
      source.element.hasAttribute("ui5-table-row") &&
      destination.element.hasAttribute("ui5-table-row") &&
      destination.placement !== "On"
    ) {
      e.preventDefault();
    }
  };

  return (
    <Table {...props} onMove={handleMove} onMoveOver={handleMoveOver}>
      {rows.map((row) => (
        <TableRow key={row.position} movable data-id={row.position}>
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
        </TableRow>
      ))}
    </Table>
  );
}
`})})]}),`
`,n.jsx(ie,{children:re}),`
`,n.jsx(e.h2,{id:"tableheaderrow",children:"TableHeaderRow"}),`
`,n.jsx(c,{of:R}),`
`,n.jsx(d,{of:R}),`
`,n.jsx(e.h2,{id:"tableheadercell",children:"TableHeaderCell"}),`
`,n.jsx(c,{of:y}),`
`,n.jsx(d,{of:y}),`
`,n.jsx(e.h2,{id:"tableheadercellactionai",children:"TableHeaderCellActionAI"}),`
`,n.jsx(c,{of:b}),`
`,n.jsx(d,{of:b}),`
`,n.jsx(e.h2,{id:"tablerow",children:"TableRow"}),`
`,n.jsx(c,{of:j}),`
`,n.jsx(d,{of:j}),`
`,n.jsx(e.h2,{id:"tablecell",children:"TableCell"}),`
`,n.jsx(c,{of:v}),`
`,n.jsx(d,{of:v}),`
`,n.jsx(e.h2,{id:"tablerowaction",children:"TableRowAction"}),`
`,n.jsx(c,{of:H}),`
`,n.jsx(d,{of:H}),`
`,n.jsx(e.h2,{id:"tablerowactionnavigation",children:"TableRowActionNavigation"}),`
`,n.jsx(c,{of:I}),`
`,n.jsx(d,{of:I}),`
`,n.jsx(e.h2,{id:"tablegrowing",children:"TableGrowing"}),`
`,n.jsx(c,{of:N}),`
`,n.jsx(d,{of:N}),`
`,n.jsx(e.h2,{id:"tableselectionmulti",children:"TableSelectionMulti"}),`
`,n.jsx(c,{of:B}),`
`,n.jsx(d,{of:B}),`
`,n.jsx(e.h2,{id:"tableselectionsingle",children:"TableSelectionSingle"}),`
`,n.jsx(c,{of:P}),`
`,n.jsx(d,{of:P}),`
`,n.jsx(e.h2,{id:"tablevirtualizer-experimental",children:"TableVirtualizer (experimental)"}),`
`,n.jsx(c,{of:D}),`
`,n.jsx(d,{of:D}),`
`,n.jsx(e.h2,{id:"tableselection-deprecated",children:"TableSelection (deprecated)"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Deprecated!"})}),`
`,n.jsx(c,{of:f}),`
`,n.jsx(d,{of:f}),`
`,n.jsx(ae,{})]})}function bn(l={}){const{wrapper:e}={...G(),...l.components};return e?n.jsx(e,{...l,children:n.jsx(E,{...l})}):E(l)}export{bn as default};

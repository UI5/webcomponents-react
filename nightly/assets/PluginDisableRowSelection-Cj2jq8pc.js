import{j as e}from"./iframe-BQ3gAAxx.js";import{useMDXComponents as n}from"./index-B1lAiT1q.js";import{I as r}from"./CommandsAndQueries-wegYoAqu.js";import{M as s,C as l}from"./blocks-n6pvGDI_.js";import"./Tag-eC6SmQhc.js";import"./index-DjTon6of.js";import"./copy-Da1BKYtz.js";import{F as a}from"./Footer-wX_u0Ai_.js";import"./PageNotFound-CYbLq2oD.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DHA_F5qe.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Cgpq4OBn.js";import"./index-C1GISjTX.js";import"./index-C1cP6C82.js";import"./index-C8VczBe0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D1UPUp-J.js";import"./addCustomCSSWithScoping-KaZd0g7m.js";import"./index-BlPBwMrJ.js";import"./index-CLyjGvZV.js";import"./index-C6vnN5EE.js";import"./information-D7DVbQHJ.js";import"./sys-enter-2-QGEZX0U8.js";import"./alert-BvhbOdWs.js";import"./index-D6YjU4up.js";import"./Illustrations-YW4WoylE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cgr_V9pk.js";import"./delete-B6_hTJQ_.js";import"./settings-DUK8lwbJ.js";import"./NoData-5eoSlwNL.js";import"./NoFilterResults-BOIQ7ol6.js";import"./index-Bbm6z3p5.js";import"./IllustratedMessage-BpFzdB-6.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Bid_y9yL.js";import"./Input-DB2wpgtE.js";import"./ResponsivePopoverCommon.css-CC0bbdzt.js";import"./ValueStateMessage.css-BlOapXyA.js";import"./Suggestions.css-CcnsH7PN.js";import"./ListBoxItemGroupTemplate-Dbwacnf1.js";import"./ComboBoxItemGroup-oYKwIYDA.js";import"./ListItemBaseTemplate-DzmYLBj9.js";import"./Token-DvLrgzld.js";import"./ScrollEnablement-D9U2LTzA.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BG1UM3jC.js";import"./ToggleButton-DhG8SGBd.js";import"./multiselect-all-DFUBVHZi.js";import"./SuggestionItem-Z2Xj9ATz.js";import"./index-DFONeG0H.js";import"./Option-VW9rfUnY.js";import"./index-D3Bn2LhY.js";import"./SegmentedButton-DPFBAqHi.js";import"./index-DAFt_faK.js";import"./Select-D89U3SMw.js";import"./InvisibleMessage-BdaiEMNx.js";import"./index-C544zsH2.js";import"./index-D-vaAKbP.js";import"./index-CTvmPiFM.js";import"./index-B-bCcjPK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CNAnaid6.js";import"./group-2-DCUAvkdv.js";import"./sort-descending-BF0c-J1b.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BIfxZyVU.js";import"./utils-BFO_diIG.js";import"./index-C8MdlFSW.js";import"./index-CeSkdH1r.js";import"./index-DFzmTknk.js";import"./navigation-down-arrow-d6rfL2OJ.js";import"./navigation-right-arrow-KxkafEWL.js";import"./navigation-right-arrow-CvUTBkz2.js";import"./useCurrentTheme-DgCT3HCc.js";import"./index-BVQJgoCn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D-PuQ608.js";import"./paper-plane-B51hNZbE.js";import"./index-l5pE6pVW.js";import"./less-Ru56gMhO.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(r,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Deprecated!"})," It is not recommended to disable table rows, mainly because of the following reasons:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Users are not informed why items cannot be selected."}),`
`,e.jsx(o.li,{children:"ARIA lacks built-in support for selective item selection, complicating accessibility."}),`
`,e.jsx(o.li,{children:"Consistency to other applications which do not offer disabled items."}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:["With the ",e.jsx(o.code,{children:"useRowDisableSelection"})," it's possible to disable the selection of specific rows. It can receive two types of parameters:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"string"}),": Defines the key in the dataset for disabling rows. If the value of the key is ",e.jsx(o.code,{children:"true"}),", then the row will not be selectable."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Function(row) => boolean"}),": Programmatically disable rows for selection. The function receives the current row as parameter."]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"}),' The "Select All" checkbox is not available with this hook.']}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Using this hook in combination with the ",e.jsx(o.code,{children:"useIndeterminateRowSelection"})," hook is not supported!"]}),`
`,e.jsx(l,{sourceState:"none",of:m}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const disableRowFunc = (row) => row.original.age < 40;
const tableHooks = [useRowDisableSelection(disableRowFunc)]; // this array should be memoized

const WithFunctionParameter = () => {

  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};

`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const data = [
  {
    name: "Peter Franco",
    age: 22,
    //...
    disableSelection: Math.random() < 0.5,
  },
  //...
];
const tableHooks = [useRowDisableSelection("disableSelection")]; // this array should be memoized

const WithStringParameter = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};

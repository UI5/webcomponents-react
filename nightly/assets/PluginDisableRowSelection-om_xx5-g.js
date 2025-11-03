import{j as e}from"./iframe-Xz6qaemo.js";import{useMDXComponents as n}from"./index-BLh1nTrf.js";import{I as r,F as s}from"./CommandsAndQueries-oG0MSLdr.js";import{M as l,C as a}from"./blocks-_9vvjoio.js";import"./Tag-B2Pydg-J.js";import"./index-_ZnAwLWJ.js";import"./copy-de1br5ux.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Cr2R-Mua.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CnWkVA6r.js";import"./index-AGYmHzMg.js";import"./index-CxA_57ir.js";import"./Link-H0aejI1H.js";import"./index-DlKRlgNQ.js";import"./index-CDFp-rVG.js";import"./index-B7c7-SiX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D2LdFPij.js";import"./addCustomCSSWithScoping-DGLLVgG9.js";import"./index-BtaCUQLs.js";import"./information-UOioa2-U.js";import"./sys-enter-2-03pme12N.js";import"./alert-BPtSnw9a.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CYNlcEMB.js";import"./delete-C5Afcmz_.js";import"./settings-DsuqLvMX.js";import"./NoData-BX0HAX4c.js";import"./IllustratedMessage-r6efCPOB.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CmEzTzKT.js";import"./index-Bo6AI3A0.js";import"./index-ByQ70acs.js";import"./slim-arrow-down-kuRpxWkz.js";import"./Input-BsnqiEQ7.js";import"./ResponsivePopoverCommon.css-gF0WoKZh.js";import"./ValueStateMessage.css-bt6X1_t1.js";import"./Suggestions.css-9dRS8B2y.js";import"./ListBoxItemGroupTemplate-RPkQEUFS.js";import"./ComboBoxItemGroup-uYagQgUR.js";import"./ListItemBaseTemplate-Cqk-eK-r.js";import"./Token-BXAB4gvC.js";import"./ScrollEnablement-BYIXzTaU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cv-glKj0.js";import"./ToggleButton-B0n92tMf.js";import"./SuggestionItem-BhiiFS2M.js";import"./index-DwqlJH6F.js";import"./Option-CUa_Ltzi.js";import"./index-CD5txzhS.js";import"./SegmentedButton-ZAk0VihI.js";import"./index-BAFzivYh.js";import"./Select-Dn1X-1Tb.js";import"./InvisibleMessage-zP1bmMm8.js";import"./slim-arrow-down-DITXjxiP.js";import"./index-Ds3SKLSX.js";import"./index-C9RuyfPL.js";import"./index-ClQp6b9m.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CluGEagr.js";import"./group-2-BxBgglbL.js";import"./sort-descending-lD1YgKhD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DZINQXwv.js";import"./utils-_BVayb1h.js";import"./index-BX-N77aH.js";import"./index-CqNjI8pt.js";import"./index-BaPIYtFn.js";import"./navigation-down-arrow-CgS7x-g2.js";import"./navigation-right-arrow-KPChvtX3.js";import"./navigation-right-arrow-DhEgrzw3.js";import"./useCurrentTheme-CuRUX4rr.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Ga4iz5tb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BOxscssR.js";import"./paper-plane-DKmOT4rW.js";import"./index-TaZnrIva.js";import"./less-C2rIQ98G.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(a,{sourceState:"none",of:m}),`
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
`,e.jsx(s,{})]})}function Xe(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};

import{j as e}from"./iframe-Cg-RuwYg.js";import{useMDXComponents as n}from"./index-CqVZQP5J.js";import{I as r}from"./CommandsAndQueries-CCNeSOJY.js";import{M as s,C as l}from"./blocks-De0pSozH.js";import"./Tag-V3n4GJl9.js";import"./index-BHGbu9W7.js";import"./copy-BXGKGRUx.js";import{F as a}from"./Footer-CTf-mOt6.js";import"./PageNotFound-DwqRWqRN.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CrfV9ygo.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-C3bBlraS.js";import"./index-DVELchH2.js";import"./index-YSls2zGx.js";import"./index-DGDw3Svj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgpxYdce.js";import"./addCustomCSSWithScoping-Bd0YAyTr.js";import"./index-BxFP3rc9.js";import"./index-nSwdNT12.js";import"./index-B6oJNk8s.js";import"./information-qBgjFYpj.js";import"./sys-enter-2-DSPEUkAA.js";import"./alert-DJst6O04.js";import"./index-CY8SZPoP.js";import"./Illustrations-v3WzxnkA.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CIAi3j86.js";import"./delete-C-KI_7kq.js";import"./settings-oIRtvoda.js";import"./NoData-BDP_IEEg.js";import"./NoFilterResults-BlWrxx-U.js";import"./index-BB6w120D.js";import"./IllustratedMessage-BYrs_IcW.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CSeqepqv.js";import"./Input-C-2HhvGM.js";import"./ResponsivePopoverCommon.css-D2lSx7rm.js";import"./ValueStateMessage.css-DkN6FOwk.js";import"./Suggestions.css-BDGZmoU-.js";import"./ListBoxItemGroupTemplate-u13clP1g.js";import"./ComboBoxItemGroup-LcR8oFEr.js";import"./ListItemBaseTemplate-ChIWqw4H.js";import"./Token-DxKy8YYq.js";import"./ScrollEnablement-c_lcpA4D.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C1sqpTZP.js";import"./ToggleButton-BKT35s8c.js";import"./multiselect-all-yY1Gjh0M.js";import"./SuggestionItem-D9zhQdWy.js";import"./index-mKdHU01S.js";import"./Option-D2OLWFsd.js";import"./index-BrHam2mh.js";import"./SegmentedButton-fSm6hy8-.js";import"./index-Cuyb1IhG.js";import"./Select-D9yh6VdF.js";import"./InvisibleMessage-CoET6IX3.js";import"./index-xU6WKMgQ.js";import"./index-CMm8P10u.js";import"./index-CB3jgnxJ.js";import"./index-Cqp8XBPr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-2LEP3fdj.js";import"./group-2-BapK3mru.js";import"./sort-descending-B5w5ciW-.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-fpUgSqmh.js";import"./utils-D0-Jxfsv.js";import"./index-O6DHecp5.js";import"./index-CjXvbdRi.js";import"./index-Dv53xPDI.js";import"./navigation-down-arrow-AwB9VPOC.js";import"./navigation-right-arrow-DLzJRB6J.js";import"./navigation-right-arrow-Cg4BQbAg.js";import"./useCurrentTheme-B667EFhU.js";import"./index-inHBzG2X.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DNsGO6Wo.js";import"./paper-plane-DMimrq6_.js";import"./index-wdWM-9oK.js";import"./less-BSoK1MPR.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

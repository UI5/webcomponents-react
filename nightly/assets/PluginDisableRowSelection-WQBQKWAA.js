import{j as e}from"./iframe-aMG4Hi1W.js";import{useMDXComponents as n}from"./index-BxeVDhrM.js";import{I as r}from"./CommandsAndQueries-BfziQu2M.js";import{M as s,C as l}from"./blocks-DBdj8k-3.js";import"./Tag-DjBNrtqu.js";import"./index-BneSHkIo.js";import"./copy-WJgdbAvd.js";import{F as a}from"./Footer-CaqpNArb.js";import"./PageNotFound-BtQ0dC4g.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Dbp5t2xm.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CIXppVOK.js";import"./index-D79dGm1P.js";import"./index-CRZddsOj.js";import"./index-D40aHtue.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-NZCpAmvM.js";import"./addCustomCSSWithScoping-DZGBI863.js";import"./index-S-kDMFzJ.js";import"./index-D8GAgpXJ.js";import"./index-CkonQXRu.js";import"./information-CeS9aeh9.js";import"./sys-enter-2-qcEAkOuO.js";import"./alert-a4vfwAyT.js";import"./index-BkkgvrV5.js";import"./Illustrations-Dkeiu4Tv.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BoihuItE.js";import"./delete-Bhzd3ed8.js";import"./settings-D9jXjAvQ.js";import"./NoData-B5lI_Sae.js";import"./NoFilterResults-93txLrZv.js";import"./index-BrFjI7RY.js";import"./IllustratedMessage-AZ7xK1kI.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-1_stmY84.js";import"./Input-DMXWEknM.js";import"./ResponsivePopoverCommon.css-CysXn5xC.js";import"./ValueStateMessage.css-yHzBSpV4.js";import"./Suggestions.css-MgO-ysCw.js";import"./ListBoxItemGroupTemplate-D2YpWlf4.js";import"./ComboBoxItemGroup-CaiNesJa.js";import"./ListItemBaseTemplate-D4Q6p7GN.js";import"./Token-B3caBydG.js";import"./ScrollEnablement-CcG50b_d.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BOysNTzL.js";import"./ToggleButton-oEmebjQG.js";import"./multiselect-all-CLqAkhmq.js";import"./SuggestionItem-DSX8SwVI.js";import"./index-Dwckrray.js";import"./Option-C2UhMZDs.js";import"./index-Cv9nYKsA.js";import"./SegmentedButton-SSHoZn7s.js";import"./index-DBk_motw.js";import"./Select-DPhTn-YG.js";import"./InvisibleMessage-dc5EYpz-.js";import"./index-CATxM_c8.js";import"./index-DDx0pcjW.js";import"./index-Bz8OEacs.js";import"./index-BZDIEYti.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DSQMhsPH.js";import"./group-2-5PvLHLNv.js";import"./sort-descending-BEfEPQGH.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CmpjBeDB.js";import"./utils-CLsYPiKt.js";import"./index-MCFemGTY.js";import"./index-CC_WR0o2.js";import"./index-wXOo97ET.js";import"./navigation-down-arrow-lQMnprhK.js";import"./navigation-right-arrow-CgEvW-xF.js";import"./navigation-right-arrow-Cuz2dorW.js";import"./useCurrentTheme-5CUir0cJ.js";import"./index-DEW9r0dY.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D2FLcBfN.js";import"./paper-plane-p0ZMvhfl.js";import"./index-CMj2nAyN.js";import"./less-CUviCfrH.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

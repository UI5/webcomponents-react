import{j as e}from"./iframe-DGliVLqx.js";import{useMDXComponents as n}from"./index-BKdQ_dPP.js";import{I as r,F as s}from"./CommandsAndQueries-DhC-K5aV.js";import{M as l,C as a}from"./blocks-DSVMoi0f.js";import"./Tag-D0qHMP--.js";import"./index-CUMj3eTR.js";import"./copy-BXMLotg5.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Di1JYyty.js";import"./preload-helper-PPVm8Dsz.js";import"./index-0zoKCck7.js";import"./index-DDYQS3It.js";import"./index-C2z7U0T0.js";import"./Link-NPuKH9vo.js";import"./index-xskusYgR.js";import"./index-usRBaxBR.js";import"./index-Bnhuo37k.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xhvQd63o.js";import"./addCustomCSSWithScoping-H3JndsVD.js";import"./index-C-ihtk73.js";import"./information-DwX5G7SH.js";import"./sys-enter-2-CLhjZKEg.js";import"./alert-D8WWgafc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BPXdiIGy.js";import"./delete-VNiEmKzB.js";import"./settings-Bn4IMpxs.js";import"./NoData-CrO-Ojbp.js";import"./IllustratedMessage-CQ-pThL8.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-zmPXMY8f.js";import"./index-BPpKon_v.js";import"./index-ZlqYo9cE.js";import"./slim-arrow-down-BPCmfgSQ.js";import"./Input-B1uSH_6j.js";import"./ResponsivePopoverCommon.css-C-Hps5ad.js";import"./ValueStateMessage.css-Dg_RR3hb.js";import"./Suggestions.css-OrfoYcSp.js";import"./ListBoxItemGroupTemplate-B1B8Njil.js";import"./ComboBoxItemGroup-CFqLv33P.js";import"./ListItemBaseTemplate-BLL1fYXv.js";import"./Token-BYnYPiQ0.js";import"./ScrollEnablement-7T92gtzO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DMz5O0cu.js";import"./ToggleButton-gLJIOvzQ.js";import"./SuggestionItem-B0HnLZ2a.js";import"./index-JZkeV-N1.js";import"./Option-BLZmkEGm.js";import"./index-DgRC1GtG.js";import"./SegmentedButton-BgAef3sS.js";import"./index-CDBfsg8A.js";import"./Select-DlS9_dRk.js";import"./InvisibleMessage-CRsDkV-1.js";import"./slim-arrow-down-DPwEh6bg.js";import"./index-DW5AkRqQ.js";import"./index-4N3HClhe.js";import"./index-B9jV6fm0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-iCWrcMv0.js";import"./group-2-BiBRlmiZ.js";import"./sort-descending-CwrGqsAr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BuqEh9jI.js";import"./utils-VIsRdQMv.js";import"./index-DN3oVk97.js";import"./index-mOI0MCrO.js";import"./index-DGwcjkeH.js";import"./navigation-down-arrow-Bi_8NERP.js";import"./navigation-right-arrow-CAlrOhev.js";import"./navigation-right-arrow-Cb1EEugd.js";import"./useCurrentTheme-CcMg6oDL.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BUCpswoL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CbsPXVbG.js";import"./paper-plane-Czf94RLw.js";import"./index-Bl0RftRs.js";import"./less-DTZLBQaX.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

import{j as e}from"./iframe-DvHwewhR.js";import{useMDXComponents as n}from"./index-CLaogw5S.js";import{I as r,F as s}from"./CommandsAndQueries-BNdncSiU.js";import{M as l,C as a}from"./blocks-CB2I7-76.js";import"./Tag-CbT4PDaW.js";import"./index-Bt09l3yh.js";import"./copy-CCEG4Gow.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Dd_rnw90.js";import"./preload-helper-PPVm8Dsz.js";import"./index-KqEBtHRf.js";import"./index-BPXy8zzT.js";import"./index-CdEjZa35.js";import"./Link-BbkEIv5w.js";import"./index-Dm8v7iX1.js";import"./index-BcAV-ghG.js";import"./index-BpY-7uI8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CoI2TKPf.js";import"./addCustomCSSWithScoping-B6Lor8tu.js";import"./index-Dxi3lBUy.js";import"./information-CIIJNTCs.js";import"./sys-enter-2-CzO95d9X.js";import"./alert-Dwvb1Up2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DiieVpdk.js";import"./delete-C50WcJDY.js";import"./settings-DvTsYRr7.js";import"./NoData-iB_8MDPa.js";import"./IllustratedMessage-oVo54I0H.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-cHrD6kwg.js";import"./index-CEYEmD8k.js";import"./index-8-MFD30_.js";import"./slim-arrow-down-BCqe8rnW.js";import"./Input-5FKrcxfj.js";import"./ResponsivePopoverCommon.css-CyL8R70X.js";import"./ValueStateMessage.css-BKuLTXW_.js";import"./Suggestions.css-Bkx-OrvG.js";import"./ListBoxItemGroupTemplate-CJ4lliK3.js";import"./ComboBoxItemGroup-4ruschY4.js";import"./ListItemBaseTemplate-T-VZoBk6.js";import"./Token-Z5rUiF0C.js";import"./ScrollEnablement-BGx-icSx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BRn_nQZN.js";import"./ToggleButton-CNBbGQUy.js";import"./SuggestionItem-D9PSkBzC.js";import"./index-B_6zM4N5.js";import"./Option-B4P7V8L-.js";import"./index-D86-Sydy.js";import"./SegmentedButton-Drzzk-Ka.js";import"./index-CzCKZDhR.js";import"./Select-CiA18WXr.js";import"./InvisibleMessage-zD0IVsFW.js";import"./slim-arrow-down-DzbDBKGu.js";import"./index-BZCe37Rq.js";import"./index-pKYM4Amv.js";import"./index-Cl1O2yFh.js";import"./index-BtAgcYwE.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bp1zhNyd.js";import"./group-2-CzlS2QWU.js";import"./sort-descending-B3IM8fpN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D_C7dAq5.js";import"./utils-D_wMeGo0.js";import"./index-CwfhL7TS.js";import"./index-DTHM9nkb.js";import"./index-uElYT7C3.js";import"./navigation-down-arrow-CvLDjJLV.js";import"./navigation-right-arrow-BYbNeqhe.js";import"./navigation-right-arrow-CCD3zipp.js";import"./useCurrentTheme-B8H1HpgT.js";import"./index-BOCVDdbZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C4H1iq0n.js";import"./paper-plane-DmQ3DckA.js";import"./index-DegyXyKA.js";import"./less-CIWKEBFR.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

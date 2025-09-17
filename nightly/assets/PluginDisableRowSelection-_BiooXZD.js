import{j as e}from"./iframe-_UyBg_Hl.js";import{useMDXComponents as n}from"./index-DEEVvvo3.js";import{I as r,F as s}from"./CommandsAndQueries-0B2XTB0a.js";import{M as l,C as a}from"./blocks-CYzyNaRH.js";import"./Tag-CQlNZs2z.js";import"./index-5woB_pVn.js";import"./copy-BX3zmcvZ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-REkTP7LB.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DpskCw-c.js";import"./index-e_5k1_Nn.js";import"./index-DXgH8OvD.js";import"./Link-5ArX67S2.js";import"./addCustomCSSWithScoping-BV_2mez6.js";import"./index-LcJnWxTb.js";import"./index-x1moOr2G.js";import"./index-CbWaderx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-SEMy8FFe.js";import"./index-CCQAf2jY.js";import"./information-DYJp_bgk.js";import"./sys-enter-2-Bc61YsW4.js";import"./alert-Vjb3s5VB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BRPDjZI-.js";import"./delete-feXjq1P0.js";import"./settings-CfbDn0b2.js";import"./NoData-KNRhNzoE.js";import"./IllustratedMessage-BS_1IYHK.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-TH_0UP1M.js";import"./index-PnFbS3U_.js";import"./slim-arrow-down-qdV-4r_r.js";import"./Input-DIEfc7NS.js";import"./ResponsivePopoverCommon.css-DjgY9XeO.js";import"./ValueStateMessage.css-xNCah7OI.js";import"./Suggestions.css-pEdA0aWG.js";import"./ListBoxItemGroupTemplate-BUTFv0ua.js";import"./ComboBoxItemGroup-BDmTUb-I.js";import"./ListItemBaseTemplate-BjR5kqUG.js";import"./Token-C36Uamaf.js";import"./ScrollEnablement-BddgiWpw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DYXiefij.js";import"./ToggleButton-BBZPk2By.js";import"./SuggestionItem-CTxEE-_R.js";import"./index-CQKDXWwe.js";import"./Option-0oUm9b3Y.js";import"./index-C8GhuzMH.js";import"./SegmentedButton-D9-1cTAl.js";import"./index-D3Vrf9MZ.js";import"./Select-CFMlTJjs.js";import"./InvisibleMessage-G4E3aSXE.js";import"./slim-arrow-down-BtfHa_9S.js";import"./useIsRTL-BKJsyXLQ.js";import"./index-Q841TG4t.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BerSEzZ1.js";import"./group-2-BbIVBsLi.js";import"./sort-descending-DNDy-Ho_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DD84l_xa.js";import"./utils-DlslC0su.js";import"./index-CevzIQBH.js";import"./index-BX6O9pgn.js";import"./index-Ck9crqy1.js";import"./navigation-down-arrow-CqYoF-4_.js";import"./navigation-right-arrow-HJTsoaPp.js";import"./navigation-right-arrow-D_O0ENz8.js";import"./useCurrentTheme-BVwt7H5k.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BWBgMRln.js";import"./debounce-D7W5PopO.js";import"./paper-plane-ZhsZU26w.js";import"./index-DjxLOnDD.js";import"./less-s7L_t8AQ.js";import"./index-BCeKQLJ1.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(s,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};

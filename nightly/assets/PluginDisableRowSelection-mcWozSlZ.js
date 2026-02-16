import{j as e}from"./iframe-COmYM7FM.js";import{useMDXComponents as n}from"./index-nJK3ZT8W.js";import{I as r,F as s}from"./CommandsAndQueries-BOWLtTE6.js";import{M as l,C as a}from"./blocks-DAY1TuCU.js";import"./Tag-C7vo2194.js";import"./index-8dZG1YHw.js";import"./copy-CXZAgH3a.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DVhjw13G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bf48pKls.js";import"./index-Baj766Uq.js";import"./index-YGBVCLbI.js";import"./Link-CcuckqWN.js";import"./index-C84ZyqAr.js";import"./index-WRRg6L2_.js";import"./index-CGzRflPR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJJkccm1.js";import"./addCustomCSSWithScoping-CPOeZ7S_.js";import"./index-DFr8Hmr1.js";import"./information-le6myuh6.js";import"./sys-enter-2-CL75I8bf.js";import"./alert-lhOUxaTm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CdbjcEwi.js";import"./delete-C5z8HYGA.js";import"./settings-B_K-MLff.js";import"./NoData-CVSMoMaA.js";import"./IllustratedMessage-CLKrxT4u.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-hcxm4ff3.js";import"./index-Dsh65RiT.js";import"./index-BIVMAjf6.js";import"./slim-arrow-down-jGOJjhpo.js";import"./Input-Bu6vC63z.js";import"./ResponsivePopoverCommon.css-C4KWqDDR.js";import"./ValueStateMessage.css-DI3W06n_.js";import"./Suggestions.css-CPV1YgiF.js";import"./ListBoxItemGroupTemplate-BMlbPmoD.js";import"./ComboBoxItemGroup-FACN2vTy.js";import"./ListItemBaseTemplate-B6EaFX9g.js";import"./Token-CGmzQJS_.js";import"./ScrollEnablement-DvHuSSVb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BflPf8Ge.js";import"./ToggleButton-CsElF1rR.js";import"./SuggestionItem-Dd6fqolr.js";import"./index-D0YWeYAy.js";import"./Option-CKR1byVj.js";import"./index-BQf3vQDP.js";import"./SegmentedButton-CvpabKGu.js";import"./index-Bw_-eraM.js";import"./Select-B6eJ5Vgx.js";import"./InvisibleMessage-B-FhaSLI.js";import"./slim-arrow-down-LiCVxuMd.js";import"./index-BDEyyVOr.js";import"./index-CgP-_Bp6.js";import"./index-Ch_J8TT8.js";import"./index-BMQcik-b.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BTnmyxii.js";import"./group-2-Dl5zG8N4.js";import"./sort-descending-gP9HPjaZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Duy0U0pN.js";import"./utils-BXFdgd4W.js";import"./index-CL0ZF9VR.js";import"./index-x1QXYab4.js";import"./index-Bd4CgeRl.js";import"./navigation-down-arrow-DPdzdZ9F.js";import"./navigation-right-arrow-2YTC651d.js";import"./navigation-right-arrow-CcuSN_gl.js";import"./useCurrentTheme-DZHkVItH.js";import"./index-BOFC4ju2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B9v40RyR.js";import"./paper-plane-BK5ynDqO.js";import"./index-DX2-QTbN.js";import"./less-BCKthjss.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

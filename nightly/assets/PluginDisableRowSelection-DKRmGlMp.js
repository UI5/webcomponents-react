import{j as e}from"./iframe-DcVE_SyB.js";import{useMDXComponents as n}from"./index-ABq4qJq0.js";import{I as r,F as s}from"./CommandsAndQueries-DAZF1NdY.js";import{M as l,C as a}from"./blocks-dRinqquH.js";import"./Tag-n6X7AHU2.js";import"./index-DZbYLiGZ.js";import"./copy-qTVa6Rxc.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Co8rL4ED.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C8wszqvC.js";import"./index-C2IoMvXB.js";import"./index-DAALXQvw.js";import"./Link-LjC7fwET.js";import"./index-DF4i9ljf.js";import"./index-DOSi9OrP.js";import"./index-_uRePxm1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BWDpOxWr.js";import"./addCustomCSSWithScoping-CuYK4DUc.js";import"./index-DbL7CbMN.js";import"./information-Cg8MaXEH.js";import"./sys-enter-2-d1HQr0rP.js";import"./alert-CDirY_rF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BS6OM1vm.js";import"./delete-CEfUEJT4.js";import"./settings-Csdc-hH6.js";import"./NoData-blQGosmG.js";import"./IllustratedMessage-BPqXVV7x.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-SHojW0S1.js";import"./index-BsLSp1N8.js";import"./index-C1vx3Aim.js";import"./slim-arrow-down-C_wVi7l8.js";import"./Input-C5nBZh3K.js";import"./ResponsivePopoverCommon.css-DXjeYxpj.js";import"./ValueStateMessage.css-Cej4xjjY.js";import"./Suggestions.css-DxgDwmR8.js";import"./ListBoxItemGroupTemplate-7H6xFp3F.js";import"./ComboBoxItemGroup-huP5bgUR.js";import"./ListItemBaseTemplate-Dwv9uts5.js";import"./Token-_oKw71Y0.js";import"./ScrollEnablement-CIsN21aQ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-NySdr-n5.js";import"./ToggleButton-RUCIrKrh.js";import"./SuggestionItem-CmngfsIg.js";import"./index-C3fVCLar.js";import"./Option-ByjA3kO8.js";import"./index-BsQ6HnSy.js";import"./SegmentedButton-D8dJ17L9.js";import"./index-DIP19kXX.js";import"./Select-CE7FAMxu.js";import"./InvisibleMessage-LUr2HJbj.js";import"./slim-arrow-down-CnwjqAnQ.js";import"./index-CvVxnQ6j.js";import"./index-CXjND3aT.js";import"./index-EYM3a7UD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-o2p0R9uo.js";import"./group-2-Byaog51a.js";import"./sort-descending-Bzv2nAVp.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DeHYvak-.js";import"./utils-CCfE5SJ7.js";import"./index-C2IP9_p7.js";import"./index-DjjA3sYt.js";import"./index-C2XBgPIA.js";import"./navigation-down-arrow-BEehImn2.js";import"./navigation-right-arrow-C1A0KtOV.js";import"./navigation-right-arrow-C8E2_mjg.js";import"./useCurrentTheme-B3cs0LME.js";import"./IndicationColor-DVw-fSM_.js";import"./index-YzO-o16q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BX1EXUwa.js";import"./paper-plane-CuYG0k3S.js";import"./index-Bwa6ZTZc.js";import"./less-BNEp7IO8.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

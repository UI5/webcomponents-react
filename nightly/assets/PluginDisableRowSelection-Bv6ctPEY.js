import{j as e}from"./iframe-CH-Q08Pv.js";import{useMDXComponents as n}from"./index-JegEFivd.js";import{I as r}from"./CommandsAndQueries-Dlnf61eM.js";import{M as s,C as l}from"./blocks-DoFVSa5q.js";import"./Tag-C3CTuin_.js";import"./index-_SHIyctb.js";import"./copy-BJgUS9X2.js";import{F as a}from"./Footer-Cg75ltPq.js";import"./PageNotFound-BZ_kgysZ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DzyMuTxi.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BR4DnOSS.js";import"./index-DTltU74W.js";import"./index-DZ9Ckgsr.js";import"./index-BLeRJ1tU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYciNjaj.js";import"./addCustomCSSWithScoping-D4FzfPo7.js";import"./index-BIHxokcD.js";import"./index-nLMQvitA.js";import"./index-ByjlU9SJ.js";import"./information-DMZ4xbkz.js";import"./sys-enter-2-Cl66mT1N.js";import"./alert-BQx8EBHB.js";import"./index-CiSOiezA.js";import"./Illustrations-DAJG5DXY.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-LiTd2ZkW.js";import"./delete-vdzKKBmV.js";import"./settings--DDZpuL8.js";import"./NoData-TCBac7YU.js";import"./NoFilterResults-B3hOZ6oG.js";import"./index-CvHyOWlh.js";import"./IllustratedMessage-B04gsQS3.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CfSfO62w.js";import"./Input-DZGNZFMo.js";import"./ResponsivePopoverCommon.css-OnbBnNDn.js";import"./ValueStateMessage.css-qBo68dDY.js";import"./Suggestions.css-36Zlw39T.js";import"./ListBoxItemGroupTemplate-DyAZxjIB.js";import"./ComboBoxItemGroup-C63t9shF.js";import"./ListItemBaseTemplate-B29kwNxf.js";import"./Token-soz4pdus.js";import"./ScrollEnablement-DLVPowNZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CuB6Oo--.js";import"./ToggleButton-DH6mKo-3.js";import"./multiselect-all-DIzH_Hk6.js";import"./SuggestionItem-Dl3jHrkd.js";import"./index-CIELwkqh.js";import"./Option-D29MaorT.js";import"./index-DZKWJZME.js";import"./SegmentedButton-8BN62iuX.js";import"./index-ByoHBp1X.js";import"./Select-hgDES0e0.js";import"./InvisibleMessage-B4ZA0kt1.js";import"./index-DaUsDwqK.js";import"./index-CM5OjaUQ.js";import"./index-B3oxdAYp.js";import"./index-BmFCipXX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BJdwb7Qq.js";import"./group-2-rmw-5_bM.js";import"./sort-descending-Cu_tgfiW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DMTuLZOk.js";import"./utils-ClbH9utX.js";import"./index-BRxQsxgX.js";import"./index-DDzMGmJZ.js";import"./index-C49P15Ym.js";import"./navigation-down-arrow-Cg13Qxbd.js";import"./navigation-right-arrow-B2SMAGBd.js";import"./navigation-right-arrow-DuWEFp8z.js";import"./useCurrentTheme-BYLoQCcm.js";import"./index-vyUcFgUm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-O1z4-Zn4.js";import"./paper-plane-C6QryPVC.js";import"./index-BmIER3z7.js";import"./less-BrJUhvMx.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

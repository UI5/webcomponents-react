import{j as e}from"./iframe-B1ai2N1H.js";import{useMDXComponents as n}from"./index-QfN2DAp7.js";import{I as r,F as s}from"./CommandsAndQueries-DatNYL2t.js";import{M as l,C as a}from"./blocks-B9fqlxEZ.js";import"./Tag-EPgIaOhk.js";import"./index-BtwVlylG.js";import"./copy-BJY5YA9D.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BAh5Qb7e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DIMi93Lv.js";import"./index-BqK1QrYY.js";import"./index-B8JztijY.js";import"./Link-DxXALuG4.js";import"./index-BD5BVNKc.js";import"./index-Dq21p-7K.js";import"./index-BL80uiBy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3b7w9-j.js";import"./addCustomCSSWithScoping-BigzftYf.js";import"./index-BZxParGj.js";import"./information-qjJpsO9c.js";import"./sys-enter-2-DLuIUMMQ.js";import"./alert-DxSQeXz_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Xy6kKlpD.js";import"./delete-CKMfo4Xk.js";import"./settings-CsC-4hiH.js";import"./NoData-BVmLwkSE.js";import"./IllustratedMessage-Nr6Didoc.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-4ep3HbjN.js";import"./index-DCqGCf08.js";import"./index-TntUiIag.js";import"./slim-arrow-down-DYHZJ5LG.js";import"./Input-CCHdc6OX.js";import"./ResponsivePopoverCommon.css-_wb5Prd4.js";import"./ValueStateMessage.css-QQOrZXwg.js";import"./Suggestions.css-ya0SvWRa.js";import"./ListBoxItemGroupTemplate-CC17eT-H.js";import"./ComboBoxItemGroup-BvdFX-vq.js";import"./ListItemBaseTemplate-GHiTWt4_.js";import"./Token-DWQMxVAt.js";import"./ScrollEnablement-CYJKPk5p.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-1Y3dmb5L.js";import"./ToggleButton-C38IUONv.js";import"./SuggestionItem-BbC6S69Q.js";import"./index-B2SJJBw5.js";import"./Option-CMzgQwF2.js";import"./index-DOw9MRWj.js";import"./SegmentedButton-DzQuajPs.js";import"./index-DxT3UJLK.js";import"./Select-CLe5Ufw3.js";import"./InvisibleMessage-B9fg8eZE.js";import"./slim-arrow-down-xtIJDA6K.js";import"./index-BKQwlKuo.js";import"./index-AEFVkwvL.js";import"./index-CIaszeCC.js";import"./index-CEbRZ6tf.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CO5NKowA.js";import"./group-2-DPXkxppB.js";import"./sort-descending-r_07bhB8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bs-IgX_t.js";import"./utils-COwwDed4.js";import"./index-sS2AOrHh.js";import"./index-D59qyDlq.js";import"./index-CyY2pIYt.js";import"./navigation-down-arrow-BVW_sj_7.js";import"./navigation-right-arrow-C1avA-LC.js";import"./navigation-right-arrow-H_C30T42.js";import"./useCurrentTheme-Ckxn_kwO.js";import"./index-DJ2gVxdV.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DlOSzz73.js";import"./paper-plane-C_dmmjbE.js";import"./index-C6bXNW4U.js";import"./less-DT3uITo0.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

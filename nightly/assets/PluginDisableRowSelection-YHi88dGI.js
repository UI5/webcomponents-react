import{j as e}from"./iframe-DjyPEesV.js";import{useMDXComponents as n}from"./index-Pyz_59sj.js";import{I as r,F as s}from"./CommandsAndQueries-CflBmGXr.js";import{M as l,C as a}from"./blocks-BJpyRAuR.js";import"./Tag-BDoCQY53.js";import"./index-R19sOJmE.js";import"./copy-E37vjZto.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-5g3jIKu6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ctou3RkN.js";import"./index-D4GABIF8.js";import"./index-JsLIkweC.js";import"./Link-nHS21YG4.js";import"./index-DIAyR9_V.js";import"./index-BBJM4hPn.js";import"./index-u05KfZkG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BW1MFNTm.js";import"./addCustomCSSWithScoping-fFr9nqx3.js";import"./index-CGGAhfVP.js";import"./information-DUvIlTxn.js";import"./sys-enter-2-BNMMIV_0.js";import"./alert-BdGD6eLJ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-PtrV3Mx2.js";import"./delete-DZYRig-7.js";import"./settings-DC1EpgcZ.js";import"./NoData-DdiSsGzY.js";import"./IllustratedMessage-CKlnOgb7.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-U4i8XfCe.js";import"./index-CNsBuXgW.js";import"./index-DY2Rai9n.js";import"./slim-arrow-down-CaFw53zN.js";import"./Input-BZdy6LBO.js";import"./ResponsivePopoverCommon.css-DXeOzHMx.js";import"./ValueStateMessage.css-BmKDb-GX.js";import"./Suggestions.css-C5GlUmJa.js";import"./ListBoxItemGroupTemplate-B_X2fUlx.js";import"./ComboBoxItemGroup-BfNx4b9Y.js";import"./ListItemBaseTemplate-CGBpHG4N.js";import"./Token-CERKwtWD.js";import"./ScrollEnablement-80w6Waas.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CqBB8H1C.js";import"./ToggleButton-sq5iQT6D.js";import"./SuggestionItem-BjJ5fzBJ.js";import"./index-DKn-wdwl.js";import"./Option-BQ6ou2d_.js";import"./index-D4m9Bgxm.js";import"./SegmentedButton-D2TYrx6h.js";import"./index-DPf5ZEwJ.js";import"./Select-CwPYCNeP.js";import"./InvisibleMessage-BV-YL2wk.js";import"./slim-arrow-down-CxX1-7RK.js";import"./index--b5YbzYZ.js";import"./index-BUOYq7SN.js";import"./index-CrmY2ZO8.js";import"./index-Bgg2l2DV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClODWfE8.js";import"./group-2-DPcrYzkY.js";import"./sort-descending-CTRvyWvg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-VEN8hAU2.js";import"./utils-D-4bFYd0.js";import"./index-DuTvknKW.js";import"./index-BCddFEwR.js";import"./index-Kss5k088.js";import"./navigation-down-arrow--9pMM64P.js";import"./navigation-right-arrow-B4wTEztn.js";import"./navigation-right-arrow-DNYuNDO1.js";import"./useCurrentTheme-BSBgMXT1.js";import"./index-lcNTjYV-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-_YfBcCD_.js";import"./paper-plane-CUdav5bq.js";import"./index-7fWe1uut.js";import"./less-B9Odq6DG.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

import{j as e}from"./iframe-C-IdMOTF.js";import{useMDXComponents as n}from"./index-8Reouw5a.js";import{I as r,F as s}from"./CommandsAndQueries-BrMhh7sy.js";import{M as l,C as a}from"./blocks-D6xfaR3T.js";import"./Tag-BJpDTkrR.js";import"./index-MVeIUVva.js";import"./copy-F55MzcCW.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CPyBJT2D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hTsIN61t.js";import"./index-D23QN9vi.js";import"./index-CZVRMt16.js";import"./Link-pmU5zsTc.js";import"./index-gC0QYgWs.js";import"./index-DtAqbdZo.js";import"./index-C0vIcEg8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKAG68DO.js";import"./addCustomCSSWithScoping-D9pslfxW.js";import"./index-D6nYdynl.js";import"./information-BEN_uXq9.js";import"./sys-enter-2-Bq6u4lfD.js";import"./alert-6-dTv6Ft.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CzqtQaIj.js";import"./delete-BvqZMFSA.js";import"./settings-CDRcyP6l.js";import"./NoData-Y4GENK1u.js";import"./IllustratedMessage-BQMS2CJC.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-Dw3tAFYv.js";import"./index-DeBh3_Rd.js";import"./index-Cen1L1VX.js";import"./slim-arrow-down-Donmu_KW.js";import"./Input-DqXRiIGv.js";import"./ResponsivePopoverCommon.css-Cl4QpyHC.js";import"./ValueStateMessage.css-DgQ8yNuY.js";import"./Suggestions.css-dLfodOLN.js";import"./ListBoxItemGroupTemplate-BgP_QYGe.js";import"./ComboBoxItemGroup-Ba7YxW6U.js";import"./ListItemBaseTemplate-DbsIrYt0.js";import"./Token-DlOPFXjK.js";import"./ScrollEnablement-CkJPJ5oY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-dyoPFSMG.js";import"./ToggleButton-DkzxOAA0.js";import"./SuggestionItem-C9UvamUl.js";import"./index-DXyFplVc.js";import"./Option-DeT0HpqA.js";import"./index-KS0YEPKv.js";import"./SegmentedButton-1Sl2D-kX.js";import"./index-C3msFDiq.js";import"./Select-Bu1uNe0q.js";import"./InvisibleMessage-URPy8ZMA.js";import"./slim-arrow-down-C6v2L-5e.js";import"./index-DAfp8Dyw.js";import"./index-B7JTHEbo.js";import"./index-C_F4uQ0w.js";import"./index-DqEr8g6K.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CGmXap7O.js";import"./group-2-CHtxxnqE.js";import"./sort-descending-DEFHMBn-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CN_v3WcV.js";import"./utils-BzZ9vAkg.js";import"./index-CpnMsTOO.js";import"./index-CY8tdRX9.js";import"./index-DTW5vHZS.js";import"./navigation-down-arrow-BC-mTUxY.js";import"./navigation-right-arrow-jxEKhTVI.js";import"./navigation-right-arrow-CYHgJ-zu.js";import"./useCurrentTheme-BRedc0uR.js";import"./index-f47Ux14f.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CFrls0z0.js";import"./paper-plane-Ch6Wl9PD.js";import"./index-Bij2cp4G.js";import"./less-9m4Z2tzD.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

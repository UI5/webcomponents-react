import{j as e}from"./iframe-BMswfRdZ.js";import{useMDXComponents as n}from"./index-MaqCtoEe.js";import{I as r,F as s}from"./CommandsAndQueries-B0EQ2-2W.js";import{M as l,C as a}from"./blocks-BZVeQw2D.js";import"./Tag-BVHvhlCz.js";import"./index-B-ZVjbqr.js";import"./copy-Cy5PMYPR.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-mPff0P6m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cf0lk0Qk.js";import"./index-B-CAKhwh.js";import"./index-FIeWjkuH.js";import"./Link-BGQljDJU.js";import"./index-B7ZM6Wte.js";import"./index-E1nxDY_p.js";import"./index-Dm33NnkB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzwX1HTL.js";import"./addCustomCSSWithScoping-DQLnc9QR.js";import"./index-mp2uLi6B.js";import"./information-1i220cDO.js";import"./sys-enter-2-CawaAm0L.js";import"./alert-uwYQHS-7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DxHk6N33.js";import"./delete-CXm_E0-Y.js";import"./settings-CqqCKJRE.js";import"./NoData-DB0UkPLE.js";import"./IllustratedMessage-xRJ_clt5.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-1oaGXmTl.js";import"./index-Da_vExI8.js";import"./index-gGS5oICH.js";import"./slim-arrow-down-DZiL5RY8.js";import"./Input--pdg4UEC.js";import"./ResponsivePopoverCommon.css-Cys9VWui.js";import"./ValueStateMessage.css-CqCvpxGR.js";import"./Suggestions.css-BsUzn6Ma.js";import"./ListBoxItemGroupTemplate-Oz7T7rjX.js";import"./ComboBoxItemGroup-HGIu0yJL.js";import"./ListItemBaseTemplate-vEHYPQIG.js";import"./Token-D6rP3KDc.js";import"./ScrollEnablement-BFkwZ-6k.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BgY-3qr3.js";import"./ToggleButton-BYaWptBI.js";import"./SuggestionItem-C9jZ74yI.js";import"./index-BD8Cd281.js";import"./Option-BoFss70v.js";import"./index-B6iScKv-.js";import"./SegmentedButton-BHHnez93.js";import"./index-CLHUyLON.js";import"./Select-2IbUasvX.js";import"./InvisibleMessage-DWiN-Q82.js";import"./slim-arrow-down-DVB6jdIA.js";import"./index-Cs0GPsK7.js";import"./index-BWDqCRuT.js";import"./index-IUj7GUsp.js";import"./index-Db9h7yxY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DXLSMFHk.js";import"./group-2-CJwVVc0i.js";import"./sort-descending-Bado19O_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DlkbPsyK.js";import"./utils-CiZ3szIk.js";import"./index-D0owrTnz.js";import"./index-IdbciERE.js";import"./index-DwKn05TT.js";import"./navigation-down-arrow-CWAFdQMV.js";import"./navigation-right-arrow-DFMNvzTi.js";import"./navigation-right-arrow-DhhhdeU2.js";import"./useCurrentTheme-UlPApG1C.js";import"./index-CmchLnb5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BTbpKmVn.js";import"./paper-plane-CcsgPjnp.js";import"./index-Fa-JpXF4.js";import"./less-B6Uo9h2u.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

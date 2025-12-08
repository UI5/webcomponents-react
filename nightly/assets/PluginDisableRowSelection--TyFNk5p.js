import{j as e}from"./iframe-C_rEo4ZD.js";import{useMDXComponents as n}from"./index-dLMhCWaI.js";import{I as r,F as s}from"./CommandsAndQueries-TFkH8H0n.js";import{M as l,C as a}from"./blocks-DvQXQjkC.js";import"./Tag-ZlMS2_of.js";import"./index-B4E4i8qV.js";import"./copy-BTrKUsxF.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DgSgKQOh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bd-vG2gT.js";import"./index-DJ6GK8yt.js";import"./index-Dpn1WNSA.js";import"./Link-B0N3KZaJ.js";import"./index-DMq7DMka.js";import"./index-CG9w7Zbs.js";import"./index-DR-Y0J47.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7u1q_FrR.js";import"./addCustomCSSWithScoping-C6yaVxxt.js";import"./index-DYBTfsDC.js";import"./information-CbbI_Sx9.js";import"./sys-enter-2-BBWU7--K.js";import"./alert-DYblDknT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B_zUtrJj.js";import"./delete-DtTDFgua.js";import"./settings-B6_IIEdU.js";import"./NoData-HFeU9vdV.js";import"./IllustratedMessage-DAhHz2hl.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Dv-Jq1gZ.js";import"./index-vKdyj-Cx.js";import"./index-DWicqfqU.js";import"./slim-arrow-down-Q1-xOpph.js";import"./Input-COIsebiw.js";import"./ResponsivePopoverCommon.css-D3bilPOx.js";import"./ValueStateMessage.css-CDYJlAs8.js";import"./Suggestions.css-yjahHnhL.js";import"./ListBoxItemGroupTemplate-BngMhksN.js";import"./ComboBoxItemGroup-D7NzUjs5.js";import"./ListItemBaseTemplate-Dh7ogNDY.js";import"./Token-BZy6Rg25.js";import"./ScrollEnablement-DM95z1Eg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BINGXEBR.js";import"./ToggleButton-RUOVkV7g.js";import"./SuggestionItem-B5n8pZNS.js";import"./index-CXTiPltu.js";import"./Option-BqwO-aaQ.js";import"./index-C1ZC_OGM.js";import"./SegmentedButton-WYn-A9a6.js";import"./index-YzVMegMk.js";import"./Select-DT2xs0F7.js";import"./InvisibleMessage-C0fd6fX6.js";import"./slim-arrow-down-Dud9vsmt.js";import"./index-DU-o6RSh.js";import"./index-D-Ji_jwM.js";import"./index-CTLp08oh.js";import"./index-vnTdnDSz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-55b-yhx5.js";import"./group-2-COMfsVWc.js";import"./sort-descending-BJZvHW30.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CCJv6-hM.js";import"./utils-rh1His76.js";import"./index-BfJPuqDG.js";import"./index-CYKNWOaQ.js";import"./index-CKHFjLzl.js";import"./navigation-down-arrow-Cz89PnLx.js";import"./navigation-right-arrow-BIVwccgP.js";import"./navigation-right-arrow-xB9Y6ekG.js";import"./useCurrentTheme-YCXbTRxf.js";import"./index-DHVWTc3s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DPLZDSHh.js";import"./paper-plane-BdZdtocj.js";import"./index-OpSSSDwM.js";import"./less-D20nw-Jk.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

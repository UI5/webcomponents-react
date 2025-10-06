import{j as e}from"./iframe-BbmPNBZw.js";import{useMDXComponents as n}from"./index-D87-8-cY.js";import{I as r,F as s}from"./CommandsAndQueries-C-B3vcHW.js";import{M as l,C as a}from"./blocks-B7C-sP0U.js";import"./Tag-DFYl0ftZ.js";import"./index-fQ6fbGsc.js";import"./copy-BgTszgJK.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D4eIu_Ee.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dqb4-3Ox.js";import"./index-upku0ICQ.js";import"./index-DPh3hFjM.js";import"./Link-CATCrkJf.js";import"./index-BaS8undN.js";import"./index-DuOlzjbj.js";import"./index-Cj4eX-xQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRGip9L6.js";import"./addCustomCSSWithScoping-DXbMFExg.js";import"./index-CoFaLD2a.js";import"./information-BpKTV1Df.js";import"./sys-enter-2-Cjjs2hNu.js";import"./alert-DEEsEFWu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BX-2aVfx.js";import"./delete-DJaqBI2v.js";import"./settings-suPn1Nnm.js";import"./NoData-k8ylWlWP.js";import"./IllustratedMessage-QtkSWE--.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DotGN4Y7.js";import"./index-D_AKAMYV.js";import"./index-DeEkJt1e.js";import"./slim-arrow-down-BiuCGCjT.js";import"./Input-BHUHhOmz.js";import"./ResponsivePopoverCommon.css-BxaDEsUM.js";import"./ValueStateMessage.css-BYDbDg0Q.js";import"./Suggestions.css-DZfh_4W3.js";import"./ListBoxItemGroupTemplate-Ce53u2a5.js";import"./ComboBoxItemGroup-DBihqRGm.js";import"./ListItemBaseTemplate-BM3kFwkG.js";import"./Token-DflvgBUB.js";import"./ScrollEnablement-CnRiCY6V.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DaqjNEkx.js";import"./ToggleButton-C3LSC9pu.js";import"./SuggestionItem-eiisW8R3.js";import"./index-DOUHh_Yk.js";import"./Option-CUrZDe04.js";import"./index-BETUsKMg.js";import"./SegmentedButton-Cux8zQoJ.js";import"./index-D3JCLYGZ.js";import"./Select-DW_EjdMU.js";import"./InvisibleMessage-C1GU6Z5A.js";import"./slim-arrow-down-DJqqQ7Uz.js";import"./index-g1hielSz.js";import"./index-BdZUY68T.js";import"./index-BhkJT34d.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DdhG93W-.js";import"./group-2-zFNxt9gh.js";import"./sort-descending-ByihN0-k.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CEU0a68q.js";import"./utils-DWSip9Hp.js";import"./index-BYutBOs4.js";import"./index-Di2jtcE5.js";import"./index-CZcSTKvj.js";import"./navigation-down-arrow-DkGOKBV1.js";import"./navigation-right-arrow-BCm7Xenc.js";import"./navigation-right-arrow-C9_CN0LR.js";import"./useCurrentTheme-uuFazV9G.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bj0B-A9p.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CWRMKF8W.js";import"./paper-plane-uFKcpEyA.js";import"./index-BDhMGars.js";import"./less-BjbU_0bC.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

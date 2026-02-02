import{j as e}from"./iframe-D6FNTQkK.js";import{useMDXComponents as n}from"./index-B6bRqhkI.js";import{I as r,F as s}from"./CommandsAndQueries-BXb9AdOB.js";import{M as l,C as a}from"./blocks-CncoMbCj.js";import"./Tag-BgsP26gD.js";import"./index-TUX9UWDf.js";import"./copy-CV5IiNGP.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BOeh4XmQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTSo6gsw.js";import"./index-Cn0-2HTO.js";import"./index-C01hHOib.js";import"./Link-ECkeIbxq.js";import"./index-i5JoI6q6.js";import"./index-CEtC1hdv.js";import"./index-_w6613cy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-COKdY-da.js";import"./addCustomCSSWithScoping-BKP4itiy.js";import"./index-C8Bzh-c-.js";import"./information-DX0Ia3Tr.js";import"./sys-enter-2-BXq7hn_D.js";import"./alert-Dc1BRwci.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-yi9kxnte.js";import"./delete-CFOKUYe0.js";import"./settings-CfB4e9cX.js";import"./NoData-Dq3tbyi3.js";import"./IllustratedMessage-cjkHzwDQ.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DW0YuRZ7.js";import"./index-CTZpCD3C.js";import"./index-DZv_VOFr.js";import"./slim-arrow-down-CHkc3XG4.js";import"./Input-CWaYFEE0.js";import"./ResponsivePopoverCommon.css-DwSQpbCL.js";import"./ValueStateMessage.css-B-79kasT.js";import"./Suggestions.css-BX_6fSbp.js";import"./ListBoxItemGroupTemplate-D5A0k_8G.js";import"./ComboBoxItemGroup-DgqGaLwi.js";import"./ListItemBaseTemplate-BwKCfdZC.js";import"./Token-CdK57w2s.js";import"./ScrollEnablement-BnyFUzOB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-khyxx9eu.js";import"./ToggleButton-UgNXHRCa.js";import"./SuggestionItem-DmIAT0hW.js";import"./index-Bvo9r74r.js";import"./Option-Bp3m08uY.js";import"./index-B-qqk9Qh.js";import"./SegmentedButton-WJja0alW.js";import"./index-DFLZWraU.js";import"./Select-BsOhyv3Y.js";import"./InvisibleMessage-CuNZ9Vpq.js";import"./slim-arrow-down-BcGJUmQm.js";import"./index-BgVQgXtA.js";import"./index-A1xbEiXK.js";import"./index-5wdnnntn.js";import"./index-CvdFD22I.js";import"./IconDesign-DXd8PPVF.js";import"./filter-8F6Zx2fh.js";import"./group-2-bMLqGL0E.js";import"./sort-descending-c2BT37ev.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-XmEHG45R.js";import"./utils-DbT12vyG.js";import"./index-Lif6Dilg.js";import"./index-1e28FYLT.js";import"./index-D27T-mws.js";import"./navigation-down-arrow-BN5WPv52.js";import"./navigation-right-arrow-DtQeW2Tc.js";import"./navigation-right-arrow-CLKqeinu.js";import"./useCurrentTheme-DXL7KtWf.js";import"./index-CeT2M4uq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BISPhePp.js";import"./paper-plane-CZun4wFx.js";import"./index-CtNicNZp.js";import"./less-By2gp0Gl.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

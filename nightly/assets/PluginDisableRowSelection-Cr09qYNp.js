import{j as e}from"./iframe-BCLHYJgX.js";import{useMDXComponents as n}from"./index-6uEU24p4.js";import{I as r,F as s}from"./CommandsAndQueries-CO5L47ah.js";import{M as l,C as a}from"./blocks-Bs_XR2wS.js";import"./Tag-CyCEbX-5.js";import"./index-BaEPddIL.js";import"./copy-C8KGHNvK.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DD_BHl_O.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cok_5_tC.js";import"./index-Cm3V18u1.js";import"./index-BK_ZHavx.js";import"./Link-Bn4h5ljW.js";import"./index-CCx-58F9.js";import"./index-Bu9oHGEl.js";import"./index-_pVZ4H5C.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoVEwdyY.js";import"./addCustomCSSWithScoping-DNzt28js.js";import"./index-ryNQsvjz.js";import"./information-ddn69F5R.js";import"./sys-enter-2-Clp8AE05.js";import"./alert-bXCG-ij3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-7Zt1rPtU.js";import"./delete-DZ-sv9tn.js";import"./settings-DEZp58uU.js";import"./NoData-Bm6c65Rp.js";import"./IllustratedMessage-CpnLKog-.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-0eiDXkdF.js";import"./index-DHFj9r2s.js";import"./index-CnUVMLwV.js";import"./slim-arrow-down-PQTwOB1y.js";import"./Input-CyIlmGcA.js";import"./ResponsivePopoverCommon.css-BG6tGGqw.js";import"./ValueStateMessage.css-CXTpMNNy.js";import"./Suggestions.css-Bad721NM.js";import"./ListBoxItemGroupTemplate-DHvQR70c.js";import"./ComboBoxItemGroup-Dv-3y-yt.js";import"./ListItemBaseTemplate-BybflgUy.js";import"./Token-C7Z0uXiZ.js";import"./ScrollEnablement-C_6ell_9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CBy1q-np.js";import"./ToggleButton-Ch4ejuj2.js";import"./SuggestionItem-DOMiaiL4.js";import"./index-CsRnbpar.js";import"./Option-BM744F7n.js";import"./index-BKITVOdn.js";import"./SegmentedButton-BMBrktYn.js";import"./index-DgD7lXWr.js";import"./Select-CmILZVDu.js";import"./InvisibleMessage-DnmpScj3.js";import"./slim-arrow-down-DHuMktny.js";import"./index-BwWwsDip.js";import"./index-D0yr6pZg.js";import"./index-BPgVHXij.js";import"./index-P_S_jhxH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bn9RS1kX.js";import"./group-2-BYuBBp9R.js";import"./sort-descending-BJIWTPav.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DlAPMqrc.js";import"./utils-BScKaUIi.js";import"./index-DY7zKARQ.js";import"./index-s-YoLh3T.js";import"./index-CLiMatz4.js";import"./navigation-down-arrow-B2J7F8t-.js";import"./navigation-right-arrow-ClWc3JFi.js";import"./navigation-right-arrow-CByHJpNk.js";import"./useCurrentTheme-BlqUDt0t.js";import"./index-DyAhltwy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ByUnN_uG.js";import"./paper-plane-cWqe5jd6.js";import"./index-Oy3wJsZc.js";import"./less--DX0g4Ek.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

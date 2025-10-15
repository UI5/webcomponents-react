import{j as e}from"./iframe-BV6MX4jP.js";import{useMDXComponents as n}from"./index-BBPLoQd2.js";import{I as r,F as s}from"./CommandsAndQueries-B_NVK97H.js";import{M as l,C as a}from"./blocks-ButdG5ct.js";import"./Tag-DqTS_NIk.js";import"./index-D61UH3oK.js";import"./copy-BuKjNY_z.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-T_cM7jH3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn23lh4B.js";import"./index-BIn6vsDV.js";import"./index-5lJ63Ggw.js";import"./Link-CQBQGD-K.js";import"./index-BeBg5nKE.js";import"./index-BAeh9ZRA.js";import"./index-pEzZy3XJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJJJ49N9.js";import"./addCustomCSSWithScoping-BAR7O9dV.js";import"./index-B6xBDYCv.js";import"./information-D4lwDDvQ.js";import"./sys-enter-2-CNNlkaec.js";import"./alert-D9QVBDgC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DluWfdk1.js";import"./delete-D-tF1QFK.js";import"./settings-nj9vexJs.js";import"./NoData-DatsDwUA.js";import"./IllustratedMessage-wCVUZOEy.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DlJ2uOES.js";import"./index-W67I1HN2.js";import"./index-DzPicj6D.js";import"./slim-arrow-down-CsSTo7HV.js";import"./Input-ChW7yv3W.js";import"./ResponsivePopoverCommon.css-ClpZBCpz.js";import"./ValueStateMessage.css-C_M3aJzp.js";import"./Suggestions.css-CSkW4QfO.js";import"./ListBoxItemGroupTemplate-CRxGMHEE.js";import"./ComboBoxItemGroup-Crq8AFMp.js";import"./ListItemBaseTemplate-BgQ118Dh.js";import"./Token-DBSnoolZ.js";import"./ScrollEnablement-CUGdZ0ua.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C95WGA7x.js";import"./ToggleButton-DZW5zV-q.js";import"./SuggestionItem-D06YVUYK.js";import"./index-stG37gxE.js";import"./Option-CLVxZm0T.js";import"./index-CPiHE6HM.js";import"./SegmentedButton-w_O6Zr0R.js";import"./index-DpOA1UAF.js";import"./Select-8EQsIG3h.js";import"./InvisibleMessage-DDCSdyz6.js";import"./slim-arrow-down-m4nfpNWT.js";import"./index-ConqiMdG.js";import"./index-Teu4gKwB.js";import"./index-Cel48Hnh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-YqAR--zG.js";import"./group-2-sFLuQe_k.js";import"./sort-descending-D51ek0j-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-bAeuC6z7.js";import"./utils-DdwGETq3.js";import"./index-CZ32PpE2.js";import"./index-Btqqk8wD.js";import"./index-CcZrpUmm.js";import"./navigation-down-arrow-e2PgOWNG.js";import"./navigation-right-arrow-Bh7h-vAT.js";import"./navigation-right-arrow-Dd5t9QGM.js";import"./useCurrentTheme-CNfb1pjw.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B0G7QBXN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CTyFJzVy.js";import"./paper-plane-BI7RDtZg.js";import"./index-De8-qQne.js";import"./less-DfVJl5W-.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

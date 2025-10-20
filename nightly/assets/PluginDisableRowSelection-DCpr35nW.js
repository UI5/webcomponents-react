import{j as e}from"./iframe-CSbQr9Kh.js";import{useMDXComponents as n}from"./index-Bm__WzDY.js";import{I as r,F as s}from"./CommandsAndQueries-BBfDJted.js";import{M as l,C as a}from"./blocks-TfJF1wSB.js";import"./Tag-A7CWsIQR.js";import"./index-cCDc2RK7.js";import"./copy-CIEB0M7W.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DSsuzZnr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CqhcpXS6.js";import"./index-HYYwxuYt.js";import"./index-DOzwAkgD.js";import"./Link-Cjj3vJ0R.js";import"./index-B6cEeVTY.js";import"./index-CnvIjGJy.js";import"./index-BC5Egg9m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbQfKOeW.js";import"./addCustomCSSWithScoping-D9vmwUKM.js";import"./index-D2CGZc8Q.js";import"./information-DqQUPKzo.js";import"./sys-enter-2-BXqUXr7U.js";import"./alert-CG5QiRAo.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-nDPSzVIl.js";import"./delete-BJacbrPT.js";import"./settings-AWsPUNGG.js";import"./NoData-Be4XzJOz.js";import"./IllustratedMessage-DYcCQrXb.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-oFDVAAPo.js";import"./index-DBsJuuDB.js";import"./index-gLPF6SWi.js";import"./slim-arrow-down-DxVwfy5r.js";import"./Input-CDRJXkCD.js";import"./ResponsivePopoverCommon.css-CX_5uYsf.js";import"./ValueStateMessage.css--pnBJkXc.js";import"./Suggestions.css-BU_P2C6y.js";import"./ListBoxItemGroupTemplate-DSBmxLfg.js";import"./ComboBoxItemGroup-DXvJ7bIP.js";import"./ListItemBaseTemplate-DsQq_j4Z.js";import"./Token-CJJk4a0-.js";import"./ScrollEnablement-DpkPz9em.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ck6WotIf.js";import"./ToggleButton-DHGAaV5Z.js";import"./SuggestionItem-EYr04vfH.js";import"./index-DsWUYnd2.js";import"./Option-SezZz24A.js";import"./index-DqXpBA3m.js";import"./SegmentedButton-B1ja-BgV.js";import"./index-XxV9_aNw.js";import"./Select-CyU6KfcW.js";import"./InvisibleMessage-DEubzVGS.js";import"./slim-arrow-down-D9grr6Uu.js";import"./index-SNU-XIU1.js";import"./index-lwm1gao-.js";import"./index-CNy7gkcO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-VA_uH9v7.js";import"./group-2-YpekFQLH.js";import"./sort-descending-DFI-P2gY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DQ6xEtJo.js";import"./utils-CH7XdL15.js";import"./index-DJxbqdeK.js";import"./index-Chl98GIc.js";import"./index-CWMloBdV.js";import"./navigation-down-arrow-BshNj7dt.js";import"./navigation-right-arrow-CyYVo4V2.js";import"./navigation-right-arrow-B-U5Q9E4.js";import"./useCurrentTheme-Bhk6HLgU.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dayvn7j6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C53Cl9QB.js";import"./paper-plane-CnJUsrSx.js";import"./index-COarheIH.js";import"./less-CD0L_VR0.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

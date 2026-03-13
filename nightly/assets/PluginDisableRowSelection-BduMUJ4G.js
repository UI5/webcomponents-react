import{j as e}from"./iframe-CFFJFWfd.js";import{useMDXComponents as n}from"./index-C3RjxUM6.js";import{I as r}from"./CommandsAndQueries-F7dXP8Ck.js";import{M as s,C as l}from"./blocks-DNe1XYus.js";import"./Tag-Dq-_fpcq.js";import"./index-nJISZmsL.js";import"./copy-BWzo1FZ0.js";import{F as a}from"./Footer-DnJjuNkf.js";import"./PageNotFound-fKWlSVqv.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CdF9lylj.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DBWxZpb0.js";import"./index-BC7P3Gk3.js";import"./index-B7FuneXO.js";import"./index-CLuk8Jv1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-peyxdL93.js";import"./addCustomCSSWithScoping-VUX5a_xd.js";import"./index-CQKrmUSc.js";import"./index-IkzBWQiA.js";import"./index-Czxe8PfH.js";import"./information-WOvhwCn0.js";import"./sys-enter-2-CCYEhAsr.js";import"./alert-DdBL9zU_.js";import"./index-ElIMq8Rj.js";import"./Illustrations-DDY2i5oH.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-EKfiG3Fa.js";import"./delete-DtBMPPYI.js";import"./settings-DdHa5ubw.js";import"./NoData-DyNhEZJR.js";import"./NoFilterResults-bwHu1ERi.js";import"./index-0QvQLss1.js";import"./IllustratedMessage-BkbaiACi.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CuHMS1RV.js";import"./Input-BHKuVU6t.js";import"./ResponsivePopoverCommon.css-Cveld8fW.js";import"./ValueStateMessage.css-DXT8WQZS.js";import"./Suggestions.css-Dm2tVJec.js";import"./ListBoxItemGroupTemplate-DxqqjI46.js";import"./ComboBoxItemGroup-Bku5VfH-.js";import"./ListItemBaseTemplate-9ZhEBgKt.js";import"./Token-DcXtyL6g.js";import"./ScrollEnablement-BLsPTkqE.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-qwVkMKWU.js";import"./ToggleButton-D_tJ2vbW.js";import"./multiselect-all-CyxbEiBJ.js";import"./SuggestionItem-DCktFcTr.js";import"./index-B_Eo-b6w.js";import"./Option-BDyuoaZO.js";import"./index-CWc_WrrH.js";import"./SegmentedButton-B1Tohu53.js";import"./index-7J1NV0o6.js";import"./Select-Bes44jLo.js";import"./InvisibleMessage-Cy7aSRbc.js";import"./index-BgrKLYxO.js";import"./index-D15LFaL3.js";import"./index-CdhA5I3N.js";import"./index-BBFHvhOZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CoxBPUnm.js";import"./group-2-DOlXR04O.js";import"./sort-descending-z4I1bWza.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cf1nMP5r.js";import"./utils-CFkMxqYD.js";import"./index-D7w2Sj2n.js";import"./index-DAZWslzM.js";import"./index-BO89QR1s.js";import"./navigation-down-arrow-BoQioZe5.js";import"./navigation-right-arrow-Cv1wbDCF.js";import"./navigation-right-arrow-C27xMKS4.js";import"./useCurrentTheme-CQl-w7g2.js";import"./index-ONUC9f2y.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CR_KQBHD.js";import"./paper-plane-BG_-Xj9j.js";import"./index-c3HFKggR.js";import"./less-CKyJRnW1.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(l,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};

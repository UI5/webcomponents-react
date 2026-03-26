import{j as e}from"./iframe-CN9FvYjd.js";import{useMDXComponents as n}from"./index-CHfbFhXP.js";import{I as r}from"./CommandsAndQueries-BOIWtnt6.js";import{M as s,C as l}from"./blocks-BRVkHd00.js";import"./Tag-B_RTkJ1G.js";import"./index-CjC-3bum.js";import"./copy-CqLNgdQ9.js";import{F as a}from"./Footer-Dl9losBY.js";import"./PageNotFound-YEpHz0H_.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DVUvRB2v.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Wi8OmUZE.js";import"./index-LGty0-Ee.js";import"./index-qceCjzn0.js";import"./index-CdwqdKec.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tlJUacgC.js";import"./addCustomCSSWithScoping-DzgJsuLH.js";import"./index-BFwC892N.js";import"./index-BbQq-ZOq.js";import"./index-DHHIsfuO.js";import"./information-DYxN2cHX.js";import"./sys-enter-2-Cmiit89U.js";import"./alert-DCHWGnHk.js";import"./index-ZHKOt3Ry.js";import"./Illustrations-SwtMVqU-.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-PDVLg9Jo.js";import"./delete-sXux0RBx.js";import"./settings-CoLrjw8E.js";import"./NoData-DMviX8Pb.js";import"./NoFilterResults-CIrVjJf-.js";import"./index-DsUlZWap.js";import"./IllustratedMessage-CNrlCgrH.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BziUOht8.js";import"./Input--XH3wXXZ.js";import"./ResponsivePopoverCommon.css-DFlXT8Yt.js";import"./ValueStateMessage.css-DaIbDu_s.js";import"./Suggestions.css-C1rlY3G7.js";import"./ListBoxItemGroupTemplate-3j4IvakF.js";import"./ComboBoxItemGroup-XgTm2oPa.js";import"./ListItemBaseTemplate-inTV_ZQx.js";import"./Token-CM9W4z5A.js";import"./ScrollEnablement-Be-lL4pM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bpw8kHSv.js";import"./ToggleButton-LVDrAlrT.js";import"./multiselect-all-DRLXqwh4.js";import"./SuggestionItem-DIJ09gIE.js";import"./index-CYelxgbb.js";import"./Option-C9NgJRXg.js";import"./index-qj_fITSG.js";import"./SegmentedButton-CPYEaCpP.js";import"./index-Cwn8NjgW.js";import"./Select-EDC4gd3g.js";import"./InvisibleMessage-U36VH6c8.js";import"./index-DQr4HfAy.js";import"./index-I5TiD3Wv.js";import"./index-Bv-lpTUK.js";import"./index-C4sRNL_2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D1qMoNlt.js";import"./group-2-D359kW4P.js";import"./sort-descending-iarK2oXR.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C9G9oavp.js";import"./utils-BbuVUQyZ.js";import"./index-Dfrdccyw.js";import"./index-l5vhLjKD.js";import"./index-xq182KXJ.js";import"./navigation-down-arrow-4oBIf6f6.js";import"./navigation-right-arrow-BSY5C0HZ.js";import"./navigation-right-arrow-CajLQNlB.js";import"./useCurrentTheme-DktBLXlE.js";import"./index-LF1Yh8x4.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BW8x1c9w.js";import"./paper-plane-CNhlmnjY.js";import"./index-6r62860r.js";import"./less-BV_UcSh5.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

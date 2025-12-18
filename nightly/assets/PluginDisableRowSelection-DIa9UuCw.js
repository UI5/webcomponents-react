import{j as e}from"./iframe-C7iTiayp.js";import{useMDXComponents as n}from"./index-CMlBI8kK.js";import{I as r,F as s}from"./CommandsAndQueries-Cwf0qDUZ.js";import{M as l,C as a}from"./blocks-BjGmnX8N.js";import"./Tag-CFZhsv-K.js";import"./index-DWyaFLqZ.js";import"./copy-CkvBTa6Z.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BBNlf_1p.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bi4CD_jF.js";import"./index-CepcJiY6.js";import"./index-BmPAlSpi.js";import"./Link-D4JNNlPq.js";import"./index-fBsRTAa2.js";import"./index-3ZnD0cv6.js";import"./index-zxgrwg2w.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-khcOq4rr.js";import"./addCustomCSSWithScoping-DLqaogwL.js";import"./index-BXtbzqKT.js";import"./information-BMfuHNkn.js";import"./sys-enter-2-wp3WX8g7.js";import"./alert-D64S_sTf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bo89s8ys.js";import"./delete-CCDVjtvW.js";import"./settings-BKAeCR2Z.js";import"./NoData-Bf3fSXva.js";import"./IllustratedMessage-_2lGAz-J.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-1kBGmlid.js";import"./index-BgWBB9Nj.js";import"./index-D6FSQNaA.js";import"./slim-arrow-down-DQ4u4tcO.js";import"./Input-Dc29Rl46.js";import"./ResponsivePopoverCommon.css-BuOZvZm3.js";import"./ValueStateMessage.css-BylK2ZGd.js";import"./Suggestions.css-HeG5Oc_t.js";import"./ListBoxItemGroupTemplate-CzMwnapl.js";import"./ComboBoxItemGroup-BwGON5jx.js";import"./ListItemBaseTemplate-DmWIq4QF.js";import"./Token-Bw-ivO-m.js";import"./ScrollEnablement-m0sz45fi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dd95Np6p.js";import"./ToggleButton-C2EcXRa7.js";import"./SuggestionItem-B0EqOaoY.js";import"./index-BbRE-btA.js";import"./Option-CJLLlMWt.js";import"./index-CSbbIXmy.js";import"./SegmentedButton-B2udwM1j.js";import"./index-DDYhMlnk.js";import"./Select-Do7H2USn.js";import"./InvisibleMessage-D1U00Tgj.js";import"./slim-arrow-down-BjRxfcn_.js";import"./index-DQ8hKiqh.js";import"./index-DA0UiR-Z.js";import"./index-S0HdPZGc.js";import"./index-DkOK-tBR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dc2A1PJb.js";import"./group-2-DDh7CKio.js";import"./sort-descending-tAdmCFu7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DE_IcfY_.js";import"./utils-DjivXbSk.js";import"./index-D-JJzP2u.js";import"./index-jp7mGW-W.js";import"./index-D3yVkpzL.js";import"./navigation-down-arrow-DGq3-RIe.js";import"./navigation-right-arrow-EXPZKsWP.js";import"./navigation-right-arrow-DuxTVxJD.js";import"./useCurrentTheme-BSh8lxlr.js";import"./index-D1HtHk7r.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CUKUp41V.js";import"./paper-plane-D-TZChdH.js";import"./index-7U_-Ii5q.js";import"./less-DjUmBMvH.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

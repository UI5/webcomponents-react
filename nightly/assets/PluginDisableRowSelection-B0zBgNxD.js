import{j as e}from"./iframe-CtC7gYmF.js";import{useMDXComponents as n}from"./index-Di_URU-1.js";import{I as r,F as s}from"./CommandsAndQueries-DJ8rBoed.js";import{M as l,C as a}from"./blocks-mn43RK2l.js";import"./Tag-DL1jc8MZ.js";import"./index-BQgIK84O.js";import"./copy-qYhvVcV8.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CSxm7AZR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bc0i7q2T.js";import"./index-BjvlOMJE.js";import"./index-C6r9Z_qm.js";import"./Link-DC3Ks00x.js";import"./index-D2-G6hnA.js";import"./index-DbYbEtFi.js";import"./index-BCFTf5Mq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVmORIKm.js";import"./addCustomCSSWithScoping-u1_Fcso4.js";import"./index-B89psySH.js";import"./information-CFH6-U84.js";import"./sys-enter-2-DcKU3U88.js";import"./alert-BgZS6-Ve.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DM5Bmgcy.js";import"./delete-D28JJrjV.js";import"./settings-B_eYDXqs.js";import"./NoData-BEFoMZwu.js";import"./IllustratedMessage-Bm09ehOx.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-zixt0yJO.js";import"./index-BkEdfFg4.js";import"./index-CXyI2saw.js";import"./slim-arrow-down-Dl0Mj9NF.js";import"./Input-BzurqpwY.js";import"./ResponsivePopoverCommon.css-CWluabdp.js";import"./ValueStateMessage.css-DobtBfbj.js";import"./Suggestions.css-C-jhG9YF.js";import"./ListBoxItemGroupTemplate-l7Ysqerl.js";import"./ComboBoxItemGroup-Catkrecl.js";import"./ListItemBaseTemplate-Pa0nc5BR.js";import"./Token-Do6RzTo7.js";import"./ScrollEnablement-2beWlGZ4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-x5B2lMAL.js";import"./ToggleButton-5L56EMme.js";import"./SuggestionItem-OrSC-_5m.js";import"./index-B7-D_cvI.js";import"./Option-BKqKQXEH.js";import"./index-foRMWjrc.js";import"./SegmentedButton-BiIuRVw0.js";import"./index-BHX6355d.js";import"./Select-o8dTzY27.js";import"./InvisibleMessage-DuKRASmz.js";import"./slim-arrow-down-DfNNSKUn.js";import"./index-C-ofIC86.js";import"./index-D6W6u5Ex.js";import"./index-CDXZI8f7.js";import"./index-kkBKNTX1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-N08RslCJ.js";import"./group-2-D9UucbkH.js";import"./sort-descending-mxiKFDhG.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CCsq8n3w.js";import"./utils-CVe0TikA.js";import"./index-FXFh3j7m.js";import"./index-avy9GSV1.js";import"./index-DuYS0cYr.js";import"./navigation-down-arrow-BA6MTBoF.js";import"./navigation-right-arrow-D8GdMajc.js";import"./navigation-right-arrow-0LEru9_G.js";import"./useCurrentTheme-BD4ipeqR.js";import"./index-CuyOYIq5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-oSnS9KDP.js";import"./paper-plane-BYNNQr-L.js";import"./index-4w0RIoWt.js";import"./less-DxqQgulo.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

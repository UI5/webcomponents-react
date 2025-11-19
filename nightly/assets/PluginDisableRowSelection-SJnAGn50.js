import{j as e}from"./iframe-DDMtxVo3.js";import{useMDXComponents as n}from"./index-DJVQNbCr.js";import{I as r,F as s}from"./CommandsAndQueries-GL7iyaCL.js";import{M as l,C as a}from"./blocks-CloLtOA5.js";import"./Tag-YMrSkp2O.js";import"./index-DsF6G_NH.js";import"./copy-BTGdlJRd.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BN0Ao-_m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-rp8XBFdR.js";import"./index-BHqqB-9b.js";import"./index-ayjT0mLt.js";import"./Link-D3MGth0a.js";import"./index-BbSpKNs2.js";import"./index-DIh6sAKH.js";import"./index-BeupWmR_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IIlbXN7B.js";import"./addCustomCSSWithScoping-CwVVs2bm.js";import"./index-DtIsK-ZK.js";import"./information-CyNj2j11.js";import"./sys-enter-2-Go-dkBfP.js";import"./alert-jQ4OjDPb.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BF0Of00g.js";import"./delete-Is_zNJTb.js";import"./settings-DLZSygz9.js";import"./NoData-D2SWaRbW.js";import"./IllustratedMessage-Y2lySBW0.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-eecdh7SK.js";import"./index-n5WxUc-1.js";import"./index-CyCKI4kh.js";import"./slim-arrow-down-B9fX2pE_.js";import"./Input-DldSM5Dd.js";import"./ResponsivePopoverCommon.css-r6Yy0Fkp.js";import"./ValueStateMessage.css-CBQfZKeo.js";import"./Suggestions.css-Ce_nnZbO.js";import"./ListBoxItemGroupTemplate-jkoaDovc.js";import"./ComboBoxItemGroup-DEv9jHmD.js";import"./ListItemBaseTemplate-D5kLl8tB.js";import"./Token-CpnDDN9x.js";import"./ScrollEnablement-CHq8jwQp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CvaRS6qD.js";import"./ToggleButton-B8VJwrvR.js";import"./SuggestionItem-CkiJy6SK.js";import"./index-vS3KmlTg.js";import"./Option-Bmii2PEM.js";import"./index-cYHXc0IN.js";import"./SegmentedButton-Bch0JHMn.js";import"./index-Ce_ybWMS.js";import"./Select-nmxyrizQ.js";import"./InvisibleMessage-CxUh_0D_.js";import"./slim-arrow-down-C-tgvolj.js";import"./index-Dih0csuE.js";import"./index-C98BWsva.js";import"./index-DkqGVu91.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDA1WG-X.js";import"./group-2-CrgQgZu8.js";import"./sort-descending-VzaHQEUN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bk6vRLMI.js";import"./utils-cWgc0sgc.js";import"./index-D-dIkc7q.js";import"./index-WTvN1xUf.js";import"./index-Boa8xecP.js";import"./navigation-down-arrow-DhowEsmp.js";import"./navigation-right-arrow-rputrWNy.js";import"./navigation-right-arrow-BdCl3OJM.js";import"./useCurrentTheme-Cvsq9vBh.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CEfFIx_c.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DfGZzaea.js";import"./paper-plane-D2Eg3sKl.js";import"./index-DJj1SKu0.js";import"./less-DAJEncVK.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

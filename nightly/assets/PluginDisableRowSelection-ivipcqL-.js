import{j as e}from"./iframe-DNwXmN6w.js";import{useMDXComponents as n}from"./index-Dbs3KJZC.js";import{I as r,F as s}from"./CommandsAndQueries-BAoKQ9N_.js";import{M as l,C as a}from"./blocks-ClaQShTE.js";import"./Tag-9F78ZQdp.js";import"./index-CYGT2EhP.js";import"./copy-EN-_ABXk.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BZM3hVda.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DuyT38UB.js";import"./index-aVApIanM.js";import"./index-B8OlZcJ4.js";import"./Link-C02NJVw1.js";import"./index-BLy7Rxlq.js";import"./index-nHmWKiTx.js";import"./index-rN24S36o.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNrVdT-5.js";import"./addCustomCSSWithScoping-os-Xpktn.js";import"./index-CBh039oE.js";import"./information-BcSrdT-8.js";import"./sys-enter-2-D4ODuMey.js";import"./alert-Dl0J_z1v.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BcYwBA_x.js";import"./delete-Dtc6qBdo.js";import"./settings-C20orWJs.js";import"./NoData-Byql5GFI.js";import"./IllustratedMessage-C9HIxcU1.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DTwOmFng.js";import"./index-BwEwheLw.js";import"./index-CxqQ6lo_.js";import"./slim-arrow-down-yZ0Tj4rx.js";import"./Input-D1jql1AB.js";import"./ResponsivePopoverCommon.css-CsNV6Vt5.js";import"./ValueStateMessage.css-BmoKZehd.js";import"./Suggestions.css-BLseB_qJ.js";import"./ListBoxItemGroupTemplate-GrRfxRtW.js";import"./ComboBoxItemGroup-DmaBTCoh.js";import"./ListItemBaseTemplate-D49sgBgx.js";import"./Token-ikM9Yg4E.js";import"./ScrollEnablement-COWapJBB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B8xPVlSO.js";import"./ToggleButton-DjAWyQjE.js";import"./SuggestionItem-CApmioZF.js";import"./index-D3KttqVU.js";import"./Option-8CI-W5Cq.js";import"./index-DaNCv0Ie.js";import"./SegmentedButton-DqUwoUgZ.js";import"./index-Dk7WoR1Z.js";import"./Select-1NfyOvLt.js";import"./InvisibleMessage-R_WRhHfZ.js";import"./slim-arrow-down-DIzrL0Ja.js";import"./index-D3Y3n4MX.js";import"./index-DH1Xng6k.js";import"./index-DJpZsV5v.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B4pAXERK.js";import"./group-2-FR_0GSEN.js";import"./sort-descending-DgjdOMTK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dr-gnZgG.js";import"./utils-DWArTzFQ.js";import"./index-C9vTuVR-.js";import"./index-neKxXX_y.js";import"./index-COFqXK4G.js";import"./navigation-down-arrow-D7lpxDjD.js";import"./navigation-right-arrow-BSI1uudB.js";import"./navigation-right-arrow-BqhiEzIr.js";import"./useCurrentTheme-Wc2uAQz5.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BA4HNUEX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ClLbQDrb.js";import"./paper-plane-BeRQVn6H.js";import"./index-CdrtxYXr.js";import"./less-_akB46eN.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

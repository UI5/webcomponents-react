import{j as e}from"./iframe-CmCInUUM.js";import{useMDXComponents as n}from"./index-NXwP46VZ.js";import{I as r,F as s}from"./CommandsAndQueries-5W0lVTAB.js";import{M as l,C as a}from"./blocks-Cl0pXsJo.js";import"./Tag-CGuAaCB9.js";import"./index-dx9tkoNT.js";import"./copy-DcIDD3Wq.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B998ocgs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B5gdlwKM.js";import"./index-Booqb8sh.js";import"./index-DMcZQwaV.js";import"./Link-7Zm1Qi1d.js";import"./index-DXLeTiXI.js";import"./index-CVcma5Dd.js";import"./index-BKQYdjqz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BwmvQWIh.js";import"./addCustomCSSWithScoping-CwKscpVm.js";import"./index-DUfO3zu2.js";import"./information-CRsOZ4kf.js";import"./sys-enter-2-CasWdLF0.js";import"./alert-BeT31Ncd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CWSnjBxa.js";import"./delete-ByaVoT0C.js";import"./settings-2tepRQZU.js";import"./NoData-D9vcDpv1.js";import"./IllustratedMessage-xrcgtvwK.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DeEwKae1.js";import"./index-C2-u_t4E.js";import"./index-B3GkoGRb.js";import"./slim-arrow-down-CMV2GNC8.js";import"./Input-BGKIH-Ic.js";import"./ResponsivePopoverCommon.css-CbiWaSFv.js";import"./ValueStateMessage.css-CnRjV3lN.js";import"./Suggestions.css-C2VGKGgK.js";import"./ListBoxItemGroupTemplate-k-S-fkpm.js";import"./ComboBoxItemGroup-BP14axHQ.js";import"./ListItemBaseTemplate-Qr8U-I-g.js";import"./Token-DPa-8Kib.js";import"./ScrollEnablement-D5S2g6lr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-1o7Rq9a2.js";import"./ToggleButton-BXsjca7D.js";import"./SuggestionItem-B2pt1HBo.js";import"./index-B1jimoj1.js";import"./Option-CFasqXc0.js";import"./index-3jN65nsN.js";import"./SegmentedButton-BKbX-QXu.js";import"./index-EW1SbgQq.js";import"./Select-55Dn_LDE.js";import"./InvisibleMessage-UG9NOdi8.js";import"./slim-arrow-down-DzHwR3gT.js";import"./index-bfIcPC0t.js";import"./index-BcE1ulij.js";import"./index-BqyE9dt2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CeCfP_kP.js";import"./group-2-oswyoZGa.js";import"./sort-descending-CGLEskGp.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CQOE7bFF.js";import"./utils-CKWqgB9c.js";import"./index-lw26byMY.js";import"./index-Dfo16rW6.js";import"./index-C7mwynkt.js";import"./navigation-down-arrow-DGAK0MlQ.js";import"./navigation-right-arrow-BNormXIu.js";import"./navigation-right-arrow-BskILAgl.js";import"./useCurrentTheme-Dnx3Zrry.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CWEnIavS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DQYLjazp.js";import"./paper-plane-CcL3Dpnl.js";import"./index-Dru_zBSF.js";import"./less-CMdTuNim.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

import{j as e}from"./iframe-CLqwDYWN.js";import{useMDXComponents as n}from"./index-cmVK5yXJ.js";import{I as r,F as s}from"./CommandsAndQueries-DltB0UQf.js";import{M as l,C as a}from"./blocks-Ua2ef061.js";import"./Tag-D4gpwYXq.js";import"./index-BLABW-V6.js";import"./copy-BFTyEUOW.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-hZOyNi4-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BAe0MMci.js";import"./index-dDRjuikd.js";import"./index-DbDqFPhM.js";import"./Link-CWlOLLsT.js";import"./index-Em70_hTG.js";import"./index-CZj6k55a.js";import"./index-Ddq0Vtwc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Clukjtst.js";import"./addCustomCSSWithScoping-CDaW4Lcf.js";import"./index-BkxNRgLP.js";import"./information-yMtkqf_-.js";import"./sys-enter-2-DLul5qw8.js";import"./alert-BH_ko6Mf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYcEpgcd.js";import"./delete-AfqY1m-P.js";import"./settings-DbFb6seN.js";import"./NoData-Cht9VzEL.js";import"./IllustratedMessage-CDCtcvSa.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-BMtskUoL.js";import"./index-Bg1HDO25.js";import"./index-CJ4By0nc.js";import"./slim-arrow-down-C22iVcoT.js";import"./Input-DXVKLo07.js";import"./ResponsivePopoverCommon.css-wZUp9iaM.js";import"./ValueStateMessage.css-D4s1Xohy.js";import"./Suggestions.css-DBdM4e2n.js";import"./ListBoxItemGroupTemplate-P6s8PqVr.js";import"./ComboBoxItemGroup-kZhQKBRF.js";import"./ListItemBaseTemplate-DOFjZ7UC.js";import"./Token-oKWILUju.js";import"./ScrollEnablement-BX1GdvuZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_pITSM2.js";import"./ToggleButton-CZWRO_uA.js";import"./SuggestionItem-CyojvZx5.js";import"./index-DwSivuZ5.js";import"./Option-BC429w4c.js";import"./index-DkRMg_n1.js";import"./SegmentedButton-DVrshPel.js";import"./index-DSXAZtDg.js";import"./Select-BR_Ti_op.js";import"./InvisibleMessage-DRB-gK4Q.js";import"./slim-arrow-down-BIHU5bm6.js";import"./index-CWDxWYIq.js";import"./index-BE3ugTFz.js";import"./index-BXY3diBI.js";import"./index-DiK104TW.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DCPxxjXq.js";import"./group-2-BJfUB2fk.js";import"./sort-descending-B2qNBOis.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BMP6kCoe.js";import"./utils-RGutoP-Y.js";import"./index-BJqt4hz8.js";import"./index-CF_2Gmzg.js";import"./index-CxjQeiDR.js";import"./navigation-down-arrow-DeQyn301.js";import"./navigation-right-arrow-Dei2x-FV.js";import"./navigation-right-arrow-Dtl4aa4d.js";import"./useCurrentTheme-DFPeZZlw.js";import"./index-oS5lCLsv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BnOr2gHb.js";import"./paper-plane-C4dG94mO.js";import"./index-DFRNsF2S.js";import"./less-DCuw3qxw.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

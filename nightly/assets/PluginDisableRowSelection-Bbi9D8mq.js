import{j as e}from"./iframe-By2gmFxc.js";import{useMDXComponents as n}from"./index-gKb_GMnq.js";import{I as r,F as s}from"./CommandsAndQueries-MwhWu1jt.js";import{M as l,C as a}from"./blocks-D2uzjwbj.js";import"./Tag-Q4xsur8Q.js";import"./index-CIY2e3dX.js";import"./copy-jhrg3Bh5.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-38cEGb-D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DjdoJ-R-.js";import"./index-JdoT9BRG.js";import"./index-CYEIBPim.js";import"./Link-nWDhDuhI.js";import"./index-4iQpwXEW.js";import"./index-XAF-DZNA.js";import"./index-BlQvs7kx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl2hQFWK.js";import"./addCustomCSSWithScoping-BCT2RHCk.js";import"./index-c5NRQxKp.js";import"./information-DZbn4exg.js";import"./sys-enter-2-D1EL9sqg.js";import"./alert-Dj00yiIa.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DfmbGYM-.js";import"./delete-DIECwpsn.js";import"./settings-BR-Jn1SA.js";import"./NoData-DlNrysCF.js";import"./IllustratedMessage-BEVwX-MP.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-BUFWZWdz.js";import"./index-B8yBtMrQ.js";import"./index-DB05x-gb.js";import"./slim-arrow-down-CHcgNgab.js";import"./Input-BkjEUhdM.js";import"./ResponsivePopoverCommon.css-GYWWINRP.js";import"./ValueStateMessage.css-BgBsH41F.js";import"./Suggestions.css-DYhFblt3.js";import"./ListBoxItemGroupTemplate-C0bdN0su.js";import"./ComboBoxItemGroup-DB867_JW.js";import"./ListItemBaseTemplate-DKt4HTRR.js";import"./Token-D9qfRGUI.js";import"./ScrollEnablement-CzJbNFQB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ba2CipUt.js";import"./ToggleButton-BzNdzxEt.js";import"./SuggestionItem-b3ddDxtm.js";import"./index-BxxQ10ur.js";import"./Option-C8V6bqI8.js";import"./index-DsPa88Bs.js";import"./SegmentedButton-DuCxtppX.js";import"./index-BXAryvnn.js";import"./Select-COlJPvs3.js";import"./InvisibleMessage-_t19LlQz.js";import"./slim-arrow-down-B6SdizKX.js";import"./index-5qvEcr0z.js";import"./index-CfTR6XTd.js";import"./index-B0IxYo6X.js";import"./index-BrqX3Vme.js";import"./IconDesign-DXd8PPVF.js";import"./filter-eUU2DhC1.js";import"./group-2-DGCEgpup.js";import"./sort-descending-C0r5XO3T.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dno9Fs_e.js";import"./utils-BosODi5p.js";import"./index-Bzt2lubY.js";import"./index-Buzu52UZ.js";import"./index-B7hB3IPh.js";import"./navigation-down-arrow-DNuvmaCj.js";import"./navigation-right-arrow-BnmeKOvQ.js";import"./navigation-right-arrow-DHqGUiMR.js";import"./useCurrentTheme-CwgIV2K4.js";import"./index-BEBXGxoi.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-T3phyLSC.js";import"./paper-plane-1SKJ69pa.js";import"./index-CFq17qq9.js";import"./less-BfN0FGSL.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

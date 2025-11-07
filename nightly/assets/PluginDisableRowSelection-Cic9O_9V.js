import{j as e}from"./iframe-DGnDchDQ.js";import{useMDXComponents as n}from"./index-gqhlbnnP.js";import{I as r,F as s}from"./CommandsAndQueries-nFfK_W-O.js";import{M as l,C as a}from"./blocks-CpnEbXW7.js";import"./Tag-Bqlxcgw6.js";import"./index-ab40gpM3.js";import"./copy-DiOqbFXx.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BTvfSlOu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D8BbDNnv.js";import"./index-C1Lkwl5k.js";import"./index-DBMKQPCi.js";import"./Link-DlCRMPDC.js";import"./index--LdK-cim.js";import"./index-DwBLo3Dd.js";import"./index-CHVAkMFk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DKYdG7d4.js";import"./addCustomCSSWithScoping-loT15OrI.js";import"./index-BpzOuhJc.js";import"./information-C_x76Wro.js";import"./sys-enter-2-C7D1DjDO.js";import"./alert-Bv5R7OxS.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DdqJa0mU.js";import"./delete-BE1PBYXz.js";import"./settings-BAjMM07B.js";import"./NoData-RpKJOQtT.js";import"./IllustratedMessage-BUXdJOQa.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-COZ-85wq.js";import"./index-DDW91UyV.js";import"./index-DU55bLzP.js";import"./slim-arrow-down-co0mwyOK.js";import"./Input-CaqdVj6e.js";import"./ResponsivePopoverCommon.css-Br3rrJZc.js";import"./ValueStateMessage.css-CHKpDORf.js";import"./Suggestions.css-DqURt6WR.js";import"./ListBoxItemGroupTemplate-B26xTI50.js";import"./ComboBoxItemGroup-CoPptm90.js";import"./ListItemBaseTemplate-BVD1phCE.js";import"./Token-BF1rX6rG.js";import"./ScrollEnablement-CKB2L65n.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-9i9lbvrA.js";import"./ToggleButton-CWVqj_J_.js";import"./SuggestionItem-DRXtzHoL.js";import"./index-BYs6kOFB.js";import"./Option-kCDR0Dm6.js";import"./index-DiHvbKWq.js";import"./SegmentedButton-7ThStUDC.js";import"./index-Bf5jvAmF.js";import"./Select-rYtMqXh7.js";import"./InvisibleMessage-BzbFhHWs.js";import"./slim-arrow-down-CnIeCsYc.js";import"./index-BWAWA91T.js";import"./index-C_6mlYi2.js";import"./index-Bk6kEH1k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DrOZNGpr.js";import"./group-2-BkKxU7TT.js";import"./sort-descending-BfKrVPDc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CRICYRQq.js";import"./utils-C0I-T_5s.js";import"./index-Dr0nkd7d.js";import"./index-KV9RZy53.js";import"./index-D808ykgs.js";import"./navigation-down-arrow-BwWk1dVU.js";import"./navigation-right-arrow-BBaPKo9n.js";import"./navigation-right-arrow-DV_J89S_.js";import"./useCurrentTheme-LA5drGg4.js";import"./IndicationColor-DVw-fSM_.js";import"./index-AvaiyNj6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-KjkI_mtd.js";import"./paper-plane-jT_LadMY.js";import"./index-BiBB6OBn.js";import"./less-De-Tz2uD.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

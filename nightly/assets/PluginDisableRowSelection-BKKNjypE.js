import{j as e}from"./iframe-e2ulr1yw.js";import{useMDXComponents as n}from"./index-PtYZPZtM.js";import{I as r,F as s}from"./CommandsAndQueries-Do207XX8.js";import{M as l,C as a}from"./blocks-Cdk7qnv2.js";import"./Tag-CbLqF2IE.js";import"./index-Eon1qDJA.js";import"./copy-CcaF1jLX.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B5IJLmV9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-svxMDckn.js";import"./index-DgxvJH02.js";import"./index-Cqf-Pfp_.js";import"./Link-CLFq5zdq.js";import"./index-DYD2ksj7.js";import"./index-CEhzVLt4.js";import"./index-BfxPgEEU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ri6qBofk.js";import"./addCustomCSSWithScoping-I9DyZrRa.js";import"./index-BSw3xQau.js";import"./information-BWwLhz3O.js";import"./sys-enter-2-gpB0Ga9p.js";import"./alert-DlKAiOO0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-3jDDYMp1.js";import"./delete-gpEUb-9D.js";import"./settings-6a9Tcwi4.js";import"./NoData-Bc7e_DmL.js";import"./IllustratedMessage-wF_b0eFg.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BnS8M7QN.js";import"./index-COvdbf1_.js";import"./index-C4o8tm0a.js";import"./slim-arrow-down-87FbM80e.js";import"./Input-BV-MxHCg.js";import"./ResponsivePopoverCommon.css-Bd-J_F0o.js";import"./ValueStateMessage.css-DtD4vioP.js";import"./Suggestions.css-CgOY0hpB.js";import"./ListBoxItemGroupTemplate-DF9OoaBX.js";import"./ComboBoxItemGroup-DyFNSY0u.js";import"./ListItemBaseTemplate-DnwALruD.js";import"./Token-Mt_jrKze.js";import"./ScrollEnablement-DRdFoZEe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Zbea8WPI.js";import"./ToggleButton-Cdb7GkdR.js";import"./SuggestionItem-D97oFBk5.js";import"./index-DHKaLTeQ.js";import"./Option-iPEJaQYF.js";import"./index-BN3IxYuD.js";import"./SegmentedButton-Bp3L8kza.js";import"./index-3C9SeEbV.js";import"./Select-C17UaO3k.js";import"./InvisibleMessage-C7K7N7yp.js";import"./slim-arrow-down-BTy2_7_G.js";import"./index-C4YzeeGG.js";import"./index-C-0YmZNW.js";import"./index-DRgjkRpO.js";import"./index-QUiaryyk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-dc6_3EFU.js";import"./group-2-Bdgfi4eM.js";import"./sort-descending-C3r-uppm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-UzExfabf.js";import"./utils-93MrREGq.js";import"./index-DX7sH2kB.js";import"./index-BEEBpZeh.js";import"./index-BYqC9MtK.js";import"./navigation-down-arrow-CmGlfloc.js";import"./navigation-right-arrow-Dwj_O4Hl.js";import"./navigation-right-arrow-BzujGep6.js";import"./useCurrentTheme-Bu36broM.js";import"./index-BplRAEow.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cmkb72EN.js";import"./paper-plane-DnlmvP9j.js";import"./index-Bz4A25sA.js";import"./less-WXggIQVd.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

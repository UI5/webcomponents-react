import{j as e}from"./iframe-DHpTrIAy.js";import{useMDXComponents as n}from"./index-BNdd_DZc.js";import{I as r,F as s}from"./CommandsAndQueries-D5kPRnn1.js";import{M as l,C as a}from"./blocks-81TV0E2-.js";import"./Tag-BMggxcvS.js";import"./index-o6k9VRwd.js";import"./copy-CUNi2x4z.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-12bgNQ45.js";import"./preload-helper-PPVm8Dsz.js";import"./index-w0GUVkMu.js";import"./index-DA4wHaXp.js";import"./index-DbNixw4c.js";import"./Link-DUpBHPtC.js";import"./index-DpF6uZ0K.js";import"./index-C40hnbsn.js";import"./index-CAXkJF_S.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DrKfdXs7.js";import"./addCustomCSSWithScoping-CHvNzWcZ.js";import"./index-rxRuTrVR.js";import"./information-D34aykIE.js";import"./sys-enter-2-ELzebk4o.js";import"./alert-8s8s7RYv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DCgPgyA-.js";import"./delete-DKrHSPz3.js";import"./settings-B6rfKHYI.js";import"./NoData-BJPeIuxS.js";import"./IllustratedMessage-DeicVa4E.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CTj596wI.js";import"./index-Dm_gfiI8.js";import"./index-CKx79arg.js";import"./slim-arrow-down-BGJA9V4H.js";import"./Input-DwdQCY2u.js";import"./ResponsivePopoverCommon.css-niQ49B26.js";import"./ValueStateMessage.css-DwB1W3lZ.js";import"./Suggestions.css-BOrRXcWN.js";import"./ListBoxItemGroupTemplate-nGZ9tTJV.js";import"./ComboBoxItemGroup-EVKWXWz8.js";import"./ListItemBaseTemplate-BXWM3mr4.js";import"./Token-y68VeFe2.js";import"./ScrollEnablement-B1igU_IO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BerdkBu5.js";import"./ToggleButton-cnwhtHLd.js";import"./SuggestionItem-jvS16M3k.js";import"./index-ezHHRlrS.js";import"./Option-Dj2PGXAN.js";import"./index-DWfWmYfQ.js";import"./SegmentedButton-DLLW2xv0.js";import"./index-Dn_pjokW.js";import"./Select-DB28s_OD.js";import"./InvisibleMessage-C3z5CeG6.js";import"./slim-arrow-down-dKp6dqzM.js";import"./index-Djnxwr7T.js";import"./index-B5z9SVI9.js";import"./index-CUCGS5XW.js";import"./index-BChvanZZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nEVcPtmr.js";import"./group-2-CQGV8bXi.js";import"./sort-descending-DD213tWy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BswnqQsD.js";import"./utils-DR3aQyQD.js";import"./index-d0itOHls.js";import"./index-CTkbrW4s.js";import"./index-DsQSOist.js";import"./navigation-down-arrow-By_eP8IV.js";import"./navigation-right-arrow-Czim4Kw8.js";import"./navigation-right-arrow-DwujKgov.js";import"./useCurrentTheme-BalyHQ7S.js";import"./index-Cmtiwzmy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CxN0R0T5.js";import"./paper-plane-DWahO4cJ.js";import"./index-CJiey5H1.js";import"./less-BDnAnuj7.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

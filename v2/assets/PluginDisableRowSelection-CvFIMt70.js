import{j as e}from"./iframe-CfxMerL-.js";import{useMDXComponents as n}from"./index-VbSVpo3U.js";import{I as r,F as s}from"./CommandsAndQueries-Dg2B8ke5.js";import{M as l,C as a}from"./blocks-MJ_5uOZ-.js";import"./Tag-BNqMWY4P.js";import"./index-BI2nwMUJ.js";import"./copy-B6ViSnKB.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B_Wpf4B4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DP6bCfzy.js";import"./index-IP6CGDwM.js";import"./index-BYZXhHpQ.js";import"./Link-BitnWoH9.js";import"./index-BTQ4bVGw.js";import"./index-DTz3tRU0.js";import"./index-DjUM5b1-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CC5ToBw2.js";import"./addCustomCSSWithScoping-El6BaIIi.js";import"./index-B0xbheog.js";import"./information-V-ZI-MUr.js";import"./sys-enter-2-BPqtZ6Ae.js";import"./alert-BY-nhKm6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BsCEz7ib.js";import"./delete-D7RS9M-y.js";import"./settings-DEtPc8Wj.js";import"./NoData-B_-T5WI3.js";import"./IllustratedMessage-BZNw5Wiu.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BnYjPhI7.js";import"./index-bif26s3P.js";import"./index-Cwf7lSCC.js";import"./slim-arrow-down-d9rX3ebS.js";import"./Input-D3np0nF3.js";import"./ResponsivePopoverCommon.css-DjynAZOg.js";import"./ValueStateMessage.css-DkCKabc6.js";import"./Suggestions.css-MQWeG9TG.js";import"./ListBoxItemGroupTemplate-CM5NZpBA.js";import"./ComboBoxItemGroup-BrUfLYBK.js";import"./ListItemBaseTemplate-Cy-PquU_.js";import"./Token-ne2P8_To.js";import"./ScrollEnablement-ziMxJENG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BVYApwgA.js";import"./ToggleButton-BZRyXu7G.js";import"./SuggestionItem-BlVIKvF5.js";import"./index-BAwfKYgr.js";import"./Option-C1QKLt8h.js";import"./index-HY2ZsT1u.js";import"./SegmentedButton-B1Kk8DVS.js";import"./index-4mdijd2N.js";import"./Select-kSz6MKWU.js";import"./InvisibleMessage-et9yvTH3.js";import"./slim-arrow-down-Dqgy0Zme.js";import"./index-D8Qeadr9.js";import"./index-ri-WXBZU.js";import"./index-BKIcMWwD.js";import"./index-Cr9UVhXj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Btv3_sW8.js";import"./group-2-nZBOHX9Q.js";import"./sort-descending-BSyKh4wL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CtFTNZfH.js";import"./utils-DGabngUu.js";import"./index-BRkWBZ5K.js";import"./index-CHJ4GtUC.js";import"./index-BPqtDCmb.js";import"./navigation-down-arrow-7qCnXGQg.js";import"./navigation-right-arrow-BsRz9Oss.js";import"./navigation-right-arrow-B0sX5CVs.js";import"./useCurrentTheme-BhGBafEw.js";import"./index-C5nYMhvF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B1OO3TS9.js";import"./paper-plane-CwGGMTBs.js";import"./index-BAq-T-Uj.js";import"./less-DABYie6s.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

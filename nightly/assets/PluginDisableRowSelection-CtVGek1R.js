import{j as e}from"./iframe-BeAHz6cC.js";import{useMDXComponents as n}from"./index-IuDgzHrg.js";import{I as r,F as s}from"./CommandsAndQueries-D97dtm9O.js";import{M as l,C as a}from"./blocks-BFIGDLi7.js";import"./Tag-D9qmbNXw.js";import"./index-BxL3HTx3.js";import"./copy-CeLNiPKq.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Bef49mXS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cz53yeIo.js";import"./index-BJX7RQS4.js";import"./index-DADITnZh.js";import"./Link-DcHF9WJI.js";import"./index-B-C-Jm2N.js";import"./index-BgUv4ZgK.js";import"./index-dtYUUSxT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B0TPubq3.js";import"./addCustomCSSWithScoping--2mgu3TN.js";import"./index-D74mYq85.js";import"./information-CKz_vH8g.js";import"./sys-enter-2-DjAoJc05.js";import"./alert-DbaxRKJL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYfsnrA-.js";import"./delete-BbZcD_Jy.js";import"./settings-B-7ACuFB.js";import"./NoData-DRgLX-o5.js";import"./IllustratedMessage-C5En4lhQ.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-0Ax5XtPu.js";import"./index-mMXt2Ig4.js";import"./index-BPce1aTx.js";import"./slim-arrow-down-CnwrFvZs.js";import"./Input-C1KpoHfz.js";import"./ResponsivePopoverCommon.css-DmlFnob0.js";import"./ValueStateMessage.css-DKcV5GT7.js";import"./Suggestions.css--wo_Z0Zb.js";import"./ListBoxItemGroupTemplate-Cg8nSs_y.js";import"./ComboBoxItemGroup-CACE9fiW.js";import"./ListItemBaseTemplate-SOqbHsMM.js";import"./Token-CPys-ICN.js";import"./ScrollEnablement-SmS2scF8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DkxzzqLh.js";import"./ToggleButton-B1-jynwA.js";import"./SuggestionItem-DiIPrr67.js";import"./index-DFLqYco2.js";import"./Option-BP8-vTtd.js";import"./index-B86j6xyl.js";import"./SegmentedButton-CETefqCy.js";import"./index-r7IiC7sj.js";import"./Select-BJKmcwBb.js";import"./InvisibleMessage-BniauCX7.js";import"./slim-arrow-down-C6Y9ZcYg.js";import"./index-D6yRflfZ.js";import"./index-BfCFP5Is.js";import"./index-C6jXAYSN.js";import"./index-CvVdNUDg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-zo7K4tca.js";import"./group-2-BBGAdkSh.js";import"./sort-descending-C3RNb67b.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CGI_tmay.js";import"./utils-tfYvJxoP.js";import"./index-Dat5JbHB.js";import"./index-6ACe6tc9.js";import"./index-2vVJU3bI.js";import"./navigation-down-arrow-BZ4wl1wA.js";import"./navigation-right-arrow-DXJ8hwha.js";import"./navigation-right-arrow-C_x6dcVg.js";import"./useCurrentTheme-BmXY1mLX.js";import"./index-Be9aI4hM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DunOEBQz.js";import"./paper-plane-DZNu3P2r.js";import"./index-4NHwF18G.js";import"./less-GlUFt5eG.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

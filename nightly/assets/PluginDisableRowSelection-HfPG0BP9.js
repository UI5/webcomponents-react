import{j as e}from"./iframe-JepDsySv.js";import{useMDXComponents as n}from"./index-BGpK8Gfn.js";import{I as r}from"./CommandsAndQueries-BpbXUgFJ.js";import{M as s,C as l}from"./blocks-BbBU6U9u.js";import"./Tag-B5HHC3_D.js";import"./index-CgzvULcW.js";import"./copy-D2Pke32f.js";import{F as a}from"./Footer-DkGRGaaK.js";import"./PageNotFound-BYj9CuoF.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DvFdGoFq.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BLuv4AbX.js";import"./index-BKoJ8bur.js";import"./index-C220bubu.js";import"./index-CcxcRSha.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzfOud-0.js";import"./addCustomCSSWithScoping-f93Oozyz.js";import"./index-Bd6WgbUi.js";import"./index-0BxTwmFy.js";import"./index-CIXtBD0J.js";import"./information-DXY6cLV_.js";import"./sys-enter-2-e1zqJEbk.js";import"./alert-BXOPntd7.js";import"./index-8tSJZtFG.js";import"./Illustrations-sShT8n29.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DB1X0-yk.js";import"./delete-BMjzJ8I_.js";import"./settings-D51mHDx-.js";import"./NoData-DTdJHQio.js";import"./NoFilterResults-Dx8L-MqR.js";import"./index-BNDpV-__.js";import"./IllustratedMessage-Dynl3KMz.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-CbxbNk1w.js";import"./slim-arrow-down-Dt-7CG4Q.js";import"./Input-f39H6uy6.js";import"./ResponsivePopoverCommon.css-BKF0yN8r.js";import"./ValueStateMessage.css-C0leCwz7.js";import"./Suggestions.css-DPwYa0Rw.js";import"./ListBoxItemGroupTemplate-DuwHciDt.js";import"./ComboBoxItemGroup-iyr2zk0K.js";import"./ListItemBaseTemplate-yAH3C8cG.js";import"./Token-Bw86fiqE.js";import"./ScrollEnablement-Bf0xODSv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DaU3lC3b.js";import"./ToggleButton-DRj1b1JE.js";import"./SuggestionItem-Db9ZyQ-5.js";import"./index-Diqc62Zx.js";import"./Option-B-qv-w1U.js";import"./index-DAt4QP07.js";import"./SegmentedButton-B71_4ItV.js";import"./index-B9-qYlKd.js";import"./Select-BmEwDHzx.js";import"./InvisibleMessage-DglvjQpx.js";import"./slim-arrow-down-DOXlkwy5.js";import"./index-BLd9zCHc.js";import"./index-BrKPVcK1.js";import"./index-DRDJaTFL.js";import"./index-Dd7JImE6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-9Jnsuke6.js";import"./group-2-CJV4M1Rl.js";import"./sort-descending-C5QauENK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-l64aeKU4.js";import"./utils-BBoBz28-.js";import"./index-CPAJ8klG.js";import"./index-Cq1parp_.js";import"./index-BjeUsn3F.js";import"./navigation-down-arrow-Csf9CClE.js";import"./navigation-right-arrow-D7m_6N7r.js";import"./navigation-right-arrow-D9pak7Fp.js";import"./useCurrentTheme-CZHOHdUN.js";import"./index-C6SVu-VQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cj9ds3Xk.js";import"./paper-plane-DwaO0bjK.js";import"./index-C8CCEPvY.js";import"./less-D8z_9I33.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(l,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function Ue(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ue as default};

import{j as e}from"./iframe-ePItFB5B.js";import{useMDXComponents as n}from"./index-DDhKCT3A.js";import{I as r,F as s}from"./CommandsAndQueries-Bqqc5zN4.js";import{M as l,C as a}from"./blocks-b5KXpU9M.js";import"./Tag-DaF_Qhe4.js";import"./index-BB23O1Ug.js";import"./copy-BDQ8dZSb.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BJSBhIN7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tHf_ynpH.js";import"./index-BW9_RjV3.js";import"./index-CHJN7UF8.js";import"./Link-DCRCVgwG.js";import"./index-CauWo2vq.js";import"./index-Dot01Rcg.js";import"./index-DwS7NZjH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BZQxW830.js";import"./addCustomCSSWithScoping-DQC1mn0S.js";import"./index-DsBJl3xg.js";import"./information-jDHGU4wN.js";import"./sys-enter-2-CYnnsJKJ.js";import"./alert-CaUEMWJO.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ToSbXWZH.js";import"./delete-DwZg9P7Z.js";import"./settings-BcPS-7YZ.js";import"./NoData-DJFJrOTo.js";import"./IllustratedMessage-Bmr5Yv3g.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DSxvsqTt.js";import"./index-CM9pher7.js";import"./index-n2XRoQpy.js";import"./slim-arrow-down-Bbay6SzC.js";import"./Input-1ziOkLBO.js";import"./ResponsivePopoverCommon.css-CK1jZSgX.js";import"./ValueStateMessage.css-Cge6AqxA.js";import"./Suggestions.css-qvsZ8K7i.js";import"./ListBoxItemGroupTemplate-tCIsdNqz.js";import"./ComboBoxItemGroup-BTYyH9JI.js";import"./ListItemBaseTemplate-BQfbgCmz.js";import"./Token-hnnzHjkz.js";import"./ScrollEnablement-DXbRc12V.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DwrIMAc3.js";import"./ToggleButton-BVCRpFrg.js";import"./SuggestionItem-DHkkhg33.js";import"./index-BJMjSX6m.js";import"./Option-8jo7-UGm.js";import"./index-BkpZUg2F.js";import"./SegmentedButton-B55zAlnK.js";import"./index-CZnOTK3W.js";import"./Select-DODjh9tK.js";import"./InvisibleMessage-66-idOyL.js";import"./slim-arrow-down-C3vG9300.js";import"./index-DEIYYpTL.js";import"./index-CRvZRH3h.js";import"./index-BpeQPuHK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BIN5xraI.js";import"./group-2-CI-KJk4K.js";import"./sort-descending-DBtsyD-3.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D8vqCrQI.js";import"./utils-eGR0B54I.js";import"./index-CIqT6e3U.js";import"./index-1WOlGoMF.js";import"./index-rRzkNuJB.js";import"./navigation-down-arrow-hSRSXRoR.js";import"./navigation-right-arrow-BxDoSopC.js";import"./navigation-right-arrow-DFeuYejb.js";import"./useCurrentTheme-C0xCGTPu.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CuUMSyha.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsyOH-5s.js";import"./paper-plane-BtGnmdBy.js";import"./index-CFAUo9FD.js";import"./less-BQZO-GV3.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

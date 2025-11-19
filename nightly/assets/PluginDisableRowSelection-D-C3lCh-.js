import{j as e}from"./iframe-BdLp08tI.js";import{useMDXComponents as n}from"./index-L7M025bj.js";import{I as r,F as s}from"./CommandsAndQueries-A8ohCY01.js";import{M as l,C as a}from"./blocks-BcH5lj54.js";import"./Tag-BYLKYo9E.js";import"./index-C9cC8h2E.js";import"./copy-CAz8pLUN.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-yn0tvp-E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DgCb8EoK.js";import"./index-6N8J-kdE.js";import"./index-bbxcO9wp.js";import"./Link-PkVO0OYZ.js";import"./index-Bq5n3ghu.js";import"./index-vBihh2Vl.js";import"./index-BjKyj7T0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-oSO4QDvk.js";import"./addCustomCSSWithScoping-D7d3eFNt.js";import"./index-DEh5uPtQ.js";import"./information-BztpBEmn.js";import"./sys-enter-2-B36Zfbw2.js";import"./alert-YtyMWuog.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cc5ACQhd.js";import"./delete-C129Vo-j.js";import"./settings-CU9DNY2V.js";import"./NoData-CdpbHVsl.js";import"./IllustratedMessage-aNFXY5tv.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-B6AfN2ty.js";import"./index-BwfJRUg8.js";import"./index-DbJZSO19.js";import"./slim-arrow-down-Jk0gqFeP.js";import"./Input-BkxHEOLf.js";import"./ResponsivePopoverCommon.css-DUrNz7RL.js";import"./ValueStateMessage.css-KNUuhM7R.js";import"./Suggestions.css-DRL4VnmY.js";import"./ListBoxItemGroupTemplate-BswdqGi0.js";import"./ComboBoxItemGroup-DmWoR2D3.js";import"./ListItemBaseTemplate-q7lVjUmU.js";import"./Token-BUZ_-lS4.js";import"./ScrollEnablement-DKU4KjEY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-NrFCjmp4.js";import"./ToggleButton-0L16aZ13.js";import"./SuggestionItem-CvJl4nQX.js";import"./index-a4Q7iOV6.js";import"./Option-CI2Yw2KP.js";import"./index-BesWFMlT.js";import"./SegmentedButton-DezAXtzP.js";import"./index-DEdHEHwC.js";import"./Select-CgTdKzom.js";import"./InvisibleMessage-CU9pQYDF.js";import"./slim-arrow-down-VvEv069w.js";import"./index-c-nauNND.js";import"./index-B7YCk-Wu.js";import"./index-BJsU8vuH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CyqZ_FcD.js";import"./group-2-DPCLN9ms.js";import"./sort-descending-B-2HsOeS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dv6NUcfX.js";import"./utils-CB796yal.js";import"./index-DVTrGvWQ.js";import"./index-C7WwmQky.js";import"./index-Dug3C8oV.js";import"./navigation-down-arrow-BWuNqmxj.js";import"./navigation-right-arrow-DFVpmM_Z.js";import"./navigation-right-arrow-Dd0lHwSB.js";import"./useCurrentTheme-DUR02Wpt.js";import"./IndicationColor-DVw-fSM_.js";import"./index-vE2t2Hyd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C_VbuiKz.js";import"./paper-plane-CeqIEAvx.js";import"./index-mr-I5ZbO.js";import"./less-D5n1Rht5.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

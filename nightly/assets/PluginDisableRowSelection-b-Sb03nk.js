import{j as e}from"./iframe--9dKe8DB.js";import{useMDXComponents as n}from"./index-KI9hm8HB.js";import{I as r}from"./CommandsAndQueries-DmMMilME.js";import{M as s,C as l}from"./blocks-sz1V1YD1.js";import"./Tag-Dx2xRUom.js";import"./index-CPDFIZvY.js";import"./copy-DDHnU-KJ.js";import{F as a}from"./Footer-Q0CQ_qDk.js";import"./PageNotFound-CuY3r4La.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DEDvJZy2.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BglFcPBB.js";import"./index-CZTUC9tr.js";import"./index-mjSuc6PB.js";import"./index-TfvKDlH8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZXl1Qbt.js";import"./addCustomCSSWithScoping-OfWYI4vx.js";import"./index-BYfUGIr5.js";import"./index-W9KwanBR.js";import"./index-FyOsxtAw.js";import"./information-nAlSmLiB.js";import"./sys-enter-2-w7b_cFRw.js";import"./alert-QMDkEN5b.js";import"./index-rkrari7y.js";import"./Illustrations-CYV_ZGoP.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DQVJ7UfD.js";import"./delete-UpR3n6t7.js";import"./settings-we5d1Qdo.js";import"./NoData-CTvQa2cu.js";import"./NoFilterResults-CisMdPss.js";import"./index-Buvth7Xi.js";import"./IllustratedMessage-egyeCVYb.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DT7BwDcp.js";import"./Input-Bzs2WJ0n.js";import"./ResponsivePopoverCommon.css-B-aEh8v6.js";import"./ValueStateMessage.css-fsZpHtW6.js";import"./Suggestions.css-DwtCktYC.js";import"./ListBoxItemGroupTemplate-BDXtzS3x.js";import"./ComboBoxItemGroup-k2eOkzNK.js";import"./ListItemBaseTemplate-CEoNUjl5.js";import"./Token-DzmHzAMQ.js";import"./ScrollEnablement-B0ocudnB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DUlTKo1l.js";import"./ToggleButton-BUpmJXw9.js";import"./multiselect-all-xFdwtE2L.js";import"./SuggestionItem-BxBxlMFB.js";import"./index-CxFVbOcB.js";import"./Option-ClyYr9IH.js";import"./index-BUn6GQyk.js";import"./SegmentedButton-BtNun3GR.js";import"./index-vp_fZGXH.js";import"./Select-BJ3mdIAK.js";import"./InvisibleMessage-DJrm2fq1.js";import"./index-CXL69l_u.js";import"./index-CafeHBfG.js";import"./index-DXrjuC-M.js";import"./index-BvCJekuK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CEIgHrVL.js";import"./group-2-BIdr9xUh.js";import"./sort-descending-A1ebgf8V.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CEfENsPH.js";import"./utils-M3j0Syqb.js";import"./index-Be4Le6Ob.js";import"./index-RhGTS4dy.js";import"./index-D1Rwx7s5.js";import"./navigation-down-arrow-D1hT7rfO.js";import"./navigation-right-arrow-DEiywgOw.js";import"./navigation-right-arrow-uImefhjs.js";import"./useCurrentTheme-Blzbw4Tr.js";import"./index-hK5Tmxlj.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-4mhkBenG.js";import"./paper-plane-B7w-DG0X.js";import"./index-DtsRxF2n.js";import"./less-BuMWggUS.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};

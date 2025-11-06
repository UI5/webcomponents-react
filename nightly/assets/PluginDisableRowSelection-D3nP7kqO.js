import{j as e}from"./iframe-qw_wjtNl.js";import{useMDXComponents as n}from"./index-CvAhzckH.js";import{I as r,F as s}from"./CommandsAndQueries-DWIFRiex.js";import{M as l,C as a}from"./blocks-Cj0GGGP0.js";import"./Tag-DzwN3Rd_.js";import"./index-BxhW2KQn.js";import"./copy-6F9M-W0B.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CAfd5EST.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DkBb4DU7.js";import"./index-JDJrS9Ll.js";import"./index-BjZZqbZ8.js";import"./Link-D-ZYRyi4.js";import"./index-8ixRb_fG.js";import"./index-ClMjTnJ2.js";import"./index-CuOh1gGP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B8mn_iQe.js";import"./addCustomCSSWithScoping-CztL__nC.js";import"./index-BdvjziP2.js";import"./information-GIBAMn_C.js";import"./sys-enter-2-Djyl2MPl.js";import"./alert-B6KZwVKr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D6h30yd_.js";import"./delete-h0aT8AVb.js";import"./settings-DB2h-uz8.js";import"./NoData-BAGQwhIK.js";import"./IllustratedMessage-CNDFipk9.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-DVQQUXOf.js";import"./index-gQhHuDtz.js";import"./index--jeA-nPD.js";import"./slim-arrow-down-C7tvWC8C.js";import"./Input-BRIiCfgn.js";import"./ResponsivePopoverCommon.css-BJPXKYSd.js";import"./ValueStateMessage.css-CPuzDd78.js";import"./Suggestions.css-D0oXmqLX.js";import"./ListBoxItemGroupTemplate-COpsVFza.js";import"./ComboBoxItemGroup-CuHzLJ6_.js";import"./ListItemBaseTemplate-Dd1lTm6q.js";import"./Token-DzZ0_ysg.js";import"./ScrollEnablement-BjXact8U.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BCxLbPzf.js";import"./ToggleButton-CpsjIwWA.js";import"./SuggestionItem-dN69XrVf.js";import"./index-8HQvYLzF.js";import"./Option-CFeMc4Ab.js";import"./index-BrmJJ0nJ.js";import"./SegmentedButton-jZiliEy1.js";import"./index-Bm7nt3MU.js";import"./Select-DrpdgADy.js";import"./InvisibleMessage-BeRSLPnc.js";import"./slim-arrow-down-BSh7m90B.js";import"./index-CraAWzST.js";import"./index-BaRBa3SP.js";import"./index-Ds2AFYTa.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DzCjRTbW.js";import"./group-2-ZVRD52bo.js";import"./sort-descending-KiWNCiTs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-UuMtVOVu.js";import"./utils-6d5OHNfa.js";import"./index-OZfm5yOC.js";import"./index-C9QdKJZX.js";import"./index-DKsk6U_B.js";import"./navigation-down-arrow-BXwF2ivk.js";import"./navigation-right-arrow-Bt4GUYcC.js";import"./navigation-right-arrow-DDTiNM5w.js";import"./useCurrentTheme-BkU3ks1S.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C9Bu16Dr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cnj3p2ky.js";import"./paper-plane-UcJDeTb8.js";import"./index-DUYAr_8G.js";import"./less-D0rWAHm3.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

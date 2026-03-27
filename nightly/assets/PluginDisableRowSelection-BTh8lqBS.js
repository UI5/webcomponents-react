import{j as e}from"./iframe-GiALwnwk.js";import{useMDXComponents as n}from"./index-D5Br25pp.js";import{I as r}from"./CommandsAndQueries-C_IHadBx.js";import{M as s,C as l}from"./blocks-CWQEoHYq.js";import"./Tag-LkaAJwXo.js";import"./index-Df-74Kk_.js";import"./copy-BjtWQX8c.js";import{F as a}from"./Footer-CTpmUzQu.js";import"./PageNotFound-lhidYwaf.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C0drGsRM.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Cl18BXak.js";import"./index-j7N-4kUz.js";import"./index-DsAl_UTx.js";import"./index-Q6Oco0u-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3O-UdkwG.js";import"./addCustomCSSWithScoping-DYkoSNAv.js";import"./index-C2OBDsL0.js";import"./index-_Dwwjvl6.js";import"./index-D48RNIki.js";import"./information-DVV2_7m2.js";import"./sys-enter-2-BLXa0HBj.js";import"./alert-C-pLX4kq.js";import"./index-DmWjxGkj.js";import"./Illustrations-OXUCAhva.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C6gOy1mt.js";import"./delete-DW7iMKa4.js";import"./settings-DhekAkc-.js";import"./NoData-Ck7AmFs7.js";import"./NoFilterResults-Bdr0pWK1.js";import"./index-CSqY6oqd.js";import"./IllustratedMessage-CWorwHI8.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-XPdaETP2.js";import"./Input-CAEdEQYs.js";import"./ResponsivePopoverCommon.css-Dd9wsj0Z.js";import"./ValueStateMessage.css-CsbnVp72.js";import"./Suggestions.css-Dyj9iu2Q.js";import"./ListBoxItemGroupTemplate-D9WXmJvJ.js";import"./ComboBoxItemGroup-D_9tYabb.js";import"./ListItemBaseTemplate-GKtph4El.js";import"./Token-DqvIjy0G.js";import"./ScrollEnablement-Dfwd2yQV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CmNegGRy.js";import"./ToggleButton-CNcKoSZH.js";import"./multiselect-all-D9lBPv0A.js";import"./SuggestionItem-Cg2rZPAd.js";import"./index-CicHf-ly.js";import"./Option-BhicZcBl.js";import"./index-BbmFzA7n.js";import"./SegmentedButton-CFgw25ym.js";import"./index-COLQUQjD.js";import"./Select-wAYP5Lkd.js";import"./InvisibleMessage-C6bw_76w.js";import"./index-UQ8-K6Hp.js";import"./index-DdEYvRu2.js";import"./index-DBmUjfqO.js";import"./index-CSIhU0w2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CTpqP-um.js";import"./group-2-CYIXDJv4.js";import"./sort-descending-DYYr51Ys.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C8KGwsoJ.js";import"./utils-CfCxZg4A.js";import"./index-Bsb-fTU5.js";import"./index-CKCwf71g.js";import"./index-1SgfqZTS.js";import"./navigation-down-arrow-Dw3dfCIj.js";import"./navigation-right-arrow-CIGq5ecr.js";import"./navigation-right-arrow-C6hsZ--E.js";import"./useCurrentTheme-Bp92R9Yj.js";import"./index-BiTyXHR_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-EHylbWiC.js";import"./paper-plane-BcYb5zY2.js";import"./index-WUkGkR3K.js";import"./less-BKVo8B_X.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

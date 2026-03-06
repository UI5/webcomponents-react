import{j as e}from"./iframe-BoiPRijN.js";import{useMDXComponents as n}from"./index-BRummw3t.js";import{I as r}from"./CommandsAndQueries-BnJUOm3t.js";import{M as s,C as l}from"./blocks-CPrA8iQB.js";import"./Tag-B1iwkrJ0.js";import"./index-BTDY8alR.js";import"./copy-Dvt_rD-U.js";import{F as a}from"./Footer-iiNA2dGD.js";import"./PageNotFound-MgXkehwz.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DejHcveP.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CFo8_Djp.js";import"./index-BQY5khtD.js";import"./index-Jd5qJzJh.js";import"./index-DlyFbgdQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpV6XLVk.js";import"./addCustomCSSWithScoping-DTHpZRZB.js";import"./index-C15uyf0A.js";import"./index-BP_Slc-J.js";import"./index-dkrwuiwP.js";import"./information-BC9xfD2K.js";import"./sys-enter-2-CswPN__J.js";import"./alert-BvdiGKEq.js";import"./index-XewTnCmy.js";import"./Illustrations-CKlojL9Q.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-K5LglML7.js";import"./delete-Dla_cBMd.js";import"./settings--JyTse2K.js";import"./NoData-CEvC9SOK.js";import"./NoFilterResults-DGK3vz5s.js";import"./index-CUqI6XWZ.js";import"./IllustratedMessage-CUsnh6ic.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DTx62md9.js";import"./Input-BAuxatca.js";import"./ResponsivePopoverCommon.css-ujru0ghE.js";import"./ValueStateMessage.css-DEzEaU54.js";import"./Suggestions.css-xOjhYq7i.js";import"./ListBoxItemGroupTemplate-CaVscpMh.js";import"./ComboBoxItemGroup-qmXelGMa.js";import"./ListItemBaseTemplate-C5eauqC9.js";import"./Token-BjoEP2YG.js";import"./ScrollEnablement-DLJduNw8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ChcK6bsg.js";import"./ToggleButton-BGrpVUlG.js";import"./multiselect-all-M_uaembb.js";import"./SuggestionItem-CSav1c2B.js";import"./index-SHA1M5Y_.js";import"./Option-ViXAl4Kq.js";import"./index-x26HLP5K.js";import"./SegmentedButton-BSG--Us7.js";import"./index-D0HvuG0E.js";import"./Select-1bH1ueYZ.js";import"./InvisibleMessage-CXpqfns1.js";import"./index-CUzGhvMq.js";import"./index-CJrY5ywd.js";import"./index-CFdQXySd.js";import"./index-CGSreYF0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BGDbGBAq.js";import"./group-2-pBllKI8s.js";import"./sort-descending-LT_QT5Pk.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BfWkv8FN.js";import"./utils-Dyu_RtUB.js";import"./index-DCXSZGzE.js";import"./index-Cx95m7EI.js";import"./index-C2zlICN6.js";import"./navigation-down-arrow-BwpxFzct.js";import"./navigation-right-arrow-BOhWzFQj.js";import"./navigation-right-arrow-DU9-hztn.js";import"./useCurrentTheme-C3dnJtDI.js";import"./index-U_qmoDgq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DETi-hVj.js";import"./paper-plane-CuIzSdKp.js";import"./index-BbjXtlM4.js";import"./less-3QagZ96S.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

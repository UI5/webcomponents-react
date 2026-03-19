import{j as e}from"./iframe-CEsx9pS5.js";import{useMDXComponents as n}from"./index-gmjnJOv_.js";import{I as r}from"./CommandsAndQueries-KRiBOwvQ.js";import{M as s,C as l}from"./blocks-8Wtp1Sju.js";import"./Tag-HQWMt5YG.js";import"./index-CTv8OR9t.js";import"./copy-BKv99Y3s.js";import{F as a}from"./Footer-BzqBC082.js";import"./PageNotFound-Dm-lShwt.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DCsN8t5K.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Op-ol6Yv.js";import"./index-LEy71z39.js";import"./index-C0Wj8jmE.js";import"./index-CNLVL7wa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-dF5rg7Pk.js";import"./addCustomCSSWithScoping-C93rkw8E.js";import"./index-C3LB4ZIk.js";import"./index-BUd2Yp1O.js";import"./index-CYl2KpDn.js";import"./information-BsgOGoHr.js";import"./sys-enter-2-QXPkX9VX.js";import"./alert-C6xGNNq6.js";import"./index-D0QmD1oJ.js";import"./Illustrations-B8Nne3o3.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-3jM9F0nS.js";import"./delete-DoaTIgC3.js";import"./settings-Bs-jHTmN.js";import"./NoData-DT708HZj.js";import"./NoFilterResults-DVvHy-ZN.js";import"./index-iiUTeecg.js";import"./IllustratedMessage-iOV8hNFv.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Cs69J_Tc.js";import"./Input-AKSpFtND.js";import"./ResponsivePopoverCommon.css-C3wjaSr6.js";import"./ValueStateMessage.css-CpYwQkVy.js";import"./Suggestions.css-BxYCrzla.js";import"./ListBoxItemGroupTemplate-BK_1e7Jd.js";import"./ComboBoxItemGroup-jFQBitjk.js";import"./ListItemBaseTemplate-DUd-IfCf.js";import"./Token-ClXNXVqt.js";import"./ScrollEnablement-BgQUKBhv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-COM3Y617.js";import"./ToggleButton-FTZXlhur.js";import"./multiselect-all-CFU46Wod.js";import"./SuggestionItem-BI3gNhRI.js";import"./index-BgUx6RnF.js";import"./Option-kRDMIGPk.js";import"./index-4d8vZKF5.js";import"./SegmentedButton-MdHLGjvd.js";import"./index-ZrD11qG8.js";import"./Select-CXP-jLKH.js";import"./InvisibleMessage-B3PoH58P.js";import"./index-Bdb_o1Y4.js";import"./index-DCEtf4WG.js";import"./index-ZvwKpapI.js";import"./index-BWmFDyId.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DgexCQUt.js";import"./group-2-Co1xUlm9.js";import"./sort-descending-B9xjh0QK.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BVUjzMgE.js";import"./utils-DzwVL_EM.js";import"./index-CzmVoBXe.js";import"./index-h2yx8uA3.js";import"./index-BCC9jZwA.js";import"./navigation-down-arrow-voDMe6Oa.js";import"./navigation-right-arrow-ByPMDe9M.js";import"./navigation-right-arrow-BtIFfnR5.js";import"./useCurrentTheme-vsaSH-Ug.js";import"./index-CIdADm8S.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dq-8_1ru.js";import"./paper-plane-BZoVtF7s.js";import"./index-C0ZNn2ww.js";import"./less-DZRRGc_Y.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

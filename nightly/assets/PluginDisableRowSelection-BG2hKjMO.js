import{j as e}from"./iframe-D9-OPwVR.js";import{useMDXComponents as n}from"./index-rQrCyh78.js";import{I as r,F as s}from"./CommandsAndQueries-CGaVhEZZ.js";import{M as l,C as a}from"./blocks-yWwHjaca.js";import"./Tag-C4h9s18a.js";import"./index-C0yJm7_O.js";import"./copy-kqUatD9Y.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BiLsGBYW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqY2NvOe.js";import"./index-DWSshsP3.js";import"./index-D2zbla8P.js";import"./Link-C0FJUUPf.js";import"./index-C2LtXiVH.js";import"./index-B7FHygPg.js";import"./index-BKtOrYz7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHNrYRTW.js";import"./addCustomCSSWithScoping-BMu8GK7h.js";import"./index-CARCmcfE.js";import"./information-CXuNnhF_.js";import"./sys-enter-2-CpLLk16Q.js";import"./alert-DmoPAb-1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-kpLUfox6.js";import"./delete-8q-2SnNy.js";import"./settings-Bpoz5lRE.js";import"./NoData-EROY5bkG.js";import"./IllustratedMessage-DytrPSKy.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-zKEQv0vR.js";import"./index-Dpxo6caN.js";import"./index-CfkNruMI.js";import"./slim-arrow-down-D0gVics8.js";import"./Input-CSIFNCL6.js";import"./ResponsivePopoverCommon.css-C3lxCD6U.js";import"./ValueStateMessage.css-BrEs7f5W.js";import"./Suggestions.css-CFbdmF0I.js";import"./ListBoxItemGroupTemplate-c-FYvdWE.js";import"./ComboBoxItemGroup-DkC4WO5K.js";import"./ListItemBaseTemplate-i-G6TbOA.js";import"./Token-vKcedYbW.js";import"./ScrollEnablement-Co_z5fSg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-MB0v_CnF.js";import"./ToggleButton-CEqqS3wC.js";import"./SuggestionItem-C155tcTK.js";import"./index--hQpz-7j.js";import"./Option-CDBeTc3X.js";import"./index-BsFzClGp.js";import"./SegmentedButton-hl36dHeU.js";import"./index-4z4gHu9I.js";import"./Select-BWlL0NgQ.js";import"./InvisibleMessage-D7C8qh2V.js";import"./slim-arrow-down-BozxQxPU.js";import"./index-CEocB7zn.js";import"./index-V_dIRRcU.js";import"./index-fHuC-P80.js";import"./index-BZtku0It.js";import"./IconDesign-DXd8PPVF.js";import"./filter-diVsbBEy.js";import"./group-2-BfFZyU2o.js";import"./sort-descending-CWWRG3lr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CSa0RqIf.js";import"./utils-CFI02rUA.js";import"./index-Dg1PSLCa.js";import"./index-CT_cyvy_.js";import"./index-C9-lc1hX.js";import"./navigation-down-arrow-D7LYppDl.js";import"./navigation-right-arrow-w26ji6kI.js";import"./navigation-right-arrow-CmoZr5kZ.js";import"./useCurrentTheme-DbndD2Nd.js";import"./index-Db7VAK4s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B0oRJVLp.js";import"./paper-plane-CUa9Y-jj.js";import"./index-CYFBViS-.js";import"./less-D7uaR2Sp.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

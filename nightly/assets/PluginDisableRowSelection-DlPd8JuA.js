import{j as e}from"./iframe-CyAbfAjR.js";import{useMDXComponents as n}from"./index-06KDG4AT.js";import{I as r,F as s}from"./CommandsAndQueries-B2npLt1g.js";import{M as l,C as a}from"./blocks-D91UiS7A.js";import"./Tag-DcmGlVyp.js";import"./index-Dx49XSH_.js";import"./copy-DuIUrssG.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CduZ0bih.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B_ujFW-9.js";import"./index-zvTPe1JW.js";import"./index-C2mRWa3H.js";import"./Link-Cj1yeMGo.js";import"./index-DTVJfpj2.js";import"./index-DhltPY3F.js";import"./index-CmuOjIMO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyLeRq-g.js";import"./addCustomCSSWithScoping-zxsplMRu.js";import"./index-DGFLZE4P.js";import"./information-Rep9dVOS.js";import"./sys-enter-2-_ycOnn14.js";import"./alert-BWU-sYPN.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BJqtSdbn.js";import"./delete-DllOoAvf.js";import"./settings-wJbQBcLC.js";import"./NoData-CBuJCjQZ.js";import"./IllustratedMessage-tA6cAG-s.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Bnj3-Z8S.js";import"./index-40ttS4tt.js";import"./index-aWCb2995.js";import"./slim-arrow-down-DdNrUHXY.js";import"./Input-DdGxyUaG.js";import"./ResponsivePopoverCommon.css-BVA8ZcTn.js";import"./ValueStateMessage.css-CWyNZgk-.js";import"./Suggestions.css-YuDlW85k.js";import"./ListBoxItemGroupTemplate-CzIT6ZwA.js";import"./ComboBoxItemGroup-BwIIuCG8.js";import"./ListItemBaseTemplate-BllUB4lH.js";import"./Token-BjNM8qNb.js";import"./ScrollEnablement-_UA22n7q.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-QR6pRRAu.js";import"./ToggleButton-n_dD7Tpj.js";import"./SuggestionItem-DDD35SgE.js";import"./index-ATdZ4JNt.js";import"./Option-BPW8-nZA.js";import"./index-D6n5UcXf.js";import"./SegmentedButton-CVME573C.js";import"./index-JNLd-Q23.js";import"./Select-DTuI2LUV.js";import"./InvisibleMessage-CwIIQAVa.js";import"./slim-arrow-down-BfmJQhdi.js";import"./index--lMleNuo.js";import"./index-C75xx_by.js";import"./index-DIZzn41L.js";import"./index-EwWM-M_C.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DRLptP8y.js";import"./group-2-CYDrIlQx.js";import"./sort-descending-zDD6-75v.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C9_XexGy.js";import"./utils-BwnFu7uR.js";import"./index-DM9-P2gy.js";import"./index-Bs-9er-e.js";import"./index-BEWwn3Xg.js";import"./navigation-down-arrow-CL70XcuK.js";import"./navigation-right-arrow-ChTgZnRi.js";import"./navigation-right-arrow-DpOJRghh.js";import"./useCurrentTheme-CWQeV1Cm.js";import"./index-B72PquXy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CvAdZl9h.js";import"./paper-plane-BQ2yiuh0.js";import"./index-Dc7OW__V.js";import"./less-Duojpb1N.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

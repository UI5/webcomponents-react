import{j as e}from"./iframe-utVLPk6_.js";import{useMDXComponents as n}from"./index-_7Ivp6Lr.js";import{I as r,F as s}from"./CommandsAndQueries-BVodeffY.js";import{M as l,C as a}from"./blocks-CRxaTikh.js";import"./Tag-LOOaBowr.js";import"./index-CJmgWra1.js";import"./copy-lkIY5Hce.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BDsnXMC6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5CeUqLr.js";import"./index-vwTPEa24.js";import"./index-w9tOLOey.js";import"./Link-BwFR1FvL.js";import"./index-CQTFiQOO.js";import"./index-BNJRxg3C.js";import"./index-Bt2MbZdo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BP35uBwA.js";import"./addCustomCSSWithScoping-ByL_YC7i.js";import"./index-B4YNNEZt.js";import"./information-D-kuCoWP.js";import"./sys-enter-2-ClJM_7Cf.js";import"./alert-CrgSVEE-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D9p4z9Ic.js";import"./delete-DU934BZr.js";import"./settings-DNYW2Yi4.js";import"./NoData-DnrO3Jwz.js";import"./IllustratedMessage-DRvKcE8V.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DuJYHUBv.js";import"./index-DR6xJv6H.js";import"./index-C1CQn4Ke.js";import"./slim-arrow-down-CGFNdOyS.js";import"./Input-tiP9VWUa.js";import"./ResponsivePopoverCommon.css-B57nbVdH.js";import"./ValueStateMessage.css-JwjTw4R6.js";import"./Suggestions.css-CCPLE5i3.js";import"./ListBoxItemGroupTemplate-Ck1u2roF.js";import"./ComboBoxItemGroup-C0T7EKNO.js";import"./ListItemBaseTemplate-C2vXW6Ud.js";import"./Token-DQU0dq_y.js";import"./ScrollEnablement-CN5L_Azg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BjnDf0fW.js";import"./ToggleButton-C4-LaA2x.js";import"./SuggestionItem-DboqQoqi.js";import"./index-F4xTZLhy.js";import"./Option-sIfC3W_q.js";import"./index-BtNFNoxA.js";import"./SegmentedButton-vHAZ21UT.js";import"./index-SO2G2vA7.js";import"./Select-DZIQ9ThU.js";import"./InvisibleMessage-CxrOCkfz.js";import"./slim-arrow-down-BfxVVO5J.js";import"./index-B6DVqkRr.js";import"./index-DqzlYh_H.js";import"./index-DGUOU9Dg.js";import"./index-BIVITqPd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B_SeQI6p.js";import"./group-2-DwYUID86.js";import"./sort-descending-s-9kbj_2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CReDoCO5.js";import"./utils-CKyuyf9p.js";import"./index-DIwmFcHk.js";import"./index-Bs3vKR02.js";import"./index-zHNwrOOb.js";import"./navigation-down-arrow-CSxEN5wN.js";import"./navigation-right-arrow-CElFKq2C.js";import"./navigation-right-arrow-Dfc9Wtwu.js";import"./useCurrentTheme-DctUO6zQ.js";import"./index-EZDuqYef.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DR6ovS2D.js";import"./paper-plane-BTVeyq21.js";import"./index-B60t1jRe.js";import"./less-Bc9CIIDh.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

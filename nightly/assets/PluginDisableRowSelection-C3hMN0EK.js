import{j as e}from"./iframe-B3T0Oj7B.js";import{useMDXComponents as n}from"./index-D3UxDze4.js";import{I as r,F as s}from"./CommandsAndQueries-DvsDK9ZB.js";import{M as l,C as a}from"./blocks-CyPgi3fl.js";import"./Tag-BebiXErc.js";import"./index-dJAxIfZY.js";import"./copy-_Qj_KEfj.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CLdVk_2J.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D37akpKi.js";import"./index-B8hvCU9O.js";import"./index-BctJwJOg.js";import"./Link-Bk4EX_BP.js";import"./index-Bik-cKeX.js";import"./index-D_qT_Ogl.js";import"./index-CpVd5OAx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVuzLNiB.js";import"./addCustomCSSWithScoping-BR9GACjU.js";import"./index-BywqBC1y.js";import"./information-CDiFrRjk.js";import"./sys-enter-2-CspjHMoa.js";import"./alert-BsEVUmBp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXXzDXeg.js";import"./delete-DoH2BMDU.js";import"./settings-D4LWYr7c.js";import"./NoData-DPlWgMdh.js";import"./IllustratedMessage-CTn70Kkd.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B5oTX081.js";import"./index-D_ervA3L.js";import"./index-BUUNpLyt.js";import"./slim-arrow-down-CacMbODe.js";import"./Input-B0UijuIu.js";import"./ResponsivePopoverCommon.css-Dq6Kf127.js";import"./ValueStateMessage.css-BCQWXayY.js";import"./Suggestions.css-Dh9vGknx.js";import"./ListBoxItemGroupTemplate-BF1ZMdMn.js";import"./ComboBoxItemGroup-Dpv9BmJs.js";import"./ListItemBaseTemplate-BJJTqK00.js";import"./Token-kg9GxVv1.js";import"./ScrollEnablement-CfYd06M2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CFRLr_io.js";import"./ToggleButton-MEuIik9w.js";import"./SuggestionItem-Bh2xAfSB.js";import"./index-CmMlZf5u.js";import"./Option-B57NkkPv.js";import"./index-DSYwj30z.js";import"./SegmentedButton-COs6qsY4.js";import"./index-DjcU9zEx.js";import"./Select-g-D7vPwS.js";import"./InvisibleMessage-CAuS8-0Y.js";import"./slim-arrow-down-tnJadlmU.js";import"./index-18Hv_f08.js";import"./index-Bg2b-U4S.js";import"./index-CxcnGbRu.js";import"./index-4zbN5094.js";import"./IconDesign-DXd8PPVF.js";import"./filter-zPNv8kbn.js";import"./group-2-CVriVckM.js";import"./sort-descending-BXBa6N4F.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cddj7KtI.js";import"./utils-BEKiXHya.js";import"./index-DXpg7xk7.js";import"./index-BDmNg7zx.js";import"./index-DhFaY-S7.js";import"./navigation-down-arrow-Crva_6Xt.js";import"./navigation-right-arrow-CzyBM415.js";import"./navigation-right-arrow-DCKCZfxz.js";import"./useCurrentTheme-eSQOFi4m.js";import"./index-zGZbQuqh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BlmVpLoY.js";import"./paper-plane-CR0-psxw.js";import"./index-DhLMwIyh.js";import"./less-DTZtCal7.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

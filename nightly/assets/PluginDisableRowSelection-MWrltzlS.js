import{j as e}from"./iframe-B9-Lkkb_.js";import{useMDXComponents as n}from"./index-BHB6dH51.js";import{I as r,F as s}from"./CommandsAndQueries-DLAu90uX.js";import{M as l,C as a}from"./blocks-DiSlIEhk.js";import"./Tag-CCKiiuhz.js";import"./index-Bp8duZh7.js";import"./copy-Cr6zYfEo.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DUaS7Rgy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B__WJxOt.js";import"./index-B3mrOTgf.js";import"./index-Uzak41NI.js";import"./Link-C6rFWX_2.js";import"./index-Cw3xsh9-.js";import"./index-DkC2gP8p.js";import"./index-BetvcNL1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee--tlCK9Sx.js";import"./addCustomCSSWithScoping-dvkvBHTK.js";import"./index-GyCUx3PS.js";import"./information-D0Z0JvqI.js";import"./sys-enter-2-CI12jhXR.js";import"./alert-BH05V2Qa.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DALdZ-m2.js";import"./delete-CWfFsUl8.js";import"./settings-CxujDLn5.js";import"./NoData-Birea-au.js";import"./IllustratedMessage-B0FRqShC.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-XtYsGwDh.js";import"./index-BfMePIv-.js";import"./index-CuZnP9f5.js";import"./slim-arrow-down-BSwFrx-6.js";import"./Input-DjfKo2Sh.js";import"./ResponsivePopoverCommon.css-0xS8ouhO.js";import"./ValueStateMessage.css-Cx0EHJDT.js";import"./Suggestions.css-DHKy5z0i.js";import"./ListBoxItemGroupTemplate-DIuWxvFa.js";import"./ComboBoxItemGroup-xzY_qUqr.js";import"./ListItemBaseTemplate-DiAN3hV1.js";import"./Token-C6SSdJPd.js";import"./ScrollEnablement-KTUvEJYU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-bYgjbEr1.js";import"./ToggleButton-BUijnt0i.js";import"./SuggestionItem-B-pCF7HD.js";import"./index-BfTMPCrh.js";import"./Option-CJIIy65Q.js";import"./index-C8ev54Zj.js";import"./SegmentedButton-wSNeJPjb.js";import"./index-CPa9DL4h.js";import"./Select-CDXhzhip.js";import"./InvisibleMessage-B56PPVnA.js";import"./slim-arrow-down-Cwc8ylhp.js";import"./index-CKHT_nu5.js";import"./index-BQ3eva5q.js";import"./index-D_iSvJPf.js";import"./index-DXx-5JGj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BkCieJa7.js";import"./group-2-Bh4r1QBU.js";import"./sort-descending-Cq24lhVz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-COg2_de0.js";import"./utils-DALMlQXA.js";import"./index-BZa5OPXC.js";import"./index-BoOy7SR4.js";import"./index-BStOHSn9.js";import"./navigation-down-arrow-CTvkFjXS.js";import"./navigation-right-arrow-ol9XXUdO.js";import"./navigation-right-arrow-Bh96P4YL.js";import"./useCurrentTheme-DbMqVJhl.js";import"./index-zY56nHkc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-0ILMNLpe.js";import"./paper-plane-Bq_Va7ug.js";import"./index-C0dFfThB.js";import"./less-DdiRz5Ea.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

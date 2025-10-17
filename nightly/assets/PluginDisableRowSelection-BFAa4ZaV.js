import{j as e}from"./iframe-sx-xxOBR.js";import{useMDXComponents as n}from"./index-BuQKvIRW.js";import{I as r,F as s}from"./CommandsAndQueries-kGwhyxXS.js";import{M as l,C as a}from"./blocks-aDd-3g3c.js";import"./Tag-CA4Gam3K.js";import"./index-Dp445doz.js";import"./copy-XBbKngNP.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CMa_80PA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWZ78BHI.js";import"./index-C5D1K9-k.js";import"./index-DWVCty5U.js";import"./Link-Bcw7GIzc.js";import"./index-CHQv5ZFl.js";import"./index-CHIAWjx6.js";import"./index-CGT84HkW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-PUGMtL6z.js";import"./addCustomCSSWithScoping-ByQ6RofR.js";import"./index-FBk0AP6g.js";import"./information-C7RaeOmw.js";import"./sys-enter-2-CEfOZp2B.js";import"./alert-DrhbDEmw.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CytgXyai.js";import"./delete-DVuKaiV3.js";import"./settings-GTb4An8K.js";import"./NoData-CisJ0jAE.js";import"./IllustratedMessage-ylht49Gh.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BhN76SkG.js";import"./index-BnZ0pG76.js";import"./index-7bEDU5Wz.js";import"./slim-arrow-down-0Axvdn4U.js";import"./Input-CfL161m4.js";import"./ResponsivePopoverCommon.css-URhSdytj.js";import"./ValueStateMessage.css-BKDnJ5vj.js";import"./Suggestions.css-DvZYKoYH.js";import"./ListBoxItemGroupTemplate-BXCNzsvz.js";import"./ComboBoxItemGroup-Cdycyjl-.js";import"./ListItemBaseTemplate-DxDFiEvX.js";import"./Token-BrsOZpIi.js";import"./ScrollEnablement-C51h3RWn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ctu0x0fN.js";import"./ToggleButton-D8TglRo1.js";import"./SuggestionItem-ZEYBTLf8.js";import"./index-CMQ3jpyy.js";import"./Option-C5EHVmK0.js";import"./index-OAs5zmNm.js";import"./SegmentedButton-CaqqCqeD.js";import"./index-B8TC9aWT.js";import"./Select-CXxEzLVO.js";import"./InvisibleMessage-d9wVLZu-.js";import"./slim-arrow-down-DNpkKrnY.js";import"./index-DlAEUI2J.js";import"./index-C6fXq4ZZ.js";import"./index-eIt60uOw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B1AwvrwL.js";import"./group-2-AG8_g4pP.js";import"./sort-descending-jQdQEEX6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D-DMMbFy.js";import"./utils-CQxtN9CL.js";import"./index-D-8sThiq.js";import"./index-Dpz8iXz1.js";import"./index-BJvovWPi.js";import"./navigation-down-arrow-CHrPfOcq.js";import"./navigation-right-arrow-CU5VIR2Q.js";import"./navigation-right-arrow-C4byvkGY.js";import"./useCurrentTheme-C69-ISE_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BcwjmFpo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CV_tHasf.js";import"./paper-plane-BpEKW78p.js";import"./index-twVhy0ce.js";import"./less-DzybJbHR.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

import{j as e}from"./iframe-BB4qEXD6.js";import{useMDXComponents as n}from"./index-Du8_Rn8P.js";import{I as r,F as s}from"./CommandsAndQueries-DRsaMJRB.js";import{M as l,C as a}from"./blocks-CR8KOJrJ.js";import"./Tag-Da7QnCDv.js";import"./index-DdTPxxL_.js";import"./copy-BVMnHcDg.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BeJL7Ye6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-x2cXHq8y.js";import"./index-9Py2403r.js";import"./index-CsmFqYDM.js";import"./Link-BYUEfY7R.js";import"./index-Dt_2dhRA.js";import"./index-DMHUWYeC.js";import"./index-CztWxO-c.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bzv1Zaa7.js";import"./addCustomCSSWithScoping-Cbj-6aXb.js";import"./index-Dpli1QB-.js";import"./information-Y0x5W-OX.js";import"./sys-enter-2-BJKr7qQ1.js";import"./alert-BQZZbhbR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-erJBQNRZ.js";import"./delete-D5Bux8E7.js";import"./settings-BB1PJ6vP.js";import"./NoData-BAy4r6V2.js";import"./IllustratedMessage-Cp617NHY.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BPmeBzvN.js";import"./index-CA-cd2np.js";import"./index-AswMmsDf.js";import"./slim-arrow-down-BddUJ-KN.js";import"./Input-DkXdapB6.js";import"./ResponsivePopoverCommon.css-Dw9E0nMz.js";import"./ValueStateMessage.css-BkhABoMh.js";import"./Suggestions.css-BC1EOLh5.js";import"./ListBoxItemGroupTemplate-HpSvs65o.js";import"./ComboBoxItemGroup-CCrdSIbE.js";import"./ListItemBaseTemplate-CAROCz5m.js";import"./Token-DoaTlhno.js";import"./ScrollEnablement-BU_OfE9O.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CI0I5uqQ.js";import"./ToggleButton-BdNP-MBf.js";import"./SuggestionItem-DeZkVwUY.js";import"./index-CmahwXl7.js";import"./Option-BGTVK_my.js";import"./index-9-V0BX8k.js";import"./SegmentedButton-BuoqzDHW.js";import"./index-_XZyBcjC.js";import"./Select-LlNkV-fW.js";import"./InvisibleMessage-DyYsNy9h.js";import"./slim-arrow-down-BARLwaMW.js";import"./index-BK2SG_SP.js";import"./index-9GnEvteS.js";import"./index-OBDc_NcL.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DsHNEEGx.js";import"./group-2-CrLwAnmS.js";import"./sort-descending-0WZUg8PX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-1qNsr_an.js";import"./utils-BdVBr4pQ.js";import"./index-DIzDIuZy.js";import"./index-BRJ-40Zh.js";import"./index-DB-fTerp.js";import"./navigation-down-arrow-VkG8_yjV.js";import"./navigation-right-arrow-HRIp1p54.js";import"./navigation-right-arrow-T0LxulNL.js";import"./useCurrentTheme-D6vYZD-2.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C2hZK3d5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cj10AoIb.js";import"./paper-plane-BYFBOW_O.js";import"./index-DMqgnaw_.js";import"./less-B1wulFXz.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

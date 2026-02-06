import{j as e}from"./iframe-DsgKHrOc.js";import{useMDXComponents as n}from"./index-R1G5OZPs.js";import{I as r,F as s}from"./CommandsAndQueries-D_2jUbP4.js";import{M as l,C as a}from"./blocks-CQue4LlW.js";import"./Tag-BTAP7zi_.js";import"./index-B3N-7g7X.js";import"./copy-DlTApuN1.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-i7kpTZ_A.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNMfu1Bq.js";import"./index-CnrY0exf.js";import"./index-BdUiiHhG.js";import"./Link-DoHEtv1B.js";import"./index-Dm9AGWV-.js";import"./index-BomSeR7F.js";import"./index-W4kN-wgY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BfAO3hVt.js";import"./addCustomCSSWithScoping-CsuAJYaG.js";import"./index-0Q75H94O.js";import"./information-ls1iI2xZ.js";import"./sys-enter-2-BOSLgeP2.js";import"./alert-BH6ifEnA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-SSqF3mYr.js";import"./delete-BXxwRw5y.js";import"./settings-BDZ662oR.js";import"./NoData-mzNWeO_R.js";import"./IllustratedMessage-CwAF6TLx.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CBmQxRIQ.js";import"./index-CO7AsHeT.js";import"./index-DPmxY5Fk.js";import"./slim-arrow-down-BFPvdtk4.js";import"./Input-CLRI9CEh.js";import"./ResponsivePopoverCommon.css-Dz_dByIm.js";import"./ValueStateMessage.css-C1b8jnbg.js";import"./Suggestions.css-Y2NBFohg.js";import"./ListBoxItemGroupTemplate-Cu8LS11Q.js";import"./ComboBoxItemGroup-zDzTNuwT.js";import"./ListItemBaseTemplate-Ch-vNojB.js";import"./Token-DNwyr1VA.js";import"./ScrollEnablement-CijCXV-f.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CPkU6wJ3.js";import"./ToggleButton-COie_AKR.js";import"./SuggestionItem-B4-4_m5w.js";import"./index-HXM5p6gS.js";import"./Option-CQ19A_kf.js";import"./index-0mAv68Ot.js";import"./SegmentedButton-h60sJA6a.js";import"./index-C8-_l6KY.js";import"./Select-MmIlw-od.js";import"./InvisibleMessage-q1FFN4_p.js";import"./slim-arrow-down-BLSo6u6P.js";import"./index-DK0w5O82.js";import"./index-Dn-44Img.js";import"./index-CUAjbgKI.js";import"./index-CLFnZnkT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DY9qOiNW.js";import"./group-2-B0_QXr5r.js";import"./sort-descending-B2J58p1j.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DE-0JGpI.js";import"./utils-BcerUUFZ.js";import"./index-QVkFgjH8.js";import"./index-0oo2lNeo.js";import"./index-DaiJcS-C.js";import"./navigation-down-arrow-bXhK5skS.js";import"./navigation-right-arrow-uarvhyB4.js";import"./navigation-right-arrow-7Xw2c4NW.js";import"./useCurrentTheme-BDtdl0D9.js";import"./index-NzD9g4E3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-IwUpqcbd.js";import"./paper-plane-DoDYrXu7.js";import"./index-B6hPTyEO.js";import"./less-BPtBbolb.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

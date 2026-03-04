import{j as e}from"./iframe-CLKwUGEX.js";import{useMDXComponents as n}from"./index-DCuwspND.js";import{I as r,F as s}from"./CommandsAndQueries-dz6NHoyr.js";import{M as l,C as a}from"./blocks-Dh7hbfcJ.js";import"./Tag-CfLVXJVc.js";import"./index-h52TWGHx.js";import"./copy-BrK10eH_.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DdSElbyf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Veg9_1qu.js";import"./index-ZH4BIl7e.js";import"./index-CkL1gWNe.js";import"./Link-Bqvbz9lT.js";import"./index-CL8a7czm.js";import"./index-CRtbNwl1.js";import"./index-BIRKClWd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYpAqTMA.js";import"./addCustomCSSWithScoping-Ckj5BS6-.js";import"./index-CuwqMzEM.js";import"./information-D0EfmlkL.js";import"./sys-enter-2-CbYR1yRQ.js";import"./alert-B6Esz0N1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cq8bkL-u.js";import"./delete-zgSUoyOg.js";import"./settings-CBLLXz6N.js";import"./NoData-DSW01fss.js";import"./IllustratedMessage-DAmuZ2UN.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BA9ELEvi.js";import"./index-ka-ToCm_.js";import"./index-BHjhclkw.js";import"./slim-arrow-down-fLJI98pt.js";import"./Input-gdpdxYMJ.js";import"./ResponsivePopoverCommon.css-DtENZeG8.js";import"./ValueStateMessage.css-B4kKha1P.js";import"./Suggestions.css-BCv_xKxV.js";import"./ListBoxItemGroupTemplate-9TRbrDJ2.js";import"./ComboBoxItemGroup-P9iDEYGv.js";import"./ListItemBaseTemplate-CXA-fGl_.js";import"./Token-BM0X9bQT.js";import"./ScrollEnablement-DHvtGpUc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYUOfpyN.js";import"./ToggleButton-rcmCnfHw.js";import"./SuggestionItem-IrwYDQ3Z.js";import"./index--P7kWLvm.js";import"./Option-CAO0eJwC.js";import"./index-BgqJi3Py.js";import"./SegmentedButton-Du7zSbut.js";import"./index-DcGyQm7o.js";import"./Select-Cy1yC1om.js";import"./InvisibleMessage-DsuuJ4si.js";import"./slim-arrow-down-NfxAXgq9.js";import"./index-7v9TUzFY.js";import"./index-u6yZ5lZT.js";import"./index-D_cyz0Cs.js";import"./index-FsTUQbBQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BcOrZlNJ.js";import"./group-2-Cx0jhwyi.js";import"./sort-descending-BL8Dl8a2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D85Rx8La.js";import"./utils-Bfz42nTV.js";import"./index-Z-BdczqP.js";import"./index-Dq44XCib.js";import"./index-B31IT1af.js";import"./navigation-down-arrow-Dx9epi_Y.js";import"./navigation-right-arrow-Dk1AH9Ft.js";import"./navigation-right-arrow-BcI6851b.js";import"./useCurrentTheme-BkslSs8D.js";import"./index-BvhjsuIG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-YHsws3VW.js";import"./paper-plane-C2yCzXa-.js";import"./index-CPp6j0v_.js";import"./less-BUl18ff9.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

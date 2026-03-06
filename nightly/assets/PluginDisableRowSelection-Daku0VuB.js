import{j as e}from"./iframe-geaynzT-.js";import{useMDXComponents as n}from"./index-Dy0P-MTk.js";import{I as r}from"./CommandsAndQueries-B6i0zlBz.js";import{M as s,C as l}from"./blocks-DvwiWHqk.js";import"./Tag-B3QRrnQ_.js";import"./index-D-nFJC4E.js";import"./copy-ww3KL2rX.js";import{F as a}from"./Footer-BsbiOiC7.js";import"./PageNotFound-BfSR_Vk2.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DjpnOgbB.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-nEWS4oVx.js";import"./index-D5uUZfuG.js";import"./index-CG-HWMDU.js";import"./index-CKM0CrDr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-HivzyS7T.js";import"./addCustomCSSWithScoping-xbUSRjKw.js";import"./index-Bp_EOu-Q.js";import"./index-CTwiS7Jw.js";import"./index-sZJqmiwE.js";import"./information-BPLaT9Ap.js";import"./sys-enter-2-BM-hyHpl.js";import"./alert-BbpVY6El.js";import"./index-_qPK30Mb.js";import"./Illustrations-Da51eylt.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CvV10EhM.js";import"./delete-wfRZqLc2.js";import"./settings-CvCMUxfs.js";import"./NoData-r4RJuD6g.js";import"./NoFilterResults-Brt2dGQf.js";import"./index-C3GLDV3Z.js";import"./IllustratedMessage-DTZGdweY.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-ClFOA2Te.js";import"./Input-D718yOxL.js";import"./ResponsivePopoverCommon.css-BNVSGncI.js";import"./ValueStateMessage.css-BCq31M5q.js";import"./Suggestions.css-B2NS7aEt.js";import"./ListBoxItemGroupTemplate-CaN9gZpp.js";import"./ComboBoxItemGroup-Cc09CfZv.js";import"./ListItemBaseTemplate-B-UBUhMu.js";import"./Token-B-DIQD6O.js";import"./ScrollEnablement-DPeWyNUe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CrjdizTB.js";import"./ToggleButton-CXmo7_Af.js";import"./multiselect-all-BOi-ndht.js";import"./SuggestionItem-C_3zoX6X.js";import"./index-C8LuF1Bv.js";import"./Option-BZsuWY7l.js";import"./index-DPfU6hxd.js";import"./SegmentedButton-CiK9dfWD.js";import"./index-Dwqy5Aze.js";import"./Select--P873eyr.js";import"./InvisibleMessage-CbKTPW6d.js";import"./index-BUI55KcM.js";import"./index-DlPKLGff.js";import"./index-CV_2N-M1.js";import"./index-vaOvjXNl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-be4ddmTM.js";import"./group-2-DID5u7R4.js";import"./sort-descending-B504Ry9y.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3_V7TUA.js";import"./utils-Dzhppj39.js";import"./index-BYmoNn4O.js";import"./index-BY9yrlLW.js";import"./index-BW0Q-ohg.js";import"./navigation-down-arrow-gLMgLysX.js";import"./navigation-right-arrow-hDy11WuW.js";import"./navigation-right-arrow-DK5EYtwV.js";import"./useCurrentTheme-CdjoVC5_.js";import"./index-DrHoGjWG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D19__XCT.js";import"./paper-plane-CFu3e08q.js";import"./index-CfLv6iWt.js";import"./less-DLnKLgv5.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

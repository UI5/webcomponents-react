import{j as e}from"./iframe-D89K97gv.js";import{useMDXComponents as n}from"./index-BJvRQfhi.js";import{I as r}from"./CommandsAndQueries-CkqpoGcY.js";import{M as s,C as l}from"./blocks-Cy4BDnT1.js";import"./Tag-BMl9amXb.js";import"./index-CG_fwaJ_.js";import"./copy-BeHvABnn.js";import{F as a}from"./Footer-a85ddGr6.js";import"./PageNotFound-Btnag6Vx.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-oCCJWMNg.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-vvC1wc11.js";import"./index-BFDU-uR3.js";import"./index-BmDAlwXN.js";import"./index-CSxOLZlI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-JuHHWHgI.js";import"./addCustomCSSWithScoping-D0msxKTR.js";import"./index-CHwgMgjy.js";import"./index-CD-X_9j4.js";import"./index-_KpWx7_H.js";import"./information-DxfKMTg6.js";import"./sys-enter-2-aIi16_BZ.js";import"./alert-CzEHD23R.js";import"./index-D9Orgelb.js";import"./Illustrations-llDvpFiy.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BV-MPmfs.js";import"./delete-CDBnRSmI.js";import"./settings-CS9wt6xx.js";import"./NoData-TiUxWOF0.js";import"./NoFilterResults-BG1zY0NJ.js";import"./index-Cl-Gddv-.js";import"./IllustratedMessage-BT6x5IWF.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-XI-ucwDx.js";import"./slim-arrow-down-CkA2t8ep.js";import"./Input-HMow9_Ri.js";import"./ResponsivePopoverCommon.css-B4cnMME8.js";import"./ValueStateMessage.css-DJ_4De0C.js";import"./Suggestions.css-CmSTd68P.js";import"./ListBoxItemGroupTemplate-SgdcVzDK.js";import"./ComboBoxItemGroup-DK3C-asM.js";import"./ListItemBaseTemplate-Cq6ju2pO.js";import"./Token-DfLKw0sY.js";import"./ScrollEnablement-B2bIFiiq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CvXtV7K9.js";import"./ToggleButton-CvjwTlcC.js";import"./SuggestionItem-NIPuowA8.js";import"./index-Bfnhilaw.js";import"./Option-DOgA1AL4.js";import"./index-CXFOzfDq.js";import"./SegmentedButton-pvnBLEkh.js";import"./index-CChlhhr6.js";import"./Select-CXntB0Wh.js";import"./InvisibleMessage-D5AKnrSr.js";import"./slim-arrow-down-CnxZFJRE.js";import"./index-C35w3JOz.js";import"./index-BmCXl-iO.js";import"./index-C2HJgTFD.js";import"./index-Cra91enV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dy65h00_.js";import"./group-2-ukQk0aAx.js";import"./sort-descending-CQnKQ-1r.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BDiVcx2S.js";import"./utils-BRQPpEIZ.js";import"./index-CNgiS241.js";import"./index-RAeoqsxb.js";import"./index-CTrVZ_lH.js";import"./navigation-down-arrow-DVUqx3Rx.js";import"./navigation-right-arrow-B79FJGbb.js";import"./navigation-right-arrow-Dd8N9i68.js";import"./useCurrentTheme-BsjFocph.js";import"./index-DHl7KnP_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-cIjYlE45.js";import"./paper-plane-BK5Km9Zj.js";import"./index-JUBIj-Wi.js";import"./less-C7TJwMJK.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(a,{})]})}function Ue(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ue as default};

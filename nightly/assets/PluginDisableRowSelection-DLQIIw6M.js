import{j as e}from"./iframe-DZSv2zZb.js";import{useMDXComponents as n}from"./index-BqdSmNlq.js";import{I as r,F as s}from"./CommandsAndQueries-CZUib4pD.js";import{M as l,C as a}from"./blocks-BSnZQBrX.js";import"./Tag-BEM_u6FU.js";import"./index-BBEh2DsQ.js";import"./copy-23w1fGpY.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C4VBB38l.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C2hiyRQA.js";import"./index-CCnKvqA0.js";import"./index-DrF5gpEw.js";import"./Link-CCplhiXF.js";import"./index-EGktcBQb.js";import"./index-DRWzqH2N.js";import"./index-CYgXuNom.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Z5sB9nBC.js";import"./addCustomCSSWithScoping-DXOZ95so.js";import"./index-lD82309j.js";import"./information-COD7Swxj.js";import"./sys-enter-2-CFC1gFhb.js";import"./alert-CTmlBOXX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-1sxQtFsG.js";import"./delete-DI6RV7tq.js";import"./settings-l6CcnnHP.js";import"./NoData-DLhCBRaq.js";import"./IllustratedMessage-D8pCRgjf.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BDEpL-v7.js";import"./index-CLQJqlCs.js";import"./index-CnzAFXhm.js";import"./slim-arrow-down-CyuMg1At.js";import"./Input-DNMPeMSb.js";import"./ResponsivePopoverCommon.css-KtD9lY_C.js";import"./ValueStateMessage.css-s-LD16Ms.js";import"./Suggestions.css-rNWcSnI_.js";import"./ListBoxItemGroupTemplate-DCfYj4zl.js";import"./ComboBoxItemGroup-BKdcP3-8.js";import"./ListItemBaseTemplate-BxdUV-4d.js";import"./Token-C-7Kub3Q.js";import"./ScrollEnablement-B-_jXnOO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BumMf1lq.js";import"./ToggleButton-zAP43mrP.js";import"./SuggestionItem-C071nU1p.js";import"./index-CyyzdwPX.js";import"./Option-CFccuGHw.js";import"./index-DTcOlFUA.js";import"./SegmentedButton-DFozwT5-.js";import"./index-BK-Z6osY.js";import"./Select-DTXWeNTs.js";import"./InvisibleMessage-DQakaRnz.js";import"./slim-arrow-down-D7c7A5lb.js";import"./index-BzE-wgMg.js";import"./index-EA0cjcxp.js";import"./index-BvFjW66u.js";import"./index-Dqc9eXJK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BdNFGMUl.js";import"./group-2-Cdsp5Lj1.js";import"./sort-descending-CYgNNlsg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3f_41XS.js";import"./utils-7Hi63yvZ.js";import"./index-DbLzE552.js";import"./index-CLU12hYv.js";import"./index-CIpEOGpc.js";import"./navigation-down-arrow-CEqrsa8y.js";import"./navigation-right-arrow-D-lQ_y8p.js";import"./navigation-right-arrow-DseGevTb.js";import"./useCurrentTheme-DF-c7hmf.js";import"./index-DciiPa4I.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BzVE9glM.js";import"./paper-plane-BHeSZ19x.js";import"./index-DPhTd4XE.js";import"./less-D29QdeXg.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

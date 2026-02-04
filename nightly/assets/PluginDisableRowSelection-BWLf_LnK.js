import{j as e}from"./iframe-CIYL-5q3.js";import{useMDXComponents as n}from"./index-CWXxkQxH.js";import{I as r,F as s}from"./CommandsAndQueries-DjZZVJII.js";import{M as l,C as a}from"./blocks-BmH4wjlj.js";import"./Tag-Bj-YRcmn.js";import"./index-DpooF_Dp.js";import"./copy-Cls5Qy9v.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DLFlN1sC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUhE9jhW.js";import"./index-ywBu0MNL.js";import"./index-fAH3q00h.js";import"./Link-C09fzDpl.js";import"./index-OosLgrWy.js";import"./index-CMG3T6cu.js";import"./index-DTrWp4X_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cia2o1gw.js";import"./addCustomCSSWithScoping-CnnSu9RY.js";import"./index-ExTvjT1c.js";import"./information-24sGxR45.js";import"./sys-enter-2-CbyVzbEB.js";import"./alert-BzxY5xRy.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DN5NK2GL.js";import"./delete-BbuwAWWV.js";import"./settings-CUTuJpbA.js";import"./NoData-Cja0uYrN.js";import"./IllustratedMessage-BcIwS1uR.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DuWNeOZq.js";import"./index-isDn43Z1.js";import"./index-AShUGGEM.js";import"./slim-arrow-down-DUmzLarA.js";import"./Input-BZQLttu5.js";import"./ResponsivePopoverCommon.css-CfiWzak8.js";import"./ValueStateMessage.css-PjKvvuan.js";import"./Suggestions.css-WY21doQK.js";import"./ListBoxItemGroupTemplate-B6Obkb05.js";import"./ComboBoxItemGroup-BVY9PC83.js";import"./ListItemBaseTemplate-D2BofZjF.js";import"./Token-6QA7fI97.js";import"./ScrollEnablement-DOM2ZjBt.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BWBl7L1k.js";import"./ToggleButton-Cmmqs7qR.js";import"./SuggestionItem-BgRbV0QE.js";import"./index-B4nVUG4n.js";import"./Option-DJ0h8inA.js";import"./index-BCOz2x-a.js";import"./SegmentedButton-BSzNVR0_.js";import"./index-YQD3BlP6.js";import"./Select-l7QB7fa7.js";import"./InvisibleMessage-D1mcAElI.js";import"./slim-arrow-down-wVqrmhLU.js";import"./index-CJLTJ6U5.js";import"./index-Be4UD4MD.js";import"./index-COWtlANm.js";import"./index-pMJvwxr3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DbTqfTOV.js";import"./group-2-gbIA7stC.js";import"./sort-descending-6ZrR7-wc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-I3O_UikH.js";import"./utils-DS2Z6nbO.js";import"./index-VcgiXEjf.js";import"./index-DwnDivfc.js";import"./index-DhtEduvs.js";import"./navigation-down-arrow-JN7PJRcw.js";import"./navigation-right-arrow-Nvd9V3_e.js";import"./navigation-right-arrow-5JLsdip7.js";import"./useCurrentTheme-27eqesd4.js";import"./index-BMFUyCMr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ybGgh7zN.js";import"./paper-plane-GpjElHEt.js";import"./index-CmPFVJ7g.js";import"./less-BIQS483_.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

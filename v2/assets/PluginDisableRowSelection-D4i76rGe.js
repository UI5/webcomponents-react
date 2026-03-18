import{j as e}from"./iframe-CFWpN4R7.js";import{useMDXComponents as n}from"./index-dB03iz0B.js";import{I as r}from"./CommandsAndQueries-CCwXwUid.js";import{M as s,C as l}from"./blocks-Aj9mLxPA.js";import"./Tag-B06DXZI6.js";import"./index-BhKFh4UU.js";import"./copy-DSqUQhHe.js";import{F as a}from"./Footer-DJewOY_X.js";import"./PageNotFound-CLSfRNnq.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-AwnbcJJV.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-RyF9dh8t.js";import"./index-D83xFEsI.js";import"./index-4-t9AGVk.js";import"./index-DnsyYKyj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_Q3wyl1.js";import"./addCustomCSSWithScoping-CJGgSOK2.js";import"./index-lnQyu4TM.js";import"./index-CeR8RWqv.js";import"./index-nHUwJst8.js";import"./information-CkAnn-lR.js";import"./sys-enter-2-D36-WSJV.js";import"./alert-CoDmVWPa.js";import"./index-B803YP9c.js";import"./Illustrations-dv6stKlC.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CJYrTbxl.js";import"./delete-oYHX6VFJ.js";import"./settings-BtBp-qQy.js";import"./NoData-C4imxIub.js";import"./NoFilterResults-Bz2MhsDC.js";import"./index-04ZJmerE.js";import"./IllustratedMessage-Bc8Qdoe-.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CUlUYk0a.js";import"./Input-C-H0NyPN.js";import"./ResponsivePopoverCommon.css-gi_-nTdf.js";import"./ValueStateMessage.css-BXLDmzuy.js";import"./Suggestions.css-DHcwzhot.js";import"./ListBoxItemGroupTemplate-CAS_Tv3n.js";import"./ComboBoxItemGroup-DaaAJODI.js";import"./ListItemBaseTemplate-YeqUv09f.js";import"./Token-BsUCyecE.js";import"./ScrollEnablement-CctUY57C.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-R5Hu6p8-.js";import"./ToggleButton-DAqs2wKA.js";import"./multiselect-all-BoxtuGn8.js";import"./SuggestionItem-CemVcQIM.js";import"./index-CSrNgzI2.js";import"./Option-DnxME5E6.js";import"./index-ZLzfsPTb.js";import"./SegmentedButton-S5xAWCiq.js";import"./index-C017xkvz.js";import"./Select-Ck1JeGEi.js";import"./InvisibleMessage-Be8DiyGj.js";import"./index-B1fSu1UB.js";import"./index-Km-Z_irJ.js";import"./index-Bj-bvpZw.js";import"./index-DBJSqui-.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CK6IqeE4.js";import"./group-2-DzMEyvAW.js";import"./sort-descending-C0_8q9F0.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-xOdXlKkx.js";import"./utils-BncuNKD7.js";import"./index-Gpnmba2H.js";import"./index-DOMLuM49.js";import"./index-DZN-dGo_.js";import"./navigation-down-arrow-CrgxLPHm.js";import"./navigation-right-arrow-B7tVG0rj.js";import"./navigation-right-arrow-BAsSc-Qi.js";import"./useCurrentTheme-kT0-U9p_.js";import"./index-DSCaE3Mt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CXZT-kLk.js";import"./paper-plane-CC1wCXgi.js";import"./index-BM3hZRzv.js";import"./less-BZ4m5AVI.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

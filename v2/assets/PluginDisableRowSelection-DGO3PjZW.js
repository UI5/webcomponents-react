import{j as e}from"./iframe-oB-4R5Rt.js";import{useMDXComponents as n}from"./index-CPM_KuJ1.js";import{I as r,F as s}from"./CommandsAndQueries-V7DYmci2.js";import{M as l,C as a}from"./blocks-BSJ2p1aB.js";import"./Tag-D-nP8Atk.js";import"./index-D9a9y2w1.js";import"./copy-BEsfMMdz.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-4VAmKrJC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BgFkqkoM.js";import"./index-ByTtsog6.js";import"./index-QtLlbt_o.js";import"./Link-DOQS5UBs.js";import"./index-CTKLJSsf.js";import"./index-DzeBy8FO.js";import"./index-CQQbQqNg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D1pBRLIk.js";import"./addCustomCSSWithScoping-Bfd00zUa.js";import"./index-BRbXVYQh.js";import"./information-BRyOdl2D.js";import"./sys-enter-2-DyCH1cMA.js";import"./alert-BVT2hG_8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B85Kwi0U.js";import"./delete-DTD52Dt-.js";import"./settings-C_n4xVXc.js";import"./NoData-Cl-2h7pm.js";import"./IllustratedMessage-0CeFZb1f.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-c6iHh6_s.js";import"./index-DAe_C3xM.js";import"./index-QijUrmH0.js";import"./slim-arrow-down-CXy1laZl.js";import"./Input-CmhKXc0K.js";import"./ResponsivePopoverCommon.css-BI55EcO7.js";import"./ValueStateMessage.css-BBVlRBqU.js";import"./Suggestions.css-hXMoKZOy.js";import"./ListBoxItemGroupTemplate-M1QDvz3X.js";import"./ComboBoxItemGroup-Bx9p2mC6.js";import"./ListItemBaseTemplate-Bah4nUE4.js";import"./Token-jwxYX-yd.js";import"./ScrollEnablement-oY_T1yvo.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-IaHLS1HF.js";import"./ToggleButton-DY0lb3z6.js";import"./SuggestionItem-2gqz2T4s.js";import"./index-BWPeagQl.js";import"./Option-cV3MYBFS.js";import"./index-BzBis61R.js";import"./SegmentedButton-DCb2A_xv.js";import"./index-CAA2J6fr.js";import"./Select-DmNHfi17.js";import"./InvisibleMessage-MKUVNUZM.js";import"./slim-arrow-down-enTMIpdD.js";import"./index-C_xnFlWE.js";import"./index-Cv0_3GO5.js";import"./index-BRv3mF1V.js";import"./index-Crwyz8ZA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D6MPiSVH.js";import"./group-2-Cd1iqfwu.js";import"./sort-descending-B1MDHvU-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Z4g25ytt.js";import"./utils-B5Fc9P4b.js";import"./index-DpDL8a8s.js";import"./index-Ql5yF9yx.js";import"./index-BPoxwQOt.js";import"./navigation-down-arrow-Dkon3Z8u.js";import"./navigation-right-arrow-Dm6-IpRK.js";import"./navigation-right-arrow-BNSorjsP.js";import"./useCurrentTheme-CjUUgy0P.js";import"./index-D-67tr6h.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C-6qlPxf.js";import"./paper-plane-B_Zq24If.js";import"./index-BeY4v2SL.js";import"./less-Bv-Ti7Zp.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

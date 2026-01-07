import{j as e}from"./iframe-BS2TrvrN.js";import{useMDXComponents as n}from"./index-Dp4awxsz.js";import{I as r,F as s}from"./CommandsAndQueries-C7ISLnYa.js";import{M as l,C as a}from"./blocks-AG6GRa5B.js";import"./Tag-CAsjs9Yd.js";import"./index-CnogY8gl.js";import"./copy-DWHxAwDZ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BFKbgqVg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BTiu8q4c.js";import"./index-Mu4Fq_pN.js";import"./index-BmL9Xifd.js";import"./Link-o9RgLDgA.js";import"./index-DaCCo5vH.js";import"./index-DMDLslui.js";import"./index-BzQgfOUJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CXV-QRTV.js";import"./addCustomCSSWithScoping-BH8CiasF.js";import"./index-CJ7CYpRY.js";import"./information-B1mkkoXe.js";import"./sys-enter-2-DnLeBeIW.js";import"./alert-BREJIvMW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BkyYsc9_.js";import"./delete--EJaBHtQ.js";import"./settings-CjHgbDvG.js";import"./NoData-uCs7mLL3.js";import"./IllustratedMessage-BYxajBDo.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-B4qjkeLD.js";import"./index-CuDN26eE.js";import"./index-Bg1SvpRp.js";import"./slim-arrow-down-C6f4nBya.js";import"./Input-Bv0sXAeB.js";import"./ResponsivePopoverCommon.css-BZWL9G4a.js";import"./ValueStateMessage.css-YDo57pkc.js";import"./Suggestions.css-DAjqdB6I.js";import"./ListBoxItemGroupTemplate-C3a7F9SG.js";import"./ComboBoxItemGroup-gEh305-y.js";import"./ListItemBaseTemplate-1DE2nZfk.js";import"./Token-geTKpS6b.js";import"./ScrollEnablement-BmiTc29C.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DDx_09pl.js";import"./ToggleButton-CcH_vL5C.js";import"./SuggestionItem-CWGXugmn.js";import"./index-DjLt-Et_.js";import"./Option-BGlTcCx4.js";import"./index-rnvXBaMA.js";import"./SegmentedButton-BRvRJYjJ.js";import"./index-Bo3gbuh_.js";import"./Select-DcELK7dP.js";import"./InvisibleMessage-CpZ2jbZ-.js";import"./slim-arrow-down-CP7_zG_U.js";import"./index-DrOVNHN1.js";import"./index-CAphs1al.js";import"./index-Bndb5wUT.js";import"./index-DZmbJFEp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CYZgLpPW.js";import"./group-2-Bjg8E7Od.js";import"./sort-descending-VYXIT-Q2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C2nq9QYP.js";import"./utils-CSeio7PW.js";import"./index-BW-YQYzw.js";import"./index-SLFgJxKA.js";import"./index-DsLZqvCQ.js";import"./navigation-down-arrow-B8ST6yfY.js";import"./navigation-right-arrow-CcCTVMX2.js";import"./navigation-right-arrow-BWBp3NRa.js";import"./useCurrentTheme-BL8885Ei.js";import"./index-BR75lte5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dueog928.js";import"./paper-plane-AR1l5ZNk.js";import"./index-D26HhdRg.js";import"./less-BYcbCm1L.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

import{j as e}from"./iframe-CirU0arv.js";import{useMDXComponents as n}from"./index-Dp75W_mY.js";import{I as r,F as s}from"./CommandsAndQueries-C-xkLV_B.js";import{M as l,C as a}from"./blocks-BZ_tUEGn.js";import"./Tag-BIXyVbav.js";import"./index-DkGOPQ-r.js";import"./copy-BRU5ISS0.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-cTgiUsLU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrqGQq-t.js";import"./index-BUDPFl9U.js";import"./index-Dxm6BO0O.js";import"./Link-cWf0Ff_j.js";import"./index-B7a5GE08.js";import"./index-VennLGrv.js";import"./index-DCit48ot.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CtMJGvuv.js";import"./addCustomCSSWithScoping-DTjbXshP.js";import"./index-4atoEi4m.js";import"./information-Z8YFf98o.js";import"./sys-enter-2-5bsV2B9A.js";import"./alert-FLQkBZSI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-HIfaJVzD.js";import"./delete-CexGU_qM.js";import"./settings-DJ-LHUy-.js";import"./NoData-DE1oTmvX.js";import"./IllustratedMessage-BFgOq_LH.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DZg_ivQE.js";import"./index-UPOhQMd1.js";import"./index-CSn2kPxq.js";import"./slim-arrow-down-60ML7lyZ.js";import"./Input-B5RoDskI.js";import"./ResponsivePopoverCommon.css-DBQtHpYS.js";import"./ValueStateMessage.css-B5lUt71q.js";import"./Suggestions.css-COvU-ZfJ.js";import"./ListBoxItemGroupTemplate-BIERCNu9.js";import"./ComboBoxItemGroup-C2-CS8jK.js";import"./ListItemBaseTemplate-Bu9nUh-N.js";import"./Token-CWpLLa4L.js";import"./ScrollEnablement-DFgzJu98.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DBUXW515.js";import"./ToggleButton-CF6WXXSi.js";import"./SuggestionItem-YvgDaZB_.js";import"./index-CB4p9_nj.js";import"./Option-7ckm_yH-.js";import"./index-BTw6P2fS.js";import"./SegmentedButton-am25y6o7.js";import"./index-BFx9WVQe.js";import"./Select-Dc_o4qfa.js";import"./InvisibleMessage--uNZRaQB.js";import"./slim-arrow-down-CkBSJkgM.js";import"./index-BrUmMrZS.js";import"./index-CdQ5i6fy.js";import"./index-Di0AmzqC.js";import"./index-MEM9Yvlw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nuUE4wAL.js";import"./group-2-BEqaSAGb.js";import"./sort-descending-CaYXLUCL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-_ssyvdx4.js";import"./utils-CsEmwHd3.js";import"./index-KodJqxFE.js";import"./index-cd_HGMma.js";import"./index-Dxv3SITq.js";import"./navigation-down-arrow-DDJMQEkQ.js";import"./navigation-right-arrow-EmtR-Po3.js";import"./navigation-right-arrow-BbxMtceQ.js";import"./useCurrentTheme-CFUmE8gV.js";import"./index-B9OW6Ny7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BgeeE8jl.js";import"./paper-plane-By32g5Y1.js";import"./index-ATETq_97.js";import"./less-DF78ULYr.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

import{j as e}from"./iframe-BpIV0mIG.js";import{useMDXComponents as n}from"./index-R-0b2Q-0.js";import{I as r,F as s}from"./CommandsAndQueries-Cg1r-kOH.js";import{M as l,C as a}from"./blocks-DoVp3o8V.js";import"./Tag-PaDhhp3x.js";import"./index-ihq2izus.js";import"./copy-ByeAxUWO.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B5Jh-DUM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qBYywHNO.js";import"./index-CTTxG0ct.js";import"./index-CIjFLNbK.js";import"./Link-BYY56m65.js";import"./index-BED2olIo.js";import"./index-fu097dPl.js";import"./index-BLHX1u79.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DqFGSoTQ.js";import"./addCustomCSSWithScoping-B4Uic3jc.js";import"./index-DtbW9kAL.js";import"./information-CehFepv7.js";import"./sys-enter-2-D_Yhxrfh.js";import"./alert-Dc_mbBlI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D2I-ZSY3.js";import"./delete-CsEea83P.js";import"./settings-BPkB95Pr.js";import"./NoData-BeGHl6Z_.js";import"./IllustratedMessage-DOyI0ZCV.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-8la9vE-n.js";import"./index-CwpdFEXU.js";import"./index-D_eQoiLu.js";import"./slim-arrow-down-Clv0qByx.js";import"./Input-CxCbVe7-.js";import"./ResponsivePopoverCommon.css-D2Obw4p0.js";import"./ValueStateMessage.css-DMpvlVEo.js";import"./Suggestions.css-DaCrsdkh.js";import"./ListBoxItemGroupTemplate-BWzZzAr7.js";import"./ComboBoxItemGroup-D6sYMIxD.js";import"./ListItemBaseTemplate-koeEWE6r.js";import"./Token-D8bP-ldU.js";import"./ScrollEnablement-C71FmZua.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cc_o9oaM.js";import"./ToggleButton-2rgNDr7d.js";import"./SuggestionItem-l3Pd-DGO.js";import"./index-BmJTPsAz.js";import"./Option-BMHYCgFj.js";import"./index-Bj0jkexU.js";import"./SegmentedButton-DEEjtarU.js";import"./index-Di2uBEgf.js";import"./Select-CtSXIsWd.js";import"./InvisibleMessage-CsmHimDL.js";import"./slim-arrow-down-1QdqWgX2.js";import"./index-D0rvSxtS.js";import"./index-DwvqlB2m.js";import"./index-Bs-Icwyw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDsrk5Iv.js";import"./group-2-CUHYq2Ym.js";import"./sort-descending-C35hFge8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C8VSrFeR.js";import"./utils-DxABz-pG.js";import"./index-jEyBc5qw.js";import"./index-C_lKlUk7.js";import"./index-BJ6HlI_O.js";import"./navigation-down-arrow-B015Jf2F.js";import"./navigation-right-arrow-DmngP1AQ.js";import"./navigation-right-arrow-BHUDGKpX.js";import"./useCurrentTheme-BE_eD6jJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DNIWpImI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-COaeyO-1.js";import"./paper-plane-DKcTwT40.js";import"./index-Bkq_sts_.js";import"./less-BRYhBxfc.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

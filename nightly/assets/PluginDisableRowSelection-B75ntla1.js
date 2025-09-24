import{j as e}from"./iframe-CTc_pUME.js";import{useMDXComponents as n}from"./index-CbFOQhGC.js";import{I as r,F as s}from"./CommandsAndQueries-BKl-Lehx.js";import{M as l,C as a}from"./blocks-Bdab0qOx.js";import"./Tag-BJVcJF8V.js";import"./index-BmIFgcgy.js";import"./copy-CX-UstQv.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-KHHhuFbE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Z8jBBqBa.js";import"./index-C61H3I4w.js";import"./index-cPYEFV1s.js";import"./Link-CIXpUy3N.js";import"./index-dZVrSoBW.js";import"./index-MjXDOENA.js";import"./index-CHi_LEvO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B7yiJaHj.js";import"./addCustomCSSWithScoping-Dc_j6Yzk.js";import"./index-6ELyezq3.js";import"./information-BUnhqMn4.js";import"./sys-enter-2-DOV5JEOM.js";import"./alert-DylNOMF0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CIKwfdQg.js";import"./delete-kbtfU-Be.js";import"./settings-BLPPWMrz.js";import"./NoData-5paOsqOO.js";import"./IllustratedMessage-Ds6OazXP.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BcphOOS6.js";import"./index-Cz9iPqTS.js";import"./slim-arrow-down-C939bzhs.js";import"./Input-DwKwevQu.js";import"./ResponsivePopoverCommon.css-DVODeCs6.js";import"./ValueStateMessage.css-CEEhjmep.js";import"./Suggestions.css-D-Gi3AK0.js";import"./ListBoxItemGroupTemplate-DvohLQqN.js";import"./ComboBoxItemGroup-Dp8wVEki.js";import"./ListItemBaseTemplate-Flt8m4GL.js";import"./Token-B0g-cX5V.js";import"./ScrollEnablement-Dqoexmfr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C3YrrMZt.js";import"./ToggleButton-gg5kcSkt.js";import"./SuggestionItem-D0rTiphA.js";import"./index-Blj39MLR.js";import"./Option-CsGmFVxt.js";import"./index-DCTt8g0K.js";import"./SegmentedButton-BADV9MET.js";import"./index-CurbkiN8.js";import"./Select-5ZecXlmx.js";import"./InvisibleMessage-sw3UNfwB.js";import"./slim-arrow-down-B_qgXS-y.js";import"./index-CP2pU2KW.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BLV8HYZD.js";import"./group-2-CcIeK99E.js";import"./sort-descending-D80ou1nO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BgNFH_bM.js";import"./utils-DAL9-AHg.js";import"./index-Brew3N2g.js";import"./index-9vQVNdmd.js";import"./index-6fpphJyg.js";import"./navigation-down-arrow-TIAFyztM.js";import"./navigation-right-arrow-BigkpvCQ.js";import"./navigation-right-arrow-B100tUdc.js";import"./useCurrentTheme-D2CPEB2n.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DLD--ZCq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BmQn44KR.js";import"./paper-plane-DZOaRTqB.js";import"./index-kRlvFPPJ.js";import"./less-Bbv1vYfG.js";import"./index-rhUIVPqF.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(s,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};

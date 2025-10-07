import{j as e}from"./iframe-BiMlSvB5.js";import{useMDXComponents as n}from"./index-zjeO5ftS.js";import{I as r,F as s}from"./CommandsAndQueries-Ihy_vY5j.js";import{M as l,C as a}from"./blocks-JfRoz7Bu.js";import"./Tag-DcGxJxNj.js";import"./index-DdnnKwEp.js";import"./copy-CpLwtFwa.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CrJDfv5d.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJoGcUHO.js";import"./index-CjwASx83.js";import"./index-COwkRR6t.js";import"./Link-hDp19ErW.js";import"./index-BN_7wmc1.js";import"./index-BTBLl-af.js";import"./index-CvgLLP4J.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-g_QfzUS9.js";import"./addCustomCSSWithScoping-Dxx39OMa.js";import"./index-CJR1a3iJ.js";import"./information-B40Y1iPW.js";import"./sys-enter-2-CkPUHPx-.js";import"./alert-BwKvOFsR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-lkroZnbL.js";import"./delete-FMGJKKZJ.js";import"./settings-C3vBunPl.js";import"./NoData-BDVuJ86f.js";import"./IllustratedMessage-CdkkLDXG.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CyCSkyGX.js";import"./index-CzIuiFxY.js";import"./index-uzhwBdxV.js";import"./slim-arrow-down-DhQmyJSw.js";import"./Input-5MKIWbcv.js";import"./ResponsivePopoverCommon.css-Gn55K0IR.js";import"./ValueStateMessage.css-C63o8ajt.js";import"./Suggestions.css-bWFEPpLk.js";import"./ListBoxItemGroupTemplate-P2pMYzMz.js";import"./ComboBoxItemGroup-DGvjryay.js";import"./ListItemBaseTemplate-DFyALYeN.js";import"./Token-DP7V52GY.js";import"./ScrollEnablement-DKyX1hlv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CteCbUEH.js";import"./ToggleButton-CnxXmbLH.js";import"./SuggestionItem-BdwWLvfq.js";import"./index-CyQT3WP0.js";import"./Option-C9Uo7sgL.js";import"./index-D_l_aaej.js";import"./SegmentedButton-CmS3epsf.js";import"./index-TyCpnseE.js";import"./Select-DV8FGlWC.js";import"./InvisibleMessage-CdGbv0CP.js";import"./slim-arrow-down-CVQHENDk.js";import"./index-B-Yh5T4c.js";import"./index-CIW_ic5S.js";import"./index-GmFx-3lk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BS_XAjEs.js";import"./group-2-BQ8I3Xw3.js";import"./sort-descending-Dn3aviOX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-_j2qh61z.js";import"./utils-CE3pjW5h.js";import"./index-BgWRU9Z5.js";import"./index-CjF_Wh_0.js";import"./index-C0ceKoHV.js";import"./navigation-down-arrow-m9enBW2g.js";import"./navigation-right-arrow-C4IxskPN.js";import"./navigation-right-arrow-CeFlz50Q.js";import"./useCurrentTheme-CdJ3Wj-s.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D9Agz_AG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B8WBSrx9.js";import"./paper-plane-CJosRD6f.js";import"./index-BonsQVcP.js";import"./less-lHySVG5z.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

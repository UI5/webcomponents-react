import{j as e}from"./iframe-C3CH6Gut.js";import{useMDXComponents as n}from"./index-fd8ePsOB.js";import{I as r}from"./CommandsAndQueries-DWpv2ZFM.js";import{M as s,C as l}from"./blocks-BfQItv6G.js";import"./Tag-De3iZMh7.js";import"./index-vwI-U5xE.js";import"./copy-DfCS5kJc.js";import{F as a}from"./Footer-D6sg8NSk.js";import"./PageNotFound-C9BkN1AJ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CyVcl996.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BFP9PJhq.js";import"./index-RpXG-GZG.js";import"./index-BXc3FtAh.js";import"./index-ZpAOrS54.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ByfKWctW.js";import"./addCustomCSSWithScoping-C-wsztWv.js";import"./index-F7LUawnX.js";import"./index-QTHM5Lz2.js";import"./index-CpH_mmb2.js";import"./information-D0kU-Y2g.js";import"./sys-enter-2-DsGdXA7v.js";import"./alert-DYbKfQPB.js";import"./index-U6QQkp2y.js";import"./Illustrations-Boea4aTE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DgOl3zpa.js";import"./delete-BG9m3heg.js";import"./settings-B4nCiath.js";import"./NoData-CxiMHlX_.js";import"./NoFilterResults-CjhmWEtg.js";import"./index-Djvg3LVm.js";import"./IllustratedMessage-DIXeVHpC.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Cy7JTLur.js";import"./Input-Cwy_JXQ2.js";import"./ResponsivePopoverCommon.css-DXf25SAp.js";import"./ValueStateMessage.css-wPUzGhFU.js";import"./Suggestions.css-DBzVyqKU.js";import"./ListBoxItemGroupTemplate-D8N1_HkC.js";import"./ComboBoxItemGroup-DBKoVX7J.js";import"./ListItemBaseTemplate-Bwv46zez.js";import"./Token-CZdJDMhT.js";import"./ScrollEnablement-GDu9Dh24.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-KpiEMPRj.js";import"./ToggleButton-DlHc2tiz.js";import"./multiselect-all-BlFxC4yK.js";import"./SuggestionItem-3ubqA32j.js";import"./index-BBOXgp9T.js";import"./Option-BESnooX1.js";import"./index-Cct_m_eu.js";import"./SegmentedButton-DvdG3HcY.js";import"./index-D-_OjX_x.js";import"./Select-DDp87HxS.js";import"./InvisibleMessage-BCTOgowi.js";import"./index-Buaf_trU.js";import"./index-BP_xr0KI.js";import"./index-Cix6ADpt.js";import"./index-DlrcfpRT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DZNcHDWf.js";import"./group-2-BHNit0d9.js";import"./sort-descending-CUkyl3g_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B5hmyYbz.js";import"./utils-BoXuUdRI.js";import"./index-Dbp-R-_w.js";import"./index-Bu89sVDb.js";import"./index-DWKJP-X1.js";import"./navigation-down-arrow-BYMzr38l.js";import"./navigation-right-arrow-CqTO4JbT.js";import"./navigation-right-arrow-BShilemu.js";import"./useCurrentTheme-Box2x4Lc.js";import"./index-C3QVuZtO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C5JDBeUG.js";import"./paper-plane-Bzwy9sBv.js";import"./index-CHqhah_y.js";import"./less-BzhppYQg.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

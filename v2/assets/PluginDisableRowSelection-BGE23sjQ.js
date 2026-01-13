import{j as e}from"./iframe-M6Wvc0fq.js";import{useMDXComponents as n}from"./index-Jmw_4WZV.js";import{I as r,F as s}from"./CommandsAndQueries--8Ahr2u6.js";import{M as l,C as a}from"./blocks-9PHEB2Ze.js";import"./Tag-DEHlwQE8.js";import"./index-D-NAUCyd.js";import"./copy-ClXhTaxL.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Ht4knFBz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CUPsZJD9.js";import"./index-C-FSsThx.js";import"./index-_LwCcPZx.js";import"./Link-DpL14GXS.js";import"./index-0vFd8GUO.js";import"./index-BinHysAW.js";import"./index-CWMf0NSb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Y-KB0uhX.js";import"./addCustomCSSWithScoping-B-5QqUkV.js";import"./index-CNLcYPCr.js";import"./information-Cj4hRV-U.js";import"./sys-enter-2-CYdmpg8V.js";import"./alert-BNoNYb7g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChpzPnnO.js";import"./delete-Beu8r6My.js";import"./settings-Dn0qBLrS.js";import"./NoData-BwUfHrNt.js";import"./IllustratedMessage-C-QtCxtL.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BUAL9oDt.js";import"./index-BSpwtDKe.js";import"./index-BuvC0M-2.js";import"./slim-arrow-down-Cv1cFJAK.js";import"./Input-JgLWPqs-.js";import"./ResponsivePopoverCommon.css-XADsAOoO.js";import"./ValueStateMessage.css-IPM013Bi.js";import"./Suggestions.css-Bo7BTCq0.js";import"./ListBoxItemGroupTemplate-DYBBvmjW.js";import"./ComboBoxItemGroup-GSLjChX5.js";import"./ListItemBaseTemplate-BhmRBGhv.js";import"./Token-BXgPM1Ho.js";import"./ScrollEnablement-CAzFMa-6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CUv_QYff.js";import"./ToggleButton-BoN4zM_f.js";import"./SuggestionItem-Q9aDeKXU.js";import"./index-BiABfjFg.js";import"./Option-DuXsqB-8.js";import"./index-BkLLS0et.js";import"./SegmentedButton-DG8OWpoN.js";import"./index-BMYFXn7k.js";import"./Select-wk3vy9-X.js";import"./InvisibleMessage-BMxlV3uh.js";import"./slim-arrow-down-CW8gGJol.js";import"./index-9dO3MOwO.js";import"./index-gTiCTT3s.js";import"./index-B3Nrx_1A.js";import"./index-DPn7F17k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C2YL6UwO.js";import"./group-2-Cc5epAxT.js";import"./sort-descending-D2YRXcwA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-T6nX1J1_.js";import"./utils-bX0sVF0D.js";import"./index-C4Nrf8Fs.js";import"./index-DCa9DW1g.js";import"./index-BNd5VGZF.js";import"./navigation-down-arrow-B2uCLQJV.js";import"./navigation-right-arrow-BTmzxXYG.js";import"./navigation-right-arrow-tS4kh4In.js";import"./useCurrentTheme-tZZyzKNX.js";import"./index-Dp40BlFP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D7MijIiv.js";import"./paper-plane-CxysScsd.js";import"./index-CDd3hI5e.js";import"./less-zKOuQtTY.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

import{j as e}from"./iframe-BELPVtw8.js";import{useMDXComponents as n}from"./index-Ccx4gwdG.js";import{I as r,F as s}from"./CommandsAndQueries-B86vB0yc.js";import{M as l,C as a}from"./blocks-B3lwtuZn.js";import"./Tag-jS7irC1t.js";import"./index-BkR2pL75.js";import"./copy-BGZyCQeI.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BuGimn8e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQYUcCHI.js";import"./index-DslTuBZD.js";import"./index-Dy8TXCJ0.js";import"./Link-BLMqdfPm.js";import"./index-nk7PQCW4.js";import"./index-D2dH4dam.js";import"./index-D2H4sMz3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-GIAd7WMY.js";import"./addCustomCSSWithScoping-vktTBWHy.js";import"./index-C1fkktKB.js";import"./information-Q0D1EyOn.js";import"./sys-enter-2-CB1NZnv4.js";import"./alert-e0Pm7FCS.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqiIa7eZ.js";import"./delete-DHGmX5w5.js";import"./settings-CEc6JgR1.js";import"./NoData-DvTHfRil.js";import"./IllustratedMessage-78L0W6rp.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BXIPIfZx.js";import"./index-DFsb20bI.js";import"./slim-arrow-down-CwiRy3M0.js";import"./Input-B-A8a0OL.js";import"./ResponsivePopoverCommon.css-BWZcb2bV.js";import"./ValueStateMessage.css-SXuctyRx.js";import"./Suggestions.css-C9vA098l.js";import"./ListBoxItemGroupTemplate-COysa2md.js";import"./ComboBoxItemGroup-CkDVZmGn.js";import"./ListItemBaseTemplate-bJafeYos.js";import"./Token-CC2z-1Eu.js";import"./ScrollEnablement-7itX-dGY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CE1p650D.js";import"./ToggleButton-BX9cFRFF.js";import"./SuggestionItem-D9DO9uWA.js";import"./index-BK4KP33l.js";import"./Option-C6iyQjxn.js";import"./index-uAC978GR.js";import"./SegmentedButton-B1O-glM5.js";import"./index-BVils4tE.js";import"./Select-DRUUnZi2.js";import"./InvisibleMessage-DFHR3png.js";import"./slim-arrow-down-BFVaKqjv.js";import"./index-Dj10-OWx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-S556KB4S.js";import"./group-2-_GSc8Amx.js";import"./sort-descending-xALRtyQE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-fM3yxWKm.js";import"./utils-DkiPjs68.js";import"./index-C00swXDA.js";import"./index-SUxQZfJ3.js";import"./index-T_E5hJOY.js";import"./navigation-down-arrow-BKIRwexC.js";import"./navigation-right-arrow-B8ETkxoi.js";import"./navigation-right-arrow-k3A4e-XZ.js";import"./useCurrentTheme-aIfWcmJ3.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BL1iCeSt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-kNFhRDgm.js";import"./paper-plane-CzSfUHba.js";import"./index-36Nf5wB9.js";import"./less-3oBkjuBq.js";import"./index-CvNAEadG.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

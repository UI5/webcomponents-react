import{j as e}from"./iframe-1ixiCrn4.js";import{useMDXComponents as n}from"./index-2ZsnEyB9.js";import{I as r}from"./CommandsAndQueries-Bsuql65l.js";import{M as s,C as l}from"./blocks-CwvJzyWa.js";import"./Tag-DxuCzySC.js";import"./index-DCoPFbKG.js";import"./copy-D9dip1OG.js";import{F as a}from"./Footer-BCWgdeK4.js";import"./PageNotFound-C5oFz4Y3.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DTTXPI55.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-342TA0WQ.js";import"./index-D3khTefu.js";import"./index-D-IU78TD.js";import"./index-DQdp7GQC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BMCl2W9z.js";import"./addCustomCSSWithScoping-BlChbTB-.js";import"./index-hCYkbxY8.js";import"./index-CfOzkRmu.js";import"./index-DPL6_Akv.js";import"./information-CNHKSbA7.js";import"./sys-enter-2-0xYCNe_8.js";import"./alert-tzZ5a9nx.js";import"./index-Bwh9lIWA.js";import"./Illustrations-BCjcVikr.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dc2LjV4g.js";import"./delete-DNv5LR2n.js";import"./settings-D_ZzwQrf.js";import"./NoData-UkMzNvMr.js";import"./NoFilterResults-BS8fOWJc.js";import"./index-DLKKIsBC.js";import"./IllustratedMessage-DyJkE5qr.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-uIuwnBcp.js";import"./Input-miUO-80x.js";import"./ResponsivePopoverCommon.css-D3Qzl4EB.js";import"./ValueStateMessage.css-SCwGpz07.js";import"./Suggestions.css-BAWn6ORu.js";import"./ListBoxItemGroupTemplate-B27bwUaq.js";import"./ComboBoxItemGroup-oMx3Jr9u.js";import"./ListItemBaseTemplate-CjxCbu7-.js";import"./Token-CYS7OIdr.js";import"./ScrollEnablement-DX3vc3nf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B6T0zg5o.js";import"./ToggleButton-BlkLujuP.js";import"./multiselect-all-BVnO4P_i.js";import"./SuggestionItem-rziQH6-U.js";import"./index-CkUdH-pB.js";import"./Option-DeIIvARx.js";import"./index-CQuXwl3a.js";import"./SegmentedButton-CY93Nkda.js";import"./index-21KIPv4P.js";import"./Select-DMCAW5jj.js";import"./InvisibleMessage-DnN-q7zu.js";import"./index-Dkvo6u5N.js";import"./index-CjD9gHII.js";import"./index-C4jmqnDw.js";import"./index-Bw57cGbJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-o__c2euJ.js";import"./group-2-CLjZuTuz.js";import"./sort-descending-ykcLYXS4.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D-WbRyx1.js";import"./utils-DWWruuVN.js";import"./index-BQ6RX1cg.js";import"./index-CGRE3IWk.js";import"./index-SKC0WRYy.js";import"./navigation-down-arrow-DF1AhehZ.js";import"./navigation-right-arrow-CTDnkOYS.js";import"./navigation-right-arrow-CkPlCERA.js";import"./useCurrentTheme-D1Bd3xaO.js";import"./index-qC67coWw.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dhvckhyy.js";import"./paper-plane-BP_yreQZ.js";import"./index-Cob64KvX.js";import"./less-CTdolYxs.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

import{j as e}from"./iframe-lqcNyI1T.js";import{useMDXComponents as n}from"./index-B0DX3imF.js";import{I as r,F as s}from"./CommandsAndQueries-DzJmAZem.js";import{M as l,C as a}from"./blocks-BpHyZEcb.js";import"./Tag-gBw-lmpH.js";import"./index-CZPzb4BW.js";import"./copy-CC4Y44ID.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-4PBPCegN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dd_PfWwN.js";import"./index-DgG0lX0j.js";import"./index-D-4WJNaw.js";import"./Link-1aRA3aDD.js";import"./index-DHQLUBCy.js";import"./index-B4-GBSDE.js";import"./index-CiJkSLrj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D20vcD6H.js";import"./addCustomCSSWithScoping-CSRUaJeQ.js";import"./index-BwE7J1MZ.js";import"./information-04kgllMP.js";import"./sys-enter-2-DUAlyrLn.js";import"./alert-BKOHJXpG.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C23xYIkD.js";import"./delete-BW14U-oh.js";import"./settings-C_Arqzcj.js";import"./NoData-BWB1BeqC.js";import"./IllustratedMessage-mqMlzviO.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-ClaLYbCr.js";import"./index-CrdqdyqA.js";import"./slim-arrow-down-BdAy8DJu.js";import"./Input-BosrlKUD.js";import"./ResponsivePopoverCommon.css-rVzp8R0x.js";import"./ValueStateMessage.css-DgSFjqSc.js";import"./Suggestions.css-CwUuZGb0.js";import"./ListBoxItemGroupTemplate-CFQN3b19.js";import"./ComboBoxItemGroup-vbV7jSGm.js";import"./ListItemBaseTemplate-9qWHR6_L.js";import"./Token-C1zBJwar.js";import"./ScrollEnablement-BXvjXYp4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DubsfjRL.js";import"./ToggleButton-BdlhECZc.js";import"./SuggestionItem-C3flXLvO.js";import"./index-DEefWD7h.js";import"./Option-B2iZldHA.js";import"./index-DbQw4X54.js";import"./SegmentedButton-I26Ed474.js";import"./index-Dvv9BM37.js";import"./Select-hm_HJkmj.js";import"./InvisibleMessage-DZjX4vEQ.js";import"./slim-arrow-down-D04fAz1I.js";import"./index-CAnVov9v.js";import"./IconDesign-DXd8PPVF.js";import"./filter-bcHOcALN.js";import"./group-2-C-sqScKq.js";import"./sort-descending-CIWa4L55.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DLalqhgy.js";import"./utils-BDJXQz-M.js";import"./index-6hZ21krh.js";import"./index-Csa8MFf6.js";import"./index-C7HMOshY.js";import"./navigation-down-arrow-BIjWvyvQ.js";import"./navigation-right-arrow-Ds7jKwyc.js";import"./navigation-right-arrow-rMJaXdAW.js";import"./useCurrentTheme-JW54ydGk.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BTa33zaZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cjl42E3c.js";import"./paper-plane-34M37_jm.js";import"./index-D6UWP29d.js";import"./less-TeO93Nja.js";import"./index-B8H-Ih5E.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

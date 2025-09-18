import{j as e}from"./iframe-DTHPT7iA.js";import{useMDXComponents as n}from"./index-74UlZZJj.js";import{I as r,F as s}from"./CommandsAndQueries-BD3jeLaK.js";import{M as l,C as a}from"./blocks-BEm3tjb6.js";import"./Tag-CJADm4_M.js";import"./index-C3HgU9VG.js";import"./copy-mCNoL2s6.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CR2kQPrZ.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DwOvcXXK.js";import"./index-Cj0CYz_p.js";import"./index-C6-xBNa3.js";import"./Link-BbcZTKOL.js";import"./addCustomCSSWithScoping-DApCUjf-.js";import"./index-D_aw5Z2j.js";import"./index-dqQUzE09.js";import"./index-ig2sn1RW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BENd75qS.js";import"./index-t5gVEC_D.js";import"./information-DoW4IMVD.js";import"./sys-enter-2-ByI7nkKd.js";import"./alert-COIhFOls.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DnDfdHQU.js";import"./delete-BbQKzcu4.js";import"./settings-DM92s_uf.js";import"./NoData-CwHmvSdw.js";import"./IllustratedMessage-BuAwQfmL.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-WTABQdxr.js";import"./index-CXXKzpr4.js";import"./slim-arrow-down-CgABXEzJ.js";import"./Input-D-TFuZ-3.js";import"./ResponsivePopoverCommon.css-D92Yx7wX.js";import"./ValueStateMessage.css-CYayy6u-.js";import"./Suggestions.css-BicA_aUI.js";import"./ListBoxItemGroupTemplate-CdUUn9ri.js";import"./ComboBoxItemGroup-Cib3Su5_.js";import"./ListItemBaseTemplate-BiRHqJdx.js";import"./Token-BcxV0UO_.js";import"./ScrollEnablement-C6hn1rKU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CIUna04V.js";import"./ToggleButton-A9PP4M1D.js";import"./SuggestionItem-fB6YQJWQ.js";import"./index-C6IdfRzN.js";import"./Option-DNJdSQ8d.js";import"./index-DCVC7s_-.js";import"./SegmentedButton-BqpTppJT.js";import"./index-CwsyBox-.js";import"./Select-BJhEtDeN.js";import"./InvisibleMessage-CQmpcPbi.js";import"./slim-arrow-down-DiNlSlMl.js";import"./useIsRTL-DmdXpOjP.js";import"./index-CzjWFvA4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CTlYESOp.js";import"./group-2-C9oC9E8g.js";import"./sort-descending-BlC3CcR_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-QG1Rc5Hm.js";import"./utils-r_rDS61f.js";import"./index-Ci763Ceq.js";import"./index-DshYuz1G.js";import"./index-Cj0ZzoJd.js";import"./navigation-down-arrow-DhjjYCmY.js";import"./navigation-right-arrow-DQ97-1lE.js";import"./navigation-right-arrow-DJ-TiPnm.js";import"./useCurrentTheme-Dw7fW8Lu.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BF_xCWgE.js";import"./debounce-D7W5PopO.js";import"./paper-plane-CgoaRieJ.js";import"./index-DaHzjs3T.js";import"./less-4irJeyAV.js";import"./index-74boIQ47.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

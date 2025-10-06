import{j as e}from"./iframe-CK4LOCvj.js";import{useMDXComponents as n}from"./index-BqLtYoST.js";import{I as r,F as s}from"./CommandsAndQueries-BwelsOM0.js";import{M as l,C as a}from"./blocks-ZjQWLnry.js";import"./Tag-BHHtXuEO.js";import"./index-BFAmBcJW.js";import"./copy-BE3AKkMg.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-nI75W6Tx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CW1io29o.js";import"./index-C1w0eQlR.js";import"./index-GePrpfQg.js";import"./Link-C72gLrWy.js";import"./index-BUxn-N40.js";import"./index-BKUd1pYK.js";import"./index-DPjO4Ph3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6YKOrWJ.js";import"./addCustomCSSWithScoping-CyChXc_w.js";import"./index-BIYQNCb4.js";import"./information-DVinbumE.js";import"./sys-enter-2-CxZg2yn9.js";import"./alert-q3RCUipA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChmyOthR.js";import"./delete-CLx7glTK.js";import"./settings-ayEvMgd1.js";import"./NoData-T4iCewut.js";import"./IllustratedMessage-Xv-ZhCNN.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DBPzYJyP.js";import"./index-D298oQB3.js";import"./slim-arrow-down-DWzWgWFr.js";import"./Input-iHhFMUKe.js";import"./ResponsivePopoverCommon.css-Dp8lV0BH.js";import"./ValueStateMessage.css-BPb3CYnx.js";import"./Suggestions.css-DJt8IkfU.js";import"./ListBoxItemGroupTemplate-DDfjb_sz.js";import"./ComboBoxItemGroup-rCQ_Opmd.js";import"./ListItemBaseTemplate-hDgjT7Em.js";import"./Token-BpRQuSqj.js";import"./ScrollEnablement-B4EaRXxx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-LFJPBSzx.js";import"./ToggleButton-nsqCEMCk.js";import"./SuggestionItem-BFaG5LNL.js";import"./index-Cph68JY2.js";import"./Option-Bqy7W0j8.js";import"./index-D_lH--Ko.js";import"./SegmentedButton-Lp1qLZgk.js";import"./index-DasWYOI-.js";import"./Select-D8-eeFJR.js";import"./InvisibleMessage-DCPpUX1P.js";import"./slim-arrow-down-Va97yZ0D.js";import"./index-sQs2olcQ.js";import"./index-Cm2ZTwYm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-vs2PrjuQ.js";import"./group-2-Cs4zeWBJ.js";import"./sort-descending-CRZRYHRm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CNdNGQRA.js";import"./utils-BzxUxqTh.js";import"./index-iZ4-PPSv.js";import"./index-CHUetHtW.js";import"./index-C-2t_3GF.js";import"./navigation-down-arrow-BlzDPZtH.js";import"./navigation-right-arrow-Dd9NdxpN.js";import"./navigation-right-arrow-DZnGmzmd.js";import"./useCurrentTheme-CyiUas-f.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cb3L2AXo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CPg5JnzM.js";import"./paper-plane-CvZdjZdd.js";import"./index-CWdAvJez.js";import"./less-CgzrIY7E.js";import"./index-Dwfx48-L.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(s,{})]})}function Ue(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ue as default};

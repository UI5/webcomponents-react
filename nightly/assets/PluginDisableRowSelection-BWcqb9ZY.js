import{j as e}from"./iframe-THm39tdL.js";import{useMDXComponents as n}from"./index-B4tiZj28.js";import{I as r,F as s}from"./CommandsAndQueries-CM3XC2Lj.js";import{M as l,C as a}from"./blocks-exNB_fpK.js";import"./Tag-DAVE_HUz.js";import"./index-GpdeEFTa.js";import"./copy-BpRW8fgI.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CVT2-F1V.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DPta9qsd.js";import"./index-Dg0TKbRC.js";import"./index-DLy3fIdu.js";import"./Link-CGyr18oq.js";import"./index-BziYS9gD.js";import"./index-Dfp6johM.js";import"./index-KiDRbvAF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BGXn0jIO.js";import"./addCustomCSSWithScoping-msj5utEH.js";import"./index-BQ6gEIJW.js";import"./information-Cma2Q91K.js";import"./sys-enter-2-iw8Fxy6e.js";import"./alert-Buz1y0R3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-gfd4y1HT.js";import"./delete-0fDb3pV1.js";import"./settings-CY8QoXJB.js";import"./NoData-C7YE6Tud.js";import"./IllustratedMessage-CwBEdHyI.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BtIdSS61.js";import"./index-CF50Srtj.js";import"./index-MWxZbhrE.js";import"./slim-arrow-down-F0Pm_4oK.js";import"./Input-BhtW4_5c.js";import"./ResponsivePopoverCommon.css-BUxGZes4.js";import"./ValueStateMessage.css-Bbj2XpR4.js";import"./Suggestions.css-tt1nfuuG.js";import"./ListBoxItemGroupTemplate-o9uQGfAz.js";import"./ComboBoxItemGroup-D2Ek2hZU.js";import"./ListItemBaseTemplate-M2eQiRWW.js";import"./Token-GBNwp73E.js";import"./ScrollEnablement-BuLvzDFb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BfdqbOJt.js";import"./ToggleButton-BCPXY_Ug.js";import"./SuggestionItem-DkeJr8Uj.js";import"./index-BKb2eeim.js";import"./Option-BV6lO7dz.js";import"./index-Bg5k6qvB.js";import"./SegmentedButton-CFw5tEED.js";import"./index-CEaBFzJC.js";import"./Select-BdWwnW7P.js";import"./InvisibleMessage-Ce4CN5Vg.js";import"./slim-arrow-down-B5JPuMYZ.js";import"./index-BnrnCSjD.js";import"./index-C6R9FrtI.js";import"./index-DaOWCx8l.js";import"./index-CSWlCTzX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CGPM4R0_.js";import"./group-2-09PNMZ-u.js";import"./sort-descending-DNDw-3QK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BGou595l.js";import"./utils-BtvyjyGh.js";import"./index-BczVQc8C.js";import"./index-Cv0Q1UgH.js";import"./index-Bk-Qx2M8.js";import"./navigation-down-arrow-DEN2N7AT.js";import"./navigation-right-arrow-D2uUmPNT.js";import"./navigation-right-arrow-BW1qFR6l.js";import"./useCurrentTheme-BVOqA9kw.js";import"./index-CUY0Gfu8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DmNCTJWW.js";import"./paper-plane-BcpS0W6p.js";import"./index-BPR-maoO.js";import"./less-Dxs7OAKQ.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

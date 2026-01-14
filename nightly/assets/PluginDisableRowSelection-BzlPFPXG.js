import{j as e}from"./iframe-Cig4nsrF.js";import{useMDXComponents as n}from"./index-rt57_u-y.js";import{I as r,F as s}from"./CommandsAndQueries-D3xhwJA5.js";import{M as l,C as a}from"./blocks-DAEBkYYF.js";import"./Tag-Bs_1btou.js";import"./index-FKwq6U9j.js";import"./copy-C7r52zpO.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-0rYh6hvK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2RnTjWc.js";import"./index-BB06tsQb.js";import"./index-5C4HFP5l.js";import"./Link-Br9IVr1w.js";import"./index-BrrdpEgt.js";import"./index-ftQeoy-6.js";import"./index-BmqXmyDH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsK0-Mz_.js";import"./addCustomCSSWithScoping-BWNNT1nj.js";import"./index-BL2sJT6Z.js";import"./information-B6HgxZBq.js";import"./sys-enter-2-BRRws0JK.js";import"./alert-Cb5ARKKh.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Co5XmSb5.js";import"./delete-ugUqvhvv.js";import"./settings-2-V-zzIF.js";import"./NoData-CS-hnXJz.js";import"./IllustratedMessage-CjeAap-f.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DCm0gYGU.js";import"./index-79jYN5UM.js";import"./index-BGP_pL27.js";import"./slim-arrow-down-Cde-9O_z.js";import"./Input-RuURL5K_.js";import"./ResponsivePopoverCommon.css-CMdAayek.js";import"./ValueStateMessage.css-DVzvrXAG.js";import"./Suggestions.css-orKcFsj8.js";import"./ListBoxItemGroupTemplate-DWiibI4p.js";import"./ComboBoxItemGroup-I9mAlXsd.js";import"./ListItemBaseTemplate-nSbjmalX.js";import"./Token-C-bz4Mer.js";import"./ScrollEnablement-CSPhLIym.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DwpoAFwW.js";import"./ToggleButton-BFt3XSJk.js";import"./SuggestionItem-CReGhLBD.js";import"./index-7tZHNO4V.js";import"./Option-DWIrDKUO.js";import"./index-B2E6tsgb.js";import"./SegmentedButton-BEhsiTuz.js";import"./index-BK97A2Mp.js";import"./Select-CK2fiiVZ.js";import"./InvisibleMessage-DOTQpYl4.js";import"./slim-arrow-down-227TRo9_.js";import"./index-D8a1U50t.js";import"./index-CPhWTent.js";import"./index-C4xEk85l.js";import"./index-B3y-2zol.js";import"./IconDesign-DXd8PPVF.js";import"./filter-02HjQ7DM.js";import"./group-2-JT9pYnBG.js";import"./sort-descending-h8bEOQuH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Byv0x5jL.js";import"./utils-MCEsiAYG.js";import"./index-DJ49jrAi.js";import"./index-Cj5WFeiX.js";import"./index-BEDQKVKE.js";import"./navigation-down-arrow-CR7KrOFx.js";import"./navigation-right-arrow-D5-JGpIg.js";import"./navigation-right-arrow-BaOLieOq.js";import"./useCurrentTheme-gRbDvB5W.js";import"./index-D0dt3M83.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DQfggaPU.js";import"./paper-plane-IFueWYrv.js";import"./index-3yS61UMO.js";import"./less-DaTrqMft.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

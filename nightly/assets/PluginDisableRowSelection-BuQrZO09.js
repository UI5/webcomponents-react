import{j as e}from"./iframe-BFWc6ije.js";import{useMDXComponents as n}from"./index-DIwiR8-R.js";import{I as r,F as s}from"./CommandsAndQueries-RvyhHzLx.js";import{M as l,C as a}from"./blocks-_C0Ko-FB.js";import"./Tag-BlcbvGrz.js";import"./index-S-jzd0og.js";import"./copy-B0915CdE.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DMwZPbok.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWXRaFCB.js";import"./index-BJhTX5aa.js";import"./index-Ammjaz44.js";import"./Link-C0nE2LNS.js";import"./index-D6ti5Aap.js";import"./index-BNrsjj3y.js";import"./index-BeiCFHJ0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-NyszqC-C.js";import"./addCustomCSSWithScoping-DHZr8-1Q.js";import"./index-DYh3DUHT.js";import"./information-gUiWTFs7.js";import"./sys-enter-2-Czjj6c4O.js";import"./alert-Dwrii-iz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-2a6sZTKt.js";import"./delete-GLZPXNIt.js";import"./settings-Bl3VKOzY.js";import"./NoData-D1FNpf90.js";import"./IllustratedMessage-Col1197V.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BHuYeTyV.js";import"./index-DgCS7Nk3.js";import"./index-SZqCzEgh.js";import"./slim-arrow-down-Dv1ZFOOG.js";import"./Input-BTIWHmaN.js";import"./ResponsivePopoverCommon.css-c4jpBfVX.js";import"./ValueStateMessage.css-C8t0n2is.js";import"./Suggestions.css-Cj5eaUvh.js";import"./ListBoxItemGroupTemplate--RkL3eX-.js";import"./ComboBoxItemGroup-CvfuwnhX.js";import"./ListItemBaseTemplate-DWiE6hVW.js";import"./Token-RwPCKO7L.js";import"./ScrollEnablement-BS-59KGT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-3Dr6elZ5.js";import"./ToggleButton-NLglJiSM.js";import"./SuggestionItem-B18x_0Bw.js";import"./index-_nYMLiJq.js";import"./Option-BCCI7jGA.js";import"./index-DYvMbD0V.js";import"./SegmentedButton-2c88fWgR.js";import"./index-IKSBMBYh.js";import"./Select-DGk89UWd.js";import"./InvisibleMessage-gz9Baj7W.js";import"./slim-arrow-down-DbgE6iuN.js";import"./index-RsMAEwo8.js";import"./index-DNOnKtp6.js";import"./index-fezgehlA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DTa28ct7.js";import"./group-2-1vH7OeUe.js";import"./sort-descending-6IaS3sEK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-8A7JpsJT.js";import"./utils-_MgrmSbV.js";import"./index-CFTVOaaJ.js";import"./index-c-viX2G1.js";import"./index-Tigp63LJ.js";import"./navigation-down-arrow-C3oL93Ku.js";import"./navigation-right-arrow-D0tZtsPJ.js";import"./navigation-right-arrow-OUJD2N61.js";import"./useCurrentTheme-BdY6233y.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bfz-LgXH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DrH-Pm0z.js";import"./paper-plane-CCOFurtH.js";import"./index-BqcaYpg7.js";import"./less-BXPL7yK5.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

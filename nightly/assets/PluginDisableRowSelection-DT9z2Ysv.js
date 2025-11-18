import{j as e}from"./iframe-B_Wb0L56.js";import{useMDXComponents as n}from"./index-307InIrT.js";import{I as r,F as s}from"./CommandsAndQueries-DZD1CEEu.js";import{M as l,C as a}from"./blocks-BG9i3u3d.js";import"./Tag-BJqa-9S6.js";import"./index-IQMTO30I.js";import"./copy-B8s392ic.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D2vA9uBw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C1-6BxML.js";import"./index-CTXSjodk.js";import"./index-6_sfbhaU.js";import"./Link-mQObbT4s.js";import"./index-B6cUzUVp.js";import"./index-DKVx4eTx.js";import"./index-BzKebhUC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CNNLg8qF.js";import"./addCustomCSSWithScoping-CLC5si1k.js";import"./index-DOJ9CtkL.js";import"./information-CNVdTL1g.js";import"./sys-enter-2-YeZbpBvt.js";import"./alert-BrJW2BAH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D0ei0ZuD.js";import"./delete-yizw3Nd_.js";import"./settings-Z8JiUEHk.js";import"./NoData-BXXzYKHm.js";import"./IllustratedMessage-C-PTvkiQ.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Dl5aZcs3.js";import"./index-HqvTsmff.js";import"./index-DRaRyi79.js";import"./slim-arrow-down-C0o9FaNn.js";import"./Input-DOSA1gj5.js";import"./ResponsivePopoverCommon.css-Bv2xf9qt.js";import"./ValueStateMessage.css-0XZoqLsO.js";import"./Suggestions.css-DyTJTEQX.js";import"./ListBoxItemGroupTemplate-Dm-XJTSL.js";import"./ComboBoxItemGroup-BiM99Ixa.js";import"./ListItemBaseTemplate-D-PBqwpz.js";import"./Token-BHMMMhCD.js";import"./ScrollEnablement-CH2t3NPn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dko9W1lQ.js";import"./ToggleButton-CRq8bV8B.js";import"./SuggestionItem-8yq177mX.js";import"./index-DSsZL42Q.js";import"./Option-T3GgrmoY.js";import"./index-B3RRxnRL.js";import"./SegmentedButton-DUyioROv.js";import"./index-D5_ZfJ5N.js";import"./Select-Bf7b8VrB.js";import"./InvisibleMessage-D0Kxo4HB.js";import"./slim-arrow-down-DqloInc9.js";import"./index-DkWPeISK.js";import"./index-2TWARYFI.js";import"./index-744O76gW.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CobfnnXw.js";import"./group-2-DMZc4frg.js";import"./sort-descending-C8Z32LYO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BnfHDuuy.js";import"./utils-C8OSDLXz.js";import"./index-CaT9ZYZr.js";import"./index-Bq2hbA6h.js";import"./index-GUfgErK1.js";import"./navigation-down-arrow-CQ5WMHeX.js";import"./navigation-right-arrow-B7l-Sd1s.js";import"./navigation-right-arrow-mIKtPw9Z.js";import"./useCurrentTheme-D8exwLuJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BSVh1B3z.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-7XnIEYeH.js";import"./paper-plane-C-rRvcez.js";import"./index-BplSwyVb.js";import"./less-Byci0Gnt.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

import{j as e}from"./iframe-DwhXZ5O1.js";import{useMDXComponents as n}from"./index-Dr45Q_rW.js";import{I as r,F as s}from"./CommandsAndQueries-CZ-0KT78.js";import{M as l,C as a}from"./blocks-EKNE_kOu.js";import"./Tag-CK1DTCaY.js";import"./index-C0PXwN3M.js";import"./copy-CMcdSlV7.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BPXE2sY9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5LjiSCx.js";import"./index-DsUvOdfw.js";import"./index-BwctDZ8k.js";import"./Link-jbv8jxOr.js";import"./index-D0dcM15D.js";import"./index-EBvmFTXF.js";import"./index-CczjdlqU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjLi0LGT.js";import"./addCustomCSSWithScoping-BuPMXfqj.js";import"./index-DzVbmGXs.js";import"./information-BtytWan6.js";import"./sys-enter-2-PzhKRuDm.js";import"./alert-Ul17j7cb.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQaPuMj9.js";import"./delete-CZFi7vv1.js";import"./settings-DaEPRpNY.js";import"./NoData-KA-UEncs.js";import"./IllustratedMessage-BNojrsJJ.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DzljgzTe.js";import"./index-DZZVdq38.js";import"./index-5cjhwMF8.js";import"./slim-arrow-down-D11Ifl1b.js";import"./Input-BVBpS4hN.js";import"./ResponsivePopoverCommon.css-D9EhSfWF.js";import"./ValueStateMessage.css-DKKJr_ad.js";import"./Suggestions.css-5lOsSJat.js";import"./ListBoxItemGroupTemplate-4sKEf2MS.js";import"./ComboBoxItemGroup-BPeqzv7K.js";import"./ListItemBaseTemplate-AqdYmEyg.js";import"./Token-Cj9wPA0C.js";import"./ScrollEnablement-DJUo6QFq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-F-hxCo2t.js";import"./ToggleButton-CrmFwEL9.js";import"./SuggestionItem-3xgWZymy.js";import"./index-B_utt3Vf.js";import"./Option-daf91KbS.js";import"./index-BphwTy74.js";import"./SegmentedButton-9GqZ-CP5.js";import"./index-Du47Xxv-.js";import"./Select-9aXmxiVY.js";import"./InvisibleMessage-CpREcibi.js";import"./slim-arrow-down-DdhS0vfb.js";import"./index-xZ2ygxdI.js";import"./index-Jg-2yZX5.js";import"./index-xu1m-Uev.js";import"./index-DIEkdcjg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CQFrmHwe.js";import"./group-2-DNdQ0Z2B.js";import"./sort-descending-Dzm0Tdo-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hE-oQ1Oe.js";import"./utils-DY6mkGAC.js";import"./index-D4zxb5Y9.js";import"./index-D9fLrxBi.js";import"./index-BJZJ7I5D.js";import"./navigation-down-arrow-D_-UgM8Y.js";import"./navigation-right-arrow-6VwOC1wR.js";import"./navigation-right-arrow-CCnD2Vrj.js";import"./useCurrentTheme-fCt6jlcj.js";import"./index-BpYcsL8v.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-961lF1Cj.js";import"./paper-plane-f20_J01s.js";import"./index-BsTf-Gaj.js";import"./less-Ceh_NYtF.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

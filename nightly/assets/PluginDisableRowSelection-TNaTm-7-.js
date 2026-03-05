import{j as e}from"./iframe-Dp_0Yhmg.js";import{useMDXComponents as n}from"./index-BMV3GZRz.js";import{I as r}from"./CommandsAndQueries-DDLi5yBU.js";import{M as s,C as l}from"./blocks-CKlkgOe3.js";import"./Tag-CNZu_-1j.js";import"./index-nFX3Pl_S.js";import"./copy-BMHKKbyO.js";import{F as a}from"./Footer-Pq4yDBwS.js";import"./PageNotFound-BsRlbC58.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-V88yIYjm.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DcMDvp4G.js";import"./index-DzgaNcC5.js";import"./index-C5vcogVt.js";import"./index-T5J1jf5G.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCqFx9Uj.js";import"./addCustomCSSWithScoping-CZYJlNXb.js";import"./index-Cu_XsrMy.js";import"./index-DXry597q.js";import"./index-DjJhZI7Y.js";import"./information-gl9SwVgW.js";import"./sys-enter-2-0WtHGlhQ.js";import"./alert-Bcw4Fg6E.js";import"./index-DpBR8FGa.js";import"./Illustrations-bZxTgUi1.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DZlU0_nw.js";import"./delete-DqKBQPKu.js";import"./settings-O9lrexvt.js";import"./NoData-Dg0Hqj8X.js";import"./NoFilterResults-BPGK8QO_.js";import"./index-K5CBibs9.js";import"./IllustratedMessage-BMmkB-iU.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-tFfwrzuZ.js";import"./slim-arrow-down-BC4mtdbv.js";import"./Input-CRrnYeQZ.js";import"./ResponsivePopoverCommon.css-h1W8s5fZ.js";import"./ValueStateMessage.css-Bf7fXuVn.js";import"./Suggestions.css-nwnFE4qJ.js";import"./ListBoxItemGroupTemplate-BKRsXqLf.js";import"./ComboBoxItemGroup-D-EcnRF3.js";import"./ListItemBaseTemplate-BZikYPsL.js";import"./Token-BlNZY41K.js";import"./ScrollEnablement-DIUnalZp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B-TzNdgp.js";import"./ToggleButton-BjDcT3J0.js";import"./SuggestionItem-BE-Ftq-K.js";import"./index-Cfr2EVXu.js";import"./Option-DPpzprMH.js";import"./index-DrO4gkBj.js";import"./SegmentedButton-7Tky5Pfm.js";import"./index-DrYCygiX.js";import"./Select-CURJ6tOv.js";import"./InvisibleMessage-B2w_5M6j.js";import"./slim-arrow-down-CDgGjVrM.js";import"./index-CFOVWAzR.js";import"./index-DMoBwtGT.js";import"./index-CHwuhYIq.js";import"./index-cGopohf8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Da6TJjGQ.js";import"./group-2-CLfZKXSW.js";import"./sort-descending-CRkRUk04.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bql-qSdh.js";import"./utils-CxnTFJIb.js";import"./index-D8f-xZlT.js";import"./index-DovYOhn7.js";import"./index-BmzNDvvc.js";import"./navigation-down-arrow-DZaQ3Z_i.js";import"./navigation-right-arrow-CbfpzaeK.js";import"./navigation-right-arrow-CH2tup3m.js";import"./useCurrentTheme-DddtRzkQ.js";import"./index-CjzqcDm-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-anVy-FXS.js";import"./paper-plane-FPbukG19.js";import"./index-BPv30PhM.js";import"./less-CaYfSCWa.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(a,{})]})}function Ue(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ue as default};

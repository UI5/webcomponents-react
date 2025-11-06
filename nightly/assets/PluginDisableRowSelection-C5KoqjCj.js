import{j as e}from"./iframe-DVlTfEM-.js";import{useMDXComponents as n}from"./index-k_8IF_2O.js";import{I as r,F as s}from"./CommandsAndQueries-BkPdYDds.js";import{M as l,C as a}from"./blocks-DrSp3MOM.js";import"./Tag-BNH48-R1.js";import"./index-Cikr51XZ.js";import"./copy-Do4831X0.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Dc4CzVRx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D8q9J4Er.js";import"./index-D5QdPm5n.js";import"./index-VtIqKiJ-.js";import"./Link-B2NzUiP2.js";import"./index-I1wK0hXe.js";import"./index-gAu6pc3o.js";import"./index-B-srII_E.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CuLQb_Od.js";import"./addCustomCSSWithScoping-DyDcwna5.js";import"./index-CyKhe59o.js";import"./information-CmhnSrRB.js";import"./sys-enter-2-ty4GJ2q8.js";import"./alert-MBG6abBg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DkCO8Xag.js";import"./delete-D8PsoqYs.js";import"./settings-BvZiD-4L.js";import"./NoData-CSkDH6ij.js";import"./IllustratedMessage-UOdpDpe-.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-Cr9VJd-6.js";import"./index-zssJOUHP.js";import"./index-DjSKLUSQ.js";import"./slim-arrow-down-Cl15R1ZF.js";import"./Input-BGJxuKnZ.js";import"./ResponsivePopoverCommon.css-oNmL3crK.js";import"./ValueStateMessage.css-CtUL6j0K.js";import"./Suggestions.css-CM1R5dIm.js";import"./ListBoxItemGroupTemplate-BP2e86jZ.js";import"./ComboBoxItemGroup-BqFAfTuf.js";import"./ListItemBaseTemplate-C_4eP7YO.js";import"./Token-DvVKUdOw.js";import"./ScrollEnablement-D7Xa6acP.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C3KQCuJV.js";import"./ToggleButton-fm8RXqSV.js";import"./SuggestionItem-CRJSj9d9.js";import"./index-DL3kJ6Ys.js";import"./Option-bA3BQjg2.js";import"./index-Chk0CywK.js";import"./SegmentedButton-CHFmZDT5.js";import"./index-B43_nY2G.js";import"./Select-D18nbPyu.js";import"./InvisibleMessage-CRYSMjmC.js";import"./slim-arrow-down-CiXqYYHt.js";import"./index-iqm3GyJh.js";import"./index-CkVXAiTR.js";import"./index-Dyam-MVy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-scTLOOoX.js";import"./group-2-dWyvSvql.js";import"./sort-descending-B0NwIWrn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CmrYW8iD.js";import"./utils-Cr5WVsBR.js";import"./index-BFCC2aiM.js";import"./index-CMeIuUOs.js";import"./index-BL4PIRcT.js";import"./navigation-down-arrow-BUDUl4ig.js";import"./navigation-right-arrow-Dfp0sj6x.js";import"./navigation-right-arrow-DYueMaPq.js";import"./useCurrentTheme--PrL2jjb.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D3bUPVNG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-EPGyQxGy.js";import"./paper-plane-Bmo31A5w.js";import"./index-B4QIzuUd.js";import"./less-DHSI_jam.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

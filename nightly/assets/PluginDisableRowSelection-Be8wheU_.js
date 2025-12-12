import{j as e}from"./iframe-CA3Ho9Q5.js";import{useMDXComponents as n}from"./index-BSP_ypsD.js";import{I as r,F as s}from"./CommandsAndQueries-CpnGQ0tY.js";import{M as l,C as a}from"./blocks-duj_cvae.js";import"./Tag-C7EDP0wF.js";import"./index-B2KbXcP2.js";import"./copy-Cirx0xPf.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CX2YmmH7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CS7zB70b.js";import"./index-B1DuQcex.js";import"./index-Cj36scYa.js";import"./Link-B9lvI_mX.js";import"./index-Vj9BxWeO.js";import"./index-DJDcB98R.js";import"./index-CnX6lHZc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CziqpW1M.js";import"./addCustomCSSWithScoping-CmwUGghA.js";import"./index-QQ_2tXfB.js";import"./information-D0PKU0zc.js";import"./sys-enter-2-BzmXGgFI.js";import"./alert-DOfQq82s.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-pSB3nE8O.js";import"./delete-xPoZJBZg.js";import"./settings-sBnL1p2q.js";import"./NoData-Bjn-uhcG.js";import"./IllustratedMessage-C1nIamAf.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CBaUn8xf.js";import"./index-0bZDwJmd.js";import"./index-CM7WhKj6.js";import"./slim-arrow-down-C3eZfZh-.js";import"./Input-CVKYZVtQ.js";import"./ResponsivePopoverCommon.css-HLQwWCxH.js";import"./ValueStateMessage.css-DfbuXwvj.js";import"./Suggestions.css-iNzzcrss.js";import"./ListBoxItemGroupTemplate-D0iaKul1.js";import"./ComboBoxItemGroup-DZa5aCxI.js";import"./ListItemBaseTemplate-VtML0_fs.js";import"./Token-BPQsJP1e.js";import"./ScrollEnablement-Dip40C-m.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DKlWXx6n.js";import"./ToggleButton-B5e8_eSy.js";import"./SuggestionItem-ii4KscYX.js";import"./index-CNQ8GyV9.js";import"./Option-0FkMbiJ5.js";import"./index-BLzjPo3w.js";import"./SegmentedButton-B-4keN_u.js";import"./index-CRVjoIym.js";import"./Select-BslhBdoh.js";import"./InvisibleMessage-BF5OzUJ0.js";import"./slim-arrow-down-CLco8maH.js";import"./index-DFRTyKxs.js";import"./index-BHNHxsyD.js";import"./index-BtK-IhRn.js";import"./index-BLZkVtTr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BTIOOdab.js";import"./group-2-DeuvYpMF.js";import"./sort-descending-Dfh9oR0a.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-U8bJ6mPR.js";import"./utils-mN_QxSrv.js";import"./index-DWY9VANS.js";import"./index-NiE7rD6V.js";import"./index-CnEeNT_m.js";import"./navigation-down-arrow-CEMVxfUW.js";import"./navigation-right-arrow-pdf4AWX0.js";import"./navigation-right-arrow-C4WsPtKq.js";import"./useCurrentTheme-B-RCzITw.js";import"./index-Cjnz1VnT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D8Jpu7PP.js";import"./paper-plane-GfWk7Nnh.js";import"./index-Bgs4bEEy.js";import"./less-tNpUXr9m.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

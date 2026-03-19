import{j as e}from"./iframe-CqN2ZhBf.js";import{useMDXComponents as n}from"./index-l_k7HiPu.js";import{I as r}from"./CommandsAndQueries-BzSACk84.js";import{M as s,C as l}from"./blocks-D3fE08ja.js";import"./Tag-DaK0HZJI.js";import"./index-BQSixcl8.js";import"./copy-BMnDsiBX.js";import{F as a}from"./Footer-DTH9quFy.js";import"./PageNotFound-DDb6UcXH.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-wIwPshJ2.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-sJNkb0O1.js";import"./index-C_OjFqiG.js";import"./index-BmfFKSeY.js";import"./index-C6JiuDE8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1eKis37g.js";import"./addCustomCSSWithScoping-DCGf9rRA.js";import"./index-ClO4sXRT.js";import"./index-BLwcEe9O.js";import"./index-BZ-8NUw-.js";import"./information-D6BYlg7t.js";import"./sys-enter-2-DctZJMGf.js";import"./alert-CXFO2CkX.js";import"./index-x-vR1nJy.js";import"./Illustrations-CQ3hDVBV.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories--txPoGWe.js";import"./delete-h2XdaitH.js";import"./settings-CV6KCmeb.js";import"./NoData-C6Sl59W9.js";import"./NoFilterResults-_LAkR6Uq.js";import"./index-BScT3cos.js";import"./IllustratedMessage-ClWQ7sf8.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CjGTJ4y2.js";import"./Input-3bofm7YI.js";import"./ResponsivePopoverCommon.css-BNkBTrbu.js";import"./ValueStateMessage.css-rci_AzRX.js";import"./Suggestions.css-s0E0RINe.js";import"./ListBoxItemGroupTemplate-Bn09u9FB.js";import"./ComboBoxItemGroup-B1knsw1Z.js";import"./ListItemBaseTemplate-6JC-rm6u.js";import"./Token-BHS6Qknj.js";import"./ScrollEnablement-B4APcJGh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D5MRk4wr.js";import"./ToggleButton-CXDSYRUx.js";import"./multiselect-all-Bj3dWoCm.js";import"./SuggestionItem-uNJHrwE9.js";import"./index-CEbPyYrY.js";import"./Option-DMa1oTmd.js";import"./index-C403r3c5.js";import"./SegmentedButton-DKhXYk1S.js";import"./index-M_ILyq9S.js";import"./Select-C0_CyldT.js";import"./InvisibleMessage-BYqXJDe3.js";import"./index-B6LH8klQ.js";import"./index-BPeJ1ib5.js";import"./index-BLglrg0-.js";import"./index-B2BYcUEV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DbiJbucS.js";import"./group-2-E6ze7SLh.js";import"./sort-descending-DDk2sEof.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-4NWRO4be.js";import"./utils-DlysuV-i.js";import"./index-uzSXEkPm.js";import"./index-BIMeoTS_.js";import"./index-C3YYhu2K.js";import"./navigation-down-arrow-BLAd6_UK.js";import"./navigation-right-arrow-CER8vNPc.js";import"./navigation-right-arrow-Dzk8mzqX.js";import"./useCurrentTheme-C2V2IWtp.js";import"./index-CUOgXW1b.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C9HJPlj_.js";import"./paper-plane-_ZQb1tQs.js";import"./index-0rrPHm6J.js";import"./less-BaKkSfRH.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};

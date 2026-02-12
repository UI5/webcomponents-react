import{j as e}from"./iframe-DK_3t7HQ.js";import{useMDXComponents as n}from"./index-Bn4DIwe1.js";import{I as r,F as s}from"./CommandsAndQueries-8GqG6vck.js";import{M as l,C as a}from"./blocks-BYCX_D4a.js";import"./Tag-CMm3ArFn.js";import"./index-DM6dIB46.js";import"./copy-Cen_7za9.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BICa3YPY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DcvukCsl.js";import"./index-W3t_MBGP.js";import"./index-BD65A0G0.js";import"./Link-s9SylKhD.js";import"./index-BLsgqlPC.js";import"./index-Bw6wQW8K.js";import"./index-BlpaDNQk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyNtnc-C.js";import"./addCustomCSSWithScoping-BS7bnaiL.js";import"./index-DGhVTpl9.js";import"./information-MEtG0nZR.js";import"./sys-enter-2-DcwCthWV.js";import"./alert-CP9vtKnc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CJcJ6ZNX.js";import"./delete-DXy6M3OZ.js";import"./settings-D0VrA07N.js";import"./NoData-BtEwvsbO.js";import"./IllustratedMessage-BWCPoFmo.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-yIv6d63o.js";import"./index-B9cf1Eyl.js";import"./index-DrhPB-8t.js";import"./slim-arrow-down-DAUAvb4X.js";import"./Input-CXY88w1C.js";import"./ResponsivePopoverCommon.css-Dlh5fqps.js";import"./ValueStateMessage.css-Chn8tD08.js";import"./Suggestions.css-C4SxCV0j.js";import"./ListBoxItemGroupTemplate-PD87gjmk.js";import"./ComboBoxItemGroup-CQlIYlQD.js";import"./ListItemBaseTemplate-C02QBSHL.js";import"./Token-Ke8CvjjM.js";import"./ScrollEnablement-MqyRN0-M.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BmjJqapy.js";import"./ToggleButton-BfrGkVWL.js";import"./SuggestionItem-CKzN3sv2.js";import"./index-tPIwOH9T.js";import"./Option-DXM5mccC.js";import"./index-C8nz_Rgb.js";import"./SegmentedButton-BGBZy06V.js";import"./index-ur1oRU8x.js";import"./Select-w2IGnN0_.js";import"./InvisibleMessage-D9sFbW1z.js";import"./slim-arrow-down-BB5WzEh_.js";import"./index-DsUOJVIL.js";import"./index-BeyM_sLD.js";import"./index--WGzy90A.js";import"./index-CjVM0U5d.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BCY9qfzQ.js";import"./group-2-DozQO3w7.js";import"./sort-descending-Doamk57x.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BUnfVL6W.js";import"./utils-BzsJoZkQ.js";import"./index-kf_FyfXD.js";import"./index-MtnL4A_g.js";import"./index-CiQBsJ4r.js";import"./navigation-down-arrow-B8-P8g3_.js";import"./navigation-right-arrow-FMnV_NeM.js";import"./navigation-right-arrow-fibED6EI.js";import"./useCurrentTheme-BFuyjl0R.js";import"./index-BWXdaK_T.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-9GnEdIyA.js";import"./paper-plane-CyMFIh-J.js";import"./index-Ce-FX6Nz.js";import"./less-C_g1y2f6.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

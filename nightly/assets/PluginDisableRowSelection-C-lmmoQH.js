import{j as e}from"./iframe-DxaU3ukP.js";import{useMDXComponents as n}from"./index-Bu64E7xz.js";import{I as r,F as s}from"./CommandsAndQueries-CWzmGACf.js";import{M as l,C as a}from"./blocks-shsJXsJu.js";import"./Tag-HWB4mzIK.js";import"./index-BuSb9dlo.js";import"./copy-iAtgzS7e.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CvnNq-Rx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DCr6QTyS.js";import"./index-4KyKvZuP.js";import"./index-DJhOYGHM.js";import"./Link-B8iiEW6g.js";import"./index-wIV-Jx7Q.js";import"./index-B4KIHpYZ.js";import"./index-CCQGvtXt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-P9_4H6jZ.js";import"./addCustomCSSWithScoping-DcrmHllZ.js";import"./index-DBN874s0.js";import"./information-Y-FlrSb9.js";import"./sys-enter-2-Cl_Hs57G.js";import"./alert-xbLWAWtw.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYhdiQD5.js";import"./delete-BS7GLbbQ.js";import"./settings-BAtFRTLl.js";import"./NoData-P0aiFWNe.js";import"./IllustratedMessage-b_ym9Hb3.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BjgjNlcX.js";import"./index-DmQ0Wp9f.js";import"./index-DQK5zeFS.js";import"./slim-arrow-down-fGj_LI5J.js";import"./Input-D_YVohIg.js";import"./ResponsivePopoverCommon.css-DNS4oV3Y.js";import"./ValueStateMessage.css-DpHhcDZf.js";import"./Suggestions.css-CaY-hH4G.js";import"./ListBoxItemGroupTemplate-BajDE4jz.js";import"./ComboBoxItemGroup-CSbTFdho.js";import"./ListItemBaseTemplate-Dhr4Rhd3.js";import"./Token-C4NZa-ox.js";import"./ScrollEnablement-DfjnlUNY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-FvkwmzYL.js";import"./ToggleButton-CzTCoMTN.js";import"./SuggestionItem-CRPTOIvP.js";import"./index-ngowydBr.js";import"./Option-C0Uvoc7q.js";import"./index-tLjFiak6.js";import"./SegmentedButton-BrZOqfR3.js";import"./index-DMRgWmpo.js";import"./Select-B8Q3fF-g.js";import"./InvisibleMessage-Vimf6Y5N.js";import"./slim-arrow-down-DRqlReJZ.js";import"./index-BVH6V1yj.js";import"./index-B8fGZl2t.js";import"./index-rAT2WEiI.js";import"./index-C3UD1Hqj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DB4Xqkcu.js";import"./group-2-JYhBavgn.js";import"./sort-descending-BWym6GfS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hJi7DpYf.js";import"./utils-rEWueUxT.js";import"./index-DPFDbPpv.js";import"./index-C4sy8ZPw.js";import"./index-0BAFT4SC.js";import"./navigation-down-arrow-Bb0q6ooJ.js";import"./navigation-right-arrow-agwdLGP0.js";import"./navigation-right-arrow-DxjP7dnY.js";import"./useCurrentTheme-bdMlbWTW.js";import"./index-Dd-sbQ45.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-TKZ3-owy.js";import"./paper-plane-GGpDAgH5.js";import"./index-CTUD2-bS.js";import"./less-Bd6W-74P.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

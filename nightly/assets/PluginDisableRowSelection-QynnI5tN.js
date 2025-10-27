import{j as e}from"./iframe-ByiiILXu.js";import{useMDXComponents as n}from"./index-DYpmG0kU.js";import{I as r,F as s}from"./CommandsAndQueries-ByQHAThU.js";import{M as l,C as a}from"./blocks-DrNhXH8Y.js";import"./Tag-WBOqYu0X.js";import"./index-B20WCXLG.js";import"./copy-08ilKZ0c.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Bb5ta9Ng.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8yUpcOxv.js";import"./index-y2DJOFuG.js";import"./index-C2Yky6-6.js";import"./Link-DX54TCdQ.js";import"./index-C0jaTjnN.js";import"./index-BkgEbRU4.js";import"./index-DJ81LlKI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7LYDV0x0.js";import"./addCustomCSSWithScoping-DIYkZsvP.js";import"./index-COPBcnoz.js";import"./information-tN-lRIsU.js";import"./sys-enter-2-eFq8QnH9.js";import"./alert-DCLbzn71.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CKK8YXuW.js";import"./delete-D4zm_h0p.js";import"./settings-MyF3qJVm.js";import"./NoData-ljFJXsUq.js";import"./IllustratedMessage-CqwMvOWG.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BKp3AX8w.js";import"./index-D9LX0obP.js";import"./index-0fiPvY1b.js";import"./slim-arrow-down-Cz12efI2.js";import"./Input-n_T7UVDU.js";import"./ResponsivePopoverCommon.css-C1nFDre3.js";import"./ValueStateMessage.css-DknAZyiZ.js";import"./Suggestions.css-CltqZkwX.js";import"./ListBoxItemGroupTemplate-C7tSoEtb.js";import"./ComboBoxItemGroup-BKPF_atD.js";import"./ListItemBaseTemplate-F0fB9wHg.js";import"./Token-DEhWs7Mh.js";import"./ScrollEnablement--8rTw7W_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cju6LXlU.js";import"./ToggleButton-zDuc9RuQ.js";import"./SuggestionItem-QE9DA7xp.js";import"./index-BDP3hZHD.js";import"./Option-7PVSujFd.js";import"./index-L1FHo7Pk.js";import"./SegmentedButton-vjq3bmSv.js";import"./index-Cy9D_6lg.js";import"./Select-DeEFCAk3.js";import"./InvisibleMessage-1Hg6cN3L.js";import"./slim-arrow-down-Ci1RQCXj.js";import"./index-CKMaXFVW.js";import"./index-MHLsz4iU.js";import"./index-DvDvcTBA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B9g-vpCv.js";import"./group-2-CohTd7MD.js";import"./sort-descending-CEdiQwd1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-COGP4GHg.js";import"./utils-4syTV-OB.js";import"./index-CZYJmP3L.js";import"./index-2lxrn3Jb.js";import"./index-D5AoDYXK.js";import"./navigation-down-arrow-DFV_iHIE.js";import"./navigation-right-arrow-vs1LV1Nl.js";import"./navigation-right-arrow-6AlcfDn3.js";import"./useCurrentTheme-ibuaoMhS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-4MBDlEsO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-7T1wmeJR.js";import"./paper-plane-Dpb_fZ67.js";import"./index-Dqpgkjkr.js";import"./less-B2jLQw2j.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

import{j as e}from"./iframe-8PJ6_3g2.js";import{useMDXComponents as n}from"./index-C0ovl4HQ.js";import{I as r,F as s}from"./CommandsAndQueries-DwoVClSd.js";import{M as l,C as a}from"./blocks-BEb05MJo.js";import"./Tag-z4B_wt0s.js";import"./index-BcmoHwde.js";import"./copy-Bfeap7lu.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Nt8WbxtB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CYfjdXMS.js";import"./index-BDwyo_3E.js";import"./index-GTIQmPyl.js";import"./Link-BhglMJXJ.js";import"./index-DOdcY3p9.js";import"./index-BGjlJLGo.js";import"./index-BysWD4q1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsI0QAy3.js";import"./addCustomCSSWithScoping-DJAGr2gu.js";import"./index-DwEBrLAz.js";import"./information-aKABhmx8.js";import"./sys-enter-2-BFUBKj9Z.js";import"./alert-yjyGEikw.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CRLZ9Z9y.js";import"./delete-DoVGGrww.js";import"./settings-DOwCGSp-.js";import"./NoData-DX8iFU04.js";import"./IllustratedMessage-DwvnKJ-a.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Cz59M25c.js";import"./index-BT7W3yfe.js";import"./index-BdN-aXSN.js";import"./slim-arrow-down-BTsCMmyB.js";import"./Input-09R7KXgd.js";import"./ResponsivePopoverCommon.css-CrTnDQN-.js";import"./ValueStateMessage.css-BM_qG5Qq.js";import"./Suggestions.css-B1t_kolg.js";import"./ListBoxItemGroupTemplate-DuVOq56T.js";import"./ComboBoxItemGroup-CbELEeBa.js";import"./ListItemBaseTemplate-BXf-MYE4.js";import"./Token-BMJQIKb4.js";import"./ScrollEnablement-CI1lcBXS.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BZruH8lY.js";import"./ToggleButton-rRY9LxWZ.js";import"./SuggestionItem-D37ZdZha.js";import"./index-DIJMSgqG.js";import"./Option--8nGv81u.js";import"./index-B4ZMJdMK.js";import"./SegmentedButton-Sdb6Hiel.js";import"./index-D8L7g3jK.js";import"./Select-CwKKVGbl.js";import"./InvisibleMessage-Ctaws7An.js";import"./slim-arrow-down-udpyDWvM.js";import"./index-Dz-9JHfm.js";import"./index-CSgO5UkG.js";import"./index-DmBbmPAO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BCjSLsv5.js";import"./group-2-gn0AftPK.js";import"./sort-descending-UnfrwN5g.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CBj28W3w.js";import"./utils-CQzE5s8Z.js";import"./index-CKJGxDyU.js";import"./index-EqUF1F3h.js";import"./index-BVu9BMf-.js";import"./navigation-down-arrow-DQ7nYyPJ.js";import"./navigation-right-arrow-BKJTL6fn.js";import"./navigation-right-arrow-CG0KPGIo.js";import"./useCurrentTheme-B8X2i-jd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-uz7ZZ6ou.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DxBvBx4N.js";import"./paper-plane-C7vPyTzF.js";import"./index-Pz9pP2GN.js";import"./less-B8XtBTQx.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

import{j as e}from"./iframe-d6kFjKmB.js";import{useMDXComponents as n}from"./index-C_GtGqSz.js";import{I as r,F as s}from"./CommandsAndQueries-CN1OL-NC.js";import{M as l,C as a}from"./blocks-cydmgMgt.js";import"./Tag-pDj71kKq.js";import"./index-Df2R9LIn.js";import"./copy-10s1L_tU.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B6u65tjO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-SdRuQi.js";import"./index-Ct6Sh5v4.js";import"./index-CPMalJUe.js";import"./Link-sWUxxSV7.js";import"./index-CYwfFviQ.js";import"./index-Bn3tqYuU.js";import"./index-Cmh3YBGn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cp8_wMdK.js";import"./addCustomCSSWithScoping-CykojlcF.js";import"./index-ByGA7EJm.js";import"./information-U09OVfZR.js";import"./sys-enter-2-Iyx_uxbM.js";import"./alert-BF6Rf2Y5.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DCDRud3K.js";import"./delete-DcZ_ESaK.js";import"./settings-DbtyNHg0.js";import"./NoData-Bvmt149v.js";import"./IllustratedMessage-DcobuqWw.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-B6LDqNG1.js";import"./index-DqgMpJUT.js";import"./index-BCw7ON1Z.js";import"./slim-arrow-down-CR1be_E9.js";import"./Input-dxqpd5U9.js";import"./ResponsivePopoverCommon.css-DcJ2hMwV.js";import"./ValueStateMessage.css-CyfOZFgE.js";import"./Suggestions.css-CUYXbb3W.js";import"./ListBoxItemGroupTemplate-C1P8H3jz.js";import"./ComboBoxItemGroup--hDgJGkA.js";import"./ListItemBaseTemplate-dhaNXDhg.js";import"./Token-DnAjIFML.js";import"./ScrollEnablement-DL7VbC7Z.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CC3AoL1h.js";import"./ToggleButton-Cc8nNZxM.js";import"./SuggestionItem-B2W22jWd.js";import"./index-DNoaRiX5.js";import"./Option-v7vt7Rdt.js";import"./index-BC-Coj9b.js";import"./SegmentedButton-BH66OmjY.js";import"./index-DeWgeTv8.js";import"./Select-DHc0FIKo.js";import"./InvisibleMessage-D-ICaE5n.js";import"./slim-arrow-down-DHXwfDdF.js";import"./index-DPdj3l_g.js";import"./index-emcQUTqU.js";import"./index-BwoHhzeW.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CDQ6lIsG.js";import"./group-2-Cs_V0lTI.js";import"./sort-descending-gjDcZUoT.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BVWxMnE0.js";import"./utils-yoGam15V.js";import"./index-D1bbI-28.js";import"./index-B8W7BbeA.js";import"./index-D3HgSzPX.js";import"./navigation-down-arrow-DwX5fF7A.js";import"./navigation-right-arrow-DZ-QiOAH.js";import"./navigation-right-arrow-DVA-iewx.js";import"./useCurrentTheme-Bx2NeakM.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CsFcaWRy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CQU0f-9V.js";import"./paper-plane-CFbIXMZn.js";import"./index-BjJ-kmKh.js";import"./less-BZqHrptj.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

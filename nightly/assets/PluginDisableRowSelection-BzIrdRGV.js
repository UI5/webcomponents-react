import{j as e}from"./iframe-Bn2VcNjM.js";import{useMDXComponents as n}from"./index-B8O2NRso.js";import{I as r,F as s}from"./CommandsAndQueries-Duu3Cv2i.js";import{M as l,C as a}from"./blocks-DxdZj58t.js";import"./Tag-CP1g89nG.js";import"./index-DP2Vk4N-.js";import"./copy-BNtdn9f6.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D27vu2Iz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPtlwBkZ.js";import"./index-DtkUQ_fK.js";import"./index-DwYiaS9z.js";import"./Link-BGC1cQo4.js";import"./index-FmeoD5BD.js";import"./index-DzdCI7N0.js";import"./index-DQbgfd5S.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2LahRfeL.js";import"./addCustomCSSWithScoping-I5ABusfy.js";import"./index-BmvAtQRx.js";import"./information-BknIne9K.js";import"./sys-enter-2-BaImGntK.js";import"./alert-B1eI2qVm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-rJudJm1L.js";import"./delete-BgM6NZU8.js";import"./settings-afU_X4y-.js";import"./NoData-CCTUaH-Y.js";import"./IllustratedMessage-BPXTEFZ6.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-C_smXuSi.js";import"./index-BK6gcuUd.js";import"./index-CmUtXOfx.js";import"./slim-arrow-down-CUDCAHka.js";import"./Input-BRWw1loe.js";import"./ResponsivePopoverCommon.css-HzvDnCCK.js";import"./ValueStateMessage.css-CumaGiZ4.js";import"./Suggestions.css-B1xe7rBm.js";import"./ListBoxItemGroupTemplate-CBq7J_0z.js";import"./ComboBoxItemGroup-BgBIYp1f.js";import"./ListItemBaseTemplate-C6sbgtZB.js";import"./Token-Dkk7tYZz.js";import"./ScrollEnablement-lrDN0VT4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BTqMzjs9.js";import"./ToggleButton-B-vG7hWq.js";import"./SuggestionItem-DGtw1FTX.js";import"./index-BxSXfCyg.js";import"./Option-B4c11NHt.js";import"./index-asog46eu.js";import"./SegmentedButton-D2oS9802.js";import"./index-CDC27Oew.js";import"./Select-D5v1ik0j.js";import"./InvisibleMessage-BEsY7hLw.js";import"./slim-arrow-down-pvLvaCi8.js";import"./index-Cn-qTtFd.js";import"./index-DeKz9Gr2.js";import"./index-BMosTBn7.js";import"./index-B_IlMEln.js";import"./IconDesign-DXd8PPVF.js";import"./filter-acsAtnVB.js";import"./group-2-BXSvOObK.js";import"./sort-descending-izY6pxiw.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dilp9cxP.js";import"./utils-DNXn1egh.js";import"./index-B8fEAJyK.js";import"./index-Be2AqBQ6.js";import"./index-CxElvdDf.js";import"./navigation-down-arrow-CvLpJA3c.js";import"./navigation-right-arrow-3m_p4YUA.js";import"./navigation-right-arrow-7tFU-dQd.js";import"./useCurrentTheme-Do2EjltT.js";import"./index-B3Djr-1p.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-12mExhQT.js";import"./paper-plane-C3T5G7aG.js";import"./index-DWOSVsfp.js";import"./less-DawEbsJp.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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

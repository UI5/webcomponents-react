import{j as e}from"./iframe-Bn2VcNjM.js";import{useMDXComponents as i}from"./index-B8O2NRso.js";import{I as a,F as m}from"./CommandsAndQueries-Duu3Cv2i.js";import{M as s,C as p}from"./blocks-DxdZj58t.js";import"./Tag-CP1g89nG.js";import"./index-DP2Vk4N-.js";import{C as l}from"./ControlsWithNote-BRoD9fSY.js";import"./copy-BNtdn9f6.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-D27vu2Iz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPtlwBkZ.js";import"./index-DtkUQ_fK.js";import"./index-DwYiaS9z.js";import"./Link-BGC1cQo4.js";import"./index-FmeoD5BD.js";import"./index-DzdCI7N0.js";import"./index-DQbgfd5S.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2LahRfeL.js";import"./addCustomCSSWithScoping-I5ABusfy.js";import"./index-BmvAtQRx.js";import"./information-BknIne9K.js";import"./sys-enter-2-BaImGntK.js";import"./alert-B1eI2qVm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-rJudJm1L.js";import"./delete-BgM6NZU8.js";import"./settings-afU_X4y-.js";import"./NoData-CCTUaH-Y.js";import"./IllustratedMessage-BPXTEFZ6.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-C_smXuSi.js";import"./index-BK6gcuUd.js";import"./index-CmUtXOfx.js";import"./slim-arrow-down-CUDCAHka.js";import"./Input-BRWw1loe.js";import"./ResponsivePopoverCommon.css-HzvDnCCK.js";import"./ValueStateMessage.css-CumaGiZ4.js";import"./Suggestions.css-B1xe7rBm.js";import"./ListBoxItemGroupTemplate-CBq7J_0z.js";import"./ComboBoxItemGroup-BgBIYp1f.js";import"./ListItemBaseTemplate-C6sbgtZB.js";import"./Token-Dkk7tYZz.js";import"./ScrollEnablement-lrDN0VT4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BTqMzjs9.js";import"./ToggleButton-B-vG7hWq.js";import"./SuggestionItem-DGtw1FTX.js";import"./index-BxSXfCyg.js";import"./Option-B4c11NHt.js";import"./index-asog46eu.js";import"./SegmentedButton-D2oS9802.js";import"./index-CDC27Oew.js";import"./Select-D5v1ik0j.js";import"./InvisibleMessage-BEsY7hLw.js";import"./slim-arrow-down-pvLvaCi8.js";import"./index-Cn-qTtFd.js";import"./index-DeKz9Gr2.js";import"./index-BMosTBn7.js";import"./index-B_IlMEln.js";import"./IconDesign-DXd8PPVF.js";import"./filter-acsAtnVB.js";import"./group-2-BXSvOObK.js";import"./sort-descending-izY6pxiw.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dilp9cxP.js";import"./utils-DNXn1egh.js";import"./index-B8fEAJyK.js";import"./index-Be2AqBQ6.js";import"./index-CxElvdDf.js";import"./navigation-down-arrow-CvLpJA3c.js";import"./navigation-right-arrow-3m_p4YUA.js";import"./navigation-right-arrow-7tFU-dQd.js";import"./useCurrentTheme-Do2EjltT.js";import"./index-B3Djr-1p.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-12mExhQT.js";import"./paper-plane-C3T5G7aG.js";import"./index-DWOSVsfp.js";import"./less-DawEbsJp.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(a,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"useOrderedMultiSort"})," it's possible to define the sorting priority if multi-sort is enabled for the respective columns (",e.jsx(t.code,{children:"enableMultiSort: true"}),")."]}),`
`,e.jsx(t.p,{children:"It receives one parameter that defines the sorting priority by the column id."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"orderedIds: string[]"}),": Defines the sort priority when sorting by multiple columns, starting with the first column ID."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(p,{sourceState:"none",of:o}),`
`,e.jsx(t.h3,{id:"current-parameter",children:"Current Parameter"}),`
`,e.jsx(l,{of:o,hideHTMLPropsNote:!0,include:["orderedIds"]}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    enableMultiSort: true
  },
  {
    Header: 'Age',
    accessor: 'age',
    enableMultiSort: true
  },
  {
    Header: 'Name 2',
    accessor: 'name2',
    enableMultiSort: true
  },
  {
    Header: 'Age 2',
    accessor: 'age2',
    enableMultiSort: true
  }
];
const data = [
  { name: 'Peter', age: 40, name2: 'Alissa', age2: 18 },
  { name: 'Kristen', age: 40, name2: 'Randolph', age2: 21 },
  { name: 'Peter', age: 30, name2: 'Rose', age2: 90 },
  { name: 'Peter', age: 70, name2: 'Rose', age2: 22 },
  { name: 'Kristen', age: 60, name2: 'Willis', age2: 80 },
  { name: 'Kristen', age: 20, name2: 'Alissa', age2: 80 },
  { name: 'Graham', age: 40, name2: 'Alissa', age2: 80 },
  { name: 'Peter', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Willis', age2: 26 },
  { name: 'Graham', age: 62, name2: 'Willis', age2: 26 }
];
const orderedIds = ['name', 'name2', 'age', 'age2'];
const tableHooks = [useOrderedMultiSort(orderedIds)]; // should be memoized
const TableComponent = () => {
  return (
    <AnalyticalTable
      columns={columns}
      data={data}
      sortable
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(m,{})]})}function Ke(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Ke as default};

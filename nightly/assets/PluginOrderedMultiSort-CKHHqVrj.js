import{j as e}from"./iframe-BX6l_vT-.js";import{useMDXComponents as i}from"./index-Bzy26fup.js";import{I as a,F as m}from"./CommandsAndQueries-BQamr4MW.js";import{M as s,C as p}from"./blocks-dv2dOEr1.js";import"./Tag-CPbL9Jm0.js";import"./index-Brt5lPnV.js";import{C as l}from"./ControlsWithNote-DT25iZ0d.js";import"./copy-DJpI-ZKv.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-D4l3HB2W.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JvehRoeP.js";import"./index-DN8AW8ib.js";import"./index-CPY8w0If.js";import"./Link-LBAuQHud.js";import"./index-5GNX0CLe.js";import"./index-CdanIUAH.js";import"./index-CUja4hYj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJYHkaYl.js";import"./addCustomCSSWithScoping-DPpaQSds.js";import"./index-DKRKom99.js";import"./information-BHJaLhAv.js";import"./sys-enter-2-EZBfp4iZ.js";import"./alert-DUVH4PBA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Ca5r5f4M.js";import"./delete-Bsyy1njk.js";import"./settings-DxWJHI99.js";import"./NoData-C_NtRWhM.js";import"./IllustratedMessage-DIkrg042.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CvIXbxAg.js";import"./index-BDGSG9LU.js";import"./index-Bd42I97O.js";import"./slim-arrow-down-C-LrsL8H.js";import"./Input-CDmiLyyY.js";import"./ResponsivePopoverCommon.css-CmOep2RC.js";import"./ValueStateMessage.css-DBlWYUos.js";import"./Suggestions.css-C86jlgxo.js";import"./ListBoxItemGroupTemplate-CjE33DFP.js";import"./ComboBoxItemGroup-DXvxztj-.js";import"./ListItemBaseTemplate-D6Eqv4kM.js";import"./Token-BcKVBOJy.js";import"./ScrollEnablement-CX9YTqaF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ChOU4iwN.js";import"./ToggleButton-CODQYAiJ.js";import"./SuggestionItem-1DKCdUlb.js";import"./index-DlvRAfCL.js";import"./Option-CFA8b-um.js";import"./index-DAsjesvB.js";import"./SegmentedButton-DUlvEafh.js";import"./index-BWIKqFzV.js";import"./Select-xeWEHzkB.js";import"./InvisibleMessage-BDRoIrKZ.js";import"./slim-arrow-down-48HvW-vj.js";import"./index-BuXHj4_-.js";import"./index-aYisw1Gg.js";import"./index-ZtIQJzTv.js";import"./index-Dr11T0CO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bbs4NOEV.js";import"./group-2-D6oioZ7I.js";import"./sort-descending-DgSgbzqc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bb9INHlF.js";import"./utils-B0NWY5kp.js";import"./index-223TNC1P.js";import"./index-CA6OMJ6E.js";import"./index-BSjQgxdu.js";import"./navigation-down-arrow-DpKyjZiZ.js";import"./navigation-right-arrow-C5pZYAdh.js";import"./navigation-right-arrow-Bwx2a_3u.js";import"./useCurrentTheme-CxsvHeYZ.js";import"./index-Dll0aIpz.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cr-hHSan.js";import"./paper-plane-DHhXyk0n.js";import"./index-C1fiAmtQ.js";import"./less-CyPDc2VR.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

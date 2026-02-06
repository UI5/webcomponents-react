import{j as e}from"./iframe-CNlfMRh7.js";import{useMDXComponents as i}from"./index-HXyduBEt.js";import{I as a,F as m}from"./CommandsAndQueries-DPIrOVa1.js";import{M as s,C as p}from"./blocks-Dntxnfj7.js";import"./Tag-CSkrKRNp.js";import"./index-CE5EvvTL.js";import{C as l}from"./ControlsWithNote-DiIYS2s0.js";import"./copy-NJiLz1Ae.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Cb0RDD3M.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bfxe_3pA.js";import"./index-BsNAKev7.js";import"./index-HOJNtIkV.js";import"./Link-DJApgqFJ.js";import"./index-CMp48S8l.js";import"./index-BZFP7GSJ.js";import"./index-BUkOiAQJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-UJ6G4FQA.js";import"./addCustomCSSWithScoping-0QMDzhQB.js";import"./index-B1BCaeBo.js";import"./information-A5dyTfTj.js";import"./sys-enter-2-Dq0W94t5.js";import"./alert-B1A4HH0Q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DJf8n85N.js";import"./delete-DEXvtF94.js";import"./settings-DPUgaiHg.js";import"./NoData-DEwR0Oiz.js";import"./IllustratedMessage-D9SSX3IF.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CmruapN3.js";import"./index-BYE_WijM.js";import"./index-BLLAjhdX.js";import"./slim-arrow-down-CsKC49yD.js";import"./Input-avR_XQYF.js";import"./ResponsivePopoverCommon.css-BShgZ2fu.js";import"./ValueStateMessage.css-DvxKbQOQ.js";import"./Suggestions.css-Dxb_YfCJ.js";import"./ListBoxItemGroupTemplate-mNL0cHkG.js";import"./ComboBoxItemGroup-B3anKuMZ.js";import"./ListItemBaseTemplate-Ckm2u7Ex.js";import"./Token-DZVzBKnY.js";import"./ScrollEnablement-DGzJpPYl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CN81KWn3.js";import"./ToggleButton-yVTDYlWj.js";import"./SuggestionItem-CNQ8mpah.js";import"./index-B-Zm5ade.js";import"./Option-Bv5WbYDv.js";import"./index-hlrtbQ32.js";import"./SegmentedButton-B9G2GqCT.js";import"./index-CuTyZ9rK.js";import"./Select-D1g_uhaP.js";import"./InvisibleMessage-vJ02izGr.js";import"./slim-arrow-down-Bb-cZ27j.js";import"./index-gFi-6H_0.js";import"./index-CNmac44d.js";import"./index-Di_lVIZE.js";import"./index-CtZU6wpy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BRjKMM8O.js";import"./group-2-Cv7m-_qi.js";import"./sort-descending-CKmm8A2d.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DMq0_oht.js";import"./utils-BOcBU06y.js";import"./index-B6Hnq5R3.js";import"./index-B7qpoGz1.js";import"./index-DlFpWCyT.js";import"./navigation-down-arrow-BaU-bz7x.js";import"./navigation-right-arrow-lO-0Jw_9.js";import"./navigation-right-arrow-BLxb5j9t.js";import"./useCurrentTheme-DOPeTHqP.js";import"./index-CRAYMyk4.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-9-bly-f7.js";import"./paper-plane--k09Sqfm.js";import"./index-FW_T7qDu.js";import"./less-BsuMuYn7.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

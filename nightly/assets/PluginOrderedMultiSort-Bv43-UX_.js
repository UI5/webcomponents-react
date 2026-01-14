import{j as e}from"./iframe-DsoLxTrs.js";import{useMDXComponents as i}from"./index-BYp40d_0.js";import{I as a,F as m}from"./CommandsAndQueries-CnpygbQ5.js";import{M as s,C as p}from"./blocks-BdFCA8eW.js";import"./Tag-CTTSF-tU.js";import"./index-DgqU0bHc.js";import{C as l}from"./ControlsWithNote-DpDkKRs4.js";import"./copy-BFj7VYi7.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Iyd7zZv9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DoD5C1cK.js";import"./index-CgwlM72N.js";import"./index-BUCXDqHN.js";import"./Link-B3HsQBkt.js";import"./index-_wPX9_fg.js";import"./index-CcP8H8eG.js";import"./index-DUtNsIlX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CN1rIyKa.js";import"./addCustomCSSWithScoping-Bri9Hmu_.js";import"./index-CNxSz0Hc.js";import"./information-Dif64wGJ.js";import"./sys-enter-2-CF1sb48s.js";import"./alert-DcNO-1uE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Rs6p4UaS.js";import"./delete-CrMdIFDN.js";import"./settings-B-r3hKjY.js";import"./NoData-DSQeZXJt.js";import"./IllustratedMessage-C_polCAW.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BEkl_rEK.js";import"./index-BFkyaubq.js";import"./index-BX_gSHjC.js";import"./slim-arrow-down-CMk67T2s.js";import"./Input-Dk2NFph3.js";import"./ResponsivePopoverCommon.css-DQ_Sc_46.js";import"./ValueStateMessage.css-DnTQjXaN.js";import"./Suggestions.css-BdMDw5En.js";import"./ListBoxItemGroupTemplate-iQcJyyOU.js";import"./ComboBoxItemGroup-Be6pRmko.js";import"./ListItemBaseTemplate-CKQQ-jkb.js";import"./Token-zMAsq7gF.js";import"./ScrollEnablement-DmTjTt1h.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CR5T5AOq.js";import"./ToggleButton-BO_VH3L2.js";import"./SuggestionItem-DgNMmhut.js";import"./index-DuMwI-OD.js";import"./Option-CeFMwTVm.js";import"./index-DYhrmhyV.js";import"./SegmentedButton-DJG8Ffa8.js";import"./index-B6jXq1u6.js";import"./Select-ChYmXvgz.js";import"./InvisibleMessage-C5xYCLxY.js";import"./slim-arrow-down-DCGoLBPd.js";import"./index-CnIPWkV8.js";import"./index-DUlHHXex.js";import"./index-CroKASKd.js";import"./index-CBWozBn3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CMjwBPHh.js";import"./group-2-_4bewaxg.js";import"./sort-descending-Dcet9Hq8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BrAz6JL2.js";import"./utils-DzaJNGLM.js";import"./index-C5Vq8szC.js";import"./index-CGJIVMir.js";import"./index-DXnPEmIf.js";import"./navigation-down-arrow-CfyMbTT9.js";import"./navigation-right-arrow-CFibnujH.js";import"./navigation-right-arrow--m1ezy9Z.js";import"./useCurrentTheme-CnQCPTuN.js";import"./index-ftQv3YgX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-gvYB5pwp.js";import"./paper-plane-DRJ7V1ZN.js";import"./index-B_8dxKRD.js";import"./less-BNhNO2Qi.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

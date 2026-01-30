import{j as e}from"./iframe-DVGWhCAE.js";import{useMDXComponents as i}from"./index-B9xkaSV0.js";import{I as a,F as m}from"./CommandsAndQueries-dho9FID6.js";import{M as s,C as p}from"./blocks-BJbIBXfd.js";import"./Tag-BSVrbtw1.js";import"./index-8G75QKe0.js";import{C as l}from"./ControlsWithNote-C60QK1TR.js";import"./copy-BlV96bJM.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CnZuDPXD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRrKr04f.js";import"./index-Q2-fVCzE.js";import"./index-BHsujjCW.js";import"./Link-Dgw-_ZOU.js";import"./index-Nk5G6RU7.js";import"./index-DGKs15kB.js";import"./index-NT87e1sK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DANVMAHb.js";import"./addCustomCSSWithScoping-5Jg_uRZD.js";import"./index-BJLS4IRc.js";import"./information-omXjQTPD.js";import"./sys-enter-2-C04ebACG.js";import"./alert-BHqxLN4g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CFnPtJkv.js";import"./delete-DY6bdwXU.js";import"./settings-XslWUyya.js";import"./NoData-BUZ7abMj.js";import"./IllustratedMessage-B9_mT8nH.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DjDOG6yR.js";import"./index-8hC-ZwrJ.js";import"./index-BChoSltx.js";import"./slim-arrow-down-DeYpmmvX.js";import"./Input-DpyJgAt0.js";import"./ResponsivePopoverCommon.css-CePgJsY4.js";import"./ValueStateMessage.css-3BAQCChx.js";import"./Suggestions.css-BOKDeXtO.js";import"./ListBoxItemGroupTemplate-UD1IHiMI.js";import"./ComboBoxItemGroup-BpjYhnfH.js";import"./ListItemBaseTemplate-mkFVGvTh.js";import"./Token-C-dIs8ow.js";import"./ScrollEnablement-B1V-xmtX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DYsOVdkk.js";import"./ToggleButton-DtBu71V4.js";import"./SuggestionItem-35Bufm1r.js";import"./index-DlkYfY-D.js";import"./Option-12YZDcJD.js";import"./index-TKCi4qTc.js";import"./SegmentedButton-B7a2Ohdn.js";import"./index-Cloa_gEs.js";import"./Select-DbAXZ3Uf.js";import"./InvisibleMessage-D0fNoamP.js";import"./slim-arrow-down-DhfOJ1tg.js";import"./index-CAmvDfBQ.js";import"./index-CI4CkUvi.js";import"./index-C8msanHQ.js";import"./index-D2OD1CJk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BQHd5LOE.js";import"./group-2-CxeVZpJt.js";import"./sort-descending-6N_LscE5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-64D78cvD.js";import"./utils-KP_8elyX.js";import"./index-BMkoMDMN.js";import"./index-BAbz02Gg.js";import"./index-B3L4E0qW.js";import"./navigation-down-arrow-HldHMJHt.js";import"./navigation-right-arrow-BAW-_M57.js";import"./navigation-right-arrow-RFBEU6p5.js";import"./useCurrentTheme-CamodcP9.js";import"./index-C-rI4uKO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BrbgBhCS.js";import"./paper-plane-EP68wguC.js";import"./index-KTYaWInB.js";import"./less-CBpVNcsL.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

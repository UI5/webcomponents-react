import{j as e}from"./iframe-BxNMYsVp.js";import{useMDXComponents as i}from"./index-CEL_Mrqn.js";import{I as a,F as m}from"./CommandsAndQueries-CKT9ys9T.js";import{M as s,C as p}from"./blocks-CLtQlidJ.js";import"./Tag-CYWTluzA.js";import"./index-22bYdtLv.js";import{C as l}from"./ControlsWithNote-Cla18jxh.js";import"./copy-DFdPinc0.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DgsES7Vt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lYnXb9lV.js";import"./index-jhZZ-U6H.js";import"./index-DKLNqf9R.js";import"./Link-DZt8_sp9.js";import"./index-CKGFui_U.js";import"./index-BQbr2ZNY.js";import"./index-7hnHpQRn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CG_dGq_W.js";import"./addCustomCSSWithScoping-CJX4iiEH.js";import"./index-CVOVci2N.js";import"./information-BR3I6cVC.js";import"./sys-enter-2-CKo5vDlS.js";import"./alert-BEt7QhXe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Mk_FwvON.js";import"./delete-BG6noefH.js";import"./settings-B8uhe1cq.js";import"./NoData-DyBdjVCa.js";import"./IllustratedMessage-BCVYMt7I.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CmHtBxQ-.js";import"./index-BXTa98ES.js";import"./index-C3SOSiwl.js";import"./slim-arrow-down-fmy_UgsE.js";import"./Input-D2CSF-Y6.js";import"./ResponsivePopoverCommon.css-C7cuV_Jj.js";import"./ValueStateMessage.css-BFQUPHA9.js";import"./Suggestions.css-BBJox0-v.js";import"./ListBoxItemGroupTemplate-ljBV9_8W.js";import"./ComboBoxItemGroup-B4zUN52_.js";import"./ListItemBaseTemplate-MCAv2HBJ.js";import"./Token-hZnudgFO.js";import"./ScrollEnablement-B37cnfhn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-8uRqoZkS.js";import"./ToggleButton-BEj9YhjN.js";import"./SuggestionItem-DhpzZzQQ.js";import"./index-BsfCkzxM.js";import"./Option-B_e0EohB.js";import"./index-DsxxZJWV.js";import"./SegmentedButton-BJNUnkCe.js";import"./index-BLL6NYB0.js";import"./Select-DxwToxka.js";import"./InvisibleMessage-DndzKolo.js";import"./slim-arrow-down-BiHEY_tE.js";import"./index-D5uxsXuK.js";import"./index-BHQlFxm4.js";import"./index-C7Pim6U6.js";import"./index-BjHRCZNh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B-zNJNVF.js";import"./group-2-Czd2Kvpz.js";import"./sort-descending-B4uKFBaf.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-oNcz4-fo.js";import"./utils-D-9tMIQC.js";import"./index-BZ4YpJ1F.js";import"./index-Dng98DSh.js";import"./index-BIHQwIAz.js";import"./navigation-down-arrow-C20RWoi5.js";import"./navigation-right-arrow-6hXpmCnZ.js";import"./navigation-right-arrow-Bwqs0FG1.js";import"./useCurrentTheme-g-TpF6b6.js";import"./index-B4GSm2eh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BDi3O9wb.js";import"./paper-plane-BF_TfTm4.js";import"./index-aX4YBE-N.js";import"./less--mI6seH2.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

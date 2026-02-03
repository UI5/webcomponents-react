import{j as e}from"./iframe-CmEyKRpD.js";import{useMDXComponents as i}from"./index-BFnFrbBZ.js";import{I as a,F as m}from"./CommandsAndQueries-D0beJAEb.js";import{M as s,C as p}from"./blocks-DsGvGcEm.js";import"./Tag-mVH7vrSv.js";import"./index-DfQFYAIc.js";import{C as l}from"./ControlsWithNote-GNRO6riy.js";import"./copy-BKqOupip.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BSx5T4bO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BzwroZCy.js";import"./index-Cd1X9zdd.js";import"./index-CSRfU7vi.js";import"./Link-D1koUNpv.js";import"./index-BlD9QPif.js";import"./index-DbVfD_Wp.js";import"./index-dQ_ejieb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-eGz8eTqY.js";import"./addCustomCSSWithScoping-DZlJgGLS.js";import"./index-DEFXD6K8.js";import"./information-Dw0vaUoh.js";import"./sys-enter-2-BCiCiomL.js";import"./alert-ClWdEWiH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DbUs2q01.js";import"./delete-DexdWHOY.js";import"./settings-dxNIuobx.js";import"./NoData-DHeZKmI-.js";import"./IllustratedMessage-DIvmjW9o.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-c_u-lq4s.js";import"./index-BEdraa6m.js";import"./index-Cw5hOkPV.js";import"./slim-arrow-down-CMqb9FrJ.js";import"./Input-DMTE7PtB.js";import"./ResponsivePopoverCommon.css-B_kZ82Sf.js";import"./ValueStateMessage.css-COIj3-dB.js";import"./Suggestions.css-CwH8bkW-.js";import"./ListBoxItemGroupTemplate-CchY9zri.js";import"./ComboBoxItemGroup-DimkAvqf.js";import"./ListItemBaseTemplate-Bf84ufvG.js";import"./Token-fKVOhfRR.js";import"./ScrollEnablement-Dl5z94x_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BYXnPIWK.js";import"./ToggleButton-vu-v_zb-.js";import"./SuggestionItem-kn7KkTa3.js";import"./index-DPbvCSic.js";import"./Option-u5uukDin.js";import"./index-C8R_luuu.js";import"./SegmentedButton-DfxDwv4I.js";import"./index-DNR34NeK.js";import"./Select-CYW5D9dk.js";import"./InvisibleMessage-M1dcHXit.js";import"./slim-arrow-down-BpHB4IY-.js";import"./index-C7nbRL6c.js";import"./index-DPUGy-pI.js";import"./index-3FRmO7q0.js";import"./index-DAcFrEXC.js";import"./IconDesign-DXd8PPVF.js";import"./filter-0df1VpJF.js";import"./group-2-CKdKXQLe.js";import"./sort-descending-BbZ-eh8i.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3OH53ZN.js";import"./utils-D3SQYmnk.js";import"./index-Yr1YxSHs.js";import"./index-B8bHJfxT.js";import"./index-BrVac6Qe.js";import"./navigation-down-arrow-DtKKxhJy.js";import"./navigation-right-arrow-CFkOAqoT.js";import"./navigation-right-arrow-DjfApRUX.js";import"./useCurrentTheme-Drz3YU3H.js";import"./index-ClmEnud9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-wTt9rp2-.js";import"./paper-plane-CjzWL9e1.js";import"./index-C6sQNauJ.js";import"./less-CDzfA6tR.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

import{j as e}from"./iframe-By2gmFxc.js";import{useMDXComponents as i}from"./index-gKb_GMnq.js";import{I as a,F as m}from"./CommandsAndQueries-MwhWu1jt.js";import{M as s,C as p}from"./blocks-D2uzjwbj.js";import"./Tag-Q4xsur8Q.js";import"./index-CIY2e3dX.js";import{C as l}from"./ControlsWithNote-J_FS3ar_.js";import"./copy-jhrg3Bh5.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-38cEGb-D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DjdoJ-R-.js";import"./index-JdoT9BRG.js";import"./index-CYEIBPim.js";import"./Link-nWDhDuhI.js";import"./index-4iQpwXEW.js";import"./index-XAF-DZNA.js";import"./index-BlQvs7kx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl2hQFWK.js";import"./addCustomCSSWithScoping-BCT2RHCk.js";import"./index-c5NRQxKp.js";import"./information-DZbn4exg.js";import"./sys-enter-2-D1EL9sqg.js";import"./alert-Dj00yiIa.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DfmbGYM-.js";import"./delete-DIECwpsn.js";import"./settings-BR-Jn1SA.js";import"./NoData-DlNrysCF.js";import"./IllustratedMessage-BEVwX-MP.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-BUFWZWdz.js";import"./index-B8yBtMrQ.js";import"./index-DB05x-gb.js";import"./slim-arrow-down-CHcgNgab.js";import"./Input-BkjEUhdM.js";import"./ResponsivePopoverCommon.css-GYWWINRP.js";import"./ValueStateMessage.css-BgBsH41F.js";import"./Suggestions.css-DYhFblt3.js";import"./ListBoxItemGroupTemplate-C0bdN0su.js";import"./ComboBoxItemGroup-DB867_JW.js";import"./ListItemBaseTemplate-DKt4HTRR.js";import"./Token-D9qfRGUI.js";import"./ScrollEnablement-CzJbNFQB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ba2CipUt.js";import"./ToggleButton-BzNdzxEt.js";import"./SuggestionItem-b3ddDxtm.js";import"./index-BxxQ10ur.js";import"./Option-C8V6bqI8.js";import"./index-DsPa88Bs.js";import"./SegmentedButton-DuCxtppX.js";import"./index-BXAryvnn.js";import"./Select-COlJPvs3.js";import"./InvisibleMessage-_t19LlQz.js";import"./slim-arrow-down-B6SdizKX.js";import"./index-5qvEcr0z.js";import"./index-CfTR6XTd.js";import"./index-B0IxYo6X.js";import"./index-BrqX3Vme.js";import"./IconDesign-DXd8PPVF.js";import"./filter-eUU2DhC1.js";import"./group-2-DGCEgpup.js";import"./sort-descending-C0r5XO3T.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dno9Fs_e.js";import"./utils-BosODi5p.js";import"./index-Bzt2lubY.js";import"./index-Buzu52UZ.js";import"./index-B7hB3IPh.js";import"./navigation-down-arrow-DNuvmaCj.js";import"./navigation-right-arrow-BnmeKOvQ.js";import"./navigation-right-arrow-DHqGUiMR.js";import"./useCurrentTheme-CwgIV2K4.js";import"./index-BEBXGxoi.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-T3phyLSC.js";import"./paper-plane-1SKJ69pa.js";import"./index-CFq17qq9.js";import"./less-BfN0FGSL.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

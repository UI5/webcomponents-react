import{j as e}from"./iframe-B_Wb0L56.js";import{useMDXComponents as i}from"./index-307InIrT.js";import{I as a,F as m}from"./CommandsAndQueries-DZD1CEEu.js";import{M as s,C as p}from"./blocks-BG9i3u3d.js";import"./Tag-BJqa-9S6.js";import"./index-IQMTO30I.js";import{C as l}from"./ControlsWithNote-B2GD3nsm.js";import"./copy-B8s392ic.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-D2vA9uBw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C1-6BxML.js";import"./index-CTXSjodk.js";import"./index-6_sfbhaU.js";import"./Link-mQObbT4s.js";import"./index-B6cUzUVp.js";import"./index-DKVx4eTx.js";import"./index-BzKebhUC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CNNLg8qF.js";import"./addCustomCSSWithScoping-CLC5si1k.js";import"./index-DOJ9CtkL.js";import"./information-CNVdTL1g.js";import"./sys-enter-2-YeZbpBvt.js";import"./alert-BrJW2BAH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D0ei0ZuD.js";import"./delete-yizw3Nd_.js";import"./settings-Z8JiUEHk.js";import"./NoData-BXXzYKHm.js";import"./IllustratedMessage-C-PTvkiQ.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Dl5aZcs3.js";import"./index-HqvTsmff.js";import"./index-DRaRyi79.js";import"./slim-arrow-down-C0o9FaNn.js";import"./Input-DOSA1gj5.js";import"./ResponsivePopoverCommon.css-Bv2xf9qt.js";import"./ValueStateMessage.css-0XZoqLsO.js";import"./Suggestions.css-DyTJTEQX.js";import"./ListBoxItemGroupTemplate-Dm-XJTSL.js";import"./ComboBoxItemGroup-BiM99Ixa.js";import"./ListItemBaseTemplate-D-PBqwpz.js";import"./Token-BHMMMhCD.js";import"./ScrollEnablement-CH2t3NPn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dko9W1lQ.js";import"./ToggleButton-CRq8bV8B.js";import"./SuggestionItem-8yq177mX.js";import"./index-DSsZL42Q.js";import"./Option-T3GgrmoY.js";import"./index-B3RRxnRL.js";import"./SegmentedButton-DUyioROv.js";import"./index-D5_ZfJ5N.js";import"./Select-Bf7b8VrB.js";import"./InvisibleMessage-D0Kxo4HB.js";import"./slim-arrow-down-DqloInc9.js";import"./index-DkWPeISK.js";import"./index-2TWARYFI.js";import"./index-744O76gW.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CobfnnXw.js";import"./group-2-DMZc4frg.js";import"./sort-descending-C8Z32LYO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BnfHDuuy.js";import"./utils-C8OSDLXz.js";import"./index-CaT9ZYZr.js";import"./index-Bq2hbA6h.js";import"./index-GUfgErK1.js";import"./navigation-down-arrow-CQ5WMHeX.js";import"./navigation-right-arrow-B7l-Sd1s.js";import"./navigation-right-arrow-mIKtPw9Z.js";import"./useCurrentTheme-D8exwLuJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BSVh1B3z.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-7XnIEYeH.js";import"./paper-plane-C-rRvcez.js";import"./index-BplSwyVb.js";import"./less-Byci0Gnt.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

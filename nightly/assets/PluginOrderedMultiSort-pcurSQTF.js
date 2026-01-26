import{j as e}from"./iframe-DwhXZ5O1.js";import{useMDXComponents as i}from"./index-Dr45Q_rW.js";import{I as a,F as m}from"./CommandsAndQueries-CZ-0KT78.js";import{M as s,C as p}from"./blocks-EKNE_kOu.js";import"./Tag-CK1DTCaY.js";import"./index-C0PXwN3M.js";import{C as l}from"./ControlsWithNote-CSn4DPAH.js";import"./copy-CMcdSlV7.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BPXE2sY9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5LjiSCx.js";import"./index-DsUvOdfw.js";import"./index-BwctDZ8k.js";import"./Link-jbv8jxOr.js";import"./index-D0dcM15D.js";import"./index-EBvmFTXF.js";import"./index-CczjdlqU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjLi0LGT.js";import"./addCustomCSSWithScoping-BuPMXfqj.js";import"./index-DzVbmGXs.js";import"./information-BtytWan6.js";import"./sys-enter-2-PzhKRuDm.js";import"./alert-Ul17j7cb.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQaPuMj9.js";import"./delete-CZFi7vv1.js";import"./settings-DaEPRpNY.js";import"./NoData-KA-UEncs.js";import"./IllustratedMessage-BNojrsJJ.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DzljgzTe.js";import"./index-DZZVdq38.js";import"./index-5cjhwMF8.js";import"./slim-arrow-down-D11Ifl1b.js";import"./Input-BVBpS4hN.js";import"./ResponsivePopoverCommon.css-D9EhSfWF.js";import"./ValueStateMessage.css-DKKJr_ad.js";import"./Suggestions.css-5lOsSJat.js";import"./ListBoxItemGroupTemplate-4sKEf2MS.js";import"./ComboBoxItemGroup-BPeqzv7K.js";import"./ListItemBaseTemplate-AqdYmEyg.js";import"./Token-Cj9wPA0C.js";import"./ScrollEnablement-DJUo6QFq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-F-hxCo2t.js";import"./ToggleButton-CrmFwEL9.js";import"./SuggestionItem-3xgWZymy.js";import"./index-B_utt3Vf.js";import"./Option-daf91KbS.js";import"./index-BphwTy74.js";import"./SegmentedButton-9GqZ-CP5.js";import"./index-Du47Xxv-.js";import"./Select-9aXmxiVY.js";import"./InvisibleMessage-CpREcibi.js";import"./slim-arrow-down-DdhS0vfb.js";import"./index-xZ2ygxdI.js";import"./index-Jg-2yZX5.js";import"./index-xu1m-Uev.js";import"./index-DIEkdcjg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CQFrmHwe.js";import"./group-2-DNdQ0Z2B.js";import"./sort-descending-Dzm0Tdo-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hE-oQ1Oe.js";import"./utils-DY6mkGAC.js";import"./index-D4zxb5Y9.js";import"./index-D9fLrxBi.js";import"./index-BJZJ7I5D.js";import"./navigation-down-arrow-D_-UgM8Y.js";import"./navigation-right-arrow-6VwOC1wR.js";import"./navigation-right-arrow-CCnD2Vrj.js";import"./useCurrentTheme-fCt6jlcj.js";import"./index-BpYcsL8v.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-961lF1Cj.js";import"./paper-plane-f20_J01s.js";import"./index-BsTf-Gaj.js";import"./less-Ceh_NYtF.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

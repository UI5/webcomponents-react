import{j as e}from"./iframe-CBE50DlQ.js";import{useMDXComponents as i}from"./index-DIj01nj4.js";import{I as a,F as m}from"./CommandsAndQueries-DPkme0CW.js";import{M as s,C as p}from"./blocks-BkRbeitU.js";import"./Tag-DnRfIk3Q.js";import"./index-CionDnrU.js";import{C as l}from"./ControlsWithNote-B8qA-jVK.js";import"./copy-C6dVkXZR.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-FgUTgZpP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cx0GhjWW.js";import"./index-DQcdvvTg.js";import"./index-Cl_RTgXn.js";import"./Link-Dh4rUjfX.js";import"./index-hRqo2aEC.js";import"./index-9M1Uc6lA.js";import"./index-DZWAayED.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-OxleBysO.js";import"./addCustomCSSWithScoping-DkZRGLQs.js";import"./index-DOpTxqMF.js";import"./information-C3Q_Sey8.js";import"./sys-enter-2-B4dHqFQY.js";import"./alert-CvpF86nf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-kIWSEh9O.js";import"./delete-DTo7ncZM.js";import"./settings-LIhtBrtR.js";import"./NoData-Qqj6cL7o.js";import"./IllustratedMessage-CI4t13HS.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-W46K1qhG.js";import"./index-f3rDsnt3.js";import"./index-CIlulLEa.js";import"./slim-arrow-down-BM67JTAP.js";import"./Input-D1ohtzY1.js";import"./ResponsivePopoverCommon.css-KhWag-i4.js";import"./ValueStateMessage.css-Bx58RCyv.js";import"./Suggestions.css-aqqCyRM-.js";import"./ListBoxItemGroupTemplate-DDLQAbKD.js";import"./ComboBoxItemGroup-lQF3DiBn.js";import"./ListItemBaseTemplate-_7gwwsSz.js";import"./Token-as1yPBTS.js";import"./ScrollEnablement-UFzoiRFM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_Jgd157.js";import"./ToggleButton-D1Yki3TB.js";import"./SuggestionItem-CnQ5JsmF.js";import"./index-Ccs2LERk.js";import"./Option-DexHpC4I.js";import"./index-BZn1P1jY.js";import"./SegmentedButton-DlVMykln.js";import"./index-BzGPsnLs.js";import"./Select-DTKYpMmC.js";import"./InvisibleMessage-t9FWfsM5.js";import"./slim-arrow-down-DODVm5XL.js";import"./index-C1EH5X69.js";import"./index-1dVMYy5E.js";import"./index-CIKHOMmi.js";import"./index-BPTFgRZw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Jk4sUQSq.js";import"./group-2-BnahuUAi.js";import"./sort-descending-9pdtb9Tw.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DqNWVbah.js";import"./utils-DifCn2wZ.js";import"./index-DDCnksk0.js";import"./index-CufLTtjf.js";import"./index-ByEfa-fL.js";import"./navigation-down-arrow-RDpX36vF.js";import"./navigation-right-arrow-4cWWH7fB.js";import"./navigation-right-arrow-iIetXOiI.js";import"./useCurrentTheme-Ch5yw61T.js";import"./index-aRC-rjwD.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DcxS7luH.js";import"./paper-plane-BWaZHKXF.js";import"./index-Cs_vIsdp.js";import"./less-Wc_6A1Tc.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

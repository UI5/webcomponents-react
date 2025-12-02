import{j as e}from"./iframe-ePItFB5B.js";import{useMDXComponents as i}from"./index-DDhKCT3A.js";import{I as a,F as m}from"./CommandsAndQueries-Bqqc5zN4.js";import{M as s,C as p}from"./blocks-b5KXpU9M.js";import"./Tag-DaF_Qhe4.js";import"./index-BB23O1Ug.js";import{C as l}from"./ControlsWithNote-LW09duU0.js";import"./copy-BDQ8dZSb.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BJSBhIN7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tHf_ynpH.js";import"./index-BW9_RjV3.js";import"./index-CHJN7UF8.js";import"./Link-DCRCVgwG.js";import"./index-CauWo2vq.js";import"./index-Dot01Rcg.js";import"./index-DwS7NZjH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BZQxW830.js";import"./addCustomCSSWithScoping-DQC1mn0S.js";import"./index-DsBJl3xg.js";import"./information-jDHGU4wN.js";import"./sys-enter-2-CYnnsJKJ.js";import"./alert-CaUEMWJO.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ToSbXWZH.js";import"./delete-DwZg9P7Z.js";import"./settings-BcPS-7YZ.js";import"./NoData-DJFJrOTo.js";import"./IllustratedMessage-Bmr5Yv3g.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DSxvsqTt.js";import"./index-CM9pher7.js";import"./index-n2XRoQpy.js";import"./slim-arrow-down-Bbay6SzC.js";import"./Input-1ziOkLBO.js";import"./ResponsivePopoverCommon.css-CK1jZSgX.js";import"./ValueStateMessage.css-Cge6AqxA.js";import"./Suggestions.css-qvsZ8K7i.js";import"./ListBoxItemGroupTemplate-tCIsdNqz.js";import"./ComboBoxItemGroup-BTYyH9JI.js";import"./ListItemBaseTemplate-BQfbgCmz.js";import"./Token-hnnzHjkz.js";import"./ScrollEnablement-DXbRc12V.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DwrIMAc3.js";import"./ToggleButton-BVCRpFrg.js";import"./SuggestionItem-DHkkhg33.js";import"./index-BJMjSX6m.js";import"./Option-8jo7-UGm.js";import"./index-BkpZUg2F.js";import"./SegmentedButton-B55zAlnK.js";import"./index-CZnOTK3W.js";import"./Select-DODjh9tK.js";import"./InvisibleMessage-66-idOyL.js";import"./slim-arrow-down-C3vG9300.js";import"./index-DEIYYpTL.js";import"./index-CRvZRH3h.js";import"./index-BpeQPuHK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BIN5xraI.js";import"./group-2-CI-KJk4K.js";import"./sort-descending-DBtsyD-3.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D8vqCrQI.js";import"./utils-eGR0B54I.js";import"./index-CIqT6e3U.js";import"./index-1WOlGoMF.js";import"./index-rRzkNuJB.js";import"./navigation-down-arrow-hSRSXRoR.js";import"./navigation-right-arrow-BxDoSopC.js";import"./navigation-right-arrow-DFeuYejb.js";import"./useCurrentTheme-C0xCGTPu.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CuUMSyha.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsyOH-5s.js";import"./paper-plane-BtGnmdBy.js";import"./index-CFAUo9FD.js";import"./less-BQZO-GV3.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

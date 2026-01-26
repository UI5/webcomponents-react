import{j as e}from"./iframe-THm39tdL.js";import{useMDXComponents as i}from"./index-B4tiZj28.js";import{I as a,F as m}from"./CommandsAndQueries-CM3XC2Lj.js";import{M as s,C as p}from"./blocks-exNB_fpK.js";import"./Tag-DAVE_HUz.js";import"./index-GpdeEFTa.js";import{C as l}from"./ControlsWithNote-VMJauc9Q.js";import"./copy-BpRW8fgI.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CVT2-F1V.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DPta9qsd.js";import"./index-Dg0TKbRC.js";import"./index-DLy3fIdu.js";import"./Link-CGyr18oq.js";import"./index-BziYS9gD.js";import"./index-Dfp6johM.js";import"./index-KiDRbvAF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BGXn0jIO.js";import"./addCustomCSSWithScoping-msj5utEH.js";import"./index-BQ6gEIJW.js";import"./information-Cma2Q91K.js";import"./sys-enter-2-iw8Fxy6e.js";import"./alert-Buz1y0R3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-gfd4y1HT.js";import"./delete-0fDb3pV1.js";import"./settings-CY8QoXJB.js";import"./NoData-C7YE6Tud.js";import"./IllustratedMessage-CwBEdHyI.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BtIdSS61.js";import"./index-CF50Srtj.js";import"./index-MWxZbhrE.js";import"./slim-arrow-down-F0Pm_4oK.js";import"./Input-BhtW4_5c.js";import"./ResponsivePopoverCommon.css-BUxGZes4.js";import"./ValueStateMessage.css-Bbj2XpR4.js";import"./Suggestions.css-tt1nfuuG.js";import"./ListBoxItemGroupTemplate-o9uQGfAz.js";import"./ComboBoxItemGroup-D2Ek2hZU.js";import"./ListItemBaseTemplate-M2eQiRWW.js";import"./Token-GBNwp73E.js";import"./ScrollEnablement-BuLvzDFb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BfdqbOJt.js";import"./ToggleButton-BCPXY_Ug.js";import"./SuggestionItem-DkeJr8Uj.js";import"./index-BKb2eeim.js";import"./Option-BV6lO7dz.js";import"./index-Bg5k6qvB.js";import"./SegmentedButton-CFw5tEED.js";import"./index-CEaBFzJC.js";import"./Select-BdWwnW7P.js";import"./InvisibleMessage-Ce4CN5Vg.js";import"./slim-arrow-down-B5JPuMYZ.js";import"./index-BnrnCSjD.js";import"./index-C6R9FrtI.js";import"./index-DaOWCx8l.js";import"./index-CSWlCTzX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CGPM4R0_.js";import"./group-2-09PNMZ-u.js";import"./sort-descending-DNDw-3QK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BGou595l.js";import"./utils-BtvyjyGh.js";import"./index-BczVQc8C.js";import"./index-Cv0Q1UgH.js";import"./index-Bk-Qx2M8.js";import"./navigation-down-arrow-DEN2N7AT.js";import"./navigation-right-arrow-D2uUmPNT.js";import"./navigation-right-arrow-BW1qFR6l.js";import"./useCurrentTheme-BVOqA9kw.js";import"./index-CUY0Gfu8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DmNCTJWW.js";import"./paper-plane-BcpS0W6p.js";import"./index-BPR-maoO.js";import"./less-Dxs7OAKQ.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

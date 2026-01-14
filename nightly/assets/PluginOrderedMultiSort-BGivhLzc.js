import{j as e}from"./iframe-Cig4nsrF.js";import{useMDXComponents as i}from"./index-rt57_u-y.js";import{I as a,F as m}from"./CommandsAndQueries-D3xhwJA5.js";import{M as s,C as p}from"./blocks-DAEBkYYF.js";import"./Tag-Bs_1btou.js";import"./index-FKwq6U9j.js";import{C as l}from"./ControlsWithNote-BEmXSTpX.js";import"./copy-C7r52zpO.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-0rYh6hvK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2RnTjWc.js";import"./index-BB06tsQb.js";import"./index-5C4HFP5l.js";import"./Link-Br9IVr1w.js";import"./index-BrrdpEgt.js";import"./index-ftQeoy-6.js";import"./index-BmqXmyDH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsK0-Mz_.js";import"./addCustomCSSWithScoping-BWNNT1nj.js";import"./index-BL2sJT6Z.js";import"./information-B6HgxZBq.js";import"./sys-enter-2-BRRws0JK.js";import"./alert-Cb5ARKKh.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Co5XmSb5.js";import"./delete-ugUqvhvv.js";import"./settings-2-V-zzIF.js";import"./NoData-CS-hnXJz.js";import"./IllustratedMessage-CjeAap-f.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DCm0gYGU.js";import"./index-79jYN5UM.js";import"./index-BGP_pL27.js";import"./slim-arrow-down-Cde-9O_z.js";import"./Input-RuURL5K_.js";import"./ResponsivePopoverCommon.css-CMdAayek.js";import"./ValueStateMessage.css-DVzvrXAG.js";import"./Suggestions.css-orKcFsj8.js";import"./ListBoxItemGroupTemplate-DWiibI4p.js";import"./ComboBoxItemGroup-I9mAlXsd.js";import"./ListItemBaseTemplate-nSbjmalX.js";import"./Token-C-bz4Mer.js";import"./ScrollEnablement-CSPhLIym.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DwpoAFwW.js";import"./ToggleButton-BFt3XSJk.js";import"./SuggestionItem-CReGhLBD.js";import"./index-7tZHNO4V.js";import"./Option-DWIrDKUO.js";import"./index-B2E6tsgb.js";import"./SegmentedButton-BEhsiTuz.js";import"./index-BK97A2Mp.js";import"./Select-CK2fiiVZ.js";import"./InvisibleMessage-DOTQpYl4.js";import"./slim-arrow-down-227TRo9_.js";import"./index-D8a1U50t.js";import"./index-CPhWTent.js";import"./index-C4xEk85l.js";import"./index-B3y-2zol.js";import"./IconDesign-DXd8PPVF.js";import"./filter-02HjQ7DM.js";import"./group-2-JT9pYnBG.js";import"./sort-descending-h8bEOQuH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Byv0x5jL.js";import"./utils-MCEsiAYG.js";import"./index-DJ49jrAi.js";import"./index-Cj5WFeiX.js";import"./index-BEDQKVKE.js";import"./navigation-down-arrow-CR7KrOFx.js";import"./navigation-right-arrow-D5-JGpIg.js";import"./navigation-right-arrow-BaOLieOq.js";import"./useCurrentTheme-gRbDvB5W.js";import"./index-D0dt3M83.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DQfggaPU.js";import"./paper-plane-IFueWYrv.js";import"./index-3yS61UMO.js";import"./less-DaTrqMft.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

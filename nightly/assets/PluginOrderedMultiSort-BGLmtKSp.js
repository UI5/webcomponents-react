import{j as e}from"./iframe-B13aKv6v.js";import{useMDXComponents as i}from"./index-jGGDFlkx.js";import{I as a,F as m}from"./CommandsAndQueries-7UV00q7g.js";import{M as s,C as p}from"./blocks-BRIltIP5.js";import"./Tag-HMLNjm9Q.js";import"./index-CFkX7Uxi.js";import{C as l}from"./ControlsWithNote-fWXazrnc.js";import"./copy-Cbp2BA1I.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BMW7dyKi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hEU5-O_h.js";import"./index-xeEGs0j3.js";import"./index-Ccfu3Okh.js";import"./Link-Ch0RD6vq.js";import"./index-BTTMPEs9.js";import"./index-CEC3Cwv3.js";import"./index-BNwKsAav.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DC9Otah0.js";import"./addCustomCSSWithScoping-PHSG-stG.js";import"./index-DGzKTrI0.js";import"./information-C04ctOuE.js";import"./sys-enter-2-BKiD2CPA.js";import"./alert-CBEx5R4q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BZNLsVKx.js";import"./delete-BHqzy_w0.js";import"./settings-CHJyL-xf.js";import"./NoData-IlCQ-its.js";import"./IllustratedMessage-BVpBKwe1.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-CX2RoIEA.js";import"./index-DYwiPVnV.js";import"./index-CzwxPS8i.js";import"./slim-arrow-down-BtHqfP2O.js";import"./Input-CRbjoL5G.js";import"./ResponsivePopoverCommon.css-zkAUwXvS.js";import"./ValueStateMessage.css-Drc3FRo7.js";import"./Suggestions.css-CxcKjt1z.js";import"./ListBoxItemGroupTemplate-C7qo7cVu.js";import"./ComboBoxItemGroup-wPGN9pc9.js";import"./ListItemBaseTemplate-DAulwDxe.js";import"./Token-VYXiQC7f.js";import"./ScrollEnablement-DWkIXjW5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-MiMIRncl.js";import"./ToggleButton-ByHPBy6Y.js";import"./SuggestionItem-DBARgP8a.js";import"./index-BG64s_Aw.js";import"./Option-DvXJOHoA.js";import"./index-BvOkKYA8.js";import"./SegmentedButton-B_JX6wlg.js";import"./index-YDZaFH6K.js";import"./Select-BfjuawPf.js";import"./InvisibleMessage-B3ODCafQ.js";import"./slim-arrow-down-DjsY58di.js";import"./index-BXBvjTjI.js";import"./index-CLQEDEjK.js";import"./index-CK1a2hlY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DVuuEgts.js";import"./group-2-BTIEqwdc.js";import"./sort-descending-DEByg_97.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BAmsrgmU.js";import"./utils-Cu2DEZ78.js";import"./index-Bew75aHK.js";import"./index-iJRk9uUm.js";import"./index-DMj2SajO.js";import"./navigation-down-arrow-BAHL6PFO.js";import"./navigation-right-arrow-SgMVDM2O.js";import"./navigation-right-arrow-DCZNJw3z.js";import"./useCurrentTheme-C5zW9fR4.js";import"./IndicationColor-DVw-fSM_.js";import"./index-IEloByEh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-SKaXeoMK.js";import"./paper-plane-DKip-gaP.js";import"./index-Efu98x9d.js";import"./less-BeRlgDKr.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

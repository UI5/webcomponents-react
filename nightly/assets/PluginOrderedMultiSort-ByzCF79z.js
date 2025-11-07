import{j as e}from"./iframe-BCh37-GP.js";import{useMDXComponents as i}from"./index-E1HFg4gZ.js";import{I as a,F as m}from"./CommandsAndQueries-BaHr-COi.js";import{M as s,C as p}from"./blocks-CS5FlooX.js";import"./Tag-B_Qpe0TE.js";import"./index-DKQ6JIGw.js";import{C as l}from"./ControlsWithNote-VGyFb7bj.js";import"./copy-7yIahvRv.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-P4Nd5R97.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JFrdX4G8.js";import"./index-CTMnj1ho.js";import"./index-Bv89sSp1.js";import"./Link-BSH3TTIl.js";import"./index-BonVTnTn.js";import"./index-OKdWlUZi.js";import"./index-DMXHNrMi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCrrvnNY.js";import"./addCustomCSSWithScoping-5ena9gAo.js";import"./index-DTOYUFlO.js";import"./information-3OCHA3NQ.js";import"./sys-enter-2-C8D5BzD8.js";import"./alert-DXLNWSuU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BHnZbtsD.js";import"./delete-EE4bTGjq.js";import"./settings-CWOgdnOQ.js";import"./NoData-EYRIcvpd.js";import"./IllustratedMessage-eRr0GKWI.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CAirgaaj.js";import"./index-D1dCHV7D.js";import"./index-tKT3JZMY.js";import"./slim-arrow-down-BmoCgPng.js";import"./Input-BV2Kpufx.js";import"./ResponsivePopoverCommon.css-Dj0T0ryX.js";import"./ValueStateMessage.css-BPaxhl46.js";import"./Suggestions.css-d96Y8STr.js";import"./ListBoxItemGroupTemplate-DKRgKg-W.js";import"./ComboBoxItemGroup-BghtySqg.js";import"./ListItemBaseTemplate-DK7kW4zT.js";import"./Token-swetDNES.js";import"./ScrollEnablement-d21bdta6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bb53oDTA.js";import"./ToggleButton-D4fUNdSY.js";import"./SuggestionItem-BQ2GorAX.js";import"./index-CyfUcvzJ.js";import"./Option-PulQRzr2.js";import"./index-Di7fqct-.js";import"./SegmentedButton-BunRIwoi.js";import"./index-Bgknzbhu.js";import"./Select-Nz2Hcbg2.js";import"./InvisibleMessage-DkbocxqO.js";import"./slim-arrow-down-CGh4l6r9.js";import"./index-BsudtbIQ.js";import"./index-BD7ZfrRW.js";import"./index-CUx_S0wg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cl-mfjch.js";import"./group-2-CuvWrUYC.js";import"./sort-descending-C-mIF84h.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dst6fVDY.js";import"./utils-BnTi3cfr.js";import"./index-CxPcQIig.js";import"./index-BVX4pL2A.js";import"./index-Dm-Pc1i9.js";import"./navigation-down-arrow-BQvpfFl5.js";import"./navigation-right-arrow-DpZd7grt.js";import"./navigation-right-arrow-CfgRq-yV.js";import"./useCurrentTheme-Bz0a4Npu.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D8yBXMrH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CRezPATc.js";import"./paper-plane-Dx3V_-Uw.js";import"./index-CZ6TAeEd.js";import"./less-Bxijlz1Z.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

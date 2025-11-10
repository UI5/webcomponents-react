import{j as e}from"./iframe-d6kFjKmB.js";import{useMDXComponents as i}from"./index-C_GtGqSz.js";import{I as a,F as m}from"./CommandsAndQueries-CN1OL-NC.js";import{M as s,C as p}from"./blocks-cydmgMgt.js";import"./Tag-pDj71kKq.js";import"./index-Df2R9LIn.js";import{C as l}from"./ControlsWithNote-akDrH3MV.js";import"./copy-10s1L_tU.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B6u65tjO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-SdRuQi.js";import"./index-Ct6Sh5v4.js";import"./index-CPMalJUe.js";import"./Link-sWUxxSV7.js";import"./index-CYwfFviQ.js";import"./index-Bn3tqYuU.js";import"./index-Cmh3YBGn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cp8_wMdK.js";import"./addCustomCSSWithScoping-CykojlcF.js";import"./index-ByGA7EJm.js";import"./information-U09OVfZR.js";import"./sys-enter-2-Iyx_uxbM.js";import"./alert-BF6Rf2Y5.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DCDRud3K.js";import"./delete-DcZ_ESaK.js";import"./settings-DbtyNHg0.js";import"./NoData-Bvmt149v.js";import"./IllustratedMessage-DcobuqWw.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-B6LDqNG1.js";import"./index-DqgMpJUT.js";import"./index-BCw7ON1Z.js";import"./slim-arrow-down-CR1be_E9.js";import"./Input-dxqpd5U9.js";import"./ResponsivePopoverCommon.css-DcJ2hMwV.js";import"./ValueStateMessage.css-CyfOZFgE.js";import"./Suggestions.css-CUYXbb3W.js";import"./ListBoxItemGroupTemplate-C1P8H3jz.js";import"./ComboBoxItemGroup--hDgJGkA.js";import"./ListItemBaseTemplate-dhaNXDhg.js";import"./Token-DnAjIFML.js";import"./ScrollEnablement-DL7VbC7Z.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CC3AoL1h.js";import"./ToggleButton-Cc8nNZxM.js";import"./SuggestionItem-B2W22jWd.js";import"./index-DNoaRiX5.js";import"./Option-v7vt7Rdt.js";import"./index-BC-Coj9b.js";import"./SegmentedButton-BH66OmjY.js";import"./index-DeWgeTv8.js";import"./Select-DHc0FIKo.js";import"./InvisibleMessage-D-ICaE5n.js";import"./slim-arrow-down-DHXwfDdF.js";import"./index-DPdj3l_g.js";import"./index-emcQUTqU.js";import"./index-BwoHhzeW.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CDQ6lIsG.js";import"./group-2-Cs_V0lTI.js";import"./sort-descending-gjDcZUoT.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BVWxMnE0.js";import"./utils-yoGam15V.js";import"./index-D1bbI-28.js";import"./index-B8W7BbeA.js";import"./index-D3HgSzPX.js";import"./navigation-down-arrow-DwX5fF7A.js";import"./navigation-right-arrow-DZ-QiOAH.js";import"./navigation-right-arrow-DVA-iewx.js";import"./useCurrentTheme-Bx2NeakM.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CsFcaWRy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CQU0f-9V.js";import"./paper-plane-CFbIXMZn.js";import"./index-BjJ-kmKh.js";import"./less-BZqHrptj.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

import{j as e}from"./iframe-D-p-3OCM.js";import{useMDXComponents as i}from"./index-DJLiOc38.js";import{I as m,F as a}from"./CommandsAndQueries-GFFu71sG.js";import{M as s,C as p}from"./blocks-D8nJ9XLJ.js";import"./Tag-3bv5cfrS.js";import"./index-4PsYVbCm.js";import{C as l}from"./ControlsWithNote-29IeAr60.js";import"./copy-ORsTAKbB.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CHycY5of.js";import"./preload-helper-PPVm8Dsz.js";import"./index--P1CcwOi.js";import"./index-TBDKK4_L.js";import"./index-BwwgwqQS.js";import"./Link-BjWHArC4.js";import"./index-DqKaYphS.js";import"./index-sDY_tTy_.js";import"./index-DzbvANjW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-sPN7n5XP.js";import"./addCustomCSSWithScoping-BzKWOZDH.js";import"./index-C326ykrp.js";import"./information-BQJXeVKx.js";import"./sys-enter-2-CYyiWANR.js";import"./alert-YvrQf4Kz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B57DziD3.js";import"./delete-BEO9yIVW.js";import"./settings-PRG2_s48.js";import"./NoData-DuGH0ec8.js";import"./IllustratedMessage-CUa4Bt6s.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Wcus0TGK.js";import"./index-BBXLhWys.js";import"./slim-arrow-down-DKsg_luZ.js";import"./Input-Da3ToNza.js";import"./ResponsivePopoverCommon.css-OapI0cqy.js";import"./ValueStateMessage.css-BkpHToNr.js";import"./Suggestions.css-o7YEXsUI.js";import"./ListBoxItemGroupTemplate-CKMRFc9x.js";import"./ComboBoxItemGroup-D9Rx3qMQ.js";import"./ListItemBaseTemplate-CXOX3yIO.js";import"./Token-DjuINvff.js";import"./ScrollEnablement-Dx2bfBZK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_DUY2Ux.js";import"./ToggleButton-k4-GWGjQ.js";import"./SuggestionItem-IVmzuukY.js";import"./index-CKXB7l_Z.js";import"./Option-DKRbWp3g.js";import"./index-D3t7vdTR.js";import"./SegmentedButton-BIpofa76.js";import"./index-Ce_ehxxC.js";import"./Select-BHBfJeCN.js";import"./InvisibleMessage-DZZYj9QJ.js";import"./slim-arrow-down-CfASCrZe.js";import"./index-DJ9wMrht.js";import"./index-DqIlF11a.js";import"./IconDesign-DXd8PPVF.js";import"./filter-K4X4U2Pi.js";import"./group-2-ijcP2dFk.js";import"./sort-descending-DB86tqPR.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BsUDDfTv.js";import"./utils-97cCH_s2.js";import"./index-BuWNZ_Be.js";import"./index-CxRdXbJe.js";import"./index-DkICcsDE.js";import"./navigation-down-arrow-DuI4O0ZC.js";import"./navigation-right-arrow-DChn1A1I.js";import"./navigation-right-arrow-2NSvp5We.js";import"./useCurrentTheme-DSou3srl.js";import"./IndicationColor-DVw-fSM_.js";import"./index-c2e1pm2Q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BGlVHb77.js";import"./paper-plane-D752rvN5.js";import"./index-BgQuvuCN.js";import"./less-CFosWOHX.js";import"./index-BvAlTkp1.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(m,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
`,e.jsx(a,{})]})}function Le(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Le as default};

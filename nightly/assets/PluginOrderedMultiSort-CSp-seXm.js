import{j as e}from"./iframe-BZdybOkV.js";import{useMDXComponents as i}from"./index-BK2w2T2j.js";import{I as a,F as m}from"./CommandsAndQueries-6n7MF1sx.js";import{M as s,C as p}from"./blocks-CP8RdzkU.js";import"./Tag-BzbxKur3.js";import"./index-DK3P8KDJ.js";import{C as l}from"./ControlsWithNote-N2Edy_L7.js";import"./copy-CIp50y-g.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Bs_3zcjA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIP_3DrI.js";import"./index-QZaRYYY3.js";import"./index-S-6P9mRF.js";import"./Link-ko8YnVxU.js";import"./index-DrYECb-G.js";import"./index-Ceagbcxz.js";import"./index-DEm1B2JB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-s2glcktZ.js";import"./addCustomCSSWithScoping-DEKm0mwm.js";import"./index-BZ_ngRjy.js";import"./information-jzJbJB_1.js";import"./sys-enter-2-DNIkITIL.js";import"./alert-CQPwWPwe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DmiM3j2F.js";import"./delete-Bn4jrtgc.js";import"./settings-CmB7Fgst.js";import"./NoData-BBWYakMZ.js";import"./IllustratedMessage-DgDtQSiT.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-_1OOSCTk.js";import"./index-CpgEwEY9.js";import"./index-CZpKdl4q.js";import"./slim-arrow-down-BbBe3zkt.js";import"./Input-YhMtZ58-.js";import"./ResponsivePopoverCommon.css-C6Zy80iY.js";import"./ValueStateMessage.css-CodrIykW.js";import"./Suggestions.css-DFz-TQwT.js";import"./ListBoxItemGroupTemplate-DbGM3AkW.js";import"./ComboBoxItemGroup-DmXq2bTE.js";import"./ListItemBaseTemplate-osJNy9A-.js";import"./Token-Dp8jCEo2.js";import"./ScrollEnablement-DR3-8lGc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BqswipPZ.js";import"./ToggleButton-DjDYf0VM.js";import"./SuggestionItem-CEjQwNps.js";import"./index-CFc0nQPH.js";import"./Option-oF9c-kTt.js";import"./index-ELRjcJ71.js";import"./SegmentedButton-CuCGezZR.js";import"./index-DBySEyUw.js";import"./Select-D9hNZoac.js";import"./InvisibleMessage-DKzjYfdj.js";import"./slim-arrow-down-CDOwWRZe.js";import"./index-Be1awQtY.js";import"./index-CPFKyy5f.js";import"./index-CfUkuybQ.js";import"./index-C13ceQxY.js";import"./IconDesign-DXd8PPVF.js";import"./filter--kHfYTp1.js";import"./group-2-Bsl3ML8j.js";import"./sort-descending-BdNeL7VE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dovy5LXr.js";import"./utils-DhnX8mLU.js";import"./index-Dts70RbM.js";import"./index-C2zzZlu5.js";import"./index-DkPnj5bQ.js";import"./navigation-down-arrow--7f146sQ.js";import"./navigation-right-arrow-CVnmAike.js";import"./navigation-right-arrow-YVh7qiaT.js";import"./useCurrentTheme-BgFcBM5V.js";import"./index-n0APwmh8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BX_WkTUl.js";import"./paper-plane-K10fV-mG.js";import"./index-CINyJYO9.js";import"./less-tox92RAM.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

import{j as e}from"./iframe-BpIV0mIG.js";import{useMDXComponents as i}from"./index-R-0b2Q-0.js";import{I as a,F as m}from"./CommandsAndQueries-Cg1r-kOH.js";import{M as s,C as p}from"./blocks-DoVp3o8V.js";import"./Tag-PaDhhp3x.js";import"./index-ihq2izus.js";import{C as l}from"./ControlsWithNote-BmtG_STj.js";import"./copy-ByeAxUWO.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B5Jh-DUM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qBYywHNO.js";import"./index-CTTxG0ct.js";import"./index-CIjFLNbK.js";import"./Link-BYY56m65.js";import"./index-BED2olIo.js";import"./index-fu097dPl.js";import"./index-BLHX1u79.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DqFGSoTQ.js";import"./addCustomCSSWithScoping-B4Uic3jc.js";import"./index-DtbW9kAL.js";import"./information-CehFepv7.js";import"./sys-enter-2-D_Yhxrfh.js";import"./alert-Dc_mbBlI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D2I-ZSY3.js";import"./delete-CsEea83P.js";import"./settings-BPkB95Pr.js";import"./NoData-BeGHl6Z_.js";import"./IllustratedMessage-DOyI0ZCV.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-8la9vE-n.js";import"./index-CwpdFEXU.js";import"./index-D_eQoiLu.js";import"./slim-arrow-down-Clv0qByx.js";import"./Input-CxCbVe7-.js";import"./ResponsivePopoverCommon.css-D2Obw4p0.js";import"./ValueStateMessage.css-DMpvlVEo.js";import"./Suggestions.css-DaCrsdkh.js";import"./ListBoxItemGroupTemplate-BWzZzAr7.js";import"./ComboBoxItemGroup-D6sYMIxD.js";import"./ListItemBaseTemplate-koeEWE6r.js";import"./Token-D8bP-ldU.js";import"./ScrollEnablement-C71FmZua.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cc_o9oaM.js";import"./ToggleButton-2rgNDr7d.js";import"./SuggestionItem-l3Pd-DGO.js";import"./index-BmJTPsAz.js";import"./Option-BMHYCgFj.js";import"./index-Bj0jkexU.js";import"./SegmentedButton-DEEjtarU.js";import"./index-Di2uBEgf.js";import"./Select-CtSXIsWd.js";import"./InvisibleMessage-CsmHimDL.js";import"./slim-arrow-down-1QdqWgX2.js";import"./index-D0rvSxtS.js";import"./index-DwvqlB2m.js";import"./index-Bs-Icwyw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDsrk5Iv.js";import"./group-2-CUHYq2Ym.js";import"./sort-descending-C35hFge8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C8VSrFeR.js";import"./utils-DxABz-pG.js";import"./index-jEyBc5qw.js";import"./index-C_lKlUk7.js";import"./index-BJ6HlI_O.js";import"./navigation-down-arrow-B015Jf2F.js";import"./navigation-right-arrow-DmngP1AQ.js";import"./navigation-right-arrow-BHUDGKpX.js";import"./useCurrentTheme-BE_eD6jJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DNIWpImI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-COaeyO-1.js";import"./paper-plane-DKcTwT40.js";import"./index-Bkq_sts_.js";import"./less-BRYhBxfc.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

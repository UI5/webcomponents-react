import{j as e}from"./iframe-CirU0arv.js";import{useMDXComponents as i}from"./index-Dp75W_mY.js";import{I as a,F as m}from"./CommandsAndQueries-C-xkLV_B.js";import{M as s,C as p}from"./blocks-BZ_tUEGn.js";import"./Tag-BIXyVbav.js";import"./index-DkGOPQ-r.js";import{C as l}from"./ControlsWithNote-tO4J5snW.js";import"./copy-BRU5ISS0.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-cTgiUsLU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrqGQq-t.js";import"./index-BUDPFl9U.js";import"./index-Dxm6BO0O.js";import"./Link-cWf0Ff_j.js";import"./index-B7a5GE08.js";import"./index-VennLGrv.js";import"./index-DCit48ot.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CtMJGvuv.js";import"./addCustomCSSWithScoping-DTjbXshP.js";import"./index-4atoEi4m.js";import"./information-Z8YFf98o.js";import"./sys-enter-2-5bsV2B9A.js";import"./alert-FLQkBZSI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-HIfaJVzD.js";import"./delete-CexGU_qM.js";import"./settings-DJ-LHUy-.js";import"./NoData-DE1oTmvX.js";import"./IllustratedMessage-BFgOq_LH.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DZg_ivQE.js";import"./index-UPOhQMd1.js";import"./index-CSn2kPxq.js";import"./slim-arrow-down-60ML7lyZ.js";import"./Input-B5RoDskI.js";import"./ResponsivePopoverCommon.css-DBQtHpYS.js";import"./ValueStateMessage.css-B5lUt71q.js";import"./Suggestions.css-COvU-ZfJ.js";import"./ListBoxItemGroupTemplate-BIERCNu9.js";import"./ComboBoxItemGroup-C2-CS8jK.js";import"./ListItemBaseTemplate-Bu9nUh-N.js";import"./Token-CWpLLa4L.js";import"./ScrollEnablement-DFgzJu98.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DBUXW515.js";import"./ToggleButton-CF6WXXSi.js";import"./SuggestionItem-YvgDaZB_.js";import"./index-CB4p9_nj.js";import"./Option-7ckm_yH-.js";import"./index-BTw6P2fS.js";import"./SegmentedButton-am25y6o7.js";import"./index-BFx9WVQe.js";import"./Select-Dc_o4qfa.js";import"./InvisibleMessage--uNZRaQB.js";import"./slim-arrow-down-CkBSJkgM.js";import"./index-BrUmMrZS.js";import"./index-CdQ5i6fy.js";import"./index-Di0AmzqC.js";import"./index-MEM9Yvlw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nuUE4wAL.js";import"./group-2-BEqaSAGb.js";import"./sort-descending-CaYXLUCL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-_ssyvdx4.js";import"./utils-CsEmwHd3.js";import"./index-KodJqxFE.js";import"./index-cd_HGMma.js";import"./index-Dxv3SITq.js";import"./navigation-down-arrow-DDJMQEkQ.js";import"./navigation-right-arrow-EmtR-Po3.js";import"./navigation-right-arrow-BbxMtceQ.js";import"./useCurrentTheme-CFUmE8gV.js";import"./index-B9OW6Ny7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BgeeE8jl.js";import"./paper-plane-By32g5Y1.js";import"./index-ATETq_97.js";import"./less-DF78ULYr.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

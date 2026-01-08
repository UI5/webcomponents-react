import{j as e}from"./iframe-D_OBvCft.js";import{useMDXComponents as i}from"./index-B_S0g7ME.js";import{I as a,F as m}from"./CommandsAndQueries-BZ-3zH0-.js";import{M as s,C as p}from"./blocks-DYLPI3Ra.js";import"./Tag-DR4TT7Tz.js";import"./index-DHlu5N_c.js";import{C as l}from"./ControlsWithNote-BzrbRfTT.js";import"./copy-DQgNVeWA.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-zK04HXJH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BKEI8mWg.js";import"./index-S0He3U_1.js";import"./index-CTJhmHbW.js";import"./Link-ubTR8kdT.js";import"./index-CgmBhunw.js";import"./index-CT9F8jkM.js";import"./index-BxzyntYh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CYQDt8WV.js";import"./addCustomCSSWithScoping-DGwiZ6Qr.js";import"./index-Dss8LBVA.js";import"./information-PDp2XxR-.js";import"./sys-enter-2-CTjcKc0d.js";import"./alert-BulXizwQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqurhSOy.js";import"./delete-Ctn0kSBL.js";import"./settings-z7-rjv9j.js";import"./NoData-C5ntZU5O.js";import"./IllustratedMessage-id6nb7wX.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BKoG-d3a.js";import"./index-B_K9wBMY.js";import"./index-DP-FcseT.js";import"./slim-arrow-down-CHulNvxE.js";import"./Input-i8SqafG1.js";import"./ResponsivePopoverCommon.css-0qhZ8h5z.js";import"./ValueStateMessage.css-LMTZLgJb.js";import"./Suggestions.css-C2T_AAKW.js";import"./ListBoxItemGroupTemplate-CcplzrLE.js";import"./ComboBoxItemGroup-3PYa3s30.js";import"./ListItemBaseTemplate-BHxGfkuD.js";import"./Token-a1Z2dlMc.js";import"./ScrollEnablement-BPZ45FDB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_4_wWWa.js";import"./ToggleButton-BqO_3v_4.js";import"./SuggestionItem-CG8vQS4D.js";import"./index--Gn4VUxm.js";import"./Option-D0b-vRt9.js";import"./index-cCJWZwrT.js";import"./SegmentedButton-Dhi24GCC.js";import"./index-BR4X8nJj.js";import"./Select-BLV-PVqf.js";import"./InvisibleMessage-C_0GSe_o.js";import"./slim-arrow-down-CAFzZJk4.js";import"./index-Dk3pumqB.js";import"./index-xeY4HnPc.js";import"./index-CAb0cCCw.js";import"./index-DtrCS052.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BdUi0j8b.js";import"./group-2-B-T-Csy_.js";import"./sort-descending-DEst_JzS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DMORGjeP.js";import"./utils-GHixDqEj.js";import"./index-BYrxTP19.js";import"./index-CqnoKVS3.js";import"./index-BqnBaVKU.js";import"./navigation-down-arrow-DTEGx91w.js";import"./navigation-right-arrow-D2dYA2Ao.js";import"./navigation-right-arrow-cH8Y4Elf.js";import"./useCurrentTheme-CxGXlk1H.js";import"./index-Clf9WQAr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C-113p4z.js";import"./paper-plane-78D-pvJG.js";import"./index-xk-p1hJ3.js";import"./less-oocybHBg.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

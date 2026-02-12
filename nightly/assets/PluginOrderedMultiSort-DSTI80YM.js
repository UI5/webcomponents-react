import{j as e}from"./iframe-ouw07lhn.js";import{useMDXComponents as i}from"./index-Cip0-ov6.js";import{I as a,F as m}from"./CommandsAndQueries-vCNbGeur.js";import{M as s,C as p}from"./blocks-Bw5GcbeR.js";import"./Tag-DRYfjFpo.js";import"./index-CiN9pZLU.js";import{C as l}from"./ControlsWithNote-DX3Cg25w.js";import"./copy-B_ty4mVH.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BTDHVXWm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKdSXnqp.js";import"./index-ByxVEtyu.js";import"./index-COqVCE1o.js";import"./Link-DkIKsy6A.js";import"./index-C2ZF5Jpp.js";import"./index-CrUz0E6u.js";import"./index-COELAX_g.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzV-vkfR.js";import"./addCustomCSSWithScoping-vWKRTHDz.js";import"./index-BPh4j9eE.js";import"./information-Bs_aR9DP.js";import"./sys-enter-2-C-Nxg2w-.js";import"./alert-D5Y3hKT1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CwAfLKrY.js";import"./delete-BgsX23Y2.js";import"./settings-ByFx0W9W.js";import"./NoData-DWFAi7vp.js";import"./IllustratedMessage-CxAMnvqN.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DRZapmQq.js";import"./index-DoE7JH_F.js";import"./index-CenBWoFW.js";import"./slim-arrow-down-nnK8FJIO.js";import"./Input-CI1OROWq.js";import"./ResponsivePopoverCommon.css-DcoHmoxx.js";import"./ValueStateMessage.css-XdpxvNbf.js";import"./Suggestions.css-mbx7WJoo.js";import"./ListBoxItemGroupTemplate-ICv1HSLU.js";import"./ComboBoxItemGroup-Cn8U_ufh.js";import"./ListItemBaseTemplate-C1cC5hl7.js";import"./Token-CQGOb_u0.js";import"./ScrollEnablement-Cp3P35Wp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CMrSakoj.js";import"./ToggleButton-CxXRrFBw.js";import"./SuggestionItem-x9ZQujZb.js";import"./index-Bo-tMGsE.js";import"./Option-CiUM31JF.js";import"./index-y1ArBSuI.js";import"./SegmentedButton-cQyE_gOd.js";import"./index-DeORpEYb.js";import"./Select-BtMH0-7-.js";import"./InvisibleMessage-DuwvrpMq.js";import"./slim-arrow-down-YfB-XMvS.js";import"./index-CuWbHHrU.js";import"./index-DmC80DEo.js";import"./index-BuHulO6c.js";import"./index-DovX1QRr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ByggU5Ko.js";import"./group-2-BZphomOE.js";import"./sort-descending-hxltmPIF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BV2HEYnD.js";import"./utils-CF8GV5g4.js";import"./index-BJG82E-Q.js";import"./index-OWPFx2bJ.js";import"./index-CUMsSA2S.js";import"./navigation-down-arrow-D4nt05_C.js";import"./navigation-right-arrow-DEPwSesm.js";import"./navigation-right-arrow-yYJP9RxI.js";import"./useCurrentTheme-CCX7YAJN.js";import"./index-UMznImcy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BrfX5x8-.js";import"./paper-plane-xZAWAHyC.js";import"./index-D4laCzAs.js";import"./less-BK4CsGlP.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

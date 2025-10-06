import{j as e}from"./iframe-BB4qEXD6.js";import{useMDXComponents as i}from"./index-Du8_Rn8P.js";import{I as a,F as m}from"./CommandsAndQueries-DRsaMJRB.js";import{M as s,C as p}from"./blocks-CR8KOJrJ.js";import"./Tag-Da7QnCDv.js";import"./index-DdTPxxL_.js";import{C as l}from"./ControlsWithNote-DYMuD7l3.js";import"./copy-BVMnHcDg.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BeJL7Ye6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-x2cXHq8y.js";import"./index-9Py2403r.js";import"./index-CsmFqYDM.js";import"./Link-BYUEfY7R.js";import"./index-Dt_2dhRA.js";import"./index-DMHUWYeC.js";import"./index-CztWxO-c.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bzv1Zaa7.js";import"./addCustomCSSWithScoping-Cbj-6aXb.js";import"./index-Dpli1QB-.js";import"./information-Y0x5W-OX.js";import"./sys-enter-2-BJKr7qQ1.js";import"./alert-BQZZbhbR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-erJBQNRZ.js";import"./delete-D5Bux8E7.js";import"./settings-BB1PJ6vP.js";import"./NoData-BAy4r6V2.js";import"./IllustratedMessage-Cp617NHY.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BPmeBzvN.js";import"./index-CA-cd2np.js";import"./index-AswMmsDf.js";import"./slim-arrow-down-BddUJ-KN.js";import"./Input-DkXdapB6.js";import"./ResponsivePopoverCommon.css-Dw9E0nMz.js";import"./ValueStateMessage.css-BkhABoMh.js";import"./Suggestions.css-BC1EOLh5.js";import"./ListBoxItemGroupTemplate-HpSvs65o.js";import"./ComboBoxItemGroup-CCrdSIbE.js";import"./ListItemBaseTemplate-CAROCz5m.js";import"./Token-DoaTlhno.js";import"./ScrollEnablement-BU_OfE9O.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CI0I5uqQ.js";import"./ToggleButton-BdNP-MBf.js";import"./SuggestionItem-DeZkVwUY.js";import"./index-CmahwXl7.js";import"./Option-BGTVK_my.js";import"./index-9-V0BX8k.js";import"./SegmentedButton-BuoqzDHW.js";import"./index-_XZyBcjC.js";import"./Select-LlNkV-fW.js";import"./InvisibleMessage-DyYsNy9h.js";import"./slim-arrow-down-BARLwaMW.js";import"./index-BK2SG_SP.js";import"./index-9GnEvteS.js";import"./index-OBDc_NcL.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DsHNEEGx.js";import"./group-2-CrLwAnmS.js";import"./sort-descending-0WZUg8PX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-1qNsr_an.js";import"./utils-BdVBr4pQ.js";import"./index-DIzDIuZy.js";import"./index-BRJ-40Zh.js";import"./index-DB-fTerp.js";import"./navigation-down-arrow-VkG8_yjV.js";import"./navigation-right-arrow-HRIp1p54.js";import"./navigation-right-arrow-T0LxulNL.js";import"./useCurrentTheme-D6vYZD-2.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C2hZK3d5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cj10AoIb.js";import"./paper-plane-BYFBOW_O.js";import"./index-DMqgnaw_.js";import"./less-B1wulFXz.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

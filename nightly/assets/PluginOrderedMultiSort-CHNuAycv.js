import{j as e}from"./iframe-DBAXgyPJ.js";import{useMDXComponents as i}from"./index-DeQCSiR4.js";import{I as a,F as m}from"./CommandsAndQueries-Cf1MLqXD.js";import{M as s,C as p}from"./blocks-DNEJwZiK.js";import"./Tag-BnY7EcLs.js";import"./index-BcpDNXQJ.js";import{C as l}from"./ControlsWithNote-Curz6PS1.js";import"./copy-Be-lNgbc.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Bt31hbU3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-iFpZKkV_.js";import"./index-DBjIxNL0.js";import"./index-DtoZ2Fe-.js";import"./Link-CKvSDmqR.js";import"./index-Duoz4br-.js";import"./index-DQ_Wvw6H.js";import"./index-BPy_kvjb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DlXvTyjP.js";import"./addCustomCSSWithScoping-BR1T3wHP.js";import"./index-CYYeCl2u.js";import"./information-DLrkR3Ug.js";import"./sys-enter-2-6buniplq.js";import"./alert-C9HPjUKN.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChrpHlfC.js";import"./delete-BSkNZk9a.js";import"./settings-BZAstzzV.js";import"./NoData-B7Xju4kG.js";import"./IllustratedMessage-DukG7yhw.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-BbeE78Q0.js";import"./index-x_xy1BHi.js";import"./index-H8rccFLG.js";import"./slim-arrow-down-BHYnj_Rv.js";import"./Input-DoLfEvYS.js";import"./ResponsivePopoverCommon.css-Dicr_wKa.js";import"./ValueStateMessage.css-xifZGn5p.js";import"./Suggestions.css-jnqUGd09.js";import"./ListBoxItemGroupTemplate-Br9ejLAN.js";import"./ComboBoxItemGroup-CUEsofUs.js";import"./ListItemBaseTemplate-DOEQQMA6.js";import"./Token-D5BZ8KYH.js";import"./ScrollEnablement-CAGdg6Bw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BZE_TKuw.js";import"./ToggleButton-gKHZK2VB.js";import"./SuggestionItem-DbqPCxiF.js";import"./index-NVwWghin.js";import"./Option-CxVq6N4O.js";import"./index-BYQIMVDt.js";import"./SegmentedButton-BKvVXXll.js";import"./index-C-F46hMK.js";import"./Select-BT7URQFg.js";import"./InvisibleMessage-K9tj7mDD.js";import"./slim-arrow-down-D1JBPt11.js";import"./index-z2bdi1aG.js";import"./index-BrTp8toc.js";import"./index-D5hGOmgy.js";import"./index-DXiNIq2l.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DVRvHvKO.js";import"./group-2-CUJNm4aZ.js";import"./sort-descending-pwGpDMpi.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BQLAXfyy.js";import"./utils-CrwBT7wM.js";import"./index-CksZPEzU.js";import"./index-DWNu3BWC.js";import"./index-DVt-pam0.js";import"./navigation-down-arrow-DfpRpy8j.js";import"./navigation-right-arrow-B83gJnhp.js";import"./navigation-right-arrow-BXtSSW1B.js";import"./useCurrentTheme-B1tmSyF5.js";import"./index-CwLMJfdZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-eqRVZ4IM.js";import"./paper-plane-CA-wmpkx.js";import"./index-vSaJtfoQ.js";import"./less-BVu6NBS-.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

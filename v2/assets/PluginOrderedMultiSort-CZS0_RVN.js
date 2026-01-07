import{j as e}from"./iframe-DZzGW3BN.js";import{useMDXComponents as i}from"./index-4a2WG_Ci.js";import{I as a,F as m}from"./CommandsAndQueries-agOrjqHb.js";import{M as s,C as p}from"./blocks-CBLhE6Mj.js";import"./Tag-DsKJkF-r.js";import"./index-CwFc8wWn.js";import{C as l}from"./ControlsWithNote-J7aujsrk.js";import"./copy-Dn2hDQ0W.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-QCfpKmZR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DRP5oWUe.js";import"./index-kAqP9TvQ.js";import"./index-Dq5fA6-V.js";import"./Link-S_PR-7tK.js";import"./index-KWsyOko9.js";import"./index-Cwa4PueL.js";import"./index-DDMDh9Sd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BsBnjZtI.js";import"./addCustomCSSWithScoping-63LVGehW.js";import"./index-d1jeh3JQ.js";import"./information-BknITroB.js";import"./sys-enter-2-KPnKgmjd.js";import"./alert-mneIjgbe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BniSdvIz.js";import"./delete-DuV86wpx.js";import"./settings-8s6k8EjZ.js";import"./NoData-CShc9ggy.js";import"./IllustratedMessage-CD31dXEh.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-Dy7bfHGF.js";import"./index-JZqV8G1u.js";import"./index-BwppftZR.js";import"./slim-arrow-down-D8mH76_5.js";import"./Input-6XkWZ1o_.js";import"./ResponsivePopoverCommon.css-BNCzU2w3.js";import"./ValueStateMessage.css-Uirvf2-h.js";import"./Suggestions.css-Bxrtjpe4.js";import"./ListBoxItemGroupTemplate-EqN2wsVW.js";import"./ComboBoxItemGroup-DLN7zx_c.js";import"./ListItemBaseTemplate-B5pUU0jJ.js";import"./Token-Bd6GT3me.js";import"./ScrollEnablement-Dlejz-Cm.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BSpNUPFr.js";import"./ToggleButton-D7gJFlAG.js";import"./SuggestionItem-Dj5VdsGP.js";import"./index-Djf9F3Nl.js";import"./Option-qqPbvFNI.js";import"./index-CAPm8wXz.js";import"./SegmentedButton-IKOAniKG.js";import"./index-hcUm0XD3.js";import"./Select-TodLTqUS.js";import"./InvisibleMessage-CpiIl6ef.js";import"./slim-arrow-down-DwujDOXN.js";import"./index-BlCx-VbN.js";import"./index-Bwfdl3tG.js";import"./index-7ORqBvwq.js";import"./index-5lzKqf_E.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CtZcXXHD.js";import"./group-2-DTjJUMyx.js";import"./sort-descending-BBFN1NhL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dz95Acax.js";import"./utils-Dnf_XIlj.js";import"./index-ujWlR76e.js";import"./index-DzxIJEJi.js";import"./index-DEgJlCnW.js";import"./navigation-down-arrow-Ck09O8Ee.js";import"./navigation-right-arrow-DVL0ymcw.js";import"./navigation-right-arrow-ClbiDJLo.js";import"./useCurrentTheme-CWgqZovn.js";import"./index-yeM0YfxH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CgKuSHBl.js";import"./paper-plane-D5SdZPIp.js";import"./index-C79XlDu9.js";import"./less-CgHtMiYC.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

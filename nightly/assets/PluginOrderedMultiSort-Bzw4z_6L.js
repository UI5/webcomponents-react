import{j as e}from"./iframe-B6_VnEn0.js";import{useMDXComponents as i}from"./index-CKjNAzmF.js";import{I as a,F as m}from"./CommandsAndQueries-Cu0FTX1O.js";import{M as s,C as p}from"./blocks-CyO3EJlr.js";import"./Tag-CgNBFz-6.js";import"./index-DSVB_dqF.js";import{C as l}from"./ControlsWithNote-DrWxbmPf.js";import"./copy-C1fhLsjZ.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DmrgVtRF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hldrhuwk.js";import"./index-DkrtZknx.js";import"./index-C9FEKhX3.js";import"./Link-fr-LMhyz.js";import"./index-eApF8yKA.js";import"./index-BgmLFHtv.js";import"./index-BsFRP28T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D6ry04GL.js";import"./addCustomCSSWithScoping-Cx3SnQ1e.js";import"./index-CRKIYkxI.js";import"./information-DRMbXOdP.js";import"./sys-enter-2-DdSSz0Lf.js";import"./alert-B2vLmz8E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DSUT1UXJ.js";import"./delete-B70o4ZMp.js";import"./settings-Sr6bgmj6.js";import"./NoData-wcsbKZXP.js";import"./IllustratedMessage-Cv5HujEL.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BVzwn4SB.js";import"./index-BZxlht39.js";import"./index-C4M0psbz.js";import"./slim-arrow-down-923fJvnp.js";import"./Input-Bs0gKdph.js";import"./ResponsivePopoverCommon.css-CoduWFfh.js";import"./ValueStateMessage.css-CkI6mQmW.js";import"./Suggestions.css-DpsubRXQ.js";import"./ListBoxItemGroupTemplate-CZSz5eg-.js";import"./ComboBoxItemGroup-BsqgT4AO.js";import"./ListItemBaseTemplate-1OIMo-aq.js";import"./Token-_KSGZm69.js";import"./ScrollEnablement-DlCeZwb_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bie1RoJA.js";import"./ToggleButton-A9uw47Xu.js";import"./SuggestionItem-WtzRfOZM.js";import"./index-RYxAjmJf.js";import"./Option-B_Qr8ZR1.js";import"./index-DXzDsO8i.js";import"./SegmentedButton-DUqbW27k.js";import"./index-BY3646yH.js";import"./Select-DDy3V6oF.js";import"./InvisibleMessage-KplCdb0P.js";import"./slim-arrow-down-BFcyly_p.js";import"./index-CxOv9Kkh.js";import"./index-DmSWDL_Q.js";import"./index-eEzYE7AT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-b4USW7aT.js";import"./group-2-CDpbgOOK.js";import"./sort-descending-Czh8lmrX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Xza24VXr.js";import"./utils-B3TlGdmB.js";import"./index-AL-OWNK_.js";import"./index-BSfjy-rK.js";import"./index-gNjcilEj.js";import"./navigation-down-arrow-B1_3lDPJ.js";import"./navigation-right-arrow-B-hO6U9j.js";import"./navigation-right-arrow-K8WG24tV.js";import"./useCurrentTheme-Bo-VqRyr.js";import"./IndicationColor-DVw-fSM_.js";import"./index-y-idYoY3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CyGYKIx-.js";import"./paper-plane-qRjF1BNZ.js";import"./index-DYNfIYGU.js";import"./less-BLr9OCIN.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

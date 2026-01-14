import{j as e}from"./iframe-B1b_brho.js";import{useMDXComponents as i}from"./index-D7Qzgic5.js";import{I as a,F as m}from"./CommandsAndQueries-CtGN4dkM.js";import{M as s,C as p}from"./blocks-CVoG47OJ.js";import"./Tag-Ch3HOxAY.js";import"./index-KKxhZSNI.js";import{C as l}from"./ControlsWithNote-ChVliCHp.js";import"./copy-Dph3WiPG.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BgO7D7Mn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D5FuCmER.js";import"./index-BVeNd2GI.js";import"./index-8EjJ8GJV.js";import"./Link-Pv2BqkKv.js";import"./index-Bk9hFp20.js";import"./index-h6jImvMY.js";import"./index-8w0MsWgV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CC0Swz4-.js";import"./addCustomCSSWithScoping-Dg_rT4l9.js";import"./index-Dk0QMB33.js";import"./information-Cn-hRts7.js";import"./sys-enter-2-dderIbO6.js";import"./alert-Bjr3m2l0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DlUC8bET.js";import"./delete-3Vgbn1zI.js";import"./settings-7z4AIWo7.js";import"./NoData-XVQCE7YC.js";import"./IllustratedMessage-CCaHK3Dl.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CkiGpRZ1.js";import"./index-BmCGQ8OY.js";import"./index-Dg9f9FJY.js";import"./slim-arrow-down-CtSJNFoH.js";import"./Input-DrPrGk4J.js";import"./ResponsivePopoverCommon.css-DecL8iRM.js";import"./ValueStateMessage.css-DCqzi-mz.js";import"./Suggestions.css-DEFGaf02.js";import"./ListBoxItemGroupTemplate-u6SqAiWm.js";import"./ComboBoxItemGroup-Cxw0yiyg.js";import"./ListItemBaseTemplate-D1-RPP7T.js";import"./Token-DztrHKsk.js";import"./ScrollEnablement-Ci1uix4q.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CeVIH9EC.js";import"./ToggleButton-ConJh4Qq.js";import"./SuggestionItem-DuB_O6wg.js";import"./index-9SIcG1pp.js";import"./Option-CjBwPmEN.js";import"./index-BUu53tH-.js";import"./SegmentedButton-D7knI5JR.js";import"./index-zkE8LOlV.js";import"./Select-Ch62qSYK.js";import"./InvisibleMessage-DfMwylJB.js";import"./slim-arrow-down-Im8B-cR9.js";import"./index-mHWo7vBD.js";import"./index-BLOOnk3h.js";import"./index-B32hLMLV.js";import"./index-MTq0gWz9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CVXGpE6r.js";import"./group-2-DU4omCjN.js";import"./sort-descending-B5Rv1utQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BIjwrtDG.js";import"./utils-dEyVPeJe.js";import"./index-BIOacvM6.js";import"./index-CyttwLCs.js";import"./index-FvgLRY5G.js";import"./navigation-down-arrow-C3y8haIF.js";import"./navigation-right-arrow-0IJs_3zu.js";import"./navigation-right-arrow-BSqrLb3v.js";import"./useCurrentTheme-BXjgz77y.js";import"./index-Cc7bvS6n.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BBS2P8Pi.js";import"./paper-plane-B3hlc-tG.js";import"./index-xEB5nUFf.js";import"./less-L3_E9rnS.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

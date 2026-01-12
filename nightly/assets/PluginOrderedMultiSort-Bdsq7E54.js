import{j as e}from"./iframe-B3T0Oj7B.js";import{useMDXComponents as i}from"./index-D3UxDze4.js";import{I as a,F as m}from"./CommandsAndQueries-DvsDK9ZB.js";import{M as s,C as p}from"./blocks-CyPgi3fl.js";import"./Tag-BebiXErc.js";import"./index-dJAxIfZY.js";import{C as l}from"./ControlsWithNote-C1V9eZ5n.js";import"./copy-_Qj_KEfj.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CLdVk_2J.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D37akpKi.js";import"./index-B8hvCU9O.js";import"./index-BctJwJOg.js";import"./Link-Bk4EX_BP.js";import"./index-Bik-cKeX.js";import"./index-D_qT_Ogl.js";import"./index-CpVd5OAx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVuzLNiB.js";import"./addCustomCSSWithScoping-BR9GACjU.js";import"./index-BywqBC1y.js";import"./information-CDiFrRjk.js";import"./sys-enter-2-CspjHMoa.js";import"./alert-BsEVUmBp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXXzDXeg.js";import"./delete-DoH2BMDU.js";import"./settings-D4LWYr7c.js";import"./NoData-DPlWgMdh.js";import"./IllustratedMessage-CTn70Kkd.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B5oTX081.js";import"./index-D_ervA3L.js";import"./index-BUUNpLyt.js";import"./slim-arrow-down-CacMbODe.js";import"./Input-B0UijuIu.js";import"./ResponsivePopoverCommon.css-Dq6Kf127.js";import"./ValueStateMessage.css-BCQWXayY.js";import"./Suggestions.css-Dh9vGknx.js";import"./ListBoxItemGroupTemplate-BF1ZMdMn.js";import"./ComboBoxItemGroup-Dpv9BmJs.js";import"./ListItemBaseTemplate-BJJTqK00.js";import"./Token-kg9GxVv1.js";import"./ScrollEnablement-CfYd06M2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CFRLr_io.js";import"./ToggleButton-MEuIik9w.js";import"./SuggestionItem-Bh2xAfSB.js";import"./index-CmMlZf5u.js";import"./Option-B57NkkPv.js";import"./index-DSYwj30z.js";import"./SegmentedButton-COs6qsY4.js";import"./index-DjcU9zEx.js";import"./Select-g-D7vPwS.js";import"./InvisibleMessage-CAuS8-0Y.js";import"./slim-arrow-down-tnJadlmU.js";import"./index-18Hv_f08.js";import"./index-Bg2b-U4S.js";import"./index-CxcnGbRu.js";import"./index-4zbN5094.js";import"./IconDesign-DXd8PPVF.js";import"./filter-zPNv8kbn.js";import"./group-2-CVriVckM.js";import"./sort-descending-BXBa6N4F.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cddj7KtI.js";import"./utils-BEKiXHya.js";import"./index-DXpg7xk7.js";import"./index-BDmNg7zx.js";import"./index-DhFaY-S7.js";import"./navigation-down-arrow-Crva_6Xt.js";import"./navigation-right-arrow-CzyBM415.js";import"./navigation-right-arrow-DCKCZfxz.js";import"./useCurrentTheme-eSQOFi4m.js";import"./index-zGZbQuqh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BlmVpLoY.js";import"./paper-plane-CR0-psxw.js";import"./index-DhLMwIyh.js";import"./less-DTZtCal7.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

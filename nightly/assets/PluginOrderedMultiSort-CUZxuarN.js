import{j as e}from"./iframe-BYgl1e3t.js";import{useMDXComponents as i}from"./index-CQiAxnj4.js";import{I as a,F as m}from"./CommandsAndQueries-C7-dfPl9.js";import{M as s,C as p}from"./blocks-DJ2faYOs.js";import"./Tag-WgH8NYoz.js";import"./index-CTjTm5cU.js";import{C as l}from"./ControlsWithNote-89uF0G9c.js";import"./copy-IUlUEvra.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-D1INNVPG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CoTJrZqp.js";import"./index-DOySy9e2.js";import"./index-BDYs8WoM.js";import"./Link-DcQGtcs6.js";import"./index-B_dT7zj1.js";import"./index-CgZTDeh6.js";import"./index-B7ISCohd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoRR59AB.js";import"./addCustomCSSWithScoping-_jk3dAup.js";import"./index-6Qy6VRAh.js";import"./information-B-QMEMgn.js";import"./sys-enter-2-Bd_kwfmJ.js";import"./alert-zegR4G--.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B1SsSrBU.js";import"./delete-C5OnkOZe.js";import"./settings-B5ioReqo.js";import"./NoData-BiKwYAUE.js";import"./IllustratedMessage-DOGZ92R6.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CGSn29D0.js";import"./index-Es7U-HC0.js";import"./index-CXvLuVUG.js";import"./slim-arrow-down-Dp2ciCQr.js";import"./Input-v1S2StmY.js";import"./ResponsivePopoverCommon.css-Dmb9XfkM.js";import"./ValueStateMessage.css-Y1GqQ7JE.js";import"./Suggestions.css-CUC1ZqxX.js";import"./ListBoxItemGroupTemplate-Dr-udWWW.js";import"./ComboBoxItemGroup-BqJbVdEf.js";import"./ListItemBaseTemplate-BWtuxBSD.js";import"./Token-BEPjAjq5.js";import"./ScrollEnablement-CMlQv5Ns.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DJEaviTe.js";import"./ToggleButton-D2vaCr4G.js";import"./SuggestionItem-DgwBMgIM.js";import"./index-081kxF9g.js";import"./Option-BFY-_C_3.js";import"./index-BCKaAXVJ.js";import"./SegmentedButton-DU2vMA6Y.js";import"./index-BOpxZokY.js";import"./Select-CKEJiYgR.js";import"./InvisibleMessage-zdr3PQOC.js";import"./slim-arrow-down-Ck49N193.js";import"./index-B6cxdJA0.js";import"./index-D3nZrnGX.js";import"./index-y0wRkLFD.js";import"./index-CH5XfXng.js";import"./IconDesign-DXd8PPVF.js";import"./filter-JNJ08E3e.js";import"./group-2-NOFZdPEz.js";import"./sort-descending-dB16txzl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CamwnZjH.js";import"./utils-vU-5DtFT.js";import"./index-DLZVurc2.js";import"./index-Ciih49Gh.js";import"./index-8TbROqqH.js";import"./navigation-down-arrow-By8vG3CK.js";import"./navigation-right-arrow-DTYTg7DL.js";import"./navigation-right-arrow-DjjDogmX.js";import"./useCurrentTheme-Cdnt_qcN.js";import"./index-BVTS8CP-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CWrTCVtk.js";import"./paper-plane-x6srakyu.js";import"./index-ClEI62f3.js";import"./less-DVoR9ng7.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

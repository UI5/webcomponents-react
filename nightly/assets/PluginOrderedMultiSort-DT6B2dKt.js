import{j as e}from"./iframe-5N9GXz7D.js";import{useMDXComponents as i}from"./index-DlTuiQlt.js";import{I as a,F as m}from"./CommandsAndQueries-CMJc_Han.js";import{M as s,C as p}from"./blocks-CPyIL7dB.js";import"./Tag-B4RC7Xxt.js";import"./index-D8q95YVM.js";import{C as l}from"./ControlsWithNote-Dp8-GdEK.js";import"./copy-BLtz8zcP.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CU1Fc6AT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CJR2SGfI.js";import"./index-DDb99OCc.js";import"./index-DZUtpbBW.js";import"./Link-oEEjXqRZ.js";import"./index-D5QSQPRG.js";import"./index-l_lQT3oU.js";import"./index-DHTSiNH5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ieHBSwsk.js";import"./addCustomCSSWithScoping-B8HVYEKl.js";import"./index-FxCKqbN1.js";import"./information-B48tg30u.js";import"./sys-enter-2-CQaZAGEJ.js";import"./alert-Ct7A8pBg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Qomii_Eh.js";import"./delete-vylZh7WJ.js";import"./settings-B5-c07yK.js";import"./NoData-DbeTv8bI.js";import"./IllustratedMessage-yyhJb6H7.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CguSYJb-.js";import"./index-B6JLNmTG.js";import"./index-gVbw8hdV.js";import"./slim-arrow-down-uEmCnSpu.js";import"./Input-Cf74aOvg.js";import"./ResponsivePopoverCommon.css-D2vKXyuQ.js";import"./ValueStateMessage.css-Ctm1_1I-.js";import"./Suggestions.css-CDFdvq-I.js";import"./ListBoxItemGroupTemplate-BTEoBIel.js";import"./ComboBoxItemGroup-BndPAf-K.js";import"./ListItemBaseTemplate-BbinvfmZ.js";import"./Token-CSu3FrWS.js";import"./ScrollEnablement-DVuWUxs9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BFNu6wL7.js";import"./ToggleButton-CADuKzo9.js";import"./SuggestionItem-Bt1iO1MT.js";import"./index-9ZgsG56h.js";import"./Option-B0lfretA.js";import"./index-DKrFf-VR.js";import"./SegmentedButton-CwtS4mbi.js";import"./index-CDEUh1Wr.js";import"./Select-BKsCZrgq.js";import"./InvisibleMessage-BNNpwXEU.js";import"./slim-arrow-down-CLJYmPnb.js";import"./index-BDZcqiPr.js";import"./index-DmwwIOgD.js";import"./index-CP2quE6c.js";import"./IconDesign-DXd8PPVF.js";import"./filter-yps-Eqqd.js";import"./group-2-6NDEVnRF.js";import"./sort-descending-BzVGktfr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-3H5h1FPb.js";import"./utils-CdxZF0UW.js";import"./index-CTYujQq0.js";import"./index-Bk28eBp1.js";import"./index-cm94_KBC.js";import"./navigation-down-arrow-DBn42RCI.js";import"./navigation-right-arrow-BrFq4Pkn.js";import"./navigation-right-arrow-Cdp8Azj2.js";import"./useCurrentTheme-EgfIVG70.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BLiIhR8s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-v4UuOtzV.js";import"./paper-plane-DplzoTA4.js";import"./index-CSswLuPM.js";import"./less-D9G0zBob.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

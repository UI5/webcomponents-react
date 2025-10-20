import{j as e}from"./iframe-BThE7jKf.js";import{useMDXComponents as i}from"./index-B2RJGRd4.js";import{I as a,F as m}from"./CommandsAndQueries-D1tgAUE5.js";import{M as s,C as p}from"./blocks-Dnvf3bz-.js";import"./Tag-9-1VZojo.js";import"./index-CTUpkleH.js";import{C as l}from"./ControlsWithNote-CRhelvga.js";import"./copy-CbUREYSb.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Cte-PI1R.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDRlpx-X.js";import"./index-Di66tdVG.js";import"./index-DcLqsBQ7.js";import"./Link-BAiulGQ4.js";import"./index-cpbfvu6C.js";import"./index-i-aKPvBx.js";import"./index-DLO7Rqwk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbRZFTjL.js";import"./addCustomCSSWithScoping-BhW-iIae.js";import"./index-Dg0PU8qR.js";import"./information-CcuaLhCB.js";import"./sys-enter-2-DHGMesz_.js";import"./alert-DuPQa3D0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CKwfTsTM.js";import"./delete-BqCAREpY.js";import"./settings-TqXR43qR.js";import"./NoData-DmCO7TIv.js";import"./IllustratedMessage-Bs5MaROT.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CHmBr3w4.js";import"./index-Dr75E37T.js";import"./index-DvcdzHmC.js";import"./slim-arrow-down-Bz3-mcvJ.js";import"./Input-CbDmM0GF.js";import"./ResponsivePopoverCommon.css-DMYN2ItD.js";import"./ValueStateMessage.css-CvCL0Xij.js";import"./Suggestions.css-CGrcYFlL.js";import"./ListBoxItemGroupTemplate-_Besyw8f.js";import"./ComboBoxItemGroup-DAfVDG08.js";import"./ListItemBaseTemplate-xcFSnqWt.js";import"./Token-B6ErGNwX.js";import"./ScrollEnablement-_nV76HoB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cfqfrlti.js";import"./ToggleButton-DjH21DVy.js";import"./SuggestionItem-C8Yg-JWN.js";import"./index-CtKsJjs8.js";import"./Option-CSVQioik.js";import"./index-DsF8JQwb.js";import"./SegmentedButton-YWOzVeoF.js";import"./index-CCAH6gQH.js";import"./Select-CNSr5QHH.js";import"./InvisibleMessage-DJTpQpS-.js";import"./slim-arrow-down-hb2zYnU0.js";import"./index-C9n-DCcG.js";import"./index-E5ZX2AJ8.js";import"./index-BpiAnCwY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D6ZPV9ob.js";import"./group-2-B51gzcdA.js";import"./sort-descending-BN4uvKMV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-w-AwlVUJ.js";import"./utils-Bm75YCbD.js";import"./index-HDPq3XGJ.js";import"./index-BZBFFr3l.js";import"./index-BHuibshv.js";import"./navigation-down-arrow-DNBn6riX.js";import"./navigation-right-arrow-CEmB2JVm.js";import"./navigation-right-arrow-iXDAcUxC.js";import"./useCurrentTheme-ohrANfKQ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-JOKJFWbc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DPG-qoPW.js";import"./paper-plane-Bi8pg9nf.js";import"./index-BVTuhwKz.js";import"./less-BKhFgDfk.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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

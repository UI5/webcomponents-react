import{j as t}from"./iframe--9dKe8DB.js";import{useMDXComponents as i}from"./index-KI9hm8HB.js";import{I as n}from"./CommandsAndQueries-DmMMilME.js";import{M as m,C as p}from"./blocks-sz1V1YD1.js";import"./Tag-Dx2xRUom.js";import"./index-CPDFIZvY.js";import"./copy-DDHnU-KJ.js";import{F as s}from"./Footer-Q0CQ_qDk.js";import"./PageNotFound-CuY3r4La.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DEDvJZy2.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BglFcPBB.js";import"./index-CZTUC9tr.js";import"./index-mjSuc6PB.js";import"./index-TfvKDlH8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZXl1Qbt.js";import"./addCustomCSSWithScoping-OfWYI4vx.js";import"./index-BYfUGIr5.js";import"./index-W9KwanBR.js";import"./index-FyOsxtAw.js";import"./information-nAlSmLiB.js";import"./sys-enter-2-w7b_cFRw.js";import"./alert-QMDkEN5b.js";import"./index-rkrari7y.js";import"./Illustrations-CYV_ZGoP.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DQVJ7UfD.js";import"./delete-UpR3n6t7.js";import"./settings-we5d1Qdo.js";import"./NoData-CTvQa2cu.js";import"./NoFilterResults-CisMdPss.js";import"./index-Buvth7Xi.js";import"./IllustratedMessage-egyeCVYb.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DT7BwDcp.js";import"./Input-Bzs2WJ0n.js";import"./ResponsivePopoverCommon.css-B-aEh8v6.js";import"./ValueStateMessage.css-fsZpHtW6.js";import"./Suggestions.css-DwtCktYC.js";import"./ListBoxItemGroupTemplate-BDXtzS3x.js";import"./ComboBoxItemGroup-k2eOkzNK.js";import"./ListItemBaseTemplate-CEoNUjl5.js";import"./Token-DzmHzAMQ.js";import"./ScrollEnablement-B0ocudnB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DUlTKo1l.js";import"./ToggleButton-BUpmJXw9.js";import"./multiselect-all-xFdwtE2L.js";import"./SuggestionItem-BxBxlMFB.js";import"./index-CxFVbOcB.js";import"./Option-ClyYr9IH.js";import"./index-BUn6GQyk.js";import"./SegmentedButton-BtNun3GR.js";import"./index-vp_fZGXH.js";import"./Select-BJ3mdIAK.js";import"./InvisibleMessage-DJrm2fq1.js";import"./index-CXL69l_u.js";import"./index-CafeHBfG.js";import"./index-DXrjuC-M.js";import"./index-BvCJekuK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CEIgHrVL.js";import"./group-2-BIdr9xUh.js";import"./sort-descending-A1ebgf8V.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CEfENsPH.js";import"./utils-M3j0Syqb.js";import"./index-Be4Le6Ob.js";import"./index-RhGTS4dy.js";import"./index-D1Rwx7s5.js";import"./navigation-down-arrow-D1hT7rfO.js";import"./navigation-right-arrow-DEiywgOw.js";import"./navigation-right-arrow-uImefhjs.js";import"./useCurrentTheme-Blzbw4Tr.js";import"./index-hK5Tmxlj.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-4mhkBenG.js";import"./paper-plane-B7w-DG0X.js";import"./index-DtsRxF2n.js";import"./less-BuMWggUS.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{sourceState:"none",of:l}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const tableHooks = [useAnnounceEmptyCells] // this array should be memoized

<AnalyticalTable
  data={data}
  columns={columns}
  visibleRows={5}
  tableHooks={tableHooks}
/>
`})}),`
`,t.jsx(o.p,{children:t.jsx(o.strong,{children:"First data entry with empty values or undefined fields:"})}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-js",children:`{
  age: undefined,
  friend: {
    name: '',
    age: 0
  },
  status: 'Error'
}
`})}),`
`,t.jsx(s,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};

import{j as t}from"./iframe-DJVbwX9i.js";import{useMDXComponents as i}from"./index-BFT6aOv2.js";import{I as n}from"./CommandsAndQueries-B-krYIfz.js";import{M as m,C as p}from"./blocks-Cc72oRCz.js";import"./Tag-BNmglB2v.js";import"./index-hobvar2O.js";import"./copy-CPWU3JMS.js";import{F as s}from"./Footer-DBSBdmEP.js";import"./PageNotFound-BtEXsBVj.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-8DY-ZMyw.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Dg00UQRP.js";import"./index-JKJcUc-Y.js";import"./index-BYdF4q6P.js";import"./index-D08ymWvo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeatdApf.js";import"./addCustomCSSWithScoping-UxNP_GOA.js";import"./index-BWAGkxsQ.js";import"./index-CZorzsLp.js";import"./index-B61X8BMU.js";import"./information-DINAeq89.js";import"./sys-enter-2-CB2kIbje.js";import"./alert-CG9JhWyD.js";import"./index-CRrLaMaU.js";import"./Illustrations-DPWSckqd.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQGtqyIJ.js";import"./delete-tMrGx_eS.js";import"./settings-B6Cvrc7u.js";import"./NoData-Cj5YMQK8.js";import"./NoFilterResults-CCEmQCy8.js";import"./index-ByT2zG_4.js";import"./IllustratedMessage-B2SOs3LU.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CxOtw0E1.js";import"./Input-C6tRsMHY.js";import"./ResponsivePopoverCommon.css-DMESD_7X.js";import"./ValueStateMessage.css-B32Fgepl.js";import"./Suggestions.css-DPjsY_xJ.js";import"./ListBoxItemGroupTemplate-CzzKHF5M.js";import"./ComboBoxItemGroup-JobMoG47.js";import"./ListItemBaseTemplate-pZJWsuAW.js";import"./Token-gbAcy8Rw.js";import"./ScrollEnablement-CooUtaVi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Nks0FEPD.js";import"./ToggleButton-DYxPFD5Z.js";import"./multiselect-all-DP7ssmA2.js";import"./SuggestionItem-Cuax2lQ0.js";import"./index-BIBwvzel.js";import"./Option-BmaMsH-E.js";import"./index-a2eC0PlC.js";import"./SegmentedButton-1seDyEXD.js";import"./index-CFknfRnD.js";import"./Select-DSt7ZpIf.js";import"./InvisibleMessage-CqYmaIC8.js";import"./index-Bcxa0S6V.js";import"./index-DO8-DS6K.js";import"./index-uuyZWzts.js";import"./index-D9T3Iy8W.js";import"./IconDesign-DXd8PPVF.js";import"./filter-9QXFmXZL.js";import"./group-2-gHK-0O3-.js";import"./sort-descending-DIz0ouCx.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DyE6LhaQ.js";import"./utils-DaqdMko9.js";import"./index-_WjPnhUA.js";import"./index-6kSlfcqu.js";import"./index-CAyyWJ5s.js";import"./navigation-down-arrow-bto-rTSq.js";import"./navigation-right-arrow-DOd378v6.js";import"./navigation-right-arrow-qA5U1c9K.js";import"./useCurrentTheme-C6yijx3q.js";import"./index-BY6rd6fw.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CL2sk3kX.js";import"./paper-plane-WokCt9TE.js";import"./index-Dzbbd-4U.js";import"./less-DQGRAL1V.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

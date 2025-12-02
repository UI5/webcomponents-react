import{j as t}from"./iframe-ePItFB5B.js";import{useMDXComponents as n}from"./index-DDhKCT3A.js";import{I as i,F as m}from"./CommandsAndQueries-Bqqc5zN4.js";import{M as p,C as s}from"./blocks-b5KXpU9M.js";import"./Tag-DaF_Qhe4.js";import"./index-BB23O1Ug.js";import"./copy-BDQ8dZSb.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BJSBhIN7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tHf_ynpH.js";import"./index-BW9_RjV3.js";import"./index-CHJN7UF8.js";import"./Link-DCRCVgwG.js";import"./index-CauWo2vq.js";import"./index-Dot01Rcg.js";import"./index-DwS7NZjH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BZQxW830.js";import"./addCustomCSSWithScoping-DQC1mn0S.js";import"./index-DsBJl3xg.js";import"./information-jDHGU4wN.js";import"./sys-enter-2-CYnnsJKJ.js";import"./alert-CaUEMWJO.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ToSbXWZH.js";import"./delete-DwZg9P7Z.js";import"./settings-BcPS-7YZ.js";import"./NoData-DJFJrOTo.js";import"./IllustratedMessage-Bmr5Yv3g.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DSxvsqTt.js";import"./index-CM9pher7.js";import"./index-n2XRoQpy.js";import"./slim-arrow-down-Bbay6SzC.js";import"./Input-1ziOkLBO.js";import"./ResponsivePopoverCommon.css-CK1jZSgX.js";import"./ValueStateMessage.css-Cge6AqxA.js";import"./Suggestions.css-qvsZ8K7i.js";import"./ListBoxItemGroupTemplate-tCIsdNqz.js";import"./ComboBoxItemGroup-BTYyH9JI.js";import"./ListItemBaseTemplate-BQfbgCmz.js";import"./Token-hnnzHjkz.js";import"./ScrollEnablement-DXbRc12V.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DwrIMAc3.js";import"./ToggleButton-BVCRpFrg.js";import"./SuggestionItem-DHkkhg33.js";import"./index-BJMjSX6m.js";import"./Option-8jo7-UGm.js";import"./index-BkpZUg2F.js";import"./SegmentedButton-B55zAlnK.js";import"./index-CZnOTK3W.js";import"./Select-DODjh9tK.js";import"./InvisibleMessage-66-idOyL.js";import"./slim-arrow-down-C3vG9300.js";import"./index-DEIYYpTL.js";import"./index-CRvZRH3h.js";import"./index-BpeQPuHK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BIN5xraI.js";import"./group-2-CI-KJk4K.js";import"./sort-descending-DBtsyD-3.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D8vqCrQI.js";import"./utils-eGR0B54I.js";import"./index-CIqT6e3U.js";import"./index-1WOlGoMF.js";import"./index-rRzkNuJB.js";import"./navigation-down-arrow-hSRSXRoR.js";import"./navigation-right-arrow-BxDoSopC.js";import"./navigation-right-arrow-DFeuYejb.js";import"./useCurrentTheme-C0xCGTPu.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CuUMSyha.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsyOH-5s.js";import"./paper-plane-BtGnmdBy.js";import"./index-CFAUo9FD.js";import"./less-BQZO-GV3.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(i,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(s,{sourceState:"none",of:l}),`
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
`,t.jsx(m,{})]})}function Rt(r={}){const{wrapper:o}={...n(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Rt as default};

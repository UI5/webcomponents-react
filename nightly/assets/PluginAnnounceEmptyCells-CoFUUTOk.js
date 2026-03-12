import{j as t}from"./iframe-C3CH6Gut.js";import{useMDXComponents as i}from"./index-fd8ePsOB.js";import{I as n}from"./CommandsAndQueries-DWpv2ZFM.js";import{M as m,C as p}from"./blocks-BfQItv6G.js";import"./Tag-De3iZMh7.js";import"./index-vwI-U5xE.js";import"./copy-DfCS5kJc.js";import{F as s}from"./Footer-D6sg8NSk.js";import"./PageNotFound-C9BkN1AJ.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CyVcl996.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BFP9PJhq.js";import"./index-RpXG-GZG.js";import"./index-BXc3FtAh.js";import"./index-ZpAOrS54.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ByfKWctW.js";import"./addCustomCSSWithScoping-C-wsztWv.js";import"./index-F7LUawnX.js";import"./index-QTHM5Lz2.js";import"./index-CpH_mmb2.js";import"./information-D0kU-Y2g.js";import"./sys-enter-2-DsGdXA7v.js";import"./alert-DYbKfQPB.js";import"./index-U6QQkp2y.js";import"./Illustrations-Boea4aTE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DgOl3zpa.js";import"./delete-BG9m3heg.js";import"./settings-B4nCiath.js";import"./NoData-CxiMHlX_.js";import"./NoFilterResults-CjhmWEtg.js";import"./index-Djvg3LVm.js";import"./IllustratedMessage-DIXeVHpC.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Cy7JTLur.js";import"./Input-Cwy_JXQ2.js";import"./ResponsivePopoverCommon.css-DXf25SAp.js";import"./ValueStateMessage.css-wPUzGhFU.js";import"./Suggestions.css-DBzVyqKU.js";import"./ListBoxItemGroupTemplate-D8N1_HkC.js";import"./ComboBoxItemGroup-DBKoVX7J.js";import"./ListItemBaseTemplate-Bwv46zez.js";import"./Token-CZdJDMhT.js";import"./ScrollEnablement-GDu9Dh24.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-KpiEMPRj.js";import"./ToggleButton-DlHc2tiz.js";import"./multiselect-all-BlFxC4yK.js";import"./SuggestionItem-3ubqA32j.js";import"./index-BBOXgp9T.js";import"./Option-BESnooX1.js";import"./index-Cct_m_eu.js";import"./SegmentedButton-DvdG3HcY.js";import"./index-D-_OjX_x.js";import"./Select-DDp87HxS.js";import"./InvisibleMessage-BCTOgowi.js";import"./index-Buaf_trU.js";import"./index-BP_xr0KI.js";import"./index-Cix6ADpt.js";import"./index-DlrcfpRT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DZNcHDWf.js";import"./group-2-BHNit0d9.js";import"./sort-descending-CUkyl3g_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B5hmyYbz.js";import"./utils-BoXuUdRI.js";import"./index-Dbp-R-_w.js";import"./index-Bu89sVDb.js";import"./index-DWKJP-X1.js";import"./navigation-down-arrow-BYMzr38l.js";import"./navigation-right-arrow-CqTO4JbT.js";import"./navigation-right-arrow-BShilemu.js";import"./useCurrentTheme-Box2x4Lc.js";import"./index-C3QVuZtO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C5JDBeUG.js";import"./paper-plane-Bzwy9sBv.js";import"./index-CHqhah_y.js";import"./less-BzhppYQg.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

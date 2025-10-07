import{j as t}from"./iframe-8PJ6_3g2.js";import{useMDXComponents as n}from"./index-C0ovl4HQ.js";import{I as i,F as m}from"./CommandsAndQueries-DwoVClSd.js";import{M as p,C as s}from"./blocks-BEb05MJo.js";import"./Tag-z4B_wt0s.js";import"./index-BcmoHwde.js";import"./copy-Bfeap7lu.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Nt8WbxtB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CYfjdXMS.js";import"./index-BDwyo_3E.js";import"./index-GTIQmPyl.js";import"./Link-BhglMJXJ.js";import"./index-DOdcY3p9.js";import"./index-BGjlJLGo.js";import"./index-BysWD4q1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsI0QAy3.js";import"./addCustomCSSWithScoping-DJAGr2gu.js";import"./index-DwEBrLAz.js";import"./information-aKABhmx8.js";import"./sys-enter-2-BFUBKj9Z.js";import"./alert-yjyGEikw.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CRLZ9Z9y.js";import"./delete-DoVGGrww.js";import"./settings-DOwCGSp-.js";import"./NoData-DX8iFU04.js";import"./IllustratedMessage-DwvnKJ-a.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Cz59M25c.js";import"./index-BT7W3yfe.js";import"./index-BdN-aXSN.js";import"./slim-arrow-down-BTsCMmyB.js";import"./Input-09R7KXgd.js";import"./ResponsivePopoverCommon.css-CrTnDQN-.js";import"./ValueStateMessage.css-BM_qG5Qq.js";import"./Suggestions.css-B1t_kolg.js";import"./ListBoxItemGroupTemplate-DuVOq56T.js";import"./ComboBoxItemGroup-CbELEeBa.js";import"./ListItemBaseTemplate-BXf-MYE4.js";import"./Token-BMJQIKb4.js";import"./ScrollEnablement-CI1lcBXS.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BZruH8lY.js";import"./ToggleButton-rRY9LxWZ.js";import"./SuggestionItem-D37ZdZha.js";import"./index-DIJMSgqG.js";import"./Option--8nGv81u.js";import"./index-B4ZMJdMK.js";import"./SegmentedButton-Sdb6Hiel.js";import"./index-D8L7g3jK.js";import"./Select-CwKKVGbl.js";import"./InvisibleMessage-Ctaws7An.js";import"./slim-arrow-down-udpyDWvM.js";import"./index-Dz-9JHfm.js";import"./index-CSgO5UkG.js";import"./index-DmBbmPAO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BCjSLsv5.js";import"./group-2-gn0AftPK.js";import"./sort-descending-UnfrwN5g.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CBj28W3w.js";import"./utils-CQzE5s8Z.js";import"./index-CKJGxDyU.js";import"./index-EqUF1F3h.js";import"./index-BVu9BMf-.js";import"./navigation-down-arrow-DQ7nYyPJ.js";import"./navigation-right-arrow-BKJTL6fn.js";import"./navigation-right-arrow-CG0KPGIo.js";import"./useCurrentTheme-B8X2i-jd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-uz7ZZ6ou.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DxBvBx4N.js";import"./paper-plane-C7vPyTzF.js";import"./index-Pz9pP2GN.js";import"./less-B8XtBTQx.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

import{j as t}from"./iframe-C7iTiayp.js";import{useMDXComponents as n}from"./index-CMlBI8kK.js";import{I as i,F as m}from"./CommandsAndQueries-Cwf0qDUZ.js";import{M as p,C as s}from"./blocks-BjGmnX8N.js";import"./Tag-CFZhsv-K.js";import"./index-DWyaFLqZ.js";import"./copy-CkvBTa6Z.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BBNlf_1p.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bi4CD_jF.js";import"./index-CepcJiY6.js";import"./index-BmPAlSpi.js";import"./Link-D4JNNlPq.js";import"./index-fBsRTAa2.js";import"./index-3ZnD0cv6.js";import"./index-zxgrwg2w.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-khcOq4rr.js";import"./addCustomCSSWithScoping-DLqaogwL.js";import"./index-BXtbzqKT.js";import"./information-BMfuHNkn.js";import"./sys-enter-2-wp3WX8g7.js";import"./alert-D64S_sTf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bo89s8ys.js";import"./delete-CCDVjtvW.js";import"./settings-BKAeCR2Z.js";import"./NoData-Bf3fSXva.js";import"./IllustratedMessage-_2lGAz-J.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-1kBGmlid.js";import"./index-BgWBB9Nj.js";import"./index-D6FSQNaA.js";import"./slim-arrow-down-DQ4u4tcO.js";import"./Input-Dc29Rl46.js";import"./ResponsivePopoverCommon.css-BuOZvZm3.js";import"./ValueStateMessage.css-BylK2ZGd.js";import"./Suggestions.css-HeG5Oc_t.js";import"./ListBoxItemGroupTemplate-CzMwnapl.js";import"./ComboBoxItemGroup-BwGON5jx.js";import"./ListItemBaseTemplate-DmWIq4QF.js";import"./Token-Bw-ivO-m.js";import"./ScrollEnablement-m0sz45fi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dd95Np6p.js";import"./ToggleButton-C2EcXRa7.js";import"./SuggestionItem-B0EqOaoY.js";import"./index-BbRE-btA.js";import"./Option-CJLLlMWt.js";import"./index-CSbbIXmy.js";import"./SegmentedButton-B2udwM1j.js";import"./index-DDYhMlnk.js";import"./Select-Do7H2USn.js";import"./InvisibleMessage-D1U00Tgj.js";import"./slim-arrow-down-BjRxfcn_.js";import"./index-DQ8hKiqh.js";import"./index-DA0UiR-Z.js";import"./index-S0HdPZGc.js";import"./index-DkOK-tBR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dc2A1PJb.js";import"./group-2-DDh7CKio.js";import"./sort-descending-tAdmCFu7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DE_IcfY_.js";import"./utils-DjivXbSk.js";import"./index-D-JJzP2u.js";import"./index-jp7mGW-W.js";import"./index-D3yVkpzL.js";import"./navigation-down-arrow-DGq3-RIe.js";import"./navigation-right-arrow-EXPZKsWP.js";import"./navigation-right-arrow-DuxTVxJD.js";import"./useCurrentTheme-BSh8lxlr.js";import"./index-D1HtHk7r.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CUKUp41V.js";import"./paper-plane-D-TZChdH.js";import"./index-7U_-Ii5q.js";import"./less-DjUmBMvH.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

import{j as t}from"./iframe-CA3Ho9Q5.js";import{useMDXComponents as n}from"./index-BSP_ypsD.js";import{I as i,F as m}from"./CommandsAndQueries-CpnGQ0tY.js";import{M as p,C as s}from"./blocks-duj_cvae.js";import"./Tag-C7EDP0wF.js";import"./index-B2KbXcP2.js";import"./copy-Cirx0xPf.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CX2YmmH7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CS7zB70b.js";import"./index-B1DuQcex.js";import"./index-Cj36scYa.js";import"./Link-B9lvI_mX.js";import"./index-Vj9BxWeO.js";import"./index-DJDcB98R.js";import"./index-CnX6lHZc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CziqpW1M.js";import"./addCustomCSSWithScoping-CmwUGghA.js";import"./index-QQ_2tXfB.js";import"./information-D0PKU0zc.js";import"./sys-enter-2-BzmXGgFI.js";import"./alert-DOfQq82s.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-pSB3nE8O.js";import"./delete-xPoZJBZg.js";import"./settings-sBnL1p2q.js";import"./NoData-Bjn-uhcG.js";import"./IllustratedMessage-C1nIamAf.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CBaUn8xf.js";import"./index-0bZDwJmd.js";import"./index-CM7WhKj6.js";import"./slim-arrow-down-C3eZfZh-.js";import"./Input-CVKYZVtQ.js";import"./ResponsivePopoverCommon.css-HLQwWCxH.js";import"./ValueStateMessage.css-DfbuXwvj.js";import"./Suggestions.css-iNzzcrss.js";import"./ListBoxItemGroupTemplate-D0iaKul1.js";import"./ComboBoxItemGroup-DZa5aCxI.js";import"./ListItemBaseTemplate-VtML0_fs.js";import"./Token-BPQsJP1e.js";import"./ScrollEnablement-Dip40C-m.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DKlWXx6n.js";import"./ToggleButton-B5e8_eSy.js";import"./SuggestionItem-ii4KscYX.js";import"./index-CNQ8GyV9.js";import"./Option-0FkMbiJ5.js";import"./index-BLzjPo3w.js";import"./SegmentedButton-B-4keN_u.js";import"./index-CRVjoIym.js";import"./Select-BslhBdoh.js";import"./InvisibleMessage-BF5OzUJ0.js";import"./slim-arrow-down-CLco8maH.js";import"./index-DFRTyKxs.js";import"./index-BHNHxsyD.js";import"./index-BtK-IhRn.js";import"./index-BLZkVtTr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BTIOOdab.js";import"./group-2-DeuvYpMF.js";import"./sort-descending-Dfh9oR0a.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-U8bJ6mPR.js";import"./utils-mN_QxSrv.js";import"./index-DWY9VANS.js";import"./index-NiE7rD6V.js";import"./index-CnEeNT_m.js";import"./navigation-down-arrow-CEMVxfUW.js";import"./navigation-right-arrow-pdf4AWX0.js";import"./navigation-right-arrow-C4WsPtKq.js";import"./useCurrentTheme-B-RCzITw.js";import"./index-Cjnz1VnT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D8Jpu7PP.js";import"./paper-plane-GfWk7Nnh.js";import"./index-Bgs4bEEy.js";import"./less-tNpUXr9m.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

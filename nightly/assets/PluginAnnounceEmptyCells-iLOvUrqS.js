import{j as t}from"./iframe-THm39tdL.js";import{useMDXComponents as n}from"./index-B4tiZj28.js";import{I as i,F as m}from"./CommandsAndQueries-CM3XC2Lj.js";import{M as p,C as s}from"./blocks-exNB_fpK.js";import"./Tag-DAVE_HUz.js";import"./index-GpdeEFTa.js";import"./copy-BpRW8fgI.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CVT2-F1V.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DPta9qsd.js";import"./index-Dg0TKbRC.js";import"./index-DLy3fIdu.js";import"./Link-CGyr18oq.js";import"./index-BziYS9gD.js";import"./index-Dfp6johM.js";import"./index-KiDRbvAF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BGXn0jIO.js";import"./addCustomCSSWithScoping-msj5utEH.js";import"./index-BQ6gEIJW.js";import"./information-Cma2Q91K.js";import"./sys-enter-2-iw8Fxy6e.js";import"./alert-Buz1y0R3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-gfd4y1HT.js";import"./delete-0fDb3pV1.js";import"./settings-CY8QoXJB.js";import"./NoData-C7YE6Tud.js";import"./IllustratedMessage-CwBEdHyI.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BtIdSS61.js";import"./index-CF50Srtj.js";import"./index-MWxZbhrE.js";import"./slim-arrow-down-F0Pm_4oK.js";import"./Input-BhtW4_5c.js";import"./ResponsivePopoverCommon.css-BUxGZes4.js";import"./ValueStateMessage.css-Bbj2XpR4.js";import"./Suggestions.css-tt1nfuuG.js";import"./ListBoxItemGroupTemplate-o9uQGfAz.js";import"./ComboBoxItemGroup-D2Ek2hZU.js";import"./ListItemBaseTemplate-M2eQiRWW.js";import"./Token-GBNwp73E.js";import"./ScrollEnablement-BuLvzDFb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BfdqbOJt.js";import"./ToggleButton-BCPXY_Ug.js";import"./SuggestionItem-DkeJr8Uj.js";import"./index-BKb2eeim.js";import"./Option-BV6lO7dz.js";import"./index-Bg5k6qvB.js";import"./SegmentedButton-CFw5tEED.js";import"./index-CEaBFzJC.js";import"./Select-BdWwnW7P.js";import"./InvisibleMessage-Ce4CN5Vg.js";import"./slim-arrow-down-B5JPuMYZ.js";import"./index-BnrnCSjD.js";import"./index-C6R9FrtI.js";import"./index-DaOWCx8l.js";import"./index-CSWlCTzX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CGPM4R0_.js";import"./group-2-09PNMZ-u.js";import"./sort-descending-DNDw-3QK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BGou595l.js";import"./utils-BtvyjyGh.js";import"./index-BczVQc8C.js";import"./index-Cv0Q1UgH.js";import"./index-Bk-Qx2M8.js";import"./navigation-down-arrow-DEN2N7AT.js";import"./navigation-right-arrow-D2uUmPNT.js";import"./navigation-right-arrow-BW1qFR6l.js";import"./useCurrentTheme-BVOqA9kw.js";import"./index-CUY0Gfu8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DmNCTJWW.js";import"./paper-plane-BcpS0W6p.js";import"./index-BPR-maoO.js";import"./less-Dxs7OAKQ.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

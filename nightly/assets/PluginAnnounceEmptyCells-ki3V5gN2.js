import{j as t}from"./iframe-CTc_pUME.js";import{useMDXComponents as i}from"./index-CbFOQhGC.js";import{I as n,F as m}from"./CommandsAndQueries-BKl-Lehx.js";import{M as p,C as s}from"./blocks-Bdab0qOx.js";import"./Tag-BJVcJF8V.js";import"./index-BmIFgcgy.js";import"./copy-CX-UstQv.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-KHHhuFbE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Z8jBBqBa.js";import"./index-C61H3I4w.js";import"./index-cPYEFV1s.js";import"./Link-CIXpUy3N.js";import"./index-dZVrSoBW.js";import"./index-MjXDOENA.js";import"./index-CHi_LEvO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B7yiJaHj.js";import"./addCustomCSSWithScoping-Dc_j6Yzk.js";import"./index-6ELyezq3.js";import"./information-BUnhqMn4.js";import"./sys-enter-2-DOV5JEOM.js";import"./alert-DylNOMF0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CIKwfdQg.js";import"./delete-kbtfU-Be.js";import"./settings-BLPPWMrz.js";import"./NoData-5paOsqOO.js";import"./IllustratedMessage-Ds6OazXP.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BcphOOS6.js";import"./index-Cz9iPqTS.js";import"./slim-arrow-down-C939bzhs.js";import"./Input-DwKwevQu.js";import"./ResponsivePopoverCommon.css-DVODeCs6.js";import"./ValueStateMessage.css-CEEhjmep.js";import"./Suggestions.css-D-Gi3AK0.js";import"./ListBoxItemGroupTemplate-DvohLQqN.js";import"./ComboBoxItemGroup-Dp8wVEki.js";import"./ListItemBaseTemplate-Flt8m4GL.js";import"./Token-B0g-cX5V.js";import"./ScrollEnablement-Dqoexmfr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C3YrrMZt.js";import"./ToggleButton-gg5kcSkt.js";import"./SuggestionItem-D0rTiphA.js";import"./index-Blj39MLR.js";import"./Option-CsGmFVxt.js";import"./index-DCTt8g0K.js";import"./SegmentedButton-BADV9MET.js";import"./index-CurbkiN8.js";import"./Select-5ZecXlmx.js";import"./InvisibleMessage-sw3UNfwB.js";import"./slim-arrow-down-B_qgXS-y.js";import"./index-CP2pU2KW.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BLV8HYZD.js";import"./group-2-CcIeK99E.js";import"./sort-descending-D80ou1nO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BgNFH_bM.js";import"./utils-DAL9-AHg.js";import"./index-Brew3N2g.js";import"./index-9vQVNdmd.js";import"./index-6fpphJyg.js";import"./navigation-down-arrow-TIAFyztM.js";import"./navigation-right-arrow-BigkpvCQ.js";import"./navigation-right-arrow-B100tUdc.js";import"./useCurrentTheme-D2CPEB2n.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DLD--ZCq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BmQn44KR.js";import"./paper-plane-DZOaRTqB.js";import"./index-kRlvFPPJ.js";import"./less-Bbv1vYfG.js";import"./index-rhUIVPqF.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
`,t.jsx(m,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};

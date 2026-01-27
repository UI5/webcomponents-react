import{j as t}from"./iframe-BCLHYJgX.js";import{useMDXComponents as n}from"./index-6uEU24p4.js";import{I as i,F as m}from"./CommandsAndQueries-CO5L47ah.js";import{M as p,C as s}from"./blocks-Bs_XR2wS.js";import"./Tag-CyCEbX-5.js";import"./index-BaEPddIL.js";import"./copy-C8KGHNvK.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DD_BHl_O.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cok_5_tC.js";import"./index-Cm3V18u1.js";import"./index-BK_ZHavx.js";import"./Link-Bn4h5ljW.js";import"./index-CCx-58F9.js";import"./index-Bu9oHGEl.js";import"./index-_pVZ4H5C.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoVEwdyY.js";import"./addCustomCSSWithScoping-DNzt28js.js";import"./index-ryNQsvjz.js";import"./information-ddn69F5R.js";import"./sys-enter-2-Clp8AE05.js";import"./alert-bXCG-ij3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-7Zt1rPtU.js";import"./delete-DZ-sv9tn.js";import"./settings-DEZp58uU.js";import"./NoData-Bm6c65Rp.js";import"./IllustratedMessage-CpnLKog-.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-0eiDXkdF.js";import"./index-DHFj9r2s.js";import"./index-CnUVMLwV.js";import"./slim-arrow-down-PQTwOB1y.js";import"./Input-CyIlmGcA.js";import"./ResponsivePopoverCommon.css-BG6tGGqw.js";import"./ValueStateMessage.css-CXTpMNNy.js";import"./Suggestions.css-Bad721NM.js";import"./ListBoxItemGroupTemplate-DHvQR70c.js";import"./ComboBoxItemGroup-Dv-3y-yt.js";import"./ListItemBaseTemplate-BybflgUy.js";import"./Token-C7Z0uXiZ.js";import"./ScrollEnablement-C_6ell_9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CBy1q-np.js";import"./ToggleButton-Ch4ejuj2.js";import"./SuggestionItem-DOMiaiL4.js";import"./index-CsRnbpar.js";import"./Option-BM744F7n.js";import"./index-BKITVOdn.js";import"./SegmentedButton-BMBrktYn.js";import"./index-DgD7lXWr.js";import"./Select-CmILZVDu.js";import"./InvisibleMessage-DnmpScj3.js";import"./slim-arrow-down-DHuMktny.js";import"./index-BwWwsDip.js";import"./index-D0yr6pZg.js";import"./index-BPgVHXij.js";import"./index-P_S_jhxH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bn9RS1kX.js";import"./group-2-BYuBBp9R.js";import"./sort-descending-BJIWTPav.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DlAPMqrc.js";import"./utils-BScKaUIi.js";import"./index-DY7zKARQ.js";import"./index-s-YoLh3T.js";import"./index-CLiMatz4.js";import"./navigation-down-arrow-B2J7F8t-.js";import"./navigation-right-arrow-ClWc3JFi.js";import"./navigation-right-arrow-CByHJpNk.js";import"./useCurrentTheme-BlqUDt0t.js";import"./index-DyAhltwy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ByUnN_uG.js";import"./paper-plane-cWqe5jd6.js";import"./index-Oy3wJsZc.js";import"./less--DX0g4Ek.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

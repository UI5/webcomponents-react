import{j as t}from"./iframe-Biw_3dDT.js";import{useMDXComponents as n}from"./index-BMMnaqrc.js";import{I as i,F as m}from"./CommandsAndQueries-D0Z7WxPl.js";import{M as p,C as s}from"./blocks-CG1UjEbO.js";import"./Tag-CRWtagqn.js";import"./index-Cn2rXDmw.js";import"./copy-DH1R2EGq.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-C2Xb6pBm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqgdtVzi.js";import"./index-CFI750DE.js";import"./index-BN4lukMo.js";import"./Link-DWk7vFCs.js";import"./index-BoXMWtRz.js";import"./index-Cs0jPH4S.js";import"./index-N2M8yHQs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeslUd9A.js";import"./addCustomCSSWithScoping-DYYTTL4w.js";import"./index-BJYjY6km.js";import"./information-DBapFp0Y.js";import"./sys-enter-2-CEmGCFWp.js";import"./alert-DjZ7TPZE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CeUXtSMt.js";import"./delete-BCgK7hyI.js";import"./settings-DzTZGwhB.js";import"./NoData-DKz1kKuV.js";import"./IllustratedMessage-DXuv23_m.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CEF4y9VB.js";import"./index-C32xzwv9.js";import"./index-DLpedh-q.js";import"./slim-arrow-down-cCYJhXL4.js";import"./Input-Bw_MUO_q.js";import"./ResponsivePopoverCommon.css-C-V5noYQ.js";import"./ValueStateMessage.css-ByBg6XPZ.js";import"./Suggestions.css-bib_WhRC.js";import"./ListBoxItemGroupTemplate-CFztLzRm.js";import"./ComboBoxItemGroup-CDJ_c_MY.js";import"./ListItemBaseTemplate-CfwWbg0i.js";import"./Token-DiWIZ29Z.js";import"./ScrollEnablement-bgT4DI50.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DVrrwFh6.js";import"./ToggleButton-DHvaMwSS.js";import"./SuggestionItem-DULb_g75.js";import"./index-2OJQec-L.js";import"./Option-BcYuvlB6.js";import"./index-BpN_VVJi.js";import"./SegmentedButton-pFLbx0qK.js";import"./index-CZPmvqSA.js";import"./Select-DCBgibxv.js";import"./InvisibleMessage-C2StTKZh.js";import"./slim-arrow-down-DdZdWXqJ.js";import"./index-DxlfJkCF.js";import"./index-BO0ARibj.js";import"./index-DTPD7XSM.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CE52_svi.js";import"./group-2-BOK7IKie.js";import"./sort-descending-BabW8yOs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DXQkuKDh.js";import"./utils-DqOKa6xr.js";import"./index-aoNvrQgQ.js";import"./index-DrWwSftw.js";import"./index-CDWqnF0I.js";import"./navigation-down-arrow-CuzvgjyX.js";import"./navigation-right-arrow-C4bDXXx0.js";import"./navigation-right-arrow-D8ltxNFm.js";import"./useCurrentTheme-DLWoHXHT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DdJKFclu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BOO113xH.js";import"./paper-plane-D1iJTi1P.js";import"./index-iNA5KBB_.js";import"./less-BmfWAKtR.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

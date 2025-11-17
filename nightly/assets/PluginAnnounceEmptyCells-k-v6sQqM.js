import{j as t}from"./iframe-BpIV0mIG.js";import{useMDXComponents as n}from"./index-R-0b2Q-0.js";import{I as i,F as m}from"./CommandsAndQueries-Cg1r-kOH.js";import{M as p,C as s}from"./blocks-DoVp3o8V.js";import"./Tag-PaDhhp3x.js";import"./index-ihq2izus.js";import"./copy-ByeAxUWO.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-B5Jh-DUM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qBYywHNO.js";import"./index-CTTxG0ct.js";import"./index-CIjFLNbK.js";import"./Link-BYY56m65.js";import"./index-BED2olIo.js";import"./index-fu097dPl.js";import"./index-BLHX1u79.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DqFGSoTQ.js";import"./addCustomCSSWithScoping-B4Uic3jc.js";import"./index-DtbW9kAL.js";import"./information-CehFepv7.js";import"./sys-enter-2-D_Yhxrfh.js";import"./alert-Dc_mbBlI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D2I-ZSY3.js";import"./delete-CsEea83P.js";import"./settings-BPkB95Pr.js";import"./NoData-BeGHl6Z_.js";import"./IllustratedMessage-DOyI0ZCV.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-8la9vE-n.js";import"./index-CwpdFEXU.js";import"./index-D_eQoiLu.js";import"./slim-arrow-down-Clv0qByx.js";import"./Input-CxCbVe7-.js";import"./ResponsivePopoverCommon.css-D2Obw4p0.js";import"./ValueStateMessage.css-DMpvlVEo.js";import"./Suggestions.css-DaCrsdkh.js";import"./ListBoxItemGroupTemplate-BWzZzAr7.js";import"./ComboBoxItemGroup-D6sYMIxD.js";import"./ListItemBaseTemplate-koeEWE6r.js";import"./Token-D8bP-ldU.js";import"./ScrollEnablement-C71FmZua.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cc_o9oaM.js";import"./ToggleButton-2rgNDr7d.js";import"./SuggestionItem-l3Pd-DGO.js";import"./index-BmJTPsAz.js";import"./Option-BMHYCgFj.js";import"./index-Bj0jkexU.js";import"./SegmentedButton-DEEjtarU.js";import"./index-Di2uBEgf.js";import"./Select-CtSXIsWd.js";import"./InvisibleMessage-CsmHimDL.js";import"./slim-arrow-down-1QdqWgX2.js";import"./index-D0rvSxtS.js";import"./index-DwvqlB2m.js";import"./index-Bs-Icwyw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDsrk5Iv.js";import"./group-2-CUHYq2Ym.js";import"./sort-descending-C35hFge8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C8VSrFeR.js";import"./utils-DxABz-pG.js";import"./index-jEyBc5qw.js";import"./index-C_lKlUk7.js";import"./index-BJ6HlI_O.js";import"./navigation-down-arrow-B015Jf2F.js";import"./navigation-right-arrow-DmngP1AQ.js";import"./navigation-right-arrow-BHUDGKpX.js";import"./useCurrentTheme-BE_eD6jJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DNIWpImI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-COaeyO-1.js";import"./paper-plane-DKcTwT40.js";import"./index-Bkq_sts_.js";import"./less-BRYhBxfc.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

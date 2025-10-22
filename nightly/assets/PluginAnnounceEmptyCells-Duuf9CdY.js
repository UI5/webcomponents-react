import{j as t}from"./iframe-N-CkNuQp.js";import{useMDXComponents as n}from"./index-vMZrjKLN.js";import{I as i,F as m}from"./CommandsAndQueries-C649emYA.js";import{M as p,C as s}from"./blocks-BlmowjXe.js";import"./Tag-BjR1DXbQ.js";import"./index-C6U4q-s3.js";import"./copy-a5vlqc1O.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-JPuB_a5X.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dctc1ZtL.js";import"./index-Cfq8WB4R.js";import"./index-DbFvQ9Ev.js";import"./Link-DUQLkHF0.js";import"./index-Bw-Px9rd.js";import"./index-nkckj2JT.js";import"./index-CNxEFs14.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIbW1rrN.js";import"./addCustomCSSWithScoping-h_aYe486.js";import"./index-CnaiImML.js";import"./information-DXCMx7jp.js";import"./sys-enter-2-DJK47xX9.js";import"./alert-DxAb-ai_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-fT9LTQ0j.js";import"./delete-B8Z5j_Do.js";import"./settings-TA31uUIw.js";import"./NoData-D4-SB34s.js";import"./IllustratedMessage-SdxM8pyY.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Y4WFScsy.js";import"./index-CiBKxPDw.js";import"./index--O_h7dFN.js";import"./slim-arrow-down-rr5X3KXq.js";import"./Input-WfBh0KTF.js";import"./ResponsivePopoverCommon.css-KDgvHQ0W.js";import"./ValueStateMessage.css-DO6JAQcc.js";import"./Suggestions.css-DUyKQFzw.js";import"./ListBoxItemGroupTemplate-q6J-Hxt2.js";import"./ComboBoxItemGroup-i8_TMTd2.js";import"./ListItemBaseTemplate-GLU57VL5.js";import"./Token-CiZ98YBe.js";import"./ScrollEnablement--YCWq2yu.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dp0_Lu_Z.js";import"./ToggleButton-BS9H1EYC.js";import"./SuggestionItem-BrHIYRQT.js";import"./index-Srybk_Pk.js";import"./Option-BjRW5Ygk.js";import"./index-BsRx0YZP.js";import"./SegmentedButton-BH20oEyd.js";import"./index-DUUfYCBb.js";import"./Select-CELxD9-A.js";import"./InvisibleMessage-ChBJZhpz.js";import"./slim-arrow-down-_epklyRU.js";import"./index-29v9kZgV.js";import"./index-C7vkinT_.js";import"./index-BvTJX50d.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CpzbLxIe.js";import"./group-2-CxA-FYRT.js";import"./sort-descending-Cw2XxVBU.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BJhTa_8n.js";import"./utils-DB3VCJuH.js";import"./index-fBWenx7K.js";import"./index-va9Teg1t.js";import"./index-DBkmiyLK.js";import"./navigation-down-arrow-D-R4T3i-.js";import"./navigation-right-arrow-DaI_vWHK.js";import"./navigation-right-arrow-nPCtKYnF.js";import"./useCurrentTheme-fVl0Jypc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CG0eM5fE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DSfev3_E.js";import"./paper-plane-Dc2C46qc.js";import"./index-pfabamDa.js";import"./less-rZNKIwFM.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

import{j as t}from"./iframe-BCh37-GP.js";import{useMDXComponents as n}from"./index-E1HFg4gZ.js";import{I as i,F as m}from"./CommandsAndQueries-BaHr-COi.js";import{M as p,C as s}from"./blocks-CS5FlooX.js";import"./Tag-B_Qpe0TE.js";import"./index-DKQ6JIGw.js";import"./copy-7yIahvRv.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-P4Nd5R97.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JFrdX4G8.js";import"./index-CTMnj1ho.js";import"./index-Bv89sSp1.js";import"./Link-BSH3TTIl.js";import"./index-BonVTnTn.js";import"./index-OKdWlUZi.js";import"./index-DMXHNrMi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCrrvnNY.js";import"./addCustomCSSWithScoping-5ena9gAo.js";import"./index-DTOYUFlO.js";import"./information-3OCHA3NQ.js";import"./sys-enter-2-C8D5BzD8.js";import"./alert-DXLNWSuU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BHnZbtsD.js";import"./delete-EE4bTGjq.js";import"./settings-CWOgdnOQ.js";import"./NoData-EYRIcvpd.js";import"./IllustratedMessage-eRr0GKWI.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CAirgaaj.js";import"./index-D1dCHV7D.js";import"./index-tKT3JZMY.js";import"./slim-arrow-down-BmoCgPng.js";import"./Input-BV2Kpufx.js";import"./ResponsivePopoverCommon.css-Dj0T0ryX.js";import"./ValueStateMessage.css-BPaxhl46.js";import"./Suggestions.css-d96Y8STr.js";import"./ListBoxItemGroupTemplate-DKRgKg-W.js";import"./ComboBoxItemGroup-BghtySqg.js";import"./ListItemBaseTemplate-DK7kW4zT.js";import"./Token-swetDNES.js";import"./ScrollEnablement-d21bdta6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bb53oDTA.js";import"./ToggleButton-D4fUNdSY.js";import"./SuggestionItem-BQ2GorAX.js";import"./index-CyfUcvzJ.js";import"./Option-PulQRzr2.js";import"./index-Di7fqct-.js";import"./SegmentedButton-BunRIwoi.js";import"./index-Bgknzbhu.js";import"./Select-Nz2Hcbg2.js";import"./InvisibleMessage-DkbocxqO.js";import"./slim-arrow-down-CGh4l6r9.js";import"./index-BsudtbIQ.js";import"./index-BD7ZfrRW.js";import"./index-CUx_S0wg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cl-mfjch.js";import"./group-2-CuvWrUYC.js";import"./sort-descending-C-mIF84h.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dst6fVDY.js";import"./utils-BnTi3cfr.js";import"./index-CxPcQIig.js";import"./index-BVX4pL2A.js";import"./index-Dm-Pc1i9.js";import"./navigation-down-arrow-BQvpfFl5.js";import"./navigation-right-arrow-DpZd7grt.js";import"./navigation-right-arrow-CfgRq-yV.js";import"./useCurrentTheme-Bz0a4Npu.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D8yBXMrH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CRezPATc.js";import"./paper-plane-Dx3V_-Uw.js";import"./index-CZ6TAeEd.js";import"./less-Bxijlz1Z.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

import{j as t}from"./iframe-DW8uOQp0.js";import{useMDXComponents as n}from"./index-DjfSR8mu.js";import{I as i,F as m}from"./CommandsAndQueries-CfxeF-Et.js";import{M as p,C as s}from"./blocks-B-FDorPY.js";import"./Tag-DZD94rKb.js";import"./index-B6OSuhq3.js";import"./copy-BPjUZJw9.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Cjfv9lZ_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-wMLjz3fG.js";import"./index-BIXJrD8M.js";import"./index-DHspvyEH.js";import"./Link-DBMfTmkv.js";import"./index-DCmHXknG.js";import"./index-B1HFxIWl.js";import"./index-BlVT_NLP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BqxCMWvb.js";import"./addCustomCSSWithScoping-InFg9UZ2.js";import"./index-BettgKsC.js";import"./information-Dh4y9R_M.js";import"./sys-enter-2-DblypcwG.js";import"./alert-CwT2Bhtr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Ccy1h0ZZ.js";import"./delete-CAh52cIa.js";import"./settings-Bq4r6lp7.js";import"./NoData-Wb2Eh2l8.js";import"./IllustratedMessage-59yIC32s.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BanPL-9P.js";import"./index-BM97U_Id.js";import"./index-95RptXAb.js";import"./slim-arrow-down-DUDQ1G7d.js";import"./Input-BtplTNuz.js";import"./ResponsivePopoverCommon.css-BwZTAXmn.js";import"./ValueStateMessage.css-2teNoYXT.js";import"./Suggestions.css-GVLxyP7E.js";import"./ListBoxItemGroupTemplate-xi9Dai9-.js";import"./ComboBoxItemGroup-CYvZfMur.js";import"./ListItemBaseTemplate-jJed8ANY.js";import"./Token-CXlJ8X_s.js";import"./ScrollEnablement-BuIEarCH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BakyJ71F.js";import"./ToggleButton-Dmg-mtR4.js";import"./SuggestionItem-JYWpCC6O.js";import"./index-O4brpd7h.js";import"./Option-lTsEHPaz.js";import"./index-DM3wbu2J.js";import"./SegmentedButton-dnl0_LO7.js";import"./index-BW8wCqLg.js";import"./Select-B-GQjth7.js";import"./InvisibleMessage-BCjehSQX.js";import"./slim-arrow-down-Nj2WlNU_.js";import"./index-DA7mVkNb.js";import"./index-CUWHnjz1.js";import"./index-2WqQUSOe.js";import"./index-7R16Plue.js";import"./IconDesign-DXd8PPVF.js";import"./filter-xApDoQhv.js";import"./group-2-D9KCRiYo.js";import"./sort-descending-sPt6c51s.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BS_N9hv6.js";import"./utils-DCPEwa5n.js";import"./index-CX98XYz1.js";import"./index-Ci1baq6U.js";import"./index-BKui1p5j.js";import"./navigation-down-arrow-kptVdaed.js";import"./navigation-right-arrow-CDK-kpp0.js";import"./navigation-right-arrow-BRtJ_VL9.js";import"./useCurrentTheme-CXTKA9u6.js";import"./index-D4VjyumX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL--X6IcLkp.js";import"./paper-plane-a-F37SE4.js";import"./index-CSdQr0-4.js";import"./less-C3jyfe8r.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

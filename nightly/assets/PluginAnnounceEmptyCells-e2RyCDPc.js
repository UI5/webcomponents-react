import{j as t}from"./iframe-BH1OFp8w.js";import{useMDXComponents as i}from"./index-clbF6OIG.js";import{I as n,F as m}from"./CommandsAndQueries-DhtC5bjI.js";import{M as p,C as s}from"./blocks-DYnbeidp.js";import"./Tag-21FIv1do.js";import"./index-4Vj58SYs.js";import"./copy-DLKkxH-i.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-bFb8I2oP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-85PSu2U7.js";import"./index-C1e9PFDr.js";import"./index-DWfP0uFj.js";import"./Link-CVh0krje.js";import"./index-DIrfyEUY.js";import"./index-D4MGenX5.js";import"./index-scCH-mdd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vxfHPu95.js";import"./addCustomCSSWithScoping-CO8v9lg_.js";import"./index-Bi6BF3Uk.js";import"./information-IaTUuI6Q.js";import"./sys-enter-2-CEI4onME.js";import"./alert-BmWcWx5H.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXrLIm28.js";import"./delete-BQOwqvtQ.js";import"./settings-CLTeFM-0.js";import"./NoData-BP_iQedv.js";import"./IllustratedMessage-BMqDKwh-.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-6H51KJbV.js";import"./index-rpiOj1sz.js";import"./slim-arrow-down-CzpD64FA.js";import"./Input-BSfjzvfl.js";import"./ResponsivePopoverCommon.css-DllK01Rq.js";import"./ValueStateMessage.css-BrYTvo9q.js";import"./Suggestions.css-CcMxM2i5.js";import"./ListBoxItemGroupTemplate-DPC15YRC.js";import"./ComboBoxItemGroup-CfJ5zYWu.js";import"./ListItemBaseTemplate-CCRCazqr.js";import"./Token-CZjiX32Z.js";import"./ScrollEnablement-CFyU8Uno.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DJmcQ_PK.js";import"./ToggleButton-BMXza2Jq.js";import"./SuggestionItem-DxWrHJGI.js";import"./index-zIfHFTcK.js";import"./Option-CukHBpnA.js";import"./index-D3scHIfq.js";import"./SegmentedButton-CqReU-2R.js";import"./index-B0M_ZK7f.js";import"./Select-DW8ta__u.js";import"./InvisibleMessage-DBYtbN9V.js";import"./slim-arrow-down-m7FIYFg0.js";import"./index-DTehykCe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DpfHhzM9.js";import"./group-2-_-FJm1cs.js";import"./sort-descending-Dy8Q8QRn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C5udeEHl.js";import"./utils-C9tRDhAa.js";import"./index-yk44xtLD.js";import"./index-n4NheVd0.js";import"./index-Bj3494xK.js";import"./navigation-down-arrow-L8ihvSR8.js";import"./navigation-right-arrow-B27p-tiy.js";import"./navigation-right-arrow-B9F4Om5K.js";import"./useCurrentTheme-CtmysqKg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C-vusZiK.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BfFzk8Md.js";import"./paper-plane-D1WmgMA8.js";import"./index-CFSl9CuC.js";import"./less-BYrF-EPS.js";import"./index-BA3PbQUJ.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

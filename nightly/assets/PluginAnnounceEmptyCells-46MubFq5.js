import{j as t}from"./iframe-CtC7gYmF.js";import{useMDXComponents as n}from"./index-Di_URU-1.js";import{I as i,F as m}from"./CommandsAndQueries-DJ8rBoed.js";import{M as p,C as s}from"./blocks-mn43RK2l.js";import"./Tag-DL1jc8MZ.js";import"./index-BQgIK84O.js";import"./copy-qYhvVcV8.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CSxm7AZR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bc0i7q2T.js";import"./index-BjvlOMJE.js";import"./index-C6r9Z_qm.js";import"./Link-DC3Ks00x.js";import"./index-D2-G6hnA.js";import"./index-DbYbEtFi.js";import"./index-BCFTf5Mq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVmORIKm.js";import"./addCustomCSSWithScoping-u1_Fcso4.js";import"./index-B89psySH.js";import"./information-CFH6-U84.js";import"./sys-enter-2-DcKU3U88.js";import"./alert-BgZS6-Ve.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DM5Bmgcy.js";import"./delete-D28JJrjV.js";import"./settings-B_eYDXqs.js";import"./NoData-BEFoMZwu.js";import"./IllustratedMessage-Bm09ehOx.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-zixt0yJO.js";import"./index-BkEdfFg4.js";import"./index-CXyI2saw.js";import"./slim-arrow-down-Dl0Mj9NF.js";import"./Input-BzurqpwY.js";import"./ResponsivePopoverCommon.css-CWluabdp.js";import"./ValueStateMessage.css-DobtBfbj.js";import"./Suggestions.css-C-jhG9YF.js";import"./ListBoxItemGroupTemplate-l7Ysqerl.js";import"./ComboBoxItemGroup-Catkrecl.js";import"./ListItemBaseTemplate-Pa0nc5BR.js";import"./Token-Do6RzTo7.js";import"./ScrollEnablement-2beWlGZ4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-x5B2lMAL.js";import"./ToggleButton-5L56EMme.js";import"./SuggestionItem-OrSC-_5m.js";import"./index-B7-D_cvI.js";import"./Option-BKqKQXEH.js";import"./index-foRMWjrc.js";import"./SegmentedButton-BiIuRVw0.js";import"./index-BHX6355d.js";import"./Select-o8dTzY27.js";import"./InvisibleMessage-DuKRASmz.js";import"./slim-arrow-down-DfNNSKUn.js";import"./index-C-ofIC86.js";import"./index-D6W6u5Ex.js";import"./index-CDXZI8f7.js";import"./index-kkBKNTX1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-N08RslCJ.js";import"./group-2-D9UucbkH.js";import"./sort-descending-mxiKFDhG.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CCsq8n3w.js";import"./utils-CVe0TikA.js";import"./index-FXFh3j7m.js";import"./index-avy9GSV1.js";import"./index-DuYS0cYr.js";import"./navigation-down-arrow-BA6MTBoF.js";import"./navigation-right-arrow-D8GdMajc.js";import"./navigation-right-arrow-0LEru9_G.js";import"./useCurrentTheme-BD4ipeqR.js";import"./index-CuyOYIq5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-oSnS9KDP.js";import"./paper-plane-BYNNQr-L.js";import"./index-4w0RIoWt.js";import"./less-DxqQgulo.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

import{j as t}from"./iframe-BYgl1e3t.js";import{useMDXComponents as n}from"./index-CQiAxnj4.js";import{I as i,F as m}from"./CommandsAndQueries-C7-dfPl9.js";import{M as p,C as s}from"./blocks-DJ2faYOs.js";import"./Tag-WgH8NYoz.js";import"./index-CTjTm5cU.js";import"./copy-IUlUEvra.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D1INNVPG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CoTJrZqp.js";import"./index-DOySy9e2.js";import"./index-BDYs8WoM.js";import"./Link-DcQGtcs6.js";import"./index-B_dT7zj1.js";import"./index-CgZTDeh6.js";import"./index-B7ISCohd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoRR59AB.js";import"./addCustomCSSWithScoping-_jk3dAup.js";import"./index-6Qy6VRAh.js";import"./information-B-QMEMgn.js";import"./sys-enter-2-Bd_kwfmJ.js";import"./alert-zegR4G--.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B1SsSrBU.js";import"./delete-C5OnkOZe.js";import"./settings-B5ioReqo.js";import"./NoData-BiKwYAUE.js";import"./IllustratedMessage-DOGZ92R6.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CGSn29D0.js";import"./index-Es7U-HC0.js";import"./index-CXvLuVUG.js";import"./slim-arrow-down-Dp2ciCQr.js";import"./Input-v1S2StmY.js";import"./ResponsivePopoverCommon.css-Dmb9XfkM.js";import"./ValueStateMessage.css-Y1GqQ7JE.js";import"./Suggestions.css-CUC1ZqxX.js";import"./ListBoxItemGroupTemplate-Dr-udWWW.js";import"./ComboBoxItemGroup-BqJbVdEf.js";import"./ListItemBaseTemplate-BWtuxBSD.js";import"./Token-BEPjAjq5.js";import"./ScrollEnablement-CMlQv5Ns.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DJEaviTe.js";import"./ToggleButton-D2vaCr4G.js";import"./SuggestionItem-DgwBMgIM.js";import"./index-081kxF9g.js";import"./Option-BFY-_C_3.js";import"./index-BCKaAXVJ.js";import"./SegmentedButton-DU2vMA6Y.js";import"./index-BOpxZokY.js";import"./Select-CKEJiYgR.js";import"./InvisibleMessage-zdr3PQOC.js";import"./slim-arrow-down-Ck49N193.js";import"./index-B6cxdJA0.js";import"./index-D3nZrnGX.js";import"./index-y0wRkLFD.js";import"./index-CH5XfXng.js";import"./IconDesign-DXd8PPVF.js";import"./filter-JNJ08E3e.js";import"./group-2-NOFZdPEz.js";import"./sort-descending-dB16txzl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CamwnZjH.js";import"./utils-vU-5DtFT.js";import"./index-DLZVurc2.js";import"./index-Ciih49Gh.js";import"./index-8TbROqqH.js";import"./navigation-down-arrow-By8vG3CK.js";import"./navigation-right-arrow-DTYTg7DL.js";import"./navigation-right-arrow-DjjDogmX.js";import"./useCurrentTheme-Cdnt_qcN.js";import"./index-BVTS8CP-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CWrTCVtk.js";import"./paper-plane-x6srakyu.js";import"./index-ClEI62f3.js";import"./less-DVoR9ng7.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

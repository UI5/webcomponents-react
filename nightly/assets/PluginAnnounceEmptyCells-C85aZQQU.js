import{j as t}from"./iframe-C_rEo4ZD.js";import{useMDXComponents as n}from"./index-dLMhCWaI.js";import{I as i,F as m}from"./CommandsAndQueries-TFkH8H0n.js";import{M as p,C as s}from"./blocks-DvQXQjkC.js";import"./Tag-ZlMS2_of.js";import"./index-B4E4i8qV.js";import"./copy-BTrKUsxF.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DgSgKQOh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bd-vG2gT.js";import"./index-DJ6GK8yt.js";import"./index-Dpn1WNSA.js";import"./Link-B0N3KZaJ.js";import"./index-DMq7DMka.js";import"./index-CG9w7Zbs.js";import"./index-DR-Y0J47.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7u1q_FrR.js";import"./addCustomCSSWithScoping-C6yaVxxt.js";import"./index-DYBTfsDC.js";import"./information-CbbI_Sx9.js";import"./sys-enter-2-BBWU7--K.js";import"./alert-DYblDknT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B_zUtrJj.js";import"./delete-DtTDFgua.js";import"./settings-B6_IIEdU.js";import"./NoData-HFeU9vdV.js";import"./IllustratedMessage-DAhHz2hl.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Dv-Jq1gZ.js";import"./index-vKdyj-Cx.js";import"./index-DWicqfqU.js";import"./slim-arrow-down-Q1-xOpph.js";import"./Input-COIsebiw.js";import"./ResponsivePopoverCommon.css-D3bilPOx.js";import"./ValueStateMessage.css-CDYJlAs8.js";import"./Suggestions.css-yjahHnhL.js";import"./ListBoxItemGroupTemplate-BngMhksN.js";import"./ComboBoxItemGroup-D7NzUjs5.js";import"./ListItemBaseTemplate-Dh7ogNDY.js";import"./Token-BZy6Rg25.js";import"./ScrollEnablement-DM95z1Eg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BINGXEBR.js";import"./ToggleButton-RUOVkV7g.js";import"./SuggestionItem-B5n8pZNS.js";import"./index-CXTiPltu.js";import"./Option-BqwO-aaQ.js";import"./index-C1ZC_OGM.js";import"./SegmentedButton-WYn-A9a6.js";import"./index-YzVMegMk.js";import"./Select-DT2xs0F7.js";import"./InvisibleMessage-C0fd6fX6.js";import"./slim-arrow-down-Dud9vsmt.js";import"./index-DU-o6RSh.js";import"./index-D-Ji_jwM.js";import"./index-CTLp08oh.js";import"./index-vnTdnDSz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-55b-yhx5.js";import"./group-2-COMfsVWc.js";import"./sort-descending-BJZvHW30.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CCJv6-hM.js";import"./utils-rh1His76.js";import"./index-BfJPuqDG.js";import"./index-CYKNWOaQ.js";import"./index-CKHFjLzl.js";import"./navigation-down-arrow-Cz89PnLx.js";import"./navigation-right-arrow-BIVwccgP.js";import"./navigation-right-arrow-xB9Y6ekG.js";import"./useCurrentTheme-YCXbTRxf.js";import"./index-DHVWTc3s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DPLZDSHh.js";import"./paper-plane-BdZdtocj.js";import"./index-OpSSSDwM.js";import"./less-D20nw-Jk.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

import{j as t}from"./iframe-D8-BDgf_.js";import{useMDXComponents as n}from"./index-C9C5bcry.js";import{I as i,F as m}from"./CommandsAndQueries-DdekYtZs.js";import{M as p,C as s}from"./blocks-BAPiaHIf.js";import"./Tag-94uJ1S6F.js";import"./index-Bpoq7VNX.js";import"./copy-D8ENGf86.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-B7FBwI18.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DthRrO7G.js";import"./index-BIskJ-u2.js";import"./index-BR0aC9ux.js";import"./Link-DupRePRp.js";import"./index-Ijyq8fzP.js";import"./index-BC6ra2tn.js";import"./index-BGDf_fSf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bayg2vL_.js";import"./addCustomCSSWithScoping-BMV9S5Iy.js";import"./index-CkF5m5P2.js";import"./information-P4PYqJF7.js";import"./sys-enter-2-COYZiEQ0.js";import"./alert-NgB5MfvZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BozETG9q.js";import"./delete-CGuxUIRO.js";import"./settings-CuToJbU1.js";import"./NoData-D5TRA1yr.js";import"./IllustratedMessage-EI-iyKnx.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DmaA6uVZ.js";import"./index-AvdY3uSx.js";import"./index-9ZsF7KxK.js";import"./slim-arrow-down-p7BE2Hmw.js";import"./Input-D_T5qhyo.js";import"./ResponsivePopoverCommon.css-B0FOPOjZ.js";import"./ValueStateMessage.css-tSbLyNmJ.js";import"./Suggestions.css-CCFYMh7W.js";import"./ListBoxItemGroupTemplate-BrwhGVvC.js";import"./ComboBoxItemGroup-CjkRFxCX.js";import"./ListItemBaseTemplate-AGmUOsl7.js";import"./Token-Dz00xiyc.js";import"./ScrollEnablement-C7ow4jI1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CWDqgljt.js";import"./ToggleButton-DzetVeI0.js";import"./SuggestionItem-rfQMdI2X.js";import"./index-Ce8fTDv-.js";import"./Option-CpzuJS-B.js";import"./index-B8VDamox.js";import"./SegmentedButton-D6lmAoRT.js";import"./index-D7R2LnC5.js";import"./Select-_Bmu2vih.js";import"./InvisibleMessage-T6cHYe91.js";import"./slim-arrow-down-BhY_0Ri7.js";import"./index-BSkcr-Mn.js";import"./index-KuLG5MtP.js";import"./index-BCja9vcE.js";import"./index-D-3bVUSA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ebwsLBYv.js";import"./group-2-u3I6G4vD.js";import"./sort-descending-23WgyaPw.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-QOahos4e.js";import"./utils-BQuRkdbJ.js";import"./index-zsRPmIQK.js";import"./index-DmXBAxhG.js";import"./index-CCDJeSeX.js";import"./navigation-down-arrow-sKnsIYlJ.js";import"./navigation-right-arrow-dBgLFMal.js";import"./navigation-right-arrow-CxjBdfVG.js";import"./useCurrentTheme-BSsb-VWY.js";import"./index-DfDYC92c.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C0KpyHf-.js";import"./paper-plane-DJ7-IFy3.js";import"./index-BvqiMI89.js";import"./less-0nIOA2m3.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

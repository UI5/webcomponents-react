import{j as t}from"./iframe-sx-xxOBR.js";import{useMDXComponents as n}from"./index-BuQKvIRW.js";import{I as i,F as m}from"./CommandsAndQueries-kGwhyxXS.js";import{M as p,C as s}from"./blocks-aDd-3g3c.js";import"./Tag-CA4Gam3K.js";import"./index-Dp445doz.js";import"./copy-XBbKngNP.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CMa_80PA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWZ78BHI.js";import"./index-C5D1K9-k.js";import"./index-DWVCty5U.js";import"./Link-Bcw7GIzc.js";import"./index-CHQv5ZFl.js";import"./index-CHIAWjx6.js";import"./index-CGT84HkW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-PUGMtL6z.js";import"./addCustomCSSWithScoping-ByQ6RofR.js";import"./index-FBk0AP6g.js";import"./information-C7RaeOmw.js";import"./sys-enter-2-CEfOZp2B.js";import"./alert-DrhbDEmw.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CytgXyai.js";import"./delete-DVuKaiV3.js";import"./settings-GTb4An8K.js";import"./NoData-CisJ0jAE.js";import"./IllustratedMessage-ylht49Gh.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BhN76SkG.js";import"./index-BnZ0pG76.js";import"./index-7bEDU5Wz.js";import"./slim-arrow-down-0Axvdn4U.js";import"./Input-CfL161m4.js";import"./ResponsivePopoverCommon.css-URhSdytj.js";import"./ValueStateMessage.css-BKDnJ5vj.js";import"./Suggestions.css-DvZYKoYH.js";import"./ListBoxItemGroupTemplate-BXCNzsvz.js";import"./ComboBoxItemGroup-Cdycyjl-.js";import"./ListItemBaseTemplate-DxDFiEvX.js";import"./Token-BrsOZpIi.js";import"./ScrollEnablement-C51h3RWn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ctu0x0fN.js";import"./ToggleButton-D8TglRo1.js";import"./SuggestionItem-ZEYBTLf8.js";import"./index-CMQ3jpyy.js";import"./Option-C5EHVmK0.js";import"./index-OAs5zmNm.js";import"./SegmentedButton-CaqqCqeD.js";import"./index-B8TC9aWT.js";import"./Select-CXxEzLVO.js";import"./InvisibleMessage-d9wVLZu-.js";import"./slim-arrow-down-DNpkKrnY.js";import"./index-DlAEUI2J.js";import"./index-C6fXq4ZZ.js";import"./index-eIt60uOw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B1AwvrwL.js";import"./group-2-AG8_g4pP.js";import"./sort-descending-jQdQEEX6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D-DMMbFy.js";import"./utils-CQxtN9CL.js";import"./index-D-8sThiq.js";import"./index-Dpz8iXz1.js";import"./index-BJvovWPi.js";import"./navigation-down-arrow-CHrPfOcq.js";import"./navigation-right-arrow-CU5VIR2Q.js";import"./navigation-right-arrow-C4byvkGY.js";import"./useCurrentTheme-C69-ISE_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BcwjmFpo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CV_tHasf.js";import"./paper-plane-BpEKW78p.js";import"./index-twVhy0ce.js";import"./less-DzybJbHR.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

import{j as t}from"./iframe-BB4qEXD6.js";import{useMDXComponents as n}from"./index-Du8_Rn8P.js";import{I as i,F as m}from"./CommandsAndQueries-DRsaMJRB.js";import{M as p,C as s}from"./blocks-CR8KOJrJ.js";import"./Tag-Da7QnCDv.js";import"./index-DdTPxxL_.js";import"./copy-BVMnHcDg.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BeJL7Ye6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-x2cXHq8y.js";import"./index-9Py2403r.js";import"./index-CsmFqYDM.js";import"./Link-BYUEfY7R.js";import"./index-Dt_2dhRA.js";import"./index-DMHUWYeC.js";import"./index-CztWxO-c.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bzv1Zaa7.js";import"./addCustomCSSWithScoping-Cbj-6aXb.js";import"./index-Dpli1QB-.js";import"./information-Y0x5W-OX.js";import"./sys-enter-2-BJKr7qQ1.js";import"./alert-BQZZbhbR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-erJBQNRZ.js";import"./delete-D5Bux8E7.js";import"./settings-BB1PJ6vP.js";import"./NoData-BAy4r6V2.js";import"./IllustratedMessage-Cp617NHY.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BPmeBzvN.js";import"./index-CA-cd2np.js";import"./index-AswMmsDf.js";import"./slim-arrow-down-BddUJ-KN.js";import"./Input-DkXdapB6.js";import"./ResponsivePopoverCommon.css-Dw9E0nMz.js";import"./ValueStateMessage.css-BkhABoMh.js";import"./Suggestions.css-BC1EOLh5.js";import"./ListBoxItemGroupTemplate-HpSvs65o.js";import"./ComboBoxItemGroup-CCrdSIbE.js";import"./ListItemBaseTemplate-CAROCz5m.js";import"./Token-DoaTlhno.js";import"./ScrollEnablement-BU_OfE9O.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CI0I5uqQ.js";import"./ToggleButton-BdNP-MBf.js";import"./SuggestionItem-DeZkVwUY.js";import"./index-CmahwXl7.js";import"./Option-BGTVK_my.js";import"./index-9-V0BX8k.js";import"./SegmentedButton-BuoqzDHW.js";import"./index-_XZyBcjC.js";import"./Select-LlNkV-fW.js";import"./InvisibleMessage-DyYsNy9h.js";import"./slim-arrow-down-BARLwaMW.js";import"./index-BK2SG_SP.js";import"./index-9GnEvteS.js";import"./index-OBDc_NcL.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DsHNEEGx.js";import"./group-2-CrLwAnmS.js";import"./sort-descending-0WZUg8PX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-1qNsr_an.js";import"./utils-BdVBr4pQ.js";import"./index-DIzDIuZy.js";import"./index-BRJ-40Zh.js";import"./index-DB-fTerp.js";import"./navigation-down-arrow-VkG8_yjV.js";import"./navigation-right-arrow-HRIp1p54.js";import"./navigation-right-arrow-T0LxulNL.js";import"./useCurrentTheme-D6vYZD-2.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C2hZK3d5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cj10AoIb.js";import"./paper-plane-BYFBOW_O.js";import"./index-DMqgnaw_.js";import"./less-B1wulFXz.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

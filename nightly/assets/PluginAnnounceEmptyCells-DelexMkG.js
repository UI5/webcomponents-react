import{j as t}from"./iframe-DwhXZ5O1.js";import{useMDXComponents as n}from"./index-Dr45Q_rW.js";import{I as i,F as m}from"./CommandsAndQueries-CZ-0KT78.js";import{M as p,C as s}from"./blocks-EKNE_kOu.js";import"./Tag-CK1DTCaY.js";import"./index-C0PXwN3M.js";import"./copy-CMcdSlV7.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BPXE2sY9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5LjiSCx.js";import"./index-DsUvOdfw.js";import"./index-BwctDZ8k.js";import"./Link-jbv8jxOr.js";import"./index-D0dcM15D.js";import"./index-EBvmFTXF.js";import"./index-CczjdlqU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjLi0LGT.js";import"./addCustomCSSWithScoping-BuPMXfqj.js";import"./index-DzVbmGXs.js";import"./information-BtytWan6.js";import"./sys-enter-2-PzhKRuDm.js";import"./alert-Ul17j7cb.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQaPuMj9.js";import"./delete-CZFi7vv1.js";import"./settings-DaEPRpNY.js";import"./NoData-KA-UEncs.js";import"./IllustratedMessage-BNojrsJJ.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DzljgzTe.js";import"./index-DZZVdq38.js";import"./index-5cjhwMF8.js";import"./slim-arrow-down-D11Ifl1b.js";import"./Input-BVBpS4hN.js";import"./ResponsivePopoverCommon.css-D9EhSfWF.js";import"./ValueStateMessage.css-DKKJr_ad.js";import"./Suggestions.css-5lOsSJat.js";import"./ListBoxItemGroupTemplate-4sKEf2MS.js";import"./ComboBoxItemGroup-BPeqzv7K.js";import"./ListItemBaseTemplate-AqdYmEyg.js";import"./Token-Cj9wPA0C.js";import"./ScrollEnablement-DJUo6QFq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-F-hxCo2t.js";import"./ToggleButton-CrmFwEL9.js";import"./SuggestionItem-3xgWZymy.js";import"./index-B_utt3Vf.js";import"./Option-daf91KbS.js";import"./index-BphwTy74.js";import"./SegmentedButton-9GqZ-CP5.js";import"./index-Du47Xxv-.js";import"./Select-9aXmxiVY.js";import"./InvisibleMessage-CpREcibi.js";import"./slim-arrow-down-DdhS0vfb.js";import"./index-xZ2ygxdI.js";import"./index-Jg-2yZX5.js";import"./index-xu1m-Uev.js";import"./index-DIEkdcjg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CQFrmHwe.js";import"./group-2-DNdQ0Z2B.js";import"./sort-descending-Dzm0Tdo-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hE-oQ1Oe.js";import"./utils-DY6mkGAC.js";import"./index-D4zxb5Y9.js";import"./index-D9fLrxBi.js";import"./index-BJZJ7I5D.js";import"./navigation-down-arrow-D_-UgM8Y.js";import"./navigation-right-arrow-6VwOC1wR.js";import"./navigation-right-arrow-CCnD2Vrj.js";import"./useCurrentTheme-fCt6jlcj.js";import"./index-BpYcsL8v.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-961lF1Cj.js";import"./paper-plane-f20_J01s.js";import"./index-BsTf-Gaj.js";import"./less-Ceh_NYtF.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

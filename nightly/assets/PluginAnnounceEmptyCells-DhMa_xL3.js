import{j as t}from"./iframe-B_Wb0L56.js";import{useMDXComponents as n}from"./index-307InIrT.js";import{I as i,F as m}from"./CommandsAndQueries-DZD1CEEu.js";import{M as p,C as s}from"./blocks-BG9i3u3d.js";import"./Tag-BJqa-9S6.js";import"./index-IQMTO30I.js";import"./copy-B8s392ic.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D2vA9uBw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C1-6BxML.js";import"./index-CTXSjodk.js";import"./index-6_sfbhaU.js";import"./Link-mQObbT4s.js";import"./index-B6cUzUVp.js";import"./index-DKVx4eTx.js";import"./index-BzKebhUC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CNNLg8qF.js";import"./addCustomCSSWithScoping-CLC5si1k.js";import"./index-DOJ9CtkL.js";import"./information-CNVdTL1g.js";import"./sys-enter-2-YeZbpBvt.js";import"./alert-BrJW2BAH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D0ei0ZuD.js";import"./delete-yizw3Nd_.js";import"./settings-Z8JiUEHk.js";import"./NoData-BXXzYKHm.js";import"./IllustratedMessage-C-PTvkiQ.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Dl5aZcs3.js";import"./index-HqvTsmff.js";import"./index-DRaRyi79.js";import"./slim-arrow-down-C0o9FaNn.js";import"./Input-DOSA1gj5.js";import"./ResponsivePopoverCommon.css-Bv2xf9qt.js";import"./ValueStateMessage.css-0XZoqLsO.js";import"./Suggestions.css-DyTJTEQX.js";import"./ListBoxItemGroupTemplate-Dm-XJTSL.js";import"./ComboBoxItemGroup-BiM99Ixa.js";import"./ListItemBaseTemplate-D-PBqwpz.js";import"./Token-BHMMMhCD.js";import"./ScrollEnablement-CH2t3NPn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dko9W1lQ.js";import"./ToggleButton-CRq8bV8B.js";import"./SuggestionItem-8yq177mX.js";import"./index-DSsZL42Q.js";import"./Option-T3GgrmoY.js";import"./index-B3RRxnRL.js";import"./SegmentedButton-DUyioROv.js";import"./index-D5_ZfJ5N.js";import"./Select-Bf7b8VrB.js";import"./InvisibleMessage-D0Kxo4HB.js";import"./slim-arrow-down-DqloInc9.js";import"./index-DkWPeISK.js";import"./index-2TWARYFI.js";import"./index-744O76gW.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CobfnnXw.js";import"./group-2-DMZc4frg.js";import"./sort-descending-C8Z32LYO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BnfHDuuy.js";import"./utils-C8OSDLXz.js";import"./index-CaT9ZYZr.js";import"./index-Bq2hbA6h.js";import"./index-GUfgErK1.js";import"./navigation-down-arrow-CQ5WMHeX.js";import"./navigation-right-arrow-B7l-Sd1s.js";import"./navigation-right-arrow-mIKtPw9Z.js";import"./useCurrentTheme-D8exwLuJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BSVh1B3z.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-7XnIEYeH.js";import"./paper-plane-C-rRvcez.js";import"./index-BplSwyVb.js";import"./less-Byci0Gnt.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

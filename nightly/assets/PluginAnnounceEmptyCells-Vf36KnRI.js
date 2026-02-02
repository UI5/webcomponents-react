import{j as t}from"./iframe-D9fHiNXF.js";import{useMDXComponents as n}from"./index-DRx499Oz.js";import{I as i,F as m}from"./CommandsAndQueries-CDyFXIce.js";import{M as p,C as s}from"./blocks-BHC48FnS.js";import"./Tag-D1pdGQFQ.js";import"./index-CsAQ2Eng.js";import"./copy-FG9bHXhV.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Qm_vQfsf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CJoLxfl_.js";import"./index-BYfLRpIA.js";import"./index-79vX-IjV.js";import"./Link-UWQK2ZBb.js";import"./index-D9W7JLGJ.js";import"./index-C7nfqaAP.js";import"./index-DN7QVpUQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOEmcw1X.js";import"./addCustomCSSWithScoping-QhFRL0Bb.js";import"./index-BVc7ik8a.js";import"./information-wNu5DDkV.js";import"./sys-enter-2-NNUjaus9.js";import"./alert-DnsJPzcv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BPAjTpyE.js";import"./delete-kRoeeufp.js";import"./settings-BjOnEk3Y.js";import"./NoData-DS929yuO.js";import"./IllustratedMessage-D7rcrpEV.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-By9GXzdr.js";import"./index-BIpQKVrj.js";import"./index-uvfEns-9.js";import"./slim-arrow-down-COoxlr3U.js";import"./Input-CCJrpN8k.js";import"./ResponsivePopoverCommon.css-B2qfRnNF.js";import"./ValueStateMessage.css-DyMGuFCu.js";import"./Suggestions.css-s007qcu9.js";import"./ListBoxItemGroupTemplate-fS2c8S8u.js";import"./ComboBoxItemGroup-w20Oyw65.js";import"./ListItemBaseTemplate-BhNv4eWh.js";import"./Token-CvyNfotg.js";import"./ScrollEnablement-COS0Rc-8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BBXUErcD.js";import"./ToggleButton-CVAyR1od.js";import"./SuggestionItem-BbBOeYnY.js";import"./index-BvApMHkq.js";import"./Option-55orDd_d.js";import"./index-D-dRLaQQ.js";import"./SegmentedButton-Dtg_OeYG.js";import"./index-Cw3jzX1x.js";import"./Select-CF4_xxsY.js";import"./InvisibleMessage-sWP7KXqk.js";import"./slim-arrow-down-CGx4RFlV.js";import"./index-Bnwbq-C5.js";import"./index-56WZLY9b.js";import"./index-BrYCVZew.js";import"./index-C-gG0abr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DTaVzY2z.js";import"./group-2-ByHTkrwd.js";import"./sort-descending-CnESAHVK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DK0_Jxfh.js";import"./utils-4XJByc2K.js";import"./index-Mf30Azwl.js";import"./index-DWP_RQMm.js";import"./index-PLRKK6I8.js";import"./navigation-down-arrow-UUvc_8Lg.js";import"./navigation-right-arrow-Uxxzktt1.js";import"./navigation-right-arrow-bK8_sR2Z.js";import"./useCurrentTheme-DlC_INVQ.js";import"./index-uBbepzyZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ByZPFV9T.js";import"./paper-plane-oz9CuSrg.js";import"./index-Bxyp0YjT.js";import"./less-QRjFxrUk.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

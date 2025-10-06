import{j as t}from"./iframe-CK4LOCvj.js";import{useMDXComponents as i}from"./index-BqLtYoST.js";import{I as n,F as m}from"./CommandsAndQueries-BwelsOM0.js";import{M as p,C as s}from"./blocks-ZjQWLnry.js";import"./Tag-BHHtXuEO.js";import"./index-BFAmBcJW.js";import"./copy-BE3AKkMg.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-nI75W6Tx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CW1io29o.js";import"./index-C1w0eQlR.js";import"./index-GePrpfQg.js";import"./Link-C72gLrWy.js";import"./index-BUxn-N40.js";import"./index-BKUd1pYK.js";import"./index-DPjO4Ph3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6YKOrWJ.js";import"./addCustomCSSWithScoping-CyChXc_w.js";import"./index-BIYQNCb4.js";import"./information-DVinbumE.js";import"./sys-enter-2-CxZg2yn9.js";import"./alert-q3RCUipA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChmyOthR.js";import"./delete-CLx7glTK.js";import"./settings-ayEvMgd1.js";import"./NoData-T4iCewut.js";import"./IllustratedMessage-Xv-ZhCNN.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DBPzYJyP.js";import"./index-D298oQB3.js";import"./slim-arrow-down-DWzWgWFr.js";import"./Input-iHhFMUKe.js";import"./ResponsivePopoverCommon.css-Dp8lV0BH.js";import"./ValueStateMessage.css-BPb3CYnx.js";import"./Suggestions.css-DJt8IkfU.js";import"./ListBoxItemGroupTemplate-DDfjb_sz.js";import"./ComboBoxItemGroup-rCQ_Opmd.js";import"./ListItemBaseTemplate-hDgjT7Em.js";import"./Token-BpRQuSqj.js";import"./ScrollEnablement-B4EaRXxx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-LFJPBSzx.js";import"./ToggleButton-nsqCEMCk.js";import"./SuggestionItem-BFaG5LNL.js";import"./index-Cph68JY2.js";import"./Option-Bqy7W0j8.js";import"./index-D_lH--Ko.js";import"./SegmentedButton-Lp1qLZgk.js";import"./index-DasWYOI-.js";import"./Select-D8-eeFJR.js";import"./InvisibleMessage-DCPpUX1P.js";import"./slim-arrow-down-Va97yZ0D.js";import"./index-sQs2olcQ.js";import"./index-Cm2ZTwYm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-vs2PrjuQ.js";import"./group-2-Cs4zeWBJ.js";import"./sort-descending-CRZRYHRm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CNdNGQRA.js";import"./utils-BzxUxqTh.js";import"./index-iZ4-PPSv.js";import"./index-CHUetHtW.js";import"./index-C-2t_3GF.js";import"./navigation-down-arrow-BlzDPZtH.js";import"./navigation-right-arrow-Dd9NdxpN.js";import"./navigation-right-arrow-DZnGmzmd.js";import"./useCurrentTheme-CyiUas-f.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cb3L2AXo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CPg5JnzM.js";import"./paper-plane-CvZdjZdd.js";import"./index-CWdAvJez.js";import"./less-CgzrIY7E.js";import"./index-Dwfx48-L.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
`,t.jsx(m,{})]})}function Lt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Lt as default};

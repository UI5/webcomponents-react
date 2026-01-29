import{j as t}from"./iframe-COKmt9GX.js";import{useMDXComponents as n}from"./index-CzY2e8So.js";import{I as i,F as m}from"./CommandsAndQueries-DSaWGMGq.js";import{M as p,C as s}from"./blocks-BC1CQ7iN.js";import"./Tag-DloN_KbF.js";import"./index-C27X2XUm.js";import"./copy-CyMKHNyy.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Jogl8FYp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQHeIIHf.js";import"./index-C6DL1JMC.js";import"./index-DjGJsOok.js";import"./Link-BA2-5m1C.js";import"./index-BVPy0Kvc.js";import"./index-CfIzOoJC.js";import"./index-D5ATbVNg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CXoeJUKj.js";import"./addCustomCSSWithScoping-CbQo03JJ.js";import"./index-WnbZc56M.js";import"./information-CfFvhrkY.js";import"./sys-enter-2-BMhsQaT7.js";import"./alert-Cbc0R2SK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D6_PiP7Z.js";import"./delete-CoicSmVL.js";import"./settings-C_m_IFT1.js";import"./NoData-DTXeTJ5s.js";import"./IllustratedMessage-fTHXJSJn.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Dd1xDcBR.js";import"./index-DF25Qnlr.js";import"./index-BhMCzWcn.js";import"./slim-arrow-down-B87n6-mS.js";import"./Input-BceWkqxg.js";import"./ResponsivePopoverCommon.css-CcjK_Jcr.js";import"./ValueStateMessage.css-DaEL7h-V.js";import"./Suggestions.css-9PKvquaD.js";import"./ListBoxItemGroupTemplate-DW5Ywa3P.js";import"./ComboBoxItemGroup-D-NsDMkE.js";import"./ListItemBaseTemplate-CgxVQe7-.js";import"./Token-CKythk2p.js";import"./ScrollEnablement-D7MLciOS.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BPKpO2-G.js";import"./ToggleButton-9gCC_TTJ.js";import"./SuggestionItem-DR-cU1_Q.js";import"./index-FkMp5OCm.js";import"./Option-Ch8TBZkA.js";import"./index-Dn9GktW2.js";import"./SegmentedButton-_N8TVKLb.js";import"./index-5p0Gpf8D.js";import"./Select-BFd8ury_.js";import"./InvisibleMessage-DmmsUdM7.js";import"./slim-arrow-down-5YiILlYo.js";import"./index-2YlEmuXv.js";import"./index-qF8GZWDg.js";import"./index-DwH7fqA2.js";import"./index-DhVmRSsQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BHypl9jb.js";import"./group-2-DEGE6ykx.js";import"./sort-descending-CT2T5JwK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C2iRiHRU.js";import"./utils-Dy6UBNOH.js";import"./index-qVJXdvv_.js";import"./index-DGpRIpiu.js";import"./index-DBlqkpsO.js";import"./navigation-down-arrow-RRwxkr-f.js";import"./navigation-right-arrow-BoUWLgXr.js";import"./navigation-right-arrow-CZWnArrm.js";import"./useCurrentTheme-Bp534Rms.js";import"./index-ByNYUvQ0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL--2n9yHX1.js";import"./paper-plane-MxlRUPJs.js";import"./index-DP2Iyis7.js";import"./less-DrZK_gXX.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

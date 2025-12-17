import{j as t}from"./iframe-T7Wqg8UQ.js";import{useMDXComponents as n}from"./index-B1_Kr1qi.js";import{I as i,F as m}from"./CommandsAndQueries-BErUSC1w.js";import{M as p,C as s}from"./blocks-AtAGVbf3.js";import"./Tag-gMzT9-kJ.js";import"./index-1-SdBrMb.js";import"./copy-D9NRoizO.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DAAke3ZA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Do-8N8-4.js";import"./index-CSyU4Rfq.js";import"./index-B0vEPx1d.js";import"./Link-CS0U2zW0.js";import"./index-CuClVFCS.js";import"./index-Cpwr9m7H.js";import"./index-C36GduEZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ctd-T3Yg.js";import"./addCustomCSSWithScoping-SxSnbZxk.js";import"./index-OjQEK6Sv.js";import"./information-fYaYVBJG.js";import"./sys-enter-2-CqaPP6tK.js";import"./alert-DdeG0Okn.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CSqDBAEy.js";import"./delete-CqiXpIEJ.js";import"./settings--cZn65wn.js";import"./NoData-BE6qeMCb.js";import"./IllustratedMessage-BQ0ZIUUp.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CYDsbuj_.js";import"./index-TWAke1eS.js";import"./index-BpBMXpkU.js";import"./slim-arrow-down-D7zmqhuW.js";import"./Input-D7QMmGXc.js";import"./ResponsivePopoverCommon.css-BRMWd7_E.js";import"./ValueStateMessage.css-Cfl8bS23.js";import"./Suggestions.css-U--NnjnQ.js";import"./ListBoxItemGroupTemplate-Bh39jP1s.js";import"./ComboBoxItemGroup-DV-WPBD_.js";import"./ListItemBaseTemplate-BPb_roTh.js";import"./Token-Cc25iGzp.js";import"./ScrollEnablement-CeUSVHqn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-4LZiCxap.js";import"./ToggleButton-CytToCRZ.js";import"./SuggestionItem-d8PXQFzf.js";import"./index-5f7D5wvz.js";import"./Option-CJ57-p9L.js";import"./index-Cu0y023n.js";import"./SegmentedButton-Dsv1B1Jn.js";import"./index-BvUZdQGi.js";import"./Select-CF3mjJ0q.js";import"./InvisibleMessage-DMA9x9s-.js";import"./slim-arrow-down-CByenjbS.js";import"./index-DFMQojpQ.js";import"./index-BBdOPVh7.js";import"./index-4aM9WHD0.js";import"./index-SY1E5rmV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CD2P2e-A.js";import"./group-2-BPnOfmzi.js";import"./sort-descending-BMHrXFRh.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BXctqxI6.js";import"./utils-hMIBeM6k.js";import"./index-DVHuLLp4.js";import"./index-Drzpx-Ob.js";import"./index-Dz4XgqVg.js";import"./navigation-down-arrow-B_G4Lrxi.js";import"./navigation-right-arrow-BbB8iX7b.js";import"./navigation-right-arrow-DaBucJny.js";import"./useCurrentTheme-DpT-DVZV.js";import"./index-DD5DI72I.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-JoNKXFI1.js";import"./paper-plane-9aEL_IQq.js";import"./index-htvP9kxx.js";import"./less-4qpViz2I.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

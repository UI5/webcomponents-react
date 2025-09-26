import{j as t}from"./iframe-lqcNyI1T.js";import{useMDXComponents as i}from"./index-B0DX3imF.js";import{I as n,F as m}from"./CommandsAndQueries-DzJmAZem.js";import{M as p,C as s}from"./blocks-BpHyZEcb.js";import"./Tag-gBw-lmpH.js";import"./index-CZPzb4BW.js";import"./copy-CC4Y44ID.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-4PBPCegN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dd_PfWwN.js";import"./index-DgG0lX0j.js";import"./index-D-4WJNaw.js";import"./Link-1aRA3aDD.js";import"./index-DHQLUBCy.js";import"./index-B4-GBSDE.js";import"./index-CiJkSLrj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D20vcD6H.js";import"./addCustomCSSWithScoping-CSRUaJeQ.js";import"./index-BwE7J1MZ.js";import"./information-04kgllMP.js";import"./sys-enter-2-DUAlyrLn.js";import"./alert-BKOHJXpG.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C23xYIkD.js";import"./delete-BW14U-oh.js";import"./settings-C_Arqzcj.js";import"./NoData-BWB1BeqC.js";import"./IllustratedMessage-mqMlzviO.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-ClaLYbCr.js";import"./index-CrdqdyqA.js";import"./slim-arrow-down-BdAy8DJu.js";import"./Input-BosrlKUD.js";import"./ResponsivePopoverCommon.css-rVzp8R0x.js";import"./ValueStateMessage.css-DgSFjqSc.js";import"./Suggestions.css-CwUuZGb0.js";import"./ListBoxItemGroupTemplate-CFQN3b19.js";import"./ComboBoxItemGroup-vbV7jSGm.js";import"./ListItemBaseTemplate-9qWHR6_L.js";import"./Token-C1zBJwar.js";import"./ScrollEnablement-BXvjXYp4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DubsfjRL.js";import"./ToggleButton-BdlhECZc.js";import"./SuggestionItem-C3flXLvO.js";import"./index-DEefWD7h.js";import"./Option-B2iZldHA.js";import"./index-DbQw4X54.js";import"./SegmentedButton-I26Ed474.js";import"./index-Dvv9BM37.js";import"./Select-hm_HJkmj.js";import"./InvisibleMessage-DZjX4vEQ.js";import"./slim-arrow-down-D04fAz1I.js";import"./index-CAnVov9v.js";import"./IconDesign-DXd8PPVF.js";import"./filter-bcHOcALN.js";import"./group-2-C-sqScKq.js";import"./sort-descending-CIWa4L55.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DLalqhgy.js";import"./utils-BDJXQz-M.js";import"./index-6hZ21krh.js";import"./index-Csa8MFf6.js";import"./index-C7HMOshY.js";import"./navigation-down-arrow-BIjWvyvQ.js";import"./navigation-right-arrow-Ds7jKwyc.js";import"./navigation-right-arrow-rMJaXdAW.js";import"./useCurrentTheme-JW54ydGk.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BTa33zaZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cjl42E3c.js";import"./paper-plane-34M37_jm.js";import"./index-D6UWP29d.js";import"./less-TeO93Nja.js";import"./index-B8H-Ih5E.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
`,t.jsx(m,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};

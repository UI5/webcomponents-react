import{j as t}from"./iframe-BLa6WP-Y.js";import{useMDXComponents as i}from"./index-DmyZ7oDn.js";import{I as n,F as m}from"./CommandsAndQueries--XH3UvBD.js";import{M as p,C as s}from"./blocks-B3YWg1xO.js";import"./Tag-BvWs66nb.js";import"./index-BQvFUkOP.js";import"./copy-DLqEfzA0.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-mcIkmlOc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BxQvAqCu.js";import"./index-Dw-Jiryq.js";import"./index-CMlbrigZ.js";import"./Link-DFlOAi3a.js";import"./addCustomCSSWithScoping-EByzACcK.js";import"./index-o1aXZ_iF.js";import"./index-9PttVNs-.js";import"./index-CD532uFx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DtI0CwXV.js";import"./index-DuOzvotb.js";import"./information-CXW8jYRn.js";import"./sys-enter-2-6G8ZBE6B.js";import"./alert-DchNyR7C.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DoYaF1dP.js";import"./delete-CsD0pt1u.js";import"./settings-Cy0GWgCZ.js";import"./NoData-CMKGsDFP.js";import"./IllustratedMessage-DQknMDe-.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Dz3NOO0O.js";import"./index-CcTeAWDa.js";import"./slim-arrow-down-DW1bb7Yi.js";import"./Input-DLv0_pwH.js";import"./ResponsivePopoverCommon.css-Ce2_DLGD.js";import"./ValueStateMessage.css-DNcxHwSS.js";import"./Suggestions.css-5bToJR4X.js";import"./ListBoxItemGroupTemplate-DcN5U3H5.js";import"./ComboBoxItemGroup-CzoRyeO7.js";import"./ListItemBaseTemplate-SBDokyJS.js";import"./Token-bqiPRfEa.js";import"./ScrollEnablement-8GN9BE9k.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DfnsK1Kh.js";import"./ToggleButton-BilcMZKx.js";import"./SuggestionItem-CpI1i8qK.js";import"./index-mOpeWcnG.js";import"./Option-X5MvP6Ez.js";import"./index-Lxr2utNH.js";import"./SegmentedButton-DaKVnc87.js";import"./index-yYitgPgC.js";import"./Select-DFDzYy_c.js";import"./InvisibleMessage-BbXAREzN.js";import"./slim-arrow-down-CmTuLlvX.js";import"./useIsRTL-TNKtGqcG.js";import"./index-CgaQ0ztb.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BbnAHyQW.js";import"./group-2-DRCf6JID.js";import"./sort-descending-C1zU_0_u.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D5daVLzH.js";import"./utils-Dw1swK2v.js";import"./index-C4JZANr3.js";import"./index-CQlrF-yO.js";import"./index-CEje_66r.js";import"./navigation-down-arrow-BqiSx__M.js";import"./navigation-right-arrow-bAsVms0n.js";import"./navigation-right-arrow-TGhfCMRD.js";import"./useCurrentTheme-2htwq5Wd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BjE4yXnU.js";import"./debounce-D7W5PopO.js";import"./paper-plane-4_dk95Mh.js";import"./index-CyNfhGJe.js";import"./less-DNXIrkgN.js";import"./index-CkHcdUia.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

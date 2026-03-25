import{j as t}from"./iframe-iYU5spAk.js";import{useMDXComponents as i}from"./index-BzD2IrSQ.js";import{I as n}from"./CommandsAndQueries-BRXiW4dn.js";import{M as m,C as p}from"./blocks-BI7QxqeB.js";import"./Tag-BusGuvh6.js";import"./index-Cq3_Xc9J.js";import"./copy-DCVJQWNc.js";import{F as s}from"./Footer-BTHx_eA0.js";import"./PageNotFound-C8n2TUKE.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BqAo2gsQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DNrZNopF.js";import"./index-D_eTNKvK.js";import"./index-9CESre8T.js";import"./index-B5WhhwGp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-LCeBFvC9.js";import"./addCustomCSSWithScoping-Pos0RdE7.js";import"./index-DqeVDsPv.js";import"./index-BWMAVmh3.js";import"./index-DUNXsDMC.js";import"./information-D0J7LS4n.js";import"./sys-enter-2-De6BCoo5.js";import"./alert-Dh59S2xt.js";import"./index-B2lbw_UO.js";import"./Illustrations-B_rOPeGm.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Txjlor_N.js";import"./delete-zxvfSezM.js";import"./settings-DOd8m396.js";import"./NoData-CS38cQi8.js";import"./NoFilterResults-Dx8cQ-OW.js";import"./index-BIo60fMs.js";import"./IllustratedMessage-DcLV6jZH.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D-iEqBAI.js";import"./Input-CPcEboco.js";import"./ResponsivePopoverCommon.css-MzYjXUbZ.js";import"./ValueStateMessage.css-CiiA2s3E.js";import"./Suggestions.css-CltR8Y_x.js";import"./ListBoxItemGroupTemplate-ClX62AQ5.js";import"./ComboBoxItemGroup-KbtZd36F.js";import"./ListItemBaseTemplate-D-bV5LoH.js";import"./Token-DllBa28z.js";import"./ScrollEnablement-BzR7P6Ev.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-cf92RqQJ.js";import"./ToggleButton-XRDOJStY.js";import"./multiselect-all-B_UBRtV6.js";import"./SuggestionItem-D5XWHwVx.js";import"./index-COsKSNFh.js";import"./Option-WemDvLcT.js";import"./index-DhEuHp6p.js";import"./SegmentedButton-CoSscdvL.js";import"./index-Duk2RCOb.js";import"./Select-DotgCPCG.js";import"./InvisibleMessage-BqlPeigB.js";import"./index-CXcrzFui.js";import"./index-Djsl4Kkv.js";import"./index-QmgoYX5D.js";import"./index-BO0iryfq.js";import"./IconDesign-DXd8PPVF.js";import"./filter-VYJ9nzZL.js";import"./group-2-B54BU3OI.js";import"./sort-descending-C1fJgBpm.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BdYyxTLQ.js";import"./utils-BaGgi4t6.js";import"./index-DyWQ4Yet.js";import"./index-WwMXFCkN.js";import"./index-CjSo2Ws_.js";import"./navigation-down-arrow-CaKxhXWN.js";import"./navigation-right-arrow-D1Pf3y64.js";import"./navigation-right-arrow-L_9IiXO-.js";import"./useCurrentTheme-B6gq1VrI.js";import"./index-CQs_LxQY.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CmURE4St.js";import"./paper-plane-BkJk1PQY.js";import"./index-CdP1nluN.js";import"./less-CMvrZdAD.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{sourceState:"none",of:l}),`
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
`,t.jsx(s,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};

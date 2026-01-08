import{j as t}from"./iframe-D_OBvCft.js";import{useMDXComponents as n}from"./index-B_S0g7ME.js";import{I as i,F as m}from"./CommandsAndQueries-BZ-3zH0-.js";import{M as p,C as s}from"./blocks-DYLPI3Ra.js";import"./Tag-DR4TT7Tz.js";import"./index-DHlu5N_c.js";import"./copy-DQgNVeWA.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-zK04HXJH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BKEI8mWg.js";import"./index-S0He3U_1.js";import"./index-CTJhmHbW.js";import"./Link-ubTR8kdT.js";import"./index-CgmBhunw.js";import"./index-CT9F8jkM.js";import"./index-BxzyntYh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CYQDt8WV.js";import"./addCustomCSSWithScoping-DGwiZ6Qr.js";import"./index-Dss8LBVA.js";import"./information-PDp2XxR-.js";import"./sys-enter-2-CTjcKc0d.js";import"./alert-BulXizwQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqurhSOy.js";import"./delete-Ctn0kSBL.js";import"./settings-z7-rjv9j.js";import"./NoData-C5ntZU5O.js";import"./IllustratedMessage-id6nb7wX.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BKoG-d3a.js";import"./index-B_K9wBMY.js";import"./index-DP-FcseT.js";import"./slim-arrow-down-CHulNvxE.js";import"./Input-i8SqafG1.js";import"./ResponsivePopoverCommon.css-0qhZ8h5z.js";import"./ValueStateMessage.css-LMTZLgJb.js";import"./Suggestions.css-C2T_AAKW.js";import"./ListBoxItemGroupTemplate-CcplzrLE.js";import"./ComboBoxItemGroup-3PYa3s30.js";import"./ListItemBaseTemplate-BHxGfkuD.js";import"./Token-a1Z2dlMc.js";import"./ScrollEnablement-BPZ45FDB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_4_wWWa.js";import"./ToggleButton-BqO_3v_4.js";import"./SuggestionItem-CG8vQS4D.js";import"./index--Gn4VUxm.js";import"./Option-D0b-vRt9.js";import"./index-cCJWZwrT.js";import"./SegmentedButton-Dhi24GCC.js";import"./index-BR4X8nJj.js";import"./Select-BLV-PVqf.js";import"./InvisibleMessage-C_0GSe_o.js";import"./slim-arrow-down-CAFzZJk4.js";import"./index-Dk3pumqB.js";import"./index-xeY4HnPc.js";import"./index-CAb0cCCw.js";import"./index-DtrCS052.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BdUi0j8b.js";import"./group-2-B-T-Csy_.js";import"./sort-descending-DEst_JzS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DMORGjeP.js";import"./utils-GHixDqEj.js";import"./index-BYrxTP19.js";import"./index-CqnoKVS3.js";import"./index-BqnBaVKU.js";import"./navigation-down-arrow-DTEGx91w.js";import"./navigation-right-arrow-D2dYA2Ao.js";import"./navigation-right-arrow-cH8Y4Elf.js";import"./useCurrentTheme-CxGXlk1H.js";import"./index-Clf9WQAr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C-113p4z.js";import"./paper-plane-78D-pvJG.js";import"./index-xk-p1hJ3.js";import"./less-oocybHBg.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

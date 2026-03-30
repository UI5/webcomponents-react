import{j as t}from"./iframe-vcfuMEkL.js";import{u as i,M as n,C as m}from"./blocks-CzMAxM7Q.js";import{I as p}from"./CommandsAndQueries-BLcCgFEg.js";import"./Tag-D032LoeK.js";import"./index-D5a6L_9E.js";import"./copy-CTlr8Wzd.js";import{F as s}from"./Footer-B8luth97.js";import"./PageNotFound-DOCrqF52.js";import{PluginAnnounceEmptyCells as a}from"./AnalyticalTableHooks.stories-D0S5SWUQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DAzSfgZb.js";import"./index-wWex-oQF.js";import"./index-Cbp9ERwo.js";import"./index-BMMtw8na.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7Mkof57M.js";import"./addCustomCSSWithScoping-BGtNyFBv.js";import"./index-CY4n9r1V.js";import"./index-BgY_pwT7.js";import"./index-C5MkOTN8.js";import"./information-DGdr23sZ.js";import"./sys-enter-2-BtTk1NF5.js";import"./alert-C2W9yseD.js";import"./index-CPCjGKn0.js";import"./Illustrations-DEQ9OpIe.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Crgbirl0.js";import"./delete-t-nTD-y0.js";import"./settings-C-AYaNdM.js";import"./NoData-D-VJSSvm.js";import"./NoFilterResults-BxHjy-Ir.js";import"./index-CG-qXqs_.js";import"./IllustratedMessage-BqYMJYO9.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CNNC3MB3.js";import"./Input-UOdVCXoq.js";import"./ResponsivePopoverCommon.css-BZx4EG62.js";import"./ValueStateMessage.css-BUiJkg_v.js";import"./Suggestions.css-C6VxQjoH.js";import"./ListBoxItemGroupTemplate-DKqiYFMZ.js";import"./ComboBoxItemGroup-DxGiZDD1.js";import"./ListItemBaseTemplate-Z0Vtvnm9.js";import"./Token-BipXjjpW.js";import"./ScrollEnablement-BEZ0Hhjc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ajyl_xA3.js";import"./ToggleButton-BvHVimm5.js";import"./multiselect-all-DMS-FMXo.js";import"./SuggestionItem-DM0Sr0MT.js";import"./index-BNjcqTu2.js";import"./Option-DFlIuwHE.js";import"./index-DXuj7n31.js";import"./SegmentedButton-BiCKQqFx.js";import"./index-CdVEJ8Xn.js";import"./Select-BRdHt1j2.js";import"./InvisibleMessage-OqmRbPaJ.js";import"./index-CA51ReO5.js";import"./index-D9lECCtr.js";import"./index-BGMDCEAA.js";import"./index-B95IPvM7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-QMg4ltp-.js";import"./group-2-D1uLpEFP.js";import"./sort-descending-CSNhAS-7.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DpuAB5UG.js";import"./utils-3Fin_E3c.js";import"./index-iVoXYErW.js";import"./index-CK-AKsKY.js";import"./index-ByXi5BjK.js";import"./navigation-down-arrow-VFZsVw9Y.js";import"./navigation-right-arrow-CyNJ1Cu6.js";import"./navigation-right-arrow-jHLkNE9I.js";import"./useCurrentTheme-C76bbDUR.js";import"./index-BopKc_Rk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D4Wf5-Pu.js";import"./paper-plane-DfuC-T1-.js";import"./index-Bz-Lpaym.js";import"./less-DUR6pMX9.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(p,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(m,{sourceState:"none",of:a}),`
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
`,t.jsx(s,{})]})}function _t(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{_t as default};

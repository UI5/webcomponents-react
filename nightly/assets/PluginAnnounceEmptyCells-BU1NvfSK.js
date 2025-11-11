import{j as t}from"./iframe-dcfOuKvt.js";import{useMDXComponents as n}from"./index-s6pmBJrF.js";import{I as i,F as m}from"./CommandsAndQueries-XLh3rfRK.js";import{M as p,C as s}from"./blocks-CuD-56fD.js";import"./Tag-wpbJw-fJ.js";import"./index-DKVFb7ln.js";import"./copy-CjQxEWgu.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D-8gJKdE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DPsFL1rE.js";import"./index-ZW_BnH9T.js";import"./index-CvN_j3lV.js";import"./Link-Bb4iXCLh.js";import"./index-DOoV4d9M.js";import"./index-CLyQ0iFn.js";import"./index-fw2ccDa-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyhaBlGc.js";import"./addCustomCSSWithScoping-CSOIgEcY.js";import"./index-BFv8_OJi.js";import"./information-CU_5ogqg.js";import"./sys-enter-2-Ws311tut.js";import"./alert-BjY8k0mz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CC_o51Ui.js";import"./delete-BAzyGK0e.js";import"./settings-FAg3x57M.js";import"./NoData-D9utlD0G.js";import"./IllustratedMessage-aIAJlFbs.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-B7nT3HYa.js";import"./index-Dy2F28Z_.js";import"./index-ov6Hqgi9.js";import"./slim-arrow-down-7ZYbfLfd.js";import"./Input-DZep6tUc.js";import"./ResponsivePopoverCommon.css-OTtjABRB.js";import"./ValueStateMessage.css-CKThLhvq.js";import"./Suggestions.css-DvjeYE6w.js";import"./ListBoxItemGroupTemplate-ChRrtpqA.js";import"./ComboBoxItemGroup-CvAEveDk.js";import"./ListItemBaseTemplate-DNtdtyka.js";import"./Token-DQ8uLAYx.js";import"./ScrollEnablement-BhFMnfiL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B3mcYXoD.js";import"./ToggleButton-HVoH_wGW.js";import"./SuggestionItem-DwMAv3Y5.js";import"./index-DKSwXKRo.js";import"./Option-DN_OxtE5.js";import"./index-B_kjn4LY.js";import"./SegmentedButton-DfxvXFe5.js";import"./index-BAbKpGMN.js";import"./Select-1hbOCPXG.js";import"./InvisibleMessage-yVfs4fqn.js";import"./slim-arrow-down-C5wzux3l.js";import"./index-B4P16y8A.js";import"./index-lCvDytw_.js";import"./index-BJoDmJyK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BKkgL7hV.js";import"./group-2-D_6f7wuD.js";import"./sort-descending-80LCu02o.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bj_K8y3K.js";import"./utils-BCDlv38x.js";import"./index-NMCoUNxC.js";import"./index-DN8kdina.js";import"./index-Bfk5X2Wo.js";import"./navigation-down-arrow-BFC7OekD.js";import"./navigation-right-arrow-Ce3qhbEe.js";import"./navigation-right-arrow-qu2k__M4.js";import"./useCurrentTheme-CsIfI9uM.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D86utbHM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsbxojB9.js";import"./paper-plane-taVkukQ2.js";import"./index-ZliIzRiZ.js";import"./less-BB1GhJj9.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

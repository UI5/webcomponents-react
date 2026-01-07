import{j as t}from"./iframe-BZdybOkV.js";import{useMDXComponents as n}from"./index-BK2w2T2j.js";import{I as i,F as m}from"./CommandsAndQueries-6n7MF1sx.js";import{M as p,C as s}from"./blocks-CP8RdzkU.js";import"./Tag-BzbxKur3.js";import"./index-DK3P8KDJ.js";import"./copy-CIp50y-g.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Bs_3zcjA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIP_3DrI.js";import"./index-QZaRYYY3.js";import"./index-S-6P9mRF.js";import"./Link-ko8YnVxU.js";import"./index-DrYECb-G.js";import"./index-Ceagbcxz.js";import"./index-DEm1B2JB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-s2glcktZ.js";import"./addCustomCSSWithScoping-DEKm0mwm.js";import"./index-BZ_ngRjy.js";import"./information-jzJbJB_1.js";import"./sys-enter-2-DNIkITIL.js";import"./alert-CQPwWPwe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DmiM3j2F.js";import"./delete-Bn4jrtgc.js";import"./settings-CmB7Fgst.js";import"./NoData-BBWYakMZ.js";import"./IllustratedMessage-DgDtQSiT.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-_1OOSCTk.js";import"./index-CpgEwEY9.js";import"./index-CZpKdl4q.js";import"./slim-arrow-down-BbBe3zkt.js";import"./Input-YhMtZ58-.js";import"./ResponsivePopoverCommon.css-C6Zy80iY.js";import"./ValueStateMessage.css-CodrIykW.js";import"./Suggestions.css-DFz-TQwT.js";import"./ListBoxItemGroupTemplate-DbGM3AkW.js";import"./ComboBoxItemGroup-DmXq2bTE.js";import"./ListItemBaseTemplate-osJNy9A-.js";import"./Token-Dp8jCEo2.js";import"./ScrollEnablement-DR3-8lGc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BqswipPZ.js";import"./ToggleButton-DjDYf0VM.js";import"./SuggestionItem-CEjQwNps.js";import"./index-CFc0nQPH.js";import"./Option-oF9c-kTt.js";import"./index-ELRjcJ71.js";import"./SegmentedButton-CuCGezZR.js";import"./index-DBySEyUw.js";import"./Select-D9hNZoac.js";import"./InvisibleMessage-DKzjYfdj.js";import"./slim-arrow-down-CDOwWRZe.js";import"./index-Be1awQtY.js";import"./index-CPFKyy5f.js";import"./index-CfUkuybQ.js";import"./index-C13ceQxY.js";import"./IconDesign-DXd8PPVF.js";import"./filter--kHfYTp1.js";import"./group-2-Bsl3ML8j.js";import"./sort-descending-BdNeL7VE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dovy5LXr.js";import"./utils-DhnX8mLU.js";import"./index-Dts70RbM.js";import"./index-C2zzZlu5.js";import"./index-DkPnj5bQ.js";import"./navigation-down-arrow--7f146sQ.js";import"./navigation-right-arrow-CVnmAike.js";import"./navigation-right-arrow-YVh7qiaT.js";import"./useCurrentTheme-BgFcBM5V.js";import"./index-n0APwmh8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BX_WkTUl.js";import"./paper-plane-K10fV-mG.js";import"./index-CINyJYO9.js";import"./less-tox92RAM.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

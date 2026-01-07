import{j as t}from"./iframe-Lvl9yzry.js";import{useMDXComponents as n}from"./index-DtnS30Y7.js";import{I as i,F as m}from"./CommandsAndQueries-r8pG5JEL.js";import{M as p,C as s}from"./blocks-DE-pS5pt.js";import"./Tag-Ntj2WoJZ.js";import"./index-Z8W5RiOf.js";import"./copy-BqWuakZq.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-W1z4E9IE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-XWeRb-Rp.js";import"./index-NhuzyApy.js";import"./index-BVP3-7sd.js";import"./Link-BJMT4XUv.js";import"./index-CtS6x3f8.js";import"./index-CNh112J7.js";import"./index-BNlSxjfl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VTbkLDop.js";import"./addCustomCSSWithScoping-aRHntRG4.js";import"./index-ilzt6YAk.js";import"./information-BnCFwrSd.js";import"./sys-enter-2-Ct5ni-AG.js";import"./alert-1cuYh9Xz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CoV-samG.js";import"./delete-Bf6mCNJN.js";import"./settings-BTH1H1cH.js";import"./NoData-YJgOLuaU.js";import"./IllustratedMessage-DgJcJS-p.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-BOWtOBh1.js";import"./index-CF9o4lMv.js";import"./index-DJszWFyw.js";import"./slim-arrow-down-CJ3pdYkm.js";import"./Input-DulPzTQS.js";import"./ResponsivePopoverCommon.css-BPkzc8tz.js";import"./ValueStateMessage.css-DkT9mXdo.js";import"./Suggestions.css-D2giGZP3.js";import"./ListBoxItemGroupTemplate-Dg_wJmKC.js";import"./ComboBoxItemGroup-Bug1j3oo.js";import"./ListItemBaseTemplate-ClQx-ttj.js";import"./Token-CvAfD02Z.js";import"./ScrollEnablement-BzfTcoR4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cugb1xkB.js";import"./ToggleButton-vHqqXMb8.js";import"./SuggestionItem-DZzNyPEU.js";import"./index-B_QiK6AG.js";import"./Option-DgDbULin.js";import"./index-EcQZrwWP.js";import"./SegmentedButton-BVtdiyLd.js";import"./index-DKsWxbvM.js";import"./Select-CdVgAmGG.js";import"./InvisibleMessage-CMJ7wXZy.js";import"./slim-arrow-down-BWLmdiin.js";import"./index-CNzg74ta.js";import"./index-BwrikEva.js";import"./index-DFBuPGbC.js";import"./index-CYmJcLDK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BJnLt-s6.js";import"./group-2-Cog56SjU.js";import"./sort-descending-BD1V-JDC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CH4WmmUP.js";import"./utils-cgeJKlY3.js";import"./index-Bn7mHf-9.js";import"./index-B2B9kXKH.js";import"./index-DiQWGXFC.js";import"./navigation-down-arrow-CveMzw9u.js";import"./navigation-right-arrow-BQsgPNis.js";import"./navigation-right-arrow-DTUlVw7t.js";import"./useCurrentTheme-x7DPOfUa.js";import"./index-BKYwVVoy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-hJE8aY9K.js";import"./paper-plane-D0keah3m.js";import"./index-ombsrexN.js";import"./less-xLGJFvMI.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

import{j as t}from"./iframe-kJfrPaD1.js";import{useMDXComponents as n}from"./index-BKWPRaiV.js";import{I as i,F as m}from"./CommandsAndQueries-D7WkRU72.js";import{M as p,C as s}from"./blocks-5RdvzEbY.js";import"./Tag-Cq_rR_bf.js";import"./index-ZnQNPJfl.js";import"./copy-yyYbNeMi.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DxPZYTqE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRo0yro_.js";import"./index-C-a_iLSi.js";import"./index-CDtmBsTj.js";import"./Link-DLuGgAei.js";import"./index-Ccpr0pFg.js";import"./index-DxXcjV97.js";import"./index-CdjQ1wSl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVMILbqZ.js";import"./addCustomCSSWithScoping-7vdeOKdl.js";import"./index-CmBVI-17.js";import"./information-CMkzOfg7.js";import"./sys-enter-2-0CjTM9eF.js";import"./alert-T81DFfqo.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CjEWHoPI.js";import"./delete-B8AkKUGe.js";import"./settings-DFQp6TpX.js";import"./NoData-D0Y_eZMR.js";import"./IllustratedMessage-C-bbdW0n.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DNobnLuo.js";import"./index-D4931-O4.js";import"./index-RE4LKkGr.js";import"./slim-arrow-down-CPVGY8Iq.js";import"./Input-BgSomOX4.js";import"./ResponsivePopoverCommon.css-BjX77BWF.js";import"./ValueStateMessage.css-ClrIRLgY.js";import"./Suggestions.css-DMwhx4yY.js";import"./ListBoxItemGroupTemplate-BKa_M5Lx.js";import"./ComboBoxItemGroup-UT2r-Dd2.js";import"./ListItemBaseTemplate-DW1MLGCC.js";import"./Token-DKZ6n4xd.js";import"./ScrollEnablement-DxFtCIlG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CmvDkQUO.js";import"./ToggleButton-CNQqAKOh.js";import"./SuggestionItem-4Vshqset.js";import"./index-B8IotaSE.js";import"./Option-DE3CbLxG.js";import"./index-hpLgy0UK.js";import"./SegmentedButton-DQjk1YVY.js";import"./index-BuQpOWSs.js";import"./Select-Dd1CrZ-1.js";import"./InvisibleMessage-CIztzzyo.js";import"./slim-arrow-down-6heX8X2x.js";import"./index-C9yFq3ow.js";import"./index-ZOfLRVnY.js";import"./index-BihC8B6K.js";import"./index-CewkkqmN.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMlWiKR7.js";import"./group-2-D5N4yOqU.js";import"./sort-descending-BKM4goFg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cq09Xc-r.js";import"./utils-hSvJEbvk.js";import"./index-DI_BJW84.js";import"./index-DbuJnxWY.js";import"./index-DuEmXK1Q.js";import"./navigation-down-arrow-Td4O0pAQ.js";import"./navigation-right-arrow-DconCGaA.js";import"./navigation-right-arrow-DnMrHUAK.js";import"./useCurrentTheme-B07ClayR.js";import"./index-D2aYauVx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ClW0lnYp.js";import"./paper-plane-fozhEJ_Q.js";import"./index-B96fduB-.js";import"./less-BdeGY2H5.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

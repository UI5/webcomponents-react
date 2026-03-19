import{j as t}from"./iframe-CyQHbHxC.js";import{useMDXComponents as i}from"./index-CAqjzf3-.js";import{I as n}from"./CommandsAndQueries-CQRKG-No.js";import{M as m,C as p}from"./blocks-B1BKQjJv.js";import"./Tag-CpzoOvR8.js";import"./index-DVtJUpci.js";import"./copy-DaAXI0wh.js";import{F as s}from"./Footer-B6F6QaBp.js";import"./PageNotFound-BwogsJtD.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BOB587tv.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-8vAV1o0p.js";import"./index-DdcJcuqo.js";import"./index-Dk8Vx9PA.js";import"./index-CyzsrkYQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BPaLVEvo.js";import"./addCustomCSSWithScoping-iqlifjV6.js";import"./index-DUAJQglC.js";import"./index-hCRaM0Y7.js";import"./index-1GAsnXVc.js";import"./information-DjNNiNHU.js";import"./sys-enter-2-BgUfXyT0.js";import"./alert-CTY_LxCJ.js";import"./index-DMBzjcEO.js";import"./Illustrations-BxTCLiS4.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-e6BftqbE.js";import"./delete-BjTdR4Ty.js";import"./settings-D2RjwYQ8.js";import"./NoData-BxMVlIJh.js";import"./NoFilterResults-CGR-i73d.js";import"./index-D2c0HKwX.js";import"./IllustratedMessage-ClHsMmcC.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BcsJzzXU.js";import"./Input-8PEEDwad.js";import"./ResponsivePopoverCommon.css-Dux865Zo.js";import"./ValueStateMessage.css-BbLW-Isn.js";import"./Suggestions.css-X5qr8kqi.js";import"./ListBoxItemGroupTemplate-DZZUqyjU.js";import"./ComboBoxItemGroup-B5Dfu7er.js";import"./ListItemBaseTemplate-CY7v2Dt_.js";import"./Token-BqJ4Ofoo.js";import"./ScrollEnablement-CKBCWM_a.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BxKg-XHx.js";import"./ToggleButton-DiXt1YNE.js";import"./multiselect-all-CSlIa136.js";import"./SuggestionItem-CYqlhEgV.js";import"./index-DE35mJsn.js";import"./Option-BnsFtoau.js";import"./index-BURccoye.js";import"./SegmentedButton-_wFpY2kD.js";import"./index-D9IGU32c.js";import"./Select-BOhjnWh_.js";import"./InvisibleMessage-e12K6vz3.js";import"./index-BzKsasZn.js";import"./index-6l_fJSoT.js";import"./index-D-OPlSdD.js";import"./index-Djt9ygMg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BRt9GZkB.js";import"./group-2-CBrMg8eI.js";import"./sort-descending-B92RCWEy.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DCN3pIQM.js";import"./utils-ClisyTNb.js";import"./index-1FZuTEGH.js";import"./index-CFObLbas.js";import"./index-B1gaarcs.js";import"./navigation-down-arrow-C41QBZNm.js";import"./navigation-right-arrow-C25QyYoj.js";import"./navigation-right-arrow-BuVWa6AZ.js";import"./useCurrentTheme-DKlMhPlO.js";import"./index-DbdcXDnh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-RbxVKpGb.js";import"./paper-plane-9huZnMp4.js";import"./index-DUi-XTBZ.js";import"./less-CcGC0Ea6.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

import{j as t}from"./iframe-DZzGW3BN.js";import{useMDXComponents as n}from"./index-4a2WG_Ci.js";import{I as i,F as m}from"./CommandsAndQueries-agOrjqHb.js";import{M as p,C as s}from"./blocks-CBLhE6Mj.js";import"./Tag-DsKJkF-r.js";import"./index-CwFc8wWn.js";import"./copy-Dn2hDQ0W.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-QCfpKmZR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DRP5oWUe.js";import"./index-kAqP9TvQ.js";import"./index-Dq5fA6-V.js";import"./Link-S_PR-7tK.js";import"./index-KWsyOko9.js";import"./index-Cwa4PueL.js";import"./index-DDMDh9Sd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BsBnjZtI.js";import"./addCustomCSSWithScoping-63LVGehW.js";import"./index-d1jeh3JQ.js";import"./information-BknITroB.js";import"./sys-enter-2-KPnKgmjd.js";import"./alert-mneIjgbe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BniSdvIz.js";import"./delete-DuV86wpx.js";import"./settings-8s6k8EjZ.js";import"./NoData-CShc9ggy.js";import"./IllustratedMessage-CD31dXEh.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-Dy7bfHGF.js";import"./index-JZqV8G1u.js";import"./index-BwppftZR.js";import"./slim-arrow-down-D8mH76_5.js";import"./Input-6XkWZ1o_.js";import"./ResponsivePopoverCommon.css-BNCzU2w3.js";import"./ValueStateMessage.css-Uirvf2-h.js";import"./Suggestions.css-Bxrtjpe4.js";import"./ListBoxItemGroupTemplate-EqN2wsVW.js";import"./ComboBoxItemGroup-DLN7zx_c.js";import"./ListItemBaseTemplate-B5pUU0jJ.js";import"./Token-Bd6GT3me.js";import"./ScrollEnablement-Dlejz-Cm.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BSpNUPFr.js";import"./ToggleButton-D7gJFlAG.js";import"./SuggestionItem-Dj5VdsGP.js";import"./index-Djf9F3Nl.js";import"./Option-qqPbvFNI.js";import"./index-CAPm8wXz.js";import"./SegmentedButton-IKOAniKG.js";import"./index-hcUm0XD3.js";import"./Select-TodLTqUS.js";import"./InvisibleMessage-CpiIl6ef.js";import"./slim-arrow-down-DwujDOXN.js";import"./index-BlCx-VbN.js";import"./index-Bwfdl3tG.js";import"./index-7ORqBvwq.js";import"./index-5lzKqf_E.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CtZcXXHD.js";import"./group-2-DTjJUMyx.js";import"./sort-descending-BBFN1NhL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dz95Acax.js";import"./utils-Dnf_XIlj.js";import"./index-ujWlR76e.js";import"./index-DzxIJEJi.js";import"./index-DEgJlCnW.js";import"./navigation-down-arrow-Ck09O8Ee.js";import"./navigation-right-arrow-DVL0ymcw.js";import"./navigation-right-arrow-ClbiDJLo.js";import"./useCurrentTheme-CWgqZovn.js";import"./index-yeM0YfxH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CgKuSHBl.js";import"./paper-plane-D5SdZPIp.js";import"./index-C79XlDu9.js";import"./less-CgHtMiYC.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

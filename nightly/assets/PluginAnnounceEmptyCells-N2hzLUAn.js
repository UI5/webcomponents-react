import{j as t}from"./iframe-Cig4nsrF.js";import{useMDXComponents as n}from"./index-rt57_u-y.js";import{I as i,F as m}from"./CommandsAndQueries-D3xhwJA5.js";import{M as p,C as s}from"./blocks-DAEBkYYF.js";import"./Tag-Bs_1btou.js";import"./index-FKwq6U9j.js";import"./copy-C7r52zpO.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-0rYh6hvK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2RnTjWc.js";import"./index-BB06tsQb.js";import"./index-5C4HFP5l.js";import"./Link-Br9IVr1w.js";import"./index-BrrdpEgt.js";import"./index-ftQeoy-6.js";import"./index-BmqXmyDH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsK0-Mz_.js";import"./addCustomCSSWithScoping-BWNNT1nj.js";import"./index-BL2sJT6Z.js";import"./information-B6HgxZBq.js";import"./sys-enter-2-BRRws0JK.js";import"./alert-Cb5ARKKh.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Co5XmSb5.js";import"./delete-ugUqvhvv.js";import"./settings-2-V-zzIF.js";import"./NoData-CS-hnXJz.js";import"./IllustratedMessage-CjeAap-f.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DCm0gYGU.js";import"./index-79jYN5UM.js";import"./index-BGP_pL27.js";import"./slim-arrow-down-Cde-9O_z.js";import"./Input-RuURL5K_.js";import"./ResponsivePopoverCommon.css-CMdAayek.js";import"./ValueStateMessage.css-DVzvrXAG.js";import"./Suggestions.css-orKcFsj8.js";import"./ListBoxItemGroupTemplate-DWiibI4p.js";import"./ComboBoxItemGroup-I9mAlXsd.js";import"./ListItemBaseTemplate-nSbjmalX.js";import"./Token-C-bz4Mer.js";import"./ScrollEnablement-CSPhLIym.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DwpoAFwW.js";import"./ToggleButton-BFt3XSJk.js";import"./SuggestionItem-CReGhLBD.js";import"./index-7tZHNO4V.js";import"./Option-DWIrDKUO.js";import"./index-B2E6tsgb.js";import"./SegmentedButton-BEhsiTuz.js";import"./index-BK97A2Mp.js";import"./Select-CK2fiiVZ.js";import"./InvisibleMessage-DOTQpYl4.js";import"./slim-arrow-down-227TRo9_.js";import"./index-D8a1U50t.js";import"./index-CPhWTent.js";import"./index-C4xEk85l.js";import"./index-B3y-2zol.js";import"./IconDesign-DXd8PPVF.js";import"./filter-02HjQ7DM.js";import"./group-2-JT9pYnBG.js";import"./sort-descending-h8bEOQuH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Byv0x5jL.js";import"./utils-MCEsiAYG.js";import"./index-DJ49jrAi.js";import"./index-Cj5WFeiX.js";import"./index-BEDQKVKE.js";import"./navigation-down-arrow-CR7KrOFx.js";import"./navigation-right-arrow-D5-JGpIg.js";import"./navigation-right-arrow-BaOLieOq.js";import"./useCurrentTheme-gRbDvB5W.js";import"./index-D0dt3M83.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DQfggaPU.js";import"./paper-plane-IFueWYrv.js";import"./index-3yS61UMO.js";import"./less-DaTrqMft.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

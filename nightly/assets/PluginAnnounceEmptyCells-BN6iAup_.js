import{j as t}from"./iframe-B13aKv6v.js";import{useMDXComponents as n}from"./index-jGGDFlkx.js";import{I as i,F as m}from"./CommandsAndQueries-7UV00q7g.js";import{M as p,C as s}from"./blocks-BRIltIP5.js";import"./Tag-HMLNjm9Q.js";import"./index-CFkX7Uxi.js";import"./copy-Cbp2BA1I.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BMW7dyKi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hEU5-O_h.js";import"./index-xeEGs0j3.js";import"./index-Ccfu3Okh.js";import"./Link-Ch0RD6vq.js";import"./index-BTTMPEs9.js";import"./index-CEC3Cwv3.js";import"./index-BNwKsAav.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DC9Otah0.js";import"./addCustomCSSWithScoping-PHSG-stG.js";import"./index-DGzKTrI0.js";import"./information-C04ctOuE.js";import"./sys-enter-2-BKiD2CPA.js";import"./alert-CBEx5R4q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BZNLsVKx.js";import"./delete-BHqzy_w0.js";import"./settings-CHJyL-xf.js";import"./NoData-IlCQ-its.js";import"./IllustratedMessage-BVpBKwe1.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-CX2RoIEA.js";import"./index-DYwiPVnV.js";import"./index-CzwxPS8i.js";import"./slim-arrow-down-BtHqfP2O.js";import"./Input-CRbjoL5G.js";import"./ResponsivePopoverCommon.css-zkAUwXvS.js";import"./ValueStateMessage.css-Drc3FRo7.js";import"./Suggestions.css-CxcKjt1z.js";import"./ListBoxItemGroupTemplate-C7qo7cVu.js";import"./ComboBoxItemGroup-wPGN9pc9.js";import"./ListItemBaseTemplate-DAulwDxe.js";import"./Token-VYXiQC7f.js";import"./ScrollEnablement-DWkIXjW5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-MiMIRncl.js";import"./ToggleButton-ByHPBy6Y.js";import"./SuggestionItem-DBARgP8a.js";import"./index-BG64s_Aw.js";import"./Option-DvXJOHoA.js";import"./index-BvOkKYA8.js";import"./SegmentedButton-B_JX6wlg.js";import"./index-YDZaFH6K.js";import"./Select-BfjuawPf.js";import"./InvisibleMessage-B3ODCafQ.js";import"./slim-arrow-down-DjsY58di.js";import"./index-BXBvjTjI.js";import"./index-CLQEDEjK.js";import"./index-CK1a2hlY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DVuuEgts.js";import"./group-2-BTIEqwdc.js";import"./sort-descending-DEByg_97.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BAmsrgmU.js";import"./utils-Cu2DEZ78.js";import"./index-Bew75aHK.js";import"./index-iJRk9uUm.js";import"./index-DMj2SajO.js";import"./navigation-down-arrow-BAHL6PFO.js";import"./navigation-right-arrow-SgMVDM2O.js";import"./navigation-right-arrow-DCZNJw3z.js";import"./useCurrentTheme-C5zW9fR4.js";import"./IndicationColor-DVw-fSM_.js";import"./index-IEloByEh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-SKaXeoMK.js";import"./paper-plane-DKip-gaP.js";import"./index-Efu98x9d.js";import"./less-BeRlgDKr.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

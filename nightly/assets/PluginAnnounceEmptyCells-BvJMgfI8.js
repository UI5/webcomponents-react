import{j as t}from"./iframe-BeAHz6cC.js";import{useMDXComponents as n}from"./index-IuDgzHrg.js";import{I as i,F as m}from"./CommandsAndQueries-D97dtm9O.js";import{M as p,C as s}from"./blocks-BFIGDLi7.js";import"./Tag-D9qmbNXw.js";import"./index-BxL3HTx3.js";import"./copy-CeLNiPKq.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Bef49mXS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cz53yeIo.js";import"./index-BJX7RQS4.js";import"./index-DADITnZh.js";import"./Link-DcHF9WJI.js";import"./index-B-C-Jm2N.js";import"./index-BgUv4ZgK.js";import"./index-dtYUUSxT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B0TPubq3.js";import"./addCustomCSSWithScoping--2mgu3TN.js";import"./index-D74mYq85.js";import"./information-CKz_vH8g.js";import"./sys-enter-2-DjAoJc05.js";import"./alert-DbaxRKJL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYfsnrA-.js";import"./delete-BbZcD_Jy.js";import"./settings-B-7ACuFB.js";import"./NoData-DRgLX-o5.js";import"./IllustratedMessage-C5En4lhQ.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-0Ax5XtPu.js";import"./index-mMXt2Ig4.js";import"./index-BPce1aTx.js";import"./slim-arrow-down-CnwrFvZs.js";import"./Input-C1KpoHfz.js";import"./ResponsivePopoverCommon.css-DmlFnob0.js";import"./ValueStateMessage.css-DKcV5GT7.js";import"./Suggestions.css--wo_Z0Zb.js";import"./ListBoxItemGroupTemplate-Cg8nSs_y.js";import"./ComboBoxItemGroup-CACE9fiW.js";import"./ListItemBaseTemplate-SOqbHsMM.js";import"./Token-CPys-ICN.js";import"./ScrollEnablement-SmS2scF8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DkxzzqLh.js";import"./ToggleButton-B1-jynwA.js";import"./SuggestionItem-DiIPrr67.js";import"./index-DFLqYco2.js";import"./Option-BP8-vTtd.js";import"./index-B86j6xyl.js";import"./SegmentedButton-CETefqCy.js";import"./index-r7IiC7sj.js";import"./Select-BJKmcwBb.js";import"./InvisibleMessage-BniauCX7.js";import"./slim-arrow-down-C6Y9ZcYg.js";import"./index-D6yRflfZ.js";import"./index-BfCFP5Is.js";import"./index-C6jXAYSN.js";import"./index-CvVdNUDg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-zo7K4tca.js";import"./group-2-BBGAdkSh.js";import"./sort-descending-C3RNb67b.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CGI_tmay.js";import"./utils-tfYvJxoP.js";import"./index-Dat5JbHB.js";import"./index-6ACe6tc9.js";import"./index-2vVJU3bI.js";import"./navigation-down-arrow-BZ4wl1wA.js";import"./navigation-right-arrow-DXJ8hwha.js";import"./navigation-right-arrow-C_x6dcVg.js";import"./useCurrentTheme-BmXY1mLX.js";import"./index-Be9aI4hM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DunOEBQz.js";import"./paper-plane-DZNu3P2r.js";import"./index-4NHwF18G.js";import"./less-GlUFt5eG.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

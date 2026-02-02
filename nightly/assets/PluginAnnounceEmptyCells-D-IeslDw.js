import{j as t}from"./iframe-CirU0arv.js";import{useMDXComponents as n}from"./index-Dp75W_mY.js";import{I as i,F as m}from"./CommandsAndQueries-C-xkLV_B.js";import{M as p,C as s}from"./blocks-BZ_tUEGn.js";import"./Tag-BIXyVbav.js";import"./index-DkGOPQ-r.js";import"./copy-BRU5ISS0.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-cTgiUsLU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrqGQq-t.js";import"./index-BUDPFl9U.js";import"./index-Dxm6BO0O.js";import"./Link-cWf0Ff_j.js";import"./index-B7a5GE08.js";import"./index-VennLGrv.js";import"./index-DCit48ot.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CtMJGvuv.js";import"./addCustomCSSWithScoping-DTjbXshP.js";import"./index-4atoEi4m.js";import"./information-Z8YFf98o.js";import"./sys-enter-2-5bsV2B9A.js";import"./alert-FLQkBZSI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-HIfaJVzD.js";import"./delete-CexGU_qM.js";import"./settings-DJ-LHUy-.js";import"./NoData-DE1oTmvX.js";import"./IllustratedMessage-BFgOq_LH.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DZg_ivQE.js";import"./index-UPOhQMd1.js";import"./index-CSn2kPxq.js";import"./slim-arrow-down-60ML7lyZ.js";import"./Input-B5RoDskI.js";import"./ResponsivePopoverCommon.css-DBQtHpYS.js";import"./ValueStateMessage.css-B5lUt71q.js";import"./Suggestions.css-COvU-ZfJ.js";import"./ListBoxItemGroupTemplate-BIERCNu9.js";import"./ComboBoxItemGroup-C2-CS8jK.js";import"./ListItemBaseTemplate-Bu9nUh-N.js";import"./Token-CWpLLa4L.js";import"./ScrollEnablement-DFgzJu98.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DBUXW515.js";import"./ToggleButton-CF6WXXSi.js";import"./SuggestionItem-YvgDaZB_.js";import"./index-CB4p9_nj.js";import"./Option-7ckm_yH-.js";import"./index-BTw6P2fS.js";import"./SegmentedButton-am25y6o7.js";import"./index-BFx9WVQe.js";import"./Select-Dc_o4qfa.js";import"./InvisibleMessage--uNZRaQB.js";import"./slim-arrow-down-CkBSJkgM.js";import"./index-BrUmMrZS.js";import"./index-CdQ5i6fy.js";import"./index-Di0AmzqC.js";import"./index-MEM9Yvlw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nuUE4wAL.js";import"./group-2-BEqaSAGb.js";import"./sort-descending-CaYXLUCL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-_ssyvdx4.js";import"./utils-CsEmwHd3.js";import"./index-KodJqxFE.js";import"./index-cd_HGMma.js";import"./index-Dxv3SITq.js";import"./navigation-down-arrow-DDJMQEkQ.js";import"./navigation-right-arrow-EmtR-Po3.js";import"./navigation-right-arrow-BbxMtceQ.js";import"./useCurrentTheme-CFUmE8gV.js";import"./index-B9OW6Ny7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BgeeE8jl.js";import"./paper-plane-By32g5Y1.js";import"./index-ATETq_97.js";import"./less-DF78ULYr.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

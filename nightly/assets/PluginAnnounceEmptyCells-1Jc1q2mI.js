import{j as t}from"./iframe-BX6l_vT-.js";import{useMDXComponents as n}from"./index-Bzy26fup.js";import{I as i,F as m}from"./CommandsAndQueries-BQamr4MW.js";import{M as p,C as s}from"./blocks-dv2dOEr1.js";import"./Tag-CPbL9Jm0.js";import"./index-Brt5lPnV.js";import"./copy-DJpI-ZKv.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D4l3HB2W.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JvehRoeP.js";import"./index-DN8AW8ib.js";import"./index-CPY8w0If.js";import"./Link-LBAuQHud.js";import"./index-5GNX0CLe.js";import"./index-CdanIUAH.js";import"./index-CUja4hYj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJYHkaYl.js";import"./addCustomCSSWithScoping-DPpaQSds.js";import"./index-DKRKom99.js";import"./information-BHJaLhAv.js";import"./sys-enter-2-EZBfp4iZ.js";import"./alert-DUVH4PBA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Ca5r5f4M.js";import"./delete-Bsyy1njk.js";import"./settings-DxWJHI99.js";import"./NoData-C_NtRWhM.js";import"./IllustratedMessage-DIkrg042.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CvIXbxAg.js";import"./index-BDGSG9LU.js";import"./index-Bd42I97O.js";import"./slim-arrow-down-C-LrsL8H.js";import"./Input-CDmiLyyY.js";import"./ResponsivePopoverCommon.css-CmOep2RC.js";import"./ValueStateMessage.css-DBlWYUos.js";import"./Suggestions.css-C86jlgxo.js";import"./ListBoxItemGroupTemplate-CjE33DFP.js";import"./ComboBoxItemGroup-DXvxztj-.js";import"./ListItemBaseTemplate-D6Eqv4kM.js";import"./Token-BcKVBOJy.js";import"./ScrollEnablement-CX9YTqaF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ChOU4iwN.js";import"./ToggleButton-CODQYAiJ.js";import"./SuggestionItem-1DKCdUlb.js";import"./index-DlvRAfCL.js";import"./Option-CFA8b-um.js";import"./index-DAsjesvB.js";import"./SegmentedButton-DUlvEafh.js";import"./index-BWIKqFzV.js";import"./Select-xeWEHzkB.js";import"./InvisibleMessage-BDRoIrKZ.js";import"./slim-arrow-down-48HvW-vj.js";import"./index-BuXHj4_-.js";import"./index-aYisw1Gg.js";import"./index-ZtIQJzTv.js";import"./index-Dr11T0CO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bbs4NOEV.js";import"./group-2-D6oioZ7I.js";import"./sort-descending-DgSgbzqc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bb9INHlF.js";import"./utils-B0NWY5kp.js";import"./index-223TNC1P.js";import"./index-CA6OMJ6E.js";import"./index-BSjQgxdu.js";import"./navigation-down-arrow-DpKyjZiZ.js";import"./navigation-right-arrow-C5pZYAdh.js";import"./navigation-right-arrow-Bwx2a_3u.js";import"./useCurrentTheme-CxsvHeYZ.js";import"./index-Dll0aIpz.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cr-hHSan.js";import"./paper-plane-DHhXyk0n.js";import"./index-C1fiAmtQ.js";import"./less-CyPDc2VR.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

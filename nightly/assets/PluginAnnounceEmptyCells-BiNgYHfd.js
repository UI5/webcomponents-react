import{j as t}from"./iframe-BThE7jKf.js";import{useMDXComponents as n}from"./index-B2RJGRd4.js";import{I as i,F as m}from"./CommandsAndQueries-D1tgAUE5.js";import{M as p,C as s}from"./blocks-Dnvf3bz-.js";import"./Tag-9-1VZojo.js";import"./index-CTUpkleH.js";import"./copy-CbUREYSb.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Cte-PI1R.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDRlpx-X.js";import"./index-Di66tdVG.js";import"./index-DcLqsBQ7.js";import"./Link-BAiulGQ4.js";import"./index-cpbfvu6C.js";import"./index-i-aKPvBx.js";import"./index-DLO7Rqwk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbRZFTjL.js";import"./addCustomCSSWithScoping-BhW-iIae.js";import"./index-Dg0PU8qR.js";import"./information-CcuaLhCB.js";import"./sys-enter-2-DHGMesz_.js";import"./alert-DuPQa3D0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CKwfTsTM.js";import"./delete-BqCAREpY.js";import"./settings-TqXR43qR.js";import"./NoData-DmCO7TIv.js";import"./IllustratedMessage-Bs5MaROT.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CHmBr3w4.js";import"./index-Dr75E37T.js";import"./index-DvcdzHmC.js";import"./slim-arrow-down-Bz3-mcvJ.js";import"./Input-CbDmM0GF.js";import"./ResponsivePopoverCommon.css-DMYN2ItD.js";import"./ValueStateMessage.css-CvCL0Xij.js";import"./Suggestions.css-CGrcYFlL.js";import"./ListBoxItemGroupTemplate-_Besyw8f.js";import"./ComboBoxItemGroup-DAfVDG08.js";import"./ListItemBaseTemplate-xcFSnqWt.js";import"./Token-B6ErGNwX.js";import"./ScrollEnablement-_nV76HoB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cfqfrlti.js";import"./ToggleButton-DjH21DVy.js";import"./SuggestionItem-C8Yg-JWN.js";import"./index-CtKsJjs8.js";import"./Option-CSVQioik.js";import"./index-DsF8JQwb.js";import"./SegmentedButton-YWOzVeoF.js";import"./index-CCAH6gQH.js";import"./Select-CNSr5QHH.js";import"./InvisibleMessage-DJTpQpS-.js";import"./slim-arrow-down-hb2zYnU0.js";import"./index-C9n-DCcG.js";import"./index-E5ZX2AJ8.js";import"./index-BpiAnCwY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D6ZPV9ob.js";import"./group-2-B51gzcdA.js";import"./sort-descending-BN4uvKMV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-w-AwlVUJ.js";import"./utils-Bm75YCbD.js";import"./index-HDPq3XGJ.js";import"./index-BZBFFr3l.js";import"./index-BHuibshv.js";import"./navigation-down-arrow-DNBn6riX.js";import"./navigation-right-arrow-CEmB2JVm.js";import"./navigation-right-arrow-iXDAcUxC.js";import"./useCurrentTheme-ohrANfKQ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-JOKJFWbc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DPG-qoPW.js";import"./paper-plane-Bi8pg9nf.js";import"./index-BVTuhwKz.js";import"./less-BKhFgDfk.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

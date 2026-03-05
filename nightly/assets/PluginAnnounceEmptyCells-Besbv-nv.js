import{j as t}from"./iframe-D89K97gv.js";import{useMDXComponents as i}from"./index-BJvRQfhi.js";import{I as n}from"./CommandsAndQueries-CkqpoGcY.js";import{M as m,C as p}from"./blocks-Cy4BDnT1.js";import"./Tag-BMl9amXb.js";import"./index-CG_fwaJ_.js";import"./copy-BeHvABnn.js";import{F as s}from"./Footer-a85ddGr6.js";import"./PageNotFound-Btnag6Vx.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-oCCJWMNg.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-vvC1wc11.js";import"./index-BFDU-uR3.js";import"./index-BmDAlwXN.js";import"./index-CSxOLZlI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-JuHHWHgI.js";import"./addCustomCSSWithScoping-D0msxKTR.js";import"./index-CHwgMgjy.js";import"./index-CD-X_9j4.js";import"./index-_KpWx7_H.js";import"./information-DxfKMTg6.js";import"./sys-enter-2-aIi16_BZ.js";import"./alert-CzEHD23R.js";import"./index-D9Orgelb.js";import"./Illustrations-llDvpFiy.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BV-MPmfs.js";import"./delete-CDBnRSmI.js";import"./settings-CS9wt6xx.js";import"./NoData-TiUxWOF0.js";import"./NoFilterResults-BG1zY0NJ.js";import"./index-Cl-Gddv-.js";import"./IllustratedMessage-BT6x5IWF.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-XI-ucwDx.js";import"./slim-arrow-down-CkA2t8ep.js";import"./Input-HMow9_Ri.js";import"./ResponsivePopoverCommon.css-B4cnMME8.js";import"./ValueStateMessage.css-DJ_4De0C.js";import"./Suggestions.css-CmSTd68P.js";import"./ListBoxItemGroupTemplate-SgdcVzDK.js";import"./ComboBoxItemGroup-DK3C-asM.js";import"./ListItemBaseTemplate-Cq6ju2pO.js";import"./Token-DfLKw0sY.js";import"./ScrollEnablement-B2bIFiiq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CvXtV7K9.js";import"./ToggleButton-CvjwTlcC.js";import"./SuggestionItem-NIPuowA8.js";import"./index-Bfnhilaw.js";import"./Option-DOgA1AL4.js";import"./index-CXFOzfDq.js";import"./SegmentedButton-pvnBLEkh.js";import"./index-CChlhhr6.js";import"./Select-CXntB0Wh.js";import"./InvisibleMessage-D5AKnrSr.js";import"./slim-arrow-down-CnxZFJRE.js";import"./index-C35w3JOz.js";import"./index-BmCXl-iO.js";import"./index-C2HJgTFD.js";import"./index-Cra91enV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dy65h00_.js";import"./group-2-ukQk0aAx.js";import"./sort-descending-CQnKQ-1r.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BDiVcx2S.js";import"./utils-BRQPpEIZ.js";import"./index-CNgiS241.js";import"./index-RAeoqsxb.js";import"./index-CTrVZ_lH.js";import"./navigation-down-arrow-DVUqx3Rx.js";import"./navigation-right-arrow-B79FJGbb.js";import"./navigation-right-arrow-Dd8N9i68.js";import"./useCurrentTheme-BsjFocph.js";import"./index-DHl7KnP_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-cIjYlE45.js";import"./paper-plane-BK5Km9Zj.js";import"./index-JUBIj-Wi.js";import"./less-C7TJwMJK.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
`,t.jsx(s,{})]})}function Lt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Lt as default};

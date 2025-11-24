import{j as t}from"./iframe-ChLklOsd.js";import{useMDXComponents as n}from"./index-C8O_9vrB.js";import{I as i,F as m}from"./CommandsAndQueries-BJfqhrRX.js";import{M as p,C as s}from"./blocks-DJtWS-rM.js";import"./Tag-DfUNsarH.js";import"./index-D3GBtHew.js";import"./copy-e7lZwdk_.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Cni3-C_u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-zPNCu5nO.js";import"./index-CZdKIXPg.js";import"./index-BapOo3Yq.js";import"./Link-8xYNNbnA.js";import"./index-CLorPZ9t.js";import"./index-DapyP3wm.js";import"./index-C6Hr8eB_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxJjekgT.js";import"./addCustomCSSWithScoping-CUADiRCd.js";import"./index-k8fk5wba.js";import"./information-Cwgz9DFQ.js";import"./sys-enter-2-CCtRtPlT.js";import"./alert-B2sdUTAu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-qH1qKYII.js";import"./delete-h7eVr2Vw.js";import"./settings-BKcM-wPp.js";import"./NoData-J1K7Ymhn.js";import"./IllustratedMessage-CtqAhvd3.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-XMbTNtDO.js";import"./index-TSkw3SF1.js";import"./index-BzOBut2T.js";import"./slim-arrow-down-C0sKTfFd.js";import"./Input-Bw80AfuH.js";import"./ResponsivePopoverCommon.css-rK6RDwp7.js";import"./ValueStateMessage.css-BUi7Lug0.js";import"./Suggestions.css-60iPjMbi.js";import"./ListBoxItemGroupTemplate-CzUkEy5V.js";import"./ComboBoxItemGroup-DjZHBMDi.js";import"./ListItemBaseTemplate-fY_VN0oy.js";import"./Token-BNT6ZbqA.js";import"./ScrollEnablement-ZwyKnO_p.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D2j6MVzc.js";import"./ToggleButton-Cg7Ob5xf.js";import"./SuggestionItem-0lQp_3Fi.js";import"./index-AGwizfQV.js";import"./Option-Fwlb6Z4G.js";import"./index-B9caYodE.js";import"./SegmentedButton-BbW03Ci4.js";import"./index-Ogz2SBUe.js";import"./Select-DOXy8bYp.js";import"./InvisibleMessage-BNlluPzS.js";import"./slim-arrow-down-3G2_d1HL.js";import"./index-B1ESy-y5.js";import"./index-B0rGjn3A.js";import"./index-r7SyDcBw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CkATdhv-.js";import"./group-2-DsXa8NWz.js";import"./sort-descending-Dp-Q-OnD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ANjhBQcR.js";import"./utils-DUOn4GqP.js";import"./index--7ojLxPu.js";import"./index-YOMQ5zOo.js";import"./index-BqvABamv.js";import"./navigation-down-arrow-KDgf9JO_.js";import"./navigation-right-arrow-GRefa7J7.js";import"./navigation-right-arrow-CvUkn4up.js";import"./useCurrentTheme-BJro2kG-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-y2jErdQp.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-RlsHBs8r.js";import"./paper-plane-C-4qo-fh.js";import"./index-BXWtnQNN.js";import"./less-CCt5DJvB.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

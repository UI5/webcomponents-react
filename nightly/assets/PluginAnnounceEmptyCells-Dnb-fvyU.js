import{j as t}from"./iframe-D9-OPwVR.js";import{useMDXComponents as n}from"./index-rQrCyh78.js";import{I as i,F as m}from"./CommandsAndQueries-CGaVhEZZ.js";import{M as p,C as s}from"./blocks-yWwHjaca.js";import"./Tag-C4h9s18a.js";import"./index-C0yJm7_O.js";import"./copy-kqUatD9Y.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BiLsGBYW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqY2NvOe.js";import"./index-DWSshsP3.js";import"./index-D2zbla8P.js";import"./Link-C0FJUUPf.js";import"./index-C2LtXiVH.js";import"./index-B7FHygPg.js";import"./index-BKtOrYz7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHNrYRTW.js";import"./addCustomCSSWithScoping-BMu8GK7h.js";import"./index-CARCmcfE.js";import"./information-CXuNnhF_.js";import"./sys-enter-2-CpLLk16Q.js";import"./alert-DmoPAb-1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-kpLUfox6.js";import"./delete-8q-2SnNy.js";import"./settings-Bpoz5lRE.js";import"./NoData-EROY5bkG.js";import"./IllustratedMessage-DytrPSKy.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-zKEQv0vR.js";import"./index-Dpxo6caN.js";import"./index-CfkNruMI.js";import"./slim-arrow-down-D0gVics8.js";import"./Input-CSIFNCL6.js";import"./ResponsivePopoverCommon.css-C3lxCD6U.js";import"./ValueStateMessage.css-BrEs7f5W.js";import"./Suggestions.css-CFbdmF0I.js";import"./ListBoxItemGroupTemplate-c-FYvdWE.js";import"./ComboBoxItemGroup-DkC4WO5K.js";import"./ListItemBaseTemplate-i-G6TbOA.js";import"./Token-vKcedYbW.js";import"./ScrollEnablement-Co_z5fSg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-MB0v_CnF.js";import"./ToggleButton-CEqqS3wC.js";import"./SuggestionItem-C155tcTK.js";import"./index--hQpz-7j.js";import"./Option-CDBeTc3X.js";import"./index-BsFzClGp.js";import"./SegmentedButton-hl36dHeU.js";import"./index-4z4gHu9I.js";import"./Select-BWlL0NgQ.js";import"./InvisibleMessage-D7C8qh2V.js";import"./slim-arrow-down-BozxQxPU.js";import"./index-CEocB7zn.js";import"./index-V_dIRRcU.js";import"./index-fHuC-P80.js";import"./index-BZtku0It.js";import"./IconDesign-DXd8PPVF.js";import"./filter-diVsbBEy.js";import"./group-2-BfFZyU2o.js";import"./sort-descending-CWWRG3lr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CSa0RqIf.js";import"./utils-CFI02rUA.js";import"./index-Dg1PSLCa.js";import"./index-CT_cyvy_.js";import"./index-C9-lc1hX.js";import"./navigation-down-arrow-D7LYppDl.js";import"./navigation-right-arrow-w26ji6kI.js";import"./navigation-right-arrow-CmoZr5kZ.js";import"./useCurrentTheme-DbndD2Nd.js";import"./index-Db7VAK4s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B0oRJVLp.js";import"./paper-plane-CUa9Y-jj.js";import"./index-CYFBViS-.js";import"./less-D7uaR2Sp.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

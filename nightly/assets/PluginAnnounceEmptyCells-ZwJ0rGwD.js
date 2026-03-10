import{j as t}from"./iframe-xWXly7Ei.js";import{useMDXComponents as i}from"./index-BkV3w5d0.js";import{I as n}from"./CommandsAndQueries-cQGlKyLD.js";import{M as m,C as p}from"./blocks-BK-gEy5G.js";import"./Tag-C8IzARdb.js";import"./index-BakXc7t8.js";import"./copy-DY9Bhohc.js";import{F as s}from"./Footer-CjsfyNRg.js";import"./PageNotFound-BQRcUr7m.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CDFMCLtw.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Dpfp2JXt.js";import"./index-BTgCG8OL.js";import"./index-B5aWf-WN.js";import"./index-1-wUIWqO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B64w7jYZ.js";import"./addCustomCSSWithScoping-Dr_4npAd.js";import"./index-BcAVbI4W.js";import"./index-P_dJFF81.js";import"./index-CbssaC5W.js";import"./information-3IM7ZiM-.js";import"./sys-enter-2-Cbpg-U0q.js";import"./alert-gk5TVJR_.js";import"./index-D8yJKpQG.js";import"./Illustrations-VX2U6euS.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C0EeoQOf.js";import"./delete-Daj5aG2H.js";import"./settings-JEJGhDXa.js";import"./NoData-CUNc-SJj.js";import"./NoFilterResults-DvZ6DrPN.js";import"./index-BzwYG95X.js";import"./IllustratedMessage-Be1pREre.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-TGWaISd0.js";import"./Input-CDjEum2n.js";import"./ResponsivePopoverCommon.css-8bAtFiUD.js";import"./ValueStateMessage.css-BYQRLYZ0.js";import"./Suggestions.css-CNN403-Y.js";import"./ListBoxItemGroupTemplate-CuHmPnrx.js";import"./ComboBoxItemGroup-COAcu647.js";import"./ListItemBaseTemplate-GzRG8w-c.js";import"./Token-BEDcAYgp.js";import"./ScrollEnablement-DYlMFsuu.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-iey8o9JN.js";import"./ToggleButton-CW6tueV4.js";import"./multiselect-all-CtBIMUjF.js";import"./SuggestionItem-ywTbVMDQ.js";import"./index-B1qnChHa.js";import"./Option-B7m8nxQ-.js";import"./index-DNsMOtVs.js";import"./SegmentedButton-CL3kzHDq.js";import"./index-DokxMw3O.js";import"./Select-BWiWS1At.js";import"./InvisibleMessage-CC4MNG7R.js";import"./index-CwxYOeSe.js";import"./index-Dv57lb5x.js";import"./index-jPeizMn4.js";import"./index-DEdFN2d4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dkcd59kF.js";import"./group-2-CsBD2zZA.js";import"./sort-descending-BQOuvjyZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dk8WJ0QW.js";import"./utils-B3KTizs4.js";import"./index-B1H_35uI.js";import"./index-wRDrCSQt.js";import"./index-DKiHuygv.js";import"./navigation-down-arrow-Dex1asDk.js";import"./navigation-right-arrow-D1hOWf48.js";import"./navigation-right-arrow-DtQN-gk3.js";import"./useCurrentTheme-CGLlYyfP.js";import"./index-D_FJo5s9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BYgZebj6.js";import"./paper-plane-DeM9JyhI.js";import"./index-BVX4T61_.js";import"./less-ChsYqecD.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
`,t.jsx(s,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};

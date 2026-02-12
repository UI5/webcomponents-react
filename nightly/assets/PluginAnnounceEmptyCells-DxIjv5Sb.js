import{j as t}from"./iframe-ouw07lhn.js";import{useMDXComponents as n}from"./index-Cip0-ov6.js";import{I as i,F as m}from"./CommandsAndQueries-vCNbGeur.js";import{M as p,C as s}from"./blocks-Bw5GcbeR.js";import"./Tag-DRYfjFpo.js";import"./index-CiN9pZLU.js";import"./copy-B_ty4mVH.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BTDHVXWm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKdSXnqp.js";import"./index-ByxVEtyu.js";import"./index-COqVCE1o.js";import"./Link-DkIKsy6A.js";import"./index-C2ZF5Jpp.js";import"./index-CrUz0E6u.js";import"./index-COELAX_g.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzV-vkfR.js";import"./addCustomCSSWithScoping-vWKRTHDz.js";import"./index-BPh4j9eE.js";import"./information-Bs_aR9DP.js";import"./sys-enter-2-C-Nxg2w-.js";import"./alert-D5Y3hKT1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CwAfLKrY.js";import"./delete-BgsX23Y2.js";import"./settings-ByFx0W9W.js";import"./NoData-DWFAi7vp.js";import"./IllustratedMessage-CxAMnvqN.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DRZapmQq.js";import"./index-DoE7JH_F.js";import"./index-CenBWoFW.js";import"./slim-arrow-down-nnK8FJIO.js";import"./Input-CI1OROWq.js";import"./ResponsivePopoverCommon.css-DcoHmoxx.js";import"./ValueStateMessage.css-XdpxvNbf.js";import"./Suggestions.css-mbx7WJoo.js";import"./ListBoxItemGroupTemplate-ICv1HSLU.js";import"./ComboBoxItemGroup-Cn8U_ufh.js";import"./ListItemBaseTemplate-C1cC5hl7.js";import"./Token-CQGOb_u0.js";import"./ScrollEnablement-Cp3P35Wp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CMrSakoj.js";import"./ToggleButton-CxXRrFBw.js";import"./SuggestionItem-x9ZQujZb.js";import"./index-Bo-tMGsE.js";import"./Option-CiUM31JF.js";import"./index-y1ArBSuI.js";import"./SegmentedButton-cQyE_gOd.js";import"./index-DeORpEYb.js";import"./Select-BtMH0-7-.js";import"./InvisibleMessage-DuwvrpMq.js";import"./slim-arrow-down-YfB-XMvS.js";import"./index-CuWbHHrU.js";import"./index-DmC80DEo.js";import"./index-BuHulO6c.js";import"./index-DovX1QRr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ByggU5Ko.js";import"./group-2-BZphomOE.js";import"./sort-descending-hxltmPIF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BV2HEYnD.js";import"./utils-CF8GV5g4.js";import"./index-BJG82E-Q.js";import"./index-OWPFx2bJ.js";import"./index-CUMsSA2S.js";import"./navigation-down-arrow-D4nt05_C.js";import"./navigation-right-arrow-DEPwSesm.js";import"./navigation-right-arrow-yYJP9RxI.js";import"./useCurrentTheme-CCX7YAJN.js";import"./index-UMznImcy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BrfX5x8-.js";import"./paper-plane-xZAWAHyC.js";import"./index-D4laCzAs.js";import"./less-BK4CsGlP.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

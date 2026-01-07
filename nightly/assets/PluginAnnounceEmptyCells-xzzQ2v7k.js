import{j as t}from"./iframe-BS2TrvrN.js";import{useMDXComponents as n}from"./index-Dp4awxsz.js";import{I as i,F as m}from"./CommandsAndQueries-C7ISLnYa.js";import{M as p,C as s}from"./blocks-AG6GRa5B.js";import"./Tag-CAsjs9Yd.js";import"./index-CnogY8gl.js";import"./copy-DWHxAwDZ.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BFKbgqVg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BTiu8q4c.js";import"./index-Mu4Fq_pN.js";import"./index-BmL9Xifd.js";import"./Link-o9RgLDgA.js";import"./index-DaCCo5vH.js";import"./index-DMDLslui.js";import"./index-BzQgfOUJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CXV-QRTV.js";import"./addCustomCSSWithScoping-BH8CiasF.js";import"./index-CJ7CYpRY.js";import"./information-B1mkkoXe.js";import"./sys-enter-2-DnLeBeIW.js";import"./alert-BREJIvMW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BkyYsc9_.js";import"./delete--EJaBHtQ.js";import"./settings-CjHgbDvG.js";import"./NoData-uCs7mLL3.js";import"./IllustratedMessage-BYxajBDo.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-B4qjkeLD.js";import"./index-CuDN26eE.js";import"./index-Bg1SvpRp.js";import"./slim-arrow-down-C6f4nBya.js";import"./Input-Bv0sXAeB.js";import"./ResponsivePopoverCommon.css-BZWL9G4a.js";import"./ValueStateMessage.css-YDo57pkc.js";import"./Suggestions.css-DAjqdB6I.js";import"./ListBoxItemGroupTemplate-C3a7F9SG.js";import"./ComboBoxItemGroup-gEh305-y.js";import"./ListItemBaseTemplate-1DE2nZfk.js";import"./Token-geTKpS6b.js";import"./ScrollEnablement-BmiTc29C.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DDx_09pl.js";import"./ToggleButton-CcH_vL5C.js";import"./SuggestionItem-CWGXugmn.js";import"./index-DjLt-Et_.js";import"./Option-BGlTcCx4.js";import"./index-rnvXBaMA.js";import"./SegmentedButton-BRvRJYjJ.js";import"./index-Bo3gbuh_.js";import"./Select-DcELK7dP.js";import"./InvisibleMessage-CpZ2jbZ-.js";import"./slim-arrow-down-CP7_zG_U.js";import"./index-DrOVNHN1.js";import"./index-CAphs1al.js";import"./index-Bndb5wUT.js";import"./index-DZmbJFEp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CYZgLpPW.js";import"./group-2-Bjg8E7Od.js";import"./sort-descending-VYXIT-Q2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C2nq9QYP.js";import"./utils-CSeio7PW.js";import"./index-BW-YQYzw.js";import"./index-SLFgJxKA.js";import"./index-DsLZqvCQ.js";import"./navigation-down-arrow-B8ST6yfY.js";import"./navigation-right-arrow-CcCTVMX2.js";import"./navigation-right-arrow-BWBp3NRa.js";import"./useCurrentTheme-BL8885Ei.js";import"./index-BR75lte5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dueog928.js";import"./paper-plane-AR1l5ZNk.js";import"./index-D26HhdRg.js";import"./less-BYcbCm1L.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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

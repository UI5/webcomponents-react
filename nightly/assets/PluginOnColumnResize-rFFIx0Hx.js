import{j as o}from"./iframe-Cs5gvioi.js";import{useMDXComponents as n}from"./index-BtKDOpat.js";import{I as r,F as m}from"./CommandsAndQueries-BdMbFe6n.js";import{M as p,C as s}from"./blocks-BcK5AE3G.js";import"./Tag-D4RJrwN-.js";import"./index-CiQvF52b.js";import"./copy-DKGYESSv.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Bah13JbR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPDq8Cwl.js";import"./index-BKjvzOpn.js";import"./index-Ccaj5Czc.js";import"./Link-EUC5ZRxP.js";import"./index-D8h8jAY6.js";import"./index-DYp5aNvA.js";import"./index-oQYl8gvD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D_r_w5Dj.js";import"./addCustomCSSWithScoping-CRaSmViC.js";import"./index-BxdMkIQq.js";import"./information-C2H5qqQk.js";import"./sys-enter-2-DnVNaHmP.js";import"./alert-Bc-gjyRb.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C55QbHYW.js";import"./delete-CsuXrnL4.js";import"./settings-3bL7AxSj.js";import"./NoData-gyUpjjzs.js";import"./IllustratedMessage-BceXQMeD.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BkmX49kP.js";import"./index-CrEnkyES.js";import"./index-DygCzEx2.js";import"./slim-arrow-down-DXUzQK41.js";import"./Input-DD--HJgU.js";import"./ResponsivePopoverCommon.css-DsMB5qWp.js";import"./ValueStateMessage.css-DQ3KvLVl.js";import"./Suggestions.css-CQKPof5S.js";import"./ListBoxItemGroupTemplate-D1OUhHLE.js";import"./ComboBoxItemGroup-mjT1FhTP.js";import"./ListItemBaseTemplate-pXS2uemi.js";import"./Token-Vd3_FFDP.js";import"./ScrollEnablement-DFH5AJVi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BJ7R2iOM.js";import"./ToggleButton-DtqSYEtq.js";import"./SuggestionItem-Cy-toAYd.js";import"./index-Dn8IZjAy.js";import"./Option-CSEjJgZb.js";import"./index-B8E3208u.js";import"./SegmentedButton-BzfIjTCb.js";import"./index-CKPEe733.js";import"./Select-C34yPPyn.js";import"./InvisibleMessage-sIaY5jUe.js";import"./slim-arrow-down-Vs4ZtB-z.js";import"./index-BJpgtMTj.js";import"./index-BJuiI9q0.js";import"./index-D5YUVenJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nzG_jgzZ.js";import"./group-2-9Ba8pfXC.js";import"./sort-descending-Dk7bIx-V.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BeDU4ks0.js";import"./utils-D1ZaWfd7.js";import"./index-CfxXWdHC.js";import"./index-wq4yb3YT.js";import"./index-DD1WbCut.js";import"./navigation-down-arrow-Dnzw4uYB.js";import"./navigation-right-arrow-CsjF2Nv1.js";import"./navigation-right-arrow-CfUUtfYq.js";import"./useCurrentTheme-Dcwokryc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dypxe4oE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DqvqHW8h.js";import"./paper-plane-DfliGKzl.js";import"./index-DsaE3rZW.js";import"./less-C_A2DZHR.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(r,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{sourceState:"none",of:l}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const TableComponent = (props) => {
  const handleColumResize = useCallback((e) => {
    console.log(e.columnWidth, e.header);
  }, []);

  const tableHooks = useMemo(
    () => [
      useOnColumnResize(handleColumResize, {
        liveUpdate: false,
        wait: 100,
      }),
    ],
    [handleColumResize],
  );

  return (
    <AnalyticalTable
      data={props.data}
      columns={props.columns}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,o.jsx(m,{})]})}function Xo(i={}){const{wrapper:e}={...n(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Xo as default};

import{j as o}from"./iframe-ouw07lhn.js";import{useMDXComponents as n}from"./index-Cip0-ov6.js";import{I as r,F as m}from"./CommandsAndQueries-vCNbGeur.js";import{M as p,C as s}from"./blocks-Bw5GcbeR.js";import"./Tag-DRYfjFpo.js";import"./index-CiN9pZLU.js";import"./copy-B_ty4mVH.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BTDHVXWm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKdSXnqp.js";import"./index-ByxVEtyu.js";import"./index-COqVCE1o.js";import"./Link-DkIKsy6A.js";import"./index-C2ZF5Jpp.js";import"./index-CrUz0E6u.js";import"./index-COELAX_g.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzV-vkfR.js";import"./addCustomCSSWithScoping-vWKRTHDz.js";import"./index-BPh4j9eE.js";import"./information-Bs_aR9DP.js";import"./sys-enter-2-C-Nxg2w-.js";import"./alert-D5Y3hKT1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CwAfLKrY.js";import"./delete-BgsX23Y2.js";import"./settings-ByFx0W9W.js";import"./NoData-DWFAi7vp.js";import"./IllustratedMessage-CxAMnvqN.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DRZapmQq.js";import"./index-DoE7JH_F.js";import"./index-CenBWoFW.js";import"./slim-arrow-down-nnK8FJIO.js";import"./Input-CI1OROWq.js";import"./ResponsivePopoverCommon.css-DcoHmoxx.js";import"./ValueStateMessage.css-XdpxvNbf.js";import"./Suggestions.css-mbx7WJoo.js";import"./ListBoxItemGroupTemplate-ICv1HSLU.js";import"./ComboBoxItemGroup-Cn8U_ufh.js";import"./ListItemBaseTemplate-C1cC5hl7.js";import"./Token-CQGOb_u0.js";import"./ScrollEnablement-Cp3P35Wp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CMrSakoj.js";import"./ToggleButton-CxXRrFBw.js";import"./SuggestionItem-x9ZQujZb.js";import"./index-Bo-tMGsE.js";import"./Option-CiUM31JF.js";import"./index-y1ArBSuI.js";import"./SegmentedButton-cQyE_gOd.js";import"./index-DeORpEYb.js";import"./Select-BtMH0-7-.js";import"./InvisibleMessage-DuwvrpMq.js";import"./slim-arrow-down-YfB-XMvS.js";import"./index-CuWbHHrU.js";import"./index-DmC80DEo.js";import"./index-BuHulO6c.js";import"./index-DovX1QRr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ByggU5Ko.js";import"./group-2-BZphomOE.js";import"./sort-descending-hxltmPIF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BV2HEYnD.js";import"./utils-CF8GV5g4.js";import"./index-BJG82E-Q.js";import"./index-OWPFx2bJ.js";import"./index-CUMsSA2S.js";import"./navigation-down-arrow-D4nt05_C.js";import"./navigation-right-arrow-DEPwSesm.js";import"./navigation-right-arrow-yYJP9RxI.js";import"./useCurrentTheme-CCX7YAJN.js";import"./index-UMznImcy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BrfX5x8-.js";import"./paper-plane-xZAWAHyC.js";import"./index-D4laCzAs.js";import"./less-BK4CsGlP.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

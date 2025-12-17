import{j as o}from"./iframe-CGBVIl7z.js";import{useMDXComponents as n}from"./index-BD_J3XGh.js";import{I as r,F as m}from"./CommandsAndQueries-C4N9Si-I.js";import{M as p,C as s}from"./blocks-amwX2WGZ.js";import"./Tag-CKuoT6Wf.js";import"./index-Bflw6F-3.js";import"./copy-C7UfB3Pq.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-93nu5OR0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BpPbjuIA.js";import"./index-BSuCMsLZ.js";import"./index-CohLls_f.js";import"./Link-7Pc42Mkn.js";import"./index-DdaBmZIy.js";import"./index-739hgjkB.js";import"./index-DSjZIl8t.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bhku-quN.js";import"./addCustomCSSWithScoping-BVpL9dRN.js";import"./index-DBko667H.js";import"./information-RMMgKPqE.js";import"./sys-enter-2-CjQpGHgC.js";import"./alert-B45RxjKS.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BbZZNUsr.js";import"./delete-C3rYTSL-.js";import"./settings-CKuItMTt.js";import"./NoData-Dm6kMAy2.js";import"./IllustratedMessage-CTltc4_9.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CpKRdgwe.js";import"./index-BZjO0-60.js";import"./index-5iKNMBkt.js";import"./slim-arrow-down-DSmgoUyO.js";import"./Input-Cur_CxV7.js";import"./ResponsivePopoverCommon.css-CCcFdLcp.js";import"./ValueStateMessage.css-ZMC4oIfX.js";import"./Suggestions.css-Dz1M5Owd.js";import"./ListBoxItemGroupTemplate-dm5g8U8i.js";import"./ComboBoxItemGroup-BIxiJRMG.js";import"./ListItemBaseTemplate-BaXxQQnP.js";import"./Token-CE1htzEf.js";import"./ScrollEnablement--aZEG85r.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DiNPNXGG.js";import"./ToggleButton-CVtQcDrs.js";import"./SuggestionItem-Df3g5KQn.js";import"./index-DpM-2fz6.js";import"./Option-CvdkhOTv.js";import"./index-DV-PpZP-.js";import"./SegmentedButton-DBCXGQvu.js";import"./index-TJX9m1a2.js";import"./Select-D5t1jG8r.js";import"./InvisibleMessage-DctrIzSe.js";import"./slim-arrow-down-BaoK7UDp.js";import"./index-BSrWHRA1.js";import"./index-emiTK6If.js";import"./index-CSp7PIo2.js";import"./index-DMJbwVLL.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BSZDY7W6.js";import"./group-2-D1Tb-82k.js";import"./sort-descending-Cm59fUND.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-lmEdkW8S.js";import"./utils-B949wPYJ.js";import"./index-CitGks-I.js";import"./index-Dij-55P_.js";import"./index-CMkS8dBX.js";import"./navigation-down-arrow-Bb7YkKYC.js";import"./navigation-right-arrow-D7n-L5RI.js";import"./navigation-right-arrow-DwW5Vw29.js";import"./useCurrentTheme-Dy8jCwh1.js";import"./index-CVZ8d7gP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BuSadHsH.js";import"./paper-plane-DGK7y6EI.js";import"./index-UFJ9xqAU.js";import"./less-VoFt1pb9.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

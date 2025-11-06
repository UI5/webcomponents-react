import{j as o}from"./iframe-qw_wjtNl.js";import{useMDXComponents as n}from"./index-CvAhzckH.js";import{I as r,F as m}from"./CommandsAndQueries-DWIFRiex.js";import{M as p,C as s}from"./blocks-Cj0GGGP0.js";import"./Tag-DzwN3Rd_.js";import"./index-BxhW2KQn.js";import"./copy-6F9M-W0B.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CAfd5EST.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DkBb4DU7.js";import"./index-JDJrS9Ll.js";import"./index-BjZZqbZ8.js";import"./Link-D-ZYRyi4.js";import"./index-8ixRb_fG.js";import"./index-ClMjTnJ2.js";import"./index-CuOh1gGP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B8mn_iQe.js";import"./addCustomCSSWithScoping-CztL__nC.js";import"./index-BdvjziP2.js";import"./information-GIBAMn_C.js";import"./sys-enter-2-Djyl2MPl.js";import"./alert-B6KZwVKr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D6h30yd_.js";import"./delete-h0aT8AVb.js";import"./settings-DB2h-uz8.js";import"./NoData-BAGQwhIK.js";import"./IllustratedMessage-CNDFipk9.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-DVQQUXOf.js";import"./index-gQhHuDtz.js";import"./index--jeA-nPD.js";import"./slim-arrow-down-C7tvWC8C.js";import"./Input-BRIiCfgn.js";import"./ResponsivePopoverCommon.css-BJPXKYSd.js";import"./ValueStateMessage.css-CPuzDd78.js";import"./Suggestions.css-D0oXmqLX.js";import"./ListBoxItemGroupTemplate-COpsVFza.js";import"./ComboBoxItemGroup-CuHzLJ6_.js";import"./ListItemBaseTemplate-Dd1lTm6q.js";import"./Token-DzZ0_ysg.js";import"./ScrollEnablement-BjXact8U.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BCxLbPzf.js";import"./ToggleButton-CpsjIwWA.js";import"./SuggestionItem-dN69XrVf.js";import"./index-8HQvYLzF.js";import"./Option-CFeMc4Ab.js";import"./index-BrmJJ0nJ.js";import"./SegmentedButton-jZiliEy1.js";import"./index-Bm7nt3MU.js";import"./Select-DrpdgADy.js";import"./InvisibleMessage-BeRSLPnc.js";import"./slim-arrow-down-BSh7m90B.js";import"./index-CraAWzST.js";import"./index-BaRBa3SP.js";import"./index-Ds2AFYTa.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DzCjRTbW.js";import"./group-2-ZVRD52bo.js";import"./sort-descending-KiWNCiTs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-UuMtVOVu.js";import"./utils-6d5OHNfa.js";import"./index-OZfm5yOC.js";import"./index-C9QdKJZX.js";import"./index-DKsk6U_B.js";import"./navigation-down-arrow-BXwF2ivk.js";import"./navigation-right-arrow-Bt4GUYcC.js";import"./navigation-right-arrow-DDTiNM5w.js";import"./useCurrentTheme-BkU3ks1S.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C9Bu16Dr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cnj3p2ky.js";import"./paper-plane-UcJDeTb8.js";import"./index-DUYAr_8G.js";import"./less-D0rWAHm3.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

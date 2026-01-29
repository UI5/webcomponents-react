import{j as o}from"./iframe-_dkm4-lx.js";import{useMDXComponents as n}from"./index-DAI4KLq-.js";import{I as r,F as m}from"./CommandsAndQueries-BqJjwTMw.js";import{M as p,C as s}from"./blocks-Bs8u5Nl3.js";import"./Tag-BrrbDF8k.js";import"./index-BnWTzbqn.js";import"./copy-CdpHOxV4.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories--cyb8K2N.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bo-JlDoR.js";import"./index-oGo7hVYD.js";import"./index-S8RgegHO.js";import"./Link-DtN5ZiM1.js";import"./index-DAd7Ps1Q.js";import"./index-DGmq0M6J.js";import"./index-D5ljwTMv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Di5ZUlIH.js";import"./addCustomCSSWithScoping-BWn-VVtx.js";import"./index-Dr4umyr0.js";import"./information-BDRRh1Am.js";import"./sys-enter-2-BupypyQm.js";import"./alert-C9P72ihW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-8I7EMud0.js";import"./delete-BFlU4n88.js";import"./settings-DKHpvx8J.js";import"./NoData-C-NDq2fS.js";import"./IllustratedMessage-dVg4D6z8.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C43Z122v.js";import"./index-mDQ8kmFF.js";import"./index-fE5L-wmg.js";import"./slim-arrow-down-YnD0B6qq.js";import"./Input-CQoBJCT1.js";import"./ResponsivePopoverCommon.css-BWtbIU1l.js";import"./ValueStateMessage.css-D3oaOmzE.js";import"./Suggestions.css-DqTbturi.js";import"./ListBoxItemGroupTemplate-CxBSymlc.js";import"./ComboBoxItemGroup-BMTZSRsg.js";import"./ListItemBaseTemplate-C3bTchJi.js";import"./Token-B8wGSQWQ.js";import"./ScrollEnablement-mXNeOQwW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BATgW0iD.js";import"./ToggleButton-CXXLlraY.js";import"./SuggestionItem-Cz-SyCva.js";import"./index-BYeZEBFK.js";import"./Option-DDmpArcW.js";import"./index-BvjAbd4X.js";import"./SegmentedButton-CI86rvUG.js";import"./index-DiofpmJR.js";import"./Select-B68-6Rcp.js";import"./InvisibleMessage-Cuby5-08.js";import"./slim-arrow-down-Ds2hHePS.js";import"./index-DCZEipB7.js";import"./index-Da0p86mA.js";import"./index-BZMYVf63.js";import"./index-B0FAyyCx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DCgM0xcn.js";import"./group-2-_TbX78jG.js";import"./sort-descending-BrpD4Gn1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BzuvpoLd.js";import"./utils-CQKL6wZL.js";import"./index-Fh8qLzQn.js";import"./index-CfwLt2JK.js";import"./index-DmEe1OQb.js";import"./navigation-down-arrow-DiwCzOiQ.js";import"./navigation-right-arrow-aREcauxn.js";import"./navigation-right-arrow-BNytRyk2.js";import"./useCurrentTheme-CvQCpiy2.js";import"./index-ClgSKDC6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CFHyUMry.js";import"./paper-plane-C9QCx50u.js";import"./index-NxLhfNzK.js";import"./less-DqBn0nny.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

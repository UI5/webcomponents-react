import{j as o}from"./iframe-NmUBSsgx.js";import{useMDXComponents as n}from"./index-CRhoqEbg.js";import{I as r,F as m}from"./CommandsAndQueries-B283QW5b.js";import{M as p,C as s}from"./blocks-DTOICRIr.js";import"./Tag-CGvSEzjs.js";import"./index-_FB6i7Kc.js";import"./copy-GTpWjg4q.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BdmzuHYk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0Tl3YXX.js";import"./index-b9onOzBF.js";import"./index-BNsY5djp.js";import"./Link-O7CbLP92.js";import"./index-DKTuqk4i.js";import"./index-_nSLzRwo.js";import"./index-BOB0mZMq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vtZivBS9.js";import"./addCustomCSSWithScoping-D_Idq7DT.js";import"./index-IPiTIICp.js";import"./information-BxntQ5Ez.js";import"./sys-enter-2--B3M0XKZ.js";import"./alert-b59nRps9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-qeG1AqO_.js";import"./delete-DEPhuuaq.js";import"./settings-Cyxdm0Nk.js";import"./NoData-B6KSYL-o.js";import"./IllustratedMessage-DdeNwNSw.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BO34x6dj.js";import"./index-DLhNLDc6.js";import"./index-Cj3f3kF_.js";import"./slim-arrow-down-6dDUHNFI.js";import"./Input-B-iDErUf.js";import"./ResponsivePopoverCommon.css-Cz3_sdnA.js";import"./ValueStateMessage.css-CFZb-9jD.js";import"./Suggestions.css-BoCoDiBj.js";import"./ListBoxItemGroupTemplate-zQW6ZUC2.js";import"./ComboBoxItemGroup-7Pb99NR8.js";import"./ListItemBaseTemplate-0kmMAOxg.js";import"./Token-_-XdJX9B.js";import"./ScrollEnablement-CNH3zFIj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BtmjKC48.js";import"./ToggleButton-DjuG-WXr.js";import"./SuggestionItem-Bm8Gxsfv.js";import"./index-B45H_HZU.js";import"./Option-Bq-Ya3TK.js";import"./index-zsH8KEa_.js";import"./SegmentedButton-CtPav5U1.js";import"./index-Dg4r5IiO.js";import"./Select-CrzmsTjg.js";import"./InvisibleMessage-Bl0X301U.js";import"./slim-arrow-down-GCIgds5j.js";import"./index-D0JAzluc.js";import"./index-BdEYK8wt.js";import"./index-CkD5VO3t.js";import"./index-BGInPIaQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DiAgXsrv.js";import"./group-2-Di7D7LKg.js";import"./sort-descending-DGz0Lxww.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cszax4UQ.js";import"./utils-d7PmwSd5.js";import"./index-BpyFAkXm.js";import"./index-Nf3kUZlV.js";import"./index-CgVcHaZU.js";import"./navigation-down-arrow-GcnwT5yG.js";import"./navigation-right-arrow-BlpzX477.js";import"./navigation-right-arrow-BaXIb8U5.js";import"./useCurrentTheme-BYUbt-G2.js";import"./index-Xiezqhcu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dn68J-Xi.js";import"./paper-plane-gnHIKl6s.js";import"./index-BCra3Ghw.js";import"./less-C0zqkFIi.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

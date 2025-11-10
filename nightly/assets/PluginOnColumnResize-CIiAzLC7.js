import{j as o}from"./iframe-d6kFjKmB.js";import{useMDXComponents as n}from"./index-C_GtGqSz.js";import{I as r,F as m}from"./CommandsAndQueries-CN1OL-NC.js";import{M as p,C as s}from"./blocks-cydmgMgt.js";import"./Tag-pDj71kKq.js";import"./index-Df2R9LIn.js";import"./copy-10s1L_tU.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B6u65tjO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-SdRuQi.js";import"./index-Ct6Sh5v4.js";import"./index-CPMalJUe.js";import"./Link-sWUxxSV7.js";import"./index-CYwfFviQ.js";import"./index-Bn3tqYuU.js";import"./index-Cmh3YBGn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cp8_wMdK.js";import"./addCustomCSSWithScoping-CykojlcF.js";import"./index-ByGA7EJm.js";import"./information-U09OVfZR.js";import"./sys-enter-2-Iyx_uxbM.js";import"./alert-BF6Rf2Y5.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DCDRud3K.js";import"./delete-DcZ_ESaK.js";import"./settings-DbtyNHg0.js";import"./NoData-Bvmt149v.js";import"./IllustratedMessage-DcobuqWw.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-B6LDqNG1.js";import"./index-DqgMpJUT.js";import"./index-BCw7ON1Z.js";import"./slim-arrow-down-CR1be_E9.js";import"./Input-dxqpd5U9.js";import"./ResponsivePopoverCommon.css-DcJ2hMwV.js";import"./ValueStateMessage.css-CyfOZFgE.js";import"./Suggestions.css-CUYXbb3W.js";import"./ListBoxItemGroupTemplate-C1P8H3jz.js";import"./ComboBoxItemGroup--hDgJGkA.js";import"./ListItemBaseTemplate-dhaNXDhg.js";import"./Token-DnAjIFML.js";import"./ScrollEnablement-DL7VbC7Z.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CC3AoL1h.js";import"./ToggleButton-Cc8nNZxM.js";import"./SuggestionItem-B2W22jWd.js";import"./index-DNoaRiX5.js";import"./Option-v7vt7Rdt.js";import"./index-BC-Coj9b.js";import"./SegmentedButton-BH66OmjY.js";import"./index-DeWgeTv8.js";import"./Select-DHc0FIKo.js";import"./InvisibleMessage-D-ICaE5n.js";import"./slim-arrow-down-DHXwfDdF.js";import"./index-DPdj3l_g.js";import"./index-emcQUTqU.js";import"./index-BwoHhzeW.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CDQ6lIsG.js";import"./group-2-Cs_V0lTI.js";import"./sort-descending-gjDcZUoT.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BVWxMnE0.js";import"./utils-yoGam15V.js";import"./index-D1bbI-28.js";import"./index-B8W7BbeA.js";import"./index-D3HgSzPX.js";import"./navigation-down-arrow-DwX5fF7A.js";import"./navigation-right-arrow-DZ-QiOAH.js";import"./navigation-right-arrow-DVA-iewx.js";import"./useCurrentTheme-Bx2NeakM.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CsFcaWRy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CQU0f-9V.js";import"./paper-plane-CFbIXMZn.js";import"./index-BjJ-kmKh.js";import"./less-BZqHrptj.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

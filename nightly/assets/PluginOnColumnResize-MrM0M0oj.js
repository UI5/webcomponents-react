import{j as o}from"./iframe-sx-xxOBR.js";import{useMDXComponents as n}from"./index-BuQKvIRW.js";import{I as r,F as m}from"./CommandsAndQueries-kGwhyxXS.js";import{M as p,C as s}from"./blocks-aDd-3g3c.js";import"./Tag-CA4Gam3K.js";import"./index-Dp445doz.js";import"./copy-XBbKngNP.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CMa_80PA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWZ78BHI.js";import"./index-C5D1K9-k.js";import"./index-DWVCty5U.js";import"./Link-Bcw7GIzc.js";import"./index-CHQv5ZFl.js";import"./index-CHIAWjx6.js";import"./index-CGT84HkW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-PUGMtL6z.js";import"./addCustomCSSWithScoping-ByQ6RofR.js";import"./index-FBk0AP6g.js";import"./information-C7RaeOmw.js";import"./sys-enter-2-CEfOZp2B.js";import"./alert-DrhbDEmw.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CytgXyai.js";import"./delete-DVuKaiV3.js";import"./settings-GTb4An8K.js";import"./NoData-CisJ0jAE.js";import"./IllustratedMessage-ylht49Gh.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BhN76SkG.js";import"./index-BnZ0pG76.js";import"./index-7bEDU5Wz.js";import"./slim-arrow-down-0Axvdn4U.js";import"./Input-CfL161m4.js";import"./ResponsivePopoverCommon.css-URhSdytj.js";import"./ValueStateMessage.css-BKDnJ5vj.js";import"./Suggestions.css-DvZYKoYH.js";import"./ListBoxItemGroupTemplate-BXCNzsvz.js";import"./ComboBoxItemGroup-Cdycyjl-.js";import"./ListItemBaseTemplate-DxDFiEvX.js";import"./Token-BrsOZpIi.js";import"./ScrollEnablement-C51h3RWn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ctu0x0fN.js";import"./ToggleButton-D8TglRo1.js";import"./SuggestionItem-ZEYBTLf8.js";import"./index-CMQ3jpyy.js";import"./Option-C5EHVmK0.js";import"./index-OAs5zmNm.js";import"./SegmentedButton-CaqqCqeD.js";import"./index-B8TC9aWT.js";import"./Select-CXxEzLVO.js";import"./InvisibleMessage-d9wVLZu-.js";import"./slim-arrow-down-DNpkKrnY.js";import"./index-DlAEUI2J.js";import"./index-C6fXq4ZZ.js";import"./index-eIt60uOw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B1AwvrwL.js";import"./group-2-AG8_g4pP.js";import"./sort-descending-jQdQEEX6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D-DMMbFy.js";import"./utils-CQxtN9CL.js";import"./index-D-8sThiq.js";import"./index-Dpz8iXz1.js";import"./index-BJvovWPi.js";import"./navigation-down-arrow-CHrPfOcq.js";import"./navigation-right-arrow-CU5VIR2Q.js";import"./navigation-right-arrow-C4byvkGY.js";import"./useCurrentTheme-C69-ISE_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BcwjmFpo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CV_tHasf.js";import"./paper-plane-BpEKW78p.js";import"./index-twVhy0ce.js";import"./less-DzybJbHR.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

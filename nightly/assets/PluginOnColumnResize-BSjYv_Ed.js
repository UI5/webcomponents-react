import{j as o}from"./iframe-B9-Lkkb_.js";import{useMDXComponents as n}from"./index-BHB6dH51.js";import{I as r,F as m}from"./CommandsAndQueries-DLAu90uX.js";import{M as p,C as s}from"./blocks-DiSlIEhk.js";import"./Tag-CCKiiuhz.js";import"./index-Bp8duZh7.js";import"./copy-Cr6zYfEo.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DUaS7Rgy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B__WJxOt.js";import"./index-B3mrOTgf.js";import"./index-Uzak41NI.js";import"./Link-C6rFWX_2.js";import"./index-Cw3xsh9-.js";import"./index-DkC2gP8p.js";import"./index-BetvcNL1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee--tlCK9Sx.js";import"./addCustomCSSWithScoping-dvkvBHTK.js";import"./index-GyCUx3PS.js";import"./information-D0Z0JvqI.js";import"./sys-enter-2-CI12jhXR.js";import"./alert-BH05V2Qa.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DALdZ-m2.js";import"./delete-CWfFsUl8.js";import"./settings-CxujDLn5.js";import"./NoData-Birea-au.js";import"./IllustratedMessage-B0FRqShC.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-XtYsGwDh.js";import"./index-BfMePIv-.js";import"./index-CuZnP9f5.js";import"./slim-arrow-down-BSwFrx-6.js";import"./Input-DjfKo2Sh.js";import"./ResponsivePopoverCommon.css-0xS8ouhO.js";import"./ValueStateMessage.css-Cx0EHJDT.js";import"./Suggestions.css-DHKy5z0i.js";import"./ListBoxItemGroupTemplate-DIuWxvFa.js";import"./ComboBoxItemGroup-xzY_qUqr.js";import"./ListItemBaseTemplate-DiAN3hV1.js";import"./Token-C6SSdJPd.js";import"./ScrollEnablement-KTUvEJYU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-bYgjbEr1.js";import"./ToggleButton-BUijnt0i.js";import"./SuggestionItem-B-pCF7HD.js";import"./index-BfTMPCrh.js";import"./Option-CJIIy65Q.js";import"./index-C8ev54Zj.js";import"./SegmentedButton-wSNeJPjb.js";import"./index-CPa9DL4h.js";import"./Select-CDXhzhip.js";import"./InvisibleMessage-B56PPVnA.js";import"./slim-arrow-down-Cwc8ylhp.js";import"./index-CKHT_nu5.js";import"./index-BQ3eva5q.js";import"./index-D_iSvJPf.js";import"./index-DXx-5JGj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BkCieJa7.js";import"./group-2-Bh4r1QBU.js";import"./sort-descending-Cq24lhVz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-COg2_de0.js";import"./utils-DALMlQXA.js";import"./index-BZa5OPXC.js";import"./index-BoOy7SR4.js";import"./index-BStOHSn9.js";import"./navigation-down-arrow-CTvkFjXS.js";import"./navigation-right-arrow-ol9XXUdO.js";import"./navigation-right-arrow-Bh96P4YL.js";import"./useCurrentTheme-DbMqVJhl.js";import"./index-zY56nHkc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-0ILMNLpe.js";import"./paper-plane-Bq_Va7ug.js";import"./index-C0dFfThB.js";import"./less-DdiRz5Ea.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

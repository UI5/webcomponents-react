import{j as o}from"./iframe-Lvl9yzry.js";import{useMDXComponents as n}from"./index-DtnS30Y7.js";import{I as r,F as m}from"./CommandsAndQueries-r8pG5JEL.js";import{M as p,C as s}from"./blocks-DE-pS5pt.js";import"./Tag-Ntj2WoJZ.js";import"./index-Z8W5RiOf.js";import"./copy-BqWuakZq.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-W1z4E9IE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-XWeRb-Rp.js";import"./index-NhuzyApy.js";import"./index-BVP3-7sd.js";import"./Link-BJMT4XUv.js";import"./index-CtS6x3f8.js";import"./index-CNh112J7.js";import"./index-BNlSxjfl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VTbkLDop.js";import"./addCustomCSSWithScoping-aRHntRG4.js";import"./index-ilzt6YAk.js";import"./information-BnCFwrSd.js";import"./sys-enter-2-Ct5ni-AG.js";import"./alert-1cuYh9Xz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CoV-samG.js";import"./delete-Bf6mCNJN.js";import"./settings-BTH1H1cH.js";import"./NoData-YJgOLuaU.js";import"./IllustratedMessage-DgJcJS-p.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-BOWtOBh1.js";import"./index-CF9o4lMv.js";import"./index-DJszWFyw.js";import"./slim-arrow-down-CJ3pdYkm.js";import"./Input-DulPzTQS.js";import"./ResponsivePopoverCommon.css-BPkzc8tz.js";import"./ValueStateMessage.css-DkT9mXdo.js";import"./Suggestions.css-D2giGZP3.js";import"./ListBoxItemGroupTemplate-Dg_wJmKC.js";import"./ComboBoxItemGroup-Bug1j3oo.js";import"./ListItemBaseTemplate-ClQx-ttj.js";import"./Token-CvAfD02Z.js";import"./ScrollEnablement-BzfTcoR4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cugb1xkB.js";import"./ToggleButton-vHqqXMb8.js";import"./SuggestionItem-DZzNyPEU.js";import"./index-B_QiK6AG.js";import"./Option-DgDbULin.js";import"./index-EcQZrwWP.js";import"./SegmentedButton-BVtdiyLd.js";import"./index-DKsWxbvM.js";import"./Select-CdVgAmGG.js";import"./InvisibleMessage-CMJ7wXZy.js";import"./slim-arrow-down-BWLmdiin.js";import"./index-CNzg74ta.js";import"./index-BwrikEva.js";import"./index-DFBuPGbC.js";import"./index-CYmJcLDK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BJnLt-s6.js";import"./group-2-Cog56SjU.js";import"./sort-descending-BD1V-JDC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CH4WmmUP.js";import"./utils-cgeJKlY3.js";import"./index-Bn7mHf-9.js";import"./index-B2B9kXKH.js";import"./index-DiQWGXFC.js";import"./navigation-down-arrow-CveMzw9u.js";import"./navigation-right-arrow-BQsgPNis.js";import"./navigation-right-arrow-DTUlVw7t.js";import"./useCurrentTheme-x7DPOfUa.js";import"./index-BKYwVVoy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-hJE8aY9K.js";import"./paper-plane-D0keah3m.js";import"./index-ombsrexN.js";import"./less-xLGJFvMI.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

import{j as o}from"./iframe-Cg7074Vs.js";import{useMDXComponents as r}from"./index-B5B2jkkb.js";import{I as n,F as m}from"./CommandsAndQueries-DSm4BCv_.js";import{M as p,C as s}from"./blocks-BJCse0Pu.js";import"./Tag-8TeQfEXQ.js";import"./index-BdM5BPiw.js";import"./copy-elFt8Bkr.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DB7bOgxj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5-_BJit.js";import"./index-Do95mp1G.js";import"./index--0v3kDPT.js";import"./Link-C9B0XqeU.js";import"./index-B-O0M522.js";import"./index-DBdMynWP.js";import"./index-mxRvftJc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Co8Bnzh8.js";import"./addCustomCSSWithScoping-CQZolqZ7.js";import"./index-mLpQh_nH.js";import"./information-BmRqz6it.js";import"./sys-enter-2-Cd9kQ7Q4.js";import"./alert-D-Gn0uBT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-2Ug-I5GK.js";import"./delete--5HWma0M.js";import"./settings-0SSM_tTW.js";import"./NoData-MAiINvvS.js";import"./IllustratedMessage-CibW_qhD.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-CxBnrX7K.js";import"./index-jJgsyHr_.js";import"./slim-arrow-down-D-JY4uAS.js";import"./Input-BD7L5txf.js";import"./ResponsivePopoverCommon.css-B9VO2EzZ.js";import"./ValueStateMessage.css-BaLqYwfA.js";import"./Suggestions.css-Dh3K_-nA.js";import"./ListBoxItemGroupTemplate-DNrp4lOn.js";import"./ComboBoxItemGroup-SLBX6ua1.js";import"./ListItemBaseTemplate-5yA7A_oj.js";import"./Token-BenxG4sL.js";import"./ScrollEnablement-Dvz9XJ8X.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CcC-VMWt.js";import"./ToggleButton-r-kl1SYq.js";import"./SuggestionItem-BYcjaliO.js";import"./index-DMh-3Scq.js";import"./Option-BSZEIO4X.js";import"./index-VfW2tHBs.js";import"./SegmentedButton-By1ReAJr.js";import"./index-DAhqLvsW.js";import"./Select-NMsxQzOK.js";import"./InvisibleMessage-_ZJ38xGN.js";import"./slim-arrow-down-B1zfSySI.js";import"./index-DjuwfncQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BGEQdFQj.js";import"./group-2-DvxIcRzE.js";import"./sort-descending-BX6MO7zF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-fGLyeaeN.js";import"./utils-cn5t3TkC.js";import"./index-Bs1zlC6y.js";import"./index-BXF0zUM9.js";import"./index-B1IDkjTW.js";import"./navigation-down-arrow-S78-tx2_.js";import"./navigation-right-arrow-C7Vi-bEV.js";import"./navigation-right-arrow-BTMb-YMq.js";import"./useCurrentTheme-ULT6chda.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CbJ0m2qX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CFLUuD9e.js";import"./paper-plane-CUrslyrM.js";import"./index-DAFr-zZ2.js";import"./less-2sbOJ1tj.js";import"./index-BBUpAwBe.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(n,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
`,o.jsx(m,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};

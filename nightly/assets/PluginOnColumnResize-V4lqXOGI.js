import{j as o}from"./iframe-BlUygxfZ.js";import{useMDXComponents as n}from"./index-CXAabkf3.js";import{I as r,F as m}from"./CommandsAndQueries-CeFRywr5.js";import{M as p,C as s}from"./blocks-C4NQ4-im.js";import"./Tag-CUR2rrlg.js";import"./index-Dh-78LPx.js";import"./copy-C0O91PIx.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-C4XrPa9Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B0J408xz.js";import"./index-DFYqP0N6.js";import"./index-t0s0GVf0.js";import"./Link-Czimy6hK.js";import"./index-Dn8Ref-F.js";import"./index-C_DCdzmu.js";import"./index-nb0q6IbV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbJvTexr.js";import"./addCustomCSSWithScoping-DHyjDtb3.js";import"./index-B6coDb7Z.js";import"./information-zlNYGB6Q.js";import"./sys-enter-2-Ccj_DCkA.js";import"./alert-LdJbGRSH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CgXczKDb.js";import"./delete-BZs0a-1H.js";import"./settings-BVrFU0mX.js";import"./NoData-D4bv1jPS.js";import"./IllustratedMessage-D3TBiFcy.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-9ofLVooP.js";import"./index-84lCpQlY.js";import"./index-CSl--qbo.js";import"./slim-arrow-down-CgDsJMzW.js";import"./Input-CAJFmB2Z.js";import"./ResponsivePopoverCommon.css-DwHTCDww.js";import"./ValueStateMessage.css-C3alblsY.js";import"./Suggestions.css-CLTa6LPz.js";import"./ListBoxItemGroupTemplate-CIs0oSQk.js";import"./ComboBoxItemGroup-Ceh1JxvS.js";import"./ListItemBaseTemplate-CMAdUbXU.js";import"./Token-BTUJFvLX.js";import"./ScrollEnablement-DSwNOA6D.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BqadHOpo.js";import"./ToggleButton-BG1bNuXR.js";import"./SuggestionItem-D0KUwh3K.js";import"./index-B9UBVLPX.js";import"./Option-h_6RFh1c.js";import"./index-DhgCGgHe.js";import"./SegmentedButton-DH2HX0sk.js";import"./index-CHKENjHC.js";import"./Select-CP3bsgEY.js";import"./InvisibleMessage-D6EiZ3B3.js";import"./slim-arrow-down-DNdnjurS.js";import"./index-2fqu4ZUm.js";import"./index-BbCJyiwr.js";import"./index-DUvesvaX.js";import"./index-C5uNCv6R.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CGGrEzLl.js";import"./group-2-Bzo2NSpJ.js";import"./sort-descending--Hwn5uWZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C5Y2dYwJ.js";import"./utils-DbuWLHgd.js";import"./index-l2Om9n2s.js";import"./index-ec7XPWwz.js";import"./index-DsTqha7i.js";import"./navigation-down-arrow-DDmPzf56.js";import"./navigation-right-arrow-D1dkuTqT.js";import"./navigation-right-arrow-BQIRTW5E.js";import"./useCurrentTheme-BPj60tYc.js";import"./index-DJOUc43H.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-RZAVCFXP.js";import"./paper-plane-CKvhYw7h.js";import"./index-DF9Z0-Xx.js";import"./less-BQUCisQp.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

import{j as o}from"./iframe-Cig4nsrF.js";import{useMDXComponents as n}from"./index-rt57_u-y.js";import{I as r,F as m}from"./CommandsAndQueries-D3xhwJA5.js";import{M as p,C as s}from"./blocks-DAEBkYYF.js";import"./Tag-Bs_1btou.js";import"./index-FKwq6U9j.js";import"./copy-C7r52zpO.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-0rYh6hvK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2RnTjWc.js";import"./index-BB06tsQb.js";import"./index-5C4HFP5l.js";import"./Link-Br9IVr1w.js";import"./index-BrrdpEgt.js";import"./index-ftQeoy-6.js";import"./index-BmqXmyDH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsK0-Mz_.js";import"./addCustomCSSWithScoping-BWNNT1nj.js";import"./index-BL2sJT6Z.js";import"./information-B6HgxZBq.js";import"./sys-enter-2-BRRws0JK.js";import"./alert-Cb5ARKKh.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Co5XmSb5.js";import"./delete-ugUqvhvv.js";import"./settings-2-V-zzIF.js";import"./NoData-CS-hnXJz.js";import"./IllustratedMessage-CjeAap-f.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DCm0gYGU.js";import"./index-79jYN5UM.js";import"./index-BGP_pL27.js";import"./slim-arrow-down-Cde-9O_z.js";import"./Input-RuURL5K_.js";import"./ResponsivePopoverCommon.css-CMdAayek.js";import"./ValueStateMessage.css-DVzvrXAG.js";import"./Suggestions.css-orKcFsj8.js";import"./ListBoxItemGroupTemplate-DWiibI4p.js";import"./ComboBoxItemGroup-I9mAlXsd.js";import"./ListItemBaseTemplate-nSbjmalX.js";import"./Token-C-bz4Mer.js";import"./ScrollEnablement-CSPhLIym.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DwpoAFwW.js";import"./ToggleButton-BFt3XSJk.js";import"./SuggestionItem-CReGhLBD.js";import"./index-7tZHNO4V.js";import"./Option-DWIrDKUO.js";import"./index-B2E6tsgb.js";import"./SegmentedButton-BEhsiTuz.js";import"./index-BK97A2Mp.js";import"./Select-CK2fiiVZ.js";import"./InvisibleMessage-DOTQpYl4.js";import"./slim-arrow-down-227TRo9_.js";import"./index-D8a1U50t.js";import"./index-CPhWTent.js";import"./index-C4xEk85l.js";import"./index-B3y-2zol.js";import"./IconDesign-DXd8PPVF.js";import"./filter-02HjQ7DM.js";import"./group-2-JT9pYnBG.js";import"./sort-descending-h8bEOQuH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Byv0x5jL.js";import"./utils-MCEsiAYG.js";import"./index-DJ49jrAi.js";import"./index-Cj5WFeiX.js";import"./index-BEDQKVKE.js";import"./navigation-down-arrow-CR7KrOFx.js";import"./navigation-right-arrow-D5-JGpIg.js";import"./navigation-right-arrow-BaOLieOq.js";import"./useCurrentTheme-gRbDvB5W.js";import"./index-D0dt3M83.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DQfggaPU.js";import"./paper-plane-IFueWYrv.js";import"./index-3yS61UMO.js";import"./less-DaTrqMft.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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

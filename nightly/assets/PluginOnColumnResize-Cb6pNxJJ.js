import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-1ARNaUmP.js";import{r as n}from"./react-BZibOG70.js";import{_ as r,l as i,o as a,t as o,u as s}from"./components-Da28yRWl.js";import{_ as c,d as l,r as u}from"./blocks-D9k7TVdi.js";import{PluginOnColumnResize as d,t as f}from"./AnalyticalTableHooks.stories-BOekYzDA.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l,{title:`Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize`}),`
`,(0,h.jsx)(t.h1,{id:`analyticaltable-plugin-useoncolumnresize`,children:`AnalyticalTable Plugin: useOnColumnResize`}),`
`,(0,h.jsx)(i,{moduleName:`useOnColumnResize`,packageName:`@ui5/webcomponents-react/AnalyticalTableHooks`}),`
`,(0,h.jsxs)(t.p,{children:[`The `,(0,h.jsx)(t.code,{children:`useOnColumnResize`}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,(0,h.jsx)(t.code,{children:`e: { columnWidth: number; header: Record<string, any> }) => void;`}),`), the second one are the optional `,(0,h.jsx)(t.code,{children:`options`}),` for controlling how often the callback should fire.`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`options`}),`:`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`liveUpdate`}),`: If `,(0,h.jsx)(t.code,{children:`liveUpdate`}),` is `,(0,h.jsx)(t.code,{children:`true`}),`, the resize function will fire every time the width has changed depending on the `,(0,h.jsx)(t.code,{children:`options.wait`}),` delay.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`wait`}),`: The number of milliseconds for which the calls are to be delayed. `,(0,h.jsxs)(t.strong,{children:[`Defaults to `,(0,h.jsx)(t.code,{children:`100`})]}),`. (Only has an effect if `,(0,h.jsx)(t.code,{children:`liveUpdate`}),` is `,(0,h.jsx)(t.code,{children:`true`}),`)`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsx)(u,{sourceState:`none`,of:d}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-jsx`,children:`const TableComponent = (props) => {
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
`,(0,h.jsx)(a,{})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),r(),s(),c(),o(),f()}))();export{m as default};
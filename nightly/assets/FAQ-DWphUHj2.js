import{n as e}from"./chunk-zsgVPwQN.js";import{Hi as t,Jm as n,Ui as r}from"./iframe-CyTG_Y9b.js";import{r as i}from"./react-CXA973vt.js";import{_ as a,c as o,o as s,t as c}from"./components-CfRmXO3u.js";import{_ as l,d as u,r as d}from"./blocks-KOsd7rwV.js";import{a as f,p}from"./AnalyticalTable.stories-qrpiwPjw.js";function m(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...i(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{title:`Data Display / AnalyticalTable / FAQ`}),`
`,(0,g.jsx)(n.h1,{id:`analyticaltable-faq`,children:`AnalyticalTable FAQ`}),`
`,(0,g.jsx)(o,{}),`
`,(0,g.jsx)(n.h2,{id:`why-is-the-analyticaltable-slow-in-development-mode`,children:`Why is the AnalyticalTable slow in development mode?`}),`
`,(0,g.jsxs)(n.p,{children:[`When using the `,(0,g.jsx)(n.code,{children:`AnalyticalTable`}),` (or other virtualized components) in development mode, you may experience noticeable performance degradation compared to production builds. This is expected behavior caused by the combination of `,(0,g.jsx)(n.strong,{children:`React's dev mode overhead`}),` and `,(0,g.jsx)(n.strong,{children:`browser debugger instrumentation`}),`.`]}),`
`,(0,g.jsx)(n.h3,{id:`why-dev-mode-is-slower`,children:`Why Dev Mode is Slower`}),`
`,(0,g.jsx)(n.h4,{id:`react-dev-mode-overhead`,children:`React Dev Mode Overhead`}),`
`,(0,g.jsx)(n.p,{children:`React's development build includes significant overhead:`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.strong,{children:`Strict Mode double-rendering`}),`: Components, `,(0,g.jsx)(n.code,{children:`useEffect`}),`, and callback refs render an additional time to help detect side effects`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.strong,{children:`Validation checks`}),`: Hooks order, prop types, deprecated API usage`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.strong,{children:`Extended error messages`}),`: Component stack traces for better debugging`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.strong,{children:`Extra code paths`}),`: Development-only warnings and diagnostics`]}),`
`]}),`
`,(0,g.jsx)(n.p,{children:`For a virtualized table that frequently mounts and unmounts cells during scrolling, this overhead compounds quickly.`}),`
`,(0,g.jsx)(n.h4,{id:`browser-debugger-instrumentation`,children:`Browser Debugger Instrumentation`}),`
`,(0,g.jsx)(n.p,{children:`Chromium-based browsers (Chrome, Edge, Brave, etc.) instrument async operations heavily in dev mode via the V8 engine - even when DevTools is closed. Firefox and Safari have significantly lighter debugger overhead in dev mode for example.`}),`
`,(0,g.jsx)(n.h3,{id:`recommendations`,children:`Recommendations`}),`
`,(0,g.jsx)(n.h4,{id:`high-impact`,children:`High Impact`}),`
`,(0,g.jsxs)(n.ol,{children:[`
`,(0,g.jsxs)(n.li,{children:[`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.strong,{children:`Use Firefox or Safari for development`}),`: These browsers have significantly lighter debugger overhead in dev mode.`]}),`
`]}),`
`,(0,g.jsxs)(n.li,{children:[`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.strong,{children:`Test with production builds`}),`: When working on performance-sensitive features, test with a production build to get accurate performance metrics.`]}),`
`]}),`
`,(0,g.jsxs)(n.li,{children:[`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.strong,{children:`Disable React Strict Mode`}),` (temporarily): If dev mode performance is severely impacting your workflow, you can temporarily disable Strict Mode in development. Note that Strict Mode helps catch bugs, so re-enable it periodically.`]}),`
`]}),`
`,(0,g.jsxs)(n.li,{children:[`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.strong,{children:`Memoize props that require it`}),`: Props marked with "Must be memoized" (e.g., `,(0,g.jsx)(n.code,{children:`columns`}),`) need a stable reference. Define them outside the component or use `,(0,g.jsx)(n.code,{children:`useMemo`}),`/`,(0,g.jsx)(n.code,{children:`useCallback`}),` to prevent unnecessary recalculations.`]}),`
`]}),`
`]}),`
`,(0,g.jsx)(n.h4,{id:`medium-impact`,children:`Medium Impact`}),`
`,(0,g.jsxs)(n.ol,{start:`5`,children:[`
`,(0,g.jsxs)(n.li,{children:[`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.strong,{children:`Disable React DevTools extension`}),`: The React DevTools browser extension adds performance overhead and has been observed to cause small memory leaks.`]}),`
`]}),`
`,(0,g.jsxs)(n.li,{children:[`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.strong,{children:`Consider memoizing expensive Cell components`}),`: If you have custom `,(0,g.jsx)(n.code,{children:`Cell`}),` renderers with expensive computations or deep component trees, wrapping them with `,(0,g.jsx)(n.code,{children:`React.memo()`}),` can help by creating render boundaries. However, avoid over-memoization - for simple cells, the overhead of memoization may outweigh the benefits.`]}),`
`]}),`
`,(0,g.jsxs)(n.li,{children:[`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsxs)(n.strong,{children:[`Use `,(0,g.jsx)(n.a,{href:`?path=/docs/knowledge-base-faq--docs#why-use-direct-imports-via-package-export-maps`,children:`direct imports`})]}),`: Since tree shaking is not available for most bundlers in dev mode, use direct imports to reduce initial load.`]}),`
`]}),`
`]}),`
`,(0,g.jsx)(n.h4,{id:`lower-impact`,children:`Lower Impact`}),`
`,(0,g.jsxs)(n.ol,{start:`8`,children:[`
`,(0,g.jsxs)(n.li,{children:[`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.strong,{children:`Keep DevTools closed`}),`: When not actively debugging, keep DevTools closed to reduce overhead from source map parsing, DOM mutation observers, and memory tracking.`]}),`
`]}),`
`,(0,g.jsxs)(n.li,{children:[`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.strong,{children:`Deactivate UI5 Web Components animations in dev mode`}),`: Animations cause components to recalculate multiple times. While we debounce frequent state changes, disabling animations can help.`]}),`
`]}),`
`]}),`
`,(0,g.jsx)(n.h3,{id:`summary`,children:`Summary`}),`
`,(0,g.jsxs)(n.p,{children:[`Dev mode slowness for virtualized components is expected behavior, not a bug. In production builds, the `,(0,g.jsx)(n.code,{children:`AnalyticalTable`}),` performs well. For the best development experience with heavy tables, consider using Firefox or Safari, or testing with production builds when performance is critical.`]}),`
`,(0,g.jsxs)(`details`,{children:[(0,g.jsx)(`summary`,{children:`Example: Performance Trace Comparison`}),(0,g.jsxs)(n.p,{children:[`The following table shows a performance trace comparison from an investigation into dev mode performance (`,(0,g.jsx)(n.a,{href:`https://github.com/SAP/ui5-webcomponents-react/issues/8234`,rel:`nofollow`,children:`GitHub issue #8234`}),`). Your results may vary depending on your implementation, but the general pattern holds:`]}),(0,g.jsxs)(n.table,{children:[(0,g.jsx)(n.thead,{children:(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.th,{children:`Metric`}),(0,g.jsx)(n.th,{children:`Chrome DEV`}),(0,g.jsx)(n.th,{children:`Chrome PROD`}),(0,g.jsx)(n.th,{children:`Firefox DEV`})]})}),(0,g.jsxs)(n.tbody,{children:[(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:`Trace file size`}),(0,g.jsx)(n.td,{children:`561 MB`}),(0,g.jsx)(n.td,{children:`3.3 MB`}),(0,g.jsx)(n.td,{children:`6.3 MB`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:`Event count`}),(0,g.jsx)(n.td,{children:`~millions`}),(0,g.jsx)(n.td,{children:`~14,600`}),(0,g.jsx)(n.td,{children:`~3,700`})]})]})]}),(0,g.jsx)(n.p,{children:`Firefox in dev mode has similar overhead to Chrome in prod mode - both are lightweight. Chromium-based browsers in dev mode are the outlier with massive V8 debugger instrumentation.`}),(0,g.jsxs)(n.p,{children:[`For more context, see the `,(0,g.jsx)(n.a,{href:`https://github.com/SAP/ui5-webcomponents-react/issues/8234#issuecomment-3971742068`,rel:`nofollow`,children:`detailed findings comment`}),` and `,(0,g.jsx)(n.a,{href:`https://github.com/SAP/ui5-webcomponents-react/issues/8234#issuecomment-3960465202`,rel:`nofollow`,children:`production environment performance videos`}),` showing table performance (inside a complex container) on high-end, medium-range, and low-end devices.`]})]}),`
`,(0,g.jsx)(n.h2,{id:`how-to-add-your-own-plugin-hooks`,children:`How to add your own plugin hooks?`}),`
`,(0,g.jsxs)(n.p,{children:[`The `,(0,g.jsx)(n.code,{children:`AnalyticalTable`}),` internally uses all plugin hooks of the `,(0,g.jsx)(n.a,{href:`https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/overview.md`,rel:`nofollow`,children:`react-table v7`}),` except for `,(0,g.jsx)(n.code,{children:`usePagination`}),` and hooks that change the layout.
If you pass a `,(0,g.jsx)(n.code,{children:`react-table`}),` hook to the `,(0,g.jsx)(n.code,{children:`tableHooks`}),` prop of the `,(0,g.jsx)(n.code,{children:`AnalyticalTable`}),` you will most likely experience some side effects or even break the table completely. We therefore strongly recommend to just not do it ;).
If you encounter a functionality that should be available with `,(0,g.jsx)(n.code,{children:`react-table`}),` hooks, but isn't in the `,(0,g.jsx)(n.code,{children:`AnalyticalTable`}),` please open an issue in GitHub.`]}),`
`,(0,g.jsx)(t,{type:`Warning`,hideCloseButton:!0,children:`Plugin hooks can manipulate the internal table instance. Please use with caution!`}),`
`,(0,g.jsx)(n.p,{children:`For adding custom plugin hooks you can use the following code snippet.`}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-jsx`,children:`export const TableWithCustomHook = (props) => {
  const { data, columns } = props;
  const customHook = (hooks) => {
    hooks.useInstance.push((instance) => {
      console.log(instance);
    });
  };
  return <AnalyticalTable data={data} columns={columns} tableHooks={[customHook]} />;
};
`})}),`
`,(0,g.jsxs)(n.p,{children:[`With the `,(0,g.jsx)(n.code,{children:`customHook`}),` callback you can plugin in all available hooks. Please note that some hooks need a return value (e.g. `,(0,g.jsx)(n.code,{children:`columns`}),`) which is then always the first parameter of the function, and others are not allowed to return a value (e.g. `,(0,g.jsx)(n.code,{children:`useTable`}),`).
For further details please refer to the `,(0,g.jsxs)(n.a,{href:`https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/overview.md`,rel:`nofollow`,children:[(0,g.jsx)(n.code,{children:`react-table`}),` v7 documentation`]}),`.`]}),`
`,(0,g.jsx)(n.h2,{id:`how-to-select-rows-containing-active-elements`,children:`How to select rows containing active elements?`}),`
`,(0,g.jsxs)(n.p,{children:[`We've restricted the `,(0,g.jsx)(n.code,{children:`click`}),` events of UI5 Web Components elements such as `,(0,g.jsx)(n.code,{children:`Button`}),`, `,(0,g.jsx)(n.code,{children:`Link`}),`, `,(0,g.jsx)(n.code,{children:`Switch`}),`, etc. to not fire the `,(0,g.jsx)(n.code,{children:`onRowSelect`}),` or `,(0,g.jsx)(n.code,{children:`onRowClick`}),` events of the `,(0,g.jsx)(n.code,{children:`AnalyticalTable`}),`. This is to prevent unwanted selection or row click behavior when interacting with these elements.
In case you still want to select or click the row when clicking the respective element, you can "mark" the event to allow such behavior.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Example: `,(0,g.jsx)(n.code,{children:`<Link onClick={(e) => {e.markerAllowTableRowSelection = true;}>My Link Text</Link>`})]}),`
`,(0,g.jsxs)(n.p,{children:[`For other elements or components, we recommend either disabling event propagation by calling `,(0,g.jsx)(n.code,{children:`event.stopPropagation()`}),` in the respective handler, or checking for the target. `,(0,g.jsx)(n.strong,{children:`Per default, propagation is not prevented!`})]}),`
`,(0,g.jsxs)(`details`,{children:[(0,g.jsx)(`summary`,{children:`UI5 Web Components that Block Row Selection by Default`}),(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:`UI5-AI-BUTTON`}),`
`,(0,g.jsx)(n.li,{children:`UI5-AI-PROMPT-INPUT`}),`
`,(0,g.jsx)(n.li,{children:`UI5-AVATAR`}),`
`,(0,g.jsx)(n.li,{children:`UI5-BUTTON`}),`
`,(0,g.jsx)(n.li,{children:`UI5-CALENDAR`}),`
`,(0,g.jsx)(n.li,{children:`UI5-CHECKBOX`}),`
`,(0,g.jsx)(n.li,{children:`UI5-COLOR-PICKER`}),`
`,(0,g.jsx)(n.li,{children:`UI5-COMBOBOX`}),`
`,(0,g.jsx)(n.li,{children:`UI5-DATE-PICKER`}),`
`,(0,g.jsx)(n.li,{children:`UI5-DATERANGE-PICKER`}),`
`,(0,g.jsx)(n.li,{children:`UI5-DATETIME-PICKER`}),`
`,(0,g.jsx)(n.li,{children:`UI5-DURATION-PICKER`}),`
`,(0,g.jsx)(n.li,{children:`UI5-DYNAMIC-DATE-RANGE`}),`
`,(0,g.jsx)(n.li,{children:`UI5-FILE-UPLOADER`}),`
`,(0,g.jsx)(n.li,{children:`UI5-ICON`}),`
`,(0,g.jsx)(n.li,{children:`UI5-INPUT`}),`
`,(0,g.jsx)(n.li,{children:`UI5-LINK`}),`
`,(0,g.jsx)(n.li,{children:`UI5-MENU-ITEM`}),`
`,(0,g.jsx)(n.li,{children:`UI5-MENU-ITEM-GROUP`}),`
`,(0,g.jsx)(n.li,{children:`UI5-MULTI-COMBOBOX`}),`
`,(0,g.jsx)(n.li,{children:`UI5-MULTI-INPUT`}),`
`,(0,g.jsx)(n.li,{children:`UI5-RADIO-BUTTON`}),`
`,(0,g.jsx)(n.li,{children:`UI5-RANGE-SLIDER`}),`
`,(0,g.jsx)(n.li,{children:`UI5-RATING-INDICATOR`}),`
`,(0,g.jsx)(n.li,{children:`UI5-SEGMENTED-BUTTON`}),`
`,(0,g.jsx)(n.li,{children:`UI5-SELECT`}),`
`,(0,g.jsx)(n.li,{children:`UI5-SLIDER`}),`
`,(0,g.jsx)(n.li,{children:`UI5-SPLIT-BUTTON`}),`
`,(0,g.jsx)(n.li,{children:`UI5-STEP-INPUT`}),`
`,(0,g.jsx)(n.li,{children:`UI5-SWITCH`}),`
`,(0,g.jsx)(n.li,{children:`UI5-TEXT-AREA`}),`
`,(0,g.jsx)(n.li,{children:`UI5-TIME-PICKER`}),`
`,(0,g.jsx)(n.li,{children:`UI5-TOGGLE-BUTTON`}),`
`,(0,g.jsx)(n.li,{children:`UI5-UPLOAD-COLLECTION`}),`
`]})]}),`
`,(0,g.jsx)(n.h2,{id:`how-to-stop-the-table-state-from-automatically-resetting-when-the-data-changes`,children:`How to stop the table state from automatically resetting when the data changes?`}),`
`,(0,g.jsxs)(n.p,{children:[`By default, the `,(0,g.jsx)(n.code,{children:`AnalyticalTable`}),` will reset the sorters, filters, grouping, selected rows, etc. when the table data changes. It will also reset all manually resized columns if the container width changes.
In case you want to keep the current state of the Table, you can disable this behavior by using the `,(0,g.jsx)(n.code,{children:`reactTableOptions`}),` prop or for column resize the `,(0,g.jsx)(n.code,{children:`retainColumnWidth`}),` prop.`]}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-jsx`,children:`const [data, setData] = React.useState([])
const skipPageResetRef = React.useRef(false)

const updateData = newData => {
  // When data gets updated with this function, set a flag
  // to disable all of the auto resetting
  skipPageResetRef.current = true

  setData(newData)
}

React.useEffect(() => {
  // After the table has updated, always remove the flag
  skipPageResetRef.current = false
})
<AnalyticalTable
  columns={columns}
  data={data}
  // disable auto reset of columns width if a column has been manually resized
  retainColumnWidth
  // react-table options
  reactTableOptions={{
    // ... any other options you want to set
    autoResetHiddenColumns: !skipPageResetRef.current,
    autoResetPage: !skipPageResetRef.current,
    autoResetExpanded: !skipPageResetRef.current,
    autoResetGroupBy: !skipPageResetRef.current,
    autoResetSelectedRows: !skipPageResetRef.current,
    autoResetSortBy: !skipPageResetRef.current,
    autoResetFilters: !skipPageResetRef.current,
    autoResetRowState: !skipPageResetRef.current,
    autoResetResize: !skipPageResetRef.current
  }}
/>
`})}),`
`,(0,g.jsxs)(n.p,{children:[`For more details on this behavior you can double check the `,(0,g.jsx)(n.a,{href:`https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/faq.md#how-do-i-stop-my-table-state-from-automatically-resetting-when-my-data-changes`,rel:`nofollow`,children:`react-table v7 docs`}),`.`]}),`
`,(0,g.jsx)(n.h2,{id:`how-to-scroll-to-a-specific-rowoffset`,children:`How to scroll to a specific row/offset?`}),`
`,(0,g.jsxs)(n.p,{children:[`The DOM instance of the `,(0,g.jsx)(n.code,{children:`AnalyticalTable`}),` exposes methods for scrolling to a specific index or offset. (You can access the DOM element e.g. by creating a Ref `,(0,g.jsx)(n.code,{children:`ref={analyticalTableRef}`}),`)`]}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.code,{children:`scrollTo: (offset: number, align?: 'start' | 'center' | 'end' | 'auto') => void`})}),`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.code,{children:`scrollToItem: (index: number, align?: 'start' | 'center' | 'end' | 'auto') => void`})}),`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.code,{children:`horizontalScrollTo: (offset: number, align?: 'start' | 'center' | 'end' | 'auto') => void`})}),`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.code,{children:`horizontalScrollToItem: (index: number, align?: 'start' | 'center' | 'end' | 'auto') => void`})}),`
`]}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`offset`}),` is measured in `,(0,g.jsx)(n.code,{children:`px`}),` and `,(0,g.jsx)(n.code,{children:`index`}),` in rows. `,(0,g.jsx)(n.code,{children:`align`}),` places the item/offset at the corresponding position of the visible scroll area (`,(0,g.jsx)(n.code,{children:`'auto'`}),` brings the item/offset into the visible scroll area either at the start or end, depending on which is closer). The default value for `,(0,g.jsx)(n.code,{children:`align`}),` is `,(0,g.jsx)(n.code,{children:`'start'`}),`.`]}),`
`,(0,g.jsx)(n.h2,{id:`how-to-manually-sort-filter-or-group-the-table`,children:`How to manually sort, filter or group the table?`}),`
`,(0,g.jsxs)(n.p,{children:[`For e.g. server side sorting, filtering or grouping, the default behavior of the table can be prevented. When setting the following `,(0,g.jsx)(n.code,{children:`reactTableOption`}),` the event is still fired and the indicator still set, but the internal data stays the same.
If you wish to implement your own data manipulation outside the table you can use:`]}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-jsx`,children:`<AnalyticalTable
  ...
  reactTableOptions={{
    manualSortBy: true,
    manualFilters: true,
    manualGroupBy: true
  }}
/>
`})}),`
`,(0,g.jsxs)(n.p,{children:[`For more information please take a look at the `,(0,g.jsx)(n.a,{href:`https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/overview.md`,rel:`nofollow`,children:`React Table v7 docs`}),`.`]}),`
`,(0,g.jsxs)(n.h2,{id:`how-to-distinguish-between-onrowclick-and-onrowselect-on-selection-cell-click`,children:[`How to distinguish between `,(0,g.jsx)(n.code,{children:`onRowClick`}),` and `,(0,g.jsx)(n.code,{children:`onRowSelect`}),` on selection-cell click?`]}),`
`,(0,g.jsxs)(n.p,{children:[`When a selectable cell of the table is clicked, both `,(0,g.jsx)(n.code,{children:`onRowClick`}),` and `,(0,g.jsx)(n.code,{children:`onRowSelect`}),` are fired. Sometimes, but especially when the selection behavior is set to `,(0,g.jsx)(n.code,{children:`RowSelector`}),`, you don't want `,(0,g.jsx)(n.code,{children:`onRowClick`}),` to execute the logic you defined in your handler when clicking the selection-cell.
To achieve this, you can check the `,(0,g.jsx)(n.code,{children:`target`}),` inside the `,(0,g.jsx)(n.code,{children:`onRowClick`}),` handler for the `,(0,g.jsx)(n.code,{children:`data-selection-cell`}),` attribute contained in the `,(0,g.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset`,rel:`nofollow`,children:`dataset`}),` and only execute your logic if this property doesn't equal `,(0,g.jsx)(n.code,{children:`"true"`}),`.`]}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-js`,children:`// both events are fired if the clicked cell is selectable
const onRowClick = (e) => {
  if (e.target.dataset.selectionCell === 'true') {
    // do something if the selection cell is clicked
  } else {
    // do something if other cells than the selection cell are clicked
  }
};
const onRowSelect = (e) => {
  // do something on row select
};
`})}),`
`,(0,g.jsx)(n.h2,{id:`how-to-hide-columns`,children:`How to hide columns?`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.a,{href:`https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/useTable.md`,rel:`nofollow`,children:`React Table v7`}),` exposes an API on the table instance to hide columns. You can leverage it for example by attaching a React Ref to the `,(0,g.jsx)(n.code,{children:`tableInstance`}),` prop.
Please note that the internal react-table is resetting its hidden state after hiding the column, which is most probably a bug. To prevent this you can set the `,(0,g.jsx)(n.code,{children:`autoResetHiddenColumns`}),` table option to `,(0,g.jsx)(n.code,{children:`false`}),`. (See `,(0,g.jsx)(n.a,{href:`?path=/docs/data-display-analyticaltable--default-story#how-to-stop-the-table-state-from-automatically-resetting-when-the-data-changes`,children:`here`}),`)`]}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-jsx`,children:`  <Button
    onClick={() => {
      tableInstanceRef.current.toggleHideColumn("age");
    }}
  >
    Toggle Age Col
  </Button>
  <AnalyticalTable
    columns={COLUMNS}
    data={DATA}
    tableInstance={tableInstanceRef}
    reactTableOptions={{
      autoResetHiddenColumns: false
    }}
  />
`})}),`
`,(0,g.jsx)(n.h2,{id:`how-to-scale-custom-cells`,children:`How to scale custom cells?`}),`
`,(0,g.jsxs)(n.p,{children:[`Automatic scaling of custom cells is not supported when used with `,(0,g.jsx)(n.code,{children:`scaleWidthMode: AnalyticalTableScaleWidthMode.Grow`}),` or `,(0,g.jsx)(n.code,{children:`scaleWidthMode: AnalyticalTableScaleWidthMode.Smart`}),`, as we're using the text of the cell for our calculation.
Since v1.22.0 you can use the column option `,(0,g.jsx)(n.code,{children:`scaleWidthModeOptions`}),` to pass a string for the internal width calculation of the header cell (`,(0,g.jsx)(n.code,{children:`headerString`}),`) and the body cells (`,(0,g.jsx)(n.code,{children:`cellString`}),`).`]}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-jsx`,children:`const columns = [
  // This column is automatically scaled because the header and body cells consists of text content only.
  { Header: 'Text Content', accessor: 'name' },
  {
    accessor: 'age',
    // The header isn't included in the calculation of the column width, because it contains a custom component.
    Header: () => (
      <FlexBox direction={FlexBoxDirection.Column}>
        <Text wrapping={false}>Long header text in a vertical layout</Text>
        <Link>Click me!</Link>
      </FlexBox>
    ),
    scaleWidthModeOptions: {
      headerString: 'Long header text in a vertical layout'
    }
  },
  {
    id: '1',
    // The body cells aren't included in the calculation of the column width, because they contain a custom component.
    Header: 'Custom cell',
    Cell: () => (
      <FlexBox direction={FlexBoxDirection.Column}>
        <Text wrapping={false}>Long body cell text in a vertical layout</Text>
        <Link>Click me!</Link>
      </FlexBox>
    ),
    scaleWidthModeOptions: {
      cellString: 'Long body cell text in a vertical layout'
    }
  },
  {
    id: '2',
    // Neither the header nor the body cells are included in the calculation of the column width,
    // because they contain a custom component.
    Header: () => (
      <FlexBox direction={FlexBoxDirection.Column}>
        <Text wrapping={false}>Long header text in a vertical layout</Text>
        <Link>Click me!</Link>
      </FlexBox>
    ),
    Cell: () => (
      <FlexBox direction={FlexBoxDirection.Column}>
        <Text wrapping={false}>Long body cell text in a vertical layout</Text>
        <Link>Click me!</Link>
      </FlexBox>
    ),
    scaleWidthModeOptions: {
      headerString: 'Long header text in a vertical layout',
      cellString: 'Long body cell text in a vertical layout'
    }
  }
];
`})}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-jsx`,children:`<AnalyticalTable data={props.data} columns={columns} scaleWidthMode={AnalyticalTableScaleWidthMode.Smart} />
`})}),`
`,(0,g.jsx)(n.h2,{id:`how-to-render-active-components-dialogs-and-popovers-in-custom-cells`,children:`How to render active components, dialogs and popovers in custom cells?`}),`
`,(0,g.jsxs)(n.p,{children:[`The table implements `,(0,g.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Event`,rel:`nofollow`,children:`Events`}),` for keyboard navigation, selection, etc. When rendering an active element inside a custom cell, the events of the elements are bubbling up to the table.
To prevent this you can call `,(0,g.jsx)(n.code,{children:`event.stopPropagation()`}),` inside the respective handler.`]}),`
`,(0,g.jsx)(n.p,{children:`Below you can find two examples of typical pain points:`}),`
`,(0,g.jsx)(n.h3,{id:`dialogs--popovers`,children:`Dialogs & Popovers`}),`
`,(0,g.jsxs)(n.p,{children:[`In general, we recommend mounting modals like Dialogs or Popovers outside the `,(0,g.jsx)(n.code,{children:`AnalyticalTable`}),`.
Still, it's possible to also render them inside a custom cell, but there are some things to consider:`]}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:`Use conditional rendering to prevent the modal from being rendered for every cell.`}),`
`,(0,g.jsxs)(n.li,{children:[`Call `,(0,g.jsx)(n.code,{children:`event.stopPropagation()`}),` in the respective handler of the event if you're facing issues with focus handling (`,(0,g.jsx)(n.code,{children:`onFocus`}),`), keyboard navigation (i.a. `,(0,g.jsx)(n.code,{children:`onKeyDown`}),`), etc.`]}),`
`]}),`
`,(0,g.jsxs)(n.p,{children:[`Here you can find an example of how to prevent the `,(0,g.jsx)(n.code,{children:`focus`}),` event from bubbling up:`]}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-jsx`,children:`const columns = [
  {
    id: 'custom',
    Header: 'Custom cell with button and dialog',
    Cell: () => {
      const [open, toggle] = useReducer((prev) => !prev, false);
      const uniqueId = useId();
      return (
        <>
          <Button onClick={toggle}>Open</Button>
          <Dialog
            open={open}
            initialFocus={uniqueId}
            onFocus={(e) => {
              e.stopPropagation();
            }}
          >
            <Input placeholder="Focus me!" id={uniqueId} />
          </Dialog>
        </>
      );
    }
  }
];
`})}),`
`,(0,g.jsx)(n.h3,{id:`inputs`,children:`Inputs`}),`
`,(0,g.jsxs)(n.p,{children:[`Per default the table stops event propagation for `,(0,g.jsx)(n.code,{children:`click`}),` events of ui5-webcomponent inputs. This is not the case for native inputs (`,(0,g.jsx)(n.code,{children:`<input>`}),`) or other events like `,(0,g.jsx)(n.code,{children:`key`}),` events.`]}),`
`,(0,g.jsxs)(n.p,{children:[`A typical case is moving the caret inside an input via the arrow keys, which will bubble up to the table if propagation isn't stopped.
In the example below, you can see how you could stop the `,(0,g.jsx)(n.code,{children:`keydown`}),` event from bubbling up to the table if arrow keys are pressed.`]}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-jsx`,children:`const columns = [
  {
    Header: 'Column with Inputs',
    id: 'inputs',
    Cell: () => {
      return (
        <Input
          onKeyDown={(e) => {
            if (e.key.startsWith('Arrow')) {
              e.stopPropagation();
            }
          }}
        />
      );
    }
  }
];
`})}),`
`,(0,g.jsx)(n.h2,{id:`how-to-initially-set-a-table-state`,children:`How to initially set a table state?`}),`
`,(0,g.jsxs)(n.p,{children:[`To initially select or expand a row; reorder, filter, group, hide or sort a column you can use the `,(0,g.jsx)(n.code,{children:`reactTableOptions.initialState`}),` object:`]}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-jsx`,children:`<AnalyticalTable
  {...otherProps}
  reactTableOptions={{
    initialState: {
      columnOrder: ['age', 'name'],
      filters: [{ id: 'age', value: '27' }],
      groupBy: ['age'],
      hiddenColumns: ['name'],
      selectedRowIds: { 2: true, 5: true, ['18.3']: true },
      sortBy: [
        {
          id: 'age',
          desc: true
        }
      ],
      expanded: {
        18: true,
        18.3: true
      }
    }
  }}
/>
`})}),`
`,(0,g.jsx)(n.h2,{id:`how-to-show-ellipsis-for-custom-cells`,children:`How to show ellipsis for custom Cells?`}),`
`,(0,g.jsx)(n.p,{children:(0,g.jsx)(n.strong,{children:`Applicable since v2.16.1`})}),`
`,(0,g.jsxs)(n.p,{children:[`When using custom `,(0,g.jsx)(n.code,{children:`Cell`}),` renderers, text truncation with ellipsis works automatically if you return a plain string. However, when rendering custom content, you need to handle ellipsis styling yourself.`]}),`
`,(0,g.jsx)(n.h3,{id:`automatic-ellipsis-plain-strings`,children:`Automatic Ellipsis (Plain Strings)`}),`
`,(0,g.jsxs)(n.p,{children:[`If your custom `,(0,g.jsx)(n.code,{children:`Cell`}),` renderer returns a plain string, ellipsis is ensured automatically:`]}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-jsx`,children:`const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    Cell: ({ value }) => value // Plain string - ellipsis works automatically
  },
];
`})}),`
`,(0,g.jsx)(n.h3,{id:`manual-ellipsis-custom-elements`,children:`Manual Ellipsis (Custom Elements)`}),`
`,(0,g.jsx)(n.p,{children:`When rendering custom elements, you need to apply ellipsis styling:`}),`
`,(0,g.jsx)(n.h4,{id:`inline-content`,children:`Inline Content`}),`
`,(0,g.jsxs)(n.p,{children:[`Use the `,(0,g.jsx)(n.code,{children:`webComponentsReactProperties.classes.textEllipsis`}),` class for inline content that should truncate with ellipsis:`]}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-jsx`,children:`const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    Cell: ({ value, webComponentsReactProperties }) => (
      <span
        className={webComponentsReactProperties.classes.textEllipsis}
        title={value} // Show full text on hover
      >
        {value}
      </span>
    ),
  },
];
`})}),`
`,(0,g.jsx)(n.h4,{id:`for-web-components-with-built-in-text-handling`,children:`For Web Components with Built-in Text Handling`}),`
`,(0,g.jsxs)(n.p,{children:[`Some Web Components like `,(0,g.jsx)(n.code,{children:`Text`}),` and `,(0,g.jsx)(n.code,{children:`Label`}),` handle text truncation internally and don't require the `,(0,g.jsx)(n.code,{children:`textEllipsis`}),` class:`]}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-jsx`,children:`import { Text } from '@ui5/webcomponents-react';

const columns = [
  {
    Header: 'Description',
    accessor: 'description',
    Cell: ({ value }) => (
      <Text maxLines={1}>{value}</Text> // Text component handles ellipsis internally
    ),
  },
];
`})}),`
`,(0,g.jsx)(n.h4,{id:`for-other-custom-components`,children:`For Other Custom Components`}),`
`,(0,g.jsx)(n.p,{children:`For multi-line content or custom components that don't handle ellipsis, truncation must be ensured by defining the styles yourself.`}),`
`,(0,g.jsx)(n.h3,{id:`example`,children:`Example`}),`
`,(0,g.jsxs)(`details`,{children:[(0,g.jsx)(`summary`,{children:`Show Example`}),(0,g.jsx)(d,{of:f})]}),`
`,(0,g.jsx)(`br`,{}),`
`,(0,g.jsx)(`br`,{}),`
`,(0,g.jsx)(s,{})]})}function h(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=n(),a(),c(),l(),r(),p()}))();export{h as default};
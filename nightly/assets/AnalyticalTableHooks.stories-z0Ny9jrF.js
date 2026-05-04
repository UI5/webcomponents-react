import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$d as n,Am as r,Bd as i,Dg as a,Dm as o,Dp as s,Ed as c,Ep as l,Fd as ee,Fn as u,Gd as d,Id as f,In as p,Kd as m,Nm as h,Om as g,Op as _,Td as v,Tp as te,Ym as ne,Zd as y,ah as re,bu as b,cr as ie,d as ae,eu as x,gn as S,hn as C,jm as w,km as oe,lr as T,op as E,sp as D,tu as se,xu as ce,zd as O}from"./iframe-DHV3kOrJ.js";import{n as le,t as ue}from"./paper-plane-qWlbb9sS.js";import{n as de,t as fe}from"./Friends500-D5t8DT1z.js";import{d as pe,f as me,p as he,u as ge}from"./AnalyticalTable.stories-GovMkbWk.js";import{n as _e,t as k}from"./Friends50-DCm8HAgO.js";var A,j=e((()=>{A=[{name:`Owens Glover`,age:22,friend:{name:`Daisy Giles`,age:33},status:`Negative`,isSelected:!0},{name:`Waller Nguyen`,age:56,friend:{name:`Lola Banks`,age:55},status:`None`,isSelected:!0},{name:`Bowen Mckay`,age:32,friend:{name:`Graham Wells`,age:51},status:`Information`},{name:`Freida Weeks`,age:68,friend:{name:`Lee Johnson`,age:61},status:`Negative`},{name:`England Whitehead`,age:82,friend:{name:`Phillips Merritt`,age:19},status:`Information`,isSelected:!0},{name:`Alissa Duke`,age:43,friend:{name:`Rosella Slater`,age:58},status:`None`},{name:`Randolph Grant`,age:76,friend:{name:`Madge Mitchell`,age:48},status:`Critical`},{name:`Malone Hampton`,age:42,friend:{name:`Landry Hancock`,age:33},status:`Negative`},{name:`Lorna Hinton`,age:27,friend:{name:`Maddox House`,age:67},status:`None`},{name:`Janis Wade`,age:19,friend:{name:`Nell Hines`,age:82},status:`Negative`,isSelected:!0},{name:`Rose Vance`,age:47,friend:{name:`Jacobson Wilcox`,age:69},status:`Information`},{name:`Rowe Hamilton`,age:85,friend:{name:`Vasquez Craft`,age:79},status:`Critical`},{name:`Trisha Ellis`,age:42,friend:{name:`Jacobs Ramsey`,age:41},status:`Positive`},{name:`Bowers Rowe`,age:57,friend:{name:`Brigitte Buckner`,age:19},status:`None`},{name:`Gamble Rice`,age:85,friend:{name:`Manning Jenkins`,age:57},status:`Negative`,isSelected:!0},{name:`Letitia Finch`,age:54,friend:{name:`Silva Fulton`,age:52},status:`Information`},{name:`Elinor Middleton`,age:71,friend:{name:`Hines Mckenzie`,age:33},status:`None`},{name:`Jeannine Lopez`,age:38,friend:{name:`Benjamin Rodriguez`,age:76},status:`Negative`,isSelected:!0},{name:`Natasha Simon`,age:73,friend:{name:`Simon Morin`,age:20},status:`Negative`},{name:`Marquita Morrison`,age:61,friend:{name:`Mitzi Blake`,age:80},status:`Negative`},{name:`Lula Mason`,age:49,friend:{name:`Holmes York`,age:31},status:`Information`},{name:`Ginger Strong`,age:79,friend:{name:`Higgins Shannon`,age:25},status:`None`},{name:`Reeves Finley`,age:84,friend:{name:`Sheila Hickman`,age:25},status:`None`,isSelected:!0},{name:`Reilly Mcpherson`,age:34,friend:{name:`Horton Smith`,age:37},status:`Critical`},{name:`Moreno Moore`,age:39,friend:{name:`Lacey Fox`,age:55},status:`None`}]})),M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=e((()=>{_e(),de(),j(),he(),f(),ue(),M=t(a(),1),ae(),D(),_(),c(),se(),T(),p(),i(),S(),m(),ce(),te(),ge(),N=ne(),P={...pe,title:`Data Display / AnalyticalTable / Plugin Hooks`,tags:[`excludeFromSidebar`,`package:@ui5/webcomponents-react`]},F=[re],I={args:{data:[{age:void 0,friend:{name:null,age:0},status:`Error`},...k],visibleRows:5},render(e){return(0,N.jsx)(b,{columns:e.columns,data:e.data,visibleRows:e.visibleRows,tableHooks:F})}},L=e=>e.original.age<40,R=[l(L)],z=[l(`disableSelection`)],B={args:{data:fe.map(e=>({...e,disableSelection:Math.random()<.5})),selectionMode:w.Multiple},render:e=>{let[t,n]=(0,M.useState)(!0);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(C,{onClick:()=>{n(!0)},pressed:t,children:`with function parameter`}),(0,N.jsx)(C,{onClick:()=>{n(!1)},pressed:!t,children:`with string parameter`}),t?(0,N.jsx)(b,{data:e.data,columns:e.columns,selectionMode:e.selectionMode,tableHooks:R,visibleRows:10,header:`All under 40 are not selectable`}):(0,N.jsx)(b,{data:e.data,columns:e.columns,selectionMode:e.selectionMode,selectionBehavior:e.selectionBehavior,tableHooks:z,visibleRows:10,header:`All with "disableSelection: true" are not selectable`})]})}},V=[r()],H={render:e=>{let[t,n]=(0,M.useReducer)(e=>!e,!0);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(C,{onClick:n,pressed:t,children:`${t?`Don't `:``}Select Sub-Rows`}),(0,N.jsx)(b,{selectionMode:w.Multiple,data:me,columns:e.columns,isTreeTable:!0,tableHooks:V,reactTableOptions:{selectSubRows:t}})]})}},U=[oe(`isSelected`)],W={args:{data:A},render:e=>{let[t,n]=(0,M.useReducer)(e=>!e,!0),[r,i]=(0,M.useReducer)(e=>{let[,...t]=e;return e[0].isSelected?[{...e[0],isSelected:!1},...t]:[{...e[0],isSelected:!0},...t]},e.data);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(E,{onClick:i,children:[`Toggle `,(0,N.jsx)(`code`,{children:`isSelected`}),` of 1st row`]}),(0,N.jsx)(`br`,{}),(0,N.jsx)(x,{children:"Clicking this button will refresh the data array passed to the `data` prop."}),(0,N.jsx)(`br`,{}),(0,N.jsx)(`br`,{}),(0,N.jsx)(b,{selectionMode:w.Multiple,data:r,columns:e.columns,tableHooks:U}),(0,N.jsx)(E,{onClick:n,children:`Show first entries in data array`}),!t&&(0,N.jsxs)(d,{direction:`Column`,children:[(0,N.jsx)(`span`,{children:JSON.stringify(r[0],null,2)}),(0,N.jsx)(`span`,{children:JSON.stringify(r[1],null,2)}),(0,N.jsx)(`span`,{children:JSON.stringify(r[2],null,2)}),(0,N.jsx)(`span`,{children:JSON.stringify(r[3],null,2)}),(0,N.jsx)(`span`,{children:JSON.stringify(r[4],null,2)}),(0,N.jsx)(`span`,{children:`...`})]})]})}},G={render:e=>{let[t,r]=(0,M.useState)({}),[i,a]=(0,M.useState)(!1),[o,c]=(0,M.useState)(100),l=e=>{a(e.target.checked)},u=e=>{c(parseInt(e.target.value))},f=(0,M.useCallback)(e=>{r(e)},[r]),p=(0,M.useMemo)(()=>[g(f,{liveUpdate:i,wait:o})],[f,i,o]);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(b,{extension:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(d,{alignItems:n.Center,children:[(0,N.jsx)(x,{children:`liveUpdate: `}),(0,N.jsx)(s,{onChange:l,checked:i})]}),(0,N.jsxs)(d,{alignItems:n.Center,children:[(0,N.jsx)(x,{children:`wait: `}),(0,N.jsx)(v,{onInput:u,type:ee.Number,value:`${o}`})]}),(0,N.jsx)(`br`,{})]}),data:e.data,columns:e.columns,tableHooks:p}),!!Object.keys(t).length&&(0,N.jsxs)(d,{direction:y.Column,children:[(0,N.jsx)(`br`,{}),(0,N.jsx)(O,{children:`Last fired callback of changed column:`}),(0,N.jsx)(`br`,{}),(0,N.jsxs)(d,{children:[(0,N.jsx)(x,{children:`Column:`}),(0,N.jsx)(O,{children:t.header.id})]}),(0,N.jsxs)(d,{children:[(0,N.jsx)(x,{children:`Width:`}),(0,N.jsx)(O,{children:t.columnWidth})]})]})]})}},K=[{Header:`Name`,accessor:`name`,enableMultiSort:!0},{Header:`Age`,accessor:`age`,enableMultiSort:!0},{Header:`Name 2`,accessor:`name2`,enableMultiSort:!0},{Header:`Age 2`,accessor:`age2`,enableMultiSort:!0}],q=[{name:`Peter`,age:40,name2:`Alissa`,age2:18},{name:`Kristen`,age:40,name2:`Randolph`,age2:21},{name:`Peter`,age:30,name2:`Rose`,age2:90},{name:`Peter`,age:70,name2:`Rose`,age2:22},{name:`Kristen`,age:60,name2:`Willis`,age2:80},{name:`Kristen`,age:20,name2:`Alissa`,age2:80},{name:`Graham`,age:40,name2:`Alissa`,age2:80},{name:`Peter`,age:65,name2:`Rose`,age2:26},{name:`Graham`,age:65,name2:`Rose`,age2:26},{name:`Graham`,age:65,name2:`Willis`,age2:26},{name:`Graham`,age:62,name2:`Willis`,age2:26}],J={args:{orderedIds:[`name`,`name2`,`age`,`age2`]},argTypes:{orderedIds:{control:`array`,description:`Defines the sort priority when sorting by multiple columns, starting with the first column ID.

**Note:** Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column.`}},render(e){return(0,N.jsx)(b,{columns:K,data:q,sortable:!0,tableHooks:(0,M.useMemo)(()=>[o(e.orderedIds)],[e.orderedIds])})}},Y=[{Header:`Input`,id:`input`,Cell:e=>(0,N.jsx)(v,{ref:h.useCallbackRef(e)}),interactiveElementName:`Input`},{Header:`Input & Button`,id:`input_btn`,Cell:e=>{let t=h.useCallbackRef(e);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(v,{ref:t}),(0,N.jsx)(E,{ref:t,icon:le,tooltip:`Submit`,accessibleName:`Submit`})]})},interactiveElementName:`Input and Button`},{Header:`Text`,accessor:`name`},{Header:`Button`,id:`btn`,Cell:e=>(0,N.jsx)(E,{ref:h.useCallbackRef(e),children:`Button`}),interactiveElementName:()=>`Button`},{Header:`Non-interactive custom content`,accessor:`friend.name`,Cell:e=>(0,N.jsx)(u,{children:e.value})},{Header:`Switch or CheckBox`,id:`switch_checkbox`,Cell:e=>{let t=h.useCallbackRef(e);return e.row.index%2?(0,N.jsx)(s,{ref:t,accessibleName:`Dummy CheckBox`}):(0,N.jsx)(ie,{ref:t,accessibleName:`Dummy Switch`})},interactiveElementName:e=>e.row.index%2?`CheckBox`:`Switch`}],X=[h],Z={render(e){return(0,N.jsx)(b,{data:e.data.slice(0,10),columns:Y,tableHooks:X,visibleRows:5})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      age: undefined,
      friend: {
        name: null,
        age: 0
      },
      status: 'Error'
    }, ...dataSmall],
    visibleRows: 5
  },
  render(args) {
    return <AnalyticalTable columns={args.columns} data={args.data} visibleRows={args.visibleRows} tableHooks={tableHooksEmptyCells} />;
  }
}`,...I.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataLarge.map(item => ({
      ...item,
      disableSelection: Math.random() < 0.5
    })),
    selectionMode: AnalyticalTableSelectionMode.Multiple
  },
  render: args => {
    const [isFunc, setIsFunc] = useState(true);
    return <>
        <ToggleButton onClick={() => {
        setIsFunc(true);
      }} pressed={isFunc}>
          with function parameter
        </ToggleButton>
        <ToggleButton onClick={() => {
        setIsFunc(false);
      }} pressed={!isFunc}>
          with string parameter
        </ToggleButton>
        {isFunc ? <AnalyticalTable data={args.data} columns={args.columns} selectionMode={args.selectionMode} tableHooks={tableHooksDisableRowSel} visibleRows={10} header="All under 40 are not selectable" /> : <AnalyticalTable data={args.data} columns={args.columns} selectionMode={args.selectionMode} selectionBehavior={args.selectionBehavior} tableHooks={tableHooksDisableRowSel1} visibleRows={10} header={\`All with "disableSelection: true" are not selectable\`} />}
      </>;
  }
}`,...B.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectSubRows, setSelectSubRows] = useReducer(prev => !prev, true);
    return <>
        <ToggleButton onClick={setSelectSubRows} pressed={selectSubRows}>{\`\${selectSubRows ? "Don't " : ''}Select Sub-Rows\`}</ToggleButton>
        <AnalyticalTable selectionMode={AnalyticalTableSelectionMode.Multiple} data={dataTree} columns={args.columns} isTreeTable tableHooks={tableHooksIndeterminateRowSel} reactTableOptions={{
        selectSubRows: selectSubRows
      }} />
      </>;
  }
}`,...H.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataManualSelect
  },
  render: args => {
    const [collapsedCode, setCollapsedCode] = useReducer(coll => !coll, true);
    const [data, toggleFirstRowSelected] = useReducer(prev => {
      const [, ...updatedData] = prev;
      if (prev[0].isSelected) {
        return [{
          ...prev[0],
          isSelected: false
        }, ...updatedData];
      } else {
        return [{
          ...prev[0],
          isSelected: true
        }, ...updatedData];
      }
    }, args.data);
    return <>
        <Button onClick={toggleFirstRowSelected}>
          Toggle <code>isSelected</code> of 1st row
        </Button>
        <br />
        <Label>Clicking this button will refresh the data array passed to the \`data\` prop.</Label>
        <br />
        <br />
        <AnalyticalTable selectionMode={AnalyticalTableSelectionMode.Multiple} data={data} columns={args.columns} tableHooks={tableHooksManualRowSel} />
        <Button onClick={setCollapsedCode}>Show first entries in data array</Button>
        {!collapsedCode && <FlexBox direction="Column">
            <span>{JSON.stringify(data[0], null, 2)}</span>
            <span>{JSON.stringify(data[1], null, 2)}</span>
            <span>{JSON.stringify(data[2], null, 2)}</span>
            <span>{JSON.stringify(data[3], null, 2)}</span>
            <span>{JSON.stringify(data[4], null, 2)}</span>
            <span>...</span>
          </FlexBox>}
      </>;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [useColResizeEvent, setUseColResizeEvent] = useState({});
    const [liveUpdate, setLiveUpdate] = useState(false);
    const [wait, setWait] = useState(100);
    const handleLiveUpdateChange = e => {
      setLiveUpdate(e.target.checked);
    };
    const handleWaitChange = e => {
      setWait(parseInt(e.target.value));
    };
    const handleColWidthUpdate = useCallback(e => {
      setUseColResizeEvent(e);
    }, [setUseColResizeEvent]);
    const tableHooksColResize = useMemo(() => [AnalyticalTableHooks.useOnColumnResize(handleColWidthUpdate, {
      liveUpdate,
      wait
    })], [handleColWidthUpdate, liveUpdate, wait]);
    return <>
        <AnalyticalTable extension={<>
              <FlexBox alignItems={FlexBoxAlignItems.Center}>
                <Label>liveUpdate: </Label>
                <CheckBox onChange={handleLiveUpdateChange} checked={liveUpdate} />
              </FlexBox>
              <FlexBox alignItems={FlexBoxAlignItems.Center}>
                <Label>wait: </Label>
                <Input onInput={handleWaitChange} type={InputType.Number} value={\`\${wait}\`} />
              </FlexBox>
              <br />
            </>} data={args.data} columns={args.columns} tableHooks={tableHooksColResize} />
        {!!Object.keys(useColResizeEvent).length && <FlexBox direction={FlexBoxDirection.Column}>
            <br />
            <Text>Last fired callback of changed column:</Text>
            <br />
            <FlexBox>
              <Label>Column:</Label>
              <Text>{useColResizeEvent.header.id}</Text>
            </FlexBox>
            <FlexBox>
              <Label>Width:</Label>
              <Text>{useColResizeEvent.columnWidth}</Text>
            </FlexBox>
          </FlexBox>}
      </>;
  }
}`,...G.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    orderedIds: ['name', 'name2', 'age', 'age2']
  },
  argTypes: {
    orderedIds: {
      control: 'array',
      description: 'Defines the sort priority when sorting by multiple columns, starting with the first column ID.\\n' + '\\n' + '**Note:** Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column.'
    }
  },
  render(args) {
    const tableHooksOrderedMultiSort = useMemo(() => [AnalyticalTableHooks.useOrderedMultiSort(args.orderedIds)], [args.orderedIds]);
    return <AnalyticalTable columns={orderedMultiSortColumns} data={orderedMultiSortData} sortable tableHooks={tableHooksOrderedMultiSort} />;
  }
}`,...J.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <AnalyticalTable data={args.data.slice(0, 10)} columns={inputCols} tableHooks={tableHooks} visibleRows={5} />;
  }
}`,...Z.parameters?.docs?.source}}},Q=[`PluginAnnounceEmptyCells`,`PluginDisableRowSelection`,`PluginIndeterminateRowSelection`,`PluginManualRowSelect`,`PluginOnColumnResize`,`PluginOrderedMultiSort`,`F2CellEdit`]}));$();export{Z as F2CellEdit,I as PluginAnnounceEmptyCells,B as PluginDisableRowSelection,H as PluginIndeterminateRowSelection,W as PluginManualRowSelect,G as PluginOnColumnResize,J as PluginOrderedMultiSort,Q as __namedExportsOrder,P as default,$ as t};
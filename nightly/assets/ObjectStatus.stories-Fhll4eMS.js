import{aj as g,o as s,j as e,I as v,aX as T,J as x,r as y}from"./iframe-CA3Ho9Q5.js";import{T as p}from"./ThemingParameters-pyhX3s39.js";import{A as C,I}from"./index-BtK-IhRn.js";import{L as n}from"./index-B1DuQcex.js";import{L as O}from"./index-DWY9VANS.js";import{L as w}from"./index-NiE7rD6V.js";import{T as N,c as D,d as j,e as L,g as h}from"./index-D02AwMvW.js";import{T as q}from"./index-Cy9kwmU8.js";import{O as t}from"./index-BHNHxsyD.js";const R="sys-cancel",V="M512 256q0 54-20 100.5t-54.5 81T356 492t-100 20q-54 0-100.5-20t-81-55T20 355.5 0 256t20.5-100 55-81.5T157 20t99-20q53 0 100 20t81.5 54.5T492 156t20 100zm-32 0q0-47-17.5-87.5t-48-71-71.5-48T256 32t-87 18-71.5 48.5-48 71T32 256q0 47 17.5 88t48 71 71.5 47.5 87 17.5q47 0 88-17.5t71-47.5 47.5-71 17.5-88zm-186-7q-5 3-1 9l89 89q9 8 0 17l-16 17q-8 4-9 4t-9-4l-89-89q-1-2-4-2-4 0-5 2l-88 89q-6 4-9 4-1 0-9-4l-16-17q-8-9 0-17l88-89q5-5 0-9l-88-89q-8-9 0-17l16-17q4-4 9-4t9 4l88 89q2 2 5 2 2 0 4-2l89-89q4-4 9-4t9 4l16 17q9 8 0 17z",P=!1,$="SAP-icons-v4",H="@ui5/webcomponents-icons";g(R,{pathData:V,ltr:P,collection:$,packageName:H});const M="sys-cancel",z="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm0 461q42 0 79.5-16t65.5-44 44-65.5 16-79.5-16-79.5-44-65.5-65.5-44T256 51t-79.5 16-65.5 44-44 65.5T51 256t16 79.5 44 65.5 65.5 44 79.5 16zm70-301q11 0 18.5 7.5T352 186t-7 18l-53 52 53 52q7 7 7 18t-7.5 18.5T326 352q-10 0-18-8l-52-52-52 52q-8 8-18 8-11 0-18.5-7.5T160 326q0-10 8-18l52-52-52-52q-8-8-8-18 0-11 7.5-18.5T186 160t18 7l52 53 52-53q7-7 18-7z",A=!1,F="SAP-icons-v5",B="@ui5/webcomponents-icons";g(M,{pathData:z,ltr:A,collection:F,packageName:B});const f="sys-cancel",G={title:"Data Display / ObjectStatus",component:t,argTypes:{children:{control:"text"},icon:{control:{disable:!0}}},args:{state:s.None,children:"ObjectStatus",showDefaultIcon:!0},tags:["package:@ui5/webcomponents-react"]},r={},o={render:function(){return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, minmax(0, 1fr)",rowGap:"1rem",columnGap:"1rem"},children:[e.jsx(t,{showDefaultIcon:!0,state:s.None,children:"ValueState.None"}),e.jsx(t,{showDefaultIcon:!0,state:s.Positive,children:"ValueState.Positive"}),e.jsx(t,{showDefaultIcon:!0,state:s.Critical,children:"ValueState.Critical"}),e.jsx(t,{showDefaultIcon:!0,state:s.Negative,children:"ValueState.Negative"}),e.jsx(t,{showDefaultIcon:!0,state:s.Information,children:"ValueState.Information"})]})}},l={args:{icon:e.jsx(v,{name:f,mode:T.Decorative})}},c={args:{icon:e.jsx(v,{name:f,mode:T.Decorative}),children:null,title:"Cancel"}},_={...s,...I},i={name:"All States",render(){const a=(d=!1,b=!1)=>Object.values(_).map(m=>{const S=parseInt(m.replace("Indication",""),10);return!b&&!isNaN(S)&&S>10?null:e.jsx(t,{interactive:d,inverted:b,state:m,showDefaultIcon:!0,children:m},`${m}-${d?"interactive":""}-${b?"inverted":""}`)});return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, minmax(0, 1fr)",rowGap:"1rem",columnGap:"1rem"},children:[e.jsx(n,{style:{gridColumn:"span 5"},children:"Standard mode:"}),a(),e.jsxs(n,{style:{gridColumn:"span 5"},children:[e.jsx("code",{children:"interactive"})," mode:"]}),a(!0),e.jsx("div",{style:{gridColumn:"span 5",borderBlockStart:`1px solid ${p.sapList_BorderColor}`}}),e.jsx(x,{style:{gridColumn:"span 5",fontFamily:p.sapFontBoldFamily,fontSize:p.sapFontLargeSize},children:"Inverted"}),e.jsx(n,{style:{gridColumn:"span 5"},children:"The ObjectStatus has an inverted visualisation, which is used in cases when the information is crucial for the user’s actions and needs to stand out visually."}),e.jsx(n,{style:{gridColumn:"span 5"},children:"Standard mode:"}),a(!1,!0),e.jsxs(n,{style:{gridColumn:"span 5"},children:[e.jsx("code",{children:"interactive"})," mode:"]}),a(!0,!0)]})}},k=[{os1:"ObjectStatus",os2:"ObjectStatus"}],u={args:{state:"Positive",inverted:!1},argTypes:{inverted:{control:!1,table:{disable:!1}}},render(a){const d=y.useMemo(()=>[{accessor:"os1",Header:"ObjectStatus (controllable)",Cell:()=>e.jsx(t,{...a})},{accessor:"os2",Header:'ObjectStatus ("Negative")',Cell:()=>e.jsx(t,{...a,state:"Negative"})}],[a]);return e.jsxs(e.Fragment,{children:["Table",e.jsx(N,{headerRow:e.jsxs(L,{children:[e.jsx(h,{children:"ObjectStatus (controllable)"}),e.jsx(h,{children:'ObjectStatus ("Negative")'})]}),features:e.jsx(q,{behavior:"RowOnly"}),children:e.jsxs(D,{rowKey:"0",className:"interactive-table-row",children:[e.jsx(j,{children:e.jsx(t,{...a,className:"object-status"})}),e.jsx(j,{children:e.jsx(t,{...a,className:"object-status",state:"Negative"})})]})}),e.jsx("hr",{}),"List",e.jsx(O,{selectionMode:"Single",children:e.jsx(w,{className:"interactive-li",children:e.jsx(t,{...a,className:"object-status"})})}),e.jsx("hr",{}),"AnalyticalTable",e.jsx(C,{data:k,columns:d,minRows:1,selectionMode:"Single",selectionBehavior:"RowOnly"})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function () {
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, minmax(0, 1fr)',
      rowGap: '1rem',
      columnGap: '1rem'
    }}>
        <ObjectStatus showDefaultIcon state={ValueState.None}>
          ValueState.None
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Positive}>
          ValueState.Positive
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Critical}>
          ValueState.Critical
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Negative}>
          ValueState.Negative
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Information}>
          ValueState.Information
        </ObjectStatus>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Icon name={cancelIcon} mode={IconMode.Decorative} />
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Icon name={cancelIcon} mode={IconMode.Decorative} />,
    children: null,
    title: 'Cancel'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  render() {
    const renderStatuses = (interactive = false, inverted = false) => {
      return Object.values(States).map((state: ObjectStatusPropTypes['state']) => {
        const indicationNumber = parseInt(state.replace('Indication', ''), 10);
        if (!inverted && !isNaN(indicationNumber) && indicationNumber > 10) {
          return null;
        }
        return <ObjectStatus key={\`\${state}-\${interactive ? 'interactive' : ''}-\${inverted ? 'inverted' : ''}\`} interactive={interactive} inverted={inverted} state={state} showDefaultIcon>
            {state}
          </ObjectStatus>;
      });
    };
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, minmax(0, 1fr)',
      rowGap: '1rem',
      columnGap: '1rem'
    }}>
        <Label style={{
        gridColumn: 'span 5'
      }}>Standard mode:</Label>
        {renderStatuses()}
        <Label style={{
        gridColumn: 'span 5'
      }}>
          <code>interactive</code> mode:
        </Label>
        {renderStatuses(true)}
        <div style={{
        gridColumn: 'span 5',
        borderBlockStart: \`1px solid \${ThemingParameters.sapList_BorderColor}\`
      }} />
        <Text style={{
        gridColumn: 'span 5',
        fontFamily: ThemingParameters.sapFontBoldFamily,
        fontSize: ThemingParameters.sapFontLargeSize
      }}>
          Inverted
        </Text>
        <Label style={{
        gridColumn: 'span 5'
      }}>
          The ObjectStatus has an inverted visualisation, which is used in cases when the information is crucial for the
          user’s actions and needs to stand out visually.
        </Label>
        <Label style={{
        gridColumn: 'span 5'
      }}>Standard mode:</Label>
        {renderStatuses(false, true)}
        <Label style={{
        gridColumn: 'span 5'
      }}>
          <code>interactive</code> mode:
        </Label>
        {renderStatuses(true, true)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'Positive',
    inverted: false
  },
  argTypes: {
    inverted: {
      control: false,
      table: {
        disable: false
      }
    }
  },
  render(args) {
    const atCols: AnalyticalTableColumnDefinition[] = useMemo(() => [{
      accessor: 'os1',
      Header: 'ObjectStatus (controllable)',
      Cell: () => <ObjectStatus {...args} />
    }, {
      accessor: 'os2',
      Header: 'ObjectStatus ("Negative")',
      Cell: () => <ObjectStatus {...args} state={'Negative'} />
    }], [args]);
    return <>
        Table
        <Table headerRow={<TableHeaderRow>
              <TableHeaderCell>ObjectStatus (controllable)</TableHeaderCell>
              <TableHeaderCell>ObjectStatus ("Negative")</TableHeaderCell>
            </TableHeaderRow>} features={<TableSelectionSingle behavior={'RowOnly'} />}>
          <TableRow rowKey={'0'} className={'interactive-table-row'}>
            <TableCell>
              <ObjectStatus {...args} className={'object-status'} />
            </TableCell>
            <TableCell>
              <ObjectStatus {...args} className={'object-status'} state={'Negative'} />
            </TableCell>
          </TableRow>
        </Table>
        <hr />
        List
        <List selectionMode="Single">
          <ListItemCustom className={'interactive-li'}>
            <ObjectStatus {...args} className={'object-status'} />
          </ListItemCustom>
        </List>
        <hr />
        AnalyticalTable
        <AnalyticalTable data={atData} columns={atCols} minRows={1} selectionMode={'Single'} selectionBehavior={'RowOnly'} />
      </>;
  }
}`,...u.parameters?.docs?.source}}};const W=["Default","WithDefaultIcons","WithCustomIcon","WithIconOnly","InvertedObjectStatus","InListOrTable"],te=Object.freeze(Object.defineProperty({__proto__:null,Default:r,InListOrTable:u,InvertedObjectStatus:i,WithCustomIcon:l,WithDefaultIcons:o,WithIconOnly:c,__namedExportsOrder:W,default:G},Symbol.toStringTag,{value:"Module"}));export{te as C,r as D,i as I,o as W,l as a,c as b,u as c};

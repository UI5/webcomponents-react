import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{$u as r,Bp as i,Fd as a,Fo as o,Io as s,Ji as c,Lo as l,Mo as u,Ou as d,Pd as f,Qu as p,Ro as m,Tu as h,Vp as g,Xi as _,Yi as v,_n as y,_r as b,bi as x,bu as S,gn as C,gr as w,hn as T,jo as E,ku as D,lh as O,ln as k,mn as A,pn as j,qi as M,un as N,vn as P,wu as F,xu as I,yi as L,zg as R}from"./iframe-B05hXFda.js";var z,B,V=n((()=>{(function(e){e.Start=`Start`,e.End=`End`})(z||={}),B=z})),H=e({Default:()=>K,OpenPopover:()=>q,WithToolbarItem:()=>J,__namedExportsOrder:()=>Y,default:()=>G}),U,W,G,K,q,J,Y,X=n((()=>{V(),U=t(R(),1),g(),m(),s(),u(),a(),_(),c(),r(),x(),b(),h(),I(),P(),C(),A(),N(),D(),W=O(),G={title:`Layouts & Floorplans / Toolbar`,component:d,argTypes:{children:{control:{disable:!0}}},args:{alignContent:B.Start},tags:[`package:@ui5/webcomponents`]},K={render:e=>(0,W.jsxs)(d,{...e,children:[(0,W.jsx)(F,{text:`Button 1`}),(0,W.jsxs)(y,{children:[(0,W.jsx)(T,{children:`Option 1`}),(0,W.jsx)(T,{children:`Option 2`}),(0,W.jsx)(T,{children:`Option 3`})]}),(0,W.jsx)(j,{}),(0,W.jsx)(k,{}),(0,W.jsx)(j,{}),(0,W.jsx)(F,{text:`Button 2`}),(0,W.jsxs)(y,{children:[(0,W.jsx)(T,{children:`Option 1`}),(0,W.jsx)(T,{children:`Option 2`}),(0,W.jsx)(T,{children:`Option 3`})]})]})},q={name:`Opening Popovers via ToolbarButton`,render(e){let[t,n]=(0,U.useState)(!1),r=(0,U.useRef)(null);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(d,{...e,children:(0,W.jsx)(F,{onClick:e=>{e.preventDefault();let{targetRef:t}=e.detail;r.current&&(r.current.opener=t,n(!0))},text:`Open Popover`})}),(0,W.jsx)(p,{open:t,ref:r,onClose:()=>{n(!1)},children:`Content`})]})}},J={render(e){return(0,W.jsxs)(d,{...e,children:[(0,W.jsx)(S,{children:(0,W.jsxs)(`div`,{role:`radiogroup`,"aria-label":`Options`,className:`toolbar-item-group`,children:[(0,W.jsx)(L,{name:`group1`,text:`Option 1`,checked:!0}),(0,W.jsx)(L,{name:`group1`,text:`Option 2`}),(0,W.jsx)(L,{name:`group1`,text:`Option 3`})]})}),(0,W.jsx)(S,{children:(0,W.jsxs)(`div`,{role:`group`,"aria-label":`Checkboxes`,className:`toolbar-item-group`,children:[(0,W.jsx)(i,{text:`Checkbox 1`}),(0,W.jsx)(i,{text:`Checkbox 2`,checked:!0}),(0,W.jsx)(i,{text:`Checkbox 3`})]})}),(0,W.jsx)(S,{children:(0,W.jsx)(f,{placeholder:`Enter text`})}),(0,W.jsx)(S,{children:(0,W.jsxs)(l,{placeholder:`Select an option`,children:[(0,W.jsx)(o,{text:`Option 1`}),(0,W.jsx)(o,{text:`Option 2`}),(0,W.jsx)(o,{text:`Option 3`})]})}),(0,W.jsx)(S,{children:(0,W.jsxs)(v,{placeholder:`Select options`,children:[(0,W.jsx)(M,{text:`Item 1`}),(0,W.jsx)(M,{text:`Item 2`}),(0,W.jsx)(M,{text:`Item 3`})]})}),(0,W.jsx)(S,{children:(0,W.jsx)(w,{textOn:`On`,textOff:`Off`})}),(0,W.jsx)(S,{children:(0,W.jsx)(E,{placeholder:`Select a date`})})]})}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <Toolbar {...args}>
      <ToolbarButton text="Button 1" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
      <ToolbarSeparator />
      <ToolbarSpacer />
      <ToolbarSeparator />
      <ToolbarButton text="Button 2" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
    </Toolbar>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Opening Popovers via ToolbarButton',
  render(args) {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const popoverRef = useRef<PopoverDomRef>(null);
    return <>
        <Toolbar {...args}>
          <ToolbarButton onClick={e => {
          e.preventDefault();
          const {
            targetRef
          } = e.detail;
          if (popoverRef.current) {
            popoverRef.current.opener = targetRef;
            setPopoverOpen(true);
          }
        }} text="Open Popover" />
        </Toolbar>
        <Popover open={popoverOpen} ref={popoverRef} onClose={() => {
        setPopoverOpen(false);
      }}>
          Content
        </Popover>
      </>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Toolbar {...args}>
        <ToolbarItem>
          <div role="radiogroup" aria-label="Options" className="toolbar-item-group">
            <RadioButton name="group1" text="Option 1" checked />
            <RadioButton name="group1" text="Option 2" />
            <RadioButton name="group1" text="Option 3" />
          </div>
        </ToolbarItem>
        <ToolbarItem>
          <div role="group" aria-label="Checkboxes" className="toolbar-item-group">
            <CheckBox text="Checkbox 1" />
            <CheckBox text="Checkbox 2" checked />
            <CheckBox text="Checkbox 3" />
          </div>
        </ToolbarItem>
        <ToolbarItem>
          <Input placeholder="Enter text" />
        </ToolbarItem>
        <ToolbarItem>
          <ComboBox placeholder="Select an option">
            <ComboBoxItem text="Option 1" />
            <ComboBoxItem text="Option 2" />
            <ComboBoxItem text="Option 3" />
          </ComboBox>
        </ToolbarItem>
        <ToolbarItem>
          <MultiComboBox placeholder="Select options">
            <MultiComboBoxItem text="Item 1" />
            <MultiComboBoxItem text="Item 2" />
            <MultiComboBoxItem text="Item 3" />
          </MultiComboBox>
        </ToolbarItem>
        <ToolbarItem>
          <Switch textOn="On" textOff="Off" />
        </ToolbarItem>
        <ToolbarItem>
          <DatePicker placeholder="Select a date" />
        </ToolbarItem>
      </Toolbar>;
  }
}`,...J.parameters?.docs?.source}}},Y=[`Default`,`OpenPopover`,`WithToolbarItem`]}));X();export{K as Default,q as OpenPopover,J as WithToolbarItem,Y as __namedExportsOrder,G as default,X as n,H as t};
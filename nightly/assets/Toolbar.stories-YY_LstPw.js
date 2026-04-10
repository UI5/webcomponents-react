import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{Bi as r,Cp as i,Ed as a,Jm as o,Nu as s,Pu as c,Qt as l,Ri as u,So as d,Sp as f,Td as p,Vi as m,Zt as h,an as g,au as _,bo as v,cn as y,cr as b,cu as x,di as S,fi as C,go as w,ho as T,in as E,iu as D,lr as O,lu as k,nn as A,on as j,rn as M,sn as N,tn as P,xo as F,yg as I,yo as L,zi as R}from"./iframe-D7TaIT3K.js";var z,B,V=e((()=>{(function(e){e.Start=`Start`,e.End=`End`})(z||={}),B=z})),H=n({Default:()=>K,OpenPopover:()=>q,WithToolbarItem:()=>J,__namedExportsOrder:()=>Y,default:()=>G}),U,W,G,K,q,J,Y,X=e((()=>{V(),U=t(I(),1),i(),d(),v(),w(),a(),m(),R(),c(),C(),O(),_(),y(),j(),E(),A(),l(),k(),W=o(),G={title:`Layouts & Floorplans / Toolbar`,component:x,argTypes:{children:{control:{disable:!0}}},args:{alignContent:B.Start},tags:[`package:@ui5/webcomponents`]},K={render:e=>(0,W.jsxs)(x,{...e,children:[(0,W.jsx)(D,{text:`Button 1`}),(0,W.jsxs)(g,{children:[(0,W.jsx)(M,{children:`Option 1`}),(0,W.jsx)(M,{children:`Option 2`}),(0,W.jsx)(M,{children:`Option 3`})]}),(0,W.jsx)(P,{}),(0,W.jsx)(h,{}),(0,W.jsx)(P,{}),(0,W.jsx)(D,{text:`Button 2`}),(0,W.jsxs)(g,{children:[(0,W.jsx)(M,{children:`Option 1`}),(0,W.jsx)(M,{children:`Option 2`}),(0,W.jsx)(M,{children:`Option 3`})]})]})},q={name:`Opening Popovers via ToolbarButton`,render(e){let[t,n]=(0,U.useState)(!1),r=(0,U.useRef)(null);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(x,{...e,children:(0,W.jsx)(D,{onClick:e=>{e.preventDefault();let{targetRef:t}=e.detail;r.current&&(r.current.opener=t,n(!0))},text:`Open Popover`})}),(0,W.jsx)(s,{open:t,ref:r,onClose:()=>{n(!1)},children:`Content`})]})}},J={render(e){return(0,W.jsxs)(x,{...e,children:[(0,W.jsx)(N,{children:(0,W.jsxs)(`div`,{role:`radiogroup`,"aria-label":`Options`,className:`toolbar-item-group`,children:[(0,W.jsx)(S,{name:`group1`,text:`Option 1`,checked:!0}),(0,W.jsx)(S,{name:`group1`,text:`Option 2`}),(0,W.jsx)(S,{name:`group1`,text:`Option 3`})]})}),(0,W.jsx)(N,{children:(0,W.jsxs)(`div`,{role:`group`,"aria-label":`Checkboxes`,className:`toolbar-item-group`,children:[(0,W.jsx)(f,{text:`Checkbox 1`}),(0,W.jsx)(f,{text:`Checkbox 2`,checked:!0}),(0,W.jsx)(f,{text:`Checkbox 3`})]})}),(0,W.jsx)(N,{children:(0,W.jsx)(p,{placeholder:`Enter text`})}),(0,W.jsx)(N,{children:(0,W.jsxs)(F,{placeholder:`Select an option`,children:[(0,W.jsx)(L,{text:`Option 1`}),(0,W.jsx)(L,{text:`Option 2`}),(0,W.jsx)(L,{text:`Option 3`})]})}),(0,W.jsx)(N,{children:(0,W.jsxs)(r,{placeholder:`Select options`,children:[(0,W.jsx)(u,{text:`Item 1`}),(0,W.jsx)(u,{text:`Item 2`}),(0,W.jsx)(u,{text:`Item 3`})]})}),(0,W.jsx)(N,{children:(0,W.jsx)(b,{textOn:`On`,textOff:`Off`})}),(0,W.jsx)(N,{children:(0,W.jsx)(T,{placeholder:`Select a date`})})]})}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
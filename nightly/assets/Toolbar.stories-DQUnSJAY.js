import{a as e,c as t,i as n}from"./preload-helper-DbRxMUml.js";import{Ao as r,Cp as i,Eo as a,Fm as o,Gi as s,Hu as c,Ki as l,Mo as u,Td as d,To as f,Ui as p,Uu as m,Wi as h,_i as g,cn as _,dn as v,fn as y,gi as b,hu as x,jo as S,ko as C,ln as w,mr as T,mu as E,ng as D,nn as O,on as k,pn as A,pr as j,rn as M,sn as N,un as P,vu as F,wd as I,wp as L,yu as R}from"./iframe-1tBaAyV3.js";var z,B,V=n((()=>{(function(e){e.Start=`Start`,e.End=`End`})(z||={}),B=z})),H=e({Default:()=>K,OpenPopover:()=>q,WithToolbarItem:()=>J,__namedExportsOrder:()=>Y,default:()=>G}),U,W,G,K,q,J,Y,X=n((()=>{V(),U=t(D(),1),L(),u(),r(),a(),d(),l(),h(),m(),g(),T(),x(),A(),v(),w(),N(),M(),R(),W=o(),G={title:`Layouts & Floorplans / Toolbar`,component:F,argTypes:{children:{control:{disable:!0}}},args:{alignContent:B.Start},tags:[`package:@ui5/webcomponents`]},K={render:e=>(0,W.jsxs)(F,{...e,children:[(0,W.jsx)(E,{text:`Button 1`}),(0,W.jsxs)(P,{children:[(0,W.jsx)(_,{children:`Option 1`}),(0,W.jsx)(_,{children:`Option 2`}),(0,W.jsx)(_,{children:`Option 3`})]}),(0,W.jsx)(k,{}),(0,W.jsx)(O,{}),(0,W.jsx)(k,{}),(0,W.jsx)(E,{text:`Button 2`}),(0,W.jsxs)(P,{children:[(0,W.jsx)(_,{children:`Option 1`}),(0,W.jsx)(_,{children:`Option 2`}),(0,W.jsx)(_,{children:`Option 3`})]})]})},q={name:`Opening Popovers via ToolbarButton`,render(e){let[t,n]=(0,U.useState)(!1),r=(0,U.useRef)(null);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(F,{...e,children:(0,W.jsx)(E,{onClick:e=>{e.preventDefault();let{targetRef:t}=e.detail;r.current&&(r.current.opener=t,n(!0))},text:`Open Popover`})}),(0,W.jsx)(c,{open:t,ref:r,onClose:()=>{n(!1)},children:`Content`})]})}},J={render(e){return(0,W.jsxs)(F,{...e,children:[(0,W.jsx)(y,{children:(0,W.jsxs)(`div`,{role:`radiogroup`,"aria-label":`Options`,className:`toolbar-item-group`,children:[(0,W.jsx)(b,{name:`group1`,text:`Option 1`,checked:!0}),(0,W.jsx)(b,{name:`group1`,text:`Option 2`}),(0,W.jsx)(b,{name:`group1`,text:`Option 3`})]})}),(0,W.jsx)(y,{children:(0,W.jsxs)(`div`,{role:`group`,"aria-label":`Checkboxes`,className:`toolbar-item-group`,children:[(0,W.jsx)(i,{text:`Checkbox 1`}),(0,W.jsx)(i,{text:`Checkbox 2`,checked:!0}),(0,W.jsx)(i,{text:`Checkbox 3`})]})}),(0,W.jsx)(y,{children:(0,W.jsx)(I,{placeholder:`Enter text`})}),(0,W.jsx)(y,{children:(0,W.jsxs)(S,{placeholder:`Select an option`,children:[(0,W.jsx)(C,{text:`Option 1`}),(0,W.jsx)(C,{text:`Option 2`}),(0,W.jsx)(C,{text:`Option 3`})]})}),(0,W.jsx)(y,{children:(0,W.jsxs)(s,{placeholder:`Select options`,children:[(0,W.jsx)(p,{text:`Item 1`}),(0,W.jsx)(p,{text:`Item 2`}),(0,W.jsx)(p,{text:`Item 3`})]})}),(0,W.jsx)(y,{children:(0,W.jsx)(j,{textOn:`On`,textOff:`Off`})}),(0,W.jsx)(y,{children:(0,W.jsx)(f,{placeholder:`Select a date`})})]})}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
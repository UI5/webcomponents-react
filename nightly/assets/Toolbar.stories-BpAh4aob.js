import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{$i as r,Au as i,Bd as a,Bo as o,Ci as s,Eu as c,Ho as l,Io as u,Lo as d,Nu as f,Pu as p,Qi as m,Si as h,Tu as g,Uo as _,Up as v,Vo as y,Wg as b,Wp as x,Xi as S,Zi as C,_n as w,br as T,dn as E,gn as D,hn as O,id as k,ku as A,mh as j,mn as M,rd as N,un as P,vn as F,yn as I,yr as L,zd as R}from"./iframe-TnKwsNrM.js";var z,B,V=n((()=>{(function(e){e.Start=`Start`,e.End=`End`})(z||={}),B=z})),H=e({Default:()=>K,OpenPopover:()=>q,WithToolbarItem:()=>J,__namedExportsOrder:()=>Y,default:()=>G}),U,W,G,K,q,J,Y,X=n((()=>{V(),U=t(b(),1),x(),_(),y(),d(),a(),r(),C(),k(),s(),T(),i(),c(),I(),w(),O(),E(),p(),W=j(),G={title:`Layouts & Floorplans / Toolbar`,component:f,argTypes:{children:{control:{disable:!0}}},args:{alignContent:B.Start},tags:[`package:@ui5/webcomponents`]},K={render:e=>(0,W.jsxs)(f,{...e,children:[(0,W.jsx)(A,{text:`Button 1`}),(0,W.jsxs)(F,{children:[(0,W.jsx)(D,{children:`Option 1`}),(0,W.jsx)(D,{children:`Option 2`}),(0,W.jsx)(D,{children:`Option 3`})]}),(0,W.jsx)(M,{}),(0,W.jsx)(P,{}),(0,W.jsx)(M,{}),(0,W.jsx)(A,{text:`Button 2`}),(0,W.jsxs)(F,{children:[(0,W.jsx)(D,{children:`Option 1`}),(0,W.jsx)(D,{children:`Option 2`}),(0,W.jsx)(D,{children:`Option 3`})]})]})},q={name:`Opening Popovers via ToolbarButton`,render(e){let[t,n]=(0,U.useState)(!1),r=(0,U.useRef)(null);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(f,{...e,children:(0,W.jsx)(A,{onClick:e=>{e.preventDefault();let{targetRef:t}=e.detail;r.current&&(r.current.opener=t,n(!0))},text:`Open Popover`})}),(0,W.jsx)(N,{open:t,ref:r,onClose:()=>{n(!1)},children:`Content`})]})}},J={render(e){return(0,W.jsxs)(f,{...e,children:[(0,W.jsx)(g,{children:(0,W.jsxs)(`div`,{role:`radiogroup`,"aria-label":`Options`,className:`toolbar-item-group`,children:[(0,W.jsx)(h,{name:`group1`,text:`Option 1`,checked:!0}),(0,W.jsx)(h,{name:`group1`,text:`Option 2`}),(0,W.jsx)(h,{name:`group1`,text:`Option 3`})]})}),(0,W.jsx)(g,{children:(0,W.jsxs)(`div`,{role:`group`,"aria-label":`Checkboxes`,className:`toolbar-item-group`,children:[(0,W.jsx)(v,{text:`Checkbox 1`}),(0,W.jsx)(v,{text:`Checkbox 2`,checked:!0}),(0,W.jsx)(v,{text:`Checkbox 3`})]})}),(0,W.jsx)(g,{children:(0,W.jsx)(R,{placeholder:`Enter text`})}),(0,W.jsx)(g,{children:(0,W.jsxs)(l,{placeholder:`Select an option`,children:[(0,W.jsx)(o,{text:`Option 1`}),(0,W.jsx)(o,{text:`Option 2`}),(0,W.jsx)(o,{text:`Option 3`})]})}),(0,W.jsx)(g,{children:(0,W.jsxs)(m,{placeholder:`Select options`,children:[(0,W.jsx)(S,{text:`Item 1`}),(0,W.jsx)(S,{text:`Item 2`}),(0,W.jsx)(S,{text:`Item 3`})]})}),(0,W.jsx)(g,{children:(0,W.jsx)(L,{textOn:`On`,textOff:`Off`})}),(0,W.jsx)(g,{children:(0,W.jsx)(u,{placeholder:`Select a date`})})]})}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
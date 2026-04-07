import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{Bi as r,Cd as i,Mu as a,Qt as o,Ri as s,So as c,Vi as l,Wm as u,Zt as d,an as f,au as p,bo as m,bp as h,cn as g,cr as _,cu as v,di as y,fi as b,go as x,ho as S,in as C,iu as w,ju as T,lr as E,lu as D,mg as O,nn as k,on as A,rn as j,sn as M,tn as N,wd as P,xo as F,xp as I,yo as L,zi as R}from"./iframe-DUpJRssK.js";var z,B,V=e((()=>{(function(e){e.Start=`Start`,e.End=`End`})(z||={}),B=z})),H=n({Default:()=>K,OpenPopover:()=>q,WithToolbarItem:()=>J,__namedExportsOrder:()=>Y,default:()=>G}),U,W,G,K,q,J,Y,X=e((()=>{V(),U=t(O(),1),I(),c(),m(),x(),P(),l(),R(),a(),b(),E(),p(),g(),A(),C(),k(),o(),D(),W=u(),G={title:`Layouts & Floorplans / Toolbar`,component:v,argTypes:{children:{control:{disable:!0}}},args:{alignContent:B.Start},tags:[`package:@ui5/webcomponents`]},K={render:e=>(0,W.jsxs)(v,{...e,children:[(0,W.jsx)(w,{text:`Button 1`}),(0,W.jsxs)(f,{children:[(0,W.jsx)(j,{children:`Option 1`}),(0,W.jsx)(j,{children:`Option 2`}),(0,W.jsx)(j,{children:`Option 3`})]}),(0,W.jsx)(N,{}),(0,W.jsx)(d,{}),(0,W.jsx)(N,{}),(0,W.jsx)(w,{text:`Button 2`}),(0,W.jsxs)(f,{children:[(0,W.jsx)(j,{children:`Option 1`}),(0,W.jsx)(j,{children:`Option 2`}),(0,W.jsx)(j,{children:`Option 3`})]})]})},q={name:`Opening Popovers via ToolbarButton`,render(e){let[t,n]=(0,U.useState)(!1),r=(0,U.useRef)(null);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(v,{...e,children:(0,W.jsx)(w,{onClick:e=>{e.preventDefault();let{targetRef:t}=e.detail;r.current&&(r.current.opener=t,n(!0))},text:`Open Popover`})}),(0,W.jsx)(T,{open:t,ref:r,onClose:()=>{n(!1)},children:`Content`})]})}},J={render(e){return(0,W.jsxs)(v,{...e,children:[(0,W.jsx)(M,{children:(0,W.jsxs)(`div`,{role:`radiogroup`,"aria-label":`Options`,className:`toolbar-item-group`,children:[(0,W.jsx)(y,{name:`group1`,text:`Option 1`,checked:!0}),(0,W.jsx)(y,{name:`group1`,text:`Option 2`}),(0,W.jsx)(y,{name:`group1`,text:`Option 3`})]})}),(0,W.jsx)(M,{children:(0,W.jsxs)(`div`,{role:`group`,"aria-label":`Checkboxes`,className:`toolbar-item-group`,children:[(0,W.jsx)(h,{text:`Checkbox 1`}),(0,W.jsx)(h,{text:`Checkbox 2`,checked:!0}),(0,W.jsx)(h,{text:`Checkbox 3`})]})}),(0,W.jsx)(M,{children:(0,W.jsx)(i,{placeholder:`Enter text`})}),(0,W.jsx)(M,{children:(0,W.jsxs)(F,{placeholder:`Select an option`,children:[(0,W.jsx)(L,{text:`Option 1`}),(0,W.jsx)(L,{text:`Option 2`}),(0,W.jsx)(L,{text:`Option 3`})]})}),(0,W.jsx)(M,{children:(0,W.jsxs)(r,{placeholder:`Select options`,children:[(0,W.jsx)(s,{text:`Item 1`}),(0,W.jsx)(s,{text:`Item 2`}),(0,W.jsx)(s,{text:`Item 3`})]})}),(0,W.jsx)(M,{children:(0,W.jsx)(_,{textOn:`On`,textOff:`Off`})}),(0,W.jsx)(M,{children:(0,W.jsx)(S,{placeholder:`Select a date`})})]})}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
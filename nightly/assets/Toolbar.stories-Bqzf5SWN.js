import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-C184PLS3.js";import{t as i}from"./jsx-runtime-1ARNaUmP.js";import{n as a,t as o}from"./CheckBox-BkTseIcH.js";import{n as s,t as c}from"./Input-DsVlIzwE.js";import{n as l,t as u}from"./Popover-Od3D2E0Y.js";import{a as d,b as f,c as p,d as m,f as h,g,h as _,l as v,n as y,o as b,s as x,t as S,u as C,y as w}from"./ToolbarSpacer-CKqP3p-s.js";import{i as T,n as E,r as D,t as O}from"./ComboBoxItem-CxO_Yola.js";import{n as k,t as A}from"./DatePicker-BCbrhliS.js";import{i as j,n as M,r as N,t as P}from"./MultiComboBoxItem-DaWsYYPG.js";import{n as F,t as I}from"./RadioButton-BSDNwyXv.js";import{n as L,t as R}from"./Switch-DmaHuVoy.js";var z,B,V=e((()=>{(function(e){e.Start=`Start`,e.End=`End`})(z||={}),B=z})),H=n({Default:()=>K,OpenPopover:()=>q,WithToolbarItem:()=>J,__namedExportsOrder:()=>Y,default:()=>G}),U,W,G,K,q,J,Y,X=e((()=>{V(),U=t(r(),1),a(),T(),E(),k(),s(),j(),M(),l(),F(),L(),g(),h(),C(),p(),b(),y(),f(),W=i(),G={title:`Layouts & Floorplans / Toolbar`,component:w,argTypes:{children:{control:{disable:!0}}},args:{alignContent:B.Start},tags:[`package:@ui5/webcomponents`]},K={render:e=>(0,W.jsxs)(w,{...e,children:[(0,W.jsx)(_,{text:`Button 1`}),(0,W.jsxs)(v,{children:[(0,W.jsx)(x,{children:`Option 1`}),(0,W.jsx)(x,{children:`Option 2`}),(0,W.jsx)(x,{children:`Option 3`})]}),(0,W.jsx)(d,{}),(0,W.jsx)(S,{}),(0,W.jsx)(d,{}),(0,W.jsx)(_,{text:`Button 2`}),(0,W.jsxs)(v,{children:[(0,W.jsx)(x,{children:`Option 1`}),(0,W.jsx)(x,{children:`Option 2`}),(0,W.jsx)(x,{children:`Option 3`})]})]})},q={name:`Opening Popovers via ToolbarButton`,render(e){let[t,n]=(0,U.useState)(!1),r=(0,U.useRef)(null);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(w,{...e,children:(0,W.jsx)(_,{onClick:e=>{e.preventDefault();let{targetRef:t}=e.detail;r.current&&(r.current.opener=t,n(!0))},text:`Open Popover`})}),(0,W.jsx)(u,{open:t,ref:r,onClose:()=>{n(!1)},children:`Content`})]})}},J={render(e){return(0,W.jsxs)(w,{...e,children:[(0,W.jsx)(m,{children:(0,W.jsxs)(`div`,{role:`radiogroup`,"aria-label":`Options`,className:`toolbar-item-group`,children:[(0,W.jsx)(I,{name:`group1`,text:`Option 1`,checked:!0}),(0,W.jsx)(I,{name:`group1`,text:`Option 2`}),(0,W.jsx)(I,{name:`group1`,text:`Option 3`})]})}),(0,W.jsx)(m,{children:(0,W.jsxs)(`div`,{role:`group`,"aria-label":`Checkboxes`,className:`toolbar-item-group`,children:[(0,W.jsx)(o,{text:`Checkbox 1`}),(0,W.jsx)(o,{text:`Checkbox 2`,checked:!0}),(0,W.jsx)(o,{text:`Checkbox 3`})]})}),(0,W.jsx)(m,{children:(0,W.jsx)(c,{placeholder:`Enter text`})}),(0,W.jsx)(m,{children:(0,W.jsxs)(D,{placeholder:`Select an option`,children:[(0,W.jsx)(O,{text:`Option 1`}),(0,W.jsx)(O,{text:`Option 2`}),(0,W.jsx)(O,{text:`Option 3`})]})}),(0,W.jsx)(m,{children:(0,W.jsxs)(N,{placeholder:`Select options`,children:[(0,W.jsx)(P,{text:`Item 1`}),(0,W.jsx)(P,{text:`Item 2`}),(0,W.jsx)(P,{text:`Item 3`})]})}),(0,W.jsx)(m,{children:(0,W.jsx)(R,{textOn:`On`,textOff:`Off`})}),(0,W.jsx)(m,{children:(0,W.jsx)(A,{placeholder:`Select a date`})})]})}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
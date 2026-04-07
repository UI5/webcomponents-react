import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{Cd as r,Nd as i,Pd as a,Wm as o,dr as s,fl as c,if as l,mg as u,mr as d,om as f,pl as p,pr as m,rf as h,sm as g,ur as _,wd as v}from"./iframe-DE4w57_p.js";var y=n({Default:()=>C,FullyControlled:()=>w,WithSuggestionItem:()=>T,__namedExportsOrder:()=>E,default:()=>S}),b,x,S,C,w,T,E,D=e((()=>{a(),f(),p(),b=t(u(),1),l(),d(),s(),v(),x=o(),S={title:`Inputs / Input`,component:r,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{type:i.Text,valueState:g.None,icon:(0,x.jsx)(h,{name:c})},tags:[`package:@ui5/webcomponents`]},C={},w={render(e){let[t,n]=(0,b.useState)(``);return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(r,{...e,value:t,onInput:t=>{t.preventDefault(),e.onInput(t),/^[a-zA-Z]*$/.test(t.target.value)&&n(t.target.value)}})})}},T={name:`with SuggestionItem`,args:{showSuggestions:!0,placeholder:`type anything to show suggestions`,icon:null},render:e=>(0,x.jsxs)(r,{...e,style:{width:`400px`},children:[(0,x.jsxs)(_,{headerText:`A Group`,children:[(0,x.jsx)(m,{text:`United States`,additionalText:`USA`}),(0,x.jsx)(m,{text:`Bulgaria`})]}),(0,x.jsxs)(_,{headerText:`Another Group Items`,children:[(0,x.jsx)(m,{text:`Argentina`}),(0,x.jsx)(m,{text:`Germany`}),(0,x.jsx)(m,{text:`Iceland`}),(0,x.jsx)(m,{text:`Moldova`})]})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [value, setValue] = useState('');
    return <>
        <Input {...args} value={value} onInput={e => {
        e.preventDefault();
        args.onInput(e);
        if (/^[a-zA-Z]*$/.test(e.target.value)) {
          setValue(e.target.value);
        }
      }} />
      </>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'with SuggestionItem',
  args: {
    showSuggestions: true,
    placeholder: 'type anything to show suggestions',
    icon: null
  },
  render: args => {
    return <Input {...args} style={{
      width: '400px'
    }}>
        <SuggestionItemGroup headerText="A Group">
          <SuggestionItem text="United States" additionalText={'USA'} />
          <SuggestionItem text="Bulgaria" />
        </SuggestionItemGroup>
        <SuggestionItemGroup headerText="Another Group Items">
          <SuggestionItem text="Argentina" />
          <SuggestionItem text="Germany" />
          <SuggestionItem text="Iceland" />
          <SuggestionItem text="Moldova" />
        </SuggestionItemGroup>
      </Input>;
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`FullyControlled`,`WithSuggestionItem`]}));D();export{C as Default,w as FullyControlled,T as WithSuggestionItem,E as __namedExportsOrder,S as default,D as n,y as t};
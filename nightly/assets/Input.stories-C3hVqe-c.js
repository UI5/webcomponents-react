import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-C184PLS3.js";import{t as i}from"./jsx-runtime-CNp2Ms8r.js";import{n as a,t as o}from"./ValueState-BUbtrWoD.js";import{n as s,t as c}from"./Icon-DhrpU3V6.js";import{d as l,f as u}from"./Input-CObk3RKC.js";import{n as d,t as f}from"./Input-Cqf9uYx5.js";import{n as p,t as m}from"./employee-BQg2fU8R.js";import{i as h,n as g,r as _,t as v}from"./SuggestionItemGroup-CAa9EyTp.js";var y=n({Default:()=>C,FullyControlled:()=>w,WithSuggestionItem:()=>T,__namedExportsOrder:()=>E,default:()=>S}),b,x,S,C,w,T,E,D=e((()=>{u(),o(),p(),b=t(r(),1),s(),h(),g(),d(),x=i(),S={title:`Inputs / Input`,component:f,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{type:l.Text,valueState:a.None,icon:(0,x.jsx)(c,{name:m})},tags:[`package:@ui5/webcomponents`]},C={},w={render(e){let[t,n]=(0,b.useState)(``);return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(f,{...e,value:t,onInput:t=>{t.preventDefault(),e.onInput(t),/^[a-zA-Z]*$/.test(t.target.value)&&n(t.target.value)}})})}},T={name:`with SuggestionItem`,args:{showSuggestions:!0,placeholder:`type anything to show suggestions`,icon:null},render:e=>(0,x.jsxs)(f,{...e,style:{width:`400px`},children:[(0,x.jsxs)(v,{headerText:`A Group`,children:[(0,x.jsx)(_,{text:`United States`,additionalText:`USA`}),(0,x.jsx)(_,{text:`Bulgaria`})]}),(0,x.jsxs)(v,{headerText:`Another Group Items`,children:[(0,x.jsx)(_,{text:`Argentina`}),(0,x.jsx)(_,{text:`Germany`}),(0,x.jsx)(_,{text:`Iceland`}),(0,x.jsx)(_,{text:`Moldova`})]})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
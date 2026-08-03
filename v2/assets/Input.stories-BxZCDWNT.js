import{n as e,o as t,r as n}from"./rolldown-runtime-DAXXjFlN.js";import{t as r}from"./react-DEAHbL4P.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{n as a,t as o}from"./ValueState-D2NAsvuR.js";import{n as s,t as c}from"./Icon-DoEpZ_5O.js";import{d as l,f as u}from"./Input-BZvlbWOC.js";import{n as d,t as f}from"./Input-BuPjn4GH.js";import{n as p,t as m}from"./search-DuCdYbY_.js";import{n as h,t as g}from"./employee-CqQwTbnf.js";import{a as _,i as v,n as y,o as b,r as x,t as S}from"./SuggestionItemGroup-DuE_tIVM.js";var C=n({Default:()=>D,FullyControlled:()=>O,WithInputIcon:()=>A,WithSuggestionItem:()=>k,__namedExportsOrder:()=>j,default:()=>E}),w,T,E,D,O,k,A,j,M=e((()=>{u(),o(),h(),m(),w=t(r(),1),s(),b(),v(),y(),d(),T=i(),E={title:`Inputs / Input`,component:f,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{type:l.Text,valueState:a.None,icon:(0,T.jsx)(c,{name:g})},tags:[`package:@ui5/webcomponents`]},D={},O={render(e){let[t,n]=(0,w.useState)(``);return(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(f,{...e,value:t,onInput:t=>{t.preventDefault(),e.onInput(t),/^[a-zA-Z]*$/.test(t.target.value)&&n(t.target.value)}})})}},k={name:`with SuggestionItem`,args:{showSuggestions:!0,placeholder:`type anything to show suggestions`,icon:null},render:e=>(0,T.jsxs)(f,{...e,style:{width:`400px`},children:[(0,T.jsxs)(S,{headerText:`A Group`,children:[(0,T.jsx)(x,{text:`United States`,additionalText:`USA`}),(0,T.jsx)(x,{text:`Bulgaria`})]}),(0,T.jsxs)(S,{headerText:`Another Group Items`,children:[(0,T.jsx)(x,{text:`Argentina`}),(0,T.jsx)(x,{text:`Germany`}),(0,T.jsx)(x,{text:`Iceland`}),(0,T.jsx)(x,{text:`Moldova`})]})]})},A={name:`with InputIcon`,argTypes:{icon:{control:{disable:!0}}},args:{placeholder:`Search`,icon:(0,T.jsx)(_,{name:p,accessibleName:`Search`})},render:e=>(0,T.jsx)(f,{...e})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'with InputIcon',
  argTypes: {
    icon: {
      control: {
        disable: true
      }
    }
  },
  args: {
    placeholder: 'Search',
    icon: <InputIcon name={searchIcon} accessibleName="Search" />
  },
  render: args => {
    return <Input {...args} />;
  }
}`,...A.parameters?.docs?.source}}},j=[`Default`,`FullyControlled`,`WithSuggestionItem`,`WithInputIcon`]}));M();export{D as Default,O as FullyControlled,A as WithInputIcon,k as WithSuggestionItem,j as __namedExportsOrder,E as default,M as n,C as t};
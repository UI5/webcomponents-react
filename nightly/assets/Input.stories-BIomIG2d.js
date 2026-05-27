import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{Cf as r,Cr as i,Er as a,Fd as o,Gd as s,Ml as c,Nl as l,Pd as u,Sr as d,Tr as f,Wd as p,lh as m,vm as h,wf as g,ym as _,zg as v}from"./iframe-k3VOpMSv.js";var y=e({Default:()=>C,FullyControlled:()=>w,WithSuggestionItem:()=>T,__namedExportsOrder:()=>E,default:()=>S}),b,x,S,C,w,T,E,D=n((()=>{s(),h(),l(),b=t(v(),1),g(),a(),i(),o(),x=m(),S={title:`Inputs / Input`,component:u,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{type:p.Text,valueState:_.None,icon:(0,x.jsx)(r,{name:c})},tags:[`package:@ui5/webcomponents`]},C={},w={render(e){let[t,n]=(0,b.useState)(``);return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(u,{...e,value:t,onInput:t=>{t.preventDefault(),e.onInput(t),/^[a-zA-Z]*$/.test(t.target.value)&&n(t.target.value)}})})}},T={name:`with SuggestionItem`,args:{showSuggestions:!0,placeholder:`type anything to show suggestions`,icon:null},render:e=>(0,x.jsxs)(u,{...e,style:{width:`400px`},children:[(0,x.jsxs)(d,{headerText:`A Group`,children:[(0,x.jsx)(f,{text:`United States`,additionalText:`USA`}),(0,x.jsx)(f,{text:`Bulgaria`})]}),(0,x.jsxs)(d,{headerText:`Another Group Items`,children:[(0,x.jsx)(f,{text:`Argentina`}),(0,x.jsx)(f,{text:`Germany`}),(0,x.jsx)(f,{text:`Iceland`}),(0,x.jsx)(f,{text:`Moldova`})]})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
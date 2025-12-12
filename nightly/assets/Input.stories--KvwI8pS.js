import{j as e,o as i,I as u}from"./iframe-CA3Ho9Q5.js";import{a as g}from"./Input-CVKYZVtQ.js";import{e as m}from"./employee-C86Fzts5.js";import{a as r,S as t}from"./index-D_YS_F8t.js";import{I as n}from"./index-U8bJ6mPR.js";const p={title:"Inputs / Input",component:n,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{type:g.Text,valueState:i.None,icon:e.jsx(u,{name:m})},tags:["package:@ui5/webcomponents"]},o={},s={name:"with SuggestionItem",args:{showSuggestions:!0,placeholder:"type anything to show suggestions",icon:null},render:a=>e.jsxs(n,{...a,style:{width:"400px"},children:[e.jsxs(r,{headerText:"A Group",children:[e.jsx(t,{text:"United States",additionalText:"USA"}),e.jsx(t,{text:"Bulgaria"})]}),e.jsxs(r,{headerText:"Another Group Items",children:[e.jsx(t,{text:"Argentina"}),e.jsx(t,{text:"Germany"}),e.jsx(t,{text:"Iceland"}),e.jsx(t,{text:"Moldova"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const l=["Default","WithSuggestionItem"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WithSuggestionItem:s,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{h as C,o as D,s as W};

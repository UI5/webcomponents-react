import{o as p,q as m,j as e,I as c}from"./iframe-BsLeblbZ.js";import{a as d}from"./Input-DlcD5Uyx.js";import{e as x}from"./employee-CqkRtrO_.js";import{a as i,S as t}from"./index-HC9aNDJz.js";import{I as u}from"./index-B918Q3Uk.js";const I={title:"Inputs / Input",component:u,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{type:d.Text,valueState:p.None,icon:e.jsx(c,{name:x})},tags:["package:@ui5/webcomponents"]},r={},s={render(n){const[g,l]=m.useState("");return e.jsx(e.Fragment,{children:e.jsx(u,{...n,value:g,onInput:a=>{a.preventDefault(),n.onInput(a),/^[a-zA-Z]*$/.test(a.target.value)&&l(a.target.value)}})})}},o={name:"with SuggestionItem",args:{showSuggestions:!0,placeholder:"type anything to show suggestions",icon:null},render:n=>e.jsxs(u,{...n,style:{width:"400px"},children:[e.jsxs(i,{headerText:"A Group",children:[e.jsx(t,{text:"United States",additionalText:"USA"}),e.jsx(t,{text:"Bulgaria"})]}),e.jsxs(i,{headerText:"Another Group Items",children:[e.jsx(t,{text:"Argentina"}),e.jsx(t,{text:"Germany"}),e.jsx(t,{text:"Iceland"}),e.jsx(t,{text:"Moldova"})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const S=["Default","FullyControlled","WithSuggestionItem"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:r,FullyControlled:s,WithSuggestionItem:o,__namedExportsOrder:S,default:I},Symbol.toStringTag,{value:"Module"}));export{G as C,r as D,s as F,o as W};

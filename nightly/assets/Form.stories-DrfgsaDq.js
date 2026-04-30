import{n as e,o as t,r as n}from"./chunk-jRWAZmH_.js";import{Aa as r,Da as i,Dg as a,Dn as o,Dp as s,Ea as c,Fd as l,Id as u,Oa as d,Pl as f,Ta as p,Td as m,Ym as h,eu as g,ka as _,ma as v,op as y,u as b,wl as x,zd as S}from"./iframe-B8y-G8MT.js";var C=n({Default:()=>D,DisplayEditMode:()=>A,__namedExportsOrder:()=>j,default:()=>E}),w,T,E,D,O,k,A,j,M=e((()=>{u(),w=t(a(),1),b(),d(),c(),r(),T=h(),E={title:`Layouts & Floorplans / Form`,component:_,argTypes:{children:{control:{disable:!0}}},args:{headerText:`Test Form`,layout:`S1 M1 L2 XL2`,labelSpan:`S12 M4 L4 XL4`},tags:[`package:@ui5/webcomponents`]},D={render:e=>(0,T.jsxs)(_,{...e,children:[(0,T.jsxs)(i,{headerText:`Personal Data`,children:[(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Name`}),children:(0,T.jsx)(m,{type:l.Text})}),(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Address`}),children:(0,T.jsx)(m,{type:l.Text})}),(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Country`}),children:(0,T.jsxs)(x,{children:[(0,T.jsx)(f,{children:`Germany`}),(0,T.jsx)(f,{children:`France`}),(0,T.jsx)(f,{children:`Italy`})]})}),(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Additional Comment`}),className:`formAlignLabelStart`,children:(0,T.jsx)(o,{rows:5,placeholder:"The label is aligned to start by setting `<class>::part(label){  align-self: start; }` "})}),(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Home address`}),children:(0,T.jsx)(s,{checked:!0})})]}),(0,T.jsxs)(i,{headerText:`Company Data`,children:[(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Company Name`}),children:(0,T.jsx)(m,{type:l.Text})}),(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Company Address`}),children:(0,T.jsx)(m,{type:l.Text})}),(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Company City`}),children:(0,T.jsx)(m,{type:l.Text})}),(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Company Country`}),children:(0,T.jsx)(m,{type:l.Text})}),(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Number of Employees`}),children:(0,T.jsx)(m,{type:l.Number,value:`5000`,disabled:!0})}),(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Member of Partner Network`}),children:(0,T.jsx)(s,{checked:!0})})]}),(0,T.jsxs)(i,{headerText:`Marketing Data`,children:[(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Email`}),children:(0,T.jsx)(m,{type:l.Email})}),(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Company Email`}),children:(0,T.jsx)(m,{type:l.Email})}),(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`I want to receive the newsletter`}),children:(0,T.jsx)(s,{})})]})]})},O=({editMode:e,value:t,inputType:n=l.Text,onInput:r,...i})=>e?(0,T.jsx)(m,{value:t,type:n,onInput:r,...i}):n===l.URL||n===l.Email?(0,T.jsx)(v,{href:n===l.Email?`mailto:${t}`:t,target:`_blank`,...i,children:t}):(0,T.jsx)(S,{...i,children:t}),k=(e,{field:t,value:n})=>({...e,[t]:n}),A={name:`Display & Edit mode`,args:{headerText:`Supplier`},render:e=>{let[t,n]=(0,w.useReducer)(e=>!e,!1,void 0),[r,a]=(0,w.useReducer)(k,{name:`Red Point Stores`,street:`Main St 1618`,zip:31415,city:`Maintown`,country:`Germany`,web:`https://www.sap.com`,mail:`john.smith@sap.com`,twitter:`@sap`,phone:`+49 1234 56789`},void 0),{zip:o,city:s,name:c,street:u,country:d,web:f,mail:h,twitter:v,phone:b}=r,x=e=>{a({field:Object.keys(e.target.dataset)[0],value:e.target.value})};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(y,{onClick:n,children:[`Toggle `,t?`Display-Only Mode`:`Edit Mode`]}),(0,T.jsxs)(_,{...e,onSubmit:e=>{e.preventDefault()},children:[(0,T.jsxs)(i,{headerText:`Address`,children:[(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Name`}),children:(0,T.jsx)(O,{editMode:t,value:c,onInput:x,"data-name":!0})}),(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Street`}),children:(0,T.jsx)(O,{editMode:t,value:u,onInput:x,"data-street":!0})}),(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`ZIP Code / City`}),children:t?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(m,{value:o,type:l.Number,onInput:x,"data-zip":!0}),(0,T.jsx)(m,{value:s,onInput:x,"data-city":!0})]}):(0,T.jsx)(S,{children:`${o} ${s}`})}),(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Country`}),children:(0,T.jsx)(O,{editMode:t,value:d,onInput:x,"data-country":!0})}),(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Web`}),children:(0,T.jsx)(O,{editMode:t,value:f,inputType:l.URL,onInput:x,"data-web":!0})})]}),(0,T.jsxs)(i,{headerText:`Contact`,children:[(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Email`}),children:(0,T.jsx)(O,{editMode:t,value:h,inputType:l.Email,onInput:x,"data-email":!0})}),(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Twitter`}),children:(0,T.jsx)(O,{editMode:t,value:v,onInput:x,"data-twitter":!0})}),(0,T.jsx)(p,{labelContent:(0,T.jsx)(g,{children:`Phone`}),children:(0,T.jsx)(O,{editMode:t,value:b,inputType:l.Tel,onInput:x,"data-phone":!0})})]})]})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Form {...props}>
        <FormGroup headerText="Personal Data">
          <FormItem labelContent={<Label>Name</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem labelContent={<Label>Address</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem labelContent={<Label>Country</Label>}>
            <Select>
              <Option>Germany</Option>
              <Option>France</Option>
              <Option>Italy</Option>
            </Select>
          </FormItem>
          <FormItem labelContent={<Label>Additional Comment</Label>} className="formAlignLabelStart">
            <TextArea rows={5} placeholder="The label is aligned to start by setting \`<class>::part(label){  align-self: start; }\` " />
          </FormItem>
          <FormItem labelContent={<Label>Home address</Label>}>
            <CheckBox checked />
          </FormItem>
        </FormGroup>
        <FormGroup headerText="Company Data">
          <FormItem labelContent={<Label>Company Name</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem labelContent={<Label>Company Address</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem labelContent={<Label>Company City</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem labelContent={<Label>Company Country</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem labelContent={<Label>Number of Employees</Label>}>
            <Input type={InputType.Number} value="5000" disabled />
          </FormItem>
          <FormItem labelContent={<Label>Member of Partner Network</Label>}>
            <CheckBox checked />
          </FormItem>
        </FormGroup>
        <FormGroup headerText="Marketing Data">
          <FormItem labelContent={<Label>Email</Label>}>
            <Input type={InputType.Email} />
          </FormItem>
          <FormItem labelContent={<Label>Company Email</Label>}>
            <Input type={InputType.Email} />
          </FormItem>
          <FormItem labelContent={<Label>I want to receive the newsletter</Label>}>
            <CheckBox />
          </FormItem>
        </FormGroup>
      </Form>;
  }
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Display & Edit mode',
  args: {
    headerText: 'Supplier'
  },
  render: args => {
    const [editMode, toggleEditMode] = useReducer(prev => !prev, false, undefined);
    const [formState, dispatch] = useReducer(reducer, {
      name: 'Red Point Stores',
      street: 'Main St 1618',
      zip: 31415,
      city: 'Maintown',
      country: 'Germany',
      web: 'https://www.sap.com',
      mail: 'john.smith@sap.com',
      twitter: '@sap',
      phone: '+49 1234 56789'
    }, undefined);
    const {
      zip,
      city,
      name,
      street,
      country,
      web,
      mail,
      twitter,
      phone
    } = formState;
    const handleInput = e => {
      dispatch({
        field: Object.keys(e.target.dataset)[0],
        value: e.target.value
      });
    };
    return <>
        <Button onClick={toggleEditMode}>Toggle {editMode ? 'Display-Only Mode' : 'Edit Mode'}</Button>
        <Form {...args} onSubmit={e => {
        e.preventDefault();
      }}>
          <FormGroup headerText="Address">
            <FormItem labelContent={<Label>Name</Label>}>
              <StandardField editMode={editMode} value={name} onInput={handleInput} data-name />
            </FormItem>
            <FormItem labelContent={<Label>Street</Label>}>
              <StandardField editMode={editMode} value={street} onInput={handleInput} data-street />
            </FormItem>
            <FormItem labelContent={<Label>ZIP Code / City</Label>}>
              {editMode ? <>
                  <Input value={zip} type={InputType.Number} onInput={handleInput} data-zip />
                  <Input value={city} onInput={handleInput} data-city />
                </> : <Text>{\`\${zip} \${city}\`}</Text>}
            </FormItem>
            <FormItem labelContent={<Label>Country</Label>}>
              <StandardField editMode={editMode} value={country} onInput={handleInput} data-country />
            </FormItem>
            <FormItem labelContent={<Label>Web</Label>}>
              <StandardField editMode={editMode} value={web} inputType={InputType.URL} onInput={handleInput} data-web />
            </FormItem>
          </FormGroup>
          <FormGroup headerText="Contact">
            <FormItem labelContent={<Label>Email</Label>}>
              <StandardField editMode={editMode} value={mail} inputType={InputType.Email} onInput={handleInput} data-email />
            </FormItem>
            <FormItem labelContent={<Label>Twitter</Label>}>
              <StandardField editMode={editMode} value={twitter} onInput={handleInput} data-twitter />
            </FormItem>
            <FormItem labelContent={<Label>Phone</Label>}>
              <StandardField editMode={editMode} value={phone} inputType={InputType.Tel} onInput={handleInput} data-phone />
            </FormItem>
          </FormGroup>
        </Form>
      </>;
  }
}`,...A.parameters?.docs?.source}}},j=[`Default`,`DisplayEditMode`]}));M();export{D as Default,A as DisplayEditMode,j as __namedExportsOrder,E as default,M as n,C as t};
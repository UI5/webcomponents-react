import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{$f as r,Aa as i,Cd as a,Da as o,Dn as s,Ea as c,Ld as l,Nd as u,Oa as d,Pd as f,Pl as p,Ta as m,Wm as h,bp as g,eu as _,ka as v,ma as y,mg as b,u as x,wl as S}from"./iframe-DxAaeYcU.js";var C=n({Default:()=>D,DisplayEditMode:()=>A,__namedExportsOrder:()=>j,default:()=>E}),w,T,E,D,O,k,A,j,M=e((()=>{f(),w=t(b(),1),x(),d(),c(),i(),T=h(),E={title:`Layouts & Floorplans / Form`,component:v,argTypes:{children:{control:{disable:!0}}},args:{headerText:`Test Form`,layout:`S1 M1 L2 XL2`,labelSpan:`S12 M4 L4 XL4`},tags:[`package:@ui5/webcomponents`]},D={render:e=>(0,T.jsxs)(v,{...e,children:[(0,T.jsxs)(o,{headerText:`Personal Data`,children:[(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Name`}),children:(0,T.jsx)(a,{type:u.Text})}),(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Address`}),children:(0,T.jsx)(a,{type:u.Text})}),(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Country`}),children:(0,T.jsxs)(S,{children:[(0,T.jsx)(p,{children:`Germany`}),(0,T.jsx)(p,{children:`France`}),(0,T.jsx)(p,{children:`Italy`})]})}),(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Additional Comment`}),className:`formAlignLabelStart`,children:(0,T.jsx)(s,{rows:5,placeholder:"The label is aligned to start by setting `<class>::part(label){  align-self: start; }` "})}),(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Home address`}),children:(0,T.jsx)(g,{checked:!0})})]}),(0,T.jsxs)(o,{headerText:`Company Data`,children:[(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Company Name`}),children:(0,T.jsx)(a,{type:u.Text})}),(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Company Address`}),children:(0,T.jsx)(a,{type:u.Text})}),(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Company City`}),children:(0,T.jsx)(a,{type:u.Text})}),(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Company Country`}),children:(0,T.jsx)(a,{type:u.Text})}),(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Number of Employees`}),children:(0,T.jsx)(a,{type:u.Number,value:`5000`,disabled:!0})}),(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Member of Partner Network`}),children:(0,T.jsx)(g,{checked:!0})})]}),(0,T.jsxs)(o,{headerText:`Marketing Data`,children:[(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Email`}),children:(0,T.jsx)(a,{type:u.Email})}),(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Company Email`}),children:(0,T.jsx)(a,{type:u.Email})}),(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`I want to receive the newsletter`}),children:(0,T.jsx)(g,{})})]})]})},O=({editMode:e,value:t,inputType:n=u.Text,onInput:r,...i})=>e?(0,T.jsx)(a,{value:t,type:n,onInput:r,...i}):n===u.URL||n===u.Email?(0,T.jsx)(y,{href:n===u.Email?`mailto:${t}`:t,target:`_blank`,...i,children:t}):(0,T.jsx)(l,{...i,children:t}),k=(e,{field:t,value:n})=>({...e,[t]:n}),A={name:`Display & Edit mode`,args:{headerText:`Supplier`},render:e=>{let[t,n]=(0,w.useReducer)(e=>!e,!1,void 0),[i,s]=(0,w.useReducer)(k,{name:`Red Point Stores`,street:`Main St 1618`,zip:31415,city:`Maintown`,country:`Germany`,web:`https://www.sap.com`,mail:`john.smith@sap.com`,twitter:`@sap`,phone:`+49 1234 56789`},void 0),{zip:c,city:d,name:f,street:p,country:h,web:g,mail:y,twitter:b,phone:x}=i,S=e=>{s({field:Object.keys(e.target.dataset)[0],value:e.target.value})};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(r,{onClick:n,children:[`Toggle `,t?`Display-Only Mode`:`Edit Mode`]}),(0,T.jsxs)(v,{...e,onSubmit:e=>{e.preventDefault()},children:[(0,T.jsxs)(o,{headerText:`Address`,children:[(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Name`}),children:(0,T.jsx)(O,{editMode:t,value:f,onInput:S,"data-name":!0})}),(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Street`}),children:(0,T.jsx)(O,{editMode:t,value:p,onInput:S,"data-street":!0})}),(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`ZIP Code / City`}),children:t?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a,{value:c,type:u.Number,onInput:S,"data-zip":!0}),(0,T.jsx)(a,{value:d,onInput:S,"data-city":!0})]}):(0,T.jsx)(l,{children:`${c} ${d}`})}),(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Country`}),children:(0,T.jsx)(O,{editMode:t,value:h,onInput:S,"data-country":!0})}),(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Web`}),children:(0,T.jsx)(O,{editMode:t,value:g,inputType:u.URL,onInput:S,"data-web":!0})})]}),(0,T.jsxs)(o,{headerText:`Contact`,children:[(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Email`}),children:(0,T.jsx)(O,{editMode:t,value:y,inputType:u.Email,onInput:S,"data-email":!0})}),(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Twitter`}),children:(0,T.jsx)(O,{editMode:t,value:b,onInput:S,"data-twitter":!0})}),(0,T.jsx)(m,{labelContent:(0,T.jsx)(_,{children:`Phone`}),children:(0,T.jsx)(O,{editMode:t,value:x,inputType:u.Tel,onInput:S,"data-phone":!0})})]})]})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{$d as r,Cp as i,Gl as a,In as o,Ja as s,Ka as c,Up as l,Wg as u,Xa as d,Xd as f,Ya as p,Yd as m,Za as h,ja as g,mh as _,qa as v,tu as y,u as b,xu as x,zd as S}from"./iframe-BAgo26Tb.js";var C=e({Default:()=>D,DisplayEditMode:()=>A,__namedExportsOrder:()=>j,default:()=>E}),w,T,E,D,O,k,A,j,M=n((()=>{f(),w=t(u(),1),b(),p(),v(),h(),T=_(),E={title:`Layouts & Floorplans / Form`,component:d,argTypes:{children:{control:{disable:!0}}},args:{headerText:`Test Form`,layout:`S1 M1 L2 XL2`,labelSpan:`S12 M4 L4 XL4`},tags:[`package:@ui5/webcomponents`]},D={render:e=>(0,T.jsxs)(d,{...e,children:[(0,T.jsxs)(s,{headerText:`Personal Data`,children:[(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Name`}),children:(0,T.jsx)(S,{type:m.Text})}),(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Address`}),children:(0,T.jsx)(S,{type:m.Text})}),(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Country`}),children:(0,T.jsxs)(a,{children:[(0,T.jsx)(y,{children:`Germany`}),(0,T.jsx)(y,{children:`France`}),(0,T.jsx)(y,{children:`Italy`})]})}),(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Additional Comment`}),className:`formAlignLabelStart`,children:(0,T.jsx)(o,{rows:5,placeholder:"The label is aligned to start by setting `<class>::part(label){  align-self: start; }` "})}),(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Home address`}),children:(0,T.jsx)(l,{checked:!0})})]}),(0,T.jsxs)(s,{headerText:`Company Data`,children:[(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Company Name`}),children:(0,T.jsx)(S,{type:m.Text})}),(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Company Address`}),children:(0,T.jsx)(S,{type:m.Text})}),(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Company City`}),children:(0,T.jsx)(S,{type:m.Text})}),(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Company Country`}),children:(0,T.jsx)(S,{type:m.Text})}),(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Number of Employees`}),children:(0,T.jsx)(S,{type:m.Number,value:`5000`,disabled:!0})}),(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Member of Partner Network`}),children:(0,T.jsx)(l,{checked:!0})})]}),(0,T.jsxs)(s,{headerText:`Marketing Data`,children:[(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Email`}),children:(0,T.jsx)(S,{type:m.Email})}),(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Company Email`}),children:(0,T.jsx)(S,{type:m.Email})}),(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`I want to receive the newsletter`}),children:(0,T.jsx)(l,{})})]})]})},O=({editMode:e,value:t,inputType:n=m.Text,onInput:i,...a})=>e?(0,T.jsx)(S,{value:t,type:n,onInput:i,...a}):n===m.URL||n===m.Email?(0,T.jsx)(g,{href:n===m.Email?`mailto:${t}`:t,target:`_blank`,...a,children:t}):(0,T.jsx)(r,{...a,children:t}),k=(e,{field:t,value:n})=>({...e,[t]:n}),A={name:`Display & Edit mode`,args:{headerText:`Supplier`},render:e=>{let[t,n]=(0,w.useReducer)(e=>!e,!1,void 0),[a,o]=(0,w.useReducer)(k,{name:`Red Point Stores`,street:`Main St 1618`,zip:31415,city:`Maintown`,country:`Germany`,web:`https://www.sap.com`,mail:`john.smith@sap.com`,twitter:`@sap`,phone:`+49 1234 56789`},void 0),{zip:l,city:u,name:f,street:p,country:h,web:g,mail:_,twitter:v,phone:y}=a,b=e=>{o({field:Object.keys(e.target.dataset)[0],value:e.target.value})};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(i,{onClick:n,children:[`Toggle `,t?`Display-Only Mode`:`Edit Mode`]}),(0,T.jsxs)(d,{...e,onSubmit:e=>{e.preventDefault()},children:[(0,T.jsxs)(s,{headerText:`Address`,children:[(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Name`}),children:(0,T.jsx)(O,{editMode:t,value:f,onInput:b,"data-name":!0})}),(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Street`}),children:(0,T.jsx)(O,{editMode:t,value:p,onInput:b,"data-street":!0})}),(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`ZIP Code / City`}),children:t?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(S,{value:l,type:m.Number,onInput:b,"data-zip":!0}),(0,T.jsx)(S,{value:u,onInput:b,"data-city":!0})]}):(0,T.jsx)(r,{children:`${l} ${u}`})}),(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Country`}),children:(0,T.jsx)(O,{editMode:t,value:h,onInput:b,"data-country":!0})}),(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Web`}),children:(0,T.jsx)(O,{editMode:t,value:g,inputType:m.URL,onInput:b,"data-web":!0})})]}),(0,T.jsxs)(s,{headerText:`Contact`,children:[(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Email`}),children:(0,T.jsx)(O,{editMode:t,value:_,inputType:m.Email,onInput:b,"data-email":!0})}),(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Twitter`}),children:(0,T.jsx)(O,{editMode:t,value:v,onInput:b,"data-twitter":!0})}),(0,T.jsx)(c,{labelContent:(0,T.jsx)(x,{children:`Phone`}),children:(0,T.jsx)(O,{editMode:t,value:y,inputType:m.Tel,onInput:b,"data-phone":!0})})]})]})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
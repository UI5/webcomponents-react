import{a as e,c as t,i as n}from"./preload-helper-DbRxMUml.js";import{Ba as r,Cp as i,Fa as a,Fd as o,Fm as s,Ia as c,La as l,Mn as u,Pd as d,Pl as f,Ra as p,Rd as m,Wl as h,ng as g,np as _,u as v,uu as y,wa as b,wd as x,za as S}from"./iframe-DLyN7Gg6.js";var C=e({Default:()=>D,DisplayEditMode:()=>A,__namedExportsOrder:()=>j,default:()=>E}),w,T,E,D,O,k,A,j,M=n((()=>{o(),w=t(g(),1),v(),p(),c(),r(),T=s(),E={title:`Layouts & Floorplans / Form`,component:S,argTypes:{children:{control:{disable:!0}}},args:{headerText:`Test Form`,layout:`S1 M1 L2 XL2`,labelSpan:`S12 M4 L4 XL4`},tags:[`package:@ui5/webcomponents`]},D={render:e=>(0,T.jsxs)(S,{...e,children:[(0,T.jsxs)(l,{headerText:`Personal Data`,children:[(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Name`}),children:(0,T.jsx)(x,{type:d.Text})}),(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Address`}),children:(0,T.jsx)(x,{type:d.Text})}),(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Country`}),children:(0,T.jsxs)(f,{children:[(0,T.jsx)(h,{children:`Germany`}),(0,T.jsx)(h,{children:`France`}),(0,T.jsx)(h,{children:`Italy`})]})}),(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Additional Comment`}),className:`formAlignLabelStart`,children:(0,T.jsx)(u,{rows:5,placeholder:"The label is aligned to start by setting `<class>::part(label){  align-self: start; }` "})}),(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Home address`}),children:(0,T.jsx)(i,{checked:!0})})]}),(0,T.jsxs)(l,{headerText:`Company Data`,children:[(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Company Name`}),children:(0,T.jsx)(x,{type:d.Text})}),(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Company Address`}),children:(0,T.jsx)(x,{type:d.Text})}),(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Company City`}),children:(0,T.jsx)(x,{type:d.Text})}),(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Company Country`}),children:(0,T.jsx)(x,{type:d.Text})}),(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Number of Employees`}),children:(0,T.jsx)(x,{type:d.Number,value:`5000`,disabled:!0})}),(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Member of Partner Network`}),children:(0,T.jsx)(i,{checked:!0})})]}),(0,T.jsxs)(l,{headerText:`Marketing Data`,children:[(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Email`}),children:(0,T.jsx)(x,{type:d.Email})}),(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Company Email`}),children:(0,T.jsx)(x,{type:d.Email})}),(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`I want to receive the newsletter`}),children:(0,T.jsx)(i,{})})]})]})},O=({editMode:e,value:t,inputType:n=d.Text,onInput:r,...i})=>e?(0,T.jsx)(x,{value:t,type:n,onInput:r,...i}):n===d.URL||n===d.Email?(0,T.jsx)(b,{href:n===d.Email?`mailto:${t}`:t,target:`_blank`,...i,children:t}):(0,T.jsx)(m,{...i,children:t}),k=(e,{field:t,value:n})=>({...e,[t]:n}),A={name:`Display & Edit mode`,args:{headerText:`Supplier`},render:e=>{let[t,n]=(0,w.useReducer)(e=>!e,!1,void 0),[r,i]=(0,w.useReducer)(k,{name:`Red Point Stores`,street:`Main St 1618`,zip:31415,city:`Maintown`,country:`Germany`,web:`https://www.sap.com`,mail:`john.smith@sap.com`,twitter:`@sap`,phone:`+49 1234 56789`},void 0),{zip:o,city:s,name:c,street:u,country:f,web:p,mail:h,twitter:g,phone:v}=r,b=e=>{i({field:Object.keys(e.target.dataset)[0],value:e.target.value})};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(_,{onClick:n,children:[`Toggle `,t?`Display-Only Mode`:`Edit Mode`]}),(0,T.jsxs)(S,{...e,onSubmit:e=>{e.preventDefault()},children:[(0,T.jsxs)(l,{headerText:`Address`,children:[(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Name`}),children:(0,T.jsx)(O,{editMode:t,value:c,onInput:b,"data-name":!0})}),(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Street`}),children:(0,T.jsx)(O,{editMode:t,value:u,onInput:b,"data-street":!0})}),(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`ZIP Code / City`}),children:t?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(x,{value:o,type:d.Number,onInput:b,"data-zip":!0}),(0,T.jsx)(x,{value:s,onInput:b,"data-city":!0})]}):(0,T.jsx)(m,{children:`${o} ${s}`})}),(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Country`}),children:(0,T.jsx)(O,{editMode:t,value:f,onInput:b,"data-country":!0})}),(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Web`}),children:(0,T.jsx)(O,{editMode:t,value:p,inputType:d.URL,onInput:b,"data-web":!0})})]}),(0,T.jsxs)(l,{headerText:`Contact`,children:[(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Email`}),children:(0,T.jsx)(O,{editMode:t,value:h,inputType:d.Email,onInput:b,"data-email":!0})}),(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Twitter`}),children:(0,T.jsx)(O,{editMode:t,value:g,onInput:b,"data-twitter":!0})}),(0,T.jsx)(a,{labelContent:(0,T.jsx)(y,{children:`Phone`}),children:(0,T.jsx)(O,{editMode:t,value:v,inputType:d.Tel,onInput:b,"data-phone":!0})})]})]})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
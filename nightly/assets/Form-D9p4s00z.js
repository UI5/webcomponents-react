import{n as e}from"./chunk-zsgVPwQN.js";import{Da as t,Ea as n,Oa as r,Ta as i,Wm as a}from"./iframe-DUpJRssK.js";import{r as o}from"./react-DXT591Qk.js";import{c as s,m as c,s as l,t as u,v as d}from"./components-MjuGEQpY.js";import{_ as f,d as p,n as m,o as h,r as g,u as _}from"./blocks-CX5-8-Tm.js";import{n as v,t as y}from"./SubcomponentsSection-DDnl7AR6.js";import{Default as b,DisplayEditMode as x,n as S,t as C}from"./Form.stories-D3yU1gkc.js";function w(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,pre:`pre`,...o(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p,{of:C}),`
`,(0,E.jsx)(s,{of:C,subComponents:[`FormGroup`,`FormItem`]}),`
`,(0,E.jsx)(`br`,{}),`
`,(0,E.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,E.jsx)(g,{of:b}),`
`,(0,E.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,E.jsx)(c,{of:b}),`
`,(0,E.jsx)(n.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,E.jsx)(n.h2,{id:`display-only-and-edit-mode`,children:`Display-Only and Edit mode`}),`
`,(0,E.jsx)(g,{of:x,sourceState:`none`}),`
`,(0,E.jsx)(n.h3,{id:`code`,children:`Code`}),`
`,(0,E.jsxs)(`details`,{children:[(0,E.jsx)(`summary`,{children:`Show Code`}),(0,E.jsx)(n.pre,{children:(0,E.jsx)(n.code,{className:`language-jsx`,children:`const StandardField = ({ editMode, value, inputType = InputType.Text, onInput, ...rest }) => {
  if (editMode) {
    return <Input value={value} style={{ width: '100%' }} type={inputType} onInput={onInput} {...rest} />;
  }
  if (inputType === InputType.URL || inputType === InputType.Email) {
    return (
      <Link href={inputType === InputType.Email ? \`mailto:\${value}\` : value} target="_blank" {...rest}>
        {value}
      </Link>
    );
  }
  return <Text {...rest}>{value}</Text>;
};

const reducer = (state, { field, value }) => {
  return { ...state, [field]: value };
};

const FormComponent = (props) => {
  const [editMode, toggleEditMode] = useReducer((prev) => !prev, false, undefined);
  const [formState, dispatch] = useReducer(
    reducer,
    {
      name: 'Red Point Stores',
      street: 'Main St 1618',
      zip: 31415,
      city: 'Maintown',
      country: 'Germany',
      web: 'https://www.sap.com',
      mail: 'john.smith@sap.com',
      twitter: '@sap',
      phone: '+49 1234 56789'
    },
    undefined
  );
  const { zip, city, name, street, country, web, mail, twitter, phone } = formState;

  const handleInput = (e) => {
    dispatch({ field: Object.keys(e.target.dataset)[0], value: e.target.value });
  };

  return (
    <>
      <Button onClick={toggleEditMode}>Toggle {editMode ? 'Display-Only Mode' : 'Edit Mode'}</Button>
      <Form
        {...props}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormGroup titleText="Address">
          <FormItem label="Name">
            <StandardField editMode={editMode} value={name} onInput={handleInput} data-name />
          </FormItem>
          <FormItem label="Street">
            <StandardField editMode={editMode} value={street} onInput={handleInput} data-street />
          </FormItem>
          <FormItem label="ZIP Code / City">
            {editMode ? (
              <>
                <Input value={zip} type={InputType.Number} style={{ width: '30%' }} onInput={handleInput} data-zip />
                <Input value={city} style={{ width: '70%' }} onInput={handleInput} data-city />
              </>
            ) : (
              <Text>{\`\${zip} \${city}\`}</Text>
            )}
          </FormItem>
          <FormItem label="Country">
            <StandardField editMode={editMode} value={country} onInput={handleInput} data-country />
          </FormItem>
          <FormItem label="Web">
            <StandardField editMode={editMode} value={web} inputType={InputType.URL} onInput={handleInput} data-web />
          </FormItem>
        </FormGroup>
        <FormGroup titleText="Contact">
          <FormItem label="Email">
            <StandardField
              editMode={editMode}
              value={mail}
              inputType={InputType.Email}
              onInput={handleInput}
              data-email
            />
          </FormItem>
          <FormItem label="Twitter">
            <StandardField editMode={editMode} value={twitter} onInput={handleInput} data-twitter />
          </FormItem>
          <FormItem label="Phone">
            <StandardField
              editMode={editMode}
              value={phone}
              inputType={InputType.Tel}
              onInput={handleInput}
              data-phone
            />
          </FormItem>
        </FormGroup>
      </Form>
    </>
  );
};
`})})]}),`
`,(0,E.jsx)(_,{children:y}),`
`,(0,E.jsx)(n.h2,{id:`form-group`,children:`Form Group`}),`
`,(0,E.jsx)(h,{of:t}),`
`,(0,E.jsx)(m,{of:t}),`
`,(0,E.jsx)(n.h2,{id:`formitem`,children:`FormItem`}),`
`,(0,E.jsx)(h,{of:i}),`
`,(0,E.jsx)(m,{of:i}),`
`,(0,E.jsx)(l,{})]})}function T(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;e((()=>{E=a(),d(),u(),v(),f(),r(),n(),S()}))();export{T as default};
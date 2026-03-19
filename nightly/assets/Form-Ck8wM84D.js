import{j as e}from"./iframe-D9XQThMB.js";import{useMDXComponents as s}from"./index-BFkPJIs4.js";import{M as u,C as o,a as c,D as r,A as i}from"./blocks-CsZckq-p.js";import"./Tag-NpQQnYo4.js";import"./index-BWcAyF8h.js";import{C as h}from"./ControlsWithNote-DzDU2bOP.js";import{D as I}from"./DocsHeader-C1IeQFXK.js";import{F as y}from"./Footer-8Yr8m1IV.js";import"./CommandsAndQueries-BBuqlp9J.js";import"./PageNotFound-DktVNoBl.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{a as p,b as a}from"./index-G3Ba0kwk.js";import{C as m,D as d,a as F}from"./Form.stories-CfKA8UhP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bvi0jW5b.js";import"./sys-enter-2-Bex-whDb.js";import"./alert-CKQIr3Jj.js";import"./index-BlKrBUMf.js";import"./index-CjxO355V.js";import"./Link-CJ7-xxSX.js";import"./copy-8S9Iqf0z.js";import"./copy-CyvuSNR_.js";import"./GitHub-Mark-DKAgjLDu.js";import"./TableOfContent-Bpyqe4Fu.js";import"./index-BtpxSXz8.js";import"./index-CxgWM8Dp.js";import"./index-BDim0UZ8.js";import"./index-C40uNmLM.js";import"./index-9BnKq7JY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DrummEDM.js";import"./addCustomCSSWithScoping-BEVVchOt.js";import"./Illustrations-DGm-82Ik.js";import"./i18n-defaults-CFWtSmu6.js";import"./slot-_4yKMUwC.js";import"./Input-Dd8V6pYN.js";import"./ResponsivePopoverCommon.css-AccouXMm.js";import"./ValueStateMessage.css-C61ZdvXC.js";import"./Suggestions.css-DNN4WTtE.js";import"./index-i_OA1AiM.js";import"./index-K3c-KgVe.js";import"./Select-Ddna0J1l.js";import"./InvisibleMessage-tD1-WheS.js";import"./index-BVuuRkkJ.js";import"./Option-EaORebIw.js";import"./ListItemBaseTemplate-XMqPEKMa.js";import"./index-BnbkTNBg.js";import"./TextArea-D0nbFz6z.js";import"./index-DzSim1oI.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:m}),`
`,e.jsx(I,{of:m,subComponents:["FormGroup","FormItem"]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(h,{of:d}),`
`,e.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(t.h2,{id:"display-only-and-edit-mode",children:"Display-Only and Edit mode"}),`
`,e.jsx(o,{of:F,sourceState:"none"}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show Code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const StandardField = ({ editMode, value, inputType = InputType.Text, onInput, ...rest }) => {
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
`,e.jsx(c,{children:x}),`
`,e.jsx(t.h2,{id:"form-group",children:"Form Group"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(t.h2,{id:"formitem",children:"FormItem"}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(y,{})]})}function he(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{he as default};

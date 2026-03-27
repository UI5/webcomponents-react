import{j as e}from"./iframe-DNoxABv1.js";import{useMDXComponents as s}from"./index-DQAMMhq5.js";import{M as u,C as o,a as c,D as r,A as i}from"./blocks-CIhTxD7j.js";import"./Tag-C_8TAHAf.js";import"./index-I7XZadEI.js";import{C as h}from"./ControlsWithNote-CkiiUodH.js";import{D as I}from"./DocsHeader-BCqO4hZN.js";import{F as y}from"./Footer-CRUbKNtZ.js";import"./CommandsAndQueries-DUw_qZ-D.js";import"./PageNotFound-DExHfP7X.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{a as p,b as a}from"./index-Oy40HKS-.js";import{C as m,D as d,a as F}from"./Form.stories-DYQBtjdU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BBbHiJJj.js";import"./sys-enter-2-CL00FEGT.js";import"./alert-8k6AaqYY.js";import"./index-Kl-B_MHz.js";import"./index-DAoAOn92.js";import"./Link-4KtEWIlR.js";import"./copy-DWlPDnmg.js";import"./copy-BoMvLlry.js";import"./GitHub-Mark-CIM-w4tw.js";import"./TableOfContent-BxuLiWq8.js";import"./index-B0My9-lL.js";import"./index-BfoP-fai.js";import"./index-KaiTFuVE.js";import"./index-BEeVgB1o.js";import"./index-DVs60LFY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CQViNCUD.js";import"./addCustomCSSWithScoping-CvyaWJf_.js";import"./Illustrations-eHdiuTwk.js";import"./i18n-defaults-CFWtSmu6.js";import"./slot-_4yKMUwC.js";import"./Input-DodynmuQ.js";import"./ResponsivePopoverCommon.css-DNwar9Nr.js";import"./ValueStateMessage.css-C9tLT3FD.js";import"./Suggestions.css-j42Uy4I4.js";import"./index-D5nwUFBQ.js";import"./index-Syrnzfof.js";import"./Select-C3Bj0U0O.js";import"./InvisibleMessage-Dg53Ylmh.js";import"./index-BhKgk6Th.js";import"./Option-i3C7vusI.js";import"./ListItemBaseTemplate-D2CXTOkT.js";import"./index-DxM15-5f.js";import"./TextArea-a-Rq3tQ6.js";import"./index-CwMCTdJZ.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:m}),`
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

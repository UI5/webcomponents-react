import{j as e}from"./iframe-DJeYw3_T.js";import{useMDXComponents as s}from"./index-CAoJF-Ee.js";import{M as u,C as o,a as c,D as r,A as i}from"./blocks-CX606tiu.js";import"./Tag-CCm379UD.js";import"./index-D_iy8XUE.js";import{C as h}from"./ControlsWithNote-Cd4-1WaE.js";import{D as I}from"./DocsHeader-Cu-Z-sJO.js";import{F as y}from"./CommandsAndQueries-BpKCXtjf.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{a as p,b as a}from"./index-BiGRmehr.js";import{C as d,D as m,a as F}from"./Form.stories-_-D3S5-m.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CWuwvd7P.js";import"./sys-enter-2-CLYEOYwG.js";import"./alert-CTnjMkAD.js";import"./index-ChAuXbDX.js";import"./index-ZZUuVpkh.js";import"./Link-D6M-iLai.js";import"./copy-CbTRvlP6.js";import"./copy-DmlYE796.js";import"./GitHub-Mark-CwfSp5YR.js";import"./TableOfContent-CFuMbk9T.js";import"./index-tnzxKSW0.js";import"./index-US2STizv.js";import"./index-xs7bXSrN.js";import"./index-BldmH6cg.js";import"./index-BfDuZshB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bv4hvB9u.js";import"./addCustomCSSWithScoping-DdjgQkne.js";import"./Input-aC5IARbR.js";import"./ResponsivePopoverCommon.css-CZVnt3kp.js";import"./ValueStateMessage.css-CB2SJNwM.js";import"./Suggestions.css-CcYLfhHI.js";import"./index-CtFadE48.js";import"./index-DP_3EnA2.js";import"./Select-BP2hTvkS.js";import"./InvisibleMessage-deXIs-B1.js";import"./slim-arrow-down-CrqglWHm.js";import"./slim-arrow-down-Qo8He1bF.js";import"./index-Ba8SHafQ.js";import"./Option-CVovyKZE.js";import"./ListItemBaseTemplate-BLUw0RML.js";import"./index-COwC1236.js";import"./TextArea-DgcUSC-c.js";import"./index-CWW0jJXt.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:d}),`
`,e.jsx(I,{of:d,subComponents:["FormGroup","FormItem"]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(h,{of:m}),`
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
`,e.jsx(y,{})]})}function se(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{se as default};

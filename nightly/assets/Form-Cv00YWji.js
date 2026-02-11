import{j as e}from"./iframe-kJfrPaD1.js";import{useMDXComponents as s}from"./index-BKWPRaiV.js";import{M as u,C as o,a as c,D as r,A as i}from"./blocks-5RdvzEbY.js";import"./Tag-Cq_rR_bf.js";import"./index-ZnQNPJfl.js";import{C as h}from"./ControlsWithNote-HJLNE5EK.js";import{D as I}from"./DocsHeader-BLWibEvH.js";import{F as y}from"./CommandsAndQueries-D7WkRU72.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{a as p,b as a}from"./index-DIHmoDdx.js";import{C as d,D as m,a as F}from"./Form.stories-RwqDnrhY.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CMkzOfg7.js";import"./sys-enter-2-0CjTM9eF.js";import"./alert-T81DFfqo.js";import"./index-CmBVI-17.js";import"./index-CDtmBsTj.js";import"./Link-DLuGgAei.js";import"./copy-BYIMhd1n.js";import"./copy-yyYbNeMi.js";import"./GitHub-Mark-CjjLcYYl.js";import"./TableOfContent-Cw-X9n05.js";import"./index-CRo0yro_.js";import"./index-C-a_iLSi.js";import"./index-Ccpr0pFg.js";import"./index-DxXcjV97.js";import"./index-CdjQ1wSl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVMILbqZ.js";import"./addCustomCSSWithScoping-7vdeOKdl.js";import"./Input-BgSomOX4.js";import"./ResponsivePopoverCommon.css-BjX77BWF.js";import"./ValueStateMessage.css-ClrIRLgY.js";import"./Suggestions.css-DMwhx4yY.js";import"./index-Cq09Xc-r.js";import"./index-BuQpOWSs.js";import"./Select-Dd1CrZ-1.js";import"./InvisibleMessage-CIztzzyo.js";import"./slim-arrow-down-6heX8X2x.js";import"./slim-arrow-down-CPVGY8Iq.js";import"./index-B8IotaSE.js";import"./Option-DE3CbLxG.js";import"./ListItemBaseTemplate-DW1MLGCC.js";import"./index-CsvQko9n.js";import"./TextArea-g7nBUSVD.js";import"./index-D2aYauVx.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:d}),`
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

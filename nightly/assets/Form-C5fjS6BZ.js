import{j as e}from"./iframe-CLRwe_KU.js";import{useMDXComponents as s}from"./index-zMDfw_hp.js";import{M as u,C as o,a as c,D as r,A as i}from"./blocks-B36l4j9a.js";import"./Tag-DLCMnG64.js";import"./index-Di2mC61N.js";import{C as h}from"./ControlsWithNote-j11wmhcQ.js";import{D as I}from"./DocsHeader-tjuWzKnX.js";import{F as y}from"./Footer-CY1WkGvT.js";import"./CommandsAndQueries-Qa8JAgCb.js";import"./PageNotFound-Et84DOUJ.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{a as p,b as a}from"./index-DOgHZxQj.js";import{C as m,D as d,a as F}from"./Form.stories-g60avIjN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BHtbew5c.js";import"./sys-enter-2-CeQJ4tH7.js";import"./alert-DGiHprsp.js";import"./index-rGV23ifs.js";import"./index-DhQiji0Y.js";import"./Link-CQgjpXoE.js";import"./copy-tZxK2l79.js";import"./copy-C_QN3LWn.js";import"./GitHub-Mark-BTLyGR0g.js";import"./TableOfContent-Cm92Ha4S.js";import"./index-BqJblJml.js";import"./index-9xLRD1c-.js";import"./index-BFFCZnKZ.js";import"./index-CZmIgKIQ.js";import"./index-B905PbE4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5LoBpt5.js";import"./addCustomCSSWithScoping-BmaQonB-.js";import"./Illustrations-BsZAm-cT.js";import"./i18n-defaults-CFWtSmu6.js";import"./slot-_4yKMUwC.js";import"./Input-CmThYNOy.js";import"./ResponsivePopoverCommon.css-BHdjseh5.js";import"./ValueStateMessage.css-CUkX0r6k.js";import"./Suggestions.css-DG50lbLq.js";import"./index-D-5oCNyE.js";import"./index-a2MjnGAR.js";import"./Select-BRr99ja4.js";import"./InvisibleMessage-D7m3pcV6.js";import"./index-CNxxt-Ya.js";import"./Option-rvwi6Sh1.js";import"./ListItemBaseTemplate-D5tvkBEy.js";import"./index-CwIUhEga.js";import"./TextArea-fgmfOrYy.js";import"./index-C2Ec73XG.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:m}),`
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

import{j as e}from"./iframe-DAxVciiO.js";import{useMDXComponents as s}from"./index-h_8BIj8E.js";import{M as u,C as o,a as c,D as r,A as i}from"./blocks-V6tY60BP.js";import"./Tag-CfpPKB5J.js";import"./index-Cl51mnxs.js";import{C as h}from"./ControlsWithNote-DOHOEzX8.js";import{D as I}from"./DocsHeader-C9iUY6-3.js";import{F as y}from"./CommandsAndQueries-DAf-gTsq.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{a as p,b as a}from"./index-D3-RILwb.js";import{C as d,D as m,a as F}from"./Form.stories-CxM2ckdm.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BJmehL1Z.js";import"./sys-enter-2-CCej0FVR.js";import"./alert-DT2E8uxg.js";import"./index-x-HMM4OA.js";import"./index-CXz3G2II.js";import"./Link-CPXkUhXc.js";import"./copy-CusNMk6v.js";import"./copy-DS8F9wTV.js";import"./GitHub-Mark-C48nxFEF.js";import"./TableOfContent-CS4QbVvc.js";import"./index-DQeQ_3Br.js";import"./index-BTWHfyOb.js";import"./index-DtbiWkK2.js";import"./index-C2J6ydOt.js";import"./index-45VXzBs0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqjBRadn.js";import"./addCustomCSSWithScoping-B-5Zxa-U.js";import"./Input-BFNvfe1M.js";import"./ResponsivePopoverCommon.css-DUa--h-C.js";import"./ValueStateMessage.css-B-JXAMRh.js";import"./Suggestions.css-l1R1Q3Wi.js";import"./index-_vvkfygM.js";import"./index-kd3IkrmG.js";import"./Select-DQvn5TjZ.js";import"./InvisibleMessage-CJvoI51j.js";import"./slim-arrow-down-DI99uMIa.js";import"./slim-arrow-down-DOx_O52b.js";import"./index-BetiTQM5.js";import"./Option-BtMT1Oqj.js";import"./ListItemBaseTemplate-CpDt3VEY.js";import"./index-CiTYeifU.js";import"./TextArea-DEKZ11LU.js";import"./index-CBxPLiTj.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:d}),`
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

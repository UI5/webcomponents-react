import{j as e}from"./iframe-Bn2VcNjM.js";import{useMDXComponents as s}from"./index-B8O2NRso.js";import{M as u,C as o,a as c,D as r,A as i}from"./blocks-DxdZj58t.js";import"./Tag-CP1g89nG.js";import"./index-DP2Vk4N-.js";import{C as h}from"./ControlsWithNote-BRoD9fSY.js";import{D as I}from"./DocsHeader-C1nuuftr.js";import{F as y}from"./CommandsAndQueries-Duu3Cv2i.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{a as p,b as a}from"./index-CdC0YO6Z.js";import{C as d,D as m,a as F}from"./Form.stories-DCRyGlI6.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BknIne9K.js";import"./sys-enter-2-BaImGntK.js";import"./alert-B1eI2qVm.js";import"./index-BmvAtQRx.js";import"./index-DwYiaS9z.js";import"./Link-BGC1cQo4.js";import"./copy-Is4R2zLj.js";import"./copy-BNtdn9f6.js";import"./GitHub-Mark-CvaDqKX7.js";import"./TableOfContent-DDKyKiLG.js";import"./index-CPtlwBkZ.js";import"./index-DtkUQ_fK.js";import"./index-FmeoD5BD.js";import"./index-DzdCI7N0.js";import"./index-DQbgfd5S.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2LahRfeL.js";import"./addCustomCSSWithScoping-I5ABusfy.js";import"./Input-BRWw1loe.js";import"./ResponsivePopoverCommon.css-HzvDnCCK.js";import"./ValueStateMessage.css-CumaGiZ4.js";import"./Suggestions.css-B1xe7rBm.js";import"./index-O-pzsvLy.js";import"./TextArea-CvZ9RQcf.js";import"./index-Dilp9cxP.js";import"./index-CDC27Oew.js";import"./Select-D5v1ik0j.js";import"./InvisibleMessage-BEsY7hLw.js";import"./slim-arrow-down-pvLvaCi8.js";import"./slim-arrow-down-CUDCAHka.js";import"./index-BxSXfCyg.js";import"./Option-B4c11NHt.js";import"./ListItemBaseTemplate-C6sbgtZB.js";import"./index-B3Djr-1p.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:d}),`
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

import{j as e}from"./iframe-DsgKHrOc.js";import{useMDXComponents as s}from"./index-R1G5OZPs.js";import{M as u,C as o,a as c,D as r,A as i}from"./blocks-CQue4LlW.js";import"./Tag-BTAP7zi_.js";import"./index-B3N-7g7X.js";import{C as h}from"./ControlsWithNote-DxYVNC-M.js";import{D as I}from"./DocsHeader-D2x9pX3j.js";import{F as y}from"./CommandsAndQueries-D_2jUbP4.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{a as p,b as a}from"./index-JMqow9NN.js";import{C as d,D as m,a as F}from"./Form.stories-CIqH1Pii.js";import"./preload-helper-PPVm8Dsz.js";import"./information-ls1iI2xZ.js";import"./sys-enter-2-BOSLgeP2.js";import"./alert-BH6ifEnA.js";import"./index-0Q75H94O.js";import"./index-BdUiiHhG.js";import"./Link-DoHEtv1B.js";import"./copy-8lJxP5He.js";import"./copy-DlTApuN1.js";import"./GitHub-Mark-CHR7-lS9.js";import"./TableOfContent-C_-5gYZu.js";import"./index-DNMfu1Bq.js";import"./index-CnrY0exf.js";import"./index-Dm9AGWV-.js";import"./index-BomSeR7F.js";import"./index-W4kN-wgY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BfAO3hVt.js";import"./addCustomCSSWithScoping-CsuAJYaG.js";import"./Input-CLRI9CEh.js";import"./ResponsivePopoverCommon.css-Dz_dByIm.js";import"./ValueStateMessage.css-C1b8jnbg.js";import"./Suggestions.css-Y2NBFohg.js";import"./index-DE-0JGpI.js";import"./index-C8-_l6KY.js";import"./Select-MmIlw-od.js";import"./InvisibleMessage-q1FFN4_p.js";import"./slim-arrow-down-BLSo6u6P.js";import"./slim-arrow-down-BFPvdtk4.js";import"./index-HXM5p6gS.js";import"./Option-CQ19A_kf.js";import"./ListItemBaseTemplate-Ch-vNojB.js";import"./index-C4kip_Ne.js";import"./TextArea-fsMf1KSn.js";import"./index-NzD9g4E3.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:d}),`
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

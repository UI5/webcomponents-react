import{j as e}from"./iframe-GXp7lrSQ.js";import{u as l,M as u,C as o,a as c,D as r,A as i}from"./blocks-XkJ722q3.js";import"./Tag-CUfffkkD.js";import"./index-D9hIm448.js";import{C as h}from"./ControlsWithNote-CAVQlFWx.js";import{D as I}from"./DocsHeader-DIvhQild.js";import{F as y}from"./Footer-uVHBRSQb.js";import"./CommandsAndQueries-CVcJVi5r.js";import"./PageNotFound-VnOdSsgo.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{a as p,b as a}from"./index-D28kb7Ia.js";import{C as d,D as m,a as F}from"./Form.stories-CM92YSgE.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CwevoeOo.js";import"./sys-enter-2-BSdQUe02.js";import"./alert-Ds801M6U.js";import"./index-BXKqqHdE.js";import"./index-CMKcbagv.js";import"./Link-B8HUwSLv.js";import"./copy-ColcidlA.js";import"./copy-_WAqiJ1e.js";import"./GitHub-Mark-CdpM-LE3.js";import"./TableOfContent-BLO4MxbM.js";import"./index-TceWecEs.js";import"./index-CmMI2aTL.js";import"./index-BLkFX4jD.js";import"./index-C-99lkBL.js";import"./index-CrV5gfjE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHLtduuY.js";import"./addCustomCSSWithScoping-lRpYguTz.js";import"./Illustrations-C-7wSXd8.js";import"./i18n-defaults-CFWtSmu6.js";import"./slot-_4yKMUwC.js";import"./Input-KO3l8Brk.js";import"./ResponsivePopoverCommon.css-Bc1a9KNA.js";import"./ValueStateMessage.css-D80lJWSa.js";import"./Suggestions.css-Ahw1quaz.js";import"./index-mb2VS-jK.js";import"./index-BHKTmJbu.js";import"./Select-CBTMV-I6.js";import"./InvisibleMessage-B-Rt2GQk.js";import"./index-DvYiMBT8.js";import"./Option-Dny_IhR6.js";import"./ListItemBaseTemplate-XA1LRcK1.js";import"./index-B0CZj8l3.js";import"./TextArea-L4d0ik3F.js";import"./index-B9tnRND4.js";function s(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:d}),`
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
`,e.jsx(y,{})]})}function ce(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{ce as default};

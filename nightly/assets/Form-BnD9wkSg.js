import{j as e}from"./iframe-BbmPNBZw.js";import{useMDXComponents as s}from"./index-D87-8-cY.js";import{M as u,C as o,a as c,D as r,A as i}from"./blocks-B7C-sP0U.js";import"./Tag-DFYl0ftZ.js";import"./index-fQ6fbGsc.js";import{C as h}from"./ControlsWithNote-D8-T1xFb.js";import{D as I}from"./DocsHeader-CcOnB5U6.js";import{F as y}from"./CommandsAndQueries-C-B3vcHW.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{a as p,b as a}from"./index--1Ap1OyN.js";import{C as d,D as m,a as F}from"./Form.stories-B1iBqcyn.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BpKTV1Df.js";import"./sys-enter-2-Cjjs2hNu.js";import"./alert-DEEsEFWu.js";import"./index-CoFaLD2a.js";import"./index-DPh3hFjM.js";import"./Link-CATCrkJf.js";import"./copy-BfGXYHSu.js";import"./copy-BgTszgJK.js";import"./GitHub-Mark-C0DNn0i9.js";import"./TableOfContent-Cit66x7d.js";import"./index-Dqb4-3Ox.js";import"./index-upku0ICQ.js";import"./index-BaS8undN.js";import"./index-DuOlzjbj.js";import"./index-Cj4eX-xQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRGip9L6.js";import"./addCustomCSSWithScoping-DXbMFExg.js";import"./Input-BHUHhOmz.js";import"./ResponsivePopoverCommon.css-BxaDEsUM.js";import"./ValueStateMessage.css-BYDbDg0Q.js";import"./Suggestions.css-DZfh_4W3.js";import"./index-BO1-LKFI.js";import"./index-CEU0a68q.js";import"./index-D3JCLYGZ.js";import"./Select-DW_EjdMU.js";import"./InvisibleMessage-C1GU6Z5A.js";import"./slim-arrow-down-DJqqQ7Uz.js";import"./slim-arrow-down-BiuCGCjT.js";import"./index-DOUHh_Yk.js";import"./Option-CUrZDe04.js";import"./ListItemBaseTemplate-BM3kFwkG.js";import"./index-Bj0B-A9p.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:d}),`
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
`,e.jsx(y,{})]})}function le(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{le as default};

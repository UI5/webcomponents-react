import{j as e}from"./iframe-D-W-mmRj.js";import{useMDXComponents as m}from"./index-D8IyotA-.js";import{A as p}from"./ArgTypesWithNote-CFS0kNMk.js";import{C as c}from"./ControlsWithNote-B4akadk-.js";import{D as l}from"./DocsHeader-D3NX_wh_.js";import{F as d}from"./CommandsAndQueries-G8bd-Dz2.js";import{M as x,C as r,a as u,D as h}from"./blocks-CCgGLQdQ.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-BfucZw-r.js";import{T as s}from"./index-CRex2dv7.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BjBbtVMa.js";import"./information-CEG7gdih.js";import"./sys-enter-2-CEv4mC4Y.js";import"./alert-DtXDmWLr.js";import"./Tag-CcHwt-jC.js";import"./index-DkLrn4qm.js";import"./index-BL1fd3ME.js";import"./Link-B8l4snGX.js";import"./copy-BRpilgxr.js";import"./copy-Bs2vU0sH.js";import"./GitHub-Mark-DU3wALFb.js";import"./TableOfContent-BCe3V_fU.js";import"./index-lPK_7vuA.js";import"./index-g5ZQYkE0.js";import"./index-B8f1MJrs.js";import"./index-CtoHKFWx.js";import"./index-C1eJkWnN.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_kQaGsI.js";import"./addCustomCSSWithScoping-IPWT__yW.js";import"./Token-C2_dZ0mi.js";import"./ScrollEnablement-5T6hJhR0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C80k9rxB.js";import"./ResponsivePopoverCommon.css-DVnmqxls.js";import"./Suggestions.css-DSmmsEoA.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
`,e.jsx(l,{of:t,subComponents:["Token"],experimental:!0}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h2,{id:"tokenizer-with-selection--delete-logic",children:"Tokenizer with selection & delete logic"}),`
`,e.jsx(r,{of:k}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show Code"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function TokenizerComponent(props) {
  const [countries, setCountries] = useState([
    'Andorra',
    'Bulgaria',
    'Canada',
    'Denmark',
    'Estonia',
    'Fiji',
    'Ghana',
    'India',
    'Japan',
    'Kenya',
    'Luxembourg',
    'Mexico',
    'Nepal',
    'Qatar',
    'Uganda'
  ]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const handleTokenDelete: TokenizerPropTypes['onTokenDelete'] = (e) => {
    const { tokens } = e.detail;
    if (tokens) {
      const tokensToDelete = tokens.map((token) => token.text);
      setCountries((prev) => prev.filter((country) => !tokensToDelete.includes(country)));
      setSelectedCountries([]);
    }
  };
  const handleSelectionChange: TokenizerPropTypes['onSelectionChange'] = (e) => {
    const { tokens } = e.detail;
    if (tokens) {
      const selectedTokens = tokens.map((token) => token.text);
      setSelectedCountries(selectedTokens);
    }
  };
  return (
    <>
      <Tokenizer {...props} onTokenDelete={handleTokenDelete} onSelectionChange={handleSelectionChange}>
        {countries.map((country) => (
          <Token key={country} text={country} />
        ))}
      </Tokenizer>
      <br />
      <div style={{ display: 'flex', gap: '0.2rem' }}>
        <Label showColon>Selected countries</Label>
        <Text>{selectedCountries.join(', ')}</Text>
      </div>
    </>
  );
}
`})})]}),`
`,e.jsx(u,{children:f}),`
`,e.jsx(n.h2,{id:"token",children:"Token"}),`
`,e.jsx(h,{of:s}),`
`,e.jsx(p,{metaOf:t,of:s}),`
`,e.jsx(d,{})]})}function ne(o={}){const{wrapper:n}={...m(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{ne as default};

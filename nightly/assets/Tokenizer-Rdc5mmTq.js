import{j as e}from"./iframe-D8-BDgf_.js";import{useMDXComponents as m}from"./index-C9C5bcry.js";import{A as p}from"./ArgTypesWithNote-DYNOJlSo.js";import{C as c}from"./ControlsWithNote-BA4C71aa.js";import{D as l}from"./DocsHeader-DhqOxPgn.js";import{F as d}from"./CommandsAndQueries-DdekYtZs.js";import{M as x,C as r,a as u,D as h}from"./blocks-BAPiaHIf.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-BV1U5SVP.js";import{T as s}from"./index-Dx1LjcNf.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bpoq7VNX.js";import"./information-P4PYqJF7.js";import"./sys-enter-2-COYZiEQ0.js";import"./alert-NgB5MfvZ.js";import"./Tag-94uJ1S6F.js";import"./index-CkF5m5P2.js";import"./index-BR0aC9ux.js";import"./Link-DupRePRp.js";import"./copy-Dw40dVAC.js";import"./copy-D8ENGf86.js";import"./GitHub-Mark-DN65S926.js";import"./TableOfContent-D9uryxT6.js";import"./index-DthRrO7G.js";import"./index-BIskJ-u2.js";import"./index-Ijyq8fzP.js";import"./index-BC6ra2tn.js";import"./index-BGDf_fSf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bayg2vL_.js";import"./addCustomCSSWithScoping-BMV9S5Iy.js";import"./Token-Dz00xiyc.js";import"./ScrollEnablement-C7ow4jI1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CWDqgljt.js";import"./ResponsivePopoverCommon.css-B0FOPOjZ.js";import"./Suggestions.css-CCFYMh7W.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

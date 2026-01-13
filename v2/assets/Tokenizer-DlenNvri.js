import{j as e}from"./iframe-M6Wvc0fq.js";import{useMDXComponents as m}from"./index-Jmw_4WZV.js";import{A as p}from"./ArgTypesWithNote-DD7X9XvZ.js";import{C as c}from"./ControlsWithNote-DsI0yJ_c.js";import{D as l}from"./DocsHeader-M7v8s38F.js";import{F as d}from"./CommandsAndQueries--8Ahr2u6.js";import{M as x,C as r,a as u,D as h}from"./blocks-9PHEB2Ze.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-29qyY-Ja.js";import{T as s}from"./index-B1v5wlmI.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-NAUCyd.js";import"./information-Cj4hRV-U.js";import"./sys-enter-2-CYdmpg8V.js";import"./alert-BNoNYb7g.js";import"./Tag-DEHlwQE8.js";import"./index-CNLcYPCr.js";import"./index-_LwCcPZx.js";import"./Link-DpL14GXS.js";import"./copy-XDqr6iKY.js";import"./copy-ClXhTaxL.js";import"./GitHub-Mark-_pFNYc1m.js";import"./TableOfContent-C_C39Km7.js";import"./index-CUPsZJD9.js";import"./index-C-FSsThx.js";import"./index-0vFd8GUO.js";import"./index-BinHysAW.js";import"./index-CWMf0NSb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Y-KB0uhX.js";import"./addCustomCSSWithScoping-B-5QqUkV.js";import"./Token-BXgPM1Ho.js";import"./ScrollEnablement-CAzFMa-6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CUv_QYff.js";import"./ResponsivePopoverCommon.css-XADsAOoO.js";import"./Suggestions.css-Bo7BTCq0.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

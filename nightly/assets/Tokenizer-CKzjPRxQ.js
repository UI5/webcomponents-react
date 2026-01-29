import{j as e}from"./iframe-CaWUkniD.js";import{useMDXComponents as m}from"./index-DfLMUe36.js";import{A as p}from"./ArgTypesWithNote-DGYDe6Gk.js";import{C as c}from"./ControlsWithNote-tn4IlKYb.js";import{D as l}from"./DocsHeader-COAJAB_S.js";import{F as d}from"./CommandsAndQueries-Bkeh__iN.js";import{M as x,C as r,a as u,D as h}from"./blocks-BMfWNTmT.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-BoixtVXz.js";import{T as s}from"./index-7BA8ztLX.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-q2cOJd.js";import"./information-D2K3Dl_P.js";import"./sys-enter-2-CcH0mjP8.js";import"./alert-CyfuNqtR.js";import"./Tag-CqIFc9Gy.js";import"./index-DN8rN30Z.js";import"./index-dFuotq6J.js";import"./Link-D_-jRuCf.js";import"./copy-RL6wI4mn.js";import"./copy-CqMAivUp.js";import"./GitHub-Mark-BFGmI5i2.js";import"./TableOfContent-BiO-A2Go.js";import"./index-tK2knsWN.js";import"./index-WiTork8k.js";import"./index-ChWdN6oy.js";import"./index-Bw4kzKrM.js";import"./index-C4konRse.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B2YWTQyV.js";import"./addCustomCSSWithScoping-DbaRAaG9.js";import"./Token-BnxjjGQW.js";import"./ScrollEnablement-C2wBh3eU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DKc5fhLO.js";import"./ResponsivePopoverCommon.css-4Xg56gf5.js";import"./Suggestions.css-DWWZcteF.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

import{j as e}from"./iframe-DFBm-DSq.js";import{useMDXComponents as m}from"./index-DN1lWEds.js";import{A as p}from"./ArgTypesWithNote-Bzi2j1Nc.js";import{C as c}from"./ControlsWithNote-BG5NIfsF.js";import{D as l}from"./DocsHeader-CUlKQN5C.js";import{F as d}from"./CommandsAndQueries-Dwesrog0.js";import{M as x,C as r,a as u,D as h}from"./blocks-B7zGvzyh.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-Cpicoq8d.js";import{T as s}from"./index-DSdAqA5h.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-i9Tuo-S4.js";import"./information-z2AwmlNQ.js";import"./sys-enter-2-DSpMbDS0.js";import"./alert-BRFe_Sc9.js";import"./Tag-CMC3yhYK.js";import"./index-BYzkCeld.js";import"./index-CEGh04ma.js";import"./Link-BlxVb8ea.js";import"./copy-BIsDO3Vh.js";import"./copy-BOgwG0pC.js";import"./GitHub-Mark-_RDBEP1q.js";import"./TableOfContent-BNkcj7N-.js";import"./index-CDCsv2ep.js";import"./index-DRIF-U0p.js";import"./index-s9mPNrYF.js";import"./index-B0ajYEze.js";import"./index-D-vZdY3z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqvN-tZt.js";import"./addCustomCSSWithScoping-DzzI1i6g.js";import"./Token-CNQzMPAi.js";import"./ScrollEnablement-BdJYzqT4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DGWJdbo7.js";import"./ResponsivePopoverCommon.css-CnMcrjsQ.js";import"./Suggestions.css-DijJF9RT.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

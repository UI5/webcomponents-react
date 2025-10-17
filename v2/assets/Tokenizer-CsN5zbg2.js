import{j as e}from"./iframe-C2wpKNYo.js";import{useMDXComponents as m}from"./index-C3bwhSaM.js";import{A as p}from"./ArgTypesWithNote-Bj2ch6fj.js";import{C as c}from"./ControlsWithNote-CzvwMPMy.js";import{D as l}from"./DocsHeader-DHSOjJVN.js";import{F as d}from"./CommandsAndQueries-BUx2QFuH.js";import{M as x,C as r,a as u,D as h}from"./blocks-CsqgEIu9.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-Eb5jnwQ0.js";import{T as s}from"./index-ku3Qy8U4.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-6FDQ4ka_.js";import"./information-BdwahN0R.js";import"./sys-enter-2-DhtxU3CZ.js";import"./alert-DqDZXgnZ.js";import"./Tag-BJVPlcpU.js";import"./index-Cg3QTQNO.js";import"./index-DK30OokX.js";import"./Link-BDqeBkDX.js";import"./copy-By7w-vbr.js";import"./copy-Mn7zeVlB.js";import"./GitHub-Mark-CBa2_m2b.js";import"./TableOfContent-DAwDlNWz.js";import"./index-BPkycJ7d.js";import"./index-CTKi5gtL.js";import"./index-Dsgid9kS.js";import"./index-uvW3ZjCI.js";import"./index-Cg_u4Ogr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN7qutFD.js";import"./addCustomCSSWithScoping-BIscafeh.js";import"./Token-CzVmXjd4.js";import"./ScrollEnablement-C0IR7RhZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bw7MGSnH.js";import"./ResponsivePopoverCommon.css-DTvFG0Ht.js";import"./Suggestions.css-Ce7PGErr.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

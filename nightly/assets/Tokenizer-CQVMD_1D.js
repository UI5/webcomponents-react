import{j as e}from"./iframe-CK4LOCvj.js";import{useMDXComponents as m}from"./index-BqLtYoST.js";import{A as p}from"./ArgTypesWithNote-DYRj7rZ3.js";import{C as c}from"./ControlsWithNote-CQds9_FJ.js";import{D as l}from"./DocsHeader--6JUETmA.js";import{F as d}from"./CommandsAndQueries-BwelsOM0.js";import{M as x,C as r,a as u,D as h}from"./blocks-ZjQWLnry.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-Qr_IubDb.js";import{T as s}from"./index-ESfXqHHe.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BFAmBcJW.js";import"./information-DVinbumE.js";import"./sys-enter-2-CxZg2yn9.js";import"./alert-q3RCUipA.js";import"./Tag-BHHtXuEO.js";import"./index-BIYQNCb4.js";import"./index-GePrpfQg.js";import"./Link-C72gLrWy.js";import"./copy-Bt3wcz1w.js";import"./copy-BE3AKkMg.js";import"./GitHub-Mark-mWU7RfFo.js";import"./TableOfContent-CLxJfvBu.js";import"./index-CW1io29o.js";import"./index-C1w0eQlR.js";import"./index-BUxn-N40.js";import"./index-BKUd1pYK.js";import"./index-DPjO4Ph3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6YKOrWJ.js";import"./addCustomCSSWithScoping-CyChXc_w.js";import"./Token-BpRQuSqj.js";import"./ScrollEnablement-B4EaRXxx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-LFJPBSzx.js";import"./ResponsivePopoverCommon.css-Dp8lV0BH.js";import"./Suggestions.css-DJt8IkfU.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

import{j as e}from"./iframe-lqcNyI1T.js";import{useMDXComponents as m}from"./index-B0DX3imF.js";import{A as p}from"./ArgTypesWithNote-CmS5G97-.js";import{C as c}from"./ControlsWithNote-BYRHEUf3.js";import{D as l}from"./DocsHeader-ABPUpJqp.js";import{F as d}from"./CommandsAndQueries-DzJmAZem.js";import{M as x,C as r,a as u,D as h}from"./blocks-BpHyZEcb.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-CWAuUCYE.js";import{T as s}from"./index-C-VsBQ4k.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CZPzb4BW.js";import"./information-04kgllMP.js";import"./sys-enter-2-DUAlyrLn.js";import"./alert-BKOHJXpG.js";import"./Tag-gBw-lmpH.js";import"./index-BwE7J1MZ.js";import"./index-D-4WJNaw.js";import"./Link-1aRA3aDD.js";import"./copy-B7qflzYl.js";import"./copy-CC4Y44ID.js";import"./GitHub-Mark-CrZQuWzg.js";import"./TableOfContent-BqOuSc1s.js";import"./index-Dd_PfWwN.js";import"./index-DgG0lX0j.js";import"./index-DHQLUBCy.js";import"./index-B4-GBSDE.js";import"./index-CiJkSLrj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D20vcD6H.js";import"./addCustomCSSWithScoping-CSRUaJeQ.js";import"./Token-C1zBJwar.js";import"./ScrollEnablement-BXvjXYp4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DubsfjRL.js";import"./ResponsivePopoverCommon.css-rVzp8R0x.js";import"./Suggestions.css-CwUuZGb0.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

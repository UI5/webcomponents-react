import{j as e}from"./iframe-BVsLYlhe.js";import{useMDXComponents as m}from"./index-DavU5a3Y.js";import{A as p}from"./ArgTypesWithNote-DXBdJ7lC.js";import{C as c}from"./ControlsWithNote-CGEaDRv0.js";import{D as l}from"./DocsHeader-DoAVvyax.js";import{F as d}from"./CommandsAndQueries-Bi9b4xK_.js";import{M as x,C as r,a as u,D as h}from"./blocks-BwdcnqOn.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-DF3cHqii.js";import{T as s}from"./index-fjfd86tI.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Chy_S0qP.js";import"./information-Q1gDT6BU.js";import"./sys-enter-2-CVfnD9eL.js";import"./alert-BQuV4PvU.js";import"./Tag-CNJ-l2ra.js";import"./index-BZsG0oyU.js";import"./index-CQv5SAoi.js";import"./Link-mimmL_0g.js";import"./copy-CTnQUdWw.js";import"./copy-hvSX-Foh.js";import"./GitHub-Mark-CEEZzxvN.js";import"./TableOfContent--O-E1U53.js";import"./index-BBlqkBew.js";import"./index-CppXcbvf.js";import"./index-pqTqdxQB.js";import"./index-bVRMu9zO.js";import"./index-2NXGICNv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dhuu23v1.js";import"./addCustomCSSWithScoping-CKzpaFfQ.js";import"./Token-D0KaAyb8.js";import"./ScrollEnablement-OBzjrUFw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-MnW36ayG.js";import"./ResponsivePopoverCommon.css-uHz60RXl.js";import"./Suggestions.css-BC296_76.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

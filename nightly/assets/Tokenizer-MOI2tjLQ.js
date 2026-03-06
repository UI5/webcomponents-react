import{j as e}from"./iframe-2x_0PLRY.js";import{useMDXComponents as m}from"./index-C4Rs_8Uq.js";import{A as p}from"./ArgTypesWithNote-JiO6wNbv.js";import{C as c}from"./ControlsWithNote-CB1LCTn_.js";import{D as l}from"./DocsHeader-BY_r8Kwk.js";import{F as d}from"./Footer-C23Ewd88.js";import"./CommandsAndQueries-CvWMTcrY.js";import"./PageNotFound-GiConHCM.js";import{M as x,C as r,a as u,D as h}from"./blocks-DrJbgW55.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-DbFyTOST.js";import{T as s}from"./index-CmJXjwTY.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-fDGoUi.js";import"./information-CQy15gwz.js";import"./sys-enter-2-fcqn0uC8.js";import"./alert-DZyPZUjF.js";import"./Tag-CYhgI4gb.js";import"./index-1eyneICk.js";import"./index-Bs9Uk8tv.js";import"./Link-Dg5-mm9g.js";import"./copy-w6aCSiGB.js";import"./copy-DSjSLU2X.js";import"./GitHub-Mark-Dkq8lTsj.js";import"./TableOfContent-CdwxKZEk.js";import"./index-Da9gu6ir.js";import"./index-DdARDxKZ.js";import"./index-CZ7o6xvr.js";import"./index-lA2D-rzF.js";import"./index-B75d9fwz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUHmvjuE.js";import"./addCustomCSSWithScoping-CuKwKJpy.js";import"./Illustrations-GJByOHnh.js";import"./i18n-defaults-CFWtSmu6.js";import"./Token-CYwnA-o2.js";import"./ScrollEnablement-B0eGwDT6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bv6KV_Gq.js";import"./ResponsivePopoverCommon.css-ComU2SZW.js";import"./Suggestions.css-pKApGvll.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
`,e.jsx(d,{})]})}function ie(o={}){const{wrapper:n}={...m(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{ie as default};

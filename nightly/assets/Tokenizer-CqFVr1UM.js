import{j as e}from"./iframe-GXp7lrSQ.js";import{u as p,M as m,C as r,a as c,D as l}from"./blocks-XkJ722q3.js";import{A as d}from"./ArgTypesWithNote-TC6KofCQ.js";import{C as x}from"./ControlsWithNote-CAVQlFWx.js";import{D as u}from"./DocsHeader-DIvhQild.js";import{F as h}from"./Footer-uVHBRSQb.js";import"./CommandsAndQueries-CVcJVi5r.js";import"./PageNotFound-VnOdSsgo.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-C1H7xLpz.js";import{T as s}from"./index-DTjgsKOy.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9hIm448.js";import"./information-CwevoeOo.js";import"./sys-enter-2-BSdQUe02.js";import"./alert-Ds801M6U.js";import"./Tag-CUfffkkD.js";import"./index-BXKqqHdE.js";import"./index-CMKcbagv.js";import"./Link-B8HUwSLv.js";import"./copy-ColcidlA.js";import"./copy-_WAqiJ1e.js";import"./GitHub-Mark-CdpM-LE3.js";import"./TableOfContent-BLO4MxbM.js";import"./index-TceWecEs.js";import"./index-CmMI2aTL.js";import"./index-BLkFX4jD.js";import"./index-C-99lkBL.js";import"./index-CrV5gfjE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHLtduuY.js";import"./addCustomCSSWithScoping-lRpYguTz.js";import"./Illustrations-C-7wSXd8.js";import"./i18n-defaults-CFWtSmu6.js";import"./Token-DR2_YNLL.js";import"./ScrollEnablement-BbZ7dfG4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B3m1DJEV.js";import"./ResponsivePopoverCommon.css-Bc1a9KNA.js";import"./Suggestions.css-Ahw1quaz.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...p(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:t}),`
`,e.jsx(u,{of:t,subComponents:["Token"],experimental:!0}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(x,{of:i}),`
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
`,e.jsx(c,{children:f}),`
`,e.jsx(n.h2,{id:"token",children:"Token"}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(d,{metaOf:t,of:s}),`
`,e.jsx(h,{})]})}function re(o={}){const{wrapper:n}={...p(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{re as default};

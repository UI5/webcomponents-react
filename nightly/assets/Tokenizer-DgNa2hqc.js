import{j as e}from"./iframe-DMCuegit.js";import{u as p,M as m,C as r,a as c,D as l}from"./blocks-_hT2CGz-.js";import{A as d}from"./ArgTypesWithNote-CNYrCXCJ.js";import{C as x}from"./ControlsWithNote-CCfPh1IT.js";import{D as u}from"./DocsHeader-BGUPBIWz.js";import{F as h}from"./Footer-0Wa-LUTc.js";import"./CommandsAndQueries-C9E2MGX7.js";import"./PageNotFound-BG19bJbD.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-Dzz9WwQ8.js";import{T as s}from"./index-kRYP0oNj.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-eKDFsa2E.js";import"./information-5_fbL55R.js";import"./sys-enter-2-Dil9t1r8.js";import"./alert-D7vPLYbi.js";import"./Tag-DKKBiDqY.js";import"./index-D62lIz3L.js";import"./index-otx7j-A2.js";import"./Link-CmPTNs7p.js";import"./copy-B-HwLSgn.js";import"./copy-CPtUp5y0.js";import"./GitHub-Mark-DIeXcjWa.js";import"./TableOfContent-CJ3fOdBx.js";import"./index-DEoJMyHo.js";import"./index-Dzpyi8IH.js";import"./index-C9z-ZS1p.js";import"./index-C1STFZgh.js";import"./index-Di3QE5re.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5tqyg7w.js";import"./addCustomCSSWithScoping-C0Smz55A.js";import"./Illustrations-bTO4h7is.js";import"./i18n-defaults-CFWtSmu6.js";import"./Token-Dnuzgc0h.js";import"./ScrollEnablement-CBsMaVqO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DPUfNWM3.js";import"./ResponsivePopoverCommon.css-MXP7eeX6.js";import"./Suggestions.css-Dvj1z-OQ.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...p(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:t}),`
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

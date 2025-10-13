import{j as e}from"./iframe-B2H5__qL.js";import{useMDXComponents as m}from"./index-Bc3WoLXB.js";import{A as p}from"./ArgTypesWithNote-BkQFLnP8.js";import{C as c}from"./ControlsWithNote-4ZbwV_xc.js";import{D as l}from"./DocsHeader-Ma5Prb85.js";import{F as d}from"./CommandsAndQueries-CP6cnX5g.js";import{M as x,C as r,a as u,D as h}from"./blocks-CV5yz-FR.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-E891mbYz.js";import{T as s}from"./index-BHvpTwu8.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cm-x3hEF.js";import"./information-C3uad2Xw.js";import"./sys-enter-2-cAFQMIU-.js";import"./alert-D25r9vgu.js";import"./Tag-7r6nRPOe.js";import"./index-CF6OSC7N.js";import"./index-BLSBFNnV.js";import"./Link-CBNkHCq_.js";import"./copy-Dq1vVsOW.js";import"./copy-BwEcpAyC.js";import"./GitHub-Mark-Dm1fGQmx.js";import"./TableOfContent-CbIy2CJ0.js";import"./index-CPEAIHq6.js";import"./index-8OksVI4W.js";import"./index-BNOYEhs3.js";import"./index-CwqZMpwP.js";import"./index-BCbtyila.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVsneHI1.js";import"./addCustomCSSWithScoping-cFAolBzW.js";import"./Token-BIK1iWVF.js";import"./ScrollEnablement-qavzlcVF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ABAA2Grv.js";import"./ResponsivePopoverCommon.css-BADeKMEp.js";import"./Suggestions.css-gsdRtnKE.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

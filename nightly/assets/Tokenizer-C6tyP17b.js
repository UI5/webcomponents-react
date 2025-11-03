import{j as e}from"./iframe-C6G8Gpme.js";import{useMDXComponents as m}from"./index-C4rJv3Nd.js";import{A as p}from"./ArgTypesWithNote-Bh-Uuuvv.js";import{C as c}from"./ControlsWithNote-LUh1InXg.js";import{D as l}from"./DocsHeader-bfNfB3Kf.js";import{F as d}from"./CommandsAndQueries-CX4_ppDX.js";import{M as x,C as r,a as u,D as h}from"./blocks-C6ISP02G.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-B34adU85.js";import{T as s}from"./index-DG5IRT-t.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CLl--vXw.js";import"./information-CAQjlf4h.js";import"./sys-enter-2-CseNsjRz.js";import"./alert-C6FTsI2C.js";import"./Tag-wYYkZAW5.js";import"./index-B7V2IaSq.js";import"./index--EZEVYBb.js";import"./Link-B1f9egnY.js";import"./copy-BvZKVPZ2.js";import"./copy-DG7SwgZt.js";import"./GitHub-Mark-BUf4wUMm.js";import"./TableOfContent-Bg_C24Fl.js";import"./index-MA4O1_BO.js";import"./index-DtX1Aayg.js";import"./index-CNpE9-6C.js";import"./index-CYD-IelD.js";import"./index-NHF_x4Su.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2tTP6jwo.js";import"./addCustomCSSWithScoping-DkcigAPx.js";import"./Token-BESOIpLC.js";import"./ScrollEnablement-DBsQ_VBd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CbgkjpUB.js";import"./ResponsivePopoverCommon.css-BaW35ZlT.js";import"./Suggestions.css-D8LM2L39.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

import{j as e}from"./iframe-CtC7gYmF.js";import{useMDXComponents as m}from"./index-Di_URU-1.js";import{A as p}from"./ArgTypesWithNote-B-PQqAxc.js";import{C as c}from"./ControlsWithNote-VDJmcR8g.js";import{D as l}from"./DocsHeader-Bz17cmNN.js";import{F as d}from"./CommandsAndQueries-DJ8rBoed.js";import{M as x,C as r,a as u,D as h}from"./blocks-mn43RK2l.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-CS7ekTOC.js";import{T as s}from"./index-BlKmV8OR.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BQgIK84O.js";import"./information-CFH6-U84.js";import"./sys-enter-2-DcKU3U88.js";import"./alert-BgZS6-Ve.js";import"./Tag-DL1jc8MZ.js";import"./index-B89psySH.js";import"./index-C6r9Z_qm.js";import"./Link-DC3Ks00x.js";import"./copy-Bc4RlbqC.js";import"./copy-qYhvVcV8.js";import"./GitHub-Mark-BaXje0NN.js";import"./TableOfContent-FJaxAP6D.js";import"./index-Bc0i7q2T.js";import"./index-BjvlOMJE.js";import"./index-D2-G6hnA.js";import"./index-DbYbEtFi.js";import"./index-BCFTf5Mq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVmORIKm.js";import"./addCustomCSSWithScoping-u1_Fcso4.js";import"./Token-Do6RzTo7.js";import"./ScrollEnablement-2beWlGZ4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-x5B2lMAL.js";import"./ResponsivePopoverCommon.css-CWluabdp.js";import"./Suggestions.css-C-jhG9YF.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

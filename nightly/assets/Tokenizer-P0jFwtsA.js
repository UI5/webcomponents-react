import{j as e}from"./iframe-CGBVIl7z.js";import{useMDXComponents as m}from"./index-BD_J3XGh.js";import{A as p}from"./ArgTypesWithNote-4anoCtIa.js";import{C as c}from"./ControlsWithNote-CuenDjBy.js";import{D as l}from"./DocsHeader-CWGcUf5V.js";import{F as d}from"./CommandsAndQueries-C4N9Si-I.js";import{M as x,C as r,a as u,D as h}from"./blocks-amwX2WGZ.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-CAubOzhE.js";import{T as s}from"./index-CHpJGZgj.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bflw6F-3.js";import"./information-RMMgKPqE.js";import"./sys-enter-2-CjQpGHgC.js";import"./alert-B45RxjKS.js";import"./Tag-CKuoT6Wf.js";import"./index-DBko667H.js";import"./index-CohLls_f.js";import"./Link-7Pc42Mkn.js";import"./copy-Dt0cHpgH.js";import"./copy-C7UfB3Pq.js";import"./GitHub-Mark-D39pXWIu.js";import"./TableOfContent-DbzcSDOZ.js";import"./index-BpPbjuIA.js";import"./index-BSuCMsLZ.js";import"./index-DdaBmZIy.js";import"./index-739hgjkB.js";import"./index-DSjZIl8t.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bhku-quN.js";import"./addCustomCSSWithScoping-BVpL9dRN.js";import"./Token-CE1htzEf.js";import"./ScrollEnablement--aZEG85r.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DiNPNXGG.js";import"./ResponsivePopoverCommon.css-CCcFdLcp.js";import"./Suggestions.css-Dz1M5Owd.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

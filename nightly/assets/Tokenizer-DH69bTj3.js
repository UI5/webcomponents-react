import{j as e}from"./iframe-BB4qEXD6.js";import{useMDXComponents as m}from"./index-Du8_Rn8P.js";import{A as p}from"./ArgTypesWithNote-D2ttIe6k.js";import{C as c}from"./ControlsWithNote-DYMuD7l3.js";import{D as l}from"./DocsHeader-BS7EOXT_.js";import{F as d}from"./CommandsAndQueries-DRsaMJRB.js";import{M as x,C as r,a as u,D as h}from"./blocks-CR8KOJrJ.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-CuKQbXS-.js";import{T as s}from"./index-DvlunWup.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DdTPxxL_.js";import"./information-Y0x5W-OX.js";import"./sys-enter-2-BJKr7qQ1.js";import"./alert-BQZZbhbR.js";import"./Tag-Da7QnCDv.js";import"./index-Dpli1QB-.js";import"./index-CsmFqYDM.js";import"./Link-BYUEfY7R.js";import"./copy-6zx3_vtS.js";import"./copy-BVMnHcDg.js";import"./GitHub-Mark-BhVT2185.js";import"./TableOfContent-WiDutKKz.js";import"./index-x2cXHq8y.js";import"./index-9Py2403r.js";import"./index-Dt_2dhRA.js";import"./index-DMHUWYeC.js";import"./index-CztWxO-c.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bzv1Zaa7.js";import"./addCustomCSSWithScoping-Cbj-6aXb.js";import"./Token-DoaTlhno.js";import"./ScrollEnablement-BU_OfE9O.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CI0I5uqQ.js";import"./ResponsivePopoverCommon.css-Dw9E0nMz.js";import"./Suggestions.css-BC1EOLh5.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

import{j as e}from"./iframe-C4opeNuJ.js";import{useMDXComponents as m}from"./index-DlqCzQ5b.js";import{A as p}from"./ArgTypesWithNote-DQGzDcd2.js";import{C as c}from"./ControlsWithNote-LjA8IyZm.js";import{D as l}from"./DocsHeader-C4jbJpbo.js";import{F as d}from"./CommandsAndQueries-C6QEnHzv.js";import{M as x,C as r,a as u,D as h}from"./blocks-BnM-0OnJ.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-UKzcGYVj.js";import{T as s}from"./index-B0Ywa8RX.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Djkzc3Do.js";import"./information-D9qzbrES.js";import"./sys-enter-2-OOuZrUt0.js";import"./alert-CJYb_vFX.js";import"./Tag-CUNQyer4.js";import"./index-CFNq6guK.js";import"./index-B-UdOs74.js";import"./Link-DxcQOJp8.js";import"./copy-VLDSUZi6.js";import"./copy-DCgRf4_C.js";import"./GitHub-Mark-DUHXOOxz.js";import"./TableOfContent-CxLlyFVO.js";import"./index-BWSzAzRH.js";import"./index-Wmnu1H8C.js";import"./index-DTzFsIn0.js";import"./index-fsr9wgfs.js";import"./index-DRX5KInn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIUIYMM9.js";import"./addCustomCSSWithScoping-C7i1P6L4.js";import"./Token-OFa2wXAf.js";import"./ScrollEnablement-DiEQdxkX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C8MaLOVV.js";import"./ResponsivePopoverCommon.css-XSDUyRKt.js";import"./Suggestions.css-BwrSUtIe.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

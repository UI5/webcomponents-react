import{j as e}from"./iframe-ChLklOsd.js";import{useMDXComponents as m}from"./index-C8O_9vrB.js";import{A as p}from"./ArgTypesWithNote-BEdHazNn.js";import{C as c}from"./ControlsWithNote-BKZjeS7U.js";import{D as l}from"./DocsHeader-Bz6VW3Ao.js";import{F as d}from"./CommandsAndQueries-BJfqhrRX.js";import{M as x,C as r,a as u,D as h}from"./blocks-DJtWS-rM.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-CJs8g8iT.js";import{T as s}from"./index-B9bNWgEd.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3GBtHew.js";import"./information-Cwgz9DFQ.js";import"./sys-enter-2-CCtRtPlT.js";import"./alert-B2sdUTAu.js";import"./Tag-DfUNsarH.js";import"./index-k8fk5wba.js";import"./index-BapOo3Yq.js";import"./Link-8xYNNbnA.js";import"./copy-CpkWUnUU.js";import"./copy-e7lZwdk_.js";import"./GitHub-Mark-B8B_KMCt.js";import"./TableOfContent-DlI8e9kq.js";import"./index-zPNCu5nO.js";import"./index-CZdKIXPg.js";import"./index-CLorPZ9t.js";import"./index-DapyP3wm.js";import"./index-C6Hr8eB_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxJjekgT.js";import"./addCustomCSSWithScoping-CUADiRCd.js";import"./Token-BNT6ZbqA.js";import"./ScrollEnablement-ZwyKnO_p.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D2j6MVzc.js";import"./ResponsivePopoverCommon.css-rK6RDwp7.js";import"./Suggestions.css-60iPjMbi.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

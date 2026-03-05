import{j as e}from"./iframe-D89K97gv.js";import{useMDXComponents as m}from"./index-BJvRQfhi.js";import{A as p}from"./ArgTypesWithNote-ByfgJ6EA.js";import{C as c}from"./ControlsWithNote-CoVcsK_6.js";import{D as l}from"./DocsHeader-DP8TxsA3.js";import{F as d}from"./Footer-a85ddGr6.js";import"./CommandsAndQueries-CkqpoGcY.js";import"./PageNotFound-Btnag6Vx.js";import{M as x,C as r,a as u,D as h}from"./blocks-Cy4BDnT1.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-rTisnJqO.js";import{T as s}from"./index-DfVIrfiO.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CG_fwaJ_.js";import"./information-DxfKMTg6.js";import"./sys-enter-2-aIi16_BZ.js";import"./alert-CzEHD23R.js";import"./Tag-BMl9amXb.js";import"./index-_KpWx7_H.js";import"./index-CHwgMgjy.js";import"./Link-vvC1wc11.js";import"./copy-D95-XUb5.js";import"./copy-BeHvABnn.js";import"./GitHub-Mark-e3Bx1Fbe.js";import"./TableOfContent-Bl5qcHLc.js";import"./index-D9Orgelb.js";import"./index-CD-X_9j4.js";import"./index-BFDU-uR3.js";import"./index-BmDAlwXN.js";import"./index-CSxOLZlI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-JuHHWHgI.js";import"./addCustomCSSWithScoping-D0msxKTR.js";import"./Illustrations-llDvpFiy.js";import"./i18n-defaults-C7ICj5-E.js";import"./Token-DfLKw0sY.js";import"./ScrollEnablement-B2bIFiiq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CvXtV7K9.js";import"./ResponsivePopoverCommon.css-B4cnMME8.js";import"./Suggestions.css-CmSTd68P.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

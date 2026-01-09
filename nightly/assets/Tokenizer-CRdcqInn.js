import{j as e}from"./iframe-DvHwewhR.js";import{useMDXComponents as m}from"./index-CLaogw5S.js";import{A as p}from"./ArgTypesWithNote-By_aH_AE.js";import{C as c}from"./ControlsWithNote-B6M_GQJb.js";import{D as l}from"./DocsHeader-BH0B3pCH.js";import{F as d}from"./CommandsAndQueries-BNdncSiU.js";import{M as x,C as r,a as u,D as h}from"./blocks-CB2I7-76.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-ajfWcpCi.js";import{T as s}from"./index-CWN6dlFm.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bt09l3yh.js";import"./information-CIIJNTCs.js";import"./sys-enter-2-CzO95d9X.js";import"./alert-Dwvb1Up2.js";import"./Tag-CbT4PDaW.js";import"./index-Dxi3lBUy.js";import"./index-CdEjZa35.js";import"./Link-BbkEIv5w.js";import"./copy-CLgzmG1F.js";import"./copy-CCEG4Gow.js";import"./GitHub-Mark-BD4VRPkp.js";import"./TableOfContent-CqehIVhz.js";import"./index-KqEBtHRf.js";import"./index-BPXy8zzT.js";import"./index-Dm8v7iX1.js";import"./index-BcAV-ghG.js";import"./index-BpY-7uI8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CoI2TKPf.js";import"./addCustomCSSWithScoping-B6Lor8tu.js";import"./Token-Z5rUiF0C.js";import"./ScrollEnablement-BGx-icSx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BRn_nQZN.js";import"./ResponsivePopoverCommon.css-CyL8R70X.js";import"./Suggestions.css-Bkx-OrvG.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

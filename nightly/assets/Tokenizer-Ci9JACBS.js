import{j as e}from"./iframe-DGliVLqx.js";import{useMDXComponents as m}from"./index-BKdQ_dPP.js";import{A as p}from"./ArgTypesWithNote-BC1GXjKB.js";import{C as c}from"./ControlsWithNote-D0TOtvLO.js";import{D as l}from"./DocsHeader-DEotGRp-.js";import{F as d}from"./CommandsAndQueries-DhC-K5aV.js";import{M as x,C as r,a as u,D as h}from"./blocks-DSVMoi0f.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-DBXOjVdz.js";import{T as s}from"./index-9nl7pBJZ.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CUMj3eTR.js";import"./information-DwX5G7SH.js";import"./sys-enter-2-CLhjZKEg.js";import"./alert-D8WWgafc.js";import"./Tag-D0qHMP--.js";import"./index-C-ihtk73.js";import"./index-C2z7U0T0.js";import"./Link-NPuKH9vo.js";import"./copy-CmqeB8wk.js";import"./copy-BXMLotg5.js";import"./GitHub-Mark-CBgxhA95.js";import"./TableOfContent-Dui3Dwpi.js";import"./index-0zoKCck7.js";import"./index-DDYQS3It.js";import"./index-xskusYgR.js";import"./index-usRBaxBR.js";import"./index-Bnhuo37k.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xhvQd63o.js";import"./addCustomCSSWithScoping-H3JndsVD.js";import"./Token-BYnYPiQ0.js";import"./ScrollEnablement-7T92gtzO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DMz5O0cu.js";import"./ResponsivePopoverCommon.css-C-Hps5ad.js";import"./Suggestions.css-OrfoYcSp.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

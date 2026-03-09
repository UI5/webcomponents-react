import{j as e}from"./iframe-1ixiCrn4.js";import{useMDXComponents as m}from"./index-2ZsnEyB9.js";import{A as p}from"./ArgTypesWithNote-Dism-KdO.js";import{C as c}from"./ControlsWithNote-DcVOmk8S.js";import{D as l}from"./DocsHeader-6S2w5SCy.js";import{F as d}from"./Footer-BCWgdeK4.js";import"./CommandsAndQueries-Bsuql65l.js";import"./PageNotFound-C5oFz4Y3.js";import{M as x,C as r,a as u,D as h}from"./blocks-CwvJzyWa.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-CN5DNYTO.js";import{T as s}from"./index-BPO8L7mq.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DCoPFbKG.js";import"./information-CNHKSbA7.js";import"./sys-enter-2-0xYCNe_8.js";import"./alert-tzZ5a9nx.js";import"./Tag-DxuCzySC.js";import"./index-DPL6_Akv.js";import"./index-hCYkbxY8.js";import"./Link-342TA0WQ.js";import"./copy-VAE-BhfP.js";import"./copy-D9dip1OG.js";import"./GitHub-Mark-nNo9p1X2.js";import"./TableOfContent-BapB0lYb.js";import"./index-Bwh9lIWA.js";import"./index-CfOzkRmu.js";import"./index-D3khTefu.js";import"./index-D-IU78TD.js";import"./index-DQdp7GQC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BMCl2W9z.js";import"./addCustomCSSWithScoping-BlChbTB-.js";import"./Illustrations-BCjcVikr.js";import"./i18n-defaults-CFWtSmu6.js";import"./Token-CYS7OIdr.js";import"./ScrollEnablement-DX3vc3nf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B6T0zg5o.js";import"./ResponsivePopoverCommon.css-D3Qzl4EB.js";import"./Suggestions.css-BAWn6ORu.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

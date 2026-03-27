import{j as e}from"./iframe-GiALwnwk.js";import{useMDXComponents as m}from"./index-D5Br25pp.js";import{A as p}from"./ArgTypesWithNote-BeYGqatD.js";import{C as c}from"./ControlsWithNote-Cgmfge1m.js";import{D as l}from"./DocsHeader-BqCCLfbL.js";import{F as d}from"./Footer-CTpmUzQu.js";import"./CommandsAndQueries-C_IHadBx.js";import"./PageNotFound-lhidYwaf.js";import{M as x,C as r,a as u,D as h}from"./blocks-CWQEoHYq.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-fBYRsBlT.js";import{T as s}from"./index-CG1YS_H1.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Df-74Kk_.js";import"./information-DVV2_7m2.js";import"./sys-enter-2-BLXa0HBj.js";import"./alert-C-pLX4kq.js";import"./Tag-LkaAJwXo.js";import"./index-D48RNIki.js";import"./index-C2OBDsL0.js";import"./Link-Cl18BXak.js";import"./copy-swqFIkzM.js";import"./copy-BjtWQX8c.js";import"./GitHub-Mark-CONmBkWC.js";import"./TableOfContent-B7J8UzQ4.js";import"./index-DmWjxGkj.js";import"./index-_Dwwjvl6.js";import"./index-j7N-4kUz.js";import"./index-DsAl_UTx.js";import"./index-Q6Oco0u-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3O-UdkwG.js";import"./addCustomCSSWithScoping-DYkoSNAv.js";import"./Illustrations-OXUCAhva.js";import"./i18n-defaults-CFWtSmu6.js";import"./Token-DqvIjy0G.js";import"./ScrollEnablement-Dfwd2yQV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CmNegGRy.js";import"./ResponsivePopoverCommon.css-Dd9wsj0Z.js";import"./Suggestions.css-Dyj9iu2Q.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

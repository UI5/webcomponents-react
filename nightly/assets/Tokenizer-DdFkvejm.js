import{j as e}from"./iframe-18_5pfj2.js";import{useMDXComponents as m}from"./index-CIhtdkHx.js";import{A as p}from"./ArgTypesWithNote-DihY4odd.js";import{C as c}from"./ControlsWithNote-Doto1ynJ.js";import{D as l}from"./DocsHeader-ClFsSvc-.js";import{F as d}from"./Footer-BvGdDwIL.js";import"./CommandsAndQueries-BGW2wCD6.js";import"./PageNotFound-BO4FGO9U.js";import{M as x,C as r,a as u,D as h}from"./blocks-Cj6CgQUG.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-DTrSqEYC.js";import{T as s}from"./index-DMdeMy4s.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIj2K6s5.js";import"./information-CdIjwcxP.js";import"./sys-enter-2-LNLtosyG.js";import"./alert-DegEg84v.js";import"./Tag-s2oCmO6-.js";import"./index-B3MOIvF5.js";import"./index-BlCfzNdo.js";import"./Link-C9Gq01-B.js";import"./copy-BcDeo-ab.js";import"./copy-BQYJB7Nu.js";import"./GitHub-Mark-ChV91zVA.js";import"./TableOfContent-CEQwYXTE.js";import"./index-CRBj8Lig.js";import"./index-Bj-OwMs_.js";import"./index-DflRRV76.js";import"./index-Dhqddszu.js";import"./index-DiTpBrDm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DVbD4jAU.js";import"./addCustomCSSWithScoping-CAI73UoR.js";import"./Illustrations-CxofZbv6.js";import"./i18n-defaults-CFWtSmu6.js";import"./Token-D4pS284n.js";import"./ScrollEnablement-8Hjnke1V.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dz4U-Eop.js";import"./ResponsivePopoverCommon.css-C2FEozzV.js";import"./Suggestions.css-BCNDEbh8.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

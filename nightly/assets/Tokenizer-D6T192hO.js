import{j as e}from"./iframe-D3LJsbiF.js";import{useMDXComponents as m}from"./index-CyzPa2YT.js";import{A as p}from"./ArgTypesWithNote-GVhjRRE4.js";import{C as c}from"./ControlsWithNote-Daapf7Ph.js";import{D as l}from"./DocsHeader-Df8FJ8t_.js";import{F as d}from"./Footer-BXlDlrd5.js";import"./CommandsAndQueries-ZyWBFV72.js";import"./PageNotFound-BgagSqcc.js";import{M as x,C as r,a as u,D as h}from"./blocks-C17hS1H0.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-6naPE9Zl.js";import{T as s}from"./index-CZIvnzgG.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DQRzxDSe.js";import"./information-Pe11Evj5.js";import"./sys-enter-2-nzdqIN1z.js";import"./alert-8s9TsqZs.js";import"./Tag-DEA3QTbc.js";import"./index-CukaHHo2.js";import"./index-GY8piuJS.js";import"./Link-DcTIU4K2.js";import"./copy-Cx1SvDmz.js";import"./copy-CVdXx4M8.js";import"./GitHub-Mark-rXF-W6BJ.js";import"./TableOfContent-VA0eJa1c.js";import"./index-Bs-GzB5h.js";import"./index-Do3YGvBX.js";import"./index-BCAZlXLW.js";import"./index-N6F2Hon5.js";import"./index-CQnpN8bu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CgFvj6Uo.js";import"./addCustomCSSWithScoping-DIPZZBkR.js";import"./Illustrations-DV_KfhEH.js";import"./i18n-defaults-CFWtSmu6.js";import"./Token-CaO8U0-1.js";import"./ScrollEnablement-B33zvDKT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C2Jwg-e3.js";import"./ResponsivePopoverCommon.css-Qeab4xYL.js";import"./Suggestions.css-Cmes9Jc-.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

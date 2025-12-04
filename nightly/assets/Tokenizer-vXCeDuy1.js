import{j as e}from"./iframe-DMN4M7xk.js";import{useMDXComponents as m}from"./index-CILjehOn.js";import{A as p}from"./ArgTypesWithNote-mnMRZAOp.js";import{C as c}from"./ControlsWithNote-tXM9Snha.js";import{D as l}from"./DocsHeader-MRAxGgEE.js";import{F as d}from"./CommandsAndQueries-WBNIPpbv.js";import{M as x,C as r,a as u,D as h}from"./blocks-D_B3P_L6.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-BJ_NI6Tx.js";import{T as s}from"./index-Cbx9e8YH.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fsDm6-dx.js";import"./information-BhNJA5fs.js";import"./sys-enter-2-D_7r5iCR.js";import"./alert-B4Ie2dEw.js";import"./Tag-ClYMjcis.js";import"./index-DC1f3cIv.js";import"./index-Bm615TpC.js";import"./Link-USYy1Qgl.js";import"./copy-B73e9Yog.js";import"./copy-DfWrS8Wl.js";import"./GitHub-Mark-Yj5YdLl8.js";import"./TableOfContent-B_sZsaRY.js";import"./index-XJcxBhVz.js";import"./index-CZCgHbbj.js";import"./index-Bppq7NLw.js";import"./index-DPueH0sU.js";import"./index-W50AkbAB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IlXAI9zt.js";import"./addCustomCSSWithScoping-dib_Xrvh.js";import"./Token-Z8h45JU6.js";import"./ScrollEnablement-DdRp-vrJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-t6-iH22V.js";import"./ResponsivePopoverCommon.css-DoVie0vW.js";import"./Suggestions.css-CBNkZ6eC.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

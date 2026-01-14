import{j as e}from"./iframe-DsoLxTrs.js";import{useMDXComponents as m}from"./index-BYp40d_0.js";import{A as p}from"./ArgTypesWithNote-C7GYzjFB.js";import{C as c}from"./ControlsWithNote-DpDkKRs4.js";import{D as l}from"./DocsHeader-CDZJIivq.js";import{F as d}from"./CommandsAndQueries-CnpygbQ5.js";import{M as x,C as r,a as u,D as h}from"./blocks-BdFCA8eW.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-ChlDZUiD.js";import{T as s}from"./index-CO_n5Tsw.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DgqU0bHc.js";import"./information-Dif64wGJ.js";import"./sys-enter-2-CF1sb48s.js";import"./alert-DcNO-1uE.js";import"./Tag-CTTSF-tU.js";import"./index-CNxSz0Hc.js";import"./index-BUCXDqHN.js";import"./Link-B3HsQBkt.js";import"./copy-rhZFmAqL.js";import"./copy-BFj7VYi7.js";import"./GitHub-Mark-CCJSy1Iz.js";import"./TableOfContent-CLxSJm3z.js";import"./index-DoD5C1cK.js";import"./index-CgwlM72N.js";import"./index-_wPX9_fg.js";import"./index-CcP8H8eG.js";import"./index-DUtNsIlX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CN1rIyKa.js";import"./addCustomCSSWithScoping-Bri9Hmu_.js";import"./Token-zMAsq7gF.js";import"./ScrollEnablement-DmTjTt1h.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CR5T5AOq.js";import"./ResponsivePopoverCommon.css-DQ_Sc_46.js";import"./Suggestions.css-BdMDw5En.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

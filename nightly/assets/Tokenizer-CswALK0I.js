import{j as e}from"./iframe-B4y_-iU1.js";import{useMDXComponents as m}from"./index-Dmi6nQVe.js";import{A as p}from"./ArgTypesWithNote-0BxlGguo.js";import{C as c}from"./ControlsWithNote-CGhODPqQ.js";import{D as l}from"./DocsHeader-DWE4KR2K.js";import{F as d}from"./CommandsAndQueries-CcSeU6ue.js";import{M as x,C as r,a as u,D as h}from"./blocks-sxqAtQzk.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-DZt0vjAD.js";import{T as s}from"./index--eBVrFEe.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dllizol6.js";import"./information-D0sGyRbR.js";import"./sys-enter-2-C9g_SRcG.js";import"./alert-D-igEgv7.js";import"./Tag-DlHRwvSs.js";import"./index-BM-ZpZwJ.js";import"./index-C7p9xCdn.js";import"./Link-DqVeu_cc.js";import"./copy-BUckGUfs.js";import"./copy-DoYKp7vI.js";import"./GitHub-Mark-CCg6DNKR.js";import"./TableOfContent-CCxVzqLR.js";import"./index-CUhg4Pue.js";import"./index-D9CWAfTz.js";import"./index-BBdeIQ4g.js";import"./index-Bfg65B6s.js";import"./index-DGhRlPcl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DY4dR896.js";import"./addCustomCSSWithScoping-B0N-pOai.js";import"./Token-Cw5uKiHz.js";import"./ScrollEnablement-D-ijl2E6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C_E-KHlV.js";import"./ResponsivePopoverCommon.css-p5LIoyU4.js";import"./Suggestions.css-BVl5WNmq.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

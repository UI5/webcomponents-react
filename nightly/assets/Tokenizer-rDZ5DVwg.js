import{j as e}from"./iframe-Do6vb0_F.js";import{useMDXComponents as m}from"./index-CjAG28Zi.js";import{A as p}from"./ArgTypesWithNote-B1VeuQhy.js";import{C as c}from"./ControlsWithNote-Yo9YxzeI.js";import{D as l}from"./DocsHeader-CLVKUgBk.js";import{F as d}from"./CommandsAndQueries-DNVLBibD.js";import{M as x,C as r,a as u,D as h}from"./blocks-BSmhBV8W.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-CMkMHk4Y.js";import{T as s}from"./index-BjBGL_Fn.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DFaXcVzr.js";import"./information-kf1Y_V0y.js";import"./sys-enter-2-Dgg9scSJ.js";import"./alert-eluNIvxZ.js";import"./Tag-Bm_1Oa-G.js";import"./index-CziNROS9.js";import"./index-CRpB2mc_.js";import"./Link-DfSClIn0.js";import"./copy-6yP1MdvU.js";import"./copy-CtSFAv-a.js";import"./GitHub-Mark-BQKgzCKu.js";import"./TableOfContent-DFD41kkG.js";import"./index-Bn7jdYPg.js";import"./index-CjAZJ6mP.js";import"./index-B7DmSRaZ.js";import"./index-euaiQ6-T.js";import"./index-BKzdQw4A.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-x3ovOdYp.js";import"./addCustomCSSWithScoping-DMyk9VX6.js";import"./Token-DU3vF1l0.js";import"./ScrollEnablement-Bcn9GtV2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dz67dIqH.js";import"./ResponsivePopoverCommon.css-DZxesZgF.js";import"./Suggestions.css-C6WB3Qk2.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

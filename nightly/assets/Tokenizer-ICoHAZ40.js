import{j as e}from"./iframe-geaynzT-.js";import{useMDXComponents as m}from"./index-Dy0P-MTk.js";import{A as p}from"./ArgTypesWithNote-D3mgv25j.js";import{C as c}from"./ControlsWithNote-dZmWZicR.js";import{D as l}from"./DocsHeader-C1feTuJ3.js";import{F as d}from"./Footer-BsbiOiC7.js";import"./CommandsAndQueries-B6i0zlBz.js";import"./PageNotFound-BfSR_Vk2.js";import{M as x,C as r,a as u,D as h}from"./blocks-DvwiWHqk.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-Bn0WGCs7.js";import{T as s}from"./index-CU_04Bxj.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-nFJC4E.js";import"./information-BPLaT9Ap.js";import"./sys-enter-2-BM-hyHpl.js";import"./alert-BbpVY6El.js";import"./Tag-B3QRrnQ_.js";import"./index-sZJqmiwE.js";import"./index-Bp_EOu-Q.js";import"./Link-nEWS4oVx.js";import"./copy-Mj689c8X.js";import"./copy-ww3KL2rX.js";import"./GitHub-Mark-BG_xGhbo.js";import"./TableOfContent-p5b2KUMj.js";import"./index-_qPK30Mb.js";import"./index-CTwiS7Jw.js";import"./index-D5uUZfuG.js";import"./index-CG-HWMDU.js";import"./index-CKM0CrDr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-HivzyS7T.js";import"./addCustomCSSWithScoping-xbUSRjKw.js";import"./Illustrations-Da51eylt.js";import"./i18n-defaults-CFWtSmu6.js";import"./Token-B-DIQD6O.js";import"./ScrollEnablement-DPeWyNUe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CrjdizTB.js";import"./ResponsivePopoverCommon.css-BNVSGncI.js";import"./Suggestions.css-B2NS7aEt.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

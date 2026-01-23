import{j as e}from"./iframe-NmUBSsgx.js";import{useMDXComponents as m}from"./index-CRhoqEbg.js";import{A as p}from"./ArgTypesWithNote-BIm8RPMN.js";import{C as c}from"./ControlsWithNote-DfWYygL2.js";import{D as l}from"./DocsHeader-B-EO8Eqs.js";import{F as d}from"./CommandsAndQueries-B283QW5b.js";import{M as x,C as r,a as u,D as h}from"./blocks-DTOICRIr.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-IttaYsKE.js";import{T as s}from"./index-BBkp_w19.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_FB6i7Kc.js";import"./information-BxntQ5Ez.js";import"./sys-enter-2--B3M0XKZ.js";import"./alert-b59nRps9.js";import"./Tag-CGvSEzjs.js";import"./index-IPiTIICp.js";import"./index-BNsY5djp.js";import"./Link-O7CbLP92.js";import"./copy-Dcsra1dO.js";import"./copy-GTpWjg4q.js";import"./GitHub-Mark-HytzatKk.js";import"./TableOfContent-qKvmhN4-.js";import"./index-C0Tl3YXX.js";import"./index-b9onOzBF.js";import"./index-DKTuqk4i.js";import"./index-_nSLzRwo.js";import"./index-BOB0mZMq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vtZivBS9.js";import"./addCustomCSSWithScoping-D_Idq7DT.js";import"./Token-_-XdJX9B.js";import"./ScrollEnablement-CNH3zFIj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BtmjKC48.js";import"./ResponsivePopoverCommon.css-Cz3_sdnA.js";import"./Suggestions.css-BoCoDiBj.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

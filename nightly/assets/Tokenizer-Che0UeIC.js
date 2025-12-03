import{j as e}from"./iframe-CJRlzZgA.js";import{useMDXComponents as m}from"./index-CbUzkcD0.js";import{A as p}from"./ArgTypesWithNote-haRI0WKx.js";import{C as c}from"./ControlsWithNote-m4NXE0Lk.js";import{D as l}from"./DocsHeader-CYhP0NKu.js";import{F as d}from"./CommandsAndQueries-BJK9fmCd.js";import{M as x,C as r,a as u,D as h}from"./blocks-QclREKVQ.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-B8jKDTvB.js";import{T as s}from"./index-1j60uOtL.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B3EVM4WW.js";import"./information-CTfPsGYk.js";import"./sys-enter-2-DT64nekl.js";import"./alert-D_x5VnX_.js";import"./Tag-D6uzQqkN.js";import"./index-CEi9QmXA.js";import"./index-CgUHdFlG.js";import"./Link-0WAKzVuH.js";import"./copy-DJuCUsOV.js";import"./copy-Dm16cUhk.js";import"./GitHub-Mark-DrwbB2D9.js";import"./TableOfContent-CbWMIbhM.js";import"./index-DLQSfTW2.js";import"./index-CEHRPvSv.js";import"./index-DNJOtG7U.js";import"./index-B-KWFPaJ.js";import"./index-DBGTLlVz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ckhrx5tI.js";import"./addCustomCSSWithScoping-CXI5gvd5.js";import"./Token-BD4i_ui4.js";import"./ScrollEnablement-C7OtmXds.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-e2XpTMq4.js";import"./ResponsivePopoverCommon.css-C_a-qh6P.js";import"./Suggestions.css-BN5UKDJ_.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

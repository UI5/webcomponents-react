import{j as e}from"./iframe-N-CkNuQp.js";import{useMDXComponents as m}from"./index-vMZrjKLN.js";import{A as p}from"./ArgTypesWithNote-gsKj29Z6.js";import{C as c}from"./ControlsWithNote-KeRnuhUA.js";import{D as l}from"./DocsHeader-C82MS2YP.js";import{F as d}from"./CommandsAndQueries-C649emYA.js";import{M as x,C as r,a as u,D as h}from"./blocks-BlmowjXe.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-DA_xYuoD.js";import{T as s}from"./index-CkSSGnyH.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C6U4q-s3.js";import"./information-DXCMx7jp.js";import"./sys-enter-2-DJK47xX9.js";import"./alert-DxAb-ai_.js";import"./Tag-BjR1DXbQ.js";import"./index-CnaiImML.js";import"./index-DbFvQ9Ev.js";import"./Link-DUQLkHF0.js";import"./copy-BYr8GFMC.js";import"./copy-a5vlqc1O.js";import"./GitHub-Mark-DR0dbg4N.js";import"./TableOfContent-BnP61JFB.js";import"./index-Dctc1ZtL.js";import"./index-Cfq8WB4R.js";import"./index-Bw-Px9rd.js";import"./index-nkckj2JT.js";import"./index-CNxEFs14.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIbW1rrN.js";import"./addCustomCSSWithScoping-h_aYe486.js";import"./Token-CiZ98YBe.js";import"./ScrollEnablement--YCWq2yu.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dp0_Lu_Z.js";import"./ResponsivePopoverCommon.css-KDgvHQ0W.js";import"./Suggestions.css-DUyKQFzw.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

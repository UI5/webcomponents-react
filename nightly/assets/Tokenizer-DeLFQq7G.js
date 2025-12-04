import{j as e}from"./iframe-DrPmn2Fl.js";import{useMDXComponents as m}from"./index-D0JiuHQ4.js";import{A as p}from"./ArgTypesWithNote-B6hA-_aF.js";import{C as c}from"./ControlsWithNote-AZb4CeHf.js";import{D as l}from"./DocsHeader-Ck2be5Yc.js";import{F as d}from"./CommandsAndQueries-DJtqUE3T.js";import{M as x,C as r,a as u,D as h}from"./blocks-BjYhsAle.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-BGu7G8lj.js";import{T as s}from"./index-BpnKN8Ll.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D7exUdgR.js";import"./information-B3e_XIJr.js";import"./sys-enter-2-BzGI5wIC.js";import"./alert-k9YiTQ21.js";import"./Tag-DTGJG_3A.js";import"./index-BryeGZHH.js";import"./index-pqPyLDtB.js";import"./Link-DpbM7hv-.js";import"./copy-65kpRtEk.js";import"./copy-BYLHU9Z4.js";import"./GitHub-Mark-DKAUGK9x.js";import"./TableOfContent-DpdaqcN6.js";import"./index-BcboqTLf.js";import"./index-7KEOFJG9.js";import"./index-CSSeCaDH.js";import"./index-BDgABtQ5.js";import"./index-CsBAZiQX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D8f6CQWY.js";import"./addCustomCSSWithScoping-Dp7JQ0AP.js";import"./Token-DhrdJ1Sg.js";import"./ScrollEnablement-DEcYIeHm.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BlHk0Rap.js";import"./ResponsivePopoverCommon.css-aFKlRj1z.js";import"./Suggestions.css-BixA8_8b.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

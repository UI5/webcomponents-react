import{j as e}from"./iframe-D-p-3OCM.js";import{useMDXComponents as m}from"./index-DJLiOc38.js";import{A as p}from"./ArgTypesWithNote-Zr2frEQZ.js";import{C as c}from"./ControlsWithNote-29IeAr60.js";import{D as l}from"./DocsHeader-DebBbDHj.js";import{F as d}from"./CommandsAndQueries-GFFu71sG.js";import{M as x,C as r,a as u,D as h}from"./blocks-D8nJ9XLJ.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-ZR25ddNI.js";import{T as s}from"./index-DaWYZN6G.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-4PsYVbCm.js";import"./information-BQJXeVKx.js";import"./sys-enter-2-CYyiWANR.js";import"./alert-YvrQf4Kz.js";import"./Tag-3bv5cfrS.js";import"./index-C326ykrp.js";import"./index-BwwgwqQS.js";import"./Link-BjWHArC4.js";import"./copy-DGgpvxj3.js";import"./copy-ORsTAKbB.js";import"./GitHub-Mark-CBiOZemu.js";import"./TableOfContent-BcwnDCh5.js";import"./index--P1CcwOi.js";import"./index-TBDKK4_L.js";import"./index-DqKaYphS.js";import"./index-sDY_tTy_.js";import"./index-DzbvANjW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-sPN7n5XP.js";import"./addCustomCSSWithScoping-BzKWOZDH.js";import"./Token-DjuINvff.js";import"./ScrollEnablement-Dx2bfBZK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B_DUY2Ux.js";import"./ResponsivePopoverCommon.css-OapI0cqy.js";import"./Suggestions.css-o7YEXsUI.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

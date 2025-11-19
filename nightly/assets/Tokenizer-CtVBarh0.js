import{j as e}from"./iframe-5N9GXz7D.js";import{useMDXComponents as m}from"./index-DlTuiQlt.js";import{A as p}from"./ArgTypesWithNote-0IB7-nFU.js";import{C as c}from"./ControlsWithNote-Dp8-GdEK.js";import{D as l}from"./DocsHeader-CpBtOwDM.js";import{F as d}from"./CommandsAndQueries-CMJc_Han.js";import{M as x,C as r,a as u,D as h}from"./blocks-CPyIL7dB.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-CDgMephY.js";import{T as s}from"./index-DmU3RMDx.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D8q95YVM.js";import"./information-B48tg30u.js";import"./sys-enter-2-CQaZAGEJ.js";import"./alert-Ct7A8pBg.js";import"./Tag-B4RC7Xxt.js";import"./index-FxCKqbN1.js";import"./index-DZUtpbBW.js";import"./Link-oEEjXqRZ.js";import"./copy-BEhVLoYL.js";import"./copy-BLtz8zcP.js";import"./GitHub-Mark-BNJhVn4n.js";import"./TableOfContent-cYZQnLhR.js";import"./index-CJR2SGfI.js";import"./index-DDb99OCc.js";import"./index-D5QSQPRG.js";import"./index-l_lQT3oU.js";import"./index-DHTSiNH5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ieHBSwsk.js";import"./addCustomCSSWithScoping-B8HVYEKl.js";import"./Token-CSu3FrWS.js";import"./ScrollEnablement-DVuWUxs9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BFNu6wL7.js";import"./ResponsivePopoverCommon.css-D2vKXyuQ.js";import"./Suggestions.css-CDFdvq-I.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

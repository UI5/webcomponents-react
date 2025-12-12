import{j as e}from"./iframe-CA3Ho9Q5.js";import{useMDXComponents as m}from"./index-BSP_ypsD.js";import{A as p}from"./ArgTypesWithNote-DMQoRKHz.js";import{C as c}from"./ControlsWithNote-DvkiAanr.js";import{D as l}from"./DocsHeader-Cfs20M5C.js";import{F as d}from"./CommandsAndQueries-CpnGQ0tY.js";import{M as x,C as r,a as u,D as h}from"./blocks-duj_cvae.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-on5sF7Oe.js";import{T as s}from"./index-DT9b9-Wk.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2KbXcP2.js";import"./information-D0PKU0zc.js";import"./sys-enter-2-BzmXGgFI.js";import"./alert-DOfQq82s.js";import"./Tag-C7EDP0wF.js";import"./index-QQ_2tXfB.js";import"./index-Cj36scYa.js";import"./Link-B9lvI_mX.js";import"./copy-sPmVFkhH.js";import"./copy-Cirx0xPf.js";import"./GitHub-Mark-BkqTNzcC.js";import"./TableOfContent-Bhgz5xwr.js";import"./index-CS7zB70b.js";import"./index-B1DuQcex.js";import"./index-Vj9BxWeO.js";import"./index-DJDcB98R.js";import"./index-CnX6lHZc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CziqpW1M.js";import"./addCustomCSSWithScoping-CmwUGghA.js";import"./Token-BPQsJP1e.js";import"./ScrollEnablement-Dip40C-m.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DKlWXx6n.js";import"./ResponsivePopoverCommon.css-HLQwWCxH.js";import"./Suggestions.css-iNzzcrss.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

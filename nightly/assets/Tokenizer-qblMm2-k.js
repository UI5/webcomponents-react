import{j as e}from"./iframe-CWbL8jxG.js";import{useMDXComponents as m}from"./index-B1hucxFe.js";import{A as p}from"./ArgTypesWithNote-CZNC395R.js";import{C as c}from"./ControlsWithNote-ymSYjaAM.js";import{D as l}from"./DocsHeader-DzPxh-83.js";import{F as d}from"./CommandsAndQueries-DC5-wnNc.js";import{M as x,C as r,a as u,D as h}from"./blocks-DWgVki-D.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-CB1s3Hhu.js";import{T as s}from"./index-CWIZgYgN.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ln4MrNxF.js";import"./information-CisMKXtU.js";import"./sys-enter-2-IsKQM1OD.js";import"./alert-Dh20kvYK.js";import"./Tag-BqrM3bJU.js";import"./index-DX9sPfcP.js";import"./index-B-_ynEAX.js";import"./Link-DUwsGKC7.js";import"./copy-DQ3S8OxO.js";import"./copy-DC7dXRiF.js";import"./GitHub-Mark-Bv0DgpdU.js";import"./TableOfContent-BS_4sZOQ.js";import"./index-DTMyNJf2.js";import"./index-BEEAqopd.js";import"./index-BMKWfM9S.js";import"./index-DFy0GYik.js";import"./index-Bs8RptuV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CtpdWs35.js";import"./addCustomCSSWithScoping-DZNikY8L.js";import"./Token-GRKHuzuD.js";import"./ScrollEnablement-q8IAhmkU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DjxNPHqP.js";import"./ResponsivePopoverCommon.css-BbHsPd6N.js";import"./Suggestions.css-Ba_dx_L-.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

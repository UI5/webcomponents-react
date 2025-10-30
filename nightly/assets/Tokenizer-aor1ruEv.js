import{j as e}from"./iframe-B6_VnEn0.js";import{useMDXComponents as m}from"./index-CKjNAzmF.js";import{A as p}from"./ArgTypesWithNote-Dgi9qO2v.js";import{C as c}from"./ControlsWithNote-DrWxbmPf.js";import{D as l}from"./DocsHeader-qbLp6NFf.js";import{F as d}from"./CommandsAndQueries-Cu0FTX1O.js";import{M as x,C as r,a as u,D as h}from"./blocks-CyO3EJlr.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-BWigHg__.js";import{T as s}from"./index-iOcAc5qB.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DSVB_dqF.js";import"./information-DRMbXOdP.js";import"./sys-enter-2-DdSSz0Lf.js";import"./alert-B2vLmz8E.js";import"./Tag-CgNBFz-6.js";import"./index-CRKIYkxI.js";import"./index-C9FEKhX3.js";import"./Link-fr-LMhyz.js";import"./copy-i85OO9gt.js";import"./copy-C1fhLsjZ.js";import"./GitHub-Mark-B4Yzkrcd.js";import"./TableOfContent-DIRb7Wd9.js";import"./index-hldrhuwk.js";import"./index-DkrtZknx.js";import"./index-eApF8yKA.js";import"./index-BgmLFHtv.js";import"./index-BsFRP28T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D6ry04GL.js";import"./addCustomCSSWithScoping-Cx3SnQ1e.js";import"./Token-_KSGZm69.js";import"./ScrollEnablement-DlCeZwb_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bie1RoJA.js";import"./ResponsivePopoverCommon.css-CoduWFfh.js";import"./Suggestions.css-DpsubRXQ.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

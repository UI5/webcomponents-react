import{j as e}from"./iframe-DjyPEesV.js";import{useMDXComponents as m}from"./index-Pyz_59sj.js";import{A as p}from"./ArgTypesWithNote-DuOavLIs.js";import{C as c}from"./ControlsWithNote-DO2z4iOP.js";import{D as l}from"./DocsHeader-D9MpUlcx.js";import{F as d}from"./CommandsAndQueries-CflBmGXr.js";import{M as x,C as r,a as u,D as h}from"./blocks-BJpyRAuR.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-BLsXWq9H.js";import{T as s}from"./index-C-s2-4pI.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-R19sOJmE.js";import"./information-DUvIlTxn.js";import"./sys-enter-2-BNMMIV_0.js";import"./alert-BdGD6eLJ.js";import"./Tag-BDoCQY53.js";import"./index-CGGAhfVP.js";import"./index-JsLIkweC.js";import"./Link-nHS21YG4.js";import"./copy-D7V84yYe.js";import"./copy-E37vjZto.js";import"./GitHub-Mark-DbbCp6aZ.js";import"./TableOfContent-DxJDBDn2.js";import"./index-Ctou3RkN.js";import"./index-D4GABIF8.js";import"./index-DIAyR9_V.js";import"./index-BBJM4hPn.js";import"./index-u05KfZkG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BW1MFNTm.js";import"./addCustomCSSWithScoping-fFr9nqx3.js";import"./Token-CERKwtWD.js";import"./ScrollEnablement-80w6Waas.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CqBB8H1C.js";import"./ResponsivePopoverCommon.css-DXeOzHMx.js";import"./Suggestions.css-C5GlUmJa.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

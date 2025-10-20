import{j as e}from"./iframe-BThE7jKf.js";import{useMDXComponents as m}from"./index-B2RJGRd4.js";import{A as p}from"./ArgTypesWithNote-4HxxhBGP.js";import{C as c}from"./ControlsWithNote-CRhelvga.js";import{D as l}from"./DocsHeader-_LhGhGyx.js";import{F as d}from"./CommandsAndQueries-D1tgAUE5.js";import{M as x,C as r,a as u,D as h}from"./blocks-Dnvf3bz-.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-CckfQCvS.js";import{T as s}from"./index-BNQxyeHF.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTUpkleH.js";import"./information-CcuaLhCB.js";import"./sys-enter-2-DHGMesz_.js";import"./alert-DuPQa3D0.js";import"./Tag-9-1VZojo.js";import"./index-Dg0PU8qR.js";import"./index-DcLqsBQ7.js";import"./Link-BAiulGQ4.js";import"./copy-CPScwyuO.js";import"./copy-CbUREYSb.js";import"./GitHub-Mark-1WIkjLpH.js";import"./TableOfContent-DHJ-ZZsu.js";import"./index-BDRlpx-X.js";import"./index-Di66tdVG.js";import"./index-cpbfvu6C.js";import"./index-i-aKPvBx.js";import"./index-DLO7Rqwk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbRZFTjL.js";import"./addCustomCSSWithScoping-BhW-iIae.js";import"./Token-B6ErGNwX.js";import"./ScrollEnablement-_nV76HoB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cfqfrlti.js";import"./ResponsivePopoverCommon.css-DMYN2ItD.js";import"./Suggestions.css-CGrcYFlL.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

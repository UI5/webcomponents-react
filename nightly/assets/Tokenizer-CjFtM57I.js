import{j as e}from"./iframe-CN9FvYjd.js";import{useMDXComponents as m}from"./index-CHfbFhXP.js";import{A as p}from"./ArgTypesWithNote-Dtki4tJe.js";import{C as c}from"./ControlsWithNote-BnC8IQEn.js";import{D as l}from"./DocsHeader-DBc1pcw5.js";import{F as d}from"./Footer-Dl9losBY.js";import"./CommandsAndQueries-BOIWtnt6.js";import"./PageNotFound-YEpHz0H_.js";import{M as x,C as r,a as u,D as h}from"./blocks-BRVkHd00.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-CP2Kge17.js";import{T as s}from"./index-BoBRQWmW.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CjC-3bum.js";import"./information-DYxN2cHX.js";import"./sys-enter-2-Cmiit89U.js";import"./alert-DCHWGnHk.js";import"./Tag-B_RTkJ1G.js";import"./index-DHHIsfuO.js";import"./index-BFwC892N.js";import"./Link-Wi8OmUZE.js";import"./copy-DAuylYSV.js";import"./copy-CqLNgdQ9.js";import"./GitHub-Mark-DjfXo-cB.js";import"./TableOfContent-DIcVYEHe.js";import"./index-ZHKOt3Ry.js";import"./index-BbQq-ZOq.js";import"./index-LGty0-Ee.js";import"./index-qceCjzn0.js";import"./index-CdwqdKec.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tlJUacgC.js";import"./addCustomCSSWithScoping-DzgJsuLH.js";import"./Illustrations-SwtMVqU-.js";import"./i18n-defaults-CFWtSmu6.js";import"./Token-CM9W4z5A.js";import"./ScrollEnablement-Be-lL4pM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bpw8kHSv.js";import"./ResponsivePopoverCommon.css-DFlXT8Yt.js";import"./Suggestions.css-C1rlY3G7.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
`,e.jsx(d,{})]})}function ie(o={}){const{wrapper:n}={...m(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{ie as default};

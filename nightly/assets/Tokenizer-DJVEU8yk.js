import{j as e}from"./iframe-QfBB5oxv.js";import{u as p,M as m,C as r,a as c,D as l}from"./blocks-BNoxk89Z.js";import{A as d}from"./ArgTypesWithNote-DQz_ZqZg.js";import{C as x}from"./ControlsWithNote-CpNK55OJ.js";import{D as u}from"./DocsHeader-CobLgORO.js";import{F as h}from"./Footer-Djb8KmT2.js";import"./CommandsAndQueries-CHXq-8GX.js";import"./PageNotFound-BF3CKwDf.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-_oHnSGlw.js";import{T as s}from"./index-Bblm7VsE.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CXwzMtEr.js";import"./information-DnhNkDB3.js";import"./sys-enter-2-BMzcK94M.js";import"./alert-Djbx4OhD.js";import"./Tag-jV4rQ7he.js";import"./index-C23APlHe.js";import"./index-BP6rOJzd.js";import"./Link-CjKrRSzJ.js";import"./copy-B-tqVZcU.js";import"./copy-Ddev0qyd.js";import"./GitHub-Mark-C9In8ohp.js";import"./TableOfContent-F4sRBeye.js";import"./index-B0PZpUdZ.js";import"./index-CMW9Znni.js";import"./index-CKPcWxBG.js";import"./index-qK3ZRsrU.js";import"./index-mR2WMj9r.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4b8nEvCn.js";import"./addCustomCSSWithScoping-BzEIPtCm.js";import"./Illustrations-B1Eex0pq.js";import"./i18n-defaults-CFWtSmu6.js";import"./Token-bE2o3WQc.js";import"./ScrollEnablement-D9-XNTBn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYJdKcUD.js";import"./ResponsivePopoverCommon.css-CNHfRjyj.js";import"./Suggestions.css-DuOxNvnL.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...p(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:t}),`
`,e.jsx(u,{of:t,subComponents:["Token"],experimental:!0}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(x,{of:i}),`
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
`,e.jsx(c,{children:f}),`
`,e.jsx(n.h2,{id:"token",children:"Token"}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(d,{metaOf:t,of:s}),`
`,e.jsx(h,{})]})}function re(o={}){const{wrapper:n}={...p(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{re as default};

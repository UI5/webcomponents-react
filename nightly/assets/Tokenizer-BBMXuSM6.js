import{j as e}from"./iframe-Dr24b1_2.js";import{u as p,M as m,C as r,a as c,D as l}from"./blocks-DOkdIKLK.js";import{A as d}from"./ArgTypesWithNote-VMzpTHko.js";import{C as x}from"./ControlsWithNote-BXcQcfnL.js";import{D as u}from"./DocsHeader-9y2YWA-s.js";import{F as h}from"./Footer-B2LKGocf.js";import"./CommandsAndQueries-D2RSxAeU.js";import"./PageNotFound-t4KH-Yk6.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-DfGKLVnY.js";import{T as s}from"./index-DAxUhHH-.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CL-oiXYR.js";import"./information-C20uFQS0.js";import"./sys-enter-2-CQd_0MF7.js";import"./alert-B9PmGrag.js";import"./Tag-BIxdINB7.js";import"./index-DrqpZzSV.js";import"./index-VF4msgJe.js";import"./Link-CG4ImuUx.js";import"./copy-zEtP8ZOb.js";import"./copy-D1SgAW06.js";import"./GitHub-Mark-BVwUWF2c.js";import"./TableOfContent-CTShD90n.js";import"./index-DcUuq1aq.js";import"./index-CjU6u75C.js";import"./index-_maGeclj.js";import"./index-aTzn3I1m.js";import"./index-B_PGO6aF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dh4aGlp7.js";import"./addCustomCSSWithScoping-BCzlWLsZ.js";import"./Illustrations-Dt9P8lxH.js";import"./i18n-defaults-CFWtSmu6.js";import"./Token-DUD3s9-0.js";import"./ScrollEnablement-B1S99Wzm.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B4U2FtO3.js";import"./ResponsivePopoverCommon.css-YJ26BxS_.js";import"./Suggestions.css-DByIneIP.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...p(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:t}),`
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

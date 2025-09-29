import{j as e}from"./iframe-Cg7074Vs.js";import{useMDXComponents as m}from"./index-B5B2jkkb.js";import{A as p}from"./ArgTypesWithNote-CyujYE_t.js";import{C as c}from"./ControlsWithNote-BUESGD88.js";import{D as l}from"./DocsHeader-DrCfiofD.js";import{F as d}from"./CommandsAndQueries-DSm4BCv_.js";import{M as x,C as r,a as u,D as h}from"./blocks-BJCse0Pu.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-pA2RuD09.js";import{T as s}from"./index-BBHB_zmr.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BdM5BPiw.js";import"./information-BmRqz6it.js";import"./sys-enter-2-Cd9kQ7Q4.js";import"./alert-D-Gn0uBT.js";import"./Tag-8TeQfEXQ.js";import"./index-mLpQh_nH.js";import"./index--0v3kDPT.js";import"./Link-C9B0XqeU.js";import"./copy-D-vRfUtZ.js";import"./copy-elFt8Bkr.js";import"./GitHub-Mark-JGAY1shu.js";import"./TableOfContent-fQuHL319.js";import"./index-C5-_BJit.js";import"./index-Do95mp1G.js";import"./index-B-O0M522.js";import"./index-DBdMynWP.js";import"./index-mxRvftJc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Co8Bnzh8.js";import"./addCustomCSSWithScoping-CQZolqZ7.js";import"./Token-BenxG4sL.js";import"./ScrollEnablement-Dvz9XJ8X.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CcC-VMWt.js";import"./ResponsivePopoverCommon.css-B9VO2EzZ.js";import"./Suggestions.css-Dh3K_-nA.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

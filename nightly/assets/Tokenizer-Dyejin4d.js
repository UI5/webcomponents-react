import{j as e}from"./iframe-DUkvwiCH.js";import{useMDXComponents as m}from"./index-CmOOmEq_.js";import{A as p}from"./ArgTypesWithNote-CDVmyNzI.js";import{C as c}from"./ControlsWithNote-h_Zfec4u.js";import{D as l}from"./DocsHeader-CAVkz1Gb.js";import{F as d}from"./CommandsAndQueries-PDY51fAI.js";import{M as x,C as r,a as u,D as h}from"./blocks-BEyioZmC.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-Bk3RvcFo.js";import{T as s}from"./index-CNI7LuPM.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-D9Z9MdNV.js";import"./index-mzCfuMGx.js";import"./information-DXx8yVKj.js";import"./sys-enter-2-DohaKpz7.js";import"./alert-DS7-1sye.js";import"./Tag-DEWD3xtk.js";import"./index-DhtGVRhj.js";import"./index-BtWSXXzR.js";import"./Link-DPkQciON.js";import"./copy-TSIDnc-o.js";import"./copy-B0dtT-T1.js";import"./GitHub-Mark-DLQQkiGF.js";import"./TableOfContent-D10h03Op.js";import"./index-B92FdrSK.js";import"./index-XPJfZ8Rp.js";import"./addCustomCSSWithScoping-CPXzOUpZ.js";import"./index-_2a7rjiJ.js";import"./index-qYUxj7eK.js";import"./index-B-fuFZPz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOPJEYH-.js";import"./Token-B0XPP79K.js";import"./ScrollEnablement-B_COiRMd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYtQ6rBD.js";import"./ResponsivePopoverCommon.css-BoQVIvNi.js";import"./Suggestions.css-i3s5CWMS.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

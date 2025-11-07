import{j as e}from"./iframe-Cx-m_Nf0.js";import{useMDXComponents as m}from"./index-Danm_hzB.js";import{A as p}from"./ArgTypesWithNote--55h-ilt.js";import{C as c}from"./ControlsWithNote-CHlEonAj.js";import{D as l}from"./DocsHeader-R7YknZ3Y.js";import{F as d}from"./CommandsAndQueries-wiGvioaD.js";import{M as x,C as r,a as u,D as h}from"./blocks-BeOH24VU.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-COjRaBNk.js";import{T as s}from"./index-CkgRPqIX.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JZ9249rN.js";import"./information-CEQNZlPN.js";import"./sys-enter-2-AhkD0MnF.js";import"./alert-Bji-b9H2.js";import"./Tag-CULcfvQz.js";import"./index-DROJnCko.js";import"./index-D-dAoXo8.js";import"./Link-CR1SnY-5.js";import"./copy-CvHoj-w-.js";import"./copy-saj_hA78.js";import"./GitHub-Mark-CR3vtpTa.js";import"./TableOfContent-Vtgb2XiV.js";import"./index-BkCtcCNV.js";import"./index-BRPuZYCF.js";import"./index-D0XJTq9Q.js";import"./index-B10MFmnl.js";import"./index-bcKxXY3o.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Hev4WvRm.js";import"./addCustomCSSWithScoping-CdsdDkDi.js";import"./Token-BqrAbKWZ.js";import"./ScrollEnablement-BylCXS9j.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bo_f_yy9.js";import"./ResponsivePopoverCommon.css-BuTMFQw1.js";import"./Suggestions.css-C3EK_z35.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

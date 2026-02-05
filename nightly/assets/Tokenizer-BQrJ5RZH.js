import{j as e}from"./iframe-DVaoJynC.js";import{useMDXComponents as m}from"./index-D8trWAUj.js";import{A as p}from"./ArgTypesWithNote-D1vIdf9o.js";import{C as c}from"./ControlsWithNote-Dec-XbEd.js";import{D as l}from"./DocsHeader-BO9-P8hQ.js";import{F as d}from"./CommandsAndQueries-DmxPE0MZ.js";import{M as x,C as r,a as u,D as h}from"./blocks-CrqJ-Z31.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-BstaU7O2.js";import{T as s}from"./index-DCkhOwnS.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CpBbNRGM.js";import"./information-BslaWIIc.js";import"./sys-enter-2-iJEMuBvO.js";import"./alert-DlPbm_nn.js";import"./Tag--1vn2ouf.js";import"./index-DW_Y2aM_.js";import"./index-1ngZk4Q4.js";import"./Link-Q_Ld2CqF.js";import"./copy-Cqk7ClFa.js";import"./copy-DE_2j5FQ.js";import"./GitHub-Mark-8g40nlnE.js";import"./TableOfContent-Dtb5vAem.js";import"./index-CrdrDGzw.js";import"./index-xNxGNywP.js";import"./index-qrdXuh6V.js";import"./index-DDgoCywP.js";import"./index-dYIL-oMO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-V3cCpaGB.js";import"./addCustomCSSWithScoping-CedcLW5T.js";import"./Token-BSwTugba.js";import"./ScrollEnablement-D-0-sBKz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-dJtbJvai.js";import"./ResponsivePopoverCommon.css-a0LTy8oR.js";import"./Suggestions.css-gCSTg-U6.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

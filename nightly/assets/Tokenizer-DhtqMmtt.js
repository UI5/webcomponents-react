import{j as e}from"./iframe-CyQHbHxC.js";import{useMDXComponents as m}from"./index-CAqjzf3-.js";import{A as p}from"./ArgTypesWithNote-BefXg7jU.js";import{C as c}from"./ControlsWithNote-BNokvIjE.js";import{D as l}from"./DocsHeader-D3sFB4u7.js";import{F as d}from"./Footer-B6F6QaBp.js";import"./CommandsAndQueries-CQRKG-No.js";import"./PageNotFound-BwogsJtD.js";import{M as x,C as r,a as u,D as h}from"./blocks-B1BKQjJv.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-DYxvQrUT.js";import{T as s}from"./index-CMScouJw.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DVtJUpci.js";import"./information-DjNNiNHU.js";import"./sys-enter-2-BgUfXyT0.js";import"./alert-CTY_LxCJ.js";import"./Tag-CpzoOvR8.js";import"./index-1GAsnXVc.js";import"./index-DUAJQglC.js";import"./Link-8vAV1o0p.js";import"./copy-BMtlJq5M.js";import"./copy-DaAXI0wh.js";import"./GitHub-Mark-B7CobaJ5.js";import"./TableOfContent-5QHPn7EL.js";import"./index-DMBzjcEO.js";import"./index-hCRaM0Y7.js";import"./index-DdcJcuqo.js";import"./index-Dk8Vx9PA.js";import"./index-CyzsrkYQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BPaLVEvo.js";import"./addCustomCSSWithScoping-iqlifjV6.js";import"./Illustrations-BxTCLiS4.js";import"./i18n-defaults-CFWtSmu6.js";import"./Token-BqJ4Ofoo.js";import"./ScrollEnablement-CKBCWM_a.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BxKg-XHx.js";import"./ResponsivePopoverCommon.css-Dux865Zo.js";import"./Suggestions.css-X5qr8kqi.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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

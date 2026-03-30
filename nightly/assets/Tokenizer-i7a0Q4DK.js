import{j as e}from"./iframe-vcfuMEkL.js";import{u as p,M as m,C as r,a as c,D as l}from"./blocks-CzMAxM7Q.js";import{A as d}from"./ArgTypesWithNote-CSGkjh-i.js";import{C as x}from"./ControlsWithNote-CJBdoKN4.js";import{D as u}from"./DocsHeader-yII1OsS1.js";import{F as h}from"./Footer-B8luth97.js";import"./CommandsAndQueries-BLcCgFEg.js";import"./PageNotFound-DOCrqF52.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-BgPUU_0k.js";import{T as s}from"./index-CSeCOK5b.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D5a6L_9E.js";import"./information-DGdr23sZ.js";import"./sys-enter-2-BtTk1NF5.js";import"./alert-C2W9yseD.js";import"./Tag-D032LoeK.js";import"./index-C5MkOTN8.js";import"./index-CY4n9r1V.js";import"./Link-DAzSfgZb.js";import"./copy-BeSz1umZ.js";import"./copy-CTlr8Wzd.js";import"./GitHub-Mark-C71icGMM.js";import"./TableOfContent-DCSvZ8GC.js";import"./index-CPCjGKn0.js";import"./index-BgY_pwT7.js";import"./index-wWex-oQF.js";import"./index-Cbp9ERwo.js";import"./index-BMMtw8na.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7Mkof57M.js";import"./addCustomCSSWithScoping-BGtNyFBv.js";import"./Illustrations-DEQ9OpIe.js";import"./i18n-defaults-CFWtSmu6.js";import"./Token-BipXjjpW.js";import"./ScrollEnablement-BEZ0Hhjc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ajyl_xA3.js";import"./ResponsivePopoverCommon.css-BZx4EG62.js";import"./Suggestions.css-C6VxQjoH.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...p(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:t}),`
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

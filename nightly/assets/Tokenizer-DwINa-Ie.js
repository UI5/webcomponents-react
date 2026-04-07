import{n as e}from"./chunk-zsgVPwQN.js";import{Wm as t,mn as n,pn as r}from"./iframe-CfLcoMHk.js";import{r as i}from"./react-DnXUr-UZ.js";import{c as a,h as o,m as s,s as c,t as l,v as u}from"./components-DBuBsu7x.js";import{_ as d,d as f,o as p,r as m,u as h}from"./blocks-dJatPlFp.js";import{n as g,t as _}from"./SubcomponentsSection-DDnl7AR6.js";import{Default as v,WithLogic as y,n as b,t as x}from"./Tokenizer.stories-B94a_uBI.js";function S(e){let t={code:`code`,h2:`h2`,pre:`pre`,...i(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{of:x}),`
`,(0,w.jsx)(a,{of:x,subComponents:[`Token`],experimental:!0}),`
`,(0,w.jsx)(`br`,{}),`
`,(0,w.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,w.jsx)(m,{of:v}),`
`,(0,w.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,w.jsx)(s,{of:v}),`
`,(0,w.jsx)(t.h2,{id:`more-examples`,children:`More examples`}),`
`,(0,w.jsx)(t.h2,{id:`tokenizer-with-selection--delete-logic`,children:`Tokenizer with selection & delete logic`}),`
`,(0,w.jsx)(m,{of:y}),`
`,(0,w.jsxs)(`details`,{children:[(0,w.jsx)(`summary`,{children:`Show Code`}),(0,w.jsx)(t.pre,{children:(0,w.jsx)(t.code,{className:`language-tsx`,children:`function TokenizerComponent(props) {
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
`,(0,w.jsx)(h,{children:_}),`
`,(0,w.jsx)(t.h2,{id:`token`,children:`Token`}),`
`,(0,w.jsx)(p,{of:r}),`
`,(0,w.jsx)(o,{metaOf:x,of:r}),`
`,(0,w.jsx)(c,{})]})}function C(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=t(),u(),l(),d(),b(),n(),g()}))();export{C as default};
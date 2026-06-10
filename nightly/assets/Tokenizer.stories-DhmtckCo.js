import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{$d as r,Cn as i,Sn as a,Su as o,Wg as s,bn as c,ef as l,mh as u,xn as d,xu as f}from"./iframe-fmONFB0_.js";var p=e({Default:()=>_,WithLogic:()=>v,__namedExportsOrder:()=>y,default:()=>g}),m,h,g,_,v,y,b=n((()=>{m=t(s(),1),o(),l(),i(),d(),h=u(),g={title:`Inputs / Tokenizer`,component:c,args:{style:{width:`250px`}},tags:[`package:@ui5/webcomponents`,`experimental`]},_={render(e){return(0,h.jsxs)(c,{...e,children:[(0,h.jsx)(a,{text:`Andorra`}),(0,h.jsx)(a,{text:`Bulgaria`}),(0,h.jsx)(a,{text:`Canada`}),(0,h.jsx)(a,{text:`Denmark`}),(0,h.jsx)(a,{text:`Estonia`}),(0,h.jsx)(a,{text:`Fiji`}),(0,h.jsx)(a,{text:`Ghana`}),(0,h.jsx)(a,{text:`India`}),(0,h.jsx)(a,{text:`Japan`}),(0,h.jsx)(a,{text:`Kenya`}),(0,h.jsx)(a,{text:`Luxembourg`}),(0,h.jsx)(a,{text:`Mexico`}),(0,h.jsx)(a,{text:`Nepal`}),(0,h.jsx)(a,{text:`Qatar`}),(0,h.jsx)(a,{text:`Uganda`})]})}},v={render(e){let[t,n]=(0,m.useState)([`Andorra`,`Bulgaria`,`Canada`,`Denmark`,`Estonia`,`Fiji`,`Ghana`,`India`,`Japan`,`Kenya`,`Luxembourg`,`Mexico`,`Nepal`,`Qatar`,`Uganda`]),[i,o]=(0,m.useState)([]),s=t=>{e.onTokenDelete(t);let{tokens:r}=t.detail;if(r){let e=r.map(e=>e.text);n(t=>t.filter(t=>!e.includes(t))),o([])}},l=t=>{e.onSelectionChange(t);let{tokens:n}=t.detail;n&&o(n.map(e=>e.text))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{...e,onTokenDelete:s,onSelectionChange:l,children:t.map(e=>(0,h.jsx)(a,{text:e},e))}),(0,h.jsx)(`br`,{}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:`0.2rem`},children:[(0,h.jsx)(f,{showColon:!0,children:`Selected countries`}),(0,h.jsx)(r,{children:i.join(`, `)})]})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Tokenizer {...args}>
        <Token text="Andorra" />
        <Token text="Bulgaria" />
        <Token text="Canada" />
        <Token text="Denmark" />
        <Token text="Estonia" />
        <Token text="Fiji" />
        <Token text="Ghana" />
        <Token text="India" />
        <Token text="Japan" />
        <Token text="Kenya" />
        <Token text="Luxembourg" />
        <Token text="Mexico" />
        <Token text="Nepal" />
        <Token text="Qatar" />
        <Token text="Uganda" />
      </Tokenizer>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [countries, setCountries] = useState(['Andorra', 'Bulgaria', 'Canada', 'Denmark', 'Estonia', 'Fiji', 'Ghana', 'India', 'Japan', 'Kenya', 'Luxembourg', 'Mexico', 'Nepal', 'Qatar', 'Uganda']);
    const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
    const handleTokenDelete: TokenizerPropTypes['onTokenDelete'] = e => {
      args.onTokenDelete(e);
      const {
        tokens
      } = e.detail;
      if (tokens) {
        const tokensToDelete = tokens.map(token => token.text);
        setCountries(prev => prev.filter(country => !tokensToDelete.includes(country)));
        setSelectedCountries([]);
      }
    };
    const handleSelectionChange: TokenizerPropTypes['onSelectionChange'] = e => {
      args.onSelectionChange(e);
      const {
        tokens
      } = e.detail;
      if (tokens) {
        const selectedTokens = tokens.map(token => token.text);
        setSelectedCountries(selectedTokens);
      }
    };
    return <>
        <Tokenizer {...args} onTokenDelete={handleTokenDelete} onSelectionChange={handleSelectionChange}>
          {countries.map(country => <Token key={country} text={country} />)}
        </Tokenizer>
        <br />
        <div style={{
        display: 'flex',
        gap: '0.2rem'
      }}>
          <Label showColon>Selected countries</Label>
          <Text>{selectedCountries.join(', ')}</Text>
        </div>
      </>;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithLogic`]}));b();export{_ as Default,v as WithLogic,y as __namedExportsOrder,g as default,b as n,p as t};
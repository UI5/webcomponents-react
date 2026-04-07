import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{Ld as r,Rd as i,Wm as a,dn as o,eu as s,fn as c,mg as l,mn as u,pn as d,tu as f}from"./iframe-Cka0UKMq.js";var p=n({Default:()=>_,WithLogic:()=>v,__namedExportsOrder:()=>y,default:()=>g}),m,h,g,_,v,y,b=e((()=>{m=t(l(),1),f(),i(),u(),c(),h=a(),g={title:`Inputs / Tokenizer`,component:o,args:{style:{width:`250px`}},tags:[`package:@ui5/webcomponents`,`experimental`]},_={render(e){return(0,h.jsxs)(o,{...e,children:[(0,h.jsx)(d,{text:`Andorra`}),(0,h.jsx)(d,{text:`Bulgaria`}),(0,h.jsx)(d,{text:`Canada`}),(0,h.jsx)(d,{text:`Denmark`}),(0,h.jsx)(d,{text:`Estonia`}),(0,h.jsx)(d,{text:`Fiji`}),(0,h.jsx)(d,{text:`Ghana`}),(0,h.jsx)(d,{text:`India`}),(0,h.jsx)(d,{text:`Japan`}),(0,h.jsx)(d,{text:`Kenya`}),(0,h.jsx)(d,{text:`Luxembourg`}),(0,h.jsx)(d,{text:`Mexico`}),(0,h.jsx)(d,{text:`Nepal`}),(0,h.jsx)(d,{text:`Qatar`}),(0,h.jsx)(d,{text:`Uganda`})]})}},v={render(e){let[t,n]=(0,m.useState)([`Andorra`,`Bulgaria`,`Canada`,`Denmark`,`Estonia`,`Fiji`,`Ghana`,`India`,`Japan`,`Kenya`,`Luxembourg`,`Mexico`,`Nepal`,`Qatar`,`Uganda`]),[i,a]=(0,m.useState)([]),c=t=>{e.onTokenDelete(t);let{tokens:r}=t.detail;if(r){let e=r.map(e=>e.text);n(t=>t.filter(t=>!e.includes(t))),a([])}},l=t=>{e.onSelectionChange(t);let{tokens:n}=t.detail;n&&a(n.map(e=>e.text))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{...e,onTokenDelete:c,onSelectionChange:l,children:t.map(e=>(0,h.jsx)(d,{text:e},e))}),(0,h.jsx)(`br`,{}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:`0.2rem`},children:[(0,h.jsx)(s,{showColon:!0,children:`Selected countries`}),(0,h.jsx)(r,{children:i.join(`, `)})]})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-C184PLS3.js";import{t as i}from"./jsx-runtime-CNp2Ms8r.js";import{n as a,t as o}from"./Text-CPecr5dr.js";import{n as s,t as c}from"./Label-dTphSCxC.js";import{n as l,t as u}from"./Token-BHcLWjmp.js";import{n as d,t as f}from"./Tokenizer-B5Kes3-D.js";var p=n({Default:()=>_,WithLogic:()=>v,__namedExportsOrder:()=>y,default:()=>g}),m,h,g,_,v,y,b=e((()=>{m=t(r(),1),s(),a(),l(),d(),h=i(),g={title:`Inputs / Tokenizer`,component:f,args:{style:{width:`250px`}},tags:[`package:@ui5/webcomponents`,`experimental`]},_={render(e){return(0,h.jsxs)(f,{...e,children:[(0,h.jsx)(u,{text:`Andorra`}),(0,h.jsx)(u,{text:`Bulgaria`}),(0,h.jsx)(u,{text:`Canada`}),(0,h.jsx)(u,{text:`Denmark`}),(0,h.jsx)(u,{text:`Estonia`}),(0,h.jsx)(u,{text:`Fiji`}),(0,h.jsx)(u,{text:`Ghana`}),(0,h.jsx)(u,{text:`India`}),(0,h.jsx)(u,{text:`Japan`}),(0,h.jsx)(u,{text:`Kenya`}),(0,h.jsx)(u,{text:`Luxembourg`}),(0,h.jsx)(u,{text:`Mexico`}),(0,h.jsx)(u,{text:`Nepal`}),(0,h.jsx)(u,{text:`Qatar`}),(0,h.jsx)(u,{text:`Uganda`})]})}},v={render(e){let[t,n]=(0,m.useState)([`Andorra`,`Bulgaria`,`Canada`,`Denmark`,`Estonia`,`Fiji`,`Ghana`,`India`,`Japan`,`Kenya`,`Luxembourg`,`Mexico`,`Nepal`,`Qatar`,`Uganda`]),[r,i]=(0,m.useState)([]),a=t=>{e.onTokenDelete(t);let{tokens:r}=t.detail;if(r){let e=r.map(e=>e.text);n(t=>t.filter(t=>!e.includes(t))),i([])}},s=t=>{e.onSelectionChange(t);let{tokens:n}=t.detail;n&&i(n.map(e=>e.text))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,{...e,onTokenDelete:a,onSelectionChange:s,children:t.map(e=>(0,h.jsx)(u,{text:e},e))}),(0,h.jsx)(`br`,{}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:`0.2rem`},children:[(0,h.jsx)(c,{showColon:!0,children:`Selected countries`}),(0,h.jsx)(o,{children:r.join(`, `)})]})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
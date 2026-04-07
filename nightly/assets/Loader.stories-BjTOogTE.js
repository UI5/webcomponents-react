import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{Bo as r,Ch as i,Dh as a,Hd as o,Hf as s,Ho as c,Kd as l,Ld as u,Qf as d,Rd as f,Sh as p,Uo as m,Vd as h,Vo as g,Wm as _,if as v,mg as y,qd as b,rf as x}from"./iframe-Bieuqh9w.js";import{i as S,n as C,r as w,t as T}from"./Loader-D7Iq2K5A.js";var E,D,O,k=e((()=>{p(),d(),E=`activate`,D=`M21 408l249-249q5-5 11-5t11 5l45 45q12 11 0 23L89 475q-5 5-12 5-6 0-11-5l-45-45q-11-11 0-22zM140 64l21-58 21 58h59l-47 39 20 64-53-40-55 40 21-64-47-39h60zm196 0h59l21-58 21 58h59l-47 39 20 64-53-40-54 40 21-64zm0 224h59l21-58 21 58h59l-47 39 20 64-53-40-54 40 21-64zM55 419l22 23 181-181-22-23z`,O=s,i(E,{pathData:D,ltr:!1,accData:O,collection:`SAP-icons-v4`,packageName:`@ui5/webcomponents-icons`})})),A,j,M,N=e((()=>{p(),d(),A=`activate`,j=`M416 192q-9 0-16-6t-9-15l-8-42-42-8q-9-2-15-9t-6-16 6-16 15-9l42-9 8-41q2-9 9-15t16-6 16 6 9 15l9 41 42 9q9 2 14.5 9t5.5 16-5.5 16-14.5 9l-42 8-9 42q-2 9-9 15t-16 6zm-288 0q-9 0-16-6t-9-15l-8-42-42-8q-9-2-15-9t-6-16 6-16 15-9l42-9 8-41q2-9 9-15t16-6 16 6 9 15l9 41 42 9q9 2 14.5 9t5.5 16-5.5 16-14.5 9l-42 8-9 42q-2 9-9 15t-16 6zm185 55q7 7 7 18t-7 18L102 494q-20 18-44 18-26 0-42-18T0 453q0-24 17-42l212-212q7-7 18-7 12 0 19 7zm-78 41l-11-11L54 448q-3 1-3 5 0 8 8 8 2 0 6-2zm181 192q-9 0-16-6t-9-15l-8-42-42-8q-9-2-15-9t-6-16 6-16 15-9l42-9 8-41q2-9 9-15t16-6 16 6 9 15l9 41 42 9q9 2 14.5 9t5.5 16-5.5 16-14.5 9l-42 8-9 42q-2 9-9 15t-16 6z`,M=s,i(A,{pathData:j,ltr:!1,accData:M,collection:`SAP-icons-v5`,packageName:`@ui5/webcomponents-icons`})})),P,F=e((()=>{a(),k(),N(),P=`activate`})),I=n({Default:()=>B,WithCard:()=>V,__namedExportsOrder:()=>H,default:()=>z}),L,R,z,B,V,H,U=e((()=>{F(),o(),b(),m(),g(),v(),f(),L=t(y(),1),S(),C(),R=_(),z={title:`Loader`,component:T,argTypes:{},args:{type:w.Indeterminate,progress:`60%`},tags:[`package:@ui5/webcomponents-react-compat`,`deprecated`]},B={},V={render(e){let t=`This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.`,[n,i]=(0,L.useState)(t),[a,o]=(0,L.useState)(!1),s=(0,L.useRef)(0);return(0,L.useEffect)(()=>{a&&setTimeout(()=>{s.current<10?i(e=>e===t?`Updated (⌐■_■)`:t):i(`You really must be bored ಠ_ಠ`),s.current++,o(!1)},5e3)},[a]),(0,R.jsx)(c,{header:(0,R.jsx)(r,{titleText:`Click the header to update the text below.`,interactive:!0,avatar:(0,R.jsx)(x,{name:P}),onClick:()=>{o(!0)}}),style:{width:`400px`},children:(0,R.jsxs)(h,{direction:l.Column,children:[a&&(0,R.jsx)(T,{...e}),(0,R.jsx)(u,{style:{padding:`1rem`},children:n})]})})}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render(args) {
    const initialText = 'This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.';
    const [text, setText] = useState(initialText);
    const [loading, setLoading] = useState(false);
    const counter = useRef(0);
    const onHeaderClick = () => {
      setLoading(true);
    };
    useEffect(() => {
      if (loading) {
        setTimeout(() => {
          if (counter.current < 10) {
            setText(prev => prev === initialText ? 'Updated (⌐■_■)' : initialText);
          } else {
            setText('You really must be bored ಠ_ಠ');
          }
          counter.current++;
          setLoading(false);
        }, 5000);
      }
    }, [loading]);
    return <Card header={<CardHeader titleText="Click the header to update the text below." interactive avatar={<Icon name={activateIcon} />} onClick={onHeaderClick} />} style={{
      width: '400px'
    }}>
        <FlexBox direction={FlexBoxDirection.Column}>
          {loading && <Loader {...args} />}
          <Text style={{
          padding: '1rem'
        }}>{text}</Text>
        </FlexBox>
      </Card>;
  }
}`,...V.parameters?.docs?.source}}},H=[`Default`,`WithCard`]}));U();export{B as Default,V as WithCard,H as __namedExportsOrder,z as default,U as n,I as t};
import{n as e,o as t,r as n}from"./chunk-jRWAZmH_.js";import{Bd as r,Bo as i,Cg as a,Fh as o,Gm as s,Ho as c,Kf as l,Mh as u,Ud as d,Uo as f,Vo as p,Wd as m,Xd as h,Yd as g,cf as _,jh as v,np as y,sf as b,zd as x}from"./iframe-DO_RAD2l.js";import{i as S,n as C,r as w,t as T}from"./Loader-B39QKyPo.js";var E,D,O,k,A=e((()=>{v(),y(),E=`activate`,D=`m.183 13.57 8.292-8.405a.506.506 0 0 1 .366-.17c.133 0 .255.057.366.17l1.498 1.519c.267.247.267.506 0 .776l-8.257 8.37a.541.541 0 0 1-.4.169.506.506 0 0 1-.365-.169l-1.5-1.518c-.244-.247-.244-.495 0-.742ZM4.146 1.958 4.845 0l.7 1.958h1.964L5.944 3.274l.666 2.16-1.765-1.35-1.831 1.35.699-2.16-1.565-1.316h1.998Zm6.526 0h1.965l.7-1.958.698 1.958H16l-1.565 1.316.666 2.16-1.765-1.35-1.798 1.35.7-2.16-1.566-1.316Zm0 7.561h1.965l.7-1.958.698 1.958H16l-1.565 1.316.666 2.16-1.765-1.35-1.798 1.35.7-2.16-1.566-1.316Zm-9.357 4.422.733.776 6.027-6.11-.733-.776-6.027 6.11Z`,O=l,k=`0 0 16 16`,u(E,{pathData:D,ltr:!1,viewBox:k,accData:O,collection:`SAP-icons-v4`,packageName:`@ui5/webcomponents-icons`})})),j,M,N,P,F=e((()=>{v(),y(),j=`activate`,M=`M5.814 7.543a.75.75 0 0 1 1.004.05l1.586 1.585c.29.289.29.77.001 1.06L2.867 15.78a.75.75 0 0 1-.53.22H.75a.75.75 0 0 1-.75-.75v-1.583c0-.199.08-.39.22-.53l5.594-5.594ZM13 9.5a.75.75 0 0 1 .735.602l.277 1.385 1.386.278a.75.75 0 0 1 0 1.47l-1.386.277-.277 1.386a.75.75 0 0 1-1.47 0l-.278-1.386-1.385-.277a.75.75 0 0 1 0-1.47l1.385-.278.278-1.385A.745.745 0 0 1 13 9.5ZM1.5 13.977v.523h.526l4.787-4.792-.525-.523L1.5 13.977Zm7.568-8.758 1.586 1.584a.75.75 0 0 1 .002 1.06l-.788.791a.75.75 0 0 1-1.061.002L7.22 7.072a.75.75 0 0 1-.002-1.06l.902-.885c.266-.201.7-.154.947.092ZM3.5 0a.75.75 0 0 1 .735.603l.277 1.384 1.385.278a.75.75 0 0 1 0 1.47l-1.385.277-.277 1.385a.75.75 0 0 1-1.47 0l-.278-1.385-1.384-.277a.75.75 0 0 1 0-1.47l1.384-.278.278-1.384A.727.727 0 0 1 3.5 0ZM13 0a.75.75 0 0 1 .735.603l.277 1.384 1.386.278a.75.75 0 0 1 0 1.47l-1.386.277-.277 1.385a.75.75 0 0 1-1.47 0l-.278-1.385-1.385-.277a.75.75 0 0 1 0-1.47l1.385-.278.278-1.384C12.332.219 12.623 0 13 0Z`,N=l,P=`0 0 16 16`,u(j,{pathData:M,ltr:!1,viewBox:P,accData:N,collection:`SAP-icons-v5`,packageName:`@ui5/webcomponents-icons`})})),I,L=e((()=>{o(),A(),F(),I=`activate`})),R=n({Default:()=>H,WithCard:()=>U,__namedExportsOrder:()=>W,default:()=>V}),z,B,V,H,U,W,G=e((()=>{L(),m(),h(),f(),p(),_(),r(),z=t(a(),1),S(),C(),B=s(),V={title:`Loader`,component:T,argTypes:{},args:{type:w.Indeterminate,progress:`60%`},tags:[`package:@ui5/webcomponents-react-compat`,`deprecated`]},H={},U={render(e){let t=`This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.`,[n,r]=(0,z.useState)(t),[a,o]=(0,z.useState)(!1),s=(0,z.useRef)(0);return(0,z.useEffect)(()=>{a&&setTimeout(()=>{s.current<10?r(e=>e===t?`Updated (⌐■_■)`:t):r(`You really must be bored ಠ_ಠ`),s.current++,o(!1)},5e3)},[a]),(0,B.jsx)(c,{header:(0,B.jsx)(i,{titleText:`Click the header to update the text below.`,interactive:!0,avatar:(0,B.jsx)(b,{name:I}),onClick:()=>{o(!0)}}),style:{width:`400px`},children:(0,B.jsxs)(d,{direction:g.Column,children:[a&&(0,B.jsx)(T,{...e}),(0,B.jsx)(x,{style:{padding:`1rem`},children:n})]})})}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W=[`Default`,`WithCard`]}));G();export{H as Default,U as WithCard,W as __namedExportsOrder,V as default,G as n,R as t};
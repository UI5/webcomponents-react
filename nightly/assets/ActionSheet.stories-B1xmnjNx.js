import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{$f as r,Bf as i,Ch as a,Dh as o,Dp as s,Ep as c,Kf as l,Q as u,Qf as d,Sh as f,Wm as p,_f as m,cf as h,gf as g,hf as _,mf as v,mg as y,pf as b,sf as x,vf as S,zf as C}from"./iframe-Cka0UKMq.js";import{n as w,t as T}from"./delete-D01B2Mx5.js";var E,D,O=e((()=>{f(),E=`email`,D=`M480 64q14 0 23 9t9 23v320q0 13-9 22.5t-23 9.5H32q-13 0-22.5-9.5T0 416V96q0-14 9.5-23T32 64h448zM64 96l192 160L448 96H64zm416 16L256 288 32 112v288l133-136 19 18L48 416h416L329 282l17-18 134 136V112z`,a(E,{pathData:D,ltr:!1,collection:`SAP-icons-v4`,packageName:`@ui5/webcomponents-icons`})})),k,A,j=e((()=>{f(),k=`email`,A=`M422 64q38 0 64 26t26 64v204q0 38-26 64t-64 26H90q-38 0-64-26T0 358V154q0-38 26-64t64-26h332zM90 115q-11 0-22 7l167 108q8 7 21 7t21-7l166-109q-9-6-21-6H90zm332 282q17 0 28-11t11-28V171L305 273q-22 15-49 15-26 0-49-15L51 172v186q0 17 11 28t28 11h332z`,a(k,{pathData:A,ltr:!1,collection:`SAP-icons-v5`,packageName:`@ui5/webcomponents-icons`})})),M,N=e((()=>{o(),O(),j(),M=`email`})),P,F,I,L=e((()=>{f(),d(),P=`forward`,F=`M471.5 170q9 10 9 23t-9 22l-128 128q-10 10-23 10t-23-10q-9-9-9-22.5t9-22.5l74-73h-84q-40 0-75 15t-61 41-41 61-15 75v32q0 13-9 22.5t-23 9.5q-13 0-22.5-9.5T31.5 449v-32q0-53 20.5-99.5t55-81.5 81-55 99.5-20h84l-74-74q-10-10-10-23t10-22q9-10 22-10t23 10z`,I=l,a(P,{pathData:F,ltr:!1,accData:I,collection:`SAP-icons-v4`,packageName:`@ui5/webcomponents-icons`})})),R,z,B,V=e((()=>{f(),d(),R=`forward`,z=`M320 151h74L289 43q-7-9-7-17 0-11 7.5-18.5T308 0q10 0 18 8l147 151q7 7 7 17 0 11-7 18L326 345q-8 8-18 8-11 0-18.5-7.5T282 327q0-9 7-18l105-107h-74q-49 0-92.5 17T152 266.5t-50.5 73T83 432v54q0 11-7 18.5T58 512t-18.5-7.5T32 486v-54q0-61 22.5-112.5t61.5-89 91.5-58.5T320 151z`,B=l,a(R,{pathData:z,ltr:!1,accData:B,collection:`SAP-icons-v5`,packageName:`@ui5/webcomponents-icons`})})),H,U=e((()=>{o(),L(),V(),H=`forward`})),W=n({Default:()=>J,__namedExportsOrder:()=>Y,default:()=>q}),G,K,q,J,Y,X=e((()=>{v(),S(),g(),s(),i(),w(),N(),U(),G=t(y(),1),u(),h(),K=p(),q={title:`Modals & Popovers / ActionSheet`,component:x,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}},accessibilityAttributes:{table:{category:`Accessibility props`}}},args:{horizontalAlign:b.Center,placement:m.End,verticalAlign:_.Center,open:!1},parameters:{chromatic:{disableSnapshot:!0}},tags:[`extends:@ui5/webcomponents`,`cem-module:ResponsivePopover`,`package:@ui5/webcomponents-react`]},J={render(e){let t=(0,G.useRef)(null),[n,i]=(0,G.useState)(e.open);return(0,G.useEffect)(()=>{i(e.open)},[e.open]),(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(r,{onClick:()=>{i(!0)},ref:t,children:`Open ActionSheet`}),(0,K.jsxs)(x,{...e,opener:t.current,open:n,onClose:t=>{e.onClose(t),i(!1)},children:[(0,K.jsx)(r,{icon:c,children:`Accept`}),(0,K.jsx)(r,{icon:C,children:`Reject`}),(0,K.jsx)(r,{icon:M,children:`Email`}),(0,K.jsx)(r,{icon:H,children:`Forward`}),(0,K.jsx)(r,{icon:T,children:`Delete`}),(0,K.jsx)(r,{children:`Other`})]})]})}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render(args) {
    const buttonRef = useRef<ButtonDomRef>(null);
    const [actionSheetOpen, setActionSheetOpen] = useState<boolean | undefined>(args.open);
    useEffect(() => {
      setActionSheetOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={() => {
        setActionSheetOpen(true);
      }} ref={buttonRef}>
          Open ActionSheet
        </Button>
        <ActionSheet {...args} opener={buttonRef.current} open={actionSheetOpen} onClose={e => {
        args.onClose(e);
        setActionSheetOpen(false);
      }}>
          <Button icon={acceptIcon}>Accept</Button>
          <Button icon={declineIcon}>Reject</Button>
          <Button icon={emailIcon}>Email</Button>
          <Button icon={forwardIcon}>Forward</Button>
          <Button icon={deleteIcon}>Delete</Button>
          <Button>Other</Button>
        </ActionSheet>
      </>;
  }
}`,...J.parameters?.docs?.source}}},Y=[`Default`]}));X();export{J as Default,Y as __namedExportsOrder,q as default,X as n,W as t};
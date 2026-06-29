import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{t as r}from"./react-IGKVQItS.js";import{t as i}from"./Theme-C2cZnLzT.js";import{s as a,u as o}from"./Icon-Dk1vOPID.js";import{a as s,c,i as l,o as u,r as d,s as f}from"./Popover-6X8ZqOj5.js";import{t as p}from"./jsx-runtime-O9QVJvLM.js";import{n as m,t as h}from"./accept-BrHf6w2y.js";import{t as g}from"./Button-BWYxG0cX.js";import{A as _,h as v}from"./i18n-defaults-BvBsm-dO.js";import{n as y,t as b}from"./decline-CHR7tiIS.js";import{t as x}from"./webComponents-DZUJMaAn.js";import{Dt as S,Ot as C}from"./iframe-DLVA-QqI.js";import{n as w,t as T}from"./delete-0JS_asRL.js";import{n as E,t as D}from"./email-Bdn34He4.js";var O,k,A,j,M=n((()=>{a(),_(),O=`forward`,k=`M14.72 5.303c.186.208.28.447.28.717 0 .27-.094.499-.28.686l-3.992 3.991a.986.986 0 0 1-.717.312.986.986 0 0 1-.717-.312.952.952 0 0 1-.28-.701c0-.281.093-.515.28-.702l2.307-2.276H8.982a5.87 5.87 0 0 0-2.338.468 6.006 6.006 0 0 0-1.902 1.278 6.007 6.007 0 0 0-1.279 1.902 5.874 5.874 0 0 0-.467 2.338v.998c0 .27-.094.504-.281.702a.944.944 0 0 1-.717.296.959.959 0 0 1-.702-.296.959.959 0 0 1-.296-.702v-.998c0-1.101.213-2.135.64-3.102a8.425 8.425 0 0 1 1.714-2.541A7.878 7.878 0 0 1 5.88 5.646c.966-.416 2-.624 3.102-.624h2.62L9.293 2.715a.986.986 0 0 1-.312-.717c0-.27.104-.5.312-.686A.888.888 0 0 1 9.98 1c.27 0 .51.104.717.312l4.022 3.99Z`,A=v,j=`0 0 16 16`,o(O,{pathData:k,ltr:!1,viewBox:j,accData:A,collection:`SAP-icons-v4`,packageName:`@ui5/webcomponents-icons`})})),N,P,F,I,L=n((()=>{a(),_(),N=`forward`,P=`M9.205 1.486a.75.75 0 0 1 1.06-.03l4.5 4.247a.757.757 0 0 1 0 1.09l-4.5 4.252a.75.75 0 0 1-1.03-1.09L12.361 7H8.75a6.25 6.25 0 0 0-6.25 6.25v1a.75.75 0 0 1-1.5 0v-1A7.75 7.75 0 0 1 8.75 5.5h3.616l-3.13-2.955a.75.75 0 0 1-.03-1.06Z`,F=v,I=`0 0 16 16`,o(N,{pathData:P,ltr:!1,viewBox:I,accData:F,collection:`SAP-icons-v5`,packageName:`@ui5/webcomponents-icons`})})),R,z=n((()=>{i(),M(),L(),R=`forward`})),B=e({Default:()=>W,__namedExportsOrder:()=>G,default:()=>U}),V,H,U,W,G,K=n((()=>{l(),c(),u(),m(),y(),w(),E(),z(),V=t(r(),1),x(),C(),H=p(),U={title:`Modals & Popovers / ActionSheet`,component:S,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}},accessibilityAttributes:{table:{category:`Accessibility props`}}},args:{horizontalAlign:d.Center,placement:f.End,verticalAlign:s.Center,open:!1},parameters:{chromatic:{disableSnapshot:!0}},tags:[`extends:@ui5/webcomponents`,`cem-module:ResponsivePopover`,`package:@ui5/webcomponents-react`]},W={render(e){let t=(0,V.useRef)(null),[n,r]=(0,V.useState)(e.open);return(0,V.useEffect)(()=>{r(e.open)},[e.open]),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(g,{onClick:()=>{r(!0)},ref:t,children:`Open ActionSheet`}),(0,H.jsxs)(S,{...e,opener:t.current,open:n,onClose:t=>{e.onClose(t),r(!1)},children:[(0,H.jsx)(g,{icon:h,children:`Accept`}),(0,H.jsx)(g,{icon:b,children:`Reject`}),(0,H.jsx)(g,{icon:D,children:`Email`}),(0,H.jsx)(g,{icon:R,children:`Forward`}),(0,H.jsx)(g,{icon:T,children:`Delete`}),(0,H.jsx)(g,{children:`Other`})]})]})}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G=[`Default`]}));K();export{W as Default,G as __namedExportsOrder,U as default,K as n,B as t};
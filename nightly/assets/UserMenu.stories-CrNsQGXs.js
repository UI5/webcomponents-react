import{n as e,o as t,r as n}from"./chunk-jRWAZmH_.js";import{At as r,Cg as i,Dt as a,Et as o,Gm as s,Hr as c,Ot as l,Tt as u,Ur as d,dl as f,kt as p,ul as m}from"./iframe-C2-neVvG.js";var h=n({Default:()=>y,__namedExportsOrder:()=>b,default:()=>v}),g,_,v,y,b,x=e((()=>{g=t(i(),1),f(),d(),l(),o(),r(),_=s(),v={title:`Modals & Popovers / UserMenu`,component:p,argTypes:{children:{control:{disable:!0}},opener:{control:{disable:!0}},accounts:{control:{disable:!0}}},args:{accounts:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{avatarSrc:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,titleText:`Alaina Chevalier`,subtitleText:`aliana.chevalier@sap.com`,description:`Delivery Manager, SAP SE`,selected:!0}),(0,_.jsx)(a,{avatarSrc:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,titleText:`Alaina Chevalier I`,subtitleText:`aliana.chevalier1@sap.com`,description:`Delivery Manager, SAP SE`}),(0,_.jsx)(a,{avatarSrc:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,titleText:`Alaina Chevalier II`,subtitleText:`aliana.chevalier2@sap.com`,description:`Delivery Manager, SAP SE`})]}),children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(u,{icon:`action-settings`,text:`Setting`,"data-id":`setting`}),(0,_.jsx)(u,{icon:`globe`,text:`Product-specific account action`,"data-id":`account-action1`}),(0,_.jsxs)(u,{icon:`official-service`,text:`Legal Information`,children:[(0,_.jsx)(u,{icon:`private`,text:`Private Policy`,"data-id":`privacy-policy`}),(0,_.jsx)(u,{icon:`accelerated`,text:`Terms of Use`,"data-id":`terms-of-use`})]})]})},tags:[`package:@ui5/webcomponents`]},y={render(e){let t=(0,g.useRef)(null),[n,r]=(0,g.useState)(e.open);return(0,g.useEffect)(()=>{r(e.open)},[e.open]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(c,{primaryTitle:`Corporate Portal`,logo:(0,_.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/sap-logo-svg.svg`,alt:`SAP Logo`}),profile:(0,_.jsx)(m,{children:(0,_.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,alt:`Avatar of the current user`})}),onProfileClick:e=>{t.current.opener=e.detail.targetRef,t.current.open=!0,r(!0)}}),(0,_.jsx)(p,{ref:t,...e,open:n,onClose:()=>{r(!1)}})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render(args) {
    const userMenuRef = useRef<UserMenuDomRef>(null);
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <ShellBar primaryTitle={'Corporate Portal'} logo={<img src="https://ui5.github.io/webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />} profile={<Avatar>
              <img src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png" alt={'Avatar of the current user'} />
            </Avatar>} onProfileClick={event => {
        userMenuRef.current.opener = event.detail.targetRef;
        userMenuRef.current.open = true;
        setOpen(true);
      }} />
        <UserMenu ref={userMenuRef} {...args} open={open} onClose={() => {
        setOpen(false);
      }} />
      </>;
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`]}));x();export{y as Default,b as __namedExportsOrder,v as default,x as n,h as t};
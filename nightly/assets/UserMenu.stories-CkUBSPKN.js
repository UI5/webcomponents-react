import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-C184PLS3.js";import{t as i}from"./jsx-runtime-1ARNaUmP.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./UserMenuItem-OsffXhzY.js";import{n as d,t as f}from"./Avatar-DKFyWmgX.js";import{n as p,t as m}from"./ShellBar-DbZ0U9-i.js";var h=n({Default:()=>y,__namedExportsOrder:()=>b,default:()=>v}),g,_,v,y,b,x=e((()=>{g=t(r(),1),d(),p(),o(),s(),c(),_=i(),v={title:`Modals & Popovers / UserMenu`,component:a,argTypes:{children:{control:{disable:!0}},opener:{control:{disable:!0}},accounts:{control:{disable:!0}}},args:{accounts:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l,{avatarSrc:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,titleText:`Alaina Chevalier`,subtitleText:`aliana.chevalier@sap.com`,description:`Delivery Manager, SAP SE`,selected:!0}),(0,_.jsx)(l,{avatarSrc:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,titleText:`Alaina Chevalier I`,subtitleText:`aliana.chevalier1@sap.com`,description:`Delivery Manager, SAP SE`}),(0,_.jsx)(l,{avatarSrc:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,titleText:`Alaina Chevalier II`,subtitleText:`aliana.chevalier2@sap.com`,description:`Delivery Manager, SAP SE`})]}),children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(u,{icon:`action-settings`,text:`Setting`,"data-id":`setting`}),(0,_.jsx)(u,{icon:`globe`,text:`Product-specific account action`,"data-id":`account-action1`}),(0,_.jsxs)(u,{icon:`official-service`,text:`Legal Information`,children:[(0,_.jsx)(u,{icon:`private`,text:`Private Policy`,"data-id":`privacy-policy`}),(0,_.jsx)(u,{icon:`accelerated`,text:`Terms of Use`,"data-id":`terms-of-use`})]})]})},tags:[`package:@ui5/webcomponents`]},y={render(e){let t=(0,g.useRef)(null),[n,r]=(0,g.useState)(e.open);return(0,g.useEffect)(()=>{r(e.open)},[e.open]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m,{primaryTitle:`Corporate Portal`,logo:(0,_.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/sap-logo-svg.svg`,alt:`SAP Logo`}),profile:(0,_.jsx)(f,{children:(0,_.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,alt:`Avatar of the current user`})}),onProfileClick:e=>{t.current.opener=e.detail.targetRef,t.current.open=!0,r(!0)}}),(0,_.jsx)(a,{ref:t,...e,open:n,onClose:()=>{r(!1)}})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
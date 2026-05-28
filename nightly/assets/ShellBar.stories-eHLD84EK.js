import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{El as n,Gr as r,Hr as i,Jd as a,Jr as o,Kr as s,Un as c,Wn as l,Wr as u,Xr as d,Yd as f,Yr as p,Zr as m,_a as h,_r as g,_u as _,ef as v,gr as y,gu as b,it as x,lh as S,tf as C,va as w,vp as T,yp as E}from"./iframe-Dnw86Zuv.js";import{i as D,n as O,r as k,t as A}from"./sys-help-zsoCMxwS.js";import{n as j,t as M}from"./Person-CoTXHsgn.js";var N=e({AllFeatures:()=>L,Default:()=>I,EmbeddedBackNavigation:()=>R,NonProductiveInstances:()=>V,ProductiveInstances:()=>B,ShellBarBrandingStory:()=>H,TrialExample:()=>z,__namedExportsOrder:()=>U,default:()=>F}),P,F,I,L,R,z,B,V,H,U,W=t((()=>{j(),k(),h(),A(),C(),E(),x(),_(),p(),r(),g(),l(),f(),m(),P=S(),F={title:`Layouts & Floorplans / ShellBar`,component:d,argTypes:{children:{control:{disable:!0}},logo:{control:{disable:!0}},menuItems:{control:{disable:!0}},profile:{control:{disable:!0}},searchField:{control:{disable:!0}},startButton:{control:{disable:!0}}},args:{primaryTitle:`Shell Bar`,notificationsCount:`10`,showNotifications:!0,logo:(0,P.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/sap-logo-svg.svg`,alt:`SAP Logo`}),profile:(0,P.jsx)(n,{children:(0,P.jsx)(`img`,{src:M,alt:`person-placeholder`})}),startButton:(0,P.jsx)(T,{icon:D,tooltip:`Menu`,accessibleName:`Menu`}),searchField:(0,P.jsx)(u,{showClearIcon:!0,placeholder:`Search Apps, Products`}),children:(0,P.jsx)(s,{text:`Help`,icon:O})},tags:[`package:@ui5/webcomponents-fiori`]},I={},L={args:{showProductSwitch:!0,startButton:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{icon:D,tooltip:`Menu`,accessibleName:`Menu`}),(0,P.jsx)(T,{icon:w,tooltip:`Back`,accessibleName:`Back`})]}),content:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(c,{design:`Set2`,colorScheme:`7`,children:`Trial`}),(0,P.jsx)(a,{children:`30 days remaining`}),(0,P.jsx)(i,{}),(0,P.jsxs)(v,{gap:`0 5px`,alignItems:`Center`,children:[(0,P.jsx)(y,{}),(0,P.jsx)(b,{children:`Try Beta Version`})]})]})}},R={args:{startButton:(0,P.jsx)(T,{icon:w,tooltip:`Back`,accessibleName:`Back`})}},z={args:{content:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(c,{design:`Set2`,colorScheme:`7`,children:`Trial`}),(0,P.jsx)(a,{children:`30 days remaining`})]})}},B={args:{content:(0,P.jsx)(c,{design:`Set2`,colorScheme:`10`,children:`Region EMEA`})},render(e){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(d,{...e}),(0,P.jsx)(d,{...e,content:(0,P.jsx)(c,{design:`Set2`,colorScheme:`10`,children:`Region APJ`})})]})}},V={args:{content:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(c,{design:`Set2`,colorScheme:`8`,children:`Q System`}),(0,P.jsx)(a,{children:`Region EMEA`})]})},render(e){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(d,{...e}),(0,P.jsx)(d,{...e,content:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(c,{design:`Set2`,colorScheme:`8`,children:`Q System`}),(0,P.jsx)(a,{children:`Region APJ`})]})})]})}},H={name:`with ShellBarBranding`,args:{branding:(0,P.jsx)(o,{logo:(0,P.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/sap-logo-svg.svg`,alt:`SAP Logo`}),href:`https://ui5.github.io/webcomponents-react/v2/?path=/docs/layouts-floorplans-shellbar--docs`,target:`_blank`,onClick:e=>{console.log(`ShellBarBranding clicked`,e)},children:`ShellBar Branding`})},render(e){return(0,P.jsx)(d,{...e})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    showProductSwitch: true,
    startButton: <>
        <Button icon={menu2Icon} tooltip="Menu" accessibleName="Menu" />
        <Button icon={navBackIcon} tooltip="Back" accessibleName="Back" />
      </>,
    content: <>
        <Tag design="Set2" colorScheme="7">
          Trial
        </Tag>
        <Text>30 days remaining</Text>
        <ShellBarSpacer />
        <FlexBox gap="0 5px" alignItems="Center">
          <Switch />
          <Label>Try Beta Version</Label>
        </FlexBox>
      </>
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    startButton: <Button icon={navBackIcon} tooltip="Back" accessibleName="Back" />
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    content: <>
        <Tag design="Set2" colorScheme="7">
          Trial
        </Tag>
        <Text>30 days remaining</Text>
      </>
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    content: <Tag design="Set2" colorScheme="10">
        Region EMEA
      </Tag>
  },
  render(args) {
    return <>
        <ShellBar {...args} />
        <ShellBar {...args} content={<Tag design="Set2" colorScheme="10">
              Region APJ
            </Tag>} />
      </>;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    content: <>
        <Tag design="Set2" colorScheme="8">
          Q System
        </Tag>
        <Text>Region EMEA</Text>
      </>
  },
  render(args) {
    return <>
        <ShellBar {...args} />
        <ShellBar {...args} content={<>
              <Tag design="Set2" colorScheme="8">
                Q System
              </Tag>
              <Text>Region APJ</Text>
            </>} />
      </>;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'with ShellBarBranding',
  args: {
    branding: <ShellBarBranding logo={<img src="https://ui5.github.io/webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />} href="https://ui5.github.io/webcomponents-react/v2/?path=/docs/layouts-floorplans-shellbar--docs" target="_blank" onClick={e => {
      console.log('ShellBarBranding clicked', e);
    }}>
        ShellBar Branding
      </ShellBarBranding>
  },
  render(args) {
    return <ShellBar {...args} />;
  }
}`,...H.parameters?.docs?.source}}},U=[`Default`,`AllFeatures`,`EmbeddedBackNavigation`,`TrialExample`,`ProductiveInstances`,`NonProductiveInstances`,`ShellBarBrandingStory`]}));W();export{L as AllFeatures,I as Default,R as EmbeddedBackNavigation,V as NonProductiveInstances,B as ProductiveInstances,H as ShellBarBrandingStory,z as TrialExample,U as __namedExportsOrder,F as default,W as n,N as t};
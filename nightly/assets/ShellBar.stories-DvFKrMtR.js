import{a as e,i as t}from"./preload-helper-DbRxMUml.js";import{$ as n,Bn as r,Fm as i,Gd as a,Gr as o,Hr as s,Jr as c,Kr as l,Rd as u,Ur as d,Vn as f,Vr as p,Wd as m,bl as h,du as g,ma as _,mr as v,np as y,pa as b,pr as x,qr as S,rp as C,uu as w,zd as T,zr as E}from"./iframe-CzbhIHxX.js";import{i as D,n as O,r as k,t as A}from"./sys-help-tCfMVgfp.js";import{n as j,t as M}from"./Person-hbXs5Hhg.js";var N=e({AllFeatures:()=>L,Default:()=>I,EmbeddedBackNavigation:()=>R,NonProductiveInstances:()=>V,ProductiveInstances:()=>B,ShellBarBrandingStory:()=>H,TrialExample:()=>z,__namedExportsOrder:()=>U,default:()=>F}),P,F,I,L,R,z,B,V,H,U,W=t((()=>{j(),k(),b(),A(),a(),C(),n(),g(),l(),s(),v(),f(),T(),c(),P=i(),F={title:`Layouts & Floorplans / ShellBar`,component:S,argTypes:{children:{control:{disable:!0}},logo:{control:{disable:!0}},menuItems:{control:{disable:!0}},profile:{control:{disable:!0}},searchField:{control:{disable:!0}},startButton:{control:{disable:!0}}},args:{primaryTitle:`Shell Bar`,notificationsCount:`10`,showNotifications:!0,logo:(0,P.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/sap-logo-svg.svg`,alt:`SAP Logo`}),profile:(0,P.jsx)(h,{children:(0,P.jsx)(`img`,{src:M,alt:`person-placeholder`})}),startButton:(0,P.jsx)(y,{icon:D,tooltip:`Menu`,accessibleName:`Menu`}),searchField:(0,P.jsx)(p,{showClearIcon:!0,placeholder:`Search Apps, Products`}),children:(0,P.jsx)(d,{text:`Help`,icon:O})},tags:[`package:@ui5/webcomponents-fiori`]},I={},L={args:{showProductSwitch:!0,startButton:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(y,{icon:D,tooltip:`Menu`,accessibleName:`Menu`}),(0,P.jsx)(y,{icon:_,tooltip:`Back`,accessibleName:`Back`})]}),content:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(r,{design:`Set2`,colorScheme:`7`,children:`Trial`}),(0,P.jsx)(u,{children:`30 days remaining`}),(0,P.jsx)(E,{}),(0,P.jsxs)(m,{gap:`0 5px`,alignItems:`Center`,children:[(0,P.jsx)(x,{}),(0,P.jsx)(w,{children:`Try Beta Version`})]})]})}},R={args:{startButton:(0,P.jsx)(y,{icon:_,tooltip:`Back`,accessibleName:`Back`})}},z={args:{content:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(r,{design:`Set2`,colorScheme:`7`,children:`Trial`}),(0,P.jsx)(u,{children:`30 days remaining`})]})}},B={args:{content:(0,P.jsx)(r,{design:`Set2`,colorScheme:`10`,children:`Region EMEA`})},render(e){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(S,{...e}),(0,P.jsx)(S,{...e,content:(0,P.jsx)(r,{design:`Set2`,colorScheme:`10`,children:`Region APJ`})})]})}},V={args:{content:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(r,{design:`Set2`,colorScheme:`8`,children:`Q System`}),(0,P.jsx)(u,{children:`Region EMEA`})]})},render(e){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(S,{...e}),(0,P.jsx)(S,{...e,content:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(r,{design:`Set2`,colorScheme:`8`,children:`Q System`}),(0,P.jsx)(u,{children:`Region APJ`})]})})]})}},H={name:`with ShellBarBranding`,args:{branding:(0,P.jsx)(o,{logo:(0,P.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/sap-logo-svg.svg`,alt:`SAP Logo`}),href:`https://ui5.github.io/webcomponents-react/v2/?path=/docs/layouts-floorplans-shellbar--docs`,target:`_blank`,onClick:e=>{console.log(`ShellBarBranding clicked`,e)},children:`ShellBar Branding`})},render(e){return(0,P.jsx)(S,{...e})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
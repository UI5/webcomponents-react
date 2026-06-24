import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./jsx-runtime-O9QVJvLM.js";import{n as r,t as i}from"./Button-1iobftgf.js";import{n as a,t as o}from"./Text-DnICSJOV.js";import{n as s,t as c}from"./Label-DSixdQsn.js";import{C as l,D as u,O as d,T as f,t as p,w as m,x as h}from"./webComponents-B7LRj1E5.js";import{t as g}from"./Avatar-BKbBxnzR.js";import{n as _,t as v}from"./nav-back-DviuTEQk.js";import{n as y,t as b}from"./ShellBar-ClY_cynM.js";import{n as x,t as S}from"./Switch-DR_CkbhD.js";import{n as C,t as w}from"./Tag-BZCyC_u5.js";import{vt as T,yt as E}from"./iframe-DPImPfe0.js";import{i as D,n as O,r as k,t as A}from"./sys-help-C4kri6Zf.js";import{n as j,t as M}from"./Person-CoTXHsgn.js";var N=e({AllFeatures:()=>L,Default:()=>I,EmbeddedBackNavigation:()=>R,NonProductiveInstances:()=>V,ProductiveInstances:()=>B,ShellBarBrandingStory:()=>H,TrialExample:()=>z,__namedExportsOrder:()=>U,default:()=>F}),P,F,I,L,R,z,B,V,H,U,W=t((()=>{j(),k(),v(),A(),E(),r(),p(),s(),d(),m(),x(),C(),a(),y(),P=n(),F={title:`Layouts & Floorplans / ShellBar`,component:b,argTypes:{children:{control:{disable:!0}},logo:{control:{disable:!0}},menuItems:{control:{disable:!0}},profile:{control:{disable:!0}},searchField:{control:{disable:!0}},startButton:{control:{disable:!0}}},args:{primaryTitle:`Shell Bar`,notificationsCount:`10`,showNotifications:!0,logo:(0,P.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/sap-logo-svg.svg`,alt:`SAP Logo`}),profile:(0,P.jsx)(g,{children:(0,P.jsx)(`img`,{src:M,alt:`person-placeholder`})}),startButton:(0,P.jsx)(i,{icon:D,tooltip:`Menu`,accessibleName:`Menu`}),searchField:(0,P.jsx)(l,{showClearIcon:!0,placeholder:`Search Apps, Products`}),children:(0,P.jsx)(f,{text:`Help`,icon:O})},tags:[`package:@ui5/webcomponents-fiori`]},I={},L={args:{showProductSwitch:!0,startButton:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(i,{icon:D,tooltip:`Menu`,accessibleName:`Menu`}),(0,P.jsx)(i,{icon:_,tooltip:`Back`,accessibleName:`Back`})]}),content:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(w,{design:`Set2`,colorScheme:`7`,children:`Trial`}),(0,P.jsx)(o,{children:`30 days remaining`}),(0,P.jsx)(h,{}),(0,P.jsxs)(T,{gap:`0 5px`,alignItems:`Center`,children:[(0,P.jsx)(S,{}),(0,P.jsx)(c,{children:`Try Beta Version`})]})]})}},R={args:{startButton:(0,P.jsx)(i,{icon:_,tooltip:`Back`,accessibleName:`Back`})}},z={args:{content:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(w,{design:`Set2`,colorScheme:`7`,children:`Trial`}),(0,P.jsx)(o,{children:`30 days remaining`})]})}},B={args:{content:(0,P.jsx)(w,{design:`Set2`,colorScheme:`10`,children:`Region EMEA`})},render(e){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(b,{...e}),(0,P.jsx)(b,{...e,content:(0,P.jsx)(w,{design:`Set2`,colorScheme:`10`,children:`Region APJ`})})]})}},V={args:{content:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(w,{design:`Set2`,colorScheme:`8`,children:`Q System`}),(0,P.jsx)(o,{children:`Region EMEA`})]})},render(e){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(b,{...e}),(0,P.jsx)(b,{...e,content:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(w,{design:`Set2`,colorScheme:`8`,children:`Q System`}),(0,P.jsx)(o,{children:`Region APJ`})]})})]})}},H={name:`with ShellBarBranding`,args:{branding:(0,P.jsx)(u,{logo:(0,P.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/sap-logo-svg.svg`,alt:`SAP Logo`}),href:`https://ui5.github.io/webcomponents-react/v2/?path=/docs/layouts-floorplans-shellbar--docs`,target:`_blank`,onClick:e=>{console.log(`ShellBarBranding clicked`,e)},children:`ShellBar Branding`})},render(e){return(0,P.jsx)(b,{...e})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
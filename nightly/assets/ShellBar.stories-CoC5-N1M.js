import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{$f as n,Br as r,Fn as i,Hd as a,Hr as o,In as s,Ir as c,Ld as l,Lr as u,Pr as d,Q as f,Rd as p,Rr as m,Ur as h,Vd as g,Vr as _,Wm as v,cr as y,ep as b,eu as x,ia as S,lr as C,ra as w,tu as T,ul as E}from"./iframe-1UO7ChAy.js";import{i as D,n as O,r as k,t as A}from"./sys-help-xoh0c2C_.js";import{n as j,t as M}from"./Person-DEhGkJ4X.js";var N=t({AllFeatures:()=>L,Default:()=>I,EmbeddedBackNavigation:()=>R,NonProductiveInstances:()=>V,ProductiveInstances:()=>B,ShellBarBrandingStory:()=>H,TrialExample:()=>z,__namedExportsOrder:()=>U,default:()=>F}),P,F,I,L,R,z,B,V,H,U,W=e((()=>{j(),k(),w(),A(),a(),b(),f(),T(),_(),u(),C(),s(),p(),h(),P=v(),F={title:`Layouts & Floorplans / ShellBar`,component:o,argTypes:{children:{control:{disable:!0}},logo:{control:{disable:!0}},menuItems:{control:{disable:!0}},profile:{control:{disable:!0}},searchField:{control:{disable:!0}},startButton:{control:{disable:!0}}},args:{primaryTitle:`Shell Bar`,notificationsCount:`10`,showNotifications:!0,logo:(0,P.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/sap-logo-svg.svg`,alt:`SAP Logo`}),profile:(0,P.jsx)(E,{children:(0,P.jsx)(`img`,{src:M,alt:`person-placeholder`})}),startButton:(0,P.jsx)(n,{icon:D,tooltip:`Menu`,accessibleName:`Menu`}),searchField:(0,P.jsx)(c,{showClearIcon:!0,placeholder:`Search Apps, Products`}),children:(0,P.jsx)(m,{text:`Help`,icon:O})},tags:[`package:@ui5/webcomponents-fiori`]},I={},L={args:{showProductSwitch:!0,startButton:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(n,{icon:D,tooltip:`Menu`,accessibleName:`Menu`}),(0,P.jsx)(n,{icon:S,tooltip:`Back`,accessibleName:`Back`})]}),content:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(i,{design:`Set2`,colorScheme:`7`,children:`Trial`}),(0,P.jsx)(l,{children:`30 days remaining`}),(0,P.jsx)(d,{}),(0,P.jsxs)(g,{gap:`0 5px`,alignItems:`Center`,children:[(0,P.jsx)(y,{}),(0,P.jsx)(x,{children:`Try Beta Version`})]})]})}},R={args:{startButton:(0,P.jsx)(n,{icon:S,tooltip:`Back`,accessibleName:`Back`})}},z={args:{content:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(i,{design:`Set2`,colorScheme:`7`,children:`Trial`}),(0,P.jsx)(l,{children:`30 days remaining`})]})}},B={args:{content:(0,P.jsx)(i,{design:`Set2`,colorScheme:`10`,children:`Region EMEA`})},render(e){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(o,{...e}),(0,P.jsx)(o,{...e,content:(0,P.jsx)(i,{design:`Set2`,colorScheme:`10`,children:`Region APJ`})})]})}},V={args:{content:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(i,{design:`Set2`,colorScheme:`8`,children:`Q System`}),(0,P.jsx)(l,{children:`Region EMEA`})]})},render(e){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(o,{...e}),(0,P.jsx)(o,{...e,content:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(i,{design:`Set2`,colorScheme:`8`,children:`Q System`}),(0,P.jsx)(l,{children:`Region APJ`})]})})]})}},H={name:`with ShellBarBranding`,args:{branding:(0,P.jsx)(r,{logo:(0,P.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/sap-logo-svg.svg`,alt:`SAP Logo`}),href:`https://ui5.github.io/webcomponents-react/v2/?path=/docs/layouts-floorplans-shellbar--docs`,target:`_blank`,onClick:e=>{console.log(`ShellBarBranding clicked`,e)},children:`ShellBar Branding`})},render(e){return(0,P.jsx)(o,{...e})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
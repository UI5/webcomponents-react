import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{Bd as n,Bf as r,Cu as i,Fu as a,Iu as o,Jm as s,Ml as c,Nl as l,Su as u,Ud as d,Xd as f,Xu as p,Yu as m,np as h,tp as g,u as _,vp as v,yp as y,zd as b,zf as x}from"./iframe-Cl8gZQji.js";var S=t({Default:()=>T,WithCustomHeader:()=>E,__namedExportsOrder:()=>D,default:()=>w}),C,w,T,E,D,O=e((()=>{y(),r(),_(),n(),h(),p(),o(),i(),l(),C=s(),w={title:`Layouts & Floorplans / Panel`,component:c,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:`Panel`},tags:[`package:@ui5/webcomponents`]},T={render(e){return(0,C.jsxs)(c,{...e,children:[(0,C.jsx)(u,{level:x.H3,children:`Basic Panel`}),(0,C.jsx)(b,{children:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`})]})}},E={args:{collapsed:!0,header:(0,C.jsxs)(d,{fitContainer:!0,style:{gap:`0.25rem`},alignItems:f.Center,children:[(0,C.jsx)(u,{level:x.H2,children:`Countries`}),(0,C.jsx)(`span`,{style:{flexGrow:1}}),(0,C.jsx)(g,{children:`Edit`}),(0,C.jsx)(g,{design:v.Negative,children:`Remove`}),(0,C.jsx)(g,{design:v.Emphasized,children:`Add`})]})},render(e){return(0,C.jsx)(c,{...e,children:(0,C.jsxs)(m,{children:[(0,C.jsx)(a,{description:`Language: Spanish`,text:`Argentina`}),(0,C.jsx)(a,{description:`Language: Portuguese`,text:`Portugal`}),(0,C.jsx)(a,{description:`Language: Spanish`,text:`Mexico`}),(0,C.jsx)(a,{description:`Language: Portuguese`,text:`Brazil`}),(0,C.jsx)(a,{description:`Language: German`,text:`Germany`}),(0,C.jsx)(a,{description:`Language: English`,text:`Australia`}),(0,C.jsx)(a,{description:`Language: German`,text:`Austria`})]})})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Panel {...args}>
        <Title level={TitleLevel.H3}>Basic Panel</Title>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
      </Panel>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    collapsed: true,
    header: <FlexBox fitContainer style={{
      gap: '0.25rem'
    }} alignItems={FlexBoxAlignItems.Center}>
        <Title level={TitleLevel.H2}>Countries</Title>
        <span style={{
        flexGrow: 1
      }} />
        <Button>Edit</Button>
        <Button design={ButtonDesign.Negative}>Remove</Button>
        <Button design={ButtonDesign.Emphasized}>Add</Button>
      </FlexBox>
  },
  render(args) {
    return <Panel {...args}>
        <List>
          <ListItemStandard description="Language: Spanish" text="Argentina" />
          <ListItemStandard description="Language: Portuguese" text="Portugal" />
          <ListItemStandard description="Language: Spanish" text="Mexico" />
          <ListItemStandard description="Language: Portuguese" text="Brazil" />
          <ListItemStandard description="Language: German" text="Germany" />
          <ListItemStandard description="Language: English" text="Australia" />
          <ListItemStandard description="Language: German" text="Austria" />
        </List>
      </Panel>;
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`WithCustomHeader`]}));O();export{T as Default,E as WithCustomHeader,D as __namedExportsOrder,w as default,O as n,S as t};
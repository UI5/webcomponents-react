import{n as e,r as t}from"./chunk-jRWAZmH_.js";import{Bd as n,Cu as r,Gf as i,Iu as a,Kd as o,Kf as s,Lu as c,Ml as l,Nl as u,Su as d,Tp as f,Vd as p,Xm as m,Xu as h,Zu as g,cp as _,ef as v,sp as y,u as b,wp as x}from"./iframe-ChlYpN_G.js";var S=t({Default:()=>T,WithCustomHeader:()=>E,__namedExportsOrder:()=>D,default:()=>w}),C,w,T,E,D,O=e((()=>{f(),s(),b(),p(),_(),g(),c(),r(),u(),C=m(),w={title:`Layouts & Floorplans / Panel`,component:l,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:`Panel`},tags:[`package:@ui5/webcomponents`]},T={render(e){return(0,C.jsxs)(l,{...e,children:[(0,C.jsx)(d,{level:i.H3,children:`Basic Panel`}),(0,C.jsx)(n,{children:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`})]})}},E={args:{collapsed:!0,header:(0,C.jsxs)(o,{fitContainer:!0,style:{gap:`0.25rem`},alignItems:v.Center,children:[(0,C.jsx)(d,{level:i.H2,children:`Countries`}),(0,C.jsx)(`span`,{style:{flexGrow:1}}),(0,C.jsx)(y,{children:`Edit`}),(0,C.jsx)(y,{design:x.Negative,children:`Remove`}),(0,C.jsx)(y,{design:x.Emphasized,children:`Add`})]})},render(e){return(0,C.jsx)(l,{...e,children:(0,C.jsxs)(h,{children:[(0,C.jsx)(a,{description:`Language: Spanish`,text:`Argentina`}),(0,C.jsx)(a,{description:`Language: Portuguese`,text:`Portugal`}),(0,C.jsx)(a,{description:`Language: Spanish`,text:`Mexico`}),(0,C.jsx)(a,{description:`Language: Portuguese`,text:`Brazil`}),(0,C.jsx)(a,{description:`Language: German`,text:`Germany`}),(0,C.jsx)(a,{description:`Language: English`,text:`Australia`}),(0,C.jsx)(a,{description:`Language: German`,text:`Austria`})]})})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
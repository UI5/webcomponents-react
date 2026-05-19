import{a as e,i as t}from"./preload-helper-DbRxMUml.js";import{$u as n,Fm as r,Gu as i,Hf as a,Hl as o,Mu as s,Nu as c,Qd as l,Qu as u,Rd as d,Ul as f,Vf as p,Wd as m,Wu as h,bp as g,np as _,rp as v,u as y,yp as b,zd as x}from"./iframe-BaquDKMO.js";var S=e({Default:()=>T,WithCustomHeader:()=>E,__namedExportsOrder:()=>D,default:()=>w}),C,w,T,E,D,O=t((()=>{g(),a(),y(),x(),v(),n(),i(),c(),f(),C=r(),w={title:`Layouts & Floorplans / Panel`,component:o,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:`Panel`},tags:[`package:@ui5/webcomponents`]},T={render(e){return(0,C.jsxs)(o,{...e,children:[(0,C.jsx)(s,{level:p.H3,children:`Basic Panel`}),(0,C.jsx)(d,{children:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`})]})}},E={args:{collapsed:!0,header:(0,C.jsxs)(m,{fitContainer:!0,style:{gap:`0.25rem`},alignItems:l.Center,children:[(0,C.jsx)(s,{level:p.H2,children:`Countries`}),(0,C.jsx)(`span`,{style:{flexGrow:1}}),(0,C.jsx)(_,{children:`Edit`}),(0,C.jsx)(_,{design:b.Negative,children:`Remove`}),(0,C.jsx)(_,{design:b.Emphasized,children:`Add`})]})},render(e){return(0,C.jsx)(o,{...e,children:(0,C.jsxs)(u,{children:[(0,C.jsx)(h,{description:`Language: Spanish`,text:`Argentina`}),(0,C.jsx)(h,{description:`Language: Portuguese`,text:`Portugal`}),(0,C.jsx)(h,{description:`Language: Spanish`,text:`Mexico`}),(0,C.jsx)(h,{description:`Language: Portuguese`,text:`Brazil`}),(0,C.jsx)(h,{description:`Language: German`,text:`Germany`}),(0,C.jsx)(h,{description:`Language: English`,text:`Australia`}),(0,C.jsx)(h,{description:`Language: German`,text:`Austria`})]})})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
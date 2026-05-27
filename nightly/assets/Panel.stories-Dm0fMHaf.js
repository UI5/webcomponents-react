import{a as e,i as t}from"./preload-helper-usAeo7Bx.js";import{$l as n,Fp as r,Hu as i,Ip as a,Jd as o,Ql as s,Uu as c,Yd as l,cd as u,cf as d,ed as f,ef as p,ip as m,ld as h,lh as g,rp as _,td as v,u as y,vp as b,yp as x}from"./iframe-k3VOpMSv.js";var S=e({Default:()=>T,WithCustomHeader:()=>E,__namedExportsOrder:()=>D,default:()=>w}),C,w,T,E,D,O=t((()=>{a(),m(),y(),l(),x(),h(),v(),c(),n(),C=g(),w={title:`Layouts & Floorplans / Panel`,component:s,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:`Panel`},tags:[`package:@ui5/webcomponents`]},T={render(e){return(0,C.jsxs)(s,{...e,children:[(0,C.jsx)(i,{level:_.H3,children:`Basic Panel`}),(0,C.jsx)(o,{children:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`})]})}},E={args:{collapsed:!0,header:(0,C.jsxs)(p,{fitContainer:!0,style:{gap:`0.25rem`},alignItems:d.Center,children:[(0,C.jsx)(i,{level:_.H2,children:`Countries`}),(0,C.jsx)(`span`,{style:{flexGrow:1}}),(0,C.jsx)(b,{children:`Edit`}),(0,C.jsx)(b,{design:r.Negative,children:`Remove`}),(0,C.jsx)(b,{design:r.Emphasized,children:`Add`})]})},render(e){return(0,C.jsx)(s,{...e,children:(0,C.jsxs)(u,{children:[(0,C.jsx)(f,{description:`Language: Spanish`,text:`Argentina`}),(0,C.jsx)(f,{description:`Language: Portuguese`,text:`Portugal`}),(0,C.jsx)(f,{description:`Language: Spanish`,text:`Mexico`}),(0,C.jsx)(f,{description:`Language: Portuguese`,text:`Brazil`}),(0,C.jsx)(f,{description:`Language: German`,text:`Germany`}),(0,C.jsx)(f,{description:`Language: English`,text:`Australia`}),(0,C.jsx)(f,{description:`Language: German`,text:`Austria`})]})})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
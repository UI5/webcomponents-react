import{a as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./jsx-runtime-BBQGix-2.js";import{l as r,u as i}from"./Button-DoihTN3V.js";import{n as a,t as o}from"./Button-DJCxsmzP.js";import{i as s,r as c}from"./Title-C2_zHLfc.js";import{s as l}from"./FlexBoxWrap-D5LV9P_x.js";import{n as u,t as d}from"./Text-Bse3bzyq.js";import{i as f,n as p,r as m,t as h}from"./ListItemStandard-BDOif_2s.js";import{n as g,t as _}from"./Title-D0CXss6x.js";import{at as v,ot as y}from"./webComponents-YXBfU2u-.js";import{u as b,vt as x}from"./iframe-Cm0q2Pzh.js";var S=e({Default:()=>T,WithCustomHeader:()=>E,__namedExportsOrder:()=>D,default:()=>w}),C,w,T,E,D,O=t((()=>{i(),s(),b(),u(),a(),f(),p(),g(),y(),C=n(),w={title:`Layouts & Floorplans / Panel`,component:v,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:`Panel`},tags:[`package:@ui5/webcomponents`]},T={render(e){return(0,C.jsxs)(v,{...e,children:[(0,C.jsx)(_,{level:c.H3,children:`Basic Panel`}),(0,C.jsx)(d,{children:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`})]})}},E={args:{collapsed:!0,header:(0,C.jsxs)(x,{fitContainer:!0,style:{gap:`0.25rem`},alignItems:l.Center,children:[(0,C.jsx)(_,{level:c.H2,children:`Countries`}),(0,C.jsx)(`span`,{style:{flexGrow:1}}),(0,C.jsx)(o,{children:`Edit`}),(0,C.jsx)(o,{design:r.Negative,children:`Remove`}),(0,C.jsx)(o,{design:r.Emphasized,children:`Add`})]})},render(e){return(0,C.jsx)(v,{...e,children:(0,C.jsxs)(m,{children:[(0,C.jsx)(h,{description:`Language: Spanish`,text:`Argentina`}),(0,C.jsx)(h,{description:`Language: Portuguese`,text:`Portugal`}),(0,C.jsx)(h,{description:`Language: Spanish`,text:`Mexico`}),(0,C.jsx)(h,{description:`Language: Portuguese`,text:`Brazil`}),(0,C.jsx)(h,{description:`Language: German`,text:`Germany`}),(0,C.jsx)(h,{description:`Language: English`,text:`Australia`}),(0,C.jsx)(h,{description:`Language: German`,text:`Austria`})]})})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
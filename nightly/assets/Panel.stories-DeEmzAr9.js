import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{l as r,u as i}from"./Button-CYKpg6zM.js";import{n as a,t as o}from"./Button-CuLaU2xr.js";import{i as s,r as c}from"./Title-DSVhdNr8.js";import{l,n as u,t as d,u as f}from"./FlexBox-rgiK-gZN.js";import{n as p,t as m}from"./Text-AZE--NeU.js";import{n as h,t as g}from"./List-cBwfqBWO.js";import{n as _,t as v}from"./ListItemStandard-B90NQn_d.js";import{n as y,t as b}from"./Title-BkQWmHky.js";import{n as x,t as S}from"./Panel-pZChRNRV.js";var C=t({Default:()=>E,WithCustomHeader:()=>D,__namedExportsOrder:()=>O,default:()=>T}),w,T,E,D,O;function k(){return(k=e((()=>{i(),s(),u(),f(),p(),a(),h(),_(),y(),x(),w=n(),T={title:`Layouts & Floorplans / Panel`,component:S,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:`Panel`},tags:[`package:@ui5/webcomponents`]},E={render(e){return(0,w.jsxs)(S,{...e,children:[(0,w.jsx)(b,{level:c.H3,children:`Basic Panel`}),(0,w.jsx)(m,{children:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`})]})}},D={args:{collapsed:!0,header:(0,w.jsxs)(d,{fitContainer:!0,style:{gap:`0.25rem`},alignItems:l.Center,children:[(0,w.jsx)(b,{level:c.H2,children:`Countries`}),(0,w.jsx)(`span`,{style:{flexGrow:1}}),(0,w.jsx)(o,{children:`Edit`}),(0,w.jsx)(o,{design:r.Negative,children:`Remove`}),(0,w.jsx)(o,{design:r.Emphasized,children:`Add`})]})},render(e){return(0,w.jsx)(S,{...e,children:(0,w.jsxs)(g,{children:[(0,w.jsx)(v,{description:`Language: Spanish`,text:`Argentina`}),(0,w.jsx)(v,{description:`Language: Portuguese`,text:`Portugal`}),(0,w.jsx)(v,{description:`Language: Spanish`,text:`Mexico`}),(0,w.jsx)(v,{description:`Language: Portuguese`,text:`Brazil`}),(0,w.jsx)(v,{description:`Language: German`,text:`Germany`}),(0,w.jsx)(v,{description:`Language: English`,text:`Australia`}),(0,w.jsx)(v,{description:`Language: German`,text:`Austria`})]})})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Default`,`WithCustomHeader`]})))()}export{k as i,C as n,D as r,E as t};
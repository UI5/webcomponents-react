import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-CNp2Ms8r.js";import{a as n,o as r}from"./src-k2MZJqTT.js";import{r as i}from"./react-CSLkFeD8.js";import{_ as a,m as o,o as s,p as c,s as l,t as u}from"./components-B3yR3l-F.js";import{_ as d,d as f,o as p,r as m,u as h}from"./blocks-BObCibHN.js";import{n as g,t as _}from"./SubcomponentsSection-DoWmTHU2.js";import{Default as v,LimitedAreas as y,Nested as b,n as x,t as S}from"./SplitterLayout.stories-Dnl0yANK.js";function C(e){let t={code:`code`,h2:`h2`,h3:`h3`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...i(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(f,{of:S}),`
`,(0,T.jsx)(l,{of:S,subComponents:[`SplitterElement`]}),`
`,(0,T.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,T.jsx)(m,{of:v}),`
`,(0,T.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,T.jsx)(c,{of:v}),`
`,(0,T.jsx)(t.h3,{id:`splitterlayoutoptions`,children:`SplitterLayoutOptions`}),`
`,(0,T.jsxs)(t.table,{children:[(0,T.jsx)(t.thead,{children:(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.th,{children:`Property`}),(0,T.jsx)(t.th,{children:`Type`}),(0,T.jsx)(t.th,{children:`Description`})]})}),(0,T.jsxs)(t.tbody,{children:[(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`resetOnSizeChange`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsxs)(t.td,{children:[`Defines whether the `,(0,T.jsx)(t.code,{children:`SplitterLayout`}),` should be reset when its size changes depending on the orientation.`]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`resetOnChildrenChange`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`boolean`})}),(0,T.jsxs)(t.td,{children:[`Defines whether the `,(0,T.jsx)(t.code,{children:`SplitterLayout`}),` should be reset when its `,(0,T.jsx)(t.code,{children:`children`}),` change.`]})]}),(0,T.jsxs)(t.tr,{children:[(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`resetOnCustomDepsChange`})}),(0,T.jsx)(t.td,{children:(0,T.jsx)(t.code,{children:`React.DependencyList`})}),(0,T.jsxs)(t.td,{children:[`Defines a list of dependencies that trigger a reset of the `,(0,T.jsx)(t.code,{children:`SplitterLayout`}),` when they are changed.`]})]})]})]}),`
`,(0,T.jsx)(t.h2,{id:`splitterlayout-with-non-resizable-areas--areas-with-min-width`,children:`SplitterLayout with non-resizable areas & areas with min-width`}),`
`,(0,T.jsx)(m,{of:y,sourceState:`none`}),`
`,(0,T.jsxs)(`details`,{children:[(0,T.jsx)(`summary`,{children:`Show Code`}),(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-tsx`,children:`function SplitterElementContent({ text, background = 'transparent' }) {
  return (
    <FlexBox style={{ height: '100%', width: '100%', background }} alignItems="Center" justifyContent="Center">
      <Text>{text}</Text>
    </FlexBox>
  );
}

function SplitterLayoutComponent(props) {
  return (
    <SplitterLayout {...props}>
      <SplitterElement size="10%">
        <SplitterElementContent text="Content 1 - (size: 10%)" background="cadetblue" />
      </SplitterElement>
      <SplitterElement>
        <SplitterElementContent text="Content 2" background="skyblue" />
      </SplitterElement>
      <SplitterElement minSize={200}>
        <SplitterElementContent text="Content 3 (minSize: 200)" background="lightblue" />
      </SplitterElement>
      <SplitterElement>
        <SplitterElementContent text="Content 4" background="paleturquoise" />
      </SplitterElement>
      <SplitterElement>
        <SplitterElementContent text="Content 5" background="lightskyblue" />
      </SplitterElement>
      <SplitterElement resizable={false} size="150px">
        <SplitterElementContent text="Content 6 (not resizable - size: 150px)" background="powderblue" />
      </SplitterElement>
      <SplitterElement>
        <SplitterElementContent text="Content 7" background="aliceblue" />
      </SplitterElement>
      <SplitterElement>
        <SplitterElementContent text="Content 8" background="lightsteelblue" />
      </SplitterElement>
    </SplitterLayout>
  );
}
`})})]}),`
`,(0,T.jsx)(t.h2,{id:`nested-splitterlayouts`,children:`Nested SplitterLayouts`}),`
`,(0,T.jsx)(m,{of:b}),`
`,(0,T.jsx)(h,{children:_}),`
`,(0,T.jsx)(t.h2,{id:`splitterelement`,children:`SplitterElement`}),`
`,(0,T.jsx)(p,{of:n}),`
`,(0,T.jsx)(o,{metaOf:S,of:n}),`
`,(0,T.jsx)(s,{})]})}function w(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=t(),a(),u(),d(),x(),g(),r()}))();export{w as default};
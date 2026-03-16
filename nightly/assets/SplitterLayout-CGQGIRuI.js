import{j as e}from"./iframe-BIP38Qmu.js";import{useMDXComponents as p}from"./index-CCzfQ4AK.js";import{A as d}from"./ArgTypesWithNote-H7KWc-px.js";import{C as a}from"./ControlsWithNote-DlY6D4bI.js";import{D as m}from"./DocsHeader-D4aiXO6T.js";import{F as h}from"./Footer-DAbghHc6.js";import"./CommandsAndQueries-BAg-w2Ve.js";import"./PageNotFound-z2fC1f6d.js";import{M as c,C as r,a as x,D as j}from"./blocks-69-jnurL.js";import{C as i,D as o,L as u,N as S,S as s}from"./SplitterLayout.stories-CqCeLiBY.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_7tcSj3.js";import"./information-Cf_JR6Aw.js";import"./sys-enter-2-D5AeNUHf.js";import"./alert-CMm7pEpj.js";import"./Tag-D0zcjL-3.js";import"./index-BEp_fWNn.js";import"./index-BlYNx0T3.js";import"./Link-B13MM4G6.js";import"./copy-q2hIMu45.js";import"./copy-nvOf1vVL.js";import"./GitHub-Mark-vHfAubj_.js";import"./TableOfContent-CAcSs8TN.js";import"./index-pu7JlX44.js";import"./index-C0fOqYC4.js";import"./index-Du9D3QZW.js";import"./index-DXmoRv88.js";import"./index-ZEQXSIQn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BrBZ3oM5.js";import"./addCustomCSSWithScoping-3IpFFLGa.js";import"./Illustrations-BEksg9v0.js";import"./i18n-defaults-CFWtSmu6.js";import"./vertical-grip-B19cdumO.js";import"./useIsRTL-yBtQpEip.js";import"./useCurrentTheme-CMhG7RYX.js";import"./debounce-D7W5PopO.js";import"./index-BPqgJU8W.js";import"./SegmentedButton-C8xvUBR3.js";function l(n){const t={code:"code",h2:"h2",h3:"h3",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:i}),`
`,e.jsx(m,{of:i,subComponents:["SplitterElement"]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(t.h3,{id:"splitterlayoutoptions",children:"SplitterLayoutOptions"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Property"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"resetOnSizeChange"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsxs(t.td,{children:["Defines whether the ",e.jsx(t.code,{children:"SplitterLayout"})," should be reset when its size changes depending on the orientation."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"resetOnChildrenChange"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsxs(t.td,{children:["Defines whether the ",e.jsx(t.code,{children:"SplitterLayout"})," should be reset when its ",e.jsx(t.code,{children:"children"})," change."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"resetOnCustomDepsChange"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"React.DependencyList"})}),e.jsxs(t.td,{children:["Defines a list of dependencies that trigger a reset of the ",e.jsx(t.code,{children:"SplitterLayout"})," when they are changed."]})]})]})]}),`
`,e.jsx(t.h2,{id:"splitterlayout-with-non-resizable-areas--areas-with-min-width",children:"SplitterLayout with non-resizable areas & areas with min-width"}),`
`,e.jsx(r,{of:u,sourceState:"none"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show Code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`function SplitterElementContent({ text, background = 'transparent' }) {
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
`,e.jsx(t.h2,{id:"nested-splitterlayouts",children:"Nested SplitterLayouts"}),`
`,e.jsx(r,{of:S}),`
`,e.jsx(x,{children:C}),`
`,e.jsx(t.h2,{id:"splitterelement",children:"SplitterElement"}),`
`,e.jsx(j,{of:s}),`
`,e.jsx(d,{metaOf:i,of:s}),`
`,e.jsx(h,{})]})}function oe(n={}){const{wrapper:t}={...p(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{oe as default};

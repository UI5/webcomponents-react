import{j as e}from"./iframe-BCLHYJgX.js";import{useMDXComponents as d}from"./index-6uEU24p4.js";import{A as p}from"./ArgTypesWithNote-DSwMEDwk.js";import{C as a}from"./ControlsWithNote-DsJu2eyI.js";import{D as h}from"./DocsHeader-DskdD-rz.js";import{F as m}from"./CommandsAndQueries-CO5L47ah.js";import{M as c,C as r,a as x,D as j}from"./blocks-Bs_XR2wS.js";import{C as i,D as o,L as u,N as S,S as s}from"./SplitterLayout.stories-C92qcgD5.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BaEPddIL.js";import"./information-ddn69F5R.js";import"./sys-enter-2-Clp8AE05.js";import"./alert-bXCG-ij3.js";import"./Tag-CyCEbX-5.js";import"./index-ryNQsvjz.js";import"./index-BK_ZHavx.js";import"./Link-Bn4h5ljW.js";import"./copy-DbeI06jm.js";import"./copy-C8KGHNvK.js";import"./GitHub-Mark-Dw6a9esS.js";import"./TableOfContent-C5WsUPZq.js";import"./index-Cok_5_tC.js";import"./index-Cm3V18u1.js";import"./index-CCx-58F9.js";import"./index-Bu9oHGEl.js";import"./index-_pVZ4H5C.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoVEwdyY.js";import"./addCustomCSSWithScoping-DNzt28js.js";import"./vertical-grip-Bvmir1kx.js";import"./useIsRTL-ByUnN_uG.js";import"./useCurrentTheme-BlqUDt0t.js";import"./debounce-D7W5PopO.js";import"./index-BKITVOdn.js";import"./SegmentedButton-BMBrktYn.js";function l(n){const t={code:"code",h2:"h2",h3:"h3",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:i}),`
`,e.jsx(h,{of:i,subComponents:["SplitterElement"]}),`
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
`,e.jsx(p,{metaOf:i,of:s}),`
`,e.jsx(m,{})]})}function te(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{te as default};

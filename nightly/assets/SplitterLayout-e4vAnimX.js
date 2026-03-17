import{j as e}from"./iframe-C_hHAafN.js";import{useMDXComponents as p}from"./index-D3HSzI5H.js";import{A as d}from"./ArgTypesWithNote-BqgSXMWz.js";import{C as a}from"./ControlsWithNote-6SvsGtkD.js";import{D as m}from"./DocsHeader-Bk_TsqI1.js";import{F as h}from"./Footer-Cs4jbAjg.js";import"./CommandsAndQueries-9eolN_GD.js";import"./PageNotFound-C7jxbIgP.js";import{M as c,C as r,a as x,D as j}from"./blocks-DkbtP44I.js";import{C as i,D as o,L as u,N as S,S as s}from"./SplitterLayout.stories-D9yyUwWx.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3QVLAy4g.js";import"./information-BzxR6BB4.js";import"./sys-enter-2-Bb8fTRXf.js";import"./alert-CfcbMAjf.js";import"./Tag-eVGHGbIg.js";import"./index-BmCCqQCC.js";import"./index-BKTg9IVY.js";import"./Link-SYOek4pb.js";import"./copy-B6dl0gLT.js";import"./copy-RggualJu.js";import"./GitHub-Mark-DN84urKt.js";import"./TableOfContent--xyEPkZT.js";import"./index-DDQ0aIRQ.js";import"./index-DaMaB5I7.js";import"./index-nRsHzHP6.js";import"./index-DqhVaTSX.js";import"./index-C7mqYyTc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DmUXk235.js";import"./addCustomCSSWithScoping-D9hLtcaz.js";import"./Illustrations-CNZ22cEs.js";import"./i18n-defaults-CFWtSmu6.js";import"./vertical-grip-DNCmlEit.js";import"./useIsRTL-B_cTxHD6.js";import"./useCurrentTheme-qRko6oTp.js";import"./debounce-D7W5PopO.js";import"./index-BXd3-qZ5.js";import"./SegmentedButton-BO3FBYdW.js";function l(n){const t={code:"code",h2:"h2",h3:"h3",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:i}),`
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

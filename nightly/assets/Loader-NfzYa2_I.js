import{j as e}from"./iframe-CmEyKRpD.js";import{useMDXComponents as s}from"./index-BFnFrbBZ.js";import{M as d,C as o}from"./blocks-DsGvGcEm.js";import"./Tag-mVH7vrSv.js";import"./index-DfQFYAIc.js";import{C as m}from"./ControlsWithNote-GNRO6riy.js";import{D as p}from"./DocsHeader-z5tOjcpN.js";import{F as l}from"./CommandsAndQueries-D0beJAEb.js";import{C as i,D as r,W as x}from"./Loader.stories-DPcA22Ai.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Dw0vaUoh.js";import"./sys-enter-2-BCiCiomL.js";import"./alert-ClWdEWiH.js";import"./index-DEFXD6K8.js";import"./index-CSRfU7vi.js";import"./Link-D1koUNpv.js";import"./copy-fXIxAEdZ.js";import"./copy-BKqOupip.js";import"./GitHub-Mark-GnivgV0-.js";import"./TableOfContent-BxBIlvnm.js";import"./index-BzwroZCy.js";import"./index-Cd1X9zdd.js";import"./index-BlD9QPif.js";import"./index-DbVfD_Wp.js";import"./index-dQ_ejieb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-eGz8eTqY.js";import"./addCustomCSSWithScoping-DZlJgGLS.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(p,{of:i}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(m,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"card-with-loader",children:"Card with Loader"}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const LoaderComponent = () => {
  const initialText =
    'This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.';
  const [text, setText] = useState(initialText);
  const [loading, setLoading] = useState(false);
  const onHeaderClick = () => {
    setLoading(true);
  };
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setText((prev) => (prev === initialText ? 'Updated (⌐■_■)' : initialText));
        setLoading(false);
      }, 5000);
    }
  }, [loading]);
  return (
    <Card
      header={
        <CardHeader
          titleText="Click the header to update the text below."
          interactive
          avatar={<Icon name="activate" />}
          onClick={onHeaderClick}
        />
      }
      style={{ width: '400px' }}
    >
      <FlexBox direction={FlexBoxDirection.Column}>
        {loading && <Loader />}
        <Text style={spacing.sapUiContentPadding}>{text}</Text>
      </FlexBox>
    </Card>
  );
};
`})}),`
`,e.jsx(l,{})]})}function R(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{R as default};

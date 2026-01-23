import{j as e}from"./iframe-NmUBSsgx.js";import{useMDXComponents as s}from"./index-CRhoqEbg.js";import{M as d,C as o}from"./blocks-DTOICRIr.js";import"./Tag-CGvSEzjs.js";import"./index-_FB6i7Kc.js";import{C as m}from"./ControlsWithNote-DfWYygL2.js";import{D as p}from"./DocsHeader-B-EO8Eqs.js";import{F as l}from"./CommandsAndQueries-B283QW5b.js";import{C as i,D as r,W as x}from"./Loader.stories-31fpBty7.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BxntQ5Ez.js";import"./sys-enter-2--B3M0XKZ.js";import"./alert-b59nRps9.js";import"./index-IPiTIICp.js";import"./index-BNsY5djp.js";import"./Link-O7CbLP92.js";import"./copy-Dcsra1dO.js";import"./copy-GTpWjg4q.js";import"./GitHub-Mark-HytzatKk.js";import"./TableOfContent-qKvmhN4-.js";import"./index-C0Tl3YXX.js";import"./index-b9onOzBF.js";import"./index-DKTuqk4i.js";import"./index-_nSLzRwo.js";import"./index-BOB0mZMq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vtZivBS9.js";import"./addCustomCSSWithScoping-D_Idq7DT.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

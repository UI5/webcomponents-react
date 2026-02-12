import{j as e}from"./iframe-DK_3t7HQ.js";import{useMDXComponents as s}from"./index-Bn4DIwe1.js";import{M as d,C as o}from"./blocks-BYCX_D4a.js";import"./Tag-CMm3ArFn.js";import"./index-DM6dIB46.js";import{C as m}from"./ControlsWithNote-B-eT4P9R.js";import{D as p}from"./DocsHeader-D3DJ0Uby.js";import{F as l}from"./CommandsAndQueries-8GqG6vck.js";import{C as i,D as r,W as x}from"./Loader.stories-B3rjcXwO.js";import"./preload-helper-PPVm8Dsz.js";import"./information-MEtG0nZR.js";import"./sys-enter-2-DcwCthWV.js";import"./alert-CP9vtKnc.js";import"./index-DGhVTpl9.js";import"./index-BD65A0G0.js";import"./Link-s9SylKhD.js";import"./copy-ChDGHLIN.js";import"./copy-Cen_7za9.js";import"./GitHub-Mark-8Lbicbrm.js";import"./TableOfContent-B9G4Qsdi.js";import"./index-DcvukCsl.js";import"./index-W3t_MBGP.js";import"./index-BLsgqlPC.js";import"./index-Bw6wQW8K.js";import"./index-BlpaDNQk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyNtnc-C.js";import"./addCustomCSSWithScoping-BS7bnaiL.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

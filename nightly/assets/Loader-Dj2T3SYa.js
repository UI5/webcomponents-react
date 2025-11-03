import{j as e}from"./iframe-DYmejECO.js";import{useMDXComponents as s}from"./index-9gDZjqLB.js";import{M as d,C as o}from"./blocks-WpvHKkxz.js";import"./Tag-BqbQuhLk.js";import"./index-B5pjKVih.js";import{C as m}from"./ControlsWithNote-DKcmz9Y6.js";import{D as p}from"./DocsHeader-BbSMCFfB.js";import{F as l}from"./CommandsAndQueries-BUFKZ5oS.js";import{C as i,D as r,W as x}from"./Loader.stories-CcUYWisD.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DDszVPcm.js";import"./sys-enter-2-DGk9QDRk.js";import"./alert-B5ckm3Ge.js";import"./index-E0O-rqDf.js";import"./index-D_-3_YTN.js";import"./Link-FVvXEWOc.js";import"./copy-C5FDM_IK.js";import"./copy-Za-_Z-Tq.js";import"./GitHub-Mark-wNehAYyG.js";import"./TableOfContent-BUGWyTUo.js";import"./index-DtSXtxpp.js";import"./index-Cq6cdgcL.js";import"./index-CQOsAJId.js";import"./index-B1aVKp_Z.js";import"./index-CHQEcSbZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6DutTHa.js";import"./addCustomCSSWithScoping-DW_smYaa.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

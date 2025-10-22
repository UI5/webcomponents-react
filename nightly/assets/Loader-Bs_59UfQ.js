import{j as e}from"./iframe-N-CkNuQp.js";import{useMDXComponents as s}from"./index-vMZrjKLN.js";import{M as d,C as o}from"./blocks-BlmowjXe.js";import"./Tag-BjR1DXbQ.js";import"./index-C6U4q-s3.js";import{C as m}from"./ControlsWithNote-KeRnuhUA.js";import{D as p}from"./DocsHeader-C82MS2YP.js";import{F as l}from"./CommandsAndQueries-C649emYA.js";import{C as i,D as r,W as x}from"./Loader.stories-DpV2NL8n.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DXCMx7jp.js";import"./sys-enter-2-DJK47xX9.js";import"./alert-DxAb-ai_.js";import"./index-CnaiImML.js";import"./index-DbFvQ9Ev.js";import"./Link-DUQLkHF0.js";import"./copy-BYr8GFMC.js";import"./copy-a5vlqc1O.js";import"./GitHub-Mark-DR0dbg4N.js";import"./TableOfContent-BnP61JFB.js";import"./index-Dctc1ZtL.js";import"./index-Cfq8WB4R.js";import"./index-Bw-Px9rd.js";import"./index-nkckj2JT.js";import"./index-CNxEFs14.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIbW1rrN.js";import"./addCustomCSSWithScoping-h_aYe486.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

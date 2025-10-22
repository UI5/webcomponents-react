import{j as e}from"./iframe-Cs5gvioi.js";import{useMDXComponents as s}from"./index-BtKDOpat.js";import{M as d,C as o}from"./blocks-BcK5AE3G.js";import"./Tag-D4RJrwN-.js";import"./index-CiQvF52b.js";import{C as m}from"./ControlsWithNote-CVzbCgFR.js";import{D as p}from"./DocsHeader-5EwFpeNv.js";import{F as l}from"./CommandsAndQueries-BdMbFe6n.js";import{C as i,D as r,W as x}from"./Loader.stories-uzlz7MvQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C2H5qqQk.js";import"./sys-enter-2-DnVNaHmP.js";import"./alert-Bc-gjyRb.js";import"./index-BxdMkIQq.js";import"./index-Ccaj5Czc.js";import"./Link-EUC5ZRxP.js";import"./copy-C3lRnZM0.js";import"./copy-DKGYESSv.js";import"./GitHub-Mark-CFZS7RmZ.js";import"./TableOfContent-QYKXWyPB.js";import"./index-BPDq8Cwl.js";import"./index-BKjvzOpn.js";import"./index-D8h8jAY6.js";import"./index-DYp5aNvA.js";import"./index-oQYl8gvD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D_r_w5Dj.js";import"./addCustomCSSWithScoping-CRaSmViC.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

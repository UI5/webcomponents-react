import{j as e}from"./iframe-CHtLWowq.js";import{useMDXComponents as s}from"./index-feVj8Ixc.js";import{M as d,C as o}from"./blocks-nN5rw7aP.js";import"./Tag-C6iX9S_m.js";import"./index-ByEvImQf.js";import{C as m}from"./ControlsWithNote-CcP009dO.js";import{D as p}from"./DocsHeader-C0pC-nx0.js";import{F as l}from"./CommandsAndQueries-DR5czvWY.js";import{C as i,D as r,W as x}from"./Loader.stories-Fid944_g.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CgT5QDDH.js";import"./sys-enter-2-X-uLXTXK.js";import"./alert-BD_DwGQA.js";import"./index-Bf7Ep3_S.js";import"./index-BgmENQvG.js";import"./Link-No0hza1O.js";import"./copy-Bz0Lpu58.js";import"./copy-DQeKak9d.js";import"./GitHub-Mark-Dm_YJ0lm.js";import"./TableOfContent-CpbGcE6Y.js";import"./index-CDqXh-7y.js";import"./index-CuuHGpOq.js";import"./index-CMG_lNnl.js";import"./index-XFju5FGb.js";import"./index-D94_Q-PW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DZJl74Y9.js";import"./addCustomCSSWithScoping-CagFc4YE.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

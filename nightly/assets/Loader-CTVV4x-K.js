import{j as e}from"./iframe-8PJ6_3g2.js";import{useMDXComponents as s}from"./index-C0ovl4HQ.js";import{M as d,C as o}from"./blocks-BEb05MJo.js";import"./Tag-z4B_wt0s.js";import"./index-BcmoHwde.js";import{C as m}from"./ControlsWithNote-BDIy3Dw3.js";import{D as p}from"./DocsHeader-BJ4k42xs.js";import{F as l}from"./CommandsAndQueries-DwoVClSd.js";import{C as i,D as r,W as x}from"./Loader.stories--P3F8Tic.js";import"./preload-helper-PPVm8Dsz.js";import"./information-aKABhmx8.js";import"./sys-enter-2-BFUBKj9Z.js";import"./alert-yjyGEikw.js";import"./index-DwEBrLAz.js";import"./index-GTIQmPyl.js";import"./Link-BhglMJXJ.js";import"./copy-DjzXp5vW.js";import"./copy-Bfeap7lu.js";import"./GitHub-Mark-BxWB2h68.js";import"./TableOfContent-CYf3VMvE.js";import"./index-CYfjdXMS.js";import"./index-BDwyo_3E.js";import"./index-DOdcY3p9.js";import"./index-BGjlJLGo.js";import"./index-BysWD4q1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsI0QAy3.js";import"./addCustomCSSWithScoping-DJAGr2gu.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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

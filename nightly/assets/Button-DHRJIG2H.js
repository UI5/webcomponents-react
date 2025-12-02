import{j as e,e as m}from"./iframe-C4uJ0-S9.js";import{useMDXComponents as a}from"./index-7yLcmjFP.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-CBo7THUN.js";import{A as d}from"./ArgTypesWithNote-n8jO8V14.js";import{C as f}from"./ControlsWithNote-Xba4zRPV.js";import{D as M}from"./DocsHeader-CZJ1s6Cq.js";import{F as I}from"./CommandsAndQueries-B5y1yjIv.js";import{C as o,D as r,B as i}from"./Button.stories-Br99jtYQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qq5TSXaV.js";import"./information-CGc2Gyu5.js";import"./sys-enter-2-8QAf9lpT.js";import"./alert-CoEJOo1j.js";import"./Tag-BnlqX_yt.js";import"./index-BCADQjVB.js";import"./index-KgBIbLv3.js";import"./Link-BtGKi5yG.js";import"./copy-DRncM3oG.js";import"./copy-CcXkheL2.js";import"./GitHub-Mark-AuYrpZ4h.js";import"./TableOfContent-CwQN62Px.js";import"./index-Cqxv-6mm.js";import"./index-Cxz2391_.js";import"./index-DOaerJgo.js";import"./index-ccsE6YRa.js";import"./index-DWkRZCu2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DS9Hrz5j.js";import"./addCustomCSSWithScoping-CUwa-fZt.js";import"./ai-Dn73ydYD.js";import"./ai--1QUhZVI.js";import"./navigation-down-arrow-DVAbjQ7x.js";import"./stop-vjX1ClWP.js";import"./stop-CcZIB0Dx.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-LNoaTEUu.js";import"./SplitButton-pc-B7dmB.js";import"./slim-arrow-down-DYL641WE.js";import"./slim-arrow-down-Y4c6YvG2.js";import"./index-BN4Ry6yZ.js";import"./index-C4-lZbTK.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
`,e.jsx(M,{of:o,experimental:!0}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{of:r}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show static code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`function AIButton(props) {
  const generationIdRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<ButtonDomRef>(null);
  const [buttonState, setButtonState] = useState("generate");
  const [menuOpen, setMenuOpen] = useState(false);

  const startGeneration = () => {
    generationIdRef.current = setTimeout(() => {
      setButtonState("revise");
    }, 3000);
  };

  const handleClick: ButtonPropTypes["onClick"] = (e) => {
    const btn = e.target;

    setMenuOpen(false);
    switch (btn.state) {
      case "generate":
        setButtonState("generating");
        startGeneration();
        break;
      case "generating":
        if (generationIdRef.current) {
          clearTimeout(generationIdRef.current);
          generationIdRef.current = null;
        }
        setButtonState("generate");
        break;
      case "revise":
        setMenuOpen(true);
        break;
    }
  };

  const handleMenuItemClick: MenuPropTypes["onItemClick"] = (e) => {
    if (e.detail.text === "Regenerate") {
      setButtonState("generating");
      startGeneration();
    }
  };

  return (
    <>
      <Button
        {...props}
        onClick={handleClick}
        state={buttonState}
        ref={buttonRef}
      >
        <ButtonState name="generate" text="Generate" icon={aiIcon} />
        <ButtonState name="generating" text="Stop Generating" icon={stopIcon} />
        <ButtonState
          name="revise"
          text="Revise"
          icon={aiIcon}
          endIcon={navDownIcon}
        />
      </Button>
      {menuOpen && (
        <Menu
          opener={buttonRef.current}
          open
          onItemClick={handleMenuItemClick}
          onClose={() => {
            setMenuOpen(false);
          }}
        >
          <MenuItem text="Regenerate" />
          <MenuSeparator />
          <MenuItem text="Fix Spelling & Grammar" />
          <MenuItem text="Change Tone">
            <MenuItem text="Option 1" />
            <MenuItem text="Option 2" />
            <MenuItem text="Option 3" />
          </MenuItem>
          <MenuItem text="Adjust Length">
            <MenuItem text="Shorten text" />
            <MenuItem text="Lengthen text" />
          </MenuItem>
          <MenuItem text="Bulleted List" />
          <MenuItem text="Translate">
            <MenuItem text="English" />
            <MenuItem text="German" />
            <MenuItem text="Spanish" />
          </MenuItem>
        </Menu>
      )}
    </>
  );
}
`})})]}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(f,{of:r}),`
`,e.jsx(l,{children:u}),`
`,e.jsx(t.h2,{id:"buttonstate",children:"ButtonState"}),`
`,e.jsx(x,{of:i}),`
`,e.jsx(d,{metaOf:o,of:i,hideHTMLPropsNote:!0,exclude:m}),`
`,e.jsx(I,{}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{})})]})}function se(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{se as default};

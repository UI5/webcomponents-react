import{j as e,B as m}from"./iframe-D_72XrxV.js";import{useMDXComponents as a}from"./index-66RF5jzG.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-Cdh_AmAk.js";import{A as d}from"./ArgTypesWithNote-CEae3A_O.js";import{C as f}from"./ControlsWithNote-DDWhTJKA.js";import{D as M}from"./DocsHeader-CCUl3t2r.js";import{F as I}from"./CommandsAndQueries-B5MqblA3.js";import{C as o,D as r,B as i}from"./Button.stories-NWtl0igb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CeLdj5R8.js";import"./information-C_2BZUqW.js";import"./sys-enter-2-C5Wnyt7l.js";import"./alert-CbokyiOI.js";import"./Tag-FVV8VuJS.js";import"./index-DkMaspDs.js";import"./index-DC83-RSZ.js";import"./Link-BEWshBTo.js";import"./copy-DuYQh7II.js";import"./copy-jn1S9mhy.js";import"./GitHub-Mark-D6hYrMwl.js";import"./TableOfContent-y4D1_mMB.js";import"./index-CtHwk6MR.js";import"./index-B5YLKK6V.js";import"./index-DhXDNTqP.js";import"./index-CawoDp7x.js";import"./index-DXJ6eoJD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-jUCNgYAQ.js";import"./addCustomCSSWithScoping-CVFgCYWk.js";import"./ai-BhcXw_Y0.js";import"./ai-BUEP6FOB.js";import"./navigation-down-arrow-B9jvvqZn.js";import"./stop-DkPL8OAr.js";import"./stop-CNssZCBR.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./SplitButton-DTtK0L4C.js";import"./slim-arrow-down-CwKrWZlT.js";import"./slim-arrow-down-4pwOw1KN.js";import"./index-BX8yqFtf.js";import"./index-CZcpMbZV.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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

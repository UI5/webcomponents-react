import{j as e,e as m}from"./iframe-CWbL8jxG.js";import{useMDXComponents as a}from"./index-B1hucxFe.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-DWgVki-D.js";import{A as d}from"./ArgTypesWithNote-CZNC395R.js";import{C as f}from"./ControlsWithNote-ymSYjaAM.js";import{D as M}from"./DocsHeader-DzPxh-83.js";import{F as I}from"./CommandsAndQueries-DC5-wnNc.js";import{C as o,D as r,B as i}from"./Button.stories-DheHODBk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ln4MrNxF.js";import"./information-CisMKXtU.js";import"./sys-enter-2-IsKQM1OD.js";import"./alert-Dh20kvYK.js";import"./Tag-BqrM3bJU.js";import"./index-DX9sPfcP.js";import"./index-B-_ynEAX.js";import"./Link-DUwsGKC7.js";import"./copy-DQ3S8OxO.js";import"./copy-DC7dXRiF.js";import"./GitHub-Mark-Bv0DgpdU.js";import"./TableOfContent-BS_4sZOQ.js";import"./index-DTMyNJf2.js";import"./index-BEEAqopd.js";import"./index-BMKWfM9S.js";import"./index-DFy0GYik.js";import"./index-Bs8RptuV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CtpdWs35.js";import"./addCustomCSSWithScoping-DZNikY8L.js";import"./ai-ylqmuK3B.js";import"./ai-ktyNLZQd.js";import"./navigation-down-arrow-ozVSHRNs.js";import"./stop-PMKjisoq.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-Chce_F9i.js";import"./SplitButton-CswWQDMN.js";import"./slim-arrow-down-BO45akNa.js";import"./slim-arrow-down-BMbGkBGP.js";import"./index-Bq7Kn9nH.js";import"./index-Ym0p0UUx.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
`,e.jsx(t.pre,{children:e.jsx(t.code,{})})]})}function ie(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{ie as default};

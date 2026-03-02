import{j as e,B as m}from"./iframe-Dp_LXyNr.js";import{useMDXComponents as a}from"./index-Du5TrOvB.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-9I7fLsXi.js";import{A as d}from"./ArgTypesWithNote-CkcbJ96s.js";import{C as f}from"./ControlsWithNote-crRgwoV8.js";import{D as M}from"./DocsHeader-D9vzzC6U.js";import{F as I}from"./CommandsAndQueries-DJ070Qmg.js";import{C as o,D as r,B as i}from"./Button.stories-DnxKO9mu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CMhb9NSF.js";import"./information-KVIVt9bg.js";import"./sys-enter-2-C4zsDLSU.js";import"./alert-DWxcSCEU.js";import"./Tag-CUzUjb7h.js";import"./index-Bd_n1-5X.js";import"./index-C2FHI_h3.js";import"./Link-KTjqK9wl.js";import"./copy-BS6B86D6.js";import"./copy-Cwbx5yBu.js";import"./GitHub-Mark-D_3fnVUG.js";import"./TableOfContent-C3UcDeLl.js";import"./index-DlyZB9up.js";import"./index-CKcCy47r.js";import"./index-DY9HWv06.js";import"./index-DIjOLpD2.js";import"./index-CTco0M7M.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDmVKCiw.js";import"./addCustomCSSWithScoping-7CEi5oRz.js";import"./ai-C7bqcppV.js";import"./ai-DUU3yJdm.js";import"./navigation-down-arrow-w1mb7uJq.js";import"./stop-BmogctIC.js";import"./stop-C1fbaYRm.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./SplitButton-B7k0XrrV.js";import"./slim-arrow-down-Cwp2cLQO.js";import"./slim-arrow-down-Db3k0_l-.js";import"./index-Bai_Z9pg.js";import"./index-wqTNq6U4.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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

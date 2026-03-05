import{j as t,E as m}from"./iframe-D89K97gv.js";import{useMDXComponents as a}from"./index-BJvRQfhi.js";import{S as p}from"./SubcomponentsSection-BVy4lpQe.js";import{M as u,C as c,a as l,D as x}from"./blocks-Cy4BDnT1.js";import{A as d}from"./ArgTypesWithNote-ByfgJ6EA.js";import{C as f}from"./ControlsWithNote-CoVcsK_6.js";import{D as M}from"./DocsHeader-DP8TxsA3.js";import{F as I}from"./Footer-a85ddGr6.js";import"./CommandsAndQueries-CkqpoGcY.js";import"./PageNotFound-Btnag6Vx.js";import{C as o,D as r,B as i}from"./Button.stories-D8DmvWDG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CG_fwaJ_.js";import"./information-DxfKMTg6.js";import"./sys-enter-2-aIi16_BZ.js";import"./alert-CzEHD23R.js";import"./Tag-BMl9amXb.js";import"./index-_KpWx7_H.js";import"./index-CHwgMgjy.js";import"./Link-vvC1wc11.js";import"./copy-D95-XUb5.js";import"./copy-BeHvABnn.js";import"./GitHub-Mark-e3Bx1Fbe.js";import"./TableOfContent-Bl5qcHLc.js";import"./index-D9Orgelb.js";import"./index-CD-X_9j4.js";import"./index-BFDU-uR3.js";import"./index-BmDAlwXN.js";import"./index-CSxOLZlI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-JuHHWHgI.js";import"./addCustomCSSWithScoping-D0msxKTR.js";import"./Illustrations-llDvpFiy.js";import"./i18n-defaults-C7ICj5-E.js";import"./ai-CiWDyXM0.js";import"./ai-lUjFOdi9.js";import"./navigation-down-arrow-DVUqx3Rx.js";import"./stop-D-E4qZw7.js";import"./stop-BtbMAeVD.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./SplitButton-DYOPS1VY.js";import"./slim-arrow-down-CnxZFJRE.js";import"./slim-arrow-down-CkA2t8ep.js";import"./index-Cp3C2Xca.js";import"./index-gGyf_loA.js";function s(n){const e={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{of:o}),`
`,t.jsx(M,{of:o,experimental:!0}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(c,{of:r}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Show static code"}),t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`function AIButton(props) {
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
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(f,{of:r}),`
`,t.jsx(l,{children:p}),`
`,t.jsx(e.h2,{id:"buttonstate",children:"ButtonState"}),`
`,t.jsx(x,{of:i}),`
`,t.jsx(d,{metaOf:o,of:i,hideHTMLPropsNote:!0,exclude:m}),`
`,t.jsx(I,{}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{})})]})}function ut(n={}){const{wrapper:e}={...a(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}export{ut as default};

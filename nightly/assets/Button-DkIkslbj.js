import{j as e,B as m}from"./iframe-5IjhfTrO.js";import{useMDXComponents as a}from"./index-DX6MuGUF.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-CjIjNIVl.js";import{A as d}from"./ArgTypesWithNote-2RsgSWeC.js";import{C as f}from"./ControlsWithNote-Cm-Ncf6S.js";import{D as M}from"./DocsHeader-C99H4v8C.js";import{F as I}from"./CommandsAndQueries-Cp1HBFGN.js";import{C as o,D as r,B as i}from"./Button.stories-SThg1vQW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-7iKYLPe5.js";import"./information-CE4MPASh.js";import"./sys-enter-2-B35dOLRE.js";import"./alert-DzX-q61q.js";import"./Tag-DKhe7Llj.js";import"./index-DXwYC06A.js";import"./index-gs9VdEEm.js";import"./Link-D3EHIZv0.js";import"./copy-Bs8n61Ka.js";import"./copy-BcUsFLyb.js";import"./GitHub-Mark-B84wDHrF.js";import"./TableOfContent-CkgcLNd4.js";import"./index-DsJOnmXi.js";import"./index-C0Y9mFvG.js";import"./index-B1bhMGiO.js";import"./index-CZf_ilO1.js";import"./index-Dlo4vTaU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-FOiwvzqu.js";import"./addCustomCSSWithScoping-DinQav34.js";import"./ai-Dgn2lzvL.js";import"./ai-C5ksRCaz.js";import"./navigation-down-arrow-uPQicAfY.js";import"./stop-DUGo6jBu.js";import"./stop-DhERgJ6j.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./SplitButton-Dya9vyFf.js";import"./slim-arrow-down-DyuT9wxt.js";import"./slim-arrow-down-BxfuL-xs.js";import"./index-BGk_TCeX.js";import"./index-BqJx5HqY.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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

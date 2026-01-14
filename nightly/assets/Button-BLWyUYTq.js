import{j as e,e as m}from"./iframe-Cig4nsrF.js";import{useMDXComponents as a}from"./index-rt57_u-y.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-DAEBkYYF.js";import{A as d}from"./ArgTypesWithNote-DaOsX7T7.js";import{C as f}from"./ControlsWithNote-BEmXSTpX.js";import{D as M}from"./DocsHeader-DsziQCYn.js";import{F as I}from"./CommandsAndQueries-D3xhwJA5.js";import{C as o,D as r,B as i}from"./Button.stories-BI_X-pCn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-FKwq6U9j.js";import"./information-B6HgxZBq.js";import"./sys-enter-2-BRRws0JK.js";import"./alert-Cb5ARKKh.js";import"./Tag-Bs_1btou.js";import"./index-BL2sJT6Z.js";import"./index-5C4HFP5l.js";import"./Link-Br9IVr1w.js";import"./copy-Y9mZrYG3.js";import"./copy-C7r52zpO.js";import"./GitHub-Mark-lRZYtsJv.js";import"./TableOfContent-CFzYaydv.js";import"./index-B2RnTjWc.js";import"./index-BB06tsQb.js";import"./index-BrrdpEgt.js";import"./index-ftQeoy-6.js";import"./index-BmqXmyDH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsK0-Mz_.js";import"./addCustomCSSWithScoping-BWNNT1nj.js";import"./ai-GLkgPjJl.js";import"./ai-BDwU9i8w.js";import"./navigation-down-arrow-CR7KrOFx.js";import"./stop-ArULP9T1.js";import"./stop-DZkq-aC_.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-j-IoYmGi.js";import"./SplitButton-Xnv5Bj7E.js";import"./slim-arrow-down-227TRo9_.js";import"./slim-arrow-down-Cde-9O_z.js";import"./index-WEc0MPfv.js";import"./index-BUxhnkAL.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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

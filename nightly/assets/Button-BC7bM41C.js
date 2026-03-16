import{j as t,E as m}from"./iframe--9dKe8DB.js";import{useMDXComponents as a}from"./index-KI9hm8HB.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-sz1V1YD1.js";import{A as d}from"./ArgTypesWithNote-w0QHC0YY.js";import{C as f}from"./ControlsWithNote-L_Ce3WAS.js";import{D as M}from"./DocsHeader-DmUEuAmh.js";import{F as I}from"./Footer-Q0CQ_qDk.js";import"./CommandsAndQueries-DmMMilME.js";import"./PageNotFound-CuY3r4La.js";import{C as o,D as r,B as i}from"./Button.stories-DdJEBc6m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPDFIZvY.js";import"./information-nAlSmLiB.js";import"./sys-enter-2-w7b_cFRw.js";import"./alert-QMDkEN5b.js";import"./Tag-Dx2xRUom.js";import"./index-FyOsxtAw.js";import"./index-BYfUGIr5.js";import"./Link-BglFcPBB.js";import"./copy-36Frb_So.js";import"./copy-DDHnU-KJ.js";import"./GitHub-Mark-Cn6yJd_r.js";import"./TableOfContent-BY9idK35.js";import"./index-rkrari7y.js";import"./index-W9KwanBR.js";import"./index-CZTUC9tr.js";import"./index-mjSuc6PB.js";import"./index-TfvKDlH8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZXl1Qbt.js";import"./addCustomCSSWithScoping-OfWYI4vx.js";import"./Illustrations-CYV_ZGoP.js";import"./i18n-defaults-CFWtSmu6.js";import"./ai-BXz24KkS.js";import"./ai-Deq-hy1a.js";import"./navigation-down-arrow-D1hT7rfO.js";import"./stop-qJez8Kdc.js";import"./stop-BOF0o5ip.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./index-D-ePPccv.js";import"./index-Cx1VWSz2.js";function s(n){const e={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:o}),`
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
`,t.jsx(l,{children:u}),`
`,t.jsx(e.h2,{id:"buttonstate",children:"ButtonState"}),`
`,t.jsx(x,{of:i}),`
`,t.jsx(d,{metaOf:o,of:i,hideHTMLPropsNote:!0,exclude:m}),`
`,t.jsx(I,{}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{})})]})}function at(n={}){const{wrapper:e}={...a(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}export{at as default};

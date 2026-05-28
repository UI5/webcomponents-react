import{i as e}from"./preload-helper-usAeo7Bx.js";import{lh as t,n,r}from"./iframe-DKzE7WvQ.js";import{J as i,_ as a,d as o,o as s,r as c,u as l}from"./blocks-ua6pccw_.js";import{E as u,S as d,b as f,f as p,t as m,u as h}from"./components-DQKMcfKg.js";import{n as g,t as _}from"./SubcomponentsSection-Da9yr5rF.js";import{Default as v,i as y,n as b,r as x,t as S}from"./Button.stories-CnFuJOR0.js";function C(e){let t={code:`code`,h2:`h2`,pre:`pre`,...i(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(o,{of:S}),`
`,(0,T.jsx)(p,{of:S,experimental:!0}),`
`,(0,T.jsx)(`br`,{}),`
`,(0,T.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,T.jsx)(c,{of:v}),`
`,(0,T.jsxs)(`details`,{children:[(0,T.jsx)(`summary`,{children:`Show static code`}),(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-tsx`,children:`function AIButton(props) {
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
`,(0,T.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,T.jsx)(f,{of:v}),`
`,(0,T.jsx)(l,{children:_}),`
`,(0,T.jsx)(t.h2,{id:`buttonstate`,children:`ButtonState`}),`
`,(0,T.jsx)(s,{of:x}),`
`,(0,T.jsx)(d,{metaOf:S,of:x,hideHTMLPropsNote:!0,exclude:n}),`
`,(0,T.jsx)(h,{}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{})})]})}function w(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=t(),u(),g(),a(),m(),b(),y(),r()}))();export{w as default};
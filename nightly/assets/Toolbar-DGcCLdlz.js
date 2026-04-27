import{n as e}from"./chunk-jRWAZmH_.js";import{Gm as t}from"./iframe-C2-neVvG.js";import{r as n}from"./react-Btx5xI2k.js";import{_ as r,m as i,o as a,p as o,s,t as c}from"./components-LBE5S5GV.js";import{_ as l,d as u,o as d,r as f,u as p}from"./blocks-DSu3R0_v.js";import{n as m,t as h}from"./SubcomponentsSection-DYUGiO1B.js";import{a as g,l as _,r as v,s as y}from"./Toolbar-3l_y6Z-U.js";import{CustomOverflowButton as b,Default as x,EvenlyAlignedItems as S,OverflowBtns as C,PopoverInOverflowPopover as w,RightAlignedItems as T,WithOverflowButton as E,WithSeparator as D,n as O,t as k}from"./Toolbar.stories-3QzmYSz5.js";import{t as A}from"./src-p3eGfnNv.js";function j(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(u,{of:k}),`
`,(0,N.jsx)(s,{of:k,subComponents:[`OverflowToolbarButton`,`OverflowToolbarToggleButton`,`ToolbarSpacer`,`ToolbarSeparator`]}),`
`,(0,N.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,N.jsx)(f,{of:x}),`
`,(0,N.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,N.jsx)(o,{of:x}),`
`,(0,N.jsx)(t.h2,{id:`announce-number-of-items-in-overflow-popover`,children:`Announce number of items in overflow popover`}),`
`,(0,N.jsxs)(t.p,{children:[`To set the `,(0,N.jsx)(t.code,{children:`aria-label`}),` correctly it's necessary to add the `,(0,N.jsx)(t.code,{children:`data-accessible-name`}),` data-attribute for each web component that relies on `,(0,N.jsx)(t.code,{children:`accessibleName`}),` instead of `,(0,N.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`,(0,N.jsx)(t.p,{children:`E.g.:`}),`
`,(0,N.jsx)(t.pre,{children:(0,N.jsx)(t.code,{className:`language-jsx`,children:`<Toolbar>
  <Text>Toolbar</Text>
  <Button data-accessible-name design={ButtonDesign.Transparent}>
    Button One
  </Button>
  <button>Button Two</button>
  <Input data-accessible-name />
  <input />
</Toolbar>
`})}),`
`,(0,N.jsx)(t.h2,{id:`prevent-event-bubbling-of-toolbar-items`,children:`Prevent event bubbling of Toolbar items`}),`
`,(0,N.jsxs)(t.p,{children:[`Per default, if the `,(0,N.jsx)(t.code,{children:`active`}),` prop is "true" and an actionable element like a button is clicked, the `,(0,N.jsx)(t.code,{children:`onClick`}),` event of the `,(0,N.jsx)(t.code,{children:`Toolbar`}),` is also fired.
To prevent this you can add `,(0,N.jsx)(t.code,{children:`e.stopPropagation()`}),` to your event handler.`]}),`
`,(0,N.jsx)(t.pre,{children:(0,N.jsx)(t.code,{className:`language-jsx`,children:`<Toolbar>
  <Button
    onClick={(e) => {
      //use e.stopPropagation() to prevent event bubbling
      e.stopPropagation();
    }}
  >
    Toolbar Item
  </Button>
</Toolbar>
`})}),`
`,(0,N.jsx)(t.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,N.jsx)(t.h2,{id:`align-elements-inside-the-toolbar`,children:`Align elements inside the Toolbar`}),`
`,(0,N.jsxs)(t.p,{children:[`To align items inside the `,(0,N.jsx)(t.code,{children:`Toolbar`}),` you can use the `,(0,N.jsx)(t.code,{children:`ToolbarSpacer`}),` component.`,(0,N.jsx)(`br`,{}),`
This will cover the remaining horizontal space between the `,(0,N.jsx)(t.code,{children:`Toolbar`}),` items and for example pushes one item to the edge of the `,(0,N.jsx)(t.code,{children:`Toolbar`}),`.`]}),`
`,(0,N.jsx)(t.h3,{id:`right-aligned-items`,children:`Right aligned items`}),`
`,(0,N.jsx)(f,{of:T}),`
`,(0,N.jsx)(t.h3,{id:`evenly-aligned-items`,children:`Evenly aligned items`}),`
`,(0,N.jsx)(f,{of:S}),`
`,(0,N.jsx)(t.h2,{id:`toolbar-separator`,children:`Toolbar Separator`}),`
`,(0,N.jsxs)(t.p,{children:[`You can add a visual separator between the preceding and succeeding `,(0,N.jsx)(t.code,{children:`Toolbar`}),` item with the use of the `,(0,N.jsx)(t.code,{children:`ToolbarSeparator`}),`.`]}),`
`,(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.strong,{children:`Note:`}),` In the overflow popover the `,(0,N.jsx)(t.code,{children:`ToolbarSeparator`}),` is represented by a horizontal line, in the `,(0,N.jsx)(t.code,{children:`Toolbar`}),` by a vertical
line.`]}),`
`,(0,N.jsx)(f,{of:D}),`
`,(0,N.jsx)(t.h2,{id:`toolbar-with-overflow-button`,children:`Toolbar with overflow button`}),`
`,(0,N.jsx)(t.p,{children:`If the horizontally available space isn't enough to fit all items in it, an overflow button is displayed.`}),`
`,(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.strong,{children:`Note:`}),` You can change the width of the toolbar by dragging the `,(0,N.jsx)(t.code,{children:`Slider`}),`.`]}),`
`,(0,N.jsx)(o,{of:E,hideHTMLPropsNote:!0,include:[`numberOfAlwaysVisibleItems`]}),`
`,(0,N.jsx)(f,{of:E}),`
`,(0,N.jsx)(t.h3,{id:`overflowtoolbarbutton--overflowtoolbartogglebutton`,children:`OverflowToolbarButton & OverflowToolbarToggleButton`}),`
`,(0,N.jsxs)(t.p,{children:[`With the `,(0,N.jsx)(t.code,{children:`OverflowToolbarButton`}),` and `,(0,N.jsx)(t.code,{children:`OverflowToolbarToggleButton`}),` it is possible to display the text of a `,(0,N.jsx)(t.code,{children:`Button`}),` with an icon only in the overflow popover of the `,(0,N.jsx)(t.code,{children:`Toolbar`}),`.
Both components accept the same `,(0,N.jsx)(t.code,{children:`props`}),` as the standard `,(0,N.jsx)(t.code,{children:`Button`}),` or `,(0,N.jsx)(t.code,{children:`ToggleButton`}),` component, with the difference that `,(0,N.jsx)(t.code,{children:`icon`}),` is now required and `,(0,N.jsx)(t.code,{children:`children`}),` are only rendered inside the popover.`]}),`
`,(0,N.jsx)(f,{of:C}),`
`,(0,N.jsx)(t.h3,{id:`toolbar-with-custom-overflow-button`,children:`Toolbar with custom overflow button`}),`
`,(0,N.jsxs)(t.p,{children:[`By setting the `,(0,N.jsx)(t.code,{children:`overflowButton`}),` prop, it's possible to change the overflow button, which is displayed if the `,(0,N.jsx)(t.code,{children:`Toolbar`}),` goes into overflow.
Only buttons in icon only mode are supported and it's recommended to use the `,(0,N.jsx)(t.code,{children:`ToggleButton`}),` in `,(0,N.jsx)(t.code,{children:`"Transparent"`}),` design to comply with UX guidelines.
Please also note that when using a custom button, it is your responsibility to set the appropriate a11y attributes.`]}),`
`,(0,N.jsxs)(t.p,{children:[`It is furthermore possible to prevent the popover from opening by using `,(0,N.jsx)(t.code,{children:`event.preventDefault()`}),` in the `,(0,N.jsx)(t.code,{children:`onClick`}),` of the button. This is useful e.g. when implementing a custom overflow popover.`]}),`
`,(0,N.jsx)(f,{of:b}),`
`,(0,N.jsx)(t.h2,{id:`close-overflow-popover-on-interaction`,children:`Close overflow popover on interaction`}),`
`,(0,N.jsxs)(t.p,{children:[`The overflow popover can be closed programmatically by using the `,(0,N.jsx)(t.code,{children:`overflowPopoverRef`}),`.`]}),`
`,(0,N.jsx)(t.pre,{children:(0,N.jsx)(t.code,{className:`language-jsx`,children:`const ToolbarComponent = () => {
  const overflowPopoverRef = useRef(null);
  const handlePopoverClose = () => {
    const overflowPopover = overflowPopoverRef.current;
    if (overflowPopover?.open) {
      overflowPopover.open = false;
    }
  };
  return (
    <Toolbar overflowPopoverRef={overflowPopoverRef}>
      <Text>Toolbar</Text>
      <Button onClick={handlePopoverClose}>Button One</Button>
      <Select onChange={handlePopoverClose}>
        <Option>Option 1</Option>
        <Option>Option 2</Option>
      </Select>
    </Toolbar>
  );
};
`})}),`
`,(0,N.jsx)(t.h2,{id:`open-popovers-by-id-inside-the-overflow-popover`,children:`Open Popovers by ID inside the overflow popover`}),`
`,(0,N.jsxs)(t.p,{children:[`To prevent duplicate child `,(0,N.jsx)(t.code,{children:`id`}),`s in the DOM, all child `,(0,N.jsx)(t.code,{children:`id`}),`s get an `,(0,N.jsx)(t.code,{children:`-overflow`}),` suffix. If an ID is used to open the popover (e.g. via the `,(0,N.jsx)(t.code,{children:`opener`}),` prop), you have to make sure to use the correct id.
You can achieve that either by leveraging the `,(0,N.jsx)(t.code,{children:`onOverflowChange`}),` event and retrieve the current ID there, or by updating it inside the `,(0,N.jsx)(t.code,{children:`click`}),` handler of the respective opener component.`]}),`
`,(0,N.jsx)(f,{of:w,sourceState:`none`}),`
`,(0,N.jsxs)(`details`,{children:[` `,(0,N.jsx)(`summary`,{children:`Set opener ID via click handler`}),(0,N.jsx)(t.pre,{children:(0,N.jsx)(t.code,{className:`language-jsx`,children:`const ToolbarComponent = () => {
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  const [opener, setOpener] = useState('openMenuBtn');
  const handlePopoverOpenerClick = (e) => {
    setOpener(e.target.id);
    setPopoverIsOpen(true);
  };
  return (
    <>
      <Toolbar style={{ width: '400px' }}>
        <Text>Toolbar</Text>
        <Button>Button One</Button>
        <Button>Button Two</Button>
        <Button id="openMenuBtn" onClick={handlePopoverOpenerClick}>
          Open Popover (Menu)
        </Button>
      </Toolbar>
      <Menu
        opener={opener}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      >
        <MenuItem text="New File" />
        <MenuItem text="New Folder" />
      </Menu>
    </>
  );
};
`})})]}),`
`,(0,N.jsxs)(`details`,{children:[` `,(0,N.jsx)(`summary`,{children:`Set opener ID via onOverflowChange handler`}),(0,N.jsx)(t.pre,{children:(0,N.jsx)(t.code,{className:`language-jsx`,children:`const ToolbarComponent = () => {
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  const initialOpenerId = 'openMenuBtn';
  const [opener, setOpener] = useState(initialOpenerId);
  const handlePopoverOpenerClick = () => {
    setPopoverIsOpen(true);
  };
  const handleOverflowChange = (e) => {
    if (e.overflowElements?.length) {
      const overflowId = [...e.overflowElements].find((item) => item.dataset.opener)?.id;
      if (overflowId) {
        setOpener(overflowId);
      } else {
        setOpener(initialOpenerId);
      }
    } else {
      setOpener(initialOpenerId);
    }
  };
  return (
    <>
      <Toolbar style={{ width: '400px' }} onOverflowChange={handleOverflowChange}>
        <Text>Toolbar</Text>
        <Button>Button One</Button>
        <Button>Button Two</Button>
        <Button id="openMenuBtn" onClick={handlePopoverOpenerClick} data-opener>
          Open Popover (Menu)
        </Button>
      </Toolbar>
      <Menu
        opener={opener}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      >
        <MenuItem text="New File" />
        <MenuItem text="New Folder" />
      </Menu>
    </>
  );
};
`})})]}),`
`,(0,N.jsx)(p,{children:h}),`
`,(0,N.jsx)(t.h2,{id:`overflowtoolbarbutton`,children:`OverflowToolbarButton`}),`
`,(0,N.jsx)(d,{of:_}),`
`,(0,N.jsx)(i,{metaOf:k,of:_}),`
`,(0,N.jsx)(t.h2,{id:`overflowtoolbartogglebutton`,children:`OverflowToolbarToggleButton`}),`
`,(0,N.jsx)(d,{of:y}),`
`,(0,N.jsx)(i,{metaOf:k,of:y}),`
`,(0,N.jsx)(t.h2,{id:`toolbarspacer`,children:`ToolbarSpacer`}),`
`,(0,N.jsx)(d,{of:v}),`
`,(0,N.jsx)(i,{metaOf:k,of:v}),`
`,(0,N.jsx)(t.h2,{id:`toolbarseparator`,children:`ToolbarSeparator`}),`
`,(0,N.jsx)(d,{of:g}),`
`,(0,N.jsx)(i,{metaOf:k,of:g}),`
`,(0,N.jsx)(a,{})]})}function M(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,N.jsx)(t,{...e,children:(0,N.jsx)(j,{...e})}):j(e)}var N;e((()=>{N=t(),r(),c(),l(),O(),m(),A()}))();export{M as default};
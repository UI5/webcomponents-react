import{j as e}from"./iframe-D8-BDgf_.js";import{useMDXComponents as x}from"./index-C9C5bcry.js";import{A as i}from"./ArgTypesWithNote-DYNOJlSo.js";import{C as l}from"./ControlsWithNote-BA4C71aa.js";import{D as f}from"./DocsHeader-DhqOxPgn.js";import{F as v}from"./CommandsAndQueries-DdekYtZs.js";import{M as b,C as n,a as j,D as s}from"./blocks-BAPiaHIf.js";import{C as r,D as a,R as g,E as w,W as T,a as p,O,b as B,P as y,c as d,d as c,T as h}from"./Toolbar.stories-f8c5e_s_.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import{T as m}from"./index-D9FSboeM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bpoq7VNX.js";import"./information-P4PYqJF7.js";import"./sys-enter-2-COYZiEQ0.js";import"./alert-NgB5MfvZ.js";import"./Tag-94uJ1S6F.js";import"./index-CkF5m5P2.js";import"./index-BR0aC9ux.js";import"./Link-DupRePRp.js";import"./copy-Dw40dVAC.js";import"./copy-D8ENGf86.js";import"./GitHub-Mark-DN65S926.js";import"./TableOfContent-D9uryxT6.js";import"./index-DthRrO7G.js";import"./index-BIskJ-u2.js";import"./index-Ijyq8fzP.js";import"./index-BC6ra2tn.js";import"./index-BGDf_fSf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bayg2vL_.js";import"./addCustomCSSWithScoping-BMV9S5Iy.js";import"./favorite-CNjjJ4DX.js";import"./settings-93yCJdqn.js";import"./settings-CuToJbU1.js";import"./index-DM7y2pZU.js";import"./DatePicker-OaPtWOV8.js";import"./query-CzSBusdE.js";import"./Calendar-BsyZMIds.js";import"./Gregorian-NMIVSeNH.js";import"./slim-arrow-left-CPKZesds.js";import"./InvisibleMessage-T6cHYe91.js";import"./appointment-2-L518c7r8.js";import"./Input-D_T5qhyo.js";import"./ResponsivePopoverCommon.css-B0FOPOjZ.js";import"./ValueStateMessage.css-tSbLyNmJ.js";import"./Suggestions.css-CCFYMh7W.js";import"./DateTimeInput-CmuFn6wB.js";import"./index-QOahos4e.js";import"./index-hJjWB28N.js";import"./index-D7R2LnC5.js";import"./Select-_Bmu2vih.js";import"./slim-arrow-down-BhY_0Ri7.js";import"./slim-arrow-down-p7BE2Hmw.js";import"./index-6chy-RKC.js";import"./Slider-DbInmxiS.js";import"./SliderTooltip-DW_oEjvb.js";import"./index-BvqiMI89.js";import"./less-0nIOA2m3.js";import"./index-BSkcr-Mn.js";import"./ToggleButton-DzetVeI0.js";import"./utils-BQuRkdbJ.js";import"./overflow-w6vcHOgN.js";import"./stopPropagation-CsBxLuUS.js";import"./debounce-D7W5PopO.js";function u(t){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(b,{of:r}),`
`,e.jsx(f,{of:r,subComponents:["OverflowToolbarButton","OverflowToolbarToggleButton","ToolbarSpacer","ToolbarSeparator"]}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(o.h2,{id:"announce-number-of-items-in-overflow-popover",children:"Announce number of items in overflow popover"}),`
`,e.jsxs(o.p,{children:["To set the ",e.jsx(o.code,{children:"aria-label"})," correctly it's necessary to add the ",e.jsx(o.code,{children:"data-accessible-name"})," data-attribute for each web component that relies on ",e.jsx(o.code,{children:"accessibleName"})," instead of ",e.jsx(o.code,{children:"aria-label"}),"."]}),`
`,e.jsx(o.p,{children:"E.g.:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<Toolbar>
  <Text>Toolbar</Text>
  <Button data-accessible-name design={ButtonDesign.Transparent}>
    Button One
  </Button>
  <button>Button Two</button>
  <Input data-accessible-name />
  <input />
</Toolbar>
`})}),`
`,e.jsx(o.h2,{id:"prevent-event-bubbling-of-toolbar-items",children:"Prevent event bubbling of Toolbar items"}),`
`,e.jsxs(o.p,{children:["Per default, if the ",e.jsx(o.code,{children:"active"}),' prop is "true" and an actionable element like a button is clicked, the ',e.jsx(o.code,{children:"onClick"})," event of the ",e.jsx(o.code,{children:"Toolbar"}),` is also fired.
To prevent this you can add `,e.jsx(o.code,{children:"e.stopPropagation()"})," to your event handler."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<Toolbar>
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
`,e.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(o.h2,{id:"align-elements-inside-the-toolbar",children:"Align elements inside the Toolbar"}),`
`,e.jsxs(o.p,{children:["To align items inside the ",e.jsx(o.code,{children:"Toolbar"})," you can use the ",e.jsx(o.code,{children:"ToolbarSpacer"})," component.",e.jsx("br",{}),`
This will cover the remaining horizontal space between the `,e.jsx(o.code,{children:"Toolbar"})," items and for example pushes one item to the edge of the ",e.jsx(o.code,{children:"Toolbar"}),"."]}),`
`,e.jsx(o.h3,{id:"right-aligned-items",children:"Right aligned items"}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(o.h3,{id:"evenly-aligned-items",children:"Evenly aligned items"}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(o.h2,{id:"toolbar-separator",children:"Toolbar Separator"}),`
`,e.jsxs(o.p,{children:["You can add a visual separator between the preceding and succeeding ",e.jsx(o.code,{children:"Toolbar"})," item with the use of the ",e.jsx(o.code,{children:"ToolbarSeparator"}),"."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," In the overflow popover the ",e.jsx(o.code,{children:"ToolbarSeparator"})," is represented by a horizontal line, in the ",e.jsx(o.code,{children:"Toolbar"}),` by a vertical
line.`]}),`
`,e.jsx(n,{of:T}),`
`,e.jsx(o.h2,{id:"toolbar-with-overflow-button",children:"Toolbar with overflow button"}),`
`,e.jsx(o.p,{children:"If the horizontally available space isn't enough to fit all items in it, an overflow button is displayed."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," You can change the width of the toolbar by dragging the ",e.jsx(o.code,{children:"Slider"}),"."]}),`
`,e.jsx(l,{of:p,hideHTMLPropsNote:!0,include:["numberOfAlwaysVisibleItems"]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(o.h3,{id:"overflowtoolbarbutton--overflowtoolbartogglebutton",children:"OverflowToolbarButton & OverflowToolbarToggleButton"}),`
`,e.jsxs(o.p,{children:["With the ",e.jsx(o.code,{children:"OverflowToolbarButton"})," and ",e.jsx(o.code,{children:"OverflowToolbarToggleButton"})," it is possible to display the text of a ",e.jsx(o.code,{children:"Button"})," with an icon only in the overflow popover of the ",e.jsx(o.code,{children:"Toolbar"}),`.
Both components accept the same `,e.jsx(o.code,{children:"props"})," as the standard ",e.jsx(o.code,{children:"Button"})," or ",e.jsx(o.code,{children:"ToggleButton"})," component, with the difference that ",e.jsx(o.code,{children:"icon"})," is now required and ",e.jsx(o.code,{children:"children"})," are only rendered inside the popover."]}),`
`,e.jsx(n,{of:O}),`
`,e.jsx(o.h3,{id:"toolbar-with-custom-overflow-button",children:"Toolbar with custom overflow button"}),`
`,e.jsxs(o.p,{children:["By setting the ",e.jsx(o.code,{children:"overflowButton"})," prop, it's possible to change the overflow button, which is displayed if the ",e.jsx(o.code,{children:"Toolbar"}),` goes into overflow.
Only buttons in icon only mode are supported and it's recommended to use the `,e.jsx(o.code,{children:"ToggleButton"})," in ",e.jsx(o.code,{children:'"Transparent"'}),` design to comply with UX guidelines.
Please also note that when using a custom button, it is your responsibility to set the appropriate a11y attributes.`]}),`
`,e.jsxs(o.p,{children:["It is furthermore possible to prevent the popover from opening by using ",e.jsx(o.code,{children:"event.preventDefault()"})," in the ",e.jsx(o.code,{children:"onClick"})," of the button. This is useful e.g. when implementing a custom overflow popover."]}),`
`,e.jsx(n,{of:B}),`
`,e.jsx(o.h2,{id:"close-overflow-popover-on-interaction",children:"Close overflow popover on interaction"}),`
`,e.jsxs(o.p,{children:["The overflow popover can be closed programmatically by using the ",e.jsx(o.code,{children:"overflowPopoverRef"}),"."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const ToolbarComponent = () => {
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
`,e.jsx(o.h2,{id:"open-popovers-by-id-inside-the-overflow-popover",children:"Open Popovers by ID inside the overflow popover"}),`
`,e.jsxs(o.p,{children:["To prevent duplicate child ",e.jsx(o.code,{children:"id"}),"s in the DOM, all child ",e.jsx(o.code,{children:"id"}),"s get an ",e.jsx(o.code,{children:"-overflow"})," suffix. If an ID is used to open the popover (e.g. via the ",e.jsx(o.code,{children:"opener"}),` prop), you have to make sure to use the correct id.
You can achieve that either by leveraging the `,e.jsx(o.code,{children:"onOverflowChange"})," event and retrieve the current ID there, or by updating it inside the ",e.jsx(o.code,{children:"click"})," handler of the respective opener component."]}),`
`,e.jsx(n,{of:y,sourceState:"none"}),`
`,e.jsxs("details",{children:[" ",e.jsx("summary",{children:"Set opener ID via click handler"}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const ToolbarComponent = () => {
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
`,e.jsxs("details",{children:[" ",e.jsx("summary",{children:"Set opener ID via onOverflowChange handler"}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const ToolbarComponent = () => {
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
`,e.jsx(j,{children:C}),`
`,e.jsx(o.h2,{id:"overflowtoolbarbutton",children:"OverflowToolbarButton"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(i,{metaOf:r,of:d}),`
`,e.jsx(o.h2,{id:"overflowtoolbartogglebutton",children:"OverflowToolbarToggleButton"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(i,{metaOf:r,of:c}),`
`,e.jsx(o.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(i,{metaOf:r,of:m}),`
`,e.jsx(o.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(i,{metaOf:r,of:h}),`
`,e.jsx(v,{})]})}function Fe(t={}){const{wrapper:o}={...x(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(u,{...t})}):u(t)}export{Fe as default};

import{j as n}from"./iframe-B-JB9Mrg.js";import{useMDXComponents as s}from"./index-C6ab_87c.js";import{M as p,C as c}from"./blocks-gUSy1z8f.js";import"./Tag-rJaILc04.js";import"./index-BUD8Dloj.js";import{C as a}from"./ControlsWithNote-QgGQUsr2.js";import{D as m}from"./DocsHeader-o-VKCo2B.js";import{F as h}from"./Footer-BoXWBFNs.js";import"./CommandsAndQueries-BMpPCtQI.js";import"./PageNotFound-DwjQIJMb.js";import{C as o,D as r}from"./ActionSheet.stories-CM5Fs3mC.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bvi5gDZ4.js";import"./sys-enter-2-CDMo7mQ9.js";import"./alert-B5324jWv.js";import"./index-C_JAtQ1_.js";import"./index-BNovRndr.js";import"./Link-CUeYoLvN.js";import"./copy-xM69dy-U.js";import"./copy-B23uPwnI.js";import"./GitHub-Mark-CuXBZfmU.js";import"./TableOfContent-DfATZyjw.js";import"./index-COHIvdEC.js";import"./index-CxXKp92D.js";import"./index-UGbMf_4Y.js";import"./index-4LdkJtv9.js";import"./index-BmSIhnsV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_QxycfjS.js";import"./addCustomCSSWithScoping-DBFLD3Dt.js";import"./Illustrations-BGg5U59s.js";import"./i18n-defaults-CFWtSmu6.js";import"./delete-3GTPVXil.js";import"./utils-C0kltqQX.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
`,n.jsx(m,{of:o,subComponents:["Button"]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"example",children:"Example"}),`
`,n.jsx(c,{of:r}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(a,{of:r}),`
`,n.jsx(e.h2,{id:"opening-actionsheets",children:"Opening ActionSheets"}),`
`,n.jsx("br",{}),`
`,n.jsxs(e.p,{children:["You can open and close the ",n.jsx(e.code,{children:"ActionSheet"})," component in a declarative way using the ",n.jsx(e.code,{children:"open"})," and ",n.jsx(e.code,{children:"opener"})," prop."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const MyComponentWithActionSheet = () => {
  const [actionSheetIsOpen, setActionSheetIsOpen] = useState(false);
  return (
    <>
      <Button
        id={'openActionSheetBtn'}
        onClick={() => {
          setActionSheetIsOpen(true);
        }}
      >
        Open Action Sheet
      </Button>
      <ActionSheet
        opener={'openActionSheetBtn'}
        open={actionSheetIsOpen}
        onClose={() => {
          setActionSheetIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["Opening an ",n.jsx(e.code,{children:"ActionSheet"})," by reference"]})}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"ActionSheet"})," exposes a way to pass a reference of an element instead of an ",n.jsx(e.code,{children:"id"})," to the ",n.jsx(e.code,{children:"opener"}),` prop.
You can do that by e.g. leveraging a React Ref.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleOpenerClick = (e) => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={handleOpenerClick}>
        Opener
      </Button>
      <ActionSheet opener={buttonRef.current} open={open}>
        {/* Content */}
      </ActionSheet>
    </>
  );
};
`})}),`
`,n.jsx(h,{})]})}function G(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{G as default};

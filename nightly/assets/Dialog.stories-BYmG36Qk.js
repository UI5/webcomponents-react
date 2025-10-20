import{K as p,j as e,U as i,r as s,Q as r}from"./iframe-BFWc6ije.js";import{B as u}from"./index-B-uZp8jT.js";import{L as c}from"./index-CFTVOaaJ.js";import{L as a}from"./index-Tigp63LJ.js";const g={title:"Modals & Popovers / Dialog",component:i,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{children:e.jsxs(c,{children:[e.jsx(a,{additionalText:"Fruits",text:"Apples"}),e.jsx(a,{additionalText:"Fruits",text:"Bananas"}),e.jsx(a,{additionalText:"Vegetables",text:"Potato"})]}),headerText:"Dialog Header",open:p},tags:["package:@ui5/webcomponents"]},o={render:t=>{const[l,n]=s.useState(t.open);return s.useEffect(()=>{n(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>{n(!0)},children:"Open Dialog"}),e.jsx(i,{...t,"data-sap-ui-fastnavgroup":"true",className:"contentPartNoPadding footerPartNoPadding",open:l,onClose:d=>{t.onClose(d),n(!1)},footer:e.jsx(u,{design:"Footer",endContent:e.jsx(r,{"data-sap-ui-fastnavgroup":"true",onClick:()=>{n(!1)},children:"Close"})})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [dialogOpen, setDialogOpen] = useState(args.open);
    useEffect(() => {
      setDialogOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={() => {
        setDialogOpen(true);
      }}>
          Open Dialog
        </Button>
        <Dialog {...args} data-sap-ui-fastnavgroup="true" className="contentPartNoPadding footerPartNoPadding" open={dialogOpen} onClose={e => {
        args.onClose(e);
        setDialogOpen(false);
      }} footer={<Bar design="Footer" endContent={<Button data-sap-ui-fastnavgroup="true" onClick={() => {
        setDialogOpen(false);
      }}>
                  Close
                </Button>} />} />
      </>;
  }
}`,...o.parameters?.docs?.source}}};const f=["Default"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:f,default:g},Symbol.toStringTag,{value:"Module"}));export{O as C,o as D};

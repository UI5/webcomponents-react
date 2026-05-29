import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{$a as r,Ar as i,Ba as a,Cr as o,Fo as s,Gl as c,Io as l,Kl as u,Lo as d,Qa as f,Ro as p,Wl as m,Za as h,_r as g,eo as _,gr as v,jr as y,lh as b,lt as x,mt as S,pt as C,ql as w,r as T,ut as E,vp as D,wr as O,yp as k,za as A,zg as j}from"./iframe-B73QjgGR.js";var M=e({Default:()=>I,WithCustomTabs:()=>L,__namedExportsOrder:()=>R,default:()=>F}),N,P,F,I,L,R,z=n((()=>{T(),N=t(j(),1),k(),p(),l(),_(),f(),a(),w(),c(),y(),O(),g(),E(),S(),P=b(),F={title:`Modals & Popovers / ViewSettingsDialog`,component:C,argTypes:{filterItems:{control:{disable:!0}},sortItems:{control:{disable:!0}},customTabs:{control:{disable:!0}}},args:{open:!1,filterItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(r,{text:`Position`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(h,{text:`CEO`}),(0,P.jsx)(h,{text:`CTO`}),(0,P.jsx)(h,{text:`CIO`})]})}),(0,P.jsx)(r,{text:`Department`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(h,{text:`Legal`}),(0,P.jsx)(h,{text:`Finance`}),(0,P.jsx)(h,{text:`Development`})]})})]}),sortItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(i,{text:`Name`}),(0,P.jsx)(i,{text:`Position`}),(0,P.jsx)(i,{text:`Company`}),(0,P.jsx)(i,{text:`Department`})]})},parameters:{chromatic:{delay:999}},tags:[`package:@ui5/webcomponents-fiori`]},I={render:e=>{let[t,n]=(0,N.useState)(e.open);return(0,N.useEffect)(()=>{n(e.open)},[e.open]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(D,{onClick:()=>{n(!0)},children:`Show ViewSettingsDialog`}),(0,P.jsx)(C,{...e,open:t,onClose:t=>{n(!1),e.onClose(t)}})]})}},L={render:e=>{let[t,n]=(0,N.useState)(e.open);return(0,N.useEffect)(()=>{n(e.open)},[e.open]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(D,{onClick:()=>{n(!0)},children:`Show ViewSettingsDialog`}),(0,P.jsx)(C,{...e,open:t,onClose:t=>{n(!1),e.onClose(t)},sortItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(i,{text:`Name`,selected:!0}),(0,P.jsx)(i,{text:`Position`}),(0,P.jsx)(i,{text:`Company`}),(0,P.jsx)(i,{text:`Department`})]}),filterItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(r,{text:`Position`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(h,{text:`CTO`}),(0,P.jsx)(h,{text:`CPO`}),(0,P.jsx)(h,{text:`VP`})]})}),(0,P.jsx)(r,{text:`Department`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(h,{text:`Sales`}),(0,P.jsx)(h,{text:`Management`}),(0,P.jsx)(h,{text:`PR`})]})}),(0,P.jsx)(r,{text:`Location`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(h,{text:`Walldorf`}),(0,P.jsx)(h,{text:`New York`}),(0,P.jsx)(h,{text:`London`})]})})]}),groupItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(A,{text:`Name`,selected:!0}),(0,P.jsx)(A,{text:`Position`}),(0,P.jsx)(A,{text:`Company`}),(0,P.jsx)(A,{text:`Department`}),(0,P.jsx)(A,{text:`(Not Grouped)`})]}),customTabs:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(x,{titleText:`Preferences`,tooltip:`Preferences`,icon:`action-settings`,children:(0,P.jsxs)(`div`,{style:{padding:`0.75rem`,display:`grid`,gap:`0.75rem`},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`0.75rem`},children:[(0,P.jsx)(`span`,{children:`Compact mode`}),(0,P.jsx)(v,{})]}),(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`0.75rem`},children:[(0,P.jsx)(`span`,{children:`Live updates`}),(0,P.jsx)(v,{checked:!0})]}),(0,P.jsxs)(u,{children:[(0,P.jsx)(m,{selected:!0,children:`Cozy`}),(0,P.jsx)(m,{children:`Compact`})]})]})}),(0,P.jsx)(x,{icon:`palette`,titleText:`Display`,tooltip:`Display`,children:(0,P.jsxs)(`div`,{style:{padding:`0.75rem`,display:`grid`,gap:`0.75rem`},children:[(0,P.jsxs)(u,{children:[(0,P.jsx)(m,{selected:!0,children:`List`}),(0,P.jsx)(m,{children:`Grid`})]}),(0,P.jsxs)(d,{placeholder:`Theme`,children:[(0,P.jsx)(s,{text:`Default`}),(0,P.jsx)(s,{text:`High Contrast`}),(0,P.jsx)(s,{text:`Compact Light`})]}),(0,P.jsx)(o,{min:10,max:100,value:25})]})})]})})]})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={() => {
        setOpen(true);
      }}>
          Show ViewSettingsDialog
        </Button>
        <ViewSettingsDialog {...args} open={open} onClose={e => {
        setOpen(false);
        args.onClose(e);
      }} />
      </>;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={() => {
        setOpen(true);
      }}>
          Show ViewSettingsDialog
        </Button>
        <ViewSettingsDialog {...args} open={open} onClose={e => {
        setOpen(false);
        args.onClose(e);
      }} sortItems={<>
              <SortItem text="Name" selected />
              <SortItem text="Position" />
              <SortItem text="Company" />
              <SortItem text="Department" />
            </>} filterItems={<>
              <FilterItem text="Position" values={<>
                    <FilterItemOption text="CTO" />
                    <FilterItemOption text="CPO" />
                    <FilterItemOption text="VP" />
                  </>} />
              <FilterItem text="Department" values={<>
                    <FilterItemOption text="Sales" />
                    <FilterItemOption text="Management" />
                    <FilterItemOption text="PR" />
                  </>} />
              <FilterItem text="Location" values={<>
                    <FilterItemOption text="Walldorf" />
                    <FilterItemOption text="New York" />
                    <FilterItemOption text="London" />
                  </>} />
            </>} groupItems={<>
              <GroupItem text="Name" selected />
              <GroupItem text="Position" />
              <GroupItem text="Company" />
              <GroupItem text="Department" />
              <GroupItem text="(Not Grouped)" />
            </>} customTabs={<>
              <ViewSettingsDialogCustomTab titleText="Preferences" tooltip="Preferences" icon="action-settings">
                <div style={{
            padding: '0.75rem',
            display: 'grid',
            gap: '0.75rem'
          }}>
                  <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem'
            }}>
                    <span>Compact mode</span>
                    <Switch />
                  </div>
                  <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem'
            }}>
                    <span>Live updates</span>
                    <Switch checked />
                  </div>
                  <SegmentedButton>
                    <SegmentedButtonItem selected>Cozy</SegmentedButtonItem>
                    <SegmentedButtonItem>Compact</SegmentedButtonItem>
                  </SegmentedButton>
                </div>
              </ViewSettingsDialogCustomTab>
              <ViewSettingsDialogCustomTab icon="palette" titleText="Display" tooltip="Display">
                <div style={{
            padding: '0.75rem',
            display: 'grid',
            gap: '0.75rem'
          }}>
                  <SegmentedButton>
                    <SegmentedButtonItem selected>List</SegmentedButtonItem>
                    <SegmentedButtonItem>Grid</SegmentedButtonItem>
                  </SegmentedButton>
                  <ComboBox placeholder="Theme">
                    <ComboBoxItem text="Default" />
                    <ComboBoxItem text="High Contrast" />
                    <ComboBoxItem text="Compact Light" />
                  </ComboBox>
                  <StepInput min={10} max={100} value={25} />
                </div>
              </ViewSettingsDialogCustomTab>
            </>} />
      </>;
  }
}`,...L.parameters?.docs?.source}}},R=[`Default`,`WithCustomTabs`]}));z();export{I as Default,L as WithCustomTabs,R as __namedExportsOrder,F as default,z as n,M as t};
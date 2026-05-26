import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{Bo as r,Dr as i,Fr as a,Ho as o,Jl as s,Or as c,Pr as l,Ua as u,Vo as d,Wa as f,Xl as p,Yl as m,Zl as h,br as g,io as _,lh as v,lt as y,mt as b,no as x,pt as S,r as C,ro as w,to as T,ut as E,vp as D,xr as O,yp as k,zg as A,zo as j}from"./iframe-MMKXuBzx.js";var M=e({Default:()=>I,WithCustomTabs:()=>L,__namedExportsOrder:()=>R,default:()=>F}),N,P,F,I,L,R,z=n((()=>{C(),N=t(A(),1),k(),o(),r(),_(),x(),f(),h(),m(),a(),c(),O(),E(),b(),P=v(),F={title:`Modals & Popovers / ViewSettingsDialog`,component:S,argTypes:{filterItems:{control:{disable:!0}},sortItems:{control:{disable:!0}},customTabs:{control:{disable:!0}}},args:{open:!1,filterItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(w,{text:`Position`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{text:`CEO`}),(0,P.jsx)(T,{text:`CTO`}),(0,P.jsx)(T,{text:`CIO`})]})}),(0,P.jsx)(w,{text:`Department`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{text:`Legal`}),(0,P.jsx)(T,{text:`Finance`}),(0,P.jsx)(T,{text:`Development`})]})})]}),sortItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(l,{text:`Name`}),(0,P.jsx)(l,{text:`Position`}),(0,P.jsx)(l,{text:`Company`}),(0,P.jsx)(l,{text:`Department`})]})},parameters:{chromatic:{delay:999}},tags:[`package:@ui5/webcomponents-fiori`]},I={render:e=>{let[t,n]=(0,N.useState)(e.open);return(0,N.useEffect)(()=>{n(e.open)},[e.open]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(D,{onClick:()=>{n(!0)},children:`Show ViewSettingsDialog`}),(0,P.jsx)(S,{...e,open:t,onClose:t=>{n(!1),e.onClose(t)}})]})}},L={render:e=>{let[t,n]=(0,N.useState)(e.open);return(0,N.useEffect)(()=>{n(e.open)},[e.open]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(D,{onClick:()=>{n(!0)},children:`Show ViewSettingsDialog`}),(0,P.jsx)(S,{...e,open:t,onClose:t=>{n(!1),e.onClose(t)},sortItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(l,{text:`Name`,selected:!0}),(0,P.jsx)(l,{text:`Position`}),(0,P.jsx)(l,{text:`Company`}),(0,P.jsx)(l,{text:`Department`})]}),filterItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(w,{text:`Position`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{text:`CTO`}),(0,P.jsx)(T,{text:`CPO`}),(0,P.jsx)(T,{text:`VP`})]})}),(0,P.jsx)(w,{text:`Department`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{text:`Sales`}),(0,P.jsx)(T,{text:`Management`}),(0,P.jsx)(T,{text:`PR`})]})}),(0,P.jsx)(w,{text:`Location`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{text:`Walldorf`}),(0,P.jsx)(T,{text:`New York`}),(0,P.jsx)(T,{text:`London`})]})})]}),groupItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(u,{text:`Name`,selected:!0}),(0,P.jsx)(u,{text:`Position`}),(0,P.jsx)(u,{text:`Company`}),(0,P.jsx)(u,{text:`Department`}),(0,P.jsx)(u,{text:`(Not Grouped)`})]}),customTabs:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(y,{titleText:`Preferences`,tooltip:`Preferences`,icon:`action-settings`,children:(0,P.jsxs)(`div`,{style:{padding:`0.75rem`,display:`grid`,gap:`0.75rem`},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`0.75rem`},children:[(0,P.jsx)(`span`,{children:`Compact mode`}),(0,P.jsx)(g,{})]}),(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`0.75rem`},children:[(0,P.jsx)(`span`,{children:`Live updates`}),(0,P.jsx)(g,{checked:!0})]}),(0,P.jsxs)(p,{children:[(0,P.jsx)(s,{selected:!0,children:`Cozy`}),(0,P.jsx)(s,{children:`Compact`})]})]})}),(0,P.jsx)(y,{icon:`palette`,titleText:`Display`,tooltip:`Display`,children:(0,P.jsxs)(`div`,{style:{padding:`0.75rem`,display:`grid`,gap:`0.75rem`},children:[(0,P.jsxs)(p,{children:[(0,P.jsx)(s,{selected:!0,children:`List`}),(0,P.jsx)(s,{children:`Grid`})]}),(0,P.jsxs)(d,{placeholder:`Theme`,children:[(0,P.jsx)(j,{text:`Default`}),(0,P.jsx)(j,{text:`High Contrast`}),(0,P.jsx)(j,{text:`Compact Light`})]}),(0,P.jsx)(i,{min:10,max:100,value:25})]})})]})})]})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
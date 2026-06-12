import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{Bo as r,Cp as i,Dr as a,Er as o,Ga as s,Ho as c,Nr as l,Pr as u,Ql as d,Uo as f,Vo as p,Wa as m,Wg as h,Xl as g,Yl as _,Zl as v,ao as y,br as b,io as x,lt as S,mh as C,mt as w,no as T,pt as E,r as D,ro as O,ut as k,wp as A,yr as j}from"./iframe-TnKwsNrM.js";var M=e({Default:()=>I,WithCustomTabs:()=>L,__namedExportsOrder:()=>R,default:()=>F}),N,P,F,I,L,R,z=n((()=>{D(),N=t(h(),1),A(),f(),p(),y(),O(),s(),d(),g(),u(),a(),b(),k(),w(),P=C(),F={title:`Modals & Popovers / ViewSettingsDialog`,component:E,argTypes:{filterItems:{control:{disable:!0}},sortItems:{control:{disable:!0}},customTabs:{control:{disable:!0}}},args:{open:!1,filterItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(x,{text:`Position`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{text:`CEO`}),(0,P.jsx)(T,{text:`CTO`}),(0,P.jsx)(T,{text:`CIO`})]})}),(0,P.jsx)(x,{text:`Department`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{text:`Legal`}),(0,P.jsx)(T,{text:`Finance`}),(0,P.jsx)(T,{text:`Development`})]})})]}),sortItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(l,{text:`Name`}),(0,P.jsx)(l,{text:`Position`}),(0,P.jsx)(l,{text:`Company`}),(0,P.jsx)(l,{text:`Department`})]})},parameters:{chromatic:{delay:999}},tags:[`package:@ui5/webcomponents-fiori`]},I={render:e=>{let[t,n]=(0,N.useState)(e.open);return(0,N.useEffect)(()=>{n(e.open)},[e.open]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(i,{onClick:()=>{n(!0)},children:`Show ViewSettingsDialog`}),(0,P.jsx)(E,{...e,open:t,onClose:t=>{n(!1),e.onClose(t)}})]})}},L={render:e=>{let[t,n]=(0,N.useState)(e.open);return(0,N.useEffect)(()=>{n(e.open)},[e.open]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(i,{onClick:()=>{n(!0)},children:`Show ViewSettingsDialog`}),(0,P.jsx)(E,{...e,open:t,onClose:t=>{n(!1),e.onClose(t)},sortItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(l,{text:`Name`,selected:!0}),(0,P.jsx)(l,{text:`Position`}),(0,P.jsx)(l,{text:`Company`}),(0,P.jsx)(l,{text:`Department`})]}),filterItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(x,{text:`Position`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{text:`CTO`}),(0,P.jsx)(T,{text:`CPO`}),(0,P.jsx)(T,{text:`VP`})]})}),(0,P.jsx)(x,{text:`Department`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{text:`Sales`}),(0,P.jsx)(T,{text:`Management`}),(0,P.jsx)(T,{text:`PR`})]})}),(0,P.jsx)(x,{text:`Location`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{text:`Walldorf`}),(0,P.jsx)(T,{text:`New York`}),(0,P.jsx)(T,{text:`London`})]})})]}),groupItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(m,{text:`Name`,selected:!0}),(0,P.jsx)(m,{text:`Position`}),(0,P.jsx)(m,{text:`Company`}),(0,P.jsx)(m,{text:`Department`}),(0,P.jsx)(m,{text:`(Not Grouped)`})]}),customTabs:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(S,{titleText:`Preferences`,tooltip:`Preferences`,icon:`action-settings`,children:(0,P.jsxs)(`div`,{style:{padding:`0.75rem`,display:`grid`,gap:`0.75rem`},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`0.75rem`},children:[(0,P.jsx)(`span`,{children:`Compact mode`}),(0,P.jsx)(j,{})]}),(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`0.75rem`},children:[(0,P.jsx)(`span`,{children:`Live updates`}),(0,P.jsx)(j,{checked:!0})]}),(0,P.jsxs)(v,{children:[(0,P.jsx)(_,{selected:!0,children:`Cozy`}),(0,P.jsx)(_,{children:`Compact`})]})]})}),(0,P.jsx)(S,{icon:`palette`,titleText:`Display`,tooltip:`Display`,children:(0,P.jsxs)(`div`,{style:{padding:`0.75rem`,display:`grid`,gap:`0.75rem`},children:[(0,P.jsxs)(v,{children:[(0,P.jsx)(_,{selected:!0,children:`List`}),(0,P.jsx)(_,{children:`Grid`})]}),(0,P.jsxs)(c,{placeholder:`Theme`,children:[(0,P.jsx)(r,{text:`Default`}),(0,P.jsx)(r,{text:`High Contrast`}),(0,P.jsx)(r,{text:`Compact Light`})]}),(0,P.jsx)(o,{min:10,max:100,value:25})]})})]})})]})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
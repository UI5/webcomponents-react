import{a as e,c as t,i as n}from"./preload-helper-DbRxMUml.js";import{Ao as r,Bl as i,Dr as a,Fm as o,Ga as s,Ja as c,Ka as l,Mo as u,Na as d,Or as f,Pa as p,Rl as m,Vl as h,at as g,br as _,ct as v,it as y,jo as b,ko as x,lt as S,mr as C,ng as w,np as T,pr as E,qa as D,r as O,rp as k,xr as A,zl as j}from"./iframe-DGtyr4px.js";var M=e({Default:()=>I,WithCustomTabs:()=>L,__namedExportsOrder:()=>R,default:()=>F}),N,P,F,I,L,R,z=n((()=>{O(),N=t(w(),1),k(),u(),r(),c(),l(),p(),h(),j(),f(),A(),C(),g(),S(),P=o(),F={title:`Modals & Popovers / ViewSettingsDialog`,component:v,argTypes:{filterItems:{control:{disable:!0}},sortItems:{control:{disable:!0}},customTabs:{control:{disable:!0}}},args:{open:!1,filterItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(D,{text:`Position`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(s,{text:`CEO`}),(0,P.jsx)(s,{text:`CTO`}),(0,P.jsx)(s,{text:`CIO`})]})}),(0,P.jsx)(D,{text:`Department`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(s,{text:`Legal`}),(0,P.jsx)(s,{text:`Finance`}),(0,P.jsx)(s,{text:`Development`})]})})]}),sortItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(a,{text:`Name`}),(0,P.jsx)(a,{text:`Position`}),(0,P.jsx)(a,{text:`Company`}),(0,P.jsx)(a,{text:`Department`})]})},parameters:{chromatic:{delay:999}},tags:[`package:@ui5/webcomponents-fiori`]},I={render:e=>{let[t,n]=(0,N.useState)(e.open);return(0,N.useEffect)(()=>{n(e.open)},[e.open]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{onClick:()=>{n(!0)},children:`Show ViewSettingsDialog`}),(0,P.jsx)(v,{...e,open:t,onClose:t=>{n(!1),e.onClose(t)}})]})}},L={render:e=>{let[t,n]=(0,N.useState)(e.open);return(0,N.useEffect)(()=>{n(e.open)},[e.open]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{onClick:()=>{n(!0)},children:`Show ViewSettingsDialog`}),(0,P.jsx)(v,{...e,open:t,onClose:t=>{n(!1),e.onClose(t)},sortItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(a,{text:`Name`,selected:!0}),(0,P.jsx)(a,{text:`Position`}),(0,P.jsx)(a,{text:`Company`}),(0,P.jsx)(a,{text:`Department`})]}),filterItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(D,{text:`Position`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(s,{text:`CTO`}),(0,P.jsx)(s,{text:`CPO`}),(0,P.jsx)(s,{text:`VP`})]})}),(0,P.jsx)(D,{text:`Department`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(s,{text:`Sales`}),(0,P.jsx)(s,{text:`Management`}),(0,P.jsx)(s,{text:`PR`})]})}),(0,P.jsx)(D,{text:`Location`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(s,{text:`Walldorf`}),(0,P.jsx)(s,{text:`New York`}),(0,P.jsx)(s,{text:`London`})]})})]}),groupItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(d,{text:`Name`,selected:!0}),(0,P.jsx)(d,{text:`Position`}),(0,P.jsx)(d,{text:`Company`}),(0,P.jsx)(d,{text:`Department`}),(0,P.jsx)(d,{text:`(Not Grouped)`})]}),customTabs:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(y,{titleText:`Preferences`,tooltip:`Preferences`,icon:`action-settings`,children:(0,P.jsxs)(`div`,{style:{padding:`0.75rem`,display:`grid`,gap:`0.75rem`},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`0.75rem`},children:[(0,P.jsx)(`span`,{children:`Compact mode`}),(0,P.jsx)(E,{})]}),(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`0.75rem`},children:[(0,P.jsx)(`span`,{children:`Live updates`}),(0,P.jsx)(E,{checked:!0})]}),(0,P.jsxs)(i,{children:[(0,P.jsx)(m,{selected:!0,children:`Cozy`}),(0,P.jsx)(m,{children:`Compact`})]})]})}),(0,P.jsx)(y,{icon:`palette`,titleText:`Display`,tooltip:`Display`,children:(0,P.jsxs)(`div`,{style:{padding:`0.75rem`,display:`grid`,gap:`0.75rem`},children:[(0,P.jsxs)(i,{children:[(0,P.jsx)(m,{selected:!0,children:`List`}),(0,P.jsx)(m,{children:`Grid`})]}),(0,P.jsxs)(b,{placeholder:`Theme`,children:[(0,P.jsx)(x,{text:`Default`}),(0,P.jsx)(x,{text:`High Contrast`}),(0,P.jsx)(x,{text:`Compact Light`})]}),(0,P.jsx)(_,{min:10,max:100,value:25})]})})]})})]})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
import{n as e,o as t,r as n}from"./chunk-jRWAZmH_.js";import{t as r}from"./react-CMXXrKHu.js";import{t as i}from"./jsx-runtime-CeCnFQbk.js";import{n as a,t as o}from"./Button-Q7s7zOnO.js";import{i as s,n as c,r as l,t as u}from"./SegmentedButtonItem-dSbzqu3o.js";import{i as d,n as f,r as p,t as m}from"./ComboBoxItem-G0qb_New.js";import{c as h,d as g,f as _,i as v,l as y,m as b,n as x,p as S,r as C,s as w,t as T,u as E}from"./ViewSettingsDialogCustomTab-DOHg3RtJ.js";import{n as D,t as O}from"./StepInput-X8Ykb0zj.js";import{n as k,t as A}from"./Switch-Co55b966.js";import{r as j}from"./iframe-B6zqgjd9.js";var M=n({Default:()=>I,WithCustomTabs:()=>L,__namedExportsOrder:()=>R,default:()=>F}),N,P,F,I,L,R,z=e((()=>{j(),N=t(r(),1),a(),d(),f(),b(),_(),E(),s(),c(),h(),D(),k(),x(),v(),P=i(),F={title:`Modals & Popovers / ViewSettingsDialog`,component:C,argTypes:{filterItems:{control:{disable:!0}},sortItems:{control:{disable:!0}},customTabs:{control:{disable:!0}}},args:{open:!1,filterItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(S,{text:`Position`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(g,{text:`CEO`}),(0,P.jsx)(g,{text:`CTO`}),(0,P.jsx)(g,{text:`CIO`})]})}),(0,P.jsx)(S,{text:`Department`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(g,{text:`Legal`}),(0,P.jsx)(g,{text:`Finance`}),(0,P.jsx)(g,{text:`Development`})]})})]}),sortItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(w,{text:`Name`}),(0,P.jsx)(w,{text:`Position`}),(0,P.jsx)(w,{text:`Company`}),(0,P.jsx)(w,{text:`Department`})]})},parameters:{chromatic:{delay:999}},tags:[`package:@ui5/webcomponents-fiori`]},I={render:e=>{let[t,n]=(0,N.useState)(e.open);return(0,N.useEffect)(()=>{n(e.open)},[e.open]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(o,{onClick:()=>{n(!0)},children:`Show ViewSettingsDialog`}),(0,P.jsx)(C,{...e,open:t,onClose:t=>{n(!1),e.onClose(t)}})]})}},L={render:e=>{let[t,n]=(0,N.useState)(e.open);return(0,N.useEffect)(()=>{n(e.open)},[e.open]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(o,{onClick:()=>{n(!0)},children:`Show ViewSettingsDialog`}),(0,P.jsx)(C,{...e,open:t,onClose:t=>{n(!1),e.onClose(t)},sortItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(w,{text:`Name`,selected:!0}),(0,P.jsx)(w,{text:`Position`}),(0,P.jsx)(w,{text:`Company`}),(0,P.jsx)(w,{text:`Department`})]}),filterItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(S,{text:`Position`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(g,{text:`CTO`}),(0,P.jsx)(g,{text:`CPO`}),(0,P.jsx)(g,{text:`VP`})]})}),(0,P.jsx)(S,{text:`Department`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(g,{text:`Sales`}),(0,P.jsx)(g,{text:`Management`}),(0,P.jsx)(g,{text:`PR`})]})}),(0,P.jsx)(S,{text:`Location`,values:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(g,{text:`Walldorf`}),(0,P.jsx)(g,{text:`New York`}),(0,P.jsx)(g,{text:`London`})]})})]}),groupItems:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(y,{text:`Name`,selected:!0}),(0,P.jsx)(y,{text:`Position`}),(0,P.jsx)(y,{text:`Company`}),(0,P.jsx)(y,{text:`Department`}),(0,P.jsx)(y,{text:`(Not Grouped)`})]}),customTabs:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{titleText:`Preferences`,tooltip:`Preferences`,icon:`action-settings`,children:(0,P.jsxs)(`div`,{style:{padding:`0.75rem`,display:`grid`,gap:`0.75rem`},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`0.75rem`},children:[(0,P.jsx)(`span`,{children:`Compact mode`}),(0,P.jsx)(A,{})]}),(0,P.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`0.75rem`},children:[(0,P.jsx)(`span`,{children:`Live updates`}),(0,P.jsx)(A,{checked:!0})]}),(0,P.jsxs)(l,{children:[(0,P.jsx)(u,{selected:!0,children:`Cozy`}),(0,P.jsx)(u,{children:`Compact`})]})]})}),(0,P.jsx)(T,{icon:`palette`,titleText:`Display`,tooltip:`Display`,children:(0,P.jsxs)(`div`,{style:{padding:`0.75rem`,display:`grid`,gap:`0.75rem`},children:[(0,P.jsxs)(l,{children:[(0,P.jsx)(u,{selected:!0,children:`List`}),(0,P.jsx)(u,{children:`Grid`})]}),(0,P.jsxs)(p,{placeholder:`Theme`,children:[(0,P.jsx)(m,{text:`Default`}),(0,P.jsx)(m,{text:`High Contrast`}),(0,P.jsx)(m,{text:`Compact Light`})]}),(0,P.jsx)(O,{min:10,max:100,value:25})]})})]})})]})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
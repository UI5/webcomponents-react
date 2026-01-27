import{r as m,j as e,I as S,O as U,T as t,X as a}from"./iframe-BCLHYJgX.js";import{e as b,f as y,U as o,a as n,b as I,c as f,d as s}from"./action-settings-D4AYxsBu.js";import{S as P}from"./index-Oy3wJsZc.js";import{S as T}from"./index-Cth8JPBs.js";import{A as C}from"./index-_pVZ4H5C.js";import{U as _,a as z,b as R}from"./index-CQEz0EmU.js";import{L as i}from"./index-Cm3V18u1.js";import{P as u}from"./index-BMyrS_z9.js";import{a as M,C as c}from"./index-cPtq7-TP.js";import{R as A}from"./index-aJzH-8cU.js";import{C as B}from"./index-DyAhltwy.js";const L={title:"Modals & Popovers / UserSettingsDialog",component:b,argTypes:{children:{control:{disable:!0}},fixedItems:{control:{disable:!0}}},args:{},tags:["package:@ui5/webcomponents","experimental"]},p={render(r){const h=m.useRef(null),[j,g]=m.useState(!1),[v,x]=m.useState(r.open),w=l=>{const{settings:d}=l.detail.item.dataset;d&&x(!0)};return m.useEffect(()=>{x(r.open)},[r.open]),e.jsxs(e.Fragment,{children:[e.jsx(T,{primaryTitle:"Corporate Portal",logo:e.jsx("img",{src:"https://ui5.github.io/webcomponents/images/sap-logo-svg.svg",alt:"SAP Logo"}),profile:e.jsx(C,{children:e.jsx("img",{src:"https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png",alt:"Avatar of the current user"})}),onProfileClick:l=>{h.current.opener=l.detail.targetRef,h.current.open=!0,g(d=>!d)}}),e.jsx(_,{ref:h,open:j,accounts:e.jsx(R,{avatarSrc:"https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png",titleText:"Alaina Chevalier",subtitleText:"aliana.chevalier@sap.com",description:"Delivery Manager, SAP SE",selected:!0}),onClose:()=>{g(!1)},onItemClick:w,children:e.jsx(z,{icon:y,text:"Settings","data-settings":"true"})}),e.jsxs(b,{...r,open:v,onClose:l=>{r.onClose(l),x(!1)},children:[e.jsx(o,{icon:"user-settings",text:"User Account",tooltip:"User Account",headerText:"User Account",tabs:e.jsx(e.Fragment,{children:e.jsxs(n,{children:[e.jsx(S,{name:"person-placeholder"}),e.jsx(U,{level:"H3",size:"H3",className:"ua-name",children:"Alain Chevalier"}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"ua-info-item",children:[e.jsx(i,{for:"name",children:"Name:"}),e.jsx(t,{children:"Alain Chevalier"})]}),e.jsxs("div",{className:"ua-info-item",children:[e.jsx(i,{for:"email",children:"Email:"}),e.jsx(t,{children:"alian.chevalier@sap.com"})]}),e.jsxs("div",{className:"ua-info-item",children:[e.jsx(i,{for:"server",children:"Server:"}),e.jsx(t,{children:"delivery-001.sap.com"})]})]}),e.jsx(i,{for:"reset-all-button",children:"Personalization"}),e.jsx("br",{}),e.jsx(a,{children:"Reset All Personalization"}),e.jsx(u,{fixed:!0,className:"ua-panel",children:e.jsx(t,{children:"Reset your personalization settings for the launchpad (such as theme, language, user activities, and home page content)."})})]})})}),e.jsx(o,{icon:"palette",text:"Appearance",tooltip:"Appearance",headerText:"Appearance",children:e.jsxs(I,{text:"Themes",additionalContent:e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem",width:"100%"},children:[e.jsx(t,{children:"Optimize for Touch Input"}),e.jsx(P,{})]}),e.jsx(t,{style:{display:"block",color:"var(--sapContent_LabelColor)",fontSize:"var(--sapFontSmallSize)"},children:"Increases the size and spacing of controls to allow you to interact with them more easily using your fingertip. This is useful for hybrid devices that combine touch and mouse events."})]}),children:[e.jsxs(f,{headerText:"SAP Horizon",children:[e.jsx(s,{itemKey:"sap_horizon",text:"SAP Morning Horizon"}),e.jsx(s,{itemKey:"sap_horizon_dark",text:"SAP Evening Horizon"}),e.jsx(s,{itemKey:"sap_horizon_hcb",text:"SAP Horizon High Contrast Black"}),e.jsx(s,{itemKey:"sap_horizon_hcw",text:"SAP Horizon High Contrast White"})]}),e.jsxs(f,{headerText:"SAP Quartz",children:[e.jsx(s,{itemKey:"sap_fiori_3",text:"SAP Quartz Light"}),e.jsx(s,{itemKey:"sap_fiori_3_dark",text:"SAP Quartz Dark"}),e.jsx(s,{itemKey:"sap_fiori_3_hcb",text:"SAP Quartz High Contrast Black"}),e.jsx(s,{itemKey:"sap_fiori_3_hcw",text:"SAP Quartz High Contrast White"})]})]})}),e.jsx(o,{text:"Language & Region",tooltip:"Language & Region",headerText:"Language & Region",tabs:e.jsxs(n,{children:[e.jsxs("div",{className:"us-container",children:[e.jsxs("div",{className:"lr-item",children:[e.jsx(i,{children:"Language and Region:"}),e.jsxs(M,{placeholder:"Language",children:[e.jsx(c,{text:"Browse Language"}),e.jsx(c,{text:"English"}),e.jsx(c,{text:"European Spanish"}),e.jsx(c,{text:"French (France)"}),e.jsx(c,{text:"Germany"})]})]}),e.jsxs("div",{className:"lr-item",children:[e.jsx(i,{for:"format",children:"Date Format:"}),e.jsx(t,{children:"MMM d, y"})]})]}),e.jsx(u,{fixed:!0,children:e.jsx(i,{children:`The time zone will not be applied in UI5 apps. If you don't know the type of an app, you can check it in the "About" dialog in the "ID of the Application Framework” field.`})}),e.jsx("br",{}),e.jsxs("div",{className:"lt-time-format",children:[e.jsx(i,{for:"timeFormat",children:"Time Format:"}),e.jsx(A,{name:"timeFormat",text:"12h"}),e.jsx(A,{checked:!0,name:"timeFormat",text:"24h"})]}),e.jsx(u,{fixed:!0,children:e.jsx(i,{children:"After you save your settings, the browser will refresh for the new settings to take effect."})})]})}),e.jsxs(o,{icon:"iphone",text:"SAP Mobile Start Application",tooltip:"SAP Mobile Start Application",headerText:"SAP Mobile Start Application",children:[e.jsxs(n,{slot:"pages",children:[e.jsx(a,{children:"iOS"}),e.jsx(a,{children:"Android"})]}),e.jsxs(n,{slot:"pages",text:"Inner Page",secondary:!0,children:[e.jsx(t,{children:"Enable access to your site from the SAP Mobile Start application."}),e.jsx(a,{children:"Install"}),e.jsx(a,{children:"Register"}),e.jsx(t,{children:"Scan the QR Code to install the mobile application"}),e.jsx(S,{name:"qr-code",style:{width:"20rem",height:"20rem"}})]})]}),e.jsx(o,{icon:"bell",text:"Notifications",tooltip:"Notifications",headerText:"Notifications",children:e.jsx(n,{slot:"pages",children:e.jsx(B,{checked:!0,text:"Show High-Priority Notification Alerts"})})}),e.jsxs(o,{icon:"reset",slot:"fixedItems",text:"Reset Settings",tooltip:"Reset Settings",headerText:"Reset Settings",children:[e.jsx(n,{text:"Reset Personalization",children:e.jsx(a,{children:"Reset Personalization content"})}),e.jsx(n,{text:"Reset All Settings",children:e.jsx(a,{children:"Reset All Settings content"})})]})]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render(args) {
    const userMenuRef = useRef<UserMenuDomRef>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [open, setOpen] = useState(args.open);
    const handleUserMenuItemClick: UserMenuPropTypes['onItemClick'] = e => {
      const {
        settings
      } = e.detail.item.dataset;
      if (settings) {
        setOpen(true);
      }
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <ShellBar primaryTitle={'Corporate Portal'} logo={<img src="https://ui5.github.io/webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />} profile={<Avatar>
              <img src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png" alt={'Avatar of the current user'} />
            </Avatar>} onProfileClick={event => {
        userMenuRef.current.opener = event.detail.targetRef;
        userMenuRef.current.open = true;
        setMenuOpen(prev => !prev);
      }} />
        <UserMenu ref={userMenuRef} open={menuOpen} accounts={<UserMenuAccount avatarSrc="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png" titleText="Alaina Chevalier" subtitleText="aliana.chevalier@sap.com" description="Delivery Manager, SAP SE" selected />} onClose={() => {
        setMenuOpen(false);
      }} onItemClick={handleUserMenuItemClick}>
          <UserMenuItem icon={actionSettingsIcon} text="Settings" data-settings={'true'} />
        </UserMenu>
        <UserSettingsDialog {...args} open={open} onClose={e => {
        args.onClose(e);
        setOpen(false);
      }}>
          <UserSettingsItem icon="user-settings" text="User Account" tooltip="User Account" headerText="User Account" tabs={<>
                <UserSettingsView>
                  <Icon name="person-placeholder" />
                  <Title level="H3" size="H3" className="ua-name">
                    Alain Chevalier
                  </Title>
                  <div className="container">
                    <div className="ua-info-item">
                      <Label for="name">Name:</Label>
                      <Text>Alain Chevalier</Text>
                    </div>
                    <div className="ua-info-item">
                      <Label for="email">Email:</Label>
                      <Text>alian.chevalier@sap.com</Text>
                    </div>
                    <div className="ua-info-item">
                      <Label for="server">Server:</Label>
                      <Text>delivery-001.sap.com</Text>
                    </div>
                  </div>
                  <Label for="reset-all-button">Personalization</Label>
                  <br />
                  <Button>Reset All Personalization</Button>
                  <Panel fixed className="ua-panel">
                    <Text>
                      Reset your personalization settings for the launchpad (such as theme, language, user activities,
                      and home page content).
                    </Text>
                  </Panel>
                </UserSettingsView>
              </>} />
          <UserSettingsItem icon="palette" text="Appearance" tooltip="Appearance" headerText="Appearance">
            <UserSettingsAppearanceView text="Themes" additionalContent={<div>
                  <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.5rem',
              width: '100%'
            }}>
                    <Text>Optimize for Touch Input</Text>
                    <Switch />
                  </div>

                  <Text style={{
              display: 'block',
              color: 'var(--sapContent_LabelColor)',
              fontSize: 'var(--sapFontSmallSize)'
            }}>
                    Increases the size and spacing of controls to allow you to interact with them more easily using your
                    fingertip. This is useful for hybrid devices that combine touch and mouse events.
                  </Text>
                </div>}>
              <UserSettingsAppearanceViewGroup headerText="SAP Horizon">
                <UserSettingsAppearanceViewItem itemKey="sap_horizon" text="SAP Morning Horizon" />
                <UserSettingsAppearanceViewItem itemKey="sap_horizon_dark" text="SAP Evening Horizon" />
                <UserSettingsAppearanceViewItem itemKey="sap_horizon_hcb" text="SAP Horizon High Contrast Black" />
                <UserSettingsAppearanceViewItem itemKey="sap_horizon_hcw" text="SAP Horizon High Contrast White" />
              </UserSettingsAppearanceViewGroup>

              <UserSettingsAppearanceViewGroup headerText="SAP Quartz">
                <UserSettingsAppearanceViewItem itemKey="sap_fiori_3" text="SAP Quartz Light" />
                <UserSettingsAppearanceViewItem itemKey="sap_fiori_3_dark" text="SAP Quartz Dark" />
                <UserSettingsAppearanceViewItem itemKey="sap_fiori_3_hcb" text="SAP Quartz High Contrast Black" />
                <UserSettingsAppearanceViewItem itemKey="sap_fiori_3_hcw" text="SAP Quartz High Contrast White" />
              </UserSettingsAppearanceViewGroup>
            </UserSettingsAppearanceView>
          </UserSettingsItem>
          <UserSettingsItem text="Language & Region" tooltip="Language & Region" headerText="Language & Region" tabs={<UserSettingsView>
                <div className="us-container">
                  <div className="lr-item">
                    <Label>Language and Region:</Label>
                    <ComboBox placeholder="Language">
                      <ComboBoxItem text="Browse Language" />
                      <ComboBoxItem text="English" />
                      <ComboBoxItem text="European Spanish" />
                      <ComboBoxItem text="French (France)" />
                      <ComboBoxItem text="Germany" />
                    </ComboBox>
                  </div>
                  <div className="lr-item">
                    <Label for="format">Date Format:</Label>
                    <Text>MMM d, y</Text>
                  </div>
                </div>
                <Panel fixed>
                  <Label>
                    The time zone will not be applied in UI5 apps. If you don't know the type of an app, you can check
                    it in the "About" dialog in the "ID of the Application Framework” field.
                  </Label>
                </Panel>
                <br />
                <div className="lt-time-format">
                  <Label for="timeFormat">Time Format:</Label>
                  <RadioButton name="timeFormat" text="12h" />
                  <RadioButton checked name="timeFormat" text="24h" />
                </div>
                <Panel fixed>
                  <Label>
                    After you save your settings, the browser will refresh for the new settings to take effect.
                  </Label>
                </Panel>
              </UserSettingsView>} />
          <UserSettingsItem icon="iphone" text="SAP Mobile Start Application" tooltip="SAP Mobile Start Application" headerText="SAP Mobile Start Application">
            <UserSettingsView slot="pages">
              <Button>iOS</Button>
              <Button>Android</Button>
            </UserSettingsView>
            <UserSettingsView slot="pages" text="Inner Page" secondary>
              <Text>Enable access to your site from the SAP Mobile Start application.</Text>
              <Button>Install</Button>
              <Button>Register</Button>
              <Text>Scan the QR Code to install the mobile application</Text>
              <Icon name="qr-code" style={{
              width: '20rem',
              height: '20rem'
            }} />
            </UserSettingsView>
          </UserSettingsItem>
          <UserSettingsItem icon="bell" text="Notifications" tooltip="Notifications" headerText="Notifications">
            <UserSettingsView slot="pages">
              <CheckBox checked text="Show High-Priority Notification Alerts" />
            </UserSettingsView>
          </UserSettingsItem>
          <UserSettingsItem icon="reset" slot="fixedItems" text="Reset Settings" tooltip="Reset Settings" headerText="Reset Settings">
            <UserSettingsView text="Reset Personalization">
              <Button>Reset Personalization content</Button>
            </UserSettingsView>
            <UserSettingsView text="Reset All Settings">
              <Button>Reset All Settings content</Button>
            </UserSettingsView>
          </UserSettingsItem>
        </UserSettingsDialog>
      </>;
  }
}`,...p.parameters?.docs?.source}}};const k=["Default"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:p,__namedExportsOrder:k,default:L},Symbol.toStringTag,{value:"Module"}));export{q as C,p as D};

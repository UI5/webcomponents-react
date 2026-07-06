import{a as e,c as t,i as n}from"./preload-helper-B45gAKPr.js";import{t as r}from"./react-CymAsZIc.js";import{t as i}from"./jsx-runtime-BBQGix-2.js";import{t as a}from"./CheckBox-B-ONK5B9.js";import{t as o}from"./Button-CIJA5dgp.js";import{t as s}from"./Icon-CgZ9gZut.js";import{t as c}from"./Text-BlFnteLf.js";import{t as l}from"./Title-C9ANmb1D.js";import{t as u}from"./Label-DC_HL0a-.js";import{a as d,r as f,t as p}from"./UserMenuItem-Dc6tT58c.js";import{at as m,c as h,d as g,f as _,i as v,l as y,n as b,o as x,p as S,s as C,u as w}from"./webComponents-Bz3sW0bp.js";import{t as T}from"./Avatar-CLhH09XA.js";import{r as E,t as D}from"./ComboBoxItem-T3ZiqIpk.js";import{t as O}from"./RadioButton-Dtn1jXHw.js";import{t as k}from"./ShellBar-CadXwmHt.js";import{n as A,t as j}from"./Switch-Cg20rlO0.js";import{n as M,t as N}from"./action-settings-BGWgqP8s.js";import{u as P}from"./iframe-BMDN21Mt.js";var F=e({Default:()=>z,__namedExportsOrder:()=>B,default:()=>R}),I,L,R,z,B,V=n((()=>{M(),P(),I=t(r(),1),A(),S(),g(),y(),C(),L=i(),R={title:`Modals & Popovers / UserSettingsDialog`,component:x,argTypes:{children:{control:{disable:!0}},fixedItems:{control:{disable:!0}}},args:{},tags:[`package:@ui5/webcomponents`]},z={render(e){let t=(0,I.useRef)(null),[n,r]=(0,I.useState)(!1),[i,g]=(0,I.useState)(e.open);return(0,I.useEffect)(()=>{g(e.open)},[e.open]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(k,{primaryTitle:`Corporate Portal`,logo:(0,L.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/sap-logo-svg.svg`,alt:`SAP Logo`}),profile:(0,L.jsx)(T,{children:(0,L.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,alt:`Avatar of the current user`})}),onProfileClick:e=>{t.current.opener=e.detail.targetRef,t.current.open=!0,r(e=>!e)}}),(0,L.jsx)(d,{ref:t,open:n,accounts:(0,L.jsx)(f,{avatarSrc:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,titleText:`Alaina Chevalier`,subtitleText:`aliana.chevalier@sap.com`,description:`Delivery Manager, SAP SE`,selected:!0}),onClose:()=>{r(!1)},onItemClick:e=>{let{settings:t}=e.detail.item.dataset;t&&g(!0)},children:(0,L.jsx)(p,{icon:N,text:`Settings`,"data-settings":`true`})}),(0,L.jsxs)(x,{...e,open:i,onClose:t=>{e.onClose(t),g(!1)},children:[(0,L.jsx)(v,{icon:`user-settings`,text:`User Account`,tooltip:`User Account`,headerText:`User Account`,tabs:(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)(b,{children:[(0,L.jsx)(s,{name:`person-placeholder`}),(0,L.jsx)(l,{level:`H3`,size:`H3`,className:`ua-name`,children:`Alain Chevalier`}),(0,L.jsxs)(`div`,{className:`container`,children:[(0,L.jsxs)(`div`,{className:`ua-info-item`,children:[(0,L.jsx)(u,{for:`name`,children:`Name:`}),(0,L.jsx)(c,{children:`Alain Chevalier`})]}),(0,L.jsxs)(`div`,{className:`ua-info-item`,children:[(0,L.jsx)(u,{for:`email`,children:`Email:`}),(0,L.jsx)(c,{children:`alian.chevalier@sap.com`})]}),(0,L.jsxs)(`div`,{className:`ua-info-item`,children:[(0,L.jsx)(u,{for:`server`,children:`Server:`}),(0,L.jsx)(c,{children:`delivery-001.sap.com`})]})]}),(0,L.jsx)(u,{for:`reset-all-button`,children:`Personalization`}),(0,L.jsx)(`br`,{}),(0,L.jsx)(o,{children:`Reset All Personalization`}),(0,L.jsx)(m,{fixed:!0,className:`ua-panel`,children:(0,L.jsx)(c,{children:`Reset your personalization settings for the launchpad (such as theme, language, user activities, and home page content).`})})]})})}),(0,L.jsx)(v,{icon:`palette`,text:`Appearance`,tooltip:`Appearance`,headerText:`Appearance`,children:(0,L.jsxs)(_,{text:`Themes`,additionalContent:(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`0.5rem`,width:`100%`},children:[(0,L.jsx)(c,{children:`Optimize for Touch Input`}),(0,L.jsx)(j,{})]}),(0,L.jsx)(c,{style:{display:`block`,color:`var(--sapContent_LabelColor)`,fontSize:`var(--sapFontSmallSize)`},children:`Increases the size and spacing of controls to allow you to interact with them more easily using your fingertip. This is useful for hybrid devices that combine touch and mouse events.`})]}),children:[(0,L.jsxs)(w,{headerText:`SAP Horizon`,children:[(0,L.jsx)(h,{itemKey:`sap_horizon`,text:`SAP Morning Horizon`}),(0,L.jsx)(h,{itemKey:`sap_horizon_dark`,text:`SAP Evening Horizon`}),(0,L.jsx)(h,{itemKey:`sap_horizon_hcb`,text:`SAP Horizon High Contrast Black`}),(0,L.jsx)(h,{itemKey:`sap_horizon_hcw`,text:`SAP Horizon High Contrast White`})]}),(0,L.jsxs)(w,{headerText:`SAP Quartz`,children:[(0,L.jsx)(h,{itemKey:`sap_fiori_3`,text:`SAP Quartz Light`}),(0,L.jsx)(h,{itemKey:`sap_fiori_3_dark`,text:`SAP Quartz Dark`}),(0,L.jsx)(h,{itemKey:`sap_fiori_3_hcb`,text:`SAP Quartz High Contrast Black`}),(0,L.jsx)(h,{itemKey:`sap_fiori_3_hcw`,text:`SAP Quartz High Contrast White`})]})]})}),(0,L.jsx)(v,{text:`Language & Region`,tooltip:`Language & Region`,headerText:`Language & Region`,tabs:(0,L.jsxs)(b,{children:[(0,L.jsxs)(`div`,{className:`us-container`,children:[(0,L.jsxs)(`div`,{className:`lr-item`,children:[(0,L.jsx)(u,{children:`Language and Region:`}),(0,L.jsxs)(E,{placeholder:`Language`,children:[(0,L.jsx)(D,{text:`Browse Language`}),(0,L.jsx)(D,{text:`English`}),(0,L.jsx)(D,{text:`European Spanish`}),(0,L.jsx)(D,{text:`French (France)`}),(0,L.jsx)(D,{text:`Germany`})]})]}),(0,L.jsxs)(`div`,{className:`lr-item`,children:[(0,L.jsx)(u,{for:`format`,children:`Date Format:`}),(0,L.jsx)(c,{children:`MMM d, y`})]})]}),(0,L.jsx)(m,{fixed:!0,children:(0,L.jsx)(u,{children:`The time zone will not be applied in UI5 apps. If you don't know the type of an app, you can check it in the "About" dialog in the "ID of the Application Framework” field.`})}),(0,L.jsx)(`br`,{}),(0,L.jsxs)(`div`,{className:`lt-time-format`,children:[(0,L.jsx)(u,{for:`timeFormat`,children:`Time Format:`}),(0,L.jsx)(O,{name:`timeFormat`,text:`12h`}),(0,L.jsx)(O,{checked:!0,name:`timeFormat`,text:`24h`})]}),(0,L.jsx)(m,{fixed:!0,children:(0,L.jsx)(u,{children:`After you save your settings, the browser will refresh for the new settings to take effect.`})})]})}),(0,L.jsxs)(v,{icon:`iphone`,text:`SAP Mobile Start Application`,tooltip:`SAP Mobile Start Application`,headerText:`SAP Mobile Start Application`,children:[(0,L.jsxs)(b,{slot:`pages`,children:[(0,L.jsx)(o,{children:`iOS`}),(0,L.jsx)(o,{children:`Android`})]}),(0,L.jsxs)(b,{slot:`pages`,text:`Inner Page`,secondary:!0,children:[(0,L.jsx)(c,{children:`Enable access to your site from the SAP Mobile Start application.`}),(0,L.jsx)(o,{children:`Install`}),(0,L.jsx)(o,{children:`Register`}),(0,L.jsx)(c,{children:`Scan the QR Code to install the mobile application`}),(0,L.jsx)(s,{name:`qr-code`,style:{width:`20rem`,height:`20rem`}})]})]}),(0,L.jsx)(v,{icon:`bell`,text:`Notifications`,tooltip:`Notifications`,headerText:`Notifications`,children:(0,L.jsx)(b,{slot:`pages`,children:(0,L.jsx)(a,{checked:!0,text:`Show High-Priority Notification Alerts`})})}),(0,L.jsxs)(v,{icon:`reset`,slot:`fixedItems`,text:`Reset Settings`,tooltip:`Reset Settings`,headerText:`Reset Settings`,children:[(0,L.jsx)(b,{text:`Reset Personalization`,children:(0,L.jsx)(o,{children:`Reset Personalization content`})}),(0,L.jsx)(b,{text:`Reset All Settings`,children:(0,L.jsx)(o,{children:`Reset All Settings content`})})]})]})]})}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B=[`Default`]}));V();export{z as Default,B as __namedExportsOrder,R as default,V as n,F as t};
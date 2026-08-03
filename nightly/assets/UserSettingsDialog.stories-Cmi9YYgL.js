import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-C21x__mS.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,t as a}from"./CheckBox-DSiCHua9.js";import{n as o,t as s}from"./Button-CuLaU2xr.js";import{n as ee,t as c}from"./Icon-BQ08mejE.js";import{n as l,t as u}from"./Text-AZE--NeU.js";import{n as d,t as f}from"./Title-BkQWmHky.js";import{n as p,t as m}from"./Label-CLsnJdtc.js";import{n as h,t as g}from"./Panel-pZChRNRV.js";import{n as _,t as v}from"./Avatar-CMX3XI_9.js";import{i as y,n as b,r as te,t as x}from"./ComboBoxItem-CBydPjZh.js";import{n as ne,t as S}from"./RadioButton-D8oDoNQo.js";import{n as C,t as w}from"./ShellBar-DaEbqp4i.js";import{n as T,t as E}from"./Switch-DMlJ36Zm.js";import{a as D,i as O,n as k,o as A,r as j,t as M}from"./UserMenuItem-DDMCiABv.js";import{a as N,c as P,d as F,f as I,i as L,l as R,n as z,o as B,r as V,s as H,t as U,u as W}from"./UserSettingsView-CMcgy8_z.js";import{n as G,t as K}from"./action-settings-vlvN0_lF.js";var q=t({Default:()=>Z,__namedExportsOrder:()=>Q,default:()=>X}),J,Y,X,Z,Q;function $(){return($=e((()=>{G(),_(),o(),y(),b(),ee(),l(),p(),h(),C(),A(),O(),k(),L(),z(),i(),d(),ne(),J=n(),T(),I(),W(),P(),B(),Y=r(),X={title:`Modals & Popovers / UserSettingsDialog`,component:N,argTypes:{children:{control:{disable:!0}},fixedItems:{control:{disable:!0}}},args:{},tags:[`package:@ui5/webcomponents`]},Z={render(e){let t=(0,J.useRef)(null),[n,r]=(0,J.useState)(!1),[i,o]=(0,J.useState)(e.open);return(0,J.useEffect)(()=>{o(e.open)},[e.open]),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(w,{primaryTitle:`Corporate Portal`,logo:(0,Y.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/sap-logo-svg.svg`,alt:`SAP Logo`}),profile:(0,Y.jsx)(v,{children:(0,Y.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,alt:`Avatar of the current user`})}),onProfileClick:e=>{t.current.opener=e.detail.targetRef,t.current.open=!0,r(e=>!e)}}),(0,Y.jsx)(D,{ref:t,open:n,accounts:(0,Y.jsx)(j,{avatarSrc:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,titleText:`Alaina Chevalier`,subtitleText:`aliana.chevalier@sap.com`,description:`Delivery Manager, SAP SE`,selected:!0}),onClose:()=>{r(!1)},onItemClick:e=>{let{settings:t}=e.detail.item.dataset;t&&o(!0)},children:(0,Y.jsx)(M,{icon:K,text:`Settings`,"data-settings":`true`})}),(0,Y.jsxs)(N,{...e,open:i,onClose:t=>{e.onClose(t),o(!1)},children:[(0,Y.jsx)(V,{icon:`user-settings`,text:`User Account`,tooltip:`User Account`,headerText:`User Account`,tabs:(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(U,{children:[(0,Y.jsx)(c,{name:`person-placeholder`}),(0,Y.jsx)(f,{level:`H3`,size:`H3`,className:`ua-name`,children:`Alain Chevalier`}),(0,Y.jsxs)(`div`,{className:`container`,children:[(0,Y.jsxs)(`div`,{className:`ua-info-item`,children:[(0,Y.jsx)(m,{for:`name`,children:`Name:`}),(0,Y.jsx)(u,{children:`Alain Chevalier`})]}),(0,Y.jsxs)(`div`,{className:`ua-info-item`,children:[(0,Y.jsx)(m,{for:`email`,children:`Email:`}),(0,Y.jsx)(u,{children:`alian.chevalier@sap.com`})]}),(0,Y.jsxs)(`div`,{className:`ua-info-item`,children:[(0,Y.jsx)(m,{for:`server`,children:`Server:`}),(0,Y.jsx)(u,{children:`delivery-001.sap.com`})]})]}),(0,Y.jsx)(m,{for:`reset-all-button`,children:`Personalization`}),(0,Y.jsx)(`br`,{}),(0,Y.jsx)(s,{children:`Reset All Personalization`}),(0,Y.jsx)(g,{fixed:!0,className:`ua-panel`,children:(0,Y.jsx)(u,{children:`Reset your personalization settings for the launchpad (such as theme, language, user activities, and home page content).`})})]})})}),(0,Y.jsx)(V,{icon:`palette`,text:`Appearance`,tooltip:`Appearance`,headerText:`Appearance`,children:(0,Y.jsxs)(F,{text:`Themes`,additionalContent:(0,Y.jsxs)(`div`,{children:[(0,Y.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`0.5rem`,width:`100%`},children:[(0,Y.jsx)(u,{children:`Optimize for Touch Input`}),(0,Y.jsx)(E,{})]}),(0,Y.jsx)(u,{style:{display:`block`,color:`var(--sapContent_LabelColor)`,fontSize:`var(--sapFontSmallSize)`},children:`Increases the size and spacing of controls to allow you to interact with them more easily using your fingertip. This is useful for hybrid devices that combine touch and mouse events.`})]}),children:[(0,Y.jsxs)(R,{headerText:`SAP Horizon`,children:[(0,Y.jsx)(H,{itemKey:`sap_horizon`,text:`SAP Morning Horizon`}),(0,Y.jsx)(H,{itemKey:`sap_horizon_dark`,text:`SAP Evening Horizon`}),(0,Y.jsx)(H,{itemKey:`sap_horizon_hcb`,text:`SAP Horizon High Contrast Black`}),(0,Y.jsx)(H,{itemKey:`sap_horizon_hcw`,text:`SAP Horizon High Contrast White`})]}),(0,Y.jsxs)(R,{headerText:`SAP Quartz`,children:[(0,Y.jsx)(H,{itemKey:`sap_fiori_3`,text:`SAP Quartz Light`}),(0,Y.jsx)(H,{itemKey:`sap_fiori_3_dark`,text:`SAP Quartz Dark`}),(0,Y.jsx)(H,{itemKey:`sap_fiori_3_hcb`,text:`SAP Quartz High Contrast Black`}),(0,Y.jsx)(H,{itemKey:`sap_fiori_3_hcw`,text:`SAP Quartz High Contrast White`})]})]})}),(0,Y.jsx)(V,{text:`Language & Region`,tooltip:`Language & Region`,headerText:`Language & Region`,tabs:(0,Y.jsxs)(U,{children:[(0,Y.jsxs)(`div`,{className:`us-container`,children:[(0,Y.jsxs)(`div`,{className:`lr-item`,children:[(0,Y.jsx)(m,{children:`Language and Region:`}),(0,Y.jsxs)(te,{placeholder:`Language`,children:[(0,Y.jsx)(x,{text:`Browse Language`}),(0,Y.jsx)(x,{text:`English`}),(0,Y.jsx)(x,{text:`European Spanish`}),(0,Y.jsx)(x,{text:`French (France)`}),(0,Y.jsx)(x,{text:`Germany`})]})]}),(0,Y.jsxs)(`div`,{className:`lr-item`,children:[(0,Y.jsx)(m,{for:`format`,children:`Date Format:`}),(0,Y.jsx)(u,{children:`MMM d, y`})]})]}),(0,Y.jsx)(g,{fixed:!0,children:(0,Y.jsx)(m,{children:`The time zone will not be applied in UI5 apps. If you don't know the type of an app, you can check it in the "About" dialog in the "ID of the Application Framework” field.`})}),(0,Y.jsx)(`br`,{}),(0,Y.jsxs)(`div`,{className:`lt-time-format`,children:[(0,Y.jsx)(m,{for:`timeFormat`,children:`Time Format:`}),(0,Y.jsx)(S,{name:`timeFormat`,text:`12h`}),(0,Y.jsx)(S,{checked:!0,name:`timeFormat`,text:`24h`})]}),(0,Y.jsx)(g,{fixed:!0,children:(0,Y.jsx)(m,{children:`After you save your settings, the browser will refresh for the new settings to take effect.`})})]})}),(0,Y.jsxs)(V,{icon:`iphone`,text:`SAP Mobile Start Application`,tooltip:`SAP Mobile Start Application`,headerText:`SAP Mobile Start Application`,children:[(0,Y.jsxs)(U,{slot:`pages`,children:[(0,Y.jsx)(s,{children:`iOS`}),(0,Y.jsx)(s,{children:`Android`})]}),(0,Y.jsxs)(U,{slot:`pages`,text:`Inner Page`,secondary:!0,children:[(0,Y.jsx)(u,{children:`Enable access to your site from the SAP Mobile Start application.`}),(0,Y.jsx)(s,{children:`Install`}),(0,Y.jsx)(s,{children:`Register`}),(0,Y.jsx)(u,{children:`Scan the QR Code to install the mobile application`}),(0,Y.jsx)(c,{name:`qr-code`,style:{width:`20rem`,height:`20rem`}})]})]}),(0,Y.jsx)(V,{icon:`bell`,text:`Notifications`,tooltip:`Notifications`,headerText:`Notifications`,children:(0,Y.jsx)(U,{slot:`pages`,children:(0,Y.jsx)(a,{checked:!0,text:`Show High-Priority Notification Alerts`})})}),(0,Y.jsxs)(V,{icon:`reset`,slot:`fixedItems`,text:`Reset Settings`,tooltip:`Reset Settings`,headerText:`Reset Settings`,children:[(0,Y.jsx)(U,{text:`Reset Personalization`,children:(0,Y.jsx)(s,{children:`Reset Personalization content`})}),(0,Y.jsx)(U,{text:`Reset All Settings`,children:(0,Y.jsx)(s,{children:`Reset All Settings content`})})]})]})]})}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`]})))()}export{q as n,$ as r,Z as t};
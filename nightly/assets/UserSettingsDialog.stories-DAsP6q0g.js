import{a as e,c as t,i as n}from"./preload-helper-usAeo7Bx.js";import{Al as r,At as i,Bp as a,Cf as o,Ci as s,Ct as c,Dt as l,Et as u,Ft as d,Hu as f,Jd as p,Lt as m,Ot as h,Ql as g,Tt as _,Vo as v,_t as y,br as b,bu as x,dt as S,ei as C,ft as w,kt as T,lh as E,u as D,vp as O,wt as k,xr as A,yt as j,zg as M,zo as N,zt as P}from"./iframe-k3VOpMSv.js";var F=e({Default:()=>z,__namedExportsOrder:()=>B,default:()=>R}),I,L,R,z,B,V=n((()=>{w(),D(),I=t(M(),1),A(),i(),h(),u(),k(),L=E(),R={title:`Modals & Popovers / UserSettingsDialog`,component:c,argTypes:{children:{control:{disable:!0}},fixedItems:{control:{disable:!0}}},args:{},tags:[`package:@ui5/webcomponents`]},z={render(e){let t=(0,I.useRef)(null),[n,i]=(0,I.useState)(!1),[u,h]=(0,I.useState)(e.open);return(0,I.useEffect)(()=>{h(e.open)},[e.open]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(C,{primaryTitle:`Corporate Portal`,logo:(0,L.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/sap-logo-svg.svg`,alt:`SAP Logo`}),profile:(0,L.jsx)(r,{children:(0,L.jsx)(`img`,{src:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,alt:`Avatar of the current user`})}),onProfileClick:e=>{t.current.opener=e.detail.targetRef,t.current.open=!0,i(e=>!e)}}),(0,L.jsx)(P,{ref:t,open:n,accounts:(0,L.jsx)(m,{avatarSrc:`https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png`,titleText:`Alaina Chevalier`,subtitleText:`aliana.chevalier@sap.com`,description:`Delivery Manager, SAP SE`,selected:!0}),onClose:()=>{i(!1)},onItemClick:e=>{let{settings:t}=e.detail.item.dataset;t&&h(!0)},children:(0,L.jsx)(d,{icon:S,text:`Settings`,"data-settings":`true`})}),(0,L.jsxs)(c,{...e,open:u,onClose:t=>{e.onClose(t),h(!1)},children:[(0,L.jsx)(j,{icon:`user-settings`,text:`User Account`,tooltip:`User Account`,headerText:`User Account`,tabs:(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)(y,{children:[(0,L.jsx)(o,{name:`person-placeholder`}),(0,L.jsx)(f,{level:`H3`,size:`H3`,className:`ua-name`,children:`Alain Chevalier`}),(0,L.jsxs)(`div`,{className:`container`,children:[(0,L.jsxs)(`div`,{className:`ua-info-item`,children:[(0,L.jsx)(x,{for:`name`,children:`Name:`}),(0,L.jsx)(p,{children:`Alain Chevalier`})]}),(0,L.jsxs)(`div`,{className:`ua-info-item`,children:[(0,L.jsx)(x,{for:`email`,children:`Email:`}),(0,L.jsx)(p,{children:`alian.chevalier@sap.com`})]}),(0,L.jsxs)(`div`,{className:`ua-info-item`,children:[(0,L.jsx)(x,{for:`server`,children:`Server:`}),(0,L.jsx)(p,{children:`delivery-001.sap.com`})]})]}),(0,L.jsx)(x,{for:`reset-all-button`,children:`Personalization`}),(0,L.jsx)(`br`,{}),(0,L.jsx)(O,{children:`Reset All Personalization`}),(0,L.jsx)(g,{fixed:!0,className:`ua-panel`,children:(0,L.jsx)(p,{children:`Reset your personalization settings for the launchpad (such as theme, language, user activities, and home page content).`})})]})})}),(0,L.jsx)(j,{icon:`palette`,text:`Appearance`,tooltip:`Appearance`,headerText:`Appearance`,children:(0,L.jsxs)(T,{text:`Themes`,additionalContent:(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`0.5rem`,width:`100%`},children:[(0,L.jsx)(p,{children:`Optimize for Touch Input`}),(0,L.jsx)(b,{})]}),(0,L.jsx)(p,{style:{display:`block`,color:`var(--sapContent_LabelColor)`,fontSize:`var(--sapFontSmallSize)`},children:`Increases the size and spacing of controls to allow you to interact with them more easily using your fingertip. This is useful for hybrid devices that combine touch and mouse events.`})]}),children:[(0,L.jsxs)(l,{headerText:`SAP Horizon`,children:[(0,L.jsx)(_,{itemKey:`sap_horizon`,text:`SAP Morning Horizon`}),(0,L.jsx)(_,{itemKey:`sap_horizon_dark`,text:`SAP Evening Horizon`}),(0,L.jsx)(_,{itemKey:`sap_horizon_hcb`,text:`SAP Horizon High Contrast Black`}),(0,L.jsx)(_,{itemKey:`sap_horizon_hcw`,text:`SAP Horizon High Contrast White`})]}),(0,L.jsxs)(l,{headerText:`SAP Quartz`,children:[(0,L.jsx)(_,{itemKey:`sap_fiori_3`,text:`SAP Quartz Light`}),(0,L.jsx)(_,{itemKey:`sap_fiori_3_dark`,text:`SAP Quartz Dark`}),(0,L.jsx)(_,{itemKey:`sap_fiori_3_hcb`,text:`SAP Quartz High Contrast Black`}),(0,L.jsx)(_,{itemKey:`sap_fiori_3_hcw`,text:`SAP Quartz High Contrast White`})]})]})}),(0,L.jsx)(j,{text:`Language & Region`,tooltip:`Language & Region`,headerText:`Language & Region`,tabs:(0,L.jsxs)(y,{children:[(0,L.jsxs)(`div`,{className:`us-container`,children:[(0,L.jsxs)(`div`,{className:`lr-item`,children:[(0,L.jsx)(x,{children:`Language and Region:`}),(0,L.jsxs)(v,{placeholder:`Language`,children:[(0,L.jsx)(N,{text:`Browse Language`}),(0,L.jsx)(N,{text:`English`}),(0,L.jsx)(N,{text:`European Spanish`}),(0,L.jsx)(N,{text:`French (France)`}),(0,L.jsx)(N,{text:`Germany`})]})]}),(0,L.jsxs)(`div`,{className:`lr-item`,children:[(0,L.jsx)(x,{for:`format`,children:`Date Format:`}),(0,L.jsx)(p,{children:`MMM d, y`})]})]}),(0,L.jsx)(g,{fixed:!0,children:(0,L.jsx)(x,{children:`The time zone will not be applied in UI5 apps. If you don't know the type of an app, you can check it in the "About" dialog in the "ID of the Application Framework” field.`})}),(0,L.jsx)(`br`,{}),(0,L.jsxs)(`div`,{className:`lt-time-format`,children:[(0,L.jsx)(x,{for:`timeFormat`,children:`Time Format:`}),(0,L.jsx)(s,{name:`timeFormat`,text:`12h`}),(0,L.jsx)(s,{checked:!0,name:`timeFormat`,text:`24h`})]}),(0,L.jsx)(g,{fixed:!0,children:(0,L.jsx)(x,{children:`After you save your settings, the browser will refresh for the new settings to take effect.`})})]})}),(0,L.jsxs)(j,{icon:`iphone`,text:`SAP Mobile Start Application`,tooltip:`SAP Mobile Start Application`,headerText:`SAP Mobile Start Application`,children:[(0,L.jsxs)(y,{slot:`pages`,children:[(0,L.jsx)(O,{children:`iOS`}),(0,L.jsx)(O,{children:`Android`})]}),(0,L.jsxs)(y,{slot:`pages`,text:`Inner Page`,secondary:!0,children:[(0,L.jsx)(p,{children:`Enable access to your site from the SAP Mobile Start application.`}),(0,L.jsx)(O,{children:`Install`}),(0,L.jsx)(O,{children:`Register`}),(0,L.jsx)(p,{children:`Scan the QR Code to install the mobile application`}),(0,L.jsx)(o,{name:`qr-code`,style:{width:`20rem`,height:`20rem`}})]})]}),(0,L.jsx)(j,{icon:`bell`,text:`Notifications`,tooltip:`Notifications`,headerText:`Notifications`,children:(0,L.jsx)(y,{slot:`pages`,children:(0,L.jsx)(a,{checked:!0,text:`Show High-Priority Notification Alerts`})})}),(0,L.jsxs)(j,{icon:`reset`,slot:`fixedItems`,text:`Reset Settings`,tooltip:`Reset Settings`,headerText:`Reset Settings`,children:[(0,L.jsx)(y,{text:`Reset Personalization`,children:(0,L.jsx)(O,{children:`Reset Personalization content`})}),(0,L.jsx)(y,{text:`Reset All Settings`,children:(0,L.jsx)(O,{children:`Reset All Settings content`})})]})]})]})}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
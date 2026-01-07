import{j as t}from"./iframe-BMswfRdZ.js";import{useMDXComponents as c}from"./index-MaqCtoEe.js";import{A as o}from"./ArgTypesWithNote-BvJFmjv5.js";import{C as l}from"./ControlsWithNote-C5w7tvs5.js";import{D as g}from"./DocsHeader-DyZhqw-W.js";import{F as x}from"./CommandsAndQueries-B0EQ2-2W.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-BZVeQw2D.js";import{C as i,D as r}from"./NavigationLayout.stories-CTvtWhD8.js";import{S as m,a as s,b as d}from"./index-D7xze-qL.js";import{S as p}from"./chain-link-DVRw8BOD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B-ZVjbqr.js";import"./information-1i220cDO.js";import"./sys-enter-2-CawaAm0L.js";import"./alert-uwYQHS-7.js";import"./Tag-BVHvhlCz.js";import"./index-mp2uLi6B.js";import"./index-FIeWjkuH.js";import"./Link-BGQljDJU.js";import"./copy-B-yWQLT6.js";import"./copy-Cy5PMYPR.js";import"./GitHub-Mark-CpBusc3m.js";import"./TableOfContent-C_ApkRdL.js";import"./index-Cf0lk0Qk.js";import"./index-B-CAKhwh.js";import"./index-B7ZM6Wte.js";import"./index-E1nxDY_p.js";import"./index-Dm33NnkB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzwX1HTL.js";import"./addCustomCSSWithScoping-DQLnc9QR.js";import"./index-CpHwclFp.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./menu-apBSrW_-.js";import"./home-Bibzylzv.js";import"./calendar-BMrYT5-z.js";import"./history-DQ49a4Rq.js";import"./background-BRI5RhE7.js";import"./action-settings-Bxj8uVfM.js";import"./locked-DFodhhYX.js";import"./index-D2Q_QZwR.js";import"./ListItemStandard-BgY-3qr3.js";import"./ButtonBadge-B8jwOT4f.js";import"./search-CWmGEe1F.js";import"./overflow-B3VazURy.js";import"./slim-arrow-down-DVB6jdIA.js";import"./slim-arrow-down-DZiL5RY8.js";import"./i18n-defaults-uALom2Bu.js";import"./navigation-right-arrow-DFMNvzTi.js";import"./navigation-right-arrow-DhhhdeU2.js";import"./navigation-down-arrow-CWAFdQMV.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
`,t.jsx(g,{of:i}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(f,{of:r}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Show static code"}),t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`function NavigationLayoutComponent(props) {
  const [selectedContent, setSelectedContent] = useState('Home');
  const [mode, setMode] = useState(props.mode);
  const navigationLayoutRef = useRef<NavigationLayoutDomRef>(null);

  const handleSelectionChange: SideNavigationPropTypes['onSelectionChange'] = (e) => {
    setSelectedContent(e.detail.item.text);
  };

  useEffect(() => {
    setMode(props.mode);
  }, [props.mode]);

  return (
    <div style={{ position: 'relative', height: '800px' }}>
      <NavigationLayout
        {...props}
        ref={navigationLayoutRef}
        mode={mode}
        header={
          <ShellBar
            startButton={
              <Button
                icon={menuIcon}
                onClick={() => {
                  if (navigationLayoutRef.current?.isSideCollapsed()) {
                    setMode(NavigationLayoutMode.Expanded);
                  } else {
                    setMode(NavigationLayoutMode.Collapsed);
                  }
                }}
              />
            }
            primaryTitle="UI5 Web Components for React"
            secondaryTitle="The Best Run SAP"
          />
        }
        sideContent={
          <SideNavigation slot="sideContent" onSelectionChange={handleSelectionChange}>
            <SideNavigationItem text="Home" icon="home" />
            <SideNavigationGroup text="Group 1" expanded>
              <SideNavigationItem text="Item 1" icon="locate-me" expanded>
                <SideNavigationSubItem text="Sub Item 1" />
                <SideNavigationSubItem text="Sub Item 2" />
              </SideNavigationItem>
              <SideNavigationItem text="Item 2" icon="calendar" expanded>
                <SideNavigationSubItem text="Sub Item 3" />
                <SideNavigationSubItem text="Sub Item 4" />
              </SideNavigationItem>
              <SideNavigationItem text="Item 3" icon="activity-assigned-to-goal" expanded>
                <SideNavigationSubItem text="Sub Item 5" />
                <SideNavigationSubItem text="Sub Item 6" />
              </SideNavigationItem>
            </SideNavigationGroup>
            <SideNavigationGroup text="Group 2" expanded>
              <SideNavigationItem text="Item 4" icon="history" />
              <SideNavigationItem text="Item 5" icon="source-code" />
              <SideNavigationItem text="Item 6" icon="background" />
            </SideNavigationGroup>

            <SideNavigationItem
              slot="fixedItems"
              text="Legal"
              href="https://www.sap.com/about/legal/impressum.html"
              target="_blank"
              icon="compare"
            />
            <SideNavigationItem
              slot="fixedItems"
              text="Privacy"
              href="https://www.sap.com/about/legal/privacy.html"
              target="_blank"
              icon="locked"
            />
            <SideNavigationItem
              slot="fixedItems"
              text="Terms of Use"
              href="https://www.sap.com/terms-of-use"
              target="_blank"
              icon="document-text"
            />
          </SideNavigation>
        }
      >
        <div style={{ padding: '1rem' }}>
          <div>
            <Title>{selectedContent}</Title>
            <br />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Text>
          </div>
        </div>
      </NavigationLayout>
    </div>
  );
}
`})})]}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(l,{of:r}),`
`,t.jsx(h,{children:S}),`
`,t.jsx(e.h2,{id:"sidenavigation",children:"SideNavigation"}),`
`,t.jsx(a,{of:m}),`
`,t.jsx(o,{metaOf:i,of:m}),`
`,t.jsx(e.h2,{id:"sidenavigationitem",children:"SideNavigationItem"}),`
`,t.jsx(a,{of:s}),`
`,t.jsx(o,{metaOf:i,of:s}),`
`,t.jsx(e.h2,{id:"sidenavigationsubitem",children:"SideNavigationSubItem"}),`
`,t.jsx(a,{of:d}),`
`,t.jsx(o,{metaOf:i,of:d}),`
`,t.jsx(e.h2,{id:"sidenavigationgroup",children:"SideNavigationGroup"}),`
`,t.jsx(a,{of:p}),`
`,t.jsx(o,{metaOf:i,of:p}),`
`,t.jsx(x,{})]})}function ft(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}export{ft as default};

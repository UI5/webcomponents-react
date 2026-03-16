import{j as t}from"./iframe--9dKe8DB.js";import{useMDXComponents as c}from"./index-KI9hm8HB.js";import{A as o}from"./ArgTypesWithNote-w0QHC0YY.js";import{C as l}from"./ControlsWithNote-L_Ce3WAS.js";import{D as g}from"./DocsHeader-DmUEuAmh.js";import{F as x}from"./Footer-Q0CQ_qDk.js";import"./CommandsAndQueries-DmMMilME.js";import"./PageNotFound-CuY3r4La.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-sz1V1YD1.js";import{C as i,D as r}from"./NavigationLayout.stories-CL_oGYRO.js";import{S as m,a as s,b as d}from"./index-Dk8PVCuc.js";import{S as p}from"./chain-link-CwJLJGvx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPDFIZvY.js";import"./information-nAlSmLiB.js";import"./sys-enter-2-w7b_cFRw.js";import"./alert-QMDkEN5b.js";import"./Tag-Dx2xRUom.js";import"./index-FyOsxtAw.js";import"./index-BYfUGIr5.js";import"./Link-BglFcPBB.js";import"./copy-36Frb_So.js";import"./copy-DDHnU-KJ.js";import"./GitHub-Mark-Cn6yJd_r.js";import"./TableOfContent-BY9idK35.js";import"./index-rkrari7y.js";import"./index-W9KwanBR.js";import"./index-CZTUC9tr.js";import"./index-mjSuc6PB.js";import"./index-TfvKDlH8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZXl1Qbt.js";import"./addCustomCSSWithScoping-OfWYI4vx.js";import"./Illustrations-CYV_ZGoP.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-CcI05398.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./menu-D2izKWtG.js";import"./home-DhwDeTVE.js";import"./calendar-CGC5xcD3.js";import"./history-DyhP2MJu.js";import"./background-Bd3Fl7SD.js";import"./action-settings-B4-s40yz.js";import"./locked-JSHr1Y8o.js";import"./index-qowJVs1t.js";import"./query-CzSBusdE.js";import"./ButtonBadge-DNRgYZoP.js";import"./ListItemStandard-DUlTKo1l.js";import"./search-C4TW9gxK.js";import"./overflow-btssQJza.js";import"./navigation-right-arrow-DEiywgOw.js";import"./navigation-right-arrow-uImefhjs.js";import"./navigation-down-arrow-D1hT7rfO.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
`,t.jsx(x,{})]})}function Nt(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}export{Nt as default};

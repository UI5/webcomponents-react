import{j as t}from"./iframe-DK_3t7HQ.js";import{useMDXComponents as c}from"./index-Bn4DIwe1.js";import{A as o}from"./ArgTypesWithNote-DW9lquye.js";import{C as l}from"./ControlsWithNote-B-eT4P9R.js";import{D as g}from"./DocsHeader-D3DJ0Uby.js";import{F as x}from"./CommandsAndQueries-8GqG6vck.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-BYCX_D4a.js";import{C as i,D as r}from"./NavigationLayout.stories-BX_-__Je.js";import{S as m,a as s,b as d}from"./index-BdAqKuse.js";import{S as p}from"./chain-link-D4pD6hu7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DM6dIB46.js";import"./information-MEtG0nZR.js";import"./sys-enter-2-DcwCthWV.js";import"./alert-CP9vtKnc.js";import"./Tag-CMm3ArFn.js";import"./index-DGhVTpl9.js";import"./index-BD65A0G0.js";import"./Link-s9SylKhD.js";import"./copy-ChDGHLIN.js";import"./copy-Cen_7za9.js";import"./GitHub-Mark-8Lbicbrm.js";import"./TableOfContent-B9G4Qsdi.js";import"./index-DcvukCsl.js";import"./index-W3t_MBGP.js";import"./index-BLsgqlPC.js";import"./index-Bw6wQW8K.js";import"./index-BlpaDNQk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyNtnc-C.js";import"./addCustomCSSWithScoping-BS7bnaiL.js";import"./index-0qQXpS3i.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./menu-Z4a5mL93.js";import"./home-BKiPk18-.js";import"./calendar-mj0Z5ppN.js";import"./history-B8PId4h-.js";import"./background-BDD_fJAN.js";import"./action-settings-TlHGDemL.js";import"./locked-DN16mSLu.js";import"./index-Dr-gKabi.js";import"./ListItemStandard-BmjJqapy.js";import"./ButtonBadge-ck55h30d.js";import"./search-BPnMlRCq.js";import"./overflow-ClIc91ok.js";import"./slim-arrow-down-BB5WzEh_.js";import"./slim-arrow-down-DAUAvb4X.js";import"./i18n-defaults-Ca0KLLzw.js";import"./navigation-right-arrow-FMnV_NeM.js";import"./navigation-right-arrow-fibED6EI.js";import"./navigation-down-arrow-B8-P8g3_.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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

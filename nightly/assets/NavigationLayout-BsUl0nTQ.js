import{j as t}from"./iframe-C_hHAafN.js";import{useMDXComponents as c}from"./index-D3HSzI5H.js";import{A as o}from"./ArgTypesWithNote-BqgSXMWz.js";import{C as l}from"./ControlsWithNote-6SvsGtkD.js";import{D as g}from"./DocsHeader-Bk_TsqI1.js";import{F as x}from"./Footer-Cs4jbAjg.js";import"./CommandsAndQueries-9eolN_GD.js";import"./PageNotFound-C7jxbIgP.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-DkbtP44I.js";import{C as i,D as r}from"./NavigationLayout.stories-Blf2ZmUs.js";import{S as m,a as s,b as d}from"./index-Dmh1l0Ex.js";import{S as p}from"./chain-link-CPyFskBU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3QVLAy4g.js";import"./information-BzxR6BB4.js";import"./sys-enter-2-Bb8fTRXf.js";import"./alert-CfcbMAjf.js";import"./Tag-eVGHGbIg.js";import"./index-BmCCqQCC.js";import"./index-BKTg9IVY.js";import"./Link-SYOek4pb.js";import"./copy-B6dl0gLT.js";import"./copy-RggualJu.js";import"./GitHub-Mark-DN84urKt.js";import"./TableOfContent--xyEPkZT.js";import"./index-DDQ0aIRQ.js";import"./index-DaMaB5I7.js";import"./index-nRsHzHP6.js";import"./index-DqhVaTSX.js";import"./index-C7mqYyTc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DmUXk235.js";import"./addCustomCSSWithScoping-D9hLtcaz.js";import"./Illustrations-CNZ22cEs.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-C0RId3gK.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./menu-CQe3BJLj.js";import"./home-S7xuqHuT.js";import"./calendar-B_3HcPo9.js";import"./history-B92tLOh3.js";import"./background-MniEVssK.js";import"./action-settings-_JI6IRmL.js";import"./locked-hRTbd2id.js";import"./index-DOtGjmLg.js";import"./query-CzSBusdE.js";import"./ButtonBadge-Cr-xujsu.js";import"./ListItemStandard-66Kfx1Tu.js";import"./search-BoSC0djM.js";import"./overflow-Dangt_Az.js";import"./navigation-right-arrow-BLUaI-J0.js";import"./navigation-right-arrow-BKXb3Jei.js";import"./navigation-down-arrow-BVBBSui6.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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

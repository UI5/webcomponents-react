import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{t as r}from"./react-C184PLS3.js";import{t as i}from"./jsx-runtime-1ARNaUmP.js";import{t as a}from"./src-Cgo3IeY-.js";import{l as o,u as s}from"./Button-CB8Zqte1.js";import{n as c,t as l}from"./Button-CDaC9B4u.js";import{t as u}from"./enums-DtU7Tosq.js";import{l as d,n as f,s as p,t as m}from"./FlexBox-BFmTCPgM.js";import{n as h,t as g}from"./Text-CgJUXytC.js";import{i as _,n as v,r as y,t as b}from"./ListItemStandard-DF2VZgua.js";import{t as x}from"./Title-hPJBlVJ6.js";import{n as S,t as C}from"./Label-BW68rQSX.js";import{n as w,t as T}from"./BarDesign-CvqBw-od.js";import{t as E}from"./Bar-Cb7-KGoi.js";import{G as D,H as O,U as k,W as A}from"./webComponents-C_rBiqMZ.js";import{a as j,n as M,o as N,t as P}from"./Avatar-BCSMLGSP.js";import{i as F,n as I,r as L,t as R}from"./CardHeader-B8YToWhX.js";import{n as z,t as B}from"./RatingIndicator-DxSatHed.js";import{n as V,t as H}from"./ShellBar-C_GhWRmg.js";var U=n({Default:()=>q,WithDifferentColumns:()=>J,__namedExportsOrder:()=>Z,default:()=>K}),W,G,K,q,J,Y,X,Z,Q=e((()=>{N(),w(),s(),D(),W=t(r(),1),f(),u(),a(),h(),M(),c(),F(),I(),S(),_(),v(),z(),V(),k(),G=i(),K={title:`Layouts & Floorplans / FlexibleColumnLayout`,component:O,argTypes:{endColumn:{control:{disable:!0}},midColumn:{control:{disable:!0}},startColumn:{control:{disable:!0}}},args:{layout:A.ThreeColumnsMidExpanded},tags:[`package:@ui5/webcomponents-fiori`]},q={render(e){return(0,G.jsx)(O,{...e,layout:e.layout,startColumn:(0,G.jsxs)(y,{headerText:`Start Column List`,children:[(0,G.jsx)(b,{text:`List Item 1`}),(0,G.jsx)(b,{text:`List Item 2`}),(0,G.jsx)(b,{text:`List Item 3`}),(0,G.jsx)(b,{text:`List Item 4`}),(0,G.jsx)(b,{text:`List Item 5`})]}),midColumn:(0,G.jsxs)(y,{headerText:`Mid Column List`,children:[(0,G.jsx)(b,{text:`List Item 1`}),(0,G.jsx)(b,{text:`List Item 2`}),(0,G.jsx)(b,{text:`List Item 3`}),(0,G.jsx)(b,{text:`List Item 4`}),(0,G.jsx)(b,{text:`List Item 5`})]}),endColumn:(0,G.jsxs)(y,{headerText:`End Column List`,children:[(0,G.jsx)(b,{text:`List Item 1`}),(0,G.jsx)(b,{text:`List Item 2`}),(0,G.jsx)(b,{text:`List Item 3`}),(0,G.jsx)(b,{text:`List Item 4`}),(0,G.jsx)(b,{text:`List Item 5`})]})})}},J={render(){let[e,t]=(0,W.useState)(A.OneColumn),[n,r]=(0,W.useState)(Y[0]),[i,a]=(0,W.useState)(X[0]);return(0,G.jsx)(O,{style:{height:`600px`},layout:e,startColumn:(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(H,{logo:(0,G.jsx)(`img`,{src:`https://raw.githubusercontent.com/UI5/webcomponents-react/main/assets/Logo-Sticker.png`}),primaryTitle:`Movie DB`}),(0,G.jsx)(y,{headerText:`Movies`,onItemClick:e=>{r(Y.find(t=>t.movie===e.detail.item.dataset.movie)),t(A.TwoColumnsMidExpanded)},children:Y.map(e=>(0,G.jsx)(b,{description:e.genre,"data-movie":e.movie,text:e.movie},e.movie))})]}),midColumn:(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(E,{design:T.Header,startContent:(0,G.jsx)(x,{children:n.movie}),endContent:(0,G.jsx)(l,{icon:`decline`,design:o.Transparent,onClick:()=>{t(A.OneColumn)}})}),(0,G.jsxs)(m,{style:{padding:`0.5rem 1rem`},alignItems:d.Center,children:[(0,G.jsx)(P,{icon:`video`,size:j.XL,style:{marginInline:`0.5rem`}}),(0,G.jsxs)(m,{direction:p.Column,children:[(0,G.jsxs)(m,{children:[(0,G.jsx)(C,{children:`Movie:`}),(0,G.jsx)(g,{style:{marginLeft:`2px`},children:n.movie})]}),(0,G.jsxs)(m,{children:[(0,G.jsx)(C,{children:`Genre:`}),(0,G.jsx)(g,{style:{marginLeft:`2px`},children:n.genre})]}),(0,G.jsxs)(m,{children:[(0,G.jsx)(C,{children:`Country:`}),(0,G.jsx)(g,{style:{marginLeft:`2px`},children:n.country})]})]}),(0,G.jsx)(`span`,{style:{flexGrow:1}}),(0,G.jsx)(B,{style:{marginLeft:`100px`},value:Math.floor(Math.random()*5)+1})]}),(0,G.jsx)(y,{headerText:`Cast`,onItemClick:e=>{a(X.find(t=>t.name===e.detail.item.dataset.name)),t(A.ThreeColumnsEndExpanded)},children:X.map(e=>(0,G.jsx)(b,{description:e.gender,"data-name":e.name,text:e.name},e.name))})]}),endColumn:(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(E,{design:T.Header,startContent:(0,G.jsx)(x,{children:i.name}),endContent:(0,G.jsx)(l,{icon:`decline`,design:o.Transparent,onClick:()=>{t(A.TwoColumnsMidExpanded)}})}),(0,G.jsx)(L,{header:(0,G.jsx)(R,{avatar:(0,G.jsx)(P,{icon:`person-placeholder`}),titleText:i.name,subtitleText:`age: ${Math.floor(Math.random()*58+18)}`,additionalText:i.gender}),children:(0,G.jsx)(`div`,{style:{padding:`1rem`},children:(0,G.jsx)(g,{children:`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`})})})]})})}},Y=[{movie:`Shanghai`,genre:`Crime|Thriller`,country:`Russia`},{movie:`Punk Syndrome, The (Kovasikajuttu)`,genre:`Documentary`,country:`Poland`},{movie:`Corridors of Blood`,genre:`Crime|Drama|Horror|Thriller`,country:`Germany`},{movie:`Three Faces East`,genre:`Drama|Mystery|War`,country:`Russia`},{movie:`Grave Secrets (Silent Screams)`,genre:`Horror`,country:`Russia`},{movie:`Dead Outside, The`,genre:`Horror|Mystery|Thriller`,country:`Poland`},{movie:`Cosmos`,genre:`Documentary`,country:`Russia`},{movie:`UHF`,genre:`Comedy`,country:`Mexico`},{movie:`Superweib, Das`,genre:`Comedy`,country:`Poland`},{movie:`It's Good to Be Alive`,genre:`Drama`,country:`Belarus`},{movie:`Last Action Hero`,genre:`Action|Adventure|Comedy|Fantasy`,country:`Russia`},{movie:`Nibelungen: Kriemhild's Revenge, Die (Die Nibelungen: Kriemhilds Rache)`,genre:`Adventure|Drama|Fantasy`,country:`Russia`},{movie:`Roller Boogie`,genre:`Drama`,country:`Brazil`},{movie:`Amore (L'Amore)`,genre:`Drama`,country:`Poland`},{movie:`Dust of Time, The`,genre:`Drama`,country:`Poland`},{movie:`Far Side of the Moon, The (Face cachée de la lune, La)`,genre:`Drama`,country:`Brazil`},{movie:`Take Care of Your Scarf, Tatiana (Pidä huivista kiinni, Tatjana)`,genre:`Comedy`,country:`Poland`},{movie:`Trail Beyond, The`,genre:`Action|Adventure|Western`,country:`Russia`},{movie:`Mood Indigo (L'écume des jours)`,genre:`Drama|Fantasy`,country:`Russia`},{movie:`Alpha and Omega`,genre:`Adventure|Animation|Children|Comedy|Romance`,country:`France`},{movie:`Battleship Potemkin`,genre:`Drama|War`,country:`United Kingdom`},{movie:`Rites of May, The (Itim) `,genre:`Drama|Horror|Thriller`,country:`Brazil`},{movie:`Black Waters of Echo's Pond, The`,genre:`Fantasy|Horror|Thriller`,country:`France`},{movie:`Speed`,genre:`Action|Romance|Thriller`,country:`Brazil`},{movie:`Ladybird Ladybird`,genre:`Drama`,country:`Poland`},{movie:`War, Inc.`,genre:`Comedy|Crime|Thriller`,country:`Brazil`},{movie:`Company of Heroes`,genre:`Action|War`,country:`United States`},{movie:`Secret Glory, The`,genre:`Documentary`,country:`Poland`},{movie:`Three Musketeers, The`,genre:`Action|Adventure|Romance`,country:`France`},{movie:`Secrets of the Heart (Secretos del Corazón)`,genre:`Drama`,country:`Japan`}],X=[{name:`Clywd Gimeno`,gender:`Male`},{name:`Essie Gadson`,gender:`Female`},{name:`Claresta Greger`,gender:`Female`},{name:`Susanne Pinson`,gender:`Female`},{name:`Gardener Cutford`,gender:`Male`},{name:`Red Swyer-Sexey`,gender:`Male`},{name:`Alyson Bachellier`,gender:`Female`},{name:`Amata Penke`,gender:`Female`},{name:`Ancell Aprahamian`,gender:`Male`},{name:`Kimmy Sworne`,gender:`Female`},{name:`Liam Umpleby`,gender:`Male`},{name:`Caleb Trathen`,gender:`Male`},{name:`Starlin Kibard`,gender:`Female`},{name:`Keefe Brammall`,gender:`Male`},{name:`Terrill Reeme`,gender:`Male`},{name:`Gerianne Maciejak`,gender:`Female`},{name:`Wilhelmine Cutmare`,gender:`Female`},{name:`Rodie Breukelman`,gender:`Female`},{name:`Eduard Berk`,gender:`Male`},{name:`Phil Koppens`,gender:`Female`}],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <FlexibleColumnLayout {...args} layout={args.layout} startColumn={<List headerText="Start Column List">
            <ListItemStandard text="List Item 1" />
            <ListItemStandard text="List Item 2" />
            <ListItemStandard text="List Item 3" />
            <ListItemStandard text="List Item 4" />
            <ListItemStandard text="List Item 5" />
          </List>} midColumn={<List headerText="Mid Column List">
            <ListItemStandard text="List Item 1" />
            <ListItemStandard text="List Item 2" />
            <ListItemStandard text="List Item 3" />
            <ListItemStandard text="List Item 4" />
            <ListItemStandard text="List Item 5" />
          </List>} endColumn={<List headerText="End Column List">
            <ListItemStandard text="List Item 1" />
            <ListItemStandard text="List Item 2" />
            <ListItemStandard text="List Item 3" />
            <ListItemStandard text="List Item 4" />
            <ListItemStandard text="List Item 5" />
          </List>} />;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render() {
    const [layout, setLayout] = useState(FCLLayout.OneColumn);
    const [selectedMovie, setSelectedMovie] = useState(movieData[0]);
    const [selectedCast, setSelectedCast] = useState(castData[0]);
    const onStartColumnClick = e => {
      setSelectedMovie(movieData.find(item => item.movie === e.detail.item.dataset.movie));
      setLayout(FCLLayout.TwoColumnsMidExpanded);
    };
    const onMiddleColumnClick = e => {
      setSelectedCast(castData.find(item => item.name === e.detail.item.dataset.name));
      setLayout(FCLLayout.ThreeColumnsEndExpanded);
    };
    return <FlexibleColumnLayout style={{
      height: '600px'
    }} layout={layout} startColumn={<>
            <ShellBar logo={<img src="https://raw.githubusercontent.com/UI5/webcomponents-react/main/assets/Logo-Sticker.png" />} primaryTitle="Movie DB" />
            <List headerText="Movies" onItemClick={onStartColumnClick}>
              {movieData.map(item => <ListItemStandard description={item.genre} data-movie={item.movie} key={item.movie} text={item.movie} />)}
            </List>
          </>} midColumn={<>
            <Bar design={BarDesign.Header} startContent={<Title>{selectedMovie.movie}</Title>} endContent={<Button icon="decline" design={ButtonDesign.Transparent} onClick={() => {
        setLayout(FCLLayout.OneColumn);
      }} />} />
            <FlexBox style={{
        padding: '0.5rem 1rem'
      }} alignItems={FlexBoxAlignItems.Center}>
              <Avatar icon="video" size={AvatarSize.XL} style={{
          marginInline: '0.5rem'
        }} />
              <FlexBox direction={FlexBoxDirection.Column}>
                <FlexBox>
                  <Label>Movie:</Label>
                  <Text style={{
              marginLeft: '2px'
            }}>{selectedMovie.movie}</Text>
                </FlexBox>
                <FlexBox>
                  <Label>Genre:</Label>
                  <Text style={{
              marginLeft: '2px'
            }}>{selectedMovie.genre}</Text>
                </FlexBox>
                <FlexBox>
                  <Label>Country:</Label>
                  <Text style={{
              marginLeft: '2px'
            }}>{selectedMovie.country}</Text>
                </FlexBox>
              </FlexBox>
              <span style={{
          flexGrow: 1
        }} />
              <RatingIndicator style={{
          marginLeft: '100px'
        }} value={Math.floor(Math.random() * 5) + 1} />
            </FlexBox>
            <List headerText="Cast" onItemClick={onMiddleColumnClick}>
              {castData.map(item => <ListItemStandard description={item.gender} data-name={item.name} key={item.name} text={item.name} />)}
            </List>
          </>} endColumn={<>
            <Bar design={BarDesign.Header} startContent={<Title>{selectedCast.name}</Title>} endContent={<Button icon="decline" design={ButtonDesign.Transparent} onClick={() => {
        setLayout(FCLLayout.TwoColumnsMidExpanded);
      }} />} />
            <Card header={<CardHeader avatar={<Avatar icon="person-placeholder" />} titleText={selectedCast.name} subtitleText={\`age: \${Math.floor(Math.random() * (75 - 18 + 1) + 18)}\`} additionalText={selectedCast.gender} />}>
              <div style={{
          padding: '1rem'
        }}>
                <Text>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </Text>
              </div>
            </Card>
          </>} />;
  }
}`,...J.parameters?.docs?.source}}},Z=[`Default`,`WithDifferentColumns`]}));Q();export{q as Default,J as WithDifferentColumns,Z as __namedExportsOrder,K as default,Q as n,U as t};
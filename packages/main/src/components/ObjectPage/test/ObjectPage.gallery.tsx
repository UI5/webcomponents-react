import { Link } from '../../../webComponents/Link/index.js';
import { MessageStrip } from '../../../webComponents/MessageStrip/index.js';
import { Title } from '../../../webComponents/Title/index.js';
import { FlexBox } from '../../FlexBox/index.js';
import { ObjectPageHeader } from '../../ObjectPageHeader/index.js';
import { ObjectPageSection } from '../../ObjectPageSection/index.js';
import { ObjectPageTitle } from '../../ObjectPageTitle/index.js';
import { ObjectPage } from '../index.js';

// long expandable header + a last section shorter than the viewport (relies on the bottom spacer)
export const ObjectPageLongHeaderTestComp = () => {
  return (
    <ObjectPage
      style={{ height: '100vh' }}
      titleArea={
        <ObjectPageTitle
          header={<Title>Denise Smith</Title>}
          snappedHeader={<Title>Denise Smith (snapped)</Title>}
          subHeader="Senior UI Developer"
          snappedSubHeader="Senior UI Developer (snapped)"
          expandedContent={
            <MessageStrip hideCloseButton>
              {Array.from({ length: 18 }, () => 'Information (only visible if header content is expanded)').join(' ')}
            </MessageStrip>
          }
          snappedContent={
            <MessageStrip hideCloseButton>Information (only visible if header content is snapped)</MessageStrip>
          }
        />
      }
      headerArea={
        <ObjectPageHeader>
          <FlexBox direction="Column">
            <Link>+33 6 4512 5158</Link>
            <Link href="mailto:ui5-webcomponents-react@sap.com">DeniseSmith@sap.com</Link>
          </FlexBox>
        </ObjectPageHeader>
      }
    >
      <ObjectPageSection titleText="Goals" id="goals" aria-label="Goals">
        <div style={{ height: '120px', width: '100%', background: 'lightblue' }} />
      </ObjectPageSection>
      <ObjectPageSection titleText="Personal" id="personal" aria-label="Personal">
        <div style={{ height: '400px', width: '100%', background: 'lightyellow' }} />
      </ObjectPageSection>
      <ObjectPageSection titleText="Employment" id="employment" aria-label="Employment">
        <div style={{ height: '120px', width: '100%', background: 'orange' }} />
      </ObjectPageSection>
    </ObjectPage>
  );
};

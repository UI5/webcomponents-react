// ToDo: correct order cannot be determined, check if this is fixed when import/order rule is updated
// eslint-disable-next-line import/order
import { MessageStrip, ThemeProvider } from '@ui5/webcomponents-react';
import UXCIntegrationApp from '../patterns/navigation-layout/src/App.js';
import '../patterns/navigation-layout/src/index.css';
import { EmbeddedStackBlitz } from '@/docs/EmbeddedStackBlitz.js';

function UXCIntegration() {
  return (
    <div style={{ height: '80vh', position: 'relative' }}>
      <ThemeProvider>
        <UXCIntegrationApp
          content={
            <>
              <MessageStrip hideCloseButton style={{ marginBlockEnd: '0.25rem' }}>
                For a full-page view of this pattern, click <b>&#34;Fork on StackBlitz&#34;</b> below to open it in the
                standalone StackBlitz editor.
              </MessageStrip>
              <EmbeddedStackBlitz repoPath="UI5/webcomponents-react/tree/main/patterns/navigation-layout" />
            </>
          }
        />
      </ThemeProvider>
    </div>
  );
}

export default UXCIntegration;

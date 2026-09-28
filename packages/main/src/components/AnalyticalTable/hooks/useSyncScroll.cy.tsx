import { useRef } from 'react';
import { useSyncScroll } from './useSyncScroll.js';

// Plain divs so the sync runs without overlay-scrollbar gating.
const SyncScrollHarness = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);

  useSyncScroll(contentRef, scrollbarRef, true, false);

  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      <div ref={contentRef} data-testid="content" style={{ height: '200px', width: '200px', overflowY: 'auto' }}>
        <div style={{ height: '4000px' }}>content</div>
      </div>
      <div ref={scrollbarRef} data-testid="scrollbar" style={{ height: '200px', width: '16px', overflowY: 'scroll' }}>
        <div style={{ height: '4000px' }} />
      </div>
    </div>
  );
};

describe('useSyncScroll', () => {
  it('keeps following and consumes the echo instead of pulling the position back', () => {
    cy.mount(<SyncScrollHarness />);
    cy.get('[data-testid="content"]').should('exist');

    cy.window().then((win) => {
      const content = win.document.querySelector<HTMLElement>('[data-testid="content"]')!;
      const scrollbar = win.document.querySelector<HTMLElement>('[data-testid="scrollbar"]')!;
      const fireScroll = (el: HTMLElement) => el.dispatchEvent(new win.Event('scroll'));

      content.scrollTop = 100;
      fireScroll(content);
      expect(scrollbar.scrollTop, 'scrollbar mirrors the initial scroll').to.equal(100);

      // Second scroll before the first echo — the old single-flag guard blocked this.
      content.scrollTop = 200;
      fireScroll(content);
      expect(scrollbar.scrollTop, 'scrollbar keeps following without being blocked').to.equal(200);

      fireScroll(scrollbar);
      expect(content.scrollTop, 'content position is not pulled backwards by the echo').to.equal(200);
    });
  });

  it('still syncs a genuine scroll back to a value whose echo was superseded', () => {
    cy.mount(<SyncScrollHarness />);
    cy.get('[data-testid="content"]').should('exist');

    cy.window().then((win) => {
      const content = win.document.querySelector<HTMLElement>('[data-testid="content"]')!;
      const scrollbar = win.document.querySelector<HTMLElement>('[data-testid="scrollbar"]')!;
      const fireScroll = (el: HTMLElement) => el.dispatchEvent(new win.Event('scroll'));

      content.scrollTop = 100;
      fireScroll(content);
      expect(scrollbar.scrollTop).to.equal(100);

      // Scrolling the scrollbar elsewhere supersedes the pending echo for 100.
      scrollbar.scrollTop = 300;
      fireScroll(scrollbar);
      expect(content.scrollTop, 'content follows the scrollbar').to.equal(300);

      scrollbar.scrollTop = 100;
      fireScroll(scrollbar);
      expect(content.scrollTop, 'genuine scroll to the old value is not swallowed').to.equal(100);
    });
  });
});

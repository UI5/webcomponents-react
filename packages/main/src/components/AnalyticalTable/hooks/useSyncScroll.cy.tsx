import { useRef } from 'react';
import { useSyncScroll } from './useSyncScroll.js';

// Plain scroll containers (table body + styled scrollbar) so the sync logic runs without overlay-scrollbar gating.
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
  // The pull-back is an event/rAF ordering race, so it's reproduced by driving that ordering (stubbed rAF + synthetic
  // scroll events) rather than relying on main-thread load.
  it('keeps the scroll position when a programmatic-write echo arrives after the frame boundary', () => {
    cy.mount(<SyncScrollHarness />);
    cy.get('[data-testid="content"]').should('exist');

    cy.window().then((win) => {
      const rafCallbacks: FrameRequestCallback[] = [];
      cy.stub(win, 'requestAnimationFrame').callsFake((cb: FrameRequestCallback) => {
        rafCallbacks.push(cb);
        return rafCallbacks.length;
      });

      const content = win.document.querySelector<HTMLElement>('[data-testid="content"]')!;
      const scrollbar = win.document.querySelector<HTMLElement>('[data-testid="scrollbar"]')!;
      const fireScroll = (el: HTMLElement) => el.dispatchEvent(new win.Event('scroll'));

      content.scrollTop = 100;
      fireScroll(content);
      expect(scrollbar.scrollTop, 'scrollbar mirrors the initial scroll').to.equal(100);

      // Second scroll before the first echo is processed — must not be blocked (the old single-flag guard was).
      content.scrollTop = 200;
      fireScroll(content);
      expect(scrollbar.scrollTop, 'scrollbar keeps following without being blocked').to.equal(200);

      // Frame boundary (where the old guard cleared), then the delayed echo of the earlier write.
      rafCallbacks.forEach((cb) => cb(0));
      fireScroll(scrollbar);
      expect(content.scrollTop, 'content position is not pulled backwards by the stale echo').to.equal(200);
    });
  });
});

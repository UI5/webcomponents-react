import test from 'ava';
import { getPublicUtilsTool } from './get_public_utils.js';

const handler = getPublicUtilsTool.handler;

function getText(response: ReturnType<typeof handler>): string {
  return response.content[0].text;
}

test('handler: Device docs list actual API methods', (t) => {
  const result = getText(handler({ name: 'Device' }));
  t.true(result.includes('isDesktop'));
  t.true(result.includes('isPhone'));
  t.true(result.includes('isTablet'));
  t.true(result.includes('isChrome'));
  t.true(result.includes('isSafari'));
  t.true(result.includes('isIOS'));
  t.true(result.includes('isAndroid'));
  t.true(result.includes('supportsTouch'));
  t.true(result.includes('getCurrentRange'));
  t.true(result.includes('getOrientation'));
});

test('handler: Device docs do not reference removed APIs', (t) => {
  const result = getText(handler({ name: 'Device' }));
  t.false(result.includes('isIE'), 'isIE was removed from upstream and should not be documented');
});

test('handler: no name returns overview of all utilities', (t) => {
  const result = getText(handler({}));
  t.true(result.includes('Device'));
  t.true(result.includes('ThemingParameters'));
  t.true(result.includes('useI18nBundle'));
  t.true(result.includes('useViewportRange'));
  t.true(result.includes('withWebComponent'));
});

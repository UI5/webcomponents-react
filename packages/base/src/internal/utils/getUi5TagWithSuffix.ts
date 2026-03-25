import { getEffectiveScopingSuffixForTag } from '@ui5/webcomponents-base/dist/CustomElementsScope.js';

/**
 * ⚠️ __INTERNAL__ use only! This function is not part of the public API.
 */
export function getUi5TagWithSuffix(baseTagName: string) {
  const tagNameSuffix: string | undefined = getEffectiveScopingSuffixForTag(baseTagName);
  return tagNameSuffix ? `${baseTagName}-${tagNameSuffix}` : baseTagName;
}

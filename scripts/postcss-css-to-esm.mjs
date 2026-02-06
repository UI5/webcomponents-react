import fs from 'node:fs';
import path from 'node:path';

const getTSContent = (targetFile, packageName, css, exportTokens) => {
  // tabs are intentionally mixed to have proper identation in the produced file
  return `export const styleData = \`${css}\`;

export const classNames = ${JSON.stringify(exportTokens)} as const;
export { styleData as content };
`;
};

// strips the unnecessary theming data coming from @sap-theming/theming-base-content and leaves only the css parameters
// & scope variables
const proccessCSS = (css) => {
  css = css.replace(/\.sapThemeMeta[\s\S]*?:root/, ':root');
  css = css.replace(/\.background-image.*{.*}/, '');
  css = css.replace(/\.sapContrast[ ]*:root[\s\S]*?}/, '');
  css = css.replace(/--sapFontUrl.*\);?/, '');
  return css;
};

function cssToEsmPostcssPlugin(opts) {
  opts = opts || {};

  const packageName = opts.packageName;
  const toReplace = opts.toReplace;

  return {
    postcssPlugin: 'postcss-css-to-esm',
    OnceExit(root, { result }) {
      const css = proccessCSS(root.toString());
      const { exportTokens } = result.messages.find(
        (message) => message.type === 'export' && message.plugin === 'postcss-modules',
      );

      const targetFile = root.source.input.from
        .replace(`/${toReplace}/`, '/src/')
        .replace(`\\${toReplace}\\`, '\\src\\');
      fs.mkdirSync(path.dirname(targetFile), { recursive: true });

      const filePath = `${targetFile}.ts`;

      // it seems slower to read the old content, but writing the same content with no real changes
      // (as in initial build and then watch mode) will cause an unnecessary dev server refresh
      let oldContent = '';
      if (fs.existsSync(filePath)) {
        oldContent = fs.readFileSync(filePath).toString();
      }

      const content = getTSContent(targetFile, packageName, css, exportTokens);
      if (content !== oldContent) {
        fs.writeFileSync(filePath, content);
      }
    },
  };
}

cssToEsmPostcssPlugin.postcss = true;

export default cssToEsmPostcssPlugin;

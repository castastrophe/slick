// import { fileURLToPath } from 'url';
import path from 'path';
import { esbuildPlugin } from "@web/dev-server-esbuild";
import { playwrightLauncher } from "@web/test-runner-playwright";

export default {
    rootDir: ".",
    files: "src/**/*.test.ts",
    concurrentBrowsers: 3,
    nodeResolve: true,
    plugins: [
        esbuildPlugin({
            ts: true,
            tsconfig: path.resolve('./', 'tsconfig.json'),
        }),
    ],
    browsers: [
        playwrightLauncher({ product: "chromium" }),
        playwrightLauncher({ product: "firefox" }),
        playwrightLauncher({ product: "webkit" }),
    ],
    testRunnerHtml: (testFramework) => `
    <html lang="en-US">
      <head></head>
      <body>
        <script type="module" src="dist/slick.js"></script>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>
  `,
    groups: [{
        name: 'slider',
        files: 'src/slider/**/*.test.ts',
    }],
};

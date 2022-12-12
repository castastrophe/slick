// import path from 'path';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';

export default {
    open: true,
    nodeResolve: true,
    plugins: [
        html({
            meta: [{
                httpEquiv: 'Content-Type',
                content: 'text/html; charset=utf-8',
            }, {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1.0',
            }],
            output: {
                dir: 'dist',
            }
        }),
        esbuildPlugin({
            ts: true,
            tsconfig: './tsconfig.json',
            external: ['lit'],
        })
    ],
    debug: true,
    appIndex: 'demo/index.html'
};

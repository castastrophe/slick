import { fileURLToPath } from 'url';
import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
    input: 'src/slick.ts',
    output: { dir: 'dist' },
    plugins: [
        esbuildPlugin({
            ts: true,
            target: 'esnext',
            tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url)),
            external: ['lit'],
        }),
    ],
};

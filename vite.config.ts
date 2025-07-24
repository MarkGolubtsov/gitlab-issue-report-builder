import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import {crx} from '@crxjs/vite-plugin'
import getManifest from './getManifest'
import {resolve} from 'path'
import zip from 'vite-plugin-zip-pack'
import {name, version} from './package.json';

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, __dirname);
    const matches = env.VITE_PLUGIN_MATCHES.split(',');

    if (!matches.length) {
        throw new Error('Не найдены VITE_PLUGIN_MATCHES для формирования манифеста')
    }

    return {
        plugins: [
            react(),
            crx({manifest: getManifest(matches)}),
            zip({outDir: 'release', outFileName: `${name}-${version}.zip`}),
        ],
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true
                }
            }
        },
        resolve: {
            alias: {
                app: resolve(__dirname, 'src/app')
            }
        },
        build: {
            emptyOutDir: true,
            rollupOptions: {
                output: {
                    format: 'esm'
                },
                input: {
                    index: resolve(__dirname, 'src/index.tsx')
                }
            }
        }
    }
})
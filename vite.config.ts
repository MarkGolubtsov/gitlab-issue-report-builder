import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.config'
import { resolve } from 'path'
import zip from 'vite-plugin-zip-pack'
import { name, version } from './package.json';

export default defineConfig({
    plugins: [
        react(),
        crx({ manifest }),
        zip({ outDir: 'release', outFileName: `${name}-${version}.zip` }),
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
            input: {
                index: resolve(__dirname, 'src/index.tsx')
            }
        }
    }
})
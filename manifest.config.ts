import { defineManifest } from '@crxjs/vite-plugin'
import pkg from './package.json'

export default defineManifest({
    manifest_version: 3,
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    content_scripts: [{
        js: ['src/index.tsx'],
        matches: [
            'https://git.qulix.com/*/*/-/issues/?*',
            'https://git.qulix.com/*/*/-/issues'
        ],
    }],
})
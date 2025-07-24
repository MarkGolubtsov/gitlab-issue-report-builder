import {defineManifest } from '@crxjs/vite-plugin'
import pkg from './package.json'

export default (matches: string[]) => defineManifest((env) => {
    return {
        manifest_version: 3,
        name: pkg.name,
        version: pkg.version,
        description: pkg.description,
        content_scripts: [{
            js: ['src/index.tsx'],
            matches: matches,
        }],
    }
})
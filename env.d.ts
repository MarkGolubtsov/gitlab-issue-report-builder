/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_PLUGIN_MATCHES: string
    readonly VITE_PRIORITY_LABELS: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

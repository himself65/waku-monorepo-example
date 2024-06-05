import { defineConfig } from "vite"
import { stylexPlugin } from "vite-plugin-stylex-dev"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig(({ mode }) => {
    return {
        plugins: [
            tsconfigPaths({
                projects: [
                    "./tsconfig.json",
                    "../ui/tsconfig.json",
                ],
            }),
            stylexPlugin(),
        ],
        // resolve: {
        //     dedupe: ["@myorg/ui > react", "react"],
        // }
        // build: {
        //     rollupOptions: {
        //         external(source, importer, isResolved) {
        //             if (source.startsWith("@myorg/ui")) {
        //                 return true
        //             }
        //             return false
        //         },
        //     },
        // },
        // optimizeDeps: {
        //     exclude: [
        //         // "fomu",
        //         "@myorg/ui > react"
        //     ],
        //     include: [
        //         // "fomu > use-context-selector",
        //         // "fomu > yup",
        //         // "fomu > fast-deep-equal",
        //         // "fomu > deepmerge",
        //         "@myorg/ui > react"
        //     ],
        // },
    }
})

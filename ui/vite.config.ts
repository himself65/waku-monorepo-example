import react from "@vitejs/plugin-react"
import path from "node:path"
import { resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

const { root } = path.parse(process.cwd())

// check if the module is external and if so, don't include it in the bundle
function external(id: string) {
    return !id.startsWith(".") && !id.startsWith(root)
}

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            include: ["components/**/*"],
            outDir: "dist",
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "index.ts"),
            name: "ui",
            formats: ["es"],
            fileName: "index",
        },
        outDir: "dist",
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external,
            output: [
                {
                    globals: {
                        react: "React",
                        "react-dom": "reactdom",
                    },
                    format: "es",
                },
            ],
        },
    },
})

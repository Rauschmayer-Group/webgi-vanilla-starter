import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    base: "./",

    build: {
        lib: {
          entry: "src/index.ts",
          name: "CrystalCave",
          formats: ["umd"]
        },
        rollupOptions: {
          output: {
            format: 'umd',
            entryFileNames: 'diamond_shader.umd.js'
          }
        }
      }


})

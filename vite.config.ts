import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3443,
    https: true,
  },
  base: "/in-memoriam/",
  build: {
    assetsDir: "public",
  },
})

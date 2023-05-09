import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    setupFiles: ["./src/routerMock.setup.js", "./src/setupTests.js"],
  },
  plugins: [
    eslint(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("ahi-"),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 8080,
    hot: true,
    proxy: {
      "^/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        logLevel: "debug",
        rewrite: (path) => path.replace(/^\/api/, "/"),
      },
    },
  },

  watch: {
    usePolling: true,
  },
});

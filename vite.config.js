import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
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
      '^/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          logLevel: 'debug',
          rewrite: (path) => path.replace(/^\/api/, '/'),
      },
    },
  },
 
  watch: {
    usePolling: true,
  }
})

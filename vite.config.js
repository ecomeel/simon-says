import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      config() {
        return { define: { __VUE_PROD_DEVTOOLS__: true } };
      },
    },
  ],
  base: "./",
  build: {
    outDir: "./docs",
  },
});

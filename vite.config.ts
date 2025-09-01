import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import ViteSitemapPlugin from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [react(), tailwindcss(),
    ViteSitemapPlugin({
      hostname: "https://mywebsite.com", // ganti dengan domain kamu
    }),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import viteCompression from 'vite-plugin-compression';
import Inspect from 'vite-plugin-inspect';
import { visualizer } from 'rollup-plugin-visualizer';
// import { minify } from "terser";
// import virtual from 'vite-plugin-virtual'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    checker({
      biome: {
        command: 'check',
      },
    }),
    viteCompression(),
    Inspect(),
    visualizer(),
    // minify(),
    // virtual(),
  ],
})

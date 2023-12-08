import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
import dts from 'vite-plugin-dts'
import { name } from './package.json';

// https://vitejs.dev/config/
/** @type {import('vite').defineConfig} */
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  define: {
    'process.env': {},
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/tailwindcss.ts'),
      name,
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => {
        let f;
        switch (format) {
          case 'es':
            f = 'mjs';
            break;
          case 'cjs':
            f = 'cjs';
            break;
          case 'umd':
            f = 'umd.js';
            break;
          default:
            break;
        }
        
        return `index.${f}`
      },
    },
  }
})

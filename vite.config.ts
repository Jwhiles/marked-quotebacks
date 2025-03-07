import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from "url";
import dts from 'vite-plugin-dts';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // Your entry point
      name: 'MarkedQuotebacks',
      formats: ['es', 'cjs'], // Output formats
      fileName: (format) => `marked-quotebacks.${format}.js`
    },
  },
  plugins: [
    dts({
      outDir: 'dist',
      include: ['src/**/*.ts'],
      staticImport: true,
    }),
  ],
});

import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import wasm from "vite-plugin-wasm";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    wasm(),
    react()],
  optimizeDeps: {
    exclude: ['simulator-rs']
  }
})

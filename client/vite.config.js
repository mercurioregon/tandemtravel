import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      '/@/': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.json', '.vue', '.svg'], // Add '.svg' to include SVG files
  }
});
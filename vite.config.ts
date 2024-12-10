import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    strictPort: true
  },
  optimizeDeps: {
    include: [
      '@codemirror/lang-cpp',
      '@codemirror/lang-java',
      '@codemirror/lang-python',
      '@uiw/codemirror-theme-vscode',
      '@uiw/react-codemirror'
    ]
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          codemirror: [
            '@codemirror/lang-cpp',
            '@codemirror/lang-java',
            '@codemirror/lang-python',
            '@uiw/codemirror-theme-vscode',
            '@uiw/react-codemirror'
          ]
        }
      }
    }
  }
});
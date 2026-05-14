import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/did-api': {
        target: 'https://api.d-id.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/did-api/, '') || '/',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined
          }

          if (/node_modules[\\/](react|react-dom)[\\/]/.test(id)) {
            return 'react-vendor'
          }

          if (id.includes('@ant-design/icons')) {
            return 'antd-icons'
          }

          const antdMatch = id.match(/node_modules[\\/]antd[\\/](es|lib)[\\/]([^\\/]+)/)
          if (antdMatch?.[2]) {
            return `antd-${antdMatch[2]}`
          }

          if (id.includes('node_modules/antd/') || id.includes('node_modules\\antd\\')) {
            return 'antd-core'
          }

          return 'vendor'
        },
      },
    },
  },
})

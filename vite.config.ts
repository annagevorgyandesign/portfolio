import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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

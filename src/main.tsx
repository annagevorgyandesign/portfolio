import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider, theme } from 'antd'
import 'antd/dist/reset.css'
import './index.css'
import App from './components/App'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element with id "root" was not found.')
}

createRoot(rootElement).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#FA8C16',
          borderRadius: 8,
          fontFamily: 'Inter, Segoe UI, Roboto, Arial, sans-serif',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
)

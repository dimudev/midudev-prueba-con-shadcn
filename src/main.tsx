import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from "@/components/theme-provider"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <App />
  </ThemeProvider>
)

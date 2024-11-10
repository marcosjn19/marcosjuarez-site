import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css'
import { MantineProvider } from '@mantine/core';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <App />
  </MantineProvider>  
)

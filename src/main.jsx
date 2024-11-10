import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css'
import { MantineProvider } from '@mantine/core';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: ( <Home/> ),
  }
])

createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <RouterProvider router = {router}/>
  </MantineProvider>  
)

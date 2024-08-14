import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './PROVIDER/AuthProvider'



const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
              <RouterProvider router={router}></RouterProvider>
          </HelmetProvider>
        </QueryClientProvider>
    </AuthProvider>
      
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { QueryClientProvider } from "react-query"
import { queryClient } from './services/queryClient'
import { BrowserRouter} from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)

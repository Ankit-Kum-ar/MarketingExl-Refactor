import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'




createRoot(document.getElementById('root')!).render(
  
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </Provider>
)

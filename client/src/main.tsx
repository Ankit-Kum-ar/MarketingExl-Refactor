import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'




createRoot(document.getElementById('root')!).render(
  
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </Provider>
)

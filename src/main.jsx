import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Routes from './Routes/Routes.jsx'
import { Provider } from 'react-redux'
import { store } from './Store/store.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Routes />
  </Provider>
)
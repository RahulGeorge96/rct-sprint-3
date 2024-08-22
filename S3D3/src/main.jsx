import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router} from "react-router-dom"
import { Provider } from 'react-redux'
import './index.css'
import { store } from './redux/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
   
  </StrictMode>,
)

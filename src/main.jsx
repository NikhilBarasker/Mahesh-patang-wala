import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { store } from './Components/Redux/Store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <Toaster />
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ColorModeContextProvider } from "./theme"
import { CssBaseline } from '@mui/material'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeContextProvider>
      <CssBaseline />
      <App />
    </ColorModeContextProvider>
  </React.StrictMode>,
)

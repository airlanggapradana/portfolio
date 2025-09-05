import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router";
import {Analytics} from "@vercel/analytics/react"
import {HelmetProvider} from "react-helmet-async";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
    <Analytics/>
  </StrictMode>,
)

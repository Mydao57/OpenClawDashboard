import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App(){
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">OpenClaw Dashboard (MVP)</h1>
      <p>Backend API: /api/health</p>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<App />)

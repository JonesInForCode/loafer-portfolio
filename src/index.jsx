import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  <BrowserRouter>
    <Routes>
      <Route index element={<Layout />} />
    </Routes>
  
  </BrowserRouter>
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
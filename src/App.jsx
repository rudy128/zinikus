import React from "react"
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ResearchPage from "./pages/ResearchPage"
import ProductPage from "./pages/ProductPage"
import Newsletter from "./pages/Newsletter"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </Router>
  )
}

export default App

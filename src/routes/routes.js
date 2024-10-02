import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../containers/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

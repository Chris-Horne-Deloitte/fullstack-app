import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreateEntry from './components/CreateEntry';
import EditEntry from './components/EditEntry';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEntry />} />
        <Route path="/edit/:id" element={<EditEntry />} />
      </Routes>
    </Router>
  );
}

export default App;
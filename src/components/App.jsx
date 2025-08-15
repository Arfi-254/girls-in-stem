import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from './HomePage';
import ResourcesPage from './ResourcesPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </main>

        <footer className="bg-black/30 text-center py-8 text-white">
          <p className="text-lg mb-2">Built with 💜 for African Girls in STEM</p>
          <p className="text-blue-200">Empowering the next generation of innovators</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
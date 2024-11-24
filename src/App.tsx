import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MathProvider } from './contexts/MathContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Garden from './pages/Garden';
import Study from './pages/Study';
import ProblemSolving from './pages/ProblemSolving';

function App() {
  return (
    <MathProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/garden" element={<Garden />} />
            <Route path="/study" element={<Study />} />
            <Route path="/problem/:id" element={<ProblemSolving />} />
          </Routes>
        </Layout>
      </Router>
    </MathProvider>
  );
}

export default App; 
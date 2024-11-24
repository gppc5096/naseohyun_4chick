import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Learning from './pages/Learning';
import Statistics from './pages/Statistics';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import { LearningProvider } from './contexts/LearningContext';
import './App.css';

function App() {
  return (
    <Router>
      <LearningProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </LearningProvider>
    </Router>
  );
}

export default App;

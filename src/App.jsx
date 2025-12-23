import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Industries from './pages/Industries';
import Solutions from './pages/Solutions';
import Patterns from './pages/Patterns';
import Resources from './pages/Resources';
import Careers from './pages/Careers';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/patterns" element={<Patterns />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;

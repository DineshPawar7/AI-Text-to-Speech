import './App.css';
import Header from './homepage/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs'
import SampleTTS from './homepage/SampleTTS'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import your other components as needed

function App() {
  return (
    <Router>
      <div>
        <Header />
        < SampleTTS />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/pricing" element={<FAQs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

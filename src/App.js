import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import Awards from './Pages/Awards';
import Certifications from './Pages/Certifications';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
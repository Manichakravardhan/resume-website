import './App.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Resume from './components/Resume.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Education from './components/Education.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/experience" element={<Resume />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

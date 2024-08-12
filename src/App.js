import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CallForPaper from './components/CallForPaper/CallForPaper';
import PaperSubmission from './components/PaperSubmission/PaperSubmission';
import Registration from './components/Registration/Registration';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import About from './components/About/About';
import Advisory from './components/AdvisoryCommittee/Advisory';
import Organizing from './components/OrganizingCommittee/Organizing';
import TechnicalProgram from './components/TechnicalProgramCommittee/TechnicalProgram';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/organizing" element={<Organizing />} />
          <Route path="/technical" element={<TechnicalProgram />} />
          <Route path="/callforpaper" element={<CallForPaper />} />
          <Route path="/papersubmission" element={<PaperSubmission />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
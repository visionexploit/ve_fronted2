import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/pages/PageStyles.css';
import Home from './components/pages/Home';
import ServicesPage from './components/pages/ServicesPage';
import ProgramsPage from './components/pages/ProgramsPage';
import UniversitiesPage from './components/pages/UniversitiesPage';
import Pricing from './components/pages/Pricing';
import Chatbot from './components/Chatbot'; // Import the Chatbot component
import CareerBlogPage from './components/pages/CareerBlogPage';
import SignUpPage from './components/pages/SignUpPage';
import MyApplicationsPage from './components/pages/MyApplicationsPage';
import ScrollToTop from './components/ScrollToTop';
import Bartin from './components/universities/Bartin';
import Topkapi from './components/universities/Topkapi';
import Halic from './components/universities/Halic';
import Bolu from './components/universities/Bolu';
import IstanbulAydin from './components/universities/IstanbulAydin';
import IstanbulMedeniyet from './components/universities/IstanbulMedeniyet';
import IstanbulMedipol from './components/universities/IstanbulMedipol';
import YildizTech from './components/universities/YildizTech';
import Koc from './components/universities/Koc';
import IstanbulUni from './components/universities/IstanbulUni';
import Marmara from './components/universities/Marmara';
import Dokuz from './components/universities/Dokuz';
import Ege from './components/universities/Ege';
import Hacettepe from './components/universities/Hacettepe';
import Zonguldak from './components/universities/Zonguldak';
import Ostim from './components/universities/Ostim';
import Kastamonu from './components/universities/Kastamonu';
import Karabuk from './components/universities/Karabuk';
import BursaTech from './components/universities/BursaTech';
import Bahcesehir from './components/universities/Bahcesehir';
import Ankara from './components/universities/Ankara';
import Bilkent from './components/universities/Bilkent';
import Metu from './components/universities/Metu';
import Sabanci from './components/universities/Sabanci';
import Bogazici from './components/universities/Bogazici';
import Itu from './components/universities/Itu';
import ContactInfoModal from './components/ContactInfoModal';

function App() {
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      const timer = setTimeout(() => setShowContactModal(true), 10000); // 10 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/universities" element={<UniversitiesPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/my-applications" element={<MyApplicationsPage />} />
          <Route path="/career-blog" element={<CareerBlogPage />} />
          <Route path="/bartin" element={<Bartin />} />
          <Route path="/topkapi" element={<Topkapi />} />
          <Route path="/aydin" element={<IstanbulAydin />} />
          <Route path="/halic" element={<Halic />} />
          <Route path="/bolu" element={<Bolu />} />
          <Route path="/medeniyet" element={<IstanbulMedeniyet />} />
          <Route path="/medipol" element={<IstanbulMedipol />} />
          <Route path="/yildiz" element={<YildizTech />} />
          <Route path="/koc" element={<Koc />} />
          <Route path="/istanbul" element={<IstanbulUni />} />
          <Route path="/marmara" element={<Marmara />} />
          <Route path="/dokuz" element={<Dokuz />} />
          <Route path="/ege" element={<Ege />} />
          <Route path="/hacettepe" element={<Hacettepe />} />
          <Route path="/zonguldak" element={<Zonguldak />} />
          <Route path="/ostim" element={<Ostim />} />
          <Route path="/kastamonu" element={<Kastamonu />} />
          <Route path="/karabuk" element={<Karabuk />} />
          <Route path="/bursa" element={<BursaTech />} />
          <Route path="/bahcesehir" element={<Bahcesehir />} />
          <Route path="/ankara" element={<Ankara />} /> 
          <Route path="/bilkent" element={<Bilkent />} />
          <Route path="/metu" element={<Metu />} />
          <Route path="/sabanci" element={<Sabanci />} />
          <Route path="/bogazici" element={<Bogazici />} />          
          <Route path="/itu" element={<Itu />} />
        </Routes>
        {/* Add Chatbot component outside of Routes so it appears on all pages */}
        <Chatbot />
        <ContactInfoModal show={showContactModal} onClose={() => setShowContactModal(false)} />
      </Router>
    </>
  );
}

export default App;
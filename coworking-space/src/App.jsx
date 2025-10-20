import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Entreprise from './components/Entreprise'
import Spaces from './components/Spaces'
import Presentation from './components/Presentation'
import Offres from './components/Offres'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Domiciliation from './pages/Domiciliation'
import ServiceInformatique from './pages/ServiceInformatique'
import Assistance from './pages/Assistance'
import Prestations from './pages/Prestations'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>

      <Navbar />

      <Routes>
        {/* Page d’accueil */}
        <Route
          path="/"
          element={
            <>
              <Entreprise />
              <Spaces />
              <Presentation />
              <Offres />
            </>
          }
        />

        {/* Page Contact */}
        <Route path="/contact" element={<Contact />} />
         <Route path="/domiciliation" element={<Domiciliation />} />
         <Route path="/serviceinformatique" element={<ServiceInformatique />} />
         <Route path="/assistance" element={<Assistance />} />
         <Route path="/prestations" element={<Prestations />} />
      </Routes>
      

      <Footer />
    </Router>
  );
}

export default App

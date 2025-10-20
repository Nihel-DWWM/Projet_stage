
import { Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {


  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header className="fixed top-0 left-0 w-full z-50">
      
      {/* Barre supérieure */}
      <div className="relative w-full h-10 bg-[#136E7A] flex justify-between items-center px-4 md:px-8">

          <div className="h-full flex items-center space-x-2 text-white">
            <Phone className="w-5 h-5 text-white" />
            <span>01 23 45 67 89</span>
          </div>
         <a href="#login" className=" text-white px-4 py-2 rounded-lg">Espace Client</a>
      </div>

      {/* Navbar */}
      <nav className="relative flex items-center px-8 py-4 bg-white shadow-md">
          {/* Logo à gauche */}
          <a href="/">
          <div className="text-2xl font-bold">
            <img
              src="/Part-serv-logo-1.png"
              alt="Logo"
              className="h-12 w-auto object-contain px-6"
            />
          </div>
          </a>

          {/* Menu centré */}
          <ul className="hidden md:flex space-x-6 font-medium absolute left-1/2 transform -translate-x-1/2">
            <li><a href="/domiciliation" className="hover:text-[#136E7A] font-bold">Domiciliation</a></li>
            <li><a href="/prestations" className="hover:text-[#136E7A] font-bold">Prestations</a></li>
            <li><a href="/serviceinformatique" className="hover:text-[#136E7A] font-bold">Service informatique</a></li>
            <li><a href="/assistance" className="hover:text-[#136E7A] font-bold">Assistance</a></li>
            <li><a href="/contact" className="hover:text-[#136E7A] font-bold">Contact</a></li>
          </ul>

             {/* Bouton hamburger (mobile) */}
              <button
                className="md:hidden text-2xl text-gray-700 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>

              {/* Menu mobile */}
              {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md border-t mt-2 md:hidden z-50">
                  <ul className="flex flex-col items-center space-y-4 py-6 font-medium">
                    <li><a href="/domiciliation" className="hover:text-[#136E7A]" onClick={() => setIsOpen(false)}>Domiciliation</a></li>
                    <li><a href="/prestations" className="hover:text-[#136E7A]" onClick={() => setIsOpen(false)}>Prestations</a></li>
                    <li><a href="/serviceinformatique" className="hover:text-[#136E7A]" onClick={() => setIsOpen(false)}>Service informatique</a></li>
                    <li><a href="/assistance" className="hover:text-[#136E7A]" onClick={() => setIsOpen(false)}>Assistance</a></li>
                    <li><a href="/contact" className="hover:text-[#136E7A]" onClick={() => setIsOpen(false)}>Contact</a></li>
                  </ul>
                </div>
              )}

        </nav>

   </header>

    
    </>
    
  )
}
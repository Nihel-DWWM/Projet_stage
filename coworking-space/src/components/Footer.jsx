import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-5 px-6 md:px-16">
                
            <div className="max-w-6xl mx-auto">
              {/* Grille principale */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 mb-10">
                
                {/* Domiciliation */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 hover:text-[#df9a18]">Domiciliation</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li><a href="/domiciliation/#intro" className="hover:text-[#136E7A]">Avantages</a></li>
                    <li><a href="/domiciliation/#formules" className="hover:text-[#136E7A]">Nos formules</a></li>
                    <li><a href="/domiciliation/#faq" className="hover:text-[#136E7A]">Questions fréquentes</a></li>
                  </ul>
                </div>

                {/* Prestations */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 hover:text-[#df9a18]">Prestations</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li><a href="/prestations" className="hover:text-[#136E7A]">Location de bureaux</a></li>
                    <li><a href="/prestations" className="hover:text-[#136E7A]">Salles de réunion</a></li>
                    <li><a href="/prestations" className="hover:text-[#136E7A]">Événements d’entreprise</a></li>
                  </ul>
                </div>

                {/* Service Informatique */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 hover:text-[#df9a18]">Service Informatique</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li><a href="/serviceinformatique/#projets" className="hover:text-[#136E7A]">Réseaux & Sécurité</a></li>
                    <li><a href="/serviceinformatique/#projets" className="hover:text-[#136E7A]">Maintenance</a></li>
                    <li><a href="/serviceinformatique/#projets" className="hover:text-[#136E7A]">Développement Web</a></li>
                  </ul>
                </div>

                {/* Assistance */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 hover:text-[#df9a18]">Assistance</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li><a href="/assistance" className="hover:text-[#136E7A]">Support technique</a></li>
                    <li><a href="/assistance" className="hover:text-[#136E7A]">FAQ</a></li>
                    
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 hover:text-[#df9a18]">Support</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li><a href="/contact" className="hover:text-[#136E7A]">Contact</a></li>
                    <li><a href="" className="hover:text-[#136E7A]">Mentions légales</a></li>
                    <li><a href="" className="hover:text-[#136E7A]">Confidentialité</a></li>
                   
                  </ul>
                </div>
              </div>
              
            </div>  

        {/* Social + Logo */}
       
     
       <div className="flex flex-col sm:flex-row justify-between items-center border-t md:pt-0 md:pb-0 pt-6">
          {/* Réseaux sociaux */}
          <div className="flex space-x-6 text-gray-600 text-2xl mb-6 sm:mb-0">
            <a href="#" className="hover:text-[#df9a18]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#df9a18]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#df9a18]"><FaYoutube /></a>
            <a href="#" className="hover:text-[#df9a18]"><FaLinkedinIn /></a>
          </div>

          <p>© {new Date().getFullYear()} Partenariat Services. Tous droits réservés.</p>

          {/* Logo */}
          <div className="flex items-center justify-center h-[100px]">
            <img
              src="/Part-serv-logo-1.png"
              alt="Logo"
              className=" h-[90%] w-auto object-contain px-6"
            />
          </div>
        </div>
    </footer>
  );
}
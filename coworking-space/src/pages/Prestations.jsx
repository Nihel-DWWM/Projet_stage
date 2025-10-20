import { FaLaptopCode, FaUsers, FaBuilding, FaLock, FaCloud, FaHeadset,FaPhone } from "react-icons/fa";

export default function Prestations() {
  const prestations = [
    {
      icon: <FaLaptopCode className="text-[#136E7A] text-4xl" />,
      titre: "Développement sur mesure",
      desc: "Conception et développement d’applications web adaptées à vos besoins spécifiques.",
    },
    {
      icon: <FaUsers className="text-[#136E7A] text-4xl " />,
      titre: "Accompagnement & Conseil",
      desc: "Un suivi personnalisé pour optimiser vos outils numériques et votre organisation.",
    },
    {
      icon: <FaBuilding className="text-[#136E7A] text-4xl" />,
      titre: "Domiciliation d’entreprise",
      desc: "Bénéficiez d’une adresse professionnelle stratégique et de services adaptés.",
    },
    {
      icon: <FaLock className="text-[#136E7A] text-4xl" />,
      titre: "Sécurité informatique",
      desc: "Protection de vos données, audits de sécurité et solutions de cybersécurité.",
    },
    {
      icon: <FaCloud className="text-[#136E7A] text-4xl" />,
      titre: "Solutions Cloud",
      desc: "Mise en place et gestion d’environnements cloud fiables et évolutifs.",
    },
    {
      icon: <FaHeadset className="text-[#136E7A] text-4xl" />,
      titre: "Support & Assistance",
      desc: "Une équipe réactive pour vous aider à résoudre vos problèmes rapidement.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen mt-[96px]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#136E7A] to-teal-500 text-white py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">Nos Prestations</h1>
        <p className="mt-3 text-lg opacity-90">
          Des solutions adaptées pour accompagner la croissance de votre entreprise
        </p>
      </header>

      {/* Prestations */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prestations.map((prestation, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl border-x-2 border-transparent hover:border-[#df9a18] transition group"
            >
              <div className="flex items-center justify-center mb-4">
                {prestation.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {prestation.titre}
              </h3>
              <p className="mt-3 text-gray-600 text-center text-sm">
                {prestation.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
     <section className="bg-gradient-to-r from-[#136E7A] to-teal-500 text-white py-12 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-bold">
                Besoin d’un accompagnement personnalisé ?
              </h2>
              <p className="mt-3 text-lg opacity-90">
                Contactez-nous dès maintenant pour discuter de vos projets et trouver la
                solution qui vous correspond.
              </p>
            </div>

             <a href="#contact"  className="bg-white flex justify-center items-center gap-2 text-[#136E7A] px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition group"> 
            <span className="group-hover:text-[#df9a18] rotate-90 "><FaPhone/></span> Nous contacter
            </a>
             

            
          </div>
        </section>
    </div>
  );
}

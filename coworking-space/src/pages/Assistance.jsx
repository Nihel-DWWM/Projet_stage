import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaChevronDown, FaPhone } from "react-icons/fa";

export default function Assistance(){



 const [openIndex, setOpenIndex] = useState(null);



  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Comment puis-je vous contacter pour une demande urgente ?",
      answer:
        "Vous pouvez nous joindre par téléphone au 05 12 34 56 78 du lundi au vendredi, de 9h à 18h. Pour toute demande non urgente, privilégiez l’email afin que nous puissions mieux suivre votre dossier.",
    },
    {
      question: "Quel est le délai moyen de réponse à une demande d’assistance ?",
      answer:
        "Nos équipes s’engagent à répondre à vos demandes dans un délai maximum de 24h ouvrées.",
    },
    {
      question: "Proposez-vous une assistance sur place ?",
      answer:
        "Oui, selon la nature de votre demande, nous pouvons planifier une intervention sur site ou vous accompagner à distance.",
    },
    {
      question: "Comment accéder à mes documents liés à mon contrat ?",
      answer:
        "Tous vos documents sont disponibles depuis votre espace client sécurisé. Connectez-vous avec vos identifiants pour y accéder à tout moment.",
    },
  ];



return(

<>

 <div className="bg-gray-50 min-h-screen mt-[96px]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#136E7A] to-teal-500 text-white py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Assistance & Support
        </h1>
        <p className="mt-3 text-lg opacity-90">
          Nous sommes là pour vous accompagner à chaque étape
        </p>
      </header>

      {/* Étapes Assistance */}
        <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
            Comment obtenir de l’aide ?
        </h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
            Suivez ces étapes pour trouver rapidement une solution à votre problème.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
            {/* Étape 1 */}
            <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-xl transition border-transparent border-x-2 hover:border-[#df9a18]">
              <div className="flex justify-center mb-4">
                <span className="bg-[#136E7A] text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold transition-colors duration-300 ">
                  1
                </span>
              </div>
              <h3 className="font-semibold text-lg text-gray-800">
                Consultez la FAQ
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Parcourez notre base de connaissances pour obtenir des réponses aux
                questions les plus fréquentes.
              </p>
            </div>

            {/* Étape 2 */}
            <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-xl transition border-transparent border-x-2 hover:border-[#df9a18]">
            <div className="flex justify-center mb-4">
                <span className="bg-[#136E7A] text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">
                2
                </span>
            </div>
            <h3 className="font-semibold text-lg text-gray-800">
                Créez un ticket
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
                Si vous n’avez pas trouvé de solution, ouvrez un ticket d’assistance en
                ligne et suivez son avancement.
            </p>
            </div>

            {/* Étape 3 */}
            <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-xl transition border-transparent border-x-2 hover:border-[#df9a18]">
            <div className="flex justify-center mb-4">
                <span className="bg-[#136E7A] text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold transition-colors duration-300 ">
                3
                </span>
            </div>
            <h3 className="font-semibold text-lg text-gray-800">
                Contact direct
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
                Pour un accompagnement personnalisé, contactez-nous directement par
                téléphone ou email.
            </p>
            </div>
        </div>
        </section>


      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
          Questions fréquentes
        </h2>

        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                <FaChevronDown
                  className={`text-gray-600 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#136E7A] to-teal-500 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold">
              Vous n’avez pas trouvé la réponse à votre question ?
            </h2>
            <p className="mt-3 text-lg opacity-90">
              Contactez notre équipe dès maintenant, nous serons ravis de vous aider.
            </p>
          </div>

           <a
            href="#contact"
            className="bg-white flex justify-center items-center gap-2 text-[#136E7A] px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition group"
          >
           <span className="group-hover:text-[#df9a18] rotate-90 "><FaPhone/></span> Nous contacter
          </a>
        </div>
      </section>
    </div>


</>

)}
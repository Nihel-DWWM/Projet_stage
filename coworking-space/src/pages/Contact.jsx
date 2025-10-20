import Navbar from "../components/Navbar"

export default function Contact(){


return(

    <>

    {/* ===== HERO ===== */}
      <section className="relative w-full h-[300px] mt-[96px]">
        <img
          src="https://picsum.photos/1200/400" // a remplcer avec image
          alt="Vue de la ville"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Nous contacter</h1>
        </div>
      </section>

      {/* ===== INTRO TEXTE ===== */}
      <section className="text-center max-w-3xl mx-auto py-12 px-6">
        <p className="text-lg text-[#7A1045] font-medium leading-relaxed mb-6">
          Vous recherchez un bureau ou une salle de réunion ? <br />
          Pour une semaine ou plusieurs mois ? <br />
          Demandez-nous un devis & nous vous ferons une offre sur mesure
          selon vos besoins dans les plus brefs délais.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Nous vous proposons un emplacement exceptionnel pour développer vos affaires.
          Facilité d'accès, parking, espace de vie et services vous permettront
          de travailler et d’accueillir votre clientèle en toute sérénité, dégagés des contraintes matérielles.
          Alors à très vite !
        </p>
      </section>

      {/* ===== FORMULAIRE ===== */}
       {/* FORMULAIRE + MAP */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* FORMULAIRE */}
          <form className="bg-white p-8 shadow-md rounded-lg flex flex-col space-y-4">
            <input type="text" placeholder="Nom*" className="border border-[#136E7A] p-3 rounded-md w-full" />
            <input type="text" placeholder="Prénom" className="border border-[#136E7A] p-3 rounded-md w-full" />
            <input type="text" placeholder="Entreprise" className="border border-[#136E7A] p-3 rounded-md w-full" />
            <input type="text" placeholder="Activité" className="border border-[#136E7A] p-3 rounded-md w-full" />
            <input type="email" placeholder="Email*" className="border border-[#136E7A] p-3 rounded-md w-full" />
            <input type="tel" placeholder="Téléphone*" className="border border-[#136E7A] p-3 rounded-md w-full" />
             <span>* Les champs sont requis</span>
            {/* Cases à cocher */}
            <div>
              <label className="block mb-2 font-medium">Votre besoin</label>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-[#136E7A]" />
                  <span>Location Longue Durée</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-[#136E7A]" />
                  <span>Location Courte Durée</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-[#136E7A]" />
                  <span>Salle de Réunion</span>
                </label>
              </div>
            </div>

            <textarea
              placeholder="Votre message..."
              rows="5"
              className="border border-[#136E7A] p-3 rounded-md w-full"
            ></textarea>

            <button
              type="submit"
              className="bg-[#136E7A] text-white font-semibold py-3 rounded-md hover:bg-[#053649] transition"
            >
              Envoyer
            </button>
          </form>

          {/* MAP */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88463.78858348807!2d-1.3122868537902879!3d46.14092041525994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480153ee9b243557%3A0x6e59e490e51668af!2sA2MI%20INFORMATIQUE!5e0!3m2!1sfr!2sfr!4v1759151812155!5m2!1sfr!2sfr" 
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

         <div className="max-w-6xl mx-auto mt-6 text-sm text-gray-600 px-4">
            <p>
            En conformité des lois en vigueur, concernant la Protection des Données
            Informatiques, les seules informations recueillies par le formulaire de
            contact sont enregistrées pour le traitement de votre demande.
            Elles sont conservées pendant un an et ne seront en aucun cas cédées,
            vendues ou communiquées à des tiers.
            </p>
        </div>


      </section>
  
    </>

)}
import { FaPhone } from "react-icons/fa";

export default function ServiceInformatique(){


    return(
<>

  <div className="bg-gray-50 text-gray-800 mt-[96px]">


      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#136E7A] to-teal-500 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Services Informatiques Professionnels
        </h1>

        <p className="text-lg opacity-90 max-w-2xl mx-auto">Pour renforcer l’activité de domiciliation Partenariat Services propose un service
               informatique professionnel pour les professionnels et les particuliers.</p>
        {/* <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Nous accompagnons les entreprises dans leur transformation digitale avec des solutions fiables, sécurisées et adaptées à vos besoins.
        </p> */}
        <div className="mt-6">
          <a
            href="#contact"
            className="bg-white text-[#136E7A] px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition"
          >
            Demander un devis gratuit
          </a>
        </div>
      </section>

      {/* Section expertise et présentation */}
        <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Image illustrant le service */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/vue-de-dessus-de-l-ordinateur-portable-et-de-la-souris-avec-des-icones-de-la-technologie.jpg"
              alt="Service Informatique"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Texte de présentation */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#136E7A] mb-6">
              Une expertise reconnue en informatique
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Forts de notre expérience à <strong>La Rochelle, Niort et Angers</strong>,
              c’est avec enthousiasme que nous proposons la même gamme de services et de matériel
              à nos clients professionnels et particuliers.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Nous réalisons avec vous vos <strong>projets informatiques et de communication</strong>,
              et intervenons rapidement sur site pour remettre en route votre outil informatique.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Notre objectif 🎯: vous garantir un service <strong>rapide, fiable et personnalisé</strong>,
              au plus proche de vos besoins.
            </p>

          </div>
        </section>
         
           {/* Pourquoi nous choisir */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Pourquoi nous choisir ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h4 className="font-bold text-lg">🔒 Fiabilité</h4>
              <p className="mt-2 text-sm opacity-80">
                Des solutions éprouvées et sécurisées pour garantir vos performances au quotidien.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h4 className="font-bold text-lg">⚡ Réactivité</h4>
              <p className="mt-2 text-sm opacity-80">
                Une équipe disponible et réactive pour répondre rapidement à vos besoins.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h4 className="font-bold text-lg">🤝 Proximité</h4>
              <p className="mt-2 text-sm opacity-80">
                Un accompagnement personnalisé et humain, adapté à votre entreprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nos solutions informatiques
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition border-x-2 border-transparent hover:border-[#df9a18]">
            <h3 className="font-bold text-xl mb-2">Support & Maintenance</h3>
            <p className="opacity-80 text-sm">
              Assistance technique rapide, surveillance proactive et résolution de problèmes pour assurer la continuité de vos activités.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition border-x-2 border-transparent hover:border-[#df9a18]">
            <h3 className="font-bold text-xl mb-2">Sécurité Informatique</h3>
            <p className="opacity-80 text-sm">
              Mise en place de solutions de cybersécurité pour protéger vos données et vos infrastructures contre les menaces.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition border-x-2 border-transparent hover:border-[#df9a18]">
            <h3 className="font-bold text-xl mb-2">Cloud & Réseaux</h3>
            <p className="opacity-80 text-sm">
              Hébergement cloud, sauvegarde de données, gestion et optimisation de vos réseaux informatiques.
            </p>
          </div>
        </div>
      </section>



        {/* Section – Nos prestations informatiques */}
          <section className="bg-[#136E7A] py-16 px-6" id="prestations-info">
            <div className="max-w-6xl mx-auto">
              {/* Titre à gauche */}
              <div className="text-left mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  Nos Services Informatiques
                </h2>
                <p className="text-white/90 text-lg max-w-3xl">
                  Partenariat Services met son expertise au service des particuliers et des professionnels :
                  maintenance, dépannage, sécurité, et développement sur mesure.
                </p>
              </div>

              {/* Grille des services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* Carte 1 */}
                <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-500">
                  <img
                    src="/2148419164.jpg"
                    alt="Dépannage informatique"
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity">
                    <h3 className="text-xl font-semibold mb-2">Dépannage informatique</h3>
                    <p className="text-sm text-center px-4">
                      Intervention à domicile ou en boutique pour la remise en état de votre matériel.
                    </p>
                  </div>
                </div>

                {/* Carte 2 */}
                <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-500">
                  <img
                    src="/2149309648.jpg
                    "
                    alt="Vente matériel"
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity">
                    <h3 className="text-xl font-semibold mb-2">Vente de matériel</h3>
                    <p className="text-sm text-center px-4">
                      Ordinateurs, serveurs, tablettes, smartphones neufs ou reconditionnés, selon vos besoins.
                    </p>
                  </div>
                </div>

                   {/* Carte 3 */}
                    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-500">
                      <img
                        src="/2148323435.jpg"
                        alt="Installation matériel sur site"
                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity">
                        <h3 className="text-xl font-semibold mb-2">Installation sur site</h3>
                        <p className="text-sm text-center px-4">
                          Installation et configuration complète de vos équipements informatiques : postes, serveurs et périphériques.
                        </p>
                      </div>
                    </div>

                    
                   {/* Carte 4 */}
                      <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow">
                      <img
                        src="https://www.ipe.fr/wp-content/uploads/2020/09/Quest-ce-qui-diffe%CC%81rencie-la-maintenance-le-de%CC%81pannage-et-lassistance-informatique-scaled.jpg"
                        alt="E-commerce"
                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity">
                          <h3 className="text-xl font-semibold mb-2 text-center">Maintenance Informatique Préventive</h3>
                              <p className="text-sm text-center px-4">
                                Supervision des postes, mises à jour régulières et assistance technique pour un parc stable et sécurisé.
                              </p>
                      </div>
                    </div>

                {/* Carte 5 */}
                <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-500">
                  <img
                    src="/124061.jpg"
                    alt="Logiciels professionnels"
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity">
                    <h3 className="text-xl font-semibold mb-2">Logiciels professionnels</h3>
                    <p className="text-sm text-center px-4">
                      Installation et configuration de logiciels commerciaux, administratifs et métiers.
                    </p>
                  </div>
                </div>



                {/* Carte 6 */}
                <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-500">
                  <img
                    src="/137902.jpg"
                    alt="Communication visuelle"
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity">
                    <h3 className="text-xl font-semibold mb-2">Communication d’entreprise</h3>
                    <p className="text-sm text-center px-4">
                      Création de cartes de visite, flyers, et supports publicitaires sur mesure.
                    </p>
                  </div>
                </div>

                {/* Carte 7 */}
                <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-500">
                  <img
                    src="/16541.jpg"
                    alt="Développement web"
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity">
                    <h3 className="text-xl font-semibold mb-2">Développement web</h3>
                    <p className="text-sm text-center px-4">
                      Création de sites internet, extranet, et applications sur mesure.
                    </p>
                  </div>
                </div>

                {/* Carte 8 */}
                 
                  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-500">
                    <img
                      src="/2149399284.jpg"
                      alt="Sauvegarde et récupération de données"
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity">
                      <h3 className="text-xl font-semibold mb-2 text-center">Sauvegarde & Récupération de Données</h3>
                      <p className="text-sm text-center px-4">
                        Sauvegarde en ligne sécurisée, restauration de fichiers et récupération de données perdues.
                      </p>
                    </div>
                  </div>
               
              </div>
            </div>
          </section>

    
        
        {/* Section – Projets réalisés */}
          {/* <section className="bg-[#136E7A] py-16 px-6" id="projets">
            <div className="max-w-6xl mx-auto"> */}
              {/* En-tête à gauche */}
              {/* <div className="text-left mb-10">
                <h2 className="text-3xl md:text-3xl font-extrabold text-white mb-4">
                  Nos Projets Réalisés
                </h2>
                <p className="text-white/90 text-lg max-w-2xl">
                  Nous concevons des solutions informatiques modernes et performantes :
                  sites web, applications sur mesure et projets d’intégration.
                </p>
              </div> */}

              {/* Grille des projets */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> */}
                {/* Projet 1 */}
                {/* <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src="https://www.mister-wp.com/wp-content/uploads/2020/11/Meilleur-Theme-WordPress-site-vitrine.jpg.webp"
                    alt="Projet site vitrine"
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity">
                    <h3 className="text-xl font-semibold mb-2">Site vitrine professionnel</h3>
                    <p className="text-sm">Création d’un site moderne et responsive</p>
                  </div>
                </div> */}

                {/* Projet 2 */}
                {/* <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src="https://d2fl3xywvvllvq.cloudfront.net/wp-content/uploads/2016/06/commentchoisirsonapplication-1.jpg"
                    alt="Application web"
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity">
                    <h3 className="text-xl font-semibold mb-2">Application de gestion</h3>
                    <p className="text-sm">Solution web pour PME et indépendants</p>
                  </div>
                </div> */}

                {/* Projet 3 */}
                {/* <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src="https://ssl.sitew.org/images/blog/articles/cover/figma-exemples-boutique-en-ligne.png"
                    alt="E-commerce"
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity">
                    <h3 className="text-xl font-semibold mb-2">Boutique en ligne</h3>
                    <p className="text-sm">Développement e-commerce complet</p>
                  </div>
                </div> */}

                {/* Projet 4 */}
                {/* <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src="https://media.istockphoto.com/id/682286324/fr/photo/jeune-ing%C3%A9nieur-inspecteur-c%C3%A2ble-r%C3%A9seau.jpg?s=612x612&w=0&k=20&c=BDmAL6IWmJeYnH_Sor-s2sRn8-JWehCeADtRAqwShzw="
                    alt="E-commerce"
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity">
                    <h3 className="text-xl font-semibold mb-2">Installation Réseau d’Entreprise</h3>
                      <p className="text-sm text-center px-4">
                        Mise en place d’un réseau sécurisé avec VLAN, Wi-Fi professionnel et supervision.
                      </p>
                  </div>
                </div> */}

                {/* Projet 4 */}
                 {/* <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src="https://fcmicro.net/wp-content/uploads/2024/06/Audit-de-securite-informatique-FC-MICRO.webp"
                    alt="E-commerce"
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity">
                    <h3 className="text-xl font-semibold mb-2">Audit et Sécurisation du Système</h3>
                          <p className="text-sm text-center px-4">
                            Analyse complète du réseau et mise en place de pare-feux, antivirus et protocoles de sécurité.
                          </p>
                  </div>
                </div> */}

                 {/* Projet 4 */}
                 {/* <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src="https://www.ipe.fr/wp-content/uploads/2020/09/Quest-ce-qui-diffe%CC%81rencie-la-maintenance-le-de%CC%81pannage-et-lassistance-informatique-scaled.jpg"
                    alt="E-commerce"
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity">
                      <h3 className="text-xl font-semibold mb-2">Maintenance Informatique Préventive</h3>
                          <p className="text-sm text-center px-4">
                            Supervision des postes, mises à jour régulières et assistance technique pour un parc stable et sécurisé.
                          </p>
                  </div>
                </div>
                

              </div>

              
            </div>
          </section> */}

      {/* Étapes */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Comment ça marche ?
        </h2>
        <ol className="space-y-6">
          <li className="flex items-start space-x-4">
            <span className="bg-[#136E7A] text-white font-bold rounded-full h-8 w-8 flex items-center justify-center hover:bg-[#df9a18] transition">
              1
            </span>
            <p>Prise de contact et analyse de vos besoins informatiques.</p>
          </li>
          <li className="flex items-start space-x-4">
            <span className="bg-[#136E7A] text-white font-bold rounded-full h-8 w-8 flex items-center justify-center hover:bg-[#df9a18] transition">
              2
            </span>
            <p>Proposition de solutions adaptées et plan d’action détaillé.</p>
          </li>
          <li className="flex items-start space-x-4">
            <span className="bg-[#136E7A] text-white font-bold rounded-full h-8 w-8 flex items-center justify-center hover:bg-[#df9a18] transition">
              3
            </span>
            <p>Mise en place des services, suivi et support continu.</p>
          </li>
        </ol>
      </section>

      {/* Call to Action final */}
      <section className="bg-gradient-to-r from-[#136E7A] to-teal-500 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d’un partenaire informatique fiable ?
            </h2>
            <p className="opacity-90">
              Contactez-nous dès aujourd’hui pour discuter de vos besoins et obtenir un devis gratuit.
            </p>
          </div>

            <a href="#contact"  className="bg-white flex justify-center items-center gap-2 text-[#136E7A] px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition group"> 
              <span className="group-hover:text-[#df9a18] rotate-90 "><FaPhone/></span> Nous contacter
            </a>

        </div>
      </section>
    </div>
  
</>
    )
}
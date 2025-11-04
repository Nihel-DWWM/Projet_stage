

import React, { useState } from 'react';


export default function Domiciliation() {
const [openFaq, setOpenFaq] = useState(null);


const faqs = [
{ q: 'Qu’est‑ce que la domiciliation d’entreprise ?', a: "La domiciliation permet d'établir une adresse administrative et commerciale pour votre entreprise sans louer de local physique en permanence." },
{ q: "Quels documents pour souscrire ?", a: "Pièce d'identité, justificatif de domicile et extrait K-bis le cas échéant. Le process peut varier selon l'offre." },
{ q: "Combien de temps pour être domicilié ?", a: "Une fois le dossier complet, la mise en place peut prendre 24 à 48h selon les prestataires." },
]



return (
    <div className="min-h-screen bg-gray-50 text-gray-800 mt-[96px]">
      
     
        {/* Top intro */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center mt-10 py-20 md:text-left text-center" id='intro'>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#136E7A] mb-6">Domiciliez votre entreprise en quelques clics</h2>
            <p className="mt-4 text-gray-600 text-lg text-center md:text-left "><strong>Partenariat Services</strong> vous propose un service de domiciliation d’entreprise basé dans le
              9ème arrondissement de Paris et tous les services s’y rattachant.</p>

            {/* <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="bg-white p-4 rounded-xl shadow-sm border-2 hover:shadow-xl">Confidentialité et image</li>
              <li className="bg-white p-4 rounded-xl shadow-sm border-2 hover:shadow-xl">Réexpédition & numérisation du courrier</li>
              <li className="bg-white p-4 rounded-xl shadow-sm border-2 hover:shadow-xl">Accès à des salles et bureaux</li>
              <li className="bg-white p-4 rounded-xl shadow-sm border-2 hover:shadow-xl">Process en ligne simple</li>
            </ul>

            <div className="mt-6 flex gap-4">
              <a href="#plans" className="inline-block bg-[#136E7A] text-white px-5 py-3 rounded-lg font-semibold shadow-lg">Souscrire</a>
              <a href="#faq" className="inline-block border border-[#136E7A] text-[#136E7A] px-5 py-3 rounded-lg font-semibold">En savoir plus</a>
            </div> */}
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-full">
            {/* Placeholder image - remplacez par /images/espace1.jpg etc. */}
            <img src="https://www.agc-perspectives.fr/media/4120/medium/domiciliation-entreprise.jpg" alt="domiciliation.jpeg" className="w-full h-full object-cover" />
          </div>
        </section>   

            {/* Section – Pourquoi faire appel à la domiciliation ? */}
                    <section className="bg-gray-50 text-gray-800 py-5 px-6 ">
                      <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#136E7A] mb-6">
                          Pourquoi faire appel à la domiciliation de <br />
                          <span className="text-[#df9a18]">Partenariat Services&nbsp;?</span>
                        </h2>

                        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                          Besoin d’une adresse postale professionnelle pour votre activité sans louer ni acheter de local ?
                          <br />
                          <strong>Partenariat Services</strong> vous accompagne avec des solutions flexibles, fiables et adaptées à vos besoins.
                        </p>

                        {/* Cartes */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                          
                          {/* Carte 1 */}
                          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-8 flex flex-col items-center text-center">
                            <div className="text-4xl mb-4 text-[#136E7A]">📬</div>
                            <h3 className="text-xl font-semibold mb-2 text-[#136E7A]">Service de secrétariat</h3>
                            <p className="text-gray-700 text-base">
                              Réception de vos courriers, appels et livraisons durant nos horaires d’ouverture.
                            </p>
                          </div>

                          {/* Carte 2 */}
                          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-8 flex flex-col items-center text-center">
                            <div className="text-4xl mb-4 text-[#136E7A]">🗂️</div>
                            <h3 className="text-xl font-semibold mb-2 text-[#136E7A]">Aide administrative</h3>
                            <p className="text-gray-700 text-base">
                              Simplifiez la gestion de votre entreprise et concentrez-vous sur votre cœur de métier.
                            </p>
                          </div>

                          {/* Carte 3 */}
                          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-8 flex flex-col items-center text-center">
                            <div className="text-4xl mb-4 text-[#136E7A]">🏙️</div>
                            <h3 className="text-xl font-semibold mb-2 text-[#136E7A]">Adresse de prestige</h3>
                            <p className="text-gray-700 text-base">
                              Offrez à votre entreprise une image professionnelle avec une adresse dans le <strong>9ᵉ arrondissement de Paris</strong>.
                            </p>
                          </div>

                        </div>
                      </div>
                    </section>



                  {/* Section – Les plus de Partenariat Services */}
                  <section className="bg-white text-gray-800 py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                      {/* Titre */}
                      <div className="mb-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#136E7A] mb-4">
                          Les plus de <span className="text-[#df9a18]">Partenariat Services</span>
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl">
                          Afin de renforcer votre activité et de vous permettre de vous concentrer sur votre métier,
                          nous offrons à nos clients des services complémentaires pour simplifier leur quotidien.
                        </p>
                      </div>

                      {/* Cartes des services */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {/* Carte 1 */}
                        <div className="bg-white border border-gray-100 hover:border-[#df9a18] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500">
                          <div className="flex items-start gap-4">
                            <div className="text-3xl text-[#136E7A]">📝</div>
                            <div>
                              <h3 className="text-xl font-semibold text-[#136E7A] mb-2">Service administratif sur mesure</h3>
                              <p className="text-gray-700">
                                Rédaction de devis, factures et courriers professionnels adaptés à votre activité.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Carte 2 */}
                        <div className="bg-white border border-gray-100 hover:border-[#df9a18] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500">
                          <div className="flex items-start gap-4">
                            <div className="text-3xl text-[#136E7A]">📞</div>
                            <div>
                              <h3 className="text-xl font-semibold text-[#136E7A] mb-2">Standard téléphonique</h3>
                              <p className="text-gray-700">
                                Gestion de vos appels, prise de messages et planification de vos rendez-vous.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Carte 3 */}
                        <div className="bg-white border border-gray-100 hover:border-[#df9a18] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500">
                          <div className="flex items-start gap-4">
                            <div className="text-3xl text-[#136E7A]">📦</div>
                            <div>
                              <h3 className="text-xl font-semibold text-[#136E7A] mb-2">Réception de colis</h3>
                              <p className="text-gray-700">
                                Réception et stockage sécurisé de vos courriers, colis et livraisons.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Carte 4 */}
                        <div className="bg-white border border-gray-100 hover:border-[#df9a18] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500">
                          <div className="flex items-start gap-4">
                            <div className="text-3xl text-[#136E7A]">📬</div>
                            <div>
                              <h3 className="text-xl font-semibold text-[#136E7A] mb-2">Renvoi postal</h3>
                              <p className="text-gray-700">
                                Réexpédition rapide de votre courrier vers l’adresse de votre choix.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Carte 5 */}
                        <div className="bg-white border border-gray-100 hover:border-[#df9a18] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500">
                          <div className="flex items-start gap-4">
                            <div className="text-3xl text-[#136E7A]">🏢</div>
                            <div>
                              <h3 className="text-xl font-semibold text-[#136E7A] mb-2">Location de bureau</h3>
                              <p className="text-gray-700">
                                Mise à disposition d’espaces de travail équipés: à l’heure, à la journée ou à l’année.
                              </p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </section>

    


        {/* Badges / Trust */}
          {/* <section className="mt-16 px-6">
          <div className="max-w-6xl mx-auto text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-10">
              Nos atouts pour garantir votre domiciliation en toute sérénité
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg hover:shadow-[#136E7A] transition-all duration-300 hover:-translate-y-1">
                <span className="inline-block bg-white text-white px-3 py-1 rounded-full text-lg font-semibold mb-3">
                  ✔️
                </span>
                <p className="font-medium text-gray-800">
                  Agrément préfectoral • N°2023-02
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg hover:shadow-[#136E7A] transition-all duration-300 hover:-translate-y-1">
                <span className="inline-block bg-white text-white px-3 py-1 rounded-full text-lg font-semibold mb-3">
                  💼
                </span>
                <p className="font-medium text-gray-800">
                  Membre SYNAPHE
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg hover:shadow-[#136E7A] transition-all duration-300 hover:-translate-y-1">
                <span className="inline-block bg-white text-white px-3 py-1 rounded-full text-lg font-semibold mb-3">
                  ⭐
                </span>
                <p className="font-medium text-gray-800">
                  + Clients satisfaits
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Pricing / Plans */}
        <section id="formules" className="mt-12 max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900">Partenariat Services ce n’est pas qu’une domiciliation !</h3>
          <p className="text-gray-600 mt-2"> Nous proposons des packs de domiciliation selon vos besoins et possibilité d’ajout de
            service sur mesure</p>
                      
                 <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
                    {/* Pack Start */}
                    <a href="#contact" className="group h-full">
                      <article className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg border-x-2 border-transparent hover:border-[#df9a18] transition-all duration-300 flex flex-col justify-between h-full">
                        <div>
                          <h4 className="text-2xl font-bold text-[#136E7A] mb-3 ">
                            Pack Start
                          </h4>
                          <p className="text-3xl font-semibold text-gray-900 mb-6">
                            €30 <span className="text-base font-medium text-gray-600">/mois</span>
                          </p>
                          <ul className="text-gray-700 space-y-2">
                            <li>Domiciliation commerciale</li>
                            <li>Réception du courrier et mise à disposition</li>
                            <li>Accueil visiteurs aux horaires d’ouverture</li>
                          </ul>
                        </div>
                      </article>
                    </a>

                    {/* Pack Silver */}
                    <a href="#contact" className="group h-full">
                      <article className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg border-x-2 border-transparent hover:border-[#df9a18] transition-all duration-300 flex flex-col justify-between h-full">
                        <div>
                          <h4 className="text-2xl font-bold text-[#136E7A] mb-3 ">
                            Pack Silver
                          </h4>
                          <p className="text-3xl font-semibold text-gray-900 mb-6">
                            €52.50 <span className="text-base font-medium text-gray-600">/mois</span>
                          </p>
                          <ul className="text-gray-700 space-y-2">
                            <li className="text-[#136E7A] font-semibold">Inclut le Pack Start</li>
                            <li>+ Standard téléphonique avec transfert</li>
                          </ul>
                        </div>
                      </article>
                    </a>

                    {/* Pack Gold Business */}
                    <a href="#contact" className="group h-full">
                      <article className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg border-x-2 border-transparent hover:border-[#df9a18] transition-all duration-300 flex flex-col justify-between h-full">
                        <div>
                          <h4 className="text-2xl font-bold text-[#df9a18] mb-3 group-hover:text-[#df9a18] transition-colors">
                            Pack Gold Business
                          </h4>
                          <p className="text-3xl font-semibold text-gray-900 mb-6">
                            €75 <span className="text-base font-medium text-gray-600">/mois</span>
                          </p>
                          <ul className="text-gray-700 space-y-2">
                            <li className="text-[#136E7A] font-semibold">Inclut le Pack Silver</li>
                            <li>+ Mise à disposition d’un bureau meublé ½ journée par mois avec salon d’accueil et café</li>
                            <li>+ Réception de vos colis à l’accueil</li>
                          </ul>
                        </div>
                      </article>
                    </a>
                  </div>
           </section>
           

            {/* Section Options et services additionnels */}
                <section className="mt-16 bg-gray-50 py-12 px-6">
                  <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-extrabold text-[#136E7A] mb-10">
                      Options et services additionnels
                    </h3>

                    <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                      <ul className="text-gray-700 space-y-3 text-lg text-left max-w-2xl mx-auto">
                        <li className='md:flex md:justify-between'><strong>Scan to E-Mail :</strong> €€ / copie</li>
                        <li className='md:flex md:justify-between'><strong>Réexpédition du courrier :</strong> ??€ par envoi + frais d’affranchissement selon le poids</li>
                        <li className='md:flex md:justify-between'><strong>Location salle de réunion :</strong> ??€ / heure — ??€ / journée</li>
                        <li className='md:flex md:justify-between'><strong>Location de bureau à l’année :</strong> ??€ / mois</li>
                        <li className='md:flex md:justify-between'><strong>Rédaction de courrier :</strong> ??€ / courrier</li>
                        <li className='md:flex md:justify-between'><strong>Prestation administrative :</strong> 35€ HT / heure</li>
                        <li className='md:flex md:justify-between'><strong>Photocopie / Impression N&B A4 :</strong> ??€ / page</li>
                        <li className='md:flex md:justify-between'><strong>Photocopie / Impression Couleur A4 :</strong> ??€ / page</li>
                      </ul>
                    </div>
                  </div>
                </section>                      
        
        {/* Steps */}
        <section className="mt-12 bg-white p-6 rounded-2xl shadow-sm max-w-6xl mx-auto">
          <h3 className="text-xl font-bold">Comment souscrire ?</h3>
          <div className="mt-4 grid md:grid-cols-4 gap-4 ">
            {['1. Remplir le formulaire', '2. Transmettre les documents', '3. Contrôle du dossier', '4. Envoi du contrat'].map((s, i) => (
              <div key={i} className="p-4 border rounded-lg text-center group">
                <div className=" text-white w-10 h-10 mx-auto mb-2 rounded-full bg-[#136E7A] group-hover:bg-[#df9a18] flex items-center justify-center font-semibold">{i+1}</div>
                <div className="text-sm">{s}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-12 max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl font-bold text-gray-900">Foire aux questions</h3>
          <div className="mt-4 space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left flex justify-between items-center">
                  <span className="font-medium">{f.q}</span>
                  <span className="text-[#136E7A]">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <p className="mt-3 text-gray-600">{f.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="mt-12 bg-gradient-to-r from-[#136E7A] to-teal-500 text-white py-16 px-6 ">
         <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center justify-between gap-6">
            {/* Texte */}
            <div>
                <h3 className="text-3xl font-extrabold">Prêt à domicilier votre entreprise ?</h3>
                <p className="mt-3 text-lg opacity-90">
                Contactez-nous pour un accompagnement personnalisé et une souscription simple et rapide en ligne.
                </p>
            </div>

            {/* Call to action */}
            <div className="flex md:justify-end">
                <a
                href="#login"
                className="bg-white text-[#136E7A] px-6 py-3 rounded-xl font-semibold shadow border-2 border-transparent hover:bg-gray-100 transition"
                >
                🚀 Je souscris maintenant
                </a>
            </div>
        </div>
        </section>


      
    </div>
  );}

export default function Entreprise() {

  return (
    <section className="w-full bg-white py-16 my-20 mx-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 items-center gap-10 px-6">
        
        {/* Partie gauche : titre + carte */}
        <div className="md:col-span-1 space-y-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Mot de <span className="block">l’entreprise</span>
          </h2>

          {/* Carte */}
          <div className="flex items-center gap-4 bg-white shadow-lg rounded-xl p-4 w-fit">
            {/* Dropdown + texte */}
            <div>
              <p className="font-semibold text-gray-900">Rechercher</p>
              <input className="border" type="text" name="recherche"/>
              <p className="text-sm text-gray-500">Rechercher un bureau et/ou service</p>
            </div>
            {/* Bouton orange */}
            <button className="bg-[#df9a18] hover:bg-[#c6850f] transition-colors text-white px-6 py-3 rounded-lg">
              →
            </button>
          </div>
        </div>

        {/* Partie droite : image prend 3 colonnes */}
        <div className="md:col-span-3">
          <img
            src="https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y293b3JraW5nfGVufDB8fDB8fHww"
            alt="entreprise"
            className="rounded-2xl shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
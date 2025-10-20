export default function Offres() {
  const offers = [
    {
      id: 1,
      title: "Summer Tower",
      address: "Jl. Lorem Ipsum no.62, Wakanda Universe",
      price: "100 €",
      image: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 2,
      title: "Summer Tower",
      address: "Jl. Lorem Ipsum no.62, Wakanda Universe",
      price: "200 €",
      image: "https://picsum.photos/400/400?random=2",
    },
    {
      id: 3,
      title: "Summer Tower",
      address: "Jl. Lorem Ipsum no.62, Wakanda Universe",
      price: "200 €",
      image: "https://picsum.photos/400/400?random=3",
    },
    {
      id: 4,
      title: "Summer Tower",
      address: "Jl. Lorem Ipsum no.62, Wakanda Universe",
      price: "100 €",
      image: "https://picsum.photos/400/400?random=4",
    },
    {
      id: 5,
      title: "Summer Tower",
      address: "Jl. Lorem Ipsum no.62, Wakanda Universe",
      price: "200 €",
      image: "https://picsum.photos/400/400?random=5",
    },
    {
      id: 6,
      title: "Summer Tower",
      address: "Jl. Lorem Ipsum no.62, Wakanda Universe",
      price: "300 €",
      image: "https://picsum.photos/400/400?random=6",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-16 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-900 mb-10">Nos offres</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-[#136E7A] font-semibold">{offer.title}</h3>
              <p className="text-gray-500 text-sm">{offer.address}</p>
              <p className="text-black font-bold mt-2">{offer.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../App.css";

export default function Spaces() {
  const espaces = [
    { id: 1, titre: "Clean Simple", localisation: "12 Lokasi", image: "https://picsum.photos/200/300?random=7" },
    { id: 2, titre: "Cafe Ambience", localisation: "12 Lokasi", image: "https://picsum.photos/200/300?random=8" },
    { id: 3, titre: "Home Office", localisation: "12 Lokasi", image: "https://picsum.photos/200/300?random=9" },
    { id: 4, titre: "Comfy Elegant", localisation: "12 Lokasi", image: "https://picsum.photos/200/300?random=10" },
    { id: 5, titre: "Minimal Cozy", localisation: "8 Lokasi", image: "https://picsum.photos/200/300?random=11" },
  ];

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Choisissez votre <span className="block">espace de travail</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio nobis asperiores, laborum quasi possimus deleniti nesciunt autem laboriosam? Rerum. <br />
            <a href="#" className="text-[#136E7A] font-semibold hover:underline">
              Lorem ipsum dolor sit amet consectetur.
            </a>
          </p>
        </div>

        {/* Carrousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // temps entre chaque slide (ms)
            disableOnInteraction: false, // continue même après interaction
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {espaces.map((espace) => (
            <SwiperSlide key={espace.id}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={espace.image} 
                  alt={espace.titre} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-[#136E7A] font-semibold">{espace.titre}</h3>
                  <p className="text-gray-500 text-sm">{espace.localisation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
    </section>
  );
}
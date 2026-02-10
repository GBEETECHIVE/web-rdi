import Image from "next/image";

const events = [
  {
    title: "RDI at AVPN Conference 2025: Strengthening Impact Across Asia",
    image: "/images/avpn.png",
    // isNew: true,
    isNew: false,
  },
  {
    title: "Investment Roadshow–USA",
    image: "/images/news-2.png",
    isNew: false,
  },
  {
    title: "Rupani Academy MYP",
    image: "/images/news-3.png",
    isNew: false,
  },
];

export default function KeyEvents() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center font-bold text-blue-900 mb-6 leading-tight">
          Key Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 relative"
            >
              {/* Image */}
              <div className="relative w-full h-80 bg-black">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />

                {/* NEW badge (top-left corner) */}
                {event.isNew && (
                  <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-3 py-1">
                    NEW
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
                <h3 className="text-lg font-medium text-gray-800">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function WhereWeWork() {
  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h6 className="text-xl text-blue-700 font-semibold mb-4">
            Where we work
          </h6>
          <h4 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 border-l-4 border-blue-800 pl-4 leading-tight">
            Primarily focusing on Pakistan, Afghanistan, and the United States
          </h4>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our initiatives extend to regions in need, primarily focusing on
            Pakistan, Afghanistan, and the United States. By concentrating our
            efforts in these areas, we have a deep understanding of the unique
            challenges and opportunities they present. Through our work, we aim
            to create thriving communities that are resilient, empowered, and
            equipped to overcome obstacles and embrace a future of prosperity.
          </p>
        </div>

        {/* Right: World Map with Markers */}
        <div className="w-full lg:w-1/2 relative h-[500px]">
          <Image
            src="/images/whereWork.png" // Ensure image exists in public/images
            alt="World Map"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

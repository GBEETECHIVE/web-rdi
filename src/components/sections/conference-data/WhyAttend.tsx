"use client";

export default function WhyAttend() {
  return (
    <section className="bg-[#D19C2A] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#037536] text-center">
          Why Attend?
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Learn about supporting mother’s well-being and child development",
            "Connect with other parents-to-be and community resources",
            "Receive helpful information & items as you welcome a new life",
          ].map((item, i) => (
            <div
              key={i}
              className="hover:!text-white z-10 hover:bg-[#D19C2A] transition bg-white rounded-2xl shadow-[0_5px_10px_rgba(61,174,48,0.35)] p-6"
            >
              <p className="">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

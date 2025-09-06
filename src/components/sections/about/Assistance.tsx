"use client";

import Image from "next/image";

const stats = [
  { icon: "/fonts/icons/graduation-cap-solid-full.svg", label: "Education" },
  {
    icon: "/fonts/icons/hands-holding-child-solid-full.svg",
    label: "Livelihood",
  },
  { icon: "/fonts/icons/hand-holding-heart-solid-full.svg", label: "Welfare" },
  { icon: "/fonts/icons/coins.svg", label: "Economy" },
  { icon: "/fonts/icons/leaf.svg", label: "ESG" },
  { icon: "/fonts/icons/change.svg", label: "Changes" },
];

export default function Assistance() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Caption heading */}
        <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 leading-tight border-l-4 border-blue-800 pl-4">
          Ways in which we provide assistance
          <br />
          to our nation.
        </h3>
        {/* Icons grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 justify-center">
          {stats.map(({ icon, label }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-lg flex flex-col items-center justify-center p-6 cursor-default select-none"
              style={{
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                minWidth: "100px",
                minHeight: "120px",
              }}
            >
              <Image src={icon} alt={label} width={48} height={48} />
              <p className="mt-4 font-semibold text-gray-700 text-lg">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

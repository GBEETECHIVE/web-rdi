import Image from "next/image";
import React from "react";

const Card = ({ plenary ,p }) => {
  return (
    <div
       className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 max-w-xl w-full "
    >
      {/* Day */}
      <div className="mb-4">
        <span className="bg-[#D19C2A]  text-white text-xs font-semibold px-4 py-1.5 rounded-full">
          {plenary.day}
        </span>
      </div>
      <div className="flex gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#D19C2A]">
          {p.image ? (
            <Image
              src={p.image}
              alt={p.name}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-[#D19C2A] flex items-center justify-center text-[#D19C2A]  font-semibold">
              {p.name.charAt(0)}
            </div>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#D19C2A]  transition">
            {p.name}
          </h3>

          <p className="text-gray-600 text-sm mt-1">{p.org}</p>

          <p className="mt-2 text-sm font-semibold text-[#D19C2A] ">{p.role}</p>
        </div>
      </div>

      {/* Plenary */}
      <div className="mt-4">
        <span className="bg-[#D19C2A] text-[#D19C2A]  text-xs font-medium px-2 py-1.5 rounded-full">
          {plenary.plenary}
        </span>
      </div>
    </div>
  );
};

export default Card;

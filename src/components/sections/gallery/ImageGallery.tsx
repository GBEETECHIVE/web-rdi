"use client";

import Image from "next/image";

const galleryImages = [
  ["/images/g1.png", "/images/g2.png", "/images/g3.png", "/images/g4.png"],
  ["/images/g5.png", "/images/g6.png", "/images/g7.png", "/images/g8.png" ],
  ["/images/g9.png", "/images/g10.png", "/images/g11.png", "/images/g12.png"],
  ["/images/g13.png", "/images/g14.png", "/images/g15.png", "/images/g16.png"],
];

export default function ImageGallery() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
          Our Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((column, colIdx) => (
            <div key={colIdx} className="grid gap-4">
              {column.map((image, imgIdx) => (
                <div key={imgIdx}>
                  <Image
                    src={image} // ✅ Fixed: no extra "/images/"
                    alt={`Gallery Image ${colIdx * 3 + imgIdx + 1}`}
                    width={500}
                    height={500}
                    className="h-auto w-full rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

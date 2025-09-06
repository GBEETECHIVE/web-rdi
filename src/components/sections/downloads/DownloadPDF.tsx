"use client";

import Image from "next/image";
import Link from "next/link";

const reports = [
  {
    title: "Brochure",
    pdf: "/brochure/RdiBrochure.pdf",
    cover: "/images/pdfImg.png",
  },
  {
    title: "RDI Profile",
    pdf: "/reports/RdiBrochure.pdf",
    cover: "/images/pdfImg.png",
  },
];

export default function DownloadPDF() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-12">Download Here</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
          {reports.map((report, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-blue-600 rounded-lg shadow-lg p-4 bg-white hover:bg-gray-50 transition"
            >
              <div className="w-64 h-80 relative">
                <Image
                  src={report.cover}
                  alt={report.title}
                  fill
                  className="object-contain rounded-md"
                />
              </div>

              <h3 className="mt-4 text-orange-600 font-semibold text-lg">
                {report.title}
              </h3>

              <Link
                href={report.pdf}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-blue-600 hover:bg-blue-700 text-white mt-2 inline-block px-6 py-2 border border-blue-400 rounded transition"
              >
                Download
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

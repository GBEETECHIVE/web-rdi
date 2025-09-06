export const dynamic = "force-dynamic";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function RupaniInitiatives() {
  return (
    <>
      <Header />
      <section className="py-16 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight text-center">
            Rupani Initiatives
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8">
            {/* Rupani Foundation */}
            <div className="p-6 rounded-lg shadow-md bg-gray-100">
              <a
                href="https://www.rupanifoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4 p-4 hover:opacity-90 transition"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/RfLogo.png"
                    alt="Rupani Foundation Logo"
                    width={250}
                    height={250}
                    className="object-contain"
                  />
                </div>
              </a>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Rupani Foundation stands as a catalyst for change, dedicated
                to promoting sustainable and inclusive development in our target
                regions. Through strategically designed initiatives in
                education, livelihoods, and social and economic welfare, we
                empower communities to transcend obstacles and embrace a future
                of prosperity.
              </p>
              <a
                href="https://www.rupanifoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Explore More
              </a>
            </div>

            {/* Apex & Co */}
            <div className="p-6 rounded-lg shadow-md bg-gray-100">
              <a
                href="https://www.apexnco.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4 p-4 hover:opacity-90 transition"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/ApexLogo.png"
                    alt="Apex And Company Logo"
                    width={250}
                    height={250}
                    className="object-contain"
                  />
                </div>
              </a>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Apex & Co, a pioneering impact investment firm, merges
                innovation and social responsibility to tackle environmental and
                societal challenges. Our strategies embrace sustainability, ESG,
                and social entrepreneurship, fostering a circular economy for
                mutual human and planetary gain. We champion resilience,
                innovation, gender inclusion, and rigorous impact assessment,
                challenging norms for lasting change.
              </p>
              <a
                href="https://www.apexnco.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

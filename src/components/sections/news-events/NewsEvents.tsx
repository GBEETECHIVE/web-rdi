"use client";
export const dynamic = "force-dynamic";
import { useState } from "react";

const newsData = [
  {
    title: "RDI at AVPN Conference 2025: Strengthening Impact Across Asia",
    short:
      "We are delighted to share that Rupani Development Institute (RDI) will be represented at the AVPN Conference 2025...",
    full: `We are delighted to share that Rupani Development Institute (RDI) will be represented at the AVPN Conference 2025 as a Lead Partner of the Asian Venture Philanthropy Network (AVPN)—one of the largest gatherings of changemakers, investors, and thought leaders in Asia.
This year, Syed Jalal-ud-Din Shah (Global CEO – RDI), Waseem Samad (Group CEO – Apex & Co), and Muhabat Ali (CEO – Rupani Foundation Afghanistan) will proudly represent RDI on the global stage.

Why This Matters
This milestone is more than just a partnership. It reflects RDI’s deep commitment to amplifying our voice, strengthening our brand, and expanding our impact across Asia and beyond. By engaging with global leaders and changemakers at AVPN 2025, we are:
Forging new partnerships with mission-driven organizations.
Exploring innovative investments to scale our programs.
Accelerating collaboration in key focus areas:
Climate Resilience
Early Childhood Education
Community Empowerment

Looking Ahead
At RDI, we believe that building stronger communities leads to a more sustainable future. AVPN 2025 is not just a conference—it’s an opportunity to shape solutions that matter and unlock pathways for collective growth.
We look forward to sharing insights, stories, and outcomes from this milestone event. Stay tuned as we take you behind the scenes of our journey at AVPN 2025!
Follow our updates live from Hong Kong and be part of the movement toward sustainable development and social impact.`,
    image: "/images/avpn.png",
    isNew: true,
  },
  {
    title:
      "Productive Meeting Between Rupani Development Initiatives and Federal Secretary for Education",
    short:
      "A highly productive meeting was held in Islamabad between Mr. Nasruddin Rupani, CEO of Rupani Development Initiatives (RDI), and...",
    full: `A highly productive meeting was held in Islamabad between Mr. Nasruddin Rupani, CEO of Rupani Development Initiatives (RDI), and Mr. Mohyuddin Ahmad Wani, Federal Secretary for Education and Professional Training. The focus of the discussion was on enhancing collaboration in key areas such as education, technical skills development, early childhood education, and community empowerment. Key figures in attendance included Syed Jalal Uddin Shah, Global CEO of RDI, Mr. Waseem Samad, Group CEO of Apex & Co, and Mr. Jalaluddin, CEO of Rupani Foundation. Their presence underscored the significance of this meeting in furthering strategic partnerships.
    The leaders expressed their commitment to strengthening educational initiatives and empowering communities across Pakistan. This collaborative effort aims to foster sustainable development, with a strong emphasis on capacity building and skill development, to benefit all segments of society. Stay tuned for more updates on how this collaboration will unfold and contribute to the socio-economic uplift of communities across Pakistan.`,
    image: "/images/news-01.jpg",
    isNew: false,
  },
  {
    title:
      "Groundbreaking Ceremony for Rupani Regional Centre of Excellence, Islamabad",
    short:
      "The groundbreaking ceremony for the Rupani Regional Centre of Excellence was inaugurated by Mr. Ahsan Iqbal Chaudhary...",
    full: `The groundbreaking ceremony for the Rupani Regional Centre of Excellence was inaugurated by Mr. Ahsan Iqbal Chaudhary, Minister for Planning, Development, and Reforms, marking a pivotal step by Rupani Development Initiatives (RDI) in advancing Early Childhood Development (ECD) education in Pakistan. This new state-of-the-art facility will serve as a research hub, a model ECD center, and a specialized library dedicated to ECD. The event was graced by the presence of Mr. Nasruddin Rupani, Chairman and Founder of Rupani Development Initiatives, along with Ms. Farida Rupani; Prof. Dr. Nasir Mahmood, Vice Chancellor of Allama Iqbal Open University; and Mr. Syed Jalaluddin S., Global CEO of Rupani Development Initiatives. The ceremony also witnessed the participation of the leadership of RDI and esteemed faculty members from Allama Iqbal Open University, making it a significant milestone in the journey to revolutionize ECD education.
    The Rupani Regional Centre of Excellence is poised to play a crucial role in shaping the future of ECD education by fostering research, innovation, and capacity building. It represents a collaborative effort to promote quality education and empower communities, contributing to sustainable development across the region. Stay tuned for more updates as this visionary project progresses towards transforming early childhood education in Pakistan.`,
    image: "/images/news-02.jpg",
    isNew: false,
  },
  {
    title: "Groundbreaking of Al-Shifa Trust Eye Hospital in Gilgit-Baltistan",
    short:
      "We are thrilled to announce the groundbreaking of the Al-Shifa Trust Eye Hospital in Gilgit-Baltistan...",
    full: `We are thrilled to announce the groundbreaking of the Al-Shifa Trust Eye Hospital in Gilgit-Baltistan, a project proudly supported by the Rupani Foundation. This state-of-the-art facility will be the first in the region to provide advanced eye care, pediatric services, and mental well-being support. Our collaboration with Al-Shifa Eye Trust marks a significant step towards improving healthcare access for the people of Gilgit-Baltistan. Since 2007, the Rupani Foundation has been dedicated to enhancing the quality of life for individuals and communities across Pakistan. The establishment of this hospital is a testament to our commitment to empowering our nation's people economically and socially. We believe that together, we can ensure every citizen has access to essential services and opportunities for growth. We extend our heartfelt gratitude to Chief Minister Haji Gulbar Khan, Commander FCNA Major General Kashif Khalil Sahib, and all our esteemed partners for their invaluable support. The event was also graced by the presence of Mr. Nasruddin Rupani, Founder and Chairman of Rupani Development Initiatives, and Mrs. Farida Rupani, highlighting the significance of this milestone. Let us continue to work together to build a brighter future for Gilgit-Baltistan and our beloved Pakistan. Stay tuned for further updates on this transformative healthcare initiative and how it will positively impact the lives of the people in the region.`,
    image: "/images/news-03.jpg",
    isNew: false,
  },
];

export default function NewsEvents() {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
          News & Events
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded shadow-md overflow-hidden h-full"
            >
              <div className="relative h-52">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {item.isNew && (
                  <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-3 py-1">
                    NEW
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-between flex-grow p-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.short}</p>
                </div>
                <button
                  onClick={() => setOpenModalIndex(index)}
                  className="mt-4 text-center text-gray-800 text-sm font-semibold bg-gray-200 hover:bg-gray-300 py-3 transition w-full uppercase"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {openModalIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div className="bg-white max-w-4xl w-full rounded-lg shadow-lg relative p-6 max-h-[90vh] overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => setOpenModalIndex(null)}
                className="absolute top-0 right-4 text-red-600 hover:text-red-700 text-5xl font-bold px-3 py-3"
              >
                ×
              </button>

              {/* Modal Content with Scroll */}
              <div className="overflow-y-auto max-h-[80vh] pr-3">
                {/* Title */}
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  {newsData[openModalIndex].title}
                </h2>

                {/* Image */}
                <div className="w-full flex justify-center mb-6">
                  <img
                    src={newsData[openModalIndex].image}
                    alt={newsData[openModalIndex].title}
                    className="object-contain max-h-[300px] w-auto rounded-md"
                  />
                </div>

                {/* Full Text */}
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {newsData[openModalIndex].full}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

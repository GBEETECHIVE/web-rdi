"use client";
import Image from "next/image";
import { useState } from "react";

const presenters = [
  {
    name: "Kara Hill, DHCA, MHA, BSSW",
    role: "Senior Director of Health Integration",
    org: "Texas Health Institute",
    image: "/images/KaraHill.png",
  },
  {
    name: "Shalom Ogbonda, MHA",
    role: "Quality Improvement & Pathways Community HUB Support Manager",
    org: "Network of Behavioral Health Providers",
    image: "/images/Shalom.png",
  },
  {
    name: "Mahtab Moradi, LMFT",
    role: "Behavioral Health Program Director",
    org: "Ibn Sina Foundation",
    image: "/images/Mahtab.png",
  },
  {
    name: "Jamie Chinn, LMSW, CCM",
    role: "Behavioral Health Program Manager",
    org: "Harris County Public Health",
    image: "",
  },
  {
    name: "Michele Pola, EdD",
    role: "Mindfulness Facilitator, Teacher, Mentor",
    org: "Mental Health America of Greater Houston",
    image: "/images/Michele.png",
  },
  {
    name: "Joie Hernandez Caston, BA, CD, CHW",
    role: "Certified Full Spectrum Doula, CHW, Life Coach",
    org: "Roots to Rise HTX",
    image: "/images/Joie.png",
  },
  {
    name: "Victoria Cottledge, MPH, CHES, CHW",
    role: "Program Specialist II, Community Health Services",
    org: "Public Health Region 6/5 South, Texas Department of State Health Services",
    image: "/images/Victoria.png",
  },
  {
    name: "Yvonne Estrada",
    role: "Certified Full Spectrum Traditional Bilingual Doula",
    org: "One 2 One Doula Services",
    image: "",
  },
  {
    name: "Sharon Erazo, LMSW",
    role: "Behavioral Health Clinician",
    org: "Ibn Sina Foundation",
    image: "/images/Sharon.png",
  },
  {
    name: "Elizabeth Diaz",
    role: "Mental Health & Development Specialist",
    org: "",
    image: "",
  },
  {
    name: "Yalda Ahmadi, MEd, LPC",
    role: "Program Coordinator, DePelchin All Dads Succeed (DADS) Program",
    org: "DePelchin Children's Center",
    image: "",
  },
  {
    name: "Rupani Foundation USA",
    role: "Early Childhood Development Team",
    org: "Rupani Foundation USA",
    image: "",
  },
];

// Function to get initials from name
const getInitials = (name: string) => {
  if (!name) return "";
  
  // Split by space and get first letters of first two words
  const words = name.split(' ');
  if (words.length === 1) return words[0].charAt(0).toUpperCase();
  
  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
};

// Function to generate a background color based on name (consistent for same name)
const getAvatarColor = (name: string) => {
  const colors = [
    "bg-blue-100 text-blue-600",
    "bg-green-100 text-green-600",
    "bg-purple-100 text-purple-600",
    "bg-pink-100 text-pink-600",
    "bg-indigo-100 text-indigo-600",
    "bg-teal-100 text-teal-600",
    "bg-orange-100 text-orange-600",
    "bg-red-100 text-red-600",
    "bg-yellow-100 text-yellow-600",
    "bg-cyan-100 text-cyan-600",
  ];
  
  // Simple hash function to get consistent color for same name
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
};

export default function FeaturedPresenters() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
            Featured Presenters
          </h2>
          <p className="mt-4 text-gray-600">
            Learn from trusted leaders, clinicians, and community experts
            dedicated to maternal and family well-being.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {presenters.map((presenter, i) => {
            const hasImage = presenter.image && !imageErrors[i];
            const initials = getInitials(presenter.name);
            const avatarColor = getAvatarColor(presenter.name);

            return (
              <div
                key={i}
                className="group rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden ring-2 ring-blue-100 flex-shrink-0 flex items-center justify-center">
                    {hasImage ? (
                      <Image
                        src={presenter.image}
                        alt={presenter.name}
                        fill
                        className="object-cover"
                        onError={() => handleImageError(i)}
                        unoptimized
                      />
                    ) : (
                      <div className={`h-full w-full flex items-center justify-center rounded-full ${avatarColor}`}>
                        <span className="font-bold text-lg">{initials}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                      {presenter.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">{presenter.role}</p>
                    <p className="mt-1 text-sm font-medium text-gray-500">
                      {presenter.org}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-10 text-center text-gray-500 italic">
          …and more presenters to be announced
        </p>
      </div>
    </section>
  );
}
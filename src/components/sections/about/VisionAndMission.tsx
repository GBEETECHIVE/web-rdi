'use client';

export default function MissionVision() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Mission */}
          <div>
           <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight border-l-4 border-blue-800 pl-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission at Rupani Development Initiatives is to empower individuals and communities
              by fostering sustainable development, promoting inclusivity, and driving positive change.
              We are dedicated to improving lives, creating opportunities, and building a better future for all.
            </p>
          </div>

          {/* Vision */}
          <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight border-l-4 border-blue-800 pl-4">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We envision a world where every individual has access to quality education, healthcare,
              livelihood opportunities, and a clean environment. Our vision is to create thriving
              communities that are resilient, empowered, and equipped to overcome challenges.
              Through our work, we strive to build a society where everyone can reach their full potential
              and contribute to a sustainable and equitable world.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

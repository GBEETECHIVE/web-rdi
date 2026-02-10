"use client";

export default function TopicsInclude() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
            Temas Incluidos
          </h2>
          <p className="mt-4 text-gray-600">
            Sesiones prácticas y educativas diseñadas para apoyar a ti y a tu familia en crecimiento.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {[
            "Construyendo Tu Comunidad",
            "Mindfulness",
            "Salud Mental Materna y Apoyo Integral a la Familia",
            "Consideraciones de Seguridad y Sueño Seguro",
            "Nutrición Prenatal y Nutrición Infantil",
            "Desarrollo Infantil Temprano",
            "Paternidad",
            "Estiramiento Prenatal",
            "Salud Perinatal",
            "Y Más",
          ].map((topic, i) => (
            <div
              key={i}
              className="group relative cursor-default rounded-full border border-green-200 bg-green-50 px-6 py-3 text-sm sm:text-base font-medium text-gray-700 transition hover:bg-green-100 hover:border-green-300"
            >
              <span className="relative z-10">{topic}</span>
              <span className="absolute inset-0 rounded-full ring-1 ring-transparent group-hover:ring-green-300 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

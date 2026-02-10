"use client";

export default function ReasonsToAttend() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
            Información Adicional y Razones para Asistir
          </h2>
          <p className="mt-4 text-gray-600">
            Todo lo que necesitas saber para planificar tu día y disfrutar de una experiencia de conferencia significativa.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Evento Bilingüe",
              desc: "Sesiones disponibles en inglés y español",
              icon: (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth={1.8}
                    d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c2.5 3 2.5 15 0 18m0-18c-2.5 3-2.5 15 0 18M2 12h20"
                  />
                </svg>
              ),
            },
            {
              title: "Gratis para Asistir",
              desc: "No hay costo para participar en la conferencia",
              icon: (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth={1.8}
                    d="M4 7h16v4a2 2 0 010 4v4H4v-4a2 2 0 010-4V7z"
                  />
                </svg>
              ),
            },
            {
              title: "Comidas Incluidas",
              desc: "Desayuno, almuerzo y refrigerios incluidos",
              icon: (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeWidth={1.8} d="M6 2v20M18 2v20M10 6h4" />
                </svg>
              ),
            },
            {
              title: "Bolsas de Regalo",
              desc: "Artículos útiles para mamá y bebé como pañales y toallitas",
              icon: (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth={1.8}
                    d="M20 7H4v13h16V7zM2 7h20M12 7v13M8 3c0 2 4 4 4 4s4-2 4-4"
                  />
                </svg>
              ),
            },
            {
              title: "Sorteos",
              desc: "Oportunidad de ganar artículos como asientos de coche o cochecitos",
              icon: (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth={1.8}
                    d="M8 21h8M12 17v4M6 3h12v4a6 6 0 01-12 0V3z"
                  />
                </svg>
              ),
            },
            {
              title: "Actividades de Bienestar",
              desc: "Mindfulness, estiramiento prenatal y relajación",
              icon: (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth={1.8}
                    d="M12 6c2 3 6 5 6 8a6 6 0 11-12 0c0-3 4-5 6-8z"
                  />
                </svg>
              ),
            },
            {
              title: "Apoyo en Salud Mental",
              desc: "Evaluaciones gratuitas y acceso a servicios de bajo costo",
              icon: (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth={1.8}
                    d="M12 21s-7-4.5-7-10a4 4 0 017-2 4 4 0 017 2c0 5.5-7 10-7 10z"
                  />
                </svg>
              ),
            },
            {
              title: "Asistencia en Transporte",
              desc: "Posible ayuda para llegar y regresar de la conferencia",
              icon: (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth={1.8}
                    d="M4 16v-5a6 6 0 0112 0v5M4 16h12M6 20h.01M14 20h.01"
                  />
                </svg>
              ),
            },
            {
              title: "Apoyo en Cuidado Infantil",
              desc: "Posible cuidado para otros niños durante el evento",
              icon: (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth={1.8}
                    d="M12 3a5 5 0 00-5 5c0 2 1 3 2 4h6c1-1 2-2 2-4a5 5 0 00-5-5zM7 14h10"
                  />
                </svg>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import Link from "next/link";
import heroConfImg from "../../../../public/images/hero1.jpg";

export default function HeroConference() {
  return (
    // <main className="min-h-screen via-white to-sky-80 text-gray-800"> </main>
    <section
      className="relative bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${heroConfImg.src})` }}
    >
      <div className="absolute inset-0 bg-white/50"></div>
      <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
          Cuidando a las Madres,{" "}
          <span className="text-blue-600">Creando el Futuro</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-900 max-w-3xl mx-auto">
          Una conferencia gratuita para futuros padres que apoyan la salud materna y
          el desarrollo infantil temprano
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://forms.gle/r7udfwMAZACWenGp8"
            className="rounded-xl bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            Registrarse (Inglés)
          </Link>
          <Link
            href="https://forms.gle/fxtH3L1T4rZj3vgm7"
            className="rounded-xl border bg-blue-600 border-blue-600 px-8 py-3 text-white hover:bg-blue-700 font-semibold transition"
          >
            Registrarse (Español)
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl z-10 p-6 shadow-[0_5px_10px_rgba(255,190,13,0.35)]">
            <h2 className="text-xl font-semibold text-green-900">
              Fecha y Hora
            </h2>
            <p className="mt-3 text-gray-700">
              Sábado, 14 de marzo de 2026
              <br />
              9:00 am – 3:30 pm
              <br />
              <span className="text-sm text-gray-500">
                Registro y desayuno comienzan a las 8:00 am
              </span>
            </p>
          </div>
          <div className="bg-white rounded-2xl z-10 shadow-[0_5px_10px_rgba(255,190,13,0.35)] p-6">
            <h2 className="text-xl font-semibold text-green-900">Ubicación</h2>
            <p className="mt-3 text-gray-700">
              Iglesia Unitaria Universalista Emerson
              <br />
              1900 Bering Drive
              <br />
              Houston, TX 77057
            </p>
          </div>

          <div className="bg-white rounded-2xl z-10 shadow-[0_5px_10px_rgba(255,190,13,0.35)] p-6">
            <h2 className="text-xl font-semibold text-green-900">
              ¿Quiénes Deben Asistir?
            </h2>
            <p className="mt-3 text-gray-700">
              Madres y padres que esperan un hijo, así como cuidadores como abuelos
              y miembros de la familia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

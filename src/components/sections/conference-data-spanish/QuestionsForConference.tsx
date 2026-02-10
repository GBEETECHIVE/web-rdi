"use client";

import Link from "next/link";

export default function QuestionsForConference() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold">
          ¿Preguntas o Deseas Colaborar?
        </h2>
        <p className="mt-4 text-gray-300">
          Contacta a Alejandra Posada, Directora – Salud Mental y Bienestar Holístico, Rupani Development Initiatives
        </p>
        <Link
          href="https://mail.google.com/mail/?view=cm&to=aposada@rupanifoundationusa.org"
          target="_blank"
          className="mt-6 inline-block rounded-xl bg-white px-8 py-3 text-gray-900 font-semibold hover:bg-gray-100"
        >
          Envíanos un Correo
        </Link>
        <p className="mt-6 text-gray-300">
          ¿Interesado en ser expositor?{" "}
          <Link href="https://forms.gle/zv48JLtDzGM6aNza8" className="underline">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </section>
  );
}

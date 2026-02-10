"use client";

import Link from "next/link";

export default function QuestionsForConference() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold">
          Questions or Want to Collaborate?
        </h2>
        <p className="mt-4 text-gray-300">
          Contact Alejandra Posada, Director – Mental Health & Holistic
          Well-Being, Rupani Development Initiatives
        </p>
        <Link
          href="aposada@rupanifoundationusa.org"
          className="mt-6 inline-block rounded-xl bg-white px-8 py-3 text-gray-900 font-semibold hover:bg-gray-100"
        >
          Email Us
        </Link>
        <p className="mt-6 text-gray-300">
          Interested in being an exhibitor?{" "}
          <Link href="https://forms.gle/zv48JLtDzGM6aNza8" className="underline">
            Register here
          </Link>
        </p>
      </div>
    </section>
  );
}

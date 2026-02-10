"use client";

export default function JoinUs() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900">
          Join Us for a Day of Learning & Support
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Connect with experts, learn about maternal health, and gain valuable
          insights into early childhood development.
        </p>
          <a
            href="https://forms.gle/r7udfwMAZACWenGp8"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-green-900 px-8 py-3 text-white font-medium hover:bg-blue-800 transition"
          >
            Register for Free
          </a>
      </div>
    </section>
  );
}

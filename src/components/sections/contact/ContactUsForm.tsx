"use client";

export default function ContactUs() {
  return (
    <section className="py-16 px-4 w-full bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight text-center">
            Contact Us
          </h3>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Grid Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Bonnie"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Green"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="name@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                id="phone"
                required
                placeholder="+12 345 6789"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject of your message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              required
              placeholder="Leave a comment..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Policy note */}
          <p className="text-sm text-gray-500 mt-2">
            By submitting this form you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              terms and conditions
            </a>{" "}
            and our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              privacy policy
            </a>
            , which explains how we may collect, use and disclose your personal
            information including to third parties.
          </p>

          {/* Button */}
          <div>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium text-sm px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default function ContactUs() {
  return (
    <section className="py-16 px-4 w-full bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-[#037536] mb-6 leading-tight text-center">
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
                className="w-full text-black border border-[#D19C2A5E] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D19C2A]"
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
                className="w-full text-black border border-[#D19C2A5E] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D19C2A]"
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
                className="w-full text-black border border-[#D19C2A5E] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D19C2A]"
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
                className="w-full text-black border border-[#D19C2A5E] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D19C2A]"
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
              className="w-full text-black border border-[#D19C2A5E] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D19C2A]"
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
              className="w-full text-black border border-[#D19C2A5E] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D19C2A]"
            ></textarea>
          </div>

          {/* Policy note */}
          <p className="text-sm text-gray-500 mt-2">
            By submitting this form you agree to our{" "}
            <a href="#" className="text-[#D19C2A]  hover:underline">
              terms and conditions
            </a>{" "}
            and our{" "}
            <a href="#" className="text-[#D19C2A]  hover:underline">
              privacy policy
            </a>
            , which explains how we may collect, use and disclose your personal
            information including to third parties.
          </p>

          {/* Button */}
          <div>
            <button
              type="submit"
              className="bg-[#D19C2A] hover:bg-[#e1a82f]  text-white font-medium text-sm px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D19C2A] "
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

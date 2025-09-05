"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 gap-8 py-8 md:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              What we do
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-4">
              <li>
                <a
                  href="#"
                  className="border-b-2 border-transparent pb-0.5 hover:text-[#0077f2] hover:border-b-[#0077f2] transition"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b-2 border-transparent pb-0.5 hover:text-[#0077f2] hover:border-b-[#0077f2] transition"
                >
                  Who we are
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b-2 border-transparent pb-0.5 hover:text-[#0077f2] hover:border-b-[#0077f2] transition"
                >
                  What we do
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b-2 border-transparent pb-0.5 hover:text-[#0077f2] hover:border-b-[#0077f2] transition"
                >
                  Rupani Initiatives
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Volunteers
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-4">
              <li>
                <a
                  href="#"
                  className="border-b-2 border-transparent pb-0.5 hover:text-[#0077f2] hover:border-b-[#0077f2] transition"
                >
                  Be a volunteer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b-2 border-transparent pb-0.5 hover:text-[#0077f2] hover:border-b-[#0077f2] transition"
                >
                  Volunteer List
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b-2 border-transparent pb-0.5 hover:text-[#0077f2] hover:border-b-[#0077f2] transition"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b-2 border-transparent pb-0.5 hover:text-[#0077f2] hover:border-b-[#0077f2] transition"
                >
                  Terms of use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b-2 border-transparent pb-0.5 hover:text-[#0077f2] hover:border-b-[#0077f2] transition"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contact Us
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-4">
              <li>
                <span> USA OFFICE: </span>
                <a
                  href="#"
                  className="border-b-2 border-transparent pb-0.5 hover:text-[#0077f2] hover:border-b-[#0077f2] transition"
                >
                  8303 Southwest Freeway # 440, Houston, TX 77074 USA
                </a>
              </li>
              <li>
                <span> US Contact Number: </span>
                <a
                  href="#"
                  className="border-b-2 border-transparent pb-0.5 hover:text-[#0077f2] hover:border-b-[#0077f2] transition"
                >
                  +1 (713)-777-5059
                </a>
              </li>
              <li>
                <span>PAKISTAN OFFICE:</span>
                <a
                  href="#"
                  className="border-b-2 border-transparent pb-0.5 hover:text-[#0077f2] hover:border-b-[#0077f2] transition"
                >
                  Brig. Sher ullah Baig Road, Jutial Gilgit, Gilgit-Baltistan,
                  Pakistan PAK: +92 5811-551855
                </a>
              </li>
              <li>
                <span> Email:</span>
                <a
                  href="#"
                  className="border-b-2 border-transparent pb-0.5 hover:text-[#0077f2] hover:border-b-[#0077f2] transition"
                >
                  connect@rdi.world
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between border-t border-gray-200 dark:border-gray-700 py-6">
          <span className="text-sm text-gray-500 dark:text-gray-300 text-center md:text-left mt-4 md:mt-0">
            © 2025{" "}
            <a href="https://yourdomain.com" className="hover:underline">
              Rupani Development Initiatives
            </a>
            . All rights reserved.
          </span>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            {[
              {
                href: "#",
                label: "Facebook",
                icon: "/fonts/icons/facebook.svg",
              },
              {
                href: "#",
                label: "Instagram",
                icon: "/fonts/icons/instagram.svg",
              },
              {
                href: "#",
                label: "LinkedIn",
                icon: "/fonts/icons/linkedin.svg",
              },
              { href: "#", label: "YouTube", icon: "/fonts/icons/youtube.svg" },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                aria-label={label}
              >
                <img src={icon} alt={label} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

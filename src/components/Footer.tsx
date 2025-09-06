"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid Layout: Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {/* What We Do */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase mb-4">What we do</h3>
            <ul className="space-y-3">
              {["Education", "Who we are", "Rupani Initiatives"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-[#0077f2] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Volunteers */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase mb-4">Volunteers</h3>
            <ul className="space-y-3">
              {["Be a volunteer", "Volunteer List", "FAQ", "Terms of use", "Privacy policy"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-[#0077f2] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Send Email + Follow Us stacked */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase mb-4">Send Email</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <Link href="mailto:connect@rdi.world" className="hover:text-[#0077f2] transition-colors">
                  connect@rdi.world
                </Link>
              </li>
            </ul>

            {/* Follow Us */}
            <div>
              <h3 className="text-sm font-bold text-gray-800 uppercase mb-4">Follow Us</h3>
              <div className="flex space-x-5 mt-1">
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
                    href: "https://www.linkedin.com/company/rdiworld/posts/?feedView=all",
                    label: "LinkedIn",
                    icon: "/fonts/icons/linkedin.svg",
                  },
                  {
                    href: "#",
                    label: "YouTube",
                    icon: "/fonts/icons/youtube.svg",
                  },
                ].map(({ href, label, icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="hover:text-[#0077f2] transition"
                  >
                    <img src={icon} alt={label} className="w-6 h-6" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Contact Us Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {/* USA Office */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase mb-2">USA OFFICE</h3>
            <p className="hover:text-[#0077f2] transition-colors">
              8303 Southwest Freeway, Suite 440, 
Houston, TX 77074 USA
            </p>
            <p className="mt-2 hover:text-[#0077f2] transition-colors">+1 713-777-5059</p>
          </div>

          {/* Pakistan Office */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase mb-2">PAKISTAN OFFICE</h3>
            <p className="hover:text-[#0077f2] transition-colors">
             Naveed Shaheed Road, Zulfiqarabad, 
Gilgit, Gilgit-Baltistan, Pakistan
            </p>
            <p className="mt-2 hover:text-[#0077f2] transition-colors">+92-5811-459709</p>
          </div>

          {/* Afghanistan Office */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase mb-2">AFGHANISTAN OFFICE</h3>
            <p className="hover:text-[#0077f2] transition-colors">
              House #13, Street #5, Qilla-e-Fatullah, 
Kabul, Afghanistan 
            </p>
            <p className="mt-2 hover:text-[#0077f2] transition-colors">+937-962-91322</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase mb-2">UAE OFFICE</h3>
            <p className="hover:text-[#0077f2] transition-colors">
              DD-14-116-012, WeWork - Hub71, 
14 Floor, Al Khatem Tower, Adgm Square, 
Al Maryah Island, Abu Dhabi, UAE
            </p>
            <p className="mt-2 hover:text-[#0077f2] transition-colors">+971-56940-3192</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-6">
          <span className="block text-sm text-gray-600 text-center">
            © 2025{" "}
            <Link href="https://yourdomain.com" className="hover:text-[#0077f2] transition-colors">
              Rupani Development Initiatives
            </Link>
            . All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

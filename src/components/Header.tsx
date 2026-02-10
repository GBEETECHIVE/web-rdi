"use client";
export const dynamic = "force-dynamic";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  {
    label: "About Us",
    children: [
      { href: "/about-us/who-we-are", label: "Who We Are" },
      { href: "/about-us/what-we-do", label: "What We Do" },
      { href: "/about-us/downloads", label: "Downloads" },
    ],
  },
  { href: "/rupani-initiatives", label: "RDI Initiatives" },
  { href: "/news-and-events", label: "News & Events" },
  {
    label: "Join Conference",
    children: [
      { href: "/conference", label: "English" },
      { href: "/conferencespanish", label: "Español" },
    ],
  },
  { href: "/contact-us", label: "Contact Us" },
];


export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null
  );
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // 🔥 shadow toggle when scrolling
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""
        }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-2 py-4">
        {/* <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Rupani Development Initiatives Logo"
            unoptimized
            className="object-contain w-40 h-12"
          />
        </Link> */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <div className="relative w-28 h-10 sm:w-36 sm:h-12 md:w-44 md:h-14 lg:w-52 lg:h-16">
            <Image
              src="/logo.png"
              alt="Rupani Development Initiatives Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-1 justify-center space-x-6 font-medium relative">
          {navItems.map(({ href, label, children }) => {
            let isActive = false;

            if (href) {
              // normal nav item
              isActive = pathname === href;
            } else if (children) {
              // parent nav item (dropdown) → active if child path matches
              isActive = children.some((child) =>
                pathname.startsWith(child.href)
              );
            }

            if (children) {
              return (
                <li
                  key={label}
                  className="relative z-50"
                  onMouseEnter={() => setOpenDropdown(label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <span
                    className={`cursor-pointer px-2 py-1 inline-block border-b-2 transition duration-300
                      ${isActive
                        ? "border-b-[#0077f2] text-[#0077f2] font-semibold"
                        : "border-transparent text-gray-900 dark:text-white"
                      }
                      hover:text-[#0077f2] hover:border-b-[#0077f2]`}
                  >
                    {label}
                  </span>

                  {/* Dropdown */}
                  <ul
                    className={`absolute left-0 w-48 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 transition-all duration-200 ease-in-out
                      ${openDropdown === label
                        ? "opacity-100 visible"
                        : "opacity-0 invisible pointer-events-none"
                      }`}
                  >
                    {children.map(({ href: subHref, label: subLabel }) => {
                      const isChildActive = pathname === subHref;
                      return (
                        <li key={subHref}>
                          <Link
                            href={subHref}
                            className={`block px-4 py-2 text-sm transition ${isChildActive
                                ? "text-[#0077f2] font-semibold bg-gray-100"
                                : "text-gray-700 hover:bg-gray-100"
                              }`}
                          >
                            {subLabel}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-2 py-1 inline-block border-b-2 border-transparent transition duration-300
                    ${isActive
                      ? "border-b-[#0077f2] text-[#0077f2] font-semibold"
                      : "text-gray-900 dark:text-white"
                    }
                    hover:border-b-[#0077f2] hover:text-[#0077f2] hover:scale-105`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* Volunteer Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeagCrGF_wCuabJNupF9RR9Hb7i1kOQBC2ydPc38C0S2bFRBg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Become a Volunteer
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            type="button"
            className="inline-flex md:hidden items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 z-50 relative" id="navbar-cta">
          <ul className="flex flex-col font-medium space-y-3">
            {navItems.map(({ href, label, children }) => {
              let isActive = false;

              if (href) {
                isActive = pathname === href;
              } else if (children) {
                isActive = children.some((child) =>
                  pathname.startsWith(child.href)
                );
              }

              if (children) {
                const isOpen = mobileDropdownOpen === label;
                return (
                  <li key={label}>
                    <button
                      onClick={() =>
                        setMobileDropdownOpen(isOpen ? null : label)
                      }
                      className={`w-full flex justify-between items-center mb-1 focus:outline-none transition
                        ${isActive
                          ? "text-[#0077f2] font-semibold"
                          : "text-gray-900 dark:text-white"
                        }`}
                    >
                      {label}
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <ul
                      className={`pl-4 space-y-3 overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"
                        }`}
                    >
                      {children.map(({ href: subHref, label: subLabel }) => {
                        const isChildActive = pathname === subHref;
                        return (
                          <li key={subHref}>
                            <Link
                              href={subHref}
                              className={`block transition ${isChildActive
                                  ? "text-[#0077f2] font-semibold"
                                  : "text-gray-700 dark:text-gray-300 hover:text-[#0077f2]"
                                }`}
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileDropdownOpen(null);
                              }}
                            >
                              {subLabel}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block px-4 py-2 border-b-2 border-transparent transition duration-300
                      ${isActive
                        ? "border-b-[#0077f2] text-[#0077f2] font-semibold"
                        : "text-gray-900 dark:text-white"
                      }
                      hover:border-b-[#0077f2] hover:text-[#0077f2]`}
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileDropdownOpen(null);
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}

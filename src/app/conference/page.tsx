// import Image from "next/image"
// import Link from "next/link"
// import { ArrowRight, MapPin, Phone, Mail } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import SectionHeader from "@/components/section-header"
// import ConferencePopup from "@/components/popup"
// import HeroSlideshow from "@/components/hero-slideshow"

// export default function HomePage() {
//   return (
//     <main className="flex min-h-screen flex-col">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
//   <div className="relative w-full h-[420px] sm:h-[520px] md:h-[600px] lg:h-[680px]">
//     <HeroSlideshow
//       slides={[
//         {
//           src: "/Slides/1.jpg",
//           alt: "Slide 1",
//         },
//         {
//           src: "/images/update/after 1.png",
//           alt: "Slide 1 - After",
//         },
//         {
//           src: "/Slides/2.jpg",
//           alt: "Slide 2",
//         },
//         {
//           src: "/images/update/after 2.png",
//           alt: "Slide 2 - After",
//         },
//         {
//           src: "/Slides/3.png",
//           alt: "Slide 3",
//         },
//         {
//           src: "/images/update/after 3.png",
//           alt: "Slide 3 - After",
//         },
//         {
//           src: "/images/update/4 new.png",
//           alt: "Slide 4 - New",
//         },
//         {
//           src: "/images/update/after 4.png",
//           alt: "Slide 4 - After",
//         },
//         {
//           src: "/Slides/5.jpg",
//           alt: "Slide 5",
//         },
//         {
//           src: "/images/update/after 5.png",
//           alt: "Slide 5 - After",
//         },
//         {
//           src: "/Slides/6.jpg",
//           alt: "Slide 6",
//         },
//         {
//           src: "/Slides/8.jpg",
//           alt: "Slide 8",
//         },
//       ]}
//       showArrows
//       overlayClassName="px-4 flex items-start justify-center text-center pt-24 sm:pt-24 md:pt-28 lg:pt-80"
//     >
//       <div className="w-full max-w-6xl mx-auto  text-white">
//         <div className="">
//           <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-extrabold tracking-wide inline-block px-4 py-1" style={{ backgroundColor: 'rgba(60, 60, 60, 0.75)' }}>
//             5TH INTERNATIONAL CONFERENCE ON EARLY CHILDHOOD DEVELOPMENT
//           </h1>
//         </div>
//         <div className="">
//           <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl font-semibold inline-block px-4 py-1" style={{ backgroundColor: 'rgba(60, 60, 60, 0.75)' }}>
//             Investing in Early Childhood Development – Building Human Capital
//           </p>
//         </div>
//         <div className="">
//           <p className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg font-medium inline-block px-3 py-1" style={{ backgroundColor: 'rgba(60, 60, 60, 0.75)' }}>
//             April 07- 08, 2026 · Islamabad, Pakistan
//           </p>
//         </div>
//         <div className="flex items-center justify-center">
//           <Button
//             asChild
//             className="bg-blue-600 hover:bg-blue-700 px-10 sm:px-12 sm:py-4 text-base sm:text-lg font-semibold shadow-xl transition-all hover:scale-105"
//           >
//             <Link href="/registration">Register Now</Link>
//           </Button>
//         </div>
//       </div>
//     </HeroSlideshow>
//   </div>
// </section>

//       {/* <ConferencePopup message="The conference has been rescheduled to Oct 22-23, 2025" /> */}

//       {/* Call for Abstracts Section */}
//       <section className="py-12 sm:py-16 bg-sky-50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-8">
//             {/* Banner column - 60% width on large screens */}
//             <div className="w-full lg:w-3/5 flex">
//               <div className="bg-white rounded-xl p-3 sm:p-4 h-full w-full shadow-xl flex">
//                 <div className="relative w-full h-full overflow-hidden rounded-lg">
//                   <Image
//                     src="/images/Banner_ICECD2026_24feb.png"
//                     alt="Conference Call for Abstracts"
//                     fill
//                     className="object-contain rounded-lg"
//                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 60vw"
//                     priority
//                     loading="eager"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Important Dates column - 40% width on large screens */}
//             <div className="w-full lg:w-2/5 flex">
//               <div className="bg-white rounded-xl p-4 sm:p-6 shadow-xl h-full w-full flex flex-col">
//                 <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4 sm:mb-6 text-center">Important Dates</h2>

//                 <div className="space-y-6 flex-grow">
//                   {/* Vendor Registration */}
//                   <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
//                     <h3 className="font-bold text-blue-600 mb-3 pb-2 border-b border-blue-200 flex items-center gap-2">
//                       Vendor Registration
//                       <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-red-500 text-white animate-pulse">
//                         NEW
//                       </span>
//                     </h3>
//                     <div className="space-y-3">
//                       <div className="flex justify-between items-center">
//                         <span className="font-medium text-gray-800">Register Your Stall:</span>
//                         <Button asChild className="bg-blue-600 hover:bg-blue-700 px-3 py-1 text-sm font-medium">
//                           <Link href="/vendor-registration">Register Now</Link>
//                         </Button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Registrations */}
//                   <div>
//                     <h3 className="font-bold text-blue-600 mb-4 pb-2 border-b border-blue-200">Registrations</h3>
//                     <div className="w-full space-y-3">
//                       <div className="border rounded-lg bg-yellow-50 px-4 py-3">
//                         <div className="flex items-center justify-between gap-2 mb-2">
//                           <span className="font-semibold text-gray-800">Early Bird</span>
//                           <span className="text-xs sm:text-sm font-semibold text-yellow-700">Until February 15, 2026</span>
//                         </div>
//                         <div className="space-y-1 text-gray-800">
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>International Paper Presenter:</span>
//                             <span className="font-semibold">USD 200</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>National Paper Presenter:</span>
//                             <span className="font-semibold">PKR 4,000</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>International Participant:</span>
//                             <span className="font-semibold">USD 100</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>National Participant:</span>
//                             <span className="font-semibold">PKR 2,500</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>Group of 5 (Institutional) Paper Presenter:</span>
//                             <span className="font-semibold">PKR 18,500</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>Group of 10 (Institutional) Paper Presenter:</span>
//                             <span className="font-semibold">PKR 35,000</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>Group of 5 (Institutional) Participant:</span>
//                             <span className="font-semibold">PKR 11,500</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>Group of 10 (Institutional) Participant:</span>
//                             <span className="font-semibold">PKR 22,000</span>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="border rounded-lg bg-blue-50 px-4 py-3">
//                         <div className="flex items-center justify-between gap-2 mb-2">
//                           <span className="font-semibold text-gray-800">Regular</span>
//                           <span className="text-xs sm:text-sm font-semibold text-blue-700">Until March 31, 2026</span>
//                         </div>
//                         <div className="space-y-1 text-gray-800">
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>International Paper Presenter:</span>
//                             <span className="font-semibold">USD 300</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>National Paper Presenter:</span>
//                             <span className="font-semibold">PKR 4,500</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>International Participant:</span>
//                             <span className="font-semibold">USD 150</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>National Participant:</span>
//                             <span className="font-semibold">PKR 3,000</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>Group of 5 (Institutional) Paper Presenter:</span>
//                             <span className="font-semibold">PKR 20,000</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>Group of 10 (Institutional) Paper Presenter:</span>
//                             <span className="font-semibold">PKR 39,000</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>Group of 5 (Institutional) Participant:</span>
//                             <span className="font-semibold">PKR 13,000</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>Group of 10 (Institutional) Participant:</span>
//                             <span className="font-semibold">PKR 25,000</span>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="border rounded-lg bg-green-50 px-4 py-3">
//                         <div className="flex items-center justify-between gap-2 mb-2">
//                           <span className="font-semibold text-gray-800">On-Desk</span>
//                           <span className="text-xs sm:text-sm font-semibold text-green-700">April 07, 2026</span>
//                         </div>
//                         <div className="space-y-1 text-gray-800">
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>International Presenter:</span>
//                             <span className="font-semibold">USD 350</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>National Paper Presenter:</span>
//                             <span className="font-semibold">PKR 4,500</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>International Participant:</span>
//                             <span className="font-semibold">USD 150</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>National Participant:</span>
//                             <span className="font-semibold">PKR 3,000</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>Group of 5 (Institutional) Paper Presenter:</span>
//                             <span className="font-semibold">PKR 20,000</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>Group of 10 (Institutional) Paper Presenter:</span>
//                             <span className="font-semibold">PKR 39,000</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>Group of 5 (Institutional) Participant:</span>
//                             <span className="font-semibold">PKR 13,000</span>
//                           </div>
//                           <div className="flex justify-between text-xs sm:text-sm">
//                             <span>Group of 10 (Institutional) Participant:</span>
//                             <span className="font-semibold">PKR 25,000</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-6">
//                     <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 py-3 font-semibold text-lg shadow-lg">
//                       <Link href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICECD2025%2FSubmission%2FIndex">Submit Abstract Here</Link>
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Conference Concept Note */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div className="relative h-[340px] sm:h-[360px] md:h-[380px] lg:h-[400px] rounded-2xl overflow-hidden">
//                 <Image
//                   src="/images/Concept Note.png"
//                   alt="Early Childhood Education"
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//               </div>
//               <div>
//                 <h2 className="text-3xl font-extrabold text-blue-700 tracking-tight mb-4">Conference – Concept Note</h2>
//                 <p className="text-slate-600 leading-relaxed mb-6">
//                   Early childhood represents the most foundational phase of human development, shaping lifelong physical, emotional, cognitive, and social outcomes. Neuroscience confirms that the period from conception to eight years is critical for brain architecture, emotional regulation, learning readiness, and long-term productivity. Countries that prioritize Early Childhood Development (ECD) experience stronger human capital formation, sustained economic growth, reduced inequalities, improved public health outcomes, and greater social cohesion.
//                   </p>
//                 {/* <p className="text-slate-600 leading-relaxed mb-6">
//                   Despite this evidence, millions of young children across low- and middle-income countries are deprived of nurturing care, adequate nutrition, early learning opportunities, and safe environments. Asia, home to half of the world’s children, is simultaneously confronting demographic transitions, climate stress, rapid urbanization, migration, and persistent gender inequities, all of which disproportionately affect the early years. As a result, ECD has become a central pillar of the regional and global agenda for achieving the Sustainable Development Goals.
//                   </p> */}
//                 <Button asChild className="bg-blue-600 hover:bg-blue-700 rounded-md px-5 py-2 shadow-sm">
//                   <Link href="/about/background#goals">Read More</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Explore Islamabad */}
//       <section className="py-16 bg-sky-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <h2 className="text-2xl font-bold text-blue-700 mb-6">Explore Islamabad</h2>
//                 <p className="text-slate-700 mb-6">
//                   Known for its' mesmerizing green landscape, Islamabad is the capital of Pakistan. It is one of the
//                   safest and high standard cities in Pakistan.
//                 </p>
//                 <Button asChild className="bg-blue-600 hover:bg-blue-700">
//                   <Link href="https://www.islamabad.net/">Explore Islamabad</Link>
//                 </Button>
//               </div>
//               <div className="relative h-[400px] rounded-xl overflow-hidden">
//                 <Image
//                   src="/images/Isl-new-1024x651-1.jpg"
//                   alt="Faisal Mosque Islamabad"
//                   fill
//                   className="object-cover w-auto h-auto"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//        {/* Conference Themes Section */}

//       {/* Organisers */}
//       <section className="py-12 sm:py-16 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <SectionHeader title="Organisers" />
//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-3 sm:gap-4 items-center justify-items-center">
//               {organisers.map((org) => (
//                 <div key={org.name} className="relative h-20 sm:h-24 lg:h-28 w-full max-w-[200px]">
//                   <Image 
//                     src={`/${org.logo}`} 
//                     alt={org.name} 
//                     fill 
//                     className="object-contain"
//                     sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
//                     loading="eager"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Location */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <SectionHeader title="Location" />
//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//               <div className="space-y-6">
//                 <h3 className="text-2xl font-bold text-blue-700">Venue</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
//                     <div className="bg-blue-50 p-2 rounded-lg">
//                       <MapPin className="h-6 w-6 text-blue-700" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-lg text-slate-800">Academic Complex, AIOU</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
//                     <div className="bg-blue-50 p-2 rounded-lg">
//                       <Phone className="h-6 w-6 text-blue-700" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-lg text-slate-800">051-9054250</p>
//                       <p className="font-semibold text-lg text-slate-800">051-9054251</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
//                     <div className="bg-blue-50 p-2 rounded-lg">
//                       <Mail className="h-6 w-6 text-blue-700" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-lg text-slate-800">Iced2026@aiou.edu.pk</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="pt-2">
//                   <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
//                     <Link 
//                       href="https://maps.google.com/?q=Academic+Complex+AIOU+Islamabad"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center justify-center gap-2"
//                     >
//                       <MapPin className="h-5 w-5" />
//                       Get Directions
//                     </Link>
//                   </Button>
//                 </div>
//               </div>
//               <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.017588860227!2d73.04792907434306!3d33.68260873716006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf509212c1b1%3A0x25137b9c0cd3167d!2sAcademic%20Complex%2C%20AIOU!5e0!3m2!1sen!2s!4v1710400444412!5m2!1sen!2s"
//                   width="100%"
//                   height="100%"
//                   className="border-0"
//                   allowFullScreen={false}
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }

// const organisers = [
//   {
//     name: "AIOU",
//     logo: "sponsor/AIOU.jpg?height=400&width=600",
//   },
//   {
//     name: "PAFEC",
//     logo: "sponsor/PAFEC.png?height=400&width=600",
//   },
//   {
//     name: "RUPANI Foundation",
//     logo: "sponsor/rf-1.jpg?height=400&width=600",
//   },
//   {
//     name: "UNICEF",
//     logo: "sponsor/unicef-logo-1.png?height=400&width=600",
//   },
//   {
//     name: "Ministry of Planning",
//     logo: "sponsor/gov-logo-new-1.png?height=400&width=600",
//   },
//   {
//     name: "Sun Secretariat (New Logo)",
//     logo: "sponsor/sun-logo.jpg?height=400&width=600",
//   },

// ]




// // START OF NEW CODE
// "use client";
// import Link from "next/link";
// import HeroSlideshow from "@/components/hero-slideshow";

// export default function HomePage() {
//   return (
//     <main className="min-h-screen via-white to-sky-80 text-gray-800"> 
//       <section className="relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
//  <div className="relative w-full h-[420px] sm:h-[520px] md:h-[600px] lg:h-[680px]">
//  <HeroSlideshow
//       slides={[
//         {
//           src: "/Slides/1.jpg",
//           alt: "Slide 1",
//         },
//         {
//           src: "/images/update/after 1.png",
//           alt: "Slide 1 - After",
//         },
//         {
//           src: "/Slides/2.jpg",
//           alt: "Slide 2",
//         },
//         {
//           src: "/images/update/after 2.png",
//           alt: "Slide 2 - After",
//         },
//         {
//           src: "/Slides/3.png",
//           alt: "Slide 3",
//         },
//         {
//           src: "/images/update/after 3.png",
//           alt: "Slide 3 - After",
//         },
//         {
//           src: "/images/update/4 new.png",
//           alt: "Slide 4 - New",
//         },
//         {
//           src: "/images/update/after 4.png",
//           alt: "Slide 4 - After",
//         },
//         {
//           src: "/Slides/5.jpg",
//           alt: "Slide 5",
//         },
//         {
//           src: "/images/update/after 5.png",
//           alt: "Slide 5 - After",
//         },
//         {
//           src: "/Slides/6.jpg",
//           alt: "Slide 6",
//         },
//         {
//           src: "/Slides/8.jpg",
//           alt: "Slide 8",
//         },
//       ]}
//       showArrows
//       overlayClassName="px-4 flex items-start justify-center text-center pt-24 sm:pt-24 md:pt-28 lg:pt-80"
//     >
//          <div className="absolute inset-0 bg-white/50"></div>
//          {/* div 1 */}
//       <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 text-center">
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
//           Caring for Mothers,{" "}
//           <span className="text-blue-600">Growing the Future</span>
//         </h1>
//         <p className="mt-6 text-lg sm:text-xl text-gray-900 max-w-3xl mx-auto">
//           A free conference for expectant parents supporting maternal health and
//           early childhood development
//         </p>
//         <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
//           <Link
//             href="https://forms.gle/r7udfwMAZACWenGp8"
//             className="rounded-xl bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition"
//           >
//             Register (English)
//           </Link>
//           <Link
//             href="https://forms.gle/fxtH3L1T4rZj3vgm7"
//             className="rounded-xl border bg-blue-600 border-blue-600 px-8 py-3 text-white hover:bg-blue-700 font-semibold transition"
//           >
//             Registro (Español)
//           </Link>
//         </div>
//       </div>
//           {/* div 2 */}
//        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white rounded-2xl z-10 p-6 shadow-[0_5px_10px_rgba(255,190,13,0.35)]">
//             <h2 className="text-xl font-semibold text-green-900">
//               Date & Time
//             </h2>
//             <p className="mt-3 text-gray-700">
//               Saturday, March 14, 2026
//               <br />
//               9:00 am – 3:30 pm
//               <br />
//               <span className="text-sm text-gray-500">
//                 Registration & breakfast begin at 8:00 am
//               </span>
//             </p>
//           </div>
//           <div className="bg-white rounded-2xl z-10 shadow-[0_5px_10px_rgba(255,190,13,0.35)] p-6">
//             <h2 className="text-xl font-semibold text-green-900">Location</h2>
//             <p className="mt-3 text-gray-700">
//               Emerson Unitarian Universalist Church
//               <br />
//               1900 Bering Drive
//               <br />
//               Houston, TX 77057
//             </p>
//           </div>

//           <div className="bg-white rounded-2xl z-10 shadow-[0_5px_10px_rgba(255,190,13,0.35)] p-6">
//             <h2 className="text-xl font-semibold text-green-900">
//               Who Should Attend?
//             </h2>
//             <p className="mt-3 text-gray-700">
//               Mothers and fathers expecting a child, as well as caregivers such
//               as grandparents and family members.
//             </p>
//           </div>
//         </div>
//       </div>

//     </HeroSlideshow>
//   </div>
// </section>

// </main>
//   );
// }


// UPDATED CODE FOR CONFERENCE PAGE

"use client";
import Link from "next/link";
import HeroSlideshow from "@/components/hero-slideshow";
import Image from "next/image";
import { useState } from "react";


const collabpartners = [
    {
        name: "muslim hands",
        logo: "images/partnersAndOrganizers/muslim hands.png?height=400&width=600",
    },
    {
        name: "WHO logo",
        logo: "images/partnersAndOrganizers/WHO logo.png?height=400&width=600",
    },
    {
        name: "Save the Children",
        logo: "images/partnersAndOrganizers/save the children.png",
    },
    {
        name: "UMDC",
        logo: "images/partnersAndOrganizers/umdc transparent.png",
    },
]

const impactpartners = [
    {
        name: "Ministry",
        logo: "images/sponsor/gov-logo-new-1.png?height=400&width=600",
    },
    {
        name: "AIOU",
        logo: "images/sponsor/AIOU.jpg?height=400&width=600",
    },
    {
        name: "RF",
        logo: "images/sponsor/rf-1.jpg?height=400&width=600",
    },
    {
        name: "PAFEC",
        logo: "images/sponsor/PAFEC.png?height=400&width=600",
    },
    {
        name: "unicef",
        logo: "images/partnersAndOrganizers/unicef.png?height=400&width=600",
    },
]

const impactPartnersNew = [
    {
        name: "Asia Foundation",
        logo: "images/asia foundation transparent.png",
    },
]

const knowledgepartners = [
    {
        name: "aga khan uni",
        logo: "images/partnersAndOrganizers/aga khan uni.png?height=600&width=700",
    },
    {
        name: "arnec logo",
        logo: "images/partnersAndOrganizers/arnec logo.png?height=400&width=600",
    },
    {
        name: "avpn logo",
        logo: "images/partnersAndOrganizers/avpn logo.png?height=400&width=600",
    },
    {
        name: "hashoo foundation",
        logo: "images/partnersAndOrganizers/hashoo foundation.png?height=400&width=600",
    },
    {
        name: "irf logo",
        logo: "images/partnersAndOrganizers/irf logo.png?height=500&width=700",
    },
    {
        name: "vso logo",
        logo: "images/partnersAndOrganizers/vso logo.png?height=400&width=600",
    },
    {
        name: "rspn logo",
        logo: "images/partnersAndOrganizers/rspn logo.png?height=400&width=600",
    },
    {
        name: "ECDAN",
        logo: "images/partnersAndOrganizers/ecdan logo.png",
    },
    {
        name: "ACTED",
        logo: "images/partnersAndOrganizers/ACTED-3ZERO_LOGO_PORTRAIT_COLOUR_EN_Plan de travail 1_Plan de travail 1 (2).png",
    },
    {
        name: "SustainaWiser",
        logo: "images/partnersAndOrganizers/SustainerWiser hzntl.png",
    },
]

const themes = [
    {
        title:
            "Theme 1: The Economics and Sustainable Mechanisms – Innovative Approaches to ECD Finances",
        points: [
            "Global economic evidence on high returns to ECD with reference to Asia’s demographic transition and human capital dividend - Case Study from Pakistan",
            "Investment scenarios linking ECD to national productivity, public financing frameworks from OECD and LMICs, and blended finance and innovative PPP models (Country examples: Chile Crece Contigo, Singapore, Rwanda, Vietnam)",
            "Venture philanthropy and catalytic capital, corporate social responsibility models and faith-based giving",
            "Family foundations and diaspora philanthropy",
            "Linking climate justice with child development, green ECD centers and climate-adaptive infrastructure, carbon finance mechanisms for caregiving programs"
        ]
    },
    {
        title: "Theme 2: Nurturing Care Across Cultures and Innovations",
        points: [
            "Parenting models and family-strengthening systems – Key Family Care Practices (KFCPs) & Scaling-up Parenting Programme in Pakistan",
            "Responsive Caregiving",
            "RDI/Rupani Foundation’s AWIP model as a regional example",
            "Digital parenting platforms and remote learning tools",
            "EdTech innovations from Singapore, Malaysia"
        ]
    },
    {
        title: "Theme 3: Health, Nutrition & Safety and Security",
        points: [
            "Integrating developmental milestones, early detection & early intervention into Pakistan’s primary health care services",
            "AI-based early detection and developmental screening",
            "Stunting prevention through adequate nutrition – it starts in the womb",
            "Healthy dietary practices & food security"
        ]
    },
    {
        title: "Theme 4: Strengthening the ECD Workforce & Regional Cooperation",
        points: [
            "Academic pathways through Centers of Excellence (e.g., AIOU)",
            "Credentialing, scholarships, and digital upskilling",
            "Workforce mobility across the region",
            "Capacity-building initiatives and cross-country learning",
            "Regional cooperation for quality assurance in ECD"
        ]
    },
    {
        title: "Theme 5: Research, Measurement & Accountability Systems",
        points: [
            "Understanding the role of WHO Global Scale for Early Development (GSED) in ECD Measurement",
            "Strengthening indicators, data systems, and tracking",
            "Global measurement frameworks (MECCE, SABER-ECD)",
            "Academic collaboration and regional research networks"
        ]
    },
    {
        title: "Theme 6: Caregivers’ Mental Health & MH&PSS Integration",
        points: [
            "Caring for the caregivers, global best practices",
            "WHO maternal mental health frameworks",
            "Integrating mental health into primary healthcare",
            "Holistic mind–body–spirit models (e.g., Ibn Sina Foundation)"
        ]
    },
    {
        title: "Theme 7: Early Learning Opportunities",
        points: [
            "Strengthen Home and Community Based Learning Environments by equipping parents and caregivers with guidance for early stimulation and nurturing interactions",
            "Design play-based Early Learning Spaces that promote exploration, creativity, and foundational literacy and numeracy",
            "Ensure strong transition and foundational skills in early primary years",
            "Train educators, engage families, and ensure equitable early learning access from conception to age 8"
        ]
    }
];

const speakers = [
    {
        name: "Prof. Dr. Nasir Mahmood",
        role: "Conference Chair",
        org: "Allama Iqbal Open University",
        image: "",
    },
    {
        name: "Mr. Nasruddin Rupani",
        role: "Co-Chair",
        org: "Rupani Foundation",
        image: "",
    },
    {
        name: "Mr. Waseem Samad",
        role: "Group Chief Executive Officer",
        org: "Apex & Co., Rupani Foundation",
        image: "",
    },
    {
        name: "Ms. Khadija Khan",
        role: "Conference Convener",
        org: "Pakistan Alliance for Early Childhood",
        image: "",
    },
    {
        name: "Dr. Saima Nasir",
        role: "Director",
        org: "QEC",
        image: "",
    },
    {
        name: "Mr. Jalaluddin",
        role: "CEO",
        org: "Rupani Foundation",
        image: "",
    },
    {
        name: "Dr. Muhammad Ayub Buzdar",
        role: "Associate Professor / Chairperson",
        org: "Department of STE",
        image: "",
    },
    {
        name: "Syed Jalal Uddin Shah",
        role: "Global CEO",
        org: "Rupani Foundation",
        image: "",
    },
    {
        name: "Dr. Saba Shuja",
        role: "Manager ECD",
        org: "UNICEF",
        image: "",
    },
    {
        name: "Dr. Tooba Saleem",
        role: "Assistant Professor / Conference Secretary",
        org: "Department of ECE&C",
        image: "",
    },
];

const concurrentSpeakers = [
    {
        name: "Dr Shelina Bhamani",
        org: "Associate Professor & Lead ECD, AKU",
        role: "Panelist",
        image: "/images/speakers/Dr Shelina Bhamani.jpg",
    },
    {
        name: "Ms. Erum Barki",
        org: "UNICEF Representative",
        role: "Panelist",
        image: "",
    },
    {
        name: "Ms. Naghmana Sardar",
        org: "Directress, Directorate of Elementary and Secondary Education, KP",
        role: "Panelist",
        image: "/images/speakers/Ms. Naghmana Sardar.jpg",
    },
    {
        name: "Ms. Komal Zuberi",
        org: "Khalifa Bin Zayed Foundation",
        role: "Panelist (International)",
        image: "",
    },
    {
        name: "Dr. Tabassum Naz",
        org: "Director, National Curriculum Council",
        role: "Panelist",
        image: "/images/speakers/Dr. Tabassum Naz.jpg",
    },
    {
        name: "Ms. Seher Taimoor",
        org: "Education Advisor, Save the Children",
        role: "Panelist",
        image: "/images/speakers/Ms. Seher Taimoor .jpg",
    },
];

// Get initials
const getInitials = (name: string) => {
    if (!name) return "";
    const words = name.split(" ");
    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
};

// Avatar color
const getAvatarColor = (name: string) => {
    const colors = [
        "bg-blue-100 text-blue-600",
        "bg-green-100 text-green-600",
        "bg-purple-100 text-purple-600",
        "bg-pink-100 text-pink-600",
        "bg-indigo-100 text-indigo-600",
        "bg-teal-100 text-teal-600",
        "bg-orange-100 text-orange-600",
        "bg-red-100 text-red-600",
        "bg-yellow-100 text-yellow-600",
        "bg-cyan-100 text-cyan-600",
    ];

    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    return colors[Math.abs(hash) % colors.length];
};

export default function HomePage() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <main className="min-h-screen text-gray-800">
            {/* hero section */}
            <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
                <div className="relative w-full h-[420px] sm:h-[520px] md:h-[600px] lg:h-[680px]">
                    <HeroSlideshow
                        slides={[
                            { src: "/Slides/1.jpg", alt: "Slide 1" },
                            { src: "/images/update/after 1.png", alt: "Slide 1 After" },
                            { src: "/Slides/2.jpg", alt: "Slide 2" },
                            { src: "/images/update/after 2.png", alt: "Slide 2 After" },
                            { src: "/Slides/3.png", alt: "Slide 3" },
                            { src: "/images/update/after 3.png", alt: "Slide 3 After" },
                            { src: "/images/update/4 new.png", alt: "Slide 4" },
                            { src: "/images/update/after 4.png", alt: "Slide 4 After" },
                            { src: "/Slides/5.jpg", alt: "Slide 5" },
                            { src: "/images/update/after 5.png", alt: "Slide 5 After" },
                            { src: "/Slides/6.jpg", alt: "Slide 6" },
                            { src: "/Slides/8.jpg", alt: "Slide 8" },
                        ]}
                        showArrows
                        overlayClassName="px-4 flex items-center justify-center text-center"
                    >
                        <div className="absolute inset-0 bg-white/50"></div>
                        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
                                5TH INTERNATIONAL CONFERENCE ON{" "}
                                <span className="text-blue-600">EARLY CHILDHOOD DEVELOPMENT</span>
                            </h3>

                            <p className="mt-6 text-lg sm:text-xl text-gray-900 max-w-3xl mx-auto">
                                Investing in Early Childhood Development – Building Human Capital
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/registration"
                                    className="rounded-xl bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition"
                                >
                                    Register Now
                                </Link>
                            </div>
                        </div>
                    </HeroSlideshow>
                </div>
                <div className="relative -mt-28 z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="bg-white rounded-2xl p-6 shadow-[0_5px_10px_rgba(255,190,13,0.35)]">
                            <h2 className="text-xl font-semibold text-green-900">
                                Date & Time
                            </h2>

                            <p className="mt-3 text-gray-700">
                                April 07- 08, 2026 <br />
                                8:30 am – 5:00 pm
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-[0_5px_10px_rgba(255,190,13,0.35)]">
                            <h2 className="text-xl font-semibold text-green-900">Location</h2>

                            <Link href="https://maps.google.com/?q=Academic+Complex,+AIOU" target="_blank" className="mt-3 text-gray-700">
                                Academic Complex, AIOU<br />
                                Islamabad, Pakistan
                            </Link>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-[0_5px_10px_rgba(255,190,13,0.35)]">
                            <h2 className="text-xl font-semibold text-green-900">
                                Contact Us
                            </h2>

                            <p className="mt-3 text-gray-700">
                                051-9054250 <br />
                                051-9054251 <br />
                                Iced2026@aiou.edu.pk
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* conference's overview */}
            <section>
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900">
                                Conference's Overview
                            </h2>
                            <p className="mt-4 text-gray-600">
                                Early childhood represents the most foundational phase of human
                                development, shaping lifelong physical, emotional, cognitive, and
                                social outcomes. Neuroscience confirms that the period from
                                conception to eight years is critical for brain architecture,
                                emotional regulation, learning readiness, and long-term productivity.
                                Countries that prioritize Early Childhood Development (ECD)
                                experience stronger human capital formation, sustained economic
                                growth, reduced inequalities, improved public health outcomes, and
                                greater social cohesion.
                            </p>
                            <Link
                                href="/about/background#goals"
                                className="mt-8 inline-flex items-center justify-center rounded-xl bg-green-900 px-8 py-3 text-white font-medium hover:bg-blue-800 transition"
                            >
                                Read More
                            </Link>
                        </div>
                        <div className="relative w-full h-[320px] md:h-[380px] lg:h-[420px]">
                            <Image
                                src="/images/Concept Note.png"
                                alt="Early Childhood Education"
                                fill
                                className="object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tab Themes changes */}
            <section className="py-20 from-white to-sky-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
                            Conference Sub-themes
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Key discussion areas focusing on strengthening Early Childhood
                            Development systems and investments.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="mt-12 flex flex-wrap justify-center gap-3">
                        {themes.map((theme, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${activeTab === index
                                        ? "bg-[#3dae30] text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-sky-100"
                                    }`}
                            >
                                {theme.title}
                            </button>
                        ))}
                    </div>

                    {/* Active Content */}
                    <div className="mt-10 max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-[0_5px_10px_rgba(61,174,48,0.35)] p-6">

                            <h3 className="text-lg font-semibold text-sky-900">
                                {themes[activeTab].title}
                            </h3>

                            <ul className="mt-4 list-disc pl-5 text-gray-600 space-y-2 text-sm">
                                {themes[activeTab].points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>

                        </div>
                    </div>

                </div>
            </section>

            {/* Speakers Section */}
            {(() => {
                const [activeDay, setActiveDay] = useState("DAY-1");

                const plenarySpeakers = [
                    // DAY 1 — Opening Ceremony
                    {
                        day: "DAY-1",
                        plenary: "Opening Ceremony",
                        speakers: [
                            {
                                name: "Dr Zafar Mirza",
                                org: "Former Federal Minister Health, Ministry of National Health Services Regulation & Coordination",
                                role: "Keynote Speaker",
                                image: "/images/speakers/Dr Zafar Mirza.jpg",
                            },
                        ],
                    },

                    // DAY 1 — PLENARY 1
                    {
                        day: "DAY-1",
                        plenary:
                            "PLENARY-1: Economics and Sustainable Mechanisms- Innovative Approaches to ECD Finances",
                        speakers: [
                            {
                                name: "Mr. Stephen Rasmussen",
                                org: "Chairman, Community & Enterprise Development Organization",
                                role: "Keynote Speaker (International)",
                                image: "/images/speakers/Mr. Stephen Rasmussen.png",
                            },
                            {
                                name: "Dr. Adnan Aziz",
                                org: "Chief Program Officer, Global Islamic Finance Impact Program for Climate, Nature and Development, UAE",
                                role: "Panelist (International)",
                                image: "/images/speakers/Dr. Adnan Aziz.jpg",
                            },
                            {
                                name: "Dr. Alaptagin Khan",
                                org: "Neuroscientist & Instructor in Psychiatry, Harvard Medical School",
                                role: "Panelist (International)",
                                image: "/images/speakers/Dr. Alaptagin Khan.jpg",
                            },
                            {
                                name: "Ms. Katy Anis",
                                org: "Co-founder, Carbon for Care (Online)",
                                role: "Panelist (International)",
                                image: "/images/speakers/Ms. Katy Anis.png",
                            },
                            {
                                name: "Ms. Mina Zamand",
                                org: "Economist, World Bank",
                                role: "Panelist",
                                image: "/images/speakers/Ms. Mina Zamand.jpg",
                            },
                            {
                                name: "Vikas Arora",
                                org: "Chief of Impact Investing & Blended Finance, AVPN",
                                role: "Panelist (International)",
                                image: "/images/speakers/Vikas Arora.jpg",
                            },
                        ],
                    },

                    // DAY 1 — PLENARY 2
                    {
                        day: "DAY-1",
                        plenary:
                            "PLENARY-2: Nurturing Care Across Cultures: Innovations and Inclusive Approaches to ECD",
                        speakers: [
                            {
                                name: "Dr Karen Boardman",
                                org: "Head of Department, Early Years Education, Edge Hill University, Lancashire, UK",
                                role: "Keynote Speaker (International)",
                                image: "/images/speakers/Dr Karen Boardman.jpg",
                            },
                            {
                                name: "Dr. Saba Shuja",
                                org: "Manager ECD, UNICEF",
                                role: "Panelist",
                                image: "/images/speakers/Dr. Saba Shuja.png",
                            },
                            {
                                name: "Dr. Uzma Qudsia",
                                org: "Programme Lead, WHO",
                                role: "Panelist",
                                image: "/images/speakers/Dr. Uzma Qudsia.jpg",
                            },
                            {
                                name: "Mr. Jalaluddin Hunzai",
                                org: "CEO, Rupani Foundation",
                                role: "Panelist",
                                image: "/images/speakers/Mr. Jalaluddin Hunzai.png",
                            },
                            {
                                name: "Mr. Sajjad Hyder",
                                org: "CEO, Gbeetechive",
                                role: "Panelist",
                                image: "/images/speakers/Mr. Sajjad Hyder.jpg",
                            },
                            {
                                name: "Dr Zeba Rasmussen",
                                org: "Founder of Mehnaz Fatima Foundation",
                                role: "Panelist",
                                image: "/images/speakers/Dr Zeba Rasmussen.jpg",
                            },
                        ],
                    },

                    // DAY 1 — PLENARY 3
                    {
                        day: "DAY-1",
                        plenary: "PLENARY-3: Health, Nutrition and Safety & Security",
                        speakers: [
                            {
                                name: "Prof. Dr. Jamal Raza",
                                org: "National Institute of Child Health Karachi",
                                role: "Keynote Speaker",
                                image: "/images/speakers/Prof. Dr. Jamal Raza.jpg",
                            },
                            {
                                name: "Mr. Anteneh Girma",
                                org: "Chief Nutrition, UNICEF",
                                role: "Panelist",
                                image: "/images/speakers/Mr. Anteneh Girma.jpg",
                            },
                            {
                                name: "Dr. Salman Kirmani",
                                org: "Professor, Department of Paediatrics and Child Health, Aga Khan University",
                                role: "Panelist",
                                image: "/images/speakers/Dr. Salman Kirmani.jpg",
                            },
                            {
                                name: "Dr Fatima Rehman",
                                org: "Developmental Pediatrician, The Children's Hospital Lahore",
                                role: "Panelist",
                                image: "/images/speakers/Dr Fatima Rehman.jpg",
                            },
                            {
                                name: "Ms. Ayesha Raza Farooq",
                                org: "Chairperson NCRC",
                                role: "Panelist",
                                image: "/images/speakers/Ms. Ayesha Raza Farooq.jpg",
                            },
                            {
                                name: "Dr. Wali Khan",
                                org: "DG Health",
                                role: "Panelist",
                                image: "/images/speakers/Dr. Wali Khan.jpg",
                            },
                            {
                                name: "Dr. Shahzad Khan",
                                org: "Vice Chancellor, HAS",
                                role: "Panelist",
                                image: "/images/speakers/Dr. Shahzad Khan.jpg",
                            },
                            {
                                name: "Mr.Hazza Al-Tamimi",
                                org: "Head of Urban Design – Abu-Dhabi ECD Authority",
                                role: "Panelist (International)",
                                image: "",
                            },
                        ],
                    },

                    // DAY 2 — PLENARY 1
                    {
                        day: "DAY-2",
                        plenary:
                            "PLENARY 1: Strengthening the ECD Workforce & Regional Cooperation",
                        speakers: [
                            {
                                name: "Prof Mathias Urban",
                                org: "Chairman, Early Childhood Education and Director, Early Childhood Research Center, University of Ireland",
                                role: "Keynote Speaker (International)",
                                image: "/images/speakers/Prof Mathias Urban.jpg",
                            },
                            {
                                name: "Ms. Sara Lajam",
                                org: "Dubai Care Representative",
                                role: "Speaker (International)",
                                image: "",
                            },
                            {
                                name: "Dr. Fareed Panjwani",
                                org: "Dean, Institute for Educational Development (IED), Aga Khan University",
                                role: "Panelist",
                                image: "/images/speakers/Dr. Fareed Panjwani.jpg",
                            },
                            {
                                name: "Ms. Ambreena Ahmed",
                                org: "Director, Teachers' Resource Centre (TRC), Pakistan",
                                role: "Panelist",
                                image: "/images/speakers/Ms. Ambreena Ahmed.jpg",
                            },
                            {
                                name: "Mr. Abid Gill",
                                org: "Deputy Chief Advisor, Japan International Cooperation Agency",
                                role: "Panelist",
                                image: "",
                            },
                            {
                                name: "Mr. Syed Javid Gillani",
                                org: "Executive Director, Muslim Hands",
                                role: "Panelist",
                                image: "/images/speakers/Mr. Syed Javid Gillani.jpg",
                            },
                            {
                                name: "Mr. Siva Prasad",
                                org: "Asia-Pacific Regional Network for Early Childhood(ARNEC)",
                                role: "Panelist (International)",
                                image: "",
                            },
                        ],
                    },

                    // DAY 2 — PLENARY 2
                    {
                        day: "DAY-2",
                        plenary:
                            "PLENARY 2: Research, Measurement & Accountability Systems",
                        speakers: [
                            {
                                name: "Ms. Vanessa Cavallera",
                                org: "WHO Global Expert",
                                role: "Keynote Speaker (International)",
                                image: "/images/speakers/Ms. Vanessa Cavallera.jpg",
                            },
                            {
                                name: "Dr. Saba Shuja",
                                org: "Manager ECD, UNICEF",
                                role: "Panelist",
                                image: "/images/speakers/Dr. Saba Shuja.png",
                            },
                            {
                                name: "Dr. Shahid Soroya",
                                org: "Director General, Pakistan Institute of Education",
                                role: "Panelist",
                                image: "/images/speakers/Dr. Shahid Soroya.jpg",
                            },
                            {
                                name: "Ms. Jalila Hehldi",
                                org: "Co-founder, Sustainwiser",
                                role: "Panelist (International)",
                                image: "/images/speakers/Ms. Jalila Hehldi.png",
                            },
                            {
                                name: "Prof Mathias Urban",
                                org: "Chairman, Early Childhood Education and Director, Early Childhood Research Center, University of Ireland",
                                role: "Panelist (International)",
                                image: "/images/speakers/Prof Mathias Urban.jpg",
                            },
                            {
                                name: "Dr. Tooba Saleem",
                                org: "Assistant Professor, Allama Iqbal Open University",
                                role: "Panelist",
                                image: "/images/speakers/Dr. Tooba Saleem.jpg",
                            },
                        ],
                    },

                    // DAY 2 — PLENARY 3
                    {
                        day: "DAY-2",
                        plenary:
                            "PLENARY 3: Caregivers' Mental Health & MH&PSS Integration",
                        speakers: [
                            {
                                name: "Dr. Mowadat Hussain Rana",
                                org: "Professor of Psychiatry and Behavioural Sciences",
                                role: "Panelist",
                                image: "/images/speakers/Dr. Mowadat Hussain Rana.jpg",
                            },
                            {
                                name: "Dr. Abdul Wahab Yousafzai",
                                org: "Psychiatrist, Shifa International Hospital",
                                role: "Panelist",
                                image: "/images/speakers/Dr. Abdul Wahab Yousafzai.jpg",
                            },
                            {
                                name: "Ms. Safina Abdulloeva",
                                org: "Health Manager, UNICEF",
                                role: "Panelist",
                                image: "/images/speakers/Ms. Safina Abdulloeva.jpg",
                            },
                            {
                                name: "Ms. Falak Madhani",
                                org: "Brain and Mind Institute(BMI), Aga Khan University",
                                role: "Panelist",
                                image: "",
                            },
                            {
                                name: "Dr. Asma Humayun",
                                org: "National Technical Advisor Mental Health Strategic Planning & Coordination Unit Ministry of Planning, Development & Special Initiatives",
                                role: "Panelist",
                                image: "/images/speakers/Dr. Asma Humayun.jpg",
                            },
                        ],
                    },
                ];

                const filteredPlenaries = plenarySpeakers.filter(
                    (item) => item.day === activeDay
                );

                return (
                    <section id="speakers" className="py-16 bg-gray-50">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            {/* Heading */}
                            <div className="text-center max-w-3xl mx-auto">
                                <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
                                    Panelists and Keynote Speakers
                                </h2>
                                <p className="mt-4 text-gray-600">
                                    Learn from our distinguished speakers who are experts in early childhood development
                                </p>
                            </div>

                            {/* Tabs */}
                            <div className="flex justify-center mt-10 gap-4">
                                <button
                                    onClick={() => setActiveDay("DAY-1")}
                                    className={`px-6 py-2 rounded-full font-semibold transition ${activeDay === "DAY-1"
                                        ? "bg-blue-600 text-white"
                                        : "bg-white text-gray-700 border"
                                        }`}
                                >
                                    Day 1
                                </button>

                                <button
                                    onClick={() => setActiveDay("DAY-2")}
                                    className={`px-6 py-2 rounded-full font-semibold transition ${activeDay === "DAY-2"
                                        ? "bg-blue-600 text-white"
                                        : "bg-white text-gray-700 border"
                                        }`}
                                >
                                    Day 2
                                </button>
                            </div>

                            {filteredPlenaries.map((plenary, index) => (
                                <div key={index} className="mt-16">

                                    {/* Plenary Title */}
                                    <div className="text-center mb-10">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-blue-800">
                                            {plenary.day} — {plenary.plenary}
                                        </h3>
                                        <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded"></div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {plenary.speakers.map((p, i) => (
                                            <div
                                                key={i}
                                                className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                            >
                                                {/* Day */}
                                                <div className="mb-4">
                                                    <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                                                        {plenary.day}
                                                    </span>
                                                </div>

                                                <div className="flex gap-4">
                                                    <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-blue-100">
                                                        {p.image ? (
                                                            <Image
                                                                src={p.image}
                                                                alt={p.name}
                                                                width={64}
                                                                height={64}
                                                                className="object-cover w-full h-full"
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                                                                {p.name.charAt(0)}
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div>
                                                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                                                            {p.name}
                                                        </h3>

                                                        <p className="text-gray-600 text-sm mt-1">
                                                            {p.org}
                                                        </p>

                                                        <p className="mt-2 text-sm font-semibold text-blue-600">
                                                            {p.role}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Plenary */}
                                                <div className="mt-4">
                                                    <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1.5 rounded-full">
                                                        {plenary.plenary}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                );
            })()}

            {/* CONCURRENT SESSION: Early Learning Opportunities (concurrent) */}
            <section
                id="conference-committee"
                className="py-20 bg-gradient-to-b from-white to-blue-50"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
                            CONCURRENT SESSION: Early Learning Opportunities (concurrent)
                        </h2>
                    </div>

                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        {concurrentSpeakers.map((speaker, i) => {
                            const hasImage = speaker.image && speaker.image !== "";
                            const initials = getInitials(speaker.name);
                            const avatarColor = "bg-blue-100 text-blue-600";

                            return (
                                <div
                                    key={i}
                                    className="rounded-2xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition border border-gray-100"
                                >
                                    <div className="flex items-center gap-5">

                                        {/* Avatar */}
                                        <div className="relative h-16 w-16 rounded-full overflow-hidden ring-2 ring-blue-100 flex-shrink-0 flex items-center justify-center">
                                            {hasImage ? (
                                                <Image
                                                    src={speaker.image}
                                                    alt={speaker.name}
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            ) : (
                                                <div
                                                    className={`h-full w-full flex items-center justify-center ${avatarColor}`}
                                                >
                                                    <span className="font-bold text-lg">
                                                        {initials}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                {speaker.name}
                                            </h3>
                                            <p className="text-gray-500 text-sm mb-1">
                                                {speaker.role}
                                            </p>
                                            <p className="text-blue-600 font-medium mt-1">
                                                {speaker.org}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <p className="mt-10 text-center text-gray-500 italic">
                        …and more presenters to be announced
                    </p>
                </div>
            </section>

            {/* Conference core committee */}
            <section
                id="conference-committee"
                className="py-20 bg-gradient-to-b from-white to-blue-80"
            >
                <div className="mx-auto max-w-5xl px-3 sm:px-6 lg:px-5">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
                            Conference Core Committee
                        </h2>
                        <p className="mt-4 text-gray-600">
                            The conference is organised by Allama Iqbal Open University, Pakistan
                            Alliance for Early Childhood, Rupani Foundation, Pakistan, UNICEF,
                            Pakistan, Ministry of Planning, SUN Secretariat, Nutrition Section and
                            WHO, Pakistan.
                        </p>
                    </div>

                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        {speakers.map((speaker, i) => {
                            const hasImage = speaker.image && speaker.image !== "";
                            const initials = getInitials(speaker.name);
                            const avatarColor = "bg-blue-200 text-blue-600";

                            return (
                                <div
                                    key={i}
                                    className="rounded-2xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition border border-gray-100"
                                >
                                    <div className="flex items-center gap-5">

                                        {/* Avatar */}
                                        <div className="relative h-16 w-16 rounded-full overflow-hidden ring-2 ring-blue-100 flex-shrink-0 flex items-center justify-center">
                                            {hasImage ? (
                                                <Image
                                                    src={speaker.image}
                                                    alt={speaker.name}
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            ) : (
                                                <div
                                                    className={`h-full w-full flex items-center justify-center ${avatarColor}`}
                                                >
                                                    <span className="font-bold text-lg">
                                                        {initials}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                {speaker.name}
                                            </h3>
                                            <p className="text-gray-500 text-sm mb-1">
                                                {speaker.role}
                                            </p>
                                            <p className="text-blue-600 font-medium mt-1">
                                                {speaker.org}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <p className="mt-10 text-center text-gray-500 italic">
                        …and more presenters to be announced
                    </p>
                </div>
            </section>

            {/* Registration detail cards */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
                            Registrations
                        </h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded"></div>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {[
                            {
                                title: "Early Bird",
                                date: "Until February 15, 2026",
                                theme: {
                                    bg: "bg-amber-50",
                                    border: "border-amber-200",
                                    dateColor: "text-amber-700",
                                },
                                fees: [
                                    "International Paper Presenter — USD 200",
                                    "National Paper Presenter — PKR 4,000",
                                    "International Participant — USD 100",
                                    "National Participant — PKR 2,500",
                                    "Group of 5 (Institutional) Paper Presenter — PKR 18,500",
                                    "Group of 10 (Institutional) Paper Presenter — PKR 35,000",
                                    "Group of 5 (Institutional) Participant — PKR 11,500",
                                    "Group of 10 (Institutional) Participant — PKR 22,000",
                                ],
                            },
                            {
                                title: "Regular",
                                date: "Until March 31, 2026",
                                theme: {
                                    bg: "bg-slate-100",
                                    border: "border-slate-200",
                                    dateColor: "text-blue-600",
                                },
                                fees: [
                                    "International Paper Presenter — USD 300",
                                    "National Paper Presenter — PKR 4,500",
                                    "International Participant — USD 150",
                                    "National Participant — PKR 3,000",
                                    "Group of 5 (Institutional) Paper Presenter — PKR 20,000",
                                    "Group of 10 (Institutional) Paper Presenter — PKR 39,000",
                                    "Group of 5 (Institutional) Participant — PKR 13,000",
                                    "Group of 10 (Institutional) Participant — PKR 25,000",
                                ],
                            },
                            {
                                title: "On-Desk",
                                date: "April 07, 2026",
                                theme: {
                                    bg: "bg-green-50",
                                    border: "border-green-200",
                                    dateColor: "text-green-700",
                                },
                                fees: [
                                    "International Presenter — USD 350",
                                    "National Paper Presenter — PKR 4,500",
                                    "International Participant — USD 150",
                                    "National Participant — PKR 3,000",
                                    "Group of 5 (Institutional) Paper Presenter — PKR 20,000",
                                    "Group of 10 (Institutional) Paper Presenter — PKR 39,000",
                                    "Group of 5 (Institutional) Participant — PKR 13,000",
                                    "Group of 10 (Institutional) Participant — PKR 25,000"
                                ],
                            },
                        ].map((plan, i) => (
                            <div
                                key={i}
                                className={`rounded-2xl border ${plan.theme.border} ${plan.theme.bg} shadow-sm hover:shadow-lg transition`}
                            >
                                <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {plan.title}
                                    </h3>
                                    <span className={`text-sm font-medium ${plan.theme.dateColor}`}>
                                        {plan.date}
                                    </span>
                                </div>
                                <div className="p-6 space-y-3">
                                    {plan.fees.map((fee, idx) => (
                                        <div
                                            key={idx}
                                            className="flex justify-between text-sm text-gray-700"
                                        >
                                            <span>{fee}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Organizers */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
                            Organizers
                        </h2>
                    </div>

                    <div className="max-w-7xl mx-auto mt-10">
                        <div className="grid grid-cols-5 gap-6 items-center justify-center">

                            {impactpartners.map((org) => (
                                <div
                                    key={org.name}
                                    className="relative h-20 w-full max-w-[180px]"
                                >
                                    <Image
                                        src={`/${org.logo}`}
                                        alt={org.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 30vw"
                                        loading="eager"
                                    />
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </section>

            {/* Impact Partners */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="text-center container mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
                            Impact Partners
                        </h2>
                    </div>

                    <div className="max-w-7xl mx-auto mt-10">
                        <div className="text-center grid grid-cols-1 gap-6 items-center justify-center">

                            {impactPartnersNew.map((org) => (
                                <div
                                    key={org.name}
                                    className="relative h-32 sm:h-36 lg:h-60 w-full max-w-[240px]"
                                >
                                    <Image
                                        src={`/${org.logo}`}
                                        alt={org.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 80vw, 60vw"
                                        loading="eager"
                                    />
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </section>

            {/* colloboration partners */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
                            Collaboration Partners
                        </h2>
                    </div>

                    <div className="max-w-7xl mx-auto mt-10">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center">

                            {collabpartners.map((org) => (
                                <div
                                    key={org.name}
                                    className="relative h-32 sm:h-36 lg:h-40 w-full max-w-[240px]"
                                >
                                    <Image
                                        src={`/${org.logo}`}
                                        alt={org.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 30vw"
                                        loading="eager"
                                    />
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </section>

            {/* knowledge partners */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
                            Knowledge Partners
                        </h2>
                    </div>

                    <div className="max-w-7xl mx-auto mt-10">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center">

                            {knowledgepartners.map((org) => (
                                <div
                                    key={org.name}
                                    className="relative h-32 sm:h-36 lg:h-40 w-full max-w-[240px]"
                                >
                                    <Image
                                        src={`/${org.logo}`}
                                        alt={org.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 30vw"
                                        loading="eager"
                                    />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
            {/* media partners */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
                            International Conference Alerts
                        </h2>
                    </div>
                    <div className="max-w-6xl mx-auto mt-8">
                        <div className="flex items-center justify-center">
                            <a
                                href="https://internationalconferencealerts.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative h-20 sm:h-24 lg:h-28 w-full max-w-[200px] block"
                            >
                                <Image
                                    src="/images/partnersAndOrganizers/international-conference-alerts-logo.png"
                                    alt="International Conference Alerts"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                    loading="eager"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vendor Registration CTA Section */}
            <section className="bg-gray-900 text-white py-16 mb-8">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold">
                        The Vendor Registration
                    </h2>
                    <Link
                        href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICECD2025%2FSubmission%2FIndex"
                        target="_blank"
                        className="mt-6 inline-block rounded-xl bg-white px-8 py-3 text-gray-900 font-semibold hover:bg-gray-100"
                    >
                        Submit Abstract Here
                    </Link>
                    <p className="mt-6 text-gray-300">
                        Want to register your stall?{" "}
                        <Link href="/vendor-registration" className="underline">
                            Register Now
                        </Link>
                    </p>
                </div>
            </section>

        </main>
    );
}
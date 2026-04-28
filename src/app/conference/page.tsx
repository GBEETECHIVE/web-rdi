"use client";
import Link from "next/link";
import HeroSlideshow from "@/components/hero-slideshow";
import Image from "next/image";
import { useState } from "react";
import Card from "@/components/sections/conference/card";
import { collabpartners, impactpartners, impactPartnersNew, knowledgepartners, themes, speakers, concurrentSpeakers, concurrentSpeakers2, plenarySpeakers } from "@/components/sections/conference/data/data";

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
                            { src: "/images/Slides/1.jpg", alt: "Slide 1" },
                            { src: "/images/update/after 1.png", alt: "Slide 1 After" },
                            { src: "/images/Slides/2.jpg", alt: "Slide 2" },
                            { src: "/images/update/after 2.png", alt: "Slide 2 After" },
                            { src: "/images/Slides/3.png", alt: "Slide 3" },
                            { src: "/images/update/after 3.png", alt: "Slide 3 After" },
                            { src: "/images/update/4 new.png", alt: "Slide 4" },
                            { src: "/images/update/after 4.png", alt: "Slide 4 After" },
                            { src: "/images/Slides/5.jpg", alt: "Slide 5" },
                            { src: "/images/update/after 5.png", alt: "Slide 5 After" },
                            { src: "/images/Slides/6.jpg", alt: "Slide 6" },
                            { src: "/images/Slides/8.jpg", alt: "Slide 8" },
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

                                    {/* Plenary role */}
                                    {plenary.roles.map((roleGroup, rIndex) => (
                                        <div key={rIndex} className="mb-10">

                                            {/* Role Title */}
                                            <div className="text-center mb-6">
                                                <h3 className="text-lg sm:text-xl font-bold text-[#1f2937]">
                                                    {roleGroup.role}
                                                </h3>
                                            </div>

                                            {/* People */}
                                            <div className="grid md:grid-cols-2 gap-6">
                                                {roleGroup.people.map((p, i) => (
                                                    <Card plenary={plenary} p={p} key={i} />
                                                ))}
                                            </div>

                                        </div>
                                    ))}
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
                    
                    
                        <div className="text-center mb-10">
                            <h3 className="text-2xl sm:text-3xl font-bold text-blue-800">
                            DAY-2 — CONCURRENT SESSION: Early Learning Opportunities (concurrent)
                             </h3>
                            <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded"></div>
                        </div>
                    {concurrentSpeakers.map((session, i) => (
                        <div key={i}>


                            {/* Roles */}
                            {session.roles.map((roleGroup, rIndex) => (
                                <div key={rIndex} className="mb-10">

                                    <h4 className="text-lg font-bold text-center mb-6">
                                        {roleGroup.role}
                                    </h4>

                                    <div className="flex flex-wrap gap-6">
                                        {roleGroup.people.map((p, i) => (
                                            <Card plenary={session} p={p} key={i} />
                                        ))}
                                         
                                    </div>

                                </div>
                            ))}

                        </div>
                    ))}
                   

                    {/* <p className="mt-10 text-center text-gray-500 italic">
                        …and more presenters to be announced
                    </p> */}
                </div>
            </section>
            {/* DAY-2 — Roundtable on the Operationalization of the National ECD Policy Framework with Provincial Ministers and Other Government Officials Facilitated by Key ECD
 */}


            <section id="speakers" className="py-16 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Heading */}
                    <div className="text-center max-w-7xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
                            DAY-2 — Roundtable on the Operationalization of the National ECD Policy Framework with Provincial Ministers and Other Government Officials Facilitated by Key ECD
                        </h2>

                    </div>
                    {concurrentSpeakers2.map((session, index) => (
                        <div key={index} className="mt-16">
                            {session.roles.map((roleGroup, rIndex) => (
                                <div key={rIndex} className="mb-10">

                                    <h4 className="text-lg font-bold text-center mb-6">
                                        {roleGroup.role}
                                    </h4>

                                    <div className="flex flex-wrap gap-6">
                                        {roleGroup.people.map((p, i) => (
                                            <Card plenary={session} p={p} key={i} />
                                        ))}

                                    </div>

                                </div>
                            ))}
                        </div>
                    ))}
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
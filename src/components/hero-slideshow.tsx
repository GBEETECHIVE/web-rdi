"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

type Slide = {
    src: string
    alt: string
}

export default function HeroSlideshow({
    slides,
    intervalMs = 5000,
    showArrows = true,
    overlayClassName = "",
    children,
}: {
    slides: Slide[]
    intervalMs?: number
    showArrows?: boolean
    overlayClassName?: string
    children?: React.ReactNode
}) {
    const safeSlides = useMemo(() => (slides.length > 0 ? slides : []), [slides])
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        if (safeSlides.length <= 1) return

        const id = window.setInterval(() => {
            setActiveIndex((i) => (i + 1) % safeSlides.length)
        }, intervalMs)

        return () => window.clearInterval(id)
    }, [intervalMs, safeSlides.length])

    if (safeSlides.length === 0) return null

    const goNext = () => setActiveIndex((i) => (i + 1) % safeSlides.length)
    const goPrev = () => setActiveIndex((i) => (i - 1 + safeSlides.length) % safeSlides.length)

    return (
        <div className="relative w-full h-full">
            {safeSlides.map((slide, idx) => (
                <div
                    key={`${slide.src}-${idx}`}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === activeIndex ? "opacity-100" : "opacity-0"
                        }`}
                    aria-hidden={idx !== activeIndex}
                >
                    <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 650px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        priority={idx === 0}
                    />
                </div>
            ))}



            {showArrows && safeSlides.length > 1 ? (
                <>
                    <button
                        type="button"
                        onClick={goPrev}
                        className="absolute left-4 top-2/3 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-transform hover:scale-105 "
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-slate-900" />
                    </button>
                    <button
                        type="button"
                        onClick={goNext}
                        className="absolute right-4 top-2/3 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-transform hover:scale-105"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-slate-900" />
                    </button>
                </>
            ) : null}

            {children ? (
                <div className={`absolute inset-0 z-10 flex items-center justify-center ${overlayClassName}`}>{children}</div>
            ) : null}

            {safeSlides.length > 1 ? (
                <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 z-20">
                    {safeSlides.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            className={`h-2 w-2 rounded-full transition-all ${idx === activeIndex ? "bg-white" : "bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            ) : null}
        </div>
    )
}
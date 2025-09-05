"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Stat = {
  icon: string;
  number: number;
  label: string;
  showPlus?: boolean;
};

const stats: Stat[] = [
  {
    icon: "/fonts/icons/tree-solid-full.svg",
    number: 21_000_000,
    label: "Number of trees planted",
  },
  {
    icon: "/fonts/icons/children-solid-full.svg",
    number: 1_000_000,
    label: "Indirect beneficiaries",
  },
  {
    icon: "/fonts/icons/hands-holding-child-solid-full.svg",
    number: 38_000,
    label: "Livelihood supported",
    showPlus: true,
  },
  {
    icon: "/fonts/icons/women.svg",
    number: 12_000,
    label: "Number of women trained",
    showPlus: true,
  },
  {
    icon: "/fonts/icons/users-line-solid-full.svg",
    number: 1800,
    label: "Total directly employed",
    showPlus: true,
  },
];

function useInView(
  ref: React.RefObject<HTMLElement | null>,
  rootMargin = "0px"
) {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // only run once
        }
      },
      { rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return isVisible;
}

function useCountUp(to: number, start: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percent = Math.min(progress / duration, 1);
      setCount(Math.floor(percent * to));
      if (percent < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    requestAnimationFrame(step);
  }, [start, to, duration]);

  return count;
}

export default function Counter() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
        {stats.map((stat, idx) => {
          const count = useCountUp(stat.number, isInView, 2000);
          return (
            <div key={idx} className="flex flex-col items-center">
              <Image
                src={stat.icon}
                alt={stat.label}
                width={40}
                height={40}
                className="mb-4"
              />
              <h3 className="text-2xl font-bold bg-[linear-gradient(116deg,#3dae30,#ffc50d)] bg-clip-text text-transparent">
                {count.toLocaleString()}
                {stat.showPlus && "+"}
              </h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

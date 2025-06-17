"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

function ArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 20l1.41-1.41L7.83 13H20v-2H7.83l5.58-5.59L12 4l-8 8z" />
    </svg>
  );
}

function Slide1() {
  return (
    <div className="w-screen h-dvh grid sm:grid-cols-2 gap-4 sm:gap-12 bg-[url(/imagenes/marble.webp)] bg-cover bg-center p-8 pt-14 sm:p-14 slides">
      <div className="place-self-center">
        <h1 className="text-5xl mb-4 sm:mb-8 font-bold font-mono">La mejor elección cuando se trata de tu hogar</h1>
        <Link
          href="/productos"
          className="inline-flex items-center justify-center align-middle pl-5.5 pr-4.5 py-3.5 rounded-lg bg-cs-red gap-2 transition duration-500 hover:shadow-[inset_rgba(12,12,12,1)_260px_0px_0px_0px] hover:text-white"
        >
          Ver nuestros productos!
          <ArrowRight />
        </Link>
      </div>
      <div className="place-self-center">
        <Image className="w-70 h-70 sm:h-112.5 sm:w-112.5" width={450} height={450} src="/logos/logo-white.svg" alt="Logo de Corralon Artesan en blanco" />
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div className="w-screen h-dvh flex flex-col gap-4 items-baseline justify-end bg-[url(/imagenes/baño.jpg)] bg-cover bg-center p-8 pt-14 sm:p-14 slides">
      <h1 className="text-5xl font-bold font-mono">BAÑO</h1>
      <Link href="/productos/banos" className="bg-cs-red hover:bg-black py-2 px-4 hover:text-white focus:text-white rounded-full transition duration-300">Ver Más</Link>
    </div>
  );
}

function Slide3() {
  return (
    <div className="w-screen h-dvh flex flex-col gap-4 items-baseline bg-[url(/imagenes/ceramicos.webp)] bg-cover bg-center p-8 pt-14 sm:p-14 slides">
      <h1 className="text-5xl font-bold font-mono">CERÁMICOS</h1>
      <a href="/productos/construccion/ceramicos" className="bg-cs-red hover:bg-black py-2 px-4 hover:text-white focus:text-white rounded-full transition duration-300">Ver Más</a>
    </div>
  );
}

function updateTabIndexes(container: HTMLDivElement | null) {
  if (!container) return;
  for (let i = 0; i < container.children.length; i++) {
    const slide = container.children[i] as HTMLElement;
    const focusableElements = slide.querySelectorAll<HTMLElement>(
      "a, button, input, select, textarea, [tabindex]"
    );
    if (i === 1) {
      focusableElements.forEach(el => {
        el.setAttribute("tabindex", "0");
        el.removeAttribute("aria-hidden");
      });
    } else {
      focusableElements.forEach(el => {
        el.setAttribute("tabindex", "-1");
        el.setAttribute("aria-hidden", "true");
      });
    }
  }
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isTransitioningRef = useRef(false);

  const slideNext = () => {
    const container = containerRef.current;
    if (!container || isTransitioningRef.current) return;

    isTransitioningRef.current = true;

    container.style.transition = "margin-left 0.8s ease-in-out";
    container.style.marginLeft = "-200%";

    setTimeout(() => {
      if (!container) return;
      container.appendChild(container.children[0]);
      container.style.transition = "none";
      container.style.marginLeft = "-100%";
      isTransitioningRef.current = false;

      updateTabIndexes(container);
    }, 800);
  };

  const slidePrev = () => {
    const container = containerRef.current;
    if (!container || isTransitioningRef.current) return;

    isTransitioningRef.current = true;
    container.style.transition = "margin-left 0.8s ease-in-out";
    container.style.marginLeft = "0";

    setTimeout(() => {
      if (!container) return;
      container.style.transition = "none";
      container.insertBefore(container.children[container.children.length - 1], container.children[0]);
      container.style.marginLeft = "-100%";

      isTransitioningRef.current = false;

      updateTabIndexes(container);
    }, 800);
  };

  useEffect(() => {
    const container = containerRef.current;
    updateTabIndexes(container); // Set inicial

    const startAutoPlay = () => {
      intervalRef.current = setInterval(() => {
        slideNext();
      }, 8000);
    };

    startAutoPlay();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleArrowClick = (direction: "next" | "prev") => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (direction === "next") {
      slideNext();
    } else {
      slidePrev();
    }

    intervalRef.current = setInterval(() => {
      slideNext();
    }, 8000);
  };

  return (
    <section className="relative w-screen h-dvh overflow-hidden">
      <div
        ref={containerRef}
        className="flex w-[300vw] h-full ml-[-100%]"
      >
        <Slide3 />
        <Slide1 />
        <Slide2 />
      </div>

      <button
        aria-label="Slide anterior"
        onClick={() => handleArrowClick("prev")}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/75 hover:bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-80 transition"
      >
        <ArrowLeft />
      </button>

      <button
        aria-label="Slide siguiente"
        onClick={() => handleArrowClick("next")}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/75 hover:bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-80 transition"
      >
        <ArrowRight />
      </button>
    </section>
  );
}

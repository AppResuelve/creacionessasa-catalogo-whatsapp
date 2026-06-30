"use client";
import Link from "next/link";
import { Container } from "./Container";

import { WaveDivider } from "./WaveDivider";

export function Hero() {
  return (
    <section className="relative pt-18 md:pb-24 bg-[var(--color-secondary-light)] min-h-[95vh] md:min-h-screen md:flex md:flex-col">
      <Container className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center md:h-full">
          <div className="order-2 md:order-1 text-left">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-primary)] mb-6">
              Blanquería artesanal para bebés
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.08] text-[var(--color-text-primary)] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Cada pieza confeccionada como si fuera para nuestro propio bebé.
            </h1>
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--color-primary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "var(--color-primary-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-primary)")
              }
            >
              Ver colección
            </Link>
          </div>
          <div className="order-1 md:order-2 md:h-full">
            <img
              src="/home/hero.jpeg"
              alt="Blanquería artesanal para bebés"
              className="w-full h-[220px] md:h-full md:min-h-[500px] object-cover rounded-lg md:rounded-3xl"
            />
          </div>
        </div>
      </Container>
      <WaveDivider fillColor="var(--color-background)" />
      <img
        src="/logotipo-buho.webp"
        alt="Creaciones Sasa"
        className="absolute left-1/2 -translate-x-1/2 -bottom-4 md:bottom-[80px] w-[200px] z-20"
      />
    </section>
  );
}

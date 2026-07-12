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
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.08] text-[var(--color-text-primary)] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Blanquearía para bebés.
              <br />
              Hecho a mano, creado con amor.
            </h1>
            <Link
              href="/productos"
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-colors"
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
              className="w-full h-[350px] md:h-full md:min-h-[500px] object-cover rounded-lg md:rounded-3xl"
            />
          </div>
        </div>
      </Container>
      <WaveDivider fillColor="var(--color-background)" />
      <Link
        href="/productos"
        className="absolute bottom-0 left-0 right-0 flex justify-center pb-7 md:hidden z-20"
      >
        <span
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-colors"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          Ver colección
        </span>
      </Link>

    </section>
  );
}

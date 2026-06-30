"use client";
import Link from "next/link";
import { Container } from "./Container";

const categories = [
  {
    name: "Accesorios bebé",
    href: "/productos?categoria=accesorios-bebe",
    image: "/home/accesorios-bebe.jpeg",
    description:
      "Los detalles que hacen única cada pieza. Baberos, mantitas y más.",
  },
  {
    name: "Mantas",
    href: "/productos?categoria=mantas",
    image: "/home/mantas.jpeg",
    description: "Suaves, abrigadas, para envolver con amor.",
  },
  {
    name: "Hora del baño",
    href: "/productos?categoria=hora-del-bano",
    image: "/home/hora-del-bano.jpeg",
    description: "Toallones, batitas y accesorios para después del baño.",
  },
];

export function CategoryShowcase() {
  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <div className="flex flex-col gap-24 md:gap-32">
          {categories.map((cat, i) => {
            const alt = i % 2 === 1;
            return (
              <div
                key={cat.name}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                <div className={alt ? "md:order-2" : ""}>
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-[280px] md:h-[500px] rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h3
                    className="text-3xl md:text-4xl font-light text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {cat.name}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-md">
                    {cat.description}
                  </p>
                  <Link
                    href={cat.href}
                    className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors flex items-center gap-1.5"
                  >
                    Ver {cat.name.toLowerCase()}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

"use client";
import { Container } from "./Container";

export function StorySection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-secondary-light)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2
              className="text-3xl md:text-4xl font-light text-[var(--color-text-primary)] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Hace más de 15 años que cada puntada tiene un propósito.
            </h2>
            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                Creaciónes Sasa nace de la pasión por crear, puntada tras puntada, ajuares soñados por familias, en el momento más especial de sus vidas, como es la llegada de un hijo.
                Hace más de 15 años que nuestro propósito es ser parte de esa ilusión.
                Gracias por elegir el valor de lo artesanal
              </p>
            </div>
          </div>
          <div>
            <img
              src="/home/taller2.jpeg"
              alt="Taller de Creaciones Sasa"
              className="w-full h-[350px] md:h-[500px] rounded-lg object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

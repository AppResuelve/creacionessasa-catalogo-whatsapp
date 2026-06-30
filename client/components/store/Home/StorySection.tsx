"use client";
import { Container } from "./Container";

export function StorySection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-secondary-light)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
              Nuestra historia
            </span>
            <h2
              className="text-3xl md:text-4xl font-light text-[var(--color-text-primary)] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Hace más de 15 años que cada puntada tiene un propósito.
            </h2>
            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                Creaciones Sasa nació de la mano de Sandra, quien descubrió en
                la costura una forma de acompañar a otras mamás en el momento
                más especial de sus vidas.
              </p>
              <p>
                Cada pieza está pensada, cortada y cosida con la misma
                dedicación que pondrías al preparar el cuarto de tu propio bebé.
                Sin apuros, sin atajos.
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

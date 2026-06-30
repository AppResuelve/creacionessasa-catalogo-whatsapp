'use client'
import { Container } from './Container'

const benefits = [
  {
    title: 'Hecho artesanalmente',
    description: 'Cada costura es real. Nada de producción en serie. Cada pieza pasa por las manos de quien la diseña.',
  },
  {
    title: 'Personalizamos nombres',
    description: 'Bordamos el nombre del bebé en acolchados, toallones, sábanas. Un detalle que convierte cada pieza en única.',
  },
  {
    title: 'Materiales suaves',
    description: 'Solo usamos telas hipoalergénicas, livianas y respetuosas con la piel del recién nacido.',
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-surface)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {benefits.map((b) => (
            <div key={b.title}>
              <h3
                className="text-xl md:text-2xl font-light text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {b.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

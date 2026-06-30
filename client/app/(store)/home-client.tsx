"use client";
import { Container } from "@/components/store/Home/Container";
import { Hero } from "@/components/store/Home/Hero";
import { SectionTitle } from "@/components/store/Home/SectionTitle";
import { CategoryShowcase } from "@/components/store/Home/CategoryShowcase";
import { StorySection } from "@/components/store/Home/StorySection";
import { FeaturedProducts } from "@/components/store/Home/FeaturedProducts";
import { BenefitsSection } from "@/components/store/Home/BenefitsSection";
import { GallerySection } from "@/components/store/Home/GallerySection";
import { CTASection } from "@/components/store/Home/CTASection";

export default function HomeClient() {
  return (
    <main>
      <Hero />

      <Container>
        <SectionTitle
          badge="Categorías"
          title="Para cada momento"
          subtitle="Cada rincón del cuarto merece la misma dedicación."
        />
      </Container>
      <CategoryShowcase />

      <StorySection />

      <Container>
        <SectionTitle
          title="Productos destacados"
          subtitle="Nuestras piezas más elegidas por las mamás."
        />
      </Container>
      <FeaturedProducts />

      <BenefitsSection />

      <GallerySection />

      <CTASection />
    </main>
  );
}

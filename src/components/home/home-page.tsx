import { AccessSection } from "./-components/access-section";
import { BenefitsSection } from "./-components/benefits-section";
import { FloatingWhatsApp } from "./-components/floating-whatsapp";
import { Footer } from "./-components/footer";
import { Header } from "./-components/header";
import { Hero } from "./-components/hero";

export function HomePage() {
  return (
    <div class="overflow-clip bg-mm-bone font-features-['ss01','cv11'] text-mm-ink [&_a:focus-visible]:outline-3 [&_a:focus-visible]:outline-mm-gold [&_button:focus-visible]:outline-offset-4">
      <a
        class="fixed -top-20 left-4 z-50 bg-white px-4 py-3 font-bold text-mm-navy-ink transition-[top] duration-160 ease-out"
        href="#contenido-principal"
      >
        Saltar al contenido principal
      </a>
      <Header />
      <main
        id="contenido-principal"
        tabindex="-1"
      >
        <Hero />
        <AccessSection />
        <BenefitsSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

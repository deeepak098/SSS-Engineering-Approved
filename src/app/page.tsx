
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { StatsSection } from '@/components/home/StatsSection';
import { ProductGrid } from '@/components/home/ProductGrid';
import { Logistics } from '@/components/home/Logistics';
import { ContactSection } from '@/components/home/ContactSection';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <ProductGrid />
        <Logistics />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

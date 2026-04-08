
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ProductGrid } from '@/components/home/ProductGrid';
import { Logistics } from '@/components/home/Logistics';
import { BlogSection } from '@/components/home/BlogSection';
import { ContactSection } from '@/components/home/ContactSection';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductGrid />
        <Logistics />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

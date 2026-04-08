import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Logistics } from '@/components/home/Logistics';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Export & Logistics',
  description: 'Reliable international shipping and logistics management for industrial machinery in over 50 countries.',
};

export default function LogisticsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-foreground py-20 text-white">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="font-headline font-extrabold text-5xl mb-4 text-primary">Global Logistics</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Connecting continents with a robust supply chain and strategic partnerships across over 50 countries.
            </p>
          </div>
        </section>
        <Logistics />
      </main>
      <Footer />
    </div>
  );
}

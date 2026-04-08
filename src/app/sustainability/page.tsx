import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Sustainability } from '@/components/home/Sustainability';

export default function SustainabilityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="font-headline font-extrabold text-5xl mb-4">Sustainability</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to a greener planet through recycled materials and energy-efficient manufacturing processes.
            </p>
          </div>
        </section>
        <Sustainability />
      </main>
      <Footer />
    </div>
  );
}

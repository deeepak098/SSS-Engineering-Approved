import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductGrid } from '@/components/home/ProductGrid';
import { EggTrayFeatures } from '@/components/home/EggTrayFeatures';

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="font-headline font-extrabold text-5xl mb-4">Our Products</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our range of industrial machinery and sustainable packaging solutions engineered for global performance.
            </p>
          </div>
        </section>
        <ProductGrid />
        <EggTrayFeatures />
      </main>
      <Footer />
    </div>
  );
}

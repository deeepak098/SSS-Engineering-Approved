"use client"

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { useContent } from '@/context/ContentContext';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function ProductGrid() {
  const { content } = useContent();

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-primary font-headline font-extrabold text-4xl md:text-5xl leading-tight">
              High-Precision <br />
              <span className="text-foreground">Machinery Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Engineered for excellence, our products set the global standard for industrial efficiency.
            </p>
          </div>
          <button className="hidden md:flex items-center text-primary font-headline font-bold text-sm tracking-widest mt-8 md:mt-0 hover:translate-x-2 transition-transform">
            VIEW ALL PRODUCTS <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.products.map((product) => {
            const imgData = PlaceHolderImages.find(img => img.id === product.image);
            return (
              <Card key={product.id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-[300px] overflow-hidden">
                  {imgData && (
                    <Image
                      src={imgData.imageUrl}
                      alt={imgData.description}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-headline font-bold text-2xl text-white mb-2">{product.title}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">{product.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
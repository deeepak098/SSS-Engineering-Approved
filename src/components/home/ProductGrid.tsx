
"use client"

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { useContent } from '@/context/ContentContext';
import { Button } from '@/components/ui/button';

export function ProductGrid() {
  const { content } = useContent();

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <div className="w-12 h-1 bg-primary mb-6" />
          <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            Products & Machinery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Industrial-grade pulp molding machines engineered for reliability, high output, and minimal downtime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {content.products.map((product) => {
            return (
              <Card key={product.id} className="overflow-hidden border border-border bg-white rounded-none shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-[300px] md:h-[400px]">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    className="object-cover"
                    data-ai-hint={product.imageHint}
                  />
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-headline font-bold text-2xl text-foreground">{product.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-1">
                    <div className="bg-muted/30 p-4 space-y-1">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Capacity</span>
                      <div className="text-sm font-bold text-foreground leading-tight">{product.specs?.capacity || "N/A"}</div>
                    </div>
                    <div className="bg-muted/30 p-4 space-y-1">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Power</span>
                      <div className="text-sm font-bold text-foreground leading-tight">{product.specs?.power || "N/A"}</div>
                    </div>
                    <div className="bg-muted/30 p-4 space-y-1">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Molds</span>
                      <div className="text-sm font-bold text-foreground leading-tight">{product.specs?.molds || "N/A"}</div>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-none py-6 h-auto tracking-wide">
                    Get Pricing
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

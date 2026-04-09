
"use client"

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { useContent } from '@/context/ContentContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ProductGrid() {
  const { content } = useContent();

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <div className="w-12 h-1 bg-primary mb-6" />
          <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-foreground mb-4 uppercase tracking-tight">
            Industrial Machinery
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed font-body">
            High-performance pulp molding and precision machinery engineered for reliability, output efficiency, and minimal downtime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.products.map((product) => {
            return (
              <Card key={product.id} className="overflow-hidden border border-border bg-white rounded-none shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="relative h-[220px] w-full">
                  <Image
                    src={product.imageUrl}
                    alt={product.altText || product.title}
                    fill
                    className="object-cover"
                    data-ai-hint={product.imageHint}
                  />
                </div>
                <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-headline font-bold text-xl text-foreground leading-tight uppercase tracking-tight">{product.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 font-body">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-1">
                      <div className="bg-muted/40 p-3 space-y-1 text-center">
                        <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider block font-headline">Capacity</span>
                        <div className="text-[11px] font-extrabold text-foreground leading-none font-body">{product.specs?.capacity || "N/A"}</div>
                      </div>
                      <div className="bg-muted/40 p-3 space-y-1 text-center">
                        <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider block font-headline">Power</span>
                        <div className="text-[11px] font-extrabold text-foreground leading-none font-body">{product.specs?.power || "N/A"}</div>
                      </div>
                      <div className="bg-muted/40 p-3 space-y-1 text-center">
                        <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider block font-headline">Molds</span>
                        <div className="text-[11px] font-extrabold text-foreground leading-none font-body">{product.specs?.molds || "N/A"}</div>
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-none py-6 h-auto tracking-[0.2em] text-xs uppercase font-headline" asChild>
                      <Link href="/contact">Get Pricing</Link>
                    </Button>
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

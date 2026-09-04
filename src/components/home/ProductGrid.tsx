"use client"

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { useContent } from '@/context/ContentContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ProductGrid() {
  const { content } = useContent();

  return (
    <section id="machinery" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 space-y-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="w-12 h-1.5 bg-primary shrink-0" />
            <span className="text-xs font-headline font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 shrink-0">
              Global Machinery Export
            </span>
            <span className="text-[11px] font-headline font-bold text-neutral-600 uppercase tracking-wider bg-neutral-100 px-3 py-1 border border-neutral-200">
              For international buyers & distributors
            </span>
          </div>
          <h2 className="font-headline font-black text-3xl sm:text-4xl text-[#1A1A1A] uppercase tracking-tight">
            Industrial Machinery
          </h2>
          <p className="text-neutral-600 text-base max-w-2xl leading-relaxed font-body">
            High-precision pulp molding equipment and industrial paper processing machinery engineered for continuous heavy-duty throughput. <span className="font-semibold text-neutral-800">Exported worldwide to manufacturing plants and commercial distributors.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.products.map((product) => {
            return (
              <Card key={product.id} className="overflow-hidden border border-border bg-white rounded-none shadow-none hover:border-neutral-400 transition-all duration-200 flex flex-col h-full">
                <div className="relative h-[230px] w-full bg-neutral-100 border-b border-border">
                  <Image
                    src={product.imageUrl}
                    alt={product.altText || product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-headline font-black text-xl text-[#1A1A1A] leading-tight uppercase tracking-tight">
                      {product.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed font-body min-h-[44px] line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-5">
                    {/* 3-column spec table strip with responsive mobile font scaling */}
                    <div className="grid grid-cols-1 xs:grid-cols-3 gap-2">
                      <div className="bg-[#F5F5F5] p-2.5 sm:p-3 text-center border border-border/50">
                        <span className="text-[9px] sm:text-[10px] font-headline font-bold text-neutral-500 uppercase tracking-widest block mb-1">Capacity</span>
                        <div className="text-[11px] sm:text-xs font-headline font-black text-[#1A1A1A] leading-tight break-words">{product.specs?.capacity || "N/A"}</div>
                      </div>
                      <div className="bg-[#F5F5F5] p-2.5 sm:p-3 text-center border border-border/50">
                        <span className="text-[9px] sm:text-[10px] font-headline font-bold text-neutral-500 uppercase tracking-widest block mb-1">Power</span>
                        <div className="text-[11px] sm:text-xs font-headline font-black text-[#1A1A1A] leading-tight break-words">{product.specs?.power || "N/A"}</div>
                      </div>
                      <div className="bg-[#F5F5F5] p-2.5 sm:p-3 text-center border border-border/50">
                        <span className="text-[9px] sm:text-[10px] font-headline font-bold text-neutral-500 uppercase tracking-widest block mb-1">Molds</span>
                        <div className="text-[11px] sm:text-xs font-headline font-black text-[#1A1A1A] leading-tight break-words">{product.specs?.molds || "N/A"}</div>
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-headline font-extrabold rounded-none py-6 h-auto tracking-widest text-xs uppercase" asChild>
                      <Link href="/contact">GET PRICING</Link>
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

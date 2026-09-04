"use client"

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useContent } from '@/context/ContentContext';
import Link from 'next/link';

export function Hero() {
  const { content } = useContent();

  return (
    <section className="relative h-[620px] md:h-[750px] w-full flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      <Image
        src={content.hero.imageUrl || "https://thumbs.dreamstime.com/b/complex-network-industrial-pipelines-valves-machinery-inside-chemical-plant-interconnected-metal-pipes-processing-437487093.jpg"}
        alt={content.hero.altText || "Industrial factory machinery with dark overlay"}
        fill
        priority
        className="object-cover object-center brightness-75"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="font-headline font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-tight uppercase tracking-tight">
            INNOVATING<br className="sm:hidden" /> INDUSTRIAL<br className="hidden sm:inline" /> SOLUTIONS
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-body max-w-3xl mx-auto leading-relaxed">
            {content.hero.description || "Domestic manufacturer of premium recycled paper egg trays and global exporter of high-precision pulp molding machinery."}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button size="lg" className="w-full sm:w-auto font-headline font-extrabold px-10 py-7 text-sm sm:text-base bg-primary hover:bg-primary/90 text-white rounded-none tracking-widest uppercase transition-all duration-200" asChild>
              <Link href="/contact">EXPLORE OUR SOLUTIONS</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto font-headline font-extrabold px-10 py-7 text-sm sm:text-base text-white border-2 border-white bg-transparent hover:bg-white hover:text-[#1A1A1A] rounded-none tracking-widest uppercase transition-all duration-200" asChild>
              <Link href="/products">LEARN MORE</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client"

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useContent } from '@/context/ContentContext';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const { content } = useContent();
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative h-[600px] md:h-[800px] w-full flex items-center justify-center overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="font-headline font-extrabold text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
            {content.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-body max-w-2xl mx-auto">
            {content.hero.description}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="font-headline font-bold px-10 py-7 text-lg bg-primary hover:bg-primary/90">
              {content.hero.cta}
            </Button>
            <Button size="lg" variant="outline" className="font-headline font-bold px-10 py-7 text-lg text-white border-white hover:bg-white/10">
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

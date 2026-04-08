
"use client"

import Image from 'next/image';
import { useContent } from '@/context/ContentContext';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Logistics() {
  const { content } = useContent();
  const mapImage = PlaceHolderImages.find(img => img.id === 'global-map');

  return (
    <section id="logistics" className="py-24 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {mapImage && (
          <Image
            src={mapImage.imageUrl}
            alt="World Map Background"
            fill
            className="object-contain"
            data-ai-hint={mapImage.imageHint}
          />
        )}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-white">
            {content.logistics.title}
          </h2>
          <p className="text-white/70 text-lg">
            {content.logistics.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {content.logistics.stats.map((stat, i) => (
            <div key={i} className="text-center space-y-2 group">
              <div className="text-primary font-headline font-extrabold text-6xl md:text-7xl group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-white font-headline font-bold text-lg uppercase tracking-widest opacity-80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

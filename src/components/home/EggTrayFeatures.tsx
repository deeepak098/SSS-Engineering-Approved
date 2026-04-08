
"use client"

import Image from 'next/image';
import { useContent } from '@/context/ContentContext';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

export function EggTrayFeatures() {
  const { content } = useContent();
  const eggTrayImage = PlaceHolderImages.find(img => img.id === 'egg-tray-hero');

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {eggTrayImage && (
              <Image
                src={eggTrayImage.imageUrl}
                alt={eggTrayImage.description}
                fill
                className="object-cover"
                data-ai-hint={eggTrayImage.imageHint}
              />
            )}
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-headline font-bold tracking-widest text-sm">SUSTAINABLE PRODUCTS</span>
              <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-foreground leading-tight">
                {content.eggTray.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {content.eggTray.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.eggTray.features.map((feature, i) => (
                <div key={i} className="flex items-center space-x-3 p-4 bg-background rounded-xl border border-border hover:border-primary/50 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="font-body font-semibold text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

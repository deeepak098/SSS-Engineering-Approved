"use client"

import Image from 'next/image';
import { useContent } from '@/context/ContentContext';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Leaf, Recycle, Sun } from 'lucide-react';

export function Sustainability() {
  const { content } = useContent();
  const sustainImage = PlaceHolderImages.find(img => img.id === 'sustainability');

  return (
    <section id="sustainability" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
            {sustainImage && (
              <Image
                src={sustainImage.imageUrl}
                alt={sustainImage.description}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-primary/20" />
          </div>
          
          <div className="lg:w-1/2 p-8 md:p-16 space-y-8">
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-foreground">
              {content.sustainability.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content.sustainability.description}
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Leaf, title: "Eco-Friendly Materials", desc: "Using only 100% biodegradable and recyclable resources." },
                { icon: Recycle, title: "Circular Economy", desc: "Our waste reduction systems recycle 95% of byproduct materials." },
                { icon: Sun, title: "Clean Energy", desc: "Powering our main hubs with solar and wind technology." }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-lg text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
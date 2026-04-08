
"use client"

import Image from 'next/image';
import { useContent } from '@/context/ContentContext';
import { Globe, Ship, ShieldCheck, FileCheck } from 'lucide-react';

const IconMap = {
  Globe: Globe,
  Ship: Ship,
  ShieldCheck: ShieldCheck,
  FileCheck: FileCheck,
};

export function Logistics() {
  const { content } = useContent();

  return (
    <section id="logistics" className="py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="w-12 h-1 bg-primary mb-6" />
          <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-foreground mb-4">
            {content.logistics.title}
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
            {content.logistics.description}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[300px] md:h-[450px] mb-0 overflow-hidden shadow-sm">
          <Image
            src={content.logistics.imageUrl}
            alt="Global Export Logistics"
            fill
            className="object-cover"
            data-ai-hint={content.logistics.imageHint}
          />
        </div>

        {/* Features Grid */}
        <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-x border-b border-border">
          {content.logistics.features.map((feature, i) => {
            const IconComponent = IconMap[feature.iconName] || Globe;
            return (
              <div 
                key={i} 
                className="p-8 space-y-4 border-b md:border-b-0 md:border-r last:border-r-0 border-border"
              >
                <div className="p-3 w-fit">
                  <IconComponent className="h-8 w-8 text-primary" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-headline font-bold text-lg text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


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
    <section id="logistics" className="py-20 bg-[#f7f5f5]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="mb-10">
          <div className="w-12 h-1.5 bg-primary mb-6" />
          <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-foreground mb-4 uppercase tracking-tight">
            {content.logistics.title}
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed font-body">
            {content.logistics.description}
          </p>
        </div>

        {/* Strategic Banner Image */}
        <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden shadow-md border border-border">
          <Image
            src={content.logistics.imageUrl}
            alt={content.logistics.altText || "Global Export Logistics Port"}
            fill
            className="object-cover"
            data-ai-hint={content.logistics.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Feature Grid - Optimized Size */}
        <div className="bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-x border-b border-border shadow-sm">
          {content.logistics.features.map((feature, i) => {
            const IconComponent = IconMap[feature.iconName] || Globe;
            return (
              <div 
                key={i} 
                className="p-6 md:p-8 space-y-4 border-b sm:border-r last:border-r-0 border-border group hover:bg-muted/10 transition-colors"
              >
                <div className="p-2.5 w-fit rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <IconComponent className="h-7 w-7 text-primary" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-headline font-bold text-base text-foreground uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">
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

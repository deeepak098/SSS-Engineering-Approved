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

  const features = content.logistics.features || [
    { title: "Worldwide Shipping", description: "Direct export fulfillment to over 30 countries across Asia, Africa, and South America.", iconName: "Globe" },
    { title: "FOB & CIF Terms", description: "Flexible global logistics management with complete freight handling and port insurance.", iconName: "Ship" },
    { title: "Quality Certified", description: "ISO 9001 quality assurance compliance on all exported industrial machinery.", iconName: "ShieldCheck" },
    { title: "Customs Clearance", description: "Complete documentation support including Certificates of Origin and CE compliance.", iconName: "FileCheck" },
  ];

  return (
    <section id="logistics" className="py-20 md:py-28 bg-[#F5F5F5] border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="mb-12 space-y-4">
          <div className="w-12 h-1.5 bg-primary" />
          <h2 className="font-headline font-black text-3xl sm:text-4xl text-[#1A1A1A] uppercase tracking-tight">
            {content.logistics.title || "Global Export & Logistics"}
          </h2>
          <p className="text-neutral-600 text-base max-w-2xl leading-relaxed font-body">
            {content.logistics.description || "End-to-end international freight management and logistics support delivering machinery safely across global ports."}
          </p>
        </div>

        {/* Full-width Landscape Photo */}
        <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden border border-border shadow-sm">
          <Image
            src={content.logistics.imageUrl || "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1600"}
            alt={content.logistics.altText || "Global shipping port with cargo containers"}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* 4-column Feature Row */}
        <div className="bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-x border-b border-border">
          {features.map((feature, i) => {
            const IconComponent = IconMap[feature.iconName as keyof typeof IconMap] || Globe;
            return (
              <div
                key={i}
                className="p-6 md:p-8 space-y-4 border-b sm:border-r last:border-r-0 border-border bg-white hover:bg-neutral-50 transition-colors"
              >
                <div className="p-3.5 w-fit bg-primary text-white rounded-none">
                  <IconComponent className="h-6 w-6" strokeWidth={2} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-headline font-black text-base text-[#1A1A1A] uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-body">
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

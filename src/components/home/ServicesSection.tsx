
"use client"

import { useContent } from '@/context/ContentContext';
import { Card, CardContent } from '@/components/ui/card';
import { Settings, Ship, Wrench, Headphones, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const IconMap = {
  Settings: Settings,
  Ship: Ship,
  Wrench: Wrench,
  Headphones: Headphones,
};

export function ServicesSection() {
  const { content } = useContent();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <div className="w-12 h-1 bg-primary mb-6" />
          <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-foreground mb-4 uppercase tracking-tight">
            Our Expertise & Services
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed font-body">
            From initial concept to lifetime maintenance, SSS Engineering provides comprehensive technical support for your industrial success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.services.map((service) => {
            const IconComponent = IconMap[service.icon as keyof typeof IconMap] || Settings;
            return (
              <Card key={service.id} className="border border-border bg-muted/10 rounded-none hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8 space-y-6">
                  <div className="p-4 w-fit bg-primary/10 rounded-none group-hover:bg-primary transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-headline font-bold text-xl text-foreground uppercase tracking-wide leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body">
                      {service.description}
                    </p>
                  </div>
                  <Link href="/contact" className="inline-flex items-center text-primary font-bold text-xs tracking-widest uppercase hover:underline">
                    ENQUIRE NOW <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

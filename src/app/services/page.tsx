
"use client"

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ServicesSection } from '@/components/home/ServicesSection';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://picsum.photos/seed/services_hero/1920/1080"
            alt="Engineering Services"
            fill
            className="object-cover"
            data-ai-hint="industrial blueprint"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="font-headline font-extrabold text-5xl mb-4 uppercase tracking-tighter">Engineering Services</h1>
            <p className="text-xl max-w-2xl mx-auto text-white/80 font-body">
              Precision design, global logistics, and lifetime support for your industrial infrastructure.
            </p>
          </div>
        </section>

        <ServicesSection />

        <section className="py-24 bg-muted/20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="font-headline font-bold text-3xl text-foreground uppercase tracking-tight">Our Deployment Process</h2>
                <div className="space-y-8 pt-4">
                  {[
                    { step: "01", title: "Consultation & Mapping", desc: "We analyze your regional waste resources and target market to design the optimal machine capacity." },
                    { step: "02", title: "Production & QA", desc: "Rigorous testing of pulp consistency and tray structural integrity before shipment." },
                    { step: "03", title: "Export & Transit", desc: "Secure container loading and management of all maritime and customs documentation." },
                    { step: "04", title: "Site Integration", desc: "Our engineers oversee installation and train your local staff for operational independence." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="text-primary font-headline font-extrabold text-4xl opacity-30">{item.step}</div>
                      <div className="space-y-1">
                        <h4 className="font-headline font-bold text-lg text-foreground uppercase">{item.title}</h4>
                        <p className="text-muted-foreground font-body">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[500px] border border-border shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/deployment_process/800/1000"
                  alt="Process Illustration"
                  fill
                  className="object-cover"
                  data-ai-hint="factory workflow"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

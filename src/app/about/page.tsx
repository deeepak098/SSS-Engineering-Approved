"use client"

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';
import { useContent } from '@/context/ContentContext';

export default function AboutPage() {
  const { content } = useContent();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-[400px] flex items-center justify-center">
          <Image
            src={content.about.imageUrl}
            alt="About SSS Engineering"
            fill
            className="object-cover"
            data-ai-hint={content.about.imageHint}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="font-headline font-extrabold text-5xl mb-4">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto text-white/80">
              Leading industrial excellence and sustainable innovation since 1995.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="font-headline font-bold text-3xl text-primary">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded on the principles of precision and integrity, SSS Engineering Solutions started as a small fabrication shop. Today, we are a global leader in providing high-performance machinery and sustainable packaging products.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our journey has been marked by continuous innovation, adapting to the changing needs of the industrial landscape while maintaining a steadfast commitment to environmental responsibility.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted p-8 rounded-2xl text-center space-y-2">
                  <div className="text-4xl font-extrabold text-primary">25+</div>
                  <div className="text-sm font-bold uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="bg-primary p-8 rounded-2xl text-center text-white space-y-2">
                  <div className="text-4xl font-extrabold">500+</div>
                  <div className="text-sm font-bold uppercase tracking-wider">Projects Completed</div>
                </div>
                <div className="bg-foreground p-8 rounded-2xl text-center text-white space-y-2">
                  <div className="text-4xl font-extrabold">100+</div>
                  <div className="text-sm font-bold uppercase tracking-wider">Global Patents</div>
                </div>
                <div className="bg-muted p-8 rounded-2xl text-center space-y-2">
                  <div className="text-4xl font-extrabold">24/7</div>
                  <div className="text-sm font-bold uppercase tracking-wider">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

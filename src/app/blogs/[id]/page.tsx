
"use client"

import { useParams } from 'next/navigation';
import { useContent } from '@/context/ContentContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';
import { Calendar, User, ArrowLeft, Share2, Printer } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BlogPostPage() {
  const params = useParams();
  const { content } = useContent();
  
  const blogId = typeof params.id === 'string' ? parseInt(params.id) : null;
  const blog = content.blogs.find(b => b.id === blogId);

  if (!blog) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-8 text-center bg-muted/20">
          <div className="space-y-6 max-w-md">
            <h1 className="text-4xl font-headline font-extrabold text-foreground">Blog Post Not Found</h1>
            <p className="text-muted-foreground font-body">The article you're looking for might have been moved or removed from our archive.</p>
            <Button asChild size="lg" className="font-headline font-bold">
              <Link href="/blogs">EXPLORE OTHER BLOGS</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Progress bar simulation for aesthetic */}
        <div className="h-1.5 w-full bg-muted sticky top-20 z-40">
           <div className="h-full bg-primary w-1/3" />
        </div>

        <article className="max-w-4xl mx-auto px-4 py-16 md:py-24">
          <div className="space-y-12">
            <div className="space-y-6">
              <Link href="/blogs" className="inline-flex items-center text-primary font-bold text-xs tracking-widest hover:underline uppercase font-headline">
                <ArrowLeft className="mr-2 h-4 w-4" /> BACK TO ALL BLOGS
              </Link>
              
              <div className="space-y-4">
                <span className="bg-primary text-white text-[10px] font-extrabold uppercase tracking-[0.2em] px-4 py-1.5 rounded-none inline-block">
                  {blog.category}
                </span>
                <h1 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] tracking-tight">
                  {blog.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 pt-4 text-muted-foreground text-sm font-body border-y border-border py-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-bold text-foreground/80">{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-2 border-l border-border pl-6">
                    <User className="h-4 w-4 text-primary" />
                    <span className="font-bold text-foreground/80">SSS Engineering Editorial</span>
                  </div>
                  <div className="flex items-center gap-4 ml-auto">
                    <button className="hover:text-primary transition-colors"><Share2 className="h-4 w-4" /></button>
                    <button className="hover:text-primary transition-colors"><Printer className="h-4 w-4" /></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[21/9] w-full shadow-2xl overflow-hidden border border-border">
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                fill
                className="object-cover"
                priority
                data-ai-hint={blog.imageHint}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-12 space-y-8">
                <p className="text-2xl md:text-3xl text-foreground font-headline font-bold leading-relaxed border-l-[6px] border-primary pl-8 py-2 bg-muted/10">
                  {blog.excerpt}
                </p>
                
                <div className="font-body text-lg leading-relaxed text-muted-foreground space-y-6">
                  <p>
                    As a global leader in industrial machinery, SSS Engineering Solutions is committed to providing our clients and the broader industry with deep technical insights. The landscape of sustainable manufacturing is evolving rapidly, driven by both regulatory shifts and a growing corporate responsibility toward the environment.
                  </p>
                  
                  <h3 className="text-2xl font-headline font-extrabold text-foreground pt-4">Technological Advancements</h3>
                  <p>
                    Our latest research into pulp molding technology has yielded significant breakthroughs in energy efficiency. By optimizing the thermal dynamics of our drying units, we've managed to reduce energy consumption by up to 15% without compromising on the structural integrity of the final recycled product.
                  </p>
                  
                  <p>
                    This is not just about cost-cutting; it's about building a circular economy that works. Our machines are designed to take raw waste paper and transform it into high-value packaging materials with minimal environmental footprint.
                  </p>

                  <div className="bg-foreground p-8 text-white rounded-none border-l-8 border-primary my-12">
                    <h4 className="font-headline font-extrabold text-xl mb-4 text-primary uppercase tracking-wider">Key Takeaway</h4>
                    <p className="text-white/80 italic font-body">
                      "Innovation in the industrial sector is no longer just about output speed; it's about the intelligence of the resource cycle. Sustainability is the new benchmark for engineering excellence."
                    </p>
                  </div>

                  <h3 className="text-2xl font-headline font-extrabold text-foreground pt-4">Global Impact & Logistics</h3>
                  <p>
                    The integration of smart logistics has further enhanced our ability to serve clients across over 30 countries. From the initial machine design to the final installation and after-sales support, every step is managed with precision. Our strategic partnerships in major ports allow for seamless FOB and CIF operations, ensuring that your industrial investments reach you on time and in perfect condition.
                  </p>
                  
                  <p>
                    We invite you to reach out to our engineering consultants to learn more about how our specific solutions can be tailored to your regional market requirements and production goals.
                  </p>
                </div>

                <div className="pt-12 border-t border-border mt-16">
                  <div className="bg-muted/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-1">
                      <h4 className="font-headline font-bold text-xl text-foreground">Interested in these blogs?</h4>
                      <p className="text-muted-foreground font-body">Get a custom quote for our machinery solutions today.</p>
                    </div>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-headline font-bold px-10">
                      <Link href="/contact">TALK TO AN ENGINEER</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
